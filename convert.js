const fs = require('fs');

const html = fs.readFileSync('framer_raw.html', 'utf8');

// Extract the main content inside <body>
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log("No body found");
  process.exit(1);
}
let body = bodyMatch[1];

// Extract styles from <head>
let styles = '';
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let match;
while ((match = styleRegex.exec(html)) !== null) {
  styles += match[1] + '\n';
}

fs.writeFileSync('src/app/globals.css', styles);
console.log("Wrote styles to globals.css");

// Clean up body
// Remove scripts
body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
// Remove <noscript>
body = body.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '');

// Save the cleaned HTML body
fs.writeFileSync('cleaned_body.html', body);
console.log("Wrote cleaned body to cleaned_body.html");

