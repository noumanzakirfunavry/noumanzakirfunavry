(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5523:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__eH5m2",
	"footerTop": "footer_footerTop__ojwnt",
	"footerSocial": "footer_footerSocial__jAxyW",
	"footerLogo": "footer_footerLogo__xJgu5",
	"clearfix": "footer_clearfix__ZQc6v",
	"footerLink": "footer_footerLink__Jti9y",
	"footerBottom": "footer_footerBottom__yUmY5",
	"searchBox": "footer_searchBox__7cQUP"
};


/***/ }),

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cnbc-logo.6d2df6ce.svg","height":71,"width":74});

/***/ }),

/***/ 6503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search.9571bd97.svg","height":20,"width":21});

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


/***/ }),

/***/ 4028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ GTM_ID),
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
const GTM_ID = 'G-BGX8ER4Y2J';
const pageview = (url)=>{
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'pageview',
        page: url
    });
} // old
 // export const GA_TRACKING_ID = 'G-BGX8ER4Y2J'
 // // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 // export const pageview = (url) => {
 //   window.gtag('config', GA_TRACKING_ID, {
 //     page_path: url,
 //   })
 // }
 // // https://developers.google.com/analytics/devguides/collection/gtagjs/events
 // export const event = ({ action, category, label, value }) => {
 //   window.gtag('event', action, {
 //     event_category: category,
 //     event_label: label,
 //     value: value,
 //   })
 // }
;


/***/ }),

/***/ 6766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(5332);
// EXTERNAL MODULE: ../../node_modules/react-loading-skeleton/dist/skeleton.css
var skeleton = __webpack_require__(2048);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Shared/AccountModal/AccountModal.tsx

const AccountModal = ({ modalId , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "modal fade signinmodal",
            id: modalId,
            tabIndex: -1,
            "aria-labelledby": "accountModalLabel",
            "aria-hidden": "true",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-header",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn-close",
                                "data-bs-dismiss": "modal",
                                "aria-label": "Close"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "modal-body",
                            children: children
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const AccountModal_AccountModal = (AccountModal);

// EXTERNAL MODULE: ./styles/images/cnbc-logo.svg
var cnbc_logo = __webpack_require__(1424);
;// CONCATENATED MODULE: ./components/RegistrationStep2/RegistrationStep2.tsx



const RegistrationStep2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(AccountModal_AccountModal, {
            modalId: 'registrationStep2',
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row mb-4 flex-row-reverse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-3 text-sm-start text-center mb-3 mb-sm-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "img-fluid",
                                    style: {
                                        width: '86px'
                                    },
                                    src: cnbc_logo/* default.src */.Z.src
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-9 text-muted pt-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        "لقد قمت بإنشاء حساب CNBC Arabia بنجاح. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-bold",
                                            children: "johnsmith@email.com"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-primary mb-3 text-bold",
                        children: "دعنا نعرف المزيد عنك لمساعدتنا على خدمتك بشكل أفضل"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-3 customSelect",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select text-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "1",
                                        children: "One"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2",
                                        children: "Two"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "3",
                                        children: "Three"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "بلد"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-3 customSelect",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select text-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "1",
                                        children: "One"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2",
                                        children: "Two"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "3",
                                        children: "Three"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "عنوان وظيفي"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-3 customSelect",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select text-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "1",
                                        children: "One"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2",
                                        children: "Two"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "3",
                                        children: "Three"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "العمل"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-4 customSelect",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select text-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "1",
                                        children: "One"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "2",
                                        children: "Two"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "3",
                                        children: "Three"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "سنة الولادة"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-primary mb-3 btn-sm-wide",
                                    children: "حفظ"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6 text-start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-outline-primary mb-3 btn-sm-wide",
                                    "data-bs-dismiss": "modal",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#registrationStep2",
                                    children: "تخطي لاحقًا"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "text-muted mb-0",
                            children: "سياسة خاصة"
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const RegistrationStep2_RegistrationStep2 = (RegistrationStep2);

;// CONCATENATED MODULE: ./components/RegistrationModal/RegistrationModal.tsx




const RegistrationModal = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AccountModal_AccountModal, {
                modalId: 'registrationModal',
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row mb-4 flex-row-reverse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-3 text-sm-start text-center mb-3 mb-sm-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-fluid",
                                        style: {
                                            width: '86px'
                                        },
                                        src: cnbc_logo/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-sm-9 text-muted",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-primary",
                                            children: "إنشاء حساب"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                "هل لديك حساب؟ ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "text-bold",
                                                    children: "تسجيل الدخول"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-floating mb-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    id: "floatingInput",
                                    placeholder: "البريد الإلكتروني"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "floatingInput",
                                    children: "البريد الإلكتروني"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-floating mb-3 iconFiled",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "floatingPassword",
                                    placeholder: "Password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "floatingPassword",
                                    children: "كلمه السر"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "showIcon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        title: "Show Password",
                                        className: "fa fa-eye"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-check d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "float-end form-check-input ms-2",
                                        style: {
                                            width: '45px'
                                        },
                                        type: "checkbox",
                                        value: "",
                                        id: "flexCheckDefault"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "form-check-label",
                                        htmlFor: "flexCheckDefault",
                                        children: [
                                            "بالنقر فوق الزر “إنشاء حساب” ، فإنك توافق على شروط الخدمة وسياسة الخصوصية لقناة CNBC Arabia",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            "يمكن مشاركة المعلومات التي تقدمها عند إنشاء حساب مع شركات NBCUniversal الأخرى واستخدامها لمساعدتنا على تخصيص خدماتنا ومنتجاتنا وإعلاناتنا لك بشكل أفضل. كجزء من حسابنا ، قد نرسل لك رسائل إخبارية وعروض ترويجية ومواد تسويقية أخرى."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-primary mb-4 mt-3 btn-sm-wide",
                                    "data-bs-dismiss": "modal",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#registrationStep2",
                                    children: "إنشاء حساب"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "text-muted mb-0",
                                    children: "سياسة خاصة"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RegistrationStep2_RegistrationStep2, {
            })
        ]
    }));
};
/* harmony default export */ const RegistrationModal_RegistrationModal = (RegistrationModal);

