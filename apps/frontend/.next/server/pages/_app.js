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

/***/ 2522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/biden2.bf9ce96b.jpg","height":415,"width":740,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJIvH//EABwQAAEEAwEAAAAAAAAAAAAAABIBAwQFABEhIv/aAAgBAQABPwC8lus2agPqQHU3wc//xAAYEQACAwAAAAAAAAAAAAAAAAABAgADMv/aAAgBAgEBPwChVK5E/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECETH/2gAIAQMBAT8Am3en/9k="});

/***/ }),

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cnbc-logo.35dee4ec.svg","height":71,"width":74});

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

/***/ 5955:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Shared/AccountModal/AccountModal.tsx

const AccountModal = ({ modalId , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "modal fade",
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
                        className: "row mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-9 text-muted pt-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        "لقد قمت بإنشاء حساب CNBC Arabia بنجاح. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "johnsmith@email.com"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "img-fluid",
                                    src: cnbc_logo/* default.src */.Z.src
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-primary mb-3",
                        children: "دعنا نعرف المزيد عنك لمساعدتنا على خدمتك بشكل أفضل"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-floating mb-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select",
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
                        className: "form-floating mb-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select",
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
                        className: "form-floating mb-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select",
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
                        className: "form-floating mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "form-select",
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
                                    className: "btn btn-primary mb-3",
                                    children: "حفظ"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6 text-start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-outline-primary mb-3",
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
                            className: "row mb-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-9 text-muted",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-primary",
                                            children: "إنشاء حساب"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                "هل لديك حساب؟ ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "تسجيل الدخول"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-3 text-start",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-fluid",
                                        src: cnbc_logo/* default.src */.Z.src
                                    })
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
                            className: "form-floating mb-3",
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
                                    className: "btn btn-primary mb-3",
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
                            className: "row mb-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-9 text-muted",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-primary",
                                            children: "تسجيل الدخول"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            children: [
                                                "هل أنت جديد في CNBC Arabia؟ ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "إنشاء حساب"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-3 text-start",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-fluid",
                                        src: cnbc_logo/* default.src */.Z.src
                                    })
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
                                    className: "col-md-6",
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
                                    className: "col-md-6 text-start",
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
                                    className: "btn btn-primary mb-3",
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
/* harmony default export */ const cnbc_arabia_logo = ({"src":"/_next/static/media/cnbc-arabia-logo.6c6e7c0f.svg","height":22,"width":234});
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
                                className: "col-lg-2 col-md-4 col-sm-6 pb-5 pb-lg-0",
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 pb-5 pb-sm-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "اتصل بنا"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-outline-light",
                                        onClick: ()=>router.push('/contact')
                                        ,
                                        children: "ابقى على تواصل"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-3 col-md-6 col-sm-6",
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
                                        className: "btn btn-primary",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#loginModal",
                                        children: "تسجيل الدخول "
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
/* harmony default export */ const cnbc_logo_white = ({"src":"/_next/static/media/cnbc-logo-white.78afd7c0.svg","height":38,"width":40});
// EXTERNAL MODULE: ./styles/images/biden2.jpg
var biden2 = __webpack_require__(2522);
;// CONCATENATED MODULE: ./components/Shared/SearchDropDown/SearchDropDown.tsx


const SearchDropDown = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "searchResulstBox",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "topBorderText",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "الأسهم ذات الصلة"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wordCountList",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table table-borderless table-striped",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: "AMZ"
                                            }),
                                            "Amazon Inc"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: "3231.50"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: "(3.09%)  99.40"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: "AMZ"
                                            }),
                                            "Amazon Inc"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: "3231.50"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: "(3.09%)  99.40"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: "AMZ"
                                            }),
                                            "Amazon Inc"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: "3231.50"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: "(3.09%)  99.40"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: "AMZ"
                                            }),
                                            "Amazon Inc"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: "3231.50"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: "(3.09%)  99.40"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "m-0 p-0",
                                                children: "AMZ"
                                            }),
                                            "Amazon Inc"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0",
                                                children: "3231.50"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "p-0 text-success",
                                                children: "(3.09%)  99.40"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "topBorderText",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "نتيجة البحث"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "searchResultList",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "NewsList mb-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
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
                                            src: biden2/* default.src */.Z.src
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
                                            src: biden2/* default.src */.Z.src
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
                                            src: biden2/* default.src */.Z.src
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

;// CONCATENATED MODULE: ./components/Layout/Header/Header.tsx

/* eslint-disable @next/next/link-passhref */ /* eslint-disable @next/next/no-html-link-for-pages */ 



