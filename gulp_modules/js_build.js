const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const jsBuildModule = require("./js_build_module");

module.exports = function () {
    return new Promise(function (resolve) {
        jsBuildModule([dir.assets.js+"vendor/jquery.js"], "vendor.js", dir.dist.js); //벤더
        jsBuildModule([dir.assets.js+"base/*.js"], "base.js", dir.dist.js); // 베이스
        jsBuildModule([dir.assets.js+"component/**/*.js"], "component.js", dir.dist.js); // 컴포넌트 계열
        jsBuildModule([dir.assets.js+"page/**/*.js"], "page.js", dir.dist.js); // 페이지 계열
        resolve();
    }).then(function () {
        console.log("[JS BUILD] js build success!");
    });
};