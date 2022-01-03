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


exports.css = scss_build;
exports.cssWatch = scss_watch;

exports.js = js_build;
exports.jsWatch = js_watch;