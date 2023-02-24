exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 1688:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "UpperNavbar_main__yVhsY",
	"head": "UpperNavbar_head__bA7NI",
	"colUser": "UpperNavbar_colUser__sSZOz",
	"profile": "UpperNavbar_profile__uELZP",
	"userListSpan": "UpperNavbar_userListSpan__Gfk__",
	"profileIcon": "UpperNavbar_profileIcon__I3EG8",
	"profileIconNotification": "UpperNavbar_profileIconNotification__hTXJi"
};


/***/ }),

/***/ 2882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1688);
/* harmony import */ var _styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5168);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const UpperNavbar = ({ Navbarheading  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [notificationCount, setNotificationCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    setInterval(function() {
        notificationView();
    }, 600000);
    const notificationView = async ()=>{
        try {
            const resNotification = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/notificationView");
            console.log("notification response", resNotification.data);
            setNotificationCount(resNotification.data.notificationCount);
        } catch (e) {
            console.log("notification error", e);
        }
    };
    const notificationUpdate = async ()=>{
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/updateAdminView");
            console.log("updateAdminview notification", res.data);
            router.push("/orders");
        } catch (e) {
            console.log("notificationupdate Error", e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        notificationView();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().head),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().colUser),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().userListSpan),
                            children: Navbarheading
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().colUser),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().profile),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    badgeContent: notificationCount,
                                    color: "error",
                                    className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().profileIconNotification),
                                    onClick: notificationUpdate,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_UpperNavbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().profileIcon),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-user-circle fa-2x"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Prasanjit Prusty"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpperNavbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;