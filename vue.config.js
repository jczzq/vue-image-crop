const path = require('path');
console.log(path.resolve(__dirname, './lib')); // eslint-disable-line
module.exports = {
    outputDir: 'lib',
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
};
