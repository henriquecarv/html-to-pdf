const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const cssPath = path.join(__dirname, './../../template/styles/style.css');
const css = fs.readFileSync(cssPath);

const svgPath = path.join(__dirname, './../../template/assets/svg/pie.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

/**
 * Compile HTML using Handlebars
 * @param {String} htmlFilePath HTML file path
 * @return {String} Compiled HTML
 */
const compileHTML = (htmlFilePath) => {
  const dataBinding = {
    items: [
      {
        name: 'item 1',
        price: 100,
      },
      {
        name: 'item 2',
        price: 200,
      },
      {
        name: 'item 3',
        price: 300,
      },
    ],
    total: 600,
    isWatermark: false,
    css,
  };

  const templateHtml = fs.readFileSync(htmlFilePath, 'utf8');

  const templateWithSVG = [templateHtml, svg].join('');

  const template = handlebars.compile(templateWithSVG);

  return template(dataBinding);
};

module.exports = compileHTML;
