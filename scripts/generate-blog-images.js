/**
 * Generate blog thumbnail images using Gemini Flash 2.5 image generation.
 * Replaces logo-only thumbnails and fixes garbled text images.
 *
 * Usage: node scripts/generate-blog-images.js
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('Set GEMINI_API_KEY in the environment before running this script.');
  process.exit(1);
}
const BLOG_DIR = path.join(__dirname, '..', 'public', 'blog');
const INDEX_PATH = path.join(__dirname, '..', 'public', 'data', 'blog', 'index.json');

// Posts that need new images
const NEEDS_IMAGE = [
  { slug: 'verify-hvac-contractor-license-texas', prompt: 'Professional HVAC technician showing a Texas TDLR license card to a homeowner at front door, realistic photo style, warm lighting, residential setting in Texas' },
  { slug: 'dryer-vent-fire-prevention', prompt: 'Close-up of a dryer vent being cleaned with a professional brush, lint buildup visible, safety and home maintenance theme, realistic photo, warm residential laundry room' },
  { slug: 'improve-indoor-air-quality-home', prompt: 'Modern living room with clean air, a family breathing comfortably, air purifier visible, sunlight through windows, healthy home environment, realistic photo' },
  { slug: 'get-hvac-ready-texas-summer', prompt: 'HVAC technician inspecting an outdoor AC condenser unit in hot Texas summer, clear blue sky, residential home in background, professional workwear, realistic photo' },
  { slug: 'benefits-hvac-maintenance-plan', prompt: 'Smiling HVAC technician performing routine maintenance on a furnace, clipboard with checklist, clean basement utility room, professional and trustworthy appearance, realistic photo' },
  { slug: 'cost-replace-ac-unit-conroe-tx', prompt: 'New modern AC condenser unit installed outside a Texas home, professional installation, clean setup, residential neighborhood, blue sky, realistic photo' },
  { slug: 'ac-blowing-warm-air-what-to-do', prompt: 'Frustrated homeowner standing near an air vent feeling warm air, hand near vent, summer heat visible through window, residential living room, realistic photo' },
  { slug: 'hvac-maintenance-checklist-homeowners', prompt: 'Organized HVAC maintenance tools laid out next to a furnace filter, wrench, multimeter, clean filter beside dirty filter comparison, realistic photo' },
  { slug: 'how-long-ac-unit-last-texas', prompt: 'Side by side comparison of old rusty AC unit next to a modern new AC unit outside a Texas home, showing age difference, residential setting, realistic photo' },
  { slug: 'best-thermostat-settings-summer-texas', prompt: 'Modern smart thermostat on wall showing 78 degrees, comfortable living room in background, Texas summer light through windows, energy efficient home, realistic photo' },
  { slug: 'signs-ac-needs-repair', prompt: 'HVAC technician diagnosing an AC unit with tools and gauges, concerned homeowner watching, residential outdoor setting, professional service call, realistic photo' },
  { slug: 'how-often-service-ac-texas', prompt: 'Calendar on wall with HVAC maintenance dates circled, AC unit visible in background, organized home maintenance planning, realistic photo' },
  // Fix garbled text image
  { slug: 'smart-thermostats-conroe', prompt: 'Modern Nest smart thermostat on a clean white wall showing 72 degrees, comfortable contemporary living room, energy savings concept, warm and inviting home, realistic photo' },
];

async function generateImage(prompt, outputPath) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${GEMINI_API_KEY}`;

  const body = JSON.stringify({
    contents: [{
      parts: [{
        text: `Generate a high-quality, photorealistic blog thumbnail image (landscape orientation, 1200x630 pixels aspect ratio). No text overlays, no watermarks, no logos. Clean professional photo only.\n\nSubject: ${prompt}`
      }]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
    }
  });

  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);

          if (parsed.error) {
            reject(new Error(parsed.error.message));
            return;
          }

          // Look for inline image data in the response
          const candidates = parsed.candidates || [];
          for (const candidate of candidates) {
            const parts = candidate.content?.parts || [];
            for (const part of parts) {
              if (part.inlineData) {
                const imageData = Buffer.from(part.inlineData.data, 'base64');
                fs.writeFileSync(outputPath, imageData);
                console.log(`  SAVED: ${path.basename(outputPath)} (${(imageData.length / 1024).toFixed(0)} KB)`);
                resolve(true);
                return;
              }
            }
          }

          // If no image returned, try Imagen model instead
          reject(new Error('No image in response. Model may not support image generation.'));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function tryImagenModel(prompt, outputPath) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`;

  const body = JSON.stringify({
    instances: [{ prompt: `High-quality photorealistic blog thumbnail, landscape 1200x630, no text overlays. ${prompt}` }],
    parameters: {
      sampleCount: 1,
      aspectRatio: '16:9',
    }
  });

  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(parsed.error.message));
            return;
          }
          const predictions = parsed.predictions || [];
          if (predictions.length > 0 && predictions[0].bytesBase64Encoded) {
            const imageData = Buffer.from(predictions[0].bytesBase64Encoded, 'base64');
            fs.writeFileSync(outputPath, imageData);
            console.log(`  SAVED (Imagen): ${path.basename(outputPath)} (${(imageData.length / 1024).toFixed(0)} KB)`);
            resolve(true);
            return;
          }
          reject(new Error('No image in Imagen response'));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  // Ensure blog image directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  console.log(`Generating ${NEEDS_IMAGE.length} blog thumbnail images...\n`);

  let success = 0;
  let failed = 0;

  for (const item of NEEDS_IMAGE) {
    const outputPath = path.join(BLOG_DIR, `${item.slug}.webp`);
    console.log(`[${success + failed + 1}/${NEEDS_IMAGE.length}] ${item.slug}`);

    try {
      await generateImage(item.prompt, outputPath);
      success++;
    } catch (err) {
      console.log(`  Gemini Flash failed: ${err.message}`);
      // Try Imagen as fallback
      try {
        await tryImagenModel(item.prompt, outputPath);
        success++;
      } catch (err2) {
        console.log(`  Imagen also failed: ${err2.message}`);
        failed++;
      }
    }

    // Rate limit: wait 2s between requests
    await new Promise(r => setTimeout(r, 2000));
  }

  // Update index.json to point to new images
  if (success > 0) {
    console.log('\nUpdating index.json...');
    const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
    for (const post of index) {
      const generated = NEEDS_IMAGE.find(n => n.slug === post.slug);
      if (generated) {
        const imgPath = path.join(BLOG_DIR, `${post.slug}.webp`);
        if (fs.existsSync(imgPath)) {
          post.image = `/blog/${post.slug}.webp`;
        }
      }
    }
    fs.writeFileSync(INDEX_PATH, JSON.stringify(index, null, 2), 'utf8');
    console.log('index.json updated.');
  }

  console.log(`\nDone. Success: ${success}, Failed: ${failed}`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
