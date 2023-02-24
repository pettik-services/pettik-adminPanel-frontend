exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 4912:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "SideNavbar_logo__iGFC7",
	"sidenav": "SideNavbar_sidenav__G98b8",
	"icona": "SideNavbar_icona__x6_LU",
	"groomingSubmenu": "SideNavbar_groomingSubmenu__RfXb9",
	"navul": "SideNavbar_navul__FNMxF",
	"iconadropdown": "SideNavbar_iconadropdown__iurKl",
	"navli": "SideNavbar_navli__UeD0k",
	"dropdown": "SideNavbar_dropdown__SbJam"
};


/***/ }),

/***/ 5508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.80aa48b9.png","height":6000,"width":6000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42mOAgZ2ZxoyLE62YGAiBLw8tmJfNlGVkgIENCdpgXVMD5RZ0u2s3wMTX9SuBxRnOFGmCGZN8pK7uKZXZ//SBaVRSiYMKAwMDw5wGfWaGuWUMYOO2x4lsvNDE8P/wLNH/t9bzzJ0bKKrMAAPb7RjY9+Y4GSzpbA9YVNgYsb3JzuHYJAZxBkLg/HxthGO3+DIw5TEwMOUzMDBvKmVgPjPHACwJAAjkMNg7kT8/AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4912);
/* harmony import */ var _styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5508);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1367);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(444);
/* harmony import */ var react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_submenu__WEBPACK_IMPORTED_MODULE_7__);









const SideNavbar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const grooServ = ()=>{
        router.push("grooming-services");
    };
    const appServ = ()=>{
        router.push("application-grooming");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().sidenav),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Pettik"
                        }),
                        "-Admin"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/user",
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().icona),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-users icons"
                        }),
                        "\xa0\xa0User List"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/orders",
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().icona),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-users icons"
                        }),
                        "\xa0\xa0Order List"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().iconadropdown),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().navul),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-users icons"
                                }),
                                "\xa0\xa0Groomings\xa0\xa0",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-caret-down",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().dropdown),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/grooming-services",
                                                className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().navli),
                                                children: "Grooming Services"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/application-grooming",
                                                className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().navli),
                                                children: "Grooming Plans"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/partner",
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().icona),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-users icons"
                        }),
                        "\xa0\xa0Partner"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/blogs",
                    className: (_styles_SideNavbar_module_css__WEBPACK_IMPORTED_MODULE_8___default().icona),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-users icons"
                        }),
                        "\xa0\xa0Blogs"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNavbar);


/***/ })

};
;