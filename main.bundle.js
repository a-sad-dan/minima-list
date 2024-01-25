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

/* Shared styles between both forms */
.close-btn {
    align-self: flex-end;
    z-index: 3;
    cursor: pointer
}

.delete-btn {
    width: 1.5rem;
    position: absolute;
    left: 1rem;
    top: 1rem;
    cursor: pointer;
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
    border-bottom: 1px solid #888;
    color: #555;
    
    display: block;
    overflow: hidden;
    resize: none;
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
}`, "",{"version":3,"sources":["webpack://./src/css/task-form.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6CAA6C;IAC7C,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,UAAU;IACV,SAAS;IACT,wDAAwD;IACxD,gBAAgB;IAChB,yBAAyB;;AAE7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA,qCAAqC;AACrC;IACI,oBAAoB;IACpB,UAAU;IACV;AACJ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,eAAe;AACnB;;;AAGA;;IAEI,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,WAAW;IACX;AACJ;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,oCAAoC;IACpC,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX;AACJ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf;AACJ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf;AACJ;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,oBAAoB;IACpB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX;AACJ;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB;AACJ;;AAEA,8BAA8B;AAC9B;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,6BAA6B;IAC7B,WAAW;;IAEX,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;;AAGA;IACI;QACI,SAAS;IACb;AACJ","sourcesContent":["/* Style for desktop */\n.task-form {\n    min-width: 320px;\n    max-width: 400px;\n    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.15);\n    border-radius: 12px;\n    padding: 1rem;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .8rem;\n    color: #777;\n    opacity: 1;\n    top: 1rem;\n    /* transition: max-width 0.6s ease, opacity 0.3s ease; */\n    font-weight: 500;\n    background-color: #fdfdfd;\n\n}\n\n.task-form input {\n    background: unset;\n}\n\n.task-form.collapse {\n    max-width: 0;\n    opacity: 0;\n}\n\n/* Shared styles between both forms */\n.close-btn {\n    align-self: flex-end;\n    z-index: 3;\n    cursor: pointer\n}\n\n.delete-btn {\n    width: 1.5rem;\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n    cursor: pointer;\n}\n\n\n.button,\n.checkmark {\n    cursor: pointer;\n}\n\nlabel.hidden {\n    display: none\n}\n\n.task-form #taskName {\n    font-size: 1.1rem;\n    color: #555;\n    padding: .2rem .5rem;\n    text-transform: capitalize;\n    font-size: 1.1rem;\n    margin-top: -0.8rem;\n    margin-bottom: .8rem\n}\n\ninput[type=\"text\"]:focus-visible {\n    outline: none;\n    border-width: 2px\n}\n\ninput[type=\"text\"] {\n    border: unset;\n    border-bottom: 1.5px solid #888;\n    text-align: center;\n    width: 100%;\n    color: #444\n}\n\n.form-row {\n    width: 80%;\n    /* display: flex; */\n    /* align-items: center; */\n    /* justify-content: space-between; */\n    position: relative;\n    margin: 0 auto\n}\n\n.calendar-logo {\n    position: absolute;\n    right: 0;\n    top: 0\n}\n\n#dueDate {\n    display: flex;\n    border: unset;\n    font-size: .8rem;\n    font-size: 1rem;\n    color: #444;\n    translate: 4px 0;\n    font-family: inherit;\n    color: inherit\n}\n\n#dueDate:focus-visible {\n    outline: none\n}\n\nlabel.dueDate {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: baseline\n}\n\nspan.button {\n    position: absolute;\n    z-index: 5;\n    right: 0\n}\n\nspan.button.hidden {\n    display: none;\n}\n\n.submit-btn {\n    background: unset;\n    border: unset;\n    display: flex;\n    border-radius: 100%;\n    cursor: pointer;\n    margin-top: .8rem\n}\n\n.color {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\nlabel {\n    font-size: 1.1rem\n}\n\n.container {\n    position: relative;\n    top: 4px\n}\n\n.container input[type=\"radio\"] {\n    position: relative;\n    cursor: pointer;\n    opacity: 0\n}\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.1rem;\n    width: 1.1rem;\n    border-radius: 50%;\n    translate: -4px 0\n}\n\n.red.checkmark {\n    background-color: #E74C3C\n}\n\n.yellow.checkmark {\n    background-color: #F4D03F\n}\n\n.green.checkmark {\n    background-color: #2ECC71\n}\n\ninput:checked~.checkmark::after {\n    content: '';\n    display: block;\n    border-radius: 100%;\n    height: 50%;\n    width: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    background-color: #fdfdfd\n}\n\n#subtasks {\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n    width: 100%\n}\n\n.subtask {\n    text-align: left !important;\n    font-weight: 300;\n    padding: .1rem .5rem\n}\n\n/* new rules for description */\n#description {\n    width: 100%;\n    border: unset;\n    background: transparent;\n    font-size: 1rem;\n    font-family: inherit;\n    padding: 0.5rem;\n    border-bottom: 1px solid #888;\n    color: #555;\n    \n    display: block;\n    overflow: hidden;\n    resize: none;\n}\n\n#description:focus,\n#description:active {\n    outline: none;\n    border-bottom: 2px solid #888;\n}\n\n\n@media screen and (max-width: 768px) {\n    .task-form {\n        top: 1rem;\n    }\n}"],"sourceRoot":""}]);
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

#app.blurred {
    filter: blur(1.5px);
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

.help-message {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-size: 1.2rem;
    font-weight: 600;
    color: #444;

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
        align-items: stretch;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAIA;IACI,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,+BAA+B;IAC/B,gBAAgB;;IAEhB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,wCAAwC;IACxC,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,aAAa;;AAEjB;;AAEA;IACI,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,4DAA4D;IAC5D,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;;AAEf;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,0BAA0B;AAC9B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,sCAAsC;AAC1C;;;AAGA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;IACV,cAAc;AAClB;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI;QACI,gBAAgB;QAChB,iDAAiD;QACjD,aAAa;QACb,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,cAAc;QACd,gBAAgB;QAChB,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;;;IAGA;QACI,kBAAkB;QAClB,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,aAAa;QACb,gBAAgB;QAChB,WAAW;QACX,oBAAoB;IACxB;;AAEJ","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');\n\nbody {\n    font-family: 'Mulish', sans-serif;\n    background-color: antiquewhite;\n}\n\n#app {\n    background-color: #FDFDFD;\n    display: flex;\n    height: 100vh;\n    height: 100svh;\n    overflow: hidden;\n}\n\n#app.blurred {\n    filter: blur(1.5px);\n}\n\n#sidebar {\n    flex-basis: 260px;\n    background: #FDFDFD;\n    display: grid;\n    align-content: baseline;\n    grid-template-rows: min-content;\n    grid-gap: 0.6rem;\n\n    padding: 1rem;\n    position: relative;\n    overflow-x: hidden;\n    z-index: 10;\n    opacity: 1;\n    transition: 0.4s ease, opacity 0.3s ease;\n    scrollbar-width: none;\n    border-right: 4px solid #F5F5F5;\n}\n\n#sidebar.closed {\n    flex-basis: 0px;\n    width: 0px;\n    padding: 0px;\n    opacity: 0;\n}\n\n#open-sidebar {\n    display: none;\n}\n\n\n#main {\n    flex-grow: 1;\n    background-color: #FBFBFB;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n\n}\n\n#content {\n    /* flex-grow: 2;s */\n    gap: 1rem;\n    padding-top: 1rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(378px, 1fr));\n    align-items: start;\n}\n\n.help-message {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #444;\n\n}\n\n\n#heading {\n    font-size: 1.8rem;\n    padding-top: .2rem;\n    color: #444444;\n    text-transform: capitalize;\n}\n\n.padded {\n    padding-left: 3.8rem;\n    transition: 0.3s ease;\n    /* ?Change to >0.5 for bouncy effect */\n}\n\n\n#minimaList {\n    justify-self: center;\n    width: 120px;\n    padding: 0.8rem;\n}\n\n#sidebar #close-sidebar,\n#open-sidebar {\n    padding: 0.6rem 0.8rem;\n    cursor: pointer;\n}\n\n#open-sidebar {\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    z-index: 1;\n    display: block;\n}\n\n\n#sidebar #close-sidebar {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    cursor: pointer;\n}\n\n#add-task {\n    position: absolute;\n    bottom: 1rem;\n    left: 50%;\n    background: unset;\n    border: unset;\n    border-radius: 100%;\n    height: 42px;\n    width: 42px;\n    display: flex;\n    place-content: center;\n    padding: 6px;\n    background-color: #efefef;\n    bottom: 0.5rem;\n    translate: -50% 0;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n\n    #sidebar {\n        grid-gap: 0.6rem;\n        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.24);\n        border: unset;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100svh;\n        max-width: 320px;\n        width: 75%;\n    }\n\n    #Logo {\n        width: 100px;\n    }\n\n    #main-heading {\n        display: none;\n    }\n\n\n    #content {\n        align-self: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        padding: 1rem;\n        overflow: scroll;\n        height: 90%;\n        align-items: stretch;\n    }\n\n}"],"sourceRoot":""}]);
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
    const app = document.getElementById('app');

    modalWindow.id = 'modal-window';
    modalWindow.classList.add('hidden');
    document.body.appendChild(modalWindow);

    //Methods
    const renderModal = (content) => {
        modalWindow.innerHTML = ''
        modalWindow.appendChild(content);
        modalWindow.classList.remove('hidden');
        app.classList.add('blurred');
    }

    const closeModal = () => {
        modalWindow.classList.add('hidden');
        app.classList.remove('blurred');
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
/* harmony import */ var _trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash.svg */ "./src/components/old-task-form/trash.svg");
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
                            <textarea name="description" id ="description" rows="1" placeholder="Add Description..."></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <img src="${_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="submit">
                        </button>`


    //For autoheight on input
    const formTextarea = taskForm.querySelector('#description');
    formTextarea.addEventListener('input', autoResize, false);

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
                        <img src="${_trash_svg__WEBPACK_IMPORTED_MODULE_3__}" alt ="delete" class ="delete-btn">
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
                        <button type="submit" class="submit-btn">
                            <img src="${_checkmark_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="submit">
                        </button>`



        //auto height
        const editFormTextArea = editForm.querySelector('#description');
        editFormTextArea.addEventListener('input', autoResize, false);


        //todo add logic to add checked attribute to the correct priority
        editForm.addEventListener('click', function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) hideForm();
            if (btn.matches('.delete-btn')) {
                _js_toDoManager__WEBPACK_IMPORTED_MODULE_8__["default"].deleteTodo(todo);
                // force ui update
                hideForm();
                _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_7__["default"].getActiveProject());
                _js_UIController__WEBPACK_IMPORTED_MODULE_6__["default"].updateProjectList();

            };
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
            _js_toDoManager__WEBPACK_IMPORTED_MODULE_8__["default"].editTodo(todo, newTaskName, newDescription, newDueDate, newPriority);

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



// helper function
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

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
/* harmony import */ var _components_old_task_form_trash_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/old-task-form/trash.svg */ "./src/components/old-task-form/trash.svg");










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
                        <img src = "${_components_old_task_form_trash_svg__WEBPACK_IMPORTED_MODULE_5__}" class = "delete-btn" alt = "delete">
                        <img >
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
            if (btn.matches('.close-btn')) hideForm();
            if (btn.matches('.delete-btn')) {
                _js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].deleteProject(project);
                // Force UI update
                _js_UIController__WEBPACK_IMPORTED_MODULE_2__["default"].updateProjectList();
                _js_UIController__WEBPACK_IMPORTED_MODULE_2__["default"].updateTodo(_js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].getActiveProject());
                _modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal();
            }
        });

        editForm.addEventListener('submit', (event) => handleUpdate(event));

        function handleUpdate(event) {
            event.preventDefault();

            let taskData = new FormData(editForm);
            const newName = taskData.get('project-name');

            _js_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].editProject(project, newName);
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
/* harmony import */ var _js_localStorage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/localStorage.js */ "./src/js/localStorage.js");
/* harmony import */ var _components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/old-task-form/task-form.js */ "./src/components/old-task-form/task-form.js");
/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.js */ "./src/components/modal/modal.js");
/* harmony import */ var _css_project_form_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/project-form.css */ "./src/css/project-form.css");
/* harmony import */ var _components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project-form/project-form.js */ "./src/components/project-form/project-form.js");
// imports













// check if old data is present

if (_js_localStorage_js__WEBPACK_IMPORTED_MODULE_8__["default"].arrayExists()) {
    // const activeProject = JSON.parse(LocStorage.getActiveProject());
    _js_localStorage_js__WEBPACK_IMPORTED_MODULE_8__["default"].populateData();
    // projectManager.setProjectArr(projects);
    // projectManager.switchProject(activeProject);
    // 
    // UIcontroller.updateProjectList();
    // 
}

else {
    const homeProject = _js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].createNewProject('Home');
    // Set initial project to active
    _js_projectManager__WEBPACK_IMPORTED_MODULE_3__["default"].switchProject(homeProject);

    // Add dummy tasks to the project
    _js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Buy Groceries", "1 kg tomatoes, 1kg potato", "29-01-2024", "medium");
    _js_toDoManager__WEBPACK_IMPORTED_MODULE_4__["default"].createNewTodo(homeProject, "Study for exams", "", "29-01-2024", "high");
    _js_UIController__WEBPACK_IMPORTED_MODULE_7__["default"].updateProjectList();
}




// Render the projects based on the UI
// First render the projects div
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
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_10__["default"].renderModal(_components_project_form_project_form_js__WEBPACK_IMPORTED_MODULE_11__["default"].newForm());
})

const newTaskBtn = document.getElementById('add-task')
newTaskBtn.addEventListener('click', () => {
    _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_10__["default"].renderModal(_components_old_task_form_task_form_js__WEBPACK_IMPORTED_MODULE_9__["default"].newTask());
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
    // renders all the todos
    const updateTodo = (project) => {
        if (project == null) {
            UIcontroller.renderHelp('No More Pending Projects : )');
            return
        }
        // update todo list in UI
        contentDiv.innerHTML = ''
        // console.table(projectManager.viewTodosInProject(project));
        const allTodos = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].viewTodosInProject(project)
        allTodos.forEach((item) => { renderTodo(item) });

        subheading.innerText = ` ${project.name}`
        updateProjectList()
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

    const renderHelp = (message) => {
        const p = document.createElement('p')
        p.className = 'help-message'
        p.textContent = message
        contentDiv.innerHTML = p.outerHTML;
    }


    return { updateProjectList, updateTodo, renderHelp }
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


// renders a single todo and attaches listeners to it
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

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _toDoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoManager */ "./src/js/toDoManager.js");
/* harmony import */ var _toDoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoFactory */ "./src/js/toDoFactory.js");
// Code for local storage




const LocStorage = (() => {
    //Checking for local storage
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    //Using local storage
    if (storageAvailable("localStorage")) {
        console.log('local storage is available');
    }
    else {
        throw ("local storage not available");

    }

    const saveArray = () => {
        const projectsArr = JSON.stringify(_projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].viewAllProjects());
        localStorage.setItem('projectsArr', projectsArr);
    }
    const populateData = () => {
        const arr = JSON.parse(localStorage.getItem('projectsArr'));
        arr.forEach((project) => {
            const newProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].createNewProject(project.name);
            console.log(newProject);
            const todos = project.todos;
            console.log(todos);
            todos.forEach((todo) => {
                const newTodo = _toDoManager__WEBPACK_IMPORTED_MODULE_1__["default"].createNewTodo(newProject, todo.title, todo.description, todo.dueDate, todo.priority, todo.isDone);
                console.log(newTodo);
            })
        })
        console.log(arr);
    }

    const saveActiveProject = (project) => localStorage.setItem('activeProject', JSON.stringify(project));

    const getActiveProject = () => localStorage.getItem('activeProject');

    const arrayExists = () => localStorage.getItem("projectsArr") !== null;

    const clearArray = () => localStorage.removeItem("projectsArr");


    return { saveArray, populateData, arrayExists, clearArray, saveActiveProject, getActiveProject };
})();




// to add the methods back


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocStorage);

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
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIController */ "./src/js/UIController.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFactory */ "./src/js/projectFactory.js");
// Responsibility: Creates instances of todo items with the specified properties.





const projectManager = (() => {
    let projects = []
    let activeProject = null;

    const setProjectArr = (newArr) => {
        projects = newArr;
    }

    //? how to do this on start???

    const createNewProject = (projectName) => {
        const newProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_2__.createProject)(projectName);
        switchProject(newProject);
        projects.push(newProject);
        _UIController__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(activeProject);
        // save changes to local storage
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].saveArray();
        return newProject;
    }

    const editProject = (project, newName) => {
        project.name = newName;
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].saveArray();
        return project
    }

    const switchProject = (project) => {
        activeProject = project;
        // LocStorage.saveActiveProject(project);
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
        _localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].saveArray();
    };

    const viewAllProjects = () => {
        return projects.slice(); // Return a copy of the projects array
    };

    const viewTodosInProject = (project) => {
        return project.todos.slice(); // Return a copy of the todos array within the specified project
    };



    return { createNewProject, editProject, switchProject, getActiveProject, deleteProject, viewAllProjects, viewTodosInProject }
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
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/js/projectManager.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
// Responsibility: Handles application logic related to todos.







const todoManager = (() => {

    const createNewTodo = (project, title, description, dueDate, priority, isDone = false) => {
        console.log('project that was passed is', project)

        const newTodo = (0,_toDoFactory__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, description, dueDate, priority, isDone);
        project.addTodo(newTodo);
        _localStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveArray();
    }
    const editTodo = (todo, newTitle, newDescription, newDueDate, newPriority) => {
        todo.updateTodo(newTitle, newDescription, newDueDate, newPriority);
        _localStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveArray();
    }

    const deleteTodo = (todo) => {
        const activeProject = _projectManager__WEBPACK_IMPORTED_MODULE_1__["default"].getActiveProject();
        if (activeProject) { activeProject.removeTodo(todo) }
        _localStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveArray();
    }

    const toggleTodoStatus = (todo) => {
        todo.toggleStatus()
        _localStorage__WEBPACK_IMPORTED_MODULE_2__["default"].saveArray();
    }

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

/***/ "./src/components/old-task-form/trash.svg":
/*!************************************************!*\
  !*** ./src/components/old-task-form/trash.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32664d1e92b0f25194ea.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtGQUErRixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFFBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0s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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZ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Y0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNqRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxvQ0FBb0MsNEJBQTRCO0FBQ2hFOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRTJDOztBQUVHO0FBQ047OztBQUd4Qzs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qix3REFBVTtBQUNsQztBQUNBLFFBQVEscURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQjs7QUFFQTtBQUNBLDhCQUE4Qix1REFBYztBQUM1Qyw2QkFBNkI7QUFDN0IsUUFBUSxxREFBVTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxpRUFBZSxXQUFXLEVBQUM7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3Byb2plY3QtZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3MvdGFzay1mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy90b2RvLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNzcz8wMWRiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3Byb2plY3QtZm9ybS5jc3M/YWExOCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9wcm9qZWN0LmNzcz9iMGNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3Rhc2stZm9ybS5jc3M/NGU3YSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy90b2RvLmNzcz9lODQxIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL29sZC10YXNrLWZvcm0vdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9VSUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdG9Eb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90b0RvTWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI21vZGFsLXdpbmRvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY1NztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDEyO1xufVxuXG4jbW9kYWwtd2luZG93LmhpZGRlbiB7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG4gICAgb3BhY2l0eTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7O0lBRWYsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1DQUFtQztJQUNuQyxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21vZGFsLXdpbmRvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2NTc7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDEyO1xcbn1cXG5cXG4jbW9kYWwtd2luZG93LmhpZGRlbiB7XFxuICAgIG1heC13aWR0aDogMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cXG4gICAgb3BhY2l0eTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvamVjdC1mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuOHJlbTtcbiAgICBjb2xvcjogIzc3NztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjZzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcblxufVxuXG4ucHJvamVjdC1mb3JtLmNvbGxhcHNlIHtcbiAgICBtYXgtd2lkdGg6IDA7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNsb3NlLXByb2plY3QtZm9ybSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtZm9ybSAjcHJvamVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogIzU1NVxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjODg4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ0NFxufVxuXG4uc3VibWl0LXByb2plY3QtZm9ybSB7XG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbmxhYmVsLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wcm9qZWN0LWZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0RBQWtEO0lBQ2xELGdCQUFnQjtJQUNoQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC1mb3JtIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjhyZW07XFxuICAgIGNvbG9yOiAjNzc3O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMC42cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcXG5cXG59XFxuXFxuLnByb2plY3QtZm9ybS5jb2xsYXBzZSB7XFxuICAgIG1heC13aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNsb3NlLXByb2plY3QtZm9ybSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybSAjcHJvamVjdC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjNTU1XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM4ODg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjNDQ0XFxufVxcblxcbi5zdWJtaXQtcHJvamVjdC1mb3JtIHtcXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbmxhYmVsLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBidXR0b24jYWRkLXByb2plY3Qge1xuICAgIGJvcmRlcjogdW5zZXQ7XG59XG5cbmJ1dHRvbiNhZGQtcHJvamVjdCxcbi5wcm9qZWN0LXRhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICB3aWR0aDogOTUlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbiAgICBnYXA6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuXG5cbmJ1dHRvbiNhZGQtcHJvamVjdDpob3Zlcixcbi5wcm9qZWN0LXRhYjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xufVxuXG4ucHJvamVjdC10YWIuYWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbn1cblxuZGl2I3Byb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC42cmVtO1xufVxuXG5idXR0b24jYWRkLXByb2plY3QgcCxcbi5uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxucC5jb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjREMDNGO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5idXR0b24uZWRpdC1idG4ge1xuICAgIGhlaWdodDogMjJweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIHRyYW5zaXRpb246IDAuMSBzY2FsZSBlYXNlLWluO1xufVxuXG5idXR0b24uZWRpdC1idG46YWN0aXZlIHtcbiAgICBzY2FsZTogMS4xO1xufVxuXG5idXR0b24jYWRkLXByb2plY3Q6YWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSBpbnNldDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBzY2FsZTogMC45OTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5cblxufVxuXG4jYWRkLXByb2plY3Q6aG92ZXIge1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xuXG59XG5cbiNhZGQtcHJvamVjdD4qIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5wcm9qZWN0IHtcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDAuOXJlbTtcbiAgICB9XG5cbiAgICAvKiBJbmxpbmUgIzIgfCBodHRwOi8vMTI3LjAuMC4xOjU1MDEvZGlzdC8gKi9cblxuXG4gICAgI3NpZGUtYmFyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuXG4gICAgLnBhZ2Utd3JhcHBlciB7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAjaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOzs7O0FBSUE7O0lBRUksaURBQWlEO0lBQ2pELHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0RBQXNEO0lBQ3RELHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQSw0Q0FBNEM7OztJQUc1QztRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJ1dHRvbiNhZGQtcHJvamVjdCB7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxufVxcblxcbmJ1dHRvbiNhZGQtcHJvamVjdCxcXG4ucHJvamVjdC10YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcXG4gICAgZ2FwOiAwLjhyZW07XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM0NDQ0NDQ7XFxufVxcblxcblxcblxcbmJ1dHRvbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdC10YWI6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtdGFiLmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxufVxcblxcbmRpdiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0IHAsXFxuLm5hbWUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxucC5jb3VudCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEQwM0Y7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuYnV0dG9uLmVkaXQtYnRuIHtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMSBzY2FsZSBlYXNlLWluO1xcbn1cXG5cXG5idXR0b24uZWRpdC1idG46YWN0aXZlIHtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuYnV0dG9uI2FkZC1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSBpbnNldDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICAgIHNjYWxlOiAwLjk5O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuXFxuXFxufVxcblxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XFxuXFxufVxcblxcbiNhZGQtcHJvamVjdD4qIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnByb2plY3Qge1xcbiAgICAgICAgcGFkZGluZzogMC42cmVtIDAuOXJlbTtcXG4gICAgfVxcblxcbiAgICAvKiBJbmxpbmUgIzIgfCBodHRwOi8vMTI3LjAuMC4xOjU1MDEvZGlzdC8gKi9cXG5cXG5cXG4gICAgI3NpZGUtYmFyIHtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB9XFxuXFxuICAgIC5wYWdlLXdyYXBwZXIge1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNoZWFkaW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogU3R5bGUgZm9yIGRlc2t0b3AgKi9cbi50YXNrLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC44cmVtO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAxcmVtO1xuICAgIC8qIHRyYW5zaXRpb246IG1heC13aWR0aCAwLjZzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcblxufVxuXG4udGFzay1mb3JtIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbn1cblxuLnRhc2stZm9ybS5jb2xsYXBzZSB7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8qIFNoYXJlZCBzdHlsZXMgYmV0d2VlbiBib3RoIGZvcm1zICovXG4uY2xvc2UtYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGN1cnNvcjogcG9pbnRlclxufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5idXR0b24sXG4uY2hlY2ttYXJrIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxhYmVsLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZVxufVxuXG4udGFzay1mb3JtICN0YXNrTmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuOHJlbVxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci13aWR0aDogMnB4XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM4ODg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDQ0XG59XG5cbi5mb3JtLXJvdyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0b1xufVxuXG4uY2FsZW5kYXItbG9nbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMFxufVxuXG4jZHVlRGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHRyYW5zbGF0ZTogNHB4IDA7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXRcbn1cblxuI2R1ZURhdGU6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogbm9uZVxufVxuXG5sYWJlbC5kdWVEYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmVcbn1cblxuc3Bhbi5idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHJpZ2h0OiAwXG59XG5cbnNwYW4uYnV0dG9uLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAuOHJlbVxufVxuXG4uY29sb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtXG59XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDRweFxufVxuXG4uY29udGFpbmVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwXG59XG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEuMXJlbTtcbiAgICB3aWR0aDogMS4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2xhdGU6IC00cHggMFxufVxuXG4ucmVkLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NEMzQ1xufVxuXG4ueWVsbG93LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDAzRlxufVxuXG4uZ3JlZW4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxXG59XG5cbmlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmRcbn1cblxuI3N1YnRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjhyZW07XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLnN1YnRhc2sge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IC4xcmVtIC41cmVtXG59XG5cbi8qIG5ldyBydWxlcyBmb3IgZGVzY3JpcHRpb24gKi9cbiNkZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4jZGVzY3JpcHRpb246Zm9jdXMsXG4jZGVzY3JpcHRpb246YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODg4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRhc2stZm9ybSB7XG4gICAgICAgIHRvcDogMXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rhc2stZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULHdEQUF3RDtJQUN4RCxnQkFBZ0I7SUFDaEIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7QUFDbkI7OztBQUdBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFdBQVc7O0lBRVgsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZSBmb3IgZGVza3RvcCAqL1xcbi50YXNrLWZvcm0ge1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuOHJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgLyogdHJhbnNpdGlvbjogbWF4LXdpZHRoIDAuNnMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XFxuXFxufVxcblxcbi50YXNrLWZvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG59XFxuXFxuLnRhc2stZm9ybS5jb2xsYXBzZSB7XFxuICAgIG1heC13aWR0aDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLyogU2hhcmVkIHN0eWxlcyBiZXR3ZWVuIGJvdGggZm9ybXMgKi9cXG4uY2xvc2UtYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5idXR0b24sXFxuLmNoZWNrbWFyayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGFiZWwuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBjb2xvcjogIzU1NTtcXG4gICAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW1cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweFxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjODg4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogIzQ0NFxcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG9cXG59XFxuXFxuLmNhbGVuZGFyLWxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDBcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICB0cmFuc2xhdGU6IDRweCAwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXRcXG59XFxuXFxuI2R1ZURhdGU6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmVcXG59XFxuXFxubGFiZWwuZHVlRGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZVxcbn1cXG5cXG5zcGFuLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgcmlnaHQ6IDBcXG59XFxuXFxuc3Bhbi5idXR0b24uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAuOHJlbVxcbn1cXG5cXG4uY29sb3Ige1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHhcXG59XFxuXFxuLmNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDBcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEuMXJlbTtcXG4gICAgd2lkdGg6IDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC00cHggMFxcbn1cXG5cXG4ucmVkLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzRDM0NcXG59XFxuXFxuLnllbGxvdy5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjREMDNGXFxufVxcblxcbi5ncmVlbi5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxXFxufVxcblxcbmlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkXFxufVxcblxcbiNzdWJ0YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG5cXG4uc3VidGFzayB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgcGFkZGluZzogLjFyZW0gLjVyZW1cXG59XFxuXFxuLyogbmV3IHJ1bGVzIGZvciBkZXNjcmlwdGlvbiAqL1xcbiNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IHVuc2V0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcXG4gICAgY29sb3I6ICM1NTU7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4jZGVzY3JpcHRpb246Zm9jdXMsXFxuI2Rlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAudGFzay1mb3JtIHtcXG4gICAgICAgIHRvcDogMXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50b2RvLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1heC13aWR0aDogMzc4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbn1cblxuLnRvZG8tY2FyZC5jb21wbGV0ZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHNvbGlkICM1NTUgbGluZS10aHJvdWdoO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRvZG8tY2FyZCAuZGV0YWlscyB7XG4gICAgZmxleC1ncm93OiAyO1xufVxuXG4udG9kby1jYXJkIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIGNvbG9yOiAjNDQ0O1xuXG59XG5cbi50b2RvLWNhcmQgLmR1ZS1kYXRlIHtcbiAgICBjb2xvcjogI0FDQUNBQztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRvZG8tY2FyZCAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIG1heC1oZWlnaHQgZWFzZSwgMC4zcyBvcGFjaXR5IGVhc2U7XG59XG5cblxuLnRvZG8tY2FyZCAuZGVzY3JpcHRpb24uaGlkZGVuIHtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG5cbn1cblxuLnByaW9yaXR5IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5wcmlvcml0eS5oaWdoIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QzNDO1xufVxuXG4ucHJpb3JpdHkubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjREMDNGO1xufVxuXG4ucHJpb3JpdHkubG93IHtcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcxO1xufVxuXG4vKiBhY3Rpb24gYnV0dG9ucyAqL1xuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uYWN0aW9ucyBidXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbnMgLmVkaXQtYnRuIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbi5hY3Rpb25zIC5leHBhbmQtYnRuIHtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIHJvdGF0ZSBlYXNlO1xufVxuXG4uYWN0aW9ucyAuZXhwYW5kLWJ0bi5mbGlwcGVkIHtcbiAgICByb3RhdGU6IDE4MGRlZztcbn1cblxuLmFjdGlvbnMgLmV4cGFuZC1idG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24udG9nZ2xlLWRvbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxuXG5cbmJ1dHRvbi50b2dnbGUtZG9uZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdG9kby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbURBQW1EO0FBQ3ZEOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixVQUFVOztBQUVkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1heC13aWR0aDogMzc4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxufVxcblxcbi50b2RvLWNhcmQuY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjgpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDJweCBzb2xpZCAjNTU1IGxpbmUtdGhyb3VnaDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5kZXRhaWxzIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbn1cXG5cXG4udG9kby1jYXJkIC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICAgIGNvbG9yOiAjNDQ0O1xcblxcbn1cXG5cXG4udG9kby1jYXJkIC5kdWUtZGF0ZSB7XFxuICAgIGNvbG9yOiAjQUNBQ0FDO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi50b2RvLWNhcmQgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuMnMgbWF4LWhlaWdodCBlYXNlLCAwLjNzIG9wYWNpdHkgZWFzZTtcXG59XFxuXFxuXFxuLnRvZG8tY2FyZCAuZGVzY3JpcHRpb24uaGlkZGVuIHtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG5cXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgYmFja2dyb3VuZDogIzJFQ0M3MTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4ucHJpb3JpdHkuaGlnaCB7XFxuICAgIGJhY2tncm91bmQ6ICNFNzRDM0M7XFxufVxcblxcbi5wcmlvcml0eS5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjRjREMDNGO1xcbn1cXG5cXG4ucHJpb3JpdHkubG93IHtcXG4gICAgYmFja2dyb3VuZDogIzJFQ0M3MTtcXG59XFxuXFxuLyogYWN0aW9uIGJ1dHRvbnMgKi9cXG4uYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYWN0aW9ucyBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWN0aW9ucyAuZWRpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4uYWN0aW9ucyAuZXhwYW5kLWJ0biB7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgcm90YXRlIGVhc2U7XFxufVxcblxcbi5hY3Rpb25zIC5leHBhbmQtYnRuLmZsaXBwZWQge1xcbiAgICByb3RhdGU6IDE4MGRlZztcXG59XFxuXFxuLmFjdGlvbnMgLmV4cGFuZC1idG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLnRvZ2dsZS1kb25lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiB1bnNldDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG5cXG5idXR0b24udG9nZ2xlLWRvbmU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ011bGlzaCcsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4jYXBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IDEwMHN2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jYXBwLmJsdXJyZWQge1xuICAgIGZpbHRlcjogYmx1cigxLjVweCk7XG59XG5cbiNzaWRlYmFyIHtcbiAgICBmbGV4LWJhc2lzOiAyNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGREZEO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBncmlkLWdhcDogMC42cmVtO1xuXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0Y1RjVGNTtcbn1cblxuI3NpZGViYXIuY2xvc2VkIHtcbiAgICBmbGV4LWJhc2lzOiAwcHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI29wZW4tc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4jbWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbn1cblxuI2NvbnRlbnQge1xuICAgIC8qIGZsZXgtZ3JvdzogMjtzICovXG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzc4cHgsIDFmcikpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmhlbHAtbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNsYXRlOiAtNTAlIC01MCU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ0NDtcblxufVxuXG5cbiNoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wYWRkZWQge1xuICAgIHBhZGRpbmctbGVmdDogMy44cmVtO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAvKiA/Q2hhbmdlIHRvID4wLjUgZm9yIGJvdW5jeSBlZmZlY3QgKi9cbn1cblxuXG4jbWluaW1hTGlzdCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIsXG4jb3Blbi1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI29wZW4tc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXJlbTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkLXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYm90dG9tOiAwLjVyZW07XG4gICAgdHJhbnNsYXRlOiAtNTAlIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgI3NpZGViYXIge1xuICAgICAgICBncmlkLWdhcDogMC42cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDBzdmg7XG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgI0xvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgI21haW4taGVhZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFJQTtJQUNJLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixpREFBaUQ7UUFDakQsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7OztJQUdBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLG9CQUFvQjtJQUN4Qjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWxpc2g6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzAsMTAwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMDsxLDEwMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNhcHAuYmx1cnJlZCB7XFxuICAgIGZpbHRlcjogYmx1cigxLjVweCk7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZmxleC1iYXNpczogMjYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNGREZERkQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLWdhcDogMC42cmVtO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0Y1RjVGNTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2VkIHtcXG4gICAgZmxleC1iYXNpczogMHB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNvcGVuLXNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jbWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICAvKiBmbGV4LWdyb3c6IDI7cyAqL1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzhweCwgMWZyKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmhlbHAtbWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjNDQ0O1xcblxcbn1cXG5cXG5cXG4jaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjJyZW07XFxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnBhZGRlZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMy44cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxuICAgIC8qID9DaGFuZ2UgdG8gPjAuNSBmb3IgYm91bmN5IGVmZmVjdCAqL1xcbn1cXG5cXG5cXG4jbWluaW1hTGlzdCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG59XFxuXFxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIsXFxuI29wZW4tc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjhyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI29wZW4tc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuI3NpZGViYXIgI2Nsb3NlLXNpZGViYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFyZW07XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICAgIGJvcmRlcjogdW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICBib3R0b206IDAuNXJlbTtcXG4gICAgdHJhbnNsYXRlOiAtNTAlIDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgZ3JpZC1nYXA6IDAuNnJlbTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICAgICAgICBib3JkZXI6IHVuc2V0O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwc3ZoO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG5cXG4gICAgI0xvZ28ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWhlYWRpbmcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtZm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2stZm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2stZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vbW9kYWwuY3NzJ1xuXG5jb25zdCBNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICBtb2RhbFdpbmRvdy5pZCA9ICdtb2RhbC13aW5kb3cnO1xuICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxXaW5kb3cpO1xuXG4gICAgLy9NZXRob2RzXG4gICAgY29uc3QgcmVuZGVyTW9kYWwgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBtb2RhbFdpbmRvdy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBtb2RhbFdpbmRvdy5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFwcC5jbGFzc0xpc3QuYWRkKCdibHVycmVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgbW9kYWxXaW5kb3cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGFwcC5jbGFzc0xpc3QucmVtb3ZlKCdibHVycmVkJyk7XG4gICAgfVxuXG4gICAgbW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgaGFuZGxlQ2xpY2soZXZlbnQpIH0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcjbW9kYWwtd2luZG93JykpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlbmRlck1vZGFsLCBjbG9zZU1vZGFsIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCBhZGRJY29uIGZyb20gJy4vYWRkLXBsdXMuc3ZnJ1xuaW1wb3J0IGNsb3NlQnRuIGZyb20gJy4vY2xvc2UtY2lyY2xlLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IHN1Ym1pdEJ0biBmcm9tICcuL2NoZWNrbWFyay1jaXJjbGUtb3V0bGluZS5zdmcnXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4vdHJhc2guc3ZnJ1xuXG5pbXBvcnQgJy4uLy4uL2Nzcy90YXNrLWZvcm0uY3NzJ1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnXG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4uLy4uL2pzL1VJQ29udHJvbGxlcidcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuLi8uLi9qcy9wcm9qZWN0TWFuYWdlcidcbmltcG9ydCB0b2RvTWFuYWdlciBmcm9tICcuLi8uLi9qcy90b0RvTWFuYWdlcidcblxuY29uc3QgVGFza0Zvcm0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tGb3JtLmNsYXNzTmFtZSA9IFwidGFzay1mb3JtXCI7XG4gICAgLy8gdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2xvc2VCdG59XCIgYWx0PVwiXCIgY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiIGNsYXNzPVwiaGlkZGVuXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJoaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZCBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVsbG93IGNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJsb3dcIiAgdmFsdWU9XCJsb3dcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmVlbiBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwiZGVzY3JpcHRpb25cIiBjbGFzcyA9IFwiaGlkZGVuXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZCA9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCIxXCIgcGxhY2Vob2xkZXI9XCJBZGQgRGVzY3JpcHRpb24uLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3VibWl0QnRufVwiIGFsdD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+YFxuXG5cbiAgICAvL0ZvciBhdXRvaGVpZ2h0IG9uIGlucHV0XG4gICAgY29uc3QgZm9ybVRleHRhcmVhID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgZm9ybVRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXV0b1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChidG4ubWF0Y2hlcygnLmNsb3NlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNhdmVQcm9qZWN0KGV2ZW50KTtcbiAgICAgICAgaGlkZUZvcm0oKTtcbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlUHJvamVjdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBDb2xsZWN0aW5nIERhdGEgZnJvbSB0aGUgZm9ybVxuICAgICAgICBsZXQgdGFza0RhdGEgPSBuZXcgRm9ybURhdGEodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tEYXRhLmdldCgndGFza05hbWUnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEYXRhLmdldCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tEYXRhLmdldCgnY29sb3InKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRhc2tEYXRhLmdldCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAvL0dldCBhY3RpdmUgUHJvamVjdCBhbmQgYXBwZW5kIHRoZSBuZXcgdGFzayB0byB0aGUgcHJvamVjdFxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICB0b2RvTWFuYWdlci5jcmVhdGVOZXdUb2RvKGFjdGl2ZVByb2plY3QsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciB0aGUgbmV3IHRhc2sgYnkgZm9yY2luZyByZSByZW5kZXJcbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8oYWN0aXZlUHJvamVjdCk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIGNvbnN0IGVkaXRUb2RvRm9ybSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Nsb3NlQnRufVwiIGFsdD1cIlwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dHJhc2hJY29ufVwiIGFsdCA9XCJkZWxldGVcIiBjbGFzcyA9XCJkZWxldGUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza05hbWVcIiBjbGFzcz1cImhpZGRlblwiXCI+VGFzayBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIiB2YWx1ZSA9IFwiJHt0b2RvLnRpdGxlfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkdWVEYXRlXCI+RHVlIERhdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgdmFsdWUgPSBcIiR7dG9kby5kdWVEYXRlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJoaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZCBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieWVsbG93IGNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIgaWQ9XCJsb3dcIiAgdmFsdWU9XCJsb3dcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmVlbiBjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvciA9IFwiZGVzY3JpcHRpb25cIiBjbGFzcyA9IFwiaGlkZGVuXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZCA9XCJkZXNjcmlwdGlvblwiIGNvbHMgcGxhY2Vob2xkZXI9XCJBZGQgRGVzY3JpcHRpb24uLi5cIiByZXNpemUgPSBcInRydWVcIj4ke3RvZG8uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3N1Ym1pdEJ0bn1cIiBhbHQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmBcblxuXG5cbiAgICAgICAgLy9hdXRvIGhlaWdodFxuICAgICAgICBjb25zdCBlZGl0Rm9ybVRleHRBcmVhID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGVkaXRGb3JtVGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhdXRvUmVzaXplLCBmYWxzZSk7XG5cblxuICAgICAgICAvL3RvZG8gYWRkIGxvZ2ljIHRvIGFkZCBjaGVja2VkIGF0dHJpYnV0ZSB0byB0aGUgY29ycmVjdCBwcmlvcml0eVxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGJ0bi5tYXRjaGVzKCcuY2xvc2UtYnRuJykpIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICBpZiAoYnRuLm1hdGNoZXMoJy5kZWxldGUtYnRuJykpIHtcbiAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgIC8vIGZvcmNlIHVpIHVwZGF0ZVxuICAgICAgICAgICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8ocHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlUHJvamVjdExpc3QoKTtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBoYW5kbGVVcGRhdGUoZXZlbnQpKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0YXNrRGF0YSA9IG5ldyBGb3JtRGF0YShlZGl0Rm9ybSk7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IHRhc2tEYXRhLmdldCgndGFza05hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSB0YXNrRGF0YS5nZXQoJ2RhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gdGFza0RhdGEuZ2V0KCdjb2xvcicpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IHRhc2tEYXRhLmdldCgnZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgLy8gY2hhbmdlIHRvZG8gdmFsdWVzXG4gICAgICAgICAgICB0b2RvTWFuYWdlci5lZGl0VG9kbyh0b2RvLCBuZXdUYXNrTmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgZm9ybSAtLT4gY2xvc2UgZm9ybVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG5cbiAgICAgICAgICAgIC8vIGZvcmNlIHVpIHJlIHJlbmRlclxuICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KCkgLy8/Y2FuIHJlbW92ZSB0aGlzPz8/XG4gICAgICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuXG5cbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICAgICAgTW9kYWwuY2xvc2VNb2RhbCgpO1xuXG4gICAgICAgICAgICAvLyBmb3JjZSBVSSByZSByZW5kZXJcbiAgICAgICAgICAgIFVJY29udHJvbGxlci51cGRhdGVQcm9qZWN0TGlzdCgpXG4gICAgICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVkaXRGb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB0YXNrRm9ybTtcbiAgICByZXR1cm4geyBuZXdUYXNrLCBlZGl0VG9kb0Zvcm0gfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza0Zvcm07XG5cblxuXG4vLyBoZWxwZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIGF1dG9SZXNpemUoKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodCArICdweCc7XG59IiwiaW1wb3J0IGNsb3NlQnRuIGZyb20gJy4uL29sZC10YXNrLWZvcm0vY2xvc2UtY2lyY2xlLW91dGxpbmUuc3ZnJ1xuaW1wb3J0IHN1Ym1pdEJ0biBmcm9tICcuLi9vbGQtdGFzay1mb3JtL2NoZWNrbWFyay1jaXJjbGUtb3V0bGluZS5zdmcnXG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4uLy4uL2pzL1VJQ29udHJvbGxlcic7XG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5cbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tICcuLi8uLi9qcy9wcm9qZWN0TWFuYWdlcic7XG5cbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL29sZC10YXNrLWZvcm0vdHJhc2guc3ZnJ1xuXG5jb25zdCBQcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1IdG1sID1cbiAgICAgICAgYDxpbWcgc3JjPVwiJHtjbG9zZUJ0bn1cIiBhbHQ9XCJcIiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZVwiIGNsYXNzPVwiaGlkZGVuXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIG5hbWU9XCJwcm9qZWN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkPlxuPC9kaXY+XG48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5cbiAgICA8aW1nIHNyYz1cIiR7c3VibWl0QnRufVwiIGFsdD1cInN1Ym1pdFwiPlxuPC9idXR0b24+YFxuXG4gICAgcHJvamVjdEZvcm0uaW5uZXJIVE1MID0gcHJvamVjdEZvcm1IdG1sO1xuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKGJ0bi5tYXRjaGVzKCcuY2xvc2UtYnRuJykpIHtcbiAgICAgICAgICAgIGhpZGVGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHNhdmVQcm9qZWN0KGV2ZW50KSlcblxuXG4gICAgZnVuY3Rpb24gc2F2ZVByb2plY3QoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRhc2tEYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RGb3JtKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0YXNrRGF0YS5nZXQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHByb2plY3ROYW1lIH0pXG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnN3aXRjaFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gICAgICAgIE1vZGFsLmNsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFZGl0Rm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgZWRpdEZvcm0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtjbG9zZUJ0bn1cIiBhbHQ9XCJcIiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPSBcIiR7dHJhc2hJY29ufVwiIGNsYXNzID0gXCJkZWxldGUtYnRuXCIgYWx0ID0gXCJkZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtbmFtZVwiIGNsYXNzPVwiaGlkZGVuXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIG5hbWU9XCJwcm9qZWN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiIHJlcXVpcmVkIHZhbHVlID0gXCIke3Byb2plY3QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3VibWl0QnRufVwiIGFsdD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgIC8vVG8gbGlzdGVuIGZvciBmb3JtIGNsb3NlXG4gICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBidG4gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoYnRuLm1hdGNoZXMoJy5jbG9zZS1idG4nKSkgaGlkZUZvcm0oKTtcbiAgICAgICAgICAgIGlmIChidG4ubWF0Y2hlcygnLmRlbGV0ZS1idG4nKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgVUkgdXBkYXRlXG4gICAgICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8ocHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gaGFuZGxlVXBkYXRlKGV2ZW50KSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgdGFza0RhdGEgPSBuZXcgRm9ybURhdGEoZWRpdEZvcm0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHRhc2tEYXRhLmdldCgncHJvamVjdC1uYW1lJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmVkaXRQcm9qZWN0KHByb2plY3QsIG5ld05hbWUpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICBNb2RhbC5jbG9zZU1vZGFsKCk7XG5cbiAgICAgICAgICAgIC8vIGZvcmNlIFVJIHJlIHJlbmRlclxuICAgICAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVByb2plY3RMaXN0KClcbiAgICAgICAgICAgIFVJY29udHJvbGxlci51cGRhdGVUb2RvKHByb2plY3RNYW5hZ2VyLmdldEFjdGl2ZVByb2plY3QoKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlZGl0Rm9ybVxuICAgIH1cbiAgICBjb25zdCBuZXdGb3JtID0gKCkgPT4gcHJvamVjdEZvcm07XG5cbiAgICByZXR1cm4geyBuZXdGb3JtLCBuZXdFZGl0Rm9ybSB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RGb3JtOyIsIi8vIGltcG9ydHNcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vY3NzL3Byb2plY3QuY3NzJ1xuaW1wb3J0ICcuL2Nzcy90b2RvLmNzcydcblxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vanMvcHJvamVjdE1hbmFnZXInXG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSAnLi9qcy90b0RvTWFuYWdlcic7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi9qcy90b0RvRmFjdG9yeSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9qcy9wcm9qZWN0RmFjdG9yeSc7XG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gJy4vanMvVUlDb250cm9sbGVyJztcblxuaW1wb3J0ICcuL2pzL2xvY2FsU3RvcmFnZS5qcydcblxuXG4vLyBjaGVjayBpZiBvbGQgZGF0YSBpcyBwcmVzZW50XG5cbmlmIChMb2NTdG9yYWdlLmFycmF5RXhpc3RzKCkpIHtcbiAgICAvLyBjb25zdCBhY3RpdmVQcm9qZWN0ID0gSlNPTi5wYXJzZShMb2NTdG9yYWdlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgTG9jU3RvcmFnZS5wb3B1bGF0ZURhdGEoKTtcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5zZXRQcm9qZWN0QXJyKHByb2plY3RzKTtcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5zd2l0Y2hQcm9qZWN0KGFjdGl2ZVByb2plY3QpO1xuICAgIC8vIFxuICAgIC8vIFVJY29udHJvbGxlci51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIC8vIFxufVxuXG5lbHNlIHtcbiAgICBjb25zdCBob21lUHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmNyZWF0ZU5ld1Byb2plY3QoJ0hvbWUnKTtcbiAgICAvLyBTZXQgaW5pdGlhbCBwcm9qZWN0IHRvIGFjdGl2ZVxuICAgIHByb2plY3RNYW5hZ2VyLnN3aXRjaFByb2plY3QoaG9tZVByb2plY3QpO1xuXG4gICAgLy8gQWRkIGR1bW15IHRhc2tzIHRvIHRoZSBwcm9qZWN0XG4gICAgdG9kb01hbmFnZXIuY3JlYXRlTmV3VG9kbyhob21lUHJvamVjdCwgXCJCdXkgR3JvY2VyaWVzXCIsIFwiMSBrZyB0b21hdG9lcywgMWtnIHBvdGF0b1wiLCBcIjI5LTAxLTIwMjRcIiwgXCJtZWRpdW1cIik7XG4gICAgdG9kb01hbmFnZXIuY3JlYXRlTmV3VG9kbyhob21lUHJvamVjdCwgXCJTdHVkeSBmb3IgZXhhbXNcIiwgXCJcIiwgXCIyOS0wMS0yMDI0XCIsIFwiaGlnaFwiKTtcbiAgICBVSWNvbnRyb2xsZXIudXBkYXRlUHJvamVjdExpc3QoKTtcbn1cblxuXG5cblxuLy8gUmVuZGVyIHRoZSBwcm9qZWN0cyBiYXNlZCBvbiB0aGUgVUlcbi8vIEZpcnN0IHJlbmRlciB0aGUgcHJvamVjdHMgZGl2XG5VSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhwcm9qZWN0TWFuYWdlci5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuXG5cbi8vdG9kbyBJbmNsdWRlIHRoZSBjb2RlIGFmdGVyIHRoaXMgaW4gaXRzIG93biBtb2R1bGVcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuY29uc3QgY2xvc2VTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNpZGViYXInKTtcbmNvbnN0IG9wZW5TaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tc2lkZWJhcicpO1xuXG5cbi8vIENsb3NlIGFuZCBPcGVuIEZ1bmN0aW9uYWxpdHlcbmNsb3NlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGVCYXIodHJ1ZSkpO1xub3BlblNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVTaWRlQmFyKGZhbHNlKSlcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGluZycpO1xuXG5mdW5jdGlvbiB0b2dnbGVTaWRlQmFyKGlzU2lkZUJhck9wZW4pIHtcbiAgICBpZiAoaXNTaWRlQmFyT3Blbikge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3BhZGRlZCcpO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZGRlZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplU2lkZUJhcigpIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xuICAgIH1cbn1cblxucmVzaXplU2lkZUJhcigpO1xuLy8gZm9yIGR5bmFtaWNhbGx5IGNsb3NpbmcgU2lkZUJhclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNpZGVCYXIpO1xuXG5cbmltcG9ydCBUYXNrRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvb2xkLXRhc2stZm9ybS90YXNrLWZvcm0uanMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmpzJztcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpO1xuXG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIE1vZGFsLnJlbmRlck1vZGFsKFByb2plY3RGb3JtLm5ld0Zvcm0oKSk7XG59KVxuXG5jb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJylcbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgTW9kYWwucmVuZGVyTW9kYWwoVGFza0Zvcm0ubmV3VGFzaygpKTtcbn0pXG5cblxuaW1wb3J0ICcuL2Nzcy9wcm9qZWN0LWZvcm0uY3NzJ1xuaW1wb3J0IFByb2plY3RGb3JtIGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtLmpzJztcbmltcG9ydCBMb2NTdG9yYWdlIGZyb20gJy4vanMvbG9jYWxTdG9yYWdlLmpzJztcblxuIiwiLy8gUmVzcG9uc2liaWxpdHk6IE1hbmFnZXMgRE9NLXJlbGF0ZWQgaW50ZXJhY3Rpb25zIGFuZCB1cGRhdGVzLlxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmhlYWRpbmcnKTtcblxuXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi8uLi9hc3NldHMvaWNvbnMvcGVuY2lsLnN2ZydcbmltcG9ydCBleHBhbmRJY29uIGZyb20gJy4vLi4vYXNzZXRzL2ljb25zL2V4cGFuZC5zdmcnXG5cblxuY29uc3QgVUljb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIHByb2plY3QgbGlzdCBpbiBVSVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci52aWV3QWxsUHJvamVjdHMoKTtcbiAgICAgICAgYWxsUHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4geyByZW5kZXJQcm9qZWN0KGl0ZW0pIH0pXG4gICAgfVxuICAgIC8vIHJlbmRlcnMgYWxsIHRoZSB0b2Rvc1xuICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBVSWNvbnRyb2xsZXIucmVuZGVySGVscCgnTm8gTW9yZSBQZW5kaW5nIFByb2plY3RzIDogKScpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIHRvZG8gbGlzdCBpbiBVSVxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUocHJvamVjdE1hbmFnZXIudmlld1RvZG9zSW5Qcm9qZWN0KHByb2plY3QpKTtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBwcm9qZWN0TWFuYWdlci52aWV3VG9kb3NJblByb2plY3QocHJvamVjdClcbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4geyByZW5kZXJUb2RvKGl0ZW0pIH0pO1xuXG4gICAgICAgIHN1YmhlYWRpbmcuaW5uZXJUZXh0ID0gYCAke3Byb2plY3QubmFtZX1gXG4gICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICAvL0Rpc3BsYXkgRXJyb3IgbWVzc2FnZXMgdG8gdGhlIHVzZXJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gICAgICAgIE1vZGFsLnJlbmRlck1vZGFsKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyRmllbGRzID0gKCkgPT4ge1xuICAgICAgICAvLyBDbGVhciBpbnB1dCBmaWVsZCBhZnRlciBpbnB1dC9lZGl0aW5nIHRvZG9zXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySGVscCA9IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcC5jbGFzc05hbWUgPSAnaGVscC1tZXNzYWdlJ1xuICAgICAgICBwLnRleHRDb250ZW50ID0gbWVzc2FnZVxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IHAub3V0ZXJIVE1MO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZVRvZG8sIHJlbmRlckhlbHAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUljb250cm9sbGVyO1xuXG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcbmltcG9ydCBQcm9qZWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0LWZvcm0vcHJvamVjdC1mb3JtXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxcIjtcbmltcG9ydCBUYXNrRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9vbGQtdGFzay1mb3JtL3Rhc2stZm9ybVwiO1xuXG4vLyBIZWxwZXIgRnVuY3Rpb25zIFxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IHByb2plY3RDYXJkR2VuZXJhdG9yKHByb2plY3QpO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgcmVuZGVyIFxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAvLyBtYWtlIGNsaWNrZWQgcHJvamVjdCBhcyBhY3RpdmUgYW5kIHJlbmRlciB0aGUgdGFza3MgaW4gaXRcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc3dpdGNoUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgVUljb250cm9sbGVyLnVwZGF0ZVRvZG8ocHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpKVxuXG4gICAgICAgIC8vIGlmIGVkaXQgYnV0dG9uIGNsaWNrZWRcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZWRpdC1idG4nKSkge1xuICAgICAgICAgICAgTW9kYWwucmVuZGVyTW9kYWwoUHJvamVjdEZvcm0ubmV3RWRpdEZvcm0ocHJvamVjdCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgY2FyZCB0byBzaWRlYmFyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kKGNhcmQpO1xufVxuXG5cbi8vIHJlbmRlcnMgYSBzaW5nbGUgdG9kbyBhbmQgYXR0YWNoZXMgbGlzdGVuZXJzIHRvIGl0XG5jb25zdCByZW5kZXJUb2RvID0gKHRvZG8pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICBjb25zdCB0b2RvQ2FyZCA9IHRvZG9DYXJkR2VuZXJhdG9yKHRvZG8pO1xuICAgIHRvZG9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBoYW5kbGVUb2RvQ2xpY2soZXZlbnQpKVxuXG4gICAgLy9oYW5kbGUgc3RhdGUgb2YgdGhlIHRvZG8gY2FyZFxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZG9DbGljayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0LWJ0bicpKSB7XG5cbiAgICAgICAgICAgIE1vZGFsLnJlbmRlck1vZGFsKFRhc2tGb3JtLmVkaXRUb2RvRm9ybSh0b2RvKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZXhwYW5kLWJ0bicpKSB0b2dnbGVFeHBhbmQoKTtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50b2dnbGUtZG9uZScpKSB7XG4gICAgICAgICAgICB0b2RvTWFuYWdlci50b2dnbGVUb2RvU3RhdHVzKHRvZG8pO1xuICAgICAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUocHJvamVjdE1hbmFnZXIudmlld0FsbFByb2plY3RzKClbMF0udG9kb3MpO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZCh0b2RvQ2FyZCk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVFeHBhbmQoKSB7XG4gICAgICAgIHRvZG9DYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB0b2RvQ2FyZC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ0bicpLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKVxuICAgIH1cblxufVxuXG5cblxuXG5jb25zdCBwcm9qZWN0Q2FyZEdlbmVyYXRvciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKTtcbiAgICBjYXJkLmRhdGFzZXQubmFtZSA9IHByb2plY3QubmFtZTtcbiAgICBjb25zdCBjYXJkSHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSBcInN5bWJvbFwiPiR7cHJvamVjdC5uYW1lWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50XCI+JHtwcm9qZWN0LnRvZG9zLmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWJ0blwiIHN0eWxlID0gXCJiYWNrZ3JvdW5kIDogdXJsKCR7ZWRpdEljb259KVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICBjYXJkLmlubmVySFRNTCA9IGNhcmRIdG1sO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQpXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cblxuY29uc3QgdG9kb0NhcmRHZW5lcmF0b3IgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJyk7XG4gICAgdG9kb0NhcmQuZGF0YXNldC5pbmRleCA9IHRvZG8uaW5kZXhcblxuICAgIGlmICh0b2RvLmlzRG9uZSkgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG5cbiAgICBjb25zdCBjYXJkSHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSAke3RvZG8ucHJpb3JpdHl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZ2dsZS1kb25lXCI+4oCHPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7dG9kby50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcyA9IFwiZGVzY3JpcHRpb24gaGlkZGVuXCI+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3MgPSBcImVkaXQtYnRuXCIgc3R5bGUgPVwiYmFja2dyb3VuZDp1cmwoJHtlZGl0SWNvbn0pIDtcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzID0gXCJleHBhbmQtYnRuXCIgc3R5bGUgPVwiYmFja2dyb3VuZDp1cmwoJHtleHBhbmRJY29ufSlcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgdG9kb0NhcmQuaW5uZXJIVE1MID0gY2FyZEh0bWw7XG4gICAgaWYgKHRvZG8uZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0b2RvQ2FyZC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICByZXR1cm4gdG9kb0NhcmQ7XG59XG5cbiIsIi8vIENvZGUgZm9yIGxvY2FsIHN0b3JhZ2VcblxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9Eb01hbmFnZXJcIjtcblxuY29uc3QgTG9jU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgLy9DaGVja2luZyBmb3IgbG9jYWwgc3RvcmFnZVxuICAgIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICBsZXQgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9Vc2luZyBsb2NhbCBzdG9yYWdlXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgaXMgYXZhaWxhYmxlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyAoXCJsb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGVcIik7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzYXZlQXJyYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQXJyID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIudmlld0FsbFByb2plY3RzKCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnInLCBwcm9qZWN0c0Fycik7XG4gICAgfVxuICAgIGNvbnN0IHBvcHVsYXRlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnInKSk7XG4gICAgICAgIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3M7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gICAgICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG9NYW5hZ2VyLmNyZWF0ZU5ld1RvZG8obmV3UHJvamVjdCwgdG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmlzRG9uZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VG9kbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNhdmVBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVQcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBhcnJheUV4aXN0cyA9ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJcIikgIT09IG51bGw7XG5cbiAgICBjb25zdCBjbGVhckFycmF5ID0gKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9qZWN0c0FyclwiKTtcblxuXG4gICAgcmV0dXJuIHsgc2F2ZUFycmF5LCBwb3B1bGF0ZURhdGEsIGFycmF5RXhpc3RzLCBjbGVhckFycmF5LCBzYXZlQWN0aXZlUHJvamVjdCwgZ2V0QWN0aXZlUHJvamVjdCB9O1xufSkoKTtcblxuXG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9Eb0ZhY3RvcnlcIjtcblxuLy8gdG8gYWRkIHRoZSBtZXRob2RzIGJhY2tcblxuXG5leHBvcnQgZGVmYXVsdCBMb2NTdG9yYWdlOyIsIi8vIFJlc3BvbnNpYmlsaXR5OiBDcmVhdGVzIGluc3RhbmNlcyBvZiBwcm9qZWN0IG9iamVjdHMuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSA9ICdkZWZhdWx0JykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHRvZG9zOiBbXSxcbiAgICAgICAgLy9tZXRob2RzXG4gICAgICAgIGFkZFRvZG86IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbylcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVG9kbzogZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7IHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKSB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9IiwiLy8gUmVzcG9uc2liaWxpdHk6IENyZWF0ZXMgaW5zdGFuY2VzIG9mIHRvZG8gaXRlbXMgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG5pbXBvcnQgVUljb250cm9sbGVyIGZyb20gXCIuL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IExvY1N0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIjtcblxuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0QXJyID0gKG5ld0FycikgPT4ge1xuICAgICAgICBwcm9qZWN0cyA9IG5ld0FycjtcbiAgICB9XG5cbiAgICAvLz8gaG93IHRvIGRvIHRoaXMgb24gc3RhcnQ/Pz9cblxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBzd2l0Y2hQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBVSWNvbnRyb2xsZXIudXBkYXRlVG9kbyhhY3RpdmVQcm9qZWN0KTtcbiAgICAgICAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgTG9jU3RvcmFnZS5zYXZlQXJyYXkoKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAocHJvamVjdCwgbmV3TmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICBMb2NTdG9yYWdlLnNhdmVBcnJheSgpO1xuICAgICAgICByZXR1cm4gcHJvamVjdFxuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgLy8gTG9jU3RvcmFnZS5zYXZlQWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IGFjdGl2ZVByb2plY3Q7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGV0ZWQgcHJvamVjdCB3YXMgdGhlIGFjdGl2ZSBwcm9qZWN0LCBzZXQgYWN0aXZlUHJvamVjdCB0byBudWxsXG4gICAgICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIExvY1N0b3JhZ2Uuc2F2ZUFycmF5KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLnNsaWNlKCk7IC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIHByb2plY3RzIGFycmF5XG4gICAgfTtcblxuICAgIGNvbnN0IHZpZXdUb2Rvc0luUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LnRvZG9zLnNsaWNlKCk7IC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIHRvZG9zIGFycmF5IHdpdGhpbiB0aGUgc3BlY2lmaWVkIHByb2plY3RcbiAgICB9O1xuXG5cblxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Byb2plY3QsIGVkaXRQcm9qZWN0LCBzd2l0Y2hQcm9qZWN0LCBnZXRBY3RpdmVQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCB2aWV3QWxsUHJvamVjdHMsIHZpZXdUb2Rvc0luUHJvamVjdCB9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyOyIsIi8vIFJlc3BvbnNpYmlsaXR5OiBDcmVhdGVzIGluc3RhbmNlcyBvZiBwcm9qZWN0IG9iamVjdHMuXG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9IG51bGwsIHByaW9yaXR5ID0gJ2xvdycsIGlzRG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgaXNEb25lOiBpc0RvbmUsXG5cbiAgICAgICAgLy8gbWV0aG9kc1xuICAgICAgICB1cGRhdGVUb2RvOiBmdW5jdGlvbiAobmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVTdGF0dXM6IGZ1bmN0aW9uICgpIHsgdGhpcy5pc0RvbmUgPSAhdGhpcy5pc0RvbmUgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRvZG87XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfSIsIi8vIFJlc3BvbnNpYmlsaXR5OiBIYW5kbGVzIGFwcGxpY2F0aW9uIGxvZ2ljIHJlbGF0ZWQgdG8gdG9kb3MuXG5cbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b0RvRmFjdG9yeVwiO1xuXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCBMb2NTdG9yYWdlIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5cbmNvbnN0IHRvZG9NYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lID0gZmFsc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3QgdGhhdCB3YXMgcGFzc2VkIGlzJywgcHJvamVjdClcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpO1xuICAgICAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICAgIExvY1N0b3JhZ2Uuc2F2ZUFycmF5KCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRUb2RvID0gKHRvZG8sIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgdG9kby51cGRhdGVUb2RvKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICBMb2NTdG9yYWdlLnNhdmVBcnJheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCkgeyBhY3RpdmVQcm9qZWN0LnJlbW92ZVRvZG8odG9kbykgfVxuICAgICAgICBMb2NTdG9yYWdlLnNhdmVBcnJheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVRvZG9TdGF0dXMgPSAodG9kbykgPT4ge1xuICAgICAgICB0b2RvLnRvZ2dsZVN0YXR1cygpXG4gICAgICAgIExvY1N0b3JhZ2Uuc2F2ZUFycmF5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTmV3VG9kbyxcbiAgICAgICAgZWRpdFRvZG8sXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIHRvZ2dsZVRvZG9TdGF0dXMsXG4gICAgfTtcbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgdG9kb01hbmFnZXI7XG4vLyB3cmFwIGFib3ZlIGluIEkuSS5GLkUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=