const Header = ()=>{
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
                                                                    href: "/breakingNews",
                                                                    children: "أخبار عاجلة"
                                                                })
                                                            }, '1'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/infographics",
                                                                    children: "إنفوغرافيك"
                                                                })
                                                            }, '2'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/presenters",
                                                                    children: "مذيعو ومراسلو"
                                                                })
                                                            }, '3'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/latestVideos",
                                                                    children: "أحدث مقاطع الفيديو"
                                                                })
                                                            }, '4'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/schedules",
                                                                    children: "جدول البرامج"
                                                                })
                                                            }, '5'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/videoNews",
                                                                    children: "الفيديو"
                                                                })
                                                            }, '6'),
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
                                                                            }, '8'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/95/حديث المملكة مع راشد الفوزان",
                                                                                    children: "حديث المملكة مع راشد الفوزان"
                                                                                })
                                                                            }, '9'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/96/تحت الضوء",
                                                                                    children: "تحت الضوء"
                                                                                })
                                                                            }, '10'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/78/وثائقيات",
                                                                                    children: "ملفات"
                                                                                })
                                                                            }, '11'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/90/Tech Talks",
                                                                                    children: "Tech Talks"
                                                                                })
                                                                            }, '12'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/89/CEO Talks",
                                                                                    children: "CEO Talks"
                                                                                })
                                                                            }, '13'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/61/مسار السوق",
                                                                                    children: "مسار السوق"
                                                                                })
                                                                            }, '14'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/33/كلام أسواق",
                                                                                    children: "كلام أسواق"
                                                                                })
                                                                            }, '15'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/87/بين قوسين",
                                                                                    children: "بين قوسين"
                                                                                })
                                                                            }, '16'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/10/حوار الأسبوع",
                                                                                    children: "حوار الأسبوع"
                                                                                })
                                                                            }, '17'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/16/برنامج بموضوعية ",
                                                                                    children: "بموضوعية "
                                                                                })
                                                                            }, '18'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/69/عين على عُمان",
                                                                                    children: "عين على عُمان"
                                                                                })
                                                                            }, '19'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/101/صباح CNBC عربية",
                                                                                    children: "صباح CNBC عربية"
                                                                                })
                                                                            }, '20'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/20/عين على الكويت ",
                                                                                    children: "عين على الكويت "
                                                                                })
                                                                            }, '21'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/23/عين على قطر ",
                                                                                    children: "عين على قطر "
                                                                                })
                                                                            }, '22'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/94/CNBC عربية بودكاست",
                                                                                    children: "CNBC عربية بودكاست"
                                                                                })
                                                                            }, '23'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/17/حديث خاص ",
                                                                                    children: "مقابلة خاصة"
                                                                                })
                                                                            }, '24'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/5/من حقيبة جو ",
                                                                                    children: "حقيبة جو"
                                                                                })
                                                                            }, '25'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/92/الشجعان... قصة نجاح",
                                                                                    children: "الشجعان... قصة نجاح"
                                                                                })
                                                                            }, '26'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/29/مشاركة ",
                                                                                    children: "مشاركة "
                                                                                })
                                                                            }, '27'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/41/البوصلة",
                                                                                    children: "البوصلة"
                                                                                })
                                                                            }, '28'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/43/بورصات العالم",
                                                                                    children: "بورصات العالم"
                                                                                })
                                                                            }, '29'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/91/The IMPACT",
                                                                                    children: "The IMPACT"
                                                                                })
                                                                            }, '30'),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    className: "dropdown-item",
                                                                                    href: "/program/84/خبر خام",
                                                                                    children: "خبر خام"
                                                                                })
                                                                            }, '31')
                                                                        ]
                                                                    })
                                                                ]
                                                            }, '7'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "/categoryNewsTiles",
                                                                    children: "آخر الأخبار"
                                                                })
                                                            }, '32'),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "nav-link",
                                                                    href: "#",
                                                                    children: "الرئيسية"
                                                                })
                                                            }, '33')
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
                                        className: "search-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
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
                                    /*#__PURE__*/ jsx_runtime_.jsx(SearchDropDown_SearchDropDown, {
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
            })
        ]
    }));
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout/TopBar/TopBar.tsx


const TopBar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "top-bar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "alert alert-dark alert-dismissible top-grey-bar fade show",
                role: "alert",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "alert",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-times"
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
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "alert alert-danger alert-dismissible top-red-bar fade show",
                role: "alert",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close",
                        "data-bs-dismiss": "alert",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa fa-times"
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
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./lib/gtag.js
var gtag = __webpack_require__(4028);
;// CONCATENATED MODULE: ./pages/_app.tsx
















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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout_Layout, {
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
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3125437156093673",
                        crossOrigin: "anonymous"
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
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtag/* GTM_ID */.A}');
          `
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,97], () => (__webpack_exec__(5955)));
module.exports = __webpack_exports__;

})();