;// CONCATENATED MODULE: ./components/LoginModal/LoginModal.tsx




const LoginModal = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AccountModal_AccountModal, {
                modalId: "loginModal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row mb-4 flex-row-reverse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-3 text-sm-start text-center mb-3 mb-sm-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-fluid",
                                        style: {
                                            width: '86px'
                                        },
                                        src: cnbc_logo/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-sm-9 text-muted",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-primary text-bold",
                                            children: "تسجيل الدخول"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                "هل أنت جديد في CNBC Arabia؟ ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "text-bold",
                                                    children: "إنشاء حساب"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-floating mb-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    id: "floatingInput",
                                    placeholder: "البريد الإلكتروني"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "floatingInput",
                                    children: "البريد الإلكتروني"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-floating mb-3 iconFiled",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "floatingPassword",
                                    placeholder: "Password"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "floatingPassword",
                                    children: "كلمه السر"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "showIcon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        title: "Show Password",
                                        className: "fa fa-eye"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                htmlFor: "flexCheckDefault",
                                                children: "ابق متصلا"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "float-end form-check-input ms-2",
                                                type: "checkbox",
                                                value: "",
                                                id: "flexCheckDefault"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-5 text-start",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            " هل نسيت كلمة السر ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "?"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-primary mb-3 btn-sm-wide",
                                    "data-bs-dismiss": "modal",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#registrationModal",
                                    children: "تسجيل الدخول"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "text-muted mb-0",
                                    children: "سياسة خاصة"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RegistrationModal_RegistrationModal, {
            })
        ]
    }));
};
/* harmony default export */ const LoginModal_LoginModal = (LoginModal);

;// CONCATENATED MODULE: external "react-cookie-consent"
const external_react_cookie_consent_namespaceObject = require("react-cookie-consent");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_namespaceObject);
;// CONCATENATED MODULE: ./components/Shared/CookieConsent/Cookies.tsx


