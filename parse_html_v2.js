const { JSDOM } = require('jsdom');
const fs = require('fs');

JSDOM.fromURL('https://defiant-closet-616526.framer.app/').then(dom => {
  const document = dom.window.document;
  document.querySelectorAll('script, style, svg, noscript').forEach(el => el.remove());
  
  // Extract block elements
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, li, .framer-text');
  let texts = new Set();
  
  elements.forEach(el => {
    let text = el.textContent.replace(/\s+/g, ' ').trim();
    if(text && text.length > 2) texts.add(text);
  });
  
  fs.writeFileSync('extracted_site_text_v2.txt', Array.from(texts).join('\n'));
  console.log("Text saved to extracted_site_text_v2.txt.");
}).catch(console.error);
