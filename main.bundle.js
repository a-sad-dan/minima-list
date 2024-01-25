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
.task-form {
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

.task-form input {
    background: unset;
}

.task-form.collapse {
    max-width: 0;
    opacity: 0;
}

.task-form .close-btn {
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

.task-form #taskName {
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
    color: #555;
}

#description:focus,
#description:active {
    outline: none;
    border-bottom: 2px solid #888;
}


@media screen and (max-width: 768px) {
    .task-form {
        top: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/task-form.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6CAA6C;IAC7C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,UAAU;IACV,SAAS;IACT,wDAAwD;IACxD,gBAAgB;IAChB,yBAAyB;;AAE7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,UAAU;IACV;AACJ;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,WAAW;IACX;AACJ;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,oCAAoC;IACpC,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX;AACJ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf;AACJ;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,oBAAoB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX;AACJ;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB;AACJ;;AAEA,8BAA8B;AAC9B;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;;AAGA;IACI;QACI,SAAS;IACb;AACJ","sourcesContent":["/* Style for desktop */\n.task-form {\n    min-width: 320px;\n    max-width: 400px;\n    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);\n    border-radius: 12px;\n    padding: 1rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .8rem;\n    color: #777;\n    opacity: 1;\n    top: 1rem;\n    /* transition: max-width 0.6s ease, opacity 0.3s ease; */\n    font-weight: 500;\n    background-color: #fdfdfd;\n\n}\n\n.task-form input {\n    background: unset;\n}\n\n.task-form.collapse {\n    max-width: 0;\n    opacity: 0;\n}\n\n.task-form .close-btn {\n    align-self: flex-end;\n    z-index: 3;\n    cursor: pointer\n}\n\n.button,\n.checkmark {\n    cursor: pointer;\n}\n\nlabel.hidden {\n    display: none\n}\n\n.task-form #taskName {\n    font-size: 1.1rem;\n    color: #555;\n    padding: .2rem .5rem;\n    text-transform: capitalize;\n    font-size: 1.1rem;\n    margin-top: -0.8rem;\n    margin-bottom: .8rem\n}\n\ninput[type=\"text\"]:focus-visible {\n    outline: none;\n    border-width: 2px\n}\n\ninput[type=\"text\"] {\n    border: unset;\n    border-bottom: 1.5px solid #888;\n    text-align: center;\n    width: 100%;\n    color: #444\n}\n\n.form-row {\n    width: 80%;\n    /* display: flex; */\n    /* align-items: center; */\n    /* justify-content: space-between; */\n    position: relative;\n    margin: 0 auto\n}\n\n.calendar-logo {\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n#dueDate {\n    display: flex;\n    border: unset;\n    font-size: .8rem;\n    font-size: 1rem;\n    color: #444;\n    translate: 4px 0;\n    font-family: inherit;\n    color: inherit\n}\n\n#dueDate:focus-visible {\n    outline: none\n}\n\nlabel.dueDate {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: baseline\n}\n\nspan.button {\n    position: absolute;\n    z-index: 5;\n    right: 0\n}\n\nspan.button.hidden {\n    display: none;\n}\n\n.submit-btn {\n    background: unset;\n    border: unset;\n    display: flex;\n    border-radius: 100%;\n    cursor: pointer;\n    margin-top: .8rem\n}\n\n.color {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\nlabel {\n    font-size: 1.1rem\n}\n\n.container {\n    position: relative;\n    top: 4px\n}\n\n.container input[type=\"radio\"] {\n    position: relative;\n    cursor: pointer;\n    opacity: 0\n}\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.1rem;\n    width: 1.1rem;\n    border-radius: 50%;\n    translate: -4px 0\n}\n\n.red.checkmark {\n    background-color: #E74C3C\n}\n\n.yellow.checkmark {\n    background-color: #F4D03F\n}\n\n.green.checkmark {\n    background-color: #2ECC71\n}\n\ninput:checked~.checkmark::after {\n    content: '';\n    display: block;\n    border-radius: 100%;\n    height: 50%;\n    width: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    background-color: #fdfdfd\n}\n\n#subtasks {\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n    width: 100%\n}\n\n.subtask {\n    text-align: left !important;\n    font-weight: 300;\n    padding: .1rem .5rem\n}\n\n/* new rules for description */\n#description {\n    width: 100%;\n    border: unset;\n    background: transparent;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 0.5rem;\n    resize: none;\n    border-bottom: 1px solid #888;\n    color: #555;\n}\n\n#description:focus,\n#description:active {\n    outline: none;\n    border-bottom: 2px solid #888;\n}\n\n\n@media screen and (max-width: 768px) {\n    .task-form {\n        top: 1rem;\n    }\n}"],"sourceRoot":""}]);
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

.todo-card .description {
    font-size: 1rem;
    font-weight: 300;
    color: #444;
    max-height: 500px;
    opacity: 1;
    overflow: hidden;
    transition: 0.2s max-height ease, 0.3s opacity ease;
}


.todo-card .description.hidden {
    max-height: 0;
    opacity: 0;

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

.actions .expand-btn {
    transition: 0.2s rotate ease;
}

.actions .expand-btn.flipped {
    rotate: 180deg;
}

.actions .expand-btn.hidden {
    display: none;
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
}`, "",{"version":3,"sources":["webpack://./src/css/todo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,gDAAgD;IAChD,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,4CAA4C;IAC5C,gDAAgD;AACpD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;;AAEf;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,mDAAmD;AACvD;;;AAGA;IACI,aAAa;IACb,UAAU;;AAEd;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,UAAU;IACV,qBAAqB;AACzB;;;AAGA;IACI,UAAU;AACd","sourcesContent":[".todo-card {\n    display: flex;\n    background: whitesmoke;\n    padding: 1rem;\n    max-width: 378px;\n    border-radius: 12px;\n    background: #FDFDFD;\n    box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.10);\n    align-items: center;\n    gap: 0.6rem;\n    flex-shrink: 0;\n    transition: 0.6s ease;\n}\n\n.todo-card.completed {\n    opacity: 0.6;\n    filter: grayscale(0.8);\n    text-decoration: 2px solid #555 line-through;\n    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.05);\n}\n\n.todo-card .details {\n    flex-grow: 2;\n}\n\n.todo-card .title {\n    font-weight: 700;\n    font-size: 1.375rem;\n    color: #444;\n\n}\n\n.todo-card .due-date {\n    color: #ACACAC;\n    font-size: 0.75rem;\n    font-weight: 400;\n}\n\n.todo-card .description {\n    font-size: 1rem;\n    font-weight: 300;\n    color: #444;\n    max-height: 500px;\n    opacity: 1;\n    overflow: hidden;\n    transition: 0.2s max-height ease, 0.3s opacity ease;\n}\n\n\n.todo-card .description.hidden {\n    max-height: 0;\n    opacity: 0;\n\n}\n\n.priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 24px;\n    background: #2ECC71;\n    flex-shrink: 0;\n    display: flex;\n    overflow: clip;\n}\n\n.priority.high {\n    background: #E74C3C;\n}\n\n.priority.medium {\n    background: #F4D03F;\n}\n\n.priority.low {\n    background: #2ECC71;\n}\n\n/* action buttons */\n.actions {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n\n}\n\n.actions button {\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n    border: unset;\n    background-size: contain !important;\n}\n\n.actions .edit-btn {\n    height: 24px;\n    width: 24px;\n}\n\n.actions .expand-btn {\n    transition: 0.2s rotate ease;\n}\n\n.actions .expand-btn.flipped {\n    rotate: 180deg;\n}\n\n.actions .expand-btn.hidden {\n    display: none;\n}\n\nbutton.toggle-done {\n    width: 100%;\n    height: 100%;\n    border: unset;\n    opacity: 0;\n    transition: 0.4s ease;\n}\n\n\nbutton.toggle-done:hover {\n    opacity: 1;\n}"],"sourceRoot":""}]);
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
    align-items: start;
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAIA;IACI,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;;AAGA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,+BAA+B;IAC/B,gBAAgB;;IAEhB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,wCAAwC;IACxC,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,4DAA4D;IAC5D,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,sCAAsC;AAC1C;;;AAGA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;IACV,cAAc;AAClB;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI;QACI,gBAAgB;QAChB,iDAAiD;QACjD,aAAa;QACb,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,cAAc;QACd,gBAAgB;QAChB,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;;IAGA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,aAAa;QACb,gBAAgB;QAChB,WAAW;IACf;;AAEJ","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');\n\nbody {\n    font-family: 'Mulish', sans-serif;\n    background-color: antiquewhite;\n}\n\n#app {\n    background-color: #FDFDFD;\n    display: flex;\n    height: 100vh;\n    height: 100svh;\n    overflow: hidden;\n}\n\n\n#sidebar {\n    flex-basis: 260px;\n    background: #FDFDFD;\n    display: grid;\n    align-content: baseline;\n    grid-template-rows: min-content;\n    grid-gap: 0.6rem;\n\n    padding: 1rem;\n    position: relative;\n    overflow-x: hidden;\n    z-index: 10;\n    opacity: 1;\n    transition: 0.4s ease, opacity 0.3s ease;\n    scrollbar-width: none;\n    border-right: 4px solid #F5F5F5;\n}\n\n#sidebar.closed {\n    flex-basis: 0px;\n    width: 0px;\n    padding: 0px;\n    opacity: 0;\n}\n\n#open-sidebar {\n    display: none;\n}\n\n\n#main {\n    flex-grow: 1;\n    background-color: #FBFBFB;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n\n}\n\n#content {\n    /* flex-grow: 2;s */\n    gap: 1rem;\n    padding-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));\n    align-items: start;\n}\n\n\n#heading {\n    font-size: 1.8rem;\n    padding-top: .2rem;\n    color: #444444;\n    text-transform: capitalize;\n}\n\n.padded {\n    padding-left: 3.8rem;\n    transition: 0.3s ease;\n    /* ?Change to >0.5 for bouncy effect */\n}\n\n\n#minimaList {\n    justify-self: center;\n    width: 120px;\n    padding: 0.8rem;\n}\n\n#sidebar #close-sidebar,\n#open-sidebar {\n    padding: 0.6rem 0.8rem;\n    cursor: pointer;\n}\n\n#open-sidebar {\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    z-index: 1;\n    display: block;\n}\n\n\n#sidebar #close-sidebar {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    cursor: pointer;\n}\n\n#add-task {\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    background: unset;\n    border: unset;\n    border-radius: 100%;\n    height: 42px;\n    width: 42px;\n    display: flex;\n    place-content: center;\n    padding: 6px;\n    background-color: #efefef;\n    bottom: 0.5rem;\n    translate: -50% 0;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n\n    #sidebar {\n        grid-gap: 0.6rem;\n        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.24);\n        border: unset;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100svh;\n        max-width: 320px;\n        width: 75%;\n    }\n\n    #Logo {\n        width: 100px;\n    }\n\n    #main-heading {\n        display: none;\n    }\n\n\n    #content {\n        align-self: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        padding: 1rem;\n        overflow: scroll;\n        height: 90%;\n    }\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _css_task_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/task-form.css */ "./src/css/task-form.css");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _js_UIController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/UIController */ "./src/js/UIController.js");
/* harmony import */ var _js_projectManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _js_toDoManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/toDoManager */ "./src/js/toDoManager.js");












const TaskForm = (() => {
    const taskForm = document.createElement('form');
    taskForm.className = "task-form";
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



    const editTodoForm = (todo) => {
        const editForm = document.createElement('form');
        editForm.classList.add('task-form');
        editForm.innerHTML = `
                        <img src="${_close_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="" class="close-btn">
                        <div class="form-row">
                            <label for="taskName" class="hidden"">Task Name</label>
                            <input type="text" id="taskName" name="taskName" placeholder="Task Name" value = "${todo.title}" required>
                        </div>
                        <div class="form-row">
                            <label class="dueDate">Due Date:
                                <input type="date" name="date" id="dueDate" value = "${todo.dueDate}">
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
                            <textarea name="description" id ="description" cols placeholder="Add Description..." resize = "true">${todo.description}</textarea>
                        </div>
                        <img src="${_assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__} alt ="delete" class ="delete-btn">
                        <button type="submit" class="submit-btn">
                            <img src="${_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="submit">
                        </button>`

        //todo add logic to add checked attribute to the correct priority
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
            const newTaskName = taskData.get('taskName');
            const newDueDate = taskData.get('date');
            const newPriority = taskData.get('color').toLowerCase();
            const newDescription = taskData.get('description');

            // change todo values
            todo.title = newTaskName;
            todo.dueDate = newDueDate;
            todo.description = newDescription;
            todo.priority = newPriority;

            // reset form --> close form
            event.target.reset();
            _modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"].closeModal();

            // force ui re render
            _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateProjectList() //?can remove this???
            _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_7__["default"].getActiveProject());


            event.target.reset();
            _modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"].closeModal();

            // force UI re render
            _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateProjectList()
            _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_7__["default"].getActiveProject());

        }
        return editForm;
    }

    const newTask = () => taskForm;
    return { newTask, editTodoForm }
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
/* harmony import */ var _js_toDoFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/toDoFactory */ "./src/js/toDoFactory.js");
/* harmony import */ var _js_projectFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/projectFactory */ "./src/js/projectFactory.js");
/* harmony import */ var _js_UIController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/UIController */ "./src/js/UIController.js");
/* harmony import */ var _components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/old-task-form/task-form.js */ "./src/components/old-task-form/task-form.js");
/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.js */ "./src/components/modal/modal.js");
/* harmony import */ var _css_project_form_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/project-form.css */ "./src/css/project-form.css");
/* harmony import */ var _components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-form/project-form.js */ "./src/components/project-form/project-form.js");
// imports










// Initialise Application
const homeProject = _js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].createNewProject('Home');

// Set initial project to active
_js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].switchProject(homeProject);


// Add dummy tasks to the project
_js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Buy Groceries", "1 kg tomatoes, 1kg potato", "29-01-2024", "medium");
_js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Study for exams", "", "29-01-2024", "high");

// Render the projects based on the UI

// First render the projects div
_js_UIController__WEBPACK_IMPORTED_MODULE_7__["default"].updateProjectList();
_js_UIController__WEBPACK_IMPORTED_MODULE_7__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].getActiveProject());


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
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_9__["default"].renderModal(_components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_10__["default"].newForm());
})

const newTaskBtn = document.getElementById('add-task')
newTaskBtn.addEventListener('click', () => {
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_9__["default"].renderModal(_components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_8__["default"].newTask());
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
/* harmony import */ var _components_old_task_form_task_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/old-task-form/task-form */ "./src/components/old-task-form/task-form.js");
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

    const toggleExpandDetails = (todo) => {
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

    //handle state of the todo card
    function handleTodoClick(event) {
        if (event.target.matches('.edit-btn')) {

            _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].renderModal(_components_old_task_form_task_form__WEBPACK_IMPORTED_MODULE_6__["default"].editTodoForm(todo));
        }
        if (event.target.matches('.expand-btn')) toggleExpand();

        if (event.target.matches('.toggle-done')) {
            _toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].toggleTodoStatus(todo);
            todoCard.classList.toggle('completed');
        };
        // console.table(projectManager.viewAllProjects()[0].todos);
    }
    contentDiv.append(todoCard);

    function toggleExpand() {
        todoCard.querySelector('.description').classList.toggle('hidden');
        todoCard.querySelector('.expand-btn').classList.toggle('flipped')
    }

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
                            <p class = "description hidden">${todo.description}</p>
                        </div>
                        <div class = "actions">
                            <button class = "edit-btn" style ="background:url(${_assets_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__}) ;"></button>
                            <button class = "expand-btn" style ="background:url(${_assets_icons_expand_svg__WEBPACK_IMPORTED_MODULE_2__})"></button>
                        </div>
                    `
    todoCard.innerHTML = cardHtml;
    if (todo.description.trim().length === 0) {
        todoCard.querySelector('.expand-btn').classList.add('hidden');
    }
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

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ce464b621c2aa25d3b.svg";

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtGQUErRixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1B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QztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ2lEOzs7QUFHakQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQiw4REFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQzVDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULG9DQUFvQyw0QkFBNEI7QUFDaEU7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRTJDOztBQUUzQzs7QUFFQTtBQUNBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdELGlFQUFlLFdBQVcsRUFBQztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvcHJvamVjdC1mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9wcm9qZWN0LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy90YXNrLWZvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3RvZG8uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY3NzPzAxZGIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvcHJvamVjdC1mb3JtLmNzcz9hYTE4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3Byb2plY3QuY3NzP2IwY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvdGFzay1mb3JtLmNzcz80ZTdhIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3RvZG8uY3NzP2U4NDEiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvb2xkLXRhc2stZm9ybS90YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90b0RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3RvRG9NYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbW9kYWwtd2luZG93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjU3O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMTI7XG59XG5cbiNtb2RhbC13aW5kb3cuaGlkZGVuIHtcbiAgICBtYXgtd2lkdGg6IDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cbiAgICBvcGFjaXR5OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87O0lBRVAsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbW9kYWwtd2luZG93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY1NztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDogMTI7XFxufVxcblxcbiNtb2RhbC13aW5kb3cuaGlkZGVuIHtcXG4gICAgbWF4LXdpZHRoOiAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9qZWN0LWZvcm0ge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC44cmVtO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuXG59XG5cbi5wcm9qZWN0LWZvcm0uY29sbGFwc2Uge1xuICAgIG1heC13aWR0aDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2xvc2UtcHJvamVjdC1mb3JtIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1mb3JtICNwcm9qZWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjNTU1XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM4ODg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDQ0XG59XG5cbi5zdWJtaXQtcHJvamVjdC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxubGFiZWwuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3QtZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWZvcm0ge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuOHJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjZzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xcblxcbn1cXG5cXG4ucHJvamVjdC1mb3JtLmNvbGxhcHNlIHtcXG4gICAgbWF4LXdpZHRoOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2xvc2UtcHJvamVjdC1mb3JtIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtICNwcm9qZWN0LW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICM1NTVcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzg4ODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICM0NDRcXG59XFxuXFxuLnN1Ym1pdC1wcm9qZWN0LWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxubGFiZWwuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJ1dHRvbiNhZGQtcHJvamVjdCB7XG4gICAgYm9yZGVyOiB1bnNldDtcbn1cblxuYnV0dG9uI2FkZC1wcm9qZWN0LFxuLnByb2plY3QtdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgIGdhcDogMC44cmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gICAgZm9udC1mYW1pbHk6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG5cblxuYnV0dG9uI2FkZC1wcm9qZWN0OmhvdmVyLFxuLnByb2plY3QtdGFiOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG59XG5cbi5wcm9qZWN0LXRhYi5hY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG5kaXYjcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbmJ1dHRvbiNhZGQtcHJvamVjdCBwLFxuLm5hbWUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wLmNvdW50IHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEQwM0Y7XG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmJ1dHRvbi5lZGl0LWJ0biB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogMC4xIHNjYWxlIGVhc2UtaW47XG59XG5cbmJ1dHRvbi5lZGl0LWJ0bjphY3RpdmUge1xuICAgIHNjYWxlOiAxLjE7XG59XG5cbmJ1dHRvbiNhZGQtcHJvamVjdDphY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHNjYWxlOiAwLjk5O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcblxuXG59XG5cbiNhZGQtcHJvamVjdDpob3ZlciB7XG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XG5cbn1cblxuI2FkZC1wcm9qZWN0Pioge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xuICAgIH1cblxuICAgIC8qIElubGluZSAjMiB8IGh0dHA6Ly8xMjcuMC4wLjE6NTUwMS9kaXN0LyAqL1xuXG5cbiAgICAjc2lkZS1iYXIge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAucGFnZS13cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgICNoZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGNBQWM7QUFDbEI7Ozs7QUFJQTs7SUFFSSxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxxQkFBcUI7OztBQUd6Qjs7QUFFQTtJQUNJLHNEQUFzRDtJQUN0RCx1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBLDRDQUE0Qzs7O0lBRzVDO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYnV0dG9uI2FkZC1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0LFxcbi5wcm9qZWN0LXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuXFxuXFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC10YWIuYWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG59XFxuXFxuZGl2I3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC42cmVtO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3QgcCxcXG4ubmFtZSB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5wLmNvdW50IHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDAzRjtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5idXR0b24uZWRpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogMC4xIHNjYWxlIGVhc2UtaW47XFxufVxcblxcbmJ1dHRvbi5lZGl0LWJ0bjphY3RpdmUge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG5idXR0b24jYWRkLXByb2plY3Q6YWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgc2NhbGU6IDAuOTk7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG5cXG5cXG59XFxuXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcXG5cXG59XFxuXFxuI2FkZC1wcm9qZWN0Pioge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xcbiAgICB9XFxuXFxuICAgIC8qIElubGluZSAjMiB8IGh0dHA6Ly8xMjcuMC4wLjE6NTUwMS9kaXN0LyAqL1xcblxcblxcbiAgICAjc2lkZS1iYXIge1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2Utd3JhcHBlciB7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI2hlYWRpbmcge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTdHlsZSBmb3IgZGVza3RvcCAqL1xuLnRhc2stZm9ybSB7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjhyZW07XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDFyZW07XG4gICAgLyogdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7ICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuXG59XG5cbi50YXNrLWZvcm0gaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xufVxuXG4udGFzay1mb3JtLmNvbGxhcHNlIHtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnRhc2stZm9ybSAuY2xvc2UtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlclxufVxuXG4uYnV0dG9uLFxuLmNoZWNrbWFyayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmVcbn1cblxuLnRhc2stZm9ybSAjdGFza05hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW1cbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItd2lkdGg6IDJweFxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjODg4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ0NFxufVxuXG4uZm9ybS1yb3cge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG9cbn1cblxuLmNhbGVuZGFyLWxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDBcbn1cblxuI2R1ZURhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICB0cmFuc2xhdGU6IDRweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0XG59XG5cbiNkdWVEYXRlOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IG5vbmVcbn1cblxubGFiZWwuZHVlRGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lXG59XG5cbnNwYW4uYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICByaWdodDogMFxufVxuXG5zcGFuLmJ1dHRvbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLjhyZW1cbn1cblxuLmNvbG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG5cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMXJlbVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHhcbn1cblxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMFxufVxuXG4uY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxLjFyZW07XG4gICAgd2lkdGg6IDEuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNsYXRlOiAtNHB4IDBcbn1cblxuLnJlZC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzRDM0Ncbn1cblxuLnllbGxvdy5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEQwM0Zcbn1cblxuLmdyZWVuLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MVxufVxuXG5pbnB1dDpjaGVja2Vkfi5jaGVja21hcms6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkXG59XG5cbiNzdWJ0YXNrcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC44cmVtO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5zdWJ0YXNrIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nOiAuMXJlbSAuNXJlbVxufVxuXG4vKiBuZXcgcnVsZXMgZm9yIGRlc2NyaXB0aW9uICovXG4jZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XG4gICAgY29sb3I6ICM1NTU7XG59XG5cbiNkZXNjcmlwdGlvbjpmb2N1cyxcbiNkZXNjcmlwdGlvbjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4ODg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudGFzay1mb3JtIHtcbiAgICAgICAgdG9wOiAxcmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGFzay1mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7QUFDdEI7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0RBQXdEO0lBQ3hELGdCQUFnQjtJQUNoQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZSBmb3IgZGVza3RvcCAqL1xcbi50YXNrLWZvcm0ge1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuOHJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgLyogdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XFxuXFxufVxcblxcbi50YXNrLWZvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLnRhc2stZm9ybS5jb2xsYXBzZSB7XFxuICAgIG1heC13aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2stZm9ybSAuY2xvc2UtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uYnV0dG9uLFxcbi5jaGVja21hcmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxhYmVsLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuLnRhc2stZm9ybSAjdGFza05hbWUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgY29sb3I6ICM1NTU7XFxuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC44cmVtXFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHhcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzg4ODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICM0NDRcXG59XFxuXFxuLmZvcm0tcm93IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvXFxufVxcblxcbi5jYWxlbmRhci1sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwXFxufVxcblxcbiNkdWVEYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgdHJhbnNsYXRlOiA0cHggMDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0XFxufVxcblxcbiNkdWVEYXRlOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lXFxufVxcblxcbmxhYmVsLmR1ZURhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmVcXG59XFxuXFxuc3Bhbi5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHJpZ2h0OiAwXFxufVxcblxcbnNwYW4uYnV0dG9uLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLjhyZW1cXG59XFxuXFxuLmNvbG9yIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlblxcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4XFxufVxcblxcbi5jb250YWluZXIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwXFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxLjFyZW07XFxuICAgIHdpZHRoOiAxLjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNsYXRlOiAtNHB4IDBcXG59XFxuXFxuLnJlZC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0QzNDXFxufVxcblxcbi55ZWxsb3cuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDAzRlxcbn1cXG5cXG4uZ3JlZW4uY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MVxcbn1cXG5cXG5pbnB1dDpjaGVja2Vkfi5jaGVja21hcms6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZFxcbn1cXG5cXG4jc3VidGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgd2lkdGg6IDEwMCVcXG59XFxuXFxuLnN1YnRhc2sge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHBhZGRpbmc6IC4xcmVtIC41cmVtXFxufVxcblxcbi8qIG5ldyBydWxlcyBmb3IgZGVzY3JpcHRpb24gKi9cXG4jZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG4gICAgY29sb3I6ICM1NTU7XFxufVxcblxcbiNkZXNjcmlwdGlvbjpmb2N1cyxcXG4jZGVzY3JpcHRpb246YWN0aXZlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4ODg7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC50YXNrLWZvcm0ge1xcbiAgICAgICAgdG9wOiAxcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRvZG8tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWF4LXdpZHRoOiAzNzhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xufVxuXG4udG9kby1jYXJkLmNvbXBsZXRlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAycHggc29saWQgIzU1NSBsaW5lLXRocm91Z2g7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udG9kby1jYXJkIC5kZXRhaWxzIHtcbiAgICBmbGV4LWdyb3c6IDI7XG59XG5cbi50b2RvLWNhcmQgLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgY29sb3I6ICM0NDQ7XG5cbn1cblxuLnRvZG8tY2FyZCAuZHVlLWRhdGUge1xuICAgIGNvbG9yOiAjQUNBQ0FDO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udG9kby1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuMnMgbWF4LWhlaWdodCBlYXNlLCAwLjNzIG9wYWNpdHkgZWFzZTtcbn1cblxuXG4udG9kby1jYXJkIC5kZXNjcmlwdGlvbi5oaWRkZW4ge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcblxufVxuXG4ucHJpb3JpdHkge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICMyRUNDNzE7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbn1cblxuLnByaW9yaXR5LmhpZ2gge1xuICAgIGJhY2tncm91bmQ6ICNFNzRDM0M7XG59XG5cbi5wcmlvcml0eS5tZWRpdW0ge1xuICAgIGJhY2tncm91bmQ6ICNGNEQwM0Y7XG59XG5cbi5wcmlvcml0eS5sb3cge1xuICAgIGJhY2tncm91bmQ6ICMyRUNDNzE7XG59XG5cbi8qIGFjdGlvbiBidXR0b25zICovXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5hY3Rpb25zIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9ucyAuZWRpdC1idG4ge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbn1cblxuLmFjdGlvbnMgLmV4cGFuZC1idG4ge1xuICAgIHRyYW5zaXRpb246IDAuMnMgcm90YXRlIGVhc2U7XG59XG5cbi5hY3Rpb25zIC5leHBhbmQtYnRuLmZsaXBwZWQge1xuICAgIHJvdGF0ZTogMTgwZGVnO1xufVxuXG4uYWN0aW9ucyAuZXhwYW5kLWJ0bi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbi50b2dnbGUtZG9uZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG59XG5cblxuYnV0dG9uLnRvZ2dsZS1kb25lOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtREFBbUQ7QUFDdkQ7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNzhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZDogI0ZERkRGRDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG59XFxuXFxuLnRvZG8tY2FyZC5jb21wbGV0ZWQge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDAuOCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHNvbGlkICM1NTUgbGluZS10aHJvdWdoO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi50b2RvLWNhcmQgLmRldGFpbHMge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVxcblxcbi50b2RvLWNhcmQgLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gICAgY29sb3I6ICM0NDQ7XFxuXFxufVxcblxcbi50b2RvLWNhcmQgLmR1ZS1kYXRlIHtcXG4gICAgY29sb3I6ICNBQ0FDQUM7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBtYXgtaGVpZ2h0IGVhc2UsIDAuM3Mgb3BhY2l0eSBlYXNlO1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIC5kZXNjcmlwdGlvbi5oaWRkZW4ge1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcblxcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi5wcmlvcml0eS5oaWdoIHtcXG4gICAgYmFja2dyb3VuZDogI0U3NEMzQztcXG59XFxuXFxuLnByaW9yaXR5Lm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQ6ICNGNEQwM0Y7XFxufVxcblxcbi5wcmlvcml0eS5sb3cge1xcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xcbn1cXG5cXG4vKiBhY3Rpb24gYnV0dG9ucyAqL1xcbi5hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hY3Rpb25zIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hY3Rpb25zIC5lZGl0LWJ0biB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi5hY3Rpb25zIC5leHBhbmQtYnRuIHtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyByb3RhdGUgZWFzZTtcXG59XFxuXFxuLmFjdGlvbnMgLmV4cGFuZC1idG4uZmxpcHBlZCB7XFxuICAgIHJvdGF0ZTogMTgwZGVnO1xcbn1cXG5cXG4uYWN0aW9ucyAuZXhwYW5kLWJ0bi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5idXR0b24udG9nZ2xlLWRvbmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcblxcbmJ1dHRvbi50b2dnbGUtZG9uZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11bGlzaDppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MCwxMDAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwOzEsMTAwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbiNhcHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREZERkQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwc3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuI3NpZGViYXIge1xuICAgIGZsZXgtYmFzaXM6IDI2MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICAgIGdyaWQtZ2FwOiAwLjZyZW07XG5cbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjVGNUY1O1xufVxuXG4jc2lkZWJhci5jbG9zZWQge1xuICAgIGZsZXgtYmFzaXM6IDBweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jb3Blbi1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbiNtYWluIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMXJlbTtcblxufVxuXG4jY29udGVudCB7XG4gICAgLyogZmxleC1ncm93OiAyO3MgKi9cbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzhweCwgMWZyKSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG5cbiNoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wYWRkZWQge1xuICAgIHBhZGRpbmctbGVmdDogMy44cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAvKiA/Q2hhbmdlIHRvID4wLjUgZm9yIGJvdW5jeSBlZmZlY3QgKi9cbn1cblxuXG4jbWluaW1hTGlzdCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIsXG4jb3Blbi1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI29wZW4tc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXJlbTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkLXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYm90dG9tOiAwLjVyZW07XG4gICAgdHJhbnNsYXRlOiAtNTAlIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgI3NpZGViYXIge1xuICAgICAgICBncmlkLWdhcDogMC42cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgI0xvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgI21haW4taGVhZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUlBO0lBQ0ksaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaURBQWlEO1FBQ2pELGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOzs7SUFHQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcbiNzaWRlYmFyIHtcXG4gICAgZmxleC1iYXNpczogMjYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLWdhcDogMC42cmVtO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0Y1RjVGNTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2VkIHtcXG4gICAgZmxleC1iYXNpczogMHB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNvcGVuLXNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jbWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICAvKiBmbGV4LWdyb3c6IDI7cyAqL1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzhweCwgMWZyKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuXFxuI2hlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgcGFkZGluZy10b3A6IC4ycmVtO1xcbiAgICBjb2xvcjogIzQ0NDQ0NDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5wYWRkZWQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMuOHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICAvKiA/Q2hhbmdlIHRvID4wLjUgZm9yIGJvdW5jeSBlZmZlY3QgKi9cXG59XFxuXFxuXFxuI21pbmltYUxpc3Qge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxufVxcblxcbiNzaWRlYmFyICNjbG9zZS1zaWRlYmFyLFxcbiNvcGVuLXNpZGViYXIge1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcGVuLXNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcbiNzaWRlYmFyICNjbG9zZS1zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgYm90dG9tOiAwLjVyZW07XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFxuICAgICNzaWRlYmFyIHtcXG4gICAgICAgIGdyaWQtZ2FwOiAwLjZyZW07XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgICAgICAgYm9yZGVyOiB1bnNldDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICB9XFxuXFxuICAgICNMb2dvIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1oZWFkaW5nIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay1mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay1mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9tb2RhbC5jc3MnXG5cbmNvbnN0IE1vZGFsID0gKCgpID0+IHtcbiAgICBjb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsV2luZG93LmlkID0gJ21vZGFsLXdpbmRvdyc7XG4gICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbFdpbmRvdyk7XG5cbiAgICAvL01ldGhvZHNcbiAgICBjb25zdCByZW5kZXJNb2RhbCA9IChjb250ZW50KSA9PiB7XG4gICAgICAgIG1vZGFsV2luZG93LmlubmVySFRNTCA9ICcnXG4gICAgICAgIG1vZGFsV2luZG93LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBtb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBoYW5kbGVDbGljayhldmVudCkgfSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJyNtb2RhbC13aW5kb3cnKSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVuZGVyTW9kYWwsIGNsb3NlTW9kYWwgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IGFkZEljb24gZnJvbSAnLi9hZGQtcGx1cy5zdmcnXG5pbXBvcnQgY2xvc2VCdG4gZnJvbSAnLi9jbG9zZS1jaXJjbGUtb3V0bGluZS5zdmcnXG5pbXBvcnQgc3VibWl0QnRuIGZyb20gJy4vY2hlY2ttYXJrLWNpcmNsZS1vdXRsaW5lLnN2ZydcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi8uLi8uLi9hc3NldHMvaWNvbnMvdHJhc2guc3ZnJ1xuXG5pbXBvcnQgJy4uLy4uL2Nzcy90YXNrLWZvcm0uY3NzJ1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnXG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4uLy4uL2pzL1VJQ29udHJvbGxlcidcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuLi8uLi9qcy9wcm9qZWN0TWFuYWdlcidcbmltcG9ydCB0b2RvTWFuYWdlciBmcm9tICcuLi8uLi9qcy90b0RvTWFuYWdlcidcblxuY29uc3QgVGFza0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tGb3JtLmNsYXNzTmFtZSA9IFwidGFzay1mb3JtXCI7XG4gICAgLy8gdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2xvc2VCdG59XCIgYWx0PVwiXCIgY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiIGNsYXNzPVwiaGlkZGVuXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJoaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZCBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVsbG93IGNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJsb3dcIiAgdmFsdWU9XCJsb3dcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmVlbiBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwiZGVzY3JpcHRpb25cIiBjbGFzcyA9IFwiaGlkZGVuXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZCA9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiQWRkIERlc2NyaXB0aW9uLi4uXCIgcmVzaXplID0gXCJ0cnVlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1Ym1pdEJ0bn1cIiBhbHQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmBcblxuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChidG4ubWF0Y2hlcygnLmNsb3NlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNhdmVQcm9qZWN0KGV2ZW50KTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlUHJvamVjdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBDb2xsZWN0aW5nIERhdGEgZnJvbSB0aGUgZm9ybVxuICAgICAgICBsZXQgdGFza0RhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tEYXRhLmdldCgndGFza05hbWUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEYXRhLmdldCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tEYXRhLmdldCgnY29sb3InKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEYXRhLmdldCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAvL0dldCBhY3RpdmUgUHJvamVjdCBhbmQgYXBwZW5kIHRoZSBuZXcgdGFzayB0byB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICB0b2RvTWFuYWdlci5jcmVhdGVOZXdUb2RvKGFjdGl2ZVByb2plY3QsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciB0aGUgbmV3IHRhc2sgYnkgZm9yY2luZyByZSByZW5kZXJcbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8oYWN0aXZlUHJvamVjdCk7XG5cbiAgICB9XG5cblxuXG4gICAgY29uc3QgZWRpdFRvZG9Gb3JtID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2xvc2VCdG59XCIgYWx0PVwiXCIgY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiIGNsYXNzPVwiaGlkZGVuXCJcIj5UYXNrIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFza05hbWVcIiBwbGFjZWhvbGRlcj1cIlRhc2sgTmFtZVwiIHZhbHVlID0gXCIke3RvZG8udGl0bGV9XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImR1ZURhdGVcIj5EdWUgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiB2YWx1ZSA9IFwiJHt0b2RvLmR1ZURhdGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVkIGNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ5ZWxsb3cgY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIiBpZD1cImxvd1wiICB2YWx1ZT1cImxvd1wiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZWVuIGNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yID0gXCJkZXNjcmlwdGlvblwiIGNsYXNzID0gXCJoaWRkZW5cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkID1cImRlc2NyaXB0aW9uXCIgY29scyBwbGFjZWhvbGRlcj1cIkFkZCBEZXNjcmlwdGlvbi4uLlwiIHJlc2l6ZSA9IFwidHJ1ZVwiPiR7dG9kby5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dHJhc2hJY29ufSBhbHQgPVwiZGVsZXRlXCIgY2xhc3MgPVwiZGVsZXRlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1Ym1pdEJ0bn1cIiBhbHQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmBcblxuICAgICAgICAvL3RvZG8gYWRkIGxvZ2ljIHRvIGFkZCBjaGVja2VkIGF0dHJpYnV0ZSB0byB0aGUgY29ycmVjdCBwcmlvcml0eVxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGJ0bi5tYXRjaGVzKCcuY2xvc2UtYnRuJykpIHtcbiAgICAgICAgICAgICAgICBoaWRlRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IGhhbmRsZVVwZGF0ZShldmVudCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tEYXRhID0gbmV3IEZvcm1EYXRhKGVkaXRGb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gdGFza0RhdGEuZ2V0KCd0YXNrTmFtZScpO1xuICAgICAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IHRhc2tEYXRhLmdldCgnZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSB0YXNrRGF0YS5nZXQoJ2NvbG9yJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gdGFza0RhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAvLyBjaGFuZ2UgdG9kbyB2YWx1ZXNcbiAgICAgICAgICAgIHRvZG8udGl0bGUgPSBuZXdUYXNrTmFtZTtcbiAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgICAgICB0b2RvLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcm0gLS0+IGNsb3NlIGZvcm1cbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICAgICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xuXG4gICAgICAgICAgICAvLyBmb3JjZSB1aSByZSByZW5kZXJcbiAgICAgICAgICAgIFVJY29udHJvbGxlci51cGRhdGVQcm9qZWN0TGlzdCgpIC8vP2NhbiByZW1vdmUgdGhpcz8/P1xuICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8ocHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpKTtcblxuXG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgICAgICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcblxuICAgICAgICAgICAgLy8gZm9yY2UgVUkgcmUgcmVuZGVyXG4gICAgICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlUHJvamVjdExpc3QoKVxuICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8ocHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlZGl0Rm9ybTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUYXNrID0gKCkgPT4gdGFza0Zvcm07XG4gICAgcmV0dXJuIHsgbmV3VGFzaywgZWRpdFRvZG9Gb3JtIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtOyIsImltcG9ydCBjbG9zZUJ0biBmcm9tICcuLi9vbGQtdGFzay1mb3JtL2Nsb3NlLWNpcmNsZS1vdXRsaW5lLnN2ZydcbmltcG9ydCBzdWJtaXRCdG4gZnJvbSAnLi4vb2xkLXRhc2stZm9ybS9jaGVja21hcmstY2lyY2xlLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IFVJY29udHJvbGxlciBmcm9tICcuLi8uLi9qcy9VSUNvbnRyb2xsZXInO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnO1xuXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi4vLi4vanMvcHJvamVjdE1hbmFnZXInO1xuXG5cbmNvbnN0IFByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUh0bWwgPVxuICAgICAgICBgPGltZyBzcmM9XCIke2Nsb3NlQnRufVwiIGFsdD1cIlwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+XG48ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lXCIgY2xhc3M9XCJoaWRkZW5cIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbmFtZT1cInByb2plY3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgcmVxdWlyZWQ+XG48L2Rpdj5cbjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiPlxuICAgIDxpbWcgc3JjPVwiJHtzdWJtaXRCdG59XCIgYWx0PVwic3VibWl0XCI+XG48L2J1dHRvbj5gXG5cbiAgICBwcm9qZWN0Rm9ybS5pbm5lckhUTUwgPSBwcm9qZWN0Rm9ybUh0bWw7XG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoYnRuLm1hdGNoZXMoJy5jbG9zZS1idG4nKSkge1xuICAgICAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBzYXZlUHJvamVjdChldmVudCkpXG5cblxuICAgIGZ1bmN0aW9uIHNhdmVQcm9qZWN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0YXNrRGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGFza0RhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgY29uc29sZS5sb2coeyBwcm9qZWN0TmFtZSB9KVxuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0TWFuYWdlci5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcblxuICAgICAgICBwcm9qZWN0TWFuYWdlci5zd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgICAgIFVJY29udHJvbGxlci51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlIHByb2plY3QnLCBwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IG5ld0VkaXRGb3JtID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Nsb3NlQnRufVwiIGFsdD1cIlwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lXCIgY2xhc3M9XCJoaWRkZW5cIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgbmFtZT1cInByb2plY3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCIgcmVxdWlyZWQgdmFsdWUgPSBcIiR7cHJvamVjdC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzdWJtaXRCdG59XCIgYWx0PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgLy9UbyBsaXN0ZW4gZm9yIGZvcm0gY2xvc2VcbiAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChidG4ubWF0Y2hlcygnLmNsb3NlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBoYW5kbGVVcGRhdGUoZXZlbnQpKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0YXNrRGF0YSA9IG5ldyBGb3JtRGF0YShlZGl0Rm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGFza0RhdGEuZ2V0KCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgbmV3TmFtZSB9KTtcbiAgICAgICAgICAgIHByb2plY3QubmFtZSA9IG5ld05hbWU7XG5cbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICAgICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xuXG4gICAgICAgICAgICAvLyBmb3JjZSBVSSByZSByZW5kZXJcbiAgICAgICAgICAgIFVJY29udHJvbGxlci51cGRhdGVQcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWRpdEZvcm1cbiAgICB9XG4gICAgY29uc3QgbmV3Rm9ybSA9ICgpID0+IHByb2plY3RGb3JtO1xuXG4gICAgcmV0dXJuIHsgbmV3Rm9ybSwgbmV3RWRpdEZvcm0gfVxufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Rm9ybTsiLCIvLyBpbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9wcm9qZWN0LmNzcydcbmltcG9ydCAnLi9jc3MvdG9kby5jc3MnXG5cbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuL2pzL3Byb2plY3RNYW5hZ2VyJ1xuaW1wb3J0IHRvZG9NYW5hZ2VyIGZyb20gJy4vanMvdG9Eb01hbmFnZXInO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gJy4vanMvdG9Eb0ZhY3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vanMvcHJvamVjdEZhY3RvcnknO1xuaW1wb3J0IFVJY29udHJvbGxlciBmcm9tICcuL2pzL1VJQ29udHJvbGxlcic7XG5cbi8vIEluaXRpYWxpc2UgQXBwbGljYXRpb25cbmNvbnN0IGhvbWVQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuY3JlYXRlTmV3UHJvamVjdCgnSG9tZScpO1xuXG4vLyBTZXQgaW5pdGlhbCBwcm9qZWN0IHRvIGFjdGl2ZVxucHJvamVjdE1hbmFnZXIuc3dpdGNoUHJvamVjdChob21lUHJvamVjdCk7XG5cblxuLy8gQWRkIGR1bW15IHRhc2tzIHRvIHRoZSBwcm9qZWN0XG50b2RvTWFuYWdlci5jcmVhdGVOZXdUb2RvKGhvbWVQcm9qZWN0LCBcIkJ1eSBHcm9jZXJpZXNcIiwgXCIxIGtnIHRvbWF0b2VzLCAxa2cgcG90YXRvXCIsIFwiMjktMDEtMjAyNFwiLCBcIm1lZGl1bVwiKTtcbnRvZG9NYW5hZ2VyLmNyZWF0ZU5ld1RvZG8oaG9tZVByb2plY3QsIFwiU3R1ZHkgZm9yIGV4YW1zXCIsIFwiXCIsIFwiMjktMDEtMjAyNFwiLCBcImhpZ2hcIik7XG5cbi8vIFJlbmRlciB0aGUgcHJvamVjdHMgYmFzZWQgb24gdGhlIFVJXG5cbi8vIEZpcnN0IHJlbmRlciB0aGUgcHJvamVjdHMgZGl2XG5VSWNvbnRyb2xsZXIudXBkYXRlUHJvamVjdExpc3QoKTtcblVJY29udHJvbGxlci51cGRhdGVUb2RvKHByb2plY3RNYW5hZ2VyLmdldEFjdGl2ZVByb2plY3QoKSk7XG5cblxuLy90b2RvIEluY2x1ZGUgdGhlIGNvZGUgYWZ0ZXIgdGhpcyBpbiBpdHMgb3duIG1vZHVsZVxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG5jb25zdCBjbG9zZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2lkZWJhcicpO1xuY29uc3Qgb3BlblNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Blbi1zaWRlYmFyJyk7XG5cblxuLy8gQ2xvc2UgYW5kIE9wZW4gRnVuY3Rpb25hbGl0eVxuY2xvc2VTaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlU2lkZUJhcih0cnVlKSk7XG5vcGVuU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGVCYXIoZmFsc2UpKVxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXIoaXNTaWRlQmFyT3Blbikge1xuICAgIGlmIChpc1NpZGVCYXJPcGVuKSB7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncGFkZGVkJyk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgncGFkZGVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVTaWRlQmFyKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJyk7XG4gICAgfVxufVxuXG5yZXNpemVTaWRlQmFyKCk7XG4vLyBmb3IgZHluYW1pY2FsbHkgY2xvc2luZyBTaWRlQmFyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2lkZUJhcik7XG5cblxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9vbGQtdGFzay1mb3JtL3Rhc2stZm9ybS5qcyc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuanMnO1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgTW9kYWwucmVuZGVyTW9kYWwoUHJvamVjdEZvcm0ubmV3Rm9ybSgpKTtcbn0pXG5cbmNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKVxubmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBNb2RhbC5yZW5kZXJNb2RhbChUYXNrRm9ybS5uZXdUYXNrKCkpO1xufSlcblxuXG5pbXBvcnQgJy4vY3NzL3Byb2plY3QtZm9ybS5jc3MnXG5pbXBvcnQgUHJvamVjdEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uanMnO1xuXG4iLCIvLyBSZXNwb25zaWJpbGl0eTogTWFuYWdlcyBET00tcmVsYXRlZCBpbnRlcmFjdGlvbnMgYW5kIHVwZGF0ZXMuXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcblxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHN1YmhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViaGVhZGluZycpO1xuXG5cbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuLy4uL2Fzc2V0cy9pY29ucy9wZW5jaWwuc3ZnJ1xuaW1wb3J0IGV4cGFuZEljb24gZnJvbSAnLi8uLi9hc3NldHMvaWNvbnMvZXhwYW5kLnN2ZydcblxuXG5jb25zdCBVSWNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgcHJvamVjdCBsaXN0IGluIFVJXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLnZpZXdBbGxQcm9qZWN0cygpO1xuICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7IHJlbmRlclByb2plY3QoaXRlbSkgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgdG9kbyBsaXN0IGluIFVJXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJydcbiAgICAgICAgLy8gY29uc29sZS50YWJsZShwcm9qZWN0TWFuYWdlci52aWV3VG9kb3NJblByb2plY3QocHJvamVjdCkpO1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IHByb2plY3RNYW5hZ2VyLnZpZXdUb2Rvc0luUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7IHJlbmRlclRvZG8oaXRlbSkgfSk7XG5cbiAgICAgICAgc3ViaGVhZGluZy5pbm5lclRleHQgPSBgICR7cHJvamVjdC5uYW1lfWBcblxuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlRXhwYW5kRGV0YWlscyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIC8vIEV4cGFuZCBhIHRvZG8gaXRlbSB0byBkaXNwbGF5IGFuZCBlZGl0IGl0cyBkZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgLy9EaXNwbGF5IEVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICBNb2RhbC5yZW5kZXJNb2RhbChlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBjbGVhckZpZWxkcyA9ICgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgaW5wdXQgZmllbGQgYWZ0ZXIgaW5wdXQvZWRpdGluZyB0b2Rvc1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZVRvZG8gfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUljb250cm9sbGVyO1xuXG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcbmltcG9ydCBQcm9qZWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxcIjtcbmltcG9ydCBUYXNrRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9vbGQtdGFzay1mb3JtL3Rhc2stZm9ybVwiO1xuXG4vLyBIZWxwZXIgRnVuY3Rpb25zXG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IGNhcmQgPSBwcm9qZWN0Q2FyZEdlbmVyYXRvcihwcm9qZWN0KTtcblxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIHJlbmRlciBcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgLy8gbWFrZSBjbGlja2VkIHByb2plY3QgYXMgYWN0aXZlIGFuZCByZW5kZXIgdGhlIHRhc2tzIGluIGl0XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnN3aXRjaFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIFVJY29udHJvbGxlci51cGRhdGVUb2RvKHByb2plY3RNYW5hZ2VyLmdldEFjdGl2ZVByb2plY3QoKSlcblxuICAgICAgICAvLyBpZiBlZGl0IGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmVkaXQtYnRuJykpIHtcbiAgICAgICAgICAgIE1vZGFsLnJlbmRlck1vZGFsKFByb2plY3RGb3JtLm5ld0VkaXRGb3JtKHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIGNhcmQgdG8gc2lkZWJhclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChjYXJkKTtcbn1cblxuXG5jb25zdCByZW5kZXJUb2RvID0gKHRvZG8pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICBjb25zdCB0b2RvQ2FyZCA9IHRvZG9DYXJkR2VuZXJhdG9yKHRvZG8pO1xuICAgIHRvZG9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBoYW5kbGVUb2RvQ2xpY2soZXZlbnQpKVxuXG4gICAgLy9oYW5kbGUgc3RhdGUgb2YgdGhlIHRvZG8gY2FyZFxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZG9DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0LWJ0bicpKSB7XG5cbiAgICAgICAgICAgIE1vZGFsLnJlbmRlck1vZGFsKFRhc2tGb3JtLmVkaXRUb2RvRm9ybSh0b2RvKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZXhwYW5kLWJ0bicpKSB0b2dnbGVFeHBhbmQoKTtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2dnbGUtZG9uZScpKSB7XG4gICAgICAgICAgICB0b2RvTWFuYWdlci50b2dnbGVUb2RvU3RhdHVzKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUocHJvamVjdE1hbmFnZXIudmlld0FsbFByb2plY3RzKClbMF0udG9kb3MpO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvQ2FyZCk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmQoKSB7XG4gICAgICAgIHRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB0b2RvQ2FyZC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKVxuICAgIH1cblxufVxuXG5cblxuXG5jb25zdCBwcm9qZWN0Q2FyZEdlbmVyYXRvciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKTtcbiAgICBjYXJkLmRhdGFzZXQubmFtZSA9IHByb2plY3QubmFtZTtcbiAgICBjb25zdCBjYXJkSHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInN5bWJvbFwiPiR7cHJvamVjdC5uYW1lWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50XCI+JHtwcm9qZWN0LnRvZG9zLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWJ0blwiIHN0eWxlID0gXCJiYWNrZ3JvdW5kIDogdXJsKCR7ZWRpdEljb259KVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICBjYXJkLmlubmVySFRNTCA9IGNhcmRIdG1sO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQpXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cblxuY29uc3QgdG9kb0NhcmRHZW5lcmF0b3IgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG4gICAgdG9kb0NhcmQuZGF0YXNldC5pbmRleCA9IHRvZG8uaW5kZXhcblxuICAgIGlmICh0b2RvLmlzRG9uZSkgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cbiAgICBjb25zdCBjYXJkSHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSAke3RvZG8ucHJpb3JpdHl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1kb25lXCI+4oCHPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiZGVzY3JpcHRpb24gaGlkZGVuXCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImVkaXQtYnRuXCIgc3R5bGUgPVwiYmFja2dyb3VuZDp1cmwoJHtlZGl0SWNvbn0pIDtcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleHBhbmQtYnRuXCIgc3R5bGUgPVwiYmFja2dyb3VuZDp1cmwoJHtleHBhbmRJY29ufSlcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgdG9kb0NhcmQuaW5uZXJIVE1MID0gY2FyZEh0bWw7XG4gICAgaWYgKHRvZG8uZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0b2RvQ2FyZC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICByZXR1cm4gdG9kb0NhcmQ7XG59IiwiLy8gUmVzcG9uc2liaWxpdHk6IENyZWF0ZXMgaW5zdGFuY2VzIG9mIHByb2plY3Qgb2JqZWN0cy5cblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdLFxuICAgICAgICAvL21ldGhvZHNcbiAgICAgICAgYWRkVG9kbzogZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUb2RvOiBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmluZGV4T2YodG9kbylcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHsgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdFxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH0iLCIvLyBSZXNwb25zaWJpbGl0eTogQ3JlYXRlcyBpbnN0YW5jZXMgb2YgdG9kbyBpdGVtcyB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiO1xuXG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuXG5cbiAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpdGNoUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiBhY3RpdmVQcm9qZWN0O1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxldGVkIHByb2plY3Qgd2FzIHRoZSBhY3RpdmUgcHJvamVjdCwgc2V0IGFjdGl2ZVByb2plY3QgdG8gbnVsbFxuICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aWV3QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zbGljZSgpOyAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBwcm9qZWN0cyBhcnJheVxuICAgIH07XG5cbiAgICBjb25zdCB2aWV3VG9kb3NJblByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdC50b2Rvcy5zbGljZSgpOyAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSB0b2RvcyBhcnJheSB3aXRoaW4gdGhlIHNwZWNpZmllZCBwcm9qZWN0XG4gICAgfTtcblxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Byb2plY3QsIHN3aXRjaFByb2plY3QsIGdldEFjdGl2ZVByb2plY3QsIGRlbGV0ZVByb2plY3QsIHZpZXdBbGxQcm9qZWN0cywgdmlld1RvZG9zSW5Qcm9qZWN0IH1cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7IiwiLy8gUmVzcG9uc2liaWxpdHk6IENyZWF0ZXMgaW5zdGFuY2VzIG9mIHByb2plY3Qgb2JqZWN0cy5cblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gbnVsbCwgcHJpb3JpdHkgPSAnbG93JywgaXNEb25lID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICAvLyBwcm9wc1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBpc0RvbmU6IGlzRG9uZSxcblxuICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgIHVwZGF0ZVRvZG86IGZ1bmN0aW9uIChuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZVN0YXR1czogZnVuY3Rpb24gKCkgeyB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZSB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9IiwiLy8gUmVzcG9uc2liaWxpdHk6IEhhbmRsZXMgYXBwbGljYXRpb24gbG9naWMgcmVsYXRlZCB0byB0b2Rvcy5cblxuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvRG9GYWN0b3J5XCI7XG5cbmNvbnN0IHRvZG9NYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgIH1cbiAgICBjb25zdCBlZGl0VG9kbyA9ICh0b2RvLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHRvZG8udXBkYXRlVG9kbyhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QpIHsgYWN0aXZlUHJvamVjdC5yZW1vdmVUb2RvKHRvZG8pIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVUb2RvU3RhdHVzID0gKHRvZG8pID0+IHRvZG8udG9nZ2xlU3RhdHVzKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgICAgIGVkaXRUb2RvLFxuICAgICAgICBkZWxldGVUb2RvLFxuICAgICAgICB0b2dnbGVUb2RvU3RhdHVzLFxuICAgIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9NYW5hZ2VyO1xuLy8gd3JhcCBhYm92ZSBpbiBJLkkuRi5FIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9