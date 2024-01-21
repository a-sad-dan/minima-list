"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#modal-window {
    width: 100%;
    height: 100vh;
    height: 100svh;
    max-width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    overflow: hidden;
    display: grid;
    place-content: center;
    background-color: #66666657;
    opacity: 1;
    z-index: 12;
}

#modal-window.hidden {
    max-width: 0px;
    /* background-color: transparent; */
    opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/modal/modal.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,eAAe;;IAEf,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,gBAAgB;IAChB,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,UAAU;IACV,WAAW;AACf;;AAEA;IACI,cAAc;IACd,mCAAmC;IACnC,UAAU;AACd","sourcesContent":["#modal-window {\n    width: 100%;\n    height: 100vh;\n    height: 100svh;\n    max-width: 100%;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    overflow: hidden;\n    display: grid;\n    place-content: center;\n    background-color: #66666657;\n    opacity: 1;\n    z-index: 12;\n}\n\n#modal-window.hidden {\n    max-width: 0px;\n    /* background-color: transparent; */\n    opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/project-form.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/project-form.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.project-form {
    max-width: 400px;
    min-width: 300px;
    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    color: #777;
    opacity: 1;
    transition: max-width 0.6s ease, opacity 0.3s ease;
    font-weight: 500;
    background-color: #fdfdfd;

}

.project-form.collapse {
    max-width: 0;
    opacity: 0;
}

.close-project-form {
    align-self: flex-end;
    cursor: pointer
}

.button {
    cursor: pointer;
}

.project-form #project-name {
    font-size: 1.1rem;
    padding: .2rem .5rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    color: #555
}

input[type="text"]:focus-visible {
    outline: none;
    border-width: 2px;
}

input[type="text"] {
    border: unset;
    border-bottom: 1.5px solid #888;
    text-align: center;
    width: 100%;
    color: #444
}

.submit-project-form {
    background: unset;
    border: unset;
    display: flex;
    border-radius: 100%;
}

label.hidden {
    display: none
}`, "",{"version":3,"sources":["webpack://./src/css/project-form.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6CAA6C;IAC7C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,UAAU;IACV,kDAAkD;IAClD,gBAAgB;IAChB,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB;AACJ;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,WAAW;IACX;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI;AACJ","sourcesContent":[".project-form {\n    max-width: 400px;\n    min-width: 300px;\n    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);\n    border-radius: 12px;\n    padding: 1rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .8rem;\n    color: #777;\n    opacity: 1;\n    transition: max-width 0.6s ease, opacity 0.3s ease;\n    font-weight: 500;\n    background-color: #fdfdfd;\n\n}\n\n.project-form.collapse {\n    max-width: 0;\n    opacity: 0;\n}\n\n.close-project-form {\n    align-self: flex-end;\n    cursor: pointer\n}\n\n.button {\n    cursor: pointer;\n}\n\n.project-form #project-name {\n    font-size: 1.1rem;\n    padding: .2rem .5rem;\n    text-transform: capitalize;\n    font-size: 1.2rem;\n    color: #555\n}\n\ninput[type=\"text\"]:focus-visible {\n    outline: none;\n    border-width: 2px;\n}\n\ninput[type=\"text\"] {\n    border: unset;\n    border-bottom: 1.5px solid #888;\n    text-align: center;\n    width: 100%;\n    color: #444\n}\n\n.submit-project-form {\n    background: unset;\n    border: unset;\n    display: flex;\n    border-radius: 100%;\n}\n\nlabel.hidden {\n    display: none\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/project.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/project.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `button#add-project {
    border: unset;
}

button#add-project,
.project-tab {
    display: flex;
    align-self: baseline;
    width: 95%;
    align-items: center;
    border-radius: 12px;
    margin: 0 auto;
    justify-content: stretch;
    background-color: #EFEFEF;
    gap: 0.8rem;
    padding: 0.4rem 0.8rem;
    font-family: 'Mulish', sans-serif;
    color: #444444;
}



button#add-project:hover,
.project-tab:hover {
    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.12);
    background-color: unset;
    transition: 0.35s ease;
}

.project-tab.active {
    box-shadow: 0px 2px 12px -4px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    background-color: unset;
}

div#projects-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

button#add-project p,
.name {
    text-transform: capitalize;
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 600;
}

p.count {
    font-weight: 800;
    background-color: #F4D03F;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
}

button.edit-btn {
    height: 22px;
    width: 22px;
    background-size: contain !important;
    border: unset;
    transition: 0.1 scale ease-in;
}

button.edit-btn:active {
    scale: 1.1;
}

button#add-project:active {
    font-weight: 500;
    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.2) inset;
    background-color: unset;
    scale: 0.99;
    transition: 0.3s ease;


}

#add-project:hover {
    /* box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.2); */
    background-color: unset;
    transition: 0.35s ease;

}

#add-project>* {
    font-weight: 700;
}

@media screen and (max-width: 768px) {
    .project {
        padding: 0.6rem 0.9rem;
    }

    /* Inline #2 | http://127.0.0.1:5501/dist/ */


    #side-bar {
        flex-shrink: 0;
    }

    .page-wrapper {
        overflow-x: hidden;
    }

    #heading {
        font-size: 1.4rem;
        padding-top: .5rem;
        text-align: center;
        padding-left: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/css/project.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,oBAAoB;IACpB,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;IACd,wBAAwB;IACxB,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,iCAAiC;IACjC,cAAc;AAClB;;;;AAIA;;IAEI,iDAAiD;IACjD,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,gDAAgD;IAChD,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;;IAEI,0BAA0B;IAC1B,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mCAAmC;IACnC,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,sDAAsD;IACtD,uBAAuB;IACvB,WAAW;IACX,qBAAqB;;;AAGzB;;AAEA;IACI,sDAAsD;IACtD,uBAAuB;IACvB,sBAAsB;;AAE1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA,4CAA4C;;;IAG5C;QACI,cAAc;IAClB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;QAClB,kBAAkB;QAClB,eAAe;IACnB;;AAEJ","sourcesContent":["button#add-project {\n    border: unset;\n}\n\nbutton#add-project,\n.project-tab {\n    display: flex;\n    align-self: baseline;\n    width: 95%;\n    align-items: center;\n    border-radius: 12px;\n    margin: 0 auto;\n    justify-content: stretch;\n    background-color: #EFEFEF;\n    gap: 0.8rem;\n    padding: 0.4rem 0.8rem;\n    font-family: 'Mulish', sans-serif;\n    color: #444444;\n}\n\n\n\nbutton#add-project:hover,\n.project-tab:hover {\n    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.12);\n    background-color: unset;\n    transition: 0.35s ease;\n}\n\n.project-tab.active {\n    box-shadow: 0px 2px 12px -4px rgba(0, 0, 0, 0.2);\n    font-weight: 700;\n    background-color: unset;\n}\n\ndiv#projects-container {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\nbutton#add-project p,\n.name {\n    text-transform: capitalize;\n    flex-grow: 1;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\np.count {\n    font-weight: 800;\n    background-color: #F4D03F;\n    padding: 0.2rem 0.5rem;\n    border-radius: 8px;\n}\n\nbutton.edit-btn {\n    height: 22px;\n    width: 22px;\n    background-size: contain !important;\n    border: unset;\n    transition: 0.1 scale ease-in;\n}\n\nbutton.edit-btn:active {\n    scale: 1.1;\n}\n\nbutton#add-project:active {\n    font-weight: 500;\n    box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.2) inset;\n    background-color: unset;\n    scale: 0.99;\n    transition: 0.3s ease;\n\n\n}\n\n#add-project:hover {\n    /* box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.2); */\n    background-color: unset;\n    transition: 0.35s ease;\n\n}\n\n#add-project>* {\n    font-weight: 700;\n}\n\n@media screen and (max-width: 768px) {\n    .project {\n        padding: 0.6rem 0.9rem;\n    }\n\n    /* Inline #2 | http://127.0.0.1:5501/dist/ */\n\n\n    #side-bar {\n        flex-shrink: 0;\n    }\n\n    .page-wrapper {\n        overflow-x: hidden;\n    }\n\n    #heading {\n        font-size: 1.4rem;\n        padding-top: .5rem;\n        text-align: center;\n        padding-left: 0;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/task-form.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/task-form.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Style for desktop */
#task-form {
    min-width: 320px;
    max-width: 400px;
    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    color: #777;
    opacity: 1;
    top: 1rem;
    /* transition: max-width 0.6s ease, opacity 0.3s ease; */
    font-weight: 500;
    background-color: #fdfdfd;

}

#task-form input {
    background: unset;
}

#task-form.collapse {
    max-width: 0;
    opacity: 0;
}

#task-form .close-btn {
    align-self: flex-end;
    z-index: 3;
    cursor: pointer
}

.button,
.checkmark {
    cursor: pointer;
}

label.hidden {
    display: none
}

#task-form #taskName {
    font-size: 1.1rem;
    color: #555;
    padding: .2rem .5rem;
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-top: -0.8rem;
    margin-bottom: .8rem
}

input[type="text"]:focus-visible {
    outline: none;
    border-width: 2px
}

input[type="text"] {
    border: unset;
    border-bottom: 1.5px solid #888;
    text-align: center;
    width: 100%;
    color: #444
}

.form-row {
    width: 80%;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-between; */
    position: relative;
    margin: 0 auto
}

.calendar-logo {
    position: absolute;
    right: 0;
    top: 0
}

#dueDate {
    display: flex;
    border: unset;
    font-size: .8rem;
    font-size: 1rem;
    color: #444;
    translate: 4px 0;
    font-family: inherit;
    color: inherit
}

#dueDate:focus-visible {
    outline: none
}

label.dueDate {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline
}

span.button {
    position: absolute;
    z-index: 5;
    right: 0
}

span.button.hidden {
    display: none;
}

.submit-btn {
    background: unset;
    border: unset;
    display: flex;
    border-radius: 100%;
    cursor: pointer;
    margin-top: .8rem
}

.color {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
}

label {
    font-size: 1.1rem
}

.container {
    position: relative;
    top: 4px
}

.container input[type="radio"] {
    position: relative;
    cursor: pointer;
    opacity: 0
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    translate: -4px 0
}

.red.checkmark {
    background-color: #E74C3C
}

.yellow.checkmark {
    background-color: #F4D03F
}

.green.checkmark {
    background-color: #2ECC71
}

input:checked~.checkmark::after {
    content: '';
    display: block;
    border-radius: 100%;
    height: 50%;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: #fdfdfd
}

#subtasks {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%
}

.subtask {
    text-align: left !important;
    font-weight: 300;
    padding: .1rem .5rem
}

/* new rules for description */
#description {
    width: 100%;
    border: unset;
    background: transparent;
    font-size: 1rem;
    font-family: inherit;
    padding: 0.5rem;
    resize: none;
    border-bottom: 1px solid #888;
    height: 2rem;
    color: #555;
}

#description:focus,
#description:active {
    outline: none;
    border-bottom: 2px solid #888;
}


