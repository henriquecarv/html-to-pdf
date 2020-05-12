# html-to-pdf-studio

Converting HTML template to PDF files

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/56a21e6eac6f4204beac78eefb05747d)](https://www.codacy.com/app/henriquecarv/html-to-pdf-studio?utm_source=github.com&utm_medium=referral&utm_content=henriquecarv/html-to-pdf-studio&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dt/html-to-pdf-studio.svg)][4]
[![npm](https://img.shields.io/npm/v/html-to-pdf-studio.svg)][4]
[![LICENSE](https://img.shields.io/github/license/henriquecarv/html-to-pdf-studio.svg)][2]
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/html-to-pdf-studio)](https://dependabot.com)

## System Requirements

- **[Node.js][3]** (version >= 10)

## Installing

- `yarn add html-to-pdf-studio`

## Usage

Compiling a [handlebars HTML template](./example/templates/index.html)

```javascript
const fs = require("fs");
const path = require("path");
const { compileHTML, createPDF } = require("html-to-pdf-studio");

const cssPath = path.join(__dirname, "./example/templates/style.css");
const css = fs.readFileSync(cssPath, "utf8");

const htmlPath = path.join(__dirname, "./example/templates/index.html");
const html = fs.readFileSync(htmlPath, "utf8");

let data = require("./example/templates/data.json");
const dataBinding = Object.assign(data, { css });

const compiledHTML = compileHTML(html, dataBinding);
```

Create PDF file from final HTML compiled with handlebars previously demonstrated

```javascript
const path = require("path");
const { createPDF } = require("html-to-pdf-studio");

const fileName = "invoide.pdf";
const outputPath = path.join(__dirname, "./example/output");

if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath);

const pdfOptions = {
  format: "A4",
  headerTemplate: "<p></p>",
  footerTemplate: "<p></p>",
  displayHeaderFooter: false,
  margin: {
    top: "40px",
    bottom: "100px",
  },
  printBackground: true,
  path: path.join(outputPath, fileName),
};

(async () => {
  await createPDF(compiledHTML, pdfOptions);
})();
```

### Inspiration

[tranchuong][5] - [html_to_pdf][6]

### License

Copylefted (c) 2019 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
[3]: https://nodejs.org
[4]: https://www.npmjs.com/package/html-to-pdf-studio
[5]: https://github.com/chuongtrh
[6]: https://github.com/chuongtrh/html_to_pdf
