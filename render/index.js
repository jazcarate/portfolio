const build = require('../dist/build').default;
const fs = require('fs').promises;

const indexPath = __dirname + '/../dist/index.html';

const [root, styles] = build();

fs.readFile(indexPath)
    .then(buffer => buffer.toString())
    .then(html => html.replace('<div id="root"></div>', '<div id="root">' + root + '</div>'))
    .then(html => html.replace('<link id="style-root" rel="stylesheet">', styles))
    .then(html => fs.writeFile(indexPath, html))
    .then(() => console.log("Done!"));