@media screen and (max-width: 768px) {
    #task-form {
        top: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/task-form.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6CAA6C;IAC7C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,UAAU;IACV,SAAS;IACT,wDAAwD;IACxD,gBAAgB;IAChB,yBAAyB;;AAE7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,UAAU;IACV;AACJ;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,WAAW;IACX;AACJ;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,oCAAoC;IACpC,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX;AACJ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf;AACJ;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,oBAAoB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX;AACJ;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB;AACJ;;AAEA,8BAA8B;AAC9B;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;;AAGA;IACI;QACI,SAAS;IACb;AACJ","sourcesContent":["/* Style for desktop */\n#task-form {\n    min-width: 320px;\n    max-width: 400px;\n    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);\n    border-radius: 12px;\n    padding: 1rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .8rem;\n    color: #777;\n    opacity: 1;\n    top: 1rem;\n    /* transition: max-width 0.6s ease, opacity 0.3s ease; */\n    font-weight: 500;\n    background-color: #fdfdfd;\n\n}\n\n#task-form input {\n    background: unset;\n}\n\n#task-form.collapse {\n    max-width: 0;\n    opacity: 0;\n}\n\n#task-form .close-btn {\n    align-self: flex-end;\n    z-index: 3;\n    cursor: pointer\n}\n\n.button,\n.checkmark {\n    cursor: pointer;\n}\n\nlabel.hidden {\n    display: none\n}\n\n#task-form #taskName {\n    font-size: 1.1rem;\n    color: #555;\n    padding: .2rem .5rem;\n    text-transform: capitalize;\n    font-size: 1.1rem;\n    margin-top: -0.8rem;\n    margin-bottom: .8rem\n}\n\ninput[type=\"text\"]:focus-visible {\n    outline: none;\n    border-width: 2px\n}\n\ninput[type=\"text\"] {\n    border: unset;\n    border-bottom: 1.5px solid #888;\n    text-align: center;\n    width: 100%;\n    color: #444\n}\n\n.form-row {\n    width: 80%;\n    /* display: flex; */\n    /* align-items: center; */\n    /* justify-content: space-between; */\n    position: relative;\n    margin: 0 auto\n}\n\n.calendar-logo {\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n#dueDate {\n    display: flex;\n    border: unset;\n    font-size: .8rem;\n    font-size: 1rem;\n    color: #444;\n    translate: 4px 0;\n    font-family: inherit;\n    color: inherit\n}\n\n#dueDate:focus-visible {\n    outline: none\n}\n\nlabel.dueDate {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: baseline\n}\n\nspan.button {\n    position: absolute;\n    z-index: 5;\n    right: 0\n}\n\nspan.button.hidden {\n    display: none;\n}\n\n.submit-btn {\n    background: unset;\n    border: unset;\n    display: flex;\n    border-radius: 100%;\n    cursor: pointer;\n    margin-top: .8rem\n}\n\n.color {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\nlabel {\n    font-size: 1.1rem\n}\n\n.container {\n    position: relative;\n    top: 4px\n}\n\n.container input[type=\"radio\"] {\n    position: relative;\n    cursor: pointer;\n    opacity: 0\n}\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.1rem;\n    width: 1.1rem;\n    border-radius: 50%;\n    translate: -4px 0\n}\n\n.red.checkmark {\n    background-color: #E74C3C\n}\n\n.yellow.checkmark {\n    background-color: #F4D03F\n}\n\n.green.checkmark {\n    background-color: #2ECC71\n}\n\ninput:checked~.checkmark::after {\n    content: '';\n    display: block;\n    border-radius: 100%;\n    height: 50%;\n    width: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    background-color: #fdfdfd\n}\n\n#subtasks {\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n    width: 100%\n}\n\n.subtask {\n    text-align: left !important;\n    font-weight: 300;\n    padding: .1rem .5rem\n}\n\n/* new rules for description */\n#description {\n    width: 100%;\n    border: unset;\n    background: transparent;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 0.5rem;\n    resize: none;\n    border-bottom: 1px solid #888;\n    height: 2rem;\n    color: #555;\n}\n\n#description:focus,\n#description:active {\n    outline: none;\n    border-bottom: 2px solid #888;\n}\n\n\n@media screen and (max-width: 768px) {\n    #task-form {\n        top: 1rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/todo.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/todo.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.todo-card {
    display: flex;
    background: whitesmoke;
    padding: 1rem;
    max-width: 378px;
    border-radius: 12px;
    background: #FDFDFD;
    box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.10);
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
    transition: 0.6s ease;
}

.todo-card.completed {
    opacity: 0.6;
    filter: grayscale(0.8);
    text-decoration: 2px solid #555 line-through;
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.05);
}

.todo-card .details {
    flex-grow: 2;
}

.todo-card .title {
    font-weight: 700;
    font-size: 1.375rem;
    color: #444;

}

.todo-card .due-date {
    color: #ACACAC;
    font-size: 0.75rem;
    font-weight: 400;
}

.priority {
    height: 20px;
    width: 20px;
    border-radius: 24px;
    background: #2ECC71;
    flex-shrink: 0;
    display: flex;
    overflow: clip;
}

.priority.high {
    background: #E74C3C;
}

.priority.medium {
    background: #F4D03F;
}

.priority.low {
    background: #2ECC71;
}

/* action buttons */
.actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;

}

.actions button {
    height: 30px;
    width: 30px;
    cursor: pointer;
    border: unset;
    background-size: contain !important;
}

.actions .edit-btn {
    height: 24px;
    width: 24px;
}

button.toggle-done {
    width: 100%;
    height: 100%;
    border: unset;
    opacity: 0;
    transition: 0.4s ease;
}


button.toggle-done:hover {
    opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/css/todo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,gDAAgD;IAChD,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,4CAA4C;IAC5C,gDAAgD;AACpD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;;AAEf;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;IACV,qBAAqB;AACzB;;;AAGA;IACI,UAAU;AACd","sourcesContent":[".todo-card {\n    display: flex;\n    background: whitesmoke;\n    padding: 1rem;\n    max-width: 378px;\n    border-radius: 12px;\n    background: #FDFDFD;\n    box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.10);\n    align-items: center;\n    gap: 0.6rem;\n    flex-shrink: 0;\n    transition: 0.6s ease;\n}\n\n.todo-card.completed {\n    opacity: 0.6;\n    filter: grayscale(0.8);\n    text-decoration: 2px solid #555 line-through;\n    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.05);\n}\n\n.todo-card .details {\n    flex-grow: 2;\n}\n\n.todo-card .title {\n    font-weight: 700;\n    font-size: 1.375rem;\n    color: #444;\n\n}\n\n.todo-card .due-date {\n    color: #ACACAC;\n    font-size: 0.75rem;\n    font-weight: 400;\n}\n\n.priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 24px;\n    background: #2ECC71;\n    flex-shrink: 0;\n    display: flex;\n    overflow: clip;\n}\n\n.priority.high {\n    background: #E74C3C;\n}\n\n.priority.medium {\n    background: #F4D03F;\n}\n\n.priority.low {\n    background: #2ECC71;\n}\n\n/* action buttons */\n.actions {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n\n}\n\n.actions button {\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n    border: unset;\n    background-size: contain !important;\n}\n\n.actions .edit-btn {\n    height: 24px;\n    width: 24px;\n}\n\nbutton.toggle-done {\n    width: 100%;\n    height: 100%;\n    border: unset;\n    opacity: 0;\n    transition: 0.4s ease;\n}\n\n\nbutton.toggle-done:hover {\n    opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Mulish', sans-serif;
    background-color: antiquewhite;
}

#app {
    background-color: #FDFDFD;
    display: flex;
    height: 100vh;
    height: 100svh;
    overflow: hidden;
}


#sidebar {
    flex-basis: 260px;
    background: #FDFDFD;
    display: grid;
    align-content: baseline;
    grid-template-rows: min-content;
    grid-gap: 0.6rem;

    padding: 1rem;
    position: relative;
    overflow-x: hidden;
    z-index: 10;
    opacity: 1;
    transition: 0.4s ease, opacity 0.3s ease;
    scrollbar-width: none;
    border-right: 4px solid #F5F5F5;
}

#sidebar.closed {
    flex-basis: 0px;
    width: 0px;
    padding: 0px;
    opacity: 0;
}

#open-sidebar {
    display: none;
}


#main {
    flex-grow: 1;
    background-color: #FBFBFB;
    display: flex;
    flex-direction: column;
    padding: 1rem;

}

#content {
    /* flex-grow: 2;s */
    gap: 1rem;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));
    align-items: stretch;
}


#heading {
    font-size: 1.8rem;
    padding-top: .2rem;
    color: #444444;
    text-transform: capitalize;
}

.padded {
    padding-left: 3.8rem;
    transition: 0.3s ease;
    /* ?Change to >0.5 for bouncy effect */
}


#minimaList {
    justify-self: center;
    width: 120px;
    padding: 0.8rem;
}

#sidebar #close-sidebar,
#open-sidebar {
    padding: 0.6rem 0.8rem;
    cursor: pointer;
}

#open-sidebar {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    display: block;
}


#sidebar #close-sidebar {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
}

#add-task {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    background: unset;
    border: unset;
    border-radius: 100%;
    height: 42px;
    width: 42px;
    display: flex;
    place-content: center;
    padding: 6px;
    background-color: #efefef;
    bottom: 0.5rem;
    translate: -50% 0;
    cursor: pointer;
}

@media screen and (max-width: 768px) {

    #sidebar {
        grid-gap: 0.6rem;
        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.24);
        border: unset;
        position: absolute;
        top: 0;
        left: 0;
        height: 100svh;
        max-width: 320px;
        width: 75%;
    }

    #Logo {
        width: 100px;
    }

    #main-heading {
        display: none;
    }


    #content {
        align-self: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        overflow: scroll;
        height: 90%;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAIA;IACI,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;;AAGA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,+BAA+B;IAC/B,gBAAgB;;IAEhB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,wCAAwC;IACxC,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,4DAA4D;IAC5D,oBAAoB;AACxB;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,sCAAsC;AAC1C;;;AAGA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;IACV,cAAc;AAClB;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI;QACI,gBAAgB;QAChB,iDAAiD;QACjD,aAAa;QACb,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,cAAc;QACd,gBAAgB;QAChB,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;;IAGA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,aAAa;QACb,gBAAgB;QAChB,WAAW;IACf;;AAEJ","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');\n\nbody {\n    font-family: 'Mulish', sans-serif;\n    background-color: antiquewhite;\n}\n\n#app {\n    background-color: #FDFDFD;\n    display: flex;\n    height: 100vh;\n    height: 100svh;\n    overflow: hidden;\n}\n\n\n#sidebar {\n    flex-basis: 260px;\n    background: #FDFDFD;\n    display: grid;\n    align-content: baseline;\n    grid-template-rows: min-content;\n    grid-gap: 0.6rem;\n\n    padding: 1rem;\n    position: relative;\n    overflow-x: hidden;\n    z-index: 10;\n    opacity: 1;\n    transition: 0.4s ease, opacity 0.3s ease;\n    scrollbar-width: none;\n    border-right: 4px solid #F5F5F5;\n}\n\n#sidebar.closed {\n    flex-basis: 0px;\n    width: 0px;\n    padding: 0px;\n    opacity: 0;\n}\n\n#open-sidebar {\n    display: none;\n}\n\n\n#main {\n    flex-grow: 1;\n    background-color: #FBFBFB;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n\n}\n\n#content {\n    /* flex-grow: 2;s */\n    gap: 1rem;\n    padding-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));\n    align-items: stretch;\n}\n\n\n#heading {\n    font-size: 1.8rem;\n    padding-top: .2rem;\n    color: #444444;\n    text-transform: capitalize;\n}\n\n.padded {\n    padding-left: 3.8rem;\n    transition: 0.3s ease;\n    /* ?Change to >0.5 for bouncy effect */\n}\n\n\n#minimaList {\n    justify-self: center;\n    width: 120px;\n    padding: 0.8rem;\n}\n\n#sidebar #close-sidebar,\n#open-sidebar {\n    padding: 0.6rem 0.8rem;\n    cursor: pointer;\n}\n\n#open-sidebar {\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    z-index: 1;\n    display: block;\n}\n\n\n#sidebar #close-sidebar {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    cursor: pointer;\n}\n\n#add-task {\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    background: unset;\n    border: unset;\n    border-radius: 100%;\n    height: 42px;\n    width: 42px;\n    display: flex;\n    place-content: center;\n    padding: 6px;\n    background-color: #efefef;\n    bottom: 0.5rem;\n    translate: -50% 0;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n\n    #sidebar {\n        grid-gap: 0.6rem;\n        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.24);\n        border: unset;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100svh;\n        max-width: 320px;\n        width: 75%;\n    }\n\n    #Logo {\n        width: 100px;\n    }\n\n    #main-heading {\n        display: none;\n    }\n\n\n    #content {\n        align-self: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        padding: 1rem;\n        overflow: scroll;\n        height: 90%;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/modal/modal.css":
