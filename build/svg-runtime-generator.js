const { generateSpritePlaceholder } = require('svg-sprite-loader/lib/utils');

module.exports = function runtimeGenerator({ symbol }) {
  // this will be replaced with real symbol url, e.g. sprite.svg#twitter-usage
  const spritePlaceholder = generateSpritePlaceholder(symbol.request.file);
  console.log('symbol.request.file', symbol.request.file);
  console.log('spritePlaceholder', spritePlaceholder);
  const viewBoxParts = symbol.viewBox.split(' ');
  const width = parseInt(viewBoxParts[2], 10);
  const height = parseInt(viewBoxParts[3], 10);

  const data = {
    width,
    height,
    viewBox: symbol.viewBox,
    url: spritePlaceholder
  };

  const stringified = JSON.stringify(data, null, 2);

  return `export default ${stringified}`;
};
