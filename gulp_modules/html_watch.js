const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const html_include = require("./html_include");

module.exports = async function () {
    await html_include();
    return new Promise(function (resolve) {
        watch(['./assets/html/**/*.html']).on("change",function (path) {
            html_include();
            console.log("[HTML WATCH] "+path+" changed ...");
        });
        resolve();
    });
};