/*!****************************************!*\
  !*** ./src/components/modal/modal.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modal/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/project-form.css":
/*!**********************************!*\
  !*** ./src/css/project-form.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/project-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/project.css":
/*!*****************************!*\
  !*** ./src/css/project.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/task-form.css":
/*!*******************************!*\
  !*** ./src/css/task-form.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task-form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/task-form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/todo.css":
/*!**************************!*\
  !*** ./src/css/todo.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.css */ "./src/components/modal/modal.css");


const Modal = (() => {
    const modalWindow = document.createElement('div');
    modalWindow.id = 'modal-window';
    modalWindow.classList.add('hidden');
    document.body.appendChild(modalWindow);

    //Methods
    const renderModal = (content) => {
        modalWindow.innerHTML = ''
        modalWindow.appendChild(content);
        modalWindow.classList.remove('hidden');
    }

    const closeModal = () => {
        modalWindow.classList.add('hidden');
    }

    modalWindow.addEventListener('click', (event) => { handleClick(event) });

    function handleClick(event) {
        if (event.target.matches('#modal-window')) {
            closeModal();
        }
    }

    return { renderModal, closeModal }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/old-task-form/task-form.js":
/*!***************************************************!*\
  !*** ./src/components/old-task-form/task-form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-plus.svg */ "./src/components/old-task-form/add-plus.svg");
/* harmony import */ var _close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-circle-outline.svg */ "./src/components/old-task-form/close-circle-outline.svg");
/* harmony import */ var _checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkmark-circle-outline.svg */ "./src/components/old-task-form/checkmark-circle-outline.svg");
/* harmony import */ var _trash_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash-outline.svg */ "./src/components/old-task-form/trash-outline.svg");
/* harmony import */ var _css_task_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/task-form.css */ "./src/css/task-form.css");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _js_UIController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/UIController */ "./src/js/UIController.js");
/* harmony import */ var _js_projectManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _js_toDoManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/toDoManager */ "./src/js/toDoManager.js");













const TaskForm = (() => {
    const taskForm = document.createElement('form');
    taskForm.id = "task-form";
    // taskForm.classList.add('collapse');
    taskForm.innerHTML = `
                        <img src="${_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="" class="close-btn">
                        <div class="form-row">
                            <label for="taskName" class="hidden">Task Name</label>
                            <input type="text" id="taskName" name="taskName" placeholder="Task Name" required>
                        </div>
                        <div class="form-row">
                            <label class="dueDate">Due Date:
                                <input type="date" name="date" id="dueDate">
                            </label>
                        </div>
                        <div class="form-row">
                            <label class="color">
                                Color :
                                <label class="container">
                                    <input type="radio" name="color" id="high" value="high">
                                    <span class="red checkmark"></span>
                                </label>
                                <label class="container">
                                    <input type="radio" name="color" id="medium" value="medium">
                                    <span class="yellow checkmark"></span>
                                </label>
                                <label class="container">
                                    <input type="radio" name="color" id="low"  value="low" checked>
                                    <span class="green checkmark"></span>
                                </label>
                            </label>
                        </div>
                        <div class="form-row">
                            <label for = "description" class = "hidden">Description</label>
                            <textarea name="description" id ="description" placeholder="Add Description..." resize = "true"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <img src="${_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="submit">
                        </button>`


    taskForm.addEventListener('click',
        function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) {
                hideForm();
                _modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"].closeModal();
            }
        });

    taskForm.addEventListener('submit', (event) => {
        saveProject(event);
        hideForm();
    });


    function hideForm() {
        _modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"].closeModal();
    }


    function saveProject(event) {
        event.preventDefault();
        // Collecting Data from the form
        let taskData = new FormData(taskForm);
        const taskName = taskData.get('taskName');
        const dueDate = taskData.get('date');
        const priority = taskData.get('color').toLowerCase();
        const description = taskData.get('description');

        //Get active Project and append the new task to the project
        const activeProject = _js_projectManager__WEBPACK_IMPORTED_MODULE_7__["default"].getActiveProject();
        _js_toDoManager__WEBPACK_IMPORTED_MODULE_8__["default"].createNewTodo(activeProject, taskName, description, dueDate, priority)
        event.target.reset();

        // render the new task by forcing re render
        _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateTodo(activeProject);

    }


    const newTask = () => taskForm;

    return { newTask }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskForm);

/***/ }),

/***/ "./src/components/project-form/project-form.js":
/*!*****************************************************!*\
  !*** ./src/components/project-form/project-form.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _old_task_form_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../old-task-form/close-circle-outline.svg */ "./src/components/old-task-form/close-circle-outline.svg");
/* harmony import */ var _old_task_form_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../old-task-form/checkmark-circle-outline.svg */ "./src/components/old-task-form/checkmark-circle-outline.svg");
/* harmony import */ var _js_UIController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/UIController */ "./src/js/UIController.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _js_projectManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/projectManager */ "./src/js/projectManager.js");









const ProjectForm = (() => {
    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');
    const projectFormHtml =
        `<img src="${_old_task_form_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="" class="close-btn">
<div class="form-row">
    <label for="project-name" class="hidden">Project Name</label>
    <input type="text" id="project-name" name="project-name" placeholder="Project Name" required>
</div>
<button type="submit" class="submit-btn">
    <img src="${_old_task_form_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="submit">
</button>`

    projectForm.innerHTML = projectFormHtml;
    projectForm.addEventListener('click', function (event) {
        const btn = event.target;
        if (btn.matches('.close-btn')) {
            hideForm();
        }
    });

    projectForm.addEventListener('submit', (event) => saveProject(event))


    function saveProject(event) {
        event.preventDefault();
        let taskData = new FormData(projectForm);
        const projectName = taskData.get('project-name');
        console.log({ projectName })

        const newProject = _js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewProject(projectName);

        _js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].switchProject(newProject);

        _js_UIController__WEBPACK_IMPORTED_MODULE_2__["default"].updateProjectList();
        console.log('active project', _js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].getActiveProject())
        event.target.reset();
        _modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal();
    }

    function hideForm() {
        _modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal();
    }


    const newEditForm = (project) => {
        const editForm = document.createElement('form');
        editForm.classList.add('project-form');
        editForm.innerHTML =
            `
                        <img src="${_old_task_form_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="" class="close-btn">
                        <div class="form-row">
                            <label for="project-name" class="hidden">Project Name</label>
                            <input type="text" id="project-name" name="project-name" placeholder="Project Name" required value = "${project.name}">
                        </div>
                        <button type="submit" class="submit-btn">
                        <img src="${_old_task_form_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="submit">
                        </button>
                        `
        //To listen for form close
        editForm.addEventListener('click', function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) {
                hideForm();
            }
        });

        editForm.addEventListener('submit', (event) => handleUpdate(event));

        function handleUpdate(event) {
            event.preventDefault();

            let taskData = new FormData(editForm);
            const newName = taskData.get('project-name');
            console.log({ newName });
            project.name = newName;

            event.target.reset();
            _modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal();

            // force UI re render
            _js_UIController__WEBPACK_IMPORTED_MODULE_2__["default"].updateProjectList()
            _js_UIController__WEBPACK_IMPORTED_MODULE_2__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].getActiveProject());

        }

        return editForm
    }
    const newForm = () => projectForm;

    return { newForm, newEditForm }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectForm);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _css_project_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/project.css */ "./src/css/project.css");
/* harmony import */ var _css_todo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/todo.css */ "./src/css/todo.css");
/* harmony import */ var _js_projectManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _js_toDoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/toDoManager */ "./src/js/toDoManager.js");
/* harmony import */ var _js_UIController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/UIController */ "./src/js/UIController.js");
/* harmony import */ var _components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/old-task-form/task-form.js */ "./src/components/old-task-form/task-form.js");
/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal/modal.js */ "./src/components/modal/modal.js");
/* harmony import */ var _css_project_form_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/project-form.css */ "./src/css/project-form.css");
/* harmony import */ var _components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project-form/project-form.js */ "./src/components/project-form/project-form.js");
// imports








// Initialise Application
const homeProject = _js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].createNewProject('Home');

// Set initial project to active
_js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].switchProject(homeProject);


// Add dummy tasks to the project
_js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Buy Groceries", "1 kg tomatoes, 1kg potato", "29-01-2024", "medium");
_js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Study for exams", "", "29-01-2024", "high");


// First render the projects div
_js_UIController__WEBPACK_IMPORTED_MODULE_5__["default"].updateProjectList();
_js_UIController__WEBPACK_IMPORTED_MODULE_5__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].getActiveProject());


//todo Include the code after this in its own module
const sideBar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const openSidebarBtn = document.getElementById('open-sidebar');


// Close and Open Functionality
closeSidebarBtn.addEventListener('click', () => toggleSideBar(true));
openSidebarBtn.addEventListener('click', () => toggleSideBar(false))
const heading = document.getElementById('heading');

function toggleSideBar(isSideBarOpen) {
    if (isSideBarOpen) {
        sideBar.classList.add('closed');
        heading.classList.add('padded');

    }
    else {
        sideBar.classList.remove('closed');
        heading.classList.remove('padded');
    }
}

function resizeSideBar() {
    if (window.innerWidth < 768) {
        sideBar.classList.add('closed');
    } else {
        sideBar.classList.remove('closed');
    }
}

resizeSideBar();
// for dynamically closing SideBar
window.addEventListener('resize', resizeSideBar);





const newProjectBtn = document.getElementById('add-project');

newProjectBtn.addEventListener('click', () => {
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderModal(_components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_8__["default"].newForm());
})

const newTaskBtn = document.getElementById('add-task')
newTaskBtn.addEventListener('click', () => {
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_7__["default"].renderModal(_components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_6__["default"].newTask());
})


