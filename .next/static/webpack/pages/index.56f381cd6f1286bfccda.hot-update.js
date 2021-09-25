webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.OPTIMIZED_FONT_PROVIDERS = exports.SERVER_PROPS_ID = exports.STATIC_PROPS_ID = exports.PERMANENT_REDIRECT_STATUS = exports.TEMPORARY_REDIRECT_STATUS = exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = exports.CLIENT_STATIC_FILES_RUNTIME_AMP = exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = exports.STRING_LITERAL_DROP_BUNDLE = exports.AMP_RENDER_TARGET = exports.CLIENT_STATIC_FILES_RUNTIME = exports.CLIENT_STATIC_FILES_PATH = exports.CLIENT_PUBLIC_FILES_PATH = exports.BLOCKED_PAGES = exports.BUILD_ID_FILE = exports.CONFIG_FILE = exports.SERVERLESS_DIRECTORY = exports.SERVER_DIRECTORY = exports.FONT_MANIFEST = exports.REACT_LOADABLE_MANIFEST = exports.DEV_CLIENT_PAGES_MANIFEST = exports.SERVER_FILES_MANIFEST = exports.IMAGES_MANIFEST = exports.ROUTES_MANIFEST = exports.PRERENDER_MANIFEST = exports.EXPORT_DETAIL = exports.EXPORT_MARKER = exports.BUILD_MANIFEST = exports.PAGES_MANIFEST = exports.PHASE_DEVELOPMENT_SERVER = exports.PHASE_PRODUCTION_SERVER = exports.PHASE_PRODUCTION_BUILD = exports.PHASE_EXPORT = void 0;
var PHASE_EXPORT = 'phase-export';
exports.PHASE_EXPORT = PHASE_EXPORT;
var PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_BUILD = PHASE_PRODUCTION_BUILD;
var PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_PRODUCTION_SERVER = PHASE_PRODUCTION_SERVER;
var PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PHASE_DEVELOPMENT_SERVER = PHASE_DEVELOPMENT_SERVER;
var PAGES_MANIFEST = 'pages-manifest.json';
exports.PAGES_MANIFEST = PAGES_MANIFEST;
var BUILD_MANIFEST = 'build-manifest.json';
exports.BUILD_MANIFEST = BUILD_MANIFEST;
var EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_MARKER = EXPORT_MARKER;
var EXPORT_DETAIL = 'export-detail.json';
exports.EXPORT_DETAIL = EXPORT_DETAIL;
var PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.PRERENDER_MANIFEST = PRERENDER_MANIFEST;
var ROUTES_MANIFEST = 'routes-manifest.json';
exports.ROUTES_MANIFEST = ROUTES_MANIFEST;
var IMAGES_MANIFEST = 'images-manifest.json';
exports.IMAGES_MANIFEST = IMAGES_MANIFEST;
var SERVER_FILES_MANIFEST = 'required-server-files.json';
exports.SERVER_FILES_MANIFEST = SERVER_FILES_MANIFEST;
var DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
exports.DEV_CLIENT_PAGES_MANIFEST = DEV_CLIENT_PAGES_MANIFEST;
var REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.REACT_LOADABLE_MANIFEST = REACT_LOADABLE_MANIFEST;
var FONT_MANIFEST = 'font-manifest.json';
exports.FONT_MANIFEST = FONT_MANIFEST;
var SERVER_DIRECTORY = 'server';
exports.SERVER_DIRECTORY = SERVER_DIRECTORY;
var SERVERLESS_DIRECTORY = 'serverless';
exports.SERVERLESS_DIRECTORY = SERVERLESS_DIRECTORY;
var CONFIG_FILE = 'next.config.js';
exports.CONFIG_FILE = CONFIG_FILE;
var BUILD_ID_FILE = 'BUILD_ID';
exports.BUILD_ID_FILE = BUILD_ID_FILE;
var BLOCKED_PAGES = ['/_document', '/_app'];
exports.BLOCKED_PAGES = BLOCKED_PAGES;
var CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_PUBLIC_FILES_PATH = CLIENT_PUBLIC_FILES_PATH;
var CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_PATH = CLIENT_STATIC_FILES_PATH;
var CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME = CLIENT_STATIC_FILES_RUNTIME;
var AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.AMP_RENDER_TARGET = AMP_RENDER_TARGET;
var STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__'; // static/runtime/main.js

exports.STRING_LITERAL_DROP_BUNDLE = STRING_LITERAL_DROP_BUNDLE;
var CLIENT_STATIC_FILES_RUNTIME_MAIN = "main"; // static/runtime/react-refresh.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = CLIENT_STATIC_FILES_RUNTIME_MAIN;
var CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh"; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
var CLIENT_STATIC_FILES_RUNTIME_AMP = "amp"; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = CLIENT_STATIC_FILES_RUNTIME_AMP;
var CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack"; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
var CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
var TEMPORARY_REDIRECT_STATUS = 307;
exports.TEMPORARY_REDIRECT_STATUS = TEMPORARY_REDIRECT_STATUS;
var PERMANENT_REDIRECT_STATUS = 308;
exports.PERMANENT_REDIRECT_STATUS = PERMANENT_REDIRECT_STATUS;
var STATIC_PROPS_ID = '__N_SSG';
exports.STATIC_PROPS_ID = STATIC_PROPS_ID;
var SERVER_PROPS_ID = '__N_SSP';
exports.SERVER_PROPS_ID = SERVER_PROPS_ID;
var OPTIMIZED_FONT_PROVIDERS = ['https://fonts.googleapis.com/css'];
exports.OPTIMIZED_FONT_PROVIDERS = OPTIMIZED_FONT_PROVIDERS;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/document-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.DocumentContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var DocumentContext = /*#__PURE__*/_react["default"].createContext(null);

exports.DocumentContext = DocumentContext;

if (true) {
  DocumentContext.displayName = 'DocumentContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/get-page-files.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/get-page-files.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getPageFiles=getPageFiles;var _normalizePagePath=__webpack_require__(/*! ./normalize-page-path */ "./node_modules/next/dist/next-server/server/normalize-page-path.js");function getPageFiles(buildManifest,page){const normalizedPage=(0,_normalizePagePath.denormalizePagePath)((0,_normalizePagePath.normalizePagePath)(page));let files=buildManifest.pages[normalizedPage];if(!files){console.warn(`Could not find files for ${normalizedPage} in .next/build-manifest.json`);return[];}return files;}
//# sourceMappingURL=get-page-files.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/normalize-page-path.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/normalize-page-path.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePagePath=normalizePagePath;exports.denormalizePagePath=exports.normalizePathSep=void 0;var _path=__webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");var _denormalizePagePath=__webpack_require__(/*! ./denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");exports.normalizePathSep=_denormalizePagePath.normalizePathSep;exports.denormalizePagePath=_denormalizePagePath.denormalizePagePath;function normalizePagePath(page){// If the page is `/` we need to append `/index`, otherwise the returned directory root will be bundles instead of pages
if(page==='/'){page='/index';}else if(/^\/index(\/|$)/.test(page)){page=`/index${page}`;}// Resolve on anything that doesn't start with `/`
if(!page.startsWith('/')){page=`/${page}`;}// Throw when using ../ etc in the pathname
const resolvedPage=_path.posix.normalize(page);if(page!==resolvedPage){throw new Error(`Requested and resolved page mismatch: ${page} ${resolvedPage}`);}return page;}
//# sourceMappingURL=normalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.isBlockedPage=isBlockedPage;exports.cleanAmpPath=cleanAmpPath;var _constants=__webpack_require__(/*! ../lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");function isBlockedPage(pathname){return _constants.BLOCKED_PAGES.includes(pathname);}function cleanAmpPath(pathname){if(pathname.match(/\?amp=(y|yes|true|1)/)){pathname=pathname.replace(/\?amp=(y|yes|true|1)&?/,'?');}if(pathname.match(/&amp=(y|yes|true|1)/)){pathname=pathname.replace(/&amp=(y|yes|true|1)/,'');}pathname=pathname.replace(/\?$/,'');return pathname;}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "./node_modules/styled-jsx/server.js"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "./node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "./node_modules/next/dist/next-server/server/get-page-files.js");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "./node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  var files = new Set();
  var kept = [];

  var _iterator = _createForOfIteratorHelper(bundles),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var bundle = _step.value;
      if (files.has(bundle.file)) continue;
      files.add(bundle.file);
      kept.push(bundle);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  var sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  var pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles: sharedFiles,
    pageFiles: pageFiles,
    allFiles: _toConsumableArray(new Set([].concat(_toConsumableArray(sharedFiles), _toConsumableArray(pageFiles))))
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


