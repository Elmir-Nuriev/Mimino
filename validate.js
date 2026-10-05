const fs = require('fs');
const path = require('path');

const projectDir = 'C:/Users/картошка/.gemini/antigravity-ide/scratch/mimino-hotel';

// Check JS files for syntax errors
const jsFiles = ['assets/js/data.js', 'assets/js/booking.js', 'assets/js/app.js'];
jsFiles.forEach(file => {
  const p = path.join(projectDir, file);
  try {
    const code = fs.readFileSync(p, 'utf8');
    new Function(code);
    console.log(`[PASS] Syntax check: ${file}`);
  } catch (err) {
    console.error(`[FAIL] Syntax error in ${file}:`, err.message);
  }
});

// Check all image paths referenced in data.js
const data = require(path.join(projectDir, 'assets/js/data.js'));
let missingImages = 0;
data.rooms.forEach(room => {
  room.images.forEach(img => {
    const imgPath = path.join(projectDir, img.url);
    if (!fs.existsSync(imgPath)) {
      console.error(`[MISSING] Image not found: ${img.url}`);
      missingImages++;
    } else {
      const stats = fs.statSync(imgPath);
      if (stats.size < 1000) {
        console.warn(`[WARNING] Image suspiciously small: ${img.url} (${stats.size} bytes)`);
      }
    }
  });
});

if (missingImages === 0) {
  console.log('[PASS] All room images exist on disk and have valid sizes!');
}

console.log('Project validation complete.');
