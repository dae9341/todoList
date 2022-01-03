const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

module.exports = function () {
    return new Promise(function (resolve) {
        src([dir.assets.scss+"*.scss"])
            .pipe(sass().on('error', sass.logError))
            .pipe(dest(dir.dist.css))
            .on("end",function () {
                console.log("[SCSS BUILD] scss build success!");
            });
        resolve();
    })
};