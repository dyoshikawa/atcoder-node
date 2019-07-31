"use strict";
exports.__esModule = true;
exports.main = function (r) {
    return Math.pow(r, 2) * 3;
};
var exec = function () {
    var r = require('fs').readFileSync('/dev/stdin', 'UTF-8');
    var res = exports.main(Number(r));
    console.log(res);
};
exec();
