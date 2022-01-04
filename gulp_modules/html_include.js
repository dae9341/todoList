const dir = require('./dir');
const {src,dest} = require('gulp');
const fileinclude = require('gulp-file-include');

module.exports = function () {
    return new Promise(function (resolve) {
        src(['./assets/html/page/**/*.html'])
            .pipe(fileinclude({
                prefix:'@@',
                basepath:'@file'
            }))
            .pipe(dest(dir.dist.root));
        resolve();
    })
};