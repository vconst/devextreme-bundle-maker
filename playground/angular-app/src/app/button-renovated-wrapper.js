module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/type.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.type = exports.isDeferred = exports.isPromise = exports.isRenderer = exports.isWindow = exports.isPrimitive = exports.isPlainObject = exports.isEmptyObject = exports.isObject = exports.isNumeric = exports.isString = exports.isFunction = exports.isDefined = exports.isDate = exports.isExponential = exports.isBoolean = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var types = {
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object Object]': 'object',
  '[object String]': 'string',
  '[object Null]': 'null'
};

var type = function type(object) {
  var typeOfObject = Object.prototype.toString.call(object);
  return _typeof(object) === 'object' ? types[typeOfObject] || 'object' : _typeof(object);
};

exports.type = type;

var isBoolean = function isBoolean(object) {
  return typeof object === 'boolean';
};

exports.isBoolean = isBoolean;

var isExponential = function isExponential(value) {
  return isNumeric(value) && value.toString().indexOf('e') !== -1;
};

exports.isExponential = isExponential;

var isDate = function isDate(object) {
  return type(object) === 'date';
};

exports.isDate = isDate;

var isDefined = function isDefined(object) {
  return object !== null && object !== undefined;
};

exports.isDefined = isDefined;

var isFunction = function isFunction(object) {
  return typeof object === 'function';
};

exports.isFunction = isFunction;

var isString = function isString(object) {
  return typeof object === 'string';
};

exports.isString = isString;

var isNumeric = function isNumeric(object) {
  return typeof object === 'number' && isFinite(object) || !isNaN(object - parseFloat(object));
};

exports.isNumeric = isNumeric;

var isObject = function isObject(object) {
  return type(object) === 'object';
};

exports.isObject = isObject;

var isEmptyObject = function isEmptyObject(object) {
  var property;

  for (property in object) {
    return false;
  }

  return true;
};

exports.isEmptyObject = isEmptyObject;

var isPlainObject = function isPlainObject(object) {
  if (!object || Object.prototype.toString.call(object) !== '[object Object]') {
    return false;
  }

  var proto = Object.getPrototypeOf(object);
  var ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof ctor === 'function' && Object.toString.call(ctor) === Object.toString.call(Object);
};

exports.isPlainObject = isPlainObject;

var isPrimitive = function isPrimitive(value) {
  return ['object', 'array', 'function'].indexOf(type(value)) === -1;
};

exports.isPrimitive = isPrimitive;

var isWindow = function isWindow(object) {
  return object != null && object === object.window;
};

exports.isWindow = isWindow;

var isRenderer = function isRenderer(object) {
  return !!(object.jquery || object.dxRenderer);
};

exports.isRenderer = isRenderer;

var isPromise = function isPromise(object) {
  return object && isFunction(object.then);
};

exports.isPromise = isPromise;

var isDeferred = function isDeferred(object) {
  return object && isFunction(object.done) && isFunction(object.fail);
};

exports.isDeferred = isDeferred;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/renderer.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer_base = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _renderer_base.default.get();

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/extend.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.extend = exports.extendFromObject = void 0;

var _type = __webpack_require__(1);

var extendFromObject = function extendFromObject(target, source, overrideExistingValues) {
  target = target || {};

  for (var prop in source) {
    if (Object.prototype.hasOwnProperty.call(source, prop)) {
      var value = source[prop];

      if (!(prop in target) || overrideExistingValues) {
        target[prop] = value;
      }
    }
  }

  return target;
};

exports.extendFromObject = extendFromObject;

var extend = function extend(target) {
  target = target || {};
  var i = 1;
  var deep = false;

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    i++;
  }

  for (; i < arguments.length; i++) {
    var source = arguments[i];

    if (source == null) {
      continue;
    }

    for (var key in source) {
      var targetValue = target[key];
      var sourceValue = source[key];
      var sourceValueIsArray = false;
      var clone = void 0;

      if (key === '__proto__' || target === sourceValue) {
        continue;
      }

      if (deep && sourceValue && ((0, _type.isPlainObject)(sourceValue) || (sourceValueIsArray = Array.isArray(sourceValue)))) {
        if (sourceValueIsArray) {
          clone = targetValue && Array.isArray(targetValue) ? targetValue : [];
        } else {
          clone = targetValue && (0, _type.isPlainObject)(targetValue) ? targetValue : {};
        }

        target[key] = extend(deep, clone, sourceValue);
      } else if (sourceValue !== undefined) {
        target[key] = sourceValue;
      }
    }
  }

  return target;
};

exports.extend = extend;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/iterator.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.reverseEach = exports.each = exports.map = void 0;

var map = function map(values, callback) {
  if (Array.isArray(values)) {
    return values.map(callback);
  }

  var result = [];

  for (var key in values) {
    result.push(callback(values[key], key));
  }

  return result;
};

exports.map = map;

var each = function each(values, callback) {
  if (!values) return;

  if ('length' in values) {
    for (var i = 0; i < values.length; i++) {
      if (callback.call(values[i], i, values[i]) === false) {
        break;
      }
    }
  } else {
    for (var key in values) {
      if (callback.call(values[key], key, values[key]) === false) {
        break;
      }
    }
  }

  return values;
};

exports.each = each;

var reverseEach = function reverseEach(array, callback) {
  if (!array || !('length' in array) || array.length === 0) return;

  for (var i = array.length - 1; i >= 0; i--) {
    if (callback.call(array[i], i, array[i]) === false) {
      break;
    }
  }
};

exports.reverseEach = reverseEach;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/dom_adapter.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var DOCUMENT_NODE = 9;
var nativeDOMAdapterStrategy = {
  querySelectorAll: function querySelectorAll(element, selector) {
    return element.querySelectorAll(selector);
  },
  elementMatches: function elementMatches(element, selector) {
    var _this = this;

    var matches = element.matches || element.matchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector || function (selector) {
      var doc = element.document || element.ownerDocument;

      if (!doc) {
        return false;
      }

      var items = _this.querySelectorAll(doc, selector);

      for (var i = 0; i < items.length; i++) {
        if (items[i] === element) {
          return true;
        }
      }
    };

    return matches.call(element, selector);
  },
  createElement: function createElement(tagName, context) {
    context = context || this._document;
    return context.createElement(tagName);
  },
  createElementNS: function createElementNS(ns, tagName, context) {
    context = context || this._document;
    return context.createElementNS(ns, tagName);
  },
  createTextNode: function createTextNode(text, context) {
    context = context || this._document;
    return context.createTextNode(text);
  },
  isNode: function isNode(element) {
    return _typeof(element) === 'object' && 'nodeType' in element;
  },
  isElementNode: function isElementNode(element) {
    return element && element.nodeType === ELEMENT_NODE;
  },
  isTextNode: function isTextNode(element) {
    return element && element.nodeType === TEXT_NODE;
  },
  isDocument: function isDocument(element) {
    return element && element.nodeType === DOCUMENT_NODE;
  },
  removeElement: function removeElement(element) {
    var parentNode = element && element.parentNode;

    if (parentNode) {
      parentNode.removeChild(element);
    }
  },
  insertElement: function insertElement(parentElement, newElement, nextSiblingElement) {
    if (parentElement && newElement && parentElement !== newElement) {
      if (nextSiblingElement) {
        parentElement.insertBefore(newElement, nextSiblingElement);
      } else {
        parentElement.appendChild(newElement);
      }
    }
  },
  getAttribute: function getAttribute(element, name) {
    return element.getAttribute(name);
  },
  setAttribute: function setAttribute(element, name, value) {
    element.setAttribute(name, value);
  },
  removeAttribute: function removeAttribute(element, name) {
    element.removeAttribute(name);
  },
  setProperty: function setProperty(element, name, value) {
    element[name] = value;
  },
  setText: function setText(element, text) {
    if (element) {
      element.textContent = text;
    }
  },
  setClass: function setClass(element, className, isAdd) {
    if (element.nodeType === 1 && className) {
      if (element.classList) {
        if (isAdd) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      } else {
        // IE9
        var classNameSupported = typeof element.className === 'string';
        var elementClass = classNameSupported ? element.className : this.getAttribute(element, 'class') || '';
        var classNames = elementClass.split(' ');
        var classIndex = classNames.indexOf(className);
        var resultClassName;

        if (isAdd && classIndex < 0) {
          resultClassName = elementClass ? elementClass + ' ' + className : className;
        }

        if (!isAdd && classIndex >= 0) {
          classNames.splice(classIndex, 1);
          resultClassName = classNames.join(' ');
        }

        if (resultClassName !== undefined) {
          if (classNameSupported) {
            element.className = resultClassName;
          } else {
            this.setAttribute(element, 'class', resultClassName);
          }
        }
      }
    }
  },
  setStyle: function setStyle(element, name, value) {
    element.style[name] = value || '';
  },
  _document: typeof document === 'undefined' ? undefined : document,
  getDocument: function getDocument() {
    return this._document;
  },
  getActiveElement: function getActiveElement() {
    return this._document.activeElement;
  },
  getBody: function getBody() {
    return this._document.body;
  },
  createDocumentFragment: function createDocumentFragment() {
    return this._document.createDocumentFragment();
  },
  getDocumentElement: function getDocumentElement() {
    return this._document.documentElement;
  },
  getLocation: function getLocation() {
    return this._document.location;
  },
  getSelection: function getSelection() {
    return this._document.selection;
  },
  getReadyState: function getReadyState() {
    return this._document.readyState;
  },
  getHead: function getHead() {
    return this._document.head;
  },
  hasDocumentProperty: function hasDocumentProperty(property) {
    return property in this._document;
  },
  listen: function listen(element, event, callback, options) {
    if (!element || !('addEventListener' in element)) {
      return _common.noop;
    }

    element.addEventListener(event, callback, options);
    return function () {
      element.removeEventListener(event, callback);
    };
  }
};

var _default = (0, _dependency_injector.default)(nativeDOMAdapterStrategy);

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/window.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.getNavigator = exports.getCurrentScreenFactor = exports.defaultScreenFactorFunc = exports.hasProperty = exports.getWindow = exports.hasWindow = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var hasWindow = function hasWindow() {
  return typeof window !== 'undefined';
};

exports.hasWindow = hasWindow;
var windowObject = hasWindow() && window;

if (!windowObject) {
  windowObject = {};
  windowObject.window = windowObject;
}

var getWindow = function getWindow() {
  return windowObject;
};

exports.getWindow = getWindow;

var hasProperty = function hasProperty(prop) {
  return hasWindow() && prop in windowObject;
};

exports.hasProperty = hasProperty;

var defaultScreenFactorFunc = function defaultScreenFactorFunc(width) {
  if (width < 768) {
    return 'xs';
  } else if (width < 992) {
    return 'sm';
  } else if (width < 1200) {
    return 'md';
  } else {
    return 'lg';
  }
};

exports.defaultScreenFactorFunc = defaultScreenFactorFunc;

var getCurrentScreenFactor = function getCurrentScreenFactor(screenFactorCallback) {
  var screenFactorFunc = screenFactorCallback || defaultScreenFactorFunc;

  var windowWidth = _dom_adapter.default.getDocumentElement()['clientWidth'];

  return screenFactorFunc(windowWidth);
};

exports.getCurrentScreenFactor = getCurrentScreenFactor;

var getNavigator = function getNavigator() {
  return hasWindow() ? windowObject.navigator : {
    userAgent: ''
  };
};

exports.getNavigator = getNavigator;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/errors.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _error = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @docid
* @name ErrorsCore
*/
var _default = (0, _error.default)({
  /**
  * @name ErrorsCore.E0001
  */
  E0001: 'Method is not implemented',

  /**
  * @name ErrorsCore.E0002
  */
  E0002: 'Member name collision: {0}',

  /**
  * @name ErrorsCore.E0003
  */
  E0003: 'A class must be instantiated using the \'new\' keyword',

  /**
  * @name ErrorsCore.E0004
  */
  E0004: 'The NAME property of the component is not specified',

  /**
  * @name ErrorsCore.E0005
  */
  E0005: 'Unknown device',

  /**
  * @name ErrorsCore.E0006
  */
  E0006: 'Unknown endpoint key is requested',

  /**
  * @name ErrorsCore.E0007
  */
  E0007: '\'Invalidate\' method is called outside the update transaction',

  /**
  * @name ErrorsCore.E0008
  */
  E0008: 'Type of the option name is not appropriate to create an action',

  /**
  * @name ErrorsCore.E0009
  */
  E0009: 'Component \'{0}\' has not been initialized for an element',

  /**
  * @name ErrorsCore.E0010
  */
  E0010: 'Animation configuration with the \'{0}\' type requires \'{1}\' configuration as {2}',

  /**
  * @name ErrorsCore.E0011
  */
  E0011: 'Unknown animation type \'{0}\'',

  /**
  * @name ErrorsCore.E0012
  */
  E0012: 'jQuery version is too old. Please upgrade jQuery to 1.10.0 or later',

  /**
  * @name ErrorsCore.E0013
  */
  E0013: 'KnockoutJS version is too old. Please upgrade KnockoutJS to 2.3.0 or later',

  /**
  * @name ErrorsCore.E0014
  */
  E0014: 'The \'release\' method shouldn\'t be called for an unlocked Lock object',

  /**
  * @name ErrorsCore.E0015
  */
  E0015: 'Queued task returned an unexpected result',

  /**
  * @name ErrorsCore.E0017
  */
  E0017: 'Event namespace is not defined',

  /**
  * @name ErrorsCore.E0018
  */
  E0018: 'DevExpress.ui.DevExpressPopup widget is required',

  /**
  * @name ErrorsCore.E0020
  */
  E0020: 'Template engine \'{0}\' is not supported',

  /**
  * @name ErrorsCore.E0021
  */
  E0021: 'Unknown theme is set: {0}',

  /**
  * @name ErrorsCore.E0022
  */
  E0022: 'LINK[rel=DevExpress-theme] tags must go before DevExpress included scripts',

  /**
  * @name ErrorsCore.E0023
  */
  E0023: 'Template name is not specified',

  /**
  * @name ErrorsCore.E0024
  */
  E0024: 'DevExtreme bundle already included',

  /**
  * @name ErrorsCore.E0025
  */
  E0025: 'Unexpected argument type',

  /**
  * @name ErrorsCore.E0100
  */
  E0100: 'Unknown validation type is detected',

  /**
  * @name ErrorsCore.E0101
  */
  E0101: 'Misconfigured range validation rule is detected',

  /**
  * @name ErrorsCore.E0102
  */
  E0102: 'Misconfigured comparison validation rule is detected',

  /**
  * @name ErrorsCore.E0103
  */
  E0103: 'validationCallback of an asynchronous rule should return a jQuery or a native promise',

  /**
  * @name ErrorsCore.E0110
  */
  E0110: 'Unknown validation group is detected',

  /**
  * @name ErrorsCore.E0120
  */
  E0120: 'Adapter for a DevExpressValidator component cannot be configured',

  /**
  * @name ErrorsCore.E0121
  */
  E0121: 'The \'customItem\' field of the \'onCustomItemCreating\' function\'s parameter should contain a custom item or Promise that is resolved after the item is created.',

  /**
  * @name ErrorsCore.W0000
  */
  W0000: '\'{0}\' is deprecated in {1}. {2}',

  /**
  * @name ErrorsCore.W0001
  */
  W0001: '{0} - \'{1}\' option is deprecated in {2}. {3}',

  /**
  * @name ErrorsCore.W0002
  */
  W0002: '{0} - \'{1}\' method is deprecated in {2}. {3}',

  /**
  * @name ErrorsCore.W0003
  */
  W0003: '{0} - \'{1}\' property is deprecated in {2}. {3}',

  /**
  * @name ErrorsCore.W0004
  */
  W0004: 'Timeout for theme loading is over: {0}',

  /**
  * @name ErrorsCore.W0005
  */
  W0005: '\'{0}\' event is deprecated in {1}. {2}',

  /**
  * @name ErrorsCore.W0006
  */
  W0006: 'Invalid recurrence rule: \'{0}\'',

  /**
  * @name ErrorsCore.W0007
  */
  W0007: '\'{0}\' Globalize culture is not defined',

  /**
  * @name ErrorsCore.W0008
  */
  W0008: 'Invalid view name: \'{0}\'',

  /**
  * @name ErrorsCore.W0009
  */
  W0009: 'Invalid time zone name: \'{0}\'',

  /**
  * @name ErrorsCore.W0010
  */
  W0010: '{0} is deprecated in {1}. {2}',

  /**
  * @name ErrorsCore.W0011
  */
  W0011: 'Number parsing is invoked while the parser is not defined',

  /**
  * @name ErrorsCore.W0012
  */
  W0012: 'Date parsing is invoked while the parser is not defined',

  /**
  * @name ErrorsCore.W0013
  */
  W0013: '\'{0}\' file is deprecated in {1}. {2}',

  /**
  * @name ErrorsCore.W0014
  */
  W0014: '{0} - \'{1}\' type is deprecated in {2}. {3}',

  /**
  * @name ErrorsCore.W0015
  */
  W0015: 'Instead of returning a value from the \'{0}\' function, write it into the \'{1}\' field of the function\'s parameter.',

  /**
  * @name ErrorsCore.W0016
  */
  W0016: 'The "{0}" option does not accept the "{1}" value since v.{2}. {3}.'
});

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/common.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.equalByValue = exports.grep = exports.asyncNoop = exports.noop = exports.applyServerDecimalSeparator = exports.escapeRegExp = exports.getKeyHash = exports.pairToObject = exports.denormalizeKey = exports.normalizeKey = exports.splitPair = exports.findBestMatches = exports.deferUpdater = exports.deferRenderer = exports.deferUpdate = exports.deferRender = exports.executeAsync = exports.ensureDefined = void 0;

var _config = _interopRequireDefault(__webpack_require__(16));

var _guid = _interopRequireDefault(__webpack_require__(65));

var _deferred = __webpack_require__(23);

var _data = __webpack_require__(26);

var _iterator = __webpack_require__(4);

var _type = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ensureDefined = function ensureDefined(value, defaultValue) {
  return (0, _type.isDefined)(value) ? value : defaultValue;
};

exports.ensureDefined = ensureDefined;

var executeAsync = function executeAsync(action, context
/* , internal */
) {
  var deferred = new _deferred.Deferred();
  var normalizedContext = context || this;
  var task = {
    promise: deferred.promise(),
    abort: function abort() {
      clearTimeout(timerId);
      deferred.rejectWith(normalizedContext);
    }
  };

  var callback = function callback() {
    var result = action.call(normalizedContext);

    if (result && result.done && (0, _type.isFunction)(result.done)) {
      result.done(function () {
        deferred.resolveWith(normalizedContext);
      });
    } else {
      deferred.resolveWith(normalizedContext);
    }
  };

  var timerId = (arguments[2] || setTimeout)(callback, typeof context === 'number' ? context : 0);
  return task;
};

exports.executeAsync = executeAsync;
var delayedFuncs = [];
var delayedNames = [];
var delayedDeferreds = [];
var executingName;

var deferExecute = function deferExecute(name, func, deferred) {
  if (executingName && executingName !== name) {
    delayedFuncs.push(func);
    delayedNames.push(name);
    deferred = deferred || new _deferred.Deferred();
    delayedDeferreds.push(deferred);
    return deferred;
  } else {
    var oldExecutingName = executingName;
    var currentDelayedCount = delayedDeferreds.length;
    executingName = name;
    var result = func();

    if (!result) {
      if (delayedDeferreds.length > currentDelayedCount) {
        result = _deferred.when.apply(this, delayedDeferreds.slice(currentDelayedCount));
      } else if (deferred) {
        deferred.resolve();
      }
    }

    executingName = oldExecutingName;

    if (deferred && result && result.done) {
      result.done(deferred.resolve).fail(deferred.reject);
    }

    if (!executingName && delayedFuncs.length) {
      (delayedNames.shift() === 'render' ? deferRender : deferUpdate)(delayedFuncs.shift(), delayedDeferreds.shift());
    }

    return result || (0, _deferred.when)();
  }
};

var deferRender = function deferRender(func, deferred) {
  return deferExecute('render', func, deferred);
};

exports.deferRender = deferRender;

var deferUpdate = function deferUpdate(func, deferred) {
  return deferExecute('update', func, deferred);
};

exports.deferUpdate = deferUpdate;

var deferRenderer = function deferRenderer(func) {
  return function () {
    var that = this;
    return deferExecute('render', function () {
      return func.call(that);
    });
  };
};

exports.deferRenderer = deferRenderer;

var deferUpdater = function deferUpdater(func) {
  return function () {
    var that = this;
    return deferExecute('update', function () {
      return func.call(that);
    });
  };
};

exports.deferUpdater = deferUpdater;

var findBestMatches = function findBestMatches(targetFilter, items, mapFn) {
  var bestMatches = [];
  var maxMatchCount = 0;
  (0, _iterator.each)(items, function (index, itemSrc) {
    var matchCount = 0;
    var item = mapFn ? mapFn(itemSrc) : itemSrc;
    (0, _iterator.each)(targetFilter, function (paramName, targetValue) {
      var value = item[paramName];

      if (value === undefined) {
        return;
      }

      if (match(value, targetValue)) {
        matchCount++;
        return;
      }

      matchCount = -1;
      return false;
    });

    if (matchCount < maxMatchCount) {
      return;
    }

    if (matchCount > maxMatchCount) {
      bestMatches.length = 0;
      maxMatchCount = matchCount;
    }

    bestMatches.push(itemSrc);
  });
  return bestMatches;
};

exports.findBestMatches = findBestMatches;

var match = function match(value, targetValue) {
  if (Array.isArray(value) && Array.isArray(targetValue)) {
    var mismatch = false;
    (0, _iterator.each)(value, function (index, valueItem) {
      if (valueItem !== targetValue[index]) {
        mismatch = true;
        return false;
      }
    });

    if (mismatch) {
      return false;
    }

    return true;
  }

  if (value === targetValue) {
    return true;
  }

  return false;
};

var splitPair = function splitPair(raw) {
  switch (_typeof(raw)) {
    case 'string':
      return raw.split(/\s+/, 2);

    case 'object':
      return [raw.x || raw.h, raw.y || raw.v];

    case 'number':
      return [raw];

    default:
      return raw;
  }
};

exports.splitPair = splitPair;

var normalizeKey = function normalizeKey(id) {
  var key = (0, _type.isString)(id) ? id : id.toString();
  var arr = key.match(/[^a-zA-Z0-9_]/g);
  arr && (0, _iterator.each)(arr, function (_, sign) {
    key = key.replace(sign, '__' + sign.charCodeAt() + '__');
  });
  return key;
};

exports.normalizeKey = normalizeKey;

var denormalizeKey = function denormalizeKey(key) {
  var arr = key.match(/__\d+__/g);
  arr && arr.forEach(function (char) {
    var charCode = parseInt(char.replace('__', ''));
    key = key.replace(char, String.fromCharCode(charCode));
  });
  return key;
};

exports.denormalizeKey = denormalizeKey;

var pairToObject = function pairToObject(raw, preventRound) {
  var pair = splitPair(raw);
  var h = preventRound ? parseFloat(pair && pair[0]) : parseInt(pair && pair[0], 10);
  var v = preventRound ? parseFloat(pair && pair[1]) : parseInt(pair && pair[1], 10);

  if (!isFinite(h)) {
    h = 0;
  }

  if (!isFinite(v)) {
    v = h;
  }

  return {
    h: h,
    v: v
  };
};

exports.pairToObject = pairToObject;

var getKeyHash = function getKeyHash(key) {
  if (key instanceof _guid.default) {
    return key.toString();
  } else if ((0, _type.isObject)(key) || Array.isArray(key)) {
    try {
      var keyHash = JSON.stringify(key);
      return keyHash === '{}' ? key : keyHash;
    } catch (e) {
      return key;
    }
  }

  return key;
};

exports.getKeyHash = getKeyHash;

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[[\]{}\-()*+?.\\^$|\s]/g, '\\$&');
};

exports.escapeRegExp = escapeRegExp;

var applyServerDecimalSeparator = function applyServerDecimalSeparator(value) {
  var separator = (0, _config.default)().serverDecimalSeparator;

  if ((0, _type.isDefined)(value)) {
    value = value.toString().replace('.', separator);
  }

  return value;
};

exports.applyServerDecimalSeparator = applyServerDecimalSeparator;

var noop = function noop() {};

exports.noop = noop;

var asyncNoop = function asyncNoop() {
  return new _deferred.Deferred().resolve().promise();
};

exports.asyncNoop = asyncNoop;

var grep = function grep(elements, checkFunction, invert) {
  var result = [];
  var check;
  var expectedCheck = !invert;

  for (var i = 0; i < elements.length; i++) {
    check = !!checkFunction(elements[i], i);

    if (check === expectedCheck) {
      result.push(elements[i]);
    }
  }

  return result;
};

exports.grep = grep;

var arraysEqualByValue = function arraysEqualByValue(array1, array2, depth) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (!equalByValue(array1[i], array2[i], depth + 1)) {
      return false;
    }
  }

  return true;
};

var objectsEqualByValue = function objectsEqualByValue(object1, object2, depth, strict) {
  for (var propertyName in object1) {
    if (Object.prototype.hasOwnProperty.call(object1, propertyName) && !equalByValue(object1[propertyName], object2[propertyName], depth + 1, strict)) {
      return false;
    }
  }

  for (var _propertyName in object2) {
    if (!(_propertyName in object1)) {
      return false;
    }
  }

  return true;
};

var maxEqualityDepth = 3;

var equalByValue = function equalByValue(object1, object2) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var strict = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  object1 = (0, _data.toComparable)(object1, true);
  object2 = (0, _data.toComparable)(object2, true); // eslint-disable-next-line eqeqeq

  var comparisonResult = strict ? object1 === object2 : object1 == object2;

  if (comparisonResult || depth >= maxEqualityDepth) {
    return true;
  }

  if ((0, _type.isObject)(object1) && (0, _type.isObject)(object2)) {
    return objectsEqualByValue(object1, object2, depth, strict);
  } else if (Array.isArray(object1) && Array.isArray(object2)) {
    return arraysEqualByValue(object1, object2, depth);
  }

  return false;
};

exports.equalByValue = equalByValue;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("./devextreme-angular-core.js");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/events_engine.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _event_registrator_callbacks = _interopRequireDefault(__webpack_require__(41));

var _extend = __webpack_require__(3);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _window = __webpack_require__(6);

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _type = __webpack_require__(1);

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _errors = _interopRequireDefault(__webpack_require__(7));

var _weak_map = _interopRequireDefault(__webpack_require__(29));

var _hook_touch_props = _interopRequireDefault(__webpack_require__(66));

var _call_once = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var window = (0, _window.getWindow)();
var EMPTY_EVENT_NAME = 'dxEmptyEventType';
var NATIVE_EVENTS_TO_SUBSCRIBE = {
  'mouseenter': 'mouseover',
  'mouseleave': 'mouseout',
  'pointerenter': 'pointerover',
  'pointerleave': 'pointerout'
};
var NATIVE_EVENTS_TO_TRIGGER = {
  'focusin': 'focus',
  'focusout': 'blur'
};
var NO_BUBBLE_EVENTS = ['blur', 'focus', 'load'];
var forcePassiveFalseEventNames = ['touchmove', 'wheel', 'mousewheel', 'touchstart'];

function matchesSafe(target, selector) {
  return !(0, _type.isWindow)(target) && target.nodeName !== '#document' && _dom_adapter.default.elementMatches(target, selector);
}

var elementDataMap = new _weak_map.default();
var guid = 0;
var skipEvent;

var special = function () {
  var specialData = {};

  _event_registrator_callbacks.default.add(function (eventName, eventObject) {
    specialData[eventName] = eventObject;
  });

  return {
    getField: function getField(eventName, field) {
      return specialData[eventName] && specialData[eventName][field];
    },
    callMethod: function callMethod(eventName, methodName, context, args) {
      return specialData[eventName] && specialData[eventName][methodName] && specialData[eventName][methodName].apply(context, args);
    }
  };
}();

var eventsEngine = (0, _dependency_injector.default)({
  on: getHandler(normalizeOnArguments(iterate(function (element, eventName, selector, data, handler) {
    var handlersController = getHandlersController(element, eventName);
    handlersController.addHandler(handler, selector, data);
  }))),
  one: getHandler(normalizeOnArguments(function (element, eventName, selector, data, handler) {
    var oneTimeHandler = function oneTimeHandler() {
      eventsEngine.off(element, eventName, selector, oneTimeHandler);
      handler.apply(this, arguments);
    };

    eventsEngine.on(element, eventName, selector, data, oneTimeHandler);
  })),
  off: getHandler(normalizeOffArguments(iterate(function (element, eventName, selector, handler) {
    var handlersController = getHandlersController(element, eventName);
    handlersController.removeHandler(handler, selector);
  }))),
  trigger: getHandler(normalizeTriggerArguments(function (element, event, extraParameters) {
    var eventName = event.type;
    var handlersController = getHandlersController(element, event.type);
    special.callMethod(eventName, 'trigger', element, [event, extraParameters]);
    handlersController.callHandlers(event, extraParameters);
    var noBubble = special.getField(eventName, 'noBubble') || event.isPropagationStopped() || NO_BUBBLE_EVENTS.indexOf(eventName) !== -1;

    if (!noBubble) {
      var parents = [];

      var getParents = function getParents(element) {
        var parent = element.parentNode;

        if (parent) {
          parents.push(parent);
          getParents(parent);
        }
      };

      getParents(element);
      parents.push(window);
      var i = 0;

      while (parents[i] && !event.isPropagationStopped()) {
        var parentDataByEvent = getHandlersController(parents[i], event.type);
        parentDataByEvent.callHandlers((0, _extend.extend)(event, {
          currentTarget: parents[i]
        }), extraParameters);
        i++;
      }
    }

    if (element.nodeType || (0, _type.isWindow)(element)) {
      special.callMethod(eventName, '_default', element, [event, extraParameters]);
      callNativeMethod(eventName, element);
    }
  })),
  triggerHandler: getHandler(normalizeTriggerArguments(function (element, event, extraParameters) {
    var handlersController = getHandlersController(element, event.type);
    handlersController.callHandlers(event, extraParameters);
  }))
});

function applyForEach(args, method) {
  var element = args[0];

  if (!element) {
    return;
  }

  if (_dom_adapter.default.isNode(element) || (0, _type.isWindow)(element)) {
    method.apply(eventsEngine, args);
  } else if (!(0, _type.isString)(element) && 'length' in element) {
    var itemArgs = Array.prototype.slice.call(args, 0);
    Array.prototype.forEach.call(element, function (itemElement) {
      itemArgs[0] = itemElement;
      applyForEach(itemArgs, method);
    });
  } else {
    throw _errors.default.Error('E0025');
  }
}

function getHandler(method) {
  return function () {
    applyForEach(arguments, method);
  };
}

function detectPassiveEventHandlersSupport() {
  var isSupported = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        isSupported = true;
        return true;
      }
    });
    window.addEventListener('test', null, options);
  } catch (e) {}

  return isSupported;
}

var passiveEventHandlersSupported = (0, _call_once.default)(detectPassiveEventHandlersSupport);

var contains = function contains(container, element) {
  if ((0, _type.isWindow)(container)) {
    return contains(container.document, element);
  }

  return container.contains ? container.contains(element) : !!(element.compareDocumentPosition(container) & element.DOCUMENT_POSITION_CONTAINS);
};

function getHandlersController(element, eventName) {
  var elementData = elementDataMap.get(element);
  eventName = eventName || '';
  var eventNameParts = eventName.split('.');
  var namespaces = eventNameParts.slice(1);
  var eventNameIsDefined = !!eventNameParts[0];
  eventName = eventNameParts[0] || EMPTY_EVENT_NAME;

  if (!elementData) {
    elementData = {};
    elementDataMap.set(element, elementData);
  }

  if (!elementData[eventName]) {
    elementData[eventName] = {
      handleObjects: [],
      nativeHandler: null
    };
  }

  var eventData = elementData[eventName];
  return {
    addHandler: function addHandler(handler, selector, data) {
      var callHandler = function callHandler(e, extraParameters) {
        var handlerArgs = [e];
        var target = e.currentTarget;
        var relatedTarget = e.relatedTarget;
        var secondaryTargetIsInside;
        var result;

        if (eventName in NATIVE_EVENTS_TO_SUBSCRIBE) {
          secondaryTargetIsInside = relatedTarget && target && (relatedTarget === target || contains(target, relatedTarget));
        }

        if (extraParameters !== undefined) {
          handlerArgs.push(extraParameters);
        }

        special.callMethod(eventName, 'handle', element, [e, data]);

        if (!secondaryTargetIsInside) {
          result = handler.apply(target, handlerArgs);
        }

        if (result === false) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      var wrappedHandler = function wrappedHandler(e, extraParameters) {
        if (skipEvent && e.type === skipEvent) {
          return;
        }

        e.data = data;
        e.delegateTarget = element;

        if (selector) {
          var currentTarget = e.target;

          while (currentTarget && currentTarget !== element) {
            if (matchesSafe(currentTarget, selector)) {
              e.currentTarget = currentTarget;
              callHandler(e, extraParameters);
            }

            currentTarget = currentTarget.parentNode;
          }
        } else {
          e.currentTarget = e.delegateTarget || e.target;
          callHandler(e, extraParameters);
        }
      };

      var handleObject = {
        handler: handler,
        wrappedHandler: wrappedHandler,
        selector: selector,
        type: eventName,
        data: data,
        namespace: namespaces.join('.'),
        namespaces: namespaces,
        guid: ++guid
      };
      eventData.handleObjects.push(handleObject);
      var firstHandlerForTheType = eventData.handleObjects.length === 1;
      var shouldAddNativeListener = firstHandlerForTheType && eventNameIsDefined;
      var nativeListenerOptions;

      if (shouldAddNativeListener) {
        shouldAddNativeListener = !special.callMethod(eventName, 'setup', element, [data, namespaces, handler]);
      }

      if (shouldAddNativeListener) {
        eventData.nativeHandler = getNativeHandler(eventName);

        if (passiveEventHandlersSupported() && forcePassiveFalseEventNames.indexOf(eventName) > -1) {
          nativeListenerOptions = {
            passive: false
          };
        }

        eventData.removeListener = _dom_adapter.default.listen(element, NATIVE_EVENTS_TO_SUBSCRIBE[eventName] || eventName, eventData.nativeHandler, nativeListenerOptions);
      }

      special.callMethod(eventName, 'add', element, [handleObject]);
    },
    removeHandler: function removeHandler(handler, selector) {
      var removeByEventName = function removeByEventName(eventName) {
        var eventData = elementData[eventName];

        if (!eventData.handleObjects.length) {
          delete elementData[eventName];
          return;
        }

        var removedHandler;
        eventData.handleObjects = eventData.handleObjects.filter(function (handleObject) {
          var skip = namespaces.length && !isSubset(handleObject.namespaces, namespaces) || handler && handleObject.handler !== handler || selector && handleObject.selector !== selector;

          if (!skip) {
            removedHandler = handleObject.handler;
            special.callMethod(eventName, 'remove', element, [handleObject]);
          }

          return skip;
        });
        var lastHandlerForTheType = !eventData.handleObjects.length;
        var shouldRemoveNativeListener = lastHandlerForTheType && eventName !== EMPTY_EVENT_NAME;

        if (shouldRemoveNativeListener) {
          special.callMethod(eventName, 'teardown', element, [namespaces, removedHandler]);

          if (eventData.nativeHandler) {
            eventData.removeListener();
          }

          delete elementData[eventName];
        }
      };

      if (eventNameIsDefined) {
        removeByEventName(eventName);
      } else {
        for (var name in elementData) {
          removeByEventName(name);
        }
      }

      var elementDataIsEmpty = Object.keys(elementData).length === 0;

      if (elementDataIsEmpty) {
        elementDataMap.delete(element);
      }
    },
    callHandlers: function callHandlers(event, extraParameters) {
      var forceStop = false;

      var handleCallback = function handleCallback(handleObject) {
        if (forceStop) {
          return;
        }

        if (!namespaces.length || isSubset(handleObject.namespaces, namespaces)) {
          handleObject.wrappedHandler(event, extraParameters);
          forceStop = event.isImmediatePropagationStopped();
        }
      };

      eventData.handleObjects.forEach(handleCallback);

      if (namespaces.length && elementData[EMPTY_EVENT_NAME]) {
        elementData[EMPTY_EVENT_NAME].handleObjects.forEach(handleCallback);
      }
    }
  };
}

function getNativeHandler(subscribeName) {
  return function (event, extraParameters) {
    var handlersController = getHandlersController(this, subscribeName);
    event = eventsEngine.Event(event);
    handlersController.callHandlers(event, extraParameters);
  };
}

function isSubset(original, checked) {
  for (var i = 0; i < checked.length; i++) {
    if (original.indexOf(checked[i]) < 0) return false;
  }

  return true;
}

function normalizeOnArguments(callback) {
  return function (element, eventName, selector, data, handler) {
    if (!handler) {
      handler = data;
      data = undefined;
    }

    if (typeof selector !== 'string') {
      data = selector;
      selector = undefined;
    }

    if (!handler && typeof eventName === 'string') {
      handler = data || selector;
      selector = undefined;
      data = undefined;
    }

    callback(element, eventName, selector, data, handler);
  };
}

function normalizeOffArguments(callback) {
  return function (element, eventName, selector, handler) {
    if (typeof selector === 'function') {
      handler = selector;
      selector = undefined;
    }

    callback(element, eventName, selector, handler);
  };
}

function normalizeTriggerArguments(callback) {
  return function (element, src, extraParameters) {
    if (typeof src === 'string') {
      src = {
        type: src
      };
    }

    if (!src.target) {
      src.target = element;
    }

    src.currentTarget = element;

    if (!src.delegateTarget) {
      src.delegateTarget = element;
    }

    if (!src.type && src.originalEvent) {
      src.type = src.originalEvent.type;
    }

    callback(element, src instanceof eventsEngine.Event ? src : eventsEngine.Event(src), extraParameters);
  };
}

function normalizeEventArguments(callback) {
  return function (src, config) {
    if (!(this instanceof eventsEngine.Event)) {
      return new eventsEngine.Event(src, config);
    }

    if (!src) {
      src = {};
    }

    if (typeof src === 'string') {
      src = {
        type: src
      };
    }

    if (!config) {
      config = {};
    }

    callback.call(this, src, config);
  };
}

function iterate(callback) {
  var iterateEventNames = function iterateEventNames(element, eventName) {
    if (eventName && eventName.indexOf(' ') > -1) {
      var args = Array.prototype.slice.call(arguments, 0);
      eventName.split(' ').forEach(function (eventName) {
        args[1] = eventName;
        callback.apply(this, args);
      });
    } else {
      callback.apply(this, arguments);
    }
  };

  return function (element, eventName) {
    if (_typeof(eventName) === 'object') {
      var args = Array.prototype.slice.call(arguments, 0);

      for (var name in eventName) {
        args[1] = name;
        args[args.length - 1] = eventName[name];
        iterateEventNames.apply(this, args);
      }
    } else {
      iterateEventNames.apply(this, arguments);
    }
  };
}

function callNativeMethod(eventName, element) {
  var nativeMethodName = NATIVE_EVENTS_TO_TRIGGER[eventName] || eventName;

  var isLinkClickEvent = function isLinkClickEvent(eventName, element) {
    return eventName === 'click' && element.localName === 'a';
  };

  if (isLinkClickEvent(eventName, element)) return;

  if ((0, _type.isFunction)(element[nativeMethodName])) {
    skipEvent = eventName;
    element[nativeMethodName]();
    skipEvent = undefined;
  }
}

function calculateWhich(event) {
  var setForMouseEvent = function setForMouseEvent(event) {
    var mouseEventRegex = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    return !event.which && event.button !== undefined && mouseEventRegex.test(event.type);
  };

  var setForKeyEvent = function setForKeyEvent(event) {
    return event.which == null && event.type.indexOf('key') === 0;
  };

  if (setForKeyEvent(event)) {
    return event.charCode != null ? event.charCode : event.keyCode;
  }

  if (setForMouseEvent(event)) {
    var whichByButton = {
      1: 1,
      2: 3,
      3: 1,
      4: 2
    };
    return whichByButton[event.button];
  }

  return event.which;
}

function initEvent(EventClass) {
  if (EventClass) {
    eventsEngine.Event = EventClass;
    eventsEngine.Event.prototype = EventClass.prototype;
  }
}

initEvent(normalizeEventArguments(function (src, config) {
  var that = this;
  var propagationStopped = false;
  var immediatePropagationStopped = false;
  var defaultPrevented = false;
  (0, _extend.extend)(that, src);

  if (src instanceof eventsEngine.Event || (0, _window.hasWindow)() && src instanceof window.Event) {
    that.originalEvent = src;
    that.currentTarget = undefined;
  }

  if (!(src instanceof eventsEngine.Event)) {
    (0, _extend.extend)(that, {
      isPropagationStopped: function isPropagationStopped() {
        return !!(propagationStopped || that.originalEvent && that.originalEvent.propagationStopped);
      },
      stopPropagation: function stopPropagation() {
        propagationStopped = true;
        that.originalEvent && that.originalEvent.stopPropagation();
      },
      isImmediatePropagationStopped: function isImmediatePropagationStopped() {
        return immediatePropagationStopped;
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.stopPropagation();
        immediatePropagationStopped = true;
        that.originalEvent && that.originalEvent.stopImmediatePropagation();
      },
      isDefaultPrevented: function isDefaultPrevented() {
        return !!(defaultPrevented || that.originalEvent && that.originalEvent.defaultPrevented);
      },
      preventDefault: function preventDefault() {
        defaultPrevented = true;
        that.originalEvent && that.originalEvent.preventDefault();
      }
    });
  }

  addProperty('which', calculateWhich, that);

  if (src.type.indexOf('touch') === 0) {
    delete config.pageX;
    delete config.pageY;
  }

  (0, _extend.extend)(that, config);
  that.guid = ++guid;
}));

function addProperty(propName, hook, eventInstance) {
  Object.defineProperty(eventInstance || eventsEngine.Event.prototype, propName, {
    enumerable: true,
    configurable: true,
    get: function get() {
      return this.originalEvent && hook(this.originalEvent);
    },
    set: function set(value) {
      Object.defineProperty(this, propName, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
      });
    }
  });
}

(0, _hook_touch_props.default)(addProperty);
var beforeSetStrategy = (0, _callbacks.default)();
var afterSetStrategy = (0, _callbacks.default)();

eventsEngine.set = function (engine) {
  beforeSetStrategy.fire();
  eventsEngine.inject(engine);
  initEvent(engine.Event);
  afterSetStrategy.fire();
};

eventsEngine.subscribeGlobal = function () {
  applyForEach(arguments, normalizeOnArguments(function () {
    var args = arguments;
    eventsEngine.on.apply(this, args);
    beforeSetStrategy.add(function () {
      var offArgs = Array.prototype.slice.call(args, 0);
      offArgs.splice(3, 1);
      eventsEngine.off.apply(this, offArgs);
    });
    afterSetStrategy.add(function () {
      eventsEngine.on.apply(this, args);
    });
  }));
};

eventsEngine.forcePassiveFalseEventNames = forcePassiveFalseEventNames;
eventsEngine.passiveEventHandlersSupported = passiveEventHandlersSupported;
var _default = eventsEngine;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/class.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _errors = _interopRequireDefault(__webpack_require__(7));

var _type = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapOverridden = function wrapOverridden(baseProto, methodName, method) {
  return function () {
    var prevCallBase = this.callBase;
    this.callBase = baseProto[methodName];

    try {
      return method.apply(this, arguments);
    } finally {
      this.callBase = prevCallBase;
    }
  };
};

var clonePrototype = function clonePrototype(obj) {
  var func = function func() {};

  func.prototype = obj.prototype;
  return new func();
};

var redefine = function redefine(members) {
  var that = this;
  var overridden;
  var memberName;
  var member;

  if (!members) {
    return that;
  }

  for (memberName in members) {
    member = members[memberName];
    overridden = typeof that.prototype[memberName] === 'function' && typeof member === 'function';
    that.prototype[memberName] = overridden ? wrapOverridden(that.parent.prototype, memberName, member) : member;
  }

  return that;
};

var include = function include() {
  var classObj = this;
  var argument;
  var name;
  var i; // NOTE: For ES6 classes. They don't have _includedCtors/_includedPostCtors
  // properties and get them from the ancestor class.

  var hasClassObjOwnProperty = Object.prototype.hasOwnProperty.bind(classObj);
  var isES6Class = !hasClassObjOwnProperty('_includedCtors') && !hasClassObjOwnProperty('_includedPostCtors');

  if (isES6Class) {
    classObj._includedCtors = classObj._includedCtors.slice(0);
    classObj._includedPostCtors = classObj._includedPostCtors.slice(0);
  }

  for (i = 0; i < arguments.length; i++) {
    argument = arguments[i];

    if (argument.ctor) {
      classObj._includedCtors.push(argument.ctor);
    }

    if (argument.postCtor) {
      classObj._includedPostCtors.push(argument.postCtor);
    }

    for (name in argument) {
      if (name === 'ctor' || name === 'postCtor') {
        continue;
      }

      classObj.prototype[name] = argument[name];
    }
  }

  return classObj;
};

var subclassOf = function subclassOf(parentClass) {
  var hasParentProperty = Object.prototype.hasOwnProperty.bind(this)('parent');
  var isES6Class = !hasParentProperty && this.parent;

  if (isES6Class) {
    var baseClass = Object.getPrototypeOf(this);
    return baseClass === parentClass || baseClass.subclassOf(parentClass);
  } else {
    if (this.parent === parentClass) {
      return true;
    }

    if (!this.parent || !this.parent.subclassOf) {
      return false;
    }

    return this.parent.subclassOf(parentClass);
  }
};

var abstract = function abstract() {
  throw _errors.default.Error('E0001');
};

var copyStatic = function () {
  var hasOwn = Object.prototype.hasOwnProperty;
  return function (source, destination) {
    for (var key in source) {
      if (!hasOwn.call(source, key)) {
        return;
      }

      destination[key] = source[key];
    }
  };
}();

var classImpl = function classImpl() {};

classImpl.inherit = function (members) {
  var inheritor = function inheritor() {
    if (!this || (0, _type.isWindow)(this) || typeof this.constructor !== 'function') {
      throw _errors.default.Error('E0003');
    }

    var instance = this;
    var ctor = instance.ctor;
    var includedCtors = instance.constructor._includedCtors;
    var includedPostCtors = instance.constructor._includedPostCtors;
    var i;

    for (i = 0; i < includedCtors.length; i++) {
      includedCtors[i].call(instance);
    }

    if (ctor) {
      ctor.apply(instance, arguments);
    }

    for (i = 0; i < includedPostCtors.length; i++) {
      includedPostCtors[i].call(instance);
    }
  };

  inheritor.prototype = clonePrototype(this);
  copyStatic(this, inheritor);
  inheritor.inherit = this.inherit;
  inheritor.abstract = abstract;
  inheritor.redefine = redefine;
  inheritor.include = include;
  inheritor.subclassOf = subclassOf;
  inheritor.parent = this;
  inheritor._includedCtors = this._includedCtors ? this._includedCtors.slice(0) : [];
  inheritor._includedPostCtors = this._includedPostCtors ? this._includedPostCtors.slice(0) : [];
  inheritor.prototype.constructor = inheritor;
  inheritor.redefine(members);
  return inheritor;
};

classImpl.abstract = abstract;
var _default = classImpl;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var Callback = function Callback(options) {
  this._options = options || {};
  this._list = [];
  this._queue = [];
  this._firing = false;
  this._fired = false;
  this._firingIndexes = [];
};

Callback.prototype._fireCore = function (context, args) {
  var firingIndexes = this._firingIndexes;
  var list = this._list;
  var stopOnFalse = this._options.stopOnFalse;
  var step = firingIndexes.length;

  for (firingIndexes[step] = 0; firingIndexes[step] < list.length; firingIndexes[step]++) {
    var result = list[firingIndexes[step]].apply(context, args);

    if (result === false && stopOnFalse) {
      break;
    }
  }

  firingIndexes.pop();
};

Callback.prototype.add = function (fn) {
  if (typeof fn === 'function' && (!this._options.unique || !this.has(fn))) {
    this._list.push(fn);
  }

  return this;
};

Callback.prototype.remove = function (fn) {
  var list = this._list;
  var firingIndexes = this._firingIndexes;
  var index = list.indexOf(fn);

  if (index > -1) {
    list.splice(index, 1);

    if (this._firing && firingIndexes.length) {
      for (var step = 0; step < firingIndexes.length; step++) {
        if (index <= firingIndexes[step]) {
          firingIndexes[step]--;
        }
      }
    }
  }

  return this;
};

Callback.prototype.has = function (fn) {
  var list = this._list;
  return fn ? list.indexOf(fn) > -1 : !!list.length;
};

Callback.prototype.empty = function (fn) {
  this._list = [];
  return this;
};

Callback.prototype.fireWith = function (context, args) {
  var queue = this._queue;
  args = args || [];
  args = args.slice ? args.slice() : args;

  if (this._options.syncStrategy) {
    this._firing = true;

    this._fireCore(context, args);
  } else {
    queue.push([context, args]);

    if (this._firing) {
      return;
    }

    this._firing = true;

    while (queue.length) {
      var memory = queue.shift();

      this._fireCore(memory[0], memory[1]);
    }
  }

  this._firing = false;
  this._fired = true;
  return this;
};

Callback.prototype.fire = function () {
  this.fireWith(this, arguments);
};

Callback.prototype.fired = function () {
  return this._fired;
};

var Callbacks = function Callbacks(options) {
  return new Callback(options);
};

var _default = Callbacks;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/utils/index.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.addNamespace = exports.getChar = exports.normalizeKeyName = exports.fireEvent = exports.createEvent = exports.setEventFixMethod = exports.needSkipEvent = exports.stopEventsSkipping = exports.forceSkipEvents = exports.hasTouches = exports.eventDelta = exports.eventData = exports.isFakeClickEvent = exports.isKeyboardEvent = exports.isTouchEvent = exports.isDxMouseWheelEvent = exports.isMouseEvent = exports.isPointerEvent = exports.eventSource = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _add_namespace = _interopRequireDefault(__webpack_require__(101));

var _events_engine = _interopRequireWildcard(__webpack_require__(10));

var _iterator = __webpack_require__(4);

var _extend = __webpack_require__(3);

var _selectors = __webpack_require__(55);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY_MAP = {
  'backspace': 'backspace',
  'tab': 'tab',
  'enter': 'enter',
  'escape': 'escape',
  'pageup': 'pageUp',
  'pagedown': 'pageDown',
  'end': 'end',
  'home': 'home',
  'arrowleft': 'leftArrow',
  'arrowup': 'upArrow',
  'arrowright': 'rightArrow',
  'arrowdown': 'downArrow',
  'delete': 'del',
  ' ': 'space',
  'f': 'F',
  'a': 'A',
  '*': 'asterisk',
  '-': 'minus',
  'alt': 'alt',
  'control': 'control',
  'shift': 'shift',
  // IE11:
  'left': 'leftArrow',
  'up': 'upArrow',
  'right': 'rightArrow',
  'down': 'downArrow',
  'multiply': 'asterisk',
  'spacebar': 'space',
  'del': 'del',
  'subtract': 'minus',
  'esc': 'escape'
};
var LEGACY_KEY_CODES = {
  // iOS 10.2 and lower didn't supports KeyboardEvent.key
  '8': 'backspace',
  '9': 'tab',
  '13': 'enter',
  '27': 'escape',
  '33': 'pageUp',
  '34': 'pageDown',
  '35': 'end',
  '36': 'home',
  '37': 'leftArrow',
  '38': 'upArrow',
  '39': 'rightArrow',
  '40': 'downArrow',
  '46': 'del',
  '32': 'space',
  '70': 'F',
  '65': 'A',
  '106': 'asterisk',
  '109': 'minus',
  '189': 'minus',
  '173': 'minus',
  '16': 'shift',
  '17': 'control',
  '18': 'alt'
};
var EVENT_SOURCES_REGEX = {
  dx: /^dx/i,
  mouse: /(mouse|wheel)/i,
  touch: /^touch/i,
  keyboard: /^key/i,
  pointer: /^(ms)?pointer/i
};

var fixMethod = function fixMethod(e) {
  return e;
};

var copyEvent = function copyEvent(originalEvent) {
  return fixMethod((0, _events_engine.Event)(originalEvent, originalEvent), originalEvent);
};

var isDxEvent = function isDxEvent(e) {
  return eventSource(e) === 'dx';
};

var isNativeMouseEvent = function isNativeMouseEvent(e) {
  return eventSource(e) === 'mouse';
};

var isNativeTouchEvent = function isNativeTouchEvent(e) {
  return eventSource(e) === 'touch';
};

var eventSource = function eventSource(_ref) {
  var type = _ref.type;
  var result = 'other';
  (0, _iterator.each)(EVENT_SOURCES_REGEX, function (key) {
    if (this.test(type)) {
      result = key;
      return false;
    }
  });
  return result;
};

exports.eventSource = eventSource;

var isPointerEvent = function isPointerEvent(e) {
  return eventSource(e) === 'pointer';
};

exports.isPointerEvent = isPointerEvent;

var isMouseEvent = function isMouseEvent(e) {
  return isNativeMouseEvent(e) || (isPointerEvent(e) || isDxEvent(e)) && e.pointerType === 'mouse';
};

exports.isMouseEvent = isMouseEvent;

var isDxMouseWheelEvent = function isDxMouseWheelEvent(e) {
  return e && e.type === 'dxmousewheel';
};

exports.isDxMouseWheelEvent = isDxMouseWheelEvent;

var isTouchEvent = function isTouchEvent(e) {
  return isNativeTouchEvent(e) || (isPointerEvent(e) || isDxEvent(e)) && e.pointerType === 'touch';
};

exports.isTouchEvent = isTouchEvent;

var isKeyboardEvent = function isKeyboardEvent(e) {
  return eventSource(e) === 'keyboard';
};

exports.isKeyboardEvent = isKeyboardEvent;

var isFakeClickEvent = function isFakeClickEvent(_ref2) {
  var screenX = _ref2.screenX,
      offsetX = _ref2.offsetX,
      pageX = _ref2.pageX;
  return screenX === 0 && !offsetX && pageX === 0;
};

exports.isFakeClickEvent = isFakeClickEvent;

var eventData = function eventData(_ref3) {
  var pageX = _ref3.pageX,
      pageY = _ref3.pageY,
      timeStamp = _ref3.timeStamp;
  return {
    x: pageX,
    y: pageY,
    time: timeStamp
  };
};

exports.eventData = eventData;

var eventDelta = function eventDelta(from, to) {
  return {
    x: to.x - from.x,
    y: to.y - from.y,
    time: to.time - from.time || 1
  };
};

exports.eventDelta = eventDelta;

var hasTouches = function hasTouches(e) {
  var originalEvent = e.originalEvent,
      pointers = e.pointers;

  if (isNativeTouchEvent(e)) {
    return (originalEvent.touches || []).length;
  }

  if (isDxEvent(e)) {
    return (pointers || []).length;
  }

  return 0;
}; // TODO: for tests


exports.hasTouches = hasTouches;
var skipEvents = false;

var forceSkipEvents = function forceSkipEvents() {
  return skipEvents = true;
};

exports.forceSkipEvents = forceSkipEvents;

var stopEventsSkipping = function stopEventsSkipping() {
  return skipEvents = false;
};

exports.stopEventsSkipping = stopEventsSkipping;

var needSkipEvent = function needSkipEvent(e) {
  // TODO: for tests
  if (skipEvents) {
    return true;
  } // TODO: this checking used in swipeable first move handler. is it correct?


  var target = e.target;
  var $target = (0, _renderer.default)(target);
  var touchInInput = $target.is('input, textarea, select');

  if ($target.is('.dx-skip-gesture-event *, .dx-skip-gesture-event')) {
    return true;
  }

  if (isDxMouseWheelEvent(e)) {
    var isTextArea = $target.is('textarea') && $target.hasClass('dx-texteditor-input');

    if (isTextArea) {
      return false;
    }

    var isContentEditable = target.isContentEditable || target.hasAttribute('contenteditable');

    if (isContentEditable) {
      return false;
    }

    var isInputFocused = $target.is('input[type=\'number\'], textarea, select') && $target.is(':focus');
    return isInputFocused;
  }

  if (isMouseEvent(e)) {
    return touchInInput || e.which > 1; // only left mouse button
  }

  if (isTouchEvent(e)) {
    return touchInInput && (0, _selectors.focused)($target);
  }
};

exports.needSkipEvent = needSkipEvent;

var setEventFixMethod = function setEventFixMethod(func) {
  return fixMethod = func;
};

exports.setEventFixMethod = setEventFixMethod;

var createEvent = function createEvent(originalEvent, args) {
  var event = copyEvent(originalEvent);
  args && (0, _extend.extend)(event, args);
  return event;
};

exports.createEvent = createEvent;

var fireEvent = function fireEvent(props) {
  var originalEvent = props.originalEvent,
      delegateTarget = props.delegateTarget;
  var event = createEvent(originalEvent, props);

  _events_engine.default.trigger(delegateTarget || event.target, event);

  return event;
};

exports.fireEvent = fireEvent;

var normalizeKeyName = function normalizeKeyName(_ref4) {
  var key = _ref4.key,
      which = _ref4.which;
  var isKeySupported = !!key;
  key = isKeySupported ? key : which;

  if (key) {
    if (isKeySupported) {
      key = KEY_MAP[key.toLowerCase()] || key;
    } else {
      key = LEGACY_KEY_CODES[key] || String.fromCharCode(key);
    }

    return key;
  }
};

exports.normalizeKeyName = normalizeKeyName;

var getChar = function getChar(_ref5) {
  var key = _ref5.key,
      which = _ref5.which;
  return key || String.fromCharCode(which);
};

exports.getChar = getChar;
var addNamespace = _add_namespace.default;
exports.addNamespace = addNamespace;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/array.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.groupBy = exports.find = exports.merge = exports.normalizeIndexes = exports.removeDuplicates = exports.intersection = exports.inArray = exports.wrapToArray = exports.isEmpty = void 0;

var _type = __webpack_require__(1);

var _iterator = __webpack_require__(4);

var _object = __webpack_require__(30);

var _config = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isEmpty = function isEmpty(entity) {
  return Array.isArray(entity) && !entity.length;
};

exports.isEmpty = isEmpty;

var wrapToArray = function wrapToArray(entity) {
  return Array.isArray(entity) ? entity : [entity];
};

exports.wrapToArray = wrapToArray;

var inArray = function inArray(value, object) {
  if (!object) {
    return -1;
  }

  var array = Array.isArray(object) ? object : object.toArray();
  return array.indexOf(value);
};

exports.inArray = inArray;

var intersection = function intersection(a, b) {
  if (!Array.isArray(a) || a.length === 0 || !Array.isArray(b) || b.length === 0) {
    return [];
  }

  var result = [];
  (0, _iterator.each)(a, function (_, value) {
    var index = inArray(value, b);

    if (index !== -1) {
      result.push(value);
    }
  });
  return result;
};

exports.intersection = intersection;

var removeDuplicates = function removeDuplicates(from, what) {
  if (!Array.isArray(from) || from.length === 0) {
    return [];
  }

  if (!Array.isArray(what) || what.length === 0) {
    return from.slice();
  }

  var result = [];
  (0, _iterator.each)(from, function (_, value) {
    var index = inArray(value, what);

    if (index === -1) {
      result.push(value);
    }
  });
  return result;
};

exports.removeDuplicates = removeDuplicates;

var normalizeIndexes = function normalizeIndexes(items, indexParameterName, currentItem, needIndexCallback) {
  var indexedItems = {};
  var parameterIndex = 0;
  var useLegacyVisibleIndex = (0, _config.default)().useLegacyVisibleIndex;
  (0, _iterator.each)(items, function (index, item) {
    index = item[indexParameterName];

    if (index >= 0) {
      indexedItems[index] = indexedItems[index] || [];

      if (item === currentItem) {
        indexedItems[index].unshift(item);
      } else {
        indexedItems[index].push(item);
      }
    } else {
      item[indexParameterName] = undefined;
    }
  });

  if (!useLegacyVisibleIndex) {
    (0, _iterator.each)(items, function () {
      if (!(0, _type.isDefined)(this[indexParameterName]) && (!needIndexCallback || needIndexCallback(this))) {
        while (indexedItems[parameterIndex]) {
          parameterIndex++;
        }

        indexedItems[parameterIndex] = [this];
        parameterIndex++;
      }
    });
  }

  parameterIndex = 0;
  (0, _object.orderEach)(indexedItems, function (index, items) {
    (0, _iterator.each)(items, function () {
      if (index >= 0) {
        this[indexParameterName] = parameterIndex++;
      }
    });
  });

  if (useLegacyVisibleIndex) {
    (0, _iterator.each)(items, function () {
      if (!(0, _type.isDefined)(this[indexParameterName]) && (!needIndexCallback || needIndexCallback(this))) {
        this[indexParameterName] = parameterIndex++;
      }
    });
  }

  return parameterIndex;
};

exports.normalizeIndexes = normalizeIndexes;

var merge = function merge(array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    array1[array1.length] = array2[i];
  }

  return array1;
};

exports.merge = merge;

var find = function find(array, condition) {
  for (var i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      return array[i];
    }
  }
};

exports.find = find;

var groupBy = function groupBy(array, cb) {
  return array.reduce(function (result, item) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, cb(item), [].concat(_toConsumableArray(result[cb(item)] || []), [item])));
  }, {});
};

exports.groupBy = groupBy;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/devices.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _window = __webpack_require__(6);

var _extend = __webpack_require__(3);

var _type = __webpack_require__(1);

var _iterator = __webpack_require__(4);

var _errors = _interopRequireDefault(__webpack_require__(7));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _resize_callbacks = _interopRequireDefault(__webpack_require__(45));

var _events_strategy = __webpack_require__(32);

var _storage = __webpack_require__(68);

var _view_port = __webpack_require__(46);

var _config = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var navigator = (0, _window.getNavigator)();
var window = (0, _window.getWindow)();
var KNOWN_UA_TABLE = {
  'iPhone': 'iPhone',
  'iPhone5': 'iPhone',
  'iPhone6': 'iPhone',
  'iPhone6plus': 'iPhone',
  'iPad': 'iPad',
  'iPadMini': 'iPad Mini',
  'androidPhone': 'Android Mobile',
  'androidTablet': 'Android',
  'msSurface': 'Windows ARM Tablet PC',
  'desktop': 'desktop'
};
/**
* @name Device
* @section commonObjectStructures
* @type object
* @namespace DevExpress
* @module core/devices
* @export default
*/

var DEFAULT_DEVICE = {
  deviceType: 'desktop',
  platform: 'generic',
  version: [],
  phone: false,
  tablet: false,
  android: false,
  ios: false,
  generic: true,
  grade: 'A',
  // TODO: For internal use (draft, do not document these options!)
  mac: false
};
var uaParsers = {
  generic: function generic(userAgent) {
    var isPhone = /windows phone/i.test(userAgent) || userAgent.match(/WPDesktop/);
    var isTablet = !isPhone && /Windows(.*)arm(.*)Tablet PC/i.test(userAgent);
    var isDesktop = !isPhone && !isTablet && /msapphost/i.test(userAgent);
    var isMac = /((intel|ppc) mac os x)/.test(userAgent.toLowerCase());

    if (!(isPhone || isTablet || isDesktop || isMac)) {
      return;
    }

    return {
      deviceType: isPhone ? 'phone' : isTablet ? 'tablet' : 'desktop',
      platform: 'generic',
      version: [],
      grade: 'A',
      mac: isMac
    };
  },
  ios: function ios(userAgent) {
    if (!/ip(hone|od|ad)/i.test(userAgent)) {
      return;
    }

    var isPhone = /ip(hone|od)/i.test(userAgent);
    var matches = userAgent.match(/os (\d+)_(\d+)_?(\d+)?/i);
    var version = matches ? [parseInt(matches[1], 10), parseInt(matches[2], 10), parseInt(matches[3] || 0, 10)] : [];
    var isIPhone4 = window.screen.height === 960 / 2;
    var grade = isIPhone4 ? 'B' : 'A';
    return {
      deviceType: isPhone ? 'phone' : 'tablet',
      platform: 'ios',
      version: version,
      grade: grade
    };
  },
  android: function android(userAgent) {
    if (!/android|htc_|silk/i.test(userAgent)) {
      return;
    }

    var isPhone = /mobile/i.test(userAgent);
    var matches = userAgent.match(/android (\d+)\.?(\d+)?\.?(\d+)?/i);
    var version = matches ? [parseInt(matches[1], 10), parseInt(matches[2] || 0, 10), parseInt(matches[3] || 0, 10)] : [];
    var worseThan4_4 = version.length > 1 && (version[0] < 4 || version[0] === 4 && version[1] < 4);
    var grade = worseThan4_4 ? 'B' : 'A';
    return {
      deviceType: isPhone ? 'phone' : 'tablet',
      platform: 'android',
      version: version,
      grade: grade
    };
  }
};

var Devices = /*#__PURE__*/function () {
  /**
  * @name DevicesObjectevents.orientationChanged
  * @type classEventType
  * @type_function_param1 e:object
  * @type_function_param1_field1 orientation:String
  */

  /**
  * @name DevicesObjectMethods.ctor
  * @publicName ctor(options)
  * @param1 options:object
  * @param1_field1 window:Window
  * @hidden
  */
  function Devices(options) {
    _classCallCheck(this, Devices);

    this._window = (options === null || options === void 0 ? void 0 : options.window) || window;
    this._realDevice = this._getDevice();
    this._currentDevice = undefined;
    this._currentOrientation = undefined;
    this._eventsStrategy = new _events_strategy.EventsStrategy(this);
    this.changed = (0, _callbacks.default)();

    if ((0, _window.hasWindow)()) {
      _ready_callbacks.default.add(this._recalculateOrientation.bind(this));

      _resize_callbacks.default.add(this._recalculateOrientation.bind(this));
    }
  }

  _createClass(Devices, [{
    key: "current",
    value: function current(deviceOrName) {
      if (deviceOrName) {
        this._currentDevice = this._getDevice(deviceOrName);
        this._forced = true;
        this.changed.fire();
        return;
      }

      if (!this._currentDevice) {
        deviceOrName = undefined;

        try {
          deviceOrName = this._getDeviceOrNameFromWindowScope();
        } catch (e) {
          deviceOrName = this._getDeviceNameFromSessionStorage();
        } finally {
          if (!deviceOrName) {
            deviceOrName = this._getDeviceNameFromSessionStorage();
          }

          if (deviceOrName) {
            this._forced = true;
          }
        }

        this._currentDevice = this._getDevice(deviceOrName);
      }

      return this._currentDevice;
    }
  }, {
    key: "real",
    value: function real(forceDevice) {
      return (0, _extend.extend)({}, this._realDevice);
    }
  }, {
    key: "orientation",
    value: function orientation() {
      return this._currentOrientation;
    }
  }, {
    key: "isForced",
    value: function isForced() {
      return this._forced;
    }
  }, {
    key: "isRippleEmulator",
    value: function isRippleEmulator() {
      return !!this._window.tinyHippos;
    }
  }, {
    key: "_getCssClasses",
    value: function _getCssClasses(device) {
      var result = [];
      var realDevice = this._realDevice;
      device = device || this.current(); // TODO: use real device here?

      if (device.deviceType) {
        result.push("dx-device-".concat(device.deviceType));

        if (device.deviceType !== 'desktop') {
          result.push('dx-device-mobile');
        }
      }

      result.push("dx-device-".concat(realDevice.platform));

      if (realDevice.version && realDevice.version.length) {
        result.push("dx-device-".concat(realDevice.platform, "-").concat(realDevice.version[0]));
      }

      if (this.isSimulator()) {
        result.push('dx-simulator');
      }

      if ((0, _config.default)().rtlEnabled) {
        result.push('dx-rtl');
      }

      return result;
    }
  }, {
    key: "attachCssClasses",
    value: function attachCssClasses(element, device) {
      this._deviceClasses = this._getCssClasses(device).join(' ');
      (0, _renderer.default)(element).addClass(this._deviceClasses);
    }
  }, {
    key: "detachCssClasses",
    value: function detachCssClasses(element) {
      (0, _renderer.default)(element).removeClass(this._deviceClasses);
    }
  }, {
    key: "isSimulator",
    value: function isSimulator() {
      // NOTE: error may happen due to same-origin policy
      try {
        return this._isSimulator || (0, _window.hasWindow)() && this._window.top !== this._window.self && this._window.top['dx-force-device'] || this.isRippleEmulator();
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "forceSimulator",
    value: function forceSimulator() {
      this._isSimulator = true;
    }
  }, {
    key: "_getDevice",
    value: function _getDevice(deviceName) {
      if (deviceName === 'genericPhone') {
        deviceName = {
          deviceType: 'phone',
          platform: 'generic',
          generic: true
        };
      }

      if ((0, _type.isPlainObject)(deviceName)) {
        return this._fromConfig(deviceName);
      } else {
        var ua;

        if (deviceName) {
          ua = KNOWN_UA_TABLE[deviceName];

          if (!ua) {
            throw _errors.default.Error('E0005');
          }
        } else {
          ua = navigator.userAgent;
        }

        return this._fromUA(ua);
      }
    }
  }, {
    key: "_getDeviceOrNameFromWindowScope",
    value: function _getDeviceOrNameFromWindowScope() {
      var result;

      if ((0, _window.hasWindow)() && (this._window.top['dx-force-device-object'] || this._window.top['dx-force-device'])) {
        result = this._window.top['dx-force-device-object'] || this._window.top['dx-force-device'];
      }

      return result;
    }
  }, {
    key: "_getDeviceNameFromSessionStorage",
    value: function _getDeviceNameFromSessionStorage() {
      var sessionStorage = (0, _storage.sessionStorage)();

      if (!sessionStorage) {
        return;
      }

      var deviceOrName = sessionStorage.getItem('dx-force-device');

      try {
        return JSON.parse(deviceOrName);
      } catch (ex) {
        return deviceOrName;
      }
    }
  }, {
    key: "_fromConfig",
    value: function _fromConfig(config) {
      var result = (0, _extend.extend)({}, DEFAULT_DEVICE, this._currentDevice, config);
      var shortcuts = {
        phone: result.deviceType === 'phone',
        tablet: result.deviceType === 'tablet',
        android: result.platform === 'android',
        ios: result.platform === 'ios',
        generic: result.platform === 'generic'
      };
      return (0, _extend.extend)(result, shortcuts);
    }
  }, {
    key: "_fromUA",
    value: function _fromUA(ua) {
      var config;
      (0, _iterator.each)(uaParsers, function (platform, parser) {
        config = parser(ua);
        return !config;
      });

      if (config) {
        return this._fromConfig(config);
      }

      return DEFAULT_DEVICE;
    }
  }, {
    key: "_changeOrientation",
    value: function _changeOrientation() {
      var $window = (0, _renderer.default)(this._window);
      var orientation = $window.height() > $window.width() ? 'portrait' : 'landscape';

      if (this._currentOrientation === orientation) {
        return;
      }

      this._currentOrientation = orientation;

      this._eventsStrategy.fireEvent('orientationChanged', [{
        orientation: orientation
      }]);
    }
  }, {
    key: "_recalculateOrientation",
    value: function _recalculateOrientation() {
      var windowWidth = (0, _renderer.default)(this._window).width();

      if (this._currentWidth === windowWidth) {
        return;
      }

      this._currentWidth = windowWidth;

      this._changeOrientation();
    }
  }, {
    key: "on",
    value: function on(eventName, eventHandler) {
      this._eventsStrategy.on(eventName, eventHandler);

      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, eventHandler) {
      this._eventsStrategy.off(eventName, eventHandler);

      return this;
    }
  }]);

  return Devices;
}();

var devices = new Devices();

_view_port.changeCallback.add(function (viewPort, prevViewport) {
  devices.detachCssClasses(prevViewport);
  devices.attachCssClasses(viewPort);
});

var _default = devices;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/config.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _extend = _interopRequireDefault(__webpack_require__(3));

var _errors = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global DevExpress */

/**
* @name globalConfig
* @section commonObjectStructures
* @type object
* @namespace DevExpress
* @module core/config
* @export default
*/
var config = {
  rtlEnabled: false,
  defaultCurrency: 'USD',
  oDataFilterToLower: true,
  serverDecimalSeparator: '.',
  decimalSeparator: '.',
  thousandsSeparator: ',',
  forceIsoDateParsing: true,
  wrapActionsBeforeExecute: true,
  useLegacyStoreResult: false,

  /**
  * @name globalConfig.useJQuery
  * @type boolean
  * @hidden
  */
  useJQuery: undefined,
  editorStylingMode: undefined,
  useLegacyVisibleIndex: false,
  floatingActionButtonConfig: {
    /**
    * @name globalConfig.floatingActionButtonConfig.icon
    * @type string
    * @default "add"
    */
    icon: 'add',

    /**
    * @name globalConfig.floatingActionButtonConfig.closeIcon
    * @type string
    * @default "close"
    */
    closeIcon: 'close',

    /**
    * @name globalConfig.floatingActionButtonConfig.label
    * @type string
    * @default ""
    */
    label: '',

    /**
    * @name globalConfig.floatingActionButtonConfig.position
    * @type Enums.PositionAlignment|positionConfig|function
    * @default "{ at: 'right bottom', my: 'right bottom', offset: '-16 -16' }"
    */
    position: {
      at: 'right bottom',
      my: 'right bottom',
      offset: {
        x: -16,
        y: -16
      }
    },

    /**
    * @name globalConfig.floatingActionButtonConfig.maxSpeedDialActionCount
    * @type number
    * @default 5
    */
    maxSpeedDialActionCount: 5,

    /**
    * @name globalConfig.floatingActionButtonConfig.shading
    * @type boolean
    * @default false
    */
    shading: false,

    /**
    * @name globalConfig.floatingActionButtonConfig.direction
    * @type Enums.floatingActionButtonDirection
    * @default "auto"
    */
    direction: 'auto'
  },
  optionsParser: function optionsParser(optionsString) {
    if (optionsString.trim().charAt(0) !== '{') {
      optionsString = '{' + optionsString + '}';
    }

    try {
      // eslint-disable-next-line no-new-func
      return new Function('return ' + optionsString)();
    } catch (ex) {
      throw _errors.default.Error('E3018', ex, optionsString);
    }
  }
};
var deprecatedFields = ['decimalSeparator', 'thousandsSeparator'];

var configMethod = function configMethod() {
  if (!arguments.length) {
    return config;
  }

  var newConfig = arguments.length <= 0 ? undefined : arguments[0];
  deprecatedFields.forEach(function (deprecatedField) {
    if (newConfig[deprecatedField]) {
      var message = "Now, the ".concat(deprecatedField, " is selected based on the specified locale.");

      _errors.default.log('W0003', 'config', deprecatedField, '19.2', message);
    }
  });

  _extend.default.extend(config, newConfig);
};

if (typeof DevExpress !== 'undefined' && DevExpress.config) {
  configMethod(DevExpress.config);
}

var _default = configMethod;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/dependency_injector.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = _default;

var _extend = __webpack_require__(3);

var _type = __webpack_require__(1);

var _iterator = __webpack_require__(4);

var _class = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(object) {
  var BaseClass = _class.default.inherit(object);

  var InjectedClass = BaseClass;
  var instance = new InjectedClass(object);
  var initialFields = {};

  var injectFields = function injectFields(injectionObject, initial) {
    (0, _iterator.each)(injectionObject, function (key) {
      if ((0, _type.isFunction)(instance[key])) {
        if (initial || !object[key]) {
          object[key] = function () {
            return instance[key].apply(object, arguments);
          };
        }
      } else {
        if (initial) {
          initialFields[key] = object[key];
        }

        object[key] = instance[key];
      }
    });
  };

  injectFields(object, true);

  object.inject = function (injectionObject) {
    InjectedClass = InjectedClass.inherit(injectionObject);
    instance = new InjectedClass();
    injectFields(injectionObject);
  };

  object.resetInjection = function () {
    (0, _extend.extend)(object, initialFields);
    InjectedClass = BaseClass;
    instance = new BaseClass();
  };

  return object;
}

module.exports = exports.default;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/dom.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.createTextElementHiddenCopy = exports.contains = exports.clipboardText = exports.normalizeTemplateElement = exports.extractTemplateMarkup = exports.closestCommonParent = exports.clearSelection = exports.resetActiveElement = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _type = __webpack_require__(1);

var _window = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var window = (0, _window.getWindow)();

var resetActiveElement = function resetActiveElement() {
  var activeElement = _dom_adapter.default.getActiveElement();

  var body = _dom_adapter.default.getBody(); // TODO: remove this hack after msie 11 support stopped


  if (activeElement && activeElement !== body && activeElement.blur) {
    try {
      activeElement.blur();
    } catch (e) {
      body.blur();
    }
  }
};

exports.resetActiveElement = resetActiveElement;

var clearSelection = function clearSelection() {
  var selection = window.getSelection();
  if (!selection) return;
  if (selection.type === 'Caret') return;

  if (selection.empty) {
    selection.empty();
  } else if (selection.removeAllRanges) {
    // T522811
    try {
      selection.removeAllRanges();
    } catch (e) {}
  }
};

exports.clearSelection = clearSelection;

var closestCommonParent = function closestCommonParent(startTarget, endTarget) {
  var $startTarget = (0, _renderer.default)(startTarget);
  var $endTarget = (0, _renderer.default)(endTarget);

  if ($startTarget[0] === $endTarget[0]) {
    return $startTarget[0];
  }

  var $startParents = $startTarget.parents();
  var $endParents = $endTarget.parents();
  var startingParent = Math.min($startParents.length, $endParents.length);

  for (var i = -startingParent; i < 0; i++) {
    if ($startParents.get(i) === $endParents.get(i)) {
      return $startParents.get(i);
    }
  }
};

exports.closestCommonParent = closestCommonParent;

var extractTemplateMarkup = function extractTemplateMarkup(element) {
  element = (0, _renderer.default)(element);
  var templateTag = element.length && element.filter(function isNotExecutableScript() {
    var $node = (0, _renderer.default)(this);
    return $node.is('script[type]') && $node.attr('type').indexOf('script') < 0;
  });

  if (templateTag.length) {
    return templateTag.eq(0).html();
  } else {
    element = (0, _renderer.default)('<div>').append(element);
    return element.html();
  }
};

exports.extractTemplateMarkup = extractTemplateMarkup;

var normalizeTemplateElement = function normalizeTemplateElement(element) {
  var $element = (0, _type.isDefined)(element) && (element.nodeType || (0, _type.isRenderer)(element)) ? (0, _renderer.default)(element) : (0, _renderer.default)('<div>').html(element).contents();

  if ($element.length === 1) {
    if ($element.is('script')) {
      $element = normalizeTemplateElement($element.html().trim());
    } else if ($element.is('table')) {
      $element = $element.children('tbody').contents();
    }
  }

  return $element;
};

exports.normalizeTemplateElement = normalizeTemplateElement;

var clipboardText = function clipboardText(event, text) {
  var clipboard = event.originalEvent && event.originalEvent.clipboardData || window.clipboardData;

  if (arguments.length === 1) {
    return clipboard && clipboard.getData('Text');
  }

  clipboard && clipboard.setData('Text', text);
};

exports.clipboardText = clipboardText;

var contains = function contains(container, element) {
  if (!element) {
    return false;
  }

  if (_dom_adapter.default.isTextNode(element)) {
    element = element.parentNode;
  }

  if (_dom_adapter.default.isDocument(container)) {
    return container.documentElement.contains(element);
  }

  if ((0, _type.isWindow)(container)) {
    return contains(container.document, element);
  }

  return container.contains ? container.contains(element) : !!(element.compareDocumentPosition(container) & element.DOCUMENT_POSITION_CONTAINS);
};

exports.contains = contains;

var createTextElementHiddenCopy = function createTextElementHiddenCopy(element, text, options) {
  var elementStyles = window.getComputedStyle((0, _renderer.default)(element).get(0));
  var includePaddings = options && options.includePaddings;
  return (0, _renderer.default)('<div>').text(text).css({
    'fontStyle': elementStyles.fontStyle,
    'fontVariant': elementStyles.fontVariant,
    'fontWeight': elementStyles.fontWeight,
    'fontSize': elementStyles.fontSize,
    'fontFamily': elementStyles.fontFamily,
    'letterSpacing': elementStyles.letterSpacing,
    'border': elementStyles.border,
    'paddingTop': includePaddings ? elementStyles.paddingTop : '',
    'paddingRight': includePaddings ? elementStyles.paddingRight : '',
    'paddingBottom': includePaddings ? elementStyles.paddingBottom : '',
    'paddingLeft': includePaddings ? elementStyles.paddingLeft : '',
    'visibility': 'hidden',
    'whiteSpace': 'pre',
    'position': 'absolute',
    'float': 'left'
  });
};

exports.createTextElementHiddenCopy = createTextElementHiddenCopy;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/element_data.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.getDataStrategy = getDataStrategy;
exports.data = data;
exports.beforeCleanData = beforeCleanData;
exports.afterCleanData = afterCleanData;
exports.cleanData = cleanData;
exports.removeData = removeData;
exports.cleanDataRecursive = cleanDataRecursive;
exports.setDataStrategy = exports.strategyChanging = void 0;

var _weak_map = _interopRequireDefault(__webpack_require__(29));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _memorized_callbacks = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataMap = new _weak_map.default();
var strategy;
var strategyChanging = new _memorized_callbacks.default();
exports.strategyChanging = strategyChanging;

var beforeCleanDataFunc = function beforeCleanDataFunc() {};

var afterCleanDataFunc = function afterCleanDataFunc() {};

var setDataStrategy = function setDataStrategy(value) {
  strategyChanging.fire(value);
  strategy = value;
  var cleanData = strategy.cleanData;

  strategy.cleanData = function (nodes) {
    beforeCleanDataFunc(nodes);
    var result = cleanData.call(this, nodes);
    afterCleanDataFunc(nodes);
    return result;
  };
};

exports.setDataStrategy = setDataStrategy;
setDataStrategy({
  data: function data() {
    var element = arguments[0];
    var key = arguments[1];
    var value = arguments[2];
    if (!element) return;
    var elementData = dataMap.get(element);

    if (!elementData) {
      elementData = {};
      dataMap.set(element, elementData);
    }

    if (key === undefined) {
      return elementData;
    }

    if (arguments.length === 2) {
      return elementData[key];
    }

    elementData[key] = value;
    return value;
  },
  removeData: function removeData(element, key) {
    if (!element) return;

    if (key === undefined) {
      dataMap.delete(element);
    } else {
      var elementData = dataMap.get(element);

      if (elementData) {
        delete elementData[key];
      }
    }
  },
  cleanData: function cleanData(elements) {
    for (var i = 0; i < elements.length; i++) {
      _events_engine.default.off(elements[i]);

      dataMap.delete(elements[i]);
    }
  }
});

function getDataStrategy() {
  return strategy;
}

function data() {
  return strategy.data.apply(this, arguments);
}

function beforeCleanData(callback) {
  beforeCleanDataFunc = callback;
}

function afterCleanData(callback) {
  afterCleanDataFunc = callback;
}

function cleanData(nodes) {
  return strategy.cleanData.call(this, nodes);
}

function removeData(element, key) {
  return strategy.removeData.call(this, element, key);
}

function cleanDataRecursive(element, cleanSelf) {
  if (!_dom_adapter.default.isElementNode(element)) {
    return;
  }

  var childElements = element.getElementsByTagName('*');
  strategy.cleanData(childElements);

  if (cleanSelf) {
    strategy.cleanData([element]);
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/call_once.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var callOnce = function callOnce(handler) {
  var result;

  var _wrappedHandler = function wrappedHandler() {
    result = handler.apply(this, arguments);

    _wrappedHandler = function wrappedHandler() {
      return result;
    };

    return result;
  };

  return function () {
    return _wrappedHandler.apply(this, arguments);
  };
};

var _default = callOnce;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/ready_callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _window = __webpack_require__(6);

var _call_once = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callbacks = [];

var isReady = function isReady() {
  // NOTE: we can't use document.readyState === "interactive" because of ie9/ie10 support
  return _dom_adapter.default.getReadyState() === 'complete' || _dom_adapter.default.getReadyState() !== 'loading' && !_dom_adapter.default.getDocumentElement().doScroll;
};

var subscribeReady = (0, _call_once.default)(function () {
  var removeListener = _dom_adapter.default.listen(_dom_adapter.default.getDocument(), 'DOMContentLoaded', function () {
    readyCallbacks.fire();
    removeListener();
  });
});
var readyCallbacks = {
  add: function add(callback) {
    var windowExists = (0, _window.hasWindow)();

    if (windowExists && isReady()) {
      callback();
    } else {
      callbacks.push(callback);
      windowExists && subscribeReady();
    }
  },
  fire: function fire() {
    callbacks.forEach(function (callback) {
      return callback();
    });
    callbacks = [];
  }
};

var _default = (0, _dependency_injector.default)(readyCallbacks);

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/deferred.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.fromPromise = fromPromise;
exports.setStrategy = setStrategy;
exports.Deferred = Deferred;
exports.when = when;

var _type = __webpack_require__(1);

var _extend = __webpack_require__(3);

var _callbacks = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deferredConfig = [{
  method: 'resolve',
  handler: 'done',
  state: 'resolved'
}, {
  method: 'reject',
  handler: 'fail',
  state: 'rejected'
}, {
  method: 'notify',
  handler: 'progress'
}];

var _DeferredObj = function DeferredObj() {
  var that = this;
  this._state = 'pending';
  this._promise = {};
  deferredConfig.forEach(function (config) {
    var methodName = config.method;
    this[methodName + 'Callbacks'] = new _callbacks.default();

    this[methodName] = function () {
      return this[methodName + 'With'](this._promise, arguments);
    }.bind(this);

    this._promise[config.handler] = function (handler) {
      if (!handler) return this;
      var callbacks = that[methodName + 'Callbacks'];

      if (callbacks.fired()) {
        handler.apply(that[methodName + 'Context'], that[methodName + 'Args']);
      } else {
        callbacks.add(function (context, args) {
          handler.apply(context, args);
        }.bind(this));
      }

      return this;
    };
  }.bind(this));

  this._promise.always = function (handler) {
    return this.done(handler).fail(handler);
  };

  this._promise.catch = function (handler) {
    return this.then(null, handler);
  };

  this._promise.then = function (resolve, reject) {
    var result = new _DeferredObj();
    ['done', 'fail'].forEach(function (method) {
      var callback = method === 'done' ? resolve : reject;
      this[method](function () {
        if (!callback) {
          result[method === 'done' ? 'resolve' : 'reject'].apply(this, arguments);
          return;
        }

        var callbackResult = callback && callback.apply(this, arguments);

        if ((0, _type.isDeferred)(callbackResult)) {
          callbackResult.done(result.resolve).fail(result.reject);
        } else if ((0, _type.isPromise)(callbackResult)) {
          callbackResult.then(result.resolve, result.reject);
        } else {
          result.resolve.apply(this, (0, _type.isDefined)(callbackResult) ? [callbackResult] : arguments);
        }
      });
    }.bind(this));
    return result.promise();
  };

  this._promise.state = function () {
    return that._state;
  };

  this._promise.promise = function (args) {
    return args ? (0, _extend.extend)(args, that._promise) : that._promise;
  };

  this._promise.promise(this);
};

deferredConfig.forEach(function (config) {
  var methodName = config.method;
  var state = config.state;

  _DeferredObj.prototype[methodName + 'With'] = function (context, args) {
    var callbacks = this[methodName + 'Callbacks'];

    if (this.state() === 'pending') {
      this[methodName + 'Args'] = args;
      this[methodName + 'Context'] = context;
      if (state) this._state = state;
      callbacks.fire(context, args);
    }

    return this;
  };
});

function fromPromise(promise, context) {
  if ((0, _type.isDeferred)(promise)) {
    return promise;
  } else if ((0, _type.isPromise)(promise)) {
    var d = new _DeferredObj();
    promise.then(function () {
      d.resolveWith.apply(d, [context].concat([[].slice.call(arguments)]));
    }, function () {
      d.rejectWith.apply(d, [context].concat([[].slice.call(arguments)]));
    });
    return d;
  }

  return new _DeferredObj().resolveWith(context, [promise]);
}

var whenFunc = function whenFunc() {
  if (arguments.length === 1) {
    return fromPromise(arguments[0]);
  }

  var values = [].slice.call(arguments);
  var contexts = [];
  var resolvedCount = 0;
  var deferred = new _DeferredObj();

  var updateState = function updateState(i) {
    return function (value) {
      contexts[i] = this;
      values[i] = arguments.length > 1 ? [].slice.call(arguments) : value;
      resolvedCount++;

      if (resolvedCount === values.length) {
        deferred.resolveWith(contexts, values);
      }
    };
  };

  for (var i = 0; i < values.length; i++) {
    if ((0, _type.isDeferred)(values[i])) {
      values[i].promise().done(updateState(i)).fail(deferred.reject);
    } else {
      resolvedCount++;
    }
  }

  if (resolvedCount === values.length) {
    deferred.resolveWith(contexts, values);
  }

  return deferred.promise();
};

function setStrategy(value) {
  _DeferredObj = value.Deferred;
  whenFunc = value.when;
}

function Deferred() {
  return new _DeferredObj();
}

function when() {
  return whenFunc.apply(this, arguments);
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/event_registrator.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _iterator = __webpack_require__(4);

var _event_registrator_callbacks = _interopRequireDefault(__webpack_require__(41));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerEvent = function registerEvent(name, eventObject) {
  var strategy = {};

  if ('noBubble' in eventObject) {
    strategy.noBubble = eventObject.noBubble;
  }

  if ('bindType' in eventObject) {
    strategy.bindType = eventObject.bindType;
  }

  if ('delegateType' in eventObject) {
    strategy.delegateType = eventObject.delegateType;
  }

  (0, _iterator.each)(['setup', 'teardown', 'add', 'remove', 'trigger', 'handle', '_default', 'dispose'], function (_, methodName) {
    if (!eventObject[methodName]) {
      return;
    }

    strategy[methodName] = function () {
      var args = [].slice.call(arguments);
      args.unshift(this);
      return eventObject[methodName].apply(eventObject, args);
    };
  });

  _event_registrator_callbacks.default.fire(name, strategy);
};

registerEvent.callbacks = _event_registrator_callbacks.default;
var _default = registerEvent;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/template_base.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.TemplateBase = exports.renderedCallbacks = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _dom = __webpack_require__(19);

var _visibility_change = __webpack_require__(95);

var _errors = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var renderedCallbacks = (0, _callbacks.default)({
  syncStrategy: true
});
exports.renderedCallbacks = renderedCallbacks;

var TemplateBase = /*#__PURE__*/function () {
  function TemplateBase() {
    _classCallCheck(this, TemplateBase);
  }

  _createClass(TemplateBase, [{
    key: "render",
    value: function render(options) {
      options = options || {};
      var onRendered = options.onRendered;
      delete options.onRendered;

      var $result = this._renderCore(options);

      this._ensureResultInContainer($result, options.container);

      renderedCallbacks.fire($result, options.container);
      onRendered && onRendered();
      return $result;
    }
  }, {
    key: "_ensureResultInContainer",
    value: function _ensureResultInContainer($result, container) {
      if (!container) {
        return;
      }

      var $container = (0, _renderer.default)(container);
      var resultInContainer = (0, _dom.contains)($container.get(0), $result.get(0));
      $container.append($result);

      if (resultInContainer) {
        return;
      }

      var resultInBody = _dom_adapter.default.getBody().contains($container.get(0));

      if (!resultInBody) {
        return;
      }

      (0, _visibility_change.triggerShownEvent)($result);
    }
  }, {
    key: "_renderCore",
    value: function _renderCore() {
      throw _errors.default.Error('E0001');
    }
  }]);

  return TemplateBase;
}();

exports.TemplateBase = TemplateBase;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/data.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.toComparable = exports.compileSetter = exports.compileGetter = void 0;

var _errors = _interopRequireDefault(__webpack_require__(7));

var _class = _interopRequireDefault(__webpack_require__(11));

var _object = __webpack_require__(30);

var _type = __webpack_require__(1);

var _iterator = __webpack_require__(4);

var _variable_wrapper = _interopRequireDefault(__webpack_require__(37));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unwrapVariable = _variable_wrapper.default.unwrap;
var isWrapped = _variable_wrapper.default.isWrapped;
var assign = _variable_wrapper.default.assign;

var bracketsToDots = function bracketsToDots(expr) {
  return expr.replace(/\[/g, '.').replace(/\]/g, '');
};

var readPropValue = function readPropValue(obj, propName, options) {
  options = options || {};

  if (propName === 'this') {
    return unwrap(obj, options);
  }

  return unwrap(obj[propName], options);
};

var assignPropValue = function assignPropValue(obj, propName, value, options) {
  if (propName === 'this') {
    throw new _errors.default.Error('E4016');
  }

  var propValue = obj[propName];

  if (options.unwrapObservables && isWrapped(propValue)) {
    assign(propValue, value);
  } else {
    obj[propName] = value;
  }
};

var prepareOptions = function prepareOptions(options) {
  options = options || {};
  options.unwrapObservables = options.unwrapObservables !== undefined ? options.unwrapObservables : true;
  return options;
};

function unwrap(value, options) {
  return options.unwrapObservables ? unwrapVariable(value) : value;
}

var compileGetter = function compileGetter(expr) {
  if (arguments.length > 1) {
    expr = [].slice.call(arguments);
  }

  if (!expr || expr === 'this') {
    return function (obj) {
      return obj;
    };
  }

  if (typeof expr === 'string') {
    expr = bracketsToDots(expr);
    var path = expr.split('.');
    return function (obj, options) {
      options = prepareOptions(options);
      var functionAsIs = options.functionsAsIs;
      var hasDefaultValue = ('defaultValue' in options);
      var current = unwrap(obj, options);

      for (var i = 0; i < path.length; i++) {
        if (!current) {
          if (current == null && hasDefaultValue) {
            return options.defaultValue;
          }

          break;
        }

        var pathPart = path[i];

        if (hasDefaultValue && (0, _type.isObject)(current) && !(pathPart in current)) {
          return options.defaultValue;
        }

        var next = unwrap(current[pathPart], options);

        if (!functionAsIs && (0, _type.isFunction)(next)) {
          next = next.call(current);
        }

        current = next;
      }

      return current;
    };
  }

  if (Array.isArray(expr)) {
    return combineGetters(expr);
  }

  if ((0, _type.isFunction)(expr)) {
    return expr;
  }
};

exports.compileGetter = compileGetter;

function combineGetters(getters) {
  var compiledGetters = {};

  for (var i = 0, l = getters.length; i < l; i++) {
    var getter = getters[i];
    compiledGetters[getter] = compileGetter(getter);
  }

  return function (obj, options) {
    var result;
    (0, _iterator.each)(compiledGetters, function (name) {
      var value = this(obj, options);

      if (value === undefined) {
        return;
      }

      var current = result || (result = {});
      var path = name.split('.');
      var last = path.length - 1;

      for (var _i = 0; _i < last; _i++) {
        var pathItem = path[_i];

        if (!(pathItem in current)) {
          current[pathItem] = {};
        }

        current = current[pathItem];
      }

      current[path[last]] = value;
    });
    return result;
  };
}

var ensurePropValueDefined = function ensurePropValueDefined(obj, propName, value, options) {
  if ((0, _type.isDefined)(value)) {
    return value;
  }

  var newValue = {};
  assignPropValue(obj, propName, newValue, options);
  return newValue;
};

var compileSetter = function compileSetter(expr) {
  expr = bracketsToDots(expr || 'this').split('.');
  var lastLevelIndex = expr.length - 1;
  return function (obj, value, options) {
    options = prepareOptions(options);
    var currentValue = unwrap(obj, options);
    expr.forEach(function (propertyName, levelIndex) {
      var propertyValue = readPropValue(currentValue, propertyName, options);
      var isPropertyFunc = !options.functionsAsIs && (0, _type.isFunction)(propertyValue) && !isWrapped(propertyValue);

      if (levelIndex === lastLevelIndex) {
        if (options.merge && (0, _type.isPlainObject)(value) && (!(0, _type.isDefined)(propertyValue) || (0, _type.isPlainObject)(propertyValue))) {
          propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);
          (0, _object.deepExtendArraySafe)(propertyValue, value, false, true);
        } else if (isPropertyFunc) {
          currentValue[propertyName](value);
        } else {
          assignPropValue(currentValue, propertyName, value, options);
        }
      } else {
        propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);

        if (isPropertyFunc) {
          propertyValue = propertyValue.call(currentValue);
        }

        currentValue = propertyValue;
      }
    });
  };
};

exports.compileSetter = compileSetter;

var toComparable = function toComparable(value, caseSensitive) {
  if (value instanceof Date) {
    return value.getTime();
  }

  if (value && value instanceof _class.default && value.valueOf) {
    return value.valueOf();
  }

  if (!caseSensitive && typeof value === 'string') {
    return value.toLowerCase();
  }

  return value;
};

exports.toComparable = toComparable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var support = _interopRequireWildcard(__webpack_require__(104));

var _iterator = __webpack_require__(4);

var _browser = _interopRequireDefault(__webpack_require__(56));

var _devices = _interopRequireDefault(__webpack_require__(15));

var _event_registrator = _interopRequireDefault(__webpack_require__(24));

var _touch = _interopRequireDefault(__webpack_require__(57));

var _mspointer = _interopRequireDefault(__webpack_require__(105));

var _mouse = _interopRequireDefault(__webpack_require__(59));

var _mouse_and_touch = _interopRequireDefault(__webpack_require__(106));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
  * @name UI Events.dxpointerdown
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointermove
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointerup
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointercancel
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointerover
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointerout
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointerenter
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/

/**
  * @name UI Events.dxpointerleave
  * @type eventType
  * @type_function_param1 event:event
  * @type_function_param1_field1 pointerType:string
  * @module events/pointer
*/
var getStrategy = function getStrategy(support, device, browser) {
  if (support.pointerEvents && browser.msie) {
    return _mspointer.default;
  }

  var tablet = device.tablet,
      phone = device.phone;

  if (support.touch && !(tablet || phone)) {
    return _mouse_and_touch.default;
  }

  if (support.touch) {
    return _touch.default;
  }

  return _mouse.default;
};

var EventStrategy = getStrategy(support, _devices.default.real(), _browser.default);
(0, _iterator.each)(EventStrategy.map, function (pointerEvent, originalEvents) {
  (0, _event_registrator.default)(pointerEvent, new EventStrategy(pointerEvent, originalEvents));
});
var pointer = {
  down: 'dxpointerdown',
  up: 'dxpointerup',
  move: 'dxpointermove',
  cancel: 'dxpointercancel',
  enter: 'dxpointerenter',
  leave: 'dxpointerleave',
  over: 'dxpointerover',
  out: 'dxpointerout'
};
var _default = pointer;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/base.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _browser = _interopRequireDefault(__webpack_require__(56));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _class = _interopRequireDefault(__webpack_require__(11));

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POINTER_EVENTS_NAMESPACE = 'dxPointerEvents';

var BaseStrategy = _class.default.inherit({
  ctor: function ctor(eventName, originalEvents) {
    this._eventName = eventName;
    this._originalEvents = (0, _utils.addNamespace)(originalEvents, POINTER_EVENTS_NAMESPACE);
    this._handlerCount = 0;
    this.noBubble = this._isNoBubble();
  },
  _isNoBubble: function _isNoBubble() {
    var eventName = this._eventName;
    return eventName === 'dxpointerenter' || eventName === 'dxpointerleave';
  },
  _handler: function _handler(e) {
    var delegateTarget = this._getDelegateTarget(e);

    return this._fireEvent({
      type: this._eventName,
      pointerType: e.pointerType || (0, _utils.eventSource)(e),
      originalEvent: e,
      delegateTarget: delegateTarget,
      // NOTE: TimeStamp normalization (FF bug #238041) (T277118)
      timeStamp: _browser.default.mozilla ? new Date().getTime() : e.timeStamp
    });
  },
  _getDelegateTarget: function _getDelegateTarget(e) {
    var delegateTarget;

    if (this.noBubble) {
      delegateTarget = e.delegateTarget;
    }

    return delegateTarget;
  },
  _fireEvent: function _fireEvent(args) {
    return (0, _utils.fireEvent)(args);
  },
  _setSelector: function _setSelector(handleObj) {
    this._selector = this.noBubble && handleObj ? handleObj.selector : null;
  },
  _getSelector: function _getSelector() {
    return this._selector;
  },
  setup: function setup() {
    return true;
  },
  add: function add(element, handleObj) {
    if (this._handlerCount <= 0 || this.noBubble) {
      element = this.noBubble ? element : _dom_adapter.default.getDocument();

      this._setSelector(handleObj);

      var that = this;

      _events_engine.default.on(element, this._originalEvents, this._getSelector(), function (e) {
        that._handler(e);
      });
    }

    if (!this.noBubble) {
      this._handlerCount++;
    }
  },
  remove: function remove(handleObj) {
    this._setSelector(handleObj);

    if (!this.noBubble) {
      this._handlerCount--;
    }
  },
  teardown: function teardown(element) {
    if (this._handlerCount && !this.noBubble) {
      return;
    }

    element = this.noBubble ? element : _dom_adapter.default.getDocument();

    if (this._originalEvents !== '.' + POINTER_EVENTS_NAMESPACE) {
      _events_engine.default.off(element, this._originalEvents, this._getSelector());
    }
  },
  dispose: function dispose(element) {
    element = this.noBubble ? element : _dom_adapter.default.getDocument();

    _events_engine.default.off(element, this._originalEvents);
  }
});

var _default = BaseStrategy;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/polyfills/weak_map.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _array = __webpack_require__(14);

var _window = __webpack_require__(6);

var weakMap = (0, _window.hasWindow)() ? (0, _window.getWindow)().WeakMap : WeakMap;

if (!weakMap) {
  // NOTE: This is an incomplete WeakMap polyfill but it is enough for creation purposes
  weakMap = function weakMap() {
    var keys = [];
    var values = [];

    this.set = function (key, value) {
      var index = (0, _array.inArray)(key, keys);

      if (index === -1) {
        keys.push(key);
        values.push(value);
      } else {
        values[index] = value;
      }
    };

    this.get = function (key) {
      var index = (0, _array.inArray)(key, keys);

      if (index === -1) {
        return undefined;
      }

      return values[index];
    };

    this.has = function (key) {
      var index = (0, _array.inArray)(key, keys);

      if (index === -1) {
        return false;
      }

      return true;
    };

    this.delete = function (key) {
      var index = (0, _array.inArray)(key, keys);

      if (index === -1) {
        return;
      }

      keys.splice(index, 1);
      values.splice(index, 1);
    };
  };
}

var _default = weakMap;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/object.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.deepExtendArraySafe = exports.orderEach = exports.clone = void 0;

var _type = __webpack_require__(1);

var _variable_wrapper = _interopRequireDefault(__webpack_require__(37));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clone = function () {
  function Clone() {}

  return function (obj) {
    Clone.prototype = obj;
    return new Clone();
  };
}();

exports.clone = clone;

var orderEach = function orderEach(map, func) {
  var keys = [];
  var key;
  var i;

  for (key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      keys.push(key);
    }
  }

  keys.sort(function (x, y) {
    var isNumberX = (0, _type.isNumeric)(x);
    var isNumberY = (0, _type.isNumeric)(y);
    if (isNumberX && isNumberY) return x - y;
    if (isNumberX && !isNumberY) return -1;
    if (!isNumberX && isNumberY) return 1;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });

  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    func(key, map[key]);
  }
};

exports.orderEach = orderEach;

var assignValueToProperty = function assignValueToProperty(target, property, value, assignByReference) {
  if (!assignByReference && _variable_wrapper.default.isWrapped(target[property])) {
    _variable_wrapper.default.assign(target[property], value);
  } else {
    target[property] = value;
  }
}; // B239679, http://bugs.jquery.com/ticket/9477


var deepExtendArraySafe = function deepExtendArraySafe(target, changes, extendComplexObject, assignByReference) {
  var prevValue;
  var newValue;

  for (var name in changes) {
    prevValue = target[name];
    newValue = changes[name];

    if (name === '__proto__' || target === newValue) {
      continue;
    }

    if ((0, _type.isPlainObject)(newValue)) {
      var goDeeper = extendComplexObject ? (0, _type.isObject)(prevValue) : (0, _type.isPlainObject)(prevValue);
      newValue = deepExtendArraySafe(goDeeper ? prevValue : {}, newValue, extendComplexObject, assignByReference);
    }

    if (newValue !== undefined && prevValue !== newValue) {
      assignValueToProperty(target, name, newValue, assignByReference);
    }
  }

  return target;
};

exports.deepExtendArraySafe = deepExtendArraySafe;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/memorized_callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _iterator = __webpack_require__(4);

var _callbacks = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MemorizedCallbacks = /*#__PURE__*/function () {
  function MemorizedCallbacks() {
    _classCallCheck(this, MemorizedCallbacks);

    this.memory = [];
    this.callbacks = (0, _callbacks.default)();
  }

  _createClass(MemorizedCallbacks, [{
    key: "add",
    value: function add(fn) {
      (0, _iterator.each)(this.memory, function (_, item) {
        return fn.apply(fn, item);
      });
      this.callbacks.add(fn);
    }
  }, {
    key: "remove",
    value: function remove(fn) {
      this.callbacks.remove(fn);
    }
  }, {
    key: "fire",
    value: function fire() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.memory.push(args);
      this.callbacks.fire.apply(this.callbacks, args);
    }
  }]);

  return MemorizedCallbacks;
}();

exports.default = MemorizedCallbacks;
module.exports = exports.default;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/events_strategy.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.EventsStrategy = void 0;

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _iterator = __webpack_require__(4);

var _type = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventsStrategy = /*#__PURE__*/function () {
  function EventsStrategy(owner) {
    _classCallCheck(this, EventsStrategy);

    this._events = {};
    this._owner = owner;
  }

  _createClass(EventsStrategy, [{
    key: "hasEvent",
    value: function hasEvent(eventName) {
      var callbacks = this._events[eventName];
      return callbacks ? callbacks.has() : false;
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(eventName, eventArgs) {
      var callbacks = this._events[eventName];

      if (callbacks) {
        callbacks.fireWith(this._owner, eventArgs);
      }

      return this._owner;
    }
  }, {
    key: "on",
    value: function on(eventName, eventHandler) {
      var _this = this;

      if ((0, _type.isPlainObject)(eventName)) {
        (0, _iterator.each)(eventName, function (e, h) {
          _this.on(e, h);
        });
      } else {
        var callbacks = this._events[eventName];

        if (!callbacks) {
          callbacks = (0, _callbacks.default)();
          this._events[eventName] = callbacks;
        }

        var addFn = callbacks.originalAdd || callbacks.add;
        addFn.call(callbacks, eventHandler);
      }
    }
  }, {
    key: "off",
    value: function off(eventName, eventHandler) {
      var callbacks = this._events[eventName];

      if (callbacks) {
        if ((0, _type.isFunction)(eventHandler)) {
          callbacks.remove(eventHandler);
        } else {
          callbacks.empty();
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      (0, _iterator.each)(this._events, function (eventName, event) {
        event.empty();
      });
    }
  }], [{
    key: "create",
    value: function create(owner, strategy) {
      if (strategy) {
        return (0, _type.isFunction)(strategy) ? strategy(owner) : strategy;
      } else {
        return new EventsStrategy(owner);
      }
    }
  }]);

  return EventsStrategy;
}();

exports.EventsStrategy = EventsStrategy;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/public_component.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.attachInstanceToElement = attachInstanceToElement;
exports.getInstanceByElement = getInstanceByElement;
exports.name = void 0;

var _element_data = __webpack_require__(20);

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _weak_map = _interopRequireDefault(__webpack_require__(29));

var _type = __webpack_require__(1);

var _remove_event = _interopRequireDefault(__webpack_require__(72));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAMES_DATA_KEY = 'dxComponents';
var ANONYMOUS_COMPONENT_DATA_KEY = 'dxPrivateComponent';
var componentNames = new _weak_map.default();
var nextAnonymousComponent = 0;

var getName = function getName(componentClass, newName) {
  if ((0, _type.isDefined)(newName)) {
    componentNames.set(componentClass, newName);
    return;
  }

  if (!componentNames.has(componentClass)) {
    var generatedName = ANONYMOUS_COMPONENT_DATA_KEY + nextAnonymousComponent++;
    componentNames.set(componentClass, generatedName);
    return generatedName;
  }

  return componentNames.get(componentClass);
};

exports.name = getName;

function attachInstanceToElement($element, componentInstance, disposeFn) {
  var data = (0, _element_data.data)($element.get(0));
  var name = getName(componentInstance.constructor);
  data[name] = componentInstance;

  if (disposeFn) {
    _events_engine.default.one($element, _remove_event.default, function () {
      disposeFn.call(componentInstance);
    });
  }

  if (!data[COMPONENT_NAMES_DATA_KEY]) {
    data[COMPONENT_NAMES_DATA_KEY] = [];
  }

  data[COMPONENT_NAMES_DATA_KEY].push(name);
}

function getInstanceByElement($element, componentClass) {
  var name = getName(componentClass);
  return (0, _element_data.data)($element.get(0), name);
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/action.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _window = __webpack_require__(6);

var _type = __webpack_require__(1);

var _iterator = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action = /*#__PURE__*/function () {
  function Action(action, config) {
    _classCallCheck(this, Action);

    config = config || {};
    this._action = action;
    this._context = config.context || (0, _window.getWindow)();
    this._beforeExecute = config.beforeExecute;
    this._afterExecute = config.afterExecute;
    this._component = config.component;
    this._validatingTargetName = config.validatingTargetName;
    var excludeValidators = this._excludeValidators = {};

    if (config.excludeValidators) {
      for (var i = 0; i < config.excludeValidators.length; i++) {
        excludeValidators[config.excludeValidators[i]] = true;
      }
    }
  }

  _createClass(Action, [{
    key: "execute",
    value: function execute() {
      var e = {
        action: this._action,
        args: Array.prototype.slice.call(arguments),
        context: this._context,
        component: this._component,
        validatingTargetName: this._validatingTargetName,
        cancel: false,
        handled: false
      };
      var beforeExecute = this._beforeExecute;
      var afterExecute = this._afterExecute;
      var argsBag = e.args[0] || {};

      if (!this._validateAction(e)) {
        return;
      }

      beforeExecute === null || beforeExecute === void 0 ? void 0 : beforeExecute.call(this._context, e);

      if (e.cancel) {
        return;
      }

      var result = this._executeAction(e);

      if (argsBag.cancel) {
        return;
      }

      afterExecute === null || afterExecute === void 0 ? void 0 : afterExecute.call(this._context, e);
      return result;
    }
  }, {
    key: "_validateAction",
    value: function _validateAction(e) {
      var excludeValidators = this._excludeValidators;
      var executors = Action.executors;

      for (var name in executors) {
        if (!excludeValidators[name]) {
          var _executor$validate;

          var executor = executors[name];
          (_executor$validate = executor.validate) === null || _executor$validate === void 0 ? void 0 : _executor$validate.call(executor, e);

          if (e.cancel) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "_executeAction",
    value: function _executeAction(e) {
      var result;
      var executors = Action.executors;

      for (var name in executors) {
        var _executor$execute;

        var executor = executors[name];
        (_executor$execute = executor.execute) === null || _executor$execute === void 0 ? void 0 : _executor$execute.call(executor, e);

        if (e.handled) {
          result = e.result;
          break;
        }
      }

      return result;
    }
  }], [{
    key: "registerExecutor",
    value: function registerExecutor(name, executor) {
      if ((0, _type.isPlainObject)(name)) {
        (0, _iterator.each)(name, Action.registerExecutor);
        return;
      }

      Action.executors[name] = executor;
    }
  }, {
    key: "unregisterExecutor",
    value: function unregisterExecutor() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _iterator.each)(args, function () {
        delete Action.executors[this];
      });
    }
  }]);

  return Action;
}();

exports.default = Action;
Action.executors = {};

var createValidatorByTargetElement = function createValidatorByTargetElement(condition) {
  return function (e) {
    if (!e.args.length) {
      return;
    }

    var args = e.args[0];
    var element = args[e.validatingTargetName] || args.element;

    if (element && condition((0, _renderer.default)(element))) {
      e.cancel = true;
    }
  };
};

Action.registerExecutor({
  'disabled': {
    validate: createValidatorByTargetElement(function ($target) {
      return $target.is('.dx-state-disabled, .dx-state-disabled *');
    })
  },
  'readOnly': {
    validate: createValidatorByTargetElement(function ($target) {
      return $target.is('.dx-state-readonly, .dx-state-readonly *:not(.dx-state-independent)');
    })
  },
  'undefined': {
    execute: function execute(e) {
      if (!e.action) {
        e.result = undefined;
        e.handled = true;
      }
    }
  },
  'func': {
    execute: function execute(e) {
      if ((0, _type.isFunction)(e.action)) {
        e.result = e.action.call(e.context, e.args[0]);
        e.handled = true;
      }
    }
  }
});
module.exports = exports.default;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/options/utils.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.createDefaultOptionRules = exports.getNestedOptionValue = exports.getParentName = exports.getFieldName = exports.deviceMatch = exports.normalizeOptions = exports.convertRulesToOptions = void 0;

var _devices = _interopRequireDefault(__webpack_require__(15));

var _type = __webpack_require__(1);

var _common = __webpack_require__(8);

var _extend = __webpack_require__(3);

var _data = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cachedGetters = {};

var convertRulesToOptions = function convertRulesToOptions(rules) {
  var currentDevice = _devices.default.current();

  return rules.reduce(function (options, _ref) {
    var device = _ref.device,
        ruleOptions = _ref.options;
    var deviceFilter = device || {};
    var match = (0, _type.isFunction)(deviceFilter) ? deviceFilter(currentDevice) : deviceMatch(currentDevice, deviceFilter);

    if (match) {
      (0, _extend.extend)(true, options, ruleOptions);
    }

    return options;
  }, {});
};

exports.convertRulesToOptions = convertRulesToOptions;

var normalizeOptions = function normalizeOptions(options, value) {
  return typeof options !== 'string' ? options : _defineProperty({}, options, value);
};

exports.normalizeOptions = normalizeOptions;

var deviceMatch = function deviceMatch(device, filter) {
  return (0, _type.isEmptyObject)(filter) || (0, _common.findBestMatches)(device, [filter]).length > 0;
};

exports.deviceMatch = deviceMatch;

var getFieldName = function getFieldName(fullName) {
  return fullName.substr(fullName.lastIndexOf('.') + 1);
};

exports.getFieldName = getFieldName;

var getParentName = function getParentName(fullName) {
  return fullName.substr(0, fullName.lastIndexOf('.'));
};

exports.getParentName = getParentName;

var getNestedOptionValue = function getNestedOptionValue(optionsObject, name) {
  cachedGetters[name] = cachedGetters[name] || (0, _data.compileGetter)(name);
  return cachedGetters[name](optionsObject, {
    functionsAsIs: true
  });
};

exports.getNestedOptionValue = getNestedOptionValue;

var createDefaultOptionRules = function createDefaultOptionRules() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return options;
};

exports.createDefaultOptionRules = createDefaultOptionRules;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/short.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.keyboard = exports.click = exports.dxClick = exports.focus = exports.visibility = exports.hover = exports.resize = exports.active = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _keyboard_processor = _interopRequireDefault(__webpack_require__(100));

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addNamespace(event, namespace) {
  return namespace ? (0, _utils.addNamespace)(event, namespace) : event;
}

function executeAction(action, args) {
  return typeof action === 'function' ? action(args) : action.execute(args);
}

var active = {
  on: function on($el, active, inactive, opts) {
    var selector = opts.selector,
        showTimeout = opts.showTimeout,
        hideTimeout = opts.hideTimeout,
        namespace = opts.namespace;

    _events_engine.default.on($el, addNamespace('dxactive', namespace), selector, {
      timeout: showTimeout
    }, function (event) {
      return executeAction(active, {
        event: event,
        element: event.currentTarget
      });
    });

    _events_engine.default.on($el, addNamespace('dxinactive', namespace), selector, {
      timeout: hideTimeout
    }, function (event) {
      return executeAction(inactive, {
        event: event,
        element: event.currentTarget
      });
    });
  },
  off: function off($el, _ref) {
    var namespace = _ref.namespace,
        selector = _ref.selector;

    _events_engine.default.off($el, addNamespace('dxactive', namespace), selector);

    _events_engine.default.off($el, addNamespace('dxinactive', namespace), selector);
  }
};
exports.active = active;
var resize = {
  on: function on($el, resize) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        namespace = _ref2.namespace;

    _events_engine.default.on($el, addNamespace('dxresize', namespace), resize);
  },
  off: function off($el) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        namespace = _ref3.namespace;

    _events_engine.default.off($el, addNamespace('dxresize', namespace));
  }
};
exports.resize = resize;
var hover = {
  on: function on($el, start, end, _ref4) {
    var selector = _ref4.selector,
        namespace = _ref4.namespace;

    _events_engine.default.on($el, addNamespace('dxhoverend', namespace), selector, function (event) {
      return end(event);
    });

    _events_engine.default.on($el, addNamespace('dxhoverstart', namespace), selector, function (event) {
      return executeAction(start, {
        element: event.target,
        event: event
      });
    });
  },
  off: function off($el, _ref5) {
    var selector = _ref5.selector,
        namespace = _ref5.namespace;

    _events_engine.default.off($el, addNamespace('dxhoverstart', namespace), selector);

    _events_engine.default.off($el, addNamespace('dxhoverend', namespace), selector);
  }
};
exports.hover = hover;
var visibility = {
  on: function on($el, shown, hiding, _ref6) {
    var namespace = _ref6.namespace;

    _events_engine.default.on($el, addNamespace('dxhiding', namespace), hiding);

    _events_engine.default.on($el, addNamespace('dxshown', namespace), shown);
  },
  off: function off($el, _ref7) {
    var namespace = _ref7.namespace;

    _events_engine.default.off($el, addNamespace('dxhiding', namespace));

    _events_engine.default.off($el, addNamespace('dxshown', namespace));
  }
};
exports.visibility = visibility;
var focus = {
  on: function on($el, focusIn, focusOut, _ref8) {
    var namespace = _ref8.namespace,
        isFocusable = _ref8.isFocusable;

    _events_engine.default.on($el, addNamespace('focusin', namespace), focusIn);

    _events_engine.default.on($el, addNamespace('focusout', namespace), focusOut);

    if (_dom_adapter.default.hasDocumentProperty('onbeforeactivate')) {
      _events_engine.default.on($el, addNamespace('beforeactivate', namespace), function (e) {
        return isFocusable(null, e.target) || e.preventDefault();
      });
    }
  },
  off: function off($el, _ref9) {
    var namespace = _ref9.namespace;

    _events_engine.default.off($el, addNamespace('focusin', namespace));

    _events_engine.default.off($el, addNamespace('focusout', namespace));

    if (_dom_adapter.default.hasDocumentProperty('onbeforeactivate')) {
      _events_engine.default.off($el, addNamespace('beforeactivate', namespace));
    }
  },
  trigger: function trigger($el) {
    return _events_engine.default.trigger($el, 'focus');
  }
};
exports.focus = focus;
var dxClick = {
  on: function on($el, click) {
    var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        namespace = _ref10.namespace;

    _events_engine.default.on($el, addNamespace('dxclick', namespace), click);
  },
  off: function off($el) {
    var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        namespace = _ref11.namespace;

    _events_engine.default.off($el, addNamespace('dxclick', namespace));
  }
};
exports.dxClick = dxClick;
var click = {
  on: function on($el, click) {
    var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        namespace = _ref12.namespace;

    _events_engine.default.on($el, addNamespace('click', namespace), click);
  },
  off: function off($el) {
    var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        namespace = _ref13.namespace;

    _events_engine.default.off($el, addNamespace('click', namespace));
  }
};
exports.click = click;
var index = 0;
var keyboardProcessors = {};

var generateListenerId = function generateListenerId() {
  return "keyboardProcessorId".concat(index++);
};

var keyboard = {
  on: function on(element, focusTarget, handler) {
    var listenerId = generateListenerId();
    keyboardProcessors[listenerId] = new _keyboard_processor.default({
      element: element,
      focusTarget: focusTarget,
      handler: handler
    });
    return listenerId;
  },
  off: function off(listenerId) {
    if (listenerId && keyboardProcessors[listenerId]) {
      keyboardProcessors[listenerId].dispose();
      delete keyboardProcessors[listenerId];
    }
  },
  // NOTE: For tests
  _getProcessor: function _getProcessor(listenerId) {
    return keyboardProcessors[listenerId];
  }
};
exports.keyboard = keyboard;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/variable_wrapper.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _console = __webpack_require__(38);

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _dependency_injector.default)({
  isWrapped: function isWrapped() {
    return false;
  },
  isWritableWrapped: function isWritableWrapped() {
    return false;
  },
  wrap: function wrap(value) {
    return value;
  },
  unwrap: function unwrap(value) {
    return value;
  },
  assign: function assign() {
    _console.logger.error('Method \'assign\' should not be used for not wrapped variables. Use \'isWrapped\' method for ensuring.');
  }
});

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/console.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.debug = exports.logger = void 0;

var _type = __webpack_require__(1);

/* global console */

/* eslint no-console: off */
var noop = function noop() {};

var getConsoleMethod = function getConsoleMethod(method) {
  if (typeof console === 'undefined' || !(0, _type.isFunction)(console[method])) {
    return noop;
  }

  return console[method].bind(console);
};

var logger = {
  info: getConsoleMethod('info'),
  warn: getConsoleMethod('warn'),
  error: getConsoleMethod('error')
};
exports.logger = logger;

var debug = function () {
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  function assertParam(parameter, message) {
    assert(parameter !== null && parameter !== undefined, message);
  }

  return {
    assert: assert,
    assertParam: assertParam
  };
}();

exports.debug = debug;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/error.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = _default;

var _extend = __webpack_require__(3);

var _console = __webpack_require__(38);

var _string = _interopRequireDefault(__webpack_require__(40));

var _version = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-commonjs */
var ERROR_URL = 'http://js.devexpress.com/error/' + _version.default.split('.').slice(0, 2).join('_') + '/';

function _default(baseErrors, errors) {
  var exports = {
    ERROR_MESSAGES: (0, _extend.extend)(errors, baseErrors),
    Error: function Error() {
      return makeError([].slice.call(arguments));
    },
    log: function log(id) {
      var method = 'log';

      if (/^E\d+$/.test(id)) {
        method = 'error';
      } else if (/^W\d+$/.test(id)) {
        method = 'warn';
      }

      _console.logger[method](method === 'log' ? id : combineMessage([].slice.call(arguments)));
    }
  };

  function combineMessage(args) {
    var id = args[0];
    args = args.slice(1);
    return formatMessage(id, formatDetails(id, args));
  }

  function formatDetails(id, args) {
    args = [exports.ERROR_MESSAGES[id]].concat(args);
    return _string.default.format.apply(this, args).replace(/\.*\s*?$/, '');
  }

  function formatMessage(id, details) {
    return _string.default.format.apply(this, ['{0} - {1}. See:\n{2}', id, details, getErrorUrl(id)]);
  }

  function makeError(args) {
    var id = args[0];
    args = args.slice(1);
    var details = formatDetails(id, args);
    var url = getErrorUrl(id);
    var message = formatMessage(id, details);
    return (0, _extend.extend)(new Error(message), {
      __id: id,
      __details: details,
      url: url
    });
  }

  function getErrorUrl(id) {
    return ERROR_URL + id;
  }

  return exports;
}

module.exports = exports.default;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/string.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.isEmpty = exports.replaceAll = exports.format = exports.quadToObject = exports.encodeHtml = void 0;

var _type = __webpack_require__(1);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var encodeHtml = function () {
  var encodeRegExp = [new RegExp('&', 'g'), new RegExp('"', 'g'), new RegExp('\'', 'g'), new RegExp('<', 'g'), new RegExp('>', 'g')];
  return function (str) {
    return String(str).replace(encodeRegExp[0], '&amp;').replace(encodeRegExp[1], '&quot;').replace(encodeRegExp[2], '&#39;').replace(encodeRegExp[3], '&lt;').replace(encodeRegExp[4], '&gt;');
  };
}();

exports.encodeHtml = encodeHtml;

var splitQuad = function splitQuad(raw) {
  switch (_typeof(raw)) {
    case 'string':
      return raw.split(/\s+/, 4);

    case 'object':
      return [raw.x || raw.h || raw.left, raw.y || raw.v || raw.top, raw.x || raw.h || raw.right, raw.y || raw.v || raw.bottom];

    case 'number':
      return [raw];

    default:
      return raw;
  }
};

var quadToObject = function quadToObject(raw) {
  var quad = splitQuad(raw);
  var left = parseInt(quad && quad[0], 10);
  var top = parseInt(quad && quad[1], 10);
  var right = parseInt(quad && quad[2], 10);
  var bottom = parseInt(quad && quad[3], 10);

  if (!isFinite(left)) {
    left = 0;
  }

  if (!isFinite(top)) {
    top = left;
  }

  if (!isFinite(right)) {
    right = left;
  }

  if (!isFinite(bottom)) {
    bottom = top;
  }

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
};

exports.quadToObject = quadToObject;

var stringFormat = function stringFormat() {
  var s = arguments[0];
  var values = [].slice.call(arguments).slice(1);
  var replaceDollarCount;
  var reg;
  var value;

  if ((0, _type.isFunction)(s)) {
    return s.apply(this, values);
  }

  for (var i = 0; i < values.length; i++) {
    reg = new RegExp('\\{' + i + '\\}', 'gm');
    value = values[i];

    if ((0, _type.type)(value) === 'string' && value.indexOf('$') >= 0) {
      replaceDollarCount = '$'.replace('$', '$$').length;
      value = value.replace('$', replaceDollarCount === 1 ? '$$$$' : '$$');
    }

    s = s.replace(reg, value);
  }

  return s;
};

exports.format = stringFormat;

var replaceAll = function () {
  var quote = function quote(str) {
    return (str + '').replace(/([+*?.[^\]$(){}><|=!:])/g, '\\$1');
  };

  return function (text, searchToken, replacementToken) {
    return text.replace(new RegExp('(' + quote(searchToken) + ')', 'gi'), replacementToken);
  };
}();

exports.replaceAll = replaceAll;

var isEmpty = function () {
  var SPACE_REGEXP = /\s/g;
  return function (text) {
    return !text || !text.replace(SPACE_REGEXP, '');
  };
}();

exports.isEmpty = isEmpty;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/event_registrator_callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _memorized_callbacks = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _memorized_callbacks.default();

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/style.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.setHeight = exports.setWidth = exports.normalizeStyleProp = exports.stylePropPrefix = exports.styleProp = void 0;

var _inflector = __webpack_require__(43);

var _call_once = _interopRequireDefault(__webpack_require__(21));

var _type = __webpack_require__(1);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsPrefixes = ['', 'Webkit', 'Moz', 'O', 'Ms'];
var cssPrefixes = {
  '': '',
  'Webkit': '-webkit-',
  'Moz': '-moz-',
  'O': '-o-',
  'ms': '-ms-'
};
var getStyles = (0, _call_once.default)(function () {
  return _dom_adapter.default.createElement('dx').style;
});

var forEachPrefixes = function forEachPrefixes(prop, callBack) {
  prop = (0, _inflector.camelize)(prop, true);
  var result;

  for (var i = 0, cssPrefixesCount = jsPrefixes.length; i < cssPrefixesCount; i++) {
    var jsPrefix = jsPrefixes[i];
    var prefixedProp = jsPrefix + prop;
    var lowerPrefixedProp = (0, _inflector.camelize)(prefixedProp);
    result = callBack(lowerPrefixedProp, jsPrefix);

    if (result === undefined) {
      result = callBack(prefixedProp, jsPrefix);
    }

    if (result !== undefined) {
      break;
    }
  }

  return result || '';
};

var styleProp = function styleProp(name) {
  if (name in getStyles()) {
    return name;
  }

  var originalName = name;
  name = name.charAt(0).toUpperCase() + name.substr(1);

  for (var i = 1; i < jsPrefixes.length; i++) {
    var prefixedProp = jsPrefixes[i].toLowerCase() + name;

    if (prefixedProp in getStyles()) {
      return prefixedProp;
    }
  }

  return originalName;
};

exports.styleProp = styleProp;

var stylePropPrefix = function stylePropPrefix(prop) {
  return forEachPrefixes(prop, function (specific, jsPrefix) {
    if (specific in getStyles()) {
      return cssPrefixes[jsPrefix];
    }
  });
};

exports.stylePropPrefix = stylePropPrefix;
var pxExceptions = ['fillOpacity', 'columnCount', 'flexGrow', 'flexShrink', 'fontWeight', 'lineHeight', 'opacity', 'zIndex', 'zoom'];

var normalizeStyleProp = function normalizeStyleProp(prop, value) {
  if ((0, _type.isNumeric)(value) && pxExceptions.indexOf(prop) === -1) {
    value += 'px';
  }

  return value;
};

exports.normalizeStyleProp = normalizeStyleProp;

var setDimensionProperty = function setDimensionProperty(elements, propertyName, value) {
  if (elements) {
    value = (0, _type.isNumeric)(value) ? value += 'px' : value;

    for (var i = 0; i < elements.length; ++i) {
      elements[i].style[propertyName] = value;
    }
  }
};

var setWidth = function setWidth(elements, value) {
  setDimensionProperty(elements, 'width', value);
};

exports.setWidth = setWidth;

var setHeight = function setHeight(elements, value) {
  setDimensionProperty(elements, 'height', value);
};

exports.setHeight = setHeight;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/inflector.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.captionize = exports.titleize = exports.humanize = exports.camelize = exports.underscore = exports.dasherize = void 0;

var _iterator = __webpack_require__(4);

var _normalize = function _normalize(text) {
  if (text === undefined || text === null) {
    return '';
  }

  return String(text);
};

var _upperCaseFirst = function _upperCaseFirst(text) {
  return _normalize(text).charAt(0).toUpperCase() + text.substr(1);
};

var _chop = function _chop(text) {
  return _normalize(text).replace(/([a-z\d])([A-Z])/g, '$1 $2').split(/[\s_-]+/);
};

var dasherize = function dasherize(text) {
  return (0, _iterator.map)(_chop(text), function (p) {
    return p.toLowerCase();
  }).join('-');
};

exports.dasherize = dasherize;

var underscore = function underscore(text) {
  return dasherize(text).replace(/-/g, '_');
};

exports.underscore = underscore;

var camelize = function camelize(text, upperFirst) {
  return (0, _iterator.map)(_chop(text), function (p, i) {
    p = p.toLowerCase();

    if (upperFirst || i > 0) {
      p = _upperCaseFirst(p);
    }

    return p;
  }).join('');
};

exports.camelize = camelize;

var humanize = function humanize(text) {
  return _upperCaseFirst(dasherize(text).replace(/-/g, ' '));
};

exports.humanize = humanize;

var titleize = function titleize(text) {
  return (0, _iterator.map)(_chop(text), function (p) {
    return _upperCaseFirst(p.toLowerCase());
  }).join(' ');
};

exports.titleize = titleize;
var DIGIT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var captionize = function captionize(name) {
  var captionList = [];
  var i;
  var char;
  var isPrevCharNewWord = false;
  var isNewWord = false;

  for (i = 0; i < name.length; i++) {
    char = name.charAt(i);
    isNewWord = char === char.toUpperCase() && char !== '-' && char !== ')' && char !== '/' || char in DIGIT_CHARS;

    if (char === '_' || char === '.') {
      char = ' ';
      isNewWord = true;
    } else if (i === 0) {
      char = char.toUpperCase();
      isNewWord = true;
    } else if (!isPrevCharNewWord && isNewWord) {
      if (captionList.length > 0) {
        captionList.push(' ');
      }
    }

    captionList.push(char);
    isPrevCharNewWord = isNewWord;
  }

  return captionList.join('');
};

exports.captionize = captionize;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/html_parser.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.isTablePart = exports.parseHTML = void 0;

var _array = __webpack_require__(14);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTagName = /<([a-z][^/\0>\x20\t\r\n\f]+)/i;
var tagWrappers = {
  default: {
    tagsCount: 0,
    startTags: '',
    endTags: ''
  },
  thead: {
    tagsCount: 1,
    startTags: '<table>',
    endTags: '</table>'
  },
  td: {
    tagsCount: 3,
    startTags: '<table><tbody><tr>',
    endTags: '</tr></tbody></table>'
  },
  col: {
    tagsCount: 2,
    startTags: '<table><colgroup>',
    endTags: '</colgroup></table>'
  },
  tr: {
    tagsCount: 2,
    startTags: '<table><tbody>',
    endTags: '</tbody></table>'
  }
};
tagWrappers.tbody = tagWrappers.colgroup = tagWrappers.caption = tagWrappers.tfoot = tagWrappers.thead;
tagWrappers.th = tagWrappers.td;

var parseHTML = function parseHTML(html) {
  if (typeof html !== 'string') {
    return null;
  }

  var fragment = _dom_adapter.default.createDocumentFragment();

  var container = fragment.appendChild(_dom_adapter.default.createElement('div'));
  var tags = isTagName.exec(html);
  var firstRootTag = tags && tags[1].toLowerCase();
  var tagWrapper = tagWrappers[firstRootTag] || tagWrappers.default;
  container.innerHTML = tagWrapper.startTags + html + tagWrapper.endTags;

  for (var i = 0; i < tagWrapper.tagsCount; i++) {
    container = container.lastChild;
  }

  return (0, _array.merge)([], container.childNodes);
};

exports.parseHTML = parseHTML;

var isTablePart = function isTablePart(html) {
  var tags = isTagName.exec(html);
  return tags && tags[1] in tagWrappers;
};

exports.isTablePart = isTablePart;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/resize_callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _window = __webpack_require__(6);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _call_once = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeCallbacks = function () {
  var prevSize;
  var callbacks = (0, _callbacks.default)();
  var originalCallbacksAdd = callbacks.add;
  var originalCallbacksRemove = callbacks.remove;

  if (!(0, _window.hasWindow)()) {
    return callbacks;
  }

  var formatSize = function formatSize() {
    var window = (0, _window.getWindow)();
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  var handleResize = function handleResize() {
    var now = formatSize();

    if (now.width === prevSize.width && now.height === prevSize.height) {
      return;
    }

    var changedDimension;

    if (now.width === prevSize.width) {
      changedDimension = 'height';
    }

    if (now.height === prevSize.height) {
      changedDimension = 'width';
    }

    prevSize = now;
    callbacks.fire(changedDimension);
  };

  var setPrevSize = (0, _call_once.default)(function () {
    prevSize = formatSize();
  });
  var removeListener;

  callbacks.add = function () {
    var result = originalCallbacksAdd.apply(callbacks, arguments);
    setPrevSize();

    _ready_callbacks.default.add(function () {
      if (!removeListener && callbacks.has()) {
        removeListener = _dom_adapter.default.listen((0, _window.getWindow)(), 'resize', handleResize);
      }
    });

    return result;
  };

  callbacks.remove = function () {
    var result = originalCallbacksRemove.apply(callbacks, arguments);

    if (!callbacks.has() && removeListener) {
      removeListener();
      removeListener = undefined;
    }

    return result;
  };

  return callbacks;
}();

var _default = resizeCallbacks;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/view_port.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.originalViewPort = originalViewPort;
exports.changeCallback = exports.value = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ready = _ready_callbacks.default.add;
var changeCallback = (0, _callbacks.default)();
exports.changeCallback = changeCallback;
var $originalViewPort = (0, _renderer.default)();

var value = function () {
  var $current;
  return function (element) {
    if (!arguments.length) {
      return $current;
    }

    var $element = (0, _renderer.default)(element);
    $originalViewPort = $element;
    var isNewViewportFound = !!$element.length;
    var prevViewPort = value();
    $current = isNewViewportFound ? $element : (0, _renderer.default)('body');
    changeCallback.fire(isNewViewportFound ? value() : (0, _renderer.default)(), prevViewPort);
  };
}();

exports.value = value;
ready(function () {
  value('.dx-viewport');
});

function originalViewPort() {
  return $originalViewPort;
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/polyfills/promise.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _deferred = __webpack_require__(23);

var _window = __webpack_require__(6);

var promise = (0, _window.hasWindow)() ? (0, _window.getWindow)().Promise : Promise;

if (!promise) {
  // NOTE: This is an incomplete Promise polyfill but it is enough for creation purposes
  promise = function promise(resolver) {
    var d = new _deferred.Deferred();
    resolver(d.resolve.bind(this), d.reject.bind(this));
    return d.promise();
  };

  promise.resolve = function (val) {
    return new _deferred.Deferred().resolve(val).promise();
  };

  promise.reject = function (val) {
    return new _deferred.Deferred().reject(val).promise();
  };

  promise.all = function (promises) {
    return _deferred.when.apply(this, promises).then(function () {
      return [].slice.call(arguments);
    });
  };
}

var _default = promise;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/math.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.adjust = adjust;
exports.getPrecision = getPrecision;
exports.getExponent = getExponent;
exports.getRoot = getRoot;
exports.solveCubicEquation = solveCubicEquation;
exports.trunc = trunc;
exports.inRange = exports.fitIntoRange = exports.sign = void 0;

var _type = __webpack_require__(1);

var sign = function sign(value) {
  if (value === 0) {
    return 0;
  }

  return value / Math.abs(value);
};

exports.sign = sign;

var fitIntoRange = function fitIntoRange(value, minValue, maxValue) {
  var isMinValueUndefined = !minValue && minValue !== 0;
  var isMaxValueUndefined = !maxValue && maxValue !== 0;
  isMinValueUndefined && (minValue = !isMaxValueUndefined ? Math.min(value, maxValue) : value);
  isMaxValueUndefined && (maxValue = !isMinValueUndefined ? Math.max(value, minValue) : value);
  return Math.min(Math.max(value, minValue), maxValue);
};

exports.fitIntoRange = fitIntoRange;

var inRange = function inRange(value, minValue, maxValue) {
  return value >= minValue && value <= maxValue;
};

exports.inRange = inRange;

function getExponent(value) {
  return Math.abs(parseInt(value.toExponential().split('e')[1]));
} // T570217


function _isEdgeBug() {
  var value = 0.0003;
  var correctValue = '0.000300';
  var precisionValue = 3;
  return correctValue !== value.toPrecision(precisionValue);
}

function adjust(value, interval) {
  var precision = getPrecision(interval || 0) + 2;
  var separatedValue = value.toString().split('.');
  var sourceValue = value;
  var absValue = Math.abs(value);
  var separatedAdjustedValue;
  var isExponentValue = (0, _type.isExponential)(value);
  var integerPart = absValue > 1 ? 10 : 0;

  if (separatedValue.length === 1) {
    return value;
  }

  if (!isExponentValue) {
    if ((0, _type.isExponential)(interval)) {
      precision = separatedValue[0].length + getExponent(interval);
    }

    value = absValue;
    value = value - Math.floor(value) + integerPart;
  }

  precision = _isEdgeBug() && getExponent(value) > 6 || precision > 7 ? 15 : 7; // fix toPrecision() bug in Edge (T570217)

  if (!isExponentValue) {
    separatedAdjustedValue = parseFloat(value.toPrecision(precision)).toString().split('.');

    if (separatedAdjustedValue[0] === integerPart.toString()) {
      return parseFloat(separatedValue[0] + '.' + separatedAdjustedValue[1]);
    }
  }

  return parseFloat(sourceValue.toPrecision(precision));
}

function getPrecision(value) {
  var str = value.toString();

  if (str.indexOf('.') < 0) {
    return 0;
  }

  var mantissa = str.split('.');
  var positionOfDelimiter = mantissa[1].indexOf('e');
  return positionOfDelimiter >= 0 ? positionOfDelimiter : mantissa[1].length;
}

function getRoot(x, n) {
  if (x < 0 && n % 2 !== 1) {
    return NaN;
  }

  var y = Math.pow(Math.abs(x), 1 / n);
  return n % 2 === 1 && x < 0 ? -y : y;
}

function solveCubicEquation(a, b, c, d) {
  var min = 1e-8;

  if (Math.abs(a) < min) {
    a = b;
    b = c;
    c = d;

    if (Math.abs(a) < min) {
      a = b;
      b = c;

      if (Math.abs(a) < min) {
        return [];
      }

      return [-b / a];
    }

    var D2 = b * b - 4 * a * c;

    if (Math.abs(D2) < min) {
      return [-b / (2 * a)];
    } else if (D2 > 0) {
      return [(-b + Math.sqrt(D2)) / (2 * a), (-b - Math.sqrt(D2)) / (2 * a)];
    }

    return [];
  }

  var p = (3 * a * c - b * b) / (3 * a * a);
  var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
  var roots;
  var u;

  if (Math.abs(p) < min) {
    roots = [getRoot(-q, 3)];
  } else if (Math.abs(q) < min) {
    roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
  } else {
    var D3 = q * q / 4 + p * p * p / 27;

    if (Math.abs(D3) < min) {
      roots = [-1.5 * q / p, 3 * q / p];
    } else if (D3 > 0) {
      u = getRoot(-q / 2 - Math.sqrt(D3), 3);
      roots = [u - p / (3 * u)];
    } else {
      u = 2 * Math.sqrt(-p / 3);
      var t = Math.acos(3 * q / p / u) / 3;
      var k = 2 * Math.PI / 3;
      roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
    }
  }

  for (var i = 0; i < roots.length; i++) {
    roots[i] -= b / (3 * a);
  }

  return roots;
}

function trunc(value) {
  return Math.trunc ? Math.trunc(value) : value > 0 ? Math.floor(value) : Math.ceil(value);
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/utils.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.toFixed = toFixed;

var _math = __webpack_require__(48);

var DECIMAL_BASE = 10;

function roundByAbs(value) {
  var valueSign = (0, _math.sign)(value);
  return valueSign * Math.round(Math.abs(value));
}

function adjustValue(value, precision) {
  var precisionMultiplier = Math.pow(DECIMAL_BASE, precision);
  var roundMultiplier = precisionMultiplier * DECIMAL_BASE;
  var intermediateValue = value * roundMultiplier / DECIMAL_BASE;
  return roundByAbs(intermediateValue) / precisionMultiplier;
}

function toFixed(value, precision) {
  var valuePrecision = precision || 0;
  var adjustedValue = valuePrecision > 0 ? adjustValue.apply(void 0, arguments) : value;
  return adjustedValue.toFixed(valuePrecision);
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/core.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _parent_locales = _interopRequireDefault(__webpack_require__(81));

var _parentLocale = _interopRequireDefault(__webpack_require__(82));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_LOCALE = 'en';

var _default = (0, _dependency_injector.default)({
  locale: function () {
    var currentLocale = DEFAULT_LOCALE;
    return function (locale) {
      if (!locale) {
        return currentLocale;
      }

      currentLocale = locale;
    };
  }(),
  getValueByClosestLocale: function getValueByClosestLocale(getter) {
    var locale = this.locale();
    var value = getter(locale);
    var isRootLocale;

    while (!value && !isRootLocale) {
      locale = (0, _parentLocale.default)(_parent_locales.default, locale);

      if (locale) {
        value = getter(locale);
      } else {
        isRootLocale = true;
      }
    }

    if (value === undefined && locale !== DEFAULT_LOCALE) {
      return getter(DEFAULT_LOCALE);
    }

    return value;
  }
});

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/function_template.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.FunctionTemplate = void 0;

var _template_base = __webpack_require__(25);

var _dom = __webpack_require__(19);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FunctionTemplate = /*#__PURE__*/function (_TemplateBase) {
  _inherits(FunctionTemplate, _TemplateBase);

  var _super = _createSuper(FunctionTemplate);

  function FunctionTemplate(render) {
    var _this;

    _classCallCheck(this, FunctionTemplate);

    _this = _super.call(this);
    _this._render = render;
    return _this;
  }

  _createClass(FunctionTemplate, [{
    key: "_renderCore",
    value: function _renderCore(options) {
      return (0, _dom.normalizeTemplateElement)(this._render(options));
    }
  }]);

  return FunctionTemplate;
}(_template_base.TemplateBase);

exports.FunctionTemplate = FunctionTemplate;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/empty_template.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.EmptyTemplate = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _template_base = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EmptyTemplate = /*#__PURE__*/function (_TemplateBase) {
  _inherits(EmptyTemplate, _TemplateBase);

  var _super = _createSuper(EmptyTemplate);

  function EmptyTemplate() {
    _classCallCheck(this, EmptyTemplate);

    return _super.apply(this, arguments);
  }

  _createClass(EmptyTemplate, [{
    key: "_renderCore",
    value: function _renderCore() {
      return (0, _renderer.default)();
    }
  }]);

  return EmptyTemplate;
}(_template_base.TemplateBase);

exports.EmptyTemplate = EmptyTemplate;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/template_engine_registry.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.registerTemplateEngine = registerTemplateEngine;
exports.setTemplateEngine = setTemplateEngine;
exports.getCurrentTemplateEngine = getCurrentTemplateEngine;

var _type = __webpack_require__(1);

var _errors = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateEngines = {};
var currentTemplateEngine;

function registerTemplateEngine(name, templateEngine) {
  templateEngines[name] = templateEngine;
}

function setTemplateEngine(templateEngine) {
  if ((0, _type.isString)(templateEngine)) {
    currentTemplateEngine = templateEngines[templateEngine];

    if (!currentTemplateEngine) {
      throw _errors.default.Error('E0020', templateEngine);
    }
  } else {
    currentTemplateEngine = templateEngine;
  }
}

function getCurrentTemplateEngine() {
  return currentTemplateEngine;
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/element.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.getPublicElement = getPublicElement;
exports.setPublicElementWrapper = setPublicElementWrapper;

var strategy = function strategy(element) {
  return element && element.get(0);
};

function getPublicElement(element) {
  return strategy(element);
}

function setPublicElementWrapper(newStrategy) {
  strategy = newStrategy;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/widget/selectors.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.focused = exports.tabbable = exports.focusable = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusableFn = function focusableFn(element, tabIndex) {
  if (!visible(element)) {
    return false;
  }

  var nodeName = element.nodeName.toLowerCase();
  var isTabIndexNotNaN = !isNaN(tabIndex);
  var isDisabled = element.disabled;
  var isDefaultFocus = /^(input|select|textarea|button|object|iframe)$/.test(nodeName);
  var isHyperlink = nodeName === 'a';
  var isFocusable = true;
  var isContentEditable = element.isContentEditable;

  if (isDefaultFocus || isContentEditable) {
    isFocusable = !isDisabled;
  } else {
    if (isHyperlink) {
      isFocusable = element.href || isTabIndexNotNaN;
    } else {
      isFocusable = isTabIndexNotNaN;
    }
  }

  return isFocusable;
};

function visible(element) {
  var $element = (0, _renderer.default)(element);
  return $element.is(':visible') && $element.css('visibility') !== 'hidden' && $element.parents().css('visibility') !== 'hidden';
}

var focusable = function focusable(index, element) {
  return focusableFn(element, (0, _renderer.default)(element).attr('tabIndex'));
};

exports.focusable = focusable;

var tabbable = function tabbable(index, element) {
  var tabIndex = (0, _renderer.default)(element).attr('tabIndex');
  return (isNaN(tabIndex) || tabIndex >= 0) && focusableFn(element, tabIndex);
}; // note: use this method instead of is(":focus")


exports.tabbable = tabbable;

var focused = function focused($element) {
  var element = (0, _renderer.default)($element).get(0);
  return _dom_adapter.default.getActiveElement() === element;
};

exports.focused = focused;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/browser.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _extend = __webpack_require__(3);

var _window = __webpack_require__(6);

var navigator = (0, _window.getNavigator)();
var webkitRegExp = /(webkit)[ /]([\w.]+)/;
var ieRegExp = /(msie) (\d{1,2}\.\d)/;
var ie11RegExp = /(trident).*rv:(\d{1,2}\.\d)/;
var msEdge = /(edge)\/((\d+)?[\w.]+)/;
var mozillaRegExp = /(mozilla)(?:.*? rv:([\w.]+))/;

var browserFromUA = function browserFromUA(ua) {
  ua = ua.toLowerCase();
  var result = {};
  var matches = ieRegExp.exec(ua) || ie11RegExp.exec(ua) || msEdge.exec(ua) || ua.indexOf('compatible') < 0 && mozillaRegExp.exec(ua) || webkitRegExp.exec(ua) || [];
  var browserName = matches[1];
  var browserVersion = matches[2];

  if (browserName === 'webkit') {
    result['webkit'] = true;

    if (ua.indexOf('chrome') >= 0 || ua.indexOf('crios') >= 0) {
      browserName = 'chrome';
      browserVersion = /(?:chrome|crios)\/(\d+\.\d+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else if (ua.indexOf('fxios') >= 0) {
      browserName = 'mozilla';
      browserVersion = /fxios\/(\d+\.\d+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else if (ua.indexOf('safari') >= 0 && /version|phantomjs/.test(ua)) {
      browserName = 'safari';
      browserVersion = /(?:version|phantomjs)\/([0-9.]+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    } else {
      browserName = 'unknown';
      browserVersion = /applewebkit\/([0-9.]+)/.exec(ua);
      browserVersion = browserVersion && browserVersion[1];
    }
  }

  if (browserName === 'trident' || browserName === 'edge') {
    browserName = 'msie';
  }

  if (browserName) {
    result[browserName] = true;
    result.version = browserVersion;
  }

  return result;
};

var _default = (0, _extend.extend)({
  _fromUA: browserFromUA
}, browserFromUA(navigator.userAgent));

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/touch.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _devices = _interopRequireDefault(__webpack_require__(15));

var _extend = __webpack_require__(3);

var _iterator = __webpack_require__(4);

var _base = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventMap = {
  'dxpointerdown': 'touchstart',
  'dxpointermove': 'touchmove',
  'dxpointerup': 'touchend',
  'dxpointercancel': 'touchcancel',
  'dxpointerover': '',
  'dxpointerout': '',
  'dxpointerenter': '',
  'dxpointerleave': ''
};

var normalizeTouchEvent = function normalizeTouchEvent(e) {
  var pointers = [];
  (0, _iterator.each)(e.touches, function (_, touch) {
    pointers.push((0, _extend.extend)({
      pointerId: touch.identifier
    }, touch));
  });
  return {
    pointers: pointers,
    pointerId: e.changedTouches[0].identifier
  };
};

var skipTouchWithSameIdentifier = function skipTouchWithSameIdentifier(pointerEvent) {
  return _devices.default.real().platform === 'ios' && (pointerEvent === 'dxpointerdown' || pointerEvent === 'dxpointerup');
};

var TouchStrategy = _base.default.inherit({
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    this._pointerId = 0;
  },
  _handler: function _handler(e) {
    if (skipTouchWithSameIdentifier(this._eventName)) {
      var touch = e.changedTouches[0];

      if (this._pointerId === touch.identifier && this._pointerId !== 0) {
        return;
      }

      this._pointerId = touch.identifier;
    }

    return this.callBase.apply(this, arguments);
  },
  _fireEvent: function _fireEvent(args) {
    return this.callBase((0, _extend.extend)(normalizeTouchEvent(args.originalEvent), args));
  }
});

TouchStrategy.map = eventMap;
TouchStrategy.normalize = normalizeTouchEvent;
var _default = TouchStrategy;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/observer.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _iterator = __webpack_require__(4);

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addEventsListener = function addEventsListener(events, handler) {
  _ready_callbacks.default.add(function () {
    events.split(' ').forEach(function (event) {
      _dom_adapter.default.listen(_dom_adapter.default.getDocument(), event, handler, true);
    });
  });
};

var Observer = function Observer(eventMap, pointerEquals, onPointerAdding) {
  onPointerAdding = onPointerAdding || function () {};

  var pointers = [];

  var getPointerIndex = function getPointerIndex(e) {
    var index = -1;
    (0, _iterator.each)(pointers, function (i, pointer) {
      if (!pointerEquals(e, pointer)) {
        return true;
      }

      index = i;
      return false;
    });
    return index;
  };

  var addPointer = function addPointer(e) {
    if (getPointerIndex(e) === -1) {
      onPointerAdding(e);
      pointers.push(e);
    }
  };

  var removePointer = function removePointer(e) {
    var index = getPointerIndex(e);

    if (index > -1) {
      pointers.splice(index, 1);
    }
  };

  var updatePointer = function updatePointer(e) {
    pointers[getPointerIndex(e)] = e;
  };

  addEventsListener(eventMap['dxpointerdown'], addPointer);
  addEventsListener(eventMap['dxpointermove'], updatePointer);
  addEventsListener(eventMap['dxpointerup'], removePointer);
  addEventsListener(eventMap['dxpointercancel'], removePointer);

  this.pointers = function () {
    return pointers;
  };

  this.reset = function () {
    pointers = [];
  };
};

var _default = Observer;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/mouse.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _extend = __webpack_require__(3);

var _base = _interopRequireDefault(__webpack_require__(28));

var _observer = _interopRequireDefault(__webpack_require__(58));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventMap = {
  'dxpointerdown': 'mousedown',
  'dxpointermove': 'mousemove',
  'dxpointerup': 'mouseup',
  'dxpointercancel': '',
  'dxpointerover': 'mouseover',
  'dxpointerout': 'mouseout',
  'dxpointerenter': 'mouseenter',
  'dxpointerleave': 'mouseleave'
};

var normalizeMouseEvent = function normalizeMouseEvent(e) {
  e.pointerId = 1;
  return {
    pointers: observer.pointers(),
    pointerId: 1
  };
};

var observer;
var activated = false;

var activateStrategy = function activateStrategy() {
  if (activated) {
    return;
  }

  observer = new _observer.default(eventMap, function () {
    return true;
  });
  activated = true;
};

var MouseStrategy = _base.default.inherit({
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    activateStrategy();
  },
  _fireEvent: function _fireEvent(args) {
    return this.callBase((0, _extend.extend)(normalizeMouseEvent(args.originalEvent), args));
  }
});

MouseStrategy.map = eventMap;
MouseStrategy.normalize = normalizeMouseEvent;
MouseStrategy.activate = activateStrategy;

MouseStrategy.resetObserver = function () {
  observer.reset();
};

var _default = MouseStrategy;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/emitter.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _common = __webpack_require__(8);

var _class = _interopRequireDefault(__webpack_require__(11));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _extend = __webpack_require__(3);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emitter = _class.default.inherit({
  ctor: function ctor(element) {
    this._$element = (0, _renderer.default)(element);
    this._cancelCallback = (0, _callbacks.default)();
    this._acceptCallback = (0, _callbacks.default)();
  },
  getElement: function getElement() {
    return this._$element;
  },
  validate: function validate(e) {
    return !(0, _utils.isDxMouseWheelEvent)(e);
  },
  validatePointers: function validatePointers(e) {
    return (0, _utils.hasTouches)(e) === 1;
  },
  allowInterruptionByMouseWheel: function allowInterruptionByMouseWheel() {
    return true;
  },
  configure: function configure(data) {
    (0, _extend.extend)(this, data);
  },
  addCancelCallback: function addCancelCallback(callback) {
    this._cancelCallback.add(callback);
  },
  removeCancelCallback: function removeCancelCallback() {
    this._cancelCallback.empty();
  },
  _cancel: function _cancel(e) {
    this._cancelCallback.fire(this, e);
  },
  addAcceptCallback: function addAcceptCallback(callback) {
    this._acceptCallback.add(callback);
  },
  removeAcceptCallback: function removeAcceptCallback() {
    this._acceptCallback.empty();
  },
  _accept: function _accept(e) {
    this._acceptCallback.fire(this, e);
  },
  _requestAccept: function _requestAccept(e) {
    this._acceptRequestEvent = e;
  },
  _forgetAccept: function _forgetAccept() {
    this._accept(this._acceptRequestEvent);

    this._acceptRequestEvent = null;
  },
  start: _common.noop,
  move: _common.noop,
  end: _common.noop,
  cancel: _common.noop,
  reset: function reset() {
    if (this._acceptRequestEvent) {
      this._accept(this._acceptRequestEvent);
    }
  },
  _fireEvent: function _fireEvent(eventName, e, params) {
    var eventData = (0, _extend.extend)({
      type: eventName,
      originalEvent: e,
      target: this._getEmitterTarget(e),
      delegateTarget: this.getElement().get(0)
    }, params);
    e = (0, _utils.fireEvent)(eventData);

    if (e.cancel) {
      this._cancel(e);
    }

    return e;
  },
  _getEmitterTarget: function _getEmitterTarget(e) {
    return (this.delegateSelector ? (0, _renderer.default)(e.target).closest(this.delegateSelector) : this.getElement()).get(0);
  },
  dispose: _common.noop
});

var _default = Emitter;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/emitter_registrator.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _element_data = __webpack_require__(20);

var _class = _interopRequireDefault(__webpack_require__(11));

var _extend = __webpack_require__(3);

var _array = __webpack_require__(14);

var _iterator = __webpack_require__(4);

var _event_registrator = _interopRequireDefault(__webpack_require__(24));

var _utils = __webpack_require__(13);

var _pointer = _interopRequireDefault(__webpack_require__(27));

var _wheel = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MANAGER_EVENT = 'dxEventManager';
var EMITTER_DATA = 'dxEmitter';

var EventManager = _class.default.inherit({
  ctor: function ctor() {
    this._attachHandlers();

    this.reset();
    this._proxiedCancelHandler = this._cancelHandler.bind(this);
    this._proxiedAcceptHandler = this._acceptHandler.bind(this);
  },
  _attachHandlers: function _attachHandlers() {
    _ready_callbacks.default.add(function () {
      var document = _dom_adapter.default.getDocument();

      _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)(_pointer.default.down, MANAGER_EVENT), this._pointerDownHandler.bind(this));

      _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)(_pointer.default.move, MANAGER_EVENT), this._pointerMoveHandler.bind(this));

      _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)([_pointer.default.up, _pointer.default.cancel].join(' '), MANAGER_EVENT), this._pointerUpHandler.bind(this));

      _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)(_wheel.name, MANAGER_EVENT), this._mouseWheelHandler.bind(this));
    }.bind(this));
  },
  _eachEmitter: function _eachEmitter(callback) {
    var activeEmitters = this._activeEmitters || [];
    var i = 0;

    while (activeEmitters.length > i) {
      var emitter = activeEmitters[i];

      if (callback(emitter) === false) {
        break;
      }

      if (activeEmitters[i] === emitter) {
        i++;
      }
    }
  },
  _applyToEmitters: function _applyToEmitters(method, arg) {
    this._eachEmitter(function (emitter) {
      emitter[method].call(emitter, arg);
    });
  },
  reset: function reset() {
    this._eachEmitter(this._proxiedCancelHandler);

    this._activeEmitters = [];
  },
  resetEmitter: function resetEmitter(emitter) {
    this._proxiedCancelHandler(emitter);
  },
  _pointerDownHandler: function _pointerDownHandler(e) {
    if ((0, _utils.isMouseEvent)(e) && e.which > 1) {
      return;
    }

    this._updateEmitters(e);
  },
  _updateEmitters: function _updateEmitters(e) {
    if (!this._isSetChanged(e)) {
      return;
    }

    this._cleanEmitters(e);

    this._fetchEmitters(e);
  },
  _isSetChanged: function _isSetChanged(e) {
    var currentSet = this._closestEmitter(e);

    var previousSet = this._emittersSet || [];
    var setChanged = currentSet.length !== previousSet.length;
    (0, _iterator.each)(currentSet, function (index, emitter) {
      setChanged = setChanged || previousSet[index] !== emitter;
      return !setChanged;
    });
    this._emittersSet = currentSet;
    return setChanged;
  },
  _closestEmitter: function _closestEmitter(e) {
    var that = this;
    var result = [];
    var $element = (0, _renderer.default)(e.target);

    function handleEmitter(_, emitter) {
      if (!!emitter && emitter.validatePointers(e) && emitter.validate(e)) {
        emitter.addCancelCallback(that._proxiedCancelHandler);
        emitter.addAcceptCallback(that._proxiedAcceptHandler);
        result.push(emitter);
      }
    }

    while ($element.length) {
      var emitters = (0, _element_data.data)($element.get(0), EMITTER_DATA) || [];
      (0, _iterator.each)(emitters, handleEmitter);
      $element = $element.parent();
    }

    return result;
  },
  _acceptHandler: function _acceptHandler(acceptedEmitter, e) {
    var that = this;

    this._eachEmitter(function (emitter) {
      if (emitter !== acceptedEmitter) {
        that._cancelEmitter(emitter, e);
      }
    });
  },
  _cancelHandler: function _cancelHandler(canceledEmitter, e) {
    this._cancelEmitter(canceledEmitter, e);
  },
  _cancelEmitter: function _cancelEmitter(emitter, e) {
    var activeEmitters = this._activeEmitters;

    if (e) {
      emitter.cancel(e);
    } else {
      emitter.reset();
    }

    emitter.removeCancelCallback();
    emitter.removeAcceptCallback();
    var emitterIndex = (0, _array.inArray)(emitter, activeEmitters);

    if (emitterIndex > -1) {
      activeEmitters.splice(emitterIndex, 1);
    }
  },
  _cleanEmitters: function _cleanEmitters(e) {
    this._applyToEmitters('end', e);

    this.reset(e);
  },
  _fetchEmitters: function _fetchEmitters(e) {
    this._activeEmitters = this._emittersSet.slice();

    this._applyToEmitters('start', e);
  },
  _pointerMoveHandler: function _pointerMoveHandler(e) {
    this._applyToEmitters('move', e);
  },
  _pointerUpHandler: function _pointerUpHandler(e) {
    this._updateEmitters(e);
  },
  _mouseWheelHandler: function _mouseWheelHandler(e) {
    if (!this._allowInterruptionByMouseWheel()) {
      return;
    }

    e.pointers = [null];

    this._pointerDownHandler(e);

    this._adjustWheelEvent(e);

    this._pointerMoveHandler(e);

    e.pointers = [];

    this._pointerUpHandler(e);
  },
  _allowInterruptionByMouseWheel: function _allowInterruptionByMouseWheel() {
    var allowInterruption = true;

    this._eachEmitter(function (emitter) {
      allowInterruption = emitter.allowInterruptionByMouseWheel() && allowInterruption;
      return allowInterruption;
    });

    return allowInterruption;
  },
  _adjustWheelEvent: function _adjustWheelEvent(e) {
    var closestGestureEmitter = null;

    this._eachEmitter(function (emitter) {
      if (!emitter.gesture) {
        return;
      }

      var direction = emitter.getDirection(e);

      if (direction !== 'horizontal' && !e.shiftKey || direction !== 'vertical' && e.shiftKey) {
        closestGestureEmitter = emitter;
        return false;
      }
    });

    if (!closestGestureEmitter) {
      return;
    }

    var direction = closestGestureEmitter.getDirection(e);
    var verticalGestureDirection = direction === 'both' && !e.shiftKey || direction === 'vertical';
    var prop = verticalGestureDirection ? 'pageY' : 'pageX';
    e[prop] += e.delta;
  },
  isActive: function isActive(element) {
    var result = false;

    this._eachEmitter(function (emitter) {
      result = result || emitter.getElement().is(element);
    });

    return result;
  }
});

var eventManager = new EventManager();
var EMITTER_SUBSCRIPTION_DATA = 'dxEmitterSubscription';

var registerEmitter = function registerEmitter(emitterConfig) {
  var emitterClass = emitterConfig.emitter;
  var emitterName = emitterConfig.events[0];
  var emitterEvents = emitterConfig.events;
  (0, _iterator.each)(emitterEvents, function (_, eventName) {
    (0, _event_registrator.default)(eventName, {
      noBubble: !emitterConfig.bubble,
      setup: function setup(element) {
        var subscriptions = (0, _element_data.data)(element, EMITTER_SUBSCRIPTION_DATA) || {};
        var emitters = (0, _element_data.data)(element, EMITTER_DATA) || {};
        var emitter = emitters[emitterName] || new emitterClass(element);
        subscriptions[eventName] = true;
        emitters[emitterName] = emitter;
        (0, _element_data.data)(element, EMITTER_DATA, emitters);
        (0, _element_data.data)(element, EMITTER_SUBSCRIPTION_DATA, subscriptions);
      },
      add: function add(element, handleObj) {
        var emitters = (0, _element_data.data)(element, EMITTER_DATA);
        var emitter = emitters[emitterName];
        emitter.configure((0, _extend.extend)({
          delegateSelector: handleObj.selector
        }, handleObj.data), handleObj.type);
      },
      teardown: function teardown(element) {
        var subscriptions = (0, _element_data.data)(element, EMITTER_SUBSCRIPTION_DATA);
        var emitters = (0, _element_data.data)(element, EMITTER_DATA);
        var emitter = emitters[emitterName];
        delete subscriptions[eventName];
        var disposeEmitter = true;
        (0, _iterator.each)(emitterEvents, function (_, eventName) {
          disposeEmitter = disposeEmitter && !subscriptions[eventName];
          return disposeEmitter;
        });

        if (disposeEmitter) {
          if (eventManager.isActive(element)) {
            eventManager.resetEmitter(emitter);
          }

          emitter && emitter.dispose();
          delete emitters[emitterName];
        }
      }
    });
  });
};

var _default = registerEmitter;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/button.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _devices = _interopRequireDefault(__webpack_require__(15));

var _utils = _interopRequireDefault(__webpack_require__(69));

var _component_registrator = _interopRequireDefault(__webpack_require__(70));

var themes = _interopRequireWildcard(__webpack_require__(73));

var _action = _interopRequireDefault(__webpack_require__(34));

var _validation_engine = _interopRequireDefault(__webpack_require__(76));

var _ui = _interopRequireDefault(__webpack_require__(87));

var _short = __webpack_require__(36);

var _extend = __webpack_require__(3);

var _function_template = __webpack_require__(51);

var _icon = __webpack_require__(111);

var _element = __webpack_require__(54);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// STYLE button
var ANONYMOUS_TEMPLATE_NAME = 'content';

var Button = /*#__PURE__*/function (_Widget) {
  _inherits(Button, _Widget);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this._feedbackHideTimeout = 100;
    return _this;
  }

  _createClass(Button, [{
    key: "_$content",
    value: function _$content() {
      return this.$element().find('.dx-button-content');
    }
  }, {
    key: "_$submitInput",
    value: function _$submitInput() {
      return this.$element().find('.dx-button-submit-input');
    }
  }, {
    key: "_attachActiveEvents",
    value: function _attachActiveEvents(active, inactive) {
      var $el = this._eventBindingTarget();

      var namespace = 'inkRipple';
      var selector = this._activeStateUnit;

      _short.active.off($el, {
        namespace: namespace,
        selector: selector
      });

      _short.active.on($el, new _action.default(active), new _action.default(inactive, {
        excludeValidators: ['disabled', 'readOnly']
      }), {
        showTimeout: this._feedbackShowTimeout,
        hideTimeout: this._feedbackHideTimeout,
        selector: selector,
        namespace: namespace
      });
    }
  }, {
    key: "_defaultOptionsRules",
    value: function _defaultOptionsRules() {
      return _get(_getPrototypeOf(Button.prototype), "_defaultOptionsRules", this).call(this).concat([{
        device: function device() {
          return _devices.default.real().deviceType === 'desktop' && !_devices.default.isSimulator();
        },
        options: {
          focusStateEnabled: true
        }
      }, {
        device: function device() {
          return themes.isMaterial(themes.current());
        },
        options: {
          useInkRipple: true
        }
      }]);
    }
  }, {
    key: "_executeClickAction",
    value: function _executeClickAction(event) {
      this._clickAction({
        validationGroup: this._validationGroupConfig,
        event: event
      });
    }
  }, {
    key: "_findGroup",
    value: function _findGroup() {
      var $element = this.$element();

      var model = this._modelByElement($element);

      var _this$option = this.option(),
          validationGroup = _this$option.validationGroup;

      return validationGroup || _validation_engine.default.findGroup($element, model);
    }
  }, {
    key: "_getContentData",
    value: function _getContentData() {
      var _this$option2 = this.option(),
          icon = _this$option2.icon,
          text = _this$option2.text,
          type = _this$option2.type,
          _templateData = _this$option2._templateData;

      return (0, _extend.extend)({
        icon: type === 'back' && !icon ? 'back' : icon,
        text: text
      }, _templateData);
    }
  }, {
    key: "_getDefaultOptions",
    value: function _getDefaultOptions() {
      return (0, _extend.extend)(_get(_getPrototypeOf(Button.prototype), "_getDefaultOptions", this).call(this), {
        hoverStateEnabled: true,
        onClick: null,
        type: 'normal',
        text: '',
        icon: '',
        iconPosition: 'left',
        validationGroup: undefined,
        activeStateEnabled: true,
        template: 'content',
        useSubmitBehavior: false,
        useInkRipple: false,
        _templateData: {},
        stylingMode: 'contained'
      });
    }
  }, {
    key: "_getSubmitAction",
    value: function _getSubmitAction() {
      var _this2 = this;

      var needValidate = true;
      var validationStatus = 'valid';
      return this._createAction(function (_ref) {
        var event = _ref.event;

        if (needValidate) {
          var validationGroup = _this2._validationGroupConfig;

          if (validationGroup) {
            var _validationGroup$vali = validationGroup.validate(),
                status = _validationGroup$vali.status,
                complete = _validationGroup$vali.complete;

            validationStatus = status;

            if (status === 'pending') {
              needValidate = false;

              _this2.option('disabled', true);

              complete.then(function (_ref2) {
                var status = _ref2.status;

                _this2.option('disabled', false);

                validationStatus = status;
                validationStatus === 'valid' && _this2._submitInput().click();
                needValidate = true;
              });
            }
          }
        }

        validationStatus !== 'valid' && event.preventDefault();
        event.stopPropagation();
      });
    }
  }, {
    key: "_initMarkup",
    value: function _initMarkup() {
      this.$element().addClass('dx-button');

      this._renderType();

      this._renderStylingMode();

      this._renderInkRipple();

      this._renderClick();

      this._updateAriaLabel();

      _get(_getPrototypeOf(Button.prototype), "_initMarkup", this).call(this);

      this._updateContent();

      this.setAria('role', 'button');
    }
  }, {
    key: "_getAnonymousTemplateName",
    value: function _getAnonymousTemplateName() {
      return ANONYMOUS_TEMPLATE_NAME;
    }
  }, {
    key: "_initTemplates",
    value: function _initTemplates() {
      var _this3 = this;

      this._templateManager.addDefaultTemplates({
        content: new _function_template.FunctionTemplate(function (_ref3) {
          var _ref3$model = _ref3.model,
              model = _ref3$model === void 0 ? {} : _ref3$model,
              container = _ref3.container;
          var text = model.text,
              icon = model.icon;

          var _this3$option = _this3.option(),
              iconPosition = _this3$option.iconPosition;

          var $icon = (0, _icon.getImageContainer)(icon);
          var $textContainer = text && (0, _renderer.default)('<span>').text(text).addClass('dx-button-text');
          var $container = (0, _renderer.default)(container);
          $container.append($textContainer);

          if (iconPosition === 'left') {
            $container.prepend($icon);
          } else {
            $icon.addClass('dx-icon-right');
            $container.append($icon);
          }
        })
      });

      _get(_getPrototypeOf(Button.prototype), "_initTemplates", this).call(this);
    }
  }, {
    key: "_optionChanged",
    value: function _optionChanged(args) {
      var name = args.name,
          previousValue = args.previousValue;

      switch (name) {
        case 'onClick':
          this._updateClick();

          break;

        case 'icon':
        case 'text':
          this._updateContent();

          this._updateAriaLabel();

          break;

        case 'type':
          this._updateType(previousValue);

          this._updateContent();

          break;

        case '_templateData':
          break;

        case 'template':
        case 'iconPosition':
          this._updateContent();

          break;

        case 'stylingMode':
          this._updateStylingMode();

          break;

        case 'useSubmitBehavior':
          this._updateSubmitInput();

          break;

        case 'useInkRipple':
          this._invalidate();

          break;

        default:
          _get(_getPrototypeOf(Button.prototype), "_optionChanged", this).call(this, args);

      }
    }
  }, {
    key: "_renderClick",
    value: function _renderClick() {
      var _this4 = this;

      var $el = this.$element();

      _short.dxClick.off($el, {
        namespace: this.NAME
      });

      _short.dxClick.on($el, function (event) {
        return _this4._executeClickAction(event);
      }, {
        namespace: this.NAME
      });

      this._updateClick();
    }
  }, {
    key: "_renderInkRipple",
    value: function _renderInkRipple() {
      var _this5 = this;

      var _this$option3 = this.option(),
          text = _this$option3.text,
          icon = _this$option3.icon,
          type = _this$option3.type,
          useInkRipple = _this$option3.useInkRipple;

      if (useInkRipple) {
        var isOnlyIconButton = !text && icon || type === 'back';

        var _inkRipple = _utils.default.render(isOnlyIconButton ? {
          waveSizeCoefficient: 1,
          useHoldAnimation: false,
          isCentered: true
        } : {});

        var changeWaveVisibility = function changeWaveVisibility(event, visible) {
          var _this5$option = _this5.option(),
              activeStateEnabled = _this5$option.activeStateEnabled,
              useInkRipple = _this5$option.useInkRipple;

          if (useInkRipple && activeStateEnabled && !_this5._disposed) {
            var config = {
              element: _this5._$content(),
              event: event
            };
            visible ? _inkRipple.showWave(config) : _inkRipple.hideWave(config);
          }
        };

        this._attachActiveEvents(function (_ref4) {
          var event = _ref4.event;
          return changeWaveVisibility(event, true);
        }, function (_ref5) {
          var event = _ref5.event;
          return changeWaveVisibility(event);
        });
      }
    }
  }, {
    key: "_renderStylingMode",
    value: function _renderStylingMode() {
      var $element = this.$element();

      var _this$option4 = this.option(),
          stylingMode = _this$option4.stylingMode;

      if (['contained', 'text', 'outlined'].indexOf(stylingMode) === -1) {
        stylingMode = this._getDefaultOptions().stylingMode;
      }

      $element.addClass("dx-button-mode-".concat(stylingMode));
    }
  }, {
    key: "_renderSubmitInput",
    value: function _renderSubmitInput() {
      var _this$option5 = this.option(),
          useSubmitBehavior = _this$option5.useSubmitBehavior;

      if (useSubmitBehavior) {
        var submitAction = this._getSubmitAction();

        var $content = this._$content();

        (0, _renderer.default)('<input>').attr('type', 'submit').attr('tabindex', -1).addClass('dx-button-submit-input').appendTo($content);

        _short.click.on(this._$submitInput(), function (event) {
          return submitAction({
            event: event
          });
        });
      }
    }
  }, {
    key: "_renderType",
    value: function _renderType() {
      var _this$option6 = this.option(),
          type = _this$option6.type;

      var $element = this.$element();
      type && $element.addClass("dx-button-".concat(type));
    }
  }, {
    key: "_submitInput",
    value: function _submitInput() {
      return this._$submitInput().get(0);
    }
  }, {
    key: "_supportedKeys",
    value: function _supportedKeys() {
      var _this6 = this;

      var click = function click(e) {
        e.preventDefault();

        _this6._executeClickAction(e);
      };

      return (0, _extend.extend)(_get(_getPrototypeOf(Button.prototype), "_supportedKeys", this).call(this), {
        space: click,
        enter: click
      });
    }
  }, {
    key: "_updateAriaLabel",
    value: function _updateAriaLabel() {
      var ariaTarget = this._getAriaTarget();

      var _this$option7 = this.option(),
          icon = _this$option7.icon,
          text = _this$option7.text;

      if (!text) {
        if ((0, _icon.getImageSourceType)(icon) === 'image') {
          icon = icon.indexOf('base64') === -1 ? icon.replace(/.+\/([^.]+)\..+$/, '$1') : 'Base64';
        }

        text = icon || '';
      }

      ariaTarget.attr('aria-label', text || null);
    }
  }, {
    key: "_updateClick",
    value: function _updateClick() {
      var _this7 = this;

      this._clickAction = this._createActionByOption('onClick', {
        excludeValidators: ['readOnly'],
        afterExecute: function afterExecute() {
          var _this7$option = _this7.option(),
              useSubmitBehavior = _this7$option.useSubmitBehavior;

          useSubmitBehavior && setTimeout(function () {
            return _this7._submitInput().click();
          });
        }
      });
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var $element = this.$element();

      var $content = this._$content();

      var data = this._getContentData();

      var _this$option8 = this.option(),
          template = _this$option8.template,
          iconPosition = _this$option8.iconPosition;

      var icon = data.icon,
          text = data.text;
      $content.length ? $content.empty() : $content = (0, _renderer.default)('<div>').addClass('dx-button-content').appendTo($element);
      $element.toggleClass('dx-button-has-icon', !!icon).toggleClass('dx-button-icon-right', !!icon && iconPosition !== 'left').toggleClass('dx-button-has-text', !!text);
      var $template = (0, _renderer.default)(this._getTemplateByOption('template').render({
        model: data,
        container: (0, _element.getPublicElement)($content),
        transclude: this._templateManager.anonymousTemplateName === template
      }));

      if ($template.hasClass('dx-template-wrapper')) {
        $template.addClass('dx-button-content');
        $content.replaceWith($template);
      }

      this._updateSubmitInput();
    }
  }, {
    key: "_updateSubmitInput",
    value: function _updateSubmitInput() {
      var _this$option9 = this.option(),
          useSubmitBehavior = _this$option9.useSubmitBehavior;

      var $submitInput = this._$submitInput();

      if (!useSubmitBehavior && $submitInput.length) {
        $submitInput.remove();
      } else if (useSubmitBehavior && !$submitInput.length) {
        this._renderSubmitInput();
      }
    }
  }, {
    key: "_updateStylingMode",
    value: function _updateStylingMode() {
      var $element = this.$element();
      ['contained', 'text', 'outlined'].map(function (mode) {
        return "dx-button-mode-".concat(mode);
      }).forEach($element.removeClass.bind($element));

      this._renderStylingMode();
    }
  }, {
    key: "_updateType",
    value: function _updateType(previous) {
      var $element = this.$element(); // TODO: temporary solution

      [previous, 'back', 'danger', 'default', 'normal', 'success'].map(function (type) {
        return "dx-button-".concat(type);
      }).forEach($element.removeClass.bind($element));

      this._renderType();
    }
  }, {
    key: "_validationGroupConfig",
    get: function get() {
      return _validation_engine.default.getGroupConfig(this._findGroup());
    }
  }]);

  return Button;
}(_ui.default);

(0, _component_registrator.default)('dxButton', Button);
var _default = Button;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/renderer_base.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _element_data = __webpack_require__(20);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _window = __webpack_require__(6);

var _type = __webpack_require__(1);

var _style = __webpack_require__(42);

var _size = _interopRequireDefault(__webpack_require__(67));

var _html_parser = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var window = (0, _window.getWindow)();
var renderer;

var initRender = function initRender(selector, context) {
  if (!selector) {
    this.length = 0;
    return this;
  }

  if (typeof selector === 'string') {
    if (selector === 'body') {
      this[0] = context ? context.body : _dom_adapter.default.getBody();
      this.length = 1;
      return this;
    }

    context = context || _dom_adapter.default.getDocument();

    if (selector[0] === '<') {
      this[0] = _dom_adapter.default.createElement(selector.slice(1, -1), context);
      this.length = 1;
      return this;
    }

    [].push.apply(this, _dom_adapter.default.querySelectorAll(context, selector));
    return this;
  } else if (_dom_adapter.default.isNode(selector) || (0, _type.isWindow)(selector)) {
    this[0] = selector;
    this.length = 1;
    return this;
  } else if (Array.isArray(selector)) {
    [].push.apply(this, selector);
    return this;
  }

  return renderer(selector.toArray ? selector.toArray() : [selector]);
};

renderer = function renderer(selector, context) {
  return new initRender(selector, context);
};

renderer.fn = {
  dxRenderer: true
};
initRender.prototype = renderer.fn;

var repeatMethod = function repeatMethod(methodName, args) {
  for (var i = 0; i < this.length; i++) {
    var item = renderer(this[i]);
    item[methodName].apply(item, args);
  }

  return this;
};

var setAttributeValue = function setAttributeValue(element, attrName, value) {
  if (value !== undefined && value !== null) {
    _dom_adapter.default.setAttribute(element, attrName, value);
  } else {
    _dom_adapter.default.removeAttribute(element, attrName);
  }
};

initRender.prototype.show = function () {
  return this.toggle(true);
};

initRender.prototype.hide = function () {
  return this.toggle(false);
};

initRender.prototype.toggle = function (value) {
  if (this[0]) {
    this.toggleClass('dx-state-invisible', !value);
  }

  return this;
};

initRender.prototype.attr = function (attrName, value) {
  if (this.length > 1 && arguments.length > 1) return repeatMethod.call(this, 'attr', arguments);

  if (!this[0]) {
    if ((0, _type.isObject)(attrName) || value !== undefined) {
      return this;
    } else {
      return undefined;
    }
  }

  if (!this[0].getAttribute) {
    return this.prop(attrName, value);
  }

  if (typeof attrName === 'string' && arguments.length === 1) {
    var result = this[0].getAttribute(attrName);
    return result == null ? undefined : result;
  } else if ((0, _type.isPlainObject)(attrName)) {
    for (var key in attrName) {
      this.attr(key, attrName[key]);
    }
  } else {
    setAttributeValue(this[0], attrName, value);
  }

  return this;
};

initRender.prototype.removeAttr = function (attrName) {
  this[0] && _dom_adapter.default.removeAttribute(this[0], attrName);
  return this;
};

initRender.prototype.prop = function (propName, value) {
  if (!this[0]) return this;

  if (typeof propName === 'string' && arguments.length === 1) {
    return this[0][propName];
  } else if ((0, _type.isPlainObject)(propName)) {
    for (var key in propName) {
      this.prop(key, propName[key]);
    }
  } else {
    _dom_adapter.default.setProperty(this[0], propName, value);
  }

  return this;
};

initRender.prototype.addClass = function (className) {
  return this.toggleClass(className, true);
};

initRender.prototype.removeClass = function (className) {
  return this.toggleClass(className, false);
};

initRender.prototype.hasClass = function (className) {
  if (!this[0] || this[0].className === undefined) return false;
  var classNames = className.split(' ');

  for (var i = 0; i < classNames.length; i++) {
    if (this[0].classList) {
      if (this[0].classList.contains(classNames[i])) return true;
    } else {
      // IE9
      var _className = (0, _type.isString)(this[0].className) ? this[0].className : _dom_adapter.default.getAttribute(this[0], 'class');

      if ((_className || '').split(' ').indexOf(classNames[i]) >= 0) return true;
    }
  }

  return false;
};

initRender.prototype.toggleClass = function (className, value) {
  if (this.length > 1) {
    return repeatMethod.call(this, 'toggleClass', arguments);
  }

  if (!this[0] || !className) return this;
  value = value === undefined ? !this.hasClass(className) : value;
  var classNames = className.split(' ');

  for (var i = 0; i < classNames.length; i++) {
    _dom_adapter.default.setClass(this[0], classNames[i], value);
  }

  return this;
};

['width', 'height', 'outerWidth', 'outerHeight', 'innerWidth', 'innerHeight'].forEach(function (methodName) {
  var partialName = methodName.toLowerCase().indexOf('width') >= 0 ? 'Width' : 'Height';
  var propName = partialName.toLowerCase();
  var isOuter = methodName.indexOf('outer') === 0;
  var isInner = methodName.indexOf('inner') === 0;

  initRender.prototype[methodName] = function (value) {
    if (this.length > 1 && arguments.length > 0) {
      return repeatMethod.call(this, methodName, arguments);
    }

    var element = this[0];

    if (!element) {
      return;
    }

    if ((0, _type.isWindow)(element)) {
      return isOuter ? element['inner' + partialName] : _dom_adapter.default.getDocumentElement()['client' + partialName];
    }

    if (_dom_adapter.default.isDocument(element)) {
      var documentElement = _dom_adapter.default.getDocumentElement();

      var body = _dom_adapter.default.getBody();

      return Math.max(body['scroll' + partialName], body['offset' + partialName], documentElement['scroll' + partialName], documentElement['offset' + partialName], documentElement['client' + partialName]);
    }

    if (arguments.length === 0 || typeof value === 'boolean') {
      var include = {
        paddings: isInner || isOuter,
        borders: isOuter,
        margins: value
      };
      return _size.default.getSize(element, propName, include);
    }

    if (value === undefined || value === null) {
      return this;
    }

    if ((0, _type.isNumeric)(value)) {
      var elementStyles = window.getComputedStyle(element);

      var sizeAdjustment = _size.default.getElementBoxParams(propName, elementStyles);

      var isBorderBox = elementStyles.boxSizing === 'border-box';
      value = Number(value);

      if (isOuter) {
        value -= isBorderBox ? 0 : sizeAdjustment.border + sizeAdjustment.padding;
      } else if (isInner) {
        value += isBorderBox ? sizeAdjustment.border : -sizeAdjustment.padding;
      } else if (isBorderBox) {
        value += sizeAdjustment.border + sizeAdjustment.padding;
      }
    }

    value += (0, _type.isNumeric)(value) ? 'px' : '';

    _dom_adapter.default.setStyle(element, propName, value);

    return this;
  };
});

initRender.prototype.html = function (value) {
  if (!arguments.length) {
    return this[0].innerHTML;
  }

  this.empty();

  if (typeof value === 'string' && !(0, _html_parser.isTablePart)(value) || typeof value === 'number') {
    this[0].innerHTML = value;
    return this;
  }

  return this.append((0, _html_parser.parseHTML)(value));
};

var appendElements = function appendElements(element, nextSibling) {
  if (!this[0] || !element) return;

  if (typeof element === 'string') {
    element = (0, _html_parser.parseHTML)(element);
  } else if (element.nodeType) {
    element = [element];
  } else if ((0, _type.isNumeric)(element)) {
    element = [_dom_adapter.default.createTextNode(element)];
  }

  for (var i = 0; i < element.length; i++) {
    var item = element[i];
    var container = this[0];
    var wrapTR = container.tagName === 'TABLE' && item.tagName === 'TR';

    if (wrapTR && container.tBodies && container.tBodies.length) {
      container = container.tBodies[0];
    }

    _dom_adapter.default.insertElement(container, item.nodeType ? item : item[0], nextSibling);
  }
};

var setCss = function setCss(name, value) {
  if (!this[0] || !this[0].style) return;

  if (value === null || typeof value === 'number' && isNaN(value)) {
    return;
  }

  name = (0, _style.styleProp)(name);

  for (var i = 0; i < this.length; i++) {
    this[i].style[name] = (0, _style.normalizeStyleProp)(name, value);
  }
};

initRender.prototype.css = function (name, value) {
  if ((0, _type.isString)(name)) {
    if (arguments.length === 2) {
      setCss.call(this, name, value);
    } else {
      if (!this[0]) return;
      name = (0, _style.styleProp)(name);
      var result = window.getComputedStyle(this[0])[name] || this[0].style[name];
      return (0, _type.isNumeric)(result) ? result.toString() : result;
    }
  } else if ((0, _type.isPlainObject)(name)) {
    for (var key in name) {
      setCss.call(this, key, name[key]);
    }
  }

  return this;
};

initRender.prototype.prepend = function (element) {
  if (arguments.length > 1) {
    for (var i = 0; i < arguments.length; i++) {
      this.prepend(arguments[i]);
    }

    return this;
  }

  appendElements.apply(this, [element, this[0].firstChild]);
  return this;
};

initRender.prototype.append = function (element) {
  if (arguments.length > 1) {
    for (var i = 0; i < arguments.length; i++) {
      this.append(arguments[i]);
    }

    return this;
  }

  appendElements.apply(this, [element]);
  return this;
};

initRender.prototype.prependTo = function (element) {
  if (this.length > 1) {
    for (var i = this.length - 1; i >= 0; i--) {
      renderer(this[i]).prependTo(element);
    }

    return this;
  }

  element = renderer(element);

  if (element[0]) {
    _dom_adapter.default.insertElement(element[0], this[0], element[0].firstChild);
  }

  return this;
};

initRender.prototype.appendTo = function (element) {
  if (this.length > 1) {
    return repeatMethod.call(this, 'appendTo', arguments);
  }

  _dom_adapter.default.insertElement(renderer(element)[0], this[0]);

  return this;
};

initRender.prototype.insertBefore = function (element) {
  if (element && element[0]) {
    _dom_adapter.default.insertElement(element[0].parentNode, this[0], element[0]);
  }

  return this;
};

initRender.prototype.insertAfter = function (element) {
  if (element && element[0]) {
    _dom_adapter.default.insertElement(element[0].parentNode, this[0], element[0].nextSibling);
  }

  return this;
};

initRender.prototype.before = function (element) {
  if (this[0]) {
    _dom_adapter.default.insertElement(this[0].parentNode, element[0], this[0]);
  }

  return this;
};

initRender.prototype.after = function (element) {
  if (this[0]) {
    _dom_adapter.default.insertElement(this[0].parentNode, element[0], this[0].nextSibling);
  }

  return this;
};

initRender.prototype.wrap = function (wrapper) {
  if (this[0]) {
    var wrap = renderer(wrapper);
    wrap.insertBefore(this);
    wrap.append(this);
  }

  return this;
};

initRender.prototype.wrapInner = function (wrapper) {
  var contents = this.contents();

  if (contents.length) {
    contents.wrap(wrapper);
  } else {
    this.append(wrapper);
  }

  return this;
};

initRender.prototype.replaceWith = function (element) {
  if (!(element && element[0])) return;
  if (element.is(this)) return this;
  element.insertBefore(this);
  this.remove();
  return element;
};

initRender.prototype.remove = function () {
  if (this.length > 1) {
    return repeatMethod.call(this, 'remove', arguments);
  }

  (0, _element_data.cleanDataRecursive)(this[0], true);

  _dom_adapter.default.removeElement(this[0]);

  return this;
};

initRender.prototype.detach = function () {
  if (this.length > 1) {
    return repeatMethod.call(this, 'detach', arguments);
  }

  _dom_adapter.default.removeElement(this[0]);

  return this;
};

initRender.prototype.empty = function () {
  if (this.length > 1) {
    return repeatMethod.call(this, 'empty', arguments);
  }

  (0, _element_data.cleanDataRecursive)(this[0]);

  _dom_adapter.default.setText(this[0], '');

  return this;
};

initRender.prototype.clone = function () {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result.push(this[i].cloneNode(true));
  }

  return renderer(result);
};

initRender.prototype.text = function (value) {
  if (!arguments.length) {
    var result = '';

    for (var i = 0; i < this.length; i++) {
      result += this[i] && this[i].textContent || '';
    }

    return result;
  }

  var text = (0, _type.isFunction)(value) ? value() : value;
  (0, _element_data.cleanDataRecursive)(this[0], false);

  _dom_adapter.default.setText(this[0], (0, _type.isDefined)(text) ? text : '');

  return this;
};

initRender.prototype.val = function (value) {
  if (arguments.length === 1) {
    return this.prop('value', (0, _type.isDefined)(value) ? value : '');
  }

  return this.prop('value');
};

initRender.prototype.contents = function () {
  if (!this[0]) return renderer();
  var result = [];
  result.push.apply(result, this[0].childNodes);
  return renderer(result);
};

initRender.prototype.find = function (selector) {
  var result = renderer();

  if (!selector) {
    return result;
  }

  var nodes = [];
  var i;

  if (typeof selector === 'string') {
    selector = selector.trim();

    for (i = 0; i < this.length; i++) {
      var element = this[i];

      if (_dom_adapter.default.isElementNode(element)) {
        var elementId = element.getAttribute('id');
        var queryId = elementId || 'dx-query-children';

        if (!elementId) {
          setAttributeValue(element, 'id', queryId);
        }

        queryId = '[id=\'' + queryId + '\'] ';
        var querySelector = queryId + selector.replace(/([^\\])(,)/g, '$1, ' + queryId);
        nodes.push.apply(nodes, _dom_adapter.default.querySelectorAll(element, querySelector));
        setAttributeValue(element, 'id', elementId);
      } else if (_dom_adapter.default.isDocument(element)) {
        nodes.push.apply(nodes, _dom_adapter.default.querySelectorAll(element, selector));
      }
    }
  } else {
    for (i = 0; i < this.length; i++) {
      selector = _dom_adapter.default.isNode(selector) ? selector : selector[0];

      if (this[i] !== selector && this[i].contains(selector)) {
        nodes.push(selector);
      }
    }
  }

  return result.add(nodes);
};

var isVisible = function isVisible(_, element) {
  if (!element.nodeType) return true;
  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

initRender.prototype.filter = function (selector) {
  if (!selector) return renderer();

  if (selector === ':visible') {
    return this.filter(isVisible);
  } else if (selector === ':hidden') {
    return this.filter(function (_, element) {
      return !isVisible(_, element);
    });
  }

  var result = [];

  for (var i = 0; i < this.length; i++) {
    var item = this[i];

    if (_dom_adapter.default.isElementNode(item) && (0, _type.type)(selector) === 'string') {
      _dom_adapter.default.elementMatches(item, selector) && result.push(item);
    } else if (_dom_adapter.default.isNode(selector) || (0, _type.isWindow)(selector)) {
      selector === item && result.push(item);
    } else if ((0, _type.isFunction)(selector)) {
      selector.call(item, i, item) && result.push(item);
    } else {
      for (var j = 0; j < selector.length; j++) {
        selector[j] === item && result.push(item);
      }
    }
  }

  return renderer(result);
};

initRender.prototype.not = function (selector) {
  var result = [];
  var nodes = this.filter(selector).toArray();

  for (var i = 0; i < this.length; i++) {
    if (nodes.indexOf(this[i]) === -1) {
      result.push(this[i]);
    }
  }

  return renderer(result);
};

initRender.prototype.is = function (selector) {
  return !!this.filter(selector).length;
};

initRender.prototype.children = function (selector) {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    var nodes = this[i] ? this[i].childNodes : [];

    for (var j = 0; j < nodes.length; j++) {
      if (_dom_adapter.default.isElementNode(nodes[j])) {
        result.push(nodes[j]);
      }
    }
  }

  result = renderer(result);
  return selector ? result.filter(selector) : result;
};

initRender.prototype.siblings = function () {
  var element = this[0];

  if (!element || !element.parentNode) {
    return renderer();
  }

  var result = [];
  var parentChildNodes = element.parentNode.childNodes || [];

  for (var i = 0; i < parentChildNodes.length; i++) {
    var node = parentChildNodes[i];

    if (_dom_adapter.default.isElementNode(node) && node !== element) {
      result.push(node);
    }
  }

  return renderer(result);
};

initRender.prototype.each = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback.call(this[i], i, this[i]) === false) {
      break;
    }
  }
};

initRender.prototype.index = function (element) {
  if (!element) {
    return this.parent().children().index(this);
  }

  element = renderer(element);
  return this.toArray().indexOf(element[0]);
};

initRender.prototype.get = function (index) {
  return this[index < 0 ? this.length + index : index];
};

initRender.prototype.eq = function (index) {
  index = index < 0 ? this.length + index : index;
  return renderer(this[index]);
};

initRender.prototype.first = function () {
  return this.eq(0);
};

initRender.prototype.last = function () {
  return this.eq(-1);
};

initRender.prototype.parent = function (selector) {
  if (!this[0]) return renderer();
  var result = renderer(this[0].parentNode);
  return !selector || result.is(selector) ? result : renderer();
};

initRender.prototype.parents = function (selector) {
  var result = [];
  var parent = this.parent();

  while (parent && parent[0] && !_dom_adapter.default.isDocument(parent[0])) {
    if (_dom_adapter.default.isElementNode(parent[0])) {
      if (!selector || selector && parent.is(selector)) {
        result.push(parent.get(0));
      }
    }

    parent = parent.parent();
  }

  return renderer(result);
};

initRender.prototype.closest = function (selector) {
  if (this.is(selector)) {
    return this;
  }

  var parent = this.parent();

  while (parent && parent.length) {
    if (parent.is(selector)) {
      return parent;
    }

    parent = parent.parent();
  }

  return renderer();
};

initRender.prototype.next = function (selector) {
  if (!this[0]) return renderer();
  var next = renderer(this[0].nextSibling);

  if (!arguments.length) {
    return next;
  }

  while (next && next.length) {
    if (next.is(selector)) return next;
    next = next.next();
  }

  return renderer();
};

initRender.prototype.prev = function () {
  if (!this[0]) return renderer();
  return renderer(this[0].previousSibling);
};

initRender.prototype.add = function (selector) {
  var targets = renderer(selector);
  var result = this.toArray();

  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];

    if (result.indexOf(target) === -1) {
      result.push(target);
    }
  }

  return renderer(result);
};

var emptyArray = [];

initRender.prototype.splice = function () {
  return renderer(emptyArray.splice.apply(this, arguments));
};

initRender.prototype.slice = function () {
  return renderer(emptyArray.slice.apply(this, arguments));
};

initRender.prototype.toArray = function () {
  return emptyArray.slice.call(this);
};

var getWindowByElement = function getWindowByElement(element) {
  return (0, _type.isWindow)(element) ? element : element.defaultView;
};

initRender.prototype.offset = function () {
  if (!this[0]) return;

  if (!this[0].getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  }

  var rect = this[0].getBoundingClientRect();
  var win = getWindowByElement(this[0].ownerDocument);
  var docElem = this[0].ownerDocument.documentElement;
  return {
    top: rect.top + win.pageYOffset - docElem.clientTop,
    left: rect.left + win.pageXOffset - docElem.clientLeft
  };
};

initRender.prototype.offsetParent = function () {
  if (!this[0]) return renderer();
  var offsetParent = renderer(this[0].offsetParent);

  while (offsetParent[0] && offsetParent.css('position') === 'static') {
    offsetParent = renderer(offsetParent[0].offsetParent);
  }

  offsetParent = offsetParent[0] ? offsetParent : renderer(_dom_adapter.default.getDocumentElement());
  return offsetParent;
};

initRender.prototype.position = function () {
  if (!this[0]) return;
  var offset;
  var marginTop = parseFloat(this.css('marginTop'));
  var marginLeft = parseFloat(this.css('marginLeft'));

  if (this.css('position') === 'fixed') {
    offset = this[0].getBoundingClientRect();
    return {
      top: offset.top - marginTop,
      left: offset.left - marginLeft
    };
  }

  offset = this.offset();
  var offsetParent = this.offsetParent();
  var parentOffset = {
    top: 0,
    left: 0
  };

  if (offsetParent[0].nodeName !== 'HTML') {
    parentOffset = offsetParent.offset();
  }

  parentOffset = {
    top: parentOffset.top + parseFloat(offsetParent.css('borderTopWidth')),
    left: parentOffset.left + parseFloat(offsetParent.css('borderLeftWidth'))
  };
  return {
    top: offset.top - parentOffset.top - marginTop,
    left: offset.left - parentOffset.left - marginLeft
  };
};

[{
  name: 'scrollLeft',
  offsetProp: 'pageXOffset',
  scrollWindow: function scrollWindow(win, value) {
    win.scrollTo(value, win.pageYOffset);
  }
}, {
  name: 'scrollTop',
  offsetProp: 'pageYOffset',
  scrollWindow: function scrollWindow(win, value) {
    win.scrollTo(win.pageXOffset, value);
  }
}].forEach(function (directionStrategy) {
  var propName = directionStrategy.name;

  initRender.prototype[propName] = function (value) {
    if (!this[0]) {
      return;
    }

    var window = getWindowByElement(this[0]);

    if (value === undefined) {
      return window ? window[directionStrategy.offsetProp] : this[0][propName];
    }

    if (window) {
      directionStrategy.scrollWindow(window, value);
    } else {
      this[0][propName] = value;
    }

    return this;
  };
});

initRender.prototype.data = function (key, value) {
  if (!this[0]) return;

  if (arguments.length < 2) {
    return _element_data.data.call(renderer, this[0], key);
  }

  _element_data.data.call(renderer, this[0], key, value);

  return this;
};

initRender.prototype.removeData = function (key) {
  this[0] && (0, _element_data.removeData)(this[0], key);
  return this;
};

var rendererWrapper = function rendererWrapper() {
  return renderer.apply(this, arguments);
};

Object.defineProperty(rendererWrapper, 'fn', {
  enumerable: true,
  configurable: true,
  get: function get() {
    return renderer.fn;
  },
  set: function set(value) {
    renderer.fn = value;
  }
});
var _default = {
  set: function set(strategy) {
    renderer = strategy;
  },
  get: function get() {
    return rendererWrapper;
  }
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/version.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;
var _default = '20.2.1';
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/guid.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _class = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Guid = _class.default.inherit({
  /**
  * @name Guidmethods.ctor
  * @publicName ctor()
  */

  /**
  * @name Guidmethods.ctor
  * @publicName ctor(value)
  * @param1 value:string
  */
  ctor: function ctor(value) {
    if (value) {
      value = String(value);
    }

    this._value = this._normalize(value || this._generate());
  },
  _normalize: function _normalize(value) {
    value = value.replace(/[^a-f0-9]/ig, '').toLowerCase();

    while (value.length < 32) {
      value += '0';
    }

    return [value.substr(0, 8), value.substr(8, 4), value.substr(12, 4), value.substr(16, 4), value.substr(20, 12)].join('-');
  },
  _generate: function _generate() {
    var value = '';

    for (var i = 0; i < 32; i++) {
      value += Math.round(Math.random() * 15).toString(16);
    }

    return value;
  },
  toString: function toString() {
    return this._value;
  },
  valueOf: function valueOf() {
    return this._value;
  },
  toJSON: function toJSON() {
    return this._value;
  }
});

var _default = Guid;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/hook_touch_props.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = _default;
var touchPropsToHook = ['pageX', 'pageY', 'screenX', 'screenY', 'clientX', 'clientY'];

var touchPropHook = function touchPropHook(name, event) {
  if (event[name] && !event.touches || !event.touches) {
    return event[name];
  }

  var touches = event.touches.length ? event.touches : event.changedTouches;

  if (!touches.length) {
    return;
  }

  return touches[0][name];
};

function _default(callback) {
  touchPropsToHook.forEach(function (name) {
    callback(name, function (event) {
      return touchPropHook(name, event);
    });
  }, this);
}

module.exports = exports.default;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/size.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.parseHeight = exports.getVisibleHeight = exports.getVerticalOffsets = exports.addOffsetToMinHeight = exports.addOffsetToMaxHeight = exports.getElementBoxParams = exports.getSize = void 0;

var _window = __webpack_require__(6);

var _type = __webpack_require__(1);

var window = (0, _window.getWindow)();
var SPECIAL_HEIGHT_VALUES = ['auto', 'none', 'inherit', 'initial'];

var getSizeByStyles = function getSizeByStyles(elementStyles, styles) {
  var result = 0;
  styles.forEach(function (style) {
    result += parseFloat(elementStyles[style]) || 0;
  });
  return result;
};

var getElementBoxParams = function getElementBoxParams(name, elementStyles) {
  var beforeName = name === 'width' ? 'Left' : 'Top';
  var afterName = name === 'width' ? 'Right' : 'Bottom';
  return {
    padding: getSizeByStyles(elementStyles, ['padding' + beforeName, 'padding' + afterName]),
    border: getSizeByStyles(elementStyles, ['border' + beforeName + 'Width', 'border' + afterName + 'Width']),
    margin: getSizeByStyles(elementStyles, ['margin' + beforeName, 'margin' + afterName])
  };
};

exports.getElementBoxParams = getElementBoxParams;

var getBoxSizingOffset = function getBoxSizingOffset(name, elementStyles, boxParams) {
  var size = elementStyles[name];

  if (elementStyles.boxSizing === 'border-box' && size.length && size[size.length - 1] !== '%') {
    return boxParams.border + boxParams.padding;
  }

  return 0;
};

var getSize = function getSize(element, name, include) {
  var elementStyles = window.getComputedStyle(element);
  var boxParams = getElementBoxParams(name, elementStyles);
  var clientRect = element.getClientRects().length;
  var boundingClientRect = element.getBoundingClientRect()[name];
  var result = clientRect ? boundingClientRect : 0;

  if (result <= 0) {
    result = parseFloat(elementStyles[name] || element.style[name]) || 0;
    result -= getBoxSizingOffset(name, elementStyles, boxParams);
  } else {
    result -= boxParams.padding + boxParams.border;
  }

  if (include.paddings) {
    result += boxParams.padding;
  }

  if (include.borders) {
    result += boxParams.border;
  }

  if (include.margins) {
    result += boxParams.margin;
  }

  return result;
};

exports.getSize = getSize;

var getContainerHeight = function getContainerHeight(container) {
  return (0, _type.isWindow)(container) ? container.innerHeight : container.offsetHeight;
};

var parseHeight = function parseHeight(value, container) {
  if (value.indexOf('px') > 0) {
    value = parseInt(value.replace('px', ''));
  } else if (value.indexOf('%') > 0) {
    value = parseInt(value.replace('%', '')) * getContainerHeight(container) / 100;
  } else if (!isNaN(value)) {
    value = parseInt(value);
  }

  return value;
};

exports.parseHeight = parseHeight;

var getHeightWithOffset = function getHeightWithOffset(value, offset, container) {
  if (!value) {
    return null;
  }

  if (SPECIAL_HEIGHT_VALUES.indexOf(value) > -1) {
    return offset ? null : value;
  }

  if ((0, _type.isString)(value)) {
    value = parseHeight(value, container);
  }

  if ((0, _type.isNumeric)(value)) {
    return Math.max(0, value + offset);
  }

  var operationString = offset < 0 ? ' - ' : ' ';
  return 'calc(' + value + operationString + Math.abs(offset) + 'px)';
};

var addOffsetToMaxHeight = function addOffsetToMaxHeight(value, offset, container) {
  var maxHeight = getHeightWithOffset(value, offset, container);
  return maxHeight !== null ? maxHeight : 'none';
};

exports.addOffsetToMaxHeight = addOffsetToMaxHeight;

var addOffsetToMinHeight = function addOffsetToMinHeight(value, offset, container) {
  var minHeight = getHeightWithOffset(value, offset, container);
  return minHeight !== null ? minHeight : 0;
};

exports.addOffsetToMinHeight = addOffsetToMinHeight;

var getVerticalOffsets = function getVerticalOffsets(element, withMargins) {
  if (!element) {
    return 0;
  }

  var boxParams = getElementBoxParams('height', window.getComputedStyle(element));
  return boxParams.padding + boxParams.border + (withMargins ? boxParams.margin : 0);
};

exports.getVerticalOffsets = getVerticalOffsets;

var getVisibleHeight = function getVisibleHeight(element) {
  if (element) {
    var boundingClientRect = element.getBoundingClientRect();

    if (boundingClientRect.height) {
      return boundingClientRect.height;
    }
  }

  return 0;
};

exports.getVisibleHeight = getVisibleHeight;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/storage.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.sessionStorage = void 0;

var _window = __webpack_require__(6);

var window = (0, _window.getWindow)();

var getSessionStorage = function getSessionStorage() {
  var sessionStorage;

  try {
    sessionStorage = window.sessionStorage;
  } catch (e) {}

  return sessionStorage;
};

exports.sessionStorage = getSessionStorage;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/widget/utils.ink_ripple.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.showWave = showWave;
exports.hideWave = hideWave;
exports.render = exports.initConfig = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INKRIPPLE_CLASS = 'dx-inkripple';
var INKRIPPLE_WAVE_CLASS = 'dx-inkripple-wave';
var INKRIPPLE_SHOWING_CLASS = 'dx-inkripple-showing';
var INKRIPPLE_HIDING_CLASS = 'dx-inkripple-hiding';
var DEFAULT_WAVE_SIZE_COEFFICIENT = 2;
var MAX_WAVE_SIZE = 4000; // NOTE: incorrect scaling of ink with big size (T310238)

var ANIMATION_DURATION = 300;
var HOLD_ANIMATION_DURATION = 1000;
var DEFAULT_WAVE_INDEX = 0;

var initConfig = function initConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var useHoldAnimation = config.useHoldAnimation,
      waveSizeCoefficient = config.waveSizeCoefficient,
      isCentered = config.isCentered,
      wavesNumber = config.wavesNumber;
  return {
    waveSizeCoefficient: waveSizeCoefficient || DEFAULT_WAVE_SIZE_COEFFICIENT,
    isCentered: isCentered || false,
    wavesNumber: wavesNumber || 1,
    durations: getDurations(useHoldAnimation !== null && useHoldAnimation !== void 0 ? useHoldAnimation : true)
  };
};

exports.initConfig = initConfig;

var render = function render(args) {
  var config = initConfig(args);
  return {
    showWave: showWave.bind(this, config),
    hideWave: hideWave.bind(this, config)
  };
};

exports.render = render;

var getInkRipple = function getInkRipple(element) {
  var result = element.children('.' + INKRIPPLE_CLASS);

  if (result.length === 0) {
    result = (0, _renderer.default)('<div>').addClass(INKRIPPLE_CLASS).appendTo(element);
  }

  return result;
};

var getWaves = function getWaves(element, wavesNumber) {
  var inkRipple = getInkRipple((0, _renderer.default)(element));
  var result = inkRipple.children('.' + INKRIPPLE_WAVE_CLASS).toArray();

  for (var i = result.length; i < wavesNumber; i++) {
    var $currentWave = (0, _renderer.default)('<div>').appendTo(inkRipple).addClass(INKRIPPLE_WAVE_CLASS);
    result.push($currentWave[0]);
  }

  return (0, _renderer.default)(result);
};

var getWaveStyleConfig = function getWaveStyleConfig(args, config) {
  var element = (0, _renderer.default)(config.element);
  var elementWidth = element.outerWidth();
  var elementHeight = element.outerHeight();
  var elementDiagonal = parseInt(Math.sqrt(elementWidth * elementWidth + elementHeight * elementHeight));
  var waveSize = Math.min(MAX_WAVE_SIZE, parseInt(elementDiagonal * args.waveSizeCoefficient));
  var left;
  var top;

  if (args.isCentered) {
    left = (elementWidth - waveSize) / 2;
    top = (elementHeight - waveSize) / 2;
  } else {
    var event = config.event;
    var position = element.offset();
    var x = event.pageX - position.left;
    var y = event.pageY - position.top;
    left = x - waveSize / 2;
    top = y - waveSize / 2;
  }

  return {
    left: left,
    top: top,
    height: waveSize,
    width: waveSize
  };
};

function showWave(args, config) {
  var $wave = getWaves(config.element, args.wavesNumber).eq(config.wave || DEFAULT_WAVE_INDEX);
  args.hidingTimeout && clearTimeout(args.hidingTimeout);
  hideSelectedWave($wave);
  $wave.css(getWaveStyleConfig(args, config));
  args.showingTimeout = setTimeout(showingWaveHandler.bind(this, args, $wave), 0);
}

function showingWaveHandler(args, $wave) {
  var durationCss = args.durations.showingScale + 'ms';
  $wave.addClass(INKRIPPLE_SHOWING_CLASS).css('transitionDuration', durationCss);
}

function getDurations(useHoldAnimation) {
  return {
    showingScale: useHoldAnimation ? HOLD_ANIMATION_DURATION : ANIMATION_DURATION,
    hidingScale: ANIMATION_DURATION,
    hidingOpacity: ANIMATION_DURATION
  };
}

function hideSelectedWave($wave) {
  $wave.removeClass(INKRIPPLE_HIDING_CLASS).css('transitionDuration', '');
}

function hideWave(args, config) {
  args.showingTimeout && clearTimeout(args.showingTimeout);
  var $wave = getWaves(config.element, config.wavesNumber).eq(config.wave || DEFAULT_WAVE_INDEX);
  var durations = args.durations;
  var durationCss = durations.hidingScale + 'ms, ' + durations.hidingOpacity + 'ms';
  $wave.addClass(INKRIPPLE_HIDING_CLASS).removeClass(INKRIPPLE_SHOWING_CLASS).css('transitionDuration', durationCss);
  var animationDuration = Math.max(durations.hidingScale, durations.hidingOpacity);
  args.hidingTimeout = setTimeout(hideSelectedWave.bind(this, $wave), animationDuration);
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/component_registrator.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _component_registrator_callbacks = _interopRequireDefault(__webpack_require__(71));

var _errors = _interopRequireDefault(__webpack_require__(7));

var _public_component = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerComponent = function registerComponent(name, namespace, componentClass) {
  if (!componentClass) {
    componentClass = namespace;
  } else {
    namespace[name] = componentClass;
  }

  (0, _public_component.name)(componentClass, name);

  _component_registrator_callbacks.default.fire(name, componentClass);
};

var registerRendererComponent = function registerRendererComponent(name, componentClass) {
  _renderer.default.fn[name] = function (options) {
    var isMemberInvoke = typeof options === 'string';
    var result;

    if (isMemberInvoke) {
      var memberName = options;
      var memberArgs = [].slice.call(arguments).slice(1);
      this.each(function () {
        var instance = componentClass.getInstance(this);

        if (!instance) {
          throw _errors.default.Error('E0009', name);
        }

        var member = instance[memberName];
        var memberValue = member.apply(instance, memberArgs);

        if (result === undefined) {
          result = memberValue;
        }
      });
    } else {
      this.each(function () {
        var instance = componentClass.getInstance(this);

        if (instance) {
          instance.option(options);
        } else {
          new componentClass(this, options);
        }
      });
      result = this;
    }

    return result;
  };
};

_component_registrator_callbacks.default.add(registerRendererComponent);

var _default = registerComponent;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/component_registrator_callbacks.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _memorized_callbacks = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _memorized_callbacks.default();

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/remove_event.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _element_data = __webpack_require__(20);

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _event_registrator = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventName = 'dxremove';
var eventPropName = 'dxRemoveEvent';
/**
  * @name UI Events.dxremove
  * @type eventType
  * @type_function_param1 event:event
  * @module events/remove
*/

(0, _element_data.beforeCleanData)(function (elements) {
  elements = [].slice.call(elements);

  for (var i = 0; i < elements.length; i++) {
    var $element = (0, _renderer.default)(elements[i]);

    if ($element.prop(eventPropName)) {
      $element[0][eventPropName] = null;

      _events_engine.default.triggerHandler($element, eventName);
    }
  }
});
(0, _event_registrator.default)(eventName, {
  noBubble: true,
  setup: function setup(element) {
    (0, _renderer.default)(element).prop(eventPropName, true);
  }
});
var _default = eventName;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/themes.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.waitForThemeLoad = waitForThemeLoad;
exports.init = init;
exports.current = current;
exports.attachCssClasses = attachCssClasses;
exports.detachCssClasses = detachCssClasses;
exports.isMaterial = isMaterial;
exports.isGeneric = isGeneric;
exports.isDark = isDark;
exports.isWebFontLoaded = isWebFontLoaded;
exports.waitWebFont = waitWebFont;
exports.ready = themeReady;
exports.resetTheme = resetTheme;
exports.initialized = initialized;
exports.setDefaultTimeout = setDefaultTimeout;

var _devices = _interopRequireDefault(__webpack_require__(15));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _promise = _interopRequireDefault(__webpack_require__(47));

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _deferred = __webpack_require__(23);

var _html_parser = __webpack_require__(44);

var _iterator = __webpack_require__(4);

var _ready_callbacks = _interopRequireDefault(__webpack_require__(22));

var _view_port = __webpack_require__(46);

var _window = __webpack_require__(6);

var _themes_callback = __webpack_require__(74);

var _ui = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var window = (0, _window.getWindow)();
var ready = _ready_callbacks.default.add;
var viewPort = _view_port.value;
var viewPortChanged = _view_port.changeCallback;
var DX_LINK_SELECTOR = 'link[rel=dx-theme]';
var THEME_ATTR = 'data-theme';
var ACTIVE_ATTR = 'data-active';
var DX_HAIRLINES_CLASS = 'dx-hairlines';
var ANY_THEME = 'any';
var context;
var $activeThemeLink;
var knownThemes;
var currentThemeName;
var pendingThemeName;
var defaultTimeout = 15000;
var THEME_MARKER_PREFIX = 'dx.';
var inited = false;

_themes_callback.themeInitializedCallback.add(function () {
  return inited = true;
});

function readThemeMarker() {
  if (!(0, _window.hasWindow)()) {
    return null;
  }

  var element = (0, _renderer.default)('<div>', context).addClass('dx-theme-marker').appendTo(context.documentElement);
  var result;

  try {
    result = element.css('fontFamily');

    if (!result) {
      return null;
    }

    result = result.replace(/["']/g, '');

    if (result.substr(0, THEME_MARKER_PREFIX.length) !== THEME_MARKER_PREFIX) {
      return null;
    }

    return result.substr(THEME_MARKER_PREFIX.length);
  } finally {
    element.remove();
  }
} // FYI
// http://stackoverflow.com/q/2635814
// http://stackoverflow.com/a/3078636


function waitForThemeLoad(themeName) {
  var waitStartTime;
  var timerId;
  var intervalCleared = true;
  pendingThemeName = themeName;

  function handleLoaded() {
    pendingThemeName = null;
    clearInterval(timerId);
    intervalCleared = true;

    _themes_callback.themeReadyCallback.fire();

    _themes_callback.themeReadyCallback.empty();

    if (!inited) {
      _themes_callback.themeInitializedCallback.fire();

      _themes_callback.themeInitializedCallback.empty();
    }
  }

  if (isPendingThemeLoaded() || !defaultTimeout) {
    handleLoaded();
  } else {
    if (!intervalCleared) {
      if (pendingThemeName) {
        pendingThemeName = themeName;
      }

      return;
    }

    waitStartTime = Date.now();
    intervalCleared = false;
    timerId = setInterval(function () {
      var isLoaded = isPendingThemeLoaded();
      var isTimeout = !isLoaded && Date.now() - waitStartTime > defaultTimeout;

      if (isTimeout) {
        _ui.default.log('W0004', pendingThemeName);
      }

      if (isLoaded || isTimeout) {
        handleLoaded();
      }
    }, 10);
  }
}

function isPendingThemeLoaded() {
  if (!pendingThemeName) {
    return true;
  }

  var anyThemePending = pendingThemeName === ANY_THEME;

  if (inited && anyThemePending) {
    return true;
  }

  var themeMarker = readThemeMarker();

  if (themeMarker && anyThemePending) {
    return true;
  }

  return themeMarker === pendingThemeName;
}

function processMarkup() {
  var $allThemeLinks = (0, _renderer.default)(DX_LINK_SELECTOR, context);

  if (!$allThemeLinks.length) {
    return;
  }

  knownThemes = {};
  $activeThemeLink = (0, _renderer.default)((0, _html_parser.parseHTML)('<link rel=stylesheet>'), context);
  $allThemeLinks.each(function () {
    var link = (0, _renderer.default)(this, context);
    var fullThemeName = link.attr(THEME_ATTR);
    var url = link.attr('href');
    var isActive = link.attr(ACTIVE_ATTR) === 'true';
    knownThemes[fullThemeName] = {
      url: url,
      isActive: isActive
    };
  });
  $allThemeLinks.last().after($activeThemeLink);
  $allThemeLinks.remove();
}

function resolveFullThemeName(desiredThemeName) {
  var desiredThemeParts = desiredThemeName ? desiredThemeName.split('.') : [];
  var result = null;

  if (knownThemes) {
    if (desiredThemeName in knownThemes) {
      return desiredThemeName;
    }

    (0, _iterator.each)(knownThemes, function (knownThemeName, themeData) {
      var knownThemeParts = knownThemeName.split('.');

      if (desiredThemeParts[0] && knownThemeParts[0] !== desiredThemeParts[0]) {
        return;
      }

      if (desiredThemeParts[1] && desiredThemeParts[1] !== knownThemeParts[1]) {
        return;
      }

      if (desiredThemeParts[2] && desiredThemeParts[2] !== knownThemeParts[2]) {
        return;
      }

      if (!result || themeData.isActive) {
        result = knownThemeName;
      }

      if (themeData.isActive) {
        return false;
      }
    });
  }

  return result;
}

function initContext(newContext) {
  try {
    if (newContext !== context) {
      knownThemes = null;
    }
  } catch (x) {
    // Cross-origin permission error
    knownThemes = null;
  }

  context = newContext;
}

function init(options) {
  options = options || {};
  initContext(options.context || _dom_adapter.default.getDocument());
  if (!context) return;
  processMarkup();
  currentThemeName = undefined;
  current(options);
}

function current(options) {
  if (!arguments.length) {
    currentThemeName = currentThemeName || readThemeMarker();
    return currentThemeName;
  }

  detachCssClasses(viewPort());
  options = options || {};

  if (typeof options === 'string') {
    options = {
      theme: options
    };
  }

  var isAutoInit = options._autoInit;
  var loadCallback = options.loadCallback;
  var currentThemeData;
  currentThemeName = resolveFullThemeName(options.theme || currentThemeName);

  if (currentThemeName) {
    currentThemeData = knownThemes[currentThemeName];
  }

  if (loadCallback) {
    _themes_callback.themeReadyCallback.add(loadCallback);
  }

  if (currentThemeData) {
    // NOTE:
    // 1. <link> element re-creation leads to incorrect CSS rules priority in Internet Explorer (T246821).
    // 2. We have no reliable info, why this hack has been applied and whether it is still relevant.
    // 3. This hack leads Internet Explorer crashing after icon font has been implemented.
    //    $activeThemeLink.removeAttr("href"); // this is for IE, to stop loading prev CSS
    $activeThemeLink.attr('href', knownThemes[currentThemeName].url);

    if (_themes_callback.themeReadyCallback.has() || options._forceTimeout) {
      waitForThemeLoad(currentThemeName);
    }
  } else {
    if (isAutoInit) {
      waitForThemeLoad(ANY_THEME);

      _themes_callback.themeReadyCallback.fire();

      _themes_callback.themeReadyCallback.empty();
    } else {
      throw _ui.default.Error('E0021', currentThemeName);
    }
  }

  attachCssClasses((0, _view_port.originalViewPort)(), currentThemeName);
}

function getCssClasses(themeName) {
  themeName = themeName || current();
  var result = [];
  var themeNameParts = themeName && themeName.split('.');

  if (themeNameParts) {
    result.push('dx-theme-' + themeNameParts[0], 'dx-theme-' + themeNameParts[0] + '-typography');

    if (themeNameParts.length > 1) {
      result.push('dx-color-scheme-' + themeNameParts[1] + (isMaterial(themeName) ? '-' + themeNameParts[2] : ''));
    }
  }

  return result;
}

var themeClasses;

function attachCssClasses(element, themeName) {
  themeClasses = getCssClasses(themeName).join(' ');
  (0, _renderer.default)(element).addClass(themeClasses);

  var activateHairlines = function activateHairlines() {
    var pixelRatio = (0, _window.hasWindow)() && window.devicePixelRatio;

    if (!pixelRatio || pixelRatio < 2) {
      return;
    }

    var $tester = (0, _renderer.default)('<div>');
    $tester.css('border', '.5px solid transparent');
    (0, _renderer.default)('body').append($tester);

    if ($tester.outerHeight() === 1) {
      (0, _renderer.default)(element).addClass(DX_HAIRLINES_CLASS);
      themeClasses += ' ' + DX_HAIRLINES_CLASS;
    }

    $tester.remove();
  };

  activateHairlines();
}

function detachCssClasses(element) {
  (0, _renderer.default)(element).removeClass(themeClasses);
}

function themeReady(callback) {
  _themes_callback.themeReadyCallback.add(callback);
}

function isTheme(themeRegExp, themeName) {
  if (!themeName) {
    themeName = currentThemeName || readThemeMarker();
  }

  return new RegExp(themeRegExp).test(themeName);
}

function isMaterial(themeName) {
  return isTheme('material', themeName);
}

function isGeneric(themeName) {
  return isTheme('generic', themeName);
}

function isDark(themeName) {
  return isTheme('dark', themeName);
}

function isWebFontLoaded(text, fontWeight) {
  var testedFont = 'Roboto, RobotoFallback, Arial';
  var etalonFont = 'Arial';

  var document = _dom_adapter.default.getDocument();

  var testElement = document.createElement('span');
  testElement.style.position = 'absolute';
  testElement.style.top = '-9999px';
  testElement.style.left = '-9999px';
  testElement.style.visibility = 'hidden';
  testElement.style.fontFamily = etalonFont;
  testElement.style.fontSize = '250px';
  testElement.style.fontWeight = fontWeight;
  testElement.innerHTML = text;
  document.body.appendChild(testElement);
  var etalonFontWidth = testElement.offsetWidth;
  testElement.style.fontFamily = testedFont;
  var testedFontWidth = testElement.offsetWidth;
  testElement.parentNode.removeChild(testElement);
  return etalonFontWidth !== testedFontWidth;
}

function waitWebFont(text, fontWeight) {
  var interval = 15;
  var timeout = 2000;
  return new _promise.default(function (resolve) {
    var check = function check() {
      if (isWebFontLoaded(text, fontWeight)) {
        clear();
      }
    };

    var clear = function clear() {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      resolve();
    };

    var intervalId = setInterval(check, interval);
    var timeoutId = setTimeout(clear, timeout);
  });
}

var initDeferred = new _deferred.Deferred();

function autoInit() {
  init({
    _autoInit: true,
    _forceTimeout: true
  });

  if ((0, _renderer.default)(DX_LINK_SELECTOR, context).length) {
    throw _ui.default.Error('E0022');
  }

  initDeferred.resolve();
}

if ((0, _window.hasWindow)()) {
  autoInit();
} else {
  ready(autoInit);
}

viewPortChanged.add(function (viewPort, prevViewPort) {
  initDeferred.done(function () {
    detachCssClasses(prevViewPort);
    attachCssClasses(viewPort);
  });
});

_devices.default.changed.add(function () {
  init({
    _autoInit: true
  });
});

function resetTheme() {
  $activeThemeLink && $activeThemeLink.attr('href', 'about:blank');
  currentThemeName = null;
  pendingThemeName = null;
  inited = false;

  _themes_callback.themeInitializedCallback.add(function () {
    return inited = true;
  });
}

function initialized(callback) {
  if (inited) {
    callback();
  } else {
    _themes_callback.themeInitializedCallback.add(callback);
  }
}

function setDefaultTimeout(timeout) {
  defaultTimeout = timeout;
}module.exports.default = module.exports;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/themes_callback.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.themeInitializedCallback = exports.themeReadyCallback = void 0;

var _callbacks = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeReadyCallback = new _callbacks.default();
exports.themeReadyCallback = themeReadyCallback;
var themeInitializedCallback = new _callbacks.default();
exports.themeInitializedCallback = themeInitializedCallback;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/widget/ui.errors.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _error = _interopRequireDefault(__webpack_require__(39));

var _errors = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @docid
* @name ErrorsUIWidgets
*/
var _default = (0, _error.default)(_errors.default.ERROR_MESSAGES, {
  /**
  * @name ErrorsUIWidgets.E1001
  */
  E1001: 'Module \'{0}\'. Controller \'{1}\' is already registered',

  /**
  * @name ErrorsUIWidgets.E1002
  */
  E1002: 'Module \'{0}\'. Controller \'{1}\' does not inherit from DevExpress.ui.dxDataGrid.Controller',

  /**
  * @name ErrorsUIWidgets.E1003
  */
  E1003: 'Module \'{0}\'. View \'{1}\' is already registered',

  /**
  * @name ErrorsUIWidgets.E1004
  */
  E1004: 'Module \'{0}\'. View \'{1}\' does not inherit from DevExpress.ui.dxDataGrid.View',

  /**
  * @name ErrorsUIWidgets.E1005
  */
  E1005: 'Public method \'{0}\' is already registered',

  /**
  * @name ErrorsUIWidgets.E1006
  */
  E1006: 'Public method \'{0}.{1}\' does not exist',

  /**
  * @name ErrorsUIWidgets.E1007
  */
  E1007: 'State storing cannot be provided due to the restrictions of the browser',

  /**
  * @name ErrorsUIWidgets.E1010
  */
  E1010: 'The template does not contain the TextBox widget',

  /**
  * @name ErrorsUIWidgets.E1011
  */
  E1011: 'Items cannot be deleted from the List. Implement the "remove" function in the data store',

  /**
  * @name ErrorsUIWidgets.E1012
  */
  E1012: 'Editing type \'{0}\' with the name \'{1}\' is unsupported',

  /**
  * @name ErrorsUIWidgets.E1016
  */
  E1016: 'Unexpected type of data source is provided for a lookup column',

  /**
  * @name ErrorsUIWidgets.E1018
  */
  E1018: 'The \'collapseAll\' method cannot be called if you use a remote data source',

  /**
  * @name ErrorsUIWidgets.E1019
  */
  E1019: 'Search mode \'{0}\' is unavailable',

  /**
  * @name ErrorsUIWidgets.E1020
  */
  E1020: 'The type cannot be changed after initialization',

  /**
  * @name ErrorsUIWidgets.E1021
  */
  E1021: '{0} \'{1}\' you are trying to remove does not exist',

  /**
  * @name ErrorsUIWidgets.E1022
  */
  E1022: 'The "markers" option is given an invalid value. Assign an array instead',

  /**
  * @name ErrorsUIWidgets.E1023
  */
  E1023: 'The "routes" option is given an invalid value. Assign an array instead',

  /**
  * @name ErrorsUIWidgets.E1025
  */
  E1025: 'This layout is too complex to render',

  /**
  * @name ErrorsUIWidgets.E1026
  */
  E1026: 'The "calculateCustomSummary" function is missing from a field whose "summaryType" option is set to "custom"',

  /**
  * @name ErrorsUIWidgets.E1030
  */
  E1030: 'Unknown ScrollView refresh strategy: \'{0}\'',

  /**
  * @name ErrorsUIWidgets.E1031
  */
  E1031: 'Unknown subscription in the Scheduler widget: \'{0}\'',

  /**
  * @name ErrorsUIWidgets.E1032
  */
  E1032: 'Unknown start date in an appointment: \'{0}\'',

  /**
  * @name ErrorsUIWidgets.E1033
  */
  E1033: 'Unknown step in the date navigator: \'{0}\'',

  /**
  * @name ErrorsUIWidgets.E1034
  */
  E1034: 'The browser does not implement an API for saving files',

  /**
   * @name ErrorsUIWidgets.E1035
   */
  E1035: 'The editor cannot be created because of an internal error: {0}',

  /**
   * @name ErrorsUIWidgets.E1037
   */
  E1037: 'Invalid structure of grouped data',

  /**
   * @name ErrorsUIWidgets.E1038
   */
  E1038: 'The browser does not support local storages for local web pages',

  /**
  * @name ErrorsUIWidgets.E1039
  */
  E1039: 'A cell\'s position cannot be calculated',

  /**
   * @name ErrorsUIWidgets.E1040
   */
  E1040: 'The \'{0}\' key value is not unique within the data array',

  /**
   * @name ErrorsUIWidgets.E1041
   */
  E1041: 'The \'{0}\' script is referenced after the DevExtreme scripts or not referenced at all',

  /**
  * @name ErrorsUIWidgets.E1042
  */
  E1042: '{0} requires the key field to be specified',

  /**
  * @name ErrorsUIWidgets.E1043
  */
  E1043: 'Changes cannot be processed due to the incorrectly set key',

  /**
  * @name ErrorsUIWidgets.E1044
  */
  E1044: 'The key field specified by the keyExpr option does not match the key field specified in the data store',

  /**
  * @name ErrorsUIWidgets.E1045
  */
  E1045: 'Editing requires the key field to be specified in the data store',

  /**
  * @name ErrorsUIWidgets.E1046
  */
  E1046: 'The \'{0}\' key field is not found in data objects',

  /**
  * @name ErrorsUIWidgets.E1047
  */
  E1047: 'The "{0}" field is not found in the fields array',

  /**
  * @name ErrorsUIWidgets.E1048
  */
  E1048: 'The "{0}" operation is not found in the filterOperations array',

  /**
  * @name ErrorsUIWidgets.E1049
  */
  E1049: 'Column \'{0}\': filtering is allowed but the \'dataField\' or \'name\' option is not specified',

  /**
  * @name ErrorsUIWidgets.E1050
  */
  E1050: 'The validationRules option does not apply to third-party editors defined in the editCellTemplate',

  /**
   * @name ErrorsUIWidgets.E1051
   */
  E1051: 'HtmlEditor\'s valueType is "{0}", but the {0} converter was not imported.',

  /**
  * @name ErrorsUIWidgets.E1052
  */
  E1052: '{0} should have the "dataSource" option specified',

  /**
  * @name ErrorsUIWidgets.E1053
  */
  E1053: 'The "buttons" option accepts an array that contains only objects or string values',

  /**
  * @name ErrorsUIWidgets.E1054
  */
  E1054: 'All text editor buttons must have names',

  /**
  * @name ErrorsUIWidgets.E1055
  */
  E1055: 'One or several text editor buttons have invalid or non-unique "name" values',

  /**
  * @name ErrorsUIWidgets.E1056
  */
  E1056: 'The {0} widget does not support buttons of the "{1}" type',
  // NOTE:
  // E1057 is reserved. See https://js.devexpress.com/Documentation/19_2/ApiReference/UI_Widgets/Errors_and_Warnings/#E1057

  /**
  * @name ErrorsUIWidgets.E1058
  */
  E1058: 'The "startDayHour" must be earlier than the "endDayHour"',

  /**
  * @name ErrorsUIWidgets.E1059
  */
  E1059: 'All column names must be different',

  /**
  * @name ErrorsUIWidgets.E1060
  */
  E1060: 'All editable columns must have names',

  /**
  * @name ErrorsUIWidgets.W1001
  */
  W1001: 'The "key" option cannot be modified after initialization',

  /**
  * @name ErrorsUIWidgets.W1002
  */
  W1002: 'An item with the key \'{0}\' does not exist',

  /**
  * @name ErrorsUIWidgets.W1003
  */
  W1003: 'A group with the key \'{0}\' in which you are trying to select items does not exist',

  /**
  * @name ErrorsUIWidgets.W1004
  */
  W1004: 'The item \'{0}\' you are trying to select in the group \'{1}\' does not exist',

  /**
  * @name ErrorsUIWidgets.W1005
  */
  W1005: 'Due to column data types being unspecified, data has been loaded twice in order to apply initial filter settings. To resolve this issue, specify data types for all grid columns.',

  /**
  * @name ErrorsUIWidgets.W1006
  */
  W1006: 'The map service returned the following error: \'{0}\'',

  /**
   * @name ErrorsUIWidgets.W1007
   */
  W1007: 'No item with key {0} was found in the data source, but this key was used as the parent key for item {1}',

  /**
   * @name ErrorsUIWidgets.W1008
   */
  W1008: 'Cannot scroll to the \'{0}\' date because it does not exist on the current view',

  /**
   * @name ErrorsUIWidgets.W1009
   */
  W1009: 'Searching works only if data is specified using the dataSource option',

  /**
   * @name ErrorsUIWidgets.W1010
   */
  W1010: 'The capability to select all items works with source data of plain structure only',

  /**
   * @name ErrorsUIWidgets.W1011
   */
  W1011: 'The "keyExpr" option is not applied when dataSource is not an array',
  W1012: 'The \'{0}\' key field is not found in data objects',

  /**
  * @name ErrorsUIWidgets.W1013
  */
  W1013: 'The "message" field in the dialog component was renamed to "messageHtml". Change your code correspondingly. In addition, if you used HTML code in the message, make sure that it is secure',

  /**
  * @name ErrorsUIWidgets.W1014
  */
  W1014: 'The Floating Action Button exceeds the recommended speed dial action count. If you need to display more speed dial actions, increase the maxSpeedDialActionCount option value in the global config.',

  /**
  * @name ErrorsUIWidgets.W1015
  */
  W1015: 'The "cellDuration" should divide the range from the "startDayHour" to the "endDayHour" into even intervals'
});

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/validation_engine.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _class = _interopRequireDefault(__webpack_require__(11));

var _extend = __webpack_require__(3);

var _array = __webpack_require__(14);

var _iterator = __webpack_require__(4);

var _events_strategy = __webpack_require__(32);

var _errors = _interopRequireDefault(__webpack_require__(7));

var _common = __webpack_require__(8);

var _type = __webpack_require__(1);

var _number = _interopRequireDefault(__webpack_require__(77));

var _message = _interopRequireDefault(__webpack_require__(85));

var _promise = _interopRequireDefault(__webpack_require__(47));

var _deferred = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// STYLE validation
var STATUS = {
  valid: 'valid',
  invalid: 'invalid',
  pending: 'pending'
};

var BaseRuleValidator = /*#__PURE__*/function () {
  function BaseRuleValidator() {
    _classCallCheck(this, BaseRuleValidator);

    this.NAME = 'base';
  }

  _createClass(BaseRuleValidator, [{
    key: "defaultMessage",
    value: function defaultMessage(value) {
      return _message.default.getFormatter("validation-".concat(this.NAME))(value);
    }
  }, {
    key: "defaultFormattedMessage",
    value: function defaultFormattedMessage(value) {
      return _message.default.getFormatter("validation-".concat(this.NAME, "-formatted"))(value);
    }
  }, {
    key: "_isValueEmpty",
    value: function _isValueEmpty(value) {
      return !rulesValidators.required.validate(value, {});
    }
  }, {
    key: "validate",
    value: function validate(value, rule) {
      var _this = this;

      var valueArray = Array.isArray(value) ? value : [value];
      var result = true;

      if (valueArray.length) {
        valueArray.every(function (itemValue) {
          result = _this._validate(itemValue, rule);
          return result;
        });
      } else {
        result = this._validate(null, rule);
      }

      return result;
    }
  }]);

  return BaseRuleValidator;
}();

var RequiredRuleValidator = /*#__PURE__*/function (_BaseRuleValidator) {
  _inherits(RequiredRuleValidator, _BaseRuleValidator);

  var _super = _createSuper(RequiredRuleValidator);

  function RequiredRuleValidator() {
    var _this2;

    _classCallCheck(this, RequiredRuleValidator);

    _this2 = _super.call(this);
    _this2.NAME = 'required';
    return _this2;
  }

  _createClass(RequiredRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (!(0, _type.isDefined)(value)) return false;

      if (value === false) {
        return false;
      }

      value = String(value);

      if (rule.trim || !(0, _type.isDefined)(rule.trim)) {
        value = value.trim();
      }

      return value !== '';
    }
  }]);

  return RequiredRuleValidator;
}(BaseRuleValidator);

var NumericRuleValidator = /*#__PURE__*/function (_BaseRuleValidator2) {
  _inherits(NumericRuleValidator, _BaseRuleValidator2);

  var _super2 = _createSuper(NumericRuleValidator);

  function NumericRuleValidator() {
    var _this3;

    _classCallCheck(this, NumericRuleValidator);

    _this3 = _super2.call(this);
    _this3.NAME = 'numeric';
    return _this3;
  }

  _createClass(NumericRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (rule.ignoreEmptyValue !== false && this._isValueEmpty(value)) {
        return true;
      }

      if (rule.useCultureSettings && (0, _type.isString)(value)) {
        return !isNaN(_number.default.parse(value));
      } else {
        return (0, _type.isNumeric)(value);
      }
    }
  }]);

  return NumericRuleValidator;
}(BaseRuleValidator);

var RangeRuleValidator = /*#__PURE__*/function (_BaseRuleValidator3) {
  _inherits(RangeRuleValidator, _BaseRuleValidator3);

  var _super3 = _createSuper(RangeRuleValidator);

  function RangeRuleValidator() {
    var _this4;

    _classCallCheck(this, RangeRuleValidator);

    _this4 = _super3.call(this);
    _this4.NAME = 'range';
    return _this4;
  }

  _createClass(RangeRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (rule.ignoreEmptyValue !== false && this._isValueEmpty(value)) {
        return true;
      }

      var validNumber = rulesValidators['numeric'].validate(value, rule);
      var validValue = (0, _type.isDefined)(value) && value !== '';
      var number = validNumber ? parseFloat(value) : validValue && value.valueOf();
      var min = rule.min;
      var max = rule.max;

      if (!(validNumber || (0, _type.isDate)(value)) && !validValue) {
        return false;
      }

      if ((0, _type.isDefined)(min)) {
        if ((0, _type.isDefined)(max)) {
          return number >= min && number <= max;
        }

        return number >= min;
      } else {
        if ((0, _type.isDefined)(max)) {
          return number <= max;
        } else {
          throw _errors.default.Error('E0101');
        }
      }
    }
  }]);

  return RangeRuleValidator;
}(BaseRuleValidator);

var StringLengthRuleValidator = /*#__PURE__*/function (_BaseRuleValidator4) {
  _inherits(StringLengthRuleValidator, _BaseRuleValidator4);

  var _super4 = _createSuper(StringLengthRuleValidator);

  function StringLengthRuleValidator() {
    var _this5;

    _classCallCheck(this, StringLengthRuleValidator);

    _this5 = _super4.call(this);
    _this5.NAME = 'stringLength';
    return _this5;
  }

  _createClass(StringLengthRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      value = (0, _type.isDefined)(value) ? String(value) : '';

      if (rule.trim || !(0, _type.isDefined)(rule.trim)) {
        value = value.trim();
      }

      if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
        return true;
      }

      return rulesValidators.range.validate(value.length, (0, _extend.extend)({}, rule));
    }
  }]);

  return StringLengthRuleValidator;
}(BaseRuleValidator);

var CustomRuleValidator = /*#__PURE__*/function (_BaseRuleValidator5) {
  _inherits(CustomRuleValidator, _BaseRuleValidator5);

  var _super5 = _createSuper(CustomRuleValidator);

  function CustomRuleValidator() {
    var _this6;

    _classCallCheck(this, CustomRuleValidator);

    _this6 = _super5.call(this);
    _this6.NAME = 'custom';
    return _this6;
  }

  _createClass(CustomRuleValidator, [{
    key: "validate",
    value: function validate(value, rule) {
      if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
        return true;
      }

      var validator = rule.validator;
      var dataGetter = validator && (0, _type.isFunction)(validator.option) && validator.option('dataGetter');
      var extraParams = (0, _type.isFunction)(dataGetter) && dataGetter();
      var params = {
        value: value,
        validator: validator,
        rule: rule
      };

      if (extraParams) {
        (0, _extend.extend)(params, extraParams);
      }

      return rule.validationCallback(params);
    }
  }]);

  return CustomRuleValidator;
}(BaseRuleValidator);

var AsyncRuleValidator = /*#__PURE__*/function (_CustomRuleValidator) {
  _inherits(AsyncRuleValidator, _CustomRuleValidator);

  var _super6 = _createSuper(AsyncRuleValidator);

  function AsyncRuleValidator() {
    var _this7;

    _classCallCheck(this, AsyncRuleValidator);

    _this7 = _super6.call(this);
    _this7.NAME = 'async';
    return _this7;
  }

  _createClass(AsyncRuleValidator, [{
    key: "validate",
    value: function validate(value, rule) {
      if (!(0, _type.isDefined)(rule.reevaluate)) {
        (0, _extend.extend)(rule, {
          reevaluate: true
        });
      }

      if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
        return true;
      }

      var validator = rule.validator;
      var dataGetter = validator && (0, _type.isFunction)(validator.option) && validator.option('dataGetter');
      var extraParams = (0, _type.isFunction)(dataGetter) && dataGetter();
      var params = {
        value: value,
        validator: validator,
        rule: rule
      };

      if (extraParams) {
        (0, _extend.extend)(params, extraParams);
      }

      var callbackResult = rule.validationCallback(params);

      if (!(0, _type.isPromise)(callbackResult)) {
        throw _errors.default.Error('E0103');
      }

      return this._getWrappedPromise((0, _deferred.fromPromise)(callbackResult).promise());
    }
  }, {
    key: "_getWrappedPromise",
    value: function _getWrappedPromise(promise) {
      var deferred = new _deferred.Deferred();
      promise.then(function (res) {
        deferred.resolve(res);
      }, function (err) {
        var res = {
          isValid: false
        };

        if ((0, _type.isDefined)(err)) {
          if ((0, _type.isString)(err)) {
            res.message = err;
          } else if ((0, _type.isObject)(err) && (0, _type.isDefined)(err.message) && (0, _type.isString)(err.message)) {
            res.message = err.message;
          }
        }

        deferred.resolve(res);
      });
      return deferred.promise();
    }
  }]);

  return AsyncRuleValidator;
}(CustomRuleValidator);

var CompareRuleValidator = /*#__PURE__*/function (_BaseRuleValidator6) {
  _inherits(CompareRuleValidator, _BaseRuleValidator6);

  var _super7 = _createSuper(CompareRuleValidator);

  function CompareRuleValidator() {
    var _this8;

    _classCallCheck(this, CompareRuleValidator);

    _this8 = _super7.call(this);
    _this8.NAME = 'compare';
    return _this8;
  }

  _createClass(CompareRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (!rule.comparisonTarget) {
        throw _errors.default.Error('E0102');
      }

      if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
        return true;
      }

      (0, _extend.extend)(rule, {
        reevaluate: true
      });
      var otherValue = rule.comparisonTarget();
      var type = rule.comparisonType || '==';

      switch (type) {
        case '==':
          return value == otherValue;
        // eslint-disable-line eqeqeq

        case '!=':
          return value != otherValue;
        // eslint-disable-line eqeqeq

        case '===':
          return value === otherValue;

        case '!==':
          return value !== otherValue;

        case '>':
          return value > otherValue;

        case '>=':
          return value >= otherValue;

        case '<':
          return value < otherValue;

        case '<=':
          return value <= otherValue;
      }
    }
  }]);

  return CompareRuleValidator;
}(BaseRuleValidator);

var PatternRuleValidator = /*#__PURE__*/function (_BaseRuleValidator7) {
  _inherits(PatternRuleValidator, _BaseRuleValidator7);

  var _super8 = _createSuper(PatternRuleValidator);

  function PatternRuleValidator() {
    var _this9;

    _classCallCheck(this, PatternRuleValidator);

    _this9 = _super8.call(this);
    _this9.NAME = 'pattern';
    return _this9;
  }

  _createClass(PatternRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (rule.ignoreEmptyValue !== false && this._isValueEmpty(value)) {
        return true;
      }

      var pattern = rule.pattern;

      if ((0, _type.isString)(pattern)) {
        pattern = new RegExp(pattern);
      }

      return pattern.test(value);
    }
  }]);

  return PatternRuleValidator;
}(BaseRuleValidator);

var EmailRuleValidator = /*#__PURE__*/function (_BaseRuleValidator8) {
  _inherits(EmailRuleValidator, _BaseRuleValidator8);

  var _super9 = _createSuper(EmailRuleValidator);

  function EmailRuleValidator() {
    var _this10;

    _classCallCheck(this, EmailRuleValidator);

    _this10 = _super9.call(this);
    _this10.NAME = 'email';
    return _this10;
  }

  _createClass(EmailRuleValidator, [{
    key: "_validate",
    value: function _validate(value, rule) {
      if (rule.ignoreEmptyValue !== false && this._isValueEmpty(value)) {
        return true;
      }

      return rulesValidators.pattern.validate(value, (0, _extend.extend)({}, rule, {
        pattern: /^[\d\w._-]+@([\d\w._-]+\.)+[\w]+$/i
      }));
    }
  }]);

  return EmailRuleValidator;
}(BaseRuleValidator);

var rulesValidators = {
  /**
   * @name RequiredRule
   * @section dxValidator
   * @type object
   */
  'required': new RequiredRuleValidator(),

  /**
   * @name NumericRule
   * @section dxValidator
   * @type object
   */
  'numeric': new NumericRuleValidator(),

  /**
   * @name RangeRule
   * @section dxValidator
   * @type object
   */
  'range': new RangeRuleValidator(),

  /**
   * @name StringLengthRule
   * @section dxValidator
   * @type object
   */
  'stringLength': new StringLengthRuleValidator(),

  /**
   * @name CustomRule
   * @section dxValidator
   * @type object
   */
  'custom': new CustomRuleValidator(),

  /**
   * @name AsyncRule
   * @section dxValidator
   * @type object
   */
  'async': new AsyncRuleValidator(),

  /**
   * @name CompareRule
   * @section dxValidator
   * @type object
   */
  'compare': new CompareRuleValidator(),

  /**
   * @name PatternRule
   * @section dxValidator
   * @type object
   */
  'pattern': new PatternRuleValidator(),

  /**
   * @name EmailRule
   * @section dxValidator
   * @type object
   */
  'email': new EmailRuleValidator()
};

var GroupConfig = _class.default.inherit({
  ctor: function ctor(group) {
    this.group = group;
    this.validators = [];
    this._pendingValidators = [];
    this._onValidatorStatusChanged = this._onValidatorStatusChanged.bind(this);

    this._resetValidationInfo();

    this._eventsStrategy = new _events_strategy.EventsStrategy(this);
  },
  validate: function validate() {
    var _this11 = this;

    /**
     * @name dxValidationGroupResult
     * @type Object
     */
    var result = {
      isValid: true,
      brokenRules: [],
      validators: [],
      status: STATUS.valid,
      complete: null
    };

    this._unsubscribeFromAllChangeEvents();

    this._pendingValidators = [];

    this._resetValidationInfo();

    (0, _iterator.each)(this.validators, function (_, validator) {
      var validatorResult = validator.validate();
      result.isValid = result.isValid && validatorResult.isValid;

      if (validatorResult.brokenRules) {
        result.brokenRules = result.brokenRules.concat(validatorResult.brokenRules);
      }

      result.validators.push(validator);

      if (validatorResult.status === STATUS.pending) {
        _this11._addPendingValidator(validator);
      }

      _this11._subscribeToChangeEvents(validator);
    });

    if (this._pendingValidators.length) {
      result.status = STATUS.pending;
    } else {
      result.status = result.isValid ? STATUS.valid : STATUS.invalid;

      this._unsubscribeFromAllChangeEvents();

      this._raiseValidatedEvent(result);
    }

    this._updateValidationInfo(result);

    return (0, _extend.extend)({}, this._validationInfo.result);
  },
  _subscribeToChangeEvents: function _subscribeToChangeEvents(validator) {
    validator.on('validating', this._onValidatorStatusChanged);
    validator.on('validated', this._onValidatorStatusChanged);
  },
  _unsubscribeFromChangeEvents: function _unsubscribeFromChangeEvents(validator) {
    validator.off('validating', this._onValidatorStatusChanged);
    validator.off('validated', this._onValidatorStatusChanged);
  },
  _unsubscribeFromAllChangeEvents: function _unsubscribeFromAllChangeEvents() {
    var _this12 = this;

    (0, _iterator.each)(this.validators, function (_, validator) {
      _this12._unsubscribeFromChangeEvents(validator);
    });
  },
  _updateValidationInfo: function _updateValidationInfo(result) {
    this._validationInfo.result = result;

    if (result.status !== STATUS.pending) {
      return;
    }

    if (!this._validationInfo.deferred) {
      this._validationInfo.deferred = new _deferred.Deferred();
      this._validationInfo.result.complete = this._validationInfo.deferred.promise();
    }
  },
  _addPendingValidator: function _addPendingValidator(validator) {
    var foundValidator = (0, _common.grep)(this._pendingValidators, function (val) {
      return val === validator;
    })[0];

    if (!foundValidator) {
      this._pendingValidators.push(validator);
    }
  },
  _removePendingValidator: function _removePendingValidator(validator) {
    var index = (0, _array.inArray)(validator, this._pendingValidators);

    if (index >= 0) {
      this._pendingValidators.splice(index, 1);
    }
  },
  _orderBrokenRules: function _orderBrokenRules(brokenRules) {
    var orderedRules = [];
    (0, _iterator.each)(this.validators, function (_, validator) {
      var foundRules = (0, _common.grep)(brokenRules, function (rule) {
        return rule.validator === validator;
      });

      if (foundRules.length) {
        orderedRules = orderedRules.concat(foundRules);
      }
    });
    return orderedRules;
  },
  _updateBrokenRules: function _updateBrokenRules(result) {
    if (!this._validationInfo.result) {
      return;
    }

    var brokenRules = this._validationInfo.result.brokenRules;
    var rules = (0, _common.grep)(brokenRules, function (rule) {
      return rule.validator !== result.validator;
    });

    if (result.brokenRules) {
      brokenRules = rules.concat(result.brokenRules);
    }

    this._validationInfo.result.brokenRules = this._orderBrokenRules(brokenRules);
  },
  _onValidatorStatusChanged: function _onValidatorStatusChanged(result) {
    if (result.status === STATUS.pending) {
      this._addPendingValidator(result.validator);

      return;
    }

    this._resolveIfComplete(result);
  },
  _resolveIfComplete: function _resolveIfComplete(result) {
    this._removePendingValidator(result.validator);

    this._updateBrokenRules(result);

    if (!this._pendingValidators.length) {
      this._unsubscribeFromAllChangeEvents();

      if (!this._validationInfo.result) {
        return;
      }

      this._validationInfo.result.status = this._validationInfo.result.brokenRules.length === 0 ? STATUS.valid : STATUS.invalid;
      this._validationInfo.result.isValid = this._validationInfo.result.status === STATUS.valid;
      var res = (0, _extend.extend)({}, this._validationInfo.result, {
        complete: null
      });
      var deferred = this._validationInfo.deferred;

      this._resetValidationInfo();

      this._raiseValidatedEvent(res);

      deferred && setTimeout(function () {
        deferred.resolve(res);
      });
    }
  },
  _raiseValidatedEvent: function _raiseValidatedEvent(result) {
    this._eventsStrategy.fireEvent('validated', [result]);
  },
  _resetValidationInfo: function _resetValidationInfo() {
    this._validationInfo = {
      result: null,
      deferred: null
    };
  },
  _synchronizeValidationInfo: function _synchronizeValidationInfo() {
    if (this._validationInfo.result) {
      this._validationInfo.result.validators = this.validators;
    }
  },
  removeRegisteredValidator: function removeRegisteredValidator(validator) {
    var index = (0, _array.inArray)(validator, this.validators);

    if (index > -1) {
      this.validators.splice(index, 1);

      this._synchronizeValidationInfo();

      this._resolveIfComplete({
        validator: validator
      });
    }
  },
  registerValidator: function registerValidator(validator) {
    if ((0, _array.inArray)(validator, this.validators) < 0) {
      this.validators.push(validator);

      this._synchronizeValidationInfo();
    }
  },
  reset: function reset() {
    (0, _iterator.each)(this.validators, function (_, validator) {
      validator.reset();
    });
    this._pendingValidators = [];

    this._resetValidationInfo();
  },
  on: function on(eventName, eventHandler) {
    this._eventsStrategy.on(eventName, eventHandler);

    return this;
  },
  off: function off(eventName, eventHandler) {
    this._eventsStrategy.off(eventName, eventHandler);

    return this;
  }
});

var ValidationEngine = {
  groups: [],
  getGroupConfig: function getGroupConfig(group) {
    var result = (0, _common.grep)(this.groups, function (config) {
      return config.group === group;
    });

    if (result.length) {
      return result[0];
    } // TODO: consider throwing exception here, as it causes quite strange and hardly diagnostable behaviour

  },
  findGroup: function findGroup($element, model) {
    // try to find out if this control is child of validation group
    var $dxGroup = $element.parents('.dx-validationgroup').first();

    if ($dxGroup.length) {
      return $dxGroup.dxValidationGroup('instance');
    } // Trick to be able to securely get ViewModel instance ($data) in Knockout


    return model;
  },
  initGroups: function initGroups() {
    this.groups = [];
    this.addGroup();
  },
  addGroup: function addGroup(group) {
    var config = this.getGroupConfig(group);

    if (!config) {
      config = new GroupConfig(group);
      this.groups.push(config);
    }

    return config;
  },
  removeGroup: function removeGroup(group) {
    var config = this.getGroupConfig(group);
    var index = (0, _array.inArray)(config, this.groups);

    if (index > -1) {
      this.groups.splice(index, 1);
    }

    return config;
  },
  _setDefaultMessage: function _setDefaultMessage(info) {
    var rule = info.rule,
        validator = info.validator,
        name = info.name;

    if (!(0, _type.isDefined)(rule.message)) {
      if (validator.defaultFormattedMessage && (0, _type.isDefined)(name)) {
        rule.message = validator.defaultFormattedMessage(name);
      } else {
        rule.message = validator.defaultMessage();
      }
    }
  },
  _addBrokenRule: function _addBrokenRule(info) {
    var result = info.result,
        rule = info.rule;

    if (!result.brokenRule) {
      result.brokenRule = rule;
    }

    if (!result.brokenRules) {
      result.brokenRules = [];
    }

    result.brokenRules.push(rule);
  },
  validate: function validate(value, rules, name) {
    var _this13 = this;

    /**
     * @name dxValidatorResult
     * @type Object
     */
    var result = {
      name: name,
      value: value,
      brokenRule: null,
      brokenRules: null,
      isValid: true,
      validationRules: rules,
      pendingRules: null,
      status: STATUS.valid,
      complete: null
    };
    var asyncRuleItems = [];
    (0, _iterator.each)(rules || [], function (_, rule) {
      var ruleValidator = rulesValidators[rule.type];
      var ruleValidationResult;

      if (ruleValidator) {
        if ((0, _type.isDefined)(rule.isValid) && rule.value === value && !rule.reevaluate) {
          if (!rule.isValid) {
            result.isValid = false;

            _this13._addBrokenRule({
              result: result,
              rule: rule
            });

            return false;
          }

          return true;
        }

        rule.value = value;

        if (rule.type === 'async') {
          asyncRuleItems.push({
            rule: rule,
            ruleValidator: ruleValidator
          });
          return true;
        }

        ruleValidationResult = ruleValidator.validate(value, rule);
        rule.isValid = ruleValidationResult;

        if (!ruleValidationResult) {
          result.isValid = false;

          _this13._setDefaultMessage({
            rule: rule,
            validator: ruleValidator,
            name: name
          });

          _this13._addBrokenRule({
            result: result,
            rule: rule
          });
        }

        if (!rule.isValid) {
          return false;
        }
      } else {
        throw _errors.default.Error('E0100');
      }
    });

    if (result.isValid && !result.brokenRules && asyncRuleItems.length) {
      result = this._validateAsyncRules({
        value: value,
        items: asyncRuleItems,
        result: result,
        name: name
      });
    }

    result.status = result.pendingRules ? STATUS.pending : result.isValid ? STATUS.valid : STATUS.invalid;
    return result;
  },
  _validateAsyncRules: function _validateAsyncRules(_ref) {
    var _this14 = this;

    var result = _ref.result,
        value = _ref.value,
        items = _ref.items,
        name = _ref.name;
    var asyncResults = [];
    (0, _iterator.each)(items, function (_, item) {
      var validateResult = item.ruleValidator.validate(value, item.rule);

      if (!(0, _type.isPromise)(validateResult)) {
        _this14._updateRuleConfig({
          rule: item.rule,
          ruleResult: _this14._getPatchedRuleResult(validateResult),
          validator: item.ruleValidator,
          name: name
        });
      } else {
        if (!result.pendingRules) {
          result.pendingRules = [];
        }

        result.pendingRules.push(item.rule);
        var asyncResult = validateResult.then(function (res) {
          var ruleResult = _this14._getPatchedRuleResult(res);

          _this14._updateRuleConfig({
            rule: item.rule,
            ruleResult: ruleResult,
            validator: item.ruleValidator,
            name: name
          });

          return ruleResult;
        });
        asyncResults.push(asyncResult);
      }
    });

    if (asyncResults.length) {
      result.complete = _promise.default.all(asyncResults).then(function (values) {
        return _this14._getAsyncRulesResult({
          result: result,
          values: values
        });
      });
    }

    return result;
  },
  _updateRuleConfig: function _updateRuleConfig(_ref2) {
    var rule = _ref2.rule,
        ruleResult = _ref2.ruleResult,
        validator = _ref2.validator,
        name = _ref2.name;
    rule.isValid = ruleResult.isValid;

    if (!ruleResult.isValid) {
      if ((0, _type.isDefined)(ruleResult.message) && (0, _type.isString)(ruleResult.message) && ruleResult.message.length) {
        rule.message = ruleResult.message;
      } else {
        this._setDefaultMessage({
          rule: rule,
          validator: validator,
          name: name
        });
      }
    }
  },
  _getPatchedRuleResult: function _getPatchedRuleResult(ruleResult) {
    var result;
    var isValid = true;

    if ((0, _type.isObject)(ruleResult)) {
      result = (0, _extend.extend)({}, ruleResult);

      if (!(0, _type.isDefined)(result.isValid)) {
        result.isValid = isValid;
      }
    } else {
      result = {
        isValid: (0, _type.isBoolean)(ruleResult) ? ruleResult : isValid
      };
    }

    return result;
  },
  _getAsyncRulesResult: function _getAsyncRulesResult(_ref3) {
    var _this15 = this;

    var values = _ref3.values,
        result = _ref3.result;
    (0, _iterator.each)(values, function (index, val) {
      if (val.isValid === false) {
        result.isValid = val.isValid;
        var rule = result.pendingRules[index];

        _this15._addBrokenRule({
          result: result,
          rule: rule
        });
      }
    });
    result.pendingRules = null;
    result.complete = null;
    result.status = result.isValid ? STATUS.valid : STATUS.invalid;
    return result;
  },
  registerValidatorInGroup: function registerValidatorInGroup(group, validator) {
    var groupConfig = ValidationEngine.addGroup(group);
    groupConfig.registerValidator.call(groupConfig, validator);
  },
  _shouldRemoveGroup: function _shouldRemoveGroup(group, validatorsInGroup) {
    var isDefaultGroup = group === undefined;
    var isValidationGroupInstance = group && group.NAME === 'dxValidationGroup';
    return !isDefaultGroup && !isValidationGroupInstance && !validatorsInGroup.length;
  },
  removeRegisteredValidator: function removeRegisteredValidator(group, validator) {
    var config = ValidationEngine.getGroupConfig(group);

    if (config) {
      config.removeRegisteredValidator.call(config, validator);
      var validatorsInGroup = config.validators;

      if (this._shouldRemoveGroup(group, validatorsInGroup)) {
        this.removeGroup(group);
      }
    }
  },
  initValidationOptions: function initValidationOptions(options) {
    var _this16 = this;

    var initedOptions = {};

    if (options) {
      var syncOptions = ['isValid', 'validationStatus', 'validationError', 'validationErrors'];
      syncOptions.forEach(function (prop) {
        if (prop in options) {
          (0, _extend.extend)(initedOptions, _this16.synchronizeValidationOptions({
            name: prop,
            value: options[prop]
          }, options));
        }
      });
    }

    return initedOptions;
  },
  synchronizeValidationOptions: function synchronizeValidationOptions(_ref4, options) {
    var name = _ref4.name,
        value = _ref4.value;

    switch (name) {
      case 'validationStatus':
        {
          var isValid = value === STATUS.valid || value === STATUS.pending;
          return options.isValid !== isValid ? {
            isValid: isValid
          } : {};
        }

      case 'isValid':
        {
          var validationStatus = options.validationStatus;
          var newStatus = validationStatus;

          if (value && validationStatus === STATUS.invalid) {
            newStatus = STATUS.valid;
          } else if (!value && validationStatus !== STATUS.invalid) {
            newStatus = STATUS.invalid;
          }

          return newStatus !== validationStatus ? {
            validationStatus: newStatus
          } : {};
        }

      case 'validationErrors':
        {
          var validationError = !value || !value.length ? null : value[0];
          return options.validationError !== validationError ? {
            validationError: validationError
          } : {};
        }

      case 'validationError':
        {
          var validationErrors = options.validationErrors;

          if (!value && validationErrors) {
            return {
              validationErrors: null
            };
          } else if (value && !validationErrors) {
            return {
              validationErrors: [value]
            };
          } else if (value && validationErrors && value !== validationErrors[0]) {
            validationErrors[0] = value;
            return {
              validationErrors: validationErrors.slice()
            };
          }
        }
    }

    return {};
  },
  validateGroup: function validateGroup(group) {
    var groupConfig = ValidationEngine.getGroupConfig(group);

    if (!groupConfig) {
      throw _errors.default.Error('E0110');
    }

    return groupConfig.validate();
  },
  resetGroup: function resetGroup(group) {
    var groupConfig = ValidationEngine.getGroupConfig(group);

    if (!groupConfig) {
      throw _errors.default.Error('E0110');
    }

    return groupConfig.reset();
  }
};
ValidationEngine.initGroups();
var _default = ValidationEngine;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/number.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _array = __webpack_require__(14);

var _common = __webpack_require__(8);

var _iterator = __webpack_require__(4);

var _type = __webpack_require__(1);

var _number = _interopRequireDefault(__webpack_require__(78));

var _config = _interopRequireDefault(__webpack_require__(16));

var _errors = _interopRequireDefault(__webpack_require__(7));

var _utils = __webpack_require__(49);

var _currency = _interopRequireDefault(__webpack_require__(79));

var _number2 = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var hasIntl = typeof Intl !== 'undefined';
var MAX_LARGE_NUMBER_POWER = 4;
var DECIMAL_BASE = 10;
var NUMERIC_FORMATS = ['currency', 'fixedpoint', 'exponential', 'percent', 'decimal'];
var LargeNumberFormatPostfixes = {
  1: 'K',
  // kilo
  2: 'M',
  // mega
  3: 'B',
  // billions
  4: 'T' // tera

};
var LargeNumberFormatPowers = {
  'largenumber': 'auto',
  'thousands': 1,
  'millions': 2,
  'billions': 3,
  'trillions': 4
};
var numberLocalization = (0, _dependency_injector.default)({
  engine: function engine() {
    return 'base';
  },
  numericFormats: NUMERIC_FORMATS,
  defaultLargeNumberFormatPostfixes: LargeNumberFormatPostfixes,
  _parseNumberFormatString: function _parseNumberFormatString(formatType) {
    var formatObject = {};
    if (!formatType || typeof formatType !== 'string') return;
    var formatList = formatType.toLowerCase().split(' ');
    (0, _iterator.each)(formatList, function (index, value) {
      if ((0, _array.inArray)(value, NUMERIC_FORMATS) > -1) {
        formatObject.formatType = value;
      } else if (value in LargeNumberFormatPowers) {
        formatObject.power = LargeNumberFormatPowers[value];
      }
    });

    if (formatObject.power && !formatObject.formatType) {
      formatObject.formatType = 'fixedpoint';
    }

    if (formatObject.formatType) {
      return formatObject;
    }
  },
  _calculateNumberPower: function _calculateNumberPower(value, base, minPower, maxPower) {
    var number = Math.abs(value);
    var power = 0;

    if (number > 1) {
      while (number && number >= base && (maxPower === undefined || power < maxPower)) {
        power++;
        number = number / base;
      }
    } else if (number > 0 && number < 1) {
      while (number < 1 && (minPower === undefined || power > minPower)) {
        power--;
        number = number * base;
      }
    }

    return power;
  },
  _getNumberByPower: function _getNumberByPower(number, power, base) {
    var result = number;

    while (power > 0) {
      result = result / base;
      power--;
    }

    while (power < 0) {
      result = result * base;
      power++;
    }

    return result;
  },
  _formatNumber: function _formatNumber(value, formatObject, formatConfig) {
    if (formatObject.power === 'auto') {
      formatObject.power = this._calculateNumberPower(value, 1000, 0, MAX_LARGE_NUMBER_POWER);
    }

    if (formatObject.power) {
      value = this._getNumberByPower(value, formatObject.power, 1000);
    }

    var powerPostfix = this.defaultLargeNumberFormatPostfixes[formatObject.power] || '';

    var result = this._formatNumberCore(value, formatObject.formatType, formatConfig);

    result = result.replace(/(\d|.$)(\D*)$/, '$1' + powerPostfix + '$2');
    return result;
  },
  _formatNumberExponential: function _formatNumberExponential(value, formatConfig) {
    var power = this._calculateNumberPower(value, DECIMAL_BASE);

    var number = this._getNumberByPower(value, power, DECIMAL_BASE);

    if (formatConfig.precision === undefined) {
      formatConfig.precision = 1;
    }

    if (number.toFixed(formatConfig.precision || 0) >= DECIMAL_BASE) {
      power++;
      number = number / DECIMAL_BASE;
    }

    var powString = (power >= 0 ? '+' : '') + power.toString();
    return this._formatNumberCore(number, 'fixedpoint', formatConfig) + 'E' + powString;
  },
  _addZeroes: function _addZeroes(value, precision) {
    var multiplier = Math.pow(10, precision);
    var sign = value < 0 ? '-' : '';
    value = (Math.abs(value) * multiplier >>> 0) / multiplier;
    var result = value.toString();

    while (result.length < precision) {
      result = '0' + result;
    }

    return sign + result;
  },
  _addGroupSeparators: function _addGroupSeparators(value) {
    var parts = value.toString().split('.');
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, (0, _config.default)().thousandsSeparator) + (parts[1] ? (0, _config.default)().decimalSeparator + parts[1] : '');
  },
  _formatNumberCore: function _formatNumberCore(value, format, formatConfig) {
    if (format === 'exponential') {
      return this._formatNumberExponential(value, formatConfig);
    }

    if (format !== 'decimal' && formatConfig.precision !== null) {
      formatConfig.precision = formatConfig.precision || 0;
    }

    if (format === 'percent') {
      value = value * 100;
    }

    if (formatConfig.precision !== undefined) {
      if (format === 'decimal') {
        value = this._addZeroes(value, formatConfig.precision);
      } else {
        value = formatConfig.precision === null ? value.toPrecision() : (0, _utils.toFixed)(value, formatConfig.precision);
      }
    }

    if (format !== 'decimal') {
      value = this._addGroupSeparators(value);
    } else {
      value = value.toString().replace('.', (0, _config.default)().decimalSeparator);
    }

    if (format === 'percent') {
      value += '%';
    }

    return value;
  },
  _normalizeFormat: function _normalizeFormat(format) {
    if (!format) {
      return {};
    }

    if (typeof format === 'function') {
      return format;
    }

    if (!(0, _type.isPlainObject)(format)) {
      format = {
        type: format
      };
    }

    return format;
  },
  _getSeparators: function _getSeparators() {
    return {
      decimalSeparator: this.getDecimalSeparator(),
      thousandsSeparator: this.getThousandsSeparator()
    };
  },
  getThousandsSeparator: function getThousandsSeparator() {
    return this.format(10000, 'fixedPoint')[2];
  },
  getDecimalSeparator: function getDecimalSeparator() {
    return this.format(1.2, {
      type: 'fixedPoint',
      precision: 1
    })[1];
  },
  convertDigits: function convertDigits(value, toStandard) {
    var digits = this.format(90, 'decimal');

    if (typeof value !== 'string' || digits[1] === '0') {
      return value;
    }

    var fromFirstDigit = toStandard ? digits[1] : '0';
    var toFirstDigit = toStandard ? '0' : digits[1];
    var fromLastDigit = toStandard ? digits[0] : '9';
    var regExp = new RegExp('[' + fromFirstDigit + '-' + fromLastDigit + ']', 'g');
    return value.replace(regExp, function (char) {
      return String.fromCharCode(char.charCodeAt(0) + (toFirstDigit.charCodeAt(0) - fromFirstDigit.charCodeAt(0)));
    });
  },
  getNegativeEtalonRegExp: function getNegativeEtalonRegExp(format) {
    var separators = this._getSeparators();

    var digitalRegExp = new RegExp('[0-9' + (0, _common.escapeRegExp)(separators.decimalSeparator + separators.thousandsSeparator) + ']+', 'g');
    var specialCharacters = ['\\', '(', ')', '[', ']', '*', '+', '$', '^', '?', '|', '{', '}'];
    var negativeEtalon = this.format(-1, format).replace(digitalRegExp, '1');
    specialCharacters.forEach(function (char) {
      negativeEtalon = negativeEtalon.replace(char, "\\".concat(char));
    });
    negativeEtalon = negativeEtalon.replace(' ', '\\s');
    negativeEtalon = negativeEtalon.replace('1', '.+');
    return new RegExp(negativeEtalon, 'g');
  },
  getSign: function getSign(text, format) {
    if (text.replace(/[^0-9-]/g, '').charAt(0) === '-') {
      return -1;
    }

    if (!format) {
      return 1;
    }

    var negativeEtalon = this.getNegativeEtalonRegExp(format);
    return text.match(negativeEtalon) ? -1 : 1;
  },
  format: function format(value, _format) {
    if (typeof value !== 'number') {
      return value;
    }

    if (typeof _format === 'number') {
      return value;
    }

    _format = _format && _format.formatter || _format;

    if (typeof _format === 'function') {
      return _format(value);
    }

    _format = this._normalizeFormat(_format);

    if (!_format.type) {
      _format.type = 'decimal';
    }

    var numberConfig = this._parseNumberFormatString(_format.type);

    if (!numberConfig) {
      var formatterConfig = this._getSeparators();

      formatterConfig.unlimitedIntegerDigits = _format.unlimitedIntegerDigits;
      return this.convertDigits(_number.default.getFormatter(_format.type, formatterConfig)(value));
    }

    return this._formatNumber(value, numberConfig, _format);
  },
  parse: function parse(text, format) {
    if (!text) {
      return;
    }

    if (format && format.parser) {
      return format.parser(text);
    }

    text = this.convertDigits(text, true);

    if (format && typeof format !== 'string') {
      _errors.default.log('W0011');
    }

    var decimalSeparator = this.getDecimalSeparator();
    var regExp = new RegExp('[^0-9' + (0, _common.escapeRegExp)(decimalSeparator) + ']', 'g');
    var cleanedText = text.replace(regExp, '').replace(decimalSeparator, '.').replace(/\.$/g, '');

    if (cleanedText === '.' || cleanedText === '') {
      return null;
    }

    if (this._calcSignificantDigits(cleanedText) > 15) {
      return NaN;
    }

    var parsed = +cleanedText * this.getSign(text, format);
    format = this._normalizeFormat(format);

    var formatConfig = this._parseNumberFormatString(format.type);

    var power = formatConfig === null || formatConfig === void 0 ? void 0 : formatConfig.power;

    if (power) {
      if (power === 'auto') {
        var match = text.match(/\d(K|M|B|T)/);

        if (match) {
          power = (0, _array.find)(Object.keys(LargeNumberFormatPostfixes), function (power) {
            return LargeNumberFormatPostfixes[power] === match[1];
          });
        }
      }

      parsed = parsed * Math.pow(10, 3 * power);
    }

    if ((formatConfig === null || formatConfig === void 0 ? void 0 : formatConfig.formatType) === 'percent') {
      parsed /= 100;
    }

    return parsed;
  },
  _calcSignificantDigits: function _calcSignificantDigits(text) {
    var _text$split = text.split('.'),
        _text$split2 = _slicedToArray(_text$split, 2),
        integer = _text$split2[0],
        fractional = _text$split2[1];

    var calcDigitsAfterLeadingZeros = function calcDigitsAfterLeadingZeros(digits) {
      var index = -1;

      for (var i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
          index = i;
          break;
        }
      }

      return index > -1 ? digits.length - index : 0;
    };

    var result = 0;

    if (integer) {
      result += calcDigitsAfterLeadingZeros(integer.split(''));
    }

    if (fractional) {
      result += calcDigitsAfterLeadingZeros(fractional.split('').reverse());
    }

    return result;
  }
});
numberLocalization.inject(_currency.default);

if (hasIntl) {
  numberLocalization.inject(_number2.default);
}

var _default = numberLocalization;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/ldml/number.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.getFormatter = getFormatter;
exports.getFormat = getFormat;

var _math = __webpack_require__(48);

var _utils = __webpack_require__(49);

var DEFAULT_CONFIG = {
  thousandsSeparator: ',',
  decimalSeparator: '.'
};
var ESCAPING_CHAR = '\'';
var MAXIMUM_NUMBER_LENGTH = 15;

function getGroupSizes(formatString) {
  return formatString.split(',').slice(1).map(function (str) {
    return str.split('').filter(function (char) {
      return char === '#' || char === '0';
    }).length;
  });
}

function getSignParts(format) {
  var signParts = format.split(';');

  if (signParts.length === 1) {
    signParts.push('-' + signParts[0]);
  }

  return signParts;
}

function reverseString(str) {
  return str.toString().split('').reverse().join('');
}

function isPercentFormat(format) {
  return format.indexOf('%') !== -1 && !format.match(/'[^']*%[^']*'/g);
}

function removeStubs(str) {
  return str.replace(/'.+'/g, '');
}

function getNonRequiredDigitCount(floatFormat) {
  if (!floatFormat) return 0;
  var format = removeStubs(floatFormat);
  return format.length - format.replace(/[#]/g, '').length;
}

function getRequiredDigitCount(floatFormat) {
  if (!floatFormat) return 0;
  var format = removeStubs(floatFormat);
  return format.length - format.replace(/[0]/g, '').length;
}

function normalizeValueString(valuePart, minDigitCount, maxDigitCount) {
  if (!valuePart) return '';

  if (valuePart.length > maxDigitCount) {
    valuePart = valuePart.substr(0, maxDigitCount);
  }

  while (valuePart.length > minDigitCount && valuePart.slice(-1) === '0') {
    valuePart = valuePart.substr(0, valuePart.length - 1);
  }

  while (valuePart.length < minDigitCount) {
    valuePart += '0';
  }

  return valuePart;
}

function applyGroups(valueString, groupSizes, thousandsSeparator) {
  if (!groupSizes.length) return valueString;
  var groups = [];
  var index = 0;

  while (valueString) {
    var groupSize = groupSizes[index];

    if (!groupSize) {
      break;
    }

    groups.push(valueString.slice(0, groupSize));
    valueString = valueString.slice(groupSize);

    if (index < groupSizes.length - 1) {
      index++;
    }
  }

  return groups.join(thousandsSeparator);
}

function formatNumberPart(format, valueString) {
  return format.split(ESCAPING_CHAR).map(function (formatPart, escapeIndex) {
    var isEscape = escapeIndex % 2;

    if (!formatPart && isEscape) {
      return ESCAPING_CHAR;
    }

    return isEscape ? formatPart : formatPart.replace(/[,#0]+/, valueString);
  }).join('');
}

function getFloatPointIndex(format) {
  var isEscape = false;

  for (var index = 0; index < format.length; index++) {
    if (format[index] === '\'') {
      isEscape = !isEscape;
    }

    if (format[index] === '.' && !isEscape) {
      return index;
    }
  }

  return format.length;
}

function getFormatter(format, config) {
  config = config || DEFAULT_CONFIG;
  return function (value) {
    if (typeof value !== 'number' || isNaN(value)) return '';
    var signFormatParts = getSignParts(format);
    var isPositiveZero = 1 / value === Infinity;
    var isPositive = value > 0 || isPositiveZero;
    var numberFormat = signFormatParts[isPositive ? 0 : 1];

    if (isPercentFormat(numberFormat)) {
      value = value * 100;
    }

    if (!isPositive) {
      value = -value;
    }

    var floatPointIndex = getFloatPointIndex(numberFormat);
    var floatFormatParts = [numberFormat.substr(0, floatPointIndex), numberFormat.substr(floatPointIndex + 1)];
    var minFloatPrecision = getRequiredDigitCount(floatFormatParts[1]);
    var maxFloatPrecision = minFloatPrecision + getNonRequiredDigitCount(floatFormatParts[1]);
    var minIntegerPrecision = getRequiredDigitCount(floatFormatParts[0]);
    var maxIntegerPrecision = getNonRequiredDigitCount(floatFormatParts[0]) || config.unlimitedIntegerDigits ? undefined : minIntegerPrecision;
    var integerLength = Math.floor(value).toString().length;
    var floatPrecision = (0, _math.fitIntoRange)(maxFloatPrecision, 0, MAXIMUM_NUMBER_LENGTH - integerLength);
    var groupSizes = getGroupSizes(floatFormatParts[0]).reverse();
    var valueParts = (0, _utils.toFixed)(value, floatPrecision < 0 ? 0 : floatPrecision).split('.');
    var valueIntegerPart = normalizeValueString(reverseString(valueParts[0]), minIntegerPrecision, maxIntegerPrecision);
    var valueFloatPart = normalizeValueString(valueParts[1], minFloatPrecision, maxFloatPrecision);
    valueIntegerPart = applyGroups(valueIntegerPart, groupSizes, config.thousandsSeparator);
    var integerString = reverseString(formatNumberPart(reverseString(floatFormatParts[0]), valueIntegerPart));
    var floatString = maxFloatPrecision ? formatNumberPart(floatFormatParts[1], valueFloatPart) : '';
    var result = integerString + (floatString.match(/\d/) ? config.decimalSeparator : '') + floatString;
    return result;
  };
}

function parseValue(text, isPercent, isNegative) {
  var value = (isPercent ? 0.01 : 1) * parseFloat(text) || 0;
  return isNegative ? -value : value;
}

function prepareValueText(valueText, formatter, isPercent, isIntegerPart) {
  var nextValueText = valueText;
  var char;
  var text;
  var nextText;

  do {
    if (nextText) {
      char = text.length === nextText.length ? '0' : '1';
      valueText = isIntegerPart ? char + valueText : valueText + char;
    }

    text = nextText || formatter(parseValue(nextValueText, isPercent));
    nextValueText = isIntegerPart ? '1' + nextValueText : nextValueText + '1';
    nextText = formatter(parseValue(nextValueText, isPercent));
  } while (text !== nextText && (isIntegerPart ? text.length === nextText.length : text.length <= nextText.length));

  if (isIntegerPart && nextText.length > text.length) {
    var hasGroups = formatter(12345).indexOf('12345') === -1;

    do {
      valueText = '1' + valueText;
    } while (hasGroups && parseValue(valueText, isPercent) < 100000);
  }

  return valueText;
}

function getFormatByValueText(valueText, formatter, isPercent, isNegative) {
  var format = formatter(parseValue(valueText, isPercent, isNegative));
  var valueTextParts = valueText.split('.');
  var valueTextWithModifiedFloat = valueTextParts[0] + '.3' + valueTextParts[1].slice(1);
  var valueWithModifiedFloat = parseValue(valueTextWithModifiedFloat, isPercent, isNegative);
  var decimalSeparatorIndex = formatter(valueWithModifiedFloat).indexOf('3') - 1;
  format = format.replace(/(\d)\D(\d)/g, '$1,$2');

  if (decimalSeparatorIndex >= 0) {
    format = format.slice(0, decimalSeparatorIndex) + '.' + format.slice(decimalSeparatorIndex + 1);
  }

  format = format.replace(/1+/, '1').replace(/1/g, '#');

  if (!isPercent) {
    format = format.replace('%', '\'%\'');
  }

  return format;
}

function getFormat(formatter) {
  var valueText = '.';
  var isPercent = formatter(1).indexOf('100') >= 0;
  valueText = prepareValueText(valueText, formatter, isPercent, true);
  valueText = prepareValueText(valueText, formatter, isPercent, false);
  var positiveFormat = getFormatByValueText(valueText, formatter, isPercent, false);
  var negativeFormat = getFormatByValueText(valueText, formatter, isPercent, true);
  return negativeFormat === '-' + positiveFormat ? positiveFormat : positiveFormat + ';' + negativeFormat;
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/currency.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _extend = __webpack_require__(3);

var _default = {
  _formatNumberCore: function _formatNumberCore(value, format, formatConfig) {
    if (format === 'currency') {
      formatConfig.precision = formatConfig.precision || 0;
      var result = this.format(value, (0, _extend.extend)({}, formatConfig, {
        type: 'fixedpoint'
      }));
      var currencyPart = this.getCurrencySymbol().symbol.replace('$', '$$$$');
      result = result.replace(/^(\D*)(\d.*)/, '$1' + currencyPart + '$2');
      return result;
    }

    return this.callBase.apply(this, arguments);
  },
  getCurrencySymbol: function getCurrencySymbol() {
    return {
      symbol: '$'
    };
  },
  getOpenXmlCurrencyFormat: function getOpenXmlCurrencyFormat() {
    return '$#,##0{0}_);\\($#,##0{0}\\)';
  }
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/intl/number.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(16));

var _core = __webpack_require__(50);

var _open_xml_currency_format = _interopRequireDefault(__webpack_require__(83));

var _accounting_formats = _interopRequireDefault(__webpack_require__(84));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals Intl */
var detectCurrencySymbolRegex = /([^\s0]+)?(\s*)0*[.,]*0*(\s*)([^\s0]+)?/;
var formattersCache = {};

var getFormatter = function getFormatter(format) {
  var key = (0, _core.locale)() + '/' + JSON.stringify(format);

  if (!formattersCache[key]) {
    formattersCache[key] = new Intl.NumberFormat((0, _core.locale)(), format).format;
  }

  return formattersCache[key];
};

var getCurrencyFormatter = function getCurrencyFormatter(currency) {
  return new Intl.NumberFormat((0, _core.locale)(), {
    style: 'currency',
    currency: currency
  });
};

var _default = {
  engine: function engine() {
    return 'intl';
  },
  _formatNumberCore: function _formatNumberCore(value, format, formatConfig) {
    if (format === 'exponential') {
      return this.callBase.apply(this, arguments);
    }

    return getFormatter(this._normalizeFormatConfig(format, formatConfig))(value);
  },
  _normalizeFormatConfig: function _normalizeFormatConfig(format, formatConfig, value) {
    var config;

    if (format === 'decimal') {
      config = {
        minimumIntegerDigits: formatConfig.precision || undefined,
        useGrouping: false,
        maximumFractionDigits: String(value).length,
        round: value < 0 ? 'ceil' : 'floor'
      };
    } else {
      config = this._getPrecisionConfig(formatConfig.precision);
    }

    if (format === 'percent') {
      config.style = 'percent';
    } else if (format === 'currency') {
      config.style = 'currency';
      config.currency = formatConfig.currency || (0, _config.default)().defaultCurrency;
    }

    return config;
  },
  _getPrecisionConfig: function _getPrecisionConfig(precision) {
    var config;

    if (precision === null) {
      config = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20
      };
    } else {
      config = {
        minimumFractionDigits: precision || 0,
        maximumFractionDigits: precision || 0
      };
    }

    return config;
  },
  format: function format(value, _format) {
    if ('number' !== typeof value) {
      return value;
    }

    _format = this._normalizeFormat(_format);

    if (_format.currency === 'default') {
      _format.currency = (0, _config.default)().defaultCurrency;
    }

    if (!_format || 'function' !== typeof _format && !_format.type && !_format.formatter) {
      return getFormatter(_format)(value);
    }

    return this.callBase.apply(this, arguments);
  },
  _getCurrencySymbolInfo: function _getCurrencySymbolInfo(currency) {
    var formatter = getCurrencyFormatter(currency);
    return this._extractCurrencySymbolInfo(formatter.format(0));
  },
  _extractCurrencySymbolInfo: function _extractCurrencySymbolInfo(currencyValueString) {
    var match = detectCurrencySymbolRegex.exec(currencyValueString) || [];
    var position = match[1] ? 'before' : 'after';
    var symbol = match[1] || match[4] || '';
    var delimiter = match[2] || match[3] || '';
    return {
      position: position,
      symbol: symbol,
      delimiter: delimiter
    };
  },
  getCurrencySymbol: function getCurrencySymbol(currency) {
    if (!currency) {
      currency = (0, _config.default)().defaultCurrency;
    }

    var symbolInfo = this._getCurrencySymbolInfo(currency);

    return {
      'symbol': symbolInfo.symbol
    };
  },
  getOpenXmlCurrencyFormat: function getOpenXmlCurrencyFormat(currency) {
    var targetCurrency = currency || (0, _config.default)().defaultCurrency;

    var currencySymbol = this._getCurrencySymbolInfo(targetCurrency).symbol;

    var closestAccountingFormat = (0, _core.getValueByClosestLocale)(function (locale) {
      return _accounting_formats.default[locale];
    });
    return (0, _open_xml_currency_format.default)(currencySymbol, closestAccountingFormat);
  }
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/cldr-data/parent_locales.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

/* eslint-disable node/no-unsupported-features/es-syntax */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
var _default = {
  "en-150": "en-001",
  "en-AG": "en-001",
  "en-AI": "en-001",
  "en-AU": "en-001",
  "en-BB": "en-001",
  "en-BM": "en-001",
  "en-BS": "en-001",
  "en-BW": "en-001",
  "en-BZ": "en-001",
  "en-CA": "en-001",
  "en-CC": "en-001",
  "en-CK": "en-001",
  "en-CM": "en-001",
  "en-CX": "en-001",
  "en-CY": "en-001",
  "en-DG": "en-001",
  "en-DM": "en-001",
  "en-ER": "en-001",
  "en-FJ": "en-001",
  "en-FK": "en-001",
  "en-FM": "en-001",
  "en-GB": "en-001",
  "en-GD": "en-001",
  "en-GG": "en-001",
  "en-GH": "en-001",
  "en-GI": "en-001",
  "en-GM": "en-001",
  "en-GY": "en-001",
  "en-HK": "en-001",
  "en-IE": "en-001",
  "en-IL": "en-001",
  "en-IM": "en-001",
  "en-IN": "en-001",
  "en-IO": "en-001",
  "en-JE": "en-001",
  "en-JM": "en-001",
  "en-KE": "en-001",
  "en-KI": "en-001",
  "en-KN": "en-001",
  "en-KY": "en-001",
  "en-LC": "en-001",
  "en-LR": "en-001",
  "en-LS": "en-001",
  "en-MG": "en-001",
  "en-MO": "en-001",
  "en-MS": "en-001",
  "en-MT": "en-001",
  "en-MU": "en-001",
  "en-MW": "en-001",
  "en-MY": "en-001",
  "en-NA": "en-001",
  "en-NF": "en-001",
  "en-NG": "en-001",
  "en-NR": "en-001",
  "en-NU": "en-001",
  "en-NZ": "en-001",
  "en-PG": "en-001",
  "en-PH": "en-001",
  "en-PK": "en-001",
  "en-PN": "en-001",
  "en-PW": "en-001",
  "en-RW": "en-001",
  "en-SB": "en-001",
  "en-SC": "en-001",
  "en-SD": "en-001",
  "en-SG": "en-001",
  "en-SH": "en-001",
  "en-SL": "en-001",
  "en-SS": "en-001",
  "en-SX": "en-001",
  "en-SZ": "en-001",
  "en-TC": "en-001",
  "en-TK": "en-001",
  "en-TO": "en-001",
  "en-TT": "en-001",
  "en-TV": "en-001",
  "en-TZ": "en-001",
  "en-UG": "en-001",
  "en-VC": "en-001",
  "en-VG": "en-001",
  "en-VU": "en-001",
  "en-WS": "en-001",
  "en-ZA": "en-001",
  "en-ZM": "en-001",
  "en-ZW": "en-001",
  "en-AT": "en-150",
  "en-BE": "en-150",
  "en-CH": "en-150",
  "en-DE": "en-150",
  "en-DK": "en-150",
  "en-FI": "en-150",
  "en-NL": "en-150",
  "en-SE": "en-150",
  "en-SI": "en-150",
  "es-AR": "es-419",
  "es-BO": "es-419",
  "es-BR": "es-419",
  "es-BZ": "es-419",
  "es-CL": "es-419",
  "es-CO": "es-419",
  "es-CR": "es-419",
  "es-CU": "es-419",
  "es-DO": "es-419",
  "es-EC": "es-419",
  "es-GT": "es-419",
  "es-HN": "es-419",
  "es-MX": "es-419",
  "es-NI": "es-419",
  "es-PA": "es-419",
  "es-PE": "es-419",
  "es-PR": "es-419",
  "es-PY": "es-419",
  "es-SV": "es-419",
  "es-US": "es-419",
  "es-UY": "es-419",
  "es-VE": "es-419",
  "pt-AO": "pt-PT",
  "pt-CH": "pt-PT",
  "pt-CV": "pt-PT",
  "pt-FR": "pt-PT",
  "pt-GQ": "pt-PT",
  "pt-GW": "pt-PT",
  "pt-LU": "pt-PT",
  "pt-MO": "pt-PT",
  "pt-MZ": "pt-PT",
  "pt-ST": "pt-PT",
  "pt-TL": "pt-PT",
  "az-Arab": "root",
  "az-Cyrl": "root",
  "blt-Latn": "root",
  "bm-Nkoo": "root",
  "bs-Cyrl": "root",
  "byn-Latn": "root",
  "cu-Glag": "root",
  "dje-Arab": "root",
  "dyo-Arab": "root",
  "en-Dsrt": "root",
  "en-Shaw": "root",
  "ff-Adlm": "root",
  "ff-Arab": "root",
  "ha-Arab": "root",
  "iu-Latn": "root",
  "kk-Arab": "root",
  "ku-Arab": "root",
  "ky-Arab": "root",
  "ky-Latn": "root",
  "ml-Arab": "root",
  "mn-Mong": "root",
  "ms-Arab": "root",
  "pa-Arab": "root",
  "sd-Deva": "root",
  "sd-Khoj": "root",
  "sd-Sind": "root",
  "shi-Latn": "root",
  "so-Arab": "root",
  "sr-Latn": "root",
  "sw-Arab": "root",
  "tg-Arab": "root",
  "ug-Cyrl": "root",
  "uz-Arab": "root",
  "uz-Cyrl": "root",
  "vai-Latn": "root",
  "wo-Arab": "root",
  "yo-Arab": "root",
  "yue-Hans": "root",
  "zh-Hant": "root",
  "zh-Hant-MO": "zh-Hant-HK"
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/parentLocale.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

/* eslint-disable import/no-commonjs */
var PARENT_LOCALE_SEPARATOR = '-';

var _default = function _default(parentLocales, locale) {
  var parentLocale = parentLocales[locale];

  if (parentLocale) {
    return parentLocale !== 'root' && parentLocale;
  }

  return locale.substr(0, locale.lastIndexOf(PARENT_LOCALE_SEPARATOR));
};

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/open_xml_currency_format.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _default = function _default(currencySymbol, accountingFormat) {
  if (!accountingFormat) {
    return;
  }

  var encodedCurrencySymbol = currencySymbol;

  if (typeof currencySymbol === 'string') {
    encodedCurrencySymbol = '';

    for (var i = 0; i < currencySymbol.length; i++) {
      if (currencySymbol[i] !== '$') {
        encodedCurrencySymbol += '\\';
      }

      encodedCurrencySymbol += currencySymbol[i];
    }
  }

  var encodeSymbols = {
    '.00': '{0}',
    '\'': '\\\'',
    '\\(': '\\(',
    '\\)': '\\)',
    ' ': '\\ ',
    '"': '&quot;',
    '\\¤': encodedCurrencySymbol
  };
  var result = accountingFormat.split(';');

  for (var _i = 0; _i < result.length; _i++) {
    for (var symbol in encodeSymbols) {
      if (Object.prototype.hasOwnProperty.call(encodeSymbols, symbol)) {
        result[_i] = result[_i].replace(new RegExp(symbol, 'g'), encodeSymbols[symbol]);
      }
    }
  }

  return result.length === 2 ? result[0] + '_);' + result[1] : result[0];
};

exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/cldr-data/accounting_formats.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

/* eslint-disable node/no-unsupported-features/es-syntax */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
var _default = {
  "af": "¤#,##0.00;(¤#,##0.00)",
  "af-NA": "¤#,##0.00;(¤#,##0.00)",
  "agq": "#,##0.00¤",
  "ak": "¤#,##0.00",
  "am": "¤#,##0.00;(¤#,##0.00)",
  "ar": "¤#,##0.00;(¤#,##0.00)",
  "ar-AE": "¤#,##0.00;(¤#,##0.00)",
  "ar-BH": "¤#,##0.00;(¤#,##0.00)",
  "ar-DJ": "¤#,##0.00;(¤#,##0.00)",
  "ar-DZ": "¤#,##0.00;(¤#,##0.00)",
  "ar-EG": "¤#,##0.00;(¤#,##0.00)",
  "ar-EH": "¤#,##0.00;(¤#,##0.00)",
  "ar-ER": "¤#,##0.00;(¤#,##0.00)",
  "ar-IL": "¤#,##0.00;(¤#,##0.00)",
  "ar-IQ": "¤#,##0.00;(¤#,##0.00)",
  "ar-JO": "¤#,##0.00;(¤#,##0.00)",
  "ar-KM": "¤#,##0.00;(¤#,##0.00)",
  "ar-KW": "¤#,##0.00;(¤#,##0.00)",
  "ar-LB": "¤#,##0.00;(¤#,##0.00)",
  "ar-LY": "¤#,##0.00;(¤#,##0.00)",
  "ar-MA": "¤#,##0.00;(¤#,##0.00)",
  "ar-MR": "¤#,##0.00;(¤#,##0.00)",
  "ar-OM": "¤#,##0.00;(¤#,##0.00)",
  "ar-PS": "¤#,##0.00;(¤#,##0.00)",
  "ar-QA": "¤#,##0.00;(¤#,##0.00)",
  "ar-SA": "¤#,##0.00;(¤#,##0.00)",
  "ar-SD": "¤#,##0.00;(¤#,##0.00)",
  "ar-SO": "¤#,##0.00;(¤#,##0.00)",
  "ar-SS": "¤#,##0.00;(¤#,##0.00)",
  "ar-SY": "¤#,##0.00;(¤#,##0.00)",
  "ar-TD": "¤#,##0.00;(¤#,##0.00)",
  "ar-TN": "¤#,##0.00;(¤#,##0.00)",
  "ar-YE": "¤#,##0.00;(¤#,##0.00)",
  "as": "¤ #,##,##0.00",
  "asa": "#,##0.00 ¤",
  "ast": "#,##0.00 ¤",
  "az": "#,##0.00 ¤",
  "az-Cyrl": "#,##0.00 ¤",
  "az-Latn": "#,##0.00 ¤",
  "bas": "#,##0.00 ¤",
  "be": "#,##0.00 ¤",
  "bem": "¤#,##0.00;(¤#,##0.00)",
  "bez": "#,##0.00¤",
  "bg": "0.00 ¤;(0.00 ¤)",
  "bm": "¤#,##0.00;(¤#,##0.00)",
  "bn": "#,##,##0.00¤;(#,##,##0.00¤)",
  "bn-IN": "#,##,##0.00¤;(#,##,##0.00¤)",
  "bo": "¤ #,##0.00",
  "bo-IN": "¤ #,##0.00",
  "br": "#,##0.00 ¤",
  "brx": "¤ #,##,##0.00",
  "bs": "#,##0.00 ¤",
  "bs-Cyrl": "#,##0.00 ¤",
  "bs-Latn": "#,##0.00 ¤",
  "ca": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ca-AD": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ca-ES-VALENCIA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ca-FR": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ca-IT": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ccp": "#,##,##0.00¤;(#,##,##0.00¤)",
  "ccp-IN": "#,##,##0.00¤;(#,##,##0.00¤)",
  "ce": "#,##0.00 ¤",
  "ceb": "¤#,##0.00;(¤#,##0.00)",
  "cgg": "¤#,##0.00",
  "chr": "¤#,##0.00;(¤#,##0.00)",
  "ckb": "¤ #,##0.00",
  "ckb-IR": "¤ #,##0.00",
  "cs": "#,##0.00 ¤",
  "cu": "¤ #,##0.00",
  "cy": "¤#,##0.00;(¤#,##0.00)",
  "da": "#,##0.00 ¤",
  "da-GL": "#,##0.00 ¤",
  "dav": "¤#,##0.00;(¤#,##0.00)",
  "de": "#,##0.00 ¤",
  "de-AT": "#,##0.00 ¤",
  "de-BE": "#,##0.00 ¤",
  "de-CH": "#,##0.00 ¤",
  "de-IT": "#,##0.00 ¤",
  "de-LI": "#,##0.00 ¤",
  "de-LU": "#,##0.00 ¤",
  "dje": "#,##0.00¤",
  "dsb": "#,##0.00 ¤",
  "dua": "#,##0.00 ¤",
  "dyo": "#,##0.00 ¤",
  "dz": "¤#,##,##0.00",
  "ebu": "¤#,##0.00;(¤#,##0.00)",
  "ee": "¤#,##0.00;(¤#,##0.00)",
  "ee-TG": "¤#,##0.00;(¤#,##0.00)",
  "el": "#,##0.00 ¤",
  "el-CY": "#,##0.00 ¤",
  "en": "¤#,##0.00;(¤#,##0.00)",
  "en-001": "¤#,##0.00;(¤#,##0.00)",
  "en-150": "#,##0.00 ¤",
  "en-AE": "¤#,##0.00;(¤#,##0.00)",
  "en-AG": "¤#,##0.00;(¤#,##0.00)",
  "en-AI": "¤#,##0.00;(¤#,##0.00)",
  "en-AS": "¤#,##0.00;(¤#,##0.00)",
  "en-AT": "¤ #,##0.00",
  "en-AU": "¤#,##0.00;(¤#,##0.00)",
  "en-BB": "¤#,##0.00;(¤#,##0.00)",
  "en-BE": "#,##0.00 ¤",
  "en-BI": "¤#,##0.00;(¤#,##0.00)",
  "en-BM": "¤#,##0.00;(¤#,##0.00)",
  "en-BS": "¤#,##0.00;(¤#,##0.00)",
  "en-BW": "¤#,##0.00;(¤#,##0.00)",
  "en-BZ": "¤#,##0.00;(¤#,##0.00)",
  "en-CA": "¤#,##0.00;(¤#,##0.00)",
  "en-CC": "¤#,##0.00;(¤#,##0.00)",
  "en-CH": "¤ #,##0.00;¤-#,##0.00",
  "en-CK": "¤#,##0.00;(¤#,##0.00)",
  "en-CM": "¤#,##0.00;(¤#,##0.00)",
  "en-CX": "¤#,##0.00;(¤#,##0.00)",
  "en-CY": "¤#,##0.00;(¤#,##0.00)",
  "en-DE": "#,##0.00 ¤",
  "en-DG": "¤#,##0.00;(¤#,##0.00)",
  "en-DK": "#,##0.00 ¤",
  "en-DM": "¤#,##0.00;(¤#,##0.00)",
  "en-ER": "¤#,##0.00;(¤#,##0.00)",
  "en-FI": "#,##0.00 ¤",
  "en-FJ": "¤#,##0.00;(¤#,##0.00)",
  "en-FK": "¤#,##0.00;(¤#,##0.00)",
  "en-FM": "¤#,##0.00;(¤#,##0.00)",
  "en-GB": "¤#,##0.00;(¤#,##0.00)",
  "en-GD": "¤#,##0.00;(¤#,##0.00)",
  "en-GG": "¤#,##0.00;(¤#,##0.00)",
  "en-GH": "¤#,##0.00;(¤#,##0.00)",
  "en-GI": "¤#,##0.00;(¤#,##0.00)",
  "en-GM": "¤#,##0.00;(¤#,##0.00)",
  "en-GU": "¤#,##0.00;(¤#,##0.00)",
  "en-GY": "¤#,##0.00;(¤#,##0.00)",
  "en-HK": "¤#,##0.00;(¤#,##0.00)",
  "en-IE": "¤#,##0.00;(¤#,##0.00)",
  "en-IL": "¤#,##0.00;(¤#,##0.00)",
  "en-IM": "¤#,##0.00;(¤#,##0.00)",
  "en-IN": "¤#,##0.00;(¤#,##0.00)",
  "en-IO": "¤#,##0.00;(¤#,##0.00)",
  "en-JE": "¤#,##0.00;(¤#,##0.00)",
  "en-JM": "¤#,##0.00;(¤#,##0.00)",
  "en-KE": "¤#,##0.00;(¤#,##0.00)",
  "en-KI": "¤#,##0.00;(¤#,##0.00)",
  "en-KN": "¤#,##0.00;(¤#,##0.00)",
  "en-KY": "¤#,##0.00;(¤#,##0.00)",
  "en-LC": "¤#,##0.00;(¤#,##0.00)",
  "en-LR": "¤#,##0.00;(¤#,##0.00)",
  "en-LS": "¤#,##0.00;(¤#,##0.00)",
  "en-MG": "¤#,##0.00;(¤#,##0.00)",
  "en-MH": "¤#,##0.00;(¤#,##0.00)",
  "en-MO": "¤#,##0.00;(¤#,##0.00)",
  "en-MP": "¤#,##0.00;(¤#,##0.00)",
  "en-MS": "¤#,##0.00;(¤#,##0.00)",
  "en-MT": "¤#,##0.00;(¤#,##0.00)",
  "en-MU": "¤#,##0.00;(¤#,##0.00)",
  "en-MW": "¤#,##0.00;(¤#,##0.00)",
  "en-MY": "¤#,##0.00;(¤#,##0.00)",
  "en-NA": "¤#,##0.00;(¤#,##0.00)",
  "en-NF": "¤#,##0.00;(¤#,##0.00)",
  "en-NG": "¤#,##0.00;(¤#,##0.00)",
  "en-NL": "¤ #,##0.00;(¤ #,##0.00)",
  "en-NR": "¤#,##0.00;(¤#,##0.00)",
  "en-NU": "¤#,##0.00;(¤#,##0.00)",
  "en-NZ": "¤#,##0.00;(¤#,##0.00)",
  "en-PG": "¤#,##0.00;(¤#,##0.00)",
  "en-PH": "¤#,##0.00;(¤#,##0.00)",
  "en-PK": "¤#,##0.00;(¤#,##0.00)",
  "en-PN": "¤#,##0.00;(¤#,##0.00)",
  "en-PR": "¤#,##0.00;(¤#,##0.00)",
  "en-PW": "¤#,##0.00;(¤#,##0.00)",
  "en-RW": "¤#,##0.00;(¤#,##0.00)",
  "en-SB": "¤#,##0.00;(¤#,##0.00)",
  "en-SC": "¤#,##0.00;(¤#,##0.00)",
  "en-SD": "¤#,##0.00;(¤#,##0.00)",
  "en-SE": "#,##0.00 ¤",
  "en-SG": "¤#,##0.00;(¤#,##0.00)",
  "en-SH": "¤#,##0.00;(¤#,##0.00)",
  "en-SI": "#,##0.00 ¤;(#,##0.00 ¤)",
  "en-SL": "¤#,##0.00;(¤#,##0.00)",
  "en-SS": "¤#,##0.00;(¤#,##0.00)",
  "en-SX": "¤#,##0.00;(¤#,##0.00)",
  "en-SZ": "¤#,##0.00;(¤#,##0.00)",
  "en-TC": "¤#,##0.00;(¤#,##0.00)",
  "en-TK": "¤#,##0.00;(¤#,##0.00)",
  "en-TO": "¤#,##0.00;(¤#,##0.00)",
  "en-TT": "¤#,##0.00;(¤#,##0.00)",
  "en-TV": "¤#,##0.00;(¤#,##0.00)",
  "en-TZ": "¤#,##0.00;(¤#,##0.00)",
  "en-UG": "¤#,##0.00;(¤#,##0.00)",
  "en-UM": "¤#,##0.00;(¤#,##0.00)",
  "en-US-POSIX": "¤#,##0.00;(¤#,##0.00)",
  "en-VC": "¤#,##0.00;(¤#,##0.00)",
  "en-VG": "¤#,##0.00;(¤#,##0.00)",
  "en-VI": "¤#,##0.00;(¤#,##0.00)",
  "en-VU": "¤#,##0.00;(¤#,##0.00)",
  "en-WS": "¤#,##0.00;(¤#,##0.00)",
  "en-ZA": "¤#,##0.00;(¤#,##0.00)",
  "en-ZM": "¤#,##0.00;(¤#,##0.00)",
  "en-ZW": "¤#,##0.00;(¤#,##0.00)",
  "eo": "¤ #,##0.00",
  "es": "#,##0.00 ¤",
  "es-419": "¤#,##0.00",
  "es-AR": "¤ #,##0.00;(¤ #,##0.00)",
  "es-BO": "¤#,##0.00",
  "es-BR": "¤#,##0.00",
  "es-BZ": "¤#,##0.00",
  "es-CL": "¤#,##0.00",
  "es-CO": "¤#,##0.00",
  "es-CR": "¤#,##0.00",
  "es-CU": "¤#,##0.00",
  "es-DO": "¤#,##0.00;(¤#,##0.00)",
  "es-EA": "#,##0.00 ¤",
  "es-EC": "¤#,##0.00",
  "es-GQ": "#,##0.00 ¤",
  "es-GT": "¤#,##0.00",
  "es-HN": "¤#,##0.00",
  "es-IC": "#,##0.00 ¤",
  "es-MX": "¤#,##0.00",
  "es-NI": "¤#,##0.00",
  "es-PA": "¤#,##0.00",
  "es-PE": "¤#,##0.00",
  "es-PH": "#,##0.00 ¤",
  "es-PR": "¤#,##0.00",
  "es-PY": "¤#,##0.00",
  "es-SV": "¤#,##0.00",
  "es-US": "¤#,##0.00",
  "es-UY": "¤ #,##0.00;(¤ #,##0.00)",
  "es-VE": "¤#,##0.00",
  "et": "#,##0.00 ¤;(#,##0.00 ¤)",
  "eu": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ewo": "#,##0.00 ¤",
  "fa": "‎¤ #,##0.00;‎(¤ #,##0.00)",
  "fa-AF": "¤ #,##0.00;‎(¤ #,##0.00)",
  "ff": "#,##0.00 ¤",
  "ff-Latn": "#,##0.00 ¤",
  "ff-Latn-BF": "#,##0.00 ¤",
  "ff-Latn-CM": "#,##0.00 ¤",
  "ff-Latn-GH": "#,##0.00 ¤",
  "ff-Latn-GM": "#,##0.00 ¤",
  "ff-Latn-GN": "#,##0.00 ¤",
  "ff-Latn-GW": "#,##0.00 ¤",
  "ff-Latn-LR": "#,##0.00 ¤",
  "ff-Latn-MR": "#,##0.00 ¤",
  "ff-Latn-NE": "#,##0.00 ¤",
  "ff-Latn-NG": "#,##0.00 ¤",
  "ff-Latn-SL": "#,##0.00 ¤",
  "fi": "#,##0.00 ¤",
  "fil": "¤#,##0.00;(¤#,##0.00)",
  "fo": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fo-DK": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-BE": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-BF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-BI": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-BJ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-BL": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CD": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CG": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CH": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CI": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-CM": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-DJ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-DZ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-GA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-GF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-GN": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-GP": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-GQ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-HT": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-KM": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-LU": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MC": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MG": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-ML": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MQ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MR": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-MU": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-NC": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-NE": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-PF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-PM": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-RE": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-RW": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-SC": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-SN": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-SY": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-TD": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-TG": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-TN": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-VU": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-WF": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fr-YT": "#,##0.00 ¤;(#,##0.00 ¤)",
  "fur": "¤ #,##0.00",
  "fy": "¤ #,##0.00;(¤ #,##0.00)",
  "ga": "¤#,##0.00;(¤#,##0.00)",
  "ga-GB": "¤#,##0.00;(¤#,##0.00)",
  "gd": "¤#,##0.00;(¤#,##0.00)",
  "gl": "#,##0.00 ¤",
  "gsw": "#,##0.00 ¤",
  "gsw-FR": "#,##0.00 ¤",
  "gsw-LI": "#,##0.00 ¤",
  "gu": "¤#,##,##0.00;(¤#,##,##0.00)",
  "guz": "¤#,##0.00;(¤#,##0.00)",
  "gv": "¤#,##0.00",
  "ha": "¤ #,##0.00",
  "ha-GH": "¤ #,##0.00",
  "ha-NE": "¤ #,##0.00",
  "haw": "¤#,##0.00;(¤#,##0.00)",
  "he": "#,##0.00 ¤",
  "hi": "¤#,##,##0.00",
  "hr": "#,##0.00 ¤",
  "hr-BA": "#,##0.00 ¤",
  "hsb": "#,##0.00 ¤",
  "hu": "#,##0.00 ¤",
  "hy": "#,##0.00 ¤",
  "ia": "¤ #,##0.00;(¤ #,##0.00)",
  "id": "¤#,##0.00",
  "ig": "¤#,##0.00;(¤#,##0.00)",
  "ii": "¤ #,##0.00",
  "is": "#,##0.00 ¤",
  "it": "#,##0.00 ¤",
  "it-CH": "#,##0.00 ¤",
  "it-SM": "#,##0.00 ¤",
  "it-VA": "#,##0.00 ¤",
  "ja": "¤#,##0.00;(¤#,##0.00)",
  "jgo": "¤ #,##0.00",
  "jmc": "¤#,##0.00",
  "jv": "¤ #,##0.00",
  "ka": "#,##0.00 ¤",
  "kab": "#,##0.00¤",
  "kam": "¤#,##0.00;(¤#,##0.00)",
  "kde": "¤#,##0.00;(¤#,##0.00)",
  "kea": "#,##0.00 ¤;(#,##0.00 ¤)",
  "khq": "#,##0.00¤",
  "ki": "¤#,##0.00;(¤#,##0.00)",
  "kk": "#,##0.00 ¤",
  "kkj": "¤ #,##0.00",
  "kl": "¤#,##0.00;¤-#,##0.00",
  "kln": "¤#,##0.00;(¤#,##0.00)",
  "km": "#,##0.00¤;(#,##0.00¤)",
  "kn": "¤#,##0.00;(¤#,##0.00)",
  "ko": "¤#,##0.00;(¤#,##0.00)",
  "ko-KP": "¤#,##0.00;(¤#,##0.00)",
  "kok": "¤#,##0.00;(¤#,##0.00)",
  "ks": "¤ #,##,##0.00",
  "ksb": "#,##0.00¤",
  "ksf": "#,##0.00 ¤",
  "ksh": "#,##0.00 ¤",
  "ku": "#,##0.00 ¤;(#,##0.00 ¤)",
  "kw": "¤#,##0.00",
  "ky": "#,##0.00 ¤",
  "lag": "¤ #,##0.00",
  "lb": "#,##0.00 ¤",
  "lg": "#,##0.00¤",
  "lkt": "¤ #,##0.00",
  "ln": "#,##0.00 ¤",
  "ln-AO": "#,##0.00 ¤",
  "ln-CF": "#,##0.00 ¤",
  "ln-CG": "#,##0.00 ¤",
  "lo": "¤#,##0.00;¤-#,##0.00",
  "lrc": "¤ #,##0.00",
  "lrc-IQ": "¤ #,##0.00",
  "lt": "#,##0.00 ¤",
  "lu": "#,##0.00¤",
  "luo": "#,##0.00¤",
  "luy": "¤#,##0.00;¤- #,##0.00",
  "lv": "#,##0.00 ¤",
  "mas": "¤#,##0.00;(¤#,##0.00)",
  "mas-TZ": "¤#,##0.00;(¤#,##0.00)",
  "mer": "¤#,##0.00;(¤#,##0.00)",
  "mfe": "¤ #,##0.00",
  "mg": "¤#,##0.00",
  "mgh": "¤ #,##0.00",
  "mgo": "¤ #,##0.00",
  "mi": "¤ #,##0.00",
  "mk": "#,##0.00 ¤",
  "ml": "¤#,##0.00;(¤#,##0.00)",
  "mn": "¤ #,##0.00",
  "mr": "¤#,##0.00;(¤#,##0.00)",
  "ms": "¤#,##0.00;(¤#,##0.00)",
  "ms-BN": "¤#,##0.00;(¤#,##0.00)",
  "ms-SG": "¤#,##0.00;(¤#,##0.00)",
  "mt": "¤#,##0.00",
  "mua": "¤#,##0.00;(¤#,##0.00)",
  "my": "¤ #,##0.00",
  "mzn": "¤ #,##0.00",
  "naq": "¤#,##0.00",
  "nb": "¤ #,##0.00",
  "nb-SJ": "¤ #,##0.00",
  "nd": "¤#,##0.00;(¤#,##0.00)",
  "nds": "¤ #,##0.00",
  "nds-NL": "¤ #,##0.00",
  "ne": "¤ #,##0.00",
  "ne-IN": "¤ #,##0.00",
  "nl": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-AW": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-BE": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-BQ": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-CW": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-SR": "¤ #,##0.00;(¤ #,##0.00)",
  "nl-SX": "¤ #,##0.00;(¤ #,##0.00)",
  "nmg": "#,##0.00 ¤",
  "nn": "#,##0.00 ¤",
  "nnh": "¤ #,##0.00",
  "nus": "¤#,##0.00;(¤#,##0.00)",
  "nyn": "¤#,##0.00",
  "om": "¤#,##0.00",
  "om-KE": "¤#,##0.00",
  "or": "¤#,##0.00;(¤#,##0.00)",
  "os": "¤ #,##0.00",
  "os-RU": "¤ #,##0.00",
  "pa": "¤ #,##0.00",
  "pa-Arab": "¤ #,##0.00",
  "pa-Guru": "¤ #,##0.00",
  "pl": "#,##0.00 ¤;(#,##0.00 ¤)",
  "prg": "¤ #,##0.00",
  "ps": "¤#,##0.00;(¤#,##0.00)",
  "ps-PK": "¤#,##0.00;(¤#,##0.00)",
  "pt": "¤ #,##0.00",
  "pt-AO": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-CH": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-CV": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-GQ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-GW": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-LU": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-MO": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-MZ": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-PT": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-ST": "#,##0.00 ¤;(#,##0.00 ¤)",
  "pt-TL": "#,##0.00 ¤;(#,##0.00 ¤)",
  "qu": "¤ #,##0.00",
  "qu-BO": "¤ #,##0.00",
  "qu-EC": "¤ #,##0.00",
  "rm": "#,##0.00 ¤",
  "rn": "#,##0.00¤",
  "ro": "#,##0.00 ¤;(#,##0.00 ¤)",
  "ro-MD": "#,##0.00 ¤;(#,##0.00 ¤)",
  "rof": "¤#,##0.00",
  "root": "¤ #,##0.00",
  "ru": "#,##0.00 ¤",
  "ru-BY": "#,##0.00 ¤",
  "ru-KG": "#,##0.00 ¤",
  "ru-KZ": "#,##0.00 ¤",
  "ru-MD": "#,##0.00 ¤",
  "ru-UA": "#,##0.00 ¤",
  "rw": "¤ #,##0.00",
  "rwk": "#,##0.00¤",
  "sah": "#,##0.00 ¤",
  "saq": "¤#,##0.00;(¤#,##0.00)",
  "sbp": "#,##0.00¤",
  "sd": "¤ #,##0.00",
  "se": "#,##0.00 ¤",
  "se-FI": "#,##0.00 ¤",
  "se-SE": "#,##0.00 ¤",
  "seh": "#,##0.00¤",
  "ses": "#,##0.00¤",
  "sg": "¤#,##0.00;¤-#,##0.00",
  "shi": "#,##0.00¤",
  "shi-Latn": "#,##0.00¤",
  "shi-Tfng": "#,##0.00¤",
  "si": "¤#,##0.00;(¤#,##0.00)",
  "sk": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sl": "#,##0.00 ¤;(#,##0.00 ¤)",
  "smn": "#,##0.00 ¤",
  "sn": "¤#,##0.00;(¤#,##0.00)",
  "so": "¤#,##0.00;(¤#,##0.00)",
  "so-DJ": "¤#,##0.00;(¤#,##0.00)",
  "so-ET": "¤#,##0.00;(¤#,##0.00)",
  "so-KE": "¤#,##0.00;(¤#,##0.00)",
  "sq": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sq-MK": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sq-XK": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Cyrl": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Cyrl-BA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Cyrl-ME": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Cyrl-XK": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Latn": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Latn-BA": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Latn-ME": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sr-Latn-XK": "#,##0.00 ¤;(#,##0.00 ¤)",
  "sv": "#,##0.00 ¤",
  "sv-AX": "#,##0.00 ¤",
  "sv-FI": "#,##0.00 ¤",
  "sw": "¤ #,##0.00",
  "sw-CD": "¤ #,##0.00",
  "sw-KE": "¤ #,##0.00",
  "sw-UG": "¤ #,##0.00",
  "ta": "¤#,##0.00;(¤#,##0.00)",
  "ta-LK": "¤#,##0.00;(¤#,##0.00)",
  "ta-MY": "¤#,##0.00;(¤#,##0.00)",
  "ta-SG": "¤#,##0.00;(¤#,##0.00)",
  "te": "¤#,##0.00;(¤#,##0.00)",
  "teo": "¤#,##0.00;(¤#,##0.00)",
  "teo-KE": "¤#,##0.00;(¤#,##0.00)",
  "tg": "#,##0.00 ¤",
  "th": "¤#,##0.00;(¤#,##0.00)",
  "ti": "¤#,##0.00",
  "ti-ER": "¤#,##0.00",
  "tk": "#,##0.00 ¤",
  "to": "¤ #,##0.00",
  "tr": "¤#,##0.00;(¤#,##0.00)",
  "tr-CY": "¤#,##0.00;(¤#,##0.00)",
  "tt": "#,##0.00 ¤",
  "twq": "#,##0.00¤",
  "tzm": "#,##0.00 ¤",
  "ug": "¤#,##0.00;(¤#,##0.00)",
  "uk": "#,##0.00 ¤",
  "ur": "¤#,##0.00;(¤#,##0.00)",
  "ur-IN": "¤#,##0.00;(¤#,##0.00)",
  "uz": "#,##0.00 ¤",
  "uz-Arab": "¤ #,##0.00",
  "uz-Cyrl": "#,##0.00 ¤",
  "uz-Latn": "#,##0.00 ¤",
  "vai": "¤#,##0.00;(¤#,##0.00)",
  "vai-Latn": "¤#,##0.00;(¤#,##0.00)",
  "vai-Vaii": "¤#,##0.00;(¤#,##0.00)",
  "vi": "#,##0.00 ¤",
  "vo": "¤ #,##0.00",
  "vun": "¤#,##0.00",
  "wae": "¤ #,##0.00",
  "wo": "¤ #,##0.00",
  "xh": "¤#,##0.00",
  "xog": "#,##0.00 ¤",
  "yav": "#,##0.00 ¤;(#,##0.00 ¤)",
  "yi": "¤ #,##0.00",
  "yo": "¤#,##0.00;(¤#,##0.00)",
  "yo-BJ": "¤#,##0.00;(¤#,##0.00)",
  "yue": "¤#,##0.00;(¤#,##0.00)",
  "yue-Hans": "¤#,##0.00;(¤#,##0.00)",
  "yue-Hant": "¤#,##0.00;(¤#,##0.00)",
  "zgh": "#,##0.00¤",
  "zh": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hans": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hans-HK": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hans-MO": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hans-SG": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hant": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hant-HK": "¤#,##0.00;(¤#,##0.00)",
  "zh-Hant-MO": "¤#,##0.00;(¤#,##0.00)",
  "zu": "¤#,##0.00;(¤#,##0.00)"
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/message.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _dependency_injector = _interopRequireDefault(__webpack_require__(18));

var _extend = __webpack_require__(3);

var _iterator = __webpack_require__(4);

var _string = __webpack_require__(40);

var _inflector = __webpack_require__(43);

var _core = _interopRequireDefault(__webpack_require__(50));

var _default_messages = _interopRequireDefault(__webpack_require__(86));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseDictionary = (0, _extend.extend)(true, {}, _default_messages.default);

var getDataByLocale = function getDataByLocale(localeData, locale) {
  return localeData[locale] || {};
};

var newMessages = {};
var messageLocalization = (0, _dependency_injector.default)({
  engine: function engine() {
    return 'base';
  },
  _dictionary: baseDictionary,
  load: function load(messages) {
    (0, _extend.extend)(true, this._dictionary, messages);
  },
  _localizablePrefix: '@',
  setup: function setup(localizablePrefix) {
    this._localizablePrefix = localizablePrefix;
  },
  localizeString: function localizeString(text) {
    var that = this;
    var regex = new RegExp('(^|[^a-zA-Z_0-9' + that._localizablePrefix + '-]+)(' + that._localizablePrefix + '{1,2})([a-zA-Z_0-9-]+)', 'g');
    var escapeString = that._localizablePrefix + that._localizablePrefix;
    return text.replace(regex, function (str, prefix, escape, localizationKey) {
      var defaultResult = that._localizablePrefix + localizationKey;
      var result;

      if (escape !== escapeString) {
        result = that.format(localizationKey);
      }

      if (!result) {
        newMessages[localizationKey] = (0, _inflector.humanize)(localizationKey);
      }

      return prefix + (result || defaultResult);
    });
  },
  localizeNode: function localizeNode(node) {
    var that = this;
    (0, _renderer.default)(node).each(function (index, nodeItem) {
      if (!nodeItem.nodeType) {
        return;
      }

      if (nodeItem.nodeType === 3) {
        nodeItem.nodeValue = that.localizeString(nodeItem.nodeValue);
      } else {
        if (!(0, _renderer.default)(nodeItem).is('iframe')) {
          // T199912
          (0, _iterator.each)(nodeItem.attributes || [], function (index, attr) {
            if (typeof attr.value === 'string') {
              var localizedValue = that.localizeString(attr.value);

              if (attr.value !== localizedValue) {
                attr.value = localizedValue;
              }
            }
          });
          (0, _renderer.default)(nodeItem).contents().each(function (index, node) {
            that.localizeNode(node);
          });
        }
      }
    });
  },
  getMessagesByLocales: function getMessagesByLocales() {
    return this._dictionary;
  },
  getDictionary: function getDictionary(onlyNew) {
    if (onlyNew) {
      return newMessages;
    }

    return (0, _extend.extend)({}, newMessages, this.getMessagesByLocales()[_core.default.locale()]);
  },
  getFormatter: function getFormatter(key) {
    return this._getFormatterBase(key) || this._getFormatterBase(key, 'en');
  },
  _getFormatterBase: function _getFormatterBase(key, locale) {
    var _this = this;

    var message = _core.default.getValueByClosestLocale(function (locale) {
      return getDataByLocale(_this._dictionary, locale)[key];
    });

    if (message) {
      return function () {
        var args = arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0].slice(0) : Array.prototype.slice.call(arguments, 0);
        args.unshift(message);
        return _string.format.apply(this, args);
      };
    }
  },
  format: function format(key) {
    var formatter = this.getFormatter(key);
    var values = Array.prototype.slice.call(arguments, 1);
    return formatter && formatter.apply(this, values) || '';
  }
});
var _default = messageLocalization;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (localization/default_messages.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

/* eslint-disable node/no-unsupported-features/es-syntax */
// !!! AUTO-GENERATED FILE, DO NOT EDIT
var _default = {
  "en": {
    "Yes": "Yes",
    "No": "No",
    "Cancel": "Cancel",
    "Clear": "Clear",
    "Done": "Done",
    "Loading": "Loading...",
    "Select": "Select...",
    "Search": "Search",
    "Back": "Back",
    "OK": "OK",
    "dxCollectionWidget-noDataText": "No data to display",
    "dxDropDownEditor-selectLabel": "Select",
    "validation-required": "Required",
    "validation-required-formatted": "{0} is required",
    "validation-numeric": "Value must be a number",
    "validation-numeric-formatted": "{0} must be a number",
    "validation-range": "Value is out of range",
    "validation-range-formatted": "{0} is out of range",
    "validation-stringLength": "The length of the value is not correct",
    "validation-stringLength-formatted": "The length of {0} is not correct",
    "validation-custom": "Value is invalid",
    "validation-custom-formatted": "{0} is invalid",
    "validation-async": "Value is invalid",
    "validation-async-formatted": "{0} is invalid",
    "validation-compare": "Values do not match",
    "validation-compare-formatted": "{0} does not match",
    "validation-pattern": "Value does not match pattern",
    "validation-pattern-formatted": "{0} does not match pattern",
    "validation-email": "Email is invalid",
    "validation-email-formatted": "{0} is invalid",
    "validation-mask": "Value is invalid",
    "dxLookup-searchPlaceholder": "Minimum character number: {0}",
    "dxList-pullingDownText": "Pull down to refresh...",
    "dxList-pulledDownText": "Release to refresh...",
    "dxList-refreshingText": "Refreshing...",
    "dxList-pageLoadingText": "Loading...",
    "dxList-nextButtonText": "More",
    "dxList-selectAll": "Select All",
    "dxListEditDecorator-delete": "Delete",
    "dxListEditDecorator-more": "More",
    "dxScrollView-pullingDownText": "Pull down to refresh...",
    "dxScrollView-pulledDownText": "Release to refresh...",
    "dxScrollView-refreshingText": "Refreshing...",
    "dxScrollView-reachBottomText": "Loading...",
    "dxDateBox-simulatedDataPickerTitleTime": "Select time",
    "dxDateBox-simulatedDataPickerTitleDate": "Select date",
    "dxDateBox-simulatedDataPickerTitleDateTime": "Select date and time",
    "dxDateBox-validation-datetime": "Value must be a date or time",
    "dxFileUploader-selectFile": "Select file",
    "dxFileUploader-dropFile": "or Drop file here",
    "dxFileUploader-bytes": "bytes",
    "dxFileUploader-kb": "kb",
    "dxFileUploader-Mb": "Mb",
    "dxFileUploader-Gb": "Gb",
    "dxFileUploader-upload": "Upload",
    "dxFileUploader-uploaded": "Uploaded",
    "dxFileUploader-readyToUpload": "Ready to upload",
    "dxFileUploader-uploadFailedMessage": "Upload failed",
    "dxFileUploader-invalidFileExtension": "File type is not allowed",
    "dxFileUploader-invalidMaxFileSize": "File is too large",
    "dxFileUploader-invalidMinFileSize": "File is too small",
    "dxRangeSlider-ariaFrom": "From",
    "dxRangeSlider-ariaTill": "Till",
    "dxSwitch-switchedOnText": "ON",
    "dxSwitch-switchedOffText": "OFF",
    "dxForm-optionalMark": "optional",
    "dxForm-requiredMessage": "{0} is required",
    "dxNumberBox-invalidValueMessage": "Value must be a number",
    "dxNumberBox-noDataText": "No data",
    "dxDataGrid-columnChooserTitle": "Column Chooser",
    "dxDataGrid-columnChooserEmptyText": "Drag a column here to hide it",
    "dxDataGrid-groupContinuesMessage": "Continues on the next page",
    "dxDataGrid-groupContinuedMessage": "Continued from the previous page",
    "dxDataGrid-groupHeaderText": "Group by This Column",
    "dxDataGrid-ungroupHeaderText": "Ungroup",
    "dxDataGrid-ungroupAllText": "Ungroup All",
    "dxDataGrid-editingEditRow": "Edit",
    "dxDataGrid-editingSaveRowChanges": "Save",
    "dxDataGrid-editingCancelRowChanges": "Cancel",
    "dxDataGrid-editingDeleteRow": "Delete",
    "dxDataGrid-editingUndeleteRow": "Undelete",
    "dxDataGrid-editingConfirmDeleteMessage": "Are you sure you want to delete this record?",
    "dxDataGrid-validationCancelChanges": "Cancel changes",
    "dxDataGrid-groupPanelEmptyText": "Drag a column header here to group by that column",
    "dxDataGrid-noDataText": "No data",
    "dxDataGrid-searchPanelPlaceholder": "Search...",
    "dxDataGrid-filterRowShowAllText": "(All)",
    "dxDataGrid-filterRowResetOperationText": "Reset",
    "dxDataGrid-filterRowOperationEquals": "Equals",
    "dxDataGrid-filterRowOperationNotEquals": "Does not equal",
    "dxDataGrid-filterRowOperationLess": "Less than",
    "dxDataGrid-filterRowOperationLessOrEquals": "Less than or equal to",
    "dxDataGrid-filterRowOperationGreater": "Greater than",
    "dxDataGrid-filterRowOperationGreaterOrEquals": "Greater than or equal to",
    "dxDataGrid-filterRowOperationStartsWith": "Starts with",
    "dxDataGrid-filterRowOperationContains": "Contains",
    "dxDataGrid-filterRowOperationNotContains": "Does not contain",
    "dxDataGrid-filterRowOperationEndsWith": "Ends with",
    "dxDataGrid-filterRowOperationBetween": "Between",
    "dxDataGrid-filterRowOperationBetweenStartText": "Start",
    "dxDataGrid-filterRowOperationBetweenEndText": "End",
    "dxDataGrid-applyFilterText": "Apply filter",
    "dxDataGrid-trueText": "true",
    "dxDataGrid-falseText": "false",
    "dxDataGrid-sortingAscendingText": "Sort Ascending",
    "dxDataGrid-sortingDescendingText": "Sort Descending",
    "dxDataGrid-sortingClearText": "Clear Sorting",
    "dxDataGrid-editingSaveAllChanges": "Save changes",
    "dxDataGrid-editingCancelAllChanges": "Discard changes",
    "dxDataGrid-editingAddRow": "Add a row",
    "dxDataGrid-summaryMin": "Min: {0}",
    "dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
    "dxDataGrid-summaryMax": "Max: {0}",
    "dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
    "dxDataGrid-summaryAvg": "Avg: {0}",
    "dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
    "dxDataGrid-summarySum": "Sum: {0}",
    "dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
    "dxDataGrid-summaryCount": "Count: {0}",
    "dxDataGrid-columnFixingFix": "Fix",
    "dxDataGrid-columnFixingUnfix": "Unfix",
    "dxDataGrid-columnFixingLeftPosition": "To the left",
    "dxDataGrid-columnFixingRightPosition": "To the right",
    "dxDataGrid-exportTo": "Export",
    "dxDataGrid-exportToExcel": "Export to Excel file",
    "dxDataGrid-exporting": "Exporting...",
    "dxDataGrid-excelFormat": "Excel file",
    "dxDataGrid-selectedRows": "Selected rows",
    "dxDataGrid-exportSelectedRows": "Export selected rows",
    "dxDataGrid-exportAll": "Export all data",
    "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
    "dxDataGrid-headerFilterOK": "OK",
    "dxDataGrid-headerFilterCancel": "Cancel",
    "dxDataGrid-ariaColumn": "Column",
    "dxDataGrid-ariaValue": "Value",
    "dxDataGrid-ariaFilterCell": "Filter cell",
    "dxDataGrid-ariaCollapse": "Collapse",
    "dxDataGrid-ariaExpand": "Expand",
    "dxDataGrid-ariaDataGrid": "Data grid",
    "dxDataGrid-ariaSearchInGrid": "Search in data grid",
    "dxDataGrid-ariaSelectAll": "Select all",
    "dxDataGrid-ariaSelectRow": "Select row",
    "dxDataGrid-filterBuilderPopupTitle": "Filter Builder",
    "dxDataGrid-filterPanelCreateFilter": "Create Filter",
    "dxDataGrid-filterPanelClearFilter": "Clear",
    "dxDataGrid-filterPanelFilterEnabledHint": "Enable the filter",
    "dxTreeList-ariaTreeList": "Tree list",
    "dxTreeList-editingAddRowToNode": "Add",
    "dxPager-infoText": "Page {0} of {1} ({2} items)",
    "dxPager-pagesCountText": "of",
    "dxPivotGrid-grandTotal": "Grand Total",
    "dxPivotGrid-total": "{0} Total",
    "dxPivotGrid-fieldChooserTitle": "Field Chooser",
    "dxPivotGrid-showFieldChooser": "Show Field Chooser",
    "dxPivotGrid-expandAll": "Expand All",
    "dxPivotGrid-collapseAll": "Collapse All",
    "dxPivotGrid-sortColumnBySummary": "Sort \"{0}\" by This Column",
    "dxPivotGrid-sortRowBySummary": "Sort \"{0}\" by This Row",
    "dxPivotGrid-removeAllSorting": "Remove All Sorting",
    "dxPivotGrid-dataNotAvailable": "N/A",
    "dxPivotGrid-rowFields": "Row Fields",
    "dxPivotGrid-columnFields": "Column Fields",
    "dxPivotGrid-dataFields": "Data Fields",
    "dxPivotGrid-filterFields": "Filter Fields",
    "dxPivotGrid-allFields": "All Fields",
    "dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
    "dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
    "dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
    "dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
    "dxScheduler-editorLabelTitle": "Subject",
    "dxScheduler-editorLabelStartDate": "Start Date",
    "dxScheduler-editorLabelEndDate": "End Date",
    "dxScheduler-editorLabelDescription": "Description",
    "dxScheduler-editorLabelRecurrence": "Repeat",
    "dxScheduler-openAppointment": "Open appointment",
    "dxScheduler-recurrenceNever": "Never",
    "dxScheduler-recurrenceMinutely": "Every minute",
    "dxScheduler-recurrenceHourly": "Hourly",
    "dxScheduler-recurrenceDaily": "Daily",
    "dxScheduler-recurrenceWeekly": "Weekly",
    "dxScheduler-recurrenceMonthly": "Monthly",
    "dxScheduler-recurrenceYearly": "Yearly",
    "dxScheduler-recurrenceRepeatEvery": "Repeat Every",
    "dxScheduler-recurrenceRepeatOn": "Repeat On",
    "dxScheduler-recurrenceEnd": "End repeat",
    "dxScheduler-recurrenceAfter": "After",
    "dxScheduler-recurrenceOn": "On",
    "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
    "dxScheduler-recurrenceRepeatHourly": "hour(s)",
    "dxScheduler-recurrenceRepeatDaily": "day(s)",
    "dxScheduler-recurrenceRepeatWeekly": "week(s)",
    "dxScheduler-recurrenceRepeatMonthly": "month(s)",
    "dxScheduler-recurrenceRepeatYearly": "year(s)",
    "dxScheduler-switcherDay": "Day",
    "dxScheduler-switcherWeek": "Week",
    "dxScheduler-switcherWorkWeek": "Work Week",
    "dxScheduler-switcherMonth": "Month",
    "dxScheduler-switcherAgenda": "Agenda",
    "dxScheduler-switcherTimelineDay": "Timeline Day",
    "dxScheduler-switcherTimelineWeek": "Timeline Week",
    "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
    "dxScheduler-switcherTimelineMonth": "Timeline Month",
    "dxScheduler-recurrenceRepeatOnDate": "on date",
    "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
    "dxScheduler-allDay": "All day",
    "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
    "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
    "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
    "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
    "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
    "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
    "dxScheduler-noTimezoneTitle": "No timezone",
    "dxScheduler-moreAppointments": "{0} more",
    "dxCalendar-todayButtonText": "Today",
    "dxCalendar-ariaWidgetName": "Calendar",
    "dxColorView-ariaRed": "Red",
    "dxColorView-ariaGreen": "Green",
    "dxColorView-ariaBlue": "Blue",
    "dxColorView-ariaAlpha": "Transparency",
    "dxColorView-ariaHex": "Color code",
    "dxTagBox-selected": "{0} selected",
    "dxTagBox-allSelected": "All selected ({0})",
    "dxTagBox-moreSelected": "{0} more",
    "vizExport-printingButtonText": "Print",
    "vizExport-titleMenuText": "Exporting/Printing",
    "vizExport-exportButtonText": "{0} file",
    "dxFilterBuilder-and": "And",
    "dxFilterBuilder-or": "Or",
    "dxFilterBuilder-notAnd": "Not And",
    "dxFilterBuilder-notOr": "Not Or",
    "dxFilterBuilder-addCondition": "Add Condition",
    "dxFilterBuilder-addGroup": "Add Group",
    "dxFilterBuilder-enterValueText": "<enter a value>",
    "dxFilterBuilder-filterOperationEquals": "Equals",
    "dxFilterBuilder-filterOperationNotEquals": "Does not equal",
    "dxFilterBuilder-filterOperationLess": "Is less than",
    "dxFilterBuilder-filterOperationLessOrEquals": "Is less than or equal to",
    "dxFilterBuilder-filterOperationGreater": "Is greater than",
    "dxFilterBuilder-filterOperationGreaterOrEquals": "Is greater than or equal to",
    "dxFilterBuilder-filterOperationStartsWith": "Starts with",
    "dxFilterBuilder-filterOperationContains": "Contains",
    "dxFilterBuilder-filterOperationNotContains": "Does not contain",
    "dxFilterBuilder-filterOperationEndsWith": "Ends with",
    "dxFilterBuilder-filterOperationIsBlank": "Is blank",
    "dxFilterBuilder-filterOperationIsNotBlank": "Is not blank",
    "dxFilterBuilder-filterOperationBetween": "Is between",
    "dxFilterBuilder-filterOperationAnyOf": "Is any of",
    "dxFilterBuilder-filterOperationNoneOf": "Is none of",
    "dxHtmlEditor-dialogColorCaption": "Change Font Color",
    "dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
    "dxHtmlEditor-dialogLinkCaption": "Add Link",
    "dxHtmlEditor-dialogLinkUrlField": "URL",
    "dxHtmlEditor-dialogLinkTextField": "Text",
    "dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
    "dxHtmlEditor-dialogImageCaption": "Add Image",
    "dxHtmlEditor-dialogImageUrlField": "URL",
    "dxHtmlEditor-dialogImageAltField": "Alternate text",
    "dxHtmlEditor-dialogImageWidthField": "Width (px)",
    "dxHtmlEditor-dialogImageHeightField": "Height (px)",
    "dxHtmlEditor-heading": "Heading",
    "dxHtmlEditor-normalText": "Normal text",
    "dxFileManager-newDirectoryName": "Untitled directory",
    "dxFileManager-rootDirectoryName": "Files",
    "dxFileManager-errorNoAccess": "Access Denied. Operation could not be completed.",
    "dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
    "dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
    "dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
    "dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
    "dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
    "dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
    "dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
    "dxFileManager-errorDefault": "Unspecified error.",
    "dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
    "dxFileManager-commandCreate": "New directory",
    "dxFileManager-commandRename": "Rename",
    "dxFileManager-commandMove": "Move to",
    "dxFileManager-commandCopy": "Copy to",
    "dxFileManager-commandDelete": "Delete",
    "dxFileManager-commandDownload": "Download",
    "dxFileManager-commandUpload": "Upload files",
    "dxFileManager-commandRefresh": "Refresh",
    "dxFileManager-commandThumbnails": "Thumbnails View",
    "dxFileManager-commandDetails": "Details View",
    "dxFileManager-commandClearSelection": "Clear selection",
    "dxFileManager-commandShowNavPane": "Toggle navigation pane",
    "dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
    "dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
    "dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
    "dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
    "dxFileManager-dialogRenameItemTitle": "Rename",
    "dxFileManager-dialogRenameItemButtonText": "Save",
    "dxFileManager-dialogCreateDirectoryTitle": "New directory",
    "dxFileManager-dialogCreateDirectoryButtonText": "Create",
    "dxFileManager-dialogDeleteItemTitle": "Delete",
    "dxFileManager-dialogDeleteItemButtonText": "Delete",
    "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
    "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
    "dxFileManager-dialogButtonCancel": "Cancel",
    "dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
    "dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
    "dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
    "dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
    "dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
    "dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
    "dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
    "dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
    "dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
    "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
    "dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
    "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
    "dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
    "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
    "dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
    "dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
    "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
    "dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
    "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
    "dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
    "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
    "dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
    "dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
    "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
    "dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
    "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
    "dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
    "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
    "dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
    "dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
    "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
    "dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
    "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
    "dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
    "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
    "dxFileManager-editingUploadCanceledMessage": "Canceled",
    "dxFileManager-listDetailsColumnCaptionName": "Name",
    "dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
    "dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
    "dxFileManager-listThumbnailsTooltipTextSize": "Size",
    "dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
    "dxFileManager-notificationProgressPanelTitle": "Progress",
    "dxFileManager-notificationProgressPanelEmptyListText": "No operations",
    "dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
    "dxDiagram-categoryGeneral": "General",
    "dxDiagram-categoryFlowchart": "Flowchart",
    "dxDiagram-categoryOrgChart": "Org Chart",
    "dxDiagram-categoryContainers": "Containers",
    "dxDiagram-categoryCustom": "Custom",
    "dxDiagram-commandExportToSvg": "Export to SVG",
    "dxDiagram-commandExportToPng": "Export to PNG",
    "dxDiagram-commandExportToJpg": "Export to JPEG",
    "dxDiagram-commandUndo": "Undo",
    "dxDiagram-commandRedo": "Redo",
    "dxDiagram-commandFontName": "Font Name",
    "dxDiagram-commandFontSize": "Font Size",
    "dxDiagram-commandBold": "Bold",
    "dxDiagram-commandItalic": "Italic",
    "dxDiagram-commandUnderline": "Underline",
    "dxDiagram-commandTextColor": "Font Color",
    "dxDiagram-commandLineColor": "Line Color",
    "dxDiagram-commandLineWidth": "Line Width",
    "dxDiagram-commandLineStyle": "Line Style",
    "dxDiagram-commandLineStyleSolid": "Solid",
    "dxDiagram-commandLineStyleDotted": "Dotted",
    "dxDiagram-commandLineStyleDashed": "Dashed",
    "dxDiagram-commandFillColor": "Fill Color",
    "dxDiagram-commandAlignLeft": "Align Left",
    "dxDiagram-commandAlignCenter": "Align Center",
    "dxDiagram-commandAlignRight": "Align Right",
    "dxDiagram-commandConnectorLineType": "Connector Line Type",
    "dxDiagram-commandConnectorLineStraight": "Straight",
    "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
    "dxDiagram-commandConnectorLineStart": "Connector Line Start",
    "dxDiagram-commandConnectorLineEnd": "Connector Line End",
    "dxDiagram-commandConnectorLineNone": "None",
    "dxDiagram-commandConnectorLineArrow": "Arrow",
    "dxDiagram-commandFullscreen": "Full Screen",
    "dxDiagram-commandUnits": "Units",
    "dxDiagram-commandPageSize": "Page Size",
    "dxDiagram-commandPageOrientation": "Page Orientation",
    "dxDiagram-commandPageOrientationLandscape": "Landscape",
    "dxDiagram-commandPageOrientationPortrait": "Portrait",
    "dxDiagram-commandPageColor": "Page Color",
    "dxDiagram-commandShowGrid": "Show Grid",
    "dxDiagram-commandSnapToGrid": "Snap to Grid",
    "dxDiagram-commandGridSize": "Grid Size",
    "dxDiagram-commandZoomLevel": "Zoom Level",
    "dxDiagram-commandAutoZoom": "Auto Zoom",
    "dxDiagram-commandFitToContent": "Fit to Content",
    "dxDiagram-commandFitToWidth": "Fit to Width",
    "dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
    "dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
    "dxDiagram-commandSimpleView": "Simple View",
    "dxDiagram-commandCut": "Cut",
    "dxDiagram-commandCopy": "Copy",
    "dxDiagram-commandPaste": "Paste",
    "dxDiagram-commandSelectAll": "Select All",
    "dxDiagram-commandDelete": "Delete",
    "dxDiagram-commandBringToFront": "Bring to Front",
    "dxDiagram-commandSendToBack": "Send to Back",
    "dxDiagram-commandLock": "Lock",
    "dxDiagram-commandUnlock": "Unlock",
    "dxDiagram-commandInsertShapeImage": "Insert Image...",
    "dxDiagram-commandEditShapeImage": "Change Image...",
    "dxDiagram-commandDeleteShapeImage": "Delete Image",
    "dxDiagram-commandLayoutLeftToRight": "Left-to-right",
    "dxDiagram-commandLayoutRightToLeft": "Right-to-left",
    "dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
    "dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
    "dxDiagram-unitIn": "in",
    "dxDiagram-unitCm": "cm",
    "dxDiagram-unitPx": "px",
    "dxDiagram-dialogButtonOK": "OK",
    "dxDiagram-dialogButtonCancel": "Cancel",
    "dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
    "dxDiagram-dialogEditShapeImageTitle": "Change Image",
    "dxDiagram-dialogEditShapeImageSelectButton": "Select image",
    "dxDiagram-dialogEditShapeImageLabelText": "or drop file here",
    "dxDiagram-uiExport": "Export",
    "dxDiagram-uiProperties": "Properties",
    "dxDiagram-uiSettings": "Settings",
    "dxDiagram-uiShowToolbox": "Show Toolbox",
    "dxDiagram-uiSearch": "Search",
    "dxDiagram-uiStyle": "Style",
    "dxDiagram-uiLayout": "Layout",
    "dxDiagram-uiLayoutTree": "Tree",
    "dxDiagram-uiLayoutLayered": "Layered",
    "dxDiagram-uiDiagram": "Diagram",
    "dxDiagram-uiText": "Text",
    "dxDiagram-uiObject": "Object",
    "dxDiagram-uiConnector": "Connector",
    "dxDiagram-uiPage": "Page",
    "dxDiagram-shapeText": "Text",
    "dxDiagram-shapeRectangle": "Rectangle",
    "dxDiagram-shapeEllipse": "Ellipse",
    "dxDiagram-shapeCross": "Cross",
    "dxDiagram-shapeTriangle": "Triangle",
    "dxDiagram-shapeDiamond": "Diamond",
    "dxDiagram-shapeHeart": "Heart",
    "dxDiagram-shapePentagon": "Pentagon",
    "dxDiagram-shapeHexagon": "Hexagon",
    "dxDiagram-shapeOctagon": "Octagon",
    "dxDiagram-shapeStar": "Star",
    "dxDiagram-shapeArrowLeft": "Left Arrow",
    "dxDiagram-shapeArrowUp": "Up Arrow",
    "dxDiagram-shapeArrowRight": "Right Arrow",
    "dxDiagram-shapeArrowDown": "Down Arrow",
    "dxDiagram-shapeArrowUpDown": "Up Down Arrow",
    "dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
    "dxDiagram-shapeProcess": "Process",
    "dxDiagram-shapeDecision": "Decision",
    "dxDiagram-shapeTerminator": "Terminator",
    "dxDiagram-shapePredefinedProcess": "Predefined Process",
    "dxDiagram-shapeDocument": "Document",
    "dxDiagram-shapeMultipleDocuments": "Multiple Documents",
    "dxDiagram-shapeManualInput": "Manual Input",
    "dxDiagram-shapePreparation": "Preparation",
    "dxDiagram-shapeData": "Data",
    "dxDiagram-shapeDatabase": "Database",
    "dxDiagram-shapeHardDisk": "Hard Disk",
    "dxDiagram-shapeInternalStorage": "Internal Storage",
    "dxDiagram-shapePaperTape": "Paper Tape",
    "dxDiagram-shapeManualOperation": "Manual Operation",
    "dxDiagram-shapeDelay": "Delay",
    "dxDiagram-shapeStoredData": "Stored Data",
    "dxDiagram-shapeDisplay": "Display",
    "dxDiagram-shapeMerge": "Merge",
    "dxDiagram-shapeConnector": "Connector",
    "dxDiagram-shapeOr": "Or",
    "dxDiagram-shapeSummingJunction": "Summing Junction",
    "dxDiagram-shapeContainerDefaultText": "Container",
    "dxDiagram-shapeVerticalContainer": "Vertical Container",
    "dxDiagram-shapeHorizontalContainer": "Horizontal Container",
    "dxDiagram-shapeCardDefaultText": "Person's Name",
    "dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
    "dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
    "dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
    "dxGantt-dialogTitle": "Title",
    "dxGantt-dialogStartTitle": "Start",
    "dxGantt-dialogEndTitle": "End",
    "dxGantt-dialogProgressTitle": "Progress",
    "dxGantt-dialogResourcesTitle": "Resources",
    "dxGantt-dialogResourceManagerTitle": "Resource Manager",
    "dxGantt-dialogTaskDetailsTitle": "Task Details",
    "dxGantt-dialogEditResourceListHint": "Edit Resource List",
    "dxGantt-dialogEditNoResources": "No resources",
    "dxGantt-dialogButtonAdd": "Add",
    "dxGantt-contextMenuNewTask": "New Task",
    "dxGantt-contextMenuNewSubtask": "New Subtask",
    "dxGantt-contextMenuDeleteTask": "Delete Task",
    "dxGantt-contextMenuDeleteDependency": "Delete Dependency",
    "dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
    "dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
    "dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resource: {0}",
    "dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
    "dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
    "dxGantt-dialogCancelOperationMessage": "Cancel the operation",
    "dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
    "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
    "dxGantt-undo": "Undo",
    "dxGantt-redo": "Redo",
    "dxGantt-expandAll": "Expand All",
    "dxGantt-collapseAll": "Collapse All",
    "dxGantt-addNewTask": "Add New Task",
    "dxGantt-deleteSelectedTask": "Delete Selected Task",
    "dxGantt-zoomIn": "Zoom In",
    "dxGantt-zoomOut": "Zoom Out",
    "dxGantt-fullScreen": "Full Screen"
  }
};
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (ui/widget/ui.widget.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _action = _interopRequireDefault(__webpack_require__(34));

var _dom_component = _interopRequireDefault(__webpack_require__(88));

var _short = __webpack_require__(36);

var _common = __webpack_require__(8);

var _iterator = __webpack_require__(4);

var _extend2 = __webpack_require__(3);

var _selectors = __webpack_require__(55);

var _array = __webpack_require__(14);

var _utils = __webpack_require__(13);

var _type = __webpack_require__(1);

__webpack_require__(102);

__webpack_require__(109);

__webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setAttribute(name, value, target) {
  name = name === 'role' || name === 'id' ? name : "aria-".concat(name);
  value = (0, _type.isDefined)(value) ? value.toString() : null;
  target.attr(name, value);
}

var Widget = _dom_component.default.inherit({
  _feedbackHideTimeout: 400,
  _feedbackShowTimeout: 30,
  _supportedKeys: function _supportedKeys() {
    return {};
  },
  _getDefaultOptions: function _getDefaultOptions() {
    return (0, _extend2.extend)(this.callBase(), {
      hoveredElement: null,
      isActive: false,
      disabled: false,
      visible: true,
      hint: undefined,
      activeStateEnabled: false,
      onContentReady: null,
      hoverStateEnabled: false,
      focusStateEnabled: false,
      tabIndex: 0,
      accessKey: null,

      /**
      * @name WidgetOptions.onFocusIn
      * @extends Action
      * @action
      * @hidden
      */
      onFocusIn: null,

      /**
      * @name WidgetOptions.onFocusOut
      * @extends Action
      * @action
      * @hidden
      */
      onFocusOut: null,

      /**
      * @name format.type
      * @type Enums.Format
      */

      /**
      * @name format.precision
      * @type number
      */

      /**
      * @name format.currency
      * @type String
      */

      /**
      * @name format.formatter
      * @type function
      * @type_function_param1 value:number|date
      * @type_function_return string
      */

      /**
      * @name format.parser
      * @type function
      * @type_function_param1 value:string
      * @type_function_return number|date
      */
      onKeyboardHandled: null,
      ignoreParentReadOnly: false
    });
  },
  _init: function _init() {
    this.callBase();

    this._initContentReadyAction();
  },
  _innerWidgetOptionChanged: function _innerWidgetOptionChanged(innerWidget, args) {
    var options = Widget.getOptionsFromContainer(args);
    innerWidget && innerWidget.option(options);

    this._options.cache(args.name, options);
  },
  _bindInnerWidgetOptions: function _bindInnerWidgetOptions(innerWidget, optionsContainer) {
    var _this = this;

    var syncOptions = function syncOptions() {
      return _this._options.silent(optionsContainer, (0, _extend2.extend)({}, innerWidget.option()));
    };

    syncOptions();
    innerWidget.on('optionChanged', syncOptions);
  },
  _getAriaTarget: function _getAriaTarget() {
    return this._focusTarget();
  },
  _initContentReadyAction: function _initContentReadyAction() {
    this._contentReadyAction = this._createActionByOption('onContentReady', {
      excludeValidators: ['disabled', 'readOnly']
    });
  },
  _initMarkup: function _initMarkup() {
    var _this$option = this.option(),
        disabled = _this$option.disabled,
        visible = _this$option.visible;

    this.$element().addClass('dx-widget');

    this._toggleDisabledState(disabled);

    this._toggleVisibility(visible);

    this._renderHint();

    this._isFocusable() && this._renderFocusTarget();
    this.callBase();
  },
  _render: function _render() {
    this.callBase();

    this._renderContent();

    this._renderFocusState();

    this._attachFeedbackEvents();

    this._attachHoverEvents();

    this._toggleIndependentState();
  },
  _renderHint: function _renderHint() {
    var _this$option2 = this.option(),
        hint = _this$option2.hint;

    this.$element().attr('title', hint || null);
  },
  _renderContent: function _renderContent() {
    var _this2 = this;

    (0, _common.deferRender)(function () {
      return !_this2._disposed ? _this2._renderContentImpl() : void 0;
    }).done(function () {
      return !_this2._disposed ? _this2._fireContentReadyAction() : void 0;
    });
  },
  _renderContentImpl: _common.noop,
  _fireContentReadyAction: (0, _common.deferRenderer)(function () {
    return this._contentReadyAction();
  }),
  _dispose: function _dispose() {
    this._contentReadyAction = null;

    this._detachKeyboardEvents();

    this.callBase();
  },
  _resetActiveState: function _resetActiveState() {
    this._toggleActiveState(this._eventBindingTarget(), false);
  },
  _clean: function _clean() {
    this._cleanFocusState();

    this._resetActiveState();

    this.callBase();
    this.$element().empty();
  },
  _toggleVisibility: function _toggleVisibility(visible) {
    this.$element().toggleClass('dx-state-invisible', !visible);
    this.setAria('hidden', !visible || void 0);
  },
  _renderFocusState: function _renderFocusState() {
    this._attachKeyboardEvents();

    if (this._isFocusable()) {
      this._renderFocusTarget();

      this._attachFocusEvents();

      this._renderAccessKey();
    }
  },
  _renderAccessKey: function _renderAccessKey() {
    var _this3 = this;

    var $el = this._focusTarget();

    var _this$option3 = this.option(),
        accessKey = _this$option3.accessKey;

    var namespace = 'UIFeedback';
    $el.attr('accesskey', accessKey);

    _short.dxClick.off($el, {
      namespace: namespace
    });

    accessKey && _short.dxClick.on($el, function (e) {
      if ((0, _utils.isFakeClickEvent)(e)) {
        e.stopImmediatePropagation();

        _this3.focus();
      }
    }, {
      namespace: namespace
    });
  },
  _isFocusable: function _isFocusable() {
    var _this$option4 = this.option(),
        focusStateEnabled = _this$option4.focusStateEnabled,
        disabled = _this$option4.disabled;

    return focusStateEnabled && !disabled;
  },
  _eventBindingTarget: function _eventBindingTarget() {
    return this.$element();
  },
  _focusTarget: function _focusTarget() {
    return this._getActiveElement();
  },
  _getActiveElement: function _getActiveElement() {
    var activeElement = this._eventBindingTarget();

    if (this._activeStateUnit) {
      return activeElement.find(this._activeStateUnit).not('.dx-state-disabled');
    }

    return activeElement;
  },
  _renderFocusTarget: function _renderFocusTarget() {
    var _this$option5 = this.option(),
        tabIndex = _this$option5.tabIndex;

    this._focusTarget().attr('tabIndex', tabIndex);
  },
  _keyboardEventBindingTarget: function _keyboardEventBindingTarget() {
    return this._eventBindingTarget();
  },
  _refreshFocusEvent: function _refreshFocusEvent() {
    this._detachFocusEvents();

    this._attachFocusEvents();
  },
  _focusEventTarget: function _focusEventTarget() {
    return this._focusTarget();
  },
  _focusInHandler: function _focusInHandler(event) {
    var _this4 = this;

    if (!event.isDefaultPrevented()) {
      this._createActionByOption('onFocusIn', {
        beforeExecute: function beforeExecute() {
          return _this4._updateFocusState(event, true);
        },
        excludeValidators: ['readOnly']
      })({
        event: event
      });
    }
  },
  _focusOutHandler: function _focusOutHandler(event) {
    var _this5 = this;

    if (!event.isDefaultPrevented()) {
      this._createActionByOption('onFocusOut', {
        beforeExecute: function beforeExecute() {
          return _this5._updateFocusState(event, false);
        },
        excludeValidators: ['readOnly', 'disabled']
      })({
        event: event
      });
    }
  },
  _updateFocusState: function _updateFocusState(_ref, isFocused) {
    var target = _ref.target;

    if ((0, _array.inArray)(target, this._focusTarget()) !== -1) {
      this._toggleFocusClass(isFocused, (0, _renderer.default)(target));
    }
  },
  _toggleFocusClass: function _toggleFocusClass(isFocused, $element) {
    var $focusTarget = $element && $element.length ? $element : this._focusTarget();
    $focusTarget.toggleClass('dx-state-focused', isFocused);
  },
  _hasFocusClass: function _hasFocusClass(element) {
    var $focusTarget = (0, _renderer.default)(element || this._focusTarget());
    return $focusTarget.hasClass('dx-state-focused');
  },
  _isFocused: function _isFocused() {
    return this._hasFocusClass();
  },
  _getKeyboardListeners: function _getKeyboardListeners() {
    return [];
  },
  _attachKeyboardEvents: function _attachKeyboardEvents() {
    var _this6 = this;

    this._detachKeyboardEvents();

    var _this$option6 = this.option(),
        focusStateEnabled = _this$option6.focusStateEnabled,
        onKeyboardHandled = _this$option6.onKeyboardHandled;

    var hasChildListeners = this._getKeyboardListeners().length;

    var hasKeyboardEventHandler = !!onKeyboardHandled;
    var shouldAttach = focusStateEnabled || hasChildListeners || hasKeyboardEventHandler;

    if (shouldAttach) {
      this._keyboardListenerId = _short.keyboard.on(this._keyboardEventBindingTarget(), this._focusTarget(), function (opts) {
        return _this6._keyboardHandler(opts);
      });
    }
  },
  _keyboardHandler: function _keyboardHandler(options, onlyChildProcessing) {
    if (!onlyChildProcessing) {
      var originalEvent = options.originalEvent,
          keyName = options.keyName,
          which = options.which;

      var keys = this._supportedKeys(originalEvent);

      var func = keys[keyName] || keys[which];

      if (func !== undefined) {
        var handler = func.bind(this);
        var result = handler(originalEvent, options);

        if (!result) {
          return false;
        }
      }
    }

    var keyboardListeners = this._getKeyboardListeners();

    var _this$option7 = this.option(),
        onKeyboardHandled = _this$option7.onKeyboardHandled;

    keyboardListeners.forEach(function (listener) {
      return listener && listener._keyboardHandler(options);
    });
    onKeyboardHandled && onKeyboardHandled(options);
    return true;
  },
  _refreshFocusState: function _refreshFocusState() {
    this._cleanFocusState();

    this._renderFocusState();
  },
  _cleanFocusState: function _cleanFocusState() {
    var $element = this._focusTarget();

    $element.removeAttr('tabIndex');

    this._toggleFocusClass(false);

    this._detachFocusEvents();

    this._detachKeyboardEvents();
  },
  _detachKeyboardEvents: function _detachKeyboardEvents() {
    _short.keyboard.off(this._keyboardListenerId);

    this._keyboardListenerId = null;
  },
  _attachHoverEvents: function _attachHoverEvents() {
    var _this7 = this;

    var _this$option8 = this.option(),
        hoverStateEnabled = _this$option8.hoverStateEnabled;

    var selector = this._activeStateUnit;
    var namespace = 'UIFeedback';

    var $el = this._eventBindingTarget();

    _short.hover.off($el, {
      selector: selector,
      namespace: namespace
    });

    if (hoverStateEnabled) {
      _short.hover.on($el, new _action.default(function (_ref2) {
        var event = _ref2.event,
            element = _ref2.element;

        _this7._hoverStartHandler(event);

        _this7.option('hoveredElement', (0, _renderer.default)(element));
      }, {
        excludeValidators: ['readOnly']
      }), function (event) {
        _this7.option('hoveredElement', null);

        _this7._hoverEndHandler(event);
      }, {
        selector: selector,
        namespace: namespace
      });
    }
  },
  _attachFeedbackEvents: function _attachFeedbackEvents() {
    var _this8 = this;

    var _this$option9 = this.option(),
        activeStateEnabled = _this$option9.activeStateEnabled;

    var selector = this._activeStateUnit;
    var namespace = 'UIFeedback';

    var $el = this._eventBindingTarget();

    _short.active.off($el, {
      namespace: namespace,
      selector: selector
    });

    if (activeStateEnabled) {
      _short.active.on($el, new _action.default(function (_ref3) {
        var event = _ref3.event,
            element = _ref3.element;
        return _this8._toggleActiveState((0, _renderer.default)(element), true, event);
      }), new _action.default(function (_ref4) {
        var event = _ref4.event,
            element = _ref4.element;
        return _this8._toggleActiveState((0, _renderer.default)(element), false, event);
      }, {
        excludeValidators: ['disabled', 'readOnly']
      }), {
        showTimeout: this._feedbackShowTimeout,
        hideTimeout: this._feedbackHideTimeout,
        selector: selector,
        namespace: namespace
      });
    }
  },
  _detachFocusEvents: function _detachFocusEvents() {
    var $el = this._focusEventTarget();

    _short.focus.off($el, {
      namespace: "".concat(this.NAME, "Focus")
    });
  },
  _attachFocusEvents: function _attachFocusEvents() {
    var _this9 = this;

    var $el = this._focusEventTarget();

    _short.focus.on($el, function (e) {
      return _this9._focusInHandler(e);
    }, function (e) {
      return _this9._focusOutHandler(e);
    }, {
      namespace: "".concat(this.NAME, "Focus"),
      isFocusable: function isFocusable(index, el) {
        return (0, _renderer.default)(el).is(_selectors.focusable);
      }
    });
  },
  _hoverStartHandler: _common.noop,
  _hoverEndHandler: _common.noop,
  _toggleActiveState: function _toggleActiveState($element, value) {
    this.option('isActive', value);
    $element.toggleClass('dx-state-active', value);
  },
  _updatedHover: function _updatedHover() {
    var hoveredElement = this._options.silent('hoveredElement');

    this._hover(hoveredElement, hoveredElement);
  },
  _findHoverTarget: function _findHoverTarget($el) {
    return $el && $el.closest(this._activeStateUnit || this._eventBindingTarget());
  },
  _hover: function _hover($el, $previous) {
    var _this$option10 = this.option(),
        hoverStateEnabled = _this$option10.hoverStateEnabled,
        disabled = _this$option10.disabled,
        isActive = _this$option10.isActive;

    $previous = this._findHoverTarget($previous);
    $previous && $previous.toggleClass('dx-state-hover', false);

    if ($el && hoverStateEnabled && !disabled && !isActive) {
      var newHoveredElement = this._findHoverTarget($el);

      newHoveredElement && newHoveredElement.toggleClass('dx-state-hover', true);
    }
  },
  _toggleDisabledState: function _toggleDisabledState(value) {
    this.$element().toggleClass('dx-state-disabled', Boolean(value));
    this.setAria('disabled', value || undefined);
  },
  _toggleIndependentState: function _toggleIndependentState() {
    this.$element().toggleClass('dx-state-independent', this.option('ignoreParentReadOnly'));
  },
  _setWidgetOption: function _setWidgetOption(widgetName, args) {
    var _this10 = this;

    if (!this[widgetName]) {
      return;
    }

    if ((0, _type.isPlainObject)(args[0])) {
      (0, _iterator.each)(args[0], function (option, value) {
        return _this10._setWidgetOption(widgetName, [option, value]);
      });
      return;
    }

    var optionName = args[0];
    var value = args[1];

    if (args.length === 1) {
      value = this.option(optionName);
    }

    var widgetOptionMap = this["".concat(widgetName, "OptionMap")];
    this[widgetName].option(widgetOptionMap ? widgetOptionMap(optionName) : optionName, value);
  },
  _optionChanged: function _optionChanged(args) {
    var name = args.name,
        value = args.value,
        previousValue = args.previousValue;

    switch (name) {
      case 'disabled':
        this._toggleDisabledState(value);

        this._updatedHover();

        this._refreshFocusState();

        break;

      case 'hint':
        this._renderHint();

        break;

      case 'ignoreParentReadOnly':
        this._toggleIndependentState();

        break;

      case 'activeStateEnabled':
        this._attachFeedbackEvents();

        break;

      case 'hoverStateEnabled':
        this._attachHoverEvents();

        this._updatedHover();

        break;

      case 'tabIndex':
      case 'focusStateEnabled':
        this._refreshFocusState();

        break;

      case 'onFocusIn':
      case 'onFocusOut':
        break;

      case 'accessKey':
        this._renderAccessKey();

        break;

      case 'hoveredElement':
        this._hover(value, previousValue);

        break;

      case 'isActive':
        this._updatedHover();

        break;

      case 'visible':
        this._toggleVisibility(value);

        if (this._isVisibilityChangeSupported()) {
          // TODO hiding works wrong
          this._checkVisibilityChanged(value ? 'shown' : 'hiding');
        }

        break;

      case 'onKeyboardHandled':
        this._attachKeyboardEvents();

        break;

      case 'onContentReady':
        this._initContentReadyAction();

        break;

      default:
        this.callBase(args);
    }
  },
  _isVisible: function _isVisible() {
    var _this$option11 = this.option(),
        visible = _this$option11.visible;

    return this.callBase() && visible;
  },
  beginUpdate: function beginUpdate() {
    this._ready(false);

    this.callBase();
  },
  endUpdate: function endUpdate() {
    this.callBase();

    if (this._initialized) {
      this._ready(true);
    }
  },
  _ready: function _ready(value) {
    if (arguments.length === 0) {
      return this._isReady;
    }

    this._isReady = value;
  },
  setAria: function setAria() {
    if (!(0, _type.isPlainObject)(arguments.length <= 0 ? undefined : arguments[0])) {
      setAttribute(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], (arguments.length <= 2 ? undefined : arguments[2]) || this._getAriaTarget());
    } else {
      var target = (arguments.length <= 1 ? undefined : arguments[1]) || this._getAriaTarget();

      (0, _iterator.each)(arguments.length <= 0 ? undefined : arguments[0], function (name, value) {
        return setAttribute(name, value, target);
      });
    }
  },
  isReady: function isReady() {
    return this._ready();
  },
  repaint: function repaint() {
    this._refresh();
  },
  focus: function focus() {
    _short.focus.trigger(this._focusTarget());
  },
  registerKeyHandler: function registerKeyHandler(key, handler) {
    var currentKeys = this._supportedKeys();

    this._supportedKeys = function () {
      return (0, _extend2.extend)(currentKeys, _defineProperty({}, key, handler));
    };
  }
});

Widget.getOptionsFromContainer = function (_ref5) {
  var name = _ref5.name,
      fullName = _ref5.fullName,
      value = _ref5.value;
  var options = {};

  if (name === fullName) {
    options = value;
  } else {
    var option = fullName.split('.').pop();
    options[option] = value;
  }

  return options;
};

var _default = Widget;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/dom_component.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _config = _interopRequireDefault(__webpack_require__(16));

var _errors = _interopRequireDefault(__webpack_require__(7));

var _resize_callbacks = _interopRequireDefault(__webpack_require__(45));

var _component = _interopRequireDefault(__webpack_require__(89));

var _template_manager = __webpack_require__(94);

var _public_component = __webpack_require__(33);

var _element_data = __webpack_require__(20);

var _iterator = __webpack_require__(4);

var _extend = __webpack_require__(3);

var _element = __webpack_require__(54);

var _common = __webpack_require__(8);

var _array = __webpack_require__(14);

var _type = __webpack_require__(1);

var _window = __webpack_require__(6);

var _short = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstract = _component.default.abstract;

var DOMComponent = _component.default.inherit({
  _getDefaultOptions: function _getDefaultOptions() {
    return (0, _extend.extend)(this.callBase(), {
      width: undefined,
      height: undefined,
      rtlEnabled: (0, _config.default)().rtlEnabled,
      elementAttr: {},
      disabled: false,
      integrationOptions: {}
    }, this._useTemplates() ? _template_manager.TemplateManager.createDefaultOptions() : {});
  },

  /**
  * @name DOMComponentMethods.ctor
  * @publicName ctor(element,options)
  * @param1 element:Element|JQuery
  * @param2 options:DOMComponentOptions|undefined
  * @hidden
  */
  ctor: function ctor(element, options) {
    this._createElement(element);

    (0, _public_component.attachInstanceToElement)(this._$element, this, this._dispose);
    this.callBase(options);
  },
  _createElement: function _createElement(element) {
    this._$element = (0, _renderer.default)(element);
  },
  _getSynchronizableOptionsForCreateComponent: function _getSynchronizableOptionsForCreateComponent() {
    return ['rtlEnabled', 'disabled', 'templatesRenderAsynchronously'];
  },
  _visibilityChanged: abstract,
  _dimensionChanged: abstract,
  _init: function _init() {
    this.callBase();

    this._attachWindowResizeCallback();

    this._initTemplateManager();
  },
  _setOptionsByDevice: function _setOptionsByDevice(instanceCustomRules) {
    this.callBase([].concat(this.constructor._classCustomRules || [], instanceCustomRules || []));
  },
  _isInitialOptionValue: function _isInitialOptionValue(name) {
    var isCustomOption = this.constructor._classCustomRules && Object.prototype.hasOwnProperty.call(this._convertRulesToOptions(this.constructor._classCustomRules), name);
    return !isCustomOption && this.callBase(name);
  },
  _attachWindowResizeCallback: function _attachWindowResizeCallback() {
    if (this._isDimensionChangeSupported()) {
      var windowResizeCallBack = this._windowResizeCallBack = this._dimensionChanged.bind(this);

      _resize_callbacks.default.add(windowResizeCallBack);
    }
  },
  _isDimensionChangeSupported: function _isDimensionChangeSupported() {
    return this._dimensionChanged !== abstract;
  },
  _renderComponent: function _renderComponent() {
    this._initMarkup();

    (0, _window.hasWindow)() && this._render();
  },
  _initMarkup: function _initMarkup() {
    var _ref = this.option() || {},
        rtlEnabled = _ref.rtlEnabled;

    this._renderElementAttributes();

    this._toggleRTLDirection(rtlEnabled);

    this._renderVisibilityChange();

    this._renderDimensions();
  },
  _render: function _render() {
    this._attachVisibilityChangeHandlers();
  },
  _renderElementAttributes: function _renderElementAttributes() {
    var _ref2 = this.option() || {},
        elementAttr = _ref2.elementAttr;

    var attributes = (0, _extend.extend)({}, elementAttr);
    var classNames = attributes.class;
    delete attributes.class;
    this.$element().attr(attributes).addClass(classNames);
  },
  _renderVisibilityChange: function _renderVisibilityChange() {
    if (this._isDimensionChangeSupported()) {
      this._attachDimensionChangeHandlers();
    }

    if (this._isVisibilityChangeSupported()) {
      var $element = this.$element();
      $element.addClass('dx-visibility-change-handler');
    }
  },
  _renderDimensions: function _renderDimensions() {
    var $element = this.$element();
    var element = $element.get(0);

    var width = this._getOptionValue('width', element);

    var height = this._getOptionValue('height', element);

    if (this._isCssUpdateRequired(element, height, width)) {
      $element.css({
        width: width === null ? '' : width,
        height: height === null ? '' : height
      });
    }
  },
  _isCssUpdateRequired: function _isCssUpdateRequired(element, height, width) {
    return !!((0, _type.isDefined)(width) || (0, _type.isDefined)(height) || element.style.width || element.style.height);
  },
  _attachDimensionChangeHandlers: function _attachDimensionChangeHandlers() {
    var _this = this;

    var $el = this.$element();
    var namespace = "".concat(this.NAME, "VisibilityChange");

    _short.resize.off($el, {
      namespace: namespace
    });

    _short.resize.on($el, function () {
      return _this._dimensionChanged();
    }, {
      namespace: namespace
    });
  },
  _attachVisibilityChangeHandlers: function _attachVisibilityChangeHandlers() {
    var _this2 = this;

    if (this._isVisibilityChangeSupported()) {
      var $el = this.$element();
      var namespace = "".concat(this.NAME, "VisibilityChange");
      this._isHidden = !this._isVisible();

      _short.visibility.off($el, {
        namespace: namespace
      });

      _short.visibility.on($el, function () {
        return _this2._checkVisibilityChanged('shown');
      }, function () {
        return _this2._checkVisibilityChanged('hiding');
      }, {
        namespace: namespace
      });
    }
  },
  _isVisible: function _isVisible() {
    var $element = this.$element();
    return $element.is(':visible');
  },
  _checkVisibilityChanged: function _checkVisibilityChanged(action) {
    var isVisible = this._isVisible();

    if (isVisible) {
      if (action === 'hiding' && !this._isHidden) {
        this._visibilityChanged(false);

        this._isHidden = true;
      } else if (action === 'shown' && this._isHidden) {
        this._isHidden = false;

        this._visibilityChanged(true);
      }
    }
  },
  _isVisibilityChangeSupported: function _isVisibilityChangeSupported() {
    return this._visibilityChanged !== abstract && (0, _window.hasWindow)();
  },
  _clean: _common.noop,
  _modelByElement: function _modelByElement() {
    var _this$option = this.option(),
        modelByElement = _this$option.modelByElement;

    var $element = this.$element();
    return modelByElement ? modelByElement($element) : undefined;
  },
  _invalidate: function _invalidate() {
    if (this._isUpdateAllowed()) {
      throw _errors.default.Error('E0007');
    }

    this._requireRefresh = true;
  },
  _refresh: function _refresh() {
    this._clean();

    this._renderComponent();
  },
  _dispose: function _dispose() {
    this._templateManager && this._templateManager.dispose();
    this.callBase();

    this._clean();

    this._detachWindowResizeCallback();
  },
  _detachWindowResizeCallback: function _detachWindowResizeCallback() {
    if (this._isDimensionChangeSupported()) {
      _resize_callbacks.default.remove(this._windowResizeCallBack);
    }
  },
  _toggleRTLDirection: function _toggleRTLDirection(rtl) {
    var $element = this.$element();
    $element.toggleClass('dx-rtl', rtl);
  },
  _createComponent: function _createComponent(element, component) {
    var _this3 = this;

    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var synchronizableOptions = (0, _common.grep)(this._getSynchronizableOptionsForCreateComponent(), function (value) {
      return !(value in config);
    });

    var _this$option2 = this.option(),
        integrationOptions = _this$option2.integrationOptions;

    var _this$option3 = this.option(),
        nestedComponentOptions = _this$option3.nestedComponentOptions;

    nestedComponentOptions = nestedComponentOptions || _common.noop;
    var nestedComponentConfig = (0, _extend.extend)({
      integrationOptions: integrationOptions
    }, nestedComponentOptions(this));
    synchronizableOptions.forEach(function (optionName) {
      return nestedComponentConfig[optionName] = _this3.option(optionName);
    });

    this._extendConfig(config, nestedComponentConfig);

    var instance = void 0;

    if ((0, _type.isString)(component)) {
      var $element = (0, _renderer.default)(element)[component](config);
      instance = $element[component]('instance');
    } else if (element) {
      instance = component.getInstance(element);

      if (instance) {
        instance.option(config);
      } else {
        instance = new component(element, config);
      }
    }

    if (instance) {
      var optionChangedHandler = function optionChangedHandler(_ref3) {
        var name = _ref3.name,
            value = _ref3.value;

        if ((0, _array.inArray)(name, synchronizableOptions) >= 0) {
          instance.option(name, value);
        }
      };

      this.on('optionChanged', optionChangedHandler);
      instance.on('disposing', function () {
        return _this3.off('optionChanged', optionChangedHandler);
      });
    }

    return instance;
  },
  _extendConfig: function _extendConfig(config, extendConfig) {
    (0, _iterator.each)(extendConfig, function (key, value) {
      !Object.prototype.hasOwnProperty.call(config, key) && (config[key] = value);
    });
  },
  _defaultActionConfig: function _defaultActionConfig() {
    var $element = this.$element();

    var context = this._modelByElement($element);

    return (0, _extend.extend)(this.callBase(), {
      context: context
    });
  },

  /**
  * @pseudo Action
  * @section Utils
  * @type function
  * @default null
  * @type_function_param1 e:object
  * @type_function_param1_field1 component:this
  * @type_function_param1_field2 element:dxElement
  * @type_function_param1_field3 model:object
  **/
  _defaultActionArgs: function _defaultActionArgs() {
    var $element = this.$element();

    var model = this._modelByElement($element);

    var element = this.element();
    return (0, _extend.extend)(this.callBase(), {
      element: element,
      model: model
    });
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'width':
      case 'height':
        this._renderDimensions();

        break;

      case 'rtlEnabled':
        this._invalidate();

        break;

      case 'elementAttr':
        this._renderElementAttributes();

        break;

      case 'disabled':
      case 'integrationOptions':
        break;

      default:
        this.callBase(args);
        break;
    }
  },
  _removeAttributes: function _removeAttributes(element) {
    var attrs = element.attributes;

    for (var i = attrs.length - 1; i >= 0; i--) {
      var attr = attrs[i];

      if (attr) {
        var name = attr.name;

        if (!name.indexOf('aria-') || name.indexOf('dx-') !== -1 || name === 'role' || name === 'style' || name === 'tabindex') {
          element.removeAttribute(name);
        }
      }
    }
  },
  _removeClasses: function _removeClasses(element) {
    element.className = element.className.split(' ').filter(function (cssClass) {
      return cssClass.lastIndexOf('dx-', 0) !== 0;
    }).join(' ');
  },
  _updateDOMComponent: function _updateDOMComponent(renderRequired) {
    if (renderRequired) {
      this._renderComponent();
    } else if (this._requireRefresh) {
      this._requireRefresh = false;

      this._refresh();
    }
  },
  endUpdate: function endUpdate() {
    var renderRequired = this._isInitializingRequired();

    this.callBase();
    this._isUpdateAllowed() && this._updateDOMComponent(renderRequired);
  },
  $element: function $element() {
    return this._$element;
  },
  element: function element() {
    var $element = this.$element();
    return (0, _element.getPublicElement)($element);
  },
  dispose: function dispose() {
    var element = this.$element().get(0);
    (0, _element_data.cleanDataRecursive)(element, true);
    element.textContent = '';

    this._removeAttributes(element);

    this._removeClasses(element);
  },
  resetOption: function resetOption(optionName) {
    this.callBase(optionName);

    if (optionName === 'width' || optionName === 'height') {
      var initialOption = this.initialOption(optionName);
      !(0, _type.isDefined)(initialOption) && this.$element().css(optionName, '');
    }
  },
  _getAnonymousTemplateName: function _getAnonymousTemplateName() {
    return void 0;
  },
  _initTemplateManager: function _initTemplateManager() {
    if (this._templateManager || !this._useTemplates()) return void 0;

    var _this$option4 = this.option(),
        _this$option4$integra = _this$option4.integrationOptions,
        integrationOptions = _this$option4$integra === void 0 ? {} : _this$option4$integra;

    var createTemplate = integrationOptions.createTemplate;
    this._templateManager = new _template_manager.TemplateManager(createTemplate, this._getAnonymousTemplateName());

    this._initTemplates();
  },
  _initTemplates: function _initTemplates() {
    var _this4 = this;

    var _this$_templateManage = this._templateManager.extractTemplates(this.$element()),
        templates = _this$_templateManage.templates,
        anonymousTemplateMeta = _this$_templateManage.anonymousTemplateMeta;

    var anonymousTemplate = this.option("integrationOptions.templates.".concat(anonymousTemplateMeta.name));
    templates.forEach(function (_ref4) {
      var name = _ref4.name,
          template = _ref4.template;

      _this4._options.silent("integrationOptions.templates.".concat(name), template);
    });

    if (anonymousTemplateMeta.name && !anonymousTemplate) {
      this._options.silent("integrationOptions.templates.".concat(anonymousTemplateMeta.name), anonymousTemplateMeta.template);

      this._options.silent('_hasAnonymousTemplateContent', true);
    }
  },
  _getTemplateByOption: function _getTemplateByOption(optionName) {
    return this._getTemplate(this.option(optionName));
  },
  _getTemplate: function _getTemplate(templateSource) {
    var templates = this.option('integrationOptions.templates');
    var isAsyncTemplate = this.option('templatesRenderAsynchronously');
    var skipTemplates = this.option('integrationOptions.skipTemplates');
    return this._templateManager.getTemplate(templateSource, templates, {
      isAsyncTemplate: isAsyncTemplate,
      skipTemplates: skipTemplates
    }, this);
  },
  _saveTemplate: function _saveTemplate(name, template) {
    this._setOptionWithoutOptionChange('integrationOptions.templates.' + name, this._templateManager._createTemplate(template));
  },
  _useTemplates: function _useTemplates() {
    return true;
  }
});

DOMComponent.getInstance = function (element) {
  return (0, _public_component.getInstanceByElement)((0, _renderer.default)(element), this);
};

DOMComponent.defaultOptions = function (rule) {
  this._classCustomRules = this._classCustomRules || [];

  this._classCustomRules.push(rule);
};

var _default = DOMComponent;
exports.default = _default;
module.exports = exports.default;module.exports.default = module.exports;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/component.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(16));

var _extend = __webpack_require__(3);

var _index = __webpack_require__(90);

var _utils = __webpack_require__(35);

var _class = _interopRequireDefault(__webpack_require__(11));

var _action = _interopRequireDefault(__webpack_require__(34));

var _errors = _interopRequireDefault(__webpack_require__(7));

var _callbacks = _interopRequireDefault(__webpack_require__(12));

var _events_strategy = __webpack_require__(32);

var _public_component = __webpack_require__(33);

var _postponed_operations = __webpack_require__(93);

var _type = __webpack_require__(1);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEventName = function getEventName(actionName) {
  return actionName.charAt(2).toLowerCase() + actionName.substr(3);
};

var isInnerOption = function isInnerOption(optionName) {
  return optionName.indexOf('_', 0) === 0;
};

var Component = _class.default.inherit({
  _setDeprecatedOptions: function _setDeprecatedOptions() {
    this._deprecatedOptions = {};
  },
  _getDeprecatedOptions: function _getDeprecatedOptions() {
    return this._deprecatedOptions;
  },
  _getDefaultOptions: function _getDefaultOptions() {
    return {
      onInitialized: null,
      onOptionChanged: null,
      onDisposing: null,
      defaultOptionsRules: null
    };
  },
  _defaultOptionsRules: function _defaultOptionsRules() {
    return [];
  },
  _setOptionsByDevice: function _setOptionsByDevice(rules) {
    this._options.applyRules(rules);
  },
  _convertRulesToOptions: function _convertRulesToOptions(rules) {
    return (0, _utils.convertRulesToOptions)(rules);
  },
  _isInitialOptionValue: function _isInitialOptionValue(name) {
    return this._options.isInitial(name);
  },
  _setOptionsByReference: function _setOptionsByReference() {
    this._optionsByReference = {};
  },
  _getOptionsByReference: function _getOptionsByReference() {
    return this._optionsByReference;
  },

  /**
  * @name ComponentMethods.ctor
  * @publicName ctor(options)
  * @param1 options:ComponentOptions|undefined
  * @hidden
  */
  ctor: function ctor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _optionChangedCallbacks = options._optionChangedCallbacks,
        _disposingCallbacks = options._disposingCallbacks;
    this.NAME = (0, _public_component.name)(this.constructor);
    this._eventsStrategy = _events_strategy.EventsStrategy.create(this, options.eventsStrategy);
    this._updateLockCount = 0;
    this._optionChangedCallbacks = _optionChangedCallbacks || (0, _callbacks.default)();
    this._disposingCallbacks = _disposingCallbacks || (0, _callbacks.default)();
    this.postponedOperations = new _postponed_operations.PostponedOperations();

    this._createOptions(options);
  },
  _createOptions: function _createOptions(options) {
    var _this = this;

    this.beginUpdate();

    try {
      this._setOptionsByReference();

      this._setDeprecatedOptions();

      this._options = new _index.Options(this._getDefaultOptions(), this._getDefaultOptions(), this._getOptionsByReference(), this._getDeprecatedOptions());

      this._options.onChanging(function (name, previousValue, value) {
        return _this._initialized && _this._optionChanging(name, previousValue, value);
      });

      this._options.onDeprecated(function (option, info) {
        return _this._logDeprecatedOptionWarning(option, info);
      });

      this._options.onChanged(function (name, value, previousValue) {
        return _this._notifyOptionChanged(name, value, previousValue);
      });

      this._options.onStartChange(function () {
        return _this.beginUpdate();
      });

      this._options.onEndChange(function () {
        return _this.endUpdate();
      });

      this._options.addRules(this._defaultOptionsRules());

      if (options && options.onInitializing) {
        options.onInitializing.apply(this, [options]);
      }

      this._setOptionsByDevice(options.defaultOptionsRules);

      this._initOptions(options);
    } finally {
      this.endUpdate();
    }
  },
  _initOptions: function _initOptions(options) {
    this.option(options);
  },
  _init: function _init() {
    var _this2 = this;

    this._createOptionChangedAction();

    this.on('disposing', function (args) {
      _this2._disposingCallbacks.fireWith(_this2, [args]);
    });
  },
  _logDeprecatedOptionWarning: function _logDeprecatedOptionWarning(option, info) {
    var message = info.message || "Use the '".concat(info.alias, "' option instead");

    _errors.default.log('W0001', this.NAME, option, info.since, message);
  },
  _logDeprecatedComponentWarning: function _logDeprecatedComponentWarning(since, alias) {
    _errors.default.log('W0000', this.NAME, since, "Use the '".concat(alias, "' widget instead"));
  },
  _createOptionChangedAction: function _createOptionChangedAction() {
    this._optionChangedAction = this._createActionByOption('onOptionChanged', {
      excludeValidators: ['disabled', 'readOnly']
    });
  },
  _createDisposingAction: function _createDisposingAction() {
    this._disposingAction = this._createActionByOption('onDisposing', {
      excludeValidators: ['disabled', 'readOnly']
    });
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'onDisposing':
      case 'onInitialized':
        break;

      case 'onOptionChanged':
        this._createOptionChangedAction();

        break;

      case 'defaultOptionsRules':
        break;
    }
  },
  _dispose: function _dispose() {
    this._optionChangedCallbacks.empty();

    this._createDisposingAction();

    this._disposingAction();

    this._eventsStrategy.dispose();

    this._options.dispose();

    this._disposed = true;
  },
  _lockUpdate: function _lockUpdate() {
    this._updateLockCount++;
  },
  _unlockUpdate: function _unlockUpdate() {
    this._updateLockCount = Math.max(this._updateLockCount - 1, 0);
  },
  // TODO: remake as getter after ES6 refactor
  _isUpdateAllowed: function _isUpdateAllowed() {
    return this._updateLockCount === 0;
  },
  // TODO: remake as getter after ES6 refactor
  _isInitializingRequired: function _isInitializingRequired() {
    return !this._initializing && !this._initialized;
  },
  _commitUpdate: function _commitUpdate() {
    this.postponedOperations.callPostponedOperations();
    this._isInitializingRequired() && this._initializeComponent();
  },
  _initializeComponent: function _initializeComponent() {
    this._initializing = true;

    try {
      this._init();
    } finally {
      this._initializing = false;

      this._lockUpdate();

      this._createActionByOption('onInitialized', {
        excludeValidators: ['disabled', 'readOnly']
      })();

      this._unlockUpdate();

      this._initialized = true;
    }
  },
  instance: function instance() {
    return this;
  },
  beginUpdate: function beginUpdate() {
    this._lockUpdate();
  },
  endUpdate: function endUpdate() {
    this._unlockUpdate();

    this._isUpdateAllowed() && this._commitUpdate();
  },
  _optionChanging: _common.noop,
  _notifyOptionChanged: function _notifyOptionChanged(option, value, previousValue) {
    if (this._initialized) {
      var optionNames = [option].concat(this._options.getAliasesByName(option));

      for (var i = 0; i < optionNames.length; i++) {
        var name = optionNames[i];
        var args = {
          name: name.split(/[.[]/)[0],
          fullName: name,
          value: value,
          previousValue: previousValue
        };

        if (!isInnerOption(name)) {
          this._optionChangedCallbacks.fireWith(this, [(0, _extend.extend)(this._defaultActionArgs(), args)]);

          this._optionChangedAction((0, _extend.extend)({}, args));
        }

        if (!this._disposed && this._cancelOptionChange !== name) {
          this._optionChanged(args);
        }
      }
    }
  },
  initialOption: function initialOption(name) {
    return this._options.initial(name);
  },
  _defaultActionConfig: function _defaultActionConfig() {
    return {
      context: this,
      component: this
    };
  },
  _defaultActionArgs: function _defaultActionArgs() {
    return {
      component: this
    };
  },
  _createAction: function _createAction(actionSource, config) {
    var _this3 = this;

    var action;
    return function (e) {
      if (!(0, _type.isDefined)(e)) {
        e = {};
      }

      if (!(0, _type.isPlainObject)(e)) {
        e = {
          actionValue: e
        };
      }

      action = action || new _action.default(actionSource, (0, _extend.extend)(config, _this3._defaultActionConfig()));
      return action.execute.call(action, (0, _extend.extend)(e, _this3._defaultActionArgs()));
    };
  },
  _createActionByOption: function _createActionByOption(optionName, config) {
    var _this4 = this;

    var action;
    var eventName;
    var actionFunc;

    var result = function result() {
      if (!eventName) {
        config = config || {};

        if (typeof optionName !== 'string') {
          throw _errors.default.Error('E0008');
        }

        if (optionName.indexOf('on') === 0) {
          eventName = getEventName(optionName);
        }

        actionFunc = _this4.option(optionName);
      }

      if (!action && !actionFunc && !config.beforeExecute && !config.afterExecute && !_this4._eventsStrategy.hasEvent(eventName)) {
        return;
      }

      if (!action) {
        var beforeExecute = config.beforeExecute;

        config.beforeExecute = function () {
          for (var _len2 = arguments.length, props = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            props[_key2] = arguments[_key2];
          }

          beforeExecute && beforeExecute.apply(_this4, props);

          _this4._eventsStrategy.fireEvent(eventName, props[0].args);
        };

        action = _this4._createAction(actionFunc, config);
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if ((0, _config.default)().wrapActionsBeforeExecute) {
        var beforeActionExecute = _this4.option('beforeActionExecute') || _common.noop;

        var wrappedAction = beforeActionExecute(_this4, action, config) || action;
        return wrappedAction.apply(_this4, args);
      }

      return action.apply(_this4, args);
    };

    if ((0, _config.default)().wrapActionsBeforeExecute) {
      return result;
    }

    var onActionCreated = this.option('onActionCreated') || _common.noop;

    return onActionCreated(this, result, config) || result;
  },
  on: function on(eventName, eventHandler) {
    this._eventsStrategy.on(eventName, eventHandler);

    return this;
  },
  off: function off(eventName, eventHandler) {
    this._eventsStrategy.off(eventName, eventHandler);

    return this;
  },
  hasActionSubscription: function hasActionSubscription(actionName) {
    return !!this._options.silent(actionName) || this._eventsStrategy.hasEvent(getEventName(actionName));
  },
  isOptionDeprecated: function isOptionDeprecated(name) {
    return this._options.isDeprecated(name);
  },
  _setOptionWithoutOptionChange: function _setOptionWithoutOptionChange(name, value) {
    this._cancelOptionChange = name;
    this.option(name, value);
    this._cancelOptionChange = false;
  },
  _getOptionValue: function _getOptionValue(name, context) {
    var value = this.option(name);

    if ((0, _type.isFunction)(value)) {
      return value.bind(context)();
    }

    return value;
  },
  option: function option() {
    var _this$_options;

    return (_this$_options = this._options).option.apply(_this$_options, arguments);
  },
  resetOption: function resetOption(name) {
    this.beginUpdate();

    this._options.reset(name);

    this.endUpdate();
  }
});

var _default = Component;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/options/index.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.Options = void 0;

var _type = __webpack_require__(1);

var _common = __webpack_require__(8);

var _option_manager = __webpack_require__(91);

var _object = __webpack_require__(30);

var _utils = __webpack_require__(35);

var _extend = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Options = /*#__PURE__*/function () {
  function Options(options, defaultOptions, optionsByReference, deprecatedOptions) {
    var _this = this;

    _classCallCheck(this, Options);

    this._deprecatedCallback;
    this._startChangeCallback;
    this._endChangeCallback;
    this._default = defaultOptions;
    this._deprecated = deprecatedOptions;
    this._deprecatedNames = [];

    this._initDeprecatedNames();

    this._optionManager = new _option_manager.OptionManager(options, optionsByReference);

    this._optionManager.onRelevantNamesPrepared(function (options, name, value, silent) {
      return _this._setRelevantNames(options, name, value, silent);
    });

    this._cachedOptions = {};
    this._rules = [];
  }

  _createClass(Options, [{
    key: "_initDeprecatedNames",
    value: function _initDeprecatedNames() {
      for (var optionName in this._deprecated) {
        this._deprecatedNames.push(optionName);
      }
    }
  }, {
    key: "_getByRules",
    value: function _getByRules(rules) {
      rules = Array.isArray(rules) ? this._rules.concat(rules) : this._rules;
      return (0, _utils.convertRulesToOptions)(rules);
    }
  }, {
    key: "_notifyDeprecated",
    value: function _notifyDeprecated(option) {
      var info = this._deprecated[option];

      if (info) {
        this._deprecatedCallback(option, info);
      }
    }
  }, {
    key: "_setRelevantNames",
    value: function _setRelevantNames(options, name, value, silent) {
      if (name) {
        var normalizedName = this._normalizeName(name, silent);

        if (normalizedName && normalizedName !== name) {
          this._setField(options, normalizedName, value);

          this._clearField(options, name);
        }
      }
    }
  }, {
    key: "_setField",
    value: function _setField(options, fullName, value) {
      var fieldName = '';
      var fieldObject = null;

      do {
        fieldName = fieldName ? ".".concat(fieldName) : '';
        fieldName = (0, _utils.getFieldName)(fullName) + fieldName;
        fullName = (0, _utils.getParentName)(fullName);
        fieldObject = fullName ? this._optionManager.get(options, fullName, false) : options;
      } while (!fieldObject);

      fieldObject[fieldName] = value;
    }
  }, {
    key: "_clearField",
    value: function _clearField(options, name) {
      delete options[name];
      var previousFieldName = (0, _utils.getParentName)(name);
      var fieldObject = previousFieldName ? this._optionManager.get(options, previousFieldName, false) : options;

      if (fieldObject) {
        delete fieldObject[(0, _utils.getFieldName)(name)];
      }
    }
  }, {
    key: "_normalizeName",
    value: function _normalizeName(name, silent) {
      if (this._deprecatedNames.length && name) {
        for (var i = 0; i < this._deprecatedNames.length; i++) {
          if (this._deprecatedNames[i] === name) {
            var deprecate = this._deprecated[name];

            if (deprecate) {
              !silent && this._notifyDeprecated(name);
              return deprecate.alias || name;
            }
          }
        }
      }

      return name;
    }
  }, {
    key: "addRules",
    value: function addRules(rules) {
      this._rules = rules.concat(this._rules);
    }
  }, {
    key: "applyRules",
    value: function applyRules(rules) {
      var options = this._getByRules(rules);

      this.silent(options);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._deprecatedCallback = _common.noop;
      this._startChangeCallback = _common.noop;
      this._endChangeCallback = _common.noop;

      this._optionManager.dispose();
    }
  }, {
    key: "onChanging",
    value: function onChanging(callBack) {
      this._optionManager.onChanging(callBack);
    }
  }, {
    key: "onChanged",
    value: function onChanged(callBack) {
      this._optionManager.onChanged(callBack);
    }
  }, {
    key: "onDeprecated",
    value: function onDeprecated(callBack) {
      this._deprecatedCallback = callBack;
    }
  }, {
    key: "onStartChange",
    value: function onStartChange(callBack) {
      this._startChangeCallback = callBack;
    }
  }, {
    key: "onEndChange",
    value: function onEndChange(callBack) {
      this._endChangeCallback = callBack;
    }
  }, {
    key: "isInitial",
    value: function isInitial(name) {
      var value = this.silent(name);
      var initialValue = this.initial(name);
      var areFunctions = (0, _type.isFunction)(value) && (0, _type.isFunction)(initialValue);
      return areFunctions ? value.toString() === initialValue.toString() : (0, _common.equalByValue)(value, initialValue);
    }
  }, {
    key: "initial",
    value: function initial(name) {
      return (0, _utils.getNestedOptionValue)(this._initial, name);
    }
  }, {
    key: "option",
    value: function option(options, value) {
      var isGetter = arguments.length < 2 && (0, _type.type)(options) !== 'object';

      if (isGetter) {
        return this._optionManager.get(undefined, this._normalizeName(options));
      } else {
        this._startChangeCallback();

        try {
          this._optionManager.set(options, value);
        } finally {
          this._endChangeCallback();
        }
      }
    }
  }, {
    key: "silent",
    value: function silent(options, value) {
      var isGetter = arguments.length < 2 && (0, _type.type)(options) !== 'object';

      if (isGetter) {
        return this._optionManager.get(undefined, options, undefined, true);
      } else {
        this._optionManager.set(options, value, undefined, true);
      }
    }
  }, {
    key: "reset",
    value: function reset(name) {
      var _this2 = this;

      if (name) {
        var fullPath = name.replace(/\[([^\]])\]/g, '.$1').split('.');
        var value = fullPath.reduce(function (value, field) {
          return value ? value[field] : _this2.initial(field);
        }, null);
        var defaultValue = (0, _type.isObject)(value) ? (0, _object.clone)(value) : value;

        this._optionManager.set(name, defaultValue, false);
      }
    }
  }, {
    key: "getAliasesByName",
    value: function getAliasesByName(name) {
      var _this3 = this;

      return Object.keys(this._deprecated).filter(function (aliasName) {
        return name === _this3._deprecated[aliasName].alias;
      });
    }
  }, {
    key: "isDeprecated",
    value: function isDeprecated(name) {
      return Object.prototype.hasOwnProperty.call(this._deprecated, name);
    }
  }, {
    key: "cache",
    value: function cache(name, options) {
      var isGetter = arguments.length < 2;

      if (isGetter) {
        return this._cachedOptions[name];
      } else {
        this._cachedOptions[name] = (0, _extend.extend)(this._cachedOptions[name], options);
      }
    }
  }, {
    key: "_initial",
    set: function set(value) {
      this._initialOptions = value;
    },
    get: function get() {
      if (!this._initialOptions) {
        var rulesOptions = this._getByRules(this.silent('defaultOptionsRules'));

        this._initialOptions = this._default;

        this._optionManager._setByReference(this._initialOptions, rulesOptions);
      }

      return this._initialOptions;
    }
  }]);

  return Options;
}();

exports.Options = Options;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/options/option_manager.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.OptionManager = void 0;

var _data = __webpack_require__(26);

var _common = __webpack_require__(8);

var _comparator = __webpack_require__(92);

var _extend = __webpack_require__(3);

var _type = __webpack_require__(1);

var _utils = __webpack_require__(35);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cachedGetters = {};
var cachedSetters = {};

var OptionManager = /*#__PURE__*/function () {
  function OptionManager(options, optionsByReference) {
    _classCallCheck(this, OptionManager);

    this._options = options;
    this._optionsByReference = optionsByReference;
    this._changingCallback;
    this._changedCallback;
    this._namePreparedCallbacks;
  }

  _createClass(OptionManager, [{
    key: "_setByReference",
    value: function _setByReference(options, rulesOptions) {
      (0, _extend.extend)(true, options, rulesOptions);

      for (var fieldName in this._optionsByReference) {
        if (Object.prototype.hasOwnProperty.call(rulesOptions, fieldName)) {
          options[fieldName] = rulesOptions[fieldName];
        }
      }
    }
  }, {
    key: "_setPreparedValue",
    value: function _setPreparedValue(name, value, merge, silent) {
      var previousValue = this.get(this._options, name, false);

      if (!(0, _comparator.equals)(previousValue, value)) {
        var path = name.split(/[.[]/);
        !silent && this._changingCallback(name, previousValue, value);
        cachedSetters[name] = cachedSetters[name] || (0, _data.compileSetter)(name);
        cachedSetters[name](this._options, value, {
          functionsAsIs: true,
          merge: (0, _type.isDefined)(merge) ? merge : !this._optionsByReference[name],
          unwrapObservables: path.length > 1 && !!this._optionsByReference[path[0]]
        });
        !silent && this._changedCallback(name, value, previousValue);
      }
    }
  }, {
    key: "_prepareRelevantNames",
    value: function _prepareRelevantNames(options, name, value, silent) {
      if ((0, _type.isPlainObject)(value)) {
        for (var valueName in value) {
          this._prepareRelevantNames(options, "".concat(name, ".").concat(valueName), value[valueName]);
        }
      }

      this._namePreparedCallbacks(options, name, value, silent);
    }
  }, {
    key: "get",
    value: function get() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options;
      var name = arguments.length > 1 ? arguments[1] : undefined;
      var unwrapObservables = arguments.length > 2 ? arguments[2] : undefined;
      cachedGetters[name] = cachedGetters[name] || (0, _data.compileGetter)(name);
      return cachedGetters[name](options, {
        functionsAsIs: true,
        unwrapObservables: unwrapObservables
      });
    }
  }, {
    key: "set",
    value: function set(options, value, merge, silent) {
      options = (0, _utils.normalizeOptions)(options, value);

      for (var name in options) {
        this._prepareRelevantNames(options, name, options[name], silent);
      }

      for (var _name in options) {
        this._setPreparedValue(_name, options[_name], merge, silent);
      }
    }
  }, {
    key: "onRelevantNamesPrepared",
    value: function onRelevantNamesPrepared(callBack) {
      this._namePreparedCallbacks = callBack;
    }
  }, {
    key: "onChanging",
    value: function onChanging(callBack) {
      this._changingCallback = callBack;
    }
  }, {
    key: "onChanged",
    value: function onChanged(callBack) {
      this._changedCallback = callBack;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._changingCallback = _common.noop;
      this._changedCallback = _common.noop;
    }
  }]);

  return OptionManager;
}();

exports.OptionManager = OptionManager;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/comparator.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.equals = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _data = __webpack_require__(26);

var _type = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasNegation = function hasNegation(oldValue, newValue) {
  return 1 / oldValue === 1 / newValue;
};

var equals = function equals(oldValue, newValue) {
  oldValue = (0, _data.toComparable)(oldValue, true);
  newValue = (0, _data.toComparable)(newValue, true);

  if (oldValue && newValue && (0, _type.isRenderer)(oldValue) && (0, _type.isRenderer)(newValue)) {
    return newValue.is(oldValue);
  }

  var oldValueIsNaN = oldValue !== oldValue;
  var newValueIsNaN = newValue !== newValue;

  if (oldValueIsNaN && newValueIsNaN) {
    return true;
  }

  if (oldValue === 0 && newValue === 0) {
    return hasNegation(oldValue, newValue);
  }

  if (oldValue === null || _typeof(oldValue) !== 'object' || _dom_adapter.default.isElementNode(oldValue)) {
    return oldValue === newValue;
  }

  return false;
};

exports.equals = equals;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/postponed_operations.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.PostponedOperations = void 0;

var _deferred = __webpack_require__(23);

var _type = __webpack_require__(1);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PostponedOperations = /*#__PURE__*/function () {
  function PostponedOperations() {
    _classCallCheck(this, PostponedOperations);

    this._postponedOperations = {};
  }

  _createClass(PostponedOperations, [{
    key: "add",
    value: function add(key, fn, postponedPromise) {
      if (key in this._postponedOperations) {
        postponedPromise && this._postponedOperations[key].promises.push(postponedPromise);
      } else {
        var completePromise = new _deferred.Deferred();
        this._postponedOperations[key] = {
          fn: fn,
          completePromise: completePromise,
          promises: postponedPromise ? [postponedPromise] : []
        };
      }

      return this._postponedOperations[key].completePromise.promise();
    }
  }, {
    key: "callPostponedOperations",
    value: function callPostponedOperations() {
      for (var key in this._postponedOperations) {
        var operation = this._postponedOperations[key];

        if ((0, _type.isDefined)(operation)) {
          if (operation.promises && operation.promises.length) {
            _deferred.when.apply(void 0, _toConsumableArray(operation.promises)).done(operation.fn).then(operation.completePromise.resolve);
          } else {
            operation.fn().done(operation.completePromise.resolve);
          }
        }
      }

      this._postponedOperations = {};
    }
  }]);

  return PostponedOperations;
}();

exports.PostponedOperations = PostponedOperations;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/template_manager.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.TemplateManager = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _type = __webpack_require__(1);

var _common = __webpack_require__(8);

var _extend = __webpack_require__(3);

var _function_template = __webpack_require__(51);

var _empty_template = __webpack_require__(52);

var _template_manager = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TEXT_NODE = 3;
var ANONYMOUS_TEMPLATE_NAME = 'template';
var TEMPLATE_OPTIONS_NAME = 'dxTemplate';
var TEMPLATE_WRAPPER_CLASS = 'dx-template-wrapper';
var DX_POLYMORPH_WIDGET_TEMPLATE = new _function_template.FunctionTemplate(function (_ref) {
  var model = _ref.model,
      parent = _ref.parent;
  var widgetName = model.widget;
  if (!widgetName) return (0, _renderer.default)();
  var widgetElement = (0, _renderer.default)('<div>');
  var widgetOptions = model.options || {};

  if (parent) {
    parent._createComponent(widgetElement, widgetName, widgetOptions);
  } else {
    widgetElement[widgetName](widgetOptions);
  }

  return widgetElement;
});

var TemplateManager = /*#__PURE__*/function () {
  function TemplateManager(createElement, anonymousTemplateName) {
    _classCallCheck(this, TemplateManager);

    this._tempTemplates = [];
    this._defaultTemplates = {};
    this._anonymousTemplateName = anonymousTemplateName || ANONYMOUS_TEMPLATE_NAME;
    this._createElement = createElement || _template_manager.defaultCreateElement;
    this._createTemplateIfNeeded = this._createTemplateIfNeeded.bind(this);
  }

  _createClass(TemplateManager, [{
    key: "addDefaultTemplates",
    value: function addDefaultTemplates(templates) {
      this._defaultTemplates = (0, _extend.extend)({}, this._defaultTemplates, templates);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._tempTemplates.forEach(function (tempTemplate) {
        tempTemplate.template.dispose && tempTemplate.template.dispose();
      });

      this._tempTemplates = [];
    }
  }, {
    key: "extractTemplates",
    value: function extractTemplates($el) {
      var templates = this._extractTemplates($el);

      var anonymousTemplateMeta = this._extractAnonymousTemplate($el);

      return {
        templates: templates,
        anonymousTemplateMeta: anonymousTemplateMeta
      };
    }
  }, {
    key: "_extractTemplates",
    value: function _extractTemplates($el) {
      var _this = this;

      var templates = (0, _template_manager.findTemplates)($el, TEMPLATE_OPTIONS_NAME);
      var suitableTemplates = (0, _template_manager.suitableTemplatesByName)(templates);
      templates.forEach(function (_ref2) {
        var element = _ref2.element,
            name = _ref2.options.name;

        if (element === suitableTemplates[name]) {
          (0, _renderer.default)(element).addClass(TEMPLATE_WRAPPER_CLASS).detach();
        } else {
          (0, _renderer.default)(element).remove();
        }
      });
      return Object.keys(suitableTemplates).map(function (name) {
        return {
          name: name,
          template: _this._createTemplate(suitableTemplates[name])
        };
      });
    }
  }, {
    key: "_extractAnonymousTemplate",
    value: function _extractAnonymousTemplate($el) {
      var $anonymousTemplate = $el.contents().detach();
      var $notJunkTemplateContent = $anonymousTemplate.filter(function (_, element) {
        var isTextNode = element.nodeType === TEXT_NODE;
        var isEmptyText = (0, _renderer.default)(element).text().trim().length < 1;
        return !(isTextNode && isEmptyText);
      });
      return $notJunkTemplateContent.length > 0 ? {
        template: this._createTemplate($anonymousTemplate),
        name: this._anonymousTemplateName
      } : {};
    }
  }, {
    key: "_createTemplateIfNeeded",
    value: function _createTemplateIfNeeded(templateSource) {
      var cachedTemplate = this._tempTemplates.filter(function (tempTemplate) {
        return tempTemplate.source === (0, _template_manager.templateKey)(templateSource);
      })[0];

      if (cachedTemplate) return cachedTemplate.template;

      var template = this._createTemplate(templateSource);

      this._tempTemplates.push({
        template: template,
        source: (0, _template_manager.templateKey)(templateSource)
      });

      return template;
    }
  }, {
    key: "_createTemplate",
    value: function _createTemplate(templateSource) {
      return this._createElement((0, _template_manager.validateTemplateSource)(templateSource));
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(templateSource, templates, _ref3, context) {
      var _this2 = this;

      var isAsyncTemplate = _ref3.isAsyncTemplate,
          skipTemplates = _ref3.skipTemplates;

      if (!(0, _type.isFunction)(templateSource)) {
        return (0, _template_manager.acquireTemplate)(templateSource, this._createTemplateIfNeeded, templates, isAsyncTemplate, skipTemplates, this._defaultTemplates);
      }

      return new _function_template.FunctionTemplate(function (options) {
        var templateSourceResult = templateSource.apply(context, (0, _template_manager.getNormalizedTemplateArgs)(options));

        if (!(0, _type.isDefined)(templateSourceResult)) {
          return new _empty_template.EmptyTemplate();
        }

        var dispose = false;
        var template = (0, _template_manager.acquireTemplate)(templateSourceResult, function (templateSource) {
          if (templateSource.nodeType || (0, _type.isRenderer)(templateSource) && !(0, _renderer.default)(templateSource).is('script')) {
            return new _function_template.FunctionTemplate(function () {
              return templateSource;
            });
          }

          dispose = true;
          return _this2._createTemplate(templateSource);
        }, templates, isAsyncTemplate, skipTemplates, _this2._defaultTemplates);
        var result = template.render(options);
        dispose && template.dispose && template.dispose();
        return result;
      });
    }
  }, {
    key: "anonymousTemplateName",
    get: function get() {
      return this._anonymousTemplateName;
    }
  }], [{
    key: "createDefaultOptions",
    value: function createDefaultOptions() {
      return {
        integrationOptions: {
          watchMethod: function watchMethod(fn, callback) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!options.skipImmediate) {
              callback(fn());
            }

            return _common.noop;
          },
          templates: {
            'dx-polymorph-widget': DX_POLYMORPH_WIDGET_TEMPLATE
          }
        }
      };
    }
  }]);

  return TemplateManager;
}();

exports.TemplateManager = TemplateManager;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/visibility_change.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.triggerResizeEvent = exports.triggerHidingEvent = exports.triggerShownEvent = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _events_engine = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var triggerVisibilityChangeEvent = function triggerVisibilityChangeEvent(eventName) {
  var VISIBILITY_CHANGE_SELECTOR = '.dx-visibility-change-handler';
  return function (element) {
    var $element = (0, _renderer.default)(element || 'body');
    var changeHandlers = $element.filter(VISIBILITY_CHANGE_SELECTOR).add($element.find(VISIBILITY_CHANGE_SELECTOR));

    for (var i = 0; i < changeHandlers.length; i++) {
      (0, _events_engine.triggerHandler)(changeHandlers[i], eventName);
    }
  };
};

var triggerShownEvent = triggerVisibilityChangeEvent('dxshown');
exports.triggerShownEvent = triggerShownEvent;
var triggerHidingEvent = triggerVisibilityChangeEvent('dxhiding');
exports.triggerHidingEvent = triggerHidingEvent;
var triggerResizeEvent = triggerVisibilityChangeEvent('dxresize');
exports.triggerResizeEvent = triggerResizeEvent;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/template_manager.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.acquireTemplate = exports.acquireIntegrationTemplate = exports.defaultCreateElement = exports.templateKey = exports.validateTemplateSource = exports.getNormalizedTemplateArgs = exports.addOneRenderedCall = exports.suitableTemplatesByName = exports.findTemplates = void 0;

var _config = _interopRequireDefault(__webpack_require__(16));

var _devices = _interopRequireDefault(__webpack_require__(15));

var _errors = __webpack_require__(7);

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _child_default_template = __webpack_require__(97);

var _empty_template = __webpack_require__(52);

var _template = __webpack_require__(98);

var _template_base = __webpack_require__(25);

var _array = __webpack_require__(14);

var _common = __webpack_require__(8);

var _dom = __webpack_require__(19);

var _extend = __webpack_require__(3);

var _type = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findTemplates = function findTemplates(element, name) {
  var optionsAttributeName = 'data-options';
  var templates = (0, _renderer.default)(element).contents().filter("[".concat(optionsAttributeName, "*=\"").concat(name, "\"]"));
  return [].slice.call(templates).map(function (element) {
    var optionsString = (0, _renderer.default)(element).attr(optionsAttributeName) || '';
    return {
      element: element,
      options: (0, _config.default)().optionsParser(optionsString)[name]
    };
  }).filter(function (template) {
    return !!template.options;
  });
};

exports.findTemplates = findTemplates;

var suitableTemplatesByName = function suitableTemplatesByName(rawTemplates) {
  var templatesMap = (0, _array.groupBy)(rawTemplates, function (template) {
    return template.options.name;
  });

  if (templatesMap[undefined]) {
    throw (0, _errors.Error)('E0023');
  }

  var result = {};
  Object.keys(templatesMap).forEach(function (name) {
    var _findBestMatches$;

    var suitableTemplate = (_findBestMatches$ = (0, _common.findBestMatches)(_devices.default.current(), templatesMap[name], function (template) {
      return template.options;
    })[0]) === null || _findBestMatches$ === void 0 ? void 0 : _findBestMatches$.element;

    if (suitableTemplate) {
      result[name] = suitableTemplate;
    }
  });
  return result;
};

exports.suitableTemplatesByName = suitableTemplatesByName;

var addOneRenderedCall = function addOneRenderedCall(template) {
  var _render = template.render.bind(template);

  return (0, _extend.extend)({}, template, {
    render: function render(options) {
      var templateResult = _render(options);

      options && options.onRendered && options.onRendered();
      return templateResult;
    }
  });
};

exports.addOneRenderedCall = addOneRenderedCall;

var getNormalizedTemplateArgs = function getNormalizedTemplateArgs(options) {
  var args = [];

  if ('model' in options) {
    args.push(options.model);
  }

  if ('index' in options) {
    args.push(options.index);
  }

  args.push(options.container);
  return args;
};

exports.getNormalizedTemplateArgs = getNormalizedTemplateArgs;

var validateTemplateSource = function validateTemplateSource(templateSource) {
  return typeof templateSource === 'string' ? (0, _dom.normalizeTemplateElement)(templateSource) : templateSource;
};

exports.validateTemplateSource = validateTemplateSource;

var templateKey = function templateKey(templateSource) {
  return (0, _type.isRenderer)(templateSource) && templateSource[0] || templateSource;
};

exports.templateKey = templateKey;

var defaultCreateElement = function defaultCreateElement(element) {
  return new _template.Template(element);
};

exports.defaultCreateElement = defaultCreateElement;

var acquireIntegrationTemplate = function acquireIntegrationTemplate(templateSource, templates, isAsyncTemplate, skipTemplates) {
  var integrationTemplate = null;

  if (!skipTemplates || skipTemplates.indexOf(templateSource) === -1) {
    integrationTemplate = templates[templateSource];

    if (integrationTemplate && !(integrationTemplate instanceof _template_base.TemplateBase) && !isAsyncTemplate) {
      integrationTemplate = addOneRenderedCall(integrationTemplate);
    }
  }

  return integrationTemplate;
};

exports.acquireIntegrationTemplate = acquireIntegrationTemplate;

var acquireTemplate = function acquireTemplate(templateSource, createTemplate, templates, isAsyncTemplate, skipTemplates, defaultTemplates) {
  if (templateSource == null) {
    return new _empty_template.EmptyTemplate();
  }

  if (templateSource instanceof _child_default_template.ChildDefaultTemplate) {
    return defaultTemplates[templateSource.name];
  }

  if (templateSource instanceof _template_base.TemplateBase) {
    return templateSource;
  } // TODO: templateSource.render is needed for angular2 integration. Try to remove it after supporting TypeScript modules.


  if ((0, _type.isFunction)(templateSource.render) && !(0, _type.isRenderer)(templateSource)) {
    return addOneRenderedCall(templateSource);
  }

  if (templateSource.nodeType || (0, _type.isRenderer)(templateSource)) {
    return createTemplate((0, _renderer.default)(templateSource));
  }

  return acquireIntegrationTemplate(templateSource, templates, isAsyncTemplate, skipTemplates) || defaultTemplates[templateSource] || createTemplate(templateSource);
};

exports.acquireTemplate = acquireTemplate;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/child_default_template.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.ChildDefaultTemplate = void 0;

var _template_base = __webpack_require__(25);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ChildDefaultTemplate = /*#__PURE__*/function (_TemplateBase) {
  _inherits(ChildDefaultTemplate, _TemplateBase);

  var _super = _createSuper(ChildDefaultTemplate);

  function ChildDefaultTemplate(name) {
    var _this;

    _classCallCheck(this, ChildDefaultTemplate);

    _this = _super.call(this);
    _this.name = name;
    return _this;
  }

  return ChildDefaultTemplate;
}(_template_base.TemplateBase);

exports.ChildDefaultTemplate = ChildDefaultTemplate;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/template.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.Template = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _template_base = __webpack_require__(25);

var _dom = __webpack_require__(19);

var _template_engine_registry = __webpack_require__(53);

__webpack_require__(99);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(0, _template_engine_registry.registerTemplateEngine)('default', {
  compile: function compile(element) {
    return (0, _dom.normalizeTemplateElement)(element);
  },
  render: function render(template, model, index) {
    return template.clone();
  }
});
(0, _template_engine_registry.setTemplateEngine)('default');

var Template = /*#__PURE__*/function (_TemplateBase) {
  _inherits(Template, _TemplateBase);

  var _super = _createSuper(Template);

  function Template(element) {
    var _this;

    _classCallCheck(this, Template);

    _this = _super.call(this);
    _this._element = element;
    return _this;
  }

  _createClass(Template, [{
    key: "_renderCore",
    value: function _renderCore(options) {
      var transclude = options.transclude;

      if (!transclude && !this._compiledTemplate) {
        this._compiledTemplate = (0, _template_engine_registry.getCurrentTemplateEngine)().compile(this._element);
      }

      return (0, _renderer.default)('<div>').append(transclude ? this._element : (0, _template_engine_registry.getCurrentTemplateEngine)().render(this._compiledTemplate, options.model, options.index)).contents();
    }
  }, {
    key: "source",
    value: function source() {
      return (0, _renderer.default)(this._element).clone();
    }
  }]);

  return Template;
}(_template_base.TemplateBase);

exports.Template = Template;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/templates/template_engines.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


var _dom = __webpack_require__(19);

var _template_engine_registry = __webpack_require__(53);

(0, _template_engine_registry.registerTemplateEngine)('jquery-tmpl', {
  compile: function compile(element) {
    return (0, _dom.extractTemplateMarkup)(element);
  },
  render: function render(template, data) {
    /* global jQuery */
    return jQuery.tmpl(template, data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('jsrender', {
  compile: function compile(element) {
    /* global jsrender */
    return (jQuery ? jQuery : jsrender).templates((0, _dom.extractTemplateMarkup)(element));
  },
  render: function render(template, data) {
    return template.render(data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('mustache', {
  compile: function compile(element) {
    /* global Mustache */
    return (0, _dom.extractTemplateMarkup)(element);
  },
  render: function render(template, data) {
    return Mustache.render(template, data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('hogan', {
  compile: function compile(element) {
    /* global Hogan */
    return Hogan.compile((0, _dom.extractTemplateMarkup)(element));
  },
  render: function render(template, data) {
    return template.render(data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('underscore', {
  compile: function compile(element) {
    /* global _ */
    return _.template((0, _dom.extractTemplateMarkup)(element));
  },
  render: function render(template, data) {
    return template(data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('handlebars', {
  compile: function compile(element) {
    /* global Handlebars */
    return Handlebars.compile((0, _dom.extractTemplateMarkup)(element));
  },
  render: function render(template, data) {
    return template(data);
  }
});
(0, _template_engine_registry.registerTemplateEngine)('doT', {
  compile: function compile(element) {
    /* global doT */
    return doT.template((0, _dom.extractTemplateMarkup)(element));
  },
  render: function render(template, data) {
    return template(data);
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/keyboard_processor.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _class = _interopRequireDefault(__webpack_require__(11));

var _array = __webpack_require__(14);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPOSITION_START_EVENT = 'compositionstart';
var COMPOSITION_END_EVENT = 'compositionend';
var KEYDOWN_EVENT = 'keydown';
var NAMESPACE = 'KeyboardProcessor';

var KeyboardProcessor = _class.default.inherit({
  _keydown: (0, _utils.addNamespace)(KEYDOWN_EVENT, NAMESPACE),
  _compositionStart: (0, _utils.addNamespace)(COMPOSITION_START_EVENT, NAMESPACE),
  _compositionEnd: (0, _utils.addNamespace)(COMPOSITION_END_EVENT, NAMESPACE),
  ctor: function ctor(options) {
    var _this = this;

    options = options || {};

    if (options.element) {
      this._element = (0, _renderer.default)(options.element);
    }

    if (options.focusTarget) {
      this._focusTarget = options.focusTarget;
    }

    this._handler = options.handler;

    if (this._element) {
      this._processFunction = function (e) {
        var isNotFocusTarget = _this._focusTarget && _this._focusTarget !== e.target && (0, _array.inArray)(e.target, _this._focusTarget) < 0;
        var shouldSkipProcessing = _this._isComposingJustFinished && e.which === 229 || _this._isComposing || isNotFocusTarget;
        _this._isComposingJustFinished = false;

        if (!shouldSkipProcessing) {
          _this.process(e);
        }
      };

      this._toggleProcessingWithContext = this.toggleProcessing.bind(this);

      _events_engine.default.on(this._element, this._keydown, this._processFunction);

      _events_engine.default.on(this._element, this._compositionStart, this._toggleProcessingWithContext);

      _events_engine.default.on(this._element, this._compositionEnd, this._toggleProcessingWithContext);
    }
  },
  dispose: function dispose() {
    if (this._element) {
      _events_engine.default.off(this._element, this._keydown, this._processFunction);

      _events_engine.default.off(this._element, this._compositionStart, this._toggleProcessingWithContext);

      _events_engine.default.off(this._element, this._compositionEnd, this._toggleProcessingWithContext);
    }

    this._element = undefined;
    this._handler = undefined;
  },
  process: function process(e) {
    this._handler({
      keyName: (0, _utils.normalizeKeyName)(e),
      key: e.key,
      code: e.code,
      ctrl: e.ctrlKey,
      location: e.location,
      metaKey: e.metaKey,
      shift: e.shiftKey,
      alt: e.altKey,
      which: e.which,
      originalEvent: e
    });
  },
  toggleProcessing: function toggleProcessing(_ref) {
    var type = _ref.type;
    this._isComposing = type === COMPOSITION_START_EVENT;
    this._isComposingJustFinished = !this._isComposing;
  }
});

var _default = KeyboardProcessor;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/utils/add_namespace.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _errors = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addNamespace = function addNamespace(eventNames, namespace) {
  if (!namespace) {
    throw _errors.default.Error('E0017');
  }

  if (Array.isArray(eventNames)) {
    return eventNames.map(function (eventName) {
      return addNamespace(eventName, namespace);
    }).join(' ');
  }

  if (eventNames.indexOf(' ') !== -1) {
    return addNamespace(eventNames.split(/\s+/g), namespace);
  }

  return "".concat(eventNames, ".").concat(namespace);
};

var _default = addNamespace;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/click.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.name = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _devices = _interopRequireDefault(__webpack_require__(15));

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _dom = _interopRequireDefault(__webpack_require__(19));

var _frame = __webpack_require__(103);

var _utils = __webpack_require__(13);

var _pointer = _interopRequireDefault(__webpack_require__(27));

var _emitter = _interopRequireDefault(__webpack_require__(60));

var _emitter_registrator = _interopRequireDefault(__webpack_require__(61));

var _version = __webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLICK_EVENT_NAME = 'dxclick';
exports.name = CLICK_EVENT_NAME;
var TOUCH_BOUNDARY = 10;
var abs = Math.abs;

var isInput = function isInput(element) {
  return (0, _renderer.default)(element).is('input, textarea, select, button ,:focus, :focus *');
};

var misc = {
  requestAnimationFrame: _frame.requestAnimationFrame,
  cancelAnimationFrame: _frame.cancelAnimationFrame
};

var ClickEmitter = _emitter.default.inherit({
  ctor: function ctor(element) {
    this.callBase(element);

    this._makeElementClickable((0, _renderer.default)(element));
  },
  _makeElementClickable: function _makeElementClickable($element) {
    if (!$element.attr('onclick')) {
      $element.attr('onclick', 'void(0)');
    }
  },
  start: function start(e) {
    this._blurPrevented = e.isDefaultPrevented();
    this._startTarget = e.target;
    this._startEventData = (0, _utils.eventData)(e);
  },
  end: function end(e) {
    if (this._eventOutOfElement(e, this.getElement().get(0)) || e.type === _pointer.default.cancel) {
      this._cancel(e);

      return;
    }

    if (!isInput(e.target) && !this._blurPrevented) {
      _dom.default.resetActiveElement();
    }

    this._accept(e);

    this._clickAnimationFrame = misc.requestAnimationFrame(function () {
      this._fireClickEvent(e);
    }.bind(this));
  },
  _eventOutOfElement: function _eventOutOfElement(e, element) {
    var target = e.target;
    var targetChanged = !_dom.default.contains(element, target) && element !== target;
    var gestureDelta = (0, _utils.eventDelta)((0, _utils.eventData)(e), this._startEventData);
    var boundsExceeded = abs(gestureDelta.x) > TOUCH_BOUNDARY || abs(gestureDelta.y) > TOUCH_BOUNDARY;
    return targetChanged || boundsExceeded;
  },
  _fireClickEvent: function _fireClickEvent(e) {
    this._fireEvent(CLICK_EVENT_NAME, e, {
      target: _dom.default.closestCommonParent(this._startTarget, e.target)
    });
  },
  dispose: function dispose() {
    misc.cancelAnimationFrame(this._clickAnimationFrame);
  }
}); // NOTE: native strategy for desktop, iOS 9.3+, Android 5+


var realDevice = _devices.default.real();

var useNativeClick = realDevice.generic || realDevice.ios && (0, _version.compare)(realDevice.version, [9, 3]) >= 0 || realDevice.android && (0, _version.compare)(realDevice.version, [5]) >= 0;

(function () {
  var NATIVE_CLICK_CLASS = 'dx-native-click';

  var isNativeClickEvent = function isNativeClickEvent(target) {
    return useNativeClick || (0, _renderer.default)(target).closest('.' + NATIVE_CLICK_CLASS).length;
  };

  var prevented = null;
  var lastFiredEvent = null;

  var clickHandler = function clickHandler(e) {
    var originalEvent = e.originalEvent;
    var eventAlreadyFired = lastFiredEvent === originalEvent || originalEvent && originalEvent.DXCLICK_FIRED;
    var leftButton = !e.which || e.which === 1;

    if (leftButton && !prevented && isNativeClickEvent(e.target) && !eventAlreadyFired) {
      if (originalEvent) {
        originalEvent.DXCLICK_FIRED = true;
      }

      lastFiredEvent = originalEvent;
      (0, _utils.fireEvent)({
        type: CLICK_EVENT_NAME,
        originalEvent: e
      });
    }
  };

  ClickEmitter = ClickEmitter.inherit({
    _makeElementClickable: function _makeElementClickable($element) {
      if (!isNativeClickEvent($element)) {
        this.callBase($element);
      }

      _events_engine.default.on($element, 'click', clickHandler);
    },
    configure: function configure(data) {
      this.callBase(data);

      if (data.useNative) {
        this.getElement().addClass(NATIVE_CLICK_CLASS);
      }
    },
    start: function start(e) {
      prevented = null;

      if (!isNativeClickEvent(e.target)) {
        this.callBase(e);
      }
    },
    end: function end(e) {
      if (!isNativeClickEvent(e.target)) {
        this.callBase(e);
      }
    },
    cancel: function cancel() {
      prevented = true;
    },
    dispose: function dispose() {
      this.callBase();

      _events_engine.default.off(this.getElement(), 'click', clickHandler);
    }
  });
})(); // NOTE: fixes native click blur on slow devices


(function () {
  var desktopDevice = _devices.default.real().generic;

  if (!desktopDevice) {
    var startTarget = null;
    var blurPrevented = false;

    var pointerDownHandler = function pointerDownHandler(e) {
      startTarget = e.target;
      blurPrevented = e.isDefaultPrevented();
    };

    var clickHandler = function clickHandler(e) {
      var $target = (0, _renderer.default)(e.target);

      if (!blurPrevented && startTarget && !$target.is(startTarget) && !(0, _renderer.default)(startTarget).is('label') && isInput($target)) {
        _dom.default.resetActiveElement();
      }

      startTarget = null;
      blurPrevented = false;
    };

    var NATIVE_CLICK_FIXER_NAMESPACE = 'NATIVE_CLICK_FIXER';

    var document = _dom_adapter.default.getDocument();

    _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)(_pointer.default.down, NATIVE_CLICK_FIXER_NAMESPACE), pointerDownHandler);

    _events_engine.default.subscribeGlobal(document, (0, _utils.addNamespace)('click', NATIVE_CLICK_FIXER_NAMESPACE), clickHandler);
  }
})();
/**
  * @name UI Events.dxclick
  * @type eventType
  * @type_function_param1 event:event
  * @module events/click
*/


(0, _emitter_registrator.default)({
  emitter: ClickEmitter,
  bubble: true,
  events: [CLICK_EVENT_NAME]
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (animation/frame.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;

var _window = __webpack_require__(6);

var _call_once = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var window = (0, _window.hasWindow)() ? (0, _window.getWindow)() : {};
var FRAME_ANIMATION_STEP_TIME = 1000 / 60;

var request = function request(callback) {
  return setTimeout(callback, FRAME_ANIMATION_STEP_TIME);
};

var cancel = function cancel(requestID) {
  clearTimeout(requestID);
};

var setAnimationFrameMethods = (0, _call_once.default)(function () {
  var nativeRequest = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
  var nativeCancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;

  if (nativeRequest && nativeCancel) {
    request = nativeRequest;
    cancel = nativeCancel;
  }

  if (nativeRequest && !nativeCancel) {
    // NOTE: https://code.google.com/p/android/issues/detail?id=66243
    var canceledRequests = {};

    request = function request(callback) {
      var requestId = nativeRequest.call(window, function () {
        try {
          if (requestId in canceledRequests) {
            return;
          }

          callback.apply(this, arguments);
        } finally {
          delete canceledRequests[requestId];
        }
      });
      return requestId;
    };

    cancel = function cancel(requestId) {
      canceledRequests[requestId] = true;
    };
  }
});

function requestAnimationFrame() {
  setAnimationFrameMethods();
  return request.apply(window, arguments);
}

function cancelAnimationFrame() {
  setAnimationFrameMethods();
  cancel.apply(window, arguments);
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/support.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


Object.defineProperty(exports, "stylePropPrefix", {
  enumerable: true,
  get: function get() {
    return _style.stylePropPrefix;
  }
});
Object.defineProperty(exports, "styleProp", {
  enumerable: true,
  get: function get() {
    return _style.styleProp;
  }
});
exports.nativeScrolling = exports.animation = exports.transitionEndEventName = exports.transition = exports.touch = exports.inputType = exports.supportProp = exports.pointerEvents = exports.touchEvents = void 0;

var _array = __webpack_require__(14);

var _dom_adapter = _interopRequireDefault(__webpack_require__(5));

var _common = __webpack_require__(8);

var _call_once = _interopRequireDefault(__webpack_require__(21));

var _window = __webpack_require__(6);

var _devices = _interopRequireDefault(__webpack_require__(15));

var _style = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getNavigator = (0, _window.getNavigator)(),
    maxTouchPoints = _getNavigator.maxTouchPoints,
    msMaxTouchPoints = _getNavigator.msMaxTouchPoints,
    pointerEnabled = _getNavigator.pointerEnabled;

var transitionEndEventNames = {
  'webkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MsTransitionEnd',
  'transition': 'transitionend'
};

var supportProp = function supportProp(prop) {
  return !!(0, _style.styleProp)(prop);
};

exports.supportProp = supportProp;

var isNativeScrollingSupported = function isNativeScrollingSupported() {
  var _devices$real = _devices.default.real(),
      platform = _devices$real.platform,
      version = _devices$real.version,
      isMac = _devices$real.mac;

  var isObsoleteAndroid = version && version[0] < 4 && platform === 'android';
  var isNativeScrollDevice = !isObsoleteAndroid && (0, _array.inArray)(platform, ['ios', 'android']) > -1 || isMac;
  return isNativeScrollDevice;
};

var inputType = function inputType(type) {
  if (type === 'text') {
    return true;
  }

  var input = _dom_adapter.default.createElement('input');

  try {
    input.setAttribute('type', type);
    input.value = 'wrongValue';
    return !input.value;
  } catch (e) {
    return false;
  }
};

exports.inputType = inputType;

var detectTouchEvents = function detectTouchEvents(hasWindowProperty, maxTouchPoints) {
  return (hasWindowProperty('ontouchstart') || !!maxTouchPoints) && !hasWindowProperty('callPhantom');
};

var detectPointerEvent = function detectPointerEvent(hasWindowProperty, pointerEnabled) {
  // TODO: remove the check of the 'pointerEnabled' when we drop IE support
  var isPointerEnabled = (0, _common.ensureDefined)(pointerEnabled, true);
  var canUsePointerEvent = (0, _common.ensureDefined)(pointerEnabled, false);
  return hasWindowProperty('PointerEvent') && isPointerEnabled || canUsePointerEvent;
};

var touchEvents = detectTouchEvents(_window.hasProperty, maxTouchPoints);
exports.touchEvents = touchEvents;
var pointerEvents = detectPointerEvent(_window.hasProperty, pointerEnabled);
exports.pointerEvents = pointerEvents;
var touchPointersPresent = !!maxTouchPoints || !!msMaxTouchPoints;
var touch = touchEvents || pointerEvents && touchPointersPresent;
exports.touch = touch;
var transition = (0, _call_once.default)(function () {
  return supportProp('transition');
});
exports.transition = transition;
var transitionEndEventName = (0, _call_once.default)(function () {
  return transitionEndEventNames[(0, _style.styleProp)('transition')];
});
exports.transitionEndEventName = transitionEndEventName;
var animation = (0, _call_once.default)(function () {
  return supportProp('animation');
});
exports.animation = animation;
var nativeScrolling = isNativeScrollingSupported();
exports.nativeScrolling = nativeScrolling;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/mspointer.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(28));

var _observer = _interopRequireDefault(__webpack_require__(58));

var _extend = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventMap = {
  'dxpointerdown': 'pointerdown',
  'dxpointermove': 'pointermove',
  'dxpointerup': 'pointerup',
  'dxpointercancel': 'pointercancel',
  'dxpointerover': 'pointerover',
  'dxpointerout': 'pointerout',
  'dxpointerenter': 'pointerenter',
  'dxpointerleave': 'pointerleave'
};
var observer;
var activated = false;

var activateStrategy = function activateStrategy() {
  if (activated) {
    return;
  }

  observer = new _observer.default(eventMap, function (a, b) {
    return a.pointerId === b.pointerId;
  }, function (e) {
    if (e.isPrimary) observer.reset();
  });
  activated = true;
};

var MsPointerStrategy = _base.default.inherit({
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    activateStrategy();
  },
  _fireEvent: function _fireEvent(args) {
    return this.callBase((0, _extend.extend)({
      pointers: observer.pointers(),
      pointerId: args.originalEvent.pointerId
    }, args));
  }
});

MsPointerStrategy.map = eventMap;

MsPointerStrategy.resetObserver = function () {
  observer.reset();
};

var _default = MsPointerStrategy;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/pointer/mouse_and_touch.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.default = void 0;

var _extend = __webpack_require__(3);

var _base = _interopRequireDefault(__webpack_require__(28));

var _mouse = _interopRequireDefault(__webpack_require__(59));

var _touch = _interopRequireDefault(__webpack_require__(57));

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventMap = {
  'dxpointerdown': 'touchstart mousedown',
  'dxpointermove': 'touchmove mousemove',
  'dxpointerup': 'touchend mouseup',
  'dxpointercancel': 'touchcancel',
  'dxpointerover': 'mouseover',
  'dxpointerout': 'mouseout',
  'dxpointerenter': 'mouseenter',
  'dxpointerleave': 'mouseleave'
};
var activated = false;

var activateStrategy = function activateStrategy() {
  if (activated) {
    return;
  }

  _mouse.default.activate();

  activated = true;
};

var MouseAndTouchStrategy = _base.default.inherit({
  EVENT_LOCK_TIMEOUT: 100,
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    activateStrategy();
  },
  _handler: function _handler(e) {
    var isMouse = (0, _utils.isMouseEvent)(e);

    if (!isMouse) {
      this._skipNextEvents = true;
    }

    if (isMouse && this._mouseLocked) {
      return;
    }

    if (isMouse && this._skipNextEvents) {
      this._skipNextEvents = false;
      this._mouseLocked = true;
      clearTimeout(this._unlockMouseTimer);
      var that = this;
      this._unlockMouseTimer = setTimeout(function () {
        that._mouseLocked = false;
      }, this.EVENT_LOCK_TIMEOUT);
      return;
    }

    return this.callBase(e);
  },
  _fireEvent: function _fireEvent(args) {
    var normalizer = (0, _utils.isMouseEvent)(args.originalEvent) ? _mouse.default.normalize : _touch.default.normalize;
    return this.callBase((0, _extend.extend)(normalizer(args.originalEvent), args));
  },
  dispose: function dispose() {
    this.callBase();
    this._skipNextEvents = false;
    this._mouseLocked = false;
    clearTimeout(this._unlockMouseTimer);
  }
});

MouseAndTouchStrategy.map = eventMap;
MouseAndTouchStrategy.resetObserver = _mouse.default.resetObserver;
var _default = MouseAndTouchStrategy;
exports.default = _default;
module.exports = exports.default;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/wheel.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.name = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _event_registrator = _interopRequireDefault(__webpack_require__(24));

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENT_NAME = 'dxmousewheel';
exports.name = EVENT_NAME;
var EVENT_NAMESPACE = 'dxWheel';
var NATIVE_EVENT_NAME = 'wheel';
var PIXEL_MODE = 0;
var DELTA_MUTLIPLIER = 30;
var wheel = {
  setup: function setup(element) {
    var $element = (0, _renderer.default)(element);

    _events_engine.default.on($element, (0, _utils.addNamespace)(NATIVE_EVENT_NAME, EVENT_NAMESPACE), wheel._wheelHandler.bind(wheel));
  },
  teardown: function teardown(element) {
    _events_engine.default.off(element, ".".concat(EVENT_NAMESPACE));
  },
  _wheelHandler: function _wheelHandler(e) {
    var _e$originalEvent = e.originalEvent,
        deltaMode = _e$originalEvent.deltaMode,
        deltaY = _e$originalEvent.deltaY,
        deltaX = _e$originalEvent.deltaX,
        deltaZ = _e$originalEvent.deltaZ;
    (0, _utils.fireEvent)({
      type: EVENT_NAME,
      originalEvent: e,
      delta: this._normalizeDelta(deltaY, deltaMode),
      deltaX: deltaX,
      deltaY: deltaY,
      deltaZ: deltaZ,
      deltaMode: deltaMode,
      pointerType: 'mouse'
    });
    e.stopPropagation();
  },
  _normalizeDelta: function _normalizeDelta(delta) {
    var deltaMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIXEL_MODE;

    if (deltaMode === PIXEL_MODE) {
      return -delta;
    } else {
      // Use multiplier to get rough delta value in px for the LINE or PAGE mode
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1392460
      return -DELTA_MUTLIPLIER * delta;
    }
  }
};
(0, _event_registrator.default)(EVENT_NAME, wheel);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/version.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.compare = compare;

function compare(x, y, maxLevel) {
  function normalizeArg(value) {
    if (typeof value === 'string') {
      return value.split('.');
    }

    if (typeof value === 'number') {
      return [value];
    }

    return value;
  }

  x = normalizeArg(x);
  y = normalizeArg(y);
  var length = Math.max(x.length, y.length);

  if (isFinite(maxLevel)) {
    length = Math.min(length, maxLevel);
  }

  for (var i = 0; i < length; i++) {
    var xItem = parseInt(x[i] || 0, 10);
    var yItem = parseInt(y[i] || 0, 10);

    if (xItem < yItem) {
      return -1;
    }

    if (xItem > yItem) {
      return 1;
    }
  }

  return 0;
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/core/emitter.feedback.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.inactive = exports.active = exports.lock = void 0;

var _class = _interopRequireDefault(__webpack_require__(11));

var _common = __webpack_require__(8);

var _dom = __webpack_require__(19);

var _devices = _interopRequireDefault(__webpack_require__(15));

var _utils = __webpack_require__(13);

var _pointer = _interopRequireDefault(__webpack_require__(27));

var _emitter = _interopRequireDefault(__webpack_require__(60));

var _emitter_registrator = _interopRequireDefault(__webpack_require__(61));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTIVE_EVENT_NAME = 'dxactive';
exports.active = ACTIVE_EVENT_NAME;
var INACTIVE_EVENT_NAME = 'dxinactive';
exports.inactive = INACTIVE_EVENT_NAME;
var ACTIVE_TIMEOUT = 30;
var INACTIVE_TIMEOUT = 400;

var FeedbackEvent = _class.default.inherit({
  ctor: function ctor(timeout, fire) {
    this._timeout = timeout;
    this._fire = fire;
  },
  start: function start() {
    var that = this;

    this._schedule(function () {
      that.force();
    });
  },
  _schedule: function _schedule(fn) {
    this.stop();
    this._timer = setTimeout(fn, this._timeout);
  },
  stop: function stop() {
    clearTimeout(this._timer);
  },
  force: function force() {
    if (this._fired) {
      return;
    }

    this.stop();

    this._fire();

    this._fired = true;
  },
  fired: function fired() {
    return this._fired;
  }
});

var activeFeedback;

var FeedbackEmitter = _emitter.default.inherit({
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    this._active = new FeedbackEvent(0, _common.noop);
    this._inactive = new FeedbackEvent(0, _common.noop);
  },
  configure: function configure(data, eventName) {
    switch (eventName) {
      case ACTIVE_EVENT_NAME:
        data.activeTimeout = data.timeout;
        break;

      case INACTIVE_EVENT_NAME:
        data.inactiveTimeout = data.timeout;
        break;
    }

    this.callBase(data);
  },
  start: function start(e) {
    if (activeFeedback) {
      var activeChildExists = (0, _dom.contains)(this.getElement().get(0), activeFeedback.getElement().get(0));
      var childJustActivated = !activeFeedback._active.fired();

      if (activeChildExists && childJustActivated) {
        this._cancel();

        return;
      }

      activeFeedback._inactive.force();
    }

    activeFeedback = this;

    this._initEvents(e);

    this._active.start();
  },
  _initEvents: function _initEvents(e) {
    var that = this;

    var eventTarget = this._getEmitterTarget(e);

    var mouseEvent = (0, _utils.isMouseEvent)(e);

    var isSimulator = _devices.default.isSimulator();

    var deferFeedback = isSimulator || !mouseEvent;
    var activeTimeout = (0, _common.ensureDefined)(this.activeTimeout, ACTIVE_TIMEOUT);
    var inactiveTimeout = (0, _common.ensureDefined)(this.inactiveTimeout, INACTIVE_TIMEOUT);
    this._active = new FeedbackEvent(deferFeedback ? activeTimeout : 0, function () {
      that._fireEvent(ACTIVE_EVENT_NAME, e, {
        target: eventTarget
      });
    });
    this._inactive = new FeedbackEvent(deferFeedback ? inactiveTimeout : 0, function () {
      that._fireEvent(INACTIVE_EVENT_NAME, e, {
        target: eventTarget
      });

      activeFeedback = null;
    });
  },
  cancel: function cancel(e) {
    this.end(e);
  },
  end: function end(e) {
    var skipTimers = e.type !== _pointer.default.up;

    if (skipTimers) {
      this._active.stop();
    } else {
      this._active.force();
    }

    this._inactive.start();

    if (skipTimers) {
      this._inactive.force();
    }
  },
  dispose: function dispose() {
    this._active.stop();

    this._inactive.stop();

    this.callBase();
  },
  lockInactive: function lockInactive() {
    this._active.force();

    this._inactive.stop();

    activeFeedback = null;

    this._cancel();

    return this._inactive.force.bind(this._inactive);
  }
});

FeedbackEmitter.lock = function (deferred) {
  var lockInactive = activeFeedback ? activeFeedback.lockInactive() : _common.noop;
  deferred.done(lockInactive);
};

(0, _emitter_registrator.default)({
  emitter: FeedbackEmitter,
  events: [ACTIVE_EVENT_NAME, INACTIVE_EVENT_NAME]
});
var lock = FeedbackEmitter.lock;
exports.lock = lock;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (events/hover.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.end = exports.start = void 0;

var _events_engine = _interopRequireDefault(__webpack_require__(10));

var _element_data = __webpack_require__(20);

var _class = _interopRequireDefault(__webpack_require__(11));

var _devices = _interopRequireDefault(__webpack_require__(15));

var _event_registrator = _interopRequireDefault(__webpack_require__(24));

var _utils = __webpack_require__(13);

var _pointer = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HOVERSTART_NAMESPACE = 'dxHoverStart';
var HOVERSTART = 'dxhoverstart';
exports.start = HOVERSTART;
var POINTERENTER_NAMESPACED_EVENT_NAME = (0, _utils.addNamespace)(_pointer.default.enter, HOVERSTART_NAMESPACE);
var HOVEREND_NAMESPACE = 'dxHoverEnd';
var HOVEREND = 'dxhoverend';
exports.end = HOVEREND;
var POINTERLEAVE_NAMESPACED_EVENT_NAME = (0, _utils.addNamespace)(_pointer.default.leave, HOVEREND_NAMESPACE);

var Hover = _class.default.inherit({
  noBubble: true,
  ctor: function ctor() {
    this._handlerArrayKeyPath = this._eventNamespace + '_HandlerStore';
  },
  setup: function setup(element) {
    (0, _element_data.data)(element, this._handlerArrayKeyPath, {});
  },
  add: function add(element, handleObj) {
    var that = this;

    var handler = function handler(e) {
      that._handler(e);
    };

    _events_engine.default.on(element, this._originalEventName, handleObj.selector, handler);

    (0, _element_data.data)(element, this._handlerArrayKeyPath)[handleObj.guid] = handler;
  },
  _handler: function _handler(e) {
    if ((0, _utils.isTouchEvent)(e) || _devices.default.isSimulator()) {
      return;
    }

    (0, _utils.fireEvent)({
      type: this._eventName,
      originalEvent: e,
      delegateTarget: e.delegateTarget
    });
  },
  remove: function remove(element, handleObj) {
    var handler = (0, _element_data.data)(element, this._handlerArrayKeyPath)[handleObj.guid];

    _events_engine.default.off(element, this._originalEventName, handleObj.selector, handler);
  },
  teardown: function teardown(element) {
    (0, _element_data.removeData)(element, this._handlerArrayKeyPath);
  }
});

var HoverStart = Hover.inherit({
  ctor: function ctor() {
    this._eventNamespace = HOVERSTART_NAMESPACE;
    this._eventName = HOVERSTART;
    this._originalEventName = POINTERENTER_NAMESPACED_EVENT_NAME;
    this.callBase();
  },
  _handler: function _handler(e) {
    var pointers = e.pointers || [];

    if (!pointers.length) {
      this.callBase(e);
    }
  }
});
var HoverEnd = Hover.inherit({
  ctor: function ctor() {
    this._eventNamespace = HOVEREND_NAMESPACE;
    this._eventName = HOVEREND;
    this._originalEventName = POINTERLEAVE_NAMESPACED_EVENT_NAME;
    this.callBase();
  }
});
/**
 * @name UI Events.dxhoverstart
 * @type eventType
 * @type_function_param1 event:event
 * @module events/hover
*/

/**
 * @name UI Events.dxhoverend
 * @type eventType
 * @type_function_param1 event:event
 * @module events/hover
*/

(0, _event_registrator.default)(HOVERSTART, new HoverStart());
(0, _event_registrator.default)(HOVEREND, new HoverEnd());


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* DevExtreme (core/utils/icon.js)
* Version: 20.2.1
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/


exports.getImageContainer = exports.getImageSourceType = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_CLASS = 'dx-icon';
var SVG_ICON_CLASS = 'dx-svg-icon';

var getImageSourceType = function getImageSourceType(source) {
  if (!source || typeof source !== 'string') {
    return false;
  }

  if (/^\s*<svg[^>]*>(.|\r\n|\r|\n)*?<\/svg>\s*$/i.test(source)) {
    return 'svg';
  }

  if (/data:.*base64|\.|[^<\s]\//.test(source)) {
    return 'image';
  }

  if (/^[\w-_]+$/.test(source)) {
    return 'dxIcon';
  }

  if (/^\s?([\w-_]\s?)+$/.test(source)) {
    return 'fontIcon';
  }

  return false;
};

exports.getImageSourceType = getImageSourceType;

var getImageContainer = function getImageContainer(source) {
  switch (getImageSourceType(source)) {
    case 'image':
      return (0, _renderer.default)('<img>').attr('src', source).addClass(ICON_CLASS);

    case 'fontIcon':
      return (0, _renderer.default)('<i>').addClass("".concat(ICON_CLASS, " ").concat(source));

    case 'dxIcon':
      return (0, _renderer.default)('<i>').addClass("".concat(ICON_CLASS, " ").concat(ICON_CLASS, "-").concat(source));

    case 'svg':
      return (0, _renderer.default)('<i>').addClass("".concat(ICON_CLASS, " ").concat(SVG_ICON_CLASS)).append(source);

    default:
      return null;
  }
};

exports.getImageContainer = getImageContainer;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DxButtonComponent", function() { return /* binding */ devextreme_angular_ui_button_DxButtonComponent; });
__webpack_require__.d(__webpack_exports__, "DxButtonModule", function() { return /* binding */ DxButtonModule; });

// CONCATENATED MODULE: ./devextreme-angular-renovated/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// EXTERNAL MODULE: external "@angular/common"
var common_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__(0);

// CONCATENATED MODULE: ./devextreme-angular-renovated/node_modules/@angular/platform-browser/fesm5/platform-browser.js
/**
 * @license Angular v7.2.16
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _DOM = null;
function getDOM() {
    return _DOM;
}
function setRootDomAdapter(adapter) {
    if (!_DOM) {
        _DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var DomAdapter = /** @class */ (function () {
    function DomAdapter() {
        this.resourceLoaderType = null;
    }
    Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */
        get: function () { return this._attrToPropMap; },
        set: function (value) { this._attrToPropMap = value; },
        enumerable: true,
        configurable: true
    });
    return DomAdapter;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var platform_browser_GenericBrowserDomAdapter = /** @class */ (function (_super) {
    __extends(GenericBrowserDomAdapter, _super);
    function GenericBrowserDomAdapter() {
        var _this = _super.call(this) || this;
        _this._animationPrefix = null;
        _this._transitionEnd = null;
        try {
            var element_1 = _this.createElement('div', document);
            if (_this.getStyle(element_1, 'animationName') != null) {
                _this._animationPrefix = '';
            }
            else {
                var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                for (var i = 0; i < domPrefixes.length; i++) {
                    if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                        _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                        break;
                    }
                }
            }
            var transEndEventNames_1 = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
            Object.keys(transEndEventNames_1).forEach(function (key) {
                if (_this.getStyle(element_1, key) != null) {
                    _this._transitionEnd = transEndEventNames_1[key];
                }
            });
        }
        catch (_a) {
            _this._animationPrefix = null;
            _this._transitionEnd = null;
        }
        return _this;
    }
    GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return el.getDistributedNodes(); };
    GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
        el.href = href == null ? baseUrl : baseUrl + '/../' + href;
    };
    GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
    GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
        return typeof document.body.createShadowRoot === 'function';
    };
    GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
    GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
    GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
        return this._animationPrefix != null && this._transitionEnd != null;
    };
    return GenericBrowserDomAdapter;
}(DomAdapter));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex',
};
var DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
var nodeContains;
if (core_["ɵglobal"]['Node']) {
    nodeContains = core_["ɵglobal"]['Node'].prototype.contains || function (node) {
        return !!(this.compareDocumentPosition(node) & 16);
    };
}
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
var platform_browser_BrowserDomAdapter = /** @class */ (function (_super) {
    __extends(BrowserDomAdapter, _super);
    function BrowserDomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
    BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
    BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
    BrowserDomAdapter.prototype.setProperty = function (el, name, value) { el[name] = value; };
    BrowserDomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
    BrowserDomAdapter.prototype.invoke = function (el, methodName, args) {
        var _a;
        (_a = el)[methodName].apply(_a, __spread(args));
    };
    // TODO(tbosch): move this into a separate environment class once we have it
    BrowserDomAdapter.prototype.logError = function (error) {
        if (window.console) {
            if (console.error) {
                console.error(error);
            }
            else {
                console.log(error);
            }
        }
    };
    BrowserDomAdapter.prototype.log = function (error) {
        if (window.console) {
            window.console.log && window.console.log(error);
        }
    };
    BrowserDomAdapter.prototype.logGroup = function (error) {
        if (window.console) {
            window.console.group && window.console.group(error);
        }
    };
    BrowserDomAdapter.prototype.logGroupEnd = function () {
        if (window.console) {
            window.console.groupEnd && window.console.groupEnd();
        }
    };
    Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
        get: function () { return _attrToPropMap; },
        enumerable: true,
        configurable: true
    });
    BrowserDomAdapter.prototype.contains = function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
    BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
    BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
    BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
    BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
        el.addEventListener(evt, listener, false);
        // Needed to follow Dart's subscription semantic, until fix of
        // https://code.google.com/p/dart/issues/detail?id=17406
        return function () { el.removeEventListener(evt, listener, false); };
    };
    BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
    BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
        var evt = this.getDefaultDocument().createEvent('MouseEvent');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    BrowserDomAdapter.prototype.createEvent = function (eventType) {
        var evt = this.getDefaultDocument().createEvent('Event');
        evt.initEvent(eventType, true, true);
        return evt;
    };
    BrowserDomAdapter.prototype.preventDefault = function (evt) {
        evt.preventDefault();
        evt.returnValue = false;
    };
    BrowserDomAdapter.prototype.isPrevented = function (evt) {
        return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
    };
    BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
    BrowserDomAdapter.prototype.getTemplateContent = function (el) {
        return 'content' in el && this.isTemplateElement(el) ? el.content : null;
    };
    BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
    BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
    BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
    BrowserDomAdapter.prototype.type = function (node) { return node.type; };
    BrowserDomAdapter.prototype.content = function (node) {
        if (this.hasProperty(node, 'content')) {
            return node.content;
        }
        else {
            return node;
        }
    };
    BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
    BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
    BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
    BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
    BrowserDomAdapter.prototype.childNodesAsList = function (el) {
        var childNodes = el.childNodes;
        var res = new Array(childNodes.length);
        for (var i = 0; i < childNodes.length; i++) {
            res[i] = childNodes[i];
        }
        return res;
    };
    BrowserDomAdapter.prototype.clearNodes = function (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    };
    BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
    BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
    BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
    BrowserDomAdapter.prototype.remove = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        return node;
    };
    BrowserDomAdapter.prototype.insertBefore = function (parent, ref, node) { parent.insertBefore(node, ref); };
    BrowserDomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) {
        nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
    };
    BrowserDomAdapter.prototype.insertAfter = function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
    BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
    BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
    BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
    BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
    BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
    BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
    BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
    BrowserDomAdapter.prototype.createComment = function (text) { return this.getDefaultDocument().createComment(text); };
    BrowserDomAdapter.prototype.createTemplate = function (html) {
        var t = this.getDefaultDocument().createElement('template');
        t.innerHTML = html;
        return t;
    };
    BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    };
    BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElementNS(ns, tagName);
    };
    BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createTextNode(text);
    };
    BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
        doc = doc || this.getDefaultDocument();
        var el = doc.createElement('SCRIPT');
        el.setAttribute(attrName, attrValue);
        return el;
    };
    BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
        doc = doc || this.getDefaultDocument();
        var style = doc.createElement('style');
        this.appendChild(style, this.createTextNode(css, doc));
        return style;
    };
    BrowserDomAdapter.prototype.createShadowRoot = function (el) { return el.createShadowRoot(); };
    BrowserDomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
    BrowserDomAdapter.prototype.getHost = function (el) { return el.host; };
    BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
    BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
        return element.getElementsByClassName(name);
    };
    BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
        return element.getElementsByTagName(name);
    };
    BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
    BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
    BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
    BrowserDomAdapter.prototype.hasClass = function (element, className) {
        return element.classList.contains(className);
    };
    BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
        element.style[styleName] = styleValue;
    };
    BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
        // IE requires '' instead of null
        // see https://github.com/angular/angular/issues/7916
        element.style[stylename] = '';
    };
    BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
    BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
        var value = this.getStyle(element, styleName) || '';
        return styleValue ? value == styleValue : value.length > 0;
    };
    BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
    BrowserDomAdapter.prototype.attributeMap = function (element) {
        var res = new Map();
        var elAttrs = element.attributes;
        for (var i = 0; i < elAttrs.length; i++) {
            var attrib = elAttrs.item(i);
            res.set(attrib.name, attrib.value);
        }
        return res;
    };
    BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
        return element.hasAttribute(attribute);
    };
    BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
        return element.hasAttributeNS(ns, attribute);
    };
    BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
        return element.getAttribute(attribute);
    };
    BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
        return element.getAttributeNS(ns, name);
    };
    BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
    BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
        element.setAttributeNS(ns, name, value);
    };
    BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
    BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
        element.removeAttributeNS(ns, name);
    };
    BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
    BrowserDomAdapter.prototype.createHtmlDocument = function () {
        return document.implementation.createHTMLDocument('fakeTitle');
    };
    BrowserDomAdapter.prototype.getDefaultDocument = function () { return document; };
    BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
        try {
            return el.getBoundingClientRect();
        }
        catch (_a) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
    };
    BrowserDomAdapter.prototype.getTitle = function (doc) { return doc.title; };
    BrowserDomAdapter.prototype.setTitle = function (doc, newTitle) { doc.title = newTitle || ''; };
    BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
        if (this.isElementNode(n)) {
            return n.matches && n.matches(selector) ||
                n.msMatchesSelector && n.msMatchesSelector(selector) ||
                n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
        }
        return false;
    };
    BrowserDomAdapter.prototype.isTemplateElement = function (el) {
        return this.isElementNode(el) && el.nodeName === 'TEMPLATE';
    };
    BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
    BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
    BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
        return node.shadowRoot != null && node instanceof HTMLElement;
    };
    BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
    BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
    BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
    BrowserDomAdapter.prototype.getHref = function (el) { return el.getAttribute('href'); };
    BrowserDomAdapter.prototype.getEventKey = function (event) {
        var key = event.key;
        if (key == null) {
            key = event.keyIdentifier;
            // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
            // Safari cf
            // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
            if (key == null) {
                return 'Unidentified';
            }
            if (key.startsWith('U+')) {
                key = String.fromCharCode(parseInt(key.substring(2), 16));
                if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                    // There is a bug in Chrome for numeric keypad keys:
                    // https://code.google.com/p/chromium/issues/detail?id=155654
                    // 1, 2, 3 ... are reported as A, B, C ...
                    key = _chromeNumKeyPadMap[key];
                }
            }
        }
        return _keyMap[key] || key;
    };
    BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
        if (target === 'window') {
            return window;
        }
        if (target === 'document') {
            return doc;
        }
        if (target === 'body') {
            return doc.body;
        }
        return null;
    };
    BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
    BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
    BrowserDomAdapter.prototype.getBaseHref = function (doc) {
        var href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    };
    BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
    BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
    BrowserDomAdapter.prototype.setData = function (element, name, value) {
        this.setAttribute(element, 'data-' + name, value);
    };
    BrowserDomAdapter.prototype.getData = function (element, name) {
        return this.getAttribute(element, 'data-' + name);
    };
    BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
    // TODO(tbosch): move this into a separate environment class once we have it
    BrowserDomAdapter.prototype.supportsWebAnimation = function () {
        return typeof Element.prototype['animate'] === 'function';
    };
    BrowserDomAdapter.prototype.performanceNow = function () {
        // performance.now() is not available in all browsers, see
        // http://caniuse.com/#search=performance.now
        return window.performance && window.performance.now ? window.performance.now() :
            new Date().getTime();
    };
    BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
    BrowserDomAdapter.prototype.getCookie = function (name) { return Object(common_["ɵparseCookieValue"])(document.cookie, name); };
    BrowserDomAdapter.prototype.setCookie = function (name, value) {
        // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
        // not clear other cookies.
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    };
    return BrowserDomAdapter;
}(platform_browser_GenericBrowserDomAdapter));
var baseElement = null;
function getBaseElementHref() {
    if (!baseElement) {
        baseElement = document.querySelector('base');
        if (!baseElement) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode;
function relativePath(url) {
    if (!urlParsingNode) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
        '/' + urlParsingNode.pathname;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 *
 * @deprecated import from `@angular/common` instead.
 * @publicApi
 */
var DOCUMENT$1 = common_["DOCUMENT"];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function supportsState() {
    return !!window.history.pushState;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 */
var platform_browser_BrowserPlatformLocation = /** @class */ (function (_super) {
    __extends(BrowserPlatformLocation, _super);
    function BrowserPlatformLocation(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */
    BrowserPlatformLocation.prototype._init = function () {
        this.location = getDOM().getLocation();
        this._history = getDOM().getHistory();
    };
    BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return getDOM().getBaseHref(this._doc); };
    BrowserPlatformLocation.prototype.onPopState = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
    };
    BrowserPlatformLocation.prototype.onHashChange = function (fn) {
        getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
    };
    Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
        get: function () { return this.location.pathname; },
        set: function (newPath) { this.location.pathname = newPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
        get: function () { return this.location.search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
        get: function () { return this.location.hash; },
        enumerable: true,
        configurable: true
    });
    BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
        if (supportsState()) {
            this._history.pushState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
        if (supportsState()) {
            this._history.replaceState(state, title, url);
        }
        else {
            this.location.hash = url;
        }
    };
    BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
    BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
    BrowserPlatformLocation = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], BrowserPlatformLocation);
    return BrowserPlatformLocation;
}(common_["PlatformLocation"]));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
var TRANSITION_ID = new core_["InjectionToken"]('TRANSITION_ID');
function appInitializerFactory(transitionId, document, injector) {
    return function () {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(core_["ApplicationInitStatus"]).donePromise.then(function () {
            var dom = getDOM();
            var styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
            styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                .forEach(function (el) { return dom.remove(el); });
        });
    };
}
var SERVER_TRANSITION_PROVIDERS = [
    {
        provide: core_["APP_INITIALIZER"],
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT$1, core_["Injector"]],
        multi: true
    },
];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var platform_browser_BrowserGetTestability = /** @class */ (function () {
    function BrowserGetTestability() {
    }
    BrowserGetTestability.init = function () { Object(core_["setTestabilityGetter"])(new BrowserGetTestability()); };
    BrowserGetTestability.prototype.addToWindow = function (registry) {
        core_["ɵglobal"]['getAngularTestability'] = function (elem, findInAncestors) {
            if (findInAncestors === void 0) { findInAncestors = true; }
            var testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return testability;
        };
        core_["ɵglobal"]['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
        core_["ɵglobal"]['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
        var whenAllStable = function (callback /** TODO #9100 */) {
            var testabilities = core_["ɵglobal"]['getAllAngularTestabilities']();
            var count = testabilities.length;
            var didWork = false;
            var decrement = function (didWork_ /** TODO #9100 */) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability /** TODO #9100 */) {
                testability.whenStable(decrement);
            });
        };
        if (!core_["ɵglobal"]['frameworkStabilizers']) {
            core_["ɵglobal"]['frameworkStabilizers'] = [];
        }
        core_["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
    };
    BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        var t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
    };
    return BrowserGetTestability;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for angularJS (via `goog.provide('ng....')`).
        var ng = core_["ɵglobal"]['ng'] = core_["ɵglobal"]['ng'] || {};
        ng[name] = value;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CORE_TOKENS = {
    'ApplicationRef': core_["ApplicationRef"],
    'NgZone': core_["NgZone"],
};
var INSPECT_GLOBAL_NAME = 'probe';
var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
function inspectNativeElement(element) {
    return Object(core_["getDebugNode"])(element);
}
function _createNgProbe(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, __assign({}, CORE_TOKENS, _ngProbeTokensToMap(coreTokens || [])));
    return function () { return inspectNativeElement; };
}
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
var ELEMENT_PROBE_PROVIDERS = [
    {
        provide: core_["APP_INITIALIZER"],
        useFactory: _createNgProbe,
        deps: [
            [core_["NgProbeToken"], new core_["Optional"]()],
        ],
        multi: true,
    },
];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
var EVENT_MANAGER_PLUGINS = new core_["InjectionToken"]('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
var platform_browser_EventManager = /** @class */ (function () {
    /**
     * Initializes an instance of the event-manager service.
     */
    function EventManager(plugins, _zone) {
        var _this = this;
        this._zone = _zone;
        this._eventNameToPlugin = new Map();
        plugins.forEach(function (p) { return p.manager = _this; });
        this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    EventManager.prototype.addEventListener = function (element, eventName, handler) {
        var plugin = this._findPluginFor(eventName);
        return plugin.addEventListener(element, eventName, handler);
    };
    /**
     * Registers a global handler for an event in a target view.
     *
     * @param target A target for global event notifications. One of "window", "document", or "body".
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns A callback function that can be used to remove the handler.
     */
    EventManager.prototype.addGlobalEventListener = function (target, eventName, handler) {
        var plugin = this._findPluginFor(eventName);
        return plugin.addGlobalEventListener(target, eventName, handler);
    };
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    EventManager.prototype.getZone = function () { return this._zone; };
    /** @internal */
    EventManager.prototype._findPluginFor = function (eventName) {
        var plugin = this._eventNameToPlugin.get(eventName);
        if (plugin) {
            return plugin;
        }
        var plugins = this._plugins;
        for (var i = 0; i < plugins.length; i++) {
            var plugin_1 = plugins[i];
            if (plugin_1.supports(eventName)) {
                this._eventNameToPlugin.set(eventName, plugin_1);
                return plugin_1;
            }
        }
        throw new Error("No event manager plugin found for event " + eventName);
    };
    EventManager = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(EVENT_MANAGER_PLUGINS)),
        __metadata("design:paramtypes", [Array, core_["NgZone"]])
    ], EventManager);
    return EventManager;
}());
var EventManagerPlugin = /** @class */ (function () {
    function EventManagerPlugin(_doc) {
        this._doc = _doc;
    }
    EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
        var target = getDOM().getGlobalEventTarget(this._doc, element);
        if (!target) {
            throw new Error("Unsupported event target " + target + " for event " + eventName);
        }
        return this.addEventListener(target, eventName, handler);
    };
    return EventManagerPlugin;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var platform_browser_SharedStylesHost = /** @class */ (function () {
    function SharedStylesHost() {
        /** @internal */
        this._stylesSet = new Set();
    }
    SharedStylesHost.prototype.addStyles = function (styles) {
        var _this = this;
        var additions = new Set();
        styles.forEach(function (style) {
            if (!_this._stylesSet.has(style)) {
                _this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    };
    SharedStylesHost.prototype.onStylesAdded = function (additions) { };
    SharedStylesHost.prototype.getAllStyles = function () { return Array.from(this._stylesSet); };
    SharedStylesHost = __decorate([
        Object(core_["Injectable"])()
    ], SharedStylesHost);
    return SharedStylesHost;
}());
var platform_browser_DomSharedStylesHost = /** @class */ (function (_super) {
    __extends(DomSharedStylesHost, _super);
    function DomSharedStylesHost(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        _this._hostNodes = new Set();
        _this._styleNodes = new Set();
        _this._hostNodes.add(_doc.head);
        return _this;
    }
    DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
        var _this = this;
        styles.forEach(function (style) {
            var styleEl = _this._doc.createElement('style');
            styleEl.textContent = style;
            _this._styleNodes.add(host.appendChild(styleEl));
        });
    };
    DomSharedStylesHost.prototype.addHost = function (hostNode) {
        this._addStylesToHost(this._stylesSet, hostNode);
        this._hostNodes.add(hostNode);
    };
    DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
    DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
        var _this = this;
        this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
    };
    DomSharedStylesHost.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
    DomSharedStylesHost = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], DomSharedStylesHost);
    return DomSharedStylesHost;
}(platform_browser_SharedStylesHost));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NAMESPACE_URIS = {
    'svg': 'http://www.w3.org/2000/svg',
    'xhtml': 'http://www.w3.org/1999/xhtml',
    'xlink': 'http://www.w3.org/1999/xlink',
    'xml': 'http://www.w3.org/XML/1998/namespace',
    'xmlns': 'http://www.w3.org/2000/xmlns/',
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = '%COMP%';
var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function flattenStyles(compId, styles, target) {
    for (var i = 0; i < styles.length; i++) {
        var style = styles[i];
        if (Array.isArray(style)) {
            flattenStyles(compId, style, target);
        }
        else {
            style = style.replace(COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
function decoratePreventDefault(eventHandler) {
    return function (event) {
        var allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            event.preventDefault();
            event.returnValue = false;
        }
    };
}
var platform_browser_DomRendererFactory2 = /** @class */ (function () {
    function DomRendererFactory2(eventManager, sharedStylesHost, appId) {
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.appId = appId;
        this.rendererByCompId = new Map();
        this.defaultRenderer = new platform_browser_DefaultDomRenderer2(eventManager);
    }
    DomRendererFactory2.prototype.createRenderer = function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case core_["ViewEncapsulation"].Emulated: {
                var renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new platform_browser_EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type, this.appId);
                    this.rendererByCompId.set(type.id, renderer);
                }
                renderer.applyToHost(element);
                return renderer;
            }
            case core_["ViewEncapsulation"].Native:
            case core_["ViewEncapsulation"].ShadowDom:
                return new platform_browser_ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var styles = flattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    DomRendererFactory2.prototype.begin = function () { };
    DomRendererFactory2.prototype.end = function () { };
    DomRendererFactory2 = __decorate([
        Object(core_["Injectable"])(),
        __param(2, Object(core_["Inject"])(core_["APP_ID"])),
        __metadata("design:paramtypes", [platform_browser_EventManager, platform_browser_DomSharedStylesHost, String])
    ], DomRendererFactory2);
    return DomRendererFactory2;
}());
var platform_browser_DefaultDomRenderer2 = /** @class */ (function () {
    function DefaultDomRenderer2(eventManager) {
        this.eventManager = eventManager;
        this.data = Object.create(null);
    }
    DefaultDomRenderer2.prototype.destroy = function () { };
    DefaultDomRenderer2.prototype.createElement = function (name, namespace) {
        if (namespace) {
            return document.createElementNS(NAMESPACE_URIS[namespace], name);
        }
        return document.createElement(name);
    };
    DefaultDomRenderer2.prototype.createComment = function (value) { return document.createComment(value); };
    DefaultDomRenderer2.prototype.createText = function (value) { return document.createTextNode(value); };
    DefaultDomRenderer2.prototype.appendChild = function (parent, newChild) { parent.appendChild(newChild); };
    DefaultDomRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
        if (parent) {
            parent.insertBefore(newChild, refChild);
        }
    };
    DefaultDomRenderer2.prototype.removeChild = function (parent, oldChild) {
        if (parent) {
            parent.removeChild(oldChild);
        }
    };
    DefaultDomRenderer2.prototype.selectRootElement = function (selectorOrNode, preserveContent) {
        var el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
            selectorOrNode;
        if (!el) {
            throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
        }
        if (!preserveContent) {
            el.textContent = '';
        }
        return el;
    };
    DefaultDomRenderer2.prototype.parentNode = function (node) { return node.parentNode; };
    DefaultDomRenderer2.prototype.nextSibling = function (node) { return node.nextSibling; };
    DefaultDomRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
        if (namespace) {
            name = namespace + ":" + name;
            var namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    };
    DefaultDomRenderer2.prototype.removeAttribute = function (el, name, namespace) {
        if (namespace) {
            var namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                el.removeAttribute(namespace + ":" + name);
            }
        }
        else {
            el.removeAttribute(name);
        }
    };
    DefaultDomRenderer2.prototype.addClass = function (el, name) { el.classList.add(name); };
    DefaultDomRenderer2.prototype.removeClass = function (el, name) { el.classList.remove(name); };
    DefaultDomRenderer2.prototype.setStyle = function (el, style, value, flags) {
        if (flags & core_["RendererStyleFlags2"].DashCase) {
            el.style.setProperty(style, value, !!(flags & core_["RendererStyleFlags2"].Important) ? 'important' : '');
        }
        else {
            el.style[style] = value;
        }
    };
    DefaultDomRenderer2.prototype.removeStyle = function (el, style, flags) {
        if (flags & core_["RendererStyleFlags2"].DashCase) {
            el.style.removeProperty(style);
        }
        else {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            el.style[style] = '';
        }
    };
    DefaultDomRenderer2.prototype.setProperty = function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        el[name] = value;
    };
    DefaultDomRenderer2.prototype.setValue = function (node, value) { node.nodeValue = value; };
    DefaultDomRenderer2.prototype.listen = function (target, event, callback) {
        checkNoSyntheticProp(event, 'listener');
        if (typeof target === 'string') {
            return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
        }
        return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
    };
    return DefaultDomRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var platform_browser_EmulatedEncapsulationDomRenderer2 = /** @class */ (function (_super) {
    __extends(EmulatedEncapsulationDomRenderer2, _super);
    function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component, appId) {
        var _this = _super.call(this, eventManager) || this;
        _this.component = component;
        var styles = flattenStyles(appId + '-' + component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = shimContentAttribute(appId + '-' + component.id);
        _this.hostAttr = shimHostAttribute(appId + '-' + component.id);
        return _this;
    }
    EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
    EmulatedEncapsulationDomRenderer2.prototype.createElement = function (parent, name) {
        var el = _super.prototype.createElement.call(this, parent, name);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationDomRenderer2;
}(platform_browser_DefaultDomRenderer2));
var platform_browser_ShadowDomRenderer = /** @class */ (function (_super) {
    __extends(ShadowDomRenderer, _super);
    function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
        var _this = _super.call(this, eventManager) || this;
        _this.sharedStylesHost = sharedStylesHost;
        _this.hostEl = hostEl;
        _this.component = component;
        if (component.encapsulation === core_["ViewEncapsulation"].ShadowDom) {
            _this.shadowRoot = hostEl.attachShadow({ mode: 'open' });
        }
        else {
            _this.shadowRoot = hostEl.createShadowRoot();
        }
        _this.sharedStylesHost.addHost(_this.shadowRoot);
        var styles = flattenStyles(component.id, component.styles, []);
        for (var i = 0; i < styles.length; i++) {
            var styleEl = document.createElement('style');
            styleEl.textContent = styles[i];
            _this.shadowRoot.appendChild(styleEl);
        }
        return _this;
    }
    ShadowDomRenderer.prototype.nodeOrShadowRoot = function (node) { return node === this.hostEl ? this.shadowRoot : node; };
    ShadowDomRenderer.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
    ShadowDomRenderer.prototype.appendChild = function (parent, newChild) {
        return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
    };
    ShadowDomRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
        return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
    };
    ShadowDomRenderer.prototype.removeChild = function (parent, oldChild) {
        return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
    };
    ShadowDomRenderer.prototype.parentNode = function (node) {
        return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
    };
    return ShadowDomRenderer;
}(platform_browser_DefaultDomRenderer2));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ɵ0 = function (v) {
    return '__zone_symbol__' + v;
};
/**
 * Detect if Zone is present. If it is then use simple zone aware 'addEventListener'
 * since Angular can do much more
 * efficient bookkeeping than Zone can, because we have additional information. This speeds up
 * addEventListener by 3x.
 */
var __symbol__ = (typeof Zone !== 'undefined') && Zone['__symbol__'] || ɵ0;
var ADD_EVENT_LISTENER = __symbol__('addEventListener');
var REMOVE_EVENT_LISTENER = __symbol__('removeEventListener');
var symbolNames = {};
var FALSE = 'FALSE';
var ANGULAR = 'ANGULAR';
var NATIVE_ADD_LISTENER = 'addEventListener';
var NATIVE_REMOVE_LISTENER = 'removeEventListener';
// use the same symbol string which is used in zone.js
var stopSymbol = '__zone_symbol__propagationStopped';
var stopMethodSymbol = '__zone_symbol__stopImmediatePropagation';
var blackListedEvents = (typeof Zone !== 'undefined') && Zone[__symbol__('BLACK_LISTED_EVENTS')];
var blackListedMap;
if (blackListedEvents) {
    blackListedMap = {};
    blackListedEvents.forEach(function (eventName) { blackListedMap[eventName] = eventName; });
}
var isBlackListedEvent = function (eventName) {
    if (!blackListedMap) {
        return false;
    }
    return blackListedMap.hasOwnProperty(eventName);
};
// a global listener to handle all dom event,
// so we do not need to create a closure every time
var globalListener = function (event) {
    var symbolName = symbolNames[event.type];
    if (!symbolName) {
        return;
    }
    var taskDatas = this[symbolName];
    if (!taskDatas) {
        return;
    }
    var args = [event];
    if (taskDatas.length === 1) {
        // if taskDatas only have one element, just invoke it
        var taskData = taskDatas[0];
        if (taskData.zone !== Zone.current) {
            // only use Zone.run when Zone.current not equals to stored zone
            return taskData.zone.run(taskData.handler, this, args);
        }
        else {
            return taskData.handler.apply(this, args);
        }
    }
    else {
        // copy tasks as a snapshot to avoid event handlers remove
        // itself or others
        var copiedTasks = taskDatas.slice();
        for (var i = 0; i < copiedTasks.length; i++) {
            // if other listener call event.stopImmediatePropagation
            // just break
            if (event[stopSymbol] === true) {
                break;
            }
            var taskData = copiedTasks[i];
            if (taskData.zone !== Zone.current) {
                // only use Zone.run when Zone.current not equals to stored zone
                taskData.zone.run(taskData.handler, this, args);
            }
            else {
                taskData.handler.apply(this, args);
            }
        }
    }
};
var platform_browser_DomEventsPlugin = /** @class */ (function (_super) {
    __extends(DomEventsPlugin, _super);
    function DomEventsPlugin(doc, ngZone, platformId) {
        var _this = _super.call(this, doc) || this;
        _this.ngZone = ngZone;
        if (!platformId || !Object(common_["isPlatformServer"])(platformId)) {
            _this.patchEvent();
        }
        return _this;
    }
    DomEventsPlugin.prototype.patchEvent = function () {
        if (typeof Event === 'undefined' || !Event || !Event.prototype) {
            return;
        }
        if (Event.prototype[stopMethodSymbol]) {
            // already patched by zone.js
            return;
        }
        var delegate = Event.prototype[stopMethodSymbol] =
            Event.prototype.stopImmediatePropagation;
        Event.prototype.stopImmediatePropagation = function () {
            if (this) {
                this[stopSymbol] = true;
            }
            // should call native delegate in case
            // in some environment part of the application
            // will not use the patched Event
            delegate && delegate.apply(this, arguments);
        };
    };
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    DomEventsPlugin.prototype.supports = function (eventName) { return true; };
    DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var _this = this;
        var zoneJsLoaded = element[ADD_EVENT_LISTENER];
        var callback = handler;
        // if zonejs is loaded and current zone is not ngZone
        // we keep Zone.current on target for later restoration.
        if (zoneJsLoaded && (!core_["NgZone"].isInAngularZone() || isBlackListedEvent(eventName))) {
            var symbolName = symbolNames[eventName];
            if (!symbolName) {
                symbolName = symbolNames[eventName] = __symbol__(ANGULAR + eventName + FALSE);
            }
            var taskDatas = element[symbolName];
            var globalListenerRegistered = taskDatas && taskDatas.length > 0;
            if (!taskDatas) {
                taskDatas = element[symbolName] = [];
            }
            var zone = isBlackListedEvent(eventName) ? Zone.root : Zone.current;
            if (taskDatas.length === 0) {
                taskDatas.push({ zone: zone, handler: callback });
            }
            else {
                var callbackRegistered = false;
                for (var i = 0; i < taskDatas.length; i++) {
                    if (taskDatas[i].handler === callback) {
                        callbackRegistered = true;
                        break;
                    }
                }
                if (!callbackRegistered) {
                    taskDatas.push({ zone: zone, handler: callback });
                }
            }
            if (!globalListenerRegistered) {
                element[ADD_EVENT_LISTENER](eventName, globalListener, false);
            }
        }
        else {
            element[NATIVE_ADD_LISTENER](eventName, callback, false);
        }
        return function () { return _this.removeEventListener(element, eventName, callback); };
    };
    DomEventsPlugin.prototype.removeEventListener = function (target, eventName, callback) {
        var underlyingRemove = target[REMOVE_EVENT_LISTENER];
        // zone.js not loaded, use native removeEventListener
        if (!underlyingRemove) {
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        var symbolName = symbolNames[eventName];
        var taskDatas = symbolName && target[symbolName];
        if (!taskDatas) {
            // addEventListener not using patched version
            // just call native removeEventListener
            return target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
        // fix issue 20532, should be able to remove
        // listener which was added inside of ngZone
        var found = false;
        for (var i = 0; i < taskDatas.length; i++) {
            // remove listener from taskDatas if the callback equals
            if (taskDatas[i].handler === callback) {
                found = true;
                taskDatas.splice(i, 1);
                break;
            }
        }
        if (found) {
            if (taskDatas.length === 0) {
                // all listeners are removed, we can remove the globalListener from target
                underlyingRemove.apply(target, [eventName, globalListener, false]);
            }
        }
        else {
            // not found in taskDatas, the callback may be added inside of ngZone
            // use native remove listener to remove the callback
            target[NATIVE_REMOVE_LISTENER].apply(target, [eventName, callback, false]);
        }
    };
    DomEventsPlugin = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __param(2, Object(core_["Optional"])()), __param(2, Object(core_["Inject"])(core_["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, core_["NgZone"], Object])
    ], DomEventsPlugin);
    return DomEventsPlugin;
}(EventManagerPlugin));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported HammerJS recognizer event names.
 */
var EVENT_NAMES = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true,
};
/**
 * DI token for providing [HammerJS](http://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @publicApi
 */
var HAMMER_GESTURE_CONFIG = new core_["InjectionToken"]('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
var HAMMER_LOADER = new core_["InjectionToken"]('HammerLoader');
/**
 * An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
var platform_browser_HammerGestureConfig = /** @class */ (function () {
    function HammerGestureConfig() {
        /**
         * A set of supported event names for gestures to be used in Angular.
         * Angular supports all built-in recognizers, as listed in
         * [HammerJS documentation](http://hammerjs.github.io/).
         */
        this.events = [];
        /**
        * Maps gesture event names to a set of configuration options
        * that specify overrides to the default values for specific properties.
        *
        * The key is a supported event name to be configured,
        * and the options object contains a set of properties, with override values
        * to be applied to the named recognizer event.
        * For example, to disable recognition of the rotate event, specify
        *  `{"rotate": {"enable": false}}`.
        *
        * Properties that are not present take the HammerJS default values.
        * For information about which properties are supported for which events,
        * and their allowed and default values, see
        * [HammerJS documentation](http://hammerjs.github.io/).
        *
        */
        this.overrides = {};
    }
    /**
     * Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    HammerGestureConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, this.options);
        mc.get('pinch').set({ enable: true });
        mc.get('rotate').set({ enable: true });
        for (var eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    HammerGestureConfig = __decorate([
        Object(core_["Injectable"])()
    ], HammerGestureConfig);
    return HammerGestureConfig;
}());
var platform_browser_HammerGesturesPlugin = /** @class */ (function (_super) {
    __extends(HammerGesturesPlugin, _super);
    function HammerGesturesPlugin(doc, _config, console, loader) {
        var _this = _super.call(this, doc) || this;
        _this._config = _config;
        _this.console = console;
        _this.loader = loader;
        return _this;
    }
    HammerGesturesPlugin.prototype.supports = function (eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!window.Hammer && !this.loader) {
            this.console.warn("The \"" + eventName + "\" event cannot be bound because Hammer.JS is not " +
                "loaded and no custom loader has been specified.");
            return false;
        }
        return true;
    };
    HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var _this = this;
        var zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        // If Hammer is not present but a loader is specified, we defer adding the event listener
        // until Hammer is loaded.
        if (!window.Hammer && this.loader) {
            // This `addEventListener` method returns a function to remove the added listener.
            // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
            // than remove anything.
            var cancelRegistration_1 = false;
            var deregister_1 = function () { cancelRegistration_1 = true; };
            this.loader()
                .then(function () {
                // If Hammer isn't actually loaded when the custom loader resolves, give up.
                if (!window.Hammer) {
                    _this.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present.");
                    deregister_1 = function () { };
                    return;
                }
                if (!cancelRegistration_1) {
                    // Now that Hammer is loaded and the listener is being loaded for real,
                    // the deregistration function changes from canceling registration to removal.
                    deregister_1 = _this.addEventListener(element, eventName, handler);
                }
            })
                .catch(function () {
                _this.console.warn("The \"" + eventName + "\" event cannot be bound because the custom " +
                    "Hammer.JS loader failed.");
                deregister_1 = function () { };
            });
            // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
            // can change the behavior of `deregister` once the listener is added. Using a closure in
            // this way allows us to avoid any additional data structures to track listener removal.
            return function () { deregister_1(); };
        }
        return zone.runOutsideAngular(function () {
            // Creating the manager bind events, must be done outside of angular
            var mc = _this._config.buildHammer(element);
            var callback = function (eventObj) {
                zone.runGuarded(function () { handler(eventObj); });
            };
            mc.on(eventName, callback);
            return function () {
                mc.off(eventName, callback);
                // destroy mc to prevent memory leak
                if (typeof mc.destroy === 'function') {
                    mc.destroy();
                }
            };
        });
    };
    HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
    HammerGesturesPlugin = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __param(1, Object(core_["Inject"])(HAMMER_GESTURE_CONFIG)),
        __param(3, Object(core_["Optional"])()), __param(3, Object(core_["Inject"])(HAMMER_LOADER)),
        __metadata("design:paramtypes", [Object, platform_browser_HammerGestureConfig, core_["ɵConsole"], Object])
    ], HammerGesturesPlugin);
    return HammerGesturesPlugin;
}(EventManagerPlugin));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Defines supported modifiers for key events.
 */
var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
var ɵ0$1 = function (event) { return event.altKey; }, ɵ1$1 = function (event) { return event.ctrlKey; }, ɵ2$1 = function (event) { return event.metaKey; }, ɵ3 = function (event) { return event.shiftKey; };
/**
 * Retrieves modifiers from key-event objects.
 */
var MODIFIER_KEY_GETTERS = {
    'alt': ɵ0$1,
    'control': ɵ1$1,
    'meta': ɵ2$1,
    'shift': ɵ3
};
/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
var platform_browser_KeyEventsPlugin = /** @class */ (function (_super) {
    __extends(KeyEventsPlugin, _super);
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    function KeyEventsPlugin(doc) {
        return _super.call(this, doc) || this;
    }
    KeyEventsPlugin_1 = KeyEventsPlugin;
    /**
      * Reports whether a named key event is supported.
      * @param eventName The event name to query.
      * @return True if the named key event is supported.
     */
    KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin_1.parseEventName(eventName) != null; };
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
    */
    KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var parsedEvent = KeyEventsPlugin_1.parseEventName(eventName);
        var outsideHandler = KeyEventsPlugin_1.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(function () {
            return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
        });
    };
    KeyEventsPlugin.parseEventName = function (eventName) {
        var parts = eventName.toLowerCase().split('.');
        var domEventName = parts.shift();
        if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
            return null;
        }
        var key = KeyEventsPlugin_1._normalizeKey(parts.pop());
        var fullKey = '';
        MODIFIER_KEYS.forEach(function (modifierName) {
            var index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + '.';
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            // returning null instead of throwing to let another plugin process the event
            return null;
        }
        var result = {};
        result['domEventName'] = domEventName;
        result['fullKey'] = fullKey;
        return result;
    };
    KeyEventsPlugin.getEventFullKey = function (event) {
        var fullKey = '';
        var key = getDOM().getEventKey(event);
        key = key.toLowerCase();
        if (key === ' ') {
            key = 'space'; // for readability
        }
        else if (key === '.') {
            key = 'dot'; // because '.' is used as a separator in event names
        }
        MODIFIER_KEYS.forEach(function (modifierName) {
            if (modifierName != key) {
                var modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    fullKey += modifierName + '.';
                }
            }
        });
        fullKey += key;
        return fullKey;
    };
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
        return function (event /** TODO #9100 */) {
            if (KeyEventsPlugin_1.getEventFullKey(event) === fullKey) {
                zone.runGuarded(function () { return handler(event); });
            }
        };
    };
    /** @internal */
    KeyEventsPlugin._normalizeKey = function (keyName) {
        // TODO: switch to a Map if the mapping grows too much
        switch (keyName) {
            case 'esc':
                return 'escape';
            default:
                return keyName;
        }
    };
    var KeyEventsPlugin_1;
    KeyEventsPlugin = KeyEventsPlugin_1 = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], KeyEventsPlugin);
    return KeyEventsPlugin;
}(EventManagerPlugin));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](http://g.co/ng/security).
 *
 * @publicApi
 */
var DomSanitizer = /** @class */ (function () {
    function DomSanitizer() {
    }
    return DomSanitizer;
}());
var platform_browser_DomSanitizerImpl = /** @class */ (function (_super) {
    __extends(DomSanitizerImpl, _super);
    function DomSanitizerImpl(_doc) {
        var _this = _super.call(this) || this;
        _this._doc = _doc;
        return _this;
    }
    DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case core_["SecurityContext"].NONE:
                return value;
            case core_["SecurityContext"].HTML:
                if (value instanceof platform_browser_SafeHtmlImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'HTML');
                return Object(core_["ɵ_sanitizeHtml"])(this._doc, String(value));
            case core_["SecurityContext"].STYLE:
                if (value instanceof platform_browser_SafeStyleImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Style');
                return Object(core_["ɵ_sanitizeStyle"])(value);
            case core_["SecurityContext"].SCRIPT:
                if (value instanceof platform_browser_SafeScriptImpl)
                    return value.changingThisBreaksApplicationSecurity;
                this.checkNotSafeValue(value, 'Script');
                throw new Error('unsafe value used in a script context');
            case core_["SecurityContext"].URL:
                if (value instanceof platform_browser_SafeResourceUrlImpl || value instanceof platform_browser_SafeUrlImpl) {
                    // Allow resource URLs in URL contexts, they are strictly more trusted.
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'URL');
                return Object(core_["ɵ_sanitizeUrl"])(String(value));
            case core_["SecurityContext"].RESOURCE_URL:
                if (value instanceof platform_browser_SafeResourceUrlImpl) {
                    return value.changingThisBreaksApplicationSecurity;
                }
                this.checkNotSafeValue(value, 'ResourceURL');
                throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
            default:
                throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
        }
    };
    DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
        if (value instanceof SafeValueImpl) {
            throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                "(see http://g.co/ng/security#xss)");
        }
    };
    DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new platform_browser_SafeHtmlImpl(value); };
    DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new platform_browser_SafeStyleImpl(value); };
    DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new platform_browser_SafeScriptImpl(value); };
    DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new platform_browser_SafeUrlImpl(value); };
    DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
        return new platform_browser_SafeResourceUrlImpl(value);
    };
    DomSanitizerImpl = __decorate([
        Object(core_["Injectable"])(),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], DomSanitizerImpl);
    return DomSanitizerImpl;
}(DomSanitizer));
var SafeValueImpl = /** @class */ (function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
        // empty
    }
    SafeValueImpl.prototype.toString = function () {
        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)";
    };
    return SafeValueImpl;
}());
var platform_browser_SafeHtmlImpl = /** @class */ (function (_super) {
    __extends(SafeHtmlImpl, _super);
    function SafeHtmlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
    return SafeHtmlImpl;
}(SafeValueImpl));
var platform_browser_SafeStyleImpl = /** @class */ (function (_super) {
    __extends(SafeStyleImpl, _super);
    function SafeStyleImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
    return SafeStyleImpl;
}(SafeValueImpl));
var platform_browser_SafeScriptImpl = /** @class */ (function (_super) {
    __extends(SafeScriptImpl, _super);
    function SafeScriptImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
    return SafeScriptImpl;
}(SafeValueImpl));
var platform_browser_SafeUrlImpl = /** @class */ (function (_super) {
    __extends(SafeUrlImpl, _super);
    function SafeUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
    return SafeUrlImpl;
}(SafeValueImpl));
var platform_browser_SafeResourceUrlImpl = /** @class */ (function (_super) {
    __extends(SafeResourceUrlImpl, _super);
    function SafeResourceUrlImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
    return SafeResourceUrlImpl;
}(SafeValueImpl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: core_["PLATFORM_ID"], useValue: common_["ɵPLATFORM_BROWSER_ID"] },
    { provide: core_["PLATFORM_INITIALIZER"], useValue: initDomAdapter, multi: true },
    { provide: common_["PlatformLocation"], useClass: platform_browser_BrowserPlatformLocation, deps: [DOCUMENT$1] },
    { provide: DOCUMENT$1, useFactory: _document, deps: [] },
];
/**
 * @security Replacing built-in sanitization providers exposes the application to XSS risks.
 * Attacker-controlled data introduced by an unsanitized provider could expose your
 * application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
 * @publicApi
 */
var BROWSER_SANITIZATION_PROVIDERS = [
    { provide: core_["Sanitizer"], useExisting: DomSanitizer },
    { provide: DomSanitizer, useClass: platform_browser_DomSanitizerImpl, deps: [DOCUMENT$1] },
];
/**
 * @publicApi
 */
var platformBrowser = Object(core_["createPlatformFactory"])(core_["platformCore"], 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
function initDomAdapter() {
    platform_browser_BrowserDomAdapter.makeCurrent();
    platform_browser_BrowserGetTestability.init();
}
function errorHandler() {
    return new core_["ErrorHandler"]();
}
function _document() {
    return document;
}
var BROWSER_MODULE_PROVIDERS = [
    BROWSER_SANITIZATION_PROVIDERS,
    { provide: core_["ɵAPP_ROOT"], useValue: true },
    { provide: core_["ErrorHandler"], useFactory: errorHandler, deps: [] },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: platform_browser_DomEventsPlugin,
        multi: true,
        deps: [DOCUMENT$1, core_["NgZone"], core_["PLATFORM_ID"]]
    },
    { provide: EVENT_MANAGER_PLUGINS, useClass: platform_browser_KeyEventsPlugin, multi: true, deps: [DOCUMENT$1] },
    {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: platform_browser_HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT$1, HAMMER_GESTURE_CONFIG, core_["ɵConsole"], [new core_["Optional"](), HAMMER_LOADER]]
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: platform_browser_HammerGestureConfig, deps: [] },
    {
        provide: platform_browser_DomRendererFactory2,
        useClass: platform_browser_DomRendererFactory2,
        deps: [platform_browser_EventManager, platform_browser_DomSharedStylesHost, core_["APP_ID"]]
    },
    { provide: core_["RendererFactory2"], useExisting: platform_browser_DomRendererFactory2 },
    { provide: platform_browser_SharedStylesHost, useExisting: platform_browser_DomSharedStylesHost },
    { provide: platform_browser_DomSharedStylesHost, useClass: platform_browser_DomSharedStylesHost, deps: [DOCUMENT$1] },
    { provide: core_["Testability"], useClass: core_["Testability"], deps: [core_["NgZone"]] },
    { provide: platform_browser_EventManager, useClass: platform_browser_EventManager, deps: [EVENT_MANAGER_PLUGINS, core_["NgZone"]] },
    ELEMENT_PROBE_PROVIDERS,
];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
var platform_browser_BrowserModule = /** @class */ (function () {
    function BrowserModule(parentModule) {
        if (parentModule) {
            throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }
    }
    BrowserModule_1 = BrowserModule;
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    BrowserModule.withServerTransition = function (params) {
        return {
            ngModule: BrowserModule_1,
            providers: [
                { provide: core_["APP_ID"], useValue: params.appId },
                { provide: TRANSITION_ID, useExisting: core_["APP_ID"] },
                SERVER_TRANSITION_PROVIDERS,
            ],
        };
    };
    var BrowserModule_1;
    BrowserModule = BrowserModule_1 = __decorate([
        Object(core_["NgModule"])({ providers: BROWSER_MODULE_PROVIDERS, exports: [common_["CommonModule"], core_["ApplicationModule"]] }),
        __param(0, Object(core_["Optional"])()), __param(0, Object(core_["SkipSelf"])()), __param(0, Object(core_["Inject"])(BrowserModule_1)),
        __metadata("design:paramtypes", [Object])
    ], BrowserModule);
    return BrowserModule;
}());

/**
 * Factory to create Meta service.
 */
function createMeta() {
    return new platform_browser_Meta(Object(core_["inject"])(DOCUMENT$1));
}
/**
 * A service that can be used to get and add meta tags.
 *
 * @publicApi
 */
var platform_browser_Meta = /** @class */ (function () {
    function Meta(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
    }
    Meta.prototype.addTag = function (tag, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    };
    Meta.prototype.addTags = function (tags, forceCreation) {
        var _this = this;
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tags)
            return [];
        return tags.reduce(function (result, tag) {
            if (tag) {
                result.push(_this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    };
    Meta.prototype.getTag = function (attrSelector) {
        if (!attrSelector)
            return null;
        return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
    };
    Meta.prototype.getTags = function (attrSelector) {
        if (!attrSelector)
            return [];
        var list /*NodeList*/ = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
        return list ? [].slice.call(list) : [];
    };
    Meta.prototype.updateTag = function (tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        var meta = this.getTag(selector);
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    };
    Meta.prototype.removeTag = function (attrSelector) { this.removeTagElement(this.getTag(attrSelector)); };
    Meta.prototype.removeTagElement = function (meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    };
    Meta.prototype._getOrCreateElement = function (meta, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!forceCreation) {
            var selector = this._parseSelector(meta);
            var elem = this.getTag(selector);
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        var element = this._dom.createElement('meta');
        this._setMetaElementAttributes(meta, element);
        var head = this._dom.getElementsByTagName(this._doc, 'head')[0];
        this._dom.appendChild(head, element);
        return element;
    };
    Meta.prototype._setMetaElementAttributes = function (tag, el) {
        var _this = this;
        Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
        return el;
    };
    Meta.prototype._parseSelector = function (tag) {
        var attr = tag.name ? 'name' : 'property';
        return attr + "=\"" + tag[attr] + "\"";
    };
    Meta.prototype._containsAttributes = function (tag, elem) {
        var _this = this;
        return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
    };
    Meta.ngInjectableDef = Object(core_["defineInjectable"])({ factory: createMeta, token: Meta, providedIn: "root" });
    Meta = __decorate([
        Object(core_["Injectable"])({ providedIn: 'root', useFactory: createMeta, deps: [] }),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], Meta);
    return Meta;
}());

/**
 * Factory to create Title service.
 */
function createTitle() {
    return new platform_browser_Title(Object(core_["inject"])(DOCUMENT$1));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
var platform_browser_Title = /** @class */ (function () {
    function Title(_doc) {
        this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    Title.prototype.getTitle = function () { return getDOM().getTitle(this._doc); };
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    Title.prototype.setTitle = function (newTitle) { getDOM().setTitle(this._doc, newTitle); };
    Title.ngInjectableDef = Object(core_["defineInjectable"])({ factory: createTitle, token: Title, providedIn: "root" });
    Title = __decorate([
        Object(core_["Injectable"])({ providedIn: 'root', useFactory: createTitle, deps: [] }),
        __param(0, Object(core_["Inject"])(DOCUMENT$1)),
        __metadata("design:paramtypes", [Object])
    ], Title);
    return Title;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var win = typeof window !== 'undefined' && window || {};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ChangeDetectionPerfRecord = /** @class */ (function () {
    function ChangeDetectionPerfRecord(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
    return ChangeDetectionPerfRecord;
}());
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
var platform_browser_AngularProfiler = /** @class */ (function () {
    function AngularProfiler(ref) {
        this.appRef = ref.injector.get(core_["ApplicationRef"]);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    AngularProfiler.prototype.timeChangeDetection = function (config) {
        var record = config && config['record'];
        var profileName = 'Change Detection';
        // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
        var isProfilerAvailable = win.console.profile != null;
        if (record && isProfilerAvailable) {
            win.console.profile(profileName);
        }
        var start = getDOM().performanceNow();
        var numTicks = 0;
        while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        var end = getDOM().performanceNow();
        if (record && isProfilerAvailable) {
            win.console.profileEnd(profileName);
        }
        var msPerTick = (end - start) / numTicks;
        win.console.log("ran " + numTicks + " change detection cycles");
        win.console.log(msPerTick.toFixed(2) + " ms per check");
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    };
    return AngularProfiler;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new platform_browser_AngularProfiler(ref));
    return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function escapeHtml(text) {
    var escapedText = {
        '&': '&a;',
        '"': '&q;',
        '\'': '&s;',
        '<': '&l;',
        '>': '&g;',
    };
    return text.replace(/[&"'<>]/g, function (s) { return escapedText[s]; });
}
function unescapeHtml(text) {
    var unescapedText = {
        '&a;': '&',
        '&q;': '"',
        '&s;': '\'',
        '&l;': '<',
        '&g;': '>',
    };
    return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
function makeStateKey(key) {
    return key;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * @publicApi
 */
var platform_browser_TransferState = /** @class */ (function () {
    function TransferState() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    TransferState_1 = TransferState;
    /** @internal */
    TransferState.init = function (initState) {
        var transferState = new TransferState_1();
        transferState.store = initState;
        return transferState;
    };
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    TransferState.prototype.get = function (key, defaultValue) {
        return this.store[key] !== undefined ? this.store[key] : defaultValue;
    };
    /**
     * Set the value corresponding to a key.
     */
    TransferState.prototype.set = function (key, value) { this.store[key] = value; };
    /**
     * Remove a key from the store.
     */
    TransferState.prototype.remove = function (key) { delete this.store[key]; };
    /**
     * Test whether a key exists in the store.
     */
    TransferState.prototype.hasKey = function (key) { return this.store.hasOwnProperty(key); };
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    TransferState.prototype.onSerialize = function (key, callback) {
        this.onSerializeCallbacks[key] = callback;
    };
    /**
     * Serialize the current state of the store to JSON.
     */
    TransferState.prototype.toJson = function () {
        // Call the onSerialize callbacks and put those values into the store.
        for (var key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    };
    var TransferState_1;
    TransferState = TransferState_1 = __decorate([
        Object(core_["Injectable"])()
    ], TransferState);
    return TransferState;
}());
function initTransferState(doc, appId) {
    // Locate the script tag with the JSON data transferred from the server.
    // The id of the script tag is set to the Angular appId + 'state'.
    var script = doc.getElementById(appId + '-state');
    var initialState = {};
    if (script && script.textContent) {
        try {
            initialState = JSON.parse(unescapeHtml(script.textContent));
        }
        catch (e) {
            console.warn('Exception while restoring TransferState for app ' + appId, e);
        }
    }
    return platform_browser_TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
var platform_browser_BrowserTransferStateModule = /** @class */ (function () {
    function BrowserTransferStateModule() {
    }
    BrowserTransferStateModule = __decorate([
        Object(core_["NgModule"])({
            providers: [{ provide: platform_browser_TransferState, useFactory: initTransferState, deps: [DOCUMENT$1, core_["APP_ID"]] }],
        })
    ], BrowserTransferStateModule);
    return BrowserTransferStateModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
var By = /** @class */ (function () {
    function By() {
    }
    /**
     * Match all elements.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    By.all = function () { return function (debugElement) { return true; }; };
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    By.css = function (selector) {
        return function (debugElement) {
            return debugElement.nativeElement != null ?
                getDOM().elementMatches(debugElement.nativeElement, selector) :
                false;
        };
    };
    /**
     * Match elements that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    By.directive = function (type) {
        return function (debugElement) { return debugElement.providerTokens.indexOf(type) !== -1; };
    };
    return By;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
var VERSION = new core_["Version"]('7.2.16');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform-browser.js.map

// EXTERNAL MODULE: ./devextreme-angular-renovated/node_modules/devextreme/ui/button.js
var ui_button = __webpack_require__(62);
var button_default = /*#__PURE__*/__webpack_require__.n(ui_button);

// EXTERNAL MODULE: external "./devextreme-angular-core.js"
var external_devextreme_angular_core_js_ = __webpack_require__(9);

// CONCATENATED MODULE: ./devextreme-angular-renovated/npm/dist/fesm2015/devextreme-angular-ui-button.js






/*!
 * devextreme-angular
 * Version: 20.1.3
 * Build date: Tue Aug 25 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */
/** @name dxButton */
let devextreme_angular_ui_button_DxButtonComponent = class DxButtonComponent extends external_devextreme_angular_core_js_["DxComponent"] {
    constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
        super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);
        this._createEventEmitters([
            { subscribe: 'click', emit: 'onClick' },
            { subscribe: 'contentReady', emit: 'onContentReady' },
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'elementAttrChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'heightChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'iconChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'stylingModeChange' },
            { emit: 'tabIndexChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' },
            { emit: 'visibleChange' },
            { emit: 'widthChange' }
        ]);
        optionHost.setHost(this);
    }
    /** @name Widget.Options.accessKey */
    get accessKey() {
        return this._getOption('accessKey');
    }
    set accessKey(value) {
        this._setOption('accessKey', value);
    }
    /** @name dxButton.Options.activeStateEnabled */
    get activeStateEnabled() {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value) {
        this._setOption('activeStateEnabled', value);
    }
    /** @name Widget.Options.disabled */
    get disabled() {
        return this._getOption('disabled');
    }
    set disabled(value) {
        this._setOption('disabled', value);
    }
    /** @name DOMComponent.Options.elementAttr */
    get elementAttr() {
        return this._getOption('elementAttr');
    }
    set elementAttr(value) {
        this._setOption('elementAttr', value);
    }
    /** @name dxButton.Options.focusStateEnabled */
    get focusStateEnabled() {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value) {
        this._setOption('focusStateEnabled', value);
    }
    /** @name DOMComponent.Options.height */
    get height() {
        return this._getOption('height');
    }
    set height(value) {
        this._setOption('height', value);
    }
    /** @name Widget.Options.hint */
    get hint() {
        return this._getOption('hint');
    }
    set hint(value) {
        this._setOption('hint', value);
    }
    /** @name dxButton.Options.hoverStateEnabled */
    get hoverStateEnabled() {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value) {
        this._setOption('hoverStateEnabled', value);
    }
    /** @name dxButton.Options.icon */
    get icon() {
        return this._getOption('icon');
    }
    set icon(value) {
        this._setOption('icon', value);
    }
    /** @name DOMComponent.Options.rtlEnabled */
    get rtlEnabled() {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value) {
        this._setOption('rtlEnabled', value);
    }
    /** @name dxButton.Options.stylingMode */
    get stylingMode() {
        return this._getOption('stylingMode');
    }
    set stylingMode(value) {
        this._setOption('stylingMode', value);
    }
    /** @name Widget.Options.tabIndex */
    get tabIndex() {
        return this._getOption('tabIndex');
    }
    set tabIndex(value) {
        this._setOption('tabIndex', value);
    }
    /** @name dxButton.Options.template */
    get template() {
        return this._getOption('template');
    }
    set template(value) {
        this._setOption('template', value);
    }
    /** @name dxButton.Options.text */
    get text() {
        return this._getOption('text');
    }
    set text(value) {
        this._setOption('text', value);
    }
    /** @name dxButton.Options.type */
    get type() {
        return this._getOption('type');
    }
    set type(value) {
        this._setOption('type', value);
    }
    /** @name dxButton.Options.useSubmitBehavior */
    get useSubmitBehavior() {
        return this._getOption('useSubmitBehavior');
    }
    set useSubmitBehavior(value) {
        this._setOption('useSubmitBehavior', value);
    }
    /** @name dxButton.Options.validationGroup */
    get validationGroup() {
        return this._getOption('validationGroup');
    }
    set validationGroup(value) {
        this._setOption('validationGroup', value);
    }
    /** @name Widget.Options.visible */
    get visible() {
        return this._getOption('visible');
    }
    set visible(value) {
        this._setOption('visible', value);
    }
    /** @name DOMComponent.Options.width */
    get width() {
        return this._getOption('width');
    }
    set width(value) {
        this._setOption('width', value);
    }
    _createInstance(element, options) {
        return new button_default.a(element, options);
    }
    ngOnDestroy() {
        this._destroyWidget();
    }
};
devextreme_angular_ui_button_DxButtonComponent.ctorParameters = () => [
    { type: core_["ElementRef"] },
    { type: core_["NgZone"] },
    { type: external_devextreme_angular_core_js_["DxTemplateHost"] },
    { type: external_devextreme_angular_core_js_["WatcherHelper"] },
    { type: external_devextreme_angular_core_js_["NestedOptionHost"] },
    { type: platform_browser_TransferState },
    { type: undefined, decorators: [{ type: core_["Inject"], args: [core_["PLATFORM_ID"],] }] }
];
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "accessKey", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "activeStateEnabled", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "disabled", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "elementAttr", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "focusStateEnabled", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "height", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "hint", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "hoverStateEnabled", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "icon", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "rtlEnabled", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "stylingMode", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "tabIndex", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "template", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "text", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "type", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "useSubmitBehavior", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "validationGroup", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "visible", null);
__decorate([
    Object(core_["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "width", null);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "onClick", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "onContentReady", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "onDisposing", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "onInitialized", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "onOptionChanged", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "accessKeyChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "activeStateEnabledChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "disabledChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "elementAttrChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "focusStateEnabledChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "heightChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "hintChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "hoverStateEnabledChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "iconChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "rtlEnabledChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "stylingModeChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "tabIndexChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "templateChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "textChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "typeChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "useSubmitBehaviorChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "validationGroupChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "visibleChange", void 0);
__decorate([
    Object(core_["Output"])(),
    __metadata("design:type", core_["EventEmitter"])
], devextreme_angular_ui_button_DxButtonComponent.prototype, "widthChange", void 0);
devextreme_angular_ui_button_DxButtonComponent = __decorate([
    Object(core_["Component"])({
        selector: 'dx-button',
        template: '<ng-content></ng-content>',
        providers: [
            external_devextreme_angular_core_js_["DxTemplateHost"],
            external_devextreme_angular_core_js_["WatcherHelper"],
            external_devextreme_angular_core_js_["NestedOptionHost"]
        ]
    }),
    __param(6, Object(core_["Inject"])(core_["PLATFORM_ID"])),
    __metadata("design:paramtypes", [core_["ElementRef"], core_["NgZone"], external_devextreme_angular_core_js_["DxTemplateHost"],
        external_devextreme_angular_core_js_["WatcherHelper"],
        external_devextreme_angular_core_js_["NestedOptionHost"],
        platform_browser_TransferState, Object])
], devextreme_angular_ui_button_DxButtonComponent);
let DxButtonModule = class DxButtonModule {
};
DxButtonModule = __decorate([
    Object(core_["NgModule"])({
        imports: [
            external_devextreme_angular_core_js_["DxIntegrationModule"],
            external_devextreme_angular_core_js_["DxTemplateModule"],
            platform_browser_BrowserTransferStateModule
        ],
        declarations: [
            devextreme_angular_ui_button_DxButtonComponent
        ],
        exports: [
            devextreme_angular_ui_button_DxButtonComponent,
            external_devextreme_angular_core_js_["DxTemplateModule"]
        ]
    })
], DxButtonModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=devextreme-angular-ui-button.js.map


/***/ })
/******/ ]);