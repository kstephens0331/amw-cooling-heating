# weekly-post-sync.ps1
#
# Runs once a week via Windows Task Scheduler. Publishes the next Google
# Business Profile post from scripts/post-content-queue.json, then commits
# the updated queue file (so lastPostedAt state survives and there's a git
# history of what was posted when). This does NOT touch the deployed website
# -- Google Posts live entirely on Google's side, so there is nothing to
# push for Vercel to rebuild.
#
# Same headed-browser constraint as daily-review-sync.ps1: Google blocks
# headless access to this UI, so a Chrome window will briefly and visibly
# open on this machine each time this runs. The Task Scheduler task this
# script is registered under must be set to "Run only when user is logged
# on" for the same reason.

$ErrorActionPreference = 'Stop'
$ProjectDir = 'G:\StephensCode\CustomerWebsites\AMW\amw-cooling-heating\amw-cooling-heating'
$LogFile = Join-Path $ProjectDir 'scripts\weekly-post-sync.log'

function Write-Log($msg) {
    $timestamped = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
    Add-Content -Path $LogFile -Value $timestamped -Encoding utf8
}

Set-Location $ProjectDir
Write-Log '--- weekly post sync starting ---'

try {
    $postOutput = & node scripts\post-google-update.js --headed 2>&1
    $postOutput | ForEach-Object { Write-Log $_ }

    if ($LASTEXITCODE -ne 0) {
        Write-Log "post failed with exit code $LASTEXITCODE -- queue left untouched."
        exit 1
    }

    $changed = git status --porcelain -- scripts/post-content-queue.json
    if ([string]::IsNullOrWhiteSpace($changed)) {
        Write-Log 'Queue file unchanged (unexpected for a successful run) -- nothing to commit.'
        exit 0
    }

    Write-Log 'Post published -- committing updated queue state.'
    git add scripts/post-content-queue.json
    $commitMsg = "chore: publish weekly Google post ({0})" -f (Get-Date -Format 'yyyy-MM-dd')
    git commit -m $commitMsg | ForEach-Object { Write-Log $_ }

    # See daily-review-sync.ps1 for why this isn't `git push ... 2>&1 | ...`:
    # PowerShell 5.1 + $ErrorActionPreference='Stop' turns every stderr line
    # from a native command into a terminating error, and git push writes its
    # normal success status to stderr -- which previously made a successful
    # push log as a false "ERROR" and report task failure.
    git push origin master 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Log "git push failed with exit code $LASTEXITCODE"
        exit 1
    }
    Write-Log 'Pushed queue state.'
}
catch {
    Write-Log "ERROR: $($_.Exception.Message)"
    exit 1
}

Write-Log '--- weekly post sync finished ---'
