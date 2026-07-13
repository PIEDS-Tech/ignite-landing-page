const { JSDOM } = require('jsdom');
const fs = require('fs');

JSDOM.fromURL('https://defiant-closet-616526.framer.app/').then(dom => {
  const document = dom.window.document;
  
  // Remove scripts and styles
  document.querySelectorAll('script, style, svg').forEach(el => el.remove());
  
  // Get all visible text blocks
  const getVisibleText = (element) => {
    let text = '';
    for (let node of element.childNodes) {
      if (node.nodeType === 3) { // Text node
        const val = node.nodeValue.trim();
        if (val) text += val + '\n';
      } else if (node.nodeType === 1) { // Element
        text += getVisibleText(node);
      }
    }
    return text;
  };

  const text = getVisibleText(document.body);
  console.log("--- Extracted Text ---");
  // Print first 2000 chars to avoid overwhelming output, or save to file
  fs.writeFileSync('extracted_site_text.txt', text);
  console.log("Text saved to extracted_site_text.txt. Preview:");
  console.log(text.substring(0, 1000));
}).catch(console.error);
