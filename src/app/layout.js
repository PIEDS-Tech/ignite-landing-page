import { Inter } from "next/font/google";
import "./globals.css";
import fs from 'fs';
import path from 'path';

const inter = Inter({ subsets: ["latin"] });

// Load scripts from JSON
let scripts = [];
try {
  const scriptsPath = path.join(process.cwd(), 'scripts.json');
  const scriptsContent = fs.readFileSync(scriptsPath, 'utf8');
  scripts = JSON.parse(scriptsContent);
} catch (e) {
  console.error("Error loading scripts", e);
}

// Function to parse the raw script tag string to extract attributes and content
function parseScriptTag(scriptString) {
  const match = scriptString.match(/<script\b([^>]*)>([\s\S]*?)<\/script>/i);
  if (!match) return null;
  
  const attrsString = match[1];
  const content = match[2];
  
  const attrs = {};
  
  // Extract specific known attributes
  if (attrsString.includes('type="framer/appear"')) attrs.type = "framer/appear";
  if (attrsString.includes('type="framer/handover"')) attrs.type = "framer/handover";
  if (attrsString.includes('type="module"')) attrs.type = "module";
  
  const idMatch = attrsString.match(/id="([^"]+)"/);
  if (idMatch) attrs.id = idMatch[1];
  
  const srcMatch = attrsString.match(/src="([^"]+)"/);
  if (srcMatch) attrs.src = srcMatch[1];
  
  if (attrsString.includes('async')) attrs.async = true;
  
  const fidMatch = attrsString.match(/data-fid="([^"]+)"/);
  if (fidMatch) attrs['data-fid'] = fidMatch[1];
  
  if (attrsString.includes('data-no-nt')) attrs['data-no-nt'] = "true";
  
  const bundleMatch = attrsString.match(/data-framer-bundle="([^"]+)"/);
  if (bundleMatch) attrs['data-framer-bundle'] = bundleMatch[1];
  
  const priorityMatch = attrsString.match(/fetchPriority="([^"]+)"/i);
  if (priorityMatch) attrs.fetchPriority = priorityMatch[1];

  const appearAnimMatch = attrsString.match(/data-framer-appear-animation="([^"]+)"/);
  if (appearAnimMatch) attrs['data-framer-appear-animation'] = appearAnimMatch[1];
  
  return { attrs, content };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          body { margin: 0; padding: 0; box-sizing: border-box; }
        `}} />
      </head>
      <body className={inter.className}>
        {children}
        
        {scripts.map((scriptString, index) => {
          const parsed = parseScriptTag(scriptString);
          if (!parsed) return null;
          
          if (parsed.content.trim().length > 0) {
            return (
              <script 
                key={index} 
                {...parsed.attrs} 
                dangerouslySetInnerHTML={{ __html: parsed.content }} 
              />
            );
          } else {
            return (
              <script 
                key={index} 
                {...parsed.attrs} 
              />
            );
          }
        })}
      </body>
    </html>
  );
}
