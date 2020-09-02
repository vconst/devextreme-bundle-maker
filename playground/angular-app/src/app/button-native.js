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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _dependency_injector = _interopRequireDefault(__webpack_require__(16));

var _common = __webpack_require__(18);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.extend = exports.extendFromObject = void 0;

var _type = __webpack_require__(0);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.getNavigator = exports.getCurrentScreenFactor = exports.defaultScreenFactorFunc = exports.hasProperty = exports.getWindow = exports.hasWindow = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _renderer_base = _interopRequireDefault(__webpack_require__(47));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _renderer_base.default.get();

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.addNamespace = exports.getChar = exports.normalizeKeyName = exports.fireEvent = exports.createEvent = exports.setEventFixMethod = exports.needSkipEvent = exports.stopEventsSkipping = exports.forceSkipEvents = exports.hasTouches = exports.eventDelta = exports.eventData = exports.isFakeClickEvent = exports.isKeyboardEvent = exports.isTouchEvent = exports.isDxMouseWheelEvent = exports.isMouseEvent = exports.isPointerEvent = exports.eventSource = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _add_namespace = _interopRequireDefault(__webpack_require__(62));

var _events_engine = _interopRequireWildcard(__webpack_require__(8));

var _iterator = __webpack_require__(3);

var _extend = __webpack_require__(2);

var _selectors = __webpack_require__(37);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _event_registrator_callbacks = _interopRequireDefault(__webpack_require__(32));

var _extend = __webpack_require__(2);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _window = __webpack_require__(4);

var _dependency_injector = _interopRequireDefault(__webpack_require__(16));

var _type = __webpack_require__(0);

var _callbacks = _interopRequireDefault(__webpack_require__(7));

var _errors = _interopRequireDefault(__webpack_require__(11));

var _weak_map = _interopRequireDefault(__webpack_require__(26));

var _hook_touch_props = _interopRequireDefault(__webpack_require__(51));

var _call_once = _interopRequireDefault(__webpack_require__(12));

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
eventsEngine.passiveEventHandlersSupported = passiveEventHandlersSupported; ///#DEBUG

eventsEngine.elementDataMap = elementDataMap;
eventsEngine.detectPassiveEventHandlersSupport = detectPassiveEventHandlersSupport; ///#ENDDEBUG

var _default = eventsEngine;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _window = __webpack_require__(4);

var _extend = __webpack_require__(2);

var _type = __webpack_require__(0);

var _iterator = __webpack_require__(3);

var _errors = _interopRequireDefault(__webpack_require__(11));

var _callbacks = _interopRequireDefault(__webpack_require__(7));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _resize_callbacks = _interopRequireDefault(__webpack_require__(54));

var _events_strategy = __webpack_require__(55);

var _storage = __webpack_require__(56);

var _view_port = __webpack_require__(35);

var _config = _interopRequireDefault(__webpack_require__(17));

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
      ///#DEBUG
      if ((0, _type.isPlainObject)(forceDevice)) {
        (0, _extend.extend)(this._realDevice, forceDevice);
        return;
      } ///#ENDDEBUG


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
}); ///#DEBUG


devices.Devices = Devices; ///#ENDDEBUG

var _default = devices;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _errors = _interopRequireDefault(__webpack_require__(11));

var _type = __webpack_require__(0);

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
      } ///#DEBUG


      if (name in classObj.prototype) {
        throw _errors.default.Error('E0002', name);
      } ///#ENDDEBUG


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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _error = _interopRequireDefault(__webpack_require__(30));

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _dependency_injector = _interopRequireDefault(__webpack_require__(16));

var _window = __webpack_require__(4);

var _call_once = _interopRequireDefault(__webpack_require__(12));

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.groupBy = exports.find = exports.merge = exports.normalizeIndexes = exports.removeDuplicates = exports.intersection = exports.inArray = exports.wrapToArray = exports.isEmpty = void 0;

var _type = __webpack_require__(0);

var _iterator = __webpack_require__(3);

var _object = __webpack_require__(27);

var _config = _interopRequireDefault(__webpack_require__(17));

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
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = _default;

var _extend = __webpack_require__(2);

var _type = __webpack_require__(0);

var _iterator = __webpack_require__(3);

var _class = _interopRequireDefault(__webpack_require__(10));

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _extend = _interopRequireDefault(__webpack_require__(2));

var _errors = _interopRequireDefault(__webpack_require__(11));

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
module.exports = exports.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.equalByValue = exports.grep = exports.asyncNoop = exports.noop = exports.applyServerDecimalSeparator = exports.escapeRegExp = exports.getKeyHash = exports.pairToObject = exports.denormalizeKey = exports.normalizeKey = exports.splitPair = exports.findBestMatches = exports.deferUpdater = exports.deferRenderer = exports.deferUpdate = exports.deferRender = exports.executeAsync = exports.ensureDefined = void 0;

var _config = _interopRequireDefault(__webpack_require__(17));

var _guid = _interopRequireDefault(__webpack_require__(50));

var _deferred = __webpack_require__(23);

var _data = __webpack_require__(31);

var _iterator = __webpack_require__(3);

var _type = __webpack_require__(0);

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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _iterator = __webpack_require__(3);

var _event_registrator_callbacks = _interopRequireDefault(__webpack_require__(32));

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _browser = _interopRequireDefault(__webpack_require__(40));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _class = _interopRequireDefault(__webpack_require__(10));

var _utils = __webpack_require__(6);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.getDataStrategy = getDataStrategy;
exports.data = data;
exports.beforeCleanData = beforeCleanData;
exports.afterCleanData = afterCleanData;
exports.cleanData = cleanData;
exports.removeData = removeData;
exports.cleanDataRecursive = cleanDataRecursive;
exports.setDataStrategy = exports.strategyChanging = void 0;

var _weak_map = _interopRequireDefault(__webpack_require__(26));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _memorized_callbacks = _interopRequireDefault(__webpack_require__(33));

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.fromPromise = fromPromise;
exports.setStrategy = setStrategy;
exports.Deferred = Deferred;
exports.when = when;

var _type = __webpack_require__(0);

var _extend = __webpack_require__(2);

var _callbacks = _interopRequireDefault(__webpack_require__(7));

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


exports.setHeight = exports.setWidth = exports.normalizeStyleProp = exports.stylePropPrefix = exports.styleProp = void 0;

var _inflector = __webpack_require__(52);

var _call_once = _interopRequireDefault(__webpack_require__(12));

var _type = __webpack_require__(0);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.default = void 0;

var support = _interopRequireWildcard(__webpack_require__(70));

var _iterator = __webpack_require__(3);

var _browser = _interopRequireDefault(__webpack_require__(40));

var _devices = _interopRequireDefault(__webpack_require__(9));

var _event_registrator = _interopRequireDefault(__webpack_require__(20));

var _touch = _interopRequireDefault(__webpack_require__(41));

var _mspointer = _interopRequireDefault(__webpack_require__(71));

var _mouse = _interopRequireDefault(__webpack_require__(43));

var _mouse_and_touch = _interopRequireDefault(__webpack_require__(72));

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
}; ///#DEBUG

pointer.getStrategy = getStrategy; ///#ENDDEBUG

var _default = pointer;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _array = __webpack_require__(14);

var _window = __webpack_require__(4);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.deepExtendArraySafe = exports.orderEach = exports.clone = void 0;

var _type = __webpack_require__(0);

var _variable_wrapper = _interopRequireDefault(__webpack_require__(28));

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _console = __webpack_require__(29);

var _dependency_injector = _interopRequireDefault(__webpack_require__(16));

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.debug = exports.logger = void 0;

var _type = __webpack_require__(0);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = _default;

var _extend = __webpack_require__(2);

var _console = __webpack_require__(29);

var _string = _interopRequireDefault(__webpack_require__(48));

var _version = _interopRequireDefault(__webpack_require__(49));

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.toComparable = exports.compileSetter = exports.compileGetter = void 0;

var _errors = _interopRequireDefault(__webpack_require__(11));

var _class = _interopRequireDefault(__webpack_require__(10));

var _object = __webpack_require__(27);

var _type = __webpack_require__(0);

var _iterator = __webpack_require__(3);