const Cookies = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_cookie_consent_default()), {
        location: "bottom",
        buttonText: "موافق",
        cookieName: "myAwesomeCookieName2",
        style: {
            background: "#071D39"
        },
        buttonStyle: {
            color: "#002F6C",
            fontSize: "16px",
            padding: "0.375rem 0.75rem"
        },
        expires: 150,
        // acceptOnScroll={true}
        // acceptOnScrollPercentage={60}
        onAccept: (acceptedByScrolling)=>{
            if (acceptedByScrolling) {
                // triggered if user scrolls past threshold
                alert("Accept was triggered by user scrolling");
            } else {
                alert("Accept was triggered by clicking the Accept button");
            }
        },
        onDecline: ()=>{
            alert("No!!");
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "سياسة ملفات الارتباط"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "ملف تعريف الارتباط هو نص صغير يتم إرساله إلى متصفحك من الموقع الإلكتروني الذي تتم زيارته. ويساعد هذا الملف الموقع الإلكتروني في تذكّر معلومات عن زيارتك، ما يسهّل زيارة الموقع مرّة أخرى ويتيح لك الاستفادة منه بشكل أفضل."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-warning mb-3",
                                children: "موافق"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-warning",
                                children: "سياسية الخصوصية"
                            })
                        ]
                    })
                ]
            }),
            "This website uses cookies to enhance the user experience.",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: {
                    fontSize: "10px"
                },
                children: "This bit of text is smaller :O"
            })
        ]
    }));
};
/* harmony default export */ const CookieConsent_Cookies = (Cookies);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./styles/images/cnbc-arabia-logo.svg
/* harmony default export */ const cnbc_arabia_logo = ({"src":"/_next/static/media/cnbc-arabia-logo.1ca74e2f.svg","height":22,"width":234});
// EXTERNAL MODULE: ./components/Layout/Footer/footer.module.css
var footer_module = __webpack_require__(5523);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/Layout/Footer/Footer.tsx

/* eslint-disable @next/next/no-html-link-for-pages */ 


const Footer = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (footer_module_default()).footer,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footerTop,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (footer_module_default()).footerSocial,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Youtube",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        }, 'asdlhsa'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Instagram",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        }, 'sdv3w'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Linkedin",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                })
                                            })
                                        }, 'fcvxv'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }, 'vd4w'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                title: "Facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }, 'cvfdh65')
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (footer_module_default()).footerLogo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: cnbc_arabia_logo.src
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (footer_module_default()).clearfix
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-4 col-6 pb-5 pb-lg-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (footer_module_default()).footerLink,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }, 'zxc'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'xvvcb'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }, 'aswerddlhsa'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'dvsfdf')
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-4 col-6 pb-5 pb-lg-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (footer_module_default()).footerLink,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'xcve'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }, 'vdsf'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'xbruyt'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية "
                                            })
                                        }, 'dt4366')
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-4 col-sm-6 pb-5 pb-lg-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (footer_module_default()).footerLink,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'fdg4yt'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }, 'dfgdfbgfh'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "الرئيسية"
                                            })
                                        }, 'dfdsffs'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "إشترك في نشرتنا البريدية"
                                            })
                                        }, '54765'),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/careers",
                                                children: "الرئيسية"
                                            })
                                        }, 'hgf')
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 text-center d-sm-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).footerSocial,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: "Youtube",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-youtube"
                                                    })
                                                })
                                            }, 'asdlhsa'),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: "Instagram",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            }, 'sdv3w'),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: "Linkedin",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-linkedin"
                                                    })
                                                })
                                            }, 'fcvxv'),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: "Twitter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }, 'vd4w'),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    title: "Facebook",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            }, 'cvfdh65')
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 order-lg-1 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "إشترك في نشرتنا البريدية"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (footer_module_default()).searchBox,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "ابحث في الموقع"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-primary fs12_bold min_w111_h31",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#loginModal",
                                        children: "تسجيل الدخول "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-2 col-md-4 col-sm-6 pb-5 pb-sm-0 order-lg-0 me-auto ms-0 offset-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "اتصل بنا"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-primary fs12_bold min_w111_h31",
                                        onClick: ()=>router.push('/contact')
                                        ,
                                        children: "ابقى على تواصل"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footer_module_default()).footerBottom,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-uppercase",
                                        children: "\xa9 2021 cnbcarabia.com All Rights Reserved "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6 text-end text-md-start",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "MARKET TECHNOLOGY POWERED BY ZAGTRADER"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
