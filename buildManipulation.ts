// buildManipulation.ts
import { readFileSync, writeFileSync } from "fs";

// Read the generated HTML file
const htmlFile = readFileSync("./out/index.html", "utf8");

// Insert a script tag to link your custom script file
const modifiedHtml = htmlFile.replace(
  "</body>",
  '<script type="module" src="popup.js"></script></body>'
);

// Write the modified HTML file back
writeFileSync("./out/index.html", modifiedHtml, "utf8");

console.log("Build process completed successfully!");