var _variable_wrapper = _interopRequireDefault(__webpack_require__(28));

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _memorized_callbacks = _interopRequireDefault(__webpack_require__(33));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _memorized_callbacks.default();

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _iterator = __webpack_require__(3);

var _callbacks = _interopRequireDefault(__webpack_require__(7));

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.isTablePart = exports.parseHTML = void 0;

var _array = __webpack_require__(14);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.originalViewPort = originalViewPort;
exports.changeCallback = exports.value = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _callbacks = _interopRequireDefault(__webpack_require__(7));

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.keyboard = exports.click = exports.dxClick = exports.focus = exports.visibility = exports.hover = exports.resize = exports.active = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _keyboard_processor = _interopRequireDefault(__webpack_require__(61));

var _utils = __webpack_require__(6);

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


exports.focused = exports.tabbable = exports.focusable = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.combineClasses = combineClasses;

function combineClasses(classesMap) {
  return Object.keys(classesMap).filter(function (p) {
    return classesMap[p];
  }).join(" ");
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.getImageContainer = exports.getImageSourceType = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _extend = __webpack_require__(2);

var _window = __webpack_require__(4);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _devices = _interopRequireDefault(__webpack_require__(9));

var _extend = __webpack_require__(2);

var _iterator = __webpack_require__(3);

var _base = _interopRequireDefault(__webpack_require__(21));

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _iterator = __webpack_require__(3);

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _extend = __webpack_require__(2);

var _base = _interopRequireDefault(__webpack_require__(21));

var _observer = _interopRequireDefault(__webpack_require__(42));

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(17));

var _core = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b, _c;

var BaseWidgetProps = function BaseWidgetProps() {
  _classCallCheck(this, BaseWidgetProps);

  this.accessKey = null;
  this.activeStateEnabled = false;
  this.disabled = false;
  this.focusStateEnabled = false;
  this.hoverStateEnabled = false;
  this.onClick = new _core.EventEmitter();
  this.onContentReady = new _core.EventEmitter();
  this.onKeyDown = new _core.EventEmitter();
  this.rtlEnabled = (0, _config.default)().rtlEnabled;
  this.tabIndex = 0;
  this.visible = true;
};

exports.default = BaseWidgetProps;

__decorate([(0, _core.Input)(), __metadata("design:type", String)], BaseWidgetProps.prototype, "accessKey", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "activeStateEnabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "disabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "focusStateEnabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Object)], BaseWidgetProps.prototype, "height", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], BaseWidgetProps.prototype, "hint", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "hoverStateEnabled", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_a = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _a : Object)], BaseWidgetProps.prototype, "onClick", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_b = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _b : Object)], BaseWidgetProps.prototype, "onContentReady", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_c = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _c : Object)], BaseWidgetProps.prototype, "onKeyDown", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "rtlEnabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Number)], BaseWidgetProps.prototype, "tabIndex", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], BaseWidgetProps.prototype, "visible", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Object)], BaseWidgetProps.prototype, "width", void 0);

module.exports = exports.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.defaultOptions = defaultOptions;
exports.default = exports.DxButtonModule = exports.Button = exports.defaultOptionRules = exports.ButtonProps = void 0;

var _utils = __webpack_require__(46);

var _devices = _interopRequireDefault(__webpack_require__(9));

var _themes = _interopRequireDefault(__webpack_require__(57));

var _short = __webpack_require__(36);

var _combine_classes = __webpack_require__(38);

var _icon = __webpack_require__(39);

var _icon2 = __webpack_require__(63);

var _ink_ripple = __webpack_require__(64);

var _widget = __webpack_require__(66);

var _base_props = _interopRequireDefault(__webpack_require__(44));

var _core = __webpack_require__(15);

var _common = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b, _c, _d, _e, _f, _g, _h;

var stylingModes = ["outlined", "text", "contained"];

var getCssClasses = function getCssClasses(model) {
  var _classesMap;

  var icon = model.icon,
      iconPosition = model.iconPosition,
      stylingMode = model.stylingMode,
      text = model.text,
      type = model.type;
  var isValidStylingMode = stylingMode && stylingModes.indexOf(stylingMode) !== -1;
  var classesMap = (_classesMap = {
    "dx-button": true
  }, _defineProperty(_classesMap, "dx-button-mode-".concat(isValidStylingMode ? stylingMode : "contained"), true), _defineProperty(_classesMap, "dx-button-".concat(type || "normal"), true), _defineProperty(_classesMap, "dx-button-has-text", !!text), _defineProperty(_classesMap, "dx-button-has-icon", !!icon), _defineProperty(_classesMap, "dx-button-icon-right", iconPosition !== "left"), _classesMap);
  return (0, _combine_classes.combineClasses)(classesMap);
};

var ButtonProps = /*#__PURE__*/function (_BaseWidgetProps) {
  _inherits(ButtonProps, _BaseWidgetProps);

  var _super = _createSuper(ButtonProps);

  function ButtonProps() {
    var _this;

    _classCallCheck(this, ButtonProps);

    _this = _super.apply(this, arguments);
    _this.activeStateEnabled = true;
    _this.hoverStateEnabled = true;
    _this.icon = "";
    _this.iconPosition = "left";
    _this.onClick = new _core.EventEmitter();
    _this.onSubmit = new _core.EventEmitter();
    _this.template = null;
    _this.text = "";
    _this.useInkRipple = false;
    _this.useSubmitBehavior = false;
    _this.validationGroup = undefined;
    return _this;
  }

  _createClass(ButtonProps, [{
    key: "children",
    get: function get() {
      var _this$__slotChildren, _this$__slotChildren$;

      return (_this$__slotChildren = this.__slotChildren) === null || _this$__slotChildren === void 0 ? void 0 : (_this$__slotChildren$ = _this$__slotChildren.nativeElement) === null || _this$__slotChildren$ === void 0 ? void 0 : _this$__slotChildren$.innerHTML.trim();
    }
  }]);

  return ButtonProps;
}(_base_props.default);

exports.ButtonProps = ButtonProps;

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], ButtonProps.prototype, "activeStateEnabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], ButtonProps.prototype, "hoverStateEnabled", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "icon", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "iconPosition", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_a = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _a : Object)], ButtonProps.prototype, "onClick", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_b = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _b : Object)], ButtonProps.prototype, "onSubmit", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], ButtonProps.prototype, "pressed", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "stylingMode", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", typeof (_c = typeof _core.TemplateRef !== "undefined" && _core.TemplateRef) === "function" ? _c : Object)], ButtonProps.prototype, "template", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "text", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "type", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], ButtonProps.prototype, "useInkRipple", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], ButtonProps.prototype, "useSubmitBehavior", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], ButtonProps.prototype, "validationGroup", void 0);

var defaultOptionRules = (0, _utils.createDefaultOptionRules)([{
  device: function device() {
    return _devices.default.real().deviceType === "desktop" && !_devices.default.isSimulator();
  },
  options: {
    focusStateEnabled: true
  }
}, {
  device: function device() {
    return _themes.default.isMaterial(_themes.default.current());
  },
  options: {
    useInkRipple: true
  }
}]);
exports.defaultOptionRules = defaultOptionRules;
var __defaultOptionRules = defaultOptionRules;

function defaultOptions(rule) {
  __defaultOptionRules.push(rule);
}

