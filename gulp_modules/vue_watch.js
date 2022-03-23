const dir = require("./dir");
const {src,dest,watch,series} = require("gulp");
const vue_build = require("./vue_build");

module.exports = async function () {
    await vue_build();
    return new Promise(function (resolve) {
        watch([dir.assets.vue+"**/*.{jsx,js}"]).on("change",function (path, stats) {
            vue_build();
            console.log("[VUE WATCH] "+path+" changed ...");
        });
        resolve(); 
    });
};