;




/***/ }),

/***/ "./src/js/UIController.js":
/*!********************************!*\
  !*** ./src/js/UIController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/icons/pencil.svg */ "./src/assets/icons/pencil.svg");
/* harmony import */ var _assets_icons_expand_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/icons/expand.svg */ "./src/assets/icons/expand.svg");
/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoManager */ "./src/js/toDoManager.js");
/* harmony import */ var _components_project_form_project_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project-form/project-form */ "./src/components/project-form/project-form.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal/modal */ "./src/components/modal/modal.js");
// Responsibility: Manages DOM-related interactions and updates.


const projectsContainer = document.getElementById('projects-container');
const contentDiv = document.getElementById('content');
const subheading = document.getElementById('subheading');






const UIcontroller = (() => {
    const updateProjectList = () => {
        // update project list in UI
        projectsContainer.innerHTML = '';
        const allProjects = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].viewAllProjects();
        allProjects.forEach((item) => { renderProject(item) })

    }

    const updateTodo = (project) => {
        // update todo list in UI
        contentDiv.innerHTML = ''
        // console.table(projectManager.viewTodosInProject(project));
        const allTodos = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].viewTodosInProject(project)
        allTodos.forEach((item) => { renderTodo(item) });

        subheading.innerText = ` ${project.name}`

        updateProjectList()
    }

    const expandTodoDetails = (todo) => {
        // Expand a todo item to display and edit its details
    }

    const showError = (message) => {
        //Display Error messages to the user
        const errorMessage = document.createElement('p')
        errorMessage.classList.add('error-message');
        _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].renderModal(errorMessage);
    }
    const clearFields = () => {
        // Clear input field after input/editing todos
    }


    return { updateProjectList, updateTodo }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIcontroller);





// Helper Functions
const renderProject = (project) => {

    const card = projectCardGenerator(project);

    // Attach event listener to listen for render 
    card.addEventListener('click', (event) => {

        // make clicked project as active and render the tasks in it
        _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].switchProject(project);
        UIcontroller.updateTodo(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getActiveProject())

        // if edit button clicked
        if (event.target.matches('.edit-btn')) {
            _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].renderModal(_components_project_form_project_form__WEBPACK_IMPORTED_MODULE_5__["default"].newEditForm(project));
        }
    });

    // add card to sidebar
    projectsContainer.append(card);
}


const renderTodo = (todo) => {
    // console.log(todo);
    const todoCard = todoCardGenerator(todo);
    todoCard.addEventListener('click', (event) => handleTodoClick(event))

    function handleTodoClick(event) {
        if (event.target.matches('.edit-btn')) editTodo(todo);
        if (event.target.matches('.expand-btn')) expandTodo(todo);
        if (event.target.matches('.toggle-done')) {
            _toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].toggleTodoStatus(todo);
            todoCard.classList.toggle('completed');
        };
        console.table(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].viewAllProjects()[0].todos);
    }
    contentDiv.append(todoCard);
}

const projectCardGenerator = (project) => {
    const card = document.createElement('div');
    card.classList.add('project-tab');
    card.dataset.name = project.name;
    const cardHtml = `
                    <span class = "symbol">${project.name[0]}</span>
                    <p class="name">${project.name}</p>
                    <p class="count">${project.todos.length}</p>
                    <button class="edit-btn" style = "background : url(${_assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__})"></button>
                `
    card.innerHTML = cardHtml;
    // console.log(card)
    return card;
}


const todoCardGenerator = (todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoCard.dataset.index = todo.index

    if (todo.isDone) todoCard.classList.add('completed');

    const cardHtml = `
                        <div class="priority ${todo.priority}">
                            <button class="toggle-done"> </button>
                        </div>
                        <div class="details">
                            <p class="title">${todo.title}</p>
                            <p class="due-date">${todo.dueDate}</p>
                        </div>
                        <div class = "actions">
                            <button class = "edit-btn" style ="background:url(${_assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__}) ;"></button>
                            <button class = "expand-btn" style ="background:url(${_assets_icons_expand_svg__WEBPACK_IMPORTED_MODULE_2__})"></button>
                        </div>
                    `
    todoCard.innerHTML = cardHtml;
    return todoCard;
}

/***/ }),

/***/ "./src/js/projectFactory.js":
/*!**********************************!*\
  !*** ./src/js/projectFactory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
// Responsibility: Creates instances of project objects.

const createProject = (name = 'default') => {
    const project = {
        // props
        name: name,
        todos: [],

        //methods
        addTodo: function (todo) {
            this.todos.push(todo)
        },
        removeTodo: function (todo) {
            const index = this.todos.indexOf(todo)
            if (index !== -1) { this.todos.splice(index, 1) }
        }

    }
    return project
}



/***/ }),

/***/ "./src/js/projectManager.js":
/*!**********************************!*\
  !*** ./src/js/projectManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ "./src/js/projectFactory.js");
// Responsibility: Creates instances of todo items with the specified properties.



const projectManager = (() => {
    const projects = []
    let activeProject = null;


    const createNewProject = (projectName) => {
        const newProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);
        projects.push(newProject);
        return newProject;
    }

    const switchProject = (project) => {
        activeProject = project
    };

    const getActiveProject = () => activeProject;

    const deleteProject = (project) => {
        const index = projects.indexOf(project);
        if (index !== -1) {
            projects.splice(index, 1);
            // If the deleted project was the active project, set activeProject to null
            if (activeProject === project) {
                activeProject = null;
            }
        }
    };

    const viewAllProjects = () => {
        return projects.slice(); // Return a copy of the projects array
    };

    const viewTodosInProject = (project) => {
        return project.todos.slice(); // Return a copy of the todos array within the specified project
    };

    return { createNewProject, switchProject, getActiveProject, deleteProject, viewAllProjects, viewTodosInProject }
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/js/toDoFactory.js":
/*!*******************************!*\
  !*** ./src/js/toDoFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
// Responsibility: Creates instances of project objects.

const createTodo = (title = '', description = '', dueDate = null, priority = 'low', isDone = false) => {
    const todo = {
        // props
        title: title,
        dueDate: dueDate,
        description: description,
        priority: priority,
        isDone: isDone,

        // methods
        updateTodo: function (newTitle, newDescription, newDueDate, newPriority) {
            this.title = newTitle;
            this.description = newDescription;
            this.dueDate = newDueDate;
            this.priority = newPriority;
        },

        toggleStatus: function () { this.isDone = !this.isDone },
    };

    return todo;
}



/***/ }),

/***/ "./src/js/toDoManager.js":
/*!*******************************!*\
  !*** ./src/js/toDoManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoFactory */ "./src/js/toDoFactory.js");
// Responsibility: Handles application logic related to todos.



const todoManager = (() => {

    const createNewTodo = (project, title, description, dueDate, priority) => {
        const newTodo = (0,_toDoFactory__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, description, dueDate, priority);
        project.addTodo(newTodo);
    }
    const editTodo = (todo, newTitle, newDescription, newDueDate, newPriority) => {
        todo.updateTodo(newTitle, newDescription, newDueDate, newPriority);
    }

    const deleteTodo = (todo) => {
        if (activeProject) { activeProject.removeTodo(todo) }
    }

    const toggleTodoStatus = (todo) => todo.toggleStatus()

    return {
        createNewTodo,
        editTodo,
        deleteTodo,
        toggleTodoStatus,
    };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoManager);
// wrap above in I.I.F.E

/***/ }),

/***/ "./src/assets/icons/expand.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/expand.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c6a696e42fe383d4cc.svg";

/***/ }),

/***/ "./src/assets/icons/pencil.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/pencil.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cbe41c098eace116f04.svg";

/***/ }),

/***/ "./src/components/old-task-form/add-plus.svg":
/*!***************************************************!*\
  !*** ./src/components/old-task-form/add-plus.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aba3e4681de0d6eab8b.svg";

/***/ }),

/***/ "./src/components/old-task-form/checkmark-circle-outline.svg":
/*!*******************************************************************!*\
  !*** ./src/components/old-task-form/checkmark-circle-outline.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aee5ffb4ad3e8b720ece.svg";

/***/ }),

/***/ "./src/components/old-task-form/close-circle-outline.svg":
/*!***************************************************************!*\
  !*** ./src/components/old-task-form/close-circle-outline.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f10c7084d8bfe37501b.svg";

/***/ }),

