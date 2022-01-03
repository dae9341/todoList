const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const scss_build = require("./scss_build");

module.exports = async function () {
    await scss_build();
    return new Promise(function (resolve) {
        watch([dir.assets.scss+"**/*.scss"]).on("change",function (path, stats) {
            scss_build();
            console.log("[SCSS WATCH] "+path+" changed ...");
        });
        resolve();
    });
};
