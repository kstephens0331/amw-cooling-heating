#!/bin/bash
# AMW Cooling & Heating — Deploy Script
# Deploys static frontend + chatbot server to Texas server
# Run from: AMW/amw-cooling-heating/amw-cooling-heating/
# Server: stephens-code2@98.96.14.4

set -e  # Exit on any error

SERVER="stephens-code2@98.96.14.4"
REMOTE_WEB_DIR="/var/www/amw"
CHATBOT_LOCAL="../../../amw-cooling-heating-chatbot-server"
CHATBOT_REMOTE="/home/stephens-code2/apps/amw-chatbot"

echo "=== AMW Deploy Script ==="
echo "Target: $SERVER"
echo ""

# ── 1. Build frontend ─────────────────────────────────────────────────────────
echo "[1/6] Building frontend (Next.js static export)..."
npm run build

if [ ! -d "out" ]; then
  echo "ERROR: Build failed — /out directory not found"
  exit 1
fi
echo "Build complete — $(ls out | wc -l) files in /out"

# ── 2. Transfer static files ──────────────────────────────────────────────────
echo "[2/6] Transferring static files to /var/www/amw..."
ssh $SERVER "mkdir -p $REMOTE_WEB_DIR"
rsync -avz --delete out/ $SERVER:$REMOTE_WEB_DIR/
echo "Static files transferred."

# ── 3. Transfer chatbot server ────────────────────────────────────────────────
echo "[3/6] Transferring chatbot server..."
ssh $SERVER "mkdir -p $CHATBOT_REMOTE"
rsync -avz \
  --exclude='node_modules' \
  --exclude='.env' \
  --exclude='.git' \
  $CHATBOT_LOCAL/ $SERVER:$CHATBOT_REMOTE/
echo "Chatbot files transferred."

# ── 4. Install chatbot dependencies on server ─────────────────────────────────
echo "[4/6] Installing chatbot dependencies on server..."
ssh $SERVER "cd $CHATBOT_REMOTE && npm install --production"
echo "Dependencies installed."

# ── 5. Start/restart chatbot via PM2 ─────────────────────────────────────────
echo "[5/6] Starting/restarting chatbot server..."
ssh $SERVER "cd $CHATBOT_REMOTE && pm2 restart amw-chatbot 2>/dev/null || pm2 start ecosystem.config.cjs --env production"
ssh $SERVER "pm2 save"
echo "Chatbot server running."

# ── 6. Verify health endpoint ─────────────────────────────────────────────────
echo "[6/6] Verifying health endpoint..."
sleep 3
ssh $SERVER "curl -s http://localhost:3003/api/health" || echo "WARN: Health check failed — check PM2 logs"

echo ""
echo "=== Deploy Complete ==="
echo "Static files: https://amwairconditioning.com"
echo "Chatbot health: http://localhost:3003/api/health (internal)"
echo ""
echo "NOTE: If first deploy, add the Caddyfile block from nginx/amw.caddy"
echo "      to ~/Caddyfile on the server and run: docker exec caddy caddy reload --config /etc/caddy/Caddyfile"
