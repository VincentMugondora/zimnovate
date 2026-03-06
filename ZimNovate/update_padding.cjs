const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // These pages use very large padding and margins that look bad on mobile.
  
  // 1. px-12 -> px-4 sm:px-6 md:px-12
  // But wait! If we already replaced it, we shouldn't replace it again.
  // And let's not touch things like 'md:px-12' or 'lg:px-12'.
  // Using negative lookbehind would be ideal if supported, let's just use boundaries.
  content = content.replace(/(?<![:\-])\bpx-12\b/g, 'px-4 sm:px-6 md:px-12');
  
  // 2. p-[10px] -> p-2 sm:p-[10px]
  content = content.replace(/(?<![:\-])\bp-\[10px\]/g, 'p-2 sm:p-[10px]');
  
  // 3. py-16 -> py-10 sm:py-16
  content = content.replace(/(?<![:\-])\bpy-16\b/g, 'py-10 sm:py-16');
  
  // 4. rounded-[32px] -> rounded-[20px] sm:rounded-[32px]
  content = content.replace(/(?<![:\-])\brounded-\[32px\]/g, 'rounded-[20px] sm:rounded-[32px]');
  
  // 5. rounded-[28px] -> rounded-[20px] sm:rounded-[28px]
  content = content.replace(/(?<![:\-])\brounded-\[28px\]/g, 'rounded-[20px] sm:rounded-[28px]');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

directories.forEach(walkDir);
console.log('Done!');
