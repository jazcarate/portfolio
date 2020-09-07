const build = require('../dist/build').default;
const fs = require('fs').promises;

const indexPath = __dirname + '/../dist/index.html';

fs.readFile(indexPath)
    .then(buffer => buffer.toString())
    .then(html => html.replace('<div id="root"></div>', '<div id="root">' + build() + '</div>'))
    .then(html => fs.writeFile(indexPath, html))
    .then(() => console.log("Done!"));