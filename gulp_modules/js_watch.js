const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const jsBuild = require("./js_build");

module.exports = async function () {
    await jsBuild();
    return new Promise(function (resolve) {
        const watch_list = [dir.assets.js+"base/**/*.js",dir.assets.js+"component/**/*.js",dir.assets.js+"page/**/*.js"];
        watch(watch_list).on("change",function (path,stats) {
            jsBuild();
            console.log("[JS WATCH] "+path+" changed ...");
        });
        resolve();
    });
};