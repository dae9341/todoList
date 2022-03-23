const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const vue = require("gulp-vue-file");
const concat =require("gulp-concat");
const babel = require('gulp-babel');
const vueC = require('gulp-vue-compiler');

module.exports = function(){
    return new Promise(function(resolve){
        src([dir.assets.vue+"component/test.vue",dir.assets.vue+"component/test.jsx",dir.assets.vue+"component/main.js"])
            .pipe(concat("vueComponent.js"))
            .pipe(vueC())
            .pipe(babel(
                {
                    "presets": ["@babel/preset-env"],
                    "plugins": ["transform-vue-jsx"]
                }
            ))
            .pipe(dest(dir.dist.js))
        resolve();
    }).then(function(){
        console.log("[VUE BUILD] VUE build success!")
    })
}