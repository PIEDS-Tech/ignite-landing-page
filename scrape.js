const https = require('https');

https.get('https://defiant-closet-616526.framer.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Extract colors (hex, rgb, rgba)
    const hexColors = data.match(/#[0-9a-fA-F]{3,6}/g) || [];
    const rgbColors = data.match(/rgba?\([^)]+\)/g) || [];
    
    // Count occurrences
    const counts = {};
    [...hexColors, ...rgbColors].forEach(c => {
      counts[c] = (counts[c] || 0) + 1;
    });
    
    // Sort and print top 20
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20);
    console.log("Top Colors:", sorted);
    
    // Also extract text content of main headings to see sections
    const headings = data.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
    console.log("\nHeadings:", headings.slice(0, 10).map(h => h.replace(/<[^>]*>?/gm, '')));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
