const {src,dest,watch,series} = require("gulp");
const concat =require("gulp-concat");
const babel = require('gulp-babel');

module.exports=function (buildList,concatFileName,distFolder) {
    return new Promise(function (resolve) {
        src(buildList)
            .pipe(babel())
            .pipe(concat(concatFileName))
            .pipe(dest(distFolder))
        resolve();
    });
};