/***/ "./src/components/old-task-form/trash-outline.svg":
/*!********************************************************!*\
  !*** ./src/components/old-task-form/trash-outline.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32664d1e92b0f25194ea.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLENBQUMsT0FBTyxpR0FBaUcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsd0NBQXdDLGtCQUFrQixvQkFBb0IscUJBQXFCLHNCQUFzQiwyQkFBMkIsYUFBYSxjQUFjLHlCQUF5QixvQkFBb0IsNEJBQTRCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLEdBQUcsMEJBQTBCLHFCQUFxQix3Q0FBd0MsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3J1QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssd0NBQXdDLHVCQUF1Qix1QkFBdUIsb0RBQW9ELDBCQUEwQixvQkFBb0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixrQkFBa0IsaUJBQWlCLHlEQUF5RCx1QkFBdUIsZ0NBQWdDLEtBQUssNEJBQTRCLG1CQUFtQixpQkFBaUIsR0FBRyx5QkFBeUIsMkJBQTJCLHdCQUF3QixhQUFhLHNCQUFzQixHQUFHLGlDQUFpQyx3QkFBd0IsMkJBQTJCLGlDQUFpQyx3QkFBd0Isb0JBQW9CLHdDQUF3QyxvQkFBb0Isd0JBQXdCLEdBQUcsMEJBQTBCLG9CQUFvQixzQ0FBc0MseUJBQXlCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHdCQUF3QixvQkFBb0Isb0JBQW9CLDBCQUEwQixHQUFHLGtCQUFrQixzQkFBc0IsbUJBQW1CO0FBQzl3RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sc0ZBQXNGLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFNBQVMsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLGNBQWMsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sNkNBQTZDLG9CQUFvQixHQUFHLHVDQUF1QyxvQkFBb0IsMkJBQTJCLGlCQUFpQiwwQkFBMEIsMEJBQTBCLHFCQUFxQiwrQkFBK0IsZ0NBQWdDLGtCQUFrQiw2QkFBNkIsd0NBQXdDLHFCQUFxQixHQUFHLHVEQUF1RCx3REFBd0QsOEJBQThCLDZCQUE2QixHQUFHLHlCQUF5Qix1REFBdUQsdUJBQXVCLDhCQUE4QixHQUFHLDRCQUE0QixvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLGtDQUFrQyxpQ0FBaUMsbUJBQW1CLHdCQUF3Qix1QkFBdUIsR0FBRyxhQUFhLHVCQUF1QixnQ0FBZ0MsNkJBQTZCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsa0JBQWtCLDBDQUEwQyxvQkFBb0Isb0NBQW9DLEdBQUcsNEJBQTRCLGlCQUFpQixHQUFHLCtCQUErQix1QkFBdUIsNkRBQTZELDhCQUE4QixrQkFBa0IsNEJBQTRCLE9BQU8sd0JBQXdCLDJEQUEyRCxnQ0FBZ0MsNkJBQTZCLEtBQUssb0JBQW9CLHVCQUF1QixHQUFHLDBDQUEwQyxnQkFBZ0IsaUNBQWlDLE9BQU8sMEVBQTBFLHlCQUF5QixPQUFPLHVCQUF1Qiw2QkFBNkIsT0FBTyxrQkFBa0IsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsMEJBQTBCLE9BQU8sS0FBSyxtQkFBbUI7QUFDMzlGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0ZBQStGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxRQUFRLEtBQUssS0FBSyxVQUFVLEtBQUssOERBQThELHVCQUF1Qix1QkFBdUIsb0RBQW9ELDBCQUEwQixvQkFBb0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGlCQUFpQixrQkFBa0IsaUJBQWlCLGdCQUFnQiw2REFBNkQseUJBQXlCLGdDQUFnQyxLQUFLLHNCQUFzQix3QkFBd0IsR0FBRyx5QkFBeUIsbUJBQW1CLGlCQUFpQixHQUFHLDJCQUEyQiwyQkFBMkIsaUJBQWlCLHdCQUF3QiwwQkFBMEIsc0JBQXNCLEdBQUcsa0JBQWtCLHNCQUFzQiwwQkFBMEIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsaUNBQWlDLHdCQUF3QiwwQkFBMEIsNkJBQTZCLHdDQUF3QyxvQkFBb0IsMEJBQTBCLDBCQUEwQixvQkFBb0Isc0NBQXNDLHlCQUF5QixrQkFBa0Isb0JBQW9CLGVBQWUsaUJBQWlCLHdCQUF3QixnQ0FBZ0MsMkNBQTJDLDJCQUEyQix1QkFBdUIsb0JBQW9CLHlCQUF5QixlQUFlLGVBQWUsY0FBYyxvQkFBb0Isb0JBQW9CLHVCQUF1QixzQkFBc0Isa0JBQWtCLHVCQUF1QiwyQkFBMkIsdUJBQXVCLDRCQUE0QixzQkFBc0IsbUJBQW1CLG9CQUFvQixxQ0FBcUMsa0JBQWtCLDhCQUE4QixpQkFBaUIseUJBQXlCLGlCQUFpQixpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLGlCQUFpQix3QkFBd0Isb0JBQW9CLG9CQUFvQiwwQkFBMEIsc0JBQXNCLDBCQUEwQixZQUFZLGtCQUFrQixvQkFBb0IsMEJBQTBCLHVDQUF1QyxXQUFXLDBCQUEwQixnQkFBZ0IseUJBQXlCLGlCQUFpQixzQ0FBc0MseUJBQXlCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLHlCQUF5QixhQUFhLGNBQWMscUJBQXFCLG9CQUFvQix5QkFBeUIsMEJBQTBCLG9CQUFvQixrQ0FBa0MsdUJBQXVCLGtDQUFrQyxzQkFBc0Isa0NBQWtDLHFDQUFxQyxrQkFBa0IscUJBQXFCLDBCQUEwQixrQkFBa0IsaUJBQWlCLHlCQUF5QixlQUFlLGdCQUFnQiwyQkFBMkIsa0NBQWtDLGVBQWUsb0JBQW9CLDZCQUE2QixrQkFBa0Isb0JBQW9CLGNBQWMsa0NBQWtDLHVCQUF1Qiw2QkFBNkIsbURBQW1ELGtCQUFrQixvQkFBb0IsOEJBQThCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLG1CQUFtQixvQ0FBb0MsbUJBQW1CLGtCQUFrQixHQUFHLDhDQUE4QyxvQkFBb0Isb0NBQW9DLEdBQUcsNENBQTRDLGtCQUFrQixvQkFBb0IsT0FBTyxHQUFHLG1CQUFtQjtBQUMveUs7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xPdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUscUNBQXFDLG9CQUFvQiw2QkFBNkIsb0JBQW9CLHVCQUF1QiwwQkFBMEIsMEJBQTBCLHVEQUF1RCwwQkFBMEIsa0JBQWtCLHFCQUFxQiw0QkFBNEIsR0FBRywwQkFBMEIsbUJBQW1CLDZCQUE2QixtREFBbUQsdURBQXVELEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLHVCQUF1Qix1QkFBdUIsMEJBQTBCLGtCQUFrQixLQUFLLDBCQUEwQixxQkFBcUIseUJBQXlCLHVCQUF1QixHQUFHLGVBQWUsbUJBQW1CLGtCQUFrQiwwQkFBMEIsMEJBQTBCLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsb0JBQW9CLDBCQUEwQixHQUFHLHNCQUFzQiwwQkFBMEIsR0FBRyxtQkFBbUIsMEJBQTBCLEdBQUcsb0NBQW9DLG9CQUFvQixrQkFBa0IsMEJBQTBCLEtBQUsscUJBQXFCLG1CQUFtQixrQkFBa0Isc0JBQXNCLG9CQUFvQiwwQ0FBMEMsR0FBRyx3QkFBd0IsbUJBQW1CLGtCQUFrQixHQUFHLHdCQUF3QixrQkFBa0IsbUJBQW1CLG9CQUFvQixpQkFBaUIsNEJBQTRCLEdBQUcsZ0NBQWdDLGlCQUFpQixHQUFHLG1CQUFtQjtBQUNoMUU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUI7QUFDNU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSw0QkFBNEIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyxpRkFBaUYsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxzQkFBc0IsVUFBVSx3Q0FBd0MscUNBQXFDLEdBQUcsVUFBVSxnQ0FBZ0Msb0JBQW9CLG9CQUFvQixxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLDhCQUE4QixzQ0FBc0MsdUJBQXVCLHNCQUFzQix5QkFBeUIseUJBQXlCLGtCQUFrQixpQkFBaUIsK0NBQStDLDRCQUE0QixzQ0FBc0MsR0FBRyxxQkFBcUIsc0JBQXNCLGlCQUFpQixtQkFBbUIsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGFBQWEsbUJBQW1CLGdDQUFnQyxvQkFBb0IsNkJBQTZCLG9CQUFvQixLQUFLLGNBQWMsc0JBQXNCLG9CQUFvQix3QkFBd0Isb0JBQW9CLG1FQUFtRSwyQkFBMkIsR0FBRyxnQkFBZ0Isd0JBQXdCLHlCQUF5QixxQkFBcUIsaUNBQWlDLEdBQUcsYUFBYSwyQkFBMkIsNEJBQTRCLGdEQUFnRCxtQkFBbUIsMkJBQTJCLG1CQUFtQixzQkFBc0IsR0FBRyw2Q0FBNkMsNkJBQTZCLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIscUJBQXFCLEdBQUcsK0JBQStCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHNCQUFzQixHQUFHLGVBQWUseUJBQXlCLG1CQUFtQixnQkFBZ0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLGtCQUFrQixvQkFBb0IsNEJBQTRCLG1CQUFtQixnQ0FBZ0MscUJBQXFCLHdCQUF3QixzQkFBc0IsR0FBRywwQ0FBMEMsa0JBQWtCLDJCQUEyQiw0REFBNEQsd0JBQXdCLDZCQUE2QixpQkFBaUIsa0JBQWtCLHlCQUF5QiwyQkFBMkIscUJBQXFCLE9BQU8sZUFBZSx1QkFBdUIsT0FBTyx1QkFBdUIsd0JBQXdCLE9BQU8sb0JBQW9CLDZCQUE2QixzQkFBc0Isd0JBQXdCLGlDQUFpQyx3QkFBd0IsMkJBQTJCLHNCQUFzQixPQUFPLEtBQUssbUJBQW1CO0FBQ2oxSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzFLMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJbUQ7QUFDM0UsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE2RztBQUM3RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSXVEO0FBQy9FLE9BQU8saUVBQWUsNkZBQU8sSUFBSSw2RkFBTyxVQUFVLDZGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLHdGQUFPLElBQUksd0ZBQU8sVUFBVSx3RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLDBGQUFPLFVBQVUsMEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYm9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVELG9CQUFvQjs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZ0I7QUFDYTtBQUNLO0FBQ1g7OztBQUdYOztBQUVFO0FBQ2M7QUFDSTtBQUNOOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNEQUFRLENBQUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMERBQVMsQ0FBQztBQUNsRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBSztBQUNyQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxRQUFRLG9EQUFLO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsMERBQWM7QUFDNUMsUUFBUSx1REFBVztBQUNuQjs7QUFFQTtBQUNBLFFBQVEsd0RBQVk7O0FBRXBCOzs7QUFHQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkd5QztBQUNLO0FBQ3BCOztBQUVkOztBQUVrQjs7O0FBR3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9FQUFRLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3RUFBUyxDQUFDO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7O0FBRW5DLDJCQUEyQiwwREFBYzs7QUFFekMsUUFBUSwwREFBYzs7QUFFdEIsUUFBUSx3REFBWTtBQUNwQixzQ0FBc0MsMERBQWM7QUFDcEQ7QUFDQSxRQUFRLG9EQUFLO0FBQ2I7O0FBRUE7QUFDQSxRQUFRLG9EQUFLO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0VBQVEsQ0FBQztBQUM3QztBQUNBO0FBQ0Esb0lBQW9JLGFBQWE7QUFDako7QUFDQTtBQUNBLG9DQUFvQyx3RUFBUyxDQUFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DOztBQUVBO0FBQ0EsWUFBWSxvREFBSzs7QUFFakI7QUFDQSxZQUFZLHdEQUFZO0FBQ3hCLFlBQVksd0RBQVksWUFBWSwwREFBYzs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RzFCO0FBQ29CO0FBQ007QUFDSDs7QUFFeUI7QUFDTDtBQUNFOztBQUU3QztBQUNBLG9CQUFvQiwwREFBYzs7QUFFbEM7QUFDQSwwREFBYzs7O0FBR2Q7QUFDQSx1REFBVztBQUNYLHVEQUFXOzs7QUFHWDtBQUNBLHdEQUFZO0FBQ1osd0RBQVksWUFBWSwwREFBYzs7O0FBR3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRStEOztBQUVmOztBQUVoRDs7QUFFQTtBQUNBLElBQUksa0VBQUssYUFBYSxnRkFBVztBQUNqQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGtFQUFLLGFBQWEsOEVBQVE7QUFDOUIsQ0FBQzs7O0FBR0QsQ0FBK0I7QUFDcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RXBFO0FBQzhDOztBQUU5QztBQUNBO0FBQ0E7OztBQUdtRDtBQUNFOzs7QUFHckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWM7QUFDMUMsd0NBQXdDLHFCQUFxQjs7QUFFN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWM7QUFDdkMscUNBQXFDLGtCQUFrQjs7QUFFdkQsbUNBQW1DLGFBQWE7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxZQUFZLEVBQUM7O0FBRVk7QUFDMEI7QUFDcEI7O0FBRTlDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsdURBQWM7QUFDdEIsZ0NBQWdDLHVEQUFjOztBQUU5QztBQUNBO0FBQ0EsWUFBWSwrREFBSyxhQUFhLDZFQUFXO0FBQ3pDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBVztBQUN2QjtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RCxzQ0FBc0MsYUFBYTtBQUNuRCx1Q0FBdUMscUJBQXFCO0FBQzVELHlFQUF5RSxxREFBUSxDQUFDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFdBQVc7QUFDMUQsa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBLGdGQUFnRixxREFBUSxDQUFDLEdBQUc7QUFDNUYsa0ZBQWtGLHFEQUFVLENBQUM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ2lEOzs7QUFHakQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQiw4REFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQzVDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULG9DQUFvQyw0QkFBNEI7QUFDaEU7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRTJDOztBQUUzQzs7QUFFQTtBQUNBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdELGlFQUFlLFdBQVcsRUFBQztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvcHJvamVjdC1mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9wcm9qZWN0LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy90YXNrLWZvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3RvZG8uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY3NzPzAxZGIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvcHJvamVjdC1mb3JtLmNzcz9hYTE4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3Byb2plY3QuY3NzP2IwY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvdGFzay1mb3JtLmNzcz80ZTdhIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3RvZG8uY3NzP2U4NDEiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvb2xkLXRhc2stZm9ybS90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90b0RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvRG9NYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbW9kYWwtd2luZG93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjU3O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTI7XG59XG5cbiNtb2RhbC13aW5kb3cuaGlkZGVuIHtcbiAgICBtYXgtd2lkdGg6IDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cbiAgICBvcGFjaXR5OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87O0lBRVAsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbW9kYWwtd2luZG93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY1NztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMTI7XFxufVxcblxcbiNtb2RhbC13aW5kb3cuaGlkZGVuIHtcXG4gICAgbWF4LXdpZHRoOiAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWZvcm0ge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC44cmVtO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuXG59XG5cbi5wcm9qZWN0LWZvcm0uY29sbGFwc2Uge1xuICAgIG1heC13aWR0aDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2xvc2UtcHJvamVjdC1mb3JtIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1mb3JtICNwcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjNTU1XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM4ODg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDQ0XG59XG5cbi5zdWJtaXQtcHJvamVjdC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxubGFiZWwuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3QtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWZvcm0ge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuOHJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjZzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xcblxcbn1cXG5cXG4ucHJvamVjdC1mb3JtLmNvbGxhcHNlIHtcXG4gICAgbWF4LXdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2xvc2UtcHJvamVjdC1mb3JtIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtICNwcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICM1NTVcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzg4ODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICM0NDRcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxubGFiZWwuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJ1dHRvbiNhZGQtcHJvamVjdCB7XG4gICAgYm9yZGVyOiB1bnNldDtcbn1cblxuYnV0dG9uI2FkZC1wcm9qZWN0LFxuLnByb2plY3QtdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgIGdhcDogMC44cmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG5cblxuYnV0dG9uI2FkZC1wcm9qZWN0OmhvdmVyLFxuLnByb2plY3QtdGFiOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG59XG5cbi5wcm9qZWN0LXRhYi5hY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG5kaXYjcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbmJ1dHRvbiNhZGQtcHJvamVjdCBwLFxuLm5hbWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wLmNvdW50IHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEQwM0Y7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmJ1dHRvbi5lZGl0LWJ0biB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogMC4xIHNjYWxlIGVhc2UtaW47XG59XG5cbmJ1dHRvbi5lZGl0LWJ0bjphY3RpdmUge1xuICAgIHNjYWxlOiAxLjE7XG59XG5cbmJ1dHRvbiNhZGQtcHJvamVjdDphY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHNjYWxlOiAwLjk5O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcblxuXG59XG5cbiNhZGQtcHJvamVjdDpob3ZlciB7XG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG5cbn1cblxuI2FkZC1wcm9qZWN0Pioge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xuICAgIH1cblxuICAgIC8qIElubGluZSAjMiB8IGh0dHA6Ly8xMjcuMC4wLjE6NTUwMS9kaXN0LyAqL1xuXG5cbiAgICAjc2lkZS1iYXIge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAucGFnZS13cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgICNoZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGNBQWM7QUFDbEI7Ozs7QUFJQTs7SUFFSSxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxxQkFBcUI7OztBQUd6Qjs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCx1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBLDRDQUE0Qzs7O0lBRzVDO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYnV0dG9uI2FkZC1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0LFxcbi5wcm9qZWN0LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuXFxuXFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC10YWIuYWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG59XFxuXFxuZGl2I3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC42cmVtO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QgcCxcXG4ubmFtZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5wLmNvdW50IHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDAzRjtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5idXR0b24uZWRpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogMC4xIHNjYWxlIGVhc2UtaW47XFxufVxcblxcbmJ1dHRvbi5lZGl0LWJ0bjphY3RpdmUge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3Q6YWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgc2NhbGU6IDAuOTk7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG5cXG5cXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcXG5cXG59XFxuXFxuI2FkZC1wcm9qZWN0Pioge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xcbiAgICB9XFxuXFxuICAgIC8qIElubGluZSAjMiB8IGh0dHA6Ly8xMjcuMC4wLjE6NTUwMS9kaXN0LyAqL1xcblxcblxcbiAgICAjc2lkZS1iYXIge1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2Utd3JhcHBlciB7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI2hlYWRpbmcge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTdHlsZSBmb3IgZGVza3RvcCAqL1xuI3Rhc2stZm9ybSB7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjhyZW07XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDFyZW07XG4gICAgLyogdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7ICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuXG59XG5cbiN0YXNrLWZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xufVxuXG4jdGFzay1mb3JtLmNvbGxhcHNlIHtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI3Rhc2stZm9ybSAuY2xvc2UtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlclxufVxuXG4uYnV0dG9uLFxuLmNoZWNrbWFyayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuI3Rhc2stZm9ybSAjdGFza05hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW1cbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItd2lkdGg6IDJweFxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjODg4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ0NFxufVxuXG4uZm9ybS1yb3cge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG9cbn1cblxuLmNhbGVuZGFyLWxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDBcbn1cblxuI2R1ZURhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICB0cmFuc2xhdGU6IDRweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0XG59XG5cbiNkdWVEYXRlOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmVcbn1cblxubGFiZWwuZHVlRGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lXG59XG5cbnNwYW4uYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICByaWdodDogMFxufVxuXG5zcGFuLmJ1dHRvbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLjhyZW1cbn1cblxuLmNvbG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG5cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMXJlbVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHhcbn1cblxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMFxufVxuXG4uY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxLjFyZW07XG4gICAgd2lkdGg6IDEuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNsYXRlOiAtNHB4IDBcbn1cblxuLnJlZC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzRDM0Ncbn1cblxuLnllbGxvdy5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEQwM0Zcbn1cblxuLmdyZWVuLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MVxufVxuXG5pbnB1dDpjaGVja2Vkfi5jaGVja21hcms6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkXG59XG5cbiNzdWJ0YXNrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC44cmVtO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5zdWJ0YXNrIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nOiAuMXJlbSAuNXJlbVxufVxuXG4vKiBuZXcgcnVsZXMgZm9yIGRlc2NyaXB0aW9uICovXG4jZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4jZGVzY3JpcHRpb246Zm9jdXMsXG4jZGVzY3JpcHRpb246YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODg4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgI3Rhc2stZm9ybSB7XG4gICAgICAgIHRvcDogMXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rhc2stZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFN0eWxlIGZvciBkZXNrdG9wICovXFxuI3Rhc2stZm9ybSB7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC44cmVtO1xcbiAgICBjb2xvcjogIzc3NztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICAvKiB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC42cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcXG5cXG59XFxuXFxuI3Rhc2stZm9ybSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xcbn1cXG5cXG4jdGFzay1mb3JtLmNvbGxhcHNlIHtcXG4gICAgbWF4LXdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jdGFzay1mb3JtIC5jbG9zZS1idG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi5idXR0b24sXFxuLmNoZWNrbWFyayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWwuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4jdGFzay1mb3JtICN0YXNrTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogIzU1NTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW1cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweFxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjODg4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogIzQ0NFxcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG9cXG59XFxuXFxuLmNhbGVuZGFyLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDBcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICB0cmFuc2xhdGU6IDRweCAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXRcXG59XFxuXFxuI2R1ZURhdGU6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmVcXG59XFxuXFxubGFiZWwuZHVlRGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZVxcbn1cXG5cXG5zcGFuLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgcmlnaHQ6IDBcXG59XFxuXFxuc3Bhbi5idXR0b24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuOHJlbVxcbn1cXG5cXG4uY29sb3Ige1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHhcXG59XFxuXFxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDBcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEuMXJlbTtcXG4gICAgd2lkdGg6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC00cHggMFxcbn1cXG5cXG4ucmVkLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzRDM0NcXG59XFxuXFxuLnllbGxvdy5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjREMDNGXFxufVxcblxcbi5ncmVlbi5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxXFxufVxcblxcbmlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkXFxufVxcblxcbiNzdWJ0YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG5cXG4uc3VidGFzayB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgcGFkZGluZzogLjFyZW0gLjVyZW1cXG59XFxuXFxuLyogbmV3IHJ1bGVzIGZvciBkZXNjcmlwdGlvbiAqL1xcbiNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4jZGVzY3JpcHRpb246Zm9jdXMsXFxuI2Rlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjdGFzay1mb3JtIHtcXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b2RvLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzc4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbn1cblxuLnRvZG8tY2FyZC5jb21wbGV0ZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHNvbGlkICM1NTUgbGluZS10aHJvdWdoO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRvZG8tY2FyZCAuZGV0YWlscyB7XG4gICAgZmxleC1ncm93OiAyO1xufVxuXG4udG9kby1jYXJkIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuXG59XG5cbi50b2RvLWNhcmQgLmR1ZS1kYXRlIHtcbiAgICBjb2xvcjogI0FDQUNBQztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnByaW9yaXR5IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5wcmlvcml0eS5oaWdoIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QzNDO1xufVxuXG4ucHJpb3JpdHkubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjREMDNGO1xufVxuXG4ucHJpb3JpdHkubG93IHtcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyAqL1xuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uYWN0aW9ucyBidXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbnMgLmVkaXQtYnRuIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbmJ1dHRvbi50b2dnbGUtZG9uZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5cblxuYnV0dG9uLnRvZ2dsZS1kb25lOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1heC13aWR0aDogMzc4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxufVxcblxcbi50b2RvLWNhcmQuY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDJweCBzb2xpZCAjNTU1IGxpbmUtdGhyb3VnaDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5kZXRhaWxzIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4udG9kby1jYXJkIC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcblxcbn1cXG5cXG4udG9kby1jYXJkIC5kdWUtZGF0ZSB7XFxuICAgIGNvbG9yOiAjQUNBQ0FDO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6ICMyRUNDNzE7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLnByaW9yaXR5LmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QzNDO1xcbn1cXG5cXG4ucHJpb3JpdHkubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZDogI0Y0RDAzRjtcXG59XFxuXFxuLnByaW9yaXR5LmxvdyB7XFxuICAgIGJhY2tncm91bmQ6ICMyRUNDNzE7XFxufVxcblxcbi8qIGFjdGlvbiBidXR0b25zICovXFxuLmFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFjdGlvbnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmFjdGlvbnMgLmVkaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuYnV0dG9uLnRvZ2dsZS1kb25lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG5cXG5idXR0b24udG9nZ2xlLWRvbmU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ011bGlzaCcsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4jYXBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiNzaWRlYmFyIHtcbiAgICBmbGV4LWJhc2lzOiAyNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBncmlkLWdhcDogMC42cmVtO1xuXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0Y1RjVGNTtcbn1cblxuI3NpZGViYXIuY2xvc2VkIHtcbiAgICBmbGV4LWJhc2lzOiAwcHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI29wZW4tc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4jbWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbn1cblxuI2NvbnRlbnQge1xuICAgIC8qIGZsZXgtZ3JvdzogMjtzICovXG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzc4cHgsIDFmcikpO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG5cbiNoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wYWRkZWQge1xuICAgIHBhZGRpbmctbGVmdDogMy44cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAvKiA/Q2hhbmdlIHRvID4wLjUgZm9yIGJvdW5jeSBlZmZlY3QgKi9cbn1cblxuXG4jbWluaW1hTGlzdCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIsXG4jb3Blbi1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI29wZW4tc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXJlbTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkLXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYm90dG9tOiAwLjVyZW07XG4gICAgdHJhbnNsYXRlOiAtNTAlIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgI3NpZGViYXIge1xuICAgICAgICBncmlkLWdhcDogMC42cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgI0xvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgI21haW4taGVhZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUlBO0lBQ0ksaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaURBQWlEO1FBQ2pELGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOzs7SUFHQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcbiNzaWRlYmFyIHtcXG4gICAgZmxleC1iYXNpczogMjYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLWdhcDogMC42cmVtO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0Y1RjVGNTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2VkIHtcXG4gICAgZmxleC1iYXNpczogMHB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNvcGVuLXNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jbWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICAvKiBmbGV4LWdyb3c6IDI7cyAqL1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzhweCwgMWZyKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG5cXG4jaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnBhZGRlZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMy44cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIC8qID9DaGFuZ2UgdG8gPjAuNSBmb3IgYm91bmN5IGVmZmVjdCAqL1xcbn1cXG5cXG5cXG4jbWluaW1hTGlzdCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG59XFxuXFxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIsXFxuI29wZW4tc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI29wZW4tc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICBib3R0b206IDAuNXJlbTtcXG4gICAgdHJhbnNsYXRlOiAtNTAlIDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZ3JpZC1nYXA6IDAuNnJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICAgICAgICBib3JkZXI6IHVuc2V0O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG5cXG4gICAgI0xvZ28ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWhlYWRpbmcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWZvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LWZvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLWZvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLWZvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL21vZGFsLmNzcydcblxuY29uc3QgTW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxXaW5kb3cuaWQgPSAnbW9kYWwtd2luZG93JztcbiAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsV2luZG93KTtcblxuICAgIC8vTWV0aG9kc1xuICAgIGNvbnN0IHJlbmRlck1vZGFsID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgbW9kYWxXaW5kb3cuaW5uZXJIVE1MID0gJydcbiAgICAgICAgbW9kYWxXaW5kb3cuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIG1vZGFsV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IGhhbmRsZUNsaWNrKGV2ZW50KSB9KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnI21vZGFsLXdpbmRvdycpKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyByZW5kZXJNb2RhbCwgY2xvc2VNb2RhbCB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgYWRkSWNvbiBmcm9tICcuL2FkZC1wbHVzLnN2ZydcbmltcG9ydCBjbG9zZUJ0biBmcm9tICcuL2Nsb3NlLWNpcmNsZS1vdXRsaW5lLnN2ZydcbmltcG9ydCBzdWJtaXRCdG4gZnJvbSAnLi9jaGVja21hcmstY2lyY2xlLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuL3RyYXNoLW91dGxpbmUuc3ZnJ1xuXG5cbmltcG9ydCAnLi4vLi4vY3NzL3Rhc2stZm9ybS5jc3MnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCdcbmltcG9ydCBVSWNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vanMvVUlDb250cm9sbGVyJ1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4uLy4uL2pzL3Byb2plY3RNYW5hZ2VyJ1xuaW1wb3J0IHRvZG9NYW5hZ2VyIGZyb20gJy4uLy4uL2pzL3RvRG9NYW5hZ2VyJ1xuXG5jb25zdCBUYXNrRm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza0Zvcm0uaWQgPSBcInRhc2stZm9ybVwiO1xuICAgIC8vIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgdGFza0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Nsb3NlQnRufVwiIGFsdD1cIlwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza05hbWVcIiBjbGFzcz1cImhpZGRlblwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiVGFzayBOYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImR1ZURhdGVcIj5EdWUgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiIGlkPVwiaGlnaFwiIHZhbHVlPVwiaGlnaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWQgY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInllbGxvdyBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiIGlkPVwibG93XCIgIHZhbHVlPVwibG93XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JlZW4gY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3IgPSBcImRlc2NyaXB0aW9uXCIgY2xhc3MgPSBcImhpZGRlblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQgPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkFkZCBEZXNjcmlwdGlvbi4uLlwiIHJlc2l6ZSA9IFwidHJ1ZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzdWJtaXRCdG59XCIgYWx0PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5gXG5cblxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoYnRuLm1hdGNoZXMoJy5jbG9zZS1idG4nKSkge1xuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBzYXZlUHJvamVjdChldmVudCk7XG4gICAgICAgIGhpZGVGb3JtKCk7XG4gICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGhpZGVGb3JtKCkge1xuICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzYXZlUHJvamVjdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBDb2xsZWN0aW5nIERhdGEgZnJvbSB0aGUgZm9ybVxuICAgICAgICBsZXQgdGFza0RhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tEYXRhLmdldCgndGFza05hbWUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEYXRhLmdldCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tEYXRhLmdldCgnY29sb3InKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEYXRhLmdldCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAvL0dldCBhY3RpdmUgUHJvamVjdCBhbmQgYXBwZW5kIHRoZSBuZXcgdGFzayB0byB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICB0b2RvTWFuYWdlci5jcmVhdGVOZXdUb2RvKGFjdGl2ZVByb2plY3QsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciB0aGUgbmV3IHRhc2sgYnkgZm9yY2luZyByZSByZW5kZXJcbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8oYWN0aXZlUHJvamVjdCk7XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB0YXNrRm9ybTtcblxuICAgIHJldHVybiB7IG5ld1Rhc2sgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0Zvcm07IiwiaW1wb3J0IGNsb3NlQnRuIGZyb20gJy4uL29sZC10YXNrLWZvcm0vY2xvc2UtY2lyY2xlLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IHN1Ym1pdEJ0biBmcm9tICcuLi9vbGQtdGFzay1mb3JtL2NoZWNrbWFyay1jaXJjbGUtb3V0bGluZS5zdmcnXG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4uLy4uL2pzL1VJQ29udHJvbGxlcic7XG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5cbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuLi8uLi9qcy9wcm9qZWN0TWFuYWdlcic7XG5cblxuY29uc3QgUHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtSHRtbCA9XG4gICAgICAgIGA8aW1nIHNyYz1cIiR7Y2xvc2VCdG59XCIgYWx0PVwiXCIgY2xhc3M9XCJjbG9zZS1idG5cIj5cbjxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIiBjbGFzcz1cImhpZGRlblwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LW5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIiByZXF1aXJlZD5cbjwvZGl2PlxuPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgPGltZyBzcmM9XCIke3N1Ym1pdEJ0bn1cIiBhbHQ9XCJzdWJtaXRcIj5cbjwvYnV0dG9uPmBcblxuICAgIHByb2plY3RGb3JtLmlubmVySFRNTCA9IHByb2plY3RGb3JtSHRtbDtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBidG4gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChidG4ubWF0Y2hlcygnLmNsb3NlLWJ0bicpKSB7XG4gICAgICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHNhdmVQcm9qZWN0KGV2ZW50KSlcblxuXG4gICAgZnVuY3Rpb24gc2F2ZVByb2plY3QoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRhc2tEYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RGb3JtKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0YXNrRGF0YS5nZXQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHByb2plY3ROYW1lIH0pXG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnN3aXRjaFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgcHJvamVjdCcsIHByb2plY3RNYW5hZ2VyLmdldEFjdGl2ZVByb2plY3QoKSlcbiAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlRm9ybSgpIHtcbiAgICAgICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xuICAgIH1cblxuXG4gICAgY29uc3QgbmV3RWRpdEZvcm0gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgICAgIGVkaXRGb3JtLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2xvc2VCdG59XCIgYWx0PVwiXCIgY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIiBjbGFzcz1cImhpZGRlblwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0LW5hbWVcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIiByZXF1aXJlZCB2YWx1ZSA9IFwiJHtwcm9qZWN0Lm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1Ym1pdEJ0bn1cIiBhbHQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAvL1RvIGxpc3RlbiBmb3IgZm9ybSBjbG9zZVxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGJ0bi5tYXRjaGVzKCcuY2xvc2UtYnRuJykpIHtcbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IGhhbmRsZVVwZGF0ZShldmVudCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tEYXRhID0gbmV3IEZvcm1EYXRhKGVkaXRGb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSB0YXNrRGF0YS5nZXQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeyBuZXdOYW1lIH0pO1xuICAgICAgICAgICAgcHJvamVjdC5uYW1lID0gbmV3TmFtZTtcblxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG5cbiAgICAgICAgICAgIC8vIGZvcmNlIFVJIHJlIHJlbmRlclxuICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KClcbiAgICAgICAgICAgIFVJY29udHJvbGxlci51cGRhdGVUb2RvKHByb2plY3RNYW5hZ2VyLmdldEFjdGl2ZVByb2plY3QoKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlZGl0Rm9ybVxuICAgIH1cbiAgICBjb25zdCBuZXdGb3JtID0gKCkgPT4gcHJvamVjdEZvcm07XG5cbiAgICByZXR1cm4geyBuZXdGb3JtLCBuZXdFZGl0Rm9ybSB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RGb3JtOyIsIi8vIGltcG9ydHNcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vY3NzL3Byb2plY3QuY3NzJ1xuaW1wb3J0ICcuL2Nzcy90b2RvLmNzcydcblxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vanMvcHJvamVjdE1hbmFnZXInXG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSAnLi9qcy90b0RvTWFuYWdlcic7XG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4vanMvVUlDb250cm9sbGVyJztcblxuLy8gSW5pdGlhbGlzZSBBcHBsaWNhdGlvblxuY29uc3QgaG9tZVByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5jcmVhdGVOZXdQcm9qZWN0KCdIb21lJyk7XG5cbi8vIFNldCBpbml0aWFsIHByb2plY3QgdG8gYWN0aXZlXG5wcm9qZWN0TWFuYWdlci5zd2l0Y2hQcm9qZWN0KGhvbWVQcm9qZWN0KTtcblxuXG4vLyBBZGQgZHVtbXkgdGFza3MgdG8gdGhlIHByb2plY3RcbnRvZG9NYW5hZ2VyLmNyZWF0ZU5ld1RvZG8oaG9tZVByb2plY3QsIFwiQnV5IEdyb2Nlcmllc1wiLCBcIjEga2cgdG9tYXRvZXMsIDFrZyBwb3RhdG9cIiwgXCIyOS0wMS0yMDI0XCIsIFwibWVkaXVtXCIpO1xudG9kb01hbmFnZXIuY3JlYXRlTmV3VG9kbyhob21lUHJvamVjdCwgXCJTdHVkeSBmb3IgZXhhbXNcIiwgXCJcIiwgXCIyOS0wMS0yMDI0XCIsIFwiaGlnaFwiKTtcblxuXG4vLyBGaXJzdCByZW5kZXIgdGhlIHByb2plY3RzIGRpdlxuVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KCk7XG5VSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuXG5cbi8vdG9kbyBJbmNsdWRlIHRoZSBjb2RlIGFmdGVyIHRoaXMgaW4gaXRzIG93biBtb2R1bGVcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuY29uc3QgY2xvc2VTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNpZGViYXInKTtcbmNvbnN0IG9wZW5TaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tc2lkZWJhcicpO1xuXG5cbi8vIENsb3NlIGFuZCBPcGVuIEZ1bmN0aW9uYWxpdHlcbmNsb3NlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGVCYXIodHJ1ZSkpO1xub3BlblNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVTaWRlQmFyKGZhbHNlKSlcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGluZycpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaWRlQmFyKGlzU2lkZUJhck9wZW4pIHtcbiAgICBpZiAoaXNTaWRlQmFyT3Blbikge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZGRlZCcpO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZGRlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplU2lkZUJhcigpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xuICAgIH1cbn1cblxucmVzaXplU2lkZUJhcigpO1xuLy8gZm9yIGR5bmFtaWNhbGx5IGNsb3NpbmcgU2lkZUJhclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNpZGVCYXIpO1xuXG5pbXBvcnQgVGFza0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL29sZC10YXNrLWZvcm0vdGFzay1mb3JtLmpzJztcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyc7XG5cbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcblxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBNb2RhbC5yZW5kZXJNb2RhbChQcm9qZWN0Rm9ybS5uZXdGb3JtKCkpO1xufSlcblxuY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpXG5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIE1vZGFsLnJlbmRlck1vZGFsKFRhc2tGb3JtLm5ld1Rhc2soKSk7XG59KVxuXG5cbmltcG9ydCAnLi9jc3MvcHJvamVjdC1mb3JtLmNzcydcbmltcG9ydCBQcm9qZWN0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1mb3JtL3Byb2plY3QtZm9ybS5qcyc7XG5cbiIsIi8vIFJlc3BvbnNpYmlsaXR5OiBNYW5hZ2VzIERPTS1yZWxhdGVkIGludGVyYWN0aW9ucyBhbmQgdXBkYXRlcy5cbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3Qgc3ViaGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJoZWFkaW5nJyk7XG5cblxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vLi4vYXNzZXRzL2ljb25zL3BlbmNpbC5zdmcnXG5pbXBvcnQgZXhwYW5kSWNvbiBmcm9tICcuLy4uL2Fzc2V0cy9pY29ucy9leHBhbmQuc3ZnJ1xuXG5cbmNvbnN0IFVJY29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBwcm9qZWN0IGxpc3QgaW4gVUlcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdE1hbmFnZXIudmlld0FsbFByb2plY3RzKCk7XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHsgcmVuZGVyUHJvamVjdChpdGVtKSB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9kbyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSB0b2RvIGxpc3QgaW4gVUlcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHByb2plY3RNYW5hZ2VyLnZpZXdUb2Rvc0luUHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gcHJvamVjdE1hbmFnZXIudmlld1RvZG9zSW5Qcm9qZWN0KHByb2plY3QpXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHsgcmVuZGVyVG9kbyhpdGVtKSB9KTtcblxuICAgICAgICBzdWJoZWFkaW5nLmlubmVyVGV4dCA9IGAgJHtwcm9qZWN0Lm5hbWV9YFxuXG4gICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KClcbiAgICB9XG5cbiAgICBjb25zdCBleHBhbmRUb2RvRGV0YWlscyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIC8vIEV4cGFuZCBhIHRvZG8gaXRlbSB0byBkaXNwbGF5IGFuZCBlZGl0IGl0cyBkZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgLy9EaXNwbGF5IEVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICBNb2RhbC5yZW5kZXJNb2RhbChlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBjbGVhckZpZWxkcyA9ICgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgaW5wdXQgZmllbGQgYWZ0ZXIgaW5wdXQvZWRpdGluZyB0b2Rvc1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZVRvZG8gfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUljb250cm9sbGVyO1xuXG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcbmltcG9ydCBQcm9qZWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxcIjtcblxuLy8gSGVscGVyIEZ1bmN0aW9uc1xuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBjb25zdCBjYXJkID0gcHJvamVjdENhcmRHZW5lcmF0b3IocHJvamVjdCk7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXIgdG8gbGlzdGVuIGZvciByZW5kZXIgXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgICAgIC8vIG1ha2UgY2xpY2tlZCBwcm9qZWN0IGFzIGFjdGl2ZSBhbmQgcmVuZGVyIHRoZSB0YXNrcyBpbiBpdFxuICAgICAgICBwcm9qZWN0TWFuYWdlci5zd2l0Y2hQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpXG5cbiAgICAgICAgLy8gaWYgZWRpdCBidXR0b24gY2xpY2tlZFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0LWJ0bicpKSB7XG4gICAgICAgICAgICBNb2RhbC5yZW5kZXJNb2RhbChQcm9qZWN0Rm9ybS5uZXdFZGl0Rm9ybShwcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBjYXJkIHRvIHNpZGViYXJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoY2FyZCk7XG59XG5cblxuY29uc3QgcmVuZGVyVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codG9kbyk7XG4gICAgY29uc3QgdG9kb0NhcmQgPSB0b2RvQ2FyZEdlbmVyYXRvcih0b2RvKTtcbiAgICB0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gaGFuZGxlVG9kb0NsaWNrKGV2ZW50KSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZG9DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0LWJ0bicpKSBlZGl0VG9kbyh0b2RvKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZXhwYW5kLWJ0bicpKSBleHBhbmRUb2RvKHRvZG8pO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2dnbGUtZG9uZScpKSB7XG4gICAgICAgICAgICB0b2RvTWFuYWdlci50b2dnbGVUb2RvU3RhdHVzKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUudGFibGUocHJvamVjdE1hbmFnZXIudmlld0FsbFByb2plY3RzKClbMF0udG9kb3MpO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvQ2FyZCk7XG59XG5cbmNvbnN0IHByb2plY3RDYXJkR2VuZXJhdG9yID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYicpO1xuICAgIGNhcmQuZGF0YXNldC5uYW1lID0gcHJvamVjdC5uYW1lO1xuICAgIGNvbnN0IGNhcmRIdG1sID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9IFwic3ltYm9sXCI+JHtwcm9qZWN0Lm5hbWVbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke3Byb2plY3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY291bnRcIj4ke3Byb2plY3QudG9kb3MubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuXCIgc3R5bGUgPSBcImJhY2tncm91bmQgOiB1cmwoJHtlZGl0SWNvbn0pXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgYFxuICAgIGNhcmQuaW5uZXJIVE1MID0gY2FyZEh0bWw7XG4gICAgLy8gY29uc29sZS5sb2coY2FyZClcbiAgICByZXR1cm4gY2FyZDtcbn1cblxuXG5jb25zdCB0b2RvQ2FyZEdlbmVyYXRvciA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnKTtcbiAgICB0b2RvQ2FyZC5kYXRhc2V0LmluZGV4ID0gdG9kby5pbmRleFxuXG4gICAgaWYgKHRvZG8uaXNEb25lKSB0b2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcblxuICAgIGNvbnN0IGNhcmRIdG1sID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5ICR7dG9kby5wcmlvcml0eX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9nZ2xlLWRvbmVcIj7igIc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiZWRpdC1idG5cIiBzdHlsZSA9XCJiYWNrZ3JvdW5kOnVybCgke2VkaXRJY29ufSkgO1wiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImV4cGFuZC1idG5cIiBzdHlsZSA9XCJiYWNrZ3JvdW5kOnVybCgke2V4cGFuZEljb259KVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICB0b2RvQ2FyZC5pbm5lckhUTUwgPSBjYXJkSHRtbDtcbiAgICByZXR1cm4gdG9kb0NhcmQ7XG59IiwiLy8gUmVzcG9uc2liaWxpdHk6IENyZWF0ZXMgaW5zdGFuY2VzIG9mIHByb2plY3Qgb2JqZWN0cy5cblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdLFxuXG4gICAgICAgIC8vbWV0aG9kc1xuICAgICAgICBhZGRUb2RvOiBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVRvZG86IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgeyB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSkgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9IiwiLy8gUmVzcG9uc2liaWxpdHk6IENyZWF0ZXMgaW5zdGFuY2VzIG9mIHRvZG8gaXRlbXMgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIjtcblxuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXVxuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZXRlZCBwcm9qZWN0IHdhcyB0aGUgYWN0aXZlIHByb2plY3QsIHNldCBhY3RpdmVQcm9qZWN0IHRvIG51bGxcbiAgICAgICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld0FsbFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc2xpY2UoKTsgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgcHJvamVjdHMgYXJyYXlcbiAgICB9O1xuXG4gICAgY29uc3Qgdmlld1RvZG9zSW5Qcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3QudG9kb3Muc2xpY2UoKTsgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgdG9kb3MgYXJyYXkgd2l0aGluIHRoZSBzcGVjaWZpZWQgcHJvamVjdFxuICAgIH07XG5cbiAgICByZXR1cm4geyBjcmVhdGVOZXdQcm9qZWN0LCBzd2l0Y2hQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCB2aWV3QWxsUHJvamVjdHMsIHZpZXdUb2Rvc0luUHJvamVjdCB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyOyIsIi8vIFJlc3BvbnNpYmlsaXR5OiBDcmVhdGVzIGluc3RhbmNlcyBvZiBwcm9qZWN0IG9iamVjdHMuXG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9IG51bGwsIHByaW9yaXR5ID0gJ2xvdycsIGlzRG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgaXNEb25lOiBpc0RvbmUsXG5cbiAgICAgICAgLy8gbWV0aG9kc1xuICAgICAgICB1cGRhdGVUb2RvOiBmdW5jdGlvbiAobmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVTdGF0dXM6IGZ1bmN0aW9uICgpIHsgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmUgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfSIsIi8vIFJlc3BvbnNpYmlsaXR5OiBIYW5kbGVzIGFwcGxpY2F0aW9uIGxvZ2ljIHJlbGF0ZWQgdG8gdG9kb3MuXG5cbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b0RvRmFjdG9yeVwiO1xuXG5jb25zdCB0b2RvTWFuYWdlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdGVOZXdUb2RvID0gKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcbiAgICB9XG4gICAgY29uc3QgZWRpdFRvZG8gPSAodG9kbywgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICB0b2RvLnVwZGF0ZVRvZG8obmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0KSB7IGFjdGl2ZVByb2plY3QucmVtb3ZlVG9kbyh0b2RvKSB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlVG9kb1N0YXR1cyA9ICh0b2RvKSA9PiB0b2RvLnRvZ2dsZVN0YXR1cygpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVOZXdUb2RvLFxuICAgICAgICBlZGl0VG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgdG9nZ2xlVG9kb1N0YXR1cyxcbiAgICB9O1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB0b2RvTWFuYWdlcjtcbi8vIHdyYXAgYWJvdmUgaW4gSS5JLkYuRSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==