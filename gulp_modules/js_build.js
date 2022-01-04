const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const jsBuildModule = require("./js_build_module");
const vendorList = [
    dir.assets.js+"vendor/jquery.js",
    dir.assets.js+"vendor/firebase_app_8.6.5.js",
    dir.assets.js+"vendor/firebase_analytics_8.6.5.js",
    dir.assets.js+"vendor/firebase_database_8.6.5.js"
];

module.exports = function () {
    return new Promise(function (resolve) {
        jsBuildModule(vendorList, "vendor.js", dir.dist.js); //벤더
        jsBuildModule([dir.assets.js+"base/*.js"], "base.js", dir.dist.js); // 베이스
        jsBuildModule([dir.assets.js+"component/**/*.js"], "component.js", dir.dist.js); // 컴포넌트 계열
        jsBuildModule([dir.assets.js+"page/**/*.js"], "page.js", dir.dist.js); // 페이지 계열
        resolve();
    }).then(function () {
        console.log("[JS BUILD] js build success!");
    });
};