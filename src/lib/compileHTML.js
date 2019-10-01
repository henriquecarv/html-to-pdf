const handlebars = require("handlebars");

/**
 * Compile HTML using Handlebars
 * @param {String} html HTML Content
 * @param {Object} dataBinding Object with data to be parsed
 * @return {String} Compiled HTML
 */
const compileHTML = (html, dataBinding) => {
  const template = handlebars.compile(html);

  return template(dataBinding);
};

module.exports = compileHTML;