;// CONCATENATED MODULE: ./styles/images/cnbc-logo-white.svg
/* harmony default export */ const cnbc_logo_white = ({"src":"/_next/static/media/cnbc-logo-white.8f28b410.svg","height":38,"width":40});
// EXTERNAL MODULE: ./styles/images/search.svg
var search = __webpack_require__(6503);
;// CONCATENATED MODULE: ./styles/images/backArrow.svg
/* harmony default export */ const backArrow = ({"src":"/_next/static/media/backArrow.39bd6ee6.svg","height":13,"width":31});
;// CONCATENATED MODULE: ./styles/images/searchimg.jpg
/* harmony default export */ const searchimg = ({"src":"/_next/static/media/searchimg.aa8d31d1.jpg","height":80,"width":80,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAAJ8UP//EABsQAAICAwEAAAAAAAAAAAAAAAIDARIABBNB/9oACAEBAAE/AN3dQsy7R1SLaivwovJWz//EABsRAAAHAQAAAAAAAAAAAAAAAAABAxEiMUGR/9oACAECAQE/AGJOtl0f/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAhcf/aAAgBAwEBPwBVcqf/2Q=="});
// EXTERNAL MODULE: ./components/Title/index.tsx
var Title = __webpack_require__(501);
;// CONCATENATED MODULE: ./components/Shared/SearchDropDown/SearchDropDown.tsx





const SearchDropDown = ({ data  })=>{
    const keys = Object.keys(data);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "searchResulstBox",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "dropsearch d-flex align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "amazon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "javascript:void(0)",
                        className: "search_icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: search/* default.src */.Z.src,
                            alt: "search"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "backbar d-flex align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "javascript:void(0)",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: backArrow.src,
                            alt: "backarrow"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        children: [
                            "amazon ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "عرض جميع نتائج البحث"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                styles: "topBorderText",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "fs24_bolder",
                    children: "الأسهم ذات الصلة"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wordCountList",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
                        className: "table table-borderless table-striped",
                        children: keys.map((key, index)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: data[key].MarketMIC
                                            }),
                                            data[key].MarketSymbol
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: data[key].LastPrice
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: `(3.09%)  ${data[key].LastBid}`
                                            })
                                        ]
                                    })
                                ]
                            }, index));
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                styles: 'topBorderText',
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "نتيجة البحث"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "searchResultList",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "NewsList",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsText",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "ايدن: سيفقد حوالى 10 ملايين أميركي إعانات Amazon البطالة في حال عدم توقيع ترامب خطة الاقتصادي                                     "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "أمريكا"
                                                    }),
                                                    " 07 مارس 2022"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "newsImage",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: searchimg.src
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsText",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: " بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "أمريكا"
                                                    }),
                                                    " منذ 5 دقائق"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "newsImage",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: searchimg.src
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsText",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: " بايدن: سيفقد حوالى 10 ملايين أميركي إعانات البطالة في حال عدم توقيع ترامب خطة التحفيز الاقتصادي "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "أمريكا"
                                                    }),
                                                    " منذ 5 دقائق"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "newsImage",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: searchimg.src
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const SearchDropDown_SearchDropDown = (SearchDropDown);

;// CONCATENATED MODULE: ./components/Layout/Header/MobileHeader.tsx