var Document = /*#__PURE__*/function (_react$Component) {
  _inherits(Document, _react$Component);

  var _super = _createSuper(Document);

  function Document() {
    _classCallCheck(this, Document);

    return _super.apply(this, arguments);
  }

  _createClass(Document, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",

    /**
    * `getInitialProps` hook returns the context object with the addition of `renderPage`.
    * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
    */
    value: function () {
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
        var enhanceApp, _yield$ctx$renderPage, html, head, styles;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                enhanceApp = function enhanceApp(App) {
                  return function (props) {
                    return /*#__PURE__*/_react["default"].createElement(App, props);
                  };
                };

                _context.next = 3;
                return ctx.renderPage({
                  enhanceApp: enhanceApp
                });

              case 3:
                _yield$ctx$renderPage = _context.sent;
                html = _yield$ctx$renderPage.html;
                head = _yield$ctx$renderPage.head;
                styles = _toConsumableArray((0, _server["default"])());
                return _context.abrupt("return", {
                  html: html,
                  head: head,
                  styles: styles
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "renderDocument",
    value: function renderDocument(DocumentComponent, props) {
      return /*#__PURE__*/_react["default"].createElement(_documentContext.DocumentContext.Provider, {
        value: props
      }, /*#__PURE__*/_react["default"].createElement(DocumentComponent, props));
    }
  }]);

  return Document;
}(_react.Component);

exports["default"] = Document;
Document.headTagsMiddleware =  false ? undefined : function () {
  return [];
};

function Html(props) {
  var _ref = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref.inAmpMode,
      docComponentsRendered = _ref.docComponentsRendered,
      locale = _ref.locale;

  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react["default"].createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

_c = Html;

var Head = /*#__PURE__*/function (_react$Component2) {
  _inherits(Head, _react$Component2);

  var _super2 = _createSuper(Head);

  function Head() {
    var _this;

    _classCallCheck(this, Head);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));
    _this.context = void 0;
    return _this;
  }

  _createClass(Head, [{
    key: "getCssLinks",
    value: function getCssLinks(files) {
      var _this2 = this;

      var _this$context = this.context,
          assetPrefix = _this$context.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context.devOnlyCacheBusterQueryString,
          dynamicImports = _this$context.dynamicImports;
      var cssFiles = files.allFiles.filter(function (f) {
        return f.endsWith('.css');
      });
      var sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
      // webpack runtime (`mini-css-extract-plugin`).

      var unmangedFiles = new Set([]);
      var dynamicCssFiles = dedupe(dynamicImports.filter(function (f) {
        return f.file.endsWith('.css');
      })).map(function (f) {
        return f.file;
      });

      if (dynamicCssFiles.length) {
        var existing = new Set(cssFiles);
        dynamicCssFiles = dynamicCssFiles.filter(function (f) {
          return !(existing.has(f) || sharedFiles.has(f));
        });
        unmangedFiles = new Set(dynamicCssFiles);
        cssFiles.push.apply(cssFiles, _toConsumableArray(dynamicCssFiles));
      }

      var cssLinkElements = [];
      cssFiles.forEach(function (file) {
        var isSharedFile = sharedFiles.has(file);

        if (true) {
          cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
            key: "".concat(file, "-preload"),
            nonce: _this2.props.nonce,
            rel: "preload",
            href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
            as: "style",
            crossOrigin: _this2.props.crossOrigin || undefined
          }));
        }

        var isUnmanagedFile = unmangedFiles.has(file);
        cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this2.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          crossOrigin: _this2.props.crossOrigin || undefined,
          "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
          "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
        }));
      });

      if (false) {}

      return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this3 = this;

      var _this$context2 = this.context,
          dynamicImports = _this$context2.dynamicImports,
          assetPrefix = _this$context2.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context2.devOnlyCacheBusterQueryString;
      return dedupe(dynamicImports).map(function (bundle) {
        if (!bundle.file.endsWith('.js')) {
          return null;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          key: bundle.file,
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(bundle.file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          nonce: _this3.props.nonce,
          crossOrigin: _this3.props.crossOrigin || undefined
        });
      }) // Filter out nulled scripts
      .filter(Boolean);
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks(files) {
      var _this4 = this;

      var _this$context3 = this.context,
          assetPrefix = _this$context3.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context3.devOnlyCacheBusterQueryString,
          scriptLoader = _this$context3.scriptLoader;
      var preloadFiles = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat(_toConsumableArray((scriptLoader.eager || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file.src,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: file.src,
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })), _toConsumableArray(preloadFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })), _toConsumableArray((scriptLoader.defer || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: file,
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })));
    }
  }, {
    key: "makeStylesheetInert",
    value: function makeStylesheetInert(node) {
      var _this5 = this;

      return _react["default"].Children.map(node, function (c) {
        if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(function (url) {
          return c.props['href'].startsWith(url);
        })) {
          var newProps = _objectSpread({}, c.props || {});

          newProps['data-href'] = newProps['href'];
          newProps['href'] = undefined;
          return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
        } else if (c.props && c.props['children']) {
          c.props['children'] = _this5.makeStylesheetInert(c.props['children']);
        }

        return c;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _react$default;

      var _this$props$nonce, _this$props$nonce2;

      var _this$context4 = this.context,
          styles = _this$context4.styles,
          ampPath = _this$context4.ampPath,
          inAmpMode = _this$context4.inAmpMode,
          hybridAmp = _this$context4.hybridAmp,
          canonicalBase = _this$context4.canonicalBase,
          __NEXT_DATA__ = _this$context4.__NEXT_DATA__,
          dangerousAsPath = _this$context4.dangerousAsPath,
          headTags = _this$context4.headTags,
          unstable_runtimeJS = _this$context4.unstable_runtimeJS,
          unstable_JsPreload = _this$context4.unstable_JsPreload;
      var disableRuntimeJS = unstable_runtimeJS === false;
      var disableJsPreload = unstable_JsPreload === false;
      this.context.docComponentsRendered.Head = true;
      var head = this.context.head;
      var cssPreloads = [];
      var otherHeadElements = [];

      if (head) {
        head.forEach(function (c) {
          if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
            cssPreloads.push(c);
          } else {
            c && otherHeadElements.push(c);
          }
        });
        head = cssPreloads.concat(otherHeadElements);
      }

      var children = this.props.children; // show a warning if Head contains <title> (only in development)

      if (true) {
        children = _react["default"].Children.map(children, function (child) {
          var _child$props;

          var isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

          if (!isReactHelmet) {
            var _child$props2;

            if ((child == null ? void 0 : child.type) === 'title') {
              console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
            } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
              console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
            }
          }

          return child;
        });
        if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
      }

      if (false) {}

      var hasAmphtmlRel = false;
      var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

      head = _react["default"].Children.map(head || [], function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;

        if (inAmpMode) {
          var badProp = '';

          if (type === 'meta' && props.name === 'viewport') {
            badProp = 'name="viewport"';
          } else if (type === 'link' && props.rel === 'canonical') {
            hasCanonicalRel = true;
          } else if (type === 'script') {
            // only block if
            // 1. it has a src and isn't pointing to ampproject's CDN
            // 2. it is using dangerouslySetInnerHTML without a type or
            // a type of text/javascript
            if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
              badProp = '<script';
              Object.keys(props).forEach(function (prop) {
                badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
              });
              badProp += '/>';
            }
          }

          if (badProp) {
            console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, " in ").concat(__NEXT_DATA__.page, ". https://err.sh/next.js/conflicting-amp-tag"));
            return null;
          }
        } else {
          // non-amp mode
          if (type === 'link' && props.rel === 'amphtml') {
            hasAmphtmlRel = true;
          }
        }

        return child;
      }); // try to parse styles from fragment for backwards compat

      var curStyles = Array.isArray(styles) ? styles : [];

      if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
      Array.isArray(styles.props.children)) {
        var hasStyles = function hasStyles(el) {
          var _el$props, _el$props$dangerously;

          return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
        }; // @ts-ignore Property 'props' does not exist on type ReactElement


        styles.props.children.forEach(function (child) {
          if (Array.isArray(child)) {
            child.forEach(function (el) {
              return hasStyles(el) && curStyles.push(el);
            });
          } else if (hasStyles(child)) {
            curStyles.push(child);
          }
        });
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined,
        dangerouslySetInnerHTML: {
          __html: "body{display:none}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "body{display:block}"
        }
      }))), children, head, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "next-head-count",
        content: _react["default"].Children.count(head || []).toString()
      }), inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), !hasCanonicalRel && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "canonical",
        href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), styles && /*#__PURE__*/_react["default"].createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: curStyles.map(function (style) {
            return style.props.dangerouslySetInnerHTML.__html;
          }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), /*#__PURE__*/_react["default"].createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "amphtml",
        href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
      }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
      }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
      /*#__PURE__*/
      // this element is used to mount development styles so the
      // ordering matches production
      // (by default, style-loader injects at the bottom of <head />)
      _react["default"].createElement("noscript", {
        id: "__next_css__DO_NOT_USE__"
      }), styles || null), /*#__PURE__*/(_react$default = _react["default"]).createElement.apply(_react$default, [_react["default"].Fragment, {}].concat(_toConsumableArray(headTags || []))));
    }
  }]);

  return Head;
}(_react.Component);

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};

function Main() {
  var _ref2 = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref2.inAmpMode,
      html = _ref2.html,
      docComponentsRendered = _ref2.docComponentsRendered;

  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

_c2 = Main;

var NextScript = /*#__PURE__*/function (_react$Component3) {
  _inherits(NextScript, _react$Component3);

  var _super3 = _createSuper(NextScript);

  function NextScript() {
    var _this6;

    _classCallCheck(this, NextScript);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this6 = _super3.call.apply(_super3, [this].concat(args));
    _this6.context = void 0;
    return _this6;
  }

  _createClass(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      var _this7 = this;

      var _this$context5 = this.context,
          dynamicImports = _this$context5.dynamicImports,
          assetPrefix = _this$context5.assetPrefix,
          isDevelopment = _this$context5.isDevelopment,
          devOnlyCacheBusterQueryString = _this$context5.devOnlyCacheBusterQueryString;
      return dedupe(dynamicImports).map(function (bundle) {
        if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
        return /*#__PURE__*/_react["default"].createElement("script", {
          async: !isDevelopment,
          key: bundle.file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(bundle.file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this7.props.nonce,
          crossOrigin: _this7.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      var _this8 = this;

      var scriptLoader = this.context.scriptLoader;
      return (scriptLoader.eager || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, file, {
          nonce: _this8.props.nonce,
          crossOrigin: _this8.props.crossOrigin || undefined
        }));
      });
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      var _this9 = this;

      var _buildManifest$lowPri;

      var _this$context6 = this.context,
          assetPrefix = _this$context6.assetPrefix,
          buildManifest = _this$context6.buildManifest,
          isDevelopment = _this$context6.isDevelopment,
          devOnlyCacheBusterQueryString = _this$context6.devOnlyCacheBusterQueryString;
      var normalScripts = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      var lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat(_toConsumableArray(normalScripts), _toConsumableArray(lowPriorityScripts)).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this9.props.nonce,
          async: !isDevelopment,
          crossOrigin: _this9.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      var _this10 = this;

      // polyfills.js has to be rendered as nomodule without async
      // It also has to be the first script to load
      var _this$context7 = this.context,
          assetPrefix = _this$context7.assetPrefix,
          buildManifest = _this$context7.buildManifest,
          devOnlyCacheBusterQueryString = _this$context7.devOnlyCacheBusterQueryString;
      return buildManifest.polyfillFiles.filter(function (polyfill) {
        return polyfill.endsWith('.js') && !polyfill.endsWith('.module.js');
      }).map(function (polyfill) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: polyfill,
          nonce: _this10.props.nonce,
          crossOrigin: _this10.props.crossOrigin || undefined,
          noModule: true,
          src: "".concat(assetPrefix, "/_next/").concat(polyfill).concat(devOnlyCacheBusterQueryString)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var _this$context8 = this.context,
          assetPrefix = _this$context8.assetPrefix,
          inAmpMode = _this$context8.inAmpMode,
          buildManifest = _this$context8.buildManifest,
          unstable_runtimeJS = _this$context8.unstable_runtimeJS,
          docComponentsRendered = _this$context8.docComponentsRendered,
          devOnlyCacheBusterQueryString = _this$context8.devOnlyCacheBusterQueryString;
      var disableRuntimeJS = unstable_runtimeJS === false;
      docComponentsRendered.NextScript = true;

      if (inAmpMode) {
        if (false) {}

        var ampDevFiles = [].concat(_toConsumableArray(buildManifest.devFiles), _toConsumableArray(buildManifest.polyfillFiles), _toConsumableArray(buildManifest.ampDevFiles));
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || undefined,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context)
          },
          "data-ampdevmode": true
        }), ampDevFiles.map(function (file) {
          return /*#__PURE__*/_react["default"].createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(devOnlyCacheBusterQueryString),
            nonce: _this11.props.nonce,
            crossOrigin: _this11.props.crossOrigin || undefined,
            "data-ampdevmode": true
          });
        }));
      }

      if (true) {
        if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this11.props.nonce,
          crossOrigin: _this11.props.crossOrigin || undefined
        });
      }) : null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        }
      }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(documentProps) {
      var __NEXT_DATA__ = documentProps.__NEXT_DATA__;

      try {
        var data = JSON.stringify(__NEXT_DATA__);
        return (0, _htmlescape.htmlEscapeJsonString)(data);
      } catch (err) {
        if (err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://err.sh/vercel/next.js/circular-structure"));
        }

        throw err;
      }
    }
  }]);

  return NextScript;
}(_react.Component);

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

var _c, _c2;

$RefreshReg$(_c, "Html");
$RefreshReg$(_c2, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/path-browserify/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/server.js":
/*!************************************************!*\
  !*** ./node_modules/styled-jsx/dist/server.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _style = __webpack_require__(/*! ./style */ "./node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flushToReact(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react["default"].createElement('style', {
      id: "__" + id,
      // Avoid warnings upon render with a key
      key: "__" + id,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__" + id + "\"" + (options.nonce ? " nonce=\"" + options.nonce + "\"" : '') + ">" + css + "</style>";
    return html;
  }, '');
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/server.js":
/*!*******************************************!*\
  !*** ./node_modules/styled-jsx/server.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/server */ "./node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Files\\_F\\Fear God\\_One\\React\\Udemy Course Material\\Section 23\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";




