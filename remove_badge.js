const fs = require('fs');
let content = fs.readFileSync('src/data/framerContent.js', 'utf8');

// The framer badge is usually added via a script, but sometimes it's an element.
// Let's check for "Made in Framer"
if (content.includes("Made in Framer")) {
  console.log("Found 'Made in Framer'");
}

// Check for "__framer-badge"
if (content.includes("__framer-badge")) {
  console.log("Found '__framer-badge'");
}

