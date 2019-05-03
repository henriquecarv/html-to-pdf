const path = require('path');
const puppeteer = require('puppeteer');

/**
 * Create PDF from HTML
 * @param {String} html Handlebar compiled HTML
 * @param {String} outputPath PDF output path
 * @param {String} fileName PDF file name
 */
const createPDF = async (html, outputPath, fileName) => {
  const options = {
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

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`data:text/html,${html}`, {
    waitUntil: 'networkidle0',
  });
  await page.pdf(options);
  await browser.close();
};

module.exports = createPDF;