var Button = /*#__PURE__*/function (_ButtonProps) {
  _inherits(Button, _ButtonProps);

  var _super2 = _createSuper(Button);

  function Button(changeDetection) {
    var _this2;

    _classCallCheck(this, Button);

    _this2 = _super2.call(this);
    _this2.changeDetection = changeDetection;
    _this2.__destroyEffects = [];
    _this2.__viewCheckedSubscribeEvent = [];
    _this2.__getterCache = {};
    var defaultOptions = (0, _utils.convertRulesToOptions)(__defaultOptionRules);
    Object.keys(defaultOptions).forEach(function (option) {
      _this2[option] = defaultOptions[option];
    });

    _this2._onClick = function (e) {
      _this2.onClick.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onSubmit = function (e) {
      _this2.onSubmit.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onContentReady = function (e) {
      _this2.onContentReady.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onKeyDown = function (e) {
      _this2.onKeyDown.emit(e);

      _this2.changeDetection.detectChanges();
    };

    return _this2;
  }

  _createClass(Button, [{
    key: "__contentReadyEffect",
    value: function __contentReadyEffect() {
      var _this$_onContentReady;

      (_this$_onContentReady = this._onContentReady) === null || _this$_onContentReady === void 0 ? void 0 : _this$_onContentReady.call(this, {
        element: this.contentRef.nativeElement.parentNode
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      this.widgetRef.focus();
    }
  }, {
    key: "__onActive",
    value: function __onActive(event) {
      var useInkRipple = this.useInkRipple;
      useInkRipple && this.inkRippleRef.showWave({
        element: this.contentRef.nativeElement,
        event: event
      });
    }
  }, {
    key: "__onInactive",
    value: function __onInactive(event) {
      var useInkRipple = this.useInkRipple;
      useInkRipple && this.inkRippleRef.hideWave({
        element: this.contentRef.nativeElement,
        event: event
      });
    }
  }, {
    key: "__onWidgetClick",
    value: function __onWidgetClick(event) {
      var _this$_onClick;

      var useSubmitBehavior = this.useSubmitBehavior,
          validationGroup = this.validationGroup;
      (_this$_onClick = this._onClick) === null || _this$_onClick === void 0 ? void 0 : _this$_onClick.call(this, {
        event: event,
        validationGroup: validationGroup
      });
      useSubmitBehavior && this.submitInputRef.nativeElement.click();
    }
  }, {
    key: "__onWidgetKeyDown",
    value: function __onWidgetKeyDown(options) {
      var _this$_onKeyDown;

      var keyName = options.keyName,
          originalEvent = options.originalEvent,
          which = options.which;
      var result = (_this$_onKeyDown = this._onKeyDown) === null || _this$_onKeyDown === void 0 ? void 0 : _this$_onKeyDown.call(this, options);

      if (result === null || result === void 0 ? void 0 : result.cancel) {
        return result;
      }

      if (keyName === "space" || which === "space" || keyName === "enter" || which === "enter") {
        originalEvent.preventDefault();

        this.__onWidgetClick(originalEvent);
      }

      return undefined;
    }
  }, {
    key: "__submitEffect",
    value: function __submitEffect() {
      var _this3 = this;

      var namespace = "UIFeedback";
      var useSubmitBehavior = this.useSubmitBehavior;

      if (useSubmitBehavior && this._onSubmit) {
        _short.click.on(this.submitInputRef.nativeElement, function (event) {
          return _this3._onSubmit({
            event: event,
            submitInput: _this3.submitInputRef.nativeElement
          });
        }, {
          namespace: namespace
        });

        return function () {
          return _short.click.off(_this3.submitInputRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__schedule_contentReadyEffect",
    value: function __schedule_contentReadyEffect() {
      var _this$__destroyEffect,
          _this$__destroyEffect2,
          _this4 = this;

      (_this$__destroyEffect = (_this$__destroyEffect2 = this.__destroyEffects)[0]) === null || _this$__destroyEffect === void 0 ? void 0 : _this$__destroyEffect.call(_this$__destroyEffect2);

      this.__viewCheckedSubscribeEvent[0] = function () {
        _this4.__destroyEffects[0] = _this4.__contentReadyEffect();
      };
    }
  }, {
    key: "__schedule_submitEffect",
    value: function __schedule_submitEffect() {
      var _this$__destroyEffect3,
          _this$__destroyEffect4,
          _this5 = this;

      (_this$__destroyEffect3 = (_this$__destroyEffect4 = this.__destroyEffects)[1]) === null || _this$__destroyEffect3 === void 0 ? void 0 : _this$__destroyEffect3.call(_this$__destroyEffect4);

      this.__viewCheckedSubscribeEvent[1] = function () {
        _this5.__destroyEffects[1] = _this5.__submitEffect();
      };
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this6 = this;

      this._effectTimeout = setTimeout(function () {
        _this6.__destroyEffects.push(_this6.__contentReadyEffect(), _this6.__submitEffect());
      }, 0);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.__destroyEffects.length && ["onContentReady", "contentRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_contentReadyEffect();
      }

      if (this.__destroyEffects.length && ["useSubmitBehavior", "onSubmit", "submitInputRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_submitEffect();
      }

      if (["icon", "text", "type"].some(function (d) {
        return changes[d];
      })) {
        this.__getterCache["inkRippleConfig"] = undefined;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.__destroyEffects.forEach(function (d) {
        return d && d();
      });

      clearTimeout(this._effectTimeout);
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var _this7 = this;

      if (this.__viewCheckedSubscribeEvent.length) {
        this._effectTimeout = setTimeout(function () {
          _this7.__viewCheckedSubscribeEvent.forEach(function (s) {
            return s === null || s === void 0 ? void 0 : s();
          });

          _this7.__viewCheckedSubscribeEvent = [];
        });
      }
    }
  }, {
    key: "__aria",
    get: function get() {
      var icon = this.icon,
          text = this.text;
      var label = text || icon;

      if (!text && icon && (0, _icon.getImageSourceType)(icon) === "image") {
        label = icon.indexOf("base64") === -1 ? icon.replace(/.+\/([^.]+)\..+$/, "$1") : "Base64";
      }

      return _objectSpread({
        role: "button"
      }, label ? {
        label: label
      } : {});
    }
  }, {
    key: "__cssClasses",
    get: function get() {
      return getCssClasses({
        activeStateEnabled: this.activeStateEnabled,
        hoverStateEnabled: this.hoverStateEnabled,
        icon: this.icon,
        iconPosition: this.iconPosition,
        onClick: this._onClick,
        onSubmit: this._onSubmit,
        pressed: this.pressed,
        stylingMode: this.stylingMode,
        template: this.template,
        children: this.children,
        text: this.text,
        type: this.type,
        useInkRipple: this.useInkRipple,
        useSubmitBehavior: this.useSubmitBehavior,
        validationGroup: this.validationGroup,
        accessKey: this.accessKey,
        disabled: this.disabled,
        focusStateEnabled: this.focusStateEnabled,
        height: this.height,
        hint: this.hint,
        onContentReady: this._onContentReady,
        onKeyDown: this._onKeyDown,
        rtlEnabled: this.rtlEnabled,
        tabIndex: this.tabIndex,
        visible: this.visible,
        width: this.width
      });
    }
  }, {
    key: "__iconSource",
    get: function get() {
      var icon = this.icon,
          type = this.type;
      return icon || type === "back" ? icon || "back" : "";
    }
  }, {
    key: "__inkRippleConfig",
    get: function get() {
      var _this8 = this;

      if (this.__getterCache["inkRippleConfig"] !== undefined) {
        return this.__getterCache["inkRippleConfig"];
      }

      return this.__getterCache["inkRippleConfig"] = function () {
        var icon = _this8.icon,
            text = _this8.text,
            type = _this8.type;
        return !text && icon || type === "back" ? {
          isCentered: true,
          useHoldAnimation: false,
          waveSizeCoefficient: 1
        } : {};
      }();
    }
  }, {
    key: "__restAttributes",
    get: function get() {
      return {};
    }
  }, {
    key: "slotChildren",
    set: function set(slot) {
      this.__slotChildren = slot;
      this.changeDetection.detectChanges();
    }
  }]);

  return Button;
}(ButtonProps);

exports.Button = Button;

__decorate([(0, _core.ViewChild)("contentRef", {
  static: false
}), __metadata("design:type", typeof (_d = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _d : Object)], Button.prototype, "contentRef", void 0);

__decorate([(0, _core.ViewChild)("inkRippleRef", {
  static: false
}), __metadata("design:type", _ink_ripple.InkRipple)], Button.prototype, "inkRippleRef", void 0);

__decorate([(0, _core.ViewChild)("submitInputRef", {
  static: false
}), __metadata("design:type", typeof (_e = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _e : Object)], Button.prototype, "submitInputRef", void 0);

__decorate([(0, _core.ViewChild)("widgetRef", {
  static: false
}), __metadata("design:type", _widget.Widget)], Button.prototype, "widgetRef", void 0);

__decorate([(0, _core.ViewChild)("slotChildren"), __metadata("design:type", typeof (_f = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _f : Object), __metadata("design:paramtypes", [typeof (_g = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _g : Object])], Button.prototype, "slotChildren", null);

exports.Button = Button = __decorate([(0, _core.Component)({
  selector: "dx-button",
  changeDetection: _core.ChangeDetectionStrategy.OnPush,
  template: "<dx-widget\n    #widgetRef\n    [accessKey]=\"accessKey\"\n    [activeStateEnabled]=\"activeStateEnabled\"\n    [aria]=\"__aria\"\n    [classes]=\"__cssClasses\"\n    [disabled]=\"disabled\"\n    [focusStateEnabled]=\"focusStateEnabled\"\n    [height]=\"height\"\n    [hint]=\"hint\"\n    [hoverStateEnabled]=\"hoverStateEnabled\"\n    (onActive)=\"__onActive($event)\"\n    (onContentReady)=\"_onContentReady($event)\"\n    (onClick)=\"__onWidgetClick($event)\"\n    (onInactive)=\"__onInactive($event)\"\n    (onKeyDown)=\"__onWidgetKeyDown($event)\"\n    [rtlEnabled]=\"rtlEnabled\"\n    [tabIndex]=\"tabIndex\"\n    [visible]=\"visible\"\n    [width]=\"width\"\n    ><div class=\"dx-button-content\" #contentRef\n      ><ng-container *ngIf=\"template\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            template;\n            context: { data: { icon: icon, text: text } }\n          \"\n        ></ng-container> </ng-container\n      ><ng-container *ngIf=\"!template\"\n        ><div #slotChildren style=\"display: contents\"\n          ><ng-content></ng-content></div></ng-container\n      ><dx-icon\n        [source]=\"__iconSource\"\n        [position]=\"iconPosition\"\n        *ngIf=\"\n          !template && !children && __iconSource && iconPosition === 'left'\n        \"\n      ></dx-icon\n      ><span class=\"dx-button-text\" *ngIf=\"!template && !children && text\">{{\n        text\n      }}</span\n      ><dx-icon\n        [source]=\"__iconSource\"\n        [position]=\"iconPosition\"\n        *ngIf=\"\n          !template && !children && __iconSource && !(iconPosition === 'left')\n        \"\n      ></dx-icon\n      ><input\n        #submitInputRef\n        type=\"submit\"\n        [tabIndex]=\"-1\"\n        class=\"dx-button-submit-input\"\n        *ngIf=\"useSubmitBehavior\" /><dx-ink-ripple\n        [config]=\"__inkRippleConfig\"\n        #inkRippleRef\n        *ngIf=\"useInkRipple\"\n      ></dx-ink-ripple></div\n  ></dx-widget>"
}), __metadata("design:paramtypes", [typeof (_h = typeof _core.ChangeDetectorRef !== "undefined" && _core.ChangeDetectorRef) === "function" ? _h : Object])], Button);

var DxButtonModule = function DxButtonModule() {
  _classCallCheck(this, DxButtonModule);
};

exports.DxButtonModule = DxButtonModule;
exports.DxButtonModule = DxButtonModule = __decorate([(0, _core.NgModule)({
  declarations: [Button],
  imports: [_icon2.DxIconModule, _ink_ripple.DxInkRippleModule, _widget.DxWidgetModule, _common.CommonModule],
  exports: [Button]
})], DxButtonModule);
var _default = Button;
exports.default = _default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.createDefaultOptionRules = exports.getNestedOptionValue = exports.getParentName = exports.getFieldName = exports.deviceMatch = exports.normalizeOptions = exports.convertRulesToOptions = void 0;

var _devices = _interopRequireDefault(__webpack_require__(9));

var _type = __webpack_require__(0);

var _common = __webpack_require__(18);

var _extend = __webpack_require__(2);

var _data = __webpack_require__(31);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _element_data = __webpack_require__(22);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _window = __webpack_require__(4);

var _type = __webpack_require__(0);

var _style = __webpack_require__(24);

var _size = _interopRequireDefault(__webpack_require__(53));

var _html_parser = __webpack_require__(34);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.isEmpty = exports.replaceAll = exports.format = exports.quadToObject = exports.encodeHtml = void 0;

var _type = __webpack_require__(0);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;
var _default = '%VERSION%';
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _class = _interopRequireDefault(__webpack_require__(10));

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
module.exports = exports.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.captionize = exports.titleize = exports.humanize = exports.camelize = exports.underscore = exports.dasherize = void 0;

var _iterator = __webpack_require__(3);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parseHeight = exports.getVisibleHeight = exports.getVerticalOffsets = exports.addOffsetToMinHeight = exports.addOffsetToMaxHeight = exports.getElementBoxParams = exports.getSize = void 0;

var _window = __webpack_require__(4);

var _type = __webpack_require__(0);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _window = __webpack_require__(4);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _callbacks = _interopRequireDefault(__webpack_require__(7));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _call_once = _interopRequireDefault(__webpack_require__(12));

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.EventsStrategy = void 0;

var _callbacks = _interopRequireDefault(__webpack_require__(7));

var _iterator = __webpack_require__(3);

var _type = __webpack_require__(0);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.sessionStorage = void 0;

var _window = __webpack_require__(4);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _devices = _interopRequireDefault(__webpack_require__(9));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _promise = _interopRequireDefault(__webpack_require__(58));

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _deferred = __webpack_require__(23);

var _html_parser = __webpack_require__(34);

var _iterator = __webpack_require__(3);

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _view_port = __webpack_require__(35);

var _window = __webpack_require__(4);

var _themes_callback = __webpack_require__(59);

var _ui = _interopRequireDefault(__webpack_require__(60));

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
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _deferred = __webpack_require__(23);

var _window = __webpack_require__(4);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.themeInitializedCallback = exports.themeReadyCallback = void 0;

var _callbacks = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeReadyCallback = new _callbacks.default();
exports.themeReadyCallback = themeReadyCallback;
var themeInitializedCallback = new _callbacks.default();
exports.themeInitializedCallback = themeInitializedCallback;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _error = _interopRequireDefault(__webpack_require__(30));

var _errors = _interopRequireDefault(__webpack_require__(11));

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _class = _interopRequireDefault(__webpack_require__(10));

var _array = __webpack_require__(14);

var _utils = __webpack_require__(6);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _errors = _interopRequireDefault(__webpack_require__(11));

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = exports.DxIconModule = exports.Icon = exports.IconProps = void 0;

var _icon = __webpack_require__(39);

var _core = __webpack_require__(15);

var _common = __webpack_require__(19);

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a;

var IconProps = function IconProps() {
  _classCallCheck(this, IconProps);

  this.position = "left";
  this.source = "";
};

exports.IconProps = IconProps;

__decorate([(0, _core.Input)(), __metadata("design:type", String)], IconProps.prototype, "position", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], IconProps.prototype, "source", void 0);

var Icon = /*#__PURE__*/function (_IconProps) {
  _inherits(Icon, _IconProps);

  var _super = _createSuper(Icon);

  function Icon(changeDetection) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this);
    _this.changeDetection = changeDetection;
    return _this;
  }

  _createClass(Icon, [{
    key: "__sourceType",
    get: function get() {
      return (0, _icon.getImageSourceType)(this.source);
    }
  }, {
    key: "__cssClass",
    get: function get() {
      return this.position !== "left" ? "dx-icon-right" : "";
    }
  }, {
    key: "__restAttributes",
    get: function get() {
      return {};
    }
  }]);

  return Icon;
}(IconProps);

exports.Icon = Icon;
exports.Icon = Icon = __decorate([(0, _core.Component)({
  selector: "dx-icon",
  changeDetection: _core.ChangeDetectionStrategy.OnPush,
  template: "<i\n      [class]=\"'dx-icon dx-icon-' + source + ' ' + __cssClass + ''\"\n      *ngIf=\"__sourceType === 'dxIcon'\"\n    ></i\n    ><i\n      [class]=\"'dx-icon ' + source + ' ' + __cssClass + ''\"\n      *ngIf=\"__sourceType === 'fontIcon'\"\n    ></i\n    ><img\n      alt=\"\"\n      [src]=\"source\"\n      [class]=\"'dx-icon ' + __cssClass + ''\"\n      *ngIf=\"__sourceType === 'image'\"\n    /><i\n      [class]=\"'dx-icon dx-svg-icon ' + __cssClass + ''\"\n      *ngIf=\"__sourceType === 'svg'\"\n      >{{ source }}</i\n    >"
}), __metadata("design:paramtypes", [typeof (_a = typeof _core.ChangeDetectorRef !== "undefined" && _core.ChangeDetectorRef) === "function" ? _a : Object])], Icon);

var DxIconModule = function DxIconModule() {
  _classCallCheck(this, DxIconModule);
};

exports.DxIconModule = DxIconModule;
exports.DxIconModule = DxIconModule = __decorate([(0, _core.NgModule)({
  declarations: [Icon],
  imports: [_common.CommonModule],
  exports: [Icon]
})], DxIconModule);
var _default = Icon;
exports.default = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = exports.DxInkRippleModule = exports.InkRipple = exports.InkRippleProps = void 0;

var _utils = __webpack_require__(65);

var _core = __webpack_require__(15);

var _common = __webpack_require__(19);

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b;

var InkRippleProps = function InkRippleProps() {
  _classCallCheck(this, InkRippleProps);

  this.config = {};
};

exports.InkRippleProps = InkRippleProps;

__decorate([(0, _core.Input)(), __metadata("design:type", Object)], InkRippleProps.prototype, "config", void 0);

var InkRipple = /*#__PURE__*/function (_InkRippleProps) {
  _inherits(InkRipple, _InkRippleProps);

  var _super = _createSuper(InkRipple);

  function InkRipple(changeDetection) {
    var _this;

    _classCallCheck(this, InkRipple);

    _this = _super.call(this);
    _this.changeDetection = changeDetection;
    _this.__getterCache = {};
    return _this;
  }

  _createClass(InkRipple, [{
    key: "hideWave",
    value: function hideWave(event) {
      (0, _utils.hideWave)(this.__getConfig, event);
    }
  }, {
    key: "showWave",
    value: function showWave(event) {
      (0, _utils.showWave)(this.__getConfig, event);
    }
  }, {
    key: "__applyAttributes__",
    value: function __applyAttributes__() {
      var _this$_auto_ref_;

      var _attr_0 = this.__restAttributes || {};

      var _ref_0 = (_this$_auto_ref_ = this._auto_ref_0) === null || _this$_auto_ref_ === void 0 ? void 0 : _this$_auto_ref_.nativeElement;

      if (_ref_0) {
        for (var key in _attr_0) {
          _ref_0.setAttribute(key, _attr_0[key]);
        }
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.__applyAttributes__();

      if (["config"].some(function (d) {
        return changes[d];
      })) {
        this.__getterCache["getConfig"] = undefined;
      }
    }
  }, {
    key: "__getConfig",
    get: function get() {
      var _this2 = this;

      if (this.__getterCache["getConfig"] !== undefined) {
        return this.__getterCache["getConfig"];
      }

      return this.__getterCache["getConfig"] = function () {
        var config = _this2.config;
        return (0, _utils.initConfig)(config);
      }();
    }
  }, {
    key: "__restAttributes",
    get: function get() {
      return {};
    }
  }]);

  return InkRipple;
}(InkRippleProps);

exports.InkRipple = InkRipple;

__decorate([(0, _core.ViewChild)("_auto_ref_0", {
  static: false
}), __metadata("design:type", typeof (_a = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _a : Object)], InkRipple.prototype, "_auto_ref_0", void 0);

exports.InkRipple = InkRipple = __decorate([(0, _core.Component)({
  selector: "dx-ink-ripple",
  changeDetection: _core.ChangeDetectionStrategy.OnPush,
  template: "<div class=\"dx-inkripple\" #_auto_ref_0></div>"
}), __metadata("design:paramtypes", [typeof (_b = typeof _core.ChangeDetectorRef !== "undefined" && _core.ChangeDetectorRef) === "function" ? _b : Object])], InkRipple);

var DxInkRippleModule = function DxInkRippleModule() {
  _classCallCheck(this, DxInkRippleModule);
};

exports.DxInkRippleModule = DxInkRippleModule;
exports.DxInkRippleModule = DxInkRippleModule = __decorate([(0, _core.NgModule)({
  declarations: [InkRipple],
  imports: [_common.CommonModule],
  exports: [InkRipple]
})], DxInkRippleModule);
var _default = InkRipple;
exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.showWave = showWave;
exports.hideWave = hideWave;
exports.render = exports.initConfig = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = exports.DxWidgetModule = exports.Widget = exports.WidgetProps = void 0;

__webpack_require__(67);

__webpack_require__(77);

var _short = __webpack_require__(36);

var _combine_classes = __webpack_require__(38);

var _extend = __webpack_require__(2);

var _selectors = __webpack_require__(37);

var _index = __webpack_require__(6);

var _style = __webpack_require__(24);

var _base_props = _interopRequireDefault(__webpack_require__(44));

var _core = __webpack_require__(15);

var _common = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

var getAria = function getAria(args) {
  return Object.keys(args).reduce(function (r, key) {
    if (args[key]) {
      return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, key === "role" || key === "id" ? key : "aria-".concat(key), String(args[key])));
    }

    return r;
  }, {});
};

var getCssClasses = function getCssClasses(model) {
  var _classesMap;

  var isFocusable = !!model.focusStateEnabled && !model.disabled;
  var isHoverable = !!model.hoverStateEnabled && !model.disabled;
  var classesMap = (_classesMap = {
    "dx-widget": true
  }, _defineProperty(_classesMap, String(model.classes), !!model.classes), _defineProperty(_classesMap, String(model.className), !!model.className), _defineProperty(_classesMap, "dx-state-disabled", !!model.disabled), _defineProperty(_classesMap, "dx-state-invisible", !model.visible), _defineProperty(_classesMap, "dx-state-focused", !!model.focused && isFocusable), _defineProperty(_classesMap, "dx-state-active", !!model.active), _defineProperty(_classesMap, "dx-state-hover", !!model.hovered && isHoverable && !model.active), _defineProperty(_classesMap, "dx-rtl", !!model.rtlEnabled), _defineProperty(_classesMap, "dx-visibility-change-handler", !!model.onVisibilityChange), _classesMap);
  return (0, _combine_classes.combineClasses)(classesMap);
};

var WidgetProps = /*#__PURE__*/function (_BaseWidgetProps) {
  _inherits(WidgetProps, _BaseWidgetProps);

  var _super = _createSuper(WidgetProps);

  function WidgetProps() {
    var _this;

    _classCallCheck(this, WidgetProps);

    _this = _super.apply(this, arguments);
    _this._feedbackHideTimeout = 400;
    _this._feedbackShowTimeout = 30;
    _this.aria = {};
    _this.classes = "";
    _this.className = "";
    _this.name = "";
    _this.onActive = new _core.EventEmitter();
    _this.onDimensionChanged = new _core.EventEmitter();
    _this.onInactive = new _core.EventEmitter();
    _this.onKeyboardHandled = new _core.EventEmitter();
    _this.onVisibilityChange = new _core.EventEmitter();
    _this.onFocusIn = new _core.EventEmitter();
    _this.onFocusOut = new _core.EventEmitter();
    return _this;
  }

  _createClass(WidgetProps, [{
    key: "children",
    get: function get() {
      var _this$__slotChildren, _this$__slotChildren$;

      return (_this$__slotChildren = this.__slotChildren) === null || _this$__slotChildren === void 0 ? void 0 : (_this$__slotChildren$ = _this$__slotChildren.nativeElement) === null || _this$__slotChildren$ === void 0 ? void 0 : _this$__slotChildren$.innerHTML.trim();
    }
  }]);

  return WidgetProps;
}(_base_props.default);

exports.WidgetProps = WidgetProps;

__decorate([(0, _core.Input)(), __metadata("design:type", Number)], WidgetProps.prototype, "_feedbackHideTimeout", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Number)], WidgetProps.prototype, "_feedbackShowTimeout", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], WidgetProps.prototype, "activeStateUnit", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", Object)], WidgetProps.prototype, "aria", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], WidgetProps.prototype, "classes", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], WidgetProps.prototype, "className", void 0);

__decorate([(0, _core.Input)(), __metadata("design:type", String)], WidgetProps.prototype, "name", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_a = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _a : Object)], WidgetProps.prototype, "onActive", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_b = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _b : Object)], WidgetProps.prototype, "onDimensionChanged", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_c = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _c : Object)], WidgetProps.prototype, "onInactive", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_d = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _d : Object)], WidgetProps.prototype, "onKeyboardHandled", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_e = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _e : Object)], WidgetProps.prototype, "onVisibilityChange", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_f = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _f : Object)], WidgetProps.prototype, "onFocusIn", void 0);

