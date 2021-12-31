const aa = require("./gulp_modules/scss_build");
function test(cb){
    aa();
    cb();
}
exports.test = test