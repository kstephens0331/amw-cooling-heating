# daily-review-sync.ps1
#
# Runs once a day via Windows Task Scheduler. Refreshes AMW's Google review
# data (src/data/googleReviews.json) and, if anything changed, commits and
# pushes so Vercel auto-deploys the update.
#
# Google's headless-browser detection means this MUST run in headed mode
# (chromium.launchPersistentContext({ headless: false })) -- a Chrome window
# will briefly and visibly open on this machine each time this runs. That's
# a real constraint, not a bug: headless requests get served a deliberately
# reduced Maps view Google enforces regardless of what's tried around it.
# The Task Scheduler task this script is registered under must therefore be
# set to "Run only when user is logged on" (not "whether user is logged on
# or not"), since the latter runs in a session with no desktop and a headed
# browser can't open a window there.

$ErrorActionPreference = 'Stop'
$ProjectDir = 'G:\StephensCode\CustomerWebsites\AMW\amw-cooling-heating\amw-cooling-heating'
$LogFile = Join-Path $ProjectDir 'scripts\daily-review-sync.log'

function Write-Log($msg) {
    $timestamped = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
    Add-Content -Path $LogFile -Value $timestamped -Encoding utf8
}

Set-Location $ProjectDir
Write-Log '--- daily review sync starting ---'

try {
    $scrapeOutput = & node scripts\scrape-google-reviews.js --headed 2>&1
    $scrapeOutput | ForEach-Object { Write-Log $_ }

    if ($LASTEXITCODE -ne 0) {
        Write-Log "scrape failed with exit code $LASTEXITCODE -- leaving existing data untouched, nothing to deploy."
        exit 1
    }

    $changed = git status --porcelain -- src/data/googleReviews.json
    if ([string]::IsNullOrWhiteSpace($changed)) {
        Write-Log 'No change in review data (count and reviews are identical to last run). Nothing to deploy.'
        exit 0
    }

    Write-Log 'Review data changed -- committing and pushing.'
    git add src/data/googleReviews.json
    $commitMsg = "chore: refresh Google reviews data ({0})" -f (Get-Date -Format 'yyyy-MM-dd')
    git commit -m $commitMsg | ForEach-Object { Write-Log $_ }
    git push origin master 2>&1 | ForEach-Object { Write-Log $_ }
    Write-Log 'Pushed -- Vercel will auto-deploy.'
}
catch {
    Write-Log "ERROR: $($_.Exception.Message)"
    exit 1
}

Write-Log '--- daily review sync finished ---'
