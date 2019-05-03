# html-to-pdf-studio

Converting HTML template to PDF files

[![Build Status](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_apis/build/status/henriquecarv.html-to-pdf-studio?branchName=master)](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_build/latest?definitionId=12)
[![npm](https://img.shields.io/npm/dt/html-to-pdf-studio.svg)][4]
[![npm](https://img.shields.io/npm/v/html-to-pdf-studio.svg)][4]
[![LICENSE](https://img.shields.io/github/license/henriquecarv/html-to-pdf-studio.svg)][2]
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/html-to-pdf-studio)](https://dependabot.com)

## System Requirements

- **[Node.js][3]** (version >= 10)

## Installing

- `npm install html-to-pdf-studio`

## Usage

Compiling a [handlebars HTML template](./templates/invoice.hbs)

```javascript
const fs = require("fs");
const path = require("path");
const { compileHTML } = require("html-to-pdf-studio");

const cssPath = path.join(__dirname, "./templates/style.css");
const css = fs.readFileSync(cssPath);

const htmlPath = path.join(__dirname, "./templates/invoice.hbs");
const html = fs.readFileSync(htmlPath);

let data = require("./templates/data.json");
const dataBinding = Object.assign(data, { css });

const compiledHTML = compileHTML(html, dataBinding);
```

Create PDF file from final HTML compiled with handlebars previously demonstrated

```javascript
const path = require("path");
const { createPDF } = require("html-to-pdf-studio");

const fileName = "invoide.pdf";
const outputPath = path.join(__dirname, "./output");

const pdfOptions = {
	format: "A4",
	headerTemplate: "<p></p>",
	footerTemplate: "<p></p>",
	displayHeaderFooter: false,
	margin: {
		top: "40px",
		bottom: "100px"
	},
	printBackground: true,
	path: path.join(outputPath, fileName)
};

(async () => {
	await createPDF(compiledHTML, pdfOptions);
})();
```

### Inspiration

[tranchuong][6] - [html_to_pdf][7]

### License

Copylefted (c) 2019 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
[3]: https://nodejs.org
[4]: https://www.npmjs.com/package/html-to-pdf-studio
[5]: https://dependabot.com
[6]: https://github.com/chuongtrh
[7]: https://github.com/chuongtrh/html_to_pdf
