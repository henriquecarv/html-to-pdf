const fs = require('fs');
const path = require('path');

const compileHTML = require('./utils/compileHTML');
const createPDF = require('./utils/createPDF');

(async () => {
  const htmlFilePath = path.join(__dirname, './../template/invoice.html');
  const finalHTML = compileHTML(htmlFilePath);

  const outputPath = path.join(__dirname, './../output');

  if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

  await createPDF(finalHTML, outputPath, 'invoice.pdf');
})();