__decorate([(0, _core.Output)(), __metadata("design:type", typeof (_g = typeof _core.EventEmitter !== "undefined" && _core.EventEmitter) === "function" ? _g : Object)], WidgetProps.prototype, "onFocusOut", void 0);

var Widget = /*#__PURE__*/function (_WidgetProps) {
  _inherits(Widget, _WidgetProps);

  var _super2 = _createSuper(Widget);

  function Widget(changeDetection) {
    var _this2;

    _classCallCheck(this, Widget);

    _this2 = _super2.call(this);
    _this2.changeDetection = changeDetection;
    _this2.active = false;
    _this2.focused = false;
    _this2.hovered = false;
    _this2.__destroyEffects = [];
    _this2.__viewCheckedSubscribeEvent = [];

    _this2._onActive = function (e) {
      _this2.onActive.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onDimensionChanged = function () {
      _this2.onDimensionChanged.emit();

      _this2.changeDetection.detectChanges();
    };

    _this2._onInactive = function (e) {
      _this2.onInactive.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onKeyboardHandled = function (args) {
      _this2.onKeyboardHandled.emit(args);

      _this2.changeDetection.detectChanges();
    };

    _this2._onVisibilityChange = function (args) {
      _this2.onVisibilityChange.emit(args);

      _this2.changeDetection.detectChanges();
    };

    _this2._onFocusIn = function (e) {
      _this2.onFocusIn.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onFocusOut = function (e) {
      _this2.onFocusOut.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onClick = function (e) {
      _this2.onClick.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onContentReady = function (e) {
      _this2.onContentReady.emit(e);

      _this2.changeDetection.detectChanges();
    };

    _this2._onKeyDown = function (e) {
      _this2.onKeyDown.emit(e);

      _this2.changeDetection.detectChanges();
    };

    return _this2;
  }

  _createClass(Widget, [{
    key: "__accessKeyEffect",
    value: function __accessKeyEffect() {
      var _this3 = this;

      var namespace = "UIFeedback";
      var accessKey = this.accessKey,
          disabled = this.disabled,
          focusStateEnabled = this.focusStateEnabled;
      var isFocusable = focusStateEnabled && !disabled;
      var canBeFocusedByKey = isFocusable && accessKey;

      if (canBeFocusedByKey) {
        _short.dxClick.on(this.widgetRef.nativeElement, function (e) {
          if ((0, _index.isFakeClickEvent)(e)) {
            e.stopImmediatePropagation();
            _this3._focused = true;
          }
        }, {
          namespace: namespace
        });

        return function () {
          return _short.dxClick.off(_this3.widgetRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__activeEffect",
    value: function __activeEffect() {
      var _this4 = this;

      var _feedbackHideTimeout = this._feedbackHideTimeout,
          _feedbackShowTimeout = this._feedbackShowTimeout,
          activeStateEnabled = this.activeStateEnabled,
          activeStateUnit = this.activeStateUnit,
          disabled = this.disabled;
      var selector = activeStateUnit;
      var namespace = "UIFeedback";

      if (activeStateEnabled && !disabled) {
        _short.active.on(this.widgetRef.nativeElement, function (_ref) {
          var _this4$_onActive;

          var event = _ref.event;
          _this4._active = true;
          (_this4$_onActive = _this4._onActive) === null || _this4$_onActive === void 0 ? void 0 : _this4$_onActive.call(_this4, event);
        }, function (_ref2) {
          var _this4$_onInactive;

          var event = _ref2.event;
          _this4._active = false;
          (_this4$_onInactive = _this4._onInactive) === null || _this4$_onInactive === void 0 ? void 0 : _this4$_onInactive.call(_this4, event);
        }, {
          hideTimeout: _feedbackHideTimeout,
          namespace: namespace,
          selector: selector,
          showTimeout: _feedbackShowTimeout
        });

        return function () {
          return _short.active.off(_this4.widgetRef.nativeElement, {
            selector: selector,
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__clickEffect",
    value: function __clickEffect() {
      var _this5 = this;

      var disabled = this.disabled,
          name = this.name;
      var namespace = name;

      if (this._onClick && !disabled) {
        _short.dxClick.on(this.widgetRef.nativeElement, this._onClick, {
          namespace: namespace
        });

        return function () {
          return _short.dxClick.off(_this5.widgetRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "focus",
    value: function focus() {
      _short.focus.trigger(this.widgetRef.nativeElement);
    }
  }, {
    key: "__focusEffect",
    value: function __focusEffect() {
      var _this6 = this;

      var disabled = this.disabled,
          focusStateEnabled = this.focusStateEnabled,
          name = this.name;
      var namespace = "".concat(name, "Focus");
      var isFocusable = focusStateEnabled && !disabled;

      if (isFocusable) {
        _short.focus.on(this.widgetRef.nativeElement, function (e) {
          if (!e.isDefaultPrevented()) {
            var _this6$_onFocusIn;

            _this6._focused = true;
            (_this6$_onFocusIn = _this6._onFocusIn) === null || _this6$_onFocusIn === void 0 ? void 0 : _this6$_onFocusIn.call(_this6, e);
          }
        }, function (e) {
          if (!e.isDefaultPrevented()) {
            var _this6$_onFocusOut;

            _this6._focused = false;
            (_this6$_onFocusOut = _this6._onFocusOut) === null || _this6$_onFocusOut === void 0 ? void 0 : _this6$_onFocusOut.call(_this6, e);
          }
        }, {
          isFocusable: _selectors.focusable,
          namespace: namespace
        });

        return function () {
          return _short.focus.off(_this6.widgetRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__hoverEffect",
    value: function __hoverEffect() {
      var _this7 = this;

      var namespace = "UIFeedback";
      var activeStateUnit = this.activeStateUnit,
          disabled = this.disabled,
          hoverStateEnabled = this.hoverStateEnabled;
      var selector = activeStateUnit;
      var isHoverable = hoverStateEnabled && !disabled;

      if (isHoverable) {
        _short.hover.on(this.widgetRef.nativeElement, function () {
          !_this7.active && (_this7._hovered = true);
        }, function () {
          _this7._hovered = false;
        }, {
          selector: selector,
          namespace: namespace
        });

        return function () {
          return _short.hover.off(_this7.widgetRef.nativeElement, {
            selector: selector,
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__keyboardEffect",
    value: function __keyboardEffect() {
      var _this8 = this;

      if (this._onKeyDown) {
        var id = _short.keyboard.on(this.widgetRef.nativeElement, this.widgetRef.nativeElement, function (e) {
          return _this8._onKeyDown(e);
        });

        return function () {
          return _short.keyboard.off(id);
        };
      }

      return undefined;
    }
  }, {
    key: "__resizeEffect",
    value: function __resizeEffect() {
      var _this9 = this;

      var namespace = "".concat(this.name, "VisibilityChange");

      if (this._onDimensionChanged) {
        _short.resize.on(this.widgetRef.nativeElement, this._onDimensionChanged, {
          namespace: namespace
        });

        return function () {
          return _short.resize.off(_this9.widgetRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__visibilityEffect",
    value: function __visibilityEffect() {
      var _this10 = this;

      var name = this.name;
      var namespace = "".concat(name, "VisibilityChange");

      if (this._onVisibilityChange) {
        _short.visibility.on(this.widgetRef.nativeElement, function () {
          return _this10._onVisibilityChange(true);
        }, function () {
          return _this10._onVisibilityChange(false);
        }, {
          namespace: namespace
        });

        return function () {
          return _short.visibility.off(_this10.widgetRef.nativeElement, {
            namespace: namespace
          });
        };
      }

      return undefined;
    }
  }, {
    key: "__applyAttributes__",
    value: function __applyAttributes__() {
      var _this$widgetRef;

      var _attr_0 = this.__attributes || {};

      var _ref_0 = (_this$widgetRef = this.widgetRef) === null || _this$widgetRef === void 0 ? void 0 : _this$widgetRef.nativeElement;

      if (_ref_0) {
        for (var key in _attr_0) {
          _ref_0.setAttribute(key, _attr_0[key]);
        }
      }
    }
  }, {
    key: "__schedule_accessKeyEffect",
    value: function __schedule_accessKeyEffect() {
      var _this$__destroyEffect,
          _this$__destroyEffect2,
          _this11 = this;

      (_this$__destroyEffect = (_this$__destroyEffect2 = this.__destroyEffects)[0]) === null || _this$__destroyEffect === void 0 ? void 0 : _this$__destroyEffect.call(_this$__destroyEffect2);

      this.__viewCheckedSubscribeEvent[0] = function () {
        _this11.__destroyEffects[0] = _this11.__accessKeyEffect();
      };
    }
  }, {
    key: "__schedule_activeEffect",
    value: function __schedule_activeEffect() {
      var _this$__destroyEffect3,
          _this$__destroyEffect4,
          _this12 = this;

      (_this$__destroyEffect3 = (_this$__destroyEffect4 = this.__destroyEffects)[1]) === null || _this$__destroyEffect3 === void 0 ? void 0 : _this$__destroyEffect3.call(_this$__destroyEffect4);

      this.__viewCheckedSubscribeEvent[1] = function () {
        _this12.__destroyEffects[1] = _this12.__activeEffect();
      };
    }
  }, {
    key: "__schedule_clickEffect",
    value: function __schedule_clickEffect() {
      var _this$__destroyEffect5,
          _this$__destroyEffect6,
          _this13 = this;

      (_this$__destroyEffect5 = (_this$__destroyEffect6 = this.__destroyEffects)[2]) === null || _this$__destroyEffect5 === void 0 ? void 0 : _this$__destroyEffect5.call(_this$__destroyEffect6);

      this.__viewCheckedSubscribeEvent[2] = function () {
        _this13.__destroyEffects[2] = _this13.__clickEffect();
      };
    }
  }, {
    key: "__schedule_focusEffect",
    value: function __schedule_focusEffect() {
      var _this$__destroyEffect7,
          _this$__destroyEffect8,
          _this14 = this;

      (_this$__destroyEffect7 = (_this$__destroyEffect8 = this.__destroyEffects)[3]) === null || _this$__destroyEffect7 === void 0 ? void 0 : _this$__destroyEffect7.call(_this$__destroyEffect8);

      this.__viewCheckedSubscribeEvent[3] = function () {
        _this14.__destroyEffects[3] = _this14.__focusEffect();
      };
    }
  }, {
    key: "__schedule_hoverEffect",
    value: function __schedule_hoverEffect() {
      var _this$__destroyEffect9,
          _this$__destroyEffect10,
          _this15 = this;

      (_this$__destroyEffect9 = (_this$__destroyEffect10 = this.__destroyEffects)[4]) === null || _this$__destroyEffect9 === void 0 ? void 0 : _this$__destroyEffect9.call(_this$__destroyEffect10);

      this.__viewCheckedSubscribeEvent[4] = function () {
        _this15.__destroyEffects[4] = _this15.__hoverEffect();
      };
    }
  }, {
    key: "__schedule_keyboardEffect",
    value: function __schedule_keyboardEffect() {
      var _this$__destroyEffect11,
          _this$__destroyEffect12,
          _this16 = this;

      (_this$__destroyEffect11 = (_this$__destroyEffect12 = this.__destroyEffects)[5]) === null || _this$__destroyEffect11 === void 0 ? void 0 : _this$__destroyEffect11.call(_this$__destroyEffect12);

      this.__viewCheckedSubscribeEvent[5] = function () {
        _this16.__destroyEffects[5] = _this16.__keyboardEffect();
      };
    }
  }, {
    key: "__schedule_resizeEffect",
    value: function __schedule_resizeEffect() {
      var _this$__destroyEffect13,
          _this$__destroyEffect14,
          _this17 = this;

      (_this$__destroyEffect13 = (_this$__destroyEffect14 = this.__destroyEffects)[6]) === null || _this$__destroyEffect13 === void 0 ? void 0 : _this$__destroyEffect13.call(_this$__destroyEffect14);

      this.__viewCheckedSubscribeEvent[6] = function () {
        _this17.__destroyEffects[6] = _this17.__resizeEffect();
      };
    }
  }, {
    key: "__schedule_visibilityEffect",
    value: function __schedule_visibilityEffect() {
      var _this$__destroyEffect15,
          _this$__destroyEffect16,
          _this18 = this;

      (_this$__destroyEffect15 = (_this$__destroyEffect16 = this.__destroyEffects)[7]) === null || _this$__destroyEffect15 === void 0 ? void 0 : _this$__destroyEffect15.call(_this$__destroyEffect16);

      this.__viewCheckedSubscribeEvent[7] = function () {
        _this18.__destroyEffects[7] = _this18.__visibilityEffect();
      };
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this19 = this;

      this._effectTimeout = setTimeout(function () {
        _this19.__destroyEffects.push(_this19.__accessKeyEffect(), _this19.__activeEffect(), _this19.__clickEffect(), _this19.__focusEffect(), _this19.__hoverEffect(), _this19.__keyboardEffect(), _this19.__resizeEffect(), _this19.__visibilityEffect());
      }, 0);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.__applyAttributes__();

      if (this.__destroyEffects.length && ["accessKey", "disabled", "focusStateEnabled", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_accessKeyEffect();
      }

      if (this.__destroyEffects.length && ["_feedbackHideTimeout", "_feedbackShowTimeout", "activeStateEnabled", "activeStateUnit", "disabled", "onActive", "onInactive", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_activeEffect();
      }

      if (this.__destroyEffects.length && ["disabled", "name", "onClick", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_clickEffect();
      }

      if (this.__destroyEffects.length && ["disabled", "focusStateEnabled", "name", "onFocusIn", "onFocusOut", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_focusEffect();
      }

      if (this.__destroyEffects.length && ["activeStateUnit", "disabled", "hoverStateEnabled", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_hoverEffect();
      }

      if (this.__destroyEffects.length && ["onKeyDown", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_keyboardEffect();
      }

      if (this.__destroyEffects.length && ["name", "onDimensionChanged", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_resizeEffect();
      }

      if (this.__destroyEffects.length && ["name", "onVisibilityChange", "widgetRef"].some(function (d) {
        return changes[d];
      })) {
        this.__schedule_visibilityEffect();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.__destroyEffects.forEach(function (d) {
        return d && d();
      });

      clearTimeout(this._effectTimeout);
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var _this20 = this;

      if (this.__viewCheckedSubscribeEvent.length) {
        this._effectTimeout = setTimeout(function () {
          _this20.__viewCheckedSubscribeEvent.forEach(function (s) {
            return s === null || s === void 0 ? void 0 : s();
          });

          _this20.__viewCheckedSubscribeEvent = [];
        });
      }
    }
  }, {
    key: "__processNgStyle",
    value: function __processNgStyle(value) {
      if (_typeof(value) === "object") {
        return Object.keys(value).reduce(function (v, k) {
          if (typeof value[k] === "number") {
            v[k] = value[k] + "px";
          } else {
            v[k] = value[k];
          }

          return v;
        }, {});
      }

      return value;
    }
  }, {
    key: "__attributes",
    get: function get() {
      var aria = this.aria,
          disabled = this.disabled,
          focusStateEnabled = this.focusStateEnabled,
          visible = this.visible;
      var accessKey = focusStateEnabled && !disabled && this.accessKey;
      return _objectSpread(_objectSpread({}, (0, _extend.extend)({}, this.__restAttributes, accessKey && {
        accessKey: accessKey
      })), getAria(_objectSpread(_objectSpread({}, aria), {}, {
        disabled: disabled,
        hidden: !visible
      })));
    }
  }, {
    key: "__styles",
    get: function get() {
      var height = this.height,
          width = this.width;
      var style = this.__restAttributes.style || {};
      var computedWidth = (0, _style.normalizeStyleProp)("width", typeof width === "function" ? width() : width);
      var computedHeight = (0, _style.normalizeStyleProp)("height", typeof height === "function" ? height() : height);
      return _objectSpread(_objectSpread({}, style), {}, {
        height: computedHeight !== null && computedHeight !== void 0 ? computedHeight : style.height,
        width: computedWidth !== null && computedWidth !== void 0 ? computedWidth : style.width
      });
    }
  }, {
    key: "__cssClasses",
    get: function get() {
      var className = this.className,
          classes = this.classes,
          disabled = this.disabled,
          focusStateEnabled = this.focusStateEnabled,
          hoverStateEnabled = this.hoverStateEnabled,
          rtlEnabled = this.rtlEnabled,
          visible = this.visible;
      return getCssClasses({
        active: this.active,
        focused: this.focused,
        hovered: this.hovered,
        className: className,
        classes: classes,
        disabled: disabled,
        focusStateEnabled: focusStateEnabled,
        hoverStateEnabled: hoverStateEnabled,
        onVisibilityChange: this._onVisibilityChange,
        rtlEnabled: rtlEnabled,
        visible: visible
      });
    }
  }, {
    key: "__tabIndex",
    get: function get() {
      var disabled = this.disabled,
          focusStateEnabled = this.focusStateEnabled,
          tabIndex = this.tabIndex;
      var isFocusable = focusStateEnabled && !disabled;
      return isFocusable ? tabIndex : undefined;
    }
  }, {
    key: "__restAttributes",
    get: function get() {
      return {};
    }
  }, {
    key: "_active",
    set: function set(active) {
      this.active = active;
      this.changeDetection.detectChanges();

      if (this.__destroyEffects.length) {
        this.__schedule_hoverEffect();
      }
    }
  }, {
    key: "_focused",
    set: function set(focused) {
      this.focused = focused;
      this.changeDetection.detectChanges();
    }
  }, {
    key: "_hovered",
    set: function set(hovered) {
      this.hovered = hovered;
      this.changeDetection.detectChanges();
    }
  }, {
    key: "slotChildren",
    set: function set(slot) {
      this.__slotChildren = slot;
      this.changeDetection.detectChanges();
    }
  }]);

  return Widget;
}(WidgetProps);

exports.Widget = Widget;

__decorate([(0, _core.ViewChild)("widgetRef", {
  static: false
}), __metadata("design:type", typeof (_h = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _h : Object)], Widget.prototype, "widgetRef", void 0);

__decorate([(0, _core.ViewChild)("slotChildren"), __metadata("design:type", typeof (_j = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _j : Object), __metadata("design:paramtypes", [typeof (_k = typeof _core.ElementRef !== "undefined" && _core.ElementRef) === "function" ? _k : Object])], Widget.prototype, "slotChildren", null);

exports.Widget = Widget = __decorate([(0, _core.Component)({
  selector: "dx-widget",
  changeDetection: _core.ChangeDetectionStrategy.OnPush,
  template: "<div\n    #widgetRef\n    [tabIndex]=\"__tabIndex\"\n    [title]=\"hint !== undefined ? hint : ''\"\n    [hidden]=\"!visible\"\n    [class]=\"__cssClasses\"\n    [ngStyle]=\"__processNgStyle(__styles)\"\n    ><div #slotChildren style=\"display: contents\"><ng-content></ng-content></div\n  ></div>"
}), __metadata("design:paramtypes", [typeof (_l = typeof _core.ChangeDetectorRef !== "undefined" && _core.ChangeDetectorRef) === "function" ? _l : Object])], Widget);

var DxWidgetModule = function DxWidgetModule() {
  _classCallCheck(this, DxWidgetModule);
};

exports.DxWidgetModule = DxWidgetModule;
exports.DxWidgetModule = DxWidgetModule = __decorate([(0, _core.NgModule)({
  declarations: [Widget],
  imports: [_common.CommonModule],
  exports: [Widget]
})], DxWidgetModule);
var _default = Widget;
exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.useNativeClick = exports.misc = exports.name = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _devices = _interopRequireDefault(__webpack_require__(9));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _dom = _interopRequireDefault(__webpack_require__(68));

var _frame = __webpack_require__(69);

var _utils = __webpack_require__(6);

var _pointer = _interopRequireDefault(__webpack_require__(25));

var _emitter = _interopRequireDefault(__webpack_require__(73));

var _emitter_registrator = _interopRequireDefault(__webpack_require__(74));

var _version = __webpack_require__(76);

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
exports.misc = misc;

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
exports.useNativeClick = useNativeClick;

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
}); ///#ENDDEBUG

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.createTextElementHiddenCopy = exports.contains = exports.clipboardText = exports.normalizeTemplateElement = exports.extractTemplateMarkup = exports.closestCommonParent = exports.clearSelection = exports.resetActiveElement = void 0;

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _type = __webpack_require__(0);

var _window = __webpack_require__(4);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;

var _window = __webpack_require__(4);

var _call_once = _interopRequireDefault(__webpack_require__(12));

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
exports.nativeScrolling = exports.animation = exports.transitionEndEventName = exports.transition = exports.touch = exports.inputType = exports.supportProp = exports.pointerEvents = exports.touchEvents = exports.detectPointerEvent = exports.detectTouchEvents = void 0;

var _array = __webpack_require__(14);

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _common = __webpack_require__(18);

var _call_once = _interopRequireDefault(__webpack_require__(12));

var _window = __webpack_require__(4);

var _devices = _interopRequireDefault(__webpack_require__(9));

var _style = __webpack_require__(24);

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

exports.detectTouchEvents = detectTouchEvents;

var detectPointerEvent = function detectPointerEvent(hasWindowProperty, pointerEnabled) {
  // TODO: remove the check of the 'pointerEnabled' when we drop IE support
  var isPointerEnabled = (0, _common.ensureDefined)(pointerEnabled, true);
  var canUsePointerEvent = (0, _common.ensureDefined)(pointerEnabled, false);
  return hasWindowProperty('PointerEvent') && isPointerEnabled || canUsePointerEvent;
};

exports.detectPointerEvent = detectPointerEvent;
var touchEvents = detectTouchEvents(_window.hasProperty, maxTouchPoints);
exports.touchEvents = touchEvents;
var pointerEvents = detectPointerEvent(_window.hasProperty, pointerEnabled);
exports.pointerEvents = pointerEvents;
var touchPointersPresent = !!maxTouchPoints || !!msMaxTouchPoints; ///#DEBUG

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(21));

var _observer = _interopRequireDefault(__webpack_require__(42));

var _extend = __webpack_require__(2);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _extend = __webpack_require__(2);

var _base = _interopRequireDefault(__webpack_require__(21));

var _mouse = _interopRequireDefault(__webpack_require__(43));

var _touch = _interopRequireDefault(__webpack_require__(41));

var _utils = __webpack_require__(6);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _common = __webpack_require__(18);

var _class = _interopRequireDefault(__webpack_require__(10));

var _callbacks = _interopRequireDefault(__webpack_require__(7));

var _extend = __webpack_require__(2);

var _utils = __webpack_require__(6);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.default = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _ready_callbacks = _interopRequireDefault(__webpack_require__(13));

var _dom_adapter = _interopRequireDefault(__webpack_require__(1));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _element_data = __webpack_require__(22);

var _class = _interopRequireDefault(__webpack_require__(10));

var _extend = __webpack_require__(2);

var _array = __webpack_require__(14);

var _iterator = __webpack_require__(3);

var _event_registrator = _interopRequireDefault(__webpack_require__(20));

var _utils = __webpack_require__(6);

var _pointer = _interopRequireDefault(__webpack_require__(25));

var _wheel = __webpack_require__(75);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.name = void 0;

var _renderer = _interopRequireDefault(__webpack_require__(5));

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _event_registrator = _interopRequireDefault(__webpack_require__(20));

var _utils = __webpack_require__(6);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.end = exports.start = void 0;

var _events_engine = _interopRequireDefault(__webpack_require__(8));

var _element_data = __webpack_require__(22);

var _class = _interopRequireDefault(__webpack_require__(10));

var _devices = _interopRequireDefault(__webpack_require__(9));

var _event_registrator = _interopRequireDefault(__webpack_require__(20));

var _utils = __webpack_require__(6);

var _pointer = _interopRequireDefault(__webpack_require__(25));

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

/***/ })
/******/ ]);