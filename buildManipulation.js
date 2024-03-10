"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// buildManipulation.ts
var fs_1 = require("fs");
// Read the generated HTML file
var htmlFile = (0, fs_1.readFileSync)("./out/index.html", "utf8");
// Insert a script tag to link your custom script file
var modifiedHtml = htmlFile.replace("</body>", '<script type="module" src="popup.js"></script></body>');
// Write the modified HTML file back
(0, fs_1.writeFileSync)("./out/index.html", modifiedHtml, "utf8");
console.log("Build process completed successfully!");
