"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

<<<<<<< HEAD
/***/ 200:
=======
/***/ 8200:
>>>>>>> 5f74d8a50bf4bf31bbb65872a370d5b37b1cbbe8
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json({
        name: 'John Doe'
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__(200));
=======
var __webpack_exports__ = (__webpack_exec__(8200));
>>>>>>> 5f74d8a50bf4bf31bbb65872a370d5b37b1cbbe8
module.exports = __webpack_exports__;

})();