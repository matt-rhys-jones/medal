const fsExtra = require('fs-extra');
const path = require('path');

const sourceFile = path.resolve('config', 'deploy.dist.js');
const destFile = path.resolve('config', 'deploy.js');

try {
  fsExtra.accessSync(destFile)
} catch (e) {
  fsExtra.copySync(sourceFile, destFile);
}

fsExtra.mkdirsSync(path.resolve('articles', 'draft'));
fsExtra.mkdirsSync(path.resolve('articles', 'publish'));
