const fs = require('fs');
const path = require('path');
const compileHTML = require('./../src/lib/compileHTML');
const createPDF = require('./../src/lib/createPDF');

const cssPath = path.join(__dirname, './templates/style.css');
const css = fs.readFileSync(cssPath, 'utf8');

const htmlPath = path.join(__dirname, './templates/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const data = require('./templates/data.json');
const dataBinding = Object.assign(data, {css});

const compiledHTML = compileHTML(html, dataBinding);

const fileName = 'example.pdf';
const outputPath = path.join(__dirname, './output');

if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

const pdfOptions = {
  format: 'A4',
  headerTemplate: '<p></p>',
  footerTemplate: '<p></p>',
  displayHeaderFooter: false,
  margin: {
    top: '40px',
    bottom: '100px',
  },
  printBackground: true,
  path: path.join(outputPath, fileName),
};

(async () => {
  await createPDF(compiledHTML, pdfOptions);
})();
