exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 2075:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebarBanner": "sidebanner_sidebarBanner__yvzDv",
	"smallBanner": "sidebanner_smallBanner__lXwev"
};


/***/ }),

/***/ 4863:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "sidelist_sidebar__Nuc9n",
	"themeTitle": "sidelist_themeTitle__1gobu",
	"listBody": "sidelist_listBody__JvDkW",
	"sideDotList": "sidelist_sideDotList__hUN6M",
	"sidenumberList": "sidelist_sidenumberList__d8ptP",
	"sidesimpleList": "sidelist_sidesimpleList__CD3XZ"
};


/***/ }),

/***/ 7194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SideBar_SideBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./styles/images/small-ad.jpg
/* harmony default export */ const small_ad = ({"src":"/_next/static/media/small-ad.b282613e.jpg","height":250,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAIAV/8QAHBAAAQQDAQAAAAAAAAAAAAAAAgEDBBIABTET/9oACAEBAAE/AIO2bmsp4i6hRxsli5buf//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAgEBPwBYf//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMR/9oACAEDAQE/ANVbvWf/2Q=="});
;// CONCATENATED MODULE: ./styles/images/ad-height.jpg
/* harmony default export */ const ad_height = ({"src":"/_next/static/media/ad-height.7852ae6e.jpg","height":600,"width":300,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKCv/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIDEgAEESNB/9oACAEBAAE/AEpsqSkwoG61GagHLj3X/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADSF/8QAGREAAQUAAAAAAAAAAAAAAAAAAgABEiFB/9oACAEDAQE/ACEZPWr/2Q=="});
// EXTERNAL MODULE: ./components/Shared/SideBar/SideBanner/sidebanner.module.css
var sidebanner_module = __webpack_require__(2075);
var sidebanner_module_default = /*#__PURE__*/__webpack_require__.n(sidebanner_module);
;// CONCATENATED MODULE: ./components/Shared/SideBar/SideBanner/SideBanner.tsx




const SideBanner = ({ size  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (sidebanner_module_default()).sidebarBanner,
            children: [
                size === 'Small' && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (sidebanner_module_default()).smallBanner,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-fluid",
                            src: small_ad.src
                        })
                    })
                }),
                size === 'Large' && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (sidebanner_module_default()).largeBanner,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img-fluid",
                            src: ad_height.src
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const SideBanner_SideBanner = (SideBanner);

// EXTERNAL MODULE: ./components/Shared/SideBar/SideList/sidelist.module.css
var sidelist_module = __webpack_require__(4863);
var sidelist_module_default = /*#__PURE__*/__webpack_require__.n(sidelist_module);
// EXTERNAL MODULE: ./components/Title/index.tsx
var Title = __webpack_require__(501);
;// CONCATENATED MODULE: ./components/Shared/SideBar/SideList/SideList.tsx



const SideList = ({ type  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (sidelist_module_default()).sidebar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                    styles: (sidelist_module_default()).themeTitle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "آخر الأخبار"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (sidelist_module_default()).listBody,
                    children: [
                        type === "numbered" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (sidelist_module_default()).sidenumberList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/newsDetails",
                                            children: "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                        })
                                    }, '12'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                        })
                                    }, '343'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                        })
                                    }, '675'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                        })
                                    }, '34543'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                        })
                                    }, 'fdw43'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                        })
                                    }, 'fd43re3f'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                        })
                                    }, 'sdf43t'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                        })
                                    }, 'sdf54')
                                ]
                            })
                        }),
                        type === "simple" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (sidelist_module_default()).sidesimpleList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "/newsDetails",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 دقائق"
                                                }),
                                                "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                            ]
                                        })
                                    }, '12'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "قبل 30 دقيقة"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, '343'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 1 ساعة"
                                                }),
                                                "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                            ]
                                        })
                                    }, '675'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 ساعات"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, '34543'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 دقائق"
                                                }),
                                                "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                            ]
                                        })
                                    }, 'fdw43'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "قبل 30 دقيقة"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, 'fd43re3f'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 1 ساعة"
                                                }),
                                                "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                            ]
                                        })
                                    }, 'sdf43t'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 ساعات"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, 'sdf54')
                                ]
                            })
                        }),
                        type === 'dotList' && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (sidelist_module_default()).sideDotList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "/newsDetails",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 دقائق"
                                                }),
                                                "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                            ]
                                        })
                                    }, '12'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "قبل 30 دقيقة"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, '343'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 1 ساعة"
                                                }),
                                                "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                            ]
                                        })
                                    }, '675'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 ساعات"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, '34543'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 دقائق"
                                                }),
                                                "أسعار النفط تصعد بأكثر من 1% بعد رفع السعودية لأسعار الخام لآسيا بأك بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة ثر من المتوقع"
                                            ]
                                        })
                                    }, 'fdw43'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "قبل 30 دقيقة"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, 'fd43re3f'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 1 ساعة"
                                                }),
                                                "بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة"
                                            ]
                                        })
                                    }, 'sdf43t'),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "منذ 5 ساعات"
                                                }),
                                                "النفط يصعد لأعلى مستوى في أسبوعين حيث أدى رفع حظر السفر الأميركي إلى زيادة الطلب"
                                            ]
                                        })
                                    }, 'sdf54')
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const SideList_SideList = (SideList);

;// CONCATENATED MODULE: ./components/Shared/SideBar/SideBar.tsx



const SideBar = ({ sideBarSequence  })=>{
    sideBarSequence.sort((a, b)=>{
        return a.position < b.position ? -1 : a.position > b.position ? 1 : 0;
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: sideBarSequence.map((sequence)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    sequence.componentType === 'numbered' && /*#__PURE__*/ jsx_runtime_.jsx(SideList_SideList, {
                        type: "numbered"
                    }, 'numbered'),
                    sequence.componentType === 'SmallBanner' && /*#__PURE__*/ jsx_runtime_.jsx(SideBanner_SideBanner, {
                        size: "Small"
                    }, 'Small'),
                    sequence.componentType === 'simple' && /*#__PURE__*/ jsx_runtime_.jsx(SideList_SideList, {
                        type: "simple"
                    }, 'simple'),
                    sequence.componentType === 'dotList' && /*#__PURE__*/ jsx_runtime_.jsx(SideList_SideList, {
                        type: "dotList"
                    }, 'dotList'),
                    sequence.componentType === 'LargeBanner' && /*#__PURE__*/ jsx_runtime_.jsx(SideBanner_SideBanner, {
                        size: "Large"
                    }, 'Large')
                ]
            }, sequence.componentType));
        })
    }));
};
/* harmony default export */ const SideBar_SideBar = (SideBar);


/***/ }),

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Title = ({ styles , children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: styles,
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ })

};
;