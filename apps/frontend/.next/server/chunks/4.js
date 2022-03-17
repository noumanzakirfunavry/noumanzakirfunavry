"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @typescript-eslint/no-explicit-any */ 

const notify = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Success Notification !", {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.POSITION.TOP_RIGHT
    })
;
//const baseURL = 'http://157.90.67.186:3001/'
const GetData = async (url, params, method, displayMessage)=>{
    const data = {
        data: null,
        error: null
    };
    const client = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: "",
        headers: {
        },
        data: params
    });
    if (method === 'post') {
        await client.post(url, params).then((res)=>{
            data.data = res.data;
        }).catch((error)=>{
            if (error.response) {
                data.error = {
                    message: error.response.data.message
                };
            } else if (error.request) {
                data.error = {
                    message: error.message
                };
            } else {
                data.error = {
                    message: error.message
                };
            }
        });
    } else if (method === 'get') {
        displayMessage && notify();
        await client.get(url, {
            params: {
                ...Object.keys(params).length && {
                    ...params
                }
            }
        }).then((res)=>{
            data.data = res.data;
        }).catch((error)=>{
            if (error.response) {
                data.error = {
                    message: error.response.data.message
                };
            } else if (error.request) {
                data.error = {
                    message: "Please check your internet connection or consult technical team"
                } //error.message
                ;
            } else {
                data.error = {
                    message: "Please check your internet connection or consult technical team"
                } //error.message
                ;
            }
        });
    }
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetData);


/***/ })

};
;