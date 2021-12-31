const {src,dest,watch,series} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

const assets = "./assets/"
const scss = assets+"scss/"

const public = "./public/"
const css = public+"css/"
const js = public+"js/"


module.exports = function () {
    return new Promise(function (resolve) {
        src([scss+"*.scss"])
            .pipe(sass().on('error', sass.logError))
            .pipe(dest(css))
            .on("end",function () {
                console.log("scss build end!");
            })
        resolve();
    })
};