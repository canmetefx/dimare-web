#!/usr/bin/env bash
# Dimare Ad Creative Reformat Pipeline
# -------------------------------------
# Takes master video files from /Tüm Videolar/ and outputs 3 platform-ready
# formats each:
#   - 16:9 1920x1080 ≤30s  (Google/YouTube)
#   - 9:16 1080x1920 ≤60s  (Reels / Shorts / Stories)
#   - 1:1  1080x1080 ≤15s  (Meta Feed / Instagram post)
#
# Prereq: ffmpeg (`brew install ffmpeg`)
# Usage:  bash scripts/reformat-ads.sh
# Output: ~/Desktop/dimare-ads-out/<master-name>/{16x9,9x16,1x1}.mp4
#
# Smart-crop strategy: center-crop for 1:1, scale-and-pad for 9:16 if source
# is horizontal (keeps the subject readable instead of brutal cropping).

set -euo pipefail

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "✗ ffmpeg not found. Install:  brew install ffmpeg" >&2
  exit 1
fi

SRC_DIR="/Volumes/M-SSD-1/DiMare 2025/Tüm Videolar"
OUT_ROOT="$HOME/Desktop/dimare-ads-out"
mkdir -p "$OUT_ROOT"

# Masters selected for initial campaign (see ad-creative-index.md)
MASTERS=(
  "DIMARE_2025 - SoBeach_2dk.mp4"
  "NG-Phaselis-Balıkv3.mp4"
  "NG-Reels-1.2.mp4"
  "NG-Reels-2.mp4"
  "Vogue - Top Perde1.mp4"
  "Vogue - Şemsiye - 1.mp4"
  "2-REGNUM PERDE.mp4"
  "SO_PERDE-1.mp4"
  "SO_WELCOME.mp4"
  "beach_umbrellas1.mp4"
)

encode_16x9() {
  local in="$1" out="$2"
  ffmpeg -y -i "$in" -t 30 \
    -vf "scale='if(gt(a,16/9),1920,-2)':'if(gt(a,16/9),-2,1080)',pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black,setsar=1" \
    -r 30 -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p \
    -c:a aac -b:a 128k -movflags +faststart "$out"
}

encode_9x16() {
  local in="$1" out="$2"
  # Prefer center-crop from horizontal source to keep motion intact
  ffmpeg -y -i "$in" -t 60 \
    -vf "scale='if(gt(a,9/16),-2,1080)':'if(gt(a,9/16),1920,-2)',crop=1080:1920,setsar=1" \
    -r 30 -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p \
    -c:a aac -b:a 128k -movflags +faststart "$out"
}

encode_1x1() {
  local in="$1" out="$2"
  ffmpeg -y -i "$in" -t 15 \
    -vf "scale='if(gt(a,1),-2,1080)':'if(gt(a,1),1080,-2)',crop=1080:1080,setsar=1" \
    -r 30 -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p \
    -c:a aac -b:a 128k -movflags +faststart "$out"
}

for m in "${MASTERS[@]}"; do
  src="$SRC_DIR/$m"
  if [ ! -f "$src" ]; then
    echo "  ⤼ skip (missing): $m"
    continue
  fi

  # Safe output dir name (strip extension, normalize spaces/punctuation)
  base="${m%.*}"
  safe="$(echo "$base" | tr ' -' '__' | tr -cd 'A-Za-z0-9_çğıöşüÇĞİÖŞÜ')"
  dir="$OUT_ROOT/$safe"
  mkdir -p "$dir"

  echo "→ $m"
  echo "  · 16x9..." && encode_16x9 "$src" "$dir/16x9.mp4" 2>/dev/null
  echo "  · 9x16..." && encode_9x16 "$src" "$dir/9x16.mp4" 2>/dev/null
  echo "  · 1x1 ..." && encode_1x1 "$src" "$dir/1x1.mp4"  2>/dev/null
  echo "  ✓ $dir"
done

echo
echo "✓ Output:  $OUT_ROOT"
echo "  Upload 16x9 → YouTube / Google Ads Video"
echo "  Upload 9x16 → Meta Reels, IG Reels, YT Shorts, Stories"
echo "  Upload 1x1  → Meta Feed, Instagram main feed"
