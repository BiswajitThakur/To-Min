const langJs = require('./lang/js');
const langCss = require('./lang/css');
const langHtml = require('./lang/html');

module.exports = {
    toMinJs : langJs.index,
    toMinCss : langCss.index,
    toMinHtml : langHtml.index,
};