const MobileHeader = ({ handleMenuList  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "MobileToggleNav",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-link btn-cancel",
                    onClick: handleMenuList,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-times"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "navbar-nav",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link active",
                                "aria-current": "page",
                                href: "/breakingNews",
                                children: "أخبار عاجلة"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/infographics",
                                children: "إنفوغرافيك"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/presenters",
                                children: "مذيعو ومراسلو"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/latestVideos",
                                children: "أحدث مقاطع الفيديو"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/schedules",
                                children: "جدول البرامج"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/videoNews",
                                children: "الفيديو"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "nav-item dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link dropdown-toggle",
                                    href: "#",
                                    id: "navbarDropdownMenuLink",
                                    role: "button",
                                    "data-bs-toggle": "dropdown",
                                    "aria-expanded": "false",
                                    children: "برامج CNBC عربية"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "dropdown-menu",
                                    "aria-labelledby": "navbarDropdownMenuLink",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/programs/100/",
                                                children: "اكسبو في أسبوع"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/95/حديث المملكة مع راشد الفوزان",
                                                children: "حديث المملكة مع راشد الفوزان"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/96/تحت الضوء",
                                                children: "تحت الضوء"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/78/وثائقيات",
                                                children: "ملفات"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/90/Tech Talks",
                                                children: "Tech Talks"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/89/CEO Talks",
                                                children: "CEO Talks"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/61/مسار السوق",
                                                children: "مسار السوق"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/33/كلام أسواق",
                                                children: "كلام أسواق"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/87/بين قوسين",
                                                children: "بين قوسين"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/10/حوار الأسبوع",
                                                children: "حوار الأسبوع"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "/program/16/برنامج بموضوعية ",
                                                children: [
                                                    "بموضوعية",
                                                    ' '
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/69/عين على عُمان",
                                                children: "عين على عُمان"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/101/صباح CNBC عربية",
                                                children: "صباح CNBC عربية"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "/program/20/عين على الكويت ",
                                                children: [
                                                    "عين على الكويت",
                                                    ' '
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "/program/23/عين على قطر ",
                                                children: [
                                                    "عين على قطر",
                                                    ' '
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/94/CNBC عربية بودكاست",
                                                children: "CNBC عربية بودكاست"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/17/حديث خاص ",
                                                children: "مقابلة خاصة"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/5/من حقيبة جو ",
                                                children: "حقيبة جو"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/92/الشجعان... قصة نجاح",
                                                children: "الشجعان... قصة نجاح"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "dropdown-item",
                                                href: "/program/29/مشاركة ",
                                                children: [
                                                    "مشاركة",
                                                    ' '
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/41/البوصلة",
                                                children: "البوصلة"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/43/بورصات العالم",
                                                children: "بورصات العالم"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/91/The IMPACT",
                                                children: "The IMPACT"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "dropdown-item",
                                                href: "/program/84/خبر خام",
                                                children: "خبر خام"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "/categoryNewsTiles",
                                children: "آخر الأخبار"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                href: "#",
                                children: "الرئيسية"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/liveTv",
                                className: "nav-link",
                                children: [
                                    "المباشر",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "youtube-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-play"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/breakingNews",
                                className: "nav-link",
                                children: "عاجل"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#loginModal",
                                children: "تسجيل الدخول"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Header_MobileHeader = (MobileHeader);

;// CONCATENATED MODULE: ./components/Layout/Header/Header.tsx

/* eslint-disable @next/next/link-passhref */ /* eslint-disable @next/next/no-html-link-for-pages */ 






const Header = ()=>{
    const { 0: showMenuList , 1: setShowMenuList  } = (0,external_react_.useState)(false);
    const { 0: displaySerachDropDown , 1: setDisplaySerachDropDown  } = (0,external_react_.useState)(false);
    const { 0: data1 , 1: setData  } = (0,external_react_.useState)({
    });
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: moreMenuItems , 1: setMoreMenuItems  } = (0,external_react_.useState)([
        {
            title: 'مذيعو ومراسلو',
            url: '/presenters'
        },
        {
            title: 'أحدث مقاطع الفيديو',
            url: '/latestVideos'
        },
        {
            title: 'إنفوغرافيك',
            url: '/infographics'
        },
        {
            title: 'جدول البرامج',
            url: '/schedules'
        },
        {
            title: 'آخر الأخبار',
            url: '/latestNews'
        },
        {
            title: 'أخبار عاجلة',
            url: '/breakingNews'
        }
    ]);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleMenuList = ()=>{
        setShowMenuList(!showMenuList);
    };
    const handleEvent = (event)=>{
        setDisplaySerachDropDown(true);
        getData(event.target.value).then((res)=>{
            setData(res);
        }).catch((err)=>{
            console.warn(err);
        });
    };
    const handleClickOutside = ()=>{
        setDisplaySerachDropDown(false);
    };
    const handleRouting = (url, index)=>{
        index !== 4 && router.push(`/${url}`);
        index === 4 && handleClickOutside();
    };
    const getData = async (value)=>{
        //!value ? {}:
        //fetch data and return
        const data = {
            "16449": {
                "MarketID": "105",
                "PriceDecimal": 2,
                "ContractSize": 1,
                "LastPrice": 126.09,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 91.15,
                "LastAsk": 124.7,
                "TickerID": 16449,
                "Symbol": "A",
                "ISIN": "US00846U1016",
                "BloombergCode": "",
                "Desc": "Agilent Technologies",
                "DescAR": "Agilent Technologies",
                "MarketSymbol": "US",
                "MarketMIC": "XNYS",
                "MarketDesc": "US Markets",
                "FeedSource": "IDC",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "QB",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
            },
            "182697": {
                "MarketID": "126",
                "PriceDecimal": 3,
                "ContractSize": 1,
                "LastPrice": 0.75,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 0,
                "LastAsk": 0,
                "TickerID": 182697,
                "Symbol": "A",
                "ISIN": "CA04226J1084",
                "BloombergCode": "",
                "Desc": "Armor Minerals Inc",
                "DescAR": "Armor Minerals Inc",
                "MarketSymbol": "TSXV",
                "MarketMIC": "XTSX",
                "MarketDesc": "TSX Venture Exchange (Canada)",
                "FeedSource": "HTTP",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
            },
            "125200": {
                "MarketID": "151",
                "PriceDecimal": 3,
                "ContractSize": 1,
                "LastPrice": 5,
                "MinPrice": 0,
                "MaxPrice": 0,
                "LastBid": 0,
                "LastAsk": 0,
                "TickerID": 125200,
                "Symbol": "A",
                "ISIN": "TH0770010Z08",
                "BloombergCode": "",
                "Desc": "Areeya Property Public Co Ltd - (SUSPENDED IN WCA) Ordinary Shares",
                "DescAR": "Areeya Property Public Co Ltd - (SUSPENDED IN WCA) Ordinary Shares",
                "MarketSymbol": "THAILAND",
                "MarketMIC": "XBKK",
                "MarketDesc": "Thailand Stock Exchange",
                "FeedSource": "HTTP",
                "IDCSymbol": "A",
                "IDCMarketSymbol": "",
                "SymbolAlias": "A",
                "SecurityTypeID": "1",
                "InitialMargin": "0.0"
            }
        };
        return data;
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-box",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "logo-header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cnbc-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                role: 'button',
                                                title: "CNBC Arabia",
                                                alt: "logo",
                                                src: cnbc_arabia_logo.src
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-nav",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "navbar navbar-expand-md",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "navbar-toggler px-0",
                                                    type: "button",
                                                    "data-bs-toggle": "collapse",
                                                    "data-bs-target": "#navbarNavDropdown",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "fa fa-bars text-white"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "collapse navbar-collapse",
                                                    id: "navbarNavDropdown",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "navbar-nav",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link active",
                                                                    "aria-current": "page",
                                                                    href: "/",
                                                                    children: "الرئيسية"
                                                                })
                                                            }, '1'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/videoNews",
                                                                    children: "الفيديو"
                                                                })
                                                            }, '2'),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "nav-item dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "nav-link dropdown-toggle",
                                                                        href: "#",
                                                                        id: "morePrograms",
                                                                        role: "button",
                                                                        "data-bs-toggle": "dropdown",
                                                                        "aria-expanded": "false",
                                                                        children: "برامج CNBC عربية"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "dropdown-menu",
                                                                        "aria-labelledby": "morePrograms",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/100/",
                                                                                    children: "اكسبو في أسبوع"
                                                                                })
                                                                            }, '8'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/95/",
                                                                                    children: "حديث المملكة مع راشد الفوزان"
                                                                                })
                                                                            }, '9'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/96/",
                                                                                    children: "تحت الضوء"
                                                                                })
                                                                            }, '10'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/78/",
                                                                                    children: "وثائقيات"
                                                                                })
                                                                            }, '11'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/90/",
                                                                                    children: "Tech Talks"
                                                                                })
                                                                            }, '12'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/89/",
                                                                                    children: "CEO Talks"
                                                                                })
                                                                            }, '13'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/61/",
                                                                                    children: "مسار السوق"
                                                                                })
                                                                            }, '14'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/33/",
                                                                                    children: "كلام أسواق"
                                                                                })
                                                                            }, '15'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/87/",
                                                                                    children: "بين قوسين"
                                                                                })
                                                                            }, '16'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/programs/10/",
                                                                                    children: "حوار الأسبوع"
                                                                                })
                                                                            }, '17')
                                                                        ]
                                                                    })
                                                                ]
                                                            }, '3'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/categoryNewsTiles",
                                                                    children: "التصنيفات"
                                                                })
                                                            }, '34'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/marketGraph",
                                                                    children: "الأسواق"
                                                                })
                                                            }, '35'),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "nav-item dropdown",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "nav-link dropdown-toggle",
                                                                        href: "#",
                                                                        id: "moreOtions",
                                                                        role: "button",
                                                                        "data-bs-toggle": "dropdown",
                                                                        "aria-expanded": "false",
                                                                        children: "المزيد"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                        className: "dropdown-menu",
                                                                        "aria-labelledby": "moreOtions",
                                                                        children: moreMenuItems.length && moreMenuItems.map((menuItem)=>{
                                                                            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "nav-link",
                                                                                    href: menuItem.url,
                                                                                    children: menuItem.title
                                                                                })
                                                                            }, menuItem.title));
                                                                        })
                                                                    })
                                                                ]
                                                            }, '3')
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-header",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "search-box desktop_only d-none d-md-block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                onClick: (e)=>handleEvent(e)
                                                ,
                                                placeholder: "ابحث في الموقع"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "input-group-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-search"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "search-box mobile_only d-md-none",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                onChange: (e)=>handleEvent(e)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "input-group-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-search"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-search-nav",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "/liveTv",
                                                        children: [
                                                            "المباشر ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "youtube-icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-play"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, 'wser'),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/breakingNews",
                                                        children: "عاجل"
                                                    }, 'dsad')
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        "data-bs-toggle": "modal",
                                                        "data-bs-target": "#loginModal",
                                                        children: "تسجيل الدخول"
                                                    }, 'adss')
                                                })
                                            ]
                                        })
                                    }),
                                    displaySerachDropDown && /*#__PURE__*/ jsx_runtime_.jsx(SearchDropDown_SearchDropDown, {
                                        data: data1
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobileHeader",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                onClick: handleMenuList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "menuIcon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-bars"
                                        })
                                    }),
                                    "قائمة"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "menuIcon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-chart-line"
                                        })
                                    }),
                                    "الأسواق"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/liveTv",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "menuIcon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-youtube-square"
                                        })
                                    }),
                                    "المباشر"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "pt-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                title: "CNBC Arabia",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "img-fluid",
                                    src: cnbc_logo_white.src
                                })
                            })
                        })
                    ]
                })
            }),
            showMenuList && /*#__PURE__*/ jsx_runtime_.jsx(Header_MobileHeader, {
                handleMenuList: handleMenuList
            })
        ]
    }));
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./styles/images/crose.svg
/* harmony default export */ const crose = ({"src":"/_next/static/media/crose.7e430000.svg","height":15,"width":15});
;// CONCATENATED MODULE: ./components/Layout/TopBar/TopBar.tsx