function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_3__["Head"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = HomePage;
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL25vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvc2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQSEFTRV9FWFBPUlQiLCJQSEFTRV9QUk9EVUNUSU9OX0JVSUxEIiwiUEhBU0VfUFJPRFVDVElPTl9TRVJWRVIiLCJQSEFTRV9ERVZFTE9QTUVOVF9TRVJWRVIiLCJQQUdFU19NQU5JRkVTVCIsIkJVSUxEX01BTklGRVNUIiwiRVhQT1JUX01BUktFUiIsIkVYUE9SVF9ERVRBSUwiLCJQUkVSRU5ERVJfTUFOSUZFU1QiLCJST1VURVNfTUFOSUZFU1QiLCJJTUFHRVNfTUFOSUZFU1QiLCJTRVJWRVJfRklMRVNfTUFOSUZFU1QiLCJERVZfQ0xJRU5UX1BBR0VTX01BTklGRVNUIiwiUkVBQ1RfTE9BREFCTEVfTUFOSUZFU1QiLCJGT05UX01BTklGRVNUIiwiU0VSVkVSX0RJUkVDVE9SWSIsIlNFUlZFUkxFU1NfRElSRUNUT1JZIiwiQ09ORklHX0ZJTEUiLCJCVUlMRF9JRF9GSUxFIiwiQkxPQ0tFRF9QQUdFUyIsIkNMSUVOVF9QVUJMSUNfRklMRVNfUEFUSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUEFUSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRSIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiU1RSSU5HX0xJVEVSQUxfRFJPUF9CVU5ETEUiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTiIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUyIsIlRFTVBPUkFSWV9SRURJUkVDVF9TVEFUVVMiLCJQRVJNQU5FTlRfUkVESVJFQ1RfU1RBVFVTIiwiU1RBVElDX1BST1BTX0lEIiwiU0VSVkVSX1BST1BTX0lEIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwiRG9jdW1lbnRDb250ZXh0IiwiUmVhY3QiLCJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJzaGFyZWRGaWxlcyIsInBhZ2VGaWxlcyIsImluQW1wTW9kZSIsImFsbEZpbGVzIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY3R4Iiwic3R5bGVzIiwiaHRtbCIsImhlYWQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJEb2N1bWVudCIsImhlYWRUYWdzTWlkZGxld2FyZSIsInByb2Nlc3MiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJkZWR1cGUiLCJkeW5hbWljSW1wb3J0cyIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiZmlsZSIsImlzU2hhcmVkRmlsZSIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwic2NyaXB0TG9hZGVyIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImMiLCJ1cmwiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsImNoaWxkcmVuIiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwiY29uc29sZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwidHlwZSIsIk9iamVjdCIsInByb3AiLCJfX05FWFRfREFUQV9fIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsImdldERvY3VtZW50RmlsZXMiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiaGVhZFRhZ3MiLCJIZWFkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiZ2V0RHluYW1pY0NodW5rcyIsImdldFByZU5leHRTY3JpcHRzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJidWlsZE1hbmlmZXN0IiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGwiLCJhbXBEZXZGaWxlcyIsIk5leHRTY3JpcHQiLCJkYXRhIiwiSlNPTiIsImVyciIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsIkhvbWVQYWdlIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQWxCOztBQUNBLElBQU1DLHNCQUFzQixHQUE1Qjs7QUFDQSxJQUFNQyx1QkFBdUIsR0FBN0I7O0FBQ0EsSUFBTUMsd0JBQXdCLEdBQTlCOztBQUNBLElBQU1DLGNBQWMsR0FBcEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFwQjs7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztBQUNBLElBQU1DLGFBQWEsR0FBbkI7O0FBQ0EsSUFBTUMsa0JBQWtCLEdBQXhCOztBQUNBLElBQU1DLGVBQWUsR0FBckI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjs7QUFDQSxJQUFNQyxxQkFBcUIsR0FBM0I7O0FBQ0EsSUFBTUMseUJBQXlCLEdBQS9COztBQUNBLElBQU1DLHVCQUF1QixHQUE3Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztBQUNBLElBQU1DLGdCQUFnQixHQUF0Qjs7QUFDQSxJQUFNQyxvQkFBb0IsR0FBMUI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFqQjs7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QixPQUFzQixDQUF0Qjs7QUFDQSxJQUFNQyx3QkFBd0IsR0FBOUI7O0FBQ0EsSUFBTUMsd0JBQXdCLEdBQTlCOztBQUNBLElBQU1DLDJCQUEyQixHQUFqQzs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBdkI7O0FBQ0EsSUFBTUMsMEJBQTBCLEdBQWhDLDRCLENBQ1A7OztBQUNPLElBQU1DLGdDQUFOLFUsQ0FDUDs7O0FBQ08sSUFBTUMseUNBQU4sbUIsQ0FDUDs7O0FBQ08sSUFBTUMsK0JBQU4sUyxDQUNQOzs7QUFDTyxJQUFNQyxtQ0FBTixhLENBQ1A7OztBQUNPLElBQU1DLHFDQUFOOztBQUNBLElBQU1DLHlCQUF5QixHQUEvQjs7QUFDQSxJQUFNQyx5QkFBeUIsR0FBL0I7O0FBQ0EsSUFBTUMsZUFBZSxHQUFyQjs7QUFDQSxJQUFNQyxlQUFlLEdBQXJCOztBQUNBLElBQU1DLHdCQUF3QixHQUFHLENBQWpDLGtDQUFpQyxDQUFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNQOzs7Ozs7QUFHTzs7QUFBQSxJQUFNQyxlQUFlLGdCQUFHQyxnQ0FBeEIsSUFBd0JBLENBQXhCOzs7O0FBRVAsVUFBMkM7QUFDekNELGlCQUFlLENBQWZBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BZLHdCQUF3QixrQ0FBa0MsdUJBQXVCLG1CQUFPLENBQUMsaUdBQXVCLEVBQUUsMENBQTBDLGdIQUFnSCw4Q0FBOEMsV0FBVyx5Q0FBeUMsZUFBZSxnQ0FBZ0MsVUFBVTtBQUNwYiwwQzs7Ozs7Ozs7Ozs7O0FDRGEsd0JBQXdCLDRDQUE0Qyw0REFBNEQsVUFBVSxtQkFBTyxDQUFDLG9GQUFNLEVBQUUseUJBQXlCLG1CQUFPLENBQUMscUdBQXlCLEVBQUUsK0RBQStELHFFQUFxRSxpQ0FBaUM7QUFDeFksZUFBZSxlQUFlLHFDQUFxQyxjQUFjLEtBQUssR0FBRztBQUN6RiwwQkFBMEIsU0FBUyxLQUFLLEdBQUc7QUFDM0MsK0NBQStDLHdCQUF3Qix5REFBeUQsS0FBSyxHQUFHLGFBQWEsSUFBSTtBQUN6SiwrQzs7Ozs7Ozs7Ozs7O0FDSmEsd0JBQXdCLG9DQUFvQyxrQ0FBa0MsZUFBZSxtQkFBTyxDQUFDLCtFQUFrQixFQUFFLGlDQUFpQyxvREFBb0QsZ0NBQWdDLDJDQUEyQyx5REFBeUQsMENBQTBDLHFEQUFxRCxvQ0FBb0M7QUFDbGYsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOzs7Ozs7QUFLQTs7QUFJQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQUFBLHlCQUErRDtBQUM3RCxNQUFNRSxLQUFLLEdBQUcsSUFBZCxHQUFjLEVBQWQ7QUFDQSxNQUFNQyxJQUFTLEdBQWY7O0FBRjZELDZDQUk3RCxPQUo2RDtBQUFBOztBQUFBO0FBSTdELHdEQUE4QjtBQUFBLFVBQTlCLE1BQThCO0FBQzVCLFVBQUlELEtBQUssQ0FBTEEsSUFBVUUsTUFBTSxDQUFwQixJQUFJRixDQUFKLEVBQTRCO0FBQzVCQSxXQUFLLENBQUxBLElBQVVFLE1BQU0sQ0FBaEJGO0FBQ0FDLFVBQUksQ0FBSkE7QUFFRjtBQVQ2RDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVM3RDtBQVNGOztBQUFBLDhEQUlpQjtBQUNmLE1BQU1FLFdBQThCLEdBQUcsK0NBQXZDLE9BQXVDLENBQXZDO0FBQ0EsTUFBTUMsU0FBNEIsR0FBR0MsU0FBUyxRQUUxQywrQ0FGSixRQUVJLENBRko7QUFJQSxTQUFPO0FBQ0xGLGVBREssRUFDTEEsV0FESztBQUVMQyxhQUZLLEVBRUxBLFNBRks7QUFHTEUsWUFBUSxxQkFBTSxxQ0FBUSxXQUFSLHNCQUhoQixTQUdnQixHQUFOO0FBSEgsR0FBUDtBQU9GO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztJQUNlLFE7Ozs7Ozs7Ozs7Ozs7NkJBbUNKO0FBQ1AsMEJBQ0UseURBQ0Usc0NBREYsSUFDRSxDQURGLGVBRUUsMkRBQ0Usc0NBREYsSUFDRSxDQURGLGVBRUUsNENBTE4sSUFLTSxDQUZGLENBRkYsQ0FERjtBQXBDdUU7Ozs7QUFRekU7QUFDRjtBQUNBO0FBQ0E7O3VHQUNFLEc7Ozs7Ozs7QUFHUUMsMEIsR0FBY0MsU0FBZEQsVUFBY0MsSUFBRCxFQUFjO0FBQy9CLHlCQUFRQyxlQUFEO0FBQUEsd0NBQWdCLHFDQUF2QixLQUF1QixDQUFoQjtBQUFBLG1CQUFQO0FBREYsaUI7Ozt1QkFJNkJDLEdBQUcsQ0FBSEEsV0FBZTtBQUFFSCw0QkFBOUMsRUFBOENBO0FBQUYsaUJBQWZHLEM7Ozs7QUFBdkIsb0IseUJBQUEsSTtBQUFBLG9CLHlCQUFBLEk7QUFDQUMsc0Isc0JBQWEsV0FBbkIsV0FBbUIsRztpREFDWjtBQUFFQyxzQkFBRixFQUFFQSxJQUFGO0FBQVFDLHNCQUFSLEVBQVFBLElBQVI7QUFBY0Ysd0JBQXJCLEVBQXFCQTtBQUFkLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR1QsaUIsRUFBQSxLLEVBR3NCO0FBQ3BCLDBCQUNFLGdDQUFDLGlCQUFELGVBQUMsQ0FBRDtBQUFtQyxhQUFLLEVBQXhDO0FBQUEsc0JBQ0UsbURBRkosS0FFSSxDQURGLENBREY7QUFPRkc7Ozs7RUFuQzRDQyxnQjs7O0FBQXpCQyxRLENBQ1pDLGtCQURZRCxHQUNTRSxxQkFLeEI7QUFBQSxTQUFNLEVBQU47QUFBQSxDQU5lRjs7QUFnRGQscUJBS0w7QUFBQSxhQUNxRCx1QkFDbkRHLGlCQURGLGVBQXFELENBRHJEO0FBQUEsTUFDTSxTQUROLFFBQ00sU0FETjtBQUFBLE1BQ00scUJBRE4sUUFDTSxxQkFETjtBQUFBLE1BQ00sTUFETixRQUNNLE1BRE47O0FBS0FDLHVCQUFxQixDQUFyQkE7QUFFQSxzQkFDRTtBQUVFLFFBQUksRUFBRVgsS0FBSyxDQUFMQSxrQkFGUjtBQUdFLE9BQUcsRUFBRUosU0FBUyxRQUhoQjtBQUlFLHVCQUNFQSx5QkFOTjtBQUNFLEtBREY7QUFZSzs7S0F4QkEsSTs7SUF3QkEsSTs7Ozs7QUFNTDtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVQWdCOzs7O2dDQUFXLEssRUFBNkM7QUFBQTs7QUFBQSwwQkFLbEQsS0FKSixPQURzRDtBQUFBLFVBQ2hELFdBRGdELGlCQUNoRCxXQURnRDtBQUFBLFVBQ2hELDZCQURnRCxpQkFDaEQsNkJBRGdEO0FBQUEsVUFDaEQsY0FEZ0QsaUJBQ2hELGNBRGdEO0FBTXRELFVBQU1DLFFBQVEsR0FBR3RCLEtBQUssQ0FBTEEsZ0JBQXVCdUIsV0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBREEsU0FBOUMsTUFBOENBLENBQVA7QUFBQSxPQUF0QnZCLENBQWpCO0FBQ0EsVUFBTUcsV0FBd0IsR0FBRyxRQUFRSCxLQUFLLENBQTlDLFdBQWlDLENBQWpDLENBUHNELENBU3REO0FBQ0E7O0FBQ0EsVUFBSXdCLGFBQTBCLEdBQUcsUUFBakMsRUFBaUMsQ0FBakM7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLE1BQU0sQ0FDMUJDLGNBQWMsQ0FBZEEsT0FBdUJKLFdBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQURBLGNBRFRHLE1BQ1NILENBQVA7QUFBQSxPQUF0QkksQ0FEMEIsQ0FBTkQsS0FFZkgsV0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FGZCxJQUVNO0FBQUEsT0FGZ0JHLENBQXRCOztBQUdBLFVBQUlELGVBQWUsQ0FBbkIsUUFBNEI7QUFDMUIsWUFBTUcsUUFBUSxHQUFHLFFBQWpCLFFBQWlCLENBQWpCO0FBQ0FILHVCQUFlLEdBQUdBLGVBQWUsQ0FBZkEsT0FDZkYsV0FBRDtBQUFBLGlCQUFPLEVBQUVLLFFBQVEsQ0FBUkEsVUFBbUJ6QixXQUFXLENBQVhBLElBRDlCc0IsQ0FDOEJ0QixDQUFyQixDQUFQO0FBQUEsU0FEZ0JzQixDQUFsQkE7QUFHQUQscUJBQWEsR0FBRyxRQUFoQkEsZUFBZ0IsQ0FBaEJBO0FBQ0FGLGdCQUFRLENBQVJBLG1CQUFRLHFCQUFSQSxlQUFRLEVBQVJBO0FBR0Y7O0FBQUEsVUFBSU8sZUFBOEIsR0FBbEM7QUFDQVAsY0FBUSxDQUFSQSxRQUFrQlEsY0FBRCxFQUFVO0FBQ3pCLFlBQU1DLFlBQVksR0FBRzVCLFdBQVcsQ0FBWEEsSUFBckIsSUFBcUJBLENBQXJCOztBQUVBLFlBQUksSUFBSixFQUFzQztBQUNwQzBCLHlCQUFlLENBQWZBLG1CQUNFO0FBQ0UsZUFBRyxZQURMLElBQ0ssYUFETDtBQUVFLGlCQUFLLEVBQUUsYUFGVDtBQUdFLGVBQUcsRUFITDtBQUlFLGdCQUFJLFlBQUtHLFdBQUwsb0JBQTBCQyxTQUFTLE1BQW5DLFNBSk4sNkJBSU0sQ0FKTjtBQU9FLGNBQUUsRUFQSjtBQVFFLHVCQUFXLEVBQ1QsNEJBQTBCZixTQVZoQ1c7QUFDRSxZQURGQTtBQWdCRjs7QUFBQSxZQUFNSyxlQUFlLEdBQUdWLGFBQWEsQ0FBYkEsSUFBeEIsSUFBd0JBLENBQXhCO0FBQ0FLLHVCQUFlLENBQWZBLG1CQUNFO0FBQ0UsYUFBRyxFQURMO0FBRUUsZUFBSyxFQUFFLGFBRlQ7QUFHRSxhQUFHLEVBSEw7QUFJRSxjQUFJLFlBQUtHLFdBQUwsb0JBQTBCQyxTQUFTLE1BQW5DLFNBSk4sNkJBSU0sQ0FKTjtBQU9FLHFCQUFXLEVBQ1QsNEJBQTBCZixTQVI5QjtBQVVFLHNCQUFVZ0IsZUFBZSxlQUFlSCxZQUFZLFFBVnREO0FBV0Usc0JBQVVHLGVBQWUsZUFBZUgsWUFBWSxlQVp4REY7QUFDRSxVQURGQTtBQXJCRlA7O0FBc0NBLFVBQ0VKLEtBREYsRUFHRSxFQU1GOztBQUFBLGFBQU9XLGVBQWUsQ0FBZkEsc0JBQVA7QUFHRk07Ozs4Q0FBMEI7QUFBQTs7QUFBQSwyQkFLcEIsS0FKSixPQUR3QjtBQUFBLFVBQ2xCLGNBRGtCLGtCQUNsQixjQURrQjtBQUFBLFVBQ2xCLFdBRGtCLGtCQUNsQixXQURrQjtBQUFBLFVBQ2xCLDZCQURrQixrQkFDbEIsNkJBRGtCO0FBT3hCLGFBQ0UsTUFBTSxDQUFOLGNBQU0sQ0FBTixLQUNRakMsZ0JBQUQsRUFBWTtBQUNmLFlBQUksQ0FBQ0EsTUFBTSxDQUFOQSxjQUFMLEtBQUtBLENBQUwsRUFBa0M7QUFDaEM7QUFHRjs7QUFBQSw0QkFDRTtBQUNFLGFBQUcsRUFETDtBQUVFLGFBQUcsRUFBRUEsTUFBTSxDQUZiO0FBR0UsY0FBSSxZQUFLOEIsV0FBTCxvQkFBMEJDLFNBQVMsQ0FDckMvQixNQUFNLENBRCtCLEtBQW5DLFNBSE4sNkJBR00sQ0FITjtBQU1FLFlBQUUsRUFOSjtBQU9FLGVBQUssRUFBRSxhQVBUO0FBUUUscUJBQVcsRUFDVCw0QkFBMEJnQixTQVZoQztBQUNFLFVBREY7QUFOSixTQXFCRTtBQXJCRixjQURGLE9BQ0UsQ0FERjtBQTJCRmtCOzs7d0NBQW1CLEssRUFBNkM7QUFBQTs7QUFBQSwyQkFLMUQsS0FKSixPQUQ4RDtBQUFBLFVBQ3hELFdBRHdELGtCQUN4RCxXQUR3RDtBQUFBLFVBQ3hELDZCQUR3RCxrQkFDeEQsNkJBRHdEO0FBQUEsVUFDeEQsWUFEd0Qsa0JBQ3hELFlBRHdEO0FBTTlELFVBQU1DLFlBQVksR0FBR3JDLEtBQUssQ0FBTEEsZ0JBQXVCOEIsY0FBRCxFQUFrQjtBQUMzRCxlQUFPQSxJQUFJLENBQUpBLFNBQVAsS0FBT0EsQ0FBUDtBQURGLE9BQXFCOUIsQ0FBckI7QUFJQSwwQ0FDSyxDQUFDc0MsWUFBWSxDQUFaQSxTQUFELFFBQWdDUixjQUFEO0FBQUEsNEJBQ2hDO0FBQ0UsYUFBRyxFQUFFQSxJQUFJLENBRFg7QUFFRSxlQUFLLEVBQUUsYUFGVDtBQUdFLGFBQUcsRUFITDtBQUlFLGNBQUksRUFBRUEsSUFBSSxDQUpaO0FBS0UsWUFBRSxFQUxKO0FBTUUscUJBQVcsRUFDVCw0QkFBMEJaLFNBVDNCO0FBRUgsVUFEZ0M7QUFBQSxPQUEvQixDQURMLHNCQWFLbUIsWUFBWSxDQUFaQSxJQUFrQlAsY0FBRDtBQUFBLDRCQUNsQjtBQUNFLGFBQUcsRUFETDtBQUVFLGVBQUssRUFBRSxhQUZUO0FBR0UsYUFBRyxFQUhMO0FBSUUsY0FBSSxZQUFLRSxXQUFMLG9CQUEwQkMsU0FBUyxNQUFuQyxTQUpOLDZCQUlNLENBSk47QUFPRSxZQUFFLEVBUEo7QUFRRSxxQkFBVyxFQUNULDRCQUEwQmYsU0F2QjNCO0FBY0gsVUFEa0I7QUFBQSxPQUFqQm1CLENBYkwsc0JBMkJLLENBQUNDLFlBQVksQ0FBWkEsU0FBRCxRQUFnQ1IsY0FBRDtBQUFBLDRCQUNoQztBQUNFLGFBQUcsRUFETDtBQUVFLGVBQUssRUFBRSxhQUZUO0FBR0UsYUFBRyxFQUhMO0FBSUUsY0FBSSxFQUpOO0FBS0UsWUFBRSxFQUxKO0FBTUUscUJBQVcsRUFDVCw0QkFBMEJaLFNBbkNsQztBQTRCSSxVQURnQztBQUFBLE9BQS9CLENBM0JMO0FBMENGcUI7Ozt3Q0FBbUIsSSxFQUErQjtBQUFBOztBQUNoRCxhQUFPeEMscUNBQTBCeUMsV0FBRCxFQUFZO0FBQzFDLFlBQ0VBLENBQUMsQ0FBREEsbUJBQ0FBLENBQUMsQ0FBREEsTUFEQUEsTUFDQUEsQ0FEQUEsSUFFQTNDLHlDQUErQjRDLGFBQUQ7QUFBQSxpQkFBU0QsQ0FBQyxDQUFEQSx5QkFIekMsR0FHeUNBLENBQVQ7QUFBQSxTQUE5QjNDLENBSEYsRUFJRTtBQUNBLGNBQU02QyxRQUFRLHFCQUFTRixDQUFDLENBQURBLFNBQXZCLEVBQWMsQ0FBZDs7QUFDQUUsa0JBQVEsQ0FBUkEsV0FBUSxDQUFSQSxHQUF3QkEsUUFBUSxDQUFoQ0EsTUFBZ0MsQ0FBaENBO0FBQ0FBLGtCQUFRLENBQVJBLE1BQVEsQ0FBUkE7QUFDQSw4QkFBTzNDLGtDQUFQLFFBQU9BLENBQVA7QUFSRixlQVNPLElBQUl5QyxDQUFDLENBQURBLFNBQVdBLENBQUMsQ0FBREEsTUFBZixVQUFlQSxDQUFmLEVBQW9DO0FBQ3pDQSxXQUFDLENBQURBLG9CQUFzQiwyQkFBeUJBLENBQUMsQ0FBREEsTUFBL0NBLFVBQStDQSxDQUF6QixDQUF0QkE7QUFFRjs7QUFBQTtBQWJGLE9BQU96QyxDQUFQO0FBaUJGZTs7OzZCQUFTO0FBQUE7O0FBQUE7O0FBQUEsMkJBWUgsS0FYSixPQURPO0FBQUEsVUFDRCxNQURDLGtCQUNELE1BREM7QUFBQSxVQUNELE9BREMsa0JBQ0QsT0FEQztBQUFBLFVBQ0QsU0FEQyxrQkFDRCxTQURDO0FBQUEsVUFDRCxTQURDLGtCQUNELFNBREM7QUFBQSxVQUNELGFBREMsa0JBQ0QsYUFEQztBQUFBLFVBQ0QsYUFEQyxrQkFDRCxhQURDO0FBQUEsVUFDRCxlQURDLGtCQUNELGVBREM7QUFBQSxVQUNELFFBREMsa0JBQ0QsUUFEQztBQUFBLFVBQ0Qsa0JBREMsa0JBQ0Qsa0JBREM7QUFBQSxVQUNELGtCQURDLGtCQUNELGtCQURDO0FBYVAsVUFBTTZCLGdCQUFnQixHQUFHQyxrQkFBa0IsS0FBM0M7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR0Msa0JBQWtCLEtBQTNDO0FBRUE7QUFoQk8sVUFrQkgsSUFsQkcsR0FrQlEsS0FBZixPQWxCTyxDQWtCSCxJQWxCRztBQW1CUCxVQUFJQyxXQUErQixHQUFuQztBQUNBLFVBQUlDLGlCQUFxQyxHQUF6Qzs7QUFDQSxnQkFBVTtBQUNSbkMsWUFBSSxDQUFKQSxRQUFjMkIsV0FBRCxFQUFPO0FBQ2xCLGNBQ0VBLENBQUMsSUFDREEsQ0FBQyxDQUFEQSxTQURBQSxVQUVBQSxDQUFDLENBQURBLGlCQUZBQSxhQUdBQSxDQUFDLENBQURBLGdCQUpGLFNBS0U7QUFDQU8sdUJBQVcsQ0FBWEE7QUFORixpQkFPTztBQUNMUCxhQUFDLElBQUlRLGlCQUFpQixDQUFqQkEsS0FBTFIsQ0FBS1EsQ0FBTFI7QUFFSDtBQVhEM0I7QUFZQUEsWUFBSSxHQUFHa0MsV0FBVyxDQUFYQSxPQUFQbEMsaUJBQU9rQyxDQUFQbEM7QUFFRjs7QUFBQSxVQUFJb0MsUUFBUSxHQUFHLFdBQWYsU0FwQ08sQ0FxQ1A7O0FBQ0EsZ0JBQTJDO0FBQ3pDQSxnQkFBUSxHQUFHbEQseUNBQThCbUQsZUFBRCxFQUFnQjtBQUFBOztBQUN0RCxjQUFNQyxhQUFhLEdBQUdELEtBQUgsUUFBR0EsR0FBSCxNQUFHQSxHQUFILGdCQUFHQSxLQUFLLENBQVIsMEJBQUdBLGFBQXRCLG1CQUFzQkEsQ0FBdEI7O0FBQ0EsY0FBSSxDQUFKLGVBQW9CO0FBQUE7O0FBQ2xCLGdCQUFJLE1BQUssSUFBTCxxQkFBSyxDQUFMLFVBQUosU0FBNkI7QUFDM0JFLHFCQUFPLENBQVBBO0FBREYsbUJBSU8sSUFDTCxNQUFLLElBQUwscUJBQUssQ0FBTCxvQkFDQSxNQUFLLElBQUwsc0NBQUssQ0FBTCxrREFGSyxZQUdMO0FBQ0FBLHFCQUFPLENBQVBBO0FBSUg7QUFDRDs7QUFBQTtBQWhCRkgsU0FBV2xELENBQVhrRDtBQWtCQSxZQUFJLFdBQUosYUFDRUcsT0FBTyxDQUFQQTtBQUtKOztBQUFBLFVBQ0VsQyxLQURGLEVBSUUsRUFJRjs7QUFBQSxVQUFJbUMsYUFBYSxHQUFqQjtBQUNBLFVBQUlDLGVBQWUsR0FBbkIsTUF4RU8sQ0EwRVA7O0FBQ0F6QyxVQUFJLEdBQUdkLCtCQUFtQmMsSUFBSSxJQUF2QmQsSUFBZ0NtRCxlQUFELEVBQVc7QUFDL0MsWUFBSSxDQUFKLE9BQVk7QUFEbUMsWUFFekMsSUFGeUMsR0FFL0MsS0FGK0MsQ0FFekMsSUFGeUM7QUFBQSxZQUV6QyxLQUZ5QyxHQUUvQyxLQUYrQyxDQUV6QyxLQUZ5Qzs7QUFHL0MsdUJBQWU7QUFDYixjQUFJSyxPQUFlLEdBQW5COztBQUVBLGNBQUlDLElBQUksS0FBSkEsVUFBbUIvQyxLQUFLLENBQUxBLFNBQXZCLFlBQWtEO0FBQ2hEOEMsbUJBQU8sR0FBUEE7QUFERixpQkFFTyxJQUFJQyxJQUFJLEtBQUpBLFVBQW1CL0MsS0FBSyxDQUFMQSxRQUF2QixhQUFrRDtBQUN2RDZDLDJCQUFlLEdBQWZBO0FBREssaUJBRUEsSUFBSUUsSUFBSSxLQUFSLFVBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQ0cvQyxLQUFLLENBQUxBLE9BQWFBLEtBQUssQ0FBTEEsNEJBQWtDLENBQWhELENBQUNBLElBQ0FBLEtBQUssQ0FBTEEsNEJBQ0UsQ0FBQ0EsS0FBSyxDQUFOLFFBQWVBLEtBQUssQ0FBTEEsU0FIcEIsaUJBRUdBLENBRkgsRUFJRTtBQUNBOEMscUJBQU8sR0FBUEE7QUFDQUUsb0JBQU0sQ0FBTkEsb0JBQTRCQyxjQUFELEVBQVU7QUFDbkNILHVCQUFPLGVBQVFHLElBQVIsZ0JBQWlCakQsS0FBSyxDQUE3QjhDLElBQTZCLENBQXRCLE9BQVBBO0FBREZFO0FBR0FGLHFCQUFPLElBQVBBO0FBRUg7QUFFRDs7QUFBQSx1QkFBYTtBQUNYSCxtQkFBTyxDQUFQQSwyQ0FDZ0NGLEtBQUssQ0FBQ00sSUFEdENKLHNDQUNxRUcsT0FEckVILGlCQUNtRk8sYUFBYSxDQURoR1A7QUFHQTtBQUVIO0FBL0JELGVBK0JPO0FBQ0w7QUFDQSxjQUFJSSxJQUFJLEtBQUpBLFVBQW1CL0MsS0FBSyxDQUFMQSxRQUF2QixXQUFnRDtBQUM5QzRDLHlCQUFhLEdBQWJBO0FBRUg7QUFDRDs7QUFBQTtBQXhDRnhDLE9BQU9kLENBQVBjLENBM0VPLENBc0hQOztBQUNBLFVBQU0rQyxTQUErQixHQUFHQyxLQUFLLENBQUxBLDJCQUF4Qzs7QUFHQSxVQUNFLFNBQVMsSUFBVCxVQUVBO0FBQ0FsRCxZQUFNLENBSE4sU0FJQTtBQUNBa0QsV0FBSyxDQUFMQSxRQUFjbEQsTUFBTSxDQUFOQSxNQU5oQixRQU1Fa0QsQ0FORixFQU9FO0FBQ0EsWUFBTUMsU0FBUyxHQUFJQyxTQUFiRCxTQUFhQyxHQUFEO0FBQUE7O0FBQUEsaUJBQ2hCQSxFQURnQixRQUNoQkEsR0FEZ0IsTUFDaEJBLEdBRGdCLGFBQ2hCQSxFQUFFLENBRGMsbURBQ2hCQSxVQURnQiw0Q0FDaEJBLHNCQURnQjtBQUFsQixVQURBLENBR0E7OztBQUNBcEQsY0FBTSxDQUFOQSx1QkFBK0J1QyxlQUFELEVBQStCO0FBQzNELGNBQUlXLEtBQUssQ0FBTEEsUUFBSixLQUFJQSxDQUFKLEVBQTBCO0FBQ3hCWCxpQkFBSyxDQUFMQSxRQUFlYSxZQUFEO0FBQUEscUJBQVFELFNBQVMsQ0FBVEEsRUFBUyxDQUFUQSxJQUFpQkYsU0FBUyxDQUFUQSxLQUF2Q1YsRUFBdUNVLENBQXpCO0FBQUEsYUFBZFY7QUFERixpQkFFTyxJQUFJWSxTQUFTLENBQWIsS0FBYSxDQUFiLEVBQXNCO0FBQzNCRixxQkFBUyxDQUFUQTtBQUVIO0FBTkRqRDtBQVNGOztBQUFBLFVBQU1YLEtBQW9CLEdBQUdnRSxnQkFBZ0IsQ0FDM0MsYUFEMkMsZUFFM0MsMkJBRjJDLE1BQTdDLFNBQTZDLENBQTdDO0FBTUEsMEJBQ0Usd0NBQVUsS0FBVixPQUNHLDJDQUNDLCtFQUNFO0FBQ0UsK0JBREY7QUFFRSwyQkFBaUIzRCxTQUFTLFlBRjVCO0FBR0UsK0JBQXVCLEVBQUU7QUFDdkI0RCxnQkFMTjtBQUk2QjtBQUgzQixRQURGLGVBUUU7QUFDRSwrQkFERjtBQUVFLDJCQUFpQjVELFNBQVMsWUFGNUI7QUFBQSxzQkFJRTtBQUNFLCtCQUF1QixFQUFFO0FBQ3ZCNEQsZ0JBaEJaO0FBZW1DO0FBRDNCLFFBSkYsQ0FSRixDQUZKLCtCQXdCRTtBQUNFLFlBQUksRUFETjtBQUVFLGVBQU8sRUFBRWxFLGlDQUFxQmMsSUFBSSxJQUF6QmQsSUExQmIsUUEwQmFBO0FBRlgsUUF4QkYsRUE0QkdNLFNBQVMsaUJBQ1IsK0VBQ0U7QUFDRSxZQUFJLEVBRE47QUFFRSxlQUFPLEVBSFg7QUFDRSxRQURGLEVBS0csaUNBQ0M7QUFDRSxXQUFHLEVBREw7QUFFRSxZQUFJLEVBQUU2RCxhQUFhLEdBQUcsMEJBUjVCLGVBUTRCO0FBRnhCLFFBTkosZUFZRTtBQUNFLFdBQUcsRUFETDtBQUVFLFVBQUUsRUFGSjtBQUdFLFlBQUksRUFmUjtBQVlFLFFBWkYsRUFrQkd2RCxNQUFNLGlCQUNMO0FBQ0Usc0JBREY7QUFFRSwrQkFBdUIsRUFBRTtBQUN2QnNELGdCQUFNLEVBQUVMLFNBQVMsQ0FBVEEsSUFDQU8sZUFBRDtBQUFBLG1CQUFXQSxLQUFLLENBQUxBLDhCQURWUCxNQUNEO0FBQUEsV0FEQ0EsNkZBdEJoQixFQXNCZ0JBO0FBRGU7QUFGM0IsUUFuQkosZUE4QkU7QUFDRSwyQkFERjtBQUVFLCtCQUF1QixFQUFFO0FBQ3ZCSyxnQkFqQ047QUFnQzZCO0FBRjNCLFFBOUJGLGVBb0NFLCtEQUNFO0FBQ0UsMkJBREY7QUFFRSwrQkFBdUIsRUFBRTtBQUN2QkEsZ0JBeENSO0FBdUMrQjtBQUYzQixRQURGLENBcENGLGVBNENFO0FBQVEsYUFBSyxFQUFiO0FBQWMsV0FBRyxFQXpFdkI7QUF5RU0sUUE1Q0YsQ0E3QkosRUE0RUcsMkJBQ0Msa0VBQ0csNENBQ0M7QUFDRSxXQUFHLEVBREw7QUFFRSxZQUFJLEVBQUVDLGFBQWEsR0FBR0UsVUFBVSxVQUp0QyxlQUlzQztBQUZsQyxRQUZKLEVBT0csU0FBb0MsaUJBUHZDLEtBT3VDLENBUHZDLEVBUUcsc0JBQ0M7QUFBVSwyQ0FBWSxXQUFaLHFDQVRkO0FBU0ksUUFUSixFQVdHLHFCQUNDLENBREQsb0JBRUMsS0FiSix1QkFhSSxFQWJKLEVBY0cscUJBQ0MsQ0FERCxvQkFFQyx5QkFoQkosS0FnQkksQ0FoQkosRUFpQkdsRCxVQUFtQyxLQWpCdEMsRUFrQkdBLHVCQUNDLEtBbkJKLEVBcUJHO0FBQUE7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUFVLFVBQUUsRUF6QmhCO0FBeUJJLFFBekJKLEVBMkJHUCxNQUFNLElBeEdiLElBNkVJLENBN0VKLGVBMkdHWiwwRUFBb0JBLGtCQUFwQkEsd0NBQTRDc0UsUUFBUSxJQTVHekQsRUE0R0t0RSxHQTNHSCxDQURGO0FBalZGOzs7O0VBTndCZ0IsZ0I7OztBQUFidUQsSSxDQU9KQyxXQVBJRCxHQU9VbkQsZ0NBUFZtRDtBQUFBQSxJLENBU0pFLFNBVElGLEdBU1E7QUFDakJHLE9BQUssRUFBRUMsc0JBRFU7QUFFakJDLGFBQVcsRUFBRUQsc0JBRkk7QUFBQSxDQVRSSjs7QUF5Y04sZ0JBQWdCO0FBQUEsY0FDOEIsdUJBQ2pEbkQsaUJBREYsZUFBbUQsQ0FEOUI7QUFBQSxNQUNmLFNBRGUsU0FDZixTQURlO0FBQUEsTUFDZixJQURlLFNBQ2YsSUFEZTtBQUFBLE1BQ2YscUJBRGUsU0FDZixxQkFEZTs7QUFLckJDLHVCQUFxQixDQUFyQkE7QUFFQSxpQkFBZSxvQkFBTyxrRUFBR2xDLFdBQVYsaUJBQU8sQ0FBUDtBQUNmLHNCQUFPO0FBQUssTUFBRSxFQUFQO0FBQWlCLDJCQUF1QixFQUFFO0FBQUUrRSxZQUFNLEVBQXpEO0FBQWlEO0FBQTFDLElBQVA7QUFHSzs7TUFYQSxJOztJQVdBLFU7Ozs7O0FBQWdEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNyRFc7Ozs7cUNBQWdCLEssRUFBdUI7QUFBQTs7QUFBQSwyQkFNakMsS0FMSixPQURxQztBQUFBLFVBQy9CLGNBRCtCLGtCQUMvQixjQUQrQjtBQUFBLFVBQy9CLFdBRCtCLGtCQUMvQixXQUQrQjtBQUFBLFVBQy9CLGFBRCtCLGtCQUMvQixhQUQrQjtBQUFBLFVBQy9CLDZCQUQrQixrQkFDL0IsNkJBRCtCO0FBUXJDLGFBQU9sRCxNQUFNLENBQU5BLGNBQU0sQ0FBTkEsS0FBNEJ4QixnQkFBRCxFQUFZO0FBQzVDLFlBQUksQ0FBQ0EsTUFBTSxDQUFOQSxjQUFELEtBQUNBLENBQUQsSUFBZ0NGLEtBQUssQ0FBTEEsa0JBQXdCRSxNQUFNLENBQWxFLElBQW9DRixDQUFwQyxFQUNFO0FBRUYsNEJBQ0U7QUFDRSxlQUFLLEVBQUUsQ0FEVDtBQUVFLGFBQUcsRUFBRUUsTUFBTSxDQUZiO0FBR0UsYUFBRyxZQUFLOEIsV0FBTCxvQkFBMEJDLFNBQVMsQ0FDcEMvQixNQUFNLENBRDhCLEtBQW5DLFNBSEwsNkJBR0ssQ0FITDtBQU1FLGVBQUssRUFBRSxhQU5UO0FBT0UscUJBQVcsRUFDVCw0QkFBMEJnQixTQVRoQztBQUNFLFVBREY7QUFKRixPQUFPUSxDQUFQO0FBb0JGbUQ7Ozt3Q0FBb0I7QUFBQTs7QUFBQSxVQUNaLFlBRFksR0FDTyxLQUF6QixPQURrQixDQUNaLFlBRFk7QUFHbEIsYUFBTyxDQUFDdkMsWUFBWSxDQUFaQSxTQUFELFFBQWdDUixjQUFELEVBQWtCO0FBQ3RELDRCQUNFO0FBRUUsZUFBSyxFQUFFLGFBRlQ7QUFHRSxxQkFBVyxFQUNULDRCQUEwQlosU0FMaEM7QUFDRSxXQURGO0FBREYsT0FBTyxDQUFQO0FBYUY0RDs7OytCQUFVLEssRUFBdUI7QUFBQTs7QUFBQTs7QUFBQSwyQkFNM0IsS0FMSixPQUQrQjtBQUFBLFVBQ3pCLFdBRHlCLGtCQUN6QixXQUR5QjtBQUFBLFVBQ3pCLGFBRHlCLGtCQUN6QixhQUR5QjtBQUFBLFVBQ3pCLGFBRHlCLGtCQUN6QixhQUR5QjtBQUFBLFVBQ3pCLDZCQUR5QixrQkFDekIsNkJBRHlCO0FBUS9CLFVBQU1DLGFBQWEsR0FBRy9FLEtBQUssQ0FBTEEsZ0JBQXVCOEIsY0FBRDtBQUFBLGVBQVVBLElBQUksQ0FBSkEsU0FBdEQsS0FBc0RBLENBQVY7QUFBQSxPQUF0QjlCLENBQXRCO0FBQ0EsVUFBTWdGLGtCQUFrQiw0QkFBR0MsYUFBYSxDQUFoQixxQ0FBR0EsNkJBQXdDbkQsY0FBRDtBQUFBLGVBQ2hFQSxJQUFJLENBQUpBLFNBREYsS0FDRUEsQ0FEZ0U7QUFBQSxPQUF2Q21ELENBQTNCO0FBSUEsYUFBTyx5RkFBK0NuRCxjQUFELEVBQVU7QUFDN0QsNEJBQ0U7QUFDRSxhQUFHLEVBREw7QUFFRSxhQUFHLFlBQUtFLFdBQUwsb0JBQTBCQyxTQUFTLE1BQW5DLFNBRkwsNkJBRUssQ0FGTDtBQUtFLGVBQUssRUFBRSxhQUxUO0FBTUUsZUFBSyxFQUFFLENBTlQ7QUFPRSxxQkFBVyxFQUNULDRCQUEwQmYsU0FUaEM7QUFDRSxVQURGO0FBREYsT0FBTyxDQUFQO0FBaUJGZ0U7Ozt5Q0FBcUI7QUFBQTs7QUFDbkI7QUFDQTtBQUZtQiwyQkFPZixLQUpKLE9BSG1CO0FBQUEsVUFHYixXQUhhLGtCQUdiLFdBSGE7QUFBQSxVQUdiLGFBSGEsa0JBR2IsYUFIYTtBQUFBLFVBR2IsNkJBSGEsa0JBR2IsNkJBSGE7QUFTbkIsYUFBT0QsYUFBYSxDQUFiQSxxQkFFRkUsa0JBQUQ7QUFBQSxlQUNFQSxRQUFRLENBQVJBLG1CQUE0QixDQUFDQSxRQUFRLENBQVJBLFNBSDVCRixZQUc0QkUsQ0FEL0I7QUFBQSxPQUZHRixNQUtDRSxrQkFBRDtBQUFBLDRCQUNIO0FBQ0UsYUFBRyxFQURMO0FBRUUsZUFBSyxFQUFFLGNBRlQ7QUFHRSxxQkFBVyxFQUNULDZCQUEwQmpFLFNBSjlCO0FBTUUsa0JBQVEsRUFOVjtBQU9FLGFBQUcsWUFBS2MsV0FBTCxvQkFBMEJtRCxRQUExQixTQWJULDZCQWFTO0FBUEwsVUFERztBQUFBLE9BTEFGLENBQVA7QUFrQkY7Ozs2QkFlUztBQUFBOztBQUFBLDJCQVFILEtBUEosT0FETztBQUFBLFVBQ0QsV0FEQyxrQkFDRCxXQURDO0FBQUEsVUFDRCxTQURDLGtCQUNELFNBREM7QUFBQSxVQUNELGFBREMsa0JBQ0QsYUFEQztBQUFBLFVBQ0Qsa0JBREMsa0JBQ0Qsa0JBREM7QUFBQSxVQUNELHFCQURDLGtCQUNELHFCQURDO0FBQUEsVUFDRCw2QkFEQyxrQkFDRCw2QkFEQztBQVNQLFVBQU10QyxnQkFBZ0IsR0FBR0Msa0JBQWtCLEtBQTNDO0FBRUF4QiwyQkFBcUIsQ0FBckJBOztBQUVBLHFCQUFlO0FBQ2IsbUJBQTJDLEVBSTNDOztBQUFBLFlBQU1nRSxXQUFXLGdDQUNaSCxhQUFhLENBREUsUUFBSCxzQkFFWkEsYUFBYSxDQUZFLGFBQUgsc0JBR1pBLGFBQWEsQ0FIbEIsV0FBaUIsRUFBakI7QUFNQSw0QkFDRSxrRUFDR3RDLGdCQUFnQix1QkFDZjtBQUNFLFlBQUUsRUFESjtBQUVFLGNBQUksRUFGTjtBQUdFLGVBQUssRUFBRSxXQUhUO0FBSUUscUJBQVcsRUFDVCwwQkFBMEJ6QixTQUw5QjtBQU9FLGlDQUF1QixFQUFFO0FBQ3ZCK0Msa0JBQU0sRUFBRW9CLFVBQVUsQ0FBVkEsc0JBQWlDLEtBUjdDLE9BUVlBO0FBRGUsV0FQM0I7QUFVRSw2QkFaTjtBQUVJLFVBRkosRUFlR0QsV0FBVyxDQUFYQSxJQUFpQnRELGNBQUQ7QUFBQSw4QkFDZjtBQUNFLGVBQUcsRUFETDtBQUVFLGVBQUcsWUFBS0UsV0FBTCxvQkFBMEJGLElBQTFCLFNBRkwsNkJBRUssQ0FGTDtBQUdFLGlCQUFLLEVBQUUsY0FIVDtBQUlFLHVCQUFXLEVBQ1QsNkJBQTBCWixTQUw5QjtBQU9FLCtCQXhCUjtBQWlCTSxZQURlO0FBQUEsU0FBaEJrRSxDQWZILENBREY7QUErQkY7O0FBQUEsZ0JBQTJDO0FBQ3pDLFlBQUksV0FBSixhQUNFaEMsT0FBTyxDQUFQQTtBQUtKOztBQUFBLFVBQU1wRCxLQUFvQixHQUFHZ0UsZ0JBQWdCLENBQzNDLGFBRDJDLGVBRTNDLDJCQUYyQyxNQUE3QyxTQUE2QyxDQUE3QztBQU1BLDBCQUNFLGtFQUNHLHFCQUFxQmlCLGFBQWEsQ0FBbEMsV0FDR0EsYUFBYSxDQUFiQSxhQUE0Qm5ELGNBQUQ7QUFBQSw0QkFDekI7QUFDRSxhQUFHLEVBREw7QUFFRSxhQUFHLFlBQUtFLFdBQUwsb0JBQTBCQyxTQUFTLE1BQW5DLFNBRkwsNkJBRUssQ0FGTDtBQUtFLGVBQUssRUFBRSxjQUxUO0FBTUUscUJBQVcsRUFDVCw2QkFBMEJmLFNBVG5DO0FBRUssVUFEeUI7QUFBQSxPQUEzQitELENBREgsR0FESCxNQWVHdEMsZ0JBQWdCLHVCQUNmO0FBQ0UsVUFBRSxFQURKO0FBRUUsWUFBSSxFQUZOO0FBR0UsYUFBSyxFQUFFLFdBSFQ7QUFJRSxtQkFBVyxFQUNULDBCQUEwQnpCLFNBTDlCO0FBT0UsK0JBQXVCLEVBQUU7QUFDdkIrQyxnQkFBTSxFQUFFb0IsVUFBVSxDQUFWQSxzQkFBaUMsS0F4QmpELE9Bd0JnQkE7QUFEZTtBQVAzQixRQWhCSixFQTRCRyxxQkFBcUIsS0E1QnhCLGtCQTRCd0IsRUE1QnhCLEVBNkJHLHFCQUFxQixLQTdCeEIsaUJBNkJ3QixFQTdCeEIsRUE4QkcxQyxnQkFBZ0IsVUFBVSxzQkE5QjdCLEtBOEI2QixDQTlCN0IsRUErQkdBLGdCQUFnQixVQUFVLGdCQWhDL0IsS0FnQytCLENBL0I3QixDQURGO0FBdE1tRDs7OzBDQW1IckQsYSxFQUE2RTtBQUFBLFVBQ3JFLGFBRHFFLEdBQzNFLGFBRDJFLENBQ3JFLGFBRHFFOztBQUUzRSxVQUFJO0FBQ0YsWUFBTTJDLElBQUksR0FBR0MsSUFBSSxDQUFKQSxVQUFiLGFBQWFBLENBQWI7QUFDQSxlQUFPLHNDQUFQLElBQU8sQ0FBUDtBQUNBLE9BSEYsQ0FHRSxZQUFZO0FBQ1osWUFBSUMsR0FBRyxDQUFIQSxnQkFBSixvQkFBSUEsQ0FBSixFQUErQztBQUM3QyxnQkFBTSwrRUFDdUQ3QixhQUFhLENBRDFFLElBQU0sMERBQU47QUFJRjs7QUFBQTtBQUVIO0FBRUQ3Qzs7OztFQWxJOEJDLGdCOzs7QUFBbkJzRSxVLENBQ0pkLFdBREljLEdBQ1VsRSxnQ0FEVmtFO0FBQUFBLFUsQ0FHSmIsU0FISWEsR0FHUTtBQUNqQlosT0FBSyxFQUFFQyxzQkFEVTtBQUVqQkMsYUFBVyxFQUFFRCxzQkFGSTtBQUFBLENBSFJXO0FBQUFBLFUsQ0FXSkksaUJBWElKLEdBWVQsMFRBWlNBOztBQTRPYixxQ0FBNkQ7QUFDM0QsU0FBT0ssT0FBTyxjQUFPQyxNQUFQLFNBQWdCQSxNQUFNLENBQU5BLHNCQUE5QixHQUFjLFVBQWQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1MEJZLHdCQUF3QixrREFBa0Q7QUFDdkY7QUFDQSxxQkFBcUIsaUZBQWlGLHdDQUF3QyxtQ0FBbUM7QUFDakwsc0M7Ozs7Ozs7Ozs7O0FDSEEsaUJBQWlCLG1CQUFPLENBQUMsMkVBQXdCOzs7Ozs7Ozs7Ozs7QUNBakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlrQkE7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTtBQUNYOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxrQkFBa0IsY0FBYyxPQUFPLEdBQUcsY0FBYyxHQUFHOztBQUVsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM1BBLGlCQUFpQixtQkFBTyxDQUFDLCtEQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7QUFFQTtBQUNBOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JuRixLQUFsQixFQUF5QjtBQUN2QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDb0Y7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0tBYlFELFE7QUF5Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTZmMzgxY2Q2ZjEyODZiZmNjZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQSEFTRV9FWFBPUlQgPSAncGhhc2UtZXhwb3J0J1xuZXhwb3J0IGNvbnN0IFBIQVNFX1BST0RVQ1RJT05fQlVJTEQgPSAncGhhc2UtcHJvZHVjdGlvbi1idWlsZCdcbmV4cG9ydCBjb25zdCBQSEFTRV9QUk9EVUNUSU9OX1NFUlZFUiA9ICdwaGFzZS1wcm9kdWN0aW9uLXNlcnZlcidcbmV4cG9ydCBjb25zdCBQSEFTRV9ERVZFTE9QTUVOVF9TRVJWRVIgPSAncGhhc2UtZGV2ZWxvcG1lbnQtc2VydmVyJ1xuZXhwb3J0IGNvbnN0IFBBR0VTX01BTklGRVNUID0gJ3BhZ2VzLW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgQlVJTERfTUFOSUZFU1QgPSAnYnVpbGQtbWFuaWZlc3QuanNvbidcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFSS0VSID0gJ2V4cG9ydC1tYXJrZXIuanNvbidcbmV4cG9ydCBjb25zdCBFWFBPUlRfREVUQUlMID0gJ2V4cG9ydC1kZXRhaWwuanNvbidcbmV4cG9ydCBjb25zdCBQUkVSRU5ERVJfTUFOSUZFU1QgPSAncHJlcmVuZGVyLW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgUk9VVEVTX01BTklGRVNUID0gJ3JvdXRlcy1tYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IElNQUdFU19NQU5JRkVTVCA9ICdpbWFnZXMtbWFuaWZlc3QuanNvbidcbmV4cG9ydCBjb25zdCBTRVJWRVJfRklMRVNfTUFOSUZFU1QgPSAncmVxdWlyZWQtc2VydmVyLWZpbGVzLmpzb24nXG5leHBvcnQgY29uc3QgREVWX0NMSUVOVF9QQUdFU19NQU5JRkVTVCA9ICdfZGV2UGFnZXNNYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IFJFQUNUX0xPQURBQkxFX01BTklGRVNUID0gJ3JlYWN0LWxvYWRhYmxlLW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgRk9OVF9NQU5JRkVTVCA9ICdmb250LW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgU0VSVkVSX0RJUkVDVE9SWSA9ICdzZXJ2ZXInXG5leHBvcnQgY29uc3QgU0VSVkVSTEVTU19ESVJFQ1RPUlkgPSAnc2VydmVybGVzcydcbmV4cG9ydCBjb25zdCBDT05GSUdfRklMRSA9ICduZXh0LmNvbmZpZy5qcydcbmV4cG9ydCBjb25zdCBCVUlMRF9JRF9GSUxFID0gJ0JVSUxEX0lEJ1xuZXhwb3J0IGNvbnN0IEJMT0NLRURfUEFHRVMgPSBbJy9fZG9jdW1lbnQnLCAnL19hcHAnXVxuZXhwb3J0IGNvbnN0IENMSUVOVF9QVUJMSUNfRklMRVNfUEFUSCA9ICdwdWJsaWMnXG5leHBvcnQgY29uc3QgQ0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIID0gJ3N0YXRpYydcbmV4cG9ydCBjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUUgPSAncnVudGltZSdcbmV4cG9ydCBjb25zdCBBTVBfUkVOREVSX1RBUkdFVCA9ICdfX05FWFRfQU1QX1JFTkRFUl9UQVJHRVRfXydcbmV4cG9ydCBjb25zdCBTVFJJTkdfTElURVJBTF9EUk9QX0JVTkRMRSA9ICdfX05FWFRfRFJPUF9DTElFTlRfRklMRV9fJ1xuLy8gc3RhdGljL3J1bnRpbWUvbWFpbi5qc1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9NQUlOID0gYG1haW5gXG4vLyBzdGF0aWMvcnVudGltZS9yZWFjdC1yZWZyZXNoLmpzXG5leHBvcnQgY29uc3QgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0ggPSBgcmVhY3QtcmVmcmVzaGBcbi8vIHN0YXRpYy9ydW50aW1lL2FtcC5qc1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAgPSBgYW1wYFxuLy8gc3RhdGljL3J1bnRpbWUvd2VicGFjay5qc1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLID0gYHdlYnBhY2tgXG4vLyBzdGF0aWMvcnVudGltZS9wb2x5ZmlsbHMuanNcbmV4cG9ydCBjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUE9MWUZJTExTID0gYHBvbHlmaWxsc2BcbmV4cG9ydCBjb25zdCBURU1QT1JBUllfUkVESVJFQ1RfU1RBVFVTID0gMzA3XG5leHBvcnQgY29uc3QgUEVSTUFORU5UX1JFRElSRUNUX1NUQVRVUyA9IDMwOFxuZXhwb3J0IGNvbnN0IFNUQVRJQ19QUk9QU19JRCA9ICdfX05fU1NHJ1xuZXhwb3J0IGNvbnN0IFNFUlZFUl9QUk9QU19JRCA9ICdfX05fU1NQJ1xuZXhwb3J0IGNvbnN0IE9QVElNSVpFRF9GT05UX1BST1ZJREVSUyA9IFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnXVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRG9jdW1lbnRQcm9wcyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PERvY3VtZW50UHJvcHM+KG51bGwgYXMgYW55KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBEb2N1bWVudENvbnRleHQuZGlzcGxheU5hbWUgPSAnRG9jdW1lbnRDb250ZXh0J1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRQYWdlRmlsZXM9Z2V0UGFnZUZpbGVzO3ZhciBfbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4vbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtmdW5jdGlvbiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCxwYWdlKXtjb25zdCBub3JtYWxpemVkUGFnZT0oMCxfbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkoKDAsX25vcm1hbGl6ZVBhZ2VQYXRoLm5vcm1hbGl6ZVBhZ2VQYXRoKShwYWdlKSk7bGV0IGZpbGVzPWJ1aWxkTWFuaWZlc3QucGFnZXNbbm9ybWFsaXplZFBhZ2VdO2lmKCFmaWxlcyl7Y29uc29sZS53YXJuKGBDb3VsZCBub3QgZmluZCBmaWxlcyBmb3IgJHtub3JtYWxpemVkUGFnZX0gaW4gLm5leHQvYnVpbGQtbWFuaWZlc3QuanNvbmApO3JldHVybltdO31yZXR1cm4gZmlsZXM7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0LXBhZ2UtZmlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYWdlUGF0aD1ub3JtYWxpemVQYWdlUGF0aDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPXZvaWQgMDt2YXIgX3BhdGg9cmVxdWlyZShcInBhdGhcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9X2Rlbm9ybWFsaXplUGFnZVBhdGgubm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9X2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYWdlUGF0aChwYWdlKXsvLyBJZiB0aGUgcGFnZSBpcyBgL2Agd2UgbmVlZCB0byBhcHBlbmQgYC9pbmRleGAsIG90aGVyd2lzZSB0aGUgcmV0dXJuZWQgZGlyZWN0b3J5IHJvb3Qgd2lsbCBiZSBidW5kbGVzIGluc3RlYWQgb2YgcGFnZXNcbmlmKHBhZ2U9PT0nLycpe3BhZ2U9Jy9pbmRleCc7fWVsc2UgaWYoL15cXC9pbmRleChcXC98JCkvLnRlc3QocGFnZSkpe3BhZ2U9YC9pbmRleCR7cGFnZX1gO30vLyBSZXNvbHZlIG9uIGFueXRoaW5nIHRoYXQgZG9lc24ndCBzdGFydCB3aXRoIGAvYFxuaWYoIXBhZ2Uuc3RhcnRzV2l0aCgnLycpKXtwYWdlPWAvJHtwYWdlfWA7fS8vIFRocm93IHdoZW4gdXNpbmcgLi4vIGV0YyBpbiB0aGUgcGF0aG5hbWVcbmNvbnN0IHJlc29sdmVkUGFnZT1fcGF0aC5wb3NpeC5ub3JtYWxpemUocGFnZSk7aWYocGFnZSE9PXJlc29sdmVkUGFnZSl7dGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0ZWQgYW5kIHJlc29sdmVkIHBhZ2UgbWlzbWF0Y2g6ICR7cGFnZX0gJHtyZXNvbHZlZFBhZ2V9YCk7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0Jsb2NrZWRQYWdlPWlzQmxvY2tlZFBhZ2U7ZXhwb3J0cy5jbGVhbkFtcFBhdGg9Y2xlYW5BbXBQYXRoO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9saWIvY29uc3RhbnRzXCIpO2Z1bmN0aW9uIGlzQmxvY2tlZFBhZ2UocGF0aG5hbWUpe3JldHVybiBfY29uc3RhbnRzLkJMT0NLRURfUEFHRVMuaW5jbHVkZXMocGF0aG5hbWUpO31mdW5jdGlvbiBjbGVhbkFtcFBhdGgocGF0aG5hbWUpe2lmKHBhdGhuYW1lLm1hdGNoKC9cXD9hbXA9KHl8eWVzfHRydWV8MSkvKSl7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvXFw/YW1wPSh5fHllc3x0cnVlfDEpJj8vLCc/Jyk7fWlmKHBhdGhuYW1lLm1hdGNoKC8mYW1wPSh5fHllc3x0cnVlfDEpLykpe3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoLyZhbXA9KHl8eWVzfHRydWV8MSkvLCcnKTt9cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvXFw/JC8sJycpO3JldHVybiBwYXRobmFtZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHtcbiAgQU1QX1JFTkRFUl9UQVJHRVQsXG4gIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cydcbmltcG9ydCB7IERvY3VtZW50Q29udGV4dCBhcyBEb2N1bWVudENvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dCdcbmltcG9ydCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7XG4gIEJ1aWxkTWFuaWZlc3QsXG4gIGdldFBhZ2VGaWxlcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZWR1cGU8VCBleHRlbmRzIHsgZmlsZTogc3RyaW5nIH0+KGJ1bmRsZXM6IFRbXSk6IFRbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3Qga2VwdDogVFtdID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFA+KFxuICAgIERvY3VtZW50Q29tcG9uZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8UD4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBQXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3BzfT5cbiAgICAgICAgPERvY3VtZW50Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gZGVkdXBlKFxuICAgICAgZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmKSA9PiBmLmZpbGUuZW5kc1dpdGgoJy5jc3MnKSlcbiAgICApLm1hcCgoZikgPT4gZi5maWxlKVxuICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpXG4gICAgICBkeW5hbWljQ3NzRmlsZXMgPSBkeW5hbWljQ3NzRmlsZXMuZmlsdGVyKFxuICAgICAgICAoZikgPT4gIShleGlzdGluZy5oYXMoZikgfHwgc2hhcmVkRmlsZXMuaGFzKGYpKVxuICAgICAgKVxuICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKVxuICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpXG4gICAgfVxuXG4gICAgbGV0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSlcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEtbi1nPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkYXRhLW4tcD17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJyd9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFNcbiAgICApIHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzXG4gICAgICApIGFzIFJlYWN0RWxlbWVudFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIHNjcmlwdExvYWRlcixcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5lYWdlciB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuZGVmZXIgfHwgW10pLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2ZpbGV9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgIF1cbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9IHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2VcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAhaW5BbXBNb2RlXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlXG4gICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlXG5cbiAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgaGVhZCA9IFJlYWN0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZFxuICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gY2hpbGRcbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgfSA9IHVzZUNvbnRleHQoXG4gICAgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG4gIClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWVcblxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57QU1QX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKChidW5kbGUpID0+IHtcbiAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlcbiAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoc2NyaXB0TG9hZGVyLmVhZ2VyIHx8IFtdKS5tYXAoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5maWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKVxuXG4gICAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogUmVhZG9ubHk8RG9jdW1lbnRQcm9wcz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWVcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzXG4gICAgICAgICAgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICB2YXIgaGFzaCA9IDUzODEsXG4gICAgICBpICAgID0gc3RyLmxlbmd0aDtcblxuICB3aGlsZShpKSB7XG4gICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgfVxuXG4gIC8qIEphdmFTY3JpcHQgZG9lcyBiaXR3aXNlIG9wZXJhdGlvbnMgKGxpa2UgWE9SLCBhYm92ZSkgb24gMzItYml0IHNpZ25lZFxuICAgKiBpbnRlZ2Vycy4gU2luY2Ugd2Ugd2FudCB0aGUgcmVzdWx0cyB0byBiZSBhbHdheXMgcG9zaXRpdmUsIGNvbnZlcnQgdGhlXG4gICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXG4gIHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/ICdzdHlsZXNoZWV0JyA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XG4gICAgaW52YXJpYW50KHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicsICdgb3B0aW1pemVGb3JTcGVlZGAgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gb3B0aW1pemVGb3JTcGVlZDtcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9pc0Jyb3dzZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcbiAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgdGhpcy5pbmplY3QoKTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gaXNPcHRpbWl6ZUZvclNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICB9O1xuXG4gIF9wcm90by5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBvcHRpbWl6ZUZvclNwZWVkIG1vZGUgbm90IHN1cHBvcnRlZCBmYWxsaW5nIGJhY2sgdG8gc3RhbmRhcmQgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICBjc3NSdWxlczogW10sXG4gICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgaWYgKHRhZy5zaGVldCkge1xuICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0ID0gZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcblxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuX2lzQnJvd3NlciA/IHRoaXMuZ2V0U2hlZXQoKSA6IHRoaXMuX3NlcnZlclNoZWV0O1xuXG4gICAgICBpZiAoIXJ1bGUudHJpbSgpKSB7XG4gICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzW2luZGV4XSkge1xuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG5cblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcudGV4dENvbnRlbnQgPSBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90YWdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0ID09PSBfdGhpczIuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPyBudWxsIDogcnVsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgbmFtZSwgJycpO1xuXG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHRhZywgcmVsYXRpdmVUb1RhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZmx1c2hUb1JlYWN0O1xuZXhwb3J0cy5mbHVzaFRvSFRNTCA9IGZsdXNoVG9IVE1MO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBmbHVzaFRvUmVhY3Qob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkubWFwKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHtcbiAgICAgIGlkOiBcIl9fXCIgKyBpZCxcbiAgICAgIC8vIEF2b2lkIHdhcm5pbmdzIHVwb24gcmVuZGVyIHdpdGggYSBrZXlcbiAgICAgIGtleTogXCJfX1wiICsgaWQsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSA/IG9wdGlvbnMubm9uY2UgOiB1bmRlZmluZWQsXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6IGNzc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmx1c2hUb0hUTUwob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3R5bGUuZmx1c2gpKCkucmVkdWNlKGZ1bmN0aW9uIChodG1sLCBhcmdzKSB7XG4gICAgdmFyIGlkID0gYXJnc1swXTtcbiAgICB2YXIgY3NzID0gYXJnc1sxXTtcbiAgICBodG1sICs9IFwiPHN0eWxlIGlkPVxcXCJfX1wiICsgaWQgKyBcIlxcXCJcIiArIChvcHRpb25zLm5vbmNlID8gXCIgbm9uY2U9XFxcIlwiICsgb3B0aW9ucy5ub25jZSArIFwiXFxcIlwiIDogJycpICsgXCI+XCIgKyBjc3MgKyBcIjwvc3R5bGU+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH0sICcnKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5W1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgSlNYU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSlNYU3R5bGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJldlByb3BzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSlNYU3R5bGUuZHluYW1pYyA9IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xuICAgICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgICB2YXIgcHJvcHMgPSB0YWdJbmZvWzFdO1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgfSkuam9pbignICcpO1xuICB9IC8vIHByb2JhYmx5IGZhc3RlciB0aGFuIFB1cmVDb21wb25lbnQgKHNoYWxsb3dFcXVhbClcbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBKU1hTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaWQgIT09IG90aGVyUHJvcHMuaWQgfHwgLy8gV2UgZG8gdGhpcyBjaGVjayBiZWNhdXNlIGBkeW5hbWljYCBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHVuZGVmaW5lZC5cbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXG4gICAgU3RyaW5nKHRoaXMucHJvcHMuZHluYW1pYykgIT09IFN0cmluZyhvdGhlclByb3BzLmR5bmFtaWMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vemVpdC9zdHlsZWQtanN4L3B1bGwvNDg0XG4gICAgaWYgKHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHRoaXMucHJldlByb3BzKSkge1xuICAgICAgLy8gVXBkYXRlc1xuICAgICAgaWYgKHRoaXMucHJldlByb3BzLmlkKSB7XG4gICAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcmV2UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcbiAgc3R5bGVTaGVldFJlZ2lzdHJ5LmZsdXNoKCk7XG4gIHJldHVybiBjc3NSdWxlcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0cmluZ0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHJpbmctaGFzaFwiKSk7XG5cbnZhciBfc3R5bGVzaGVldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0eWxlc2hlZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUocnVsZSkge1xuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcbn07XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldFtcImRlZmF1bHRcIl0oe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICBpZiAoc3R5bGVTaGVldCAmJiB0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldFJlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9KSAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzMi5zdHlsZUlkO1xuXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICB0YWdGcm9tU2VydmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnRnJvbVNlcnZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdGhpcy5hZGQobmV4dFByb3BzKTtcbiAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgIH0pIDogW107XG5cbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgcmV0dXJuIGZyb21TZXJ2ZXIuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZXNbaW5kZXhdLmNzc1RleHQ7XG4gICAgICB9KS5qb2luKF90aGlzMy5fb3B0aW1pemVGb3JTcGVlZCA/ICcnIDogJ1xcbicpXTtcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVsxXSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlSWRcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFwianN4LVwiICsgYmFzZUlkO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHNUb1N0cmluZyA9IFN0cmluZyhwcm9wcyk7XG4gICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZzsgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcblxuICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBcImpzeC1cIiArICgwLCBfc3RyaW5nSGFzaFtcImRlZmF1bHRcIl0pKGJhc2VJZCArIFwiLVwiICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBkeW5hbWljIHNlbGVjdG9ycy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xuICAgIGlmIChzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gL19fanN4LXN0eWxlLWR5bmFtaWMtc2VsZWN0b3IvZztcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcbiAgICAgIC8vIFNhbml0aXplIFNTUi1lZCBDU1MuXG4gICAgICAvLyBDbGllbnQgc2lkZSBjb2RlIGRvZXNuJ3QgbmVlZCB0byBiZSBzYW5pdGl6ZWQgc2luY2Ugd2UgdXNlXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGNzcyA9IHNhbml0aXplKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuXG4gICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2lkY3NzXTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBkeW5hbWljID0gcHJvcHMuZHluYW1pYyxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcblxuICAgIGlmIChkeW5hbWljKSB7XG4gICAgICB2YXIgc3R5bGVJZCA9IHRoaXMuY29tcHV0ZUlkKGlkLCBkeW5hbWljKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlSWQ6IHN0eWxlSWQsXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgIH0pIDogW3RoaXMuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIGNzcyldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXG4gICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzIDogW2Nzc11cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAqXG4gICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VsZWN0RnJvbVNlcnZlciA9IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcbiAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldFJlZ2lzdHJ5O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zZXJ2ZXInKVxuIiwiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJCcm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBSZWFjdCBtZWV0dXBzIVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9LZXZvcmt5OnNlcnNlcjEyQGNsdXN0ZXIwLnZ5Z2pqLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgfSkpLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG4vL1xuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9