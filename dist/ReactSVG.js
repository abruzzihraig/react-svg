(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["ReactSVG"] = factory(require("react"), require("react-dom/server"));
	else
		root["ReactSVG"] = factory(root["React"], root["ReactDOMServer"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _server = __webpack_require__(8);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// See: https://github.com/webpack/react-starter/issues/37
	var isBrowser = typeof window !== 'undefined';
	var SVGInjector = isBrowser ? __webpack_require__(6) : undefined;

	function jsonEqual(a, b) {
	  return JSON.stringify(a) === JSON.stringify(b);
	}

	var ReactSVG = function (_Component) {
	  _inherits(ReactSVG, _Component);

	  function ReactSVG() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ReactSVG);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactSVG.__proto__ || Object.getPrototypeOf(ReactSVG)).call.apply(_ref, [this].concat(args))), _this), _this.refCallback = function (container) {
	      if (!container) {
	        _this.removeSVG();
	        return;
	      }

	      _this.container = container;
	      _this.renderSVG();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ReactSVG, [{
	    key: 'renderSVG',
	    value: function renderSVG() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var each = props.callback,
	          className = props.className,
	          evalScripts = props.evalScripts,
	          path = props.path,
	          style = props.style;


	      var div = document.createElement('div');
	      div.innerHTML = _server2.default.renderToStaticMarkup(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', {
	          className: className,
	          'data-src': path,
	          style: style
	        })
	      ));

	      var wrapper = this.container.appendChild(div.firstChild);

	      SVGInjector(wrapper.firstChild, {
	        evalScripts: evalScripts,
	        each: each
	      });
	    }
	  }, {
	    key: 'removeSVG',
	    value: function removeSVG() {
	      this.container.removeChild(this.container.firstChild);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !jsonEqual(nextProps, this.props);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      this.removeSVG();
	      this.renderSVG(nextProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { ref: this.refCallback });
	    }
	  }]);

	  return ReactSVG;
	}(_react.Component);

	ReactSVG.defaultProps = {
	  callback: function callback() {},
	  className: '',
	  evalScripts: 'once',
	  style: {}
	};
	ReactSVG.propTypes = {
	  callback: _propTypes2.default.func,
	  className: _propTypes2.default.string,
	  evalScripts: _propTypes2.default.oneOf(['always', 'once', 'never']),
	  path: _propTypes2.default.string.isRequired,
	  style: _propTypes2.default.object
	};
	exports.default = ReactSVG;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(1);
	var invariant = __webpack_require__(2);
	var ReactPropTypesSecret = __webpack_require__(5);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(3)();
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
	 * https://github.com/iconic/SVGInjector
	 *
	 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
	 * @license MIT
	 */

	(function (window, document) {

	  'use strict';

	  // Environment
	  var isLocal = window.location.protocol === 'file:';
	  var hasSvgSupport = document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');

	  function uniqueClasses(list) {
	    list = list.split(' ');

	    var hash = {};
	    var i = list.length;
	    var out = [];

	    while (i--) {
	      if (!hash.hasOwnProperty(list[i])) {
	        hash[list[i]] = 1;
	        out.unshift(list[i]);
	      }
	    }

	    return out.join(' ');
	  }

	  /**
	   * cache (or polyfill for <= IE8) Array.forEach()
	   * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	   */
	  var forEach = Array.prototype.forEach || function (fn, scope) {
	    if (this === void 0 || this === null || typeof fn !== 'function') {
	      throw new TypeError();
	    }

	    /* jshint bitwise: false */
	    var i, len = this.length >>> 0;
	    /* jshint bitwise: true */

	    for (i = 0; i < len; ++i) {
	      if (i in this) {
	        fn.call(scope, this[i], i, this);
	      }
	    }
	  };

	  // SVG Cache
	  var svgCache = {};

	  var injectCount = 0;
	  var injectedElements = [];

	  // Request Queue
	  var requestQueue = [];

	  // Script running status
	  var ranScripts = {};

	  var cloneSvg = function (sourceSvg) {
	    return sourceSvg.cloneNode(true);
	  };

	  var queueRequest = function (url, callback) {
	    requestQueue[url] = requestQueue[url] || [];
	    requestQueue[url].push(callback);
	  };

	  var processRequestQueue = function (url) {
	    for (var i = 0, len = requestQueue[url].length; i < len; i++) {
	      // Make these calls async so we avoid blocking the page/renderer
	      /* jshint loopfunc: true */
	      (function (index) {
	        setTimeout(function () {
	          requestQueue[url][index](cloneSvg(svgCache[url]));
	        }, 0);
	      })(i);
	      /* jshint loopfunc: false */
	    }
	  };

	  var loadSvg = function (url, callback) {
	    if (svgCache[url] !== undefined) {
	      if (svgCache[url] instanceof SVGSVGElement) {
	        // We already have it in cache, so use it
	        callback(cloneSvg(svgCache[url]));
	      }
	      else {
	        // We don't have it in cache yet, but we are loading it, so queue this request
	        queueRequest(url, callback);
	      }
	    }
	    else {

	      if (!window.XMLHttpRequest) {
	        callback('Browser does not support XMLHttpRequest');
	        return false;
	      }

	      // Seed the cache to indicate we are loading this URL already
	      svgCache[url] = {};
	      queueRequest(url, callback);

	      var httpRequest = new XMLHttpRequest();

	      httpRequest.onreadystatechange = function () {
	        // readyState 4 = complete
	        if (httpRequest.readyState === 4) {

	          // Handle status
	          if (httpRequest.status === 404 || httpRequest.responseXML === null) {
	            callback('Unable to load SVG file: ' + url);

	            if (isLocal) callback('Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.');

	            callback();
	            return false;
	          }

	          // 200 success from server, or 0 when using file:// protocol locally
	          if (httpRequest.status === 200 || (isLocal && httpRequest.status === 0)) {

	            /* globals Document */
	            if (httpRequest.responseXML instanceof Document) {
	              // Cache it
	              svgCache[url] = httpRequest.responseXML.documentElement;
	            }
	            /* globals -Document */

	            // IE9 doesn't create a responseXML Document object from loaded SVG,
	            // and throws a "DOM Exception: HIERARCHY_REQUEST_ERR (3)" error when injected.
	            //
	            // So, we'll just create our own manually via the DOMParser using
	            // the the raw XML responseText.
	            //
	            // :NOTE: IE8 and older doesn't have DOMParser, but they can't do SVG either, so...
	            else if (DOMParser && (DOMParser instanceof Function)) {
	              var xmlDoc;
	              try {
	                var parser = new DOMParser();
	                xmlDoc = parser.parseFromString(httpRequest.responseText, 'text/xml');
	              }
	              catch (e) {
	                xmlDoc = undefined;
	              }

	              if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
	                callback('Unable to parse SVG file: ' + url);
	                return false;
	              }
	              else {
	                // Cache it
	                svgCache[url] = xmlDoc.documentElement;
	              }
	            }

	            // We've loaded a new asset, so process any requests waiting for it
	            processRequestQueue(url);
	          }
	          else {
	            callback('There was a problem injecting the SVG: ' + httpRequest.status + ' ' + httpRequest.statusText);
	            return false;
	          }
	        }
	      };

	      httpRequest.open('GET', url);

	      // Treat and parse the response as XML, even if the
	      // server sends us a different mimetype
	      if (httpRequest.overrideMimeType) httpRequest.overrideMimeType('text/xml');

	      httpRequest.send();
	    }
	  };

	  // Inject a single element
	  var injectElement = function (el, evalScripts, pngFallback, callback) {

	    // Grab the src or data-src attribute
	    var imgUrl = el.getAttribute('data-src') || el.getAttribute('src');


	    // If we don't have SVG support try to fall back to a png,
	    // either defined per-element via data-fallback or data-png,
	    // or globally via the pngFallback directory setting
	    if (!hasSvgSupport) {
	      var perElementFallback = el.getAttribute('data-fallback') || el.getAttribute('data-png');

	      // Per-element specific PNG fallback defined, so use that
	      if (perElementFallback) {
	        el.setAttribute('src', perElementFallback);
	        callback(null);
	      }
	      // Global PNG fallback directoriy defined, use the same-named PNG
	      else if (pngFallback) {
	        el.setAttribute('src', pngFallback + '/' + imgUrl.split('/').pop().replace('.svg', '.png'));
	        callback(null);
	      }
	      // um...
	      else {
	        callback('This browser does not support SVG and no PNG fallback was defined.');
	      }

	      return;
	    }

	    // Make sure we aren't already in the process of injecting this element to
	    // avoid a race condition if multiple injections for the same element are run.
	    // :NOTE: Using indexOf() only _after_ we check for SVG support and bail,
	    // so no need for IE8 indexOf() polyfill
	    if (injectedElements.indexOf(el) !== -1) {
	      return;
	    }

	    // Remember the request to inject this element, in case other injection
	    // calls are also trying to replace this element before we finish
	    injectedElements.push(el);

	    // Try to avoid loading the orginal image src if possible.
	    el.setAttribute('src', '');

	    // Load it up
	    loadSvg(imgUrl, function (svg) {

	      if (typeof svg === 'undefined' || typeof svg === 'string') {
	        callback(svg);
	        return false;
	      }

	      var imgId = el.getAttribute('id');
	      if (imgId) {
	        svg.setAttribute('id', imgId);
	      }

	      var imgTitle = el.getAttribute('title');
	      if (imgTitle) {
	        svg.setAttribute('title', imgTitle);
	      }

	      // Concat the SVG classes + 'injected-svg' + the img classes
	      var classMerge = [].concat(svg.getAttribute('class') || [], 'injected-svg', el.getAttribute('class') || []).join(' ');
	      svg.setAttribute('class', uniqueClasses(classMerge));

	      var imgStyle = el.getAttribute('style');
	      if (imgStyle) {
	        svg.setAttribute('style', imgStyle);
	      }

	      // Copy all the data elements to the svg
	      var imgData = [].filter.call(el.attributes, function (at) {
	        return (/^data-\w[\w\-]*$/).test(at.name);
	      });
	      forEach.call(imgData, function (dataAttr) {
	        if (dataAttr.name && dataAttr.value) {
	          svg.setAttribute(dataAttr.name, dataAttr.value);
	        }
	      });

	      // Make sure any internally referenced clipPath ids and their
	      // clip-path references are unique.
	      //
	      // This addresses the issue of having multiple instances of the
	      // same SVG on a page and only the first clipPath id is referenced.
	      //
	      // Browsers often shortcut the SVG Spec and don't use clipPaths
	      // contained in parent elements that are hidden, so if you hide the first
	      // SVG instance on the page, then all other instances lose their clipping.
	      // Reference: https://bugzilla.mozilla.org/show_bug.cgi?id=376027

	      // Handle all defs elements that have iri capable attributes as defined by w3c: http://www.w3.org/TR/SVG/linking.html#processingIRI
	      // Mapping IRI addressable elements to the properties that can reference them:
	      var iriElementsAndProperties = {
	        'clipPath': ['clip-path'],
	        'color-profile': ['color-profile'],
	        'cursor': ['cursor'],
	        'filter': ['filter'],
	        'linearGradient': ['fill', 'stroke'],
	        'marker': ['marker', 'marker-start', 'marker-mid', 'marker-end'],
	        'mask': ['mask'],
	        'pattern': ['fill', 'stroke'],
	        'radialGradient': ['fill', 'stroke']
	      };

	      var element, elementDefs, properties, currentId, newId;
	      Object.keys(iriElementsAndProperties).forEach(function (key) {
	        element = key;
	        properties = iriElementsAndProperties[key];

	        elementDefs = svg.querySelectorAll('defs ' + element + '[id]');
	        for (var i = 0, elementsLen = elementDefs.length; i < elementsLen; i++) {
	          currentId = elementDefs[i].id;
	          newId = currentId + '-' + injectCount;

	          // All of the properties that can reference this element type
	          var referencingElements;
	          forEach.call(properties, function (property) {
	            // :NOTE: using a substring match attr selector here to deal with IE "adding extra quotes in url() attrs"
	            referencingElements = svg.querySelectorAll('[' + property + '*="' + currentId + '"]');
	            for (var j = 0, referencingElementLen = referencingElements.length; j < referencingElementLen; j++) {
	              referencingElements[j].setAttribute(property, 'url(#' + newId + ')');
	            }
	          });

	          elementDefs[i].id = newId;
	        }
	      });

	      // Remove any unwanted/invalid namespaces that might have been added by SVG editing tools
	      svg.removeAttribute('xmlns:a');

	      // Post page load injected SVGs don't automatically have their script
	      // elements run, so we'll need to make that happen, if requested

	      // Find then prune the scripts
	      var scripts = svg.querySelectorAll('script');
	      var scriptsToEval = [];
	      var script, scriptType;

	      for (var k = 0, scriptsLen = scripts.length; k < scriptsLen; k++) {
	        scriptType = scripts[k].getAttribute('type');

	        // Only process javascript types.
	        // SVG defaults to 'application/ecmascript' for unset types
	        if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {

	          // innerText for IE, textContent for other browsers
	          script = scripts[k].innerText || scripts[k].textContent;

	          // Stash
	          scriptsToEval.push(script);

	          // Tidy up and remove the script element since we don't need it anymore
	          svg.removeChild(scripts[k]);
	        }
	      }

	      // Run/Eval the scripts if needed
	      if (scriptsToEval.length > 0 && (evalScripts === 'always' || (evalScripts === 'once' && !ranScripts[imgUrl]))) {
	        for (var l = 0, scriptsToEvalLen = scriptsToEval.length; l < scriptsToEvalLen; l++) {

	          // :NOTE: Yup, this is a form of eval, but it is being used to eval code
	          // the caller has explictely asked to be loaded, and the code is in a caller
	          // defined SVG file... not raw user input.
	          //
	          // Also, the code is evaluated in a closure and not in the global scope.
	          // If you need to put something in global scope, use 'window'
	          new Function(scriptsToEval[l])(window); // jshint ignore:line
	        }

	        // Remember we already ran scripts for this svg
	        ranScripts[imgUrl] = true;
	      }

	      // :WORKAROUND:
	      // IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
	      // This trick will trigger IE to read and use any existing SVG <style> tags.
	      //
	      // Reference: https://github.com/iconic/SVGInjector/issues/23
	      var styleTags = svg.querySelectorAll('style');
	      forEach.call(styleTags, function (styleTag) {
	        styleTag.textContent += '';
	      });

	      // Replace the image with the svg
	      el.parentNode.replaceChild(svg, el);

	      // Now that we no longer need it, drop references
	      // to the original element so it can be GC'd
	      delete injectedElements[injectedElements.indexOf(el)];
	      el = null;

	      // Increment the injected count
	      injectCount++;

	      callback(svg);
	    });
	  };

	  /**
	   * SVGInjector
	   *
	   * Replace the given elements with their full inline SVG DOM elements.
	   *
	   * :NOTE: We are using get/setAttribute with SVG because the SVG DOM spec differs from HTML DOM and
	   * can return other unexpected object types when trying to directly access svg properties.
	   * ex: "className" returns a SVGAnimatedString with the class value found in the "baseVal" property,
	   * instead of simple string like with HTML Elements.
	   *
	   * @param {mixes} Array of or single DOM element
	   * @param {object} options
	   * @param {function} callback
	   * @return {object} Instance of SVGInjector
	   */
	  var SVGInjector = function (elements, options, done) {

	    // Options & defaults
	    options = options || {};

	    // Should we run the scripts blocks found in the SVG
	    // 'always' - Run them every time
	    // 'once' - Only run scripts once for each SVG
	    // [false|'never'] - Ignore scripts
	    var evalScripts = options.evalScripts || 'always';

	    // Location of fallback pngs, if desired
	    var pngFallback = options.pngFallback || false;

	    // Callback to run during each SVG injection, returning the SVG injected
	    var eachCallback = options.each;

	    // Do the injection...
	    if (elements.length !== undefined) {
	      var elementsLoaded = 0;
	      forEach.call(elements, function (element) {
	        injectElement(element, evalScripts, pngFallback, function (svg) {
	          if (eachCallback && typeof eachCallback === 'function') eachCallback(svg);
	          if (done && elements.length === ++elementsLoaded) done(elementsLoaded);
	        });
	      });
	    }
	    else {
	      if (elements) {
	        injectElement(elements, evalScripts, pngFallback, function (svg) {
	          if (eachCallback && typeof eachCallback === 'function') eachCallback(svg);
	          if (done) done(1);
	          elements = null;
	        });
	      }
	      else {
	        if (done) done(0);
	      }
	    }
	  };

	  /* global module, exports: true, define */
	  // Node.js or CommonJS
	  if (typeof module === 'object' && typeof module.exports === 'object') {
	    module.exports = exports = SVGInjector;
	  }
	  // AMD support
	  else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return SVGInjector;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Otherwise, attach to window as global
	  else if (typeof window === 'object') {
	    window.SVGInjector = SVGInjector;
	  }
	  /* global -module, -exports, -define */

	}(window, document));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ])
});
;