const TopBar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "top-bar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "alert alert-dark alert-dismissible top-grey-bar fade show",
                role: "alert",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "position-relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn-close p-1",
                                "data-bs-dismiss": "alert",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: crose.src,
                                    alt: "timesIcon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "إعلان"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "breakingNews",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    role: 'button',
                                    children: " السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "alert alert-danger alert-dismissible top-red-bar fade show",
                role: "alert",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "position-relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn-close p-1",
                                "data-bs-dismiss": "alert",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: crose.src,
                                    alt: "timesIcon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "الأخبار العاجلة"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/breakingNews",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    role: 'button',
                                    children: " السيسي يشدد خلال اتصال مع المنفي على أهمية عقد الانتخابات الليبية في موعدها"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const TopBar_TopBar = (TopBar);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx



// import BannerLayout from '../BannerLayout/BannerLayout'




const Layout = ({ children  })=>{
    const { 0: displayCookies , 1: setDisplayCookie  } = (0,external_react_.useState)(true) //Will use any state management tool like redux to get state
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar_TopBar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {
            }),
            displayCookies && /*#__PURE__*/ jsx_runtime_.jsx(CookieConsent_Cookies, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LoginModal_LoginModal, {
            })
        ]
    }));
};
/* harmony default export */ const Layout_Layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/gtag.js
var gtag = __webpack_require__(4028);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./store/Store.tsx + 2 modules
var Store = __webpack_require__(7060);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./pages/_app.tsx

