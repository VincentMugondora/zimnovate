const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace 'px-12 py-16 md:px-16 md:py-20 lg:px-20' style paddings with more responsive ones
  // We want to change 'px-12 ' or 'px-12' (when at the start/end of a class string) to 'px-4 sm:px-6 md:px-12 '
  content = content.replace(/px-12(.*?)md:px-16/g, 'px-4 sm:px-6 md:px-12$1md:px-16');
  
  // Also globally replace 'px-12' that wasn't caught by the above, but avoid breaking something like 'px-120'
  content = content.replace(/\bpx-12\b/g, 'px-4 sm:px-6 md:px-12');
  
  // Some pages have p-[10px] hardcoded, we should change to p-2 sm:p-[10px]
  content = content.replace(/\bp-\[10px\]/g, 'p-2 sm:p-[10px]');
  
  // Some pages have py-16 which might be too tall on mobile
  content = content.replace(/\bpy-16\b/g, 'py-10 sm:py-16');

  // Some components might use rounded-[32px] or rounded-[28px]
  content = content.replace(/\brounded-\[32px\]/g, 'rounded-[20px] sm:rounded-[32px]');
  content = content.replace(/\brounded-\[28px\]/g, 'rounded-[20px] sm:rounded-[28px]');

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
