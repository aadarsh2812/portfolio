
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to process
const directories = [
  path.join(__dirname, 'src', 'assets'),
  path.join(__dirname, 'public')
];

// Process each directory
directories.forEach(directory => {
  processDirectory(directory);
});

function processDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory does not exist: ${directory}`);
    return;
  }

  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Error reading directory ${directory}:`, err);
      return;
    }

    // Process files and subdirectories
    entries.forEach(entry => {
      const entryPath = path.join(directory, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        // Recursively process subdirectories
        processDirectory(entryPath);
      } else if (entry.isFile()) {
        optimizeImage(entryPath);
      }
    });
  });
}

function optimizeImage(filePath) {
  const fileExt = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  
  // Skip already optimized webp files and SVGs
  if (fileExt === '.webp' || fileExt === '.svg' || fileName.includes('.min.')) {
    return;
  }

  if (['.png', '.jpg', '.jpeg'].includes(fileExt)) {
    const outputFilename = path.join(
      path.dirname(filePath),
      `${path.basename(filePath, fileExt)}.webp`
    );

    // Skip if webp already exists and is newer
    if (fs.existsSync(outputFilename)) {
      const originalStat = fs.statSync(filePath);
      const webpStat = fs.statSync(outputFilename);
      
      if (webpStat.mtimeMs > originalStat.mtimeMs) {
        console.log(`Skipping ${filePath} - webp is newer`);
        return;
      }
    }

    // Optimize to webp
    sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputFilename, (err, info) => {
        if (err) {
          console.error(`Error optimizing ${filePath}:`, err);
        } else {
          const originalSize = fs.statSync(filePath).size;
          const savings = ((originalSize - info.size) / originalSize * 100).toFixed(2);
          console.log(`Optimized ${filePath} to webp (${savings}% smaller)`);
        }
      });
      
    // Also create an optimized version of the original format
    const minFilename = path.join(
      path.dirname(filePath),
      `${path.basename(filePath, fileExt)}.min${fileExt}`
    );
    
    sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .png({ quality: 80, progressive: true, compressionLevel: 9 })
      .toFile(minFilename, (err, info) => {
        if (err) {
          console.error(`Error creating optimized ${fileExt} for ${filePath}:`, err);
        } else {
          const originalSize = fs.statSync(filePath).size;
          const savings = ((originalSize - info.size) / originalSize * 100).toFixed(2);
          console.log(`Created optimized ${fileExt} version of ${filePath} (${savings}% smaller)`);
        }
      });
  }
}
