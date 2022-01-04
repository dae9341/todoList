const { parallel } = require('gulp');

function scss_build(cb){
    require("./gulp_modules/scss_build")();
    cb();
}

function scss_watch(cb){
    require("./gulp_modules/scss_watch")();
    cb();
}

function js_build(cb){
    require("./gulp_modules/js_build")();
    cb();
}

function js_watch(cb){
    require("./gulp_modules/js_watch")();
    cb();
}

function html_include(cb){
    require('./gulp_modules/html_include')();
    cb();
}

function html_watch(cb){
    require('./gulp_modules/html_watch')();
    cb();
}

exports.css = scss_build;
exports.cssWatch = scss_watch;

exports.js = js_build;
exports.jsWatch = js_watch;

exports.html = html_include;
exports.htmlWatch = html_watch;

exports.build = parallel(scss_build,js_build,html_include);
exports.watch = parallel(scss_watch,js_watch,html_watch);
