const puppeteer = require('puppeteer');

/**
 * Create PDF from HTML
 * @param {String} html Handlebar compiled HTML
 * @param {Object} pdfOptions Puppeteer page PDF
 * @return {Buffer} PDF Buffer
 */
const createPDF = async (html, pdfOptions) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`data:text/html,${html}`, {
    waitUntil: 'networkidle0',
  });
  const pdf = await page.pdf(pdfOptions);
  await browser.close();

  return pdf;
};

module.exports = createPDF;