/* eslint-disable @next/next/no-page-custom-font */ /* eslint-disable @typescript-eslint/no-unused-expressions */ 













// import * as gtag from './../lib/gtag';






function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        router.events.on('routeChangeComplete', gtag/* pageview */.L);
        return ()=>{
            router.events.off('routeChangeComplete', gtag/* pageview */.L);
        };
    }, [
        router.events
    ]);
    // useEffect(() => {
    //   const handleRouteChange = (url) => {
    //     gtag.pageview(url)
    //   }
    //   router.events.on('routeChangeComplete', handleRouteChange)
    //   return () => {
    //     router.events.off('routeChangeComplete', handleRouteChange)
    //   }
    // }, [router.events])
    (0,external_react_.useEffect)(()=>{
        typeof document !== undefined ? Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7064, 23)) : null;
    }, []);
    return(// <Layout>
    //   <Head>
    //     <meta charSet="utf-8" />
    //     <title>عربية CNBC</title>
    //     <meta name='viewport' content='width=device-width, initial-scale=1' />
    //     <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
    //     <meta httpEquiv="content-language" content="ar" />
    //     <link rel="icon" type="image/x-icon" href="../favicon.ico" />
    //     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3125437156093673"
    //       crossOrigin="anonymous"></script>
    //     {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3125437156093673"
    //  crossOrigin="anonymous"></script> */}
    //     <link rel="preconnect" href="https://fonts.googleapis.com" />
    //     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    //     <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    //     <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
    //   </Head>
    //   {/* new */}
    //   <Script
    //     strategy="afterInteractive"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //         })(window,document,'script','dataLayer', '${GTM_ID}');
    //       `,
    //     }}
    //   />
    //   {/* old */}
    //   {/* <Script
    //     strategy="afterInteractive"
    //     src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    //   />
    //   <Script
    //     id="gtag-init"
    //     strategy="afterInteractive"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    //         gtag('config', '${gtag.GA_TRACKING_ID}', {
    //           page_path: window.location.pathname,
    //         });
    //       `,
    //     }}
    //    /> */}
    //   <Component {...pageProps} />
    // </Layout>
    /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: Store/* store */.h,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
            loading: null,
            persistor: Store/* persistor */.Dj,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout_Layout, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                charSet: "utf-8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "عربية CNBC"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                content: "text/html; charset=UTF-8",
                                httpEquiv: "content-type"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                httpEquiv: "content-language",
                                content: "ar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "../favicon.ico"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "preconnect",
                                href: "https://fonts.googleapis.com"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "preconnect",
                                href: "https://fonts.gstatic.com",
                                crossOrigin: "anonymous"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap",
                                rel: "stylesheet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
                                rel: "stylesheet"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 7064:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,653,60], () => (__webpack_exec__(6766)));
module.exports = __webpack_exports__;

})();