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
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
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
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var types = {
    "[object Array]": "array",
    "[object Date]": "date",
    "[object Object]": "object",
    "[object String]": "string",
    "[object Null]": "null"
};
var type = function(object) {
    var typeOfObject = Object.prototype.toString.call(object);
    return "object" === _typeof(object) ? types[typeOfObject] || "object" : _typeof(object)
};
var isBoolean = function(object) {
    return "boolean" === typeof object
};
var isExponential = function(value) {
    return isNumeric(value) && value.toString().indexOf("e") !== -1
};
var isDate = function(object) {
    return "date" === type(object)
};
var isDefined = function(object) {
    return null !== object && void 0 !== object
};
var isFunction = function(object) {
    return "function" === typeof object
};
var isString = function(object) {
    return "string" === typeof object
};
var isNumeric = function(object) {
    return "number" === typeof object && isFinite(object) || !isNaN(object - parseFloat(object))
};
var isObject = function(object) {
    return "object" === type(object)
};
var isEmptyObject = function(object) {
    var property;
    for (property in object) {
        return false
    }
    return true
};
var isPlainObject = function(object) {
    if (!object || "[object Object]" !== Object.prototype.toString.call(object)) {
        return false
    }
    var proto = Object.getPrototypeOf(object);
    var ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return "function" === typeof ctor && Object.toString.call(ctor) === Object.toString.call(Object)
};
var isPrimitive = function(value) {
    return ["object", "array", "function"].indexOf(type(value)) === -1
};
var isWindow = function(object) {
    return null != object && object === object.window
};
var isRenderer = function(object) {
    return !!(object.jquery || object.dxRenderer)
};
var isPromise = function(object) {
    return object && isFunction(object.then)
};
var isDeferred = function(object) {
    return object && isFunction(object.done) && isFunction(object.fail)
};
exports.isBoolean = isBoolean;
exports.isExponential = isExponential;
exports.isDate = isDate;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isPlainObject = isPlainObject;
exports.isPrimitive = isPrimitive;
exports.isWindow = isWindow;
exports.isRenderer = isRenderer;
exports.isPromise = isPromise;
exports.isDeferred = isDeferred;
exports.type = type;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/extend.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var isPlainObject = __webpack_require__(1).isPlainObject;
var extendFromObject = function(target, source, overrideExistingValues) {
    target = target || {};
    for (var prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
            var value = source[prop];
            if (!(prop in target) || overrideExistingValues) {
                target[prop] = value
            }
        }
    }
    return target
};
var extend = function extend(target) {
    target = target || {};
    var i = 1;
    var deep = false;
    if ("boolean" === typeof target) {
        deep = target;
        target = arguments[1] || {};
        i++
    }
    for (; i < arguments.length; i++) {
        var source = arguments[i];
        if (null == source) {
            continue
        }
        for (var key in source) {
            var targetValue = target[key];
            var sourceValue = source[key];
            var sourceValueIsArray = false;
            var clone = void 0;
            if ("__proto__" === key || target === sourceValue) {
                continue
            }
            if (deep && sourceValue && (isPlainObject(sourceValue) || (sourceValueIsArray = Array.isArray(sourceValue)))) {
                if (sourceValueIsArray) {
                    clone = targetValue && Array.isArray(targetValue) ? targetValue : []
                } else {
                    clone = targetValue && isPlainObject(targetValue) ? targetValue : {}
                }
                target[key] = extend(deep, clone, sourceValue)
            } else {
                if (void 0 !== sourceValue) {
                    target[key] = sourceValue
                }
            }
        }
    }
    return target
};
exports.extend = extend;
exports.extendFromObject = extendFromObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/renderer.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var rendererBase = __webpack_require__(62);
module.exports = rendererBase.get();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/iterator.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var map = function(values, callback) {
    if (Array.isArray(values)) {
        return values.map(callback)
    }
    var result = [];
    for (var key in values) {
        result.push(callback(values[key], key))
    }
    return result
};
var each = function(values, callback) {
    if (!values) {
        return
    }
    if ("length" in values) {
        for (var i = 0; i < values.length; i++) {
            if (false === callback.call(values[i], i, values[i])) {
                break
            }
        }
    } else {
        for (var key in values) {
            if (false === callback.call(values[key], key, values[key])) {
                break
            }
        }
    }
    return values
};
var reverseEach = function(array, callback) {
    if (!array || !("length" in array) || 0 === array.length) {
        return
    }
    for (var i = array.length - 1; i >= 0; i--) {
        if (false === callback.call(array[i], i, array[i])) {
            break
        }
    }
};
exports.map = map;
exports.each = each;
exports.reverseEach = reverseEach;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/dom_adapter.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _dependency_injector = __webpack_require__(19);
var _dependency_injector2 = _interopRequireDefault(_dependency_injector);
var _common = __webpack_require__(8);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var DOCUMENT_NODE = 9;
var nativeDOMAdapterStrategy = {
    querySelectorAll: function(element, selector) {
        return element.querySelectorAll(selector)
    },
    elementMatches: function(element, selector) {
        var _this = this;
        var matches = element.matches || element.matchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector || function(selector) {
            var doc = element.document || element.ownerDocument;
            if (!doc) {
                return false
            }
            var items = _this.querySelectorAll(doc, selector);
            for (var i = 0; i < items.length; i++) {
                if (items[i] === element) {
                    return true
                }
            }
        };
        return matches.call(element, selector)
    },
    createElement: function(tagName, context) {
        context = context || this._document;
        return context.createElement(tagName)
    },
    createElementNS: function(ns, tagName, context) {
        context = context || this._document;
        return context.createElementNS(ns, tagName)
    },
    createTextNode: function(text, context) {
        context = context || this._document;
        return context.createTextNode(text)
    },
    isNode: function(element) {
        return "object" === _typeof(element) && "nodeType" in element
    },
    isElementNode: function(element) {
        return element && element.nodeType === ELEMENT_NODE
    },
    isTextNode: function(element) {
        return element && element.nodeType === TEXT_NODE
    },
    isDocument: function(element) {
        return element && element.nodeType === DOCUMENT_NODE
    },
    removeElement: function(element) {
        var parentNode = element && element.parentNode;
        if (parentNode) {
            parentNode.removeChild(element)
        }
    },
    insertElement: function(parentElement, newElement, nextSiblingElement) {
        if (parentElement && newElement && parentElement !== newElement) {
            if (nextSiblingElement) {
                parentElement.insertBefore(newElement, nextSiblingElement)
            } else {
                parentElement.appendChild(newElement)
            }
        }
    },
    getAttribute: function(element, name) {
        return element.getAttribute(name)
    },
    setAttribute: function(element, name, value) {
        element.setAttribute(name, value)
    },
    removeAttribute: function(element, name) {
        element.removeAttribute(name)
    },
    setProperty: function(element, name, value) {
        element[name] = value
    },
    setText: function(element, text) {
        if (element) {
            element.textContent = text
        }
    },
    setClass: function(element, className, isAdd) {
        if (1 === element.nodeType && className) {
            if (element.classList) {
                if (isAdd) {
                    element.classList.add(className)
                } else {
                    element.classList.remove(className)
                }
            } else {
                var classNameSupported = "string" === typeof element.className;
                var elementClass = classNameSupported ? element.className : this.getAttribute(element, "class") || "";
                var classNames = elementClass.split(" ");
                var classIndex = classNames.indexOf(className);
                var resultClassName;
                if (isAdd && classIndex < 0) {
                    resultClassName = elementClass ? elementClass + " " + className : className
                }
                if (!isAdd && classIndex >= 0) {
                    classNames.splice(classIndex, 1);
                    resultClassName = classNames.join(" ")
                }
                if (void 0 !== resultClassName) {
                    if (classNameSupported) {
                        element.className = resultClassName
                    } else {
                        this.setAttribute(element, "class", resultClassName)
                    }
                }
            }
        }
    },
    setStyle: function(element, name, value) {
        element.style[name] = value || ""
    },
    _document: "undefined" === typeof document ? void 0 : document,
    getDocument: function() {
        return this._document
    },
    getActiveElement: function() {
        return this._document.activeElement
    },
    getBody: function() {
        return this._document.body
    },
    createDocumentFragment: function() {
        return this._document.createDocumentFragment()
    },
    getDocumentElement: function() {
        return this._document.documentElement
    },
    getLocation: function() {
        return this._document.location
    },
    getSelection: function() {
        return this._document.selection
    },
    getReadyState: function() {
        return this._document.readyState
    },
    getHead: function() {
        return this._document.head
    },
    hasDocumentProperty: function(property) {
        return property in this._document
    },
    listen: function(element, event, callback, options) {
        if (!element || !("addEventListener" in element)) {
            return _common.noop
        }
        element.addEventListener(event, callback, options);
        return function() {
            element.removeEventListener(event, callback)
        }
    }
};
module.exports = (0, _dependency_injector2.default)(nativeDOMAdapterStrategy);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/errors.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var errorUtils = __webpack_require__(41);
module.exports = errorUtils({
    E0001: "Method is not implemented",
    E0002: "Member name collision: {0}",
    E0003: "A class must be instantiated using the 'new' keyword",
    E0004: "The NAME property of the component is not specified",
    E0005: "Unknown device",
    E0006: "Unknown endpoint key is requested",
    E0007: "'Invalidate' method is called outside the update transaction",
    E0008: "Type of the option name is not appropriate to create an action",
    E0009: "Component '{0}' has not been initialized for an element",
    E0010: "Animation configuration with the '{0}' type requires '{1}' configuration as {2}",
    E0011: "Unknown animation type '{0}'",
    E0012: "jQuery version is too old. Please upgrade jQuery to 1.10.0 or later",
    E0013: "KnockoutJS version is too old. Please upgrade KnockoutJS to 2.3.0 or later",
    E0014: "The 'release' method shouldn't be called for an unlocked Lock object",
    E0015: "Queued task returned an unexpected result",
    E0017: "Event namespace is not defined",
    E0018: "DevExpress.ui.DevExpressPopup widget is required",
    E0020: "Template engine '{0}' is not supported",
    E0021: "Unknown theme is set: {0}",
    E0022: "LINK[rel=DevExpress-theme] tags must go before DevExpress included scripts",
    E0023: "Template name is not specified",
    E0024: "DevExtreme bundle already included",
    E0025: "Unexpected argument type",
    E0100: "Unknown validation type is detected",
    E0101: "Misconfigured range validation rule is detected",
    E0102: "Misconfigured comparison validation rule is detected",
    E0103: "validationCallback of an asynchronous rule should return a jQuery or a native promise",
    E0110: "Unknown validation group is detected",
    E0120: "Adapter for a DevExpressValidator component cannot be configured",
    E0121: "The 'customItem' field of the 'onCustomItemCreating' function's parameter should contain a custom item or Promise that is resolved after the item is created.",
    W0000: "'{0}' is deprecated in {1}. {2}",
    W0001: "{0} - '{1}' option is deprecated in {2}. {3}",
    W0002: "{0} - '{1}' method is deprecated in {2}. {3}",
    W0003: "{0} - '{1}' property is deprecated in {2}. {3}",
    W0004: "Timeout for theme loading is over: {0}",
    W0005: "'{0}' event is deprecated in {1}. {2}",
    W0006: "Invalid recurrence rule: '{0}'",
    W0007: "'{0}' Globalize culture is not defined",
    W0008: "Invalid view name: '{0}'",
    W0009: "Invalid time zone name: '{0}'",
    W0010: "{0} is deprecated in {1}. {2}",
    W0011: "Number parsing is invoked while the parser is not defined",
    W0012: "Date parsing is invoked while the parser is not defined",
    W0013: "'{0}' file is deprecated in {1}. {2}",
    W0014: "{0} - '{1}' type is deprecated in {2}. {3}",
    W0015: "Instead of returning a value from the '{0}' function, write it into the '{1}' field of the function's parameter.",
    W0016: 'The "{0}" option does not accept the "{1}" value since v.{2}. {3}.'
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/window.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var domAdapter = __webpack_require__(5);
var hasWindow = function() {
    return "undefined" !== typeof window
};
var windowObject = hasWindow() && window;
if (!windowObject) {
    windowObject = {};
    windowObject.window = windowObject
}
var getWindow = function() {
    return windowObject
};
var hasProperty = function(prop) {
    return hasWindow() && prop in windowObject
};
var defaultScreenFactorFunc = function(width) {
    if (width < 768) {
        return "xs"
    } else {
        if (width < 992) {
            return "sm"
        } else {
            if (width < 1200) {
                return "md"
            } else {
                return "lg"
            }
        }
    }
};
var getCurrentScreenFactor = function(screenFactorCallback) {
    var screenFactorFunc = screenFactorCallback || defaultScreenFactorFunc;
    var windowWidth = domAdapter.getDocumentElement().clientWidth;
    return screenFactorFunc(windowWidth)
};
var getNavigator = function() {
    return hasWindow() ? windowObject.navigator : {
        userAgent: ""
    }
};
module.exports = {
    hasWindow: hasWindow,
    getWindow: getWindow,
    hasProperty: hasProperty,
    defaultScreenFactorFunc: defaultScreenFactorFunc,
    getCurrentScreenFactor: getCurrentScreenFactor,
    getNavigator: getNavigator
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/common.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _guid = __webpack_require__(64);
var _guid2 = _interopRequireDefault(_guid);
var _deferred = __webpack_require__(23);
var _data = __webpack_require__(26);
var _iterator = __webpack_require__(4);
var _type = __webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var ensureDefined = function(value, defaultValue) {
    return (0, _type.isDefined)(value) ? value : defaultValue
};
var executeAsync = function(action, context) {
    var deferred = new _deferred.Deferred;
    var normalizedContext = context || this;
    var task = {
        promise: deferred.promise(),
        abort: function() {
            clearTimeout(timerId);
            deferred.rejectWith(normalizedContext)
        }
    };
    var callback = function() {
        var result = action.call(normalizedContext);
        if (result && result.done && (0, _type.isFunction)(result.done)) {
            result.done(function() {
                deferred.resolveWith(normalizedContext)
            })
        } else {
            deferred.resolveWith(normalizedContext)
        }
    };
    var timerId = (arguments[2] || setTimeout)(callback, "number" === typeof context ? context : 0);
    return task
};
var delayedFuncs = [];
var delayedNames = [];
var delayedDeferreds = [];
var executingName;
var deferExecute = function(name, func, deferred) {
    if (executingName && executingName !== name) {
        delayedFuncs.push(func);
        delayedNames.push(name);
        deferred = deferred || new _deferred.Deferred;
        delayedDeferreds.push(deferred);
        return deferred
    } else {
        var oldExecutingName = executingName;
        var currentDelayedCount = delayedDeferreds.length;
        executingName = name;
        var result = func();
        if (!result) {
            if (delayedDeferreds.length > currentDelayedCount) {
                result = _deferred.when.apply(this, delayedDeferreds.slice(currentDelayedCount))
            } else {
                if (deferred) {
                    deferred.resolve()
                }
            }
        }
        executingName = oldExecutingName;
        if (deferred && result && result.done) {
            result.done(deferred.resolve).fail(deferred.reject)
        }
        if (!executingName && delayedFuncs.length) {
            ("render" === delayedNames.shift() ? deferRender : deferUpdate)(delayedFuncs.shift(), delayedDeferreds.shift())
        }
        return result || (0, _deferred.when)()
    }
};
var deferRender = function(func, deferred) {
    return deferExecute("render", func, deferred)
};
var deferUpdate = function(func, deferred) {
    return deferExecute("update", func, deferred)
};
var deferRenderer = function(func) {
    return function() {
        var that = this;
        return deferExecute("render", function() {
            return func.call(that)
        })
    }
};
var deferUpdater = function(func) {
    return function() {
        var that = this;
        return deferExecute("update", function() {
            return func.call(that)
        })
    }
};
var findBestMatches = function(targetFilter, items, mapFn) {
    var bestMatches = [];
    var maxMatchCount = 0;
    (0, _iterator.each)(items, function(index, itemSrc) {
        var matchCount = 0;
        var item = mapFn ? mapFn(itemSrc) : itemSrc;
        (0, _iterator.each)(targetFilter, function(paramName, targetValue) {
            var value = item[paramName];
            if (void 0 === value) {
                return
            }
            if (match(value, targetValue)) {
                matchCount++;
                return
            }
            matchCount = -1;
            return false
        });
        if (matchCount < maxMatchCount) {
            return
        }
        if (matchCount > maxMatchCount) {
            bestMatches.length = 0;
            maxMatchCount = matchCount
        }
        bestMatches.push(itemSrc)
    });
    return bestMatches
};
var match = function(value, targetValue) {
    if (Array.isArray(value) && Array.isArray(targetValue)) {
        var mismatch = false;
        (0, _iterator.each)(value, function(index, valueItem) {
            if (valueItem !== targetValue[index]) {
                mismatch = true;
                return false
            }
        });
        if (mismatch) {
            return false
        }
        return true
    }
    if (value === targetValue) {
        return true
    }
    return false
};
var splitPair = function(raw) {
    switch (_typeof(raw)) {
        case "string":
            return raw.split(/\s+/, 2);
        case "object":
            return [raw.x || raw.h, raw.y || raw.v];
        case "number":
            return [raw];
        default:
            return raw
    }
};
var normalizeKey = function(id) {
    var key = (0, _type.isString)(id) ? id : id.toString();
    var arr = key.match(/[^a-zA-Z0-9_]/g);
    arr && (0, _iterator.each)(arr, function(_, sign) {
        key = key.replace(sign, "__" + sign.charCodeAt() + "__")
    });
    return key
};
var denormalizeKey = function(key) {
    var arr = key.match(/__\d+__/g);
    arr && arr.forEach(function(char) {
        var charCode = parseInt(char.replace("__", ""));
        key = key.replace(char, String.fromCharCode(charCode))
    });
    return key
};
var pairToObject = function(raw, preventRound) {
    var pair = splitPair(raw);
    var h = preventRound ? parseFloat(pair && pair[0]) : parseInt(pair && pair[0], 10);
    var v = preventRound ? parseFloat(pair && pair[1]) : parseInt(pair && pair[1], 10);
    if (!isFinite(h)) {
        h = 0
    }
    if (!isFinite(v)) {
        v = h
    }
    return {
        h: h,
        v: v
    }
};
var getKeyHash = function(key) {
    if (key instanceof _guid2.default) {
        return key.toString()
    } else {
        if ((0, _type.isObject)(key) || Array.isArray(key)) {
            try {
                var keyHash = JSON.stringify(key);
                return "{}" === keyHash ? key : keyHash
            } catch (e) {
                return key
            }
        }
    }
    return key
};
var escapeRegExp = function(string) {
    return string.replace(/[[\]{}\-()*+?.\\^$|\s]/g, "\\$&")
};
var applyServerDecimalSeparator = function(value) {
    var separator = (0, _config2.default)().serverDecimalSeparator;
    if ((0, _type.isDefined)(value)) {
        value = value.toString().replace(".", separator)
    }
    return value
};
var noop = function() {};
var asyncNoop = function() {
    return (new _deferred.Deferred).resolve().promise()
};
var grep = function(elements, checkFunction, invert) {
    var result = [];
    var check;
    var expectedCheck = !invert;
    for (var i = 0; i < elements.length; i++) {
        check = !!checkFunction(elements[i], i);
        if (check === expectedCheck) {
            result.push(elements[i])
        }
    }
    return result
};
var arraysEqualByValue = function(array1, array2, depth) {
    if (array1.length !== array2.length) {
        return false
    }
    for (var i = 0; i < array1.length; i++) {
        if (!equalByValue(array1[i], array2[i], depth + 1)) {
            return false
        }
    }
    return true
};
var objectsEqualByValue = function(object1, object2, depth, strict) {
    for (var propertyName in object1) {
        if (Object.prototype.hasOwnProperty.call(object1, propertyName) && !equalByValue(object1[propertyName], object2[propertyName], depth + 1, strict)) {
            return false
        }
    }
    for (var _propertyName in object2) {
        if (!(_propertyName in object1)) {
            return false
        }
    }
    return true
};
var maxEqualityDepth = 3;
var equalByValue = function(object1, object2) {
    var depth = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    var strict = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : true;
    object1 = (0, _data.toComparable)(object1, true);
    object2 = (0, _data.toComparable)(object2, true);
    var comparisonResult = strict ? object1 === object2 : object1 == object2;
    if (comparisonResult || depth >= maxEqualityDepth) {
        return true
    }
    if ((0, _type.isObject)(object1) && (0, _type.isObject)(object2)) {
        return objectsEqualByValue(object1, object2, depth, strict)
    } else {
        if (Array.isArray(object1) && Array.isArray(object2)) {
            return arraysEqualByValue(object1, object2, depth)
        }
    }
    return false
};
exports.ensureDefined = ensureDefined;
exports.executeAsync = executeAsync;
exports.deferRender = deferRender;
exports.deferRenderer = deferRenderer;
exports.deferUpdate = deferUpdate;
exports.deferUpdater = deferUpdater;
exports.pairToObject = pairToObject;
exports.splitPair = splitPair;
exports.findBestMatches = findBestMatches;
exports.normalizeKey = normalizeKey;
exports.denormalizeKey = denormalizeKey;
exports.getKeyHash = getKeyHash;
exports.escapeRegExp = escapeRegExp;
exports.applyServerDecimalSeparator = applyServerDecimalSeparator;
exports.noop = noop;
exports.asyncNoop = asyncNoop;
exports.grep = grep;
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
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _event_registrator_callbacks = __webpack_require__(43);
var _event_registrator_callbacks2 = _interopRequireDefault(_event_registrator_callbacks);
var _extend = __webpack_require__(2);
var _dom_adapter = __webpack_require__(5);
var _dom_adapter2 = _interopRequireDefault(_dom_adapter);
var _window = __webpack_require__(7);
var _window2 = _interopRequireDefault(_window);
var _dependency_injector = __webpack_require__(19);
var _dependency_injector2 = _interopRequireDefault(_dependency_injector);
var _type = __webpack_require__(1);
var _type2 = _interopRequireDefault(_type);
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _weak_map = __webpack_require__(29);
var _weak_map2 = _interopRequireDefault(_weak_map);
var _hook_touch_props = __webpack_require__(65);
var _hook_touch_props2 = _interopRequireDefault(_hook_touch_props);
var _call_once = __webpack_require__(21);
var _call_once2 = _interopRequireDefault(_call_once);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var window = _window2.default.getWindow();
var isWindow = _type2.default.isWindow;
var isFunction = _type2.default.isFunction;
var isString = _type2.default.isString;
var EMPTY_EVENT_NAME = "dxEmptyEventType";
var NATIVE_EVENTS_TO_SUBSCRIBE = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
};
var NATIVE_EVENTS_TO_TRIGGER = {
    focusin: "focus",
    focusout: "blur"
};
var NO_BUBBLE_EVENTS = ["blur", "focus", "load"];
var forcePassiveFalseEventNames = ["touchmove", "wheel", "mousewheel", "touchstart"];

function matchesSafe(target, selector) {
    return !isWindow(target) && "#document" !== target.nodeName && _dom_adapter2.default.elementMatches(target, selector)
}
var elementDataMap = new _weak_map2.default;
var guid = 0;
var skipEvent;
var special = function() {
    var specialData = {};
    _event_registrator_callbacks2.default.add(function(eventName, eventObject) {
        specialData[eventName] = eventObject
    });
    return {
        getField: function(eventName, field) {
            return specialData[eventName] && specialData[eventName][field]
        },
        callMethod: function(eventName, methodName, context, args) {
            return specialData[eventName] && specialData[eventName][methodName] && specialData[eventName][methodName].apply(context, args)
        }
    }
}();
var eventsEngine = (0, _dependency_injector2.default)({
    on: getHandler(normalizeOnArguments(iterate(function(element, eventName, selector, data, handler) {
        var handlersController = getHandlersController(element, eventName);
        handlersController.addHandler(handler, selector, data)
    }))),
    one: getHandler(normalizeOnArguments(function(element, eventName, selector, data, handler) {
        var oneTimeHandler = function oneTimeHandler() {
            eventsEngine.off(element, eventName, selector, oneTimeHandler);
            handler.apply(this, arguments)
        };
        eventsEngine.on(element, eventName, selector, data, oneTimeHandler)
    })),
    off: getHandler(normalizeOffArguments(iterate(function(element, eventName, selector, handler) {
        var handlersController = getHandlersController(element, eventName);
        handlersController.removeHandler(handler, selector)
    }))),
    trigger: getHandler(normalizeTriggerArguments(function(element, event, extraParameters) {
        var eventName = event.type;
        var handlersController = getHandlersController(element, event.type);
        special.callMethod(eventName, "trigger", element, [event, extraParameters]);
        handlersController.callHandlers(event, extraParameters);
        var noBubble = special.getField(eventName, "noBubble") || event.isPropagationStopped() || NO_BUBBLE_EVENTS.indexOf(eventName) !== -1;
        if (!noBubble) {
            var parents = [];
            var getParents = function getParents(element) {
                var parent = element.parentNode;
                if (parent) {
                    parents.push(parent);
                    getParents(parent)
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
                i++
            }
        }
        if (element.nodeType || isWindow(element)) {
            special.callMethod(eventName, "_default", element, [event, extraParameters]);
            callNativeMethod(eventName, element)
        }
    })),
    triggerHandler: getHandler(normalizeTriggerArguments(function(element, event, extraParameters) {
        var handlersController = getHandlersController(element, event.type);
        handlersController.callHandlers(event, extraParameters)
    }))
});

function applyForEach(args, method) {
    var element = args[0];
    if (!element) {
        return
    }
    if (_dom_adapter2.default.isNode(element) || isWindow(element)) {
        method.apply(eventsEngine, args)
    } else {
        if (!isString(element) && "length" in element) {
            var itemArgs = Array.prototype.slice.call(args, 0);
            Array.prototype.forEach.call(element, function(itemElement) {
                itemArgs[0] = itemElement;
                applyForEach(itemArgs, method)
            })
        } else {
            throw _errors2.default.Error("E0025")
        }
    }
}

function getHandler(method) {
    return function() {
        applyForEach(arguments, method)
    }
}

function detectPassiveEventHandlersSupport() {
    var isSupported = false;
    try {
        var options = Object.defineProperty({}, "passive", {
            get: function() {
                isSupported = true;
                return true
            }
        });
        window.addEventListener("test", null, options)
    } catch (e) {}
    return isSupported
}
var passiveEventHandlersSupported = (0, _call_once2.default)(detectPassiveEventHandlersSupport);
var contains = function contains(container, element) {
    if (isWindow(container)) {
        return contains(container.document, element)
    }
    return container.contains ? container.contains(element) : !!(element.compareDocumentPosition(container) & element.DOCUMENT_POSITION_CONTAINS)
};

function getHandlersController(element, eventName) {
    var elementData = elementDataMap.get(element);
    eventName = eventName || "";
    var eventNameParts = eventName.split(".");
    var namespaces = eventNameParts.slice(1);
    var eventNameIsDefined = !!eventNameParts[0];
    eventName = eventNameParts[0] || EMPTY_EVENT_NAME;
    if (!elementData) {
        elementData = {};
        elementDataMap.set(element, elementData)
    }
    if (!elementData[eventName]) {
        elementData[eventName] = {
            handleObjects: [],
            nativeHandler: null
        }
    }
    var eventData = elementData[eventName];
    return {
        addHandler: function(handler, selector, data) {
            var callHandler = function(e, extraParameters) {
                var handlerArgs = [e];
                var target = e.currentTarget;
                var relatedTarget = e.relatedTarget;
                var secondaryTargetIsInside;
                var result;
                if (eventName in NATIVE_EVENTS_TO_SUBSCRIBE) {
                    secondaryTargetIsInside = relatedTarget && target && (relatedTarget === target || contains(target, relatedTarget))
                }
                if (void 0 !== extraParameters) {
                    handlerArgs.push(extraParameters)
                }
                special.callMethod(eventName, "handle", element, [e, data]);
                if (!secondaryTargetIsInside) {
                    result = handler.apply(target, handlerArgs)
                }
                if (false === result) {
                    e.preventDefault();
                    e.stopPropagation()
                }
            };
            var wrappedHandler = function(e, extraParameters) {
                if (skipEvent && e.type === skipEvent) {
                    return
                }
                e.data = data;
                e.delegateTarget = element;
                if (selector) {
                    var currentTarget = e.target;
                    while (currentTarget && currentTarget !== element) {
                        if (matchesSafe(currentTarget, selector)) {
                            e.currentTarget = currentTarget;
                            callHandler(e, extraParameters)
                        }
                        currentTarget = currentTarget.parentNode
                    }
                } else {
                    e.currentTarget = e.delegateTarget || e.target;
                    callHandler(e, extraParameters)
                }
            };
            var handleObject = {
                handler: handler,
                wrappedHandler: wrappedHandler,
                selector: selector,
                type: eventName,
                data: data,
                namespace: namespaces.join("."),
                namespaces: namespaces,
                guid: ++guid
            };
            eventData.handleObjects.push(handleObject);
            var firstHandlerForTheType = 1 === eventData.handleObjects.length;
            var shouldAddNativeListener = firstHandlerForTheType && eventNameIsDefined;
            var nativeListenerOptions;
            if (shouldAddNativeListener) {
                shouldAddNativeListener = !special.callMethod(eventName, "setup", element, [data, namespaces, handler])
            }
            if (shouldAddNativeListener) {
                eventData.nativeHandler = getNativeHandler(eventName);
                if (passiveEventHandlersSupported() && forcePassiveFalseEventNames.indexOf(eventName) > -1) {
                    nativeListenerOptions = {
                        passive: false
                    }
                }
                eventData.removeListener = _dom_adapter2.default.listen(element, NATIVE_EVENTS_TO_SUBSCRIBE[eventName] || eventName, eventData.nativeHandler, nativeListenerOptions)
            }
            special.callMethod(eventName, "add", element, [handleObject])
        },
        removeHandler: function(handler, selector) {
            var removeByEventName = function(eventName) {
                var eventData = elementData[eventName];
                if (!eventData.handleObjects.length) {
                    delete elementData[eventName];
                    return
                }
                var removedHandler;
                eventData.handleObjects = eventData.handleObjects.filter(function(handleObject) {
                    var skip = namespaces.length && !isSubset(handleObject.namespaces, namespaces) || handler && handleObject.handler !== handler || selector && handleObject.selector !== selector;
                    if (!skip) {
                        removedHandler = handleObject.handler;
                        special.callMethod(eventName, "remove", element, [handleObject])
                    }
                    return skip
                });
                var lastHandlerForTheType = !eventData.handleObjects.length;
                var shouldRemoveNativeListener = lastHandlerForTheType && eventName !== EMPTY_EVENT_NAME;
                if (shouldRemoveNativeListener) {
                    special.callMethod(eventName, "teardown", element, [namespaces, removedHandler]);
                    if (eventData.nativeHandler) {
                        eventData.removeListener()
                    }
                    delete elementData[eventName]
                }
            };
            if (eventNameIsDefined) {
                removeByEventName(eventName)
            } else {
                for (var name in elementData) {
                    removeByEventName(name)
                }
            }
            var elementDataIsEmpty = 0 === Object.keys(elementData).length;
            if (elementDataIsEmpty) {
                elementDataMap.delete(element)
            }
        },
        callHandlers: function(event, extraParameters) {
            var forceStop = false;
            var handleCallback = function(handleObject) {
                if (forceStop) {
                    return
                }
                if (!namespaces.length || isSubset(handleObject.namespaces, namespaces)) {
                    handleObject.wrappedHandler(event, extraParameters);
                    forceStop = event.isImmediatePropagationStopped()
                }
            };
            eventData.handleObjects.forEach(handleCallback);
            if (namespaces.length && elementData[EMPTY_EVENT_NAME]) {
                elementData[EMPTY_EVENT_NAME].handleObjects.forEach(handleCallback)
            }
        }
    }
}

function getNativeHandler(subscribeName) {
    return function(event, extraParameters) {
        var handlersController = getHandlersController(this, subscribeName);
        event = eventsEngine.Event(event);
        handlersController.callHandlers(event, extraParameters)
    }
}

function isSubset(original, checked) {
    for (var i = 0; i < checked.length; i++) {
        if (original.indexOf(checked[i]) < 0) {
            return false
        }
    }
    return true
}

function normalizeOnArguments(callback) {
    return function(element, eventName, selector, data, handler) {
        if (!handler) {
            handler = data;
            data = void 0
        }
        if ("string" !== typeof selector) {
            data = selector;
            selector = void 0
        }
        if (!handler && "string" === typeof eventName) {
            handler = data || selector;
            selector = void 0;
            data = void 0
        }
        callback(element, eventName, selector, data, handler)
    }
}

function normalizeOffArguments(callback) {
    return function(element, eventName, selector, handler) {
        if ("function" === typeof selector) {
            handler = selector;
            selector = void 0
        }
        callback(element, eventName, selector, handler)
    }
}

function normalizeTriggerArguments(callback) {
    return function(element, src, extraParameters) {
        if ("string" === typeof src) {
            src = {
                type: src
            }
        }
        if (!src.target) {
            src.target = element
        }
        src.currentTarget = element;
        if (!src.delegateTarget) {
            src.delegateTarget = element
        }
        if (!src.type && src.originalEvent) {
            src.type = src.originalEvent.type
        }
        callback(element, src instanceof eventsEngine.Event ? src : eventsEngine.Event(src), extraParameters)
    }
}

function normalizeEventArguments(callback) {
    return function(src, config) {
        if (!(this instanceof eventsEngine.Event)) {
            return new eventsEngine.Event(src, config)
        }
        if (!src) {
            src = {}
        }
        if ("string" === typeof src) {
            src = {
                type: src
            }
        }
        if (!config) {
            config = {}
        }
        callback.call(this, src, config)
    }
}

function iterate(callback) {
    var iterateEventNames = function(element, eventName) {
        if (eventName && eventName.indexOf(" ") > -1) {
            var args = Array.prototype.slice.call(arguments, 0);
            eventName.split(" ").forEach(function(eventName) {
                args[1] = eventName;
                callback.apply(this, args)
            })
        } else {
            callback.apply(this, arguments)
        }
    };
    return function(element, eventName) {
        if ("object" === _typeof(eventName)) {
            var args = Array.prototype.slice.call(arguments, 0);
            for (var name in eventName) {
                args[1] = name;
                args[args.length - 1] = eventName[name];
                iterateEventNames.apply(this, args)
            }
        } else {
            iterateEventNames.apply(this, arguments)
        }
    }
}

function callNativeMethod(eventName, element) {
    var nativeMethodName = NATIVE_EVENTS_TO_TRIGGER[eventName] || eventName;
    var isLinkClickEvent = function(eventName, element) {
        return "click" === eventName && "a" === element.localName
    };
    if (isLinkClickEvent(eventName, element)) {
        return
    }
    if (isFunction(element[nativeMethodName])) {
        skipEvent = eventName;
        element[nativeMethodName]();
        skipEvent = void 0
    }
}

function calculateWhich(event) {
    var setForMouseEvent = function(event) {
        var mouseEventRegex = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
        return !event.which && void 0 !== event.button && mouseEventRegex.test(event.type)
    };
    var setForKeyEvent = function(event) {
        return null == event.which && 0 === event.type.indexOf("key")
    };
    if (setForKeyEvent(event)) {
        return null != event.charCode ? event.charCode : event.keyCode
    }
    if (setForMouseEvent(event)) {
        var whichByButton = {
            1: 1,
            2: 3,
            3: 1,
            4: 2
        };
        return whichByButton[event.button]
    }
    return event.which
}

function initEvent(EventClass) {
    if (EventClass) {
        eventsEngine.Event = EventClass;
        eventsEngine.Event.prototype = EventClass.prototype
    }
}
initEvent(normalizeEventArguments(function(src, config) {
    var that = this;
    var propagationStopped = false;
    var immediatePropagationStopped = false;
    var defaultPrevented = false;
    (0, _extend.extend)(that, src);
    if (src instanceof eventsEngine.Event || _window2.default.hasWindow() && src instanceof window.Event) {
        that.originalEvent = src;
        that.currentTarget = void 0
    }
    if (!(src instanceof eventsEngine.Event)) {
        (0, _extend.extend)(that, {
            isPropagationStopped: function() {
                return !!(propagationStopped || that.originalEvent && that.originalEvent.propagationStopped)
            },
            stopPropagation: function() {
                propagationStopped = true;
                that.originalEvent && that.originalEvent.stopPropagation()
            },
            isImmediatePropagationStopped: function() {
                return immediatePropagationStopped
            },
            stopImmediatePropagation: function() {
                this.stopPropagation();
                immediatePropagationStopped = true;
                that.originalEvent && that.originalEvent.stopImmediatePropagation()
            },
            isDefaultPrevented: function() {
                return !!(defaultPrevented || that.originalEvent && that.originalEvent.defaultPrevented)
            },
            preventDefault: function() {
                defaultPrevented = true;
                that.originalEvent && that.originalEvent.preventDefault()
            }
        })
    }
    addProperty("which", calculateWhich, that);
    if (0 === src.type.indexOf("touch")) {
        delete config.pageX;
        delete config.pageY
    }(0, _extend.extend)(that, config);
    that.guid = ++guid
}));

function addProperty(propName, hook, eventInstance) {
    Object.defineProperty(eventInstance || eventsEngine.Event.prototype, propName, {
        enumerable: true,
        configurable: true,
        get: function() {
            return this.originalEvent && hook(this.originalEvent)
        },
        set: function(value) {
            Object.defineProperty(this, propName, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
            })
        }
    })
}(0, _hook_touch_props2.default)(addProperty);
var beforeSetStrategy = (0, _callbacks2.default)();
var afterSetStrategy = (0, _callbacks2.default)();
eventsEngine.set = function(engine) {
    beforeSetStrategy.fire();
    eventsEngine.inject(engine);
    initEvent(engine.Event);
    afterSetStrategy.fire()
};
eventsEngine.subscribeGlobal = function() {
    applyForEach(arguments, normalizeOnArguments(function() {
        var args = arguments;
        eventsEngine.on.apply(this, args);
        beforeSetStrategy.add(function() {
            var offArgs = Array.prototype.slice.call(args, 0);
            offArgs.splice(3, 1);
            eventsEngine.off.apply(this, offArgs)
        });
        afterSetStrategy.add(function() {
            eventsEngine.on.apply(this, args)
        })
    }))
};
eventsEngine.forcePassiveFalseEventNames = forcePassiveFalseEventNames;
eventsEngine.passiveEventHandlersSupported = passiveEventHandlersSupported;
module.exports = eventsEngine;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/class.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var errors = __webpack_require__(6);
var typeUtils = __webpack_require__(1);
var wrapOverridden = function(baseProto, methodName, method) {
    return function() {
        var prevCallBase = this.callBase;
        this.callBase = baseProto[methodName];
        try {
            return method.apply(this, arguments)
        } finally {
            this.callBase = prevCallBase
        }
    }
};
var clonePrototype = function(obj) {
    var func = function() {};
    func.prototype = obj.prototype;
    return new func
};
var redefine = function(members) {
    var that = this;
    var overridden;
    var memberName;
    var member;
    if (!members) {
        return that
    }
    for (memberName in members) {
        member = members[memberName];
        overridden = "function" === typeof that.prototype[memberName] && "function" === typeof member;
        that.prototype[memberName] = overridden ? wrapOverridden(that.parent.prototype, memberName, member) : member
    }
    return that
};
var include = function() {
    var classObj = this;
    var argument;
    var name;
    var i;
    var hasClassObjOwnProperty = Object.prototype.hasOwnProperty.bind(classObj);
    var isES6Class = !hasClassObjOwnProperty("_includedCtors") && !hasClassObjOwnProperty("_includedPostCtors");
    if (isES6Class) {
        classObj._includedCtors = classObj._includedCtors.slice(0);
        classObj._includedPostCtors = classObj._includedPostCtors.slice(0)
    }
    for (i = 0; i < arguments.length; i++) {
        argument = arguments[i];
        if (argument.ctor) {
            classObj._includedCtors.push(argument.ctor)
        }
        if (argument.postCtor) {
            classObj._includedPostCtors.push(argument.postCtor)
        }
        for (name in argument) {
            if ("ctor" === name || "postCtor" === name) {
                continue
            }
            classObj.prototype[name] = argument[name]
        }
    }
    return classObj
};
var subclassOf = function(parentClass) {
    var hasParentProperty = Object.prototype.hasOwnProperty.bind(this)("parent");
    var isES6Class = !hasParentProperty && this.parent;
    if (isES6Class) {
        var baseClass = Object.getPrototypeOf(this);
        return baseClass === parentClass || baseClass.subclassOf(parentClass)
    } else {
        if (this.parent === parentClass) {
            return true
        }
        if (!this.parent || !this.parent.subclassOf) {
            return false
        }
        return this.parent.subclassOf(parentClass)
    }
};
var abstract = function() {
    throw errors.Error("E0001")
};
var copyStatic = function() {
    var hasOwn = Object.prototype.hasOwnProperty;
    return function(source, destination) {
        for (var key in source) {
            if (!hasOwn.call(source, key)) {
                return
            }
            destination[key] = source[key]
        }
    }
}();
var classImpl = function() {};
classImpl.inherit = function(members) {
    var inheritor = function() {
        if (!this || typeUtils.isWindow(this) || "function" !== typeof this.constructor) {
            throw errors.Error("E0003")
        }
        var instance = this;
        var ctor = instance.ctor;
        var includedCtors = instance.constructor._includedCtors;
        var includedPostCtors = instance.constructor._includedPostCtors;
        var i;
        for (i = 0; i < includedCtors.length; i++) {
            includedCtors[i].call(instance)
        }
        if (ctor) {
            ctor.apply(instance, arguments)
        }
        for (i = 0; i < includedPostCtors.length; i++) {
            includedPostCtors[i].call(instance)
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
    return inheritor
};
classImpl.abstract = abstract;
module.exports = classImpl;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var Callback = function(options) {
    this._options = options || {};
    this._list = [];
    this._queue = [];
    this._firing = false;
    this._fired = false;
    this._firingIndexes = []
};
Callback.prototype._fireCore = function(context, args) {
    var firingIndexes = this._firingIndexes;
    var list = this._list;
    var stopOnFalse = this._options.stopOnFalse;
    var step = firingIndexes.length;
    for (firingIndexes[step] = 0; firingIndexes[step] < list.length; firingIndexes[step]++) {
        var result = list[firingIndexes[step]].apply(context, args);
        if (false === result && stopOnFalse) {
            break
        }
    }
    firingIndexes.pop()
};
Callback.prototype.add = function(fn) {
    if ("function" === typeof fn && (!this._options.unique || !this.has(fn))) {
        this._list.push(fn)
    }
    return this
};
Callback.prototype.remove = function(fn) {
    var list = this._list;
    var firingIndexes = this._firingIndexes;
    var index = list.indexOf(fn);
    if (index > -1) {
        list.splice(index, 1);
        if (this._firing && firingIndexes.length) {
            for (var step = 0; step < firingIndexes.length; step++) {
                if (index <= firingIndexes[step]) {
                    firingIndexes[step]--
                }
            }
        }
    }
    return this
};
Callback.prototype.has = function(fn) {
    var list = this._list;
    return fn ? list.indexOf(fn) > -1 : !!list.length
};
Callback.prototype.empty = function(fn) {
    this._list = [];
    return this
};
Callback.prototype.fireWith = function(context, args) {
    var queue = this._queue;
    args = args || [];
    args = args.slice ? args.slice() : args;
    if (this._options.syncStrategy) {
        this._firing = true;
        this._fireCore(context, args)
    } else {
        queue.push([context, args]);
        if (this._firing) {
            return
        }
        this._firing = true;
        while (queue.length) {
            var memory = queue.shift();
            this._fireCore(memory[0], memory[1])
        }
    }
    this._firing = false;
    this._fired = true;
    return this
};
Callback.prototype.fire = function() {
    this.fireWith(this, arguments)
};
Callback.prototype.fired = function() {
    return this._fired
};
var Callbacks = function(options) {
    return new Callback(options)
};
module.exports = Callbacks;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/utils/index.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNamespace = exports.getChar = exports.normalizeKeyName = exports.fireEvent = exports.createEvent = exports.setEventFixMethod = exports.needSkipEvent = exports.stopEventsSkipping = exports.forceSkipEvents = exports.hasTouches = exports.eventDelta = exports.eventData = exports.isFakeClickEvent = exports.isKeyboardEvent = exports.isTouchEvent = exports.isDxMouseWheelEvent = exports.isMouseEvent = exports.isPointerEvent = exports.eventSource = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _add_namespace = __webpack_require__(99);
var _add_namespace2 = _interopRequireDefault(_add_namespace);
var _events_engine = __webpack_require__(10);
var _events_engine2 = _interopRequireDefault(_events_engine);
var _iterator = __webpack_require__(4);
var _extend = __webpack_require__(2);
var _selectors = __webpack_require__(54);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var KEY_MAP = {
    backspace: "backspace",
    tab: "tab",
    enter: "enter",
    escape: "escape",
    pageup: "pageUp",
    pagedown: "pageDown",
    end: "end",
    home: "home",
    arrowleft: "leftArrow",
    arrowup: "upArrow",
    arrowright: "rightArrow",
    arrowdown: "downArrow",
    "delete": "del",
    " ": "space",
    f: "F",
    a: "A",
    "*": "asterisk",
    "-": "minus",
    alt: "alt",
    control: "control",
    shift: "shift",
    left: "leftArrow",
    up: "upArrow",
    right: "rightArrow",
    down: "downArrow",
    multiply: "asterisk",
    spacebar: "space",
    del: "del",
    subtract: "minus",
    esc: "escape"
};
var LEGACY_KEY_CODES = {
    8: "backspace",
    9: "tab",
    13: "enter",
    27: "escape",
    33: "pageUp",
    34: "pageDown",
    35: "end",
    36: "home",
    37: "leftArrow",
    38: "upArrow",
    39: "rightArrow",
    40: "downArrow",
    46: "del",
    32: "space",
    70: "F",
    65: "A",
    106: "asterisk",
    109: "minus",
    189: "minus",
    173: "minus",
    16: "shift",
    17: "control",
    18: "alt"
};
var EVENT_SOURCES_REGEX = {
    dx: /^dx/i,
    mouse: /(mouse|wheel)/i,
    touch: /^touch/i,
    keyboard: /^key/i,
    pointer: /^(ms)?pointer/i
};
var fixMethod = function(e) {
    return e
};
var copyEvent = function(originalEvent) {
    return fixMethod((0, _events_engine.Event)(originalEvent, originalEvent), originalEvent)
};
var isDxEvent = function(e) {
    return "dx" === eventSource(e)
};
var isNativeMouseEvent = function(e) {
    return "mouse" === eventSource(e)
};
var isNativeTouchEvent = function(e) {
    return "touch" === eventSource(e)
};
var eventSource = exports.eventSource = function(_ref) {
    var type = _ref.type;
    var result = "other";
    (0, _iterator.each)(EVENT_SOURCES_REGEX, function(key) {
        if (this.test(type)) {
            result = key;
            return false
        }
    });
    return result
};
var isPointerEvent = exports.isPointerEvent = function(e) {
    return "pointer" === eventSource(e)
};
var isMouseEvent = exports.isMouseEvent = function(e) {
    return isNativeMouseEvent(e) || (isPointerEvent(e) || isDxEvent(e)) && "mouse" === e.pointerType
};
var isDxMouseWheelEvent = exports.isDxMouseWheelEvent = function(e) {
    return e && "dxmousewheel" === e.type
};
var isTouchEvent = exports.isTouchEvent = function(e) {
    return isNativeTouchEvent(e) || (isPointerEvent(e) || isDxEvent(e)) && "touch" === e.pointerType
};
var isKeyboardEvent = exports.isKeyboardEvent = function(e) {
    return "keyboard" === eventSource(e)
};
var isFakeClickEvent = exports.isFakeClickEvent = function(_ref2) {
    var screenX = _ref2.screenX,
        offsetX = _ref2.offsetX,
        pageX = _ref2.pageX;
    return 0 === screenX && !offsetX && 0 === pageX
};
var eventData = exports.eventData = function(_ref3) {
    var pageX = _ref3.pageX,
        pageY = _ref3.pageY,
        timeStamp = _ref3.timeStamp;
    return {
        x: pageX,
        y: pageY,
        time: timeStamp
    }
};
var eventDelta = exports.eventDelta = function(from, to) {
    return {
        x: to.x - from.x,
        y: to.y - from.y,
        time: to.time - from.time || 1
    }
};
var hasTouches = exports.hasTouches = function(e) {
    var originalEvent = e.originalEvent,
        pointers = e.pointers;
    if (isNativeTouchEvent(e)) {
        return (originalEvent.touches || []).length
    }
    if (isDxEvent(e)) {
        return (pointers || []).length
    }
    return 0
};
var skipEvents = false;
var forceSkipEvents = exports.forceSkipEvents = function() {
    return skipEvents = true
};
var stopEventsSkipping = exports.stopEventsSkipping = function() {
    return skipEvents = false
};
var needSkipEvent = exports.needSkipEvent = function(e) {
    if (skipEvents) {
        return true
    }
    var target = e.target;
    var $target = (0, _renderer2.default)(target);
    var touchInInput = $target.is("input, textarea, select");
    if ($target.is(".dx-skip-gesture-event *, .dx-skip-gesture-event")) {
        return true
    }
    if (isDxMouseWheelEvent(e)) {
        var isTextArea = $target.is("textarea") && $target.hasClass("dx-texteditor-input");
        if (isTextArea) {
            return false
        }
        var isContentEditable = target.isContentEditable || target.hasAttribute("contenteditable");
        if (isContentEditable) {
            return false
        }
        var isInputFocused = $target.is("input[type='number'], textarea, select") && $target.is(":focus");
        return isInputFocused
    }
    if (isMouseEvent(e)) {
        return touchInInput || e.which > 1
    }
    if (isTouchEvent(e)) {
        return touchInInput && (0, _selectors.focused)($target)
    }
};
var setEventFixMethod = exports.setEventFixMethod = function(func) {
    return fixMethod = func
};
var createEvent = exports.createEvent = function(originalEvent, args) {
    var event = copyEvent(originalEvent);
    args && (0, _extend.extend)(event, args);
    return event
};
var fireEvent = exports.fireEvent = function(props) {
    var originalEvent = props.originalEvent,
        delegateTarget = props.delegateTarget;
    var event = createEvent(originalEvent, props);
    _events_engine2.default.trigger(delegateTarget || event.target, event);
    return event
};
var normalizeKeyName = exports.normalizeKeyName = function(_ref4) {
    var key = _ref4.key,
        which = _ref4.which;
    var isKeySupported = !!key;
    key = isKeySupported ? key : which;
    if (key) {
        if (isKeySupported) {
            key = KEY_MAP[key.toLowerCase()] || key
        } else {
            key = LEGACY_KEY_CODES[key] || String.fromCharCode(key)
        }
        return key
    }
};
var getChar = exports.getChar = function(_ref5) {
    var key = _ref5.key,
        which = _ref5.which;
    return key || String.fromCharCode(which)
};
var addNamespace = exports.addNamespace = _add_namespace2.default;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/array.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var isDefined = __webpack_require__(1).isDefined;
var each = __webpack_require__(4).each;
var objectUtils = __webpack_require__(30);
var config = __webpack_require__(17);
var isEmpty = function(entity) {
    return Array.isArray(entity) && !entity.length
};
var wrapToArray = function(entity) {
    return Array.isArray(entity) ? entity : [entity]
};
var inArray = function(value, object) {
    if (!object) {
        return -1
    }
    var array = Array.isArray(object) ? object : object.toArray();
    return array.indexOf(value)
};
var intersection = function(a, b) {
    if (!Array.isArray(a) || 0 === a.length || !Array.isArray(b) || 0 === b.length) {
        return []
    }
    var result = [];
    each(a, function(_, value) {
        var index = inArray(value, b);
        if (index !== -1) {
            result.push(value)
        }
    });
    return result
};
var removeDuplicates = function(from, what) {
    if (!Array.isArray(from) || 0 === from.length) {
        return []
    }
    if (!Array.isArray(what) || 0 === what.length) {
        return from.slice()
    }
    var result = [];
    each(from, function(_, value) {
        var index = inArray(value, what);
        if (index === -1) {
            result.push(value)
        }
    });
    return result
};
var normalizeIndexes = function(items, indexParameterName, currentItem, needIndexCallback) {
    var indexedItems = {};
    var parameterIndex = 0;
    var useLegacyVisibleIndex = config().useLegacyVisibleIndex;
    each(items, function(index, item) {
        index = item[indexParameterName];
        if (index >= 0) {
            indexedItems[index] = indexedItems[index] || [];
            if (item === currentItem) {
                indexedItems[index].unshift(item)
            } else {
                indexedItems[index].push(item)
            }
        } else {
            item[indexParameterName] = void 0
        }
    });
    if (!useLegacyVisibleIndex) {
        each(items, function() {
            if (!isDefined(this[indexParameterName]) && (!needIndexCallback || needIndexCallback(this))) {
                while (indexedItems[parameterIndex]) {
                    parameterIndex++
                }
                indexedItems[parameterIndex] = [this];
                parameterIndex++
            }
        })
    }
    parameterIndex = 0;
    objectUtils.orderEach(indexedItems, function(index, items) {
        each(items, function() {
            if (index >= 0) {
                this[indexParameterName] = parameterIndex++
            }
        })
    });
    if (useLegacyVisibleIndex) {
        each(items, function() {
            if (!isDefined(this[indexParameterName]) && (!needIndexCallback || needIndexCallback(this))) {
                this[indexParameterName] = parameterIndex++
            }
        })
    }
    return parameterIndex
};
var merge = function(array1, array2) {
    for (var i = 0; i < array2.length; i++) {
        array1[array1.length] = array2[i]
    }
    return array1
};
var find = function(array, condition) {
    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            return array[i]
        }
    }
};
exports.isEmpty = isEmpty;
exports.wrapToArray = wrapToArray;
exports.intersection = intersection;
exports.removeDuplicates = removeDuplicates;
exports.normalizeIndexes = normalizeIndexes;
exports.inArray = inArray;
exports.merge = merge;
exports.find = find;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/devices.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _window = __webpack_require__(7);
var _window2 = _interopRequireDefault(_window);
var _extend = __webpack_require__(2);
var _type = __webpack_require__(1);
var _iterator = __webpack_require__(4);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);
var _ready_callbacks = __webpack_require__(22);
var _ready_callbacks2 = _interopRequireDefault(_ready_callbacks);
var _resize_callbacks = __webpack_require__(45);
var _resize_callbacks2 = _interopRequireDefault(_resize_callbacks);
var _events_strategy = __webpack_require__(34);
var _storage = __webpack_require__(67);
var _view_port = __webpack_require__(46);
var _view_port2 = _interopRequireDefault(_view_port);
var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var navigator = _window2.default.getNavigator();
var window = _window2.default.getWindow();
var KNOWN_UA_TABLE = {
    iPhone: "iPhone",
    iPhone5: "iPhone",
    iPhone6: "iPhone",
    iPhone6plus: "iPhone",
    iPad: "iPad",
    iPadMini: "iPad Mini",
    androidPhone: "Android Mobile",
    androidTablet: "Android",
    msSurface: "Windows ARM Tablet PC",
    desktop: "desktop"
};
var DEFAULT_DEVICE = {
    deviceType: "desktop",
    platform: "generic",
    version: [],
    phone: false,
    tablet: false,
    android: false,
    ios: false,
    generic: true,
    grade: "A",
    mac: false
};
var uaParsers = {
    generic: function(userAgent) {
        var isPhone = /windows phone/i.test(userAgent) || userAgent.match(/WPDesktop/);
        var isTablet = !isPhone && /Windows(.*)arm(.*)Tablet PC/i.test(userAgent);
        var isDesktop = !isPhone && !isTablet && /msapphost/i.test(userAgent);
        var isMac = /((intel|ppc) mac os x)/.test(userAgent.toLowerCase());
        if (!(isPhone || isTablet || isDesktop || isMac)) {
            return
        }
        return {
            deviceType: isPhone ? "phone" : isTablet ? "tablet" : "desktop",
            platform: "generic",
            version: [],
            grade: "A",
            mac: isMac
        }
    },
    ios: function(userAgent) {
        if (!/ip(hone|od|ad)/i.test(userAgent)) {
            return
        }
        var isPhone = /ip(hone|od)/i.test(userAgent);
        var matches = userAgent.match(/os (\d+)_(\d+)_?(\d+)?/i);
        var version = matches ? [parseInt(matches[1], 10), parseInt(matches[2], 10), parseInt(matches[3] || 0, 10)] : [];
        var isIPhone4 = 480 === window.screen.height;
        var grade = isIPhone4 ? "B" : "A";
        return {
            deviceType: isPhone ? "phone" : "tablet",
            platform: "ios",
            version: version,
            grade: grade
        }
    },
    android: function(userAgent) {
        if (!/android|htc_|silk/i.test(userAgent)) {
            return
        }
        var isPhone = /mobile/i.test(userAgent);
        var matches = userAgent.match(/android (\d+)\.?(\d+)?\.?(\d+)?/i);
        var version = matches ? [parseInt(matches[1], 10), parseInt(matches[2] || 0, 10), parseInt(matches[3] || 0, 10)] : [];
        var worseThan4_4 = version.length > 1 && (version[0] < 4 || 4 === version[0] && version[1] < 4);
        var grade = worseThan4_4 ? "B" : "A";
        return {
            deviceType: isPhone ? "phone" : "tablet",
            platform: "android",
            version: version,
            grade: grade
        }
    }
};
var Devices = function() {
    function Devices(options) {
        _classCallCheck(this, Devices);
        this._window = (null === options || void 0 === options ? void 0 : options.window) || window;
        this._realDevice = this._getDevice();
        this._currentDevice = void 0;
        this._currentOrientation = void 0;
        this._eventsStrategy = new _events_strategy.EventsStrategy(this);
        this.changed = (0, _callbacks2.default)();
        if (_window2.default.hasWindow()) {
            _ready_callbacks2.default.add(this._recalculateOrientation.bind(this));
            _resize_callbacks2.default.add(this._recalculateOrientation.bind(this))
        }
    }
    _createClass(Devices, [{
        key: "current",
        value: function(deviceOrName) {
            if (deviceOrName) {
                this._currentDevice = this._getDevice(deviceOrName);
                this._forced = true;
                this.changed.fire();
                return
            }
            if (!this._currentDevice) {
                deviceOrName = void 0;
                try {
                    deviceOrName = this._getDeviceOrNameFromWindowScope()
                } catch (e) {
                    deviceOrName = this._getDeviceNameFromSessionStorage()
                } finally {
                    if (!deviceOrName) {
                        deviceOrName = this._getDeviceNameFromSessionStorage()
                    }
                    if (deviceOrName) {
                        this._forced = true
                    }
                }
                this._currentDevice = this._getDevice(deviceOrName)
            }
            return this._currentDevice
        }
    }, {
        key: "real",
        value: function(forceDevice) {
            return (0, _extend.extend)({}, this._realDevice)
        }
    }, {
        key: "orientation",
        value: function() {
            return this._currentOrientation
        }
    }, {
        key: "isForced",
        value: function() {
            return this._forced
        }
    }, {
        key: "isRippleEmulator",
        value: function() {
            return !!this._window.tinyHippos
        }
    }, {
        key: "_getCssClasses",
        value: function(device) {
            var result = [];
            var realDevice = this._realDevice;
            device = device || this.current();
            if (device.deviceType) {
                result.push("dx-device-".concat(device.deviceType));
                if ("desktop" !== device.deviceType) {
                    result.push("dx-device-mobile")
                }
            }
            result.push("dx-device-".concat(realDevice.platform));
            if (realDevice.version && realDevice.version.length) {
                result.push("dx-device-".concat(realDevice.platform, "-").concat(realDevice.version[0]))
            }
            if (this.isSimulator()) {
                result.push("dx-simulator")
            }
            if ((0, _config2.default)().rtlEnabled) {
                result.push("dx-rtl")
            }
            return result
        }
    }, {
        key: "attachCssClasses",
        value: function(element, device) {
            this._deviceClasses = this._getCssClasses(device).join(" ");
            (0, _renderer2.default)(element).addClass(this._deviceClasses)
        }
    }, {
        key: "detachCssClasses",
        value: function(element) {
            (0, _renderer2.default)(element).removeClass(this._deviceClasses)
        }
    }, {
        key: "isSimulator",
        value: function() {
            try {
                return this._isSimulator || _window2.default.hasWindow() && this._window.top !== this._window.self && this._window.top["dx-force-device"] || this.isRippleEmulator()
            } catch (e) {
                return false
            }
        }
    }, {
        key: "forceSimulator",
        value: function() {
            this._isSimulator = true
        }
    }, {
        key: "_getDevice",
        value: function(deviceName) {
            if ("genericPhone" === deviceName) {
                deviceName = {
                    deviceType: "phone",
                    platform: "generic",
                    generic: true
                }
            }
            if ((0, _type.isPlainObject)(deviceName)) {
                return this._fromConfig(deviceName)
            } else {
                var ua;
                if (deviceName) {
                    ua = KNOWN_UA_TABLE[deviceName];
                    if (!ua) {
                        throw _errors2.default.Error("E0005")
                    }
                } else {
                    ua = navigator.userAgent
                }
                return this._fromUA(ua)
            }
        }
    }, {
        key: "_getDeviceOrNameFromWindowScope",
        value: function() {
            var result;
            if (_window2.default.hasWindow() && (this._window.top["dx-force-device-object"] || this._window.top["dx-force-device"])) {
                result = this._window.top["dx-force-device-object"] || this._window.top["dx-force-device"]
            }
            return result
        }
    }, {
        key: "_getDeviceNameFromSessionStorage",
        value: function() {
            var sessionStorage = (0, _storage.sessionStorage)();
            if (!sessionStorage) {
                return
            }
            var deviceOrName = sessionStorage.getItem("dx-force-device");
            try {
                return JSON.parse(deviceOrName)
            } catch (ex) {
                return deviceOrName
            }
        }
    }, {
        key: "_fromConfig",
        value: function(config) {
            var result = (0, _extend.extend)({}, DEFAULT_DEVICE, this._currentDevice, config);
            var shortcuts = {
                phone: "phone" === result.deviceType,
                tablet: "tablet" === result.deviceType,
                android: "android" === result.platform,
                ios: "ios" === result.platform,
                generic: "generic" === result.platform
            };
            return (0, _extend.extend)(result, shortcuts)
        }
    }, {
        key: "_fromUA",
        value: function(ua) {
            var config;
            (0, _iterator.each)(uaParsers, function(platform, parser) {
                config = parser(ua);
                return !config
            });
            if (config) {
                return this._fromConfig(config)
            }
            return DEFAULT_DEVICE
        }
    }, {
        key: "_changeOrientation",
        value: function() {
            var $window = (0, _renderer2.default)(this._window);
            var orientation = $window.height() > $window.width() ? "portrait" : "landscape";
            if (this._currentOrientation === orientation) {
                return
            }
            this._currentOrientation = orientation;
            this._eventsStrategy.fireEvent("orientationChanged", [{
                orientation: orientation
            }])
        }
    }, {
        key: "_recalculateOrientation",
        value: function() {
            var windowWidth = (0, _renderer2.default)(this._window).width();
            if (this._currentWidth === windowWidth) {
                return
            }
            this._currentWidth = windowWidth;
            this._changeOrientation()
        }
    }, {
        key: "on",
        value: function(eventName, eventHandler) {
            this._eventsStrategy.on(eventName, eventHandler);
            return this
        }
    }, {
        key: "off",
        value: function(eventName, eventHandler) {
            this._eventsStrategy.off(eventName, eventHandler);
            return this
        }
    }]);
    return Devices
}();
var devices = new Devices;
_view_port2.default.changeCallback.add(function(viewPort, prevViewport) {
    devices.detachCssClasses(prevViewport);
    devices.attachCssClasses(viewPort)
});
module.exports = devices;
module.exports.default = module.exports;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/dom.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var config = __webpack_require__(17);
var domAdapter = __webpack_require__(5);
var windowUtils = __webpack_require__(7);
var window = windowUtils.getWindow();
var eventsEngine = __webpack_require__(10);
var inArray = __webpack_require__(14).inArray;
var typeUtils = __webpack_require__(1);
var isDefined = typeUtils.isDefined;
var isRenderer = typeUtils.isRenderer;
var isWindow = typeUtils.isWindow;
var htmlParser = __webpack_require__(33);
var elementStrategy;
var resetActiveElement = function() {
    var activeElement = domAdapter.getActiveElement();
    var body = domAdapter.getBody();
    if (activeElement && activeElement !== body && activeElement.blur) {
        try {
            activeElement.blur()
        } catch (e) {
            body.blur()
        }
    }
};
var clearSelection = function() {
    var selection = window.getSelection();
    if (!selection) {
        return
    }
    if ("Caret" === selection.type) {
        return
    }
    if (selection.empty) {
        selection.empty()
    } else {
        if (selection.removeAllRanges) {
            try {
                selection.removeAllRanges()
            } catch (e) {}
        }
    }
};
var closestCommonParent = function(startTarget, endTarget) {
    var $startTarget = $(startTarget);
    var $endTarget = $(endTarget);
    if ($startTarget[0] === $endTarget[0]) {
        return $startTarget[0]
    }
    var $startParents = $startTarget.parents();
    var $endParents = $endTarget.parents();
    var startingParent = Math.min($startParents.length, $endParents.length);
    for (var i = -startingParent; i < 0; i++) {
        if ($startParents.get(i) === $endParents.get(i)) {
            return $startParents.get(i)
        }
    }
};
var triggerVisibilityChangeEvent = function(eventName) {
    var VISIBILITY_CHANGE_SELECTOR = ".dx-visibility-change-handler";
    return function(element) {
        var $element = $(element || "body");
        var changeHandlers = $element.filter(VISIBILITY_CHANGE_SELECTOR).add($element.find(VISIBILITY_CHANGE_SELECTOR));
        for (var i = 0; i < changeHandlers.length; i++) {
            eventsEngine.triggerHandler(changeHandlers[i], eventName)
        }
    }
};
var uniqueId = function() {
    var counter = 0;
    return function(prefix) {
        return (prefix || "") + counter++
    }
}();
var dataOptionsAttributeName = "data-options";
var getElementOptions = function(element) {
    var optionsString = $(element).attr(dataOptionsAttributeName) || "";
    return config().optionsParser(optionsString)
};
var createComponents = function(elements, componentTypes) {
    var result = [];
    var selector = "[" + dataOptionsAttributeName + "]";
    var $items = elements.find(selector).add(elements.filter(selector));
    $items.each(function(index, element) {
        var $element = $(element);
        var options = getElementOptions(element);
        for (var componentName in options) {
            if (!componentTypes || inArray(componentName, componentTypes) > -1) {
                if ($element[componentName]) {
                    $element[componentName](options[componentName]);
                    result.push($element[componentName]("instance"))
                }
            }
        }
    });
    return result
};
var createMarkupFromString = function(str) {
    if (!window.WinJS) {
        return $(htmlParser.parseHTML(str))
    }
    var tempElement = $("<div>");
    window.WinJS.Utilities.setInnerHTMLUnsafe(tempElement.get(0), str);
    return tempElement.contents()
};
var extractTemplateMarkup = function(element) {
    element = $(element);
    var templateTag = element.length && element.filter(function() {
        var $node = $(this);
        return $node.is("script[type]") && $node.attr("type").indexOf("script") < 0
    });
    if (templateTag.length) {
        return templateTag.eq(0).html()
    } else {
        element = $("<div>").append(element);
        return element.html()
    }
};
var normalizeTemplateElement = function normalizeTemplateElement(element) {
    var $element = isDefined(element) && (element.nodeType || isRenderer(element)) ? $(element) : $("<div>").html(element).contents();
    if (1 === $element.length) {
        if ($element.is("script")) {
            $element = normalizeTemplateElement($element.html().trim())
        } else {
            if ($element.is("table")) {
                $element = $element.children("tbody").contents()
            }
        }
    }
    return $element
};
var clipboardText = function(event, text) {
    var clipboard = event.originalEvent && event.originalEvent.clipboardData || window.clipboardData;
    if (1 === arguments.length) {
        return clipboard && clipboard.getData("Text")
    }
    clipboard && clipboard.setData("Text", text)
};
var contains = function contains(container, element) {
    if (!element) {
        return false
    }
    if (domAdapter.isTextNode(element)) {
        element = element.parentNode
    }
    if (domAdapter.isDocument(container)) {
        return container.documentElement.contains(element)
    }
    if (isWindow(container)) {
        return contains(container.document, element)
    }
    return container.contains ? container.contains(element) : !!(element.compareDocumentPosition(container) & element.DOCUMENT_POSITION_CONTAINS)
};
var getPublicElement = function($element) {
    return elementStrategy($element)
};
var setPublicElementWrapper = function(value) {
    elementStrategy = value
};
setPublicElementWrapper(function(element) {
    return element && element.get(0)
});
var createTextElementHiddenCopy = function(element, text, options) {
    var elementStyles = window.getComputedStyle($(element).get(0));
    var includePaddings = options && options.includePaddings;
    return $("<div>").text(text).css({
        fontStyle: elementStyles.fontStyle,
        fontVariant: elementStyles.fontVariant,
        fontWeight: elementStyles.fontWeight,
        fontSize: elementStyles.fontSize,
        fontFamily: elementStyles.fontFamily,
        letterSpacing: elementStyles.letterSpacing,
        border: elementStyles.border,
        paddingTop: includePaddings ? elementStyles.paddingTop : "",
        paddingRight: includePaddings ? elementStyles.paddingRight : "",
        paddingBottom: includePaddings ? elementStyles.paddingBottom : "",
        paddingLeft: includePaddings ? elementStyles.paddingLeft : "",
        visibility: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
        "float": "left"
    })
};
exports.setPublicElementWrapper = setPublicElementWrapper;
exports.resetActiveElement = resetActiveElement;
exports.createMarkupFromString = createMarkupFromString;
exports.triggerShownEvent = triggerVisibilityChangeEvent("dxshown");
exports.triggerHidingEvent = triggerVisibilityChangeEvent("dxhiding");
exports.triggerResizeEvent = triggerVisibilityChangeEvent("dxresize");
exports.getElementOptions = getElementOptions;
exports.createComponents = createComponents;
exports.extractTemplateMarkup = extractTemplateMarkup;
exports.normalizeTemplateElement = normalizeTemplateElement;
exports.clearSelection = clearSelection;
exports.uniqueId = uniqueId;
exports.closestCommonParent = closestCommonParent;
exports.clipboardText = clipboardText;
exports.contains = contains;
exports.getPublicElement = getPublicElement;
exports.createTextElementHiddenCopy = createTextElementHiddenCopy;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/config.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _extend = __webpack_require__(2);
var _extend2 = _interopRequireDefault(_extend);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var config = {
    rtlEnabled: false,
    defaultCurrency: "USD",
    oDataFilterToLower: true,
    serverDecimalSeparator: ".",
    decimalSeparator: ".",
    thousandsSeparator: ",",
    forceIsoDateParsing: true,
    wrapActionsBeforeExecute: true,
    useLegacyStoreResult: false,
    useJQuery: void 0,
    editorStylingMode: void 0,
    useLegacyVisibleIndex: false,
    floatingActionButtonConfig: {
        icon: "add",
        closeIcon: "close",
        label: "",
        position: {
            at: "right bottom",
            my: "right bottom",
            offset: {
                x: -16,
                y: -16
            }
        },
        maxSpeedDialActionCount: 5,
        shading: false,
        direction: "auto"
    },
    optionsParser: function(optionsString) {
        if ("{" !== optionsString.trim().charAt(0)) {
            optionsString = "{" + optionsString + "}"
        }
        try {
            return new Function("return " + optionsString)()
        } catch (ex) {
            throw _errors2.default.Error("E3018", ex, optionsString)
        }
    }
};
var deprecatedFields = ["decimalSeparator", "thousandsSeparator"];
var configMethod = function() {
    if (!arguments.length) {
        return config
    }
    var newConfig = arguments.length <= 0 ? void 0 : arguments[0];
    deprecatedFields.forEach(function(deprecatedField) {
        if (newConfig[deprecatedField]) {
            var message = "Now, the ".concat(deprecatedField, " is selected based on the specified locale.");
            _errors2.default.log("W0003", "config", deprecatedField, "19.2", message)
        }
    });
    _extend2.default.extend(config, newConfig)
};
if ("undefined" !== typeof DevExpress && DevExpress.config) {
    configMethod(DevExpress.config)
}
module.exports = configMethod;
module.exports.default = module.exports;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/dependency_injector.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = function(object) {
    var extend = __webpack_require__(2).extend;
    var isFunction = __webpack_require__(1).isFunction;
    var each = __webpack_require__(4).each;
    var Class = __webpack_require__(11);
    var BaseClass = Class.inherit(object);
    var InjectedClass = BaseClass;
    var instance = new InjectedClass(object);
    var initialFields = {};
    var injectFields = function(injectionObject, initial) {
        each(injectionObject, function(key) {
            if (isFunction(instance[key])) {
                if (initial || !object[key]) {
                    object[key] = function() {
                        return instance[key].apply(object, arguments)
                    }
                }
            } else {
                if (initial) {
                    initialFields[key] = object[key]
                }
                object[key] = instance[key]
            }
        })
    };
    injectFields(object, true);
    object.inject = function(injectionObject) {
        InjectedClass = InjectedClass.inherit(injectionObject);
        instance = new InjectedClass;
        injectFields(injectionObject)
    };
    object.resetInjection = function() {
        extend(object, initialFields);
        InjectedClass = BaseClass;
        instance = new BaseClass
    };
    return object
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/element_data.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _weak_map = __webpack_require__(29);
var _weak_map2 = _interopRequireDefault(_weak_map);
var _dom_adapter = __webpack_require__(5);
var _dom_adapter2 = _interopRequireDefault(_dom_adapter);
var _events_engine = __webpack_require__(10);
var _events_engine2 = _interopRequireDefault(_events_engine);
var _memorized_callbacks = __webpack_require__(31);
var _memorized_callbacks2 = _interopRequireDefault(_memorized_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var dataMap = new _weak_map2.default;
var strategy;
var strategyChanging = new _memorized_callbacks2.default;
var beforeCleanData = function() {};
var afterCleanData = function() {};
var setDataStrategy = exports.setDataStrategy = function(value) {
    strategyChanging.fire(value);
    strategy = value;
    var cleanData = strategy.cleanData;
    strategy.cleanData = function(nodes) {
        beforeCleanData(nodes);
        var result = cleanData.call(this, nodes);
        afterCleanData(nodes);
        return result
    }
};
setDataStrategy({
    data: function() {
        var element = arguments[0];
        var key = arguments[1];
        var value = arguments[2];
        if (!element) {
            return
        }
        var elementData = dataMap.get(element);
        if (!elementData) {
            elementData = {};
            dataMap.set(element, elementData)
        }
        if (void 0 === key) {
            return elementData
        }
        if (2 === arguments.length) {
            return elementData[key]
        }
        elementData[key] = value;
        return value
    },
    removeData: function(element, key) {
        if (!element) {
            return
        }
        if (void 0 === key) {
            dataMap.delete(element)
        } else {
            var elementData = dataMap.get(element);
            if (elementData) {
                delete elementData[key]
            }
        }
    },
    cleanData: function(elements) {
        for (var i = 0; i < elements.length; i++) {
            _events_engine2.default.off(elements[i]);
            dataMap.delete(elements[i])
        }
    }
});
exports.setDataStrategy = setDataStrategy;
exports.getDataStrategy = function() {
    return strategy
};
exports.data = function() {
    return strategy.data.apply(this, arguments)
};
exports.strategyChanging = strategyChanging;
exports.beforeCleanData = function(callback) {
    beforeCleanData = callback
};
exports.afterCleanData = function(callback) {
    afterCleanData = callback
};
exports.cleanData = function(nodes) {
    return strategy.cleanData.call(this, nodes)
};
exports.removeData = function(element, key) {
    return strategy.removeData.call(this, element, key)
};
exports.cleanDataRecursive = function(element, cleanSelf) {
    if (!_dom_adapter2.default.isElementNode(element)) {
        return
    }
    var childElements = element.getElementsByTagName("*");
    strategy.cleanData(childElements);
    if (cleanSelf) {
        strategy.cleanData([element])
    }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/call_once.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var callOnce = function(handler) {
    var result;
    var _wrappedHandler = function() {
        result = handler.apply(this, arguments);
        _wrappedHandler = function() {
            return result
        };
        return result
    };
    return function() {
        return _wrappedHandler.apply(this, arguments)
    }
};
module.exports = callOnce;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/ready_callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var domAdapter = __webpack_require__(5);
var injector = __webpack_require__(19);
var windowUtils = __webpack_require__(7);
var callOnce = __webpack_require__(21);
var callbacks = [];
var isReady = function() {
    return "complete" === domAdapter.getReadyState() || "loading" !== domAdapter.getReadyState() && !domAdapter.getDocumentElement().doScroll
};
var subscribeReady = callOnce(function() {
    var removeListener = domAdapter.listen(domAdapter.getDocument(), "DOMContentLoaded", function() {
        readyCallbacks.fire();
        removeListener()
    })
});
var readyCallbacks = {
    add: function(callback) {
        var hasWindow = windowUtils.hasWindow();
        if (hasWindow && isReady()) {
            callback()
        } else {
            callbacks.push(callback);
            hasWindow && subscribeReady()
        }
    },
    fire: function() {
        callbacks.forEach(function(callback) {
            return callback()
        });
        callbacks = []
    }
};
module.exports = injector(readyCallbacks);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/deferred.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var typeUtils = __webpack_require__(1);
var isPromise = typeUtils.isPromise;
var isDeferred = typeUtils.isDeferred;
var extend = __webpack_require__(2).extend;
var Callbacks = __webpack_require__(12);
var deferredConfig = [{
    method: "resolve",
    handler: "done",
    state: "resolved"
}, {
    method: "reject",
    handler: "fail",
    state: "rejected"
}, {
    method: "notify",
    handler: "progress"
}];
var _Deferred = function() {
    var that = this;
    this._state = "pending";
    this._promise = {};
    deferredConfig.forEach(function(config) {
        var methodName = config.method;
        this[methodName + "Callbacks"] = new Callbacks;
        this[methodName] = function() {
            return this[methodName + "With"](this._promise, arguments)
        }.bind(this);
        this._promise[config.handler] = function(handler) {
            if (!handler) {
                return this
            }
            var callbacks = that[methodName + "Callbacks"];
            if (callbacks.fired()) {
                handler.apply(that[methodName + "Context"], that[methodName + "Args"])
            } else {
                callbacks.add(function(context, args) {
                    handler.apply(context, args)
                }.bind(this))
            }
            return this
        }
    }.bind(this));
    this._promise.always = function(handler) {
        return this.done(handler).fail(handler)
    };
    this._promise.catch = function(handler) {
        return this.then(null, handler)
    };
    this._promise.then = function(resolve, reject) {
        var result = new _Deferred;
        ["done", "fail"].forEach(function(method) {
            var callback = "done" === method ? resolve : reject;
            this[method](function() {
                if (!callback) {
                    result["done" === method ? "resolve" : "reject"].apply(this, arguments);
                    return
                }
                var callbackResult = callback && callback.apply(this, arguments);
                if (isDeferred(callbackResult)) {
                    callbackResult.done(result.resolve).fail(result.reject)
                } else {
                    if (isPromise(callbackResult)) {
                        callbackResult.then(result.resolve, result.reject)
                    } else {
                        result.resolve.apply(this, typeUtils.isDefined(callbackResult) ? [callbackResult] : arguments)
                    }
                }
            })
        }.bind(this));
        return result.promise()
    };
    this._promise.state = function() {
        return that._state
    };
    this._promise.promise = function(args) {
        return args ? extend(args, that._promise) : that._promise
    };
    this._promise.promise(this)
};
deferredConfig.forEach(function(config) {
    var methodName = config.method;
    var state = config.state;
    _Deferred.prototype[methodName + "With"] = function(context, args) {
        var callbacks = this[methodName + "Callbacks"];
        if ("pending" === this.state()) {
            this[methodName + "Args"] = args;
            this[methodName + "Context"] = context;
            if (state) {
                this._state = state
            }
            callbacks.fire(context, args)
        }
        return this
    }
});
exports.fromPromise = function(promise, context) {
    if (isDeferred(promise)) {
        return promise
    } else {
        if (isPromise(promise)) {
            var d = new _Deferred;
            promise.then(function() {
                d.resolveWith.apply(d, [context].concat([
                    [].slice.call(arguments)
                ]))
            }, function() {
                d.rejectWith.apply(d, [context].concat([
                    [].slice.call(arguments)
                ]))
            });
            return d
        }
    }
    return (new _Deferred).resolveWith(context, [promise])
};
var when = function() {
    if (1 === arguments.length) {
        return exports.fromPromise(arguments[0])
    }
    var values = [].slice.call(arguments);
    var contexts = [];
    var resolvedCount = 0;
    var deferred = new _Deferred;
    var updateState = function(i) {
        return function(value) {
            contexts[i] = this;
            values[i] = arguments.length > 1 ? [].slice.call(arguments) : value;
            resolvedCount++;
            if (resolvedCount === values.length) {
                deferred.resolveWith(contexts, values)
            }
        }
    };
    for (var i = 0; i < values.length; i++) {
        if (isDeferred(values[i])) {
            values[i].promise().done(updateState(i)).fail(deferred.reject)
        } else {
            resolvedCount++
        }
    }
    if (resolvedCount === values.length) {
        deferred.resolveWith(contexts, values)
    }
    return deferred.promise()
};
exports.setStrategy = function(value) {
    _Deferred = value.Deferred;
    when = value.when
};
exports.Deferred = function() {
    return new _Deferred
};
exports.when = function() {
    return when.apply(this, arguments)
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/event_registrator.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _iterator = __webpack_require__(4);
var _event_registrator_callbacks = __webpack_require__(43);
var _event_registrator_callbacks2 = _interopRequireDefault(_event_registrator_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var registerEvent = function(name, eventObject) {
    var strategy = {};
    if ("noBubble" in eventObject) {
        strategy.noBubble = eventObject.noBubble
    }
    if ("bindType" in eventObject) {
        strategy.bindType = eventObject.bindType
    }
    if ("delegateType" in eventObject) {
        strategy.delegateType = eventObject.delegateType
    }(0, _iterator.each)(["setup", "teardown", "add", "remove", "trigger", "handle", "_default", "dispose"], function(_, methodName) {
        if (!eventObject[methodName]) {
            return
        }
        strategy[methodName] = function() {
            var args = [].slice.call(arguments);
            args.unshift(this);
            return eventObject[methodName].apply(eventObject, args)
        }
    });
    _event_registrator_callbacks2.default.fire(name, strategy)
};
registerEvent.callbacks = _event_registrator_callbacks2.default;
module.exports = registerEvent;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/template_base.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TemplateBase = exports.renderedCallbacks = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _dom_adapter = __webpack_require__(5);
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);
var _dom = __webpack_require__(16);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var renderedCallbacks = exports.renderedCallbacks = (0, _callbacks2.default)({
    syncStrategy: true
});
var TemplateBase = exports.TemplateBase = function() {
    function TemplateBase() {
        _classCallCheck(this, TemplateBase)
    }
    _createClass(TemplateBase, [{
        key: "render",
        value: function(options) {
            options = options || {};
            var onRendered = options.onRendered;
            delete options.onRendered;
            var $result = this._renderCore(options);
            this._ensureResultInContainer($result, options.container);
            renderedCallbacks.fire($result, options.container);
            onRendered && onRendered();
            return $result
        }
    }, {
        key: "_ensureResultInContainer",
        value: function($result, container) {
            if (!container) {
                return
            }
            var $container = (0, _renderer2.default)(container);
            var resultInContainer = (0, _dom.contains)($container.get(0), $result.get(0));
            $container.append($result);
            if (resultInContainer) {
                return
            }
            var resultInBody = (0, _dom_adapter.getBody)().contains($container.get(0));
            if (!resultInBody) {
                return
            }(0, _dom.triggerShownEvent)($result)
        }
    }, {
        key: "_renderCore",
        value: function() {
            throw _errors2.default.Error("E0001")
        }
    }]);
    return TemplateBase
}();


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/data.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var errors = __webpack_require__(6);
var Class = __webpack_require__(11);
var objectUtils = __webpack_require__(30);
var typeUtils = __webpack_require__(1);
var each = __webpack_require__(4).each;
var variableWrapper = __webpack_require__(39);
var unwrapVariable = variableWrapper.unwrap;
var isWrapped = variableWrapper.isWrapped;
var assign = variableWrapper.assign;
var bracketsToDots = function(expr) {
    return expr.replace(/\[/g, ".").replace(/\]/g, "")
};
var readPropValue = function(obj, propName, options) {
    options = options || {};
    if ("this" === propName) {
        return unwrap(obj, options)
    }
    return unwrap(obj[propName], options)
};
var assignPropValue = function(obj, propName, value, options) {
    if ("this" === propName) {
        throw new errors.Error("E4016")
    }
    var propValue = obj[propName];
    if (options.unwrapObservables && isWrapped(propValue)) {
        assign(propValue, value)
    } else {
        obj[propName] = value
    }
};
var prepareOptions = function(options) {
    options = options || {};
    options.unwrapObservables = void 0 !== options.unwrapObservables ? options.unwrapObservables : true;
    return options
};

function unwrap(value, options) {
    return options.unwrapObservables ? unwrapVariable(value) : value
}
var compileGetter = function(expr) {
    if (arguments.length > 1) {
        expr = [].slice.call(arguments)
    }
    if (!expr || "this" === expr) {
        return function(obj) {
            return obj
        }
    }
    if ("string" === typeof expr) {
        expr = bracketsToDots(expr);
        var path = expr.split(".");
        return function(obj, options) {
            options = prepareOptions(options);
            var functionAsIs = options.functionsAsIs;
            var hasDefaultValue = "defaultValue" in options;
            var current = unwrap(obj, options);
            for (var i = 0; i < path.length; i++) {
                if (!current) {
                    if (null == current && hasDefaultValue) {
                        return options.defaultValue
                    }
                    break
                }
                var pathPart = path[i];
                if (hasDefaultValue && typeUtils.isObject(current) && !(pathPart in current)) {
                    return options.defaultValue
                }
                var next = unwrap(current[pathPart], options);
                if (!functionAsIs && typeUtils.isFunction(next)) {
                    next = next.call(current)
                }
                current = next
            }
            return current
        }
    }
    if (Array.isArray(expr)) {
        return combineGetters(expr)
    }
    if (typeUtils.isFunction(expr)) {
        return expr
    }
};

function combineGetters(getters) {
    var compiledGetters = {};
    for (var i = 0, l = getters.length; i < l; i++) {
        var getter = getters[i];
        compiledGetters[getter] = compileGetter(getter)
    }
    return function(obj, options) {
        var result;
        each(compiledGetters, function(name) {
            var value = this(obj, options);
            if (void 0 === value) {
                return
            }
            var current = result || (result = {});
            var path = name.split(".");
            var last = path.length - 1;
            for (var _i = 0; _i < last; _i++) {
                var pathItem = path[_i];
                if (!(pathItem in current)) {
                    current[pathItem] = {}
                }
                current = current[pathItem]
            }
            current[path[last]] = value
        });
        return result
    }
}
var ensurePropValueDefined = function(obj, propName, value, options) {
    if (typeUtils.isDefined(value)) {
        return value
    }
    var newValue = {};
    assignPropValue(obj, propName, newValue, options);
    return newValue
};
var compileSetter = function(expr) {
    expr = bracketsToDots(expr || "this").split(".");
    var lastLevelIndex = expr.length - 1;
    return function(obj, value, options) {
        options = prepareOptions(options);
        var currentValue = unwrap(obj, options);
        expr.forEach(function(propertyName, levelIndex) {
            var propertyValue = readPropValue(currentValue, propertyName, options);
            var isPropertyFunc = !options.functionsAsIs && typeUtils.isFunction(propertyValue) && !isWrapped(propertyValue);
            if (levelIndex === lastLevelIndex) {
                if (options.merge && typeUtils.isPlainObject(value) && (!typeUtils.isDefined(propertyValue) || typeUtils.isPlainObject(propertyValue))) {
                    propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);
                    objectUtils.deepExtendArraySafe(propertyValue, value, false, true)
                } else {
                    if (isPropertyFunc) {
                        currentValue[propertyName](value)
                    } else {
                        assignPropValue(currentValue, propertyName, value, options)
                    }
                }
            } else {
                propertyValue = ensurePropValueDefined(currentValue, propertyName, propertyValue, options);
                if (isPropertyFunc) {
                    propertyValue = propertyValue.call(currentValue)
                }
                currentValue = propertyValue
            }
        })
    }
};
var toComparable = function(value, caseSensitive) {
    if (value instanceof Date) {
        return value.getTime()
    }
    if (value && value instanceof Class && value.valueOf) {
        return value.valueOf()
    }
    if (!caseSensitive && "string" === typeof value) {
        return value.toLowerCase()
    }
    return value
};
exports.compileGetter = compileGetter;
exports.compileSetter = compileSetter;
exports.toComparable = toComparable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _support = __webpack_require__(102);
var _support2 = _interopRequireDefault(_support);
var _iterator = __webpack_require__(4);
var _browser = __webpack_require__(55);
var _browser2 = _interopRequireDefault(_browser);
var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _event_registrator = __webpack_require__(24);
var _event_registrator2 = _interopRequireDefault(_event_registrator);
var _touch = __webpack_require__(56);
var _touch2 = _interopRequireDefault(_touch);
var _mspointer = __webpack_require__(103);
var _mspointer2 = _interopRequireDefault(_mspointer);
var _mouse = __webpack_require__(58);
var _mouse2 = _interopRequireDefault(_mouse);
var _mouse_and_touch = __webpack_require__(104);
var _mouse_and_touch2 = _interopRequireDefault(_mouse_and_touch);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var getStrategy = function(support, device, browser) {
    if (support.pointerEvents && browser.msie) {
        return _mspointer2.default
    }
    var tablet = device.tablet,
        phone = device.phone;
    if (support.touch && !(tablet || phone)) {
        return _mouse_and_touch2.default
    }
    if (support.touch) {
        return _touch2.default
    }
    return _mouse2.default
};
var EventStrategy = getStrategy(_support2.default, _devices2.default.real(), _browser2.default);
(0, _iterator.each)(EventStrategy.map, function(pointerEvent, originalEvents) {
    (0, _event_registrator2.default)(pointerEvent, new EventStrategy(pointerEvent, originalEvents))
});
var pointer = {
    down: "dxpointerdown",
    up: "dxpointerup",
    move: "dxpointermove",
    cancel: "dxpointercancel",
    enter: "dxpointerenter",
    leave: "dxpointerleave",
    over: "dxpointerover",
    out: "dxpointerout"
};
module.exports = pointer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/base.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var eventsEngine = __webpack_require__(10);
var browser = __webpack_require__(55);
var domAdapter = __webpack_require__(5);
var Class = __webpack_require__(11);
var eventUtils = __webpack_require__(13);
var POINTER_EVENTS_NAMESPACE = "dxPointerEvents";
var BaseStrategy = Class.inherit({
    ctor: function(eventName, originalEvents) {
        this._eventName = eventName;
        this._originalEvents = eventUtils.addNamespace(originalEvents, POINTER_EVENTS_NAMESPACE);
        this._handlerCount = 0;
        this.noBubble = this._isNoBubble()
    },
    _isNoBubble: function() {
        var eventName = this._eventName;
        return "dxpointerenter" === eventName || "dxpointerleave" === eventName
    },
    _handler: function(e) {
        var delegateTarget = this._getDelegateTarget(e);
        return this._fireEvent({
            type: this._eventName,
            pointerType: e.pointerType || eventUtils.eventSource(e),
            originalEvent: e,
            delegateTarget: delegateTarget,
            timeStamp: browser.mozilla ? (new Date).getTime() : e.timeStamp
        })
    },
    _getDelegateTarget: function(e) {
        var delegateTarget;
        if (this.noBubble) {
            delegateTarget = e.delegateTarget
        }
        return delegateTarget
    },
    _fireEvent: function(args) {
        return eventUtils.fireEvent(args)
    },
    _setSelector: function(handleObj) {
        this._selector = this.noBubble && handleObj ? handleObj.selector : null
    },
    _getSelector: function() {
        return this._selector
    },
    setup: function() {
        return true
    },
    add: function(element, handleObj) {
        if (this._handlerCount <= 0 || this.noBubble) {
            element = this.noBubble ? element : domAdapter.getDocument();
            this._setSelector(handleObj);
            var that = this;
            eventsEngine.on(element, this._originalEvents, this._getSelector(), function(e) {
                that._handler(e)
            })
        }
        if (!this.noBubble) {
            this._handlerCount++
        }
    },
    remove: function(handleObj) {
        this._setSelector(handleObj);
        if (!this.noBubble) {
            this._handlerCount--
        }
    },
    teardown: function(element) {
        if (this._handlerCount && !this.noBubble) {
            return
        }
        element = this.noBubble ? element : domAdapter.getDocument();
        if (this._originalEvents !== "." + POINTER_EVENTS_NAMESPACE) {
            eventsEngine.off(element, this._originalEvents, this._getSelector())
        }
    },
    dispose: function(element) {
        element = this.noBubble ? element : domAdapter.getDocument();
        eventsEngine.off(element, this._originalEvents)
    }
});
module.exports = BaseStrategy;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/polyfills/weak_map.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var inArray = __webpack_require__(14).inArray;
var windowUtils = __webpack_require__(7);
var weakMap = windowUtils.hasWindow() ? windowUtils.getWindow().WeakMap : WeakMap;
if (!weakMap) {
    weakMap = function() {
        var keys = [];
        var values = [];
        this.set = function(key, value) {
            var index = inArray(key, keys);
            if (index === -1) {
                keys.push(key);
                values.push(value)
            } else {
                values[index] = value
            }
        };
        this.get = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return
            }
            return values[index]
        };
        this.has = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return false
            }
            return true
        };
        this.delete = function(key) {
            var index = inArray(key, keys);
            if (index === -1) {
                return
            }
            keys.splice(index, 1);
            values.splice(index, 1)
        }
    }
}
module.exports = weakMap;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/object.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var typeUtils = __webpack_require__(1);
var variableWrapper = __webpack_require__(39);
var clone = function() {
    function Clone() {}
    return function(obj) {
        Clone.prototype = obj;
        return new Clone
    }
}();
var orderEach = function(map, func) {
    var keys = [];
    var key;
    var i;
    for (key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key)) {
            keys.push(key)
        }
    }
    keys.sort(function(x, y) {
        var isNumberX = typeUtils.isNumeric(x);
        var isNumberY = typeUtils.isNumeric(y);
        if (isNumberX && isNumberY) {
            return x - y
        }
        if (isNumberX && !isNumberY) {
            return -1
        }
        if (!isNumberX && isNumberY) {
            return 1
        }
        if (x < y) {
            return -1
        }
        if (x > y) {
            return 1
        }
        return 0
    });
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        func(key, map[key])
    }
};
var assignValueToProperty = function(target, property, value, assignByReference) {
    if (!assignByReference && variableWrapper.isWrapped(target[property])) {
        variableWrapper.assign(target[property], value)
    } else {
        target[property] = value
    }
};
var deepExtendArraySafe = function deepExtendArraySafe(target, changes, extendComplexObject, assignByReference) {
    var prevValue;
    var newValue;
    for (var name in changes) {
        prevValue = target[name];
        newValue = changes[name];
        if ("__proto__" === name || target === newValue) {
            continue
        }
        if (typeUtils.isPlainObject(newValue)) {
            var goDeeper = extendComplexObject ? typeUtils.isObject(prevValue) : typeUtils.isPlainObject(prevValue);
            newValue = deepExtendArraySafe(goDeeper ? prevValue : {}, newValue, extendComplexObject, assignByReference)
        }
        if (void 0 !== newValue && prevValue !== newValue) {
            assignValueToProperty(target, name, newValue, assignByReference)
        }
    }
    return target
};
exports.clone = clone;
exports.orderEach = orderEach;
exports.deepExtendArraySafe = deepExtendArraySafe;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/memorized_callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _iterator = __webpack_require__(4);
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var MemorizedCallbacks = function() {
    function MemorizedCallbacks() {
        _classCallCheck(this, MemorizedCallbacks);
        this.memory = [];
        this.callbacks = (0, _callbacks2.default)()
    }
    _createClass(MemorizedCallbacks, [{
        key: "add",
        value: function(fn) {
            (0, _iterator.each)(this.memory, function(_, item) {
                return fn.apply(fn, item)
            });
            this.callbacks.add(fn)
        }
    }, {
        key: "remove",
        value: function(fn) {
            this.callbacks.remove(fn)
        }
    }, {
        key: "fire",
        value: function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
            }
            this.memory.push(args);
            this.callbacks.fire.apply(this.callbacks, args)
        }
    }]);
    return MemorizedCallbacks
}();
exports.default = MemorizedCallbacks;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/inflector.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var map = __webpack_require__(4).map;
var _normalize = function(text) {
    if (void 0 === text || null === text) {
        return ""
    }
    return String(text)
};
var _upperCaseFirst = function(text) {
    return _normalize(text).charAt(0).toUpperCase() + text.substr(1)
};
var _chop = function(text) {
    return _normalize(text).replace(/([a-z\d])([A-Z])/g, "$1 $2").split(/[\s_-]+/)
};
var dasherize = function(text) {
    return map(_chop(text), function(p) {
        return p.toLowerCase()
    }).join("-")
};
var underscore = function(text) {
    return dasherize(text).replace(/-/g, "_")
};
var camelize = function(text, upperFirst) {
    return map(_chop(text), function(p, i) {
        p = p.toLowerCase();
        if (upperFirst || i > 0) {
            p = _upperCaseFirst(p)
        }
        return p
    }).join("")
};
var humanize = function(text) {
    return _upperCaseFirst(dasherize(text).replace(/-/g, " "))
};
var titleize = function(text) {
    return map(_chop(text), function(p) {
        return _upperCaseFirst(p.toLowerCase())
    }).join(" ")
};
var DIGIT_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var captionize = function(name) {
    var captionList = [];
    var i;
    var char;
    var isPrevCharNewWord = false;
    var isNewWord = false;
    for (i = 0; i < name.length; i++) {
        char = name.charAt(i);
        isNewWord = char === char.toUpperCase() && "-" !== char && ")" !== char && "/" !== char || char in DIGIT_CHARS;
        if ("_" === char || "." === char) {
            char = " ";
            isNewWord = true
        } else {
            if (0 === i) {
                char = char.toUpperCase();
                isNewWord = true
            } else {
                if (!isPrevCharNewWord && isNewWord) {
                    if (captionList.length > 0) {
                        captionList.push(" ")
                    }
                }
            }
        }
        captionList.push(char);
        isPrevCharNewWord = isNewWord
    }
    return captionList.join("")
};
exports.dasherize = dasherize;
exports.camelize = camelize;
exports.humanize = humanize;
exports.titleize = titleize;
exports.underscore = underscore;
exports.captionize = captionize;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/html_parser.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var merge = __webpack_require__(14).merge;
var domAdapter = __webpack_require__(5);
var isTagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
var tagWrappers = {
    "default": {
        tagsCount: 0,
        startTags: "",
        endTags: ""
    },
    thead: {
        tagsCount: 1,
        startTags: "<table>",
        endTags: "</table>"
    },
    td: {
        tagsCount: 3,
        startTags: "<table><tbody><tr>",
        endTags: "</tr></tbody></table>"
    },
    col: {
        tagsCount: 2,
        startTags: "<table><colgroup>",
        endTags: "</colgroup></table>"
    },
    tr: {
        tagsCount: 2,
        startTags: "<table><tbody>",
        endTags: "</tbody></table>"
    }
};
tagWrappers.tbody = tagWrappers.colgroup = tagWrappers.caption = tagWrappers.tfoot = tagWrappers.thead;
tagWrappers.th = tagWrappers.td;
var parseHTML = function(html) {
    if ("string" !== typeof html) {
        return null
    }
    var fragment = domAdapter.createDocumentFragment();
    var container = fragment.appendChild(domAdapter.createElement("div"));
    var tags = isTagName.exec(html);
    var firstRootTag = tags && tags[1].toLowerCase();
    var tagWrapper = tagWrappers[firstRootTag] || tagWrappers.default;
    container.innerHTML = tagWrapper.startTags + html + tagWrapper.endTags;
    for (var i = 0; i < tagWrapper.tagsCount; i++) {
        container = container.lastChild
    }
    return merge([], container.childNodes)
};
var isTablePart = function(html) {
    var tags = isTagName.exec(html);
    return tags && tags[1] in tagWrappers
};
exports.parseHTML = parseHTML;
exports.isTablePart = isTablePart;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/events_strategy.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventsStrategy = void 0;
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);
var _iterator = __webpack_require__(4);
var _type = __webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var EventsStrategy = exports.EventsStrategy = function() {
    function EventsStrategy(owner) {
        _classCallCheck(this, EventsStrategy);
        this._events = {};
        this._owner = owner
    }
    _createClass(EventsStrategy, [{
        key: "hasEvent",
        value: function(eventName) {
            var callbacks = this._events[eventName];
            return callbacks ? callbacks.has() : false
        }
    }, {
        key: "fireEvent",
        value: function(eventName, eventArgs) {
            var callbacks = this._events[eventName];
            if (callbacks) {
                callbacks.fireWith(this._owner, eventArgs)
            }
            return this._owner
        }
    }, {
        key: "on",
        value: function(eventName, eventHandler) {
            var _this = this;
            if ((0, _type.isPlainObject)(eventName)) {
                (0, _iterator.each)(eventName, function(e, h) {
                    _this.on(e, h)
                })
            } else {
                var callbacks = this._events[eventName];
                if (!callbacks) {
                    callbacks = (0, _callbacks2.default)();
                    this._events[eventName] = callbacks
                }
                var addFn = callbacks.originalAdd || callbacks.add;
                addFn.call(callbacks, eventHandler)
            }
        }
    }, {
        key: "off",
        value: function(eventName, eventHandler) {
            var callbacks = this._events[eventName];
            if (callbacks) {
                if ((0, _type.isFunction)(eventHandler)) {
                    callbacks.remove(eventHandler)
                } else {
                    callbacks.empty()
                }
            }
        }
    }, {
        key: "dispose",
        value: function() {
            (0, _iterator.each)(this._events, function(eventName, event) {
                event.empty()
            })
        }
    }], [{
        key: "create",
        value: function(owner, strategy) {
            if (strategy) {
                return (0, _type.isFunction)(strategy) ? strategy(owner) : strategy
            } else {
                return new EventsStrategy(owner)
            }
        }
    }]);
    return EventsStrategy
}();


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/public_component.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var dataUtils = __webpack_require__(20);
var eventsEngine = __webpack_require__(10);
var WeakMap = __webpack_require__(29);
var isDefined = __webpack_require__(1).isDefined;
var removeEvent = __webpack_require__(71);
var COMPONENT_NAMES_DATA_KEY = "dxComponents";
var ANONYMOUS_COMPONENT_DATA_KEY = "dxPrivateComponent";
var componentNames = new WeakMap;
var nextAnonymousComponent = 0;
var getName = exports.name = function(componentClass, newName) {
    if (isDefined(newName)) {
        componentNames.set(componentClass, newName);
        return
    }
    if (!componentNames.has(componentClass)) {
        var generatedName = ANONYMOUS_COMPONENT_DATA_KEY + nextAnonymousComponent++;
        componentNames.set(componentClass, generatedName);
        return generatedName
    }
    return componentNames.get(componentClass)
};
exports.attachInstanceToElement = function($element, componentInstance, disposeFn) {
    var data = dataUtils.data($element.get(0));
    var name = getName(componentInstance.constructor);
    data[name] = componentInstance;
    if (disposeFn) {
        eventsEngine.one($element, removeEvent, function() {
            disposeFn.call(componentInstance)
        })
    }
    if (!data[COMPONENT_NAMES_DATA_KEY]) {
        data[COMPONENT_NAMES_DATA_KEY] = []
    }
    data[COMPONENT_NAMES_DATA_KEY].push(name)
};
exports.getInstanceByElement = function($element, componentClass) {
    var name = getName(componentClass);
    return dataUtils.data($element.get(0), name)
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/action.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _window = __webpack_require__(7);
var _type = __webpack_require__(1);
var _iterator = __webpack_require__(4);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var Action = function() {
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
                excludeValidators[config.excludeValidators[i]] = true
            }
        }
    }
    _createClass(Action, [{
        key: "execute",
        value: function() {
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
            if (!("jQueryEvent" in argsBag) && argsBag.event && (0, _config2.default)().useJQuery) {
                Object.defineProperty(argsBag, "jQueryEvent", {
                    get: function() {
                        _errors2.default.log("W0003", "Handler argument", "jQueryEvent", "17.2", "Use the 'event' field instead");
                        return argsBag.event
                    },
                    set: function(value) {
                        _errors2.default.log("W0003", "Handler argument", "jQueryEvent", "17.2", "Use the 'event' field instead");
                        argsBag.event = value
                    }
                })
            }
            if (!this._validateAction(e)) {
                return
            }
            null === beforeExecute || void 0 === beforeExecute ? void 0 : beforeExecute.call(this._context, e);
            if (e.cancel) {
                return
            }
            var result = this._executeAction(e);
            if (argsBag.cancel) {
                return
            }
            null === afterExecute || void 0 === afterExecute ? void 0 : afterExecute.call(this._context, e);
            return result
        }
    }, {
        key: "_validateAction",
        value: function(e) {
            var excludeValidators = this._excludeValidators;
            var executors = Action.executors;
            for (var name in executors) {
                if (!excludeValidators[name]) {
                    var _executor$validate;
                    var executor = executors[name];
                    null === (_executor$validate = executor.validate) || void 0 === _executor$validate ? void 0 : _executor$validate.call(executor, e);
                    if (e.cancel) {
                        return false
                    }
                }
            }
            return true
        }
    }, {
        key: "_executeAction",
        value: function(e) {
            var result;
            var executors = Action.executors;
            for (var name in executors) {
                var _executor$execute;
                var executor = executors[name];
                null === (_executor$execute = executor.execute) || void 0 === _executor$execute ? void 0 : _executor$execute.call(executor, e);
                if (e.handled) {
                    result = e.result;
                    break
                }
            }
            return result
        }
    }], [{
        key: "registerExecutor",
        value: function(name, executor) {
            if ((0, _type.isPlainObject)(name)) {
                (0, _iterator.each)(name, Action.registerExecutor);
                return
            }
            Action.executors[name] = executor
        }
    }, {
        key: "unregisterExecutor",
        value: function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
            }(0, _iterator.each)(args, function() {
                delete Action.executors[this]
            })
        }
    }]);
    return Action
}();
exports.default = Action;
Action.executors = {};
var createValidatorByTargetElement = function(condition) {
    return function(e) {
        if (!e.args.length) {
            return
        }
        var args = e.args[0];
        var element = args[e.validatingTargetName] || args.element;
        if (element && condition((0, _renderer2.default)(element))) {
            e.cancel = true
        }
    }
};
Action.registerExecutor({
    disabled: {
        validate: createValidatorByTargetElement(function($target) {
            return $target.is(".dx-state-disabled, .dx-state-disabled *")
        })
    },
    readOnly: {
        validate: createValidatorByTargetElement(function($target) {
            return $target.is(".dx-state-readonly, .dx-state-readonly *:not(.dx-state-independent)")
        })
    },
    undefined: {
        execute: function(e) {
            if (!e.action) {
                e.result = void 0;
                e.handled = true
            }
        }
    },
    func: {
        execute: function(e) {
            if ((0, _type.isFunction)(e.action)) {
                e.result = e.action.call(e.context, e.args[0]);
                e.handled = true
            }
        }
    }
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/options/utils.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNestedOptionValue = exports.getParentName = exports.getFieldName = exports.deviceMatch = exports.normalizeOptions = exports.convertRulesToOptions = void 0;
var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _type = __webpack_require__(1);
var _common = __webpack_require__(8);
var _extend = __webpack_require__(2);
var _data = __webpack_require__(26);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        obj[key] = value
    }
    return obj
}
var cachedGetters = {};
var convertRulesToOptions = exports.convertRulesToOptions = function(rules) {
    var currentDevice = _devices2.default.current();
    return rules.reduce(function(options, _ref) {
        var device = _ref.device,
            ruleOptions = _ref.options;
        var deviceFilter = device || {};
        var match = (0, _type.isFunction)(deviceFilter) ? deviceFilter(currentDevice) : deviceMatch(currentDevice, deviceFilter);
        if (match) {
            (0, _extend.extend)(true, options, ruleOptions)
        }
        return options
    }, {})
};
var normalizeOptions = exports.normalizeOptions = function(options, value) {
    return "string" !== typeof options ? options : _defineProperty({}, options, value)
};
var deviceMatch = exports.deviceMatch = function(device, filter) {
    return (0, _type.isEmptyObject)(filter) || (0, _common.findBestMatches)(device, [filter]).length > 0
};
var getFieldName = exports.getFieldName = function(fullName) {
    return fullName.substr(fullName.lastIndexOf(".") + 1)
};
var getParentName = exports.getParentName = function(fullName) {
    return fullName.substr(0, fullName.lastIndexOf("."))
};
var getNestedOptionValue = exports.getNestedOptionValue = function(optionsObject, name) {
    cachedGetters[name] = cachedGetters[name] || (0, _data.compileGetter)(name);
    return cachedGetters[name](optionsObject, {
        functionsAsIs: true
    })
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/short.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keyboard = exports.click = exports.dxClick = exports.focus = exports.visibility = exports.hover = exports.resize = exports.active = void 0;
var _dom_adapter = __webpack_require__(5);
var _dom_adapter2 = _interopRequireDefault(_dom_adapter);
var _events_engine = __webpack_require__(10);
var _events_engine2 = _interopRequireDefault(_events_engine);
var _keyboard_processor = __webpack_require__(98);
var _keyboard_processor2 = _interopRequireDefault(_keyboard_processor);
var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function addNamespace(event, namespace) {
    return namespace ? (0, _utils.addNamespace)(event, namespace) : event
}
var active = exports.active = {
    on: function($el, active, inactive, opts) {
        var selector = opts.selector,
            showTimeout = opts.showTimeout,
            hideTimeout = opts.hideTimeout,
            namespace = opts.namespace;
        _events_engine2.default.on($el, addNamespace("dxactive", namespace), selector, {
            timeout: showTimeout
        }, function(event) {
            return active.execute({
                event: event,
                element: event.currentTarget
            })
        });
        _events_engine2.default.on($el, addNamespace("dxinactive", namespace), selector, {
            timeout: hideTimeout
        }, function(event) {
            return inactive.execute({
                event: event,
                element: event.currentTarget
            })
        })
    },
    off: function($el, _ref) {
        var namespace = _ref.namespace,
            selector = _ref.selector;
        _events_engine2.default.off($el, addNamespace("dxactive", namespace), selector);
        _events_engine2.default.off($el, addNamespace("dxinactive", namespace), selector)
    }
};
var resize = exports.resize = {
    on: function($el, resize) {
        var _ref2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            namespace = _ref2.namespace;
        _events_engine2.default.on($el, addNamespace("dxresize", namespace), resize)
    },
    off: function($el) {
        var _ref3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            namespace = _ref3.namespace;
        _events_engine2.default.off($el, addNamespace("dxresize", namespace))
    }
};
var hover = exports.hover = {
    on: function($el, start, end, _ref4) {
        var selector = _ref4.selector,
            namespace = _ref4.namespace;
        _events_engine2.default.on($el, addNamespace("dxhoverend", namespace), selector, function(event) {
            return end(event)
        });
        _events_engine2.default.on($el, addNamespace("dxhoverstart", namespace), selector, function(event) {
            start.execute({
                element: event.target,
                event: event
            })
        })
    },
    off: function($el, _ref5) {
        var selector = _ref5.selector,
            namespace = _ref5.namespace;
        _events_engine2.default.off($el, addNamespace("dxhoverstart", namespace), selector);
        _events_engine2.default.off($el, addNamespace("dxhoverend", namespace), selector)
    }
};
var visibility = exports.visibility = {
    on: function($el, shown, hiding, _ref6) {
        var namespace = _ref6.namespace;
        _events_engine2.default.on($el, addNamespace("dxhiding", namespace), hiding);
        _events_engine2.default.on($el, addNamespace("dxshown", namespace), shown)
    },
    off: function($el, _ref7) {
        var namespace = _ref7.namespace;
        _events_engine2.default.off($el, addNamespace("dxhiding", namespace));
        _events_engine2.default.off($el, addNamespace("dxshown", namespace))
    }
};
var focus = exports.focus = {
    on: function($el, focusIn, focusOut, _ref8) {
        var namespace = _ref8.namespace,
            isFocusable = _ref8.isFocusable;
        _events_engine2.default.on($el, addNamespace("focusin", namespace), focusIn);
        _events_engine2.default.on($el, addNamespace("focusout", namespace), focusOut);
        if (_dom_adapter2.default.hasDocumentProperty("onbeforeactivate")) {
            _events_engine2.default.on($el, addNamespace("beforeactivate", namespace), function(e) {
                return isFocusable(e.target) || e.preventDefault()
            })
        }
    },
    off: function($el, _ref9) {
        var namespace = _ref9.namespace;
        _events_engine2.default.off($el, addNamespace("focusin", namespace));
        _events_engine2.default.off($el, addNamespace("focusout", namespace));
        if (_dom_adapter2.default.hasDocumentProperty("onbeforeactivate")) {
            _events_engine2.default.off($el, addNamespace("beforeactivate", namespace))
        }
    },
    trigger: function($el) {
        return _events_engine2.default.trigger($el, "focus")
    }
};
var dxClick = exports.dxClick = {
    on: function($el, click) {
        var _ref10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            namespace = _ref10.namespace;
        _events_engine2.default.on($el, addNamespace("dxclick", namespace), click)
    },
    off: function($el) {
        var _ref11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            namespace = _ref11.namespace;
        _events_engine2.default.off($el, addNamespace("dxclick", namespace))
    }
};
var click = exports.click = {
    on: function($el, click) {
        var _ref12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            namespace = _ref12.namespace;
        _events_engine2.default.on($el, addNamespace("click", namespace), click)
    },
    off: function($el) {
        var _ref13 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            namespace = _ref13.namespace;
        _events_engine2.default.off($el, addNamespace("click", namespace))
    }
};
var index = 0;
var keyboardProcessors = {};
var generateListenerId = function() {
    return "keyboardProcessorId".concat(index++)
};
var keyboard = exports.keyboard = {
    on: function(element, focusTarget, handler) {
        var listenerId = generateListenerId();
        keyboardProcessors[listenerId] = new _keyboard_processor2.default({
            element: element,
            focusTarget: focusTarget,
            handler: handler
        });
        return listenerId
    },
    off: function(listenerId) {
        if (listenerId && keyboardProcessors[listenerId]) {
            keyboardProcessors[listenerId].dispose();
            delete keyboardProcessors[listenerId]
        }
    },
    _getProcessor: function(listenerId) {
        return keyboardProcessors[listenerId]
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/variable_wrapper.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var logger = __webpack_require__(40).logger;
var dependencyInjector = __webpack_require__(19);
module.exports = dependencyInjector({
    isWrapped: function() {
        return false
    },
    isWritableWrapped: function() {
        return false
    },
    wrap: function(value) {
        return value
    },
    unwrap: function(value) {
        return value
    },
    assign: function() {
        logger.error("Method 'assign' should not be used for not wrapped variables. Use 'isWrapped' method for ensuring.")
    }
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/console.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var isFunction = __webpack_require__(1).isFunction;
var noop = function() {};
var getConsoleMethod = function(method) {
    if ("undefined" === typeof console || !isFunction(console[method])) {
        return noop
    }
    return console[method].bind(console)
};
var logger = {
    info: getConsoleMethod("info"),
    warn: getConsoleMethod("warn"),
    error: getConsoleMethod("error")
};
var debug = function() {
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message)
        }
    }

    function assertParam(parameter, message) {
        assert(null !== parameter && void 0 !== parameter, message)
    }
    return {
        assert: assert,
        assertParam: assertParam
    }
}();
exports.logger = logger;
exports.debug = debug;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/error.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var extend = __webpack_require__(2).extend;
var consoleUtils = __webpack_require__(40);
var stringUtils = __webpack_require__(42);
var version = __webpack_require__(63);
var ERROR_URL = "http://js.devexpress.com/error/" + version.split(".").slice(0, 2).join("_") + "/";
module.exports = function(baseErrors, errors) {
    var exports = {
        ERROR_MESSAGES: extend(errors, baseErrors),
        Error: function() {
            return makeError([].slice.call(arguments))
        },
        log: function(id) {
            var method = "log";
            if (/^E\d+$/.test(id)) {
                method = "error"
            } else {
                if (/^W\d+$/.test(id)) {
                    method = "warn"
                }
            }
            consoleUtils.logger[method]("log" === method ? id : combineMessage([].slice.call(arguments)))
        }
    };

    function combineMessage(args) {
        var id = args[0];
        args = args.slice(1);
        return formatMessage(id, formatDetails(id, args))
    }

    function formatDetails(id, args) {
        args = [exports.ERROR_MESSAGES[id]].concat(args);
        return stringUtils.format.apply(this, args).replace(/\.*\s*?$/, "")
    }

    function formatMessage(id, details) {
        return stringUtils.format.apply(this, ["{0} - {1}. See:\n{2}", id, details, getErrorUrl(id)])
    }

    function makeError(args) {
        var id = args[0];
        args = args.slice(1);
        var details = formatDetails(id, args);
        var url = getErrorUrl(id);
        var message = formatMessage(id, details);
        return extend(new Error(message), {
            __id: id,
            __details: details,
            url: url
        })
    }

    function getErrorUrl(id) {
        return ERROR_URL + id
    }
    return exports
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/string.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var typeUtils = __webpack_require__(1);
var encodeHtml = function() {
    var encodeRegExp = [new RegExp("&", "g"), new RegExp('"', "g"), new RegExp("'", "g"), new RegExp("<", "g"), new RegExp(">", "g")];
    return function(str) {
        return String(str).replace(encodeRegExp[0], "&amp;").replace(encodeRegExp[1], "&quot;").replace(encodeRegExp[2], "&#39;").replace(encodeRegExp[3], "&lt;").replace(encodeRegExp[4], "&gt;")
    }
}();
var splitQuad = function(raw) {
    switch (_typeof(raw)) {
        case "string":
            return raw.split(/\s+/, 4);
        case "object":
            return [raw.x || raw.h || raw.left, raw.y || raw.v || raw.top, raw.x || raw.h || raw.right, raw.y || raw.v || raw.bottom];
        case "number":
            return [raw];
        default:
            return raw
    }
};
var quadToObject = function(raw) {
    var quad = splitQuad(raw);
    var left = parseInt(quad && quad[0], 10);
    var top = parseInt(quad && quad[1], 10);
    var right = parseInt(quad && quad[2], 10);
    var bottom = parseInt(quad && quad[3], 10);
    if (!isFinite(left)) {
        left = 0
    }
    if (!isFinite(top)) {
        top = left
    }
    if (!isFinite(right)) {
        right = left
    }
    if (!isFinite(bottom)) {
        bottom = top
    }
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    }
};
var stringFormat = function() {
    var s = arguments[0];
    var values = [].slice.call(arguments).slice(1);
    var replaceDollarCount;
    var reg;
    var value;
    if (typeUtils.isFunction(s)) {
        return s.apply(this, values)
    }
    for (var i = 0; i < values.length; i++) {
        reg = new RegExp("\\{" + i + "\\}", "gm");
        value = values[i];
        if ("string" === typeUtils.type(value) && value.indexOf("$") >= 0) {
            replaceDollarCount = "$".replace("$", "$$").length;
            value = value.replace("$", 1 === replaceDollarCount ? "$$$$" : "$$")
        }
        s = s.replace(reg, value)
    }
    return s
};
var replaceAll = function() {
    var quote = function(str) {
        return (str + "").replace(/([+*?.[^\]$(){}><|=!:])/g, "\\$1")
    };
    return function(text, searchToken, replacementToken) {
        return text.replace(new RegExp("(" + quote(searchToken) + ")", "gi"), replacementToken)
    }
}();
var isEmpty = function() {
    var SPACE_REGEXP = /\s/g;
    return function(text) {
        return !text || !text.replace(SPACE_REGEXP, "")
    }
}();
exports.encodeHtml = encodeHtml;
exports.quadToObject = quadToObject;
exports.format = stringFormat;
exports.replaceAll = replaceAll;
exports.isEmpty = isEmpty;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/event_registrator_callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _memorized_callbacks = __webpack_require__(31);
var _memorized_callbacks2 = _interopRequireDefault(_memorized_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
exports.default = new _memorized_callbacks2.default;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/style.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var camelize = __webpack_require__(32).camelize;
var callOnce = __webpack_require__(21);
var typeUtils = __webpack_require__(1);
var domAdapter = __webpack_require__(5);
var jsPrefixes = ["", "Webkit", "Moz", "O", "Ms"];
var cssPrefixes = {
    "": "",
    Webkit: "-webkit-",
    Moz: "-moz-",
    O: "-o-",
    ms: "-ms-"
};
var getStyles = callOnce(function() {
    return domAdapter.createElement("dx").style
});
var forEachPrefixes = function(prop, callBack) {
    prop = camelize(prop, true);
    var result;
    for (var i = 0, cssPrefixesCount = jsPrefixes.length; i < cssPrefixesCount; i++) {
        var jsPrefix = jsPrefixes[i];
        var prefixedProp = jsPrefix + prop;
        var lowerPrefixedProp = camelize(prefixedProp);
        result = callBack(lowerPrefixedProp, jsPrefix);
        if (void 0 === result) {
            result = callBack(prefixedProp, jsPrefix)
        }
        if (void 0 !== result) {
            break
        }
    }
    return result || ""
};
var styleProp = function(name) {
    if (name in getStyles()) {
        return name
    }
    var originalName = name;
    name = name.charAt(0).toUpperCase() + name.substr(1);
    for (var i = 1; i < jsPrefixes.length; i++) {
        var prefixedProp = jsPrefixes[i].toLowerCase() + name;
        if (prefixedProp in getStyles()) {
            return prefixedProp
        }
    }
    return originalName
};
var stylePropPrefix = function(prop) {
    return forEachPrefixes(prop, function(specific, jsPrefix) {
        if (specific in getStyles()) {
            return cssPrefixes[jsPrefix]
        }
    })
};
var pxExceptions = ["fillOpacity", "columnCount", "flexGrow", "flexShrink", "fontWeight", "lineHeight", "opacity", "zIndex", "zoom"];
var normalizeStyleProp = function(prop, value) {
    if (typeUtils.isNumeric(value) && pxExceptions.indexOf(prop) === -1) {
        value += "px"
    }
    return value
};
var setDimensionProperty = function(elements, propertyName, value) {
    if (elements) {
        value = typeUtils.isNumeric(value) ? value += "px" : value;
        for (var i = 0; i < elements.length; ++i) {
            elements[i].style[propertyName] = value
        }
    }
};
var setWidth = function(elements, value) {
    setDimensionProperty(elements, "width", value)
};
var setHeight = function(elements, value) {
    setDimensionProperty(elements, "height", value)
};
exports.styleProp = styleProp;
exports.stylePropPrefix = stylePropPrefix;
exports.normalizeStyleProp = normalizeStyleProp;
exports.setWidth = setWidth;
exports.setHeight = setHeight;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/resize_callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var windowUtils = __webpack_require__(7);
var domAdapter = __webpack_require__(5);
var Callbacks = __webpack_require__(12);
var readyCallbacks = __webpack_require__(22);
var callOnce = __webpack_require__(21);
var resizeCallbacks = function() {
    var prevSize;
    var callbacks = Callbacks();
    var originalCallbacksAdd = callbacks.add;
    var originalCallbacksRemove = callbacks.remove;
    if (!windowUtils.hasWindow()) {
        return callbacks
    }
    var formatSize = function() {
        var window = windowUtils.getWindow();
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };
    var handleResize = function() {
        var now = formatSize();
        if (now.width === prevSize.width && now.height === prevSize.height) {
            return
        }
        var changedDimension;
        if (now.width === prevSize.width) {
            changedDimension = "height"
        }
        if (now.height === prevSize.height) {
            changedDimension = "width"
        }
        prevSize = now;
        callbacks.fire(changedDimension)
    };
    var setPrevSize = callOnce(function() {
        prevSize = formatSize()
    });
    var removeListener;
    callbacks.add = function() {
        var result = originalCallbacksAdd.apply(callbacks, arguments);
        setPrevSize();
        readyCallbacks.add(function() {
            if (!removeListener && callbacks.has()) {
                removeListener = domAdapter.listen(windowUtils.getWindow(), "resize", handleResize)
            }
        });
        return result
    };
    callbacks.remove = function() {
        var result = originalCallbacksRemove.apply(callbacks, arguments);
        if (!callbacks.has() && removeListener) {
            removeListener();
            removeListener = void 0
        }
        return result
    };
    return callbacks
}();
module.exports = resizeCallbacks;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/view_port.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var readyCallbacks = __webpack_require__(22);
var ready = readyCallbacks.add;
var changeCallback = __webpack_require__(12)();
var $originalViewPort = $();
var value = function() {
    var $current;
    return function(element) {
        if (!arguments.length) {
            return $current
        }
        var $element = $(element);
        $originalViewPort = $element;
        var isNewViewportFound = !!$element.length;
        var prevViewPort = value();
        $current = isNewViewportFound ? $element : $("body");
        changeCallback.fire(isNewViewportFound ? value() : $(), prevViewPort)
    }
}();
ready(function() {
    value(".dx-viewport")
});
exports.value = value;
exports.changeCallback = changeCallback;
exports.originalViewPort = function() {
    return $originalViewPort
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/polyfills/promise.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var deferredUtils = __webpack_require__(23);
var windowUtils = __webpack_require__(7);
var Deferred = deferredUtils.Deferred;
var when = deferredUtils.when;
var promise = windowUtils.hasWindow() ? windowUtils.getWindow().Promise : Promise;
if (!promise) {
    promise = function(resolver) {
        var d = new Deferred;
        resolver(d.resolve.bind(this), d.reject.bind(this));
        return d.promise()
    };
    promise.resolve = function(val) {
        return (new Deferred).resolve(val).promise()
    };
    promise.reject = function(val) {
        return (new Deferred).reject(val).promise()
    };
    promise.all = function(promises) {
        return when.apply(this, promises).then(function() {
            return [].slice.call(arguments)
        })
    }
}
module.exports = promise;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/math.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var isExponential = __webpack_require__(1).isExponential;
var sign = function(value) {
    if (0 === value) {
        return 0
    }
    return value / Math.abs(value)
};
var fitIntoRange = function(value, minValue, maxValue) {
    var isMinValueUndefined = !minValue && 0 !== minValue;
    var isMaxValueUndefined = !maxValue && 0 !== maxValue;
    isMinValueUndefined && (minValue = !isMaxValueUndefined ? Math.min(value, maxValue) : value);
    isMaxValueUndefined && (maxValue = !isMinValueUndefined ? Math.max(value, minValue) : value);
    return Math.min(Math.max(value, minValue), maxValue)
};
var inRange = function(value, minValue, maxValue) {
    return value >= minValue && value <= maxValue
};

function getExponent(value) {
    return Math.abs(parseInt(value.toExponential().split("e")[1]))
}

function _isEdgeBug() {
    var value = 3e-4;
    var correctValue = "0.000300";
    var precisionValue = 3;
    return correctValue !== value.toPrecision(precisionValue)
}

function adjust(value, interval) {
    var precision = getPrecision(interval || 0) + 2;
    var separatedValue = value.toString().split(".");
    var sourceValue = value;
    var absValue = Math.abs(value);
    var separatedAdjustedValue;
    var isExponentValue = isExponential(value);
    var integerPart = absValue > 1 ? 10 : 0;
    if (1 === separatedValue.length) {
        return value
    }
    if (!isExponentValue) {
        if (isExponential(interval)) {
            precision = separatedValue[0].length + getExponent(interval)
        }
        value = absValue;
        value = value - Math.floor(value) + integerPart
    }
    precision = _isEdgeBug() && getExponent(value) > 6 || precision > 7 ? 15 : 7;
    if (!isExponentValue) {
        separatedAdjustedValue = parseFloat(value.toPrecision(precision)).toString().split(".");
        if (separatedAdjustedValue[0] === integerPart.toString()) {
            return parseFloat(separatedValue[0] + "." + separatedAdjustedValue[1])
        }
    }
    return parseFloat(sourceValue.toPrecision(precision))
}

function getPrecision(value) {
    var str = value.toString();
    if (str.indexOf(".") < 0) {
        return 0
    }
    var mantissa = str.split(".");
    var positionOfDelimiter = mantissa[1].indexOf("e");
    return positionOfDelimiter >= 0 ? positionOfDelimiter : mantissa[1].length
}

function getRoot(x, n) {
    if (x < 0 && n % 2 !== 1) {
        return NaN
    }
    var y = Math.pow(Math.abs(x), 1 / n);
    return n % 2 === 1 && x < 0 ? -y : y
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
                return []
            }
            return [-b / a]
        }
        var D2 = b * b - 4 * a * c;
        if (Math.abs(D2) < min) {
            return [-b / (2 * a)]
        } else {
            if (D2 > 0) {
                return [(-b + Math.sqrt(D2)) / (2 * a), (-b - Math.sqrt(D2)) / (2 * a)]
            }
        }
        return []
    }
    var p = (3 * a * c - b * b) / (3 * a * a);
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    var roots;
    var u;
    if (Math.abs(p) < min) {
        roots = [getRoot(-q, 3)]
    } else {
        if (Math.abs(q) < min) {
            roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : [])
        } else {
            var D3 = q * q / 4 + p * p * p / 27;
            if (Math.abs(D3) < min) {
                roots = [-1.5 * q / p, 3 * q / p]
            } else {
                if (D3 > 0) {
                    u = getRoot(-q / 2 - Math.sqrt(D3), 3);
                    roots = [u - p / (3 * u)]
                } else {
                    u = 2 * Math.sqrt(-p / 3);
                    var t = Math.acos(3 * q / p / u) / 3;
                    var k = 2 * Math.PI / 3;
                    roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)]
                }
            }
        }
    }
    for (var i = 0; i < roots.length; i++) {
        roots[i] -= b / (3 * a)
    }
    return roots
}

function trunc(value) {
    return Math.trunc ? Math.trunc(value) : value > 0 ? Math.floor(value) : Math.ceil(value)
}
exports.sign = sign;
exports.fitIntoRange = fitIntoRange;
exports.inRange = inRange;
exports.adjust = adjust;
exports.getPrecision = getPrecision;
exports.getExponent = getExponent;
exports.getRoot = getRoot;
exports.solveCubicEquation = solveCubicEquation;
exports.trunc = trunc;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/utils.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toFixed = void 0;
var _math = __webpack_require__(48);
var DECIMAL_BASE = 10;

function roundByAbs(value) {
    var valueSign = (0, _math.sign)(value);
    return valueSign * Math.round(Math.abs(value))
}

function adjustValue(value, precision) {
    var precisionMultiplier = Math.pow(DECIMAL_BASE, precision);
    var roundMultiplier = precisionMultiplier * DECIMAL_BASE;
    var intermediateValue = value * roundMultiplier / DECIMAL_BASE;
    return roundByAbs(intermediateValue) / precisionMultiplier
}

function toFixed(value, precision) {
    var valuePrecision = precision || 0;
    var adjustedValue = valuePrecision > 0 ? adjustValue.apply(void 0, arguments) : value;
    return adjustedValue.toFixed(valuePrecision)
}
exports.toFixed = toFixed;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/core.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _dependency_injector = __webpack_require__(19);
var _dependency_injector2 = _interopRequireDefault(_dependency_injector);
var _parent_locales = __webpack_require__(80);
var _parent_locales2 = _interopRequireDefault(_parent_locales);
var _parentLocale = __webpack_require__(81);
var _parentLocale2 = _interopRequireDefault(_parentLocale);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var DEFAULT_LOCALE = "en";
module.exports = (0, _dependency_injector2.default)({
    locale: function() {
        var currentLocale = DEFAULT_LOCALE;
        return function(locale) {
            if (!locale) {
                return currentLocale
            }
            currentLocale = locale
        }
    }(),
    getValueByClosestLocale: function(getter) {
        var locale = this.locale();
        var value = getter(locale);
        var isRootLocale;
        while (!value && !isRootLocale) {
            locale = (0, _parentLocale2.default)(_parent_locales2.default, locale);
            if (locale) {
                value = getter(locale)
            } else {
                isRootLocale = true
            }
        }
        if (void 0 === value && locale !== DEFAULT_LOCALE) {
            return getter(DEFAULT_LOCALE)
        }
        return value
    }
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/function_template.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FunctionTemplate = void 0;
var _template_base = __webpack_require__(25);
var _dom = __webpack_require__(16);

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}
var FunctionTemplate = exports.FunctionTemplate = function(_TemplateBase) {
    _inherits(FunctionTemplate, _TemplateBase);
    var _super = _createSuper(FunctionTemplate);

    function FunctionTemplate(render) {
        var _this;
        _classCallCheck(this, FunctionTemplate);
        _this = _super.call(this);
        _this._render = render;
        return _this
    }
    _createClass(FunctionTemplate, [{
        key: "_renderCore",
        value: function(options) {
            return (0, _dom.normalizeTemplateElement)(this._render(options))
        }
    }]);
    return FunctionTemplate
}(_template_base.TemplateBase);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/empty_template.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmptyTemplate = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _template_base = __webpack_require__(25);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}
var EmptyTemplate = exports.EmptyTemplate = function(_TemplateBase) {
    _inherits(EmptyTemplate, _TemplateBase);
    var _super = _createSuper(EmptyTemplate);

    function EmptyTemplate() {
        _classCallCheck(this, EmptyTemplate);
        return _super.apply(this, arguments)
    }
    _createClass(EmptyTemplate, [{
        key: "_renderCore",
        value: function() {
            return (0, _renderer2.default)()
        }
    }]);
    return EmptyTemplate
}(_template_base.TemplateBase);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/template_engine_registry.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerTemplateEngine = registerTemplateEngine;
exports.setTemplateEngine = setTemplateEngine;
exports.getCurrentTemplateEngine = getCurrentTemplateEngine;
var _type = __webpack_require__(1);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var templateEngines = {};
var currentTemplateEngine;

function registerTemplateEngine(name, templateEngine) {
    templateEngines[name] = templateEngine
}

function setTemplateEngine(templateEngine) {
    if ((0, _type.isString)(templateEngine)) {
        currentTemplateEngine = templateEngines[templateEngine];
        if (!currentTemplateEngine) {
            throw _errors2.default.Error("E0020", templateEngine)
        }
    } else {
        currentTemplateEngine = templateEngine
    }
}

function getCurrentTemplateEngine() {
    return currentTemplateEngine
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/widget/selectors.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var domAdapter = __webpack_require__(5);
var _focusable = function(element, tabIndex) {
    if (!visible(element)) {
        return false
    }
    var nodeName = element.nodeName.toLowerCase();
    var isTabIndexNotNaN = !isNaN(tabIndex);
    var isDisabled = element.disabled;
    var isDefaultFocus = /^(input|select|textarea|button|object|iframe)$/.test(nodeName);
    var isHyperlink = "a" === nodeName;
    var isFocusable = true;
    var isContentEditable = element.isContentEditable;
    if (isDefaultFocus || isContentEditable) {
        isFocusable = !isDisabled
    } else {
        if (isHyperlink) {
            isFocusable = element.href || isTabIndexNotNaN
        } else {
            isFocusable = isTabIndexNotNaN
        }
    }
    return isFocusable
};

function visible(element) {
    var $element = $(element);
    return $element.is(":visible") && "hidden" !== $element.css("visibility") && "hidden" !== $element.parents().css("visibility")
}
module.exports = {
    focusable: function(index, element) {
        return _focusable(element, $(element).attr("tabIndex"))
    },
    tabbable: function(index, element) {
        var tabIndex = $(element).attr("tabIndex");
        return (isNaN(tabIndex) || tabIndex >= 0) && _focusable(element, tabIndex)
    },
    focused: function($element) {
        var element = $($element).get(0);
        return domAdapter.getActiveElement() === element
    }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/browser.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var extend = __webpack_require__(2).extend;
var windowUtils = __webpack_require__(7);
var navigator = windowUtils.getNavigator();
var webkitRegExp = /(webkit)[ \/]([\w.]+)/;
var ieRegExp = /(msie) (\d{1,2}\.\d)/;
var ie11RegExp = /(trident).*rv:(\d{1,2}\.\d)/;
var msEdge = /(edge)\/((\d+)?[\w.]+)/;
var mozillaRegExp = /(mozilla)(?:.*? rv:([\w.]+))/;
var browserFromUA = function(ua) {
    ua = ua.toLowerCase();
    var result = {};
    var matches = ieRegExp.exec(ua) || ie11RegExp.exec(ua) || msEdge.exec(ua) || ua.indexOf("compatible") < 0 && mozillaRegExp.exec(ua) || webkitRegExp.exec(ua) || [];
    var browserName = matches[1];
    var browserVersion = matches[2];
    if ("webkit" === browserName) {
        result.webkit = true;
        if (ua.indexOf("chrome") >= 0 || ua.indexOf("crios") >= 0) {
            browserName = "chrome";
            browserVersion = /(?:chrome|crios)\/(\d+\.\d+)/.exec(ua);
            browserVersion = browserVersion && browserVersion[1]
        } else {
            if (ua.indexOf("fxios") >= 0) {
                browserName = "mozilla";
                browserVersion = /fxios\/(\d+\.\d+)/.exec(ua);
                browserVersion = browserVersion && browserVersion[1]
            } else {
                if (ua.indexOf("safari") >= 0 && /version|phantomjs/.test(ua)) {
                    browserName = "safari";
                    browserVersion = /(?:version|phantomjs)\/([0-9.]+)/.exec(ua);
                    browserVersion = browserVersion && browserVersion[1]
                } else {
                    browserName = "unknown";
                    browserVersion = /applewebkit\/([0-9.]+)/.exec(ua);
                    browserVersion = browserVersion && browserVersion[1]
                }
            }
        }
    }
    if ("trident" === browserName || "edge" === browserName) {
        browserName = "msie"
    }
    if (browserName) {
        result[browserName] = true;
        result.version = browserVersion
    }
    return result
};
module.exports = extend({
    _fromUA: browserFromUA
}, browserFromUA(navigator.userAgent));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/touch.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var devices = __webpack_require__(15);
var extend = __webpack_require__(2).extend;
var each = __webpack_require__(4).each;
var BaseStrategy = __webpack_require__(28);
var eventMap = {
    dxpointerdown: "touchstart",
    dxpointermove: "touchmove",
    dxpointerup: "touchend",
    dxpointercancel: "touchcancel",
    dxpointerover: "",
    dxpointerout: "",
    dxpointerenter: "",
    dxpointerleave: ""
};
var normalizeTouchEvent = function(e) {
    var pointers = [];
    each(e.touches, function(_, touch) {
        pointers.push(extend({
            pointerId: touch.identifier
        }, touch))
    });
    return {
        pointers: pointers,
        pointerId: e.changedTouches[0].identifier
    }
};
var skipTouchWithSameIdentifier = function(pointerEvent) {
    return "ios" === devices.real().platform && ("dxpointerdown" === pointerEvent || "dxpointerup" === pointerEvent)
};
var TouchStrategy = BaseStrategy.inherit({
    ctor: function() {
        this.callBase.apply(this, arguments);
        this._pointerId = 0
    },
    _handler: function(e) {
        if (skipTouchWithSameIdentifier(this._eventName)) {
            var touch = e.changedTouches[0];
            if (this._pointerId === touch.identifier && 0 !== this._pointerId) {
                return
            }
            this._pointerId = touch.identifier
        }
        return this.callBase.apply(this, arguments)
    },
    _fireEvent: function(args) {
        return this.callBase(extend(normalizeTouchEvent(args.originalEvent), args))
    }
});
TouchStrategy.map = eventMap;
TouchStrategy.normalize = normalizeTouchEvent;
module.exports = TouchStrategy;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/observer.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var each = __webpack_require__(4).each;
var readyCallbacks = __webpack_require__(22);
var domAdapter = __webpack_require__(5);
var addEventsListener = function(events, handler) {
    readyCallbacks.add(function() {
        events.split(" ").forEach(function(event) {
            domAdapter.listen(domAdapter.getDocument(), event, handler, true)
        })
    })
};
var Observer = function(eventMap, pointerEquals, onPointerAdding) {
    onPointerAdding = onPointerAdding || function() {};
    var pointers = [];
    var getPointerIndex = function(e) {
        var index = -1;
        each(pointers, function(i, pointer) {
            if (!pointerEquals(e, pointer)) {
                return true
            }
            index = i;
            return false
        });
        return index
    };
    var addPointer = function(e) {
        if (getPointerIndex(e) === -1) {
            onPointerAdding(e);
            pointers.push(e)
        }
    };
    var removePointer = function(e) {
        var index = getPointerIndex(e);
        if (index > -1) {
            pointers.splice(index, 1)
        }
    };
    var updatePointer = function(e) {
        pointers[getPointerIndex(e)] = e
    };
    addEventsListener(eventMap.dxpointerdown, addPointer);
    addEventsListener(eventMap.dxpointermove, updatePointer);
    addEventsListener(eventMap.dxpointerup, removePointer);
    addEventsListener(eventMap.dxpointercancel, removePointer);
    this.pointers = function() {
        return pointers
    };
    this.reset = function() {
        pointers = []
    }
};
module.exports = Observer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/mouse.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var extend = __webpack_require__(2).extend;
var BaseStrategy = __webpack_require__(28);
var Observer = __webpack_require__(57);
var eventMap = {
    dxpointerdown: "mousedown",
    dxpointermove: "mousemove",
    dxpointerup: "mouseup",
    dxpointercancel: "",
    dxpointerover: "mouseover",
    dxpointerout: "mouseout",
    dxpointerenter: "mouseenter",
    dxpointerleave: "mouseleave"
};
var normalizeMouseEvent = function(e) {
    e.pointerId = 1;
    return {
        pointers: observer.pointers(),
        pointerId: 1
    }
};
var observer;
var activated = false;
var activateStrategy = function() {
    if (activated) {
        return
    }
    observer = new Observer(eventMap, function() {
        return true
    });
    activated = true
};
var MouseStrategy = BaseStrategy.inherit({
    ctor: function() {
        this.callBase.apply(this, arguments);
        activateStrategy()
    },
    _fireEvent: function(args) {
        return this.callBase(extend(normalizeMouseEvent(args.originalEvent), args))
    }
});
MouseStrategy.map = eventMap;
MouseStrategy.normalize = normalizeMouseEvent;
MouseStrategy.activate = activateStrategy;
MouseStrategy.resetObserver = function() {
    observer.reset()
};
module.exports = MouseStrategy;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/emitter.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var noop = __webpack_require__(8).noop;
var Class = __webpack_require__(11);
var Callbacks = __webpack_require__(12);
var extend = __webpack_require__(2).extend;
var eventUtils = __webpack_require__(13);
var Emitter = Class.inherit({
    ctor: function(element) {
        this._$element = $(element);
        this._cancelCallback = Callbacks();
        this._acceptCallback = Callbacks()
    },
    getElement: function() {
        return this._$element
    },
    validate: function(e) {
        return !eventUtils.isDxMouseWheelEvent(e)
    },
    validatePointers: function(e) {
        return 1 === eventUtils.hasTouches(e)
    },
    allowInterruptionByMouseWheel: function() {
        return true
    },
    configure: function(data) {
        extend(this, data)
    },
    addCancelCallback: function(callback) {
        this._cancelCallback.add(callback)
    },
    removeCancelCallback: function() {
        this._cancelCallback.empty()
    },
    _cancel: function(e) {
        this._cancelCallback.fire(this, e)
    },
    addAcceptCallback: function(callback) {
        this._acceptCallback.add(callback)
    },
    removeAcceptCallback: function() {
        this._acceptCallback.empty()
    },
    _accept: function(e) {
        this._acceptCallback.fire(this, e)
    },
    _requestAccept: function(e) {
        this._acceptRequestEvent = e
    },
    _forgetAccept: function() {
        this._accept(this._acceptRequestEvent);
        this._acceptRequestEvent = null
    },
    start: noop,
    move: noop,
    end: noop,
    cancel: noop,
    reset: function() {
        if (this._acceptRequestEvent) {
            this._accept(this._acceptRequestEvent)
        }
    },
    _fireEvent: function(eventName, e, params) {
        var eventData = extend({
            type: eventName,
            originalEvent: e,
            target: this._getEmitterTarget(e),
            delegateTarget: this.getElement().get(0)
        }, params);
        e = eventUtils.fireEvent(eventData);
        if (e.cancel) {
            this._cancel(e)
        }
        return e
    },
    _getEmitterTarget: function(e) {
        return (this.delegateSelector ? $(e.target).closest(this.delegateSelector) : this.getElement()).get(0)
    },
    dispose: noop
});
module.exports = Emitter;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/emitter_registrator.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var readyCallbacks = __webpack_require__(22);
var domAdapter = __webpack_require__(5);
var eventsEngine = __webpack_require__(10);
var dataUtils = __webpack_require__(20);
var Class = __webpack_require__(11);
var extend = __webpack_require__(2).extend;
var inArray = __webpack_require__(14).inArray;
var each = __webpack_require__(4).each;
var registerEvent = __webpack_require__(24);
var eventUtils = __webpack_require__(13);
var pointerEvents = __webpack_require__(27);
var wheelEvent = __webpack_require__(105);
var MANAGER_EVENT = "dxEventManager";
var EMITTER_DATA = "dxEmitter";
var EventManager = Class.inherit({
    ctor: function() {
        this._attachHandlers();
        this.reset();
        this._proxiedCancelHandler = this._cancelHandler.bind(this);
        this._proxiedAcceptHandler = this._acceptHandler.bind(this)
    },
    _attachHandlers: function() {
        readyCallbacks.add(function() {
            var document = domAdapter.getDocument();
            eventsEngine.subscribeGlobal(document, eventUtils.addNamespace(pointerEvents.down, MANAGER_EVENT), this._pointerDownHandler.bind(this));
            eventsEngine.subscribeGlobal(document, eventUtils.addNamespace(pointerEvents.move, MANAGER_EVENT), this._pointerMoveHandler.bind(this));
            eventsEngine.subscribeGlobal(document, eventUtils.addNamespace([pointerEvents.up, pointerEvents.cancel].join(" "), MANAGER_EVENT), this._pointerUpHandler.bind(this));
            eventsEngine.subscribeGlobal(document, eventUtils.addNamespace(wheelEvent.name, MANAGER_EVENT), this._mouseWheelHandler.bind(this))
        }.bind(this))
    },
    _eachEmitter: function(callback) {
        var activeEmitters = this._activeEmitters || [];
        var i = 0;
        while (activeEmitters.length > i) {
            var emitter = activeEmitters[i];
            if (false === callback(emitter)) {
                break
            }
            if (activeEmitters[i] === emitter) {
                i++
            }
        }
    },
    _applyToEmitters: function(method, arg) {
        this._eachEmitter(function(emitter) {
            emitter[method].call(emitter, arg)
        })
    },
    reset: function() {
        this._eachEmitter(this._proxiedCancelHandler);
        this._activeEmitters = []
    },
    resetEmitter: function(emitter) {
        this._proxiedCancelHandler(emitter)
    },
    _pointerDownHandler: function(e) {
        if (eventUtils.isMouseEvent(e) && e.which > 1) {
            return
        }
        this._updateEmitters(e)
    },
    _updateEmitters: function(e) {
        if (!this._isSetChanged(e)) {
            return
        }
        this._cleanEmitters(e);
        this._fetchEmitters(e)
    },
    _isSetChanged: function(e) {
        var currentSet = this._closestEmitter(e);
        var previousSet = this._emittersSet || [];
        var setChanged = currentSet.length !== previousSet.length;
        each(currentSet, function(index, emitter) {
            setChanged = setChanged || previousSet[index] !== emitter;
            return !setChanged
        });
        this._emittersSet = currentSet;
        return setChanged
    },
    _closestEmitter: function(e) {
        var that = this;
        var result = [];
        var $element = $(e.target);

        function handleEmitter(_, emitter) {
            if (!!emitter && emitter.validatePointers(e) && emitter.validate(e)) {
                emitter.addCancelCallback(that._proxiedCancelHandler);
                emitter.addAcceptCallback(that._proxiedAcceptHandler);
                result.push(emitter)
            }
        }
        while ($element.length) {
            var emitters = dataUtils.data($element.get(0), EMITTER_DATA) || [];
            each(emitters, handleEmitter);
            $element = $element.parent()
        }
        return result
    },
    _acceptHandler: function(acceptedEmitter, e) {
        var that = this;
        this._eachEmitter(function(emitter) {
            if (emitter !== acceptedEmitter) {
                that._cancelEmitter(emitter, e)
            }
        })
    },
    _cancelHandler: function(canceledEmitter, e) {
        this._cancelEmitter(canceledEmitter, e)
    },
    _cancelEmitter: function(emitter, e) {
        var activeEmitters = this._activeEmitters;
        if (e) {
            emitter.cancel(e)
        } else {
            emitter.reset()
        }
        emitter.removeCancelCallback();
        emitter.removeAcceptCallback();
        var emitterIndex = inArray(emitter, activeEmitters);
        if (emitterIndex > -1) {
            activeEmitters.splice(emitterIndex, 1)
        }
    },
    _cleanEmitters: function(e) {
        this._applyToEmitters("end", e);
        this.reset(e)
    },
    _fetchEmitters: function(e) {
        this._activeEmitters = this._emittersSet.slice();
        this._applyToEmitters("start", e)
    },
    _pointerMoveHandler: function(e) {
        this._applyToEmitters("move", e)
    },
    _pointerUpHandler: function(e) {
        this._updateEmitters(e)
    },
    _mouseWheelHandler: function(e) {
        if (!this._allowInterruptionByMouseWheel()) {
            return
        }
        e.pointers = [null];
        this._pointerDownHandler(e);
        this._adjustWheelEvent(e);
        this._pointerMoveHandler(e);
        e.pointers = [];
        this._pointerUpHandler(e)
    },
    _allowInterruptionByMouseWheel: function() {
        var allowInterruption = true;
        this._eachEmitter(function(emitter) {
            allowInterruption = emitter.allowInterruptionByMouseWheel() && allowInterruption;
            return allowInterruption
        });
        return allowInterruption
    },
    _adjustWheelEvent: function(e) {
        var closestGestureEmitter = null;
        this._eachEmitter(function(emitter) {
            if (!emitter.gesture) {
                return
            }
            var direction = emitter.getDirection(e);
            if ("horizontal" !== direction && !e.shiftKey || "vertical" !== direction && e.shiftKey) {
                closestGestureEmitter = emitter;
                return false
            }
        });
        if (!closestGestureEmitter) {
            return
        }
        var direction = closestGestureEmitter.getDirection(e);
        var verticalGestureDirection = "both" === direction && !e.shiftKey || "vertical" === direction;
        var prop = verticalGestureDirection ? "pageY" : "pageX";
        e[prop] += e.delta
    },
    isActive: function(element) {
        var result = false;
        this._eachEmitter(function(emitter) {
            result = result || emitter.getElement().is(element)
        });
        return result
    }
});
var eventManager = new EventManager;
var EMITTER_SUBSCRIPTION_DATA = "dxEmitterSubscription";
var registerEmitter = function(emitterConfig) {
    var emitterClass = emitterConfig.emitter;
    var emitterName = emitterConfig.events[0];
    var emitterEvents = emitterConfig.events;
    each(emitterEvents, function(_, eventName) {
        registerEvent(eventName, {
            noBubble: !emitterConfig.bubble,
            setup: function(element) {
                var subscriptions = dataUtils.data(element, EMITTER_SUBSCRIPTION_DATA) || {};
                var emitters = dataUtils.data(element, EMITTER_DATA) || {};
                var emitter = emitters[emitterName] || new emitterClass(element);
                subscriptions[eventName] = true;
                emitters[emitterName] = emitter;
                dataUtils.data(element, EMITTER_DATA, emitters);
                dataUtils.data(element, EMITTER_SUBSCRIPTION_DATA, subscriptions)
            },
            add: function(element, handleObj) {
                var emitters = dataUtils.data(element, EMITTER_DATA);
                var emitter = emitters[emitterName];
                emitter.configure(extend({
                    delegateSelector: handleObj.selector
                }, handleObj.data), handleObj.type)
            },
            teardown: function(element) {
                var subscriptions = dataUtils.data(element, EMITTER_SUBSCRIPTION_DATA);
                var emitters = dataUtils.data(element, EMITTER_DATA);
                var emitter = emitters[emitterName];
                delete subscriptions[eventName];
                var disposeEmitter = true;
                each(emitterEvents, function(_, eventName) {
                    disposeEmitter = disposeEmitter && !subscriptions[eventName];
                    return disposeEmitter
                });
                if (disposeEmitter) {
                    if (eventManager.isActive(element)) {
                        eventManager.resetEmitter(emitter)
                    }
                    emitter && emitter.dispose();
                    delete emitters[emitterName]
                }
            }
        })
    })
};
module.exports = registerEmitter;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/button.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _utils = __webpack_require__(68);
var _utils2 = _interopRequireDefault(_utils);
var _component_registrator = __webpack_require__(69);
var _component_registrator2 = _interopRequireDefault(_component_registrator);
var _themes = __webpack_require__(72);
var _themes2 = _interopRequireDefault(_themes);
var _action = __webpack_require__(36);
var _action2 = _interopRequireDefault(_action);
var _validation_engine = __webpack_require__(75);
var _validation_engine2 = _interopRequireDefault(_validation_engine);
var _ui = __webpack_require__(86);
var _ui2 = _interopRequireDefault(_ui);
var _short = __webpack_require__(38);
var _extend = __webpack_require__(2);
var _function_template = __webpack_require__(51);
var _icon = __webpack_require__(109);
var _dom = __webpack_require__(16);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}

function _get(target, property, receiver) {
    if ("undefined" !== typeof Reflect && Reflect.get) {
        _get = Reflect.get
    } else {
        _get = function(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) {
                return
            }
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver)
            }
            return desc.value
        }
    }
    return _get(target, property, receiver || target)
}

function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (null === object) {
            break
        }
    }
    return object
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}
var ANONYMOUS_TEMPLATE_NAME = "content";
var Button = function(_Widget) {
    _inherits(Button, _Widget);
    var _super = _createSuper(Button);

    function Button() {
        var _this;
        _classCallCheck(this, Button);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key]
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _this._feedbackHideTimeout = 100;
        return _this
    }
    _createClass(Button, [{
        key: "_$content",
        value: function() {
            return this.$element().find(".dx-button-content")
        }
    }, {
        key: "_$submitInput",
        value: function() {
            return this.$element().find(".dx-button-submit-input")
        }
    }, {
        key: "_attachActiveEvents",
        value: function(active, inactive) {
            var $el = this._eventBindingTarget();
            var namespace = "inkRipple";
            var selector = this._activeStateUnit;
            _short.active.off($el, {
                namespace: namespace,
                selector: selector
            });
            _short.active.on($el, new _action2.default(active), new _action2.default(inactive, {
                excludeValidators: ["disabled", "readOnly"]
            }), {
                showTimeout: this._feedbackShowTimeout,
                hideTimeout: this._feedbackHideTimeout,
                selector: selector,
                namespace: namespace
            })
        }
    }, {
        key: "_defaultOptionsRules",
        value: function() {
            return _get(_getPrototypeOf(Button.prototype), "_defaultOptionsRules", this).call(this).concat([{
                device: function() {
                    return "desktop" === _devices2.default.real().deviceType && !_devices2.default.isSimulator()
                },
                options: {
                    focusStateEnabled: true
                }
            }, {
                device: function() {
                    return _themes2.default.isMaterial(_themes2.default.current())
                },
                options: {
                    useInkRipple: true
                }
            }])
        }
    }, {
        key: "_executeClickAction",
        value: function(event) {
            this._clickAction({
                validationGroup: this._validationGroupConfig,
                event: event
            })
        }
    }, {
        key: "_findGroup",
        value: function() {
            var $element = this.$element();
            var model = this._modelByElement($element);
            var _this$option = this.option(),
                validationGroup = _this$option.validationGroup;
            return validationGroup || _validation_engine2.default.findGroup($element, model)
        }
    }, {
        key: "_getContentData",
        value: function() {
            var _this$option2 = this.option(),
                icon = _this$option2.icon,
                text = _this$option2.text,
                type = _this$option2.type,
                _templateData = _this$option2._templateData;
            return (0, _extend.extend)({
                icon: "back" === type && !icon ? "back" : icon,
                text: text
            }, _templateData)
        }
    }, {
        key: "_getDefaultOptions",
        value: function() {
            return (0, _extend.extend)(_get(_getPrototypeOf(Button.prototype), "_getDefaultOptions", this).call(this), {
                hoverStateEnabled: true,
                onClick: null,
                type: "normal",
                text: "",
                icon: "",
                iconPosition: "left",
                validationGroup: void 0,
                activeStateEnabled: true,
                template: "content",
                useSubmitBehavior: false,
                useInkRipple: false,
                _templateData: {},
                stylingMode: "contained"
            })
        }
    }, {
        key: "_getSubmitAction",
        value: function() {
            var _this2 = this;
            var needValidate = true;
            var validationStatus = "valid";
            return this._createAction(function(_ref) {
                var event = _ref.event;
                if (needValidate) {
                    var validationGroup = _this2._validationGroupConfig;
                    if (validationGroup) {
                        var _validationGroup$vali = validationGroup.validate(),
                            status = _validationGroup$vali.status,
                            complete = _validationGroup$vali.complete;
                        validationStatus = status;
                        if ("pending" === status) {
                            needValidate = false;
                            _this2.option("disabled", true);
                            complete.then(function(_ref2) {
                                var status = _ref2.status;
                                _this2.option("disabled", false);
                                validationStatus = status;
                                "valid" === validationStatus && _this2._submitInput().click();
                                needValidate = true
                            })
                        }
                    }
                }
                "valid" !== validationStatus && event.preventDefault();
                event.stopPropagation()
            })
        }
    }, {
        key: "_initMarkup",
        value: function() {
            this.$element().addClass("dx-button");
            this._renderType();
            this._renderStylingMode();
            this._renderInkRipple();
            this._renderClick();
            this._updateAriaLabel();
            _get(_getPrototypeOf(Button.prototype), "_initMarkup", this).call(this);
            this._updateContent();
            this.setAria("role", "button")
        }
    }, {
        key: "_getAnonymousTemplateName",
        value: function() {
            return ANONYMOUS_TEMPLATE_NAME
        }
    }, {
        key: "_initTemplates",
        value: function() {
            var _this3 = this;
            this._templateManager.addDefaultTemplates({
                content: new _function_template.FunctionTemplate(function(_ref3) {
                    var _ref3$model = _ref3.model,
                        model = void 0 === _ref3$model ? {} : _ref3$model,
                        container = _ref3.container;
                    var text = model.text,
                        icon = model.icon;
                    var _this3$option = _this3.option(),
                        iconPosition = _this3$option.iconPosition;
                    var $icon = (0, _icon.getImageContainer)(icon);
                    var $textContainer = text && (0, _renderer2.default)("<span>").text(text).addClass("dx-button-text");
                    var $container = (0, _renderer2.default)(container);
                    $container.append($textContainer);
                    if ("left" === iconPosition) {
                        $container.prepend($icon)
                    } else {
                        $icon.addClass("dx-icon-right");
                        $container.append($icon)
                    }
                })
            });
            _get(_getPrototypeOf(Button.prototype), "_initTemplates", this).call(this)
        }
    }, {
        key: "_optionChanged",
        value: function(args) {
            var name = args.name,
                previousValue = args.previousValue;
            switch (name) {
                case "onClick":
                    this._updateClick();
                    break;
                case "icon":
                case "text":
                    this._updateContent();
                    this._updateAriaLabel();
                    break;
                case "type":
                    this._updateType(previousValue);
                    this._updateContent();
                    break;
                case "_templateData":
                    break;
                case "template":
                case "iconPosition":
                    this._updateContent();
                    break;
                case "stylingMode":
                    this._updateStylingMode();
                    break;
                case "useSubmitBehavior":
                    this._updateSubmitInput();
                    break;
                case "useInkRipple":
                    this._invalidate();
                    break;
                default:
                    _get(_getPrototypeOf(Button.prototype), "_optionChanged", this).call(this, args)
            }
        }
    }, {
        key: "_renderClick",
        value: function() {
            var _this4 = this;
            var $el = this.$element();
            _short.dxClick.off($el, {
                namespace: this.NAME
            });
            _short.dxClick.on($el, function(event) {
                return _this4._executeClickAction(event)
            }, {
                namespace: this.NAME
            });
            this._updateClick()
        }
    }, {
        key: "_renderInkRipple",
        value: function() {
            var _this5 = this;
            var _this$option3 = this.option(),
                text = _this$option3.text,
                icon = _this$option3.icon,
                type = _this$option3.type,
                useInkRipple = _this$option3.useInkRipple;
            if (useInkRipple) {
                var isOnlyIconButton = !text && icon || "back" === type;
                var _inkRipple = _utils2.default.render(isOnlyIconButton ? {
                    waveSizeCoefficient: 1,
                    useHoldAnimation: false,
                    isCentered: true
                } : {});
                var changeWaveVisibility = function(event, visible) {
                    var _this5$option = _this5.option(),
                        activeStateEnabled = _this5$option.activeStateEnabled,
                        useInkRipple = _this5$option.useInkRipple;
                    if (useInkRipple && activeStateEnabled && !_this5._disposed) {
                        var config = {
                            element: _this5._$content(),
                            event: event
                        };
                        visible ? _inkRipple.showWave(config) : _inkRipple.hideWave(config)
                    }
                };
                this._attachActiveEvents(function(_ref4) {
                    var event = _ref4.event;
                    return changeWaveVisibility(event, true)
                }, function(_ref5) {
                    var event = _ref5.event;
                    return changeWaveVisibility(event)
                })
            }
        }
    }, {
        key: "_renderStylingMode",
        value: function() {
            var $element = this.$element();
            var _this$option4 = this.option(),
                stylingMode = _this$option4.stylingMode;
            if (["contained", "text", "outlined"].indexOf(stylingMode) === -1) {
                stylingMode = this._getDefaultOptions().stylingMode
            }
            $element.addClass("dx-button-mode-".concat(stylingMode))
        }
    }, {
        key: "_renderSubmitInput",
        value: function() {
            var _this$option5 = this.option(),
                useSubmitBehavior = _this$option5.useSubmitBehavior;
            if (useSubmitBehavior) {
                var submitAction = this._getSubmitAction();
                var $content = this._$content();
                (0, _renderer2.default)("<input>").attr("type", "submit").attr("tabindex", -1).addClass("dx-button-submit-input").appendTo($content);
                _short.click.on(this._$submitInput(), function(event) {
                    return submitAction({
                        event: event
                    })
                })
            }
        }
    }, {
        key: "_renderType",
        value: function() {
            var _this$option6 = this.option(),
                type = _this$option6.type;
            var $element = this.$element();
            type && $element.addClass("dx-button-".concat(type))
        }
    }, {
        key: "_submitInput",
        value: function() {
            return this._$submitInput().get(0)
        }
    }, {
        key: "_supportedKeys",
        value: function() {
            var _this6 = this;
            var click = function(e) {
                e.preventDefault();
                _this6._executeClickAction(e)
            };
            return (0, _extend.extend)(_get(_getPrototypeOf(Button.prototype), "_supportedKeys", this).call(this), {
                space: click,
                enter: click
            })
        }
    }, {
        key: "_updateAriaLabel",
        value: function() {
            var ariaTarget = this._getAriaTarget();
            var _this$option7 = this.option(),
                icon = _this$option7.icon,
                text = _this$option7.text;
            if (!text) {
                if ("image" === (0, _icon.getImageSourceType)(icon)) {
                    icon = icon.indexOf("base64") === -1 ? icon.replace(/.+\/([^.]+)\..+$/, "$1") : "Base64"
                }
                text = icon || ""
            }
            ariaTarget.attr("aria-label", text || null)
        }
    }, {
        key: "_updateClick",
        value: function() {
            var _this7 = this;
            this._clickAction = this._createActionByOption("onClick", {
                excludeValidators: ["readOnly"],
                afterExecute: function() {
                    var _this7$option = _this7.option(),
                        useSubmitBehavior = _this7$option.useSubmitBehavior;
                    useSubmitBehavior && setTimeout(function() {
                        return _this7._submitInput().click()
                    })
                }
            })
        }
    }, {
        key: "_updateContent",
        value: function() {
            var $element = this.$element();
            var $content = this._$content();
            var data = this._getContentData();
            var _this$option8 = this.option(),
                template = _this$option8.template,
                iconPosition = _this$option8.iconPosition;
            var icon = data.icon,
                text = data.text;
            $content.length ? $content.empty() : $content = (0, _renderer2.default)("<div>").addClass("dx-button-content").appendTo($element);
            $element.toggleClass("dx-button-has-icon", !!icon).toggleClass("dx-button-icon-right", !!icon && "left" !== iconPosition).toggleClass("dx-button-has-text", !!text);
            var $template = (0, _renderer2.default)(this._getTemplateByOption("template").render({
                model: data,
                container: (0, _dom.getPublicElement)($content),
                transclude: this._templateManager.anonymousTemplateName === template
            }));
            if ($template.hasClass("dx-template-wrapper")) {
                $template.addClass("dx-button-content");
                $content.replaceWith($template)
            }
            this._updateSubmitInput()
        }
    }, {
        key: "_updateSubmitInput",
        value: function() {
            var _this$option9 = this.option(),
                useSubmitBehavior = _this$option9.useSubmitBehavior;
            var $submitInput = this._$submitInput();
            if (!useSubmitBehavior && $submitInput.length) {
                $submitInput.remove()
            } else {
                if (useSubmitBehavior && !$submitInput.length) {
                    this._renderSubmitInput()
                }
            }
        }
    }, {
        key: "_updateStylingMode",
        value: function() {
            var $element = this.$element();
            ["contained", "text", "outlined"].map(function(mode) {
                return "dx-button-mode-".concat(mode)
            }).forEach($element.removeClass.bind($element));
            this._renderStylingMode()
        }
    }, {
        key: "_updateType",
        value: function(previous) {
            var $element = this.$element();
            [previous, "back", "danger", "default", "normal", "success"].map(function(type) {
                return "dx-button-".concat(type)
            }).forEach($element.removeClass.bind($element));
            this._renderType()
        }
    }, {
        key: "_validationGroupConfig",
        get: function() {
            return _validation_engine2.default.getGroupConfig(this._findGroup())
        }
    }]);
    return Button
}(_ui2.default);
(0, _component_registrator2.default)("dxButton", Button);
module.exports = Button;
module.exports.default = module.exports;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/renderer_base.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var dataUtils = __webpack_require__(20);
var domAdapter = __webpack_require__(5);
var windowUtils = __webpack_require__(7);
var window = windowUtils.getWindow();
var typeUtils = __webpack_require__(1);
var styleUtils = __webpack_require__(44);
var sizeUtils = __webpack_require__(66);
var htmlParser = __webpack_require__(33);
var renderer;
var initRender = function(selector, context) {
    if (!selector) {
        this.length = 0;
        return this
    }
    if ("string" === typeof selector) {
        if ("body" === selector) {
            this[0] = context ? context.body : domAdapter.getBody();
            this.length = 1;
            return this
        }
        context = context || domAdapter.getDocument();
        if ("<" === selector[0]) {
            this[0] = domAdapter.createElement(selector.slice(1, -1), context);
            this.length = 1;
            return this
        } [].push.apply(this, domAdapter.querySelectorAll(context, selector));
        return this
    } else {
        if (domAdapter.isNode(selector) || typeUtils.isWindow(selector)) {
            this[0] = selector;
            this.length = 1;
            return this
        } else {
            if (Array.isArray(selector)) {
                [].push.apply(this, selector);
                return this
            }
        }
    }
    return renderer(selector.toArray ? selector.toArray() : [selector])
};
renderer = function(selector, context) {
    return new initRender(selector, context)
};
renderer.fn = {
    dxRenderer: true
};
initRender.prototype = renderer.fn;
var repeatMethod = function(methodName, args) {
    for (var i = 0; i < this.length; i++) {
        var item = renderer(this[i]);
        item[methodName].apply(item, args)
    }
    return this
};
var setAttributeValue = function(element, attrName, value) {
    if (void 0 !== value && null !== value) {
        domAdapter.setAttribute(element, attrName, value)
    } else {
        domAdapter.removeAttribute(element, attrName)
    }
};
initRender.prototype.show = function() {
    return this.toggle(true)
};
initRender.prototype.hide = function() {
    return this.toggle(false)
};
initRender.prototype.toggle = function(value) {
    if (this[0]) {
        this.toggleClass("dx-state-invisible", !value)
    }
    return this
};
initRender.prototype.attr = function(attrName, value) {
    if (this.length > 1 && arguments.length > 1) {
        return repeatMethod.call(this, "attr", arguments)
    }
    if (!this[0]) {
        if (typeUtils.isObject(attrName) || void 0 !== value) {
            return this
        } else {
            return
        }
    }
    if (!this[0].getAttribute) {
        return this.prop(attrName, value)
    }
    if ("string" === typeof attrName && 1 === arguments.length) {
        var result = this[0].getAttribute(attrName);
        return null == result ? void 0 : result
    } else {
        if (typeUtils.isPlainObject(attrName)) {
            for (var key in attrName) {
                this.attr(key, attrName[key])
            }
        } else {
            setAttributeValue(this[0], attrName, value)
        }
    }
    return this
};
initRender.prototype.removeAttr = function(attrName) {
    this[0] && domAdapter.removeAttribute(this[0], attrName);
    return this
};
initRender.prototype.prop = function(propName, value) {
    if (!this[0]) {
        return this
    }
    if ("string" === typeof propName && 1 === arguments.length) {
        return this[0][propName]
    } else {
        if (typeUtils.isPlainObject(propName)) {
            for (var key in propName) {
                this.prop(key, propName[key])
            }
        } else {
            domAdapter.setProperty(this[0], propName, value)
        }
    }
    return this
};
initRender.prototype.addClass = function(className) {
    return this.toggleClass(className, true)
};
initRender.prototype.removeClass = function(className) {
    return this.toggleClass(className, false)
};
initRender.prototype.hasClass = function(className) {
    if (!this[0] || void 0 === this[0].className) {
        return false
    }
    var classNames = className.split(" ");
    for (var i = 0; i < classNames.length; i++) {
        if (this[0].classList) {
            if (this[0].classList.contains(classNames[i])) {
                return true
            }
        } else {
            var _className = typeUtils.isString(this[0].className) ? this[0].className : domAdapter.getAttribute(this[0], "class");
            if ((_className || "").split(" ").indexOf(classNames[i]) >= 0) {
                return true
            }
        }
    }
    return false
};
initRender.prototype.toggleClass = function(className, value) {
    if (this.length > 1) {
        return repeatMethod.call(this, "toggleClass", arguments)
    }
    if (!this[0] || !className) {
        return this
    }
    value = void 0 === value ? !this.hasClass(className) : value;
    var classNames = className.split(" ");
    for (var i = 0; i < classNames.length; i++) {
        domAdapter.setClass(this[0], classNames[i], value)
    }
    return this
};
["width", "height", "outerWidth", "outerHeight", "innerWidth", "innerHeight"].forEach(function(methodName) {
    var partialName = methodName.toLowerCase().indexOf("width") >= 0 ? "Width" : "Height";
    var propName = partialName.toLowerCase();
    var isOuter = 0 === methodName.indexOf("outer");
    var isInner = 0 === methodName.indexOf("inner");
    initRender.prototype[methodName] = function(value) {
        if (this.length > 1 && arguments.length > 0) {
            return repeatMethod.call(this, methodName, arguments)
        }
        var element = this[0];
        if (!element) {
            return
        }
        if (typeUtils.isWindow(element)) {
            return isOuter ? element["inner" + partialName] : domAdapter.getDocumentElement()["client" + partialName]
        }
        if (domAdapter.isDocument(element)) {
            var documentElement = domAdapter.getDocumentElement();
            var body = domAdapter.getBody();
            return Math.max(body["scroll" + partialName], body["offset" + partialName], documentElement["scroll" + partialName], documentElement["offset" + partialName], documentElement["client" + partialName])
        }
        if (0 === arguments.length || "boolean" === typeof value) {
            var include = {
                paddings: isInner || isOuter,
                borders: isOuter,
                margins: value
            };
            return sizeUtils.getSize(element, propName, include)
        }
        if (void 0 === value || null === value) {
            return this
        }
        if (typeUtils.isNumeric(value)) {
            var elementStyles = window.getComputedStyle(element);
            var sizeAdjustment = sizeUtils.getElementBoxParams(propName, elementStyles);
            var isBorderBox = "border-box" === elementStyles.boxSizing;
            value = Number(value);
            if (isOuter) {
                value -= isBorderBox ? 0 : sizeAdjustment.border + sizeAdjustment.padding
            } else {
                if (isInner) {
                    value += isBorderBox ? sizeAdjustment.border : -sizeAdjustment.padding
                } else {
                    if (isBorderBox) {
                        value += sizeAdjustment.border + sizeAdjustment.padding
                    }
                }
            }
        }
        value += typeUtils.isNumeric(value) ? "px" : "";
        domAdapter.setStyle(element, propName, value);
        return this
    }
});
initRender.prototype.html = function(value) {
    if (!arguments.length) {
        return this[0].innerHTML
    }
    this.empty();
    if ("string" === typeof value && !htmlParser.isTablePart(value) || "number" === typeof value) {
        this[0].innerHTML = value;
        return this
    }
    return this.append(htmlParser.parseHTML(value))
};
var appendElements = function(element, nextSibling) {
    if (!this[0] || !element) {
        return
    }
    if ("string" === typeof element) {
        element = htmlParser.parseHTML(element)
    } else {
        if (element.nodeType) {
            element = [element]
        } else {
            if (typeUtils.isNumeric(element)) {
                element = [domAdapter.createTextNode(element)]
            }
        }
    }
    for (var i = 0; i < element.length; i++) {
        var item = element[i];
        var container = this[0];
        var wrapTR = "TABLE" === container.tagName && "TR" === item.tagName;
        if (wrapTR && container.tBodies && container.tBodies.length) {
            container = container.tBodies[0]
        }
        domAdapter.insertElement(container, item.nodeType ? item : item[0], nextSibling)
    }
};
var setCss = function(name, value) {
    if (!this[0] || !this[0].style) {
        return
    }
    if (null === value || "number" === typeof value && isNaN(value)) {
        return
    }
    name = styleUtils.styleProp(name);
    for (var i = 0; i < this.length; i++) {
        this[i].style[name] = styleUtils.normalizeStyleProp(name, value)
    }
};
initRender.prototype.css = function(name, value) {
    if (typeUtils.isString(name)) {
        if (2 === arguments.length) {
            setCss.call(this, name, value)
        } else {
            if (!this[0]) {
                return
            }
            name = styleUtils.styleProp(name);
            var result = window.getComputedStyle(this[0])[name] || this[0].style[name];
            return typeUtils.isNumeric(result) ? result.toString() : result
        }
    } else {
        if (typeUtils.isPlainObject(name)) {
            for (var key in name) {
                setCss.call(this, key, name[key])
            }
        }
    }
    return this
};
initRender.prototype.prepend = function(element) {
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            this.prepend(arguments[i])
        }
        return this
    }
    appendElements.apply(this, [element, this[0].firstChild]);
    return this
};
initRender.prototype.append = function(element) {
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            this.append(arguments[i])
        }
        return this
    }
    appendElements.apply(this, [element]);
    return this
};
initRender.prototype.prependTo = function(element) {
    if (this.length > 1) {
        for (var i = this.length - 1; i >= 0; i--) {
            renderer(this[i]).prependTo(element)
        }
        return this
    }
    element = renderer(element);
    if (element[0]) {
        domAdapter.insertElement(element[0], this[0], element[0].firstChild)
    }
    return this
};
initRender.prototype.appendTo = function(element) {
    if (this.length > 1) {
        return repeatMethod.call(this, "appendTo", arguments)
    }
    domAdapter.insertElement(renderer(element)[0], this[0]);
    return this
};
initRender.prototype.insertBefore = function(element) {
    if (element && element[0]) {
        domAdapter.insertElement(element[0].parentNode, this[0], element[0])
    }
    return this
};
initRender.prototype.insertAfter = function(element) {
    if (element && element[0]) {
        domAdapter.insertElement(element[0].parentNode, this[0], element[0].nextSibling)
    }
    return this
};
initRender.prototype.before = function(element) {
    if (this[0]) {
        domAdapter.insertElement(this[0].parentNode, element[0], this[0])
    }
    return this
};
initRender.prototype.after = function(element) {
    if (this[0]) {
        domAdapter.insertElement(this[0].parentNode, element[0], this[0].nextSibling)
    }
    return this
};
initRender.prototype.wrap = function(wrapper) {
    if (this[0]) {
        var wrap = renderer(wrapper);
        wrap.insertBefore(this);
        wrap.append(this)
    }
    return this
};
initRender.prototype.wrapInner = function(wrapper) {
    var contents = this.contents();
    if (contents.length) {
        contents.wrap(wrapper)
    } else {
        this.append(wrapper)
    }
    return this
};
initRender.prototype.replaceWith = function(element) {
    if (!(element && element[0])) {
        return
    }
    if (element.is(this)) {
        return this
    }
    element.insertBefore(this);
    this.remove();
    return element
};
initRender.prototype.remove = function() {
    if (this.length > 1) {
        return repeatMethod.call(this, "remove", arguments)
    }
    dataUtils.cleanDataRecursive(this[0], true);
    domAdapter.removeElement(this[0]);
    return this
};
initRender.prototype.detach = function() {
    if (this.length > 1) {
        return repeatMethod.call(this, "detach", arguments)
    }
    domAdapter.removeElement(this[0]);
    return this
};
initRender.prototype.empty = function() {
    if (this.length > 1) {
        return repeatMethod.call(this, "empty", arguments)
    }
    dataUtils.cleanDataRecursive(this[0]);
    domAdapter.setText(this[0], "");
    return this
};
initRender.prototype.clone = function() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(this[i].cloneNode(true))
    }
    return renderer(result)
};
initRender.prototype.text = function(value) {
    if (!arguments.length) {
        var result = "";
        for (var i = 0; i < this.length; i++) {
            result += this[i] && this[i].textContent || ""
        }
        return result
    }
    var text = typeUtils.isFunction(value) ? value() : value;
    dataUtils.cleanDataRecursive(this[0], false);
    domAdapter.setText(this[0], typeUtils.isDefined(text) ? text : "");
    return this
};
initRender.prototype.val = function(value) {
    if (1 === arguments.length) {
        return this.prop("value", typeUtils.isDefined(value) ? value : "")
    }
    return this.prop("value")
};
initRender.prototype.contents = function() {
    if (!this[0]) {
        return renderer()
    }
    var result = [];
    result.push.apply(result, this[0].childNodes);
    return renderer(result)
};
initRender.prototype.find = function(selector) {
    var result = renderer();
    if (!selector) {
        return result
    }
    var nodes = [];
    var i;
    if ("string" === typeof selector) {
        selector = selector.trim();
        for (i = 0; i < this.length; i++) {
            var element = this[i];
            if (domAdapter.isElementNode(element)) {
                var elementId = element.getAttribute("id");
                var queryId = elementId || "dx-query-children";
                if (!elementId) {
                    setAttributeValue(element, "id", queryId)
                }
                queryId = "[id='" + queryId + "'] ";
                var querySelector = queryId + selector.replace(/([^\\])(,)/g, "$1, " + queryId);
                nodes.push.apply(nodes, domAdapter.querySelectorAll(element, querySelector));
                setAttributeValue(element, "id", elementId)
            } else {
                if (domAdapter.isDocument(element)) {
                    nodes.push.apply(nodes, domAdapter.querySelectorAll(element, selector))
                }
            }
        }
    } else {
        for (i = 0; i < this.length; i++) {
            selector = domAdapter.isNode(selector) ? selector : selector[0];
            if (this[i] !== selector && this[i].contains(selector)) {
                nodes.push(selector)
            }
        }
    }
    return result.add(nodes)
};
var isVisible = function(_, element) {
    if (!element.nodeType) {
        return true
    }
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
};
initRender.prototype.filter = function(selector) {
    if (!selector) {
        return renderer()
    }
    if (":visible" === selector) {
        return this.filter(isVisible)
    } else {
        if (":hidden" === selector) {
            return this.filter(function(_, element) {
                return !isVisible(_, element)
            })
        }
    }
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (domAdapter.isElementNode(item) && "string" === typeUtils.type(selector)) {
            domAdapter.elementMatches(item, selector) && result.push(item)
        } else {
            if (domAdapter.isNode(selector) || typeUtils.isWindow(selector)) {
                selector === item && result.push(item)
            } else {
                if (typeUtils.isFunction(selector)) {
                    selector.call(item, i, item) && result.push(item)
                } else {
                    for (var j = 0; j < selector.length; j++) {
                        selector[j] === item && result.push(item)
                    }
                }
            }
        }
    }
    return renderer(result)
};
initRender.prototype.not = function(selector) {
    var result = [];
    var nodes = this.filter(selector).toArray();
    for (var i = 0; i < this.length; i++) {
        if (nodes.indexOf(this[i]) === -1) {
            result.push(this[i])
        }
    }
    return renderer(result)
};
initRender.prototype.is = function(selector) {
    return !!this.filter(selector).length
};
initRender.prototype.children = function(selector) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var nodes = this[i] ? this[i].childNodes : [];
        for (var j = 0; j < nodes.length; j++) {
            if (domAdapter.isElementNode(nodes[j])) {
                result.push(nodes[j])
            }
        }
    }
    result = renderer(result);
    return selector ? result.filter(selector) : result
};
initRender.prototype.siblings = function() {
    var element = this[0];
    if (!element || !element.parentNode) {
        return renderer()
    }
    var result = [];
    var parentChildNodes = element.parentNode.childNodes || [];
    for (var i = 0; i < parentChildNodes.length; i++) {
        var node = parentChildNodes[i];
        if (domAdapter.isElementNode(node) && node !== element) {
            result.push(node)
        }
    }
    return renderer(result)
};
initRender.prototype.each = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (false === callback.call(this[i], i, this[i])) {
            break
        }
    }
};
initRender.prototype.index = function(element) {
    if (!element) {
        return this.parent().children().index(this)
    }
    element = renderer(element);
    return this.toArray().indexOf(element[0])
};
initRender.prototype.get = function(index) {
    return this[index < 0 ? this.length + index : index]
};
initRender.prototype.eq = function(index) {
    index = index < 0 ? this.length + index : index;
    return renderer(this[index])
};
initRender.prototype.first = function() {
    return this.eq(0)
};
initRender.prototype.last = function() {
    return this.eq(-1)
};
initRender.prototype.parent = function(selector) {
    if (!this[0]) {
        return renderer()
    }
    var result = renderer(this[0].parentNode);
    return !selector || result.is(selector) ? result : renderer()
};
initRender.prototype.parents = function(selector) {
    var result = [];
    var parent = this.parent();
    while (parent && parent[0] && !domAdapter.isDocument(parent[0])) {
        if (domAdapter.isElementNode(parent[0])) {
            if (!selector || selector && parent.is(selector)) {
                result.push(parent.get(0))
            }
        }
        parent = parent.parent()
    }
    return renderer(result)
};
initRender.prototype.closest = function(selector) {
    if (this.is(selector)) {
        return this
    }
    var parent = this.parent();
    while (parent && parent.length) {
        if (parent.is(selector)) {
            return parent
        }
        parent = parent.parent()
    }
    return renderer()
};
initRender.prototype.next = function(selector) {
    if (!this[0]) {
        return renderer()
    }
    var next = renderer(this[0].nextSibling);
    if (!arguments.length) {
        return next
    }
    while (next && next.length) {
        if (next.is(selector)) {
            return next
        }
        next = next.next()
    }
    return renderer()
};
initRender.prototype.prev = function() {
    if (!this[0]) {
        return renderer()
    }
    return renderer(this[0].previousSibling)
};
initRender.prototype.add = function(selector) {
    var targets = renderer(selector);
    var result = this.toArray();
    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        if (result.indexOf(target) === -1) {
            result.push(target)
        }
    }
    return renderer(result)
};
var emptyArray = [];
initRender.prototype.splice = function() {
    return renderer(emptyArray.splice.apply(this, arguments))
};
initRender.prototype.slice = function() {
    return renderer(emptyArray.slice.apply(this, arguments))
};
initRender.prototype.toArray = function() {
    return emptyArray.slice.call(this)
};
var getWindowByElement = function(element) {
    return typeUtils.isWindow(element) ? element : element.defaultView
};
initRender.prototype.offset = function() {
    if (!this[0]) {
        return
    }
    if (!this[0].getClientRects().length) {
        return {
            top: 0,
            left: 0
        }
    }
    var rect = this[0].getBoundingClientRect();
    var win = getWindowByElement(this[0].ownerDocument);
    var docElem = this[0].ownerDocument.documentElement;
    return {
        top: rect.top + win.pageYOffset - docElem.clientTop,
        left: rect.left + win.pageXOffset - docElem.clientLeft
    }
};
initRender.prototype.offsetParent = function() {
    if (!this[0]) {
        return renderer()
    }
    var offsetParent = renderer(this[0].offsetParent);
    while (offsetParent[0] && "static" === offsetParent.css("position")) {
        offsetParent = renderer(offsetParent[0].offsetParent)
    }
    offsetParent = offsetParent[0] ? offsetParent : renderer(domAdapter.getDocumentElement());
    return offsetParent
};
initRender.prototype.position = function() {
    if (!this[0]) {
        return
    }
    var offset;
    var marginTop = parseFloat(this.css("marginTop"));
    var marginLeft = parseFloat(this.css("marginLeft"));
    if ("fixed" === this.css("position")) {
        offset = this[0].getBoundingClientRect();
        return {
            top: offset.top - marginTop,
            left: offset.left - marginLeft
        }
    }
    offset = this.offset();
    var offsetParent = this.offsetParent();
    var parentOffset = {
        top: 0,
        left: 0
    };
    if ("HTML" !== offsetParent[0].nodeName) {
        parentOffset = offsetParent.offset()
    }
    parentOffset = {
        top: parentOffset.top + parseFloat(offsetParent.css("borderTopWidth")),
        left: parentOffset.left + parseFloat(offsetParent.css("borderLeftWidth"))
    };
    return {
        top: offset.top - parentOffset.top - marginTop,
        left: offset.left - parentOffset.left - marginLeft
    }
};
[{
    name: "scrollLeft",
    offsetProp: "pageXOffset",
    scrollWindow: function(win, value) {
        win.scrollTo(value, win.pageYOffset)
    }
}, {
    name: "scrollTop",
    offsetProp: "pageYOffset",
    scrollWindow: function(win, value) {
        win.scrollTo(win.pageXOffset, value)
    }
}].forEach(function(directionStrategy) {
    var propName = directionStrategy.name;
    initRender.prototype[propName] = function(value) {
        if (!this[0]) {
            return
        }
        var window = getWindowByElement(this[0]);
        if (void 0 === value) {
            return window ? window[directionStrategy.offsetProp] : this[0][propName]
        }
        if (window) {
            directionStrategy.scrollWindow(window, value)
        } else {
            this[0][propName] = value
        }
        return this
    }
});
initRender.prototype.data = function(key, value) {
    if (!this[0]) {
        return
    }
    if (arguments.length < 2) {
        return dataUtils.data.call(renderer, this[0], key)
    }
    dataUtils.data.call(renderer, this[0], key, value);
    return this
};
initRender.prototype.removeData = function(key) {
    this[0] && dataUtils.removeData(this[0], key);
    return this
};
var rendererWrapper = function() {
    return renderer.apply(this, arguments)
};
Object.defineProperty(rendererWrapper, "fn", {
    enumerable: true,
    configurable: true,
    get: function() {
        return renderer.fn
    },
    set: function(value) {
        renderer.fn = value
    }
});
module.exports = {
    set: function(strategy) {
        renderer = strategy
    },
    get: function() {
        return rendererWrapper
    }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/version.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = "20.1.6";


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/guid.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var Class = __webpack_require__(11);
var Guid = Class.inherit({
    ctor: function(value) {
        if (value) {
            value = String(value)
        }
        this._value = this._normalize(value || this._generate())
    },
    _normalize: function(value) {
        value = value.replace(/[^a-f0-9]/gi, "").toLowerCase();
        while (value.length < 32) {
            value += "0"
        }
        return [value.substr(0, 8), value.substr(8, 4), value.substr(12, 4), value.substr(16, 4), value.substr(20, 12)].join("-")
    },
    _generate: function() {
        var value = "";
        for (var i = 0; i < 32; i++) {
            value += Math.round(15 * Math.random()).toString(16)
        }
        return value
    },
    toString: function() {
        return this._value
    },
    valueOf: function() {
        return this._value
    },
    toJSON: function() {
        return this._value
    }
});
module.exports = Guid;
module.exports.default = module.exports;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/hook_touch_props.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var touchPropsToHook = ["pageX", "pageY", "screenX", "screenY", "clientX", "clientY"];
var touchPropHook = function(name, event) {
    if (event[name] && !event.touches || !event.touches) {
        return event[name]
    }
    var touches = event.touches.length ? event.touches : event.changedTouches;
    if (!touches.length) {
        return
    }
    return touches[0][name]
};
module.exports = function(callback) {
    touchPropsToHook.forEach(function(name) {
        callback(name, function(event) {
            return touchPropHook(name, event)
        })
    }, this)
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/size.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var window = __webpack_require__(7).getWindow();
var typeUtils = __webpack_require__(1);
var SPECIAL_HEIGHT_VALUES = ["auto", "none", "inherit", "initial"];
var getSizeByStyles = function(elementStyles, styles) {
    var result = 0;
    styles.forEach(function(style) {
        result += parseFloat(elementStyles[style]) || 0
    });
    return result
};
var getElementBoxParams = function(name, elementStyles) {
    var beforeName = "width" === name ? "Left" : "Top";
    var afterName = "width" === name ? "Right" : "Bottom";
    return {
        padding: getSizeByStyles(elementStyles, ["padding" + beforeName, "padding" + afterName]),
        border: getSizeByStyles(elementStyles, ["border" + beforeName + "Width", "border" + afterName + "Width"]),
        margin: getSizeByStyles(elementStyles, ["margin" + beforeName, "margin" + afterName])
    }
};
var getBoxSizingOffset = function(name, elementStyles, boxParams) {
    var size = elementStyles[name];
    if ("border-box" === elementStyles.boxSizing && size.length && "%" !== size[size.length - 1]) {
        return boxParams.border + boxParams.padding
    }
    return 0
};
var getSize = function(element, name, include) {
    var elementStyles = window.getComputedStyle(element);
    var boxParams = getElementBoxParams(name, elementStyles);
    var clientRect = element.getClientRects().length;
    var boundingClientRect = element.getBoundingClientRect()[name];
    var result = clientRect ? boundingClientRect : 0;
    if (result <= 0) {
        result = parseFloat(elementStyles[name] || element.style[name]) || 0;
        result -= getBoxSizingOffset(name, elementStyles, boxParams)
    } else {
        result -= boxParams.padding + boxParams.border
    }
    if (include.paddings) {
        result += boxParams.padding
    }
    if (include.borders) {
        result += boxParams.border
    }
    if (include.margins) {
        result += boxParams.margin
    }
    return result
};
var getContainerHeight = function(container) {
    return typeUtils.isWindow(container) ? container.innerHeight : container.offsetHeight
};
var parseHeight = function(value, container) {
    if (value.indexOf("px") > 0) {
        value = parseInt(value.replace("px", ""))
    } else {
        if (value.indexOf("%") > 0) {
            value = parseInt(value.replace("%", "")) * getContainerHeight(container) / 100
        } else {
            if (!isNaN(value)) {
                value = parseInt(value)
            }
        }
    }
    return value
};
var getHeightWithOffset = function(value, offset, container) {
    if (!value) {
        return null
    }
    if (SPECIAL_HEIGHT_VALUES.indexOf(value) > -1) {
        return offset ? null : value
    }
    if (typeUtils.isString(value)) {
        value = parseHeight(value, container)
    }
    if (typeUtils.isNumeric(value)) {
        return Math.max(0, value + offset)
    }
    var operationString = offset < 0 ? " - " : " ";
    return "calc(" + value + operationString + Math.abs(offset) + "px)"
};
var addOffsetToMaxHeight = function(value, offset, container) {
    var maxHeight = getHeightWithOffset(value, offset, container);
    return null !== maxHeight ? maxHeight : "none"
};
var addOffsetToMinHeight = function(value, offset, container) {
    var minHeight = getHeightWithOffset(value, offset, container);
    return null !== minHeight ? minHeight : 0
};
var getVerticalOffsets = function(element, withMargins) {
    if (!element) {
        return 0
    }
    var boxParams = getElementBoxParams("height", window.getComputedStyle(element));
    return boxParams.padding + boxParams.border + (withMargins ? boxParams.margin : 0)
};
var getVisibleHeight = function(element) {
    if (element) {
        var boundingClientRect = element.getBoundingClientRect();
        if (boundingClientRect.height) {
            return boundingClientRect.height
        }
    }
    return 0
};
exports.getSize = getSize;
exports.getElementBoxParams = getElementBoxParams;
exports.addOffsetToMaxHeight = addOffsetToMaxHeight;
exports.addOffsetToMinHeight = addOffsetToMinHeight;
exports.getVerticalOffsets = getVerticalOffsets;
exports.getVisibleHeight = getVisibleHeight;
exports.parseHeight = parseHeight;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/storage.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var window = __webpack_require__(7).getWindow();
var getSessionStorage = function() {
    var sessionStorage;
    try {
        sessionStorage = window.sessionStorage
    } catch (e) {}
    return sessionStorage
};
exports.sessionStorage = getSessionStorage;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/widget/utils.ink_ripple.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var INKRIPPLE_CLASS = "dx-inkripple";
var INKRIPPLE_WAVE_CLASS = "dx-inkripple-wave";
var INKRIPPLE_SHOWING_CLASS = "dx-inkripple-showing";
var INKRIPPLE_HIDING_CLASS = "dx-inkripple-hiding";
var DEFAULT_WAVE_SIZE_COEFFICIENT = 2;
var MAX_WAVE_SIZE = 4e3;
var ANIMATION_DURATION = 300;
var HOLD_ANIMATION_DURATION = 1e3;
var DEFAULT_WAVE_INDEX = 0;
var render = function(args) {
    args = args || {};
    if (void 0 === args.useHoldAnimation) {
        args.useHoldAnimation = true
    }
    var config = {
        waveSizeCoefficient: args.waveSizeCoefficient || DEFAULT_WAVE_SIZE_COEFFICIENT,
        isCentered: args.isCentered || false,
        wavesNumber: args.wavesNumber || 1,
        durations: getDurations(args.useHoldAnimation)
    };
    return {
        showWave: showWave.bind(this, config),
        hideWave: hideWave.bind(this, config)
    }
};
var getInkRipple = function(element) {
    var result = element.children("." + INKRIPPLE_CLASS);
    if (0 === result.length) {
        result = $("<div>").addClass(INKRIPPLE_CLASS).appendTo(element)
    }
    return result
};
var getWaves = function(element, wavesNumber) {
    var inkRipple = getInkRipple(element);
    var result = inkRipple.children("." + INKRIPPLE_WAVE_CLASS).toArray();
    for (var i = result.length; i < wavesNumber; i++) {
        var $currentWave = $("<div>").appendTo(inkRipple).addClass(INKRIPPLE_WAVE_CLASS);
        result.push($currentWave[0])
    }
    return $(result)
};
var getWaveStyleConfig = function(args, config) {
    var element = config.element;
    var elementWidth = element.outerWidth();
    var elementHeight = element.outerHeight();
    var elementDiagonal = parseInt(Math.sqrt(elementWidth * elementWidth + elementHeight * elementHeight));
    var waveSize = Math.min(MAX_WAVE_SIZE, parseInt(elementDiagonal * args.waveSizeCoefficient));
    var left;
    var top;
    if (args.isCentered) {
        left = (elementWidth - waveSize) / 2;
        top = (elementHeight - waveSize) / 2
    } else {
        var event = config.event;
        var position = config.element.offset();
        var x = event.pageX - position.left;
        var y = event.pageY - position.top;
        left = x - waveSize / 2;
        top = y - waveSize / 2
    }
    return {
        left: left,
        top: top,
        height: waveSize,
        width: waveSize
    }
};

function showWave(args, config) {
    var $wave = getWaves(config.element, args.wavesNumber).eq(config.wave || DEFAULT_WAVE_INDEX);
    args.hidingTimeout && clearTimeout(args.hidingTimeout);
    hideSelectedWave($wave);
    $wave.css(getWaveStyleConfig(args, config));
    args.showingTimeout = setTimeout(showingWaveHandler.bind(this, args, $wave), 0)
}

function showingWaveHandler(args, $wave) {
    var durationCss = args.durations.showingScale + "ms";
    $wave.addClass(INKRIPPLE_SHOWING_CLASS).css("transitionDuration", durationCss)
}

function getDurations(useHoldAnimation) {
    return {
        showingScale: useHoldAnimation ? HOLD_ANIMATION_DURATION : ANIMATION_DURATION,
        hidingScale: ANIMATION_DURATION,
        hidingOpacity: ANIMATION_DURATION
    }
}

function hideSelectedWave($wave) {
    $wave.removeClass(INKRIPPLE_HIDING_CLASS).css("transitionDuration", "")
}

function hideWave(args, config) {
    args.showingTimeout && clearTimeout(args.showingTimeout);
    var $wave = getWaves(config.element, config.wavesNumber).eq(config.wave || DEFAULT_WAVE_INDEX);
    var durations = args.durations;
    var durationCss = durations.hidingScale + "ms, " + durations.hidingOpacity + "ms";
    $wave.addClass(INKRIPPLE_HIDING_CLASS).removeClass(INKRIPPLE_SHOWING_CLASS).css("transitionDuration", durationCss);
    var animationDuration = Math.max(durations.hidingScale, durations.hidingOpacity);
    args.hidingTimeout = setTimeout(hideSelectedWave.bind(this, $wave), animationDuration)
}
module.exports = {
    render: render
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/component_registrator.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _component_registrator_callbacks = __webpack_require__(70);
var _component_registrator_callbacks2 = _interopRequireDefault(_component_registrator_callbacks);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _public_component = __webpack_require__(35);
var _public_component2 = _interopRequireDefault(_public_component);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var registerComponent = function(name, namespace, componentClass) {
    if (!componentClass) {
        componentClass = namespace
    } else {
        namespace[name] = componentClass
    }
    _public_component2.default.name(componentClass, name);
    _component_registrator_callbacks2.default.fire(name, componentClass)
};
var registerRendererComponent = function(name, componentClass) {
    _renderer2.default.fn[name] = function(options) {
        var isMemberInvoke = "string" === typeof options;
        var result;
        if (isMemberInvoke) {
            var memberName = options;
            var memberArgs = [].slice.call(arguments).slice(1);
            this.each(function() {
                var instance = componentClass.getInstance(this);
                if (!instance) {
                    throw _errors2.default.Error("E0009", name)
                }
                var member = instance[memberName];
                var memberValue = member.apply(instance, memberArgs);
                if (void 0 === result) {
                    result = memberValue
                }
            })
        } else {
            this.each(function() {
                var instance = componentClass.getInstance(this);
                if (instance) {
                    instance.option(options)
                } else {
                    new componentClass(this, options)
                }
            });
            result = this
        }
        return result
    }
};
_component_registrator_callbacks2.default.add(registerRendererComponent);
module.exports = registerComponent;
module.exports.default = module.exports;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/component_registrator_callbacks.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _memorized_callbacks = __webpack_require__(31);
var _memorized_callbacks2 = _interopRequireDefault(_memorized_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
exports.default = new _memorized_callbacks2.default;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/remove_event.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var beforeCleanData = __webpack_require__(20).beforeCleanData;
var eventsEngine = __webpack_require__(10);
var registerEvent = __webpack_require__(24);
var eventName = "dxremove";
var eventPropName = "dxRemoveEvent";
beforeCleanData(function(elements) {
    elements = [].slice.call(elements);
    for (var i = 0; i < elements.length; i++) {
        var $element = $(elements[i]);
        if ($element.prop(eventPropName)) {
            $element[0][eventPropName] = null;
            eventsEngine.triggerHandler($element, eventName)
        }
    }
});
registerEvent(eventName, {
    noBubble: true,
    setup: function(element) {
        $(element).prop(eventPropName, true)
    }
});
module.exports = eventName;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/themes.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _dom_adapter = __webpack_require__(5);
var _dom_adapter2 = _interopRequireDefault(_dom_adapter);
var _promise = __webpack_require__(47);
var _promise2 = _interopRequireDefault(_promise);
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _deferred = __webpack_require__(23);
var _html_parser = __webpack_require__(33);
var _iterator = __webpack_require__(4);
var _ready_callbacks = __webpack_require__(22);
var _ready_callbacks2 = _interopRequireDefault(_ready_callbacks);
var _view_port = __webpack_require__(46);
var _window = __webpack_require__(7);
var _themes_callback = __webpack_require__(73);
var _ui = __webpack_require__(74);
var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var window = (0, _window.getWindow)();
var ready = _ready_callbacks2.default.add;
var viewPort = _view_port.value;
var viewPortChanged = _view_port.changeCallback;
var DX_LINK_SELECTOR = "link[rel=dx-theme]";
var THEME_ATTR = "data-theme";
var ACTIVE_ATTR = "data-active";
var DX_HAIRLINES_CLASS = "dx-hairlines";
var ANY_THEME = "any";
var context;
var $activeThemeLink;
var knownThemes;
var currentThemeName;
var pendingThemeName;
var defaultTimeout = 15e3;
var THEME_MARKER_PREFIX = "dx.";
var inited = false;
_themes_callback.themeInitializedCallback.add(function() {
    return inited = true
});

function readThemeMarker() {
    if (!(0, _window.hasWindow)()) {
        return null
    }
    var element = (0, _renderer2.default)("<div>", context).addClass("dx-theme-marker").appendTo(context.documentElement);
    var result;
    try {
        result = element.css("fontFamily");
        if (!result) {
            return null
        }
        result = result.replace(/["']/g, "");
        if (result.substr(0, THEME_MARKER_PREFIX.length) !== THEME_MARKER_PREFIX) {
            return null
        }
        return result.substr(THEME_MARKER_PREFIX.length)
    } finally {
        element.remove()
    }
}

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
            _themes_callback.themeInitializedCallback.empty()
        }
    }
    if (isPendingThemeLoaded() || !defaultTimeout) {
        handleLoaded()
    } else {
        if (!intervalCleared) {
            if (pendingThemeName) {
                pendingThemeName = themeName
            }
            return
        }
        waitStartTime = Date.now();
        intervalCleared = false;
        timerId = setInterval(function() {
            var isLoaded = isPendingThemeLoaded();
            var isTimeout = !isLoaded && Date.now() - waitStartTime > defaultTimeout;
            if (isTimeout) {
                _ui2.default.log("W0004", pendingThemeName)
            }
            if (isLoaded || isTimeout) {
                handleLoaded()
            }
        }, 10)
    }
}

function isPendingThemeLoaded() {
    if (!pendingThemeName) {
        return true
    }
    var anyThemePending = pendingThemeName === ANY_THEME;
    if (inited && anyThemePending) {
        return true
    }
    var themeMarker = readThemeMarker();
    if (themeMarker && anyThemePending) {
        return true
    }
    return themeMarker === pendingThemeName
}

function processMarkup() {
    var $allThemeLinks = (0, _renderer2.default)(DX_LINK_SELECTOR, context);
    if (!$allThemeLinks.length) {
        return
    }
    knownThemes = {};
    $activeThemeLink = (0, _renderer2.default)((0, _html_parser.parseHTML)("<link rel=stylesheet>"), context);
    $allThemeLinks.each(function() {
        var link = (0, _renderer2.default)(this, context);
        var fullThemeName = link.attr(THEME_ATTR);
        var url = link.attr("href");
        var isActive = "true" === link.attr(ACTIVE_ATTR);
        knownThemes[fullThemeName] = {
            url: url,
            isActive: isActive
        }
    });
    $allThemeLinks.last().after($activeThemeLink);
    $allThemeLinks.remove()
}

function resolveFullThemeName(desiredThemeName) {
    var desiredThemeParts = desiredThemeName ? desiredThemeName.split(".") : [];
    var result = null;
    if (knownThemes) {
        if (desiredThemeName in knownThemes) {
            return desiredThemeName
        }(0, _iterator.each)(knownThemes, function(knownThemeName, themeData) {
            var knownThemeParts = knownThemeName.split(".");
            if (desiredThemeParts[0] && knownThemeParts[0] !== desiredThemeParts[0]) {
                return
            }
            if (desiredThemeParts[1] && desiredThemeParts[1] !== knownThemeParts[1]) {
                return
            }
            if (desiredThemeParts[2] && desiredThemeParts[2] !== knownThemeParts[2]) {
                return
            }
            if (!result || themeData.isActive) {
                result = knownThemeName
            }
            if (themeData.isActive) {
                return false
            }
        })
    }
    return result
}

function initContext(newContext) {
    try {
        if (newContext !== context) {
            knownThemes = null
        }
    } catch (x) {
        knownThemes = null
    }
    context = newContext
}

function init(options) {
    options = options || {};
    initContext(options.context || _dom_adapter2.default.getDocument());
    if (!context) {
        return
    }
    processMarkup();
    currentThemeName = void 0;
    current(options)
}

function current(options) {
    if (!arguments.length) {
        currentThemeName = currentThemeName || readThemeMarker();
        return currentThemeName
    }
    detachCssClasses(viewPort());
    options = options || {};
    if ("string" === typeof options) {
        options = {
            theme: options
        }
    }
    var isAutoInit = options._autoInit;
    var loadCallback = options.loadCallback;
    var currentThemeData;
    currentThemeName = resolveFullThemeName(options.theme || currentThemeName);
    if (currentThemeName) {
        currentThemeData = knownThemes[currentThemeName]
    }
    if (loadCallback) {
        _themes_callback.themeReadyCallback.add(loadCallback)
    }
    if (currentThemeData) {
        $activeThemeLink.attr("href", knownThemes[currentThemeName].url);
        if (_themes_callback.themeReadyCallback.has() || options._forceTimeout) {
            waitForThemeLoad(currentThemeName)
        }
    } else {
        if (isAutoInit) {
            waitForThemeLoad(ANY_THEME);
            _themes_callback.themeReadyCallback.fire();
            _themes_callback.themeReadyCallback.empty()
        } else {
            throw _ui2.default.Error("E0021", currentThemeName)
        }
    }
    checkThemeDeprecation();
    attachCssClasses((0, _view_port.originalViewPort)(), currentThemeName)
}

function getCssClasses(themeName) {
    themeName = themeName || current();
    var result = [];
    var themeNameParts = themeName && themeName.split(".");
    if (themeNameParts) {
        result.push("dx-theme-" + themeNameParts[0], "dx-theme-" + themeNameParts[0] + "-typography");
        if (themeNameParts.length > 1) {
            result.push("dx-color-scheme-" + themeNameParts[1] + (isMaterial(themeName) ? "-" + themeNameParts[2] : ""))
        }
    }
    return result
}
var themeClasses;

function attachCssClasses(element, themeName) {
    themeClasses = getCssClasses(themeName).join(" ");
    (0, _renderer2.default)(element).addClass(themeClasses);
    var activateHairlines = function() {
        var pixelRatio = (0, _window.hasWindow)() && window.devicePixelRatio;
        if (!pixelRatio || pixelRatio < 2) {
            return
        }
        var $tester = (0, _renderer2.default)("<div>");
        $tester.css("border", ".5px solid transparent");
        (0, _renderer2.default)("body").append($tester);
        if (1 === $tester.outerHeight()) {
            (0, _renderer2.default)(element).addClass(DX_HAIRLINES_CLASS);
            themeClasses += " " + DX_HAIRLINES_CLASS
        }
        $tester.remove()
    };
    activateHairlines()
}

function detachCssClasses(element) {
    (0, _renderer2.default)(element).removeClass(themeClasses)
}

function themeReady(callback) {
    _themes_callback.themeReadyCallback.add(callback)
}

function isTheme(themeRegExp, themeName) {
    if (!themeName) {
        themeName = currentThemeName || readThemeMarker()
    }
    return new RegExp(themeRegExp).test(themeName)
}

function isMaterial(themeName) {
    return isTheme("material", themeName)
}

function isIos7(themeName) {
    return isTheme("ios7", themeName)
}

function isGeneric(themeName) {
    return isTheme("generic", themeName)
}

function isDark(themeName) {
    return isTheme("dark", themeName)
}

function checkThemeDeprecation() {
    if (isIos7()) {
        _ui2.default.log("W0010", "The 'ios7' theme", "19.1", "Use the 'generic' theme instead.")
    }
}

function isWebFontLoaded(text, fontWeight) {
    var testedFont = "Roboto, RobotoFallback, Arial";
    var etalonFont = "Arial";
    var document = _dom_adapter2.default.getDocument();
    var testElement = document.createElement("span");
    testElement.style.position = "absolute";
    testElement.style.top = "-9999px";
    testElement.style.left = "-9999px";
    testElement.style.visibility = "hidden";
    testElement.style.fontFamily = etalonFont;
    testElement.style.fontSize = "250px";
    testElement.style.fontWeight = fontWeight;
    testElement.innerHTML = text;
    document.body.appendChild(testElement);
    var etalonFontWidth = testElement.offsetWidth;
    testElement.style.fontFamily = testedFont;
    var testedFontWidth = testElement.offsetWidth;
    testElement.parentNode.removeChild(testElement);
    return etalonFontWidth !== testedFontWidth
}

function waitWebFont(text, fontWeight) {
    var interval = 15;
    var timeout = 2e3;
    return new _promise2.default(function(resolve) {
        var check = function() {
            if (isWebFontLoaded(text, fontWeight)) {
                clear()
            }
        };
        var clear = function() {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            resolve()
        };
        var intervalId = setInterval(check, interval);
        var timeoutId = setTimeout(clear, timeout)
    })
}
var initDeferred = new _deferred.Deferred;

function autoInit() {
    init({
        _autoInit: true,
        _forceTimeout: true
    });
    if ((0, _renderer2.default)(DX_LINK_SELECTOR, context).length) {
        throw _ui2.default.Error("E0022")
    }
    initDeferred.resolve()
}
if ((0, _window.hasWindow)()) {
    autoInit()
} else {
    ready(autoInit)
}
viewPortChanged.add(function(viewPort, prevViewPort) {
    initDeferred.done(function() {
        detachCssClasses(prevViewPort);
        attachCssClasses(viewPort)
    })
});
_devices2.default.changed.add(function() {
    init({
        _autoInit: true
    })
});
exports.init = init;
exports.waitForThemeLoad = waitForThemeLoad;
exports.current = current;
exports.attachCssClasses = attachCssClasses;
exports.detachCssClasses = detachCssClasses;
exports.isMaterial = isMaterial;
exports.isIos7 = isIos7;
exports.isGeneric = isGeneric;
exports.isDark = isDark;
exports.checkThemeDeprecation = checkThemeDeprecation;
exports.isWebFontLoaded = isWebFontLoaded;
exports.waitWebFont = waitWebFont;
exports.ready = themeReady;
exports.resetTheme = function() {
    $activeThemeLink && $activeThemeLink.attr("href", "about:blank");
    currentThemeName = null;
    pendingThemeName = null;
    inited = false;
    _themes_callback.themeInitializedCallback.add(function() {
        return inited = true
    })
}, exports.setDefaultTimeout = function(timeout) {
    defaultTimeout = timeout
};
exports.initialized = function(callback) {
    if (inited) {
        callback()
    } else {
        _themes_callback.themeInitializedCallback.add(callback)
    }
};
module.exports.default = module.exports;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/themes_callback.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.themeInitializedCallback = exports.themeReadyCallback = void 0;
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var themeReadyCallback = exports.themeReadyCallback = new _callbacks2.default;
var themeInitializedCallback = exports.themeInitializedCallback = new _callbacks2.default;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/widget/ui.errors.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var errorUtils = __webpack_require__(41);
var errors = __webpack_require__(6);
module.exports = errorUtils(errors.ERROR_MESSAGES, {
    E1001: "Module '{0}'. Controller '{1}' is already registered",
    E1002: "Module '{0}'. Controller '{1}' does not inherit from DevExpress.ui.dxDataGrid.Controller",
    E1003: "Module '{0}'. View '{1}' is already registered",
    E1004: "Module '{0}'. View '{1}' does not inherit from DevExpress.ui.dxDataGrid.View",
    E1005: "Public method '{0}' is already registered",
    E1006: "Public method '{0}.{1}' does not exist",
    E1007: "State storing cannot be provided due to the restrictions of the browser",
    E1010: "The template does not contain the TextBox widget",
    E1011: 'Items cannot be deleted from the List. Implement the "remove" function in the data store',
    E1012: "Editing type '{0}' with the name '{1}' is unsupported",
    E1016: "Unexpected type of data source is provided for a lookup column",
    E1018: "The 'collapseAll' method cannot be called if you use a remote data source",
    E1019: "Search mode '{0}' is unavailable",
    E1020: "The type cannot be changed after initialization",
    E1021: "{0} '{1}' you are trying to remove does not exist",
    E1022: 'The "markers" option is given an invalid value. Assign an array instead',
    E1023: 'The "routes" option is given an invalid value. Assign an array instead',
    E1025: "This layout is too complex to render",
    E1026: 'The "calculateCustomSummary" function is missing from a field whose "summaryType" option is set to "custom"',
    E1030: "Unknown ScrollView refresh strategy: '{0}'",
    E1031: "Unknown subscription in the Scheduler widget: '{0}'",
    E1032: "Unknown start date in an appointment: '{0}'",
    E1033: "Unknown step in the date navigator: '{0}'",
    E1034: "The browser does not implement an API for saving files",
    E1035: "The editor cannot be created because of an internal error: {0}",
    E1037: "Invalid structure of grouped data",
    E1038: "The browser does not support local storages for local web pages",
    E1039: "A cell's position cannot be calculated",
    E1040: "The '{0}' key value is not unique within the data array",
    E1041: "The '{0}' script is referenced after the DevExtreme scripts or not referenced at all",
    E1042: "{0} requires the key field to be specified",
    E1043: "Changes cannot be processed due to the incorrectly set key",
    E1044: "The key field specified by the keyExpr option does not match the key field specified in the data store",
    E1045: "Editing requires the key field to be specified in the data store",
    E1046: "The '{0}' key field is not found in data objects",
    E1047: 'The "{0}" field is not found in the fields array',
    E1048: 'The "{0}" operation is not found in the filterOperations array',
    E1049: "Column '{0}': filtering is allowed but the 'dataField' or 'name' option is not specified",
    E1050: "The validationRules option does not apply to third-party editors defined in the editCellTemplate",
    E1051: 'HtmlEditor\'s valueType is "{0}", but the {0} converter was not imported.',
    E1052: '{0} should have the "dataSource" option specified',
    E1053: 'The "buttons" option accepts an array that contains only objects or string values',
    E1054: "All text editor buttons must have names",
    E1055: 'One or several text editor buttons have invalid or non-unique "name" values',
    E1056: 'The {0} widget does not support buttons of the "{1}" type',
    E1058: 'The "startDayHour" must be earlier than the "endDayHour"',
    W1001: 'The "key" option cannot be modified after initialization',
    W1002: "An item with the key '{0}' does not exist",
    W1003: "A group with the key '{0}' in which you are trying to select items does not exist",
    W1004: "The item '{0}' you are trying to select in the group '{1}' does not exist",
    W1005: "Due to column data types being unspecified, data has been loaded twice in order to apply initial filter settings. To resolve this issue, specify data types for all grid columns.",
    W1006: "The map service returned the following error: '{0}'",
    W1007: "No item with key {0} was found in the data source, but this key was used as the parent key for item {1}",
    W1008: "Cannot scroll to the '{0}' date because it does not exist on the current view",
    W1009: "Searching works only if data is specified using the dataSource option",
    W1010: "The capability to select all items works with source data of plain structure only",
    W1011: 'The "keyExpr" option is not applied when dataSource is not an array',
    W1012: "The '{0}' key field is not found in data objects",
    W1013: 'The "message" field in the dialog component was renamed to "messageHtml". Change your code correspondingly. In addition, if you used HTML code in the message, make sure that it is secure',
    W1014: "The Floating Action Button exceeds the recommended speed dial action count. If you need to display more speed dial actions, increase the maxSpeedDialActionCount option value in the global config.",
    W1015: 'The "cellDuration" should divide the range from the "startDayHour" to the "endDayHour" into even intervals'
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/validation_engine.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _class = __webpack_require__(11);
var _class2 = _interopRequireDefault(_class);
var _extend = __webpack_require__(2);
var _array = __webpack_require__(14);
var _iterator = __webpack_require__(4);
var _events_strategy = __webpack_require__(34);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _common = __webpack_require__(8);
var _type = __webpack_require__(1);
var _type2 = _interopRequireDefault(_type);
var _number = __webpack_require__(76);
var _number2 = _interopRequireDefault(_number);
var _message = __webpack_require__(84);
var _message2 = _interopRequireDefault(_message);
var _promise = __webpack_require__(47);
var _promise2 = _interopRequireDefault(_promise);
var _deferred = __webpack_require__(23);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var STATUS = {
    valid: "valid",
    invalid: "invalid",
    pending: "pending"
};
var BaseRuleValidator = function() {
    function BaseRuleValidator() {
        _classCallCheck(this, BaseRuleValidator);
        this.NAME = "base"
    }
    _createClass(BaseRuleValidator, [{
        key: "defaultMessage",
        value: function(value) {
            return _message2.default.getFormatter("validation-".concat(this.NAME))(value)
        }
    }, {
        key: "defaultFormattedMessage",
        value: function(value) {
            return _message2.default.getFormatter("validation-".concat(this.NAME, "-formatted"))(value)
        }
    }, {
        key: "_isValueEmpty",
        value: function(value) {
            return !rulesValidators.required.validate(value, {})
        }
    }, {
        key: "validate",
        value: function(value, rule) {
            var _this = this;
            var valueArray = Array.isArray(value) ? value : [value];
            var result = true;
            if (valueArray.length) {
                valueArray.every(function(itemValue) {
                    result = _this._validate(itemValue, rule);
                    return result
                })
            } else {
                result = this._validate(null, rule)
            }
            return result
        }
    }]);
    return BaseRuleValidator
}();
var RequiredRuleValidator = function(_BaseRuleValidator) {
    _inherits(RequiredRuleValidator, _BaseRuleValidator);
    var _super = _createSuper(RequiredRuleValidator);

    function RequiredRuleValidator() {
        var _this2;
        _classCallCheck(this, RequiredRuleValidator);
        _this2 = _super.call(this);
        _this2.NAME = "required";
        return _this2
    }
    _createClass(RequiredRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (!_type2.default.isDefined(value)) {
                return false
            }
            if (false === value) {
                return false
            }
            value = String(value);
            if (rule.trim || !_type2.default.isDefined(rule.trim)) {
                value = value.trim()
            }
            return "" !== value
        }
    }]);
    return RequiredRuleValidator
}(BaseRuleValidator);
var NumericRuleValidator = function(_BaseRuleValidator2) {
    _inherits(NumericRuleValidator, _BaseRuleValidator2);
    var _super2 = _createSuper(NumericRuleValidator);

    function NumericRuleValidator() {
        var _this3;
        _classCallCheck(this, NumericRuleValidator);
        _this3 = _super2.call(this);
        _this3.NAME = "numeric";
        return _this3
    }
    _createClass(NumericRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (false !== rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            if (rule.useCultureSettings && _type2.default.isString(value)) {
                return !isNaN(_number2.default.parse(value))
            } else {
                return _type2.default.isNumeric(value)
            }
        }
    }]);
    return NumericRuleValidator
}(BaseRuleValidator);
var RangeRuleValidator = function(_BaseRuleValidator3) {
    _inherits(RangeRuleValidator, _BaseRuleValidator3);
    var _super3 = _createSuper(RangeRuleValidator);

    function RangeRuleValidator() {
        var _this4;
        _classCallCheck(this, RangeRuleValidator);
        _this4 = _super3.call(this);
        _this4.NAME = "range";
        return _this4
    }
    _createClass(RangeRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (false !== rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            var validNumber = rulesValidators.numeric.validate(value, rule);
            var validValue = _type2.default.isDefined(value) && "" !== value;
            var number = validNumber ? parseFloat(value) : validValue && value.valueOf();
            var min = rule.min;
            var max = rule.max;
            if (!(validNumber || _type2.default.isDate(value)) && !validValue) {
                return false
            }
            if (_type2.default.isDefined(min)) {
                if (_type2.default.isDefined(max)) {
                    return number >= min && number <= max
                }
                return number >= min
            } else {
                if (_type2.default.isDefined(max)) {
                    return number <= max
                } else {
                    throw _errors2.default.Error("E0101")
                }
            }
        }
    }]);
    return RangeRuleValidator
}(BaseRuleValidator);
var StringLengthRuleValidator = function(_BaseRuleValidator4) {
    _inherits(StringLengthRuleValidator, _BaseRuleValidator4);
    var _super4 = _createSuper(StringLengthRuleValidator);

    function StringLengthRuleValidator() {
        var _this5;
        _classCallCheck(this, StringLengthRuleValidator);
        _this5 = _super4.call(this);
        _this5.NAME = "stringLength";
        return _this5
    }
    _createClass(StringLengthRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            value = _type2.default.isDefined(value) ? String(value) : "";
            if (rule.trim || !_type2.default.isDefined(rule.trim)) {
                value = value.trim()
            }
            if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            return rulesValidators.range.validate(value.length, (0, _extend.extend)({}, rule))
        }
    }]);
    return StringLengthRuleValidator
}(BaseRuleValidator);
var CustomRuleValidator = function(_BaseRuleValidator5) {
    _inherits(CustomRuleValidator, _BaseRuleValidator5);
    var _super5 = _createSuper(CustomRuleValidator);

    function CustomRuleValidator() {
        var _this6;
        _classCallCheck(this, CustomRuleValidator);
        _this6 = _super5.call(this);
        _this6.NAME = "custom";
        return _this6
    }
    _createClass(CustomRuleValidator, [{
        key: "validate",
        value: function(value, rule) {
            if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            var validator = rule.validator;
            var dataGetter = validator && _type2.default.isFunction(validator.option) && validator.option("dataGetter");
            var extraParams = _type2.default.isFunction(dataGetter) && dataGetter();
            var params = {
                value: value,
                validator: validator,
                rule: rule
            };
            if (extraParams) {
                (0, _extend.extend)(params, extraParams)
            }
            return rule.validationCallback(params)
        }
    }]);
    return CustomRuleValidator
}(BaseRuleValidator);
var AsyncRuleValidator = function(_CustomRuleValidator) {
    _inherits(AsyncRuleValidator, _CustomRuleValidator);
    var _super6 = _createSuper(AsyncRuleValidator);

    function AsyncRuleValidator() {
        var _this7;
        _classCallCheck(this, AsyncRuleValidator);
        _this7 = _super6.call(this);
        _this7.NAME = "async";
        return _this7
    }
    _createClass(AsyncRuleValidator, [{
        key: "validate",
        value: function(value, rule) {
            if (!_type2.default.isDefined(rule.reevaluate)) {
                (0, _extend.extend)(rule, {
                    reevaluate: true
                })
            }
            if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            var validator = rule.validator;
            var dataGetter = validator && _type2.default.isFunction(validator.option) && validator.option("dataGetter");
            var extraParams = _type2.default.isFunction(dataGetter) && dataGetter();
            var params = {
                value: value,
                validator: validator,
                rule: rule
            };
            if (extraParams) {
                (0, _extend.extend)(params, extraParams)
            }
            var callbackResult = rule.validationCallback(params);
            if (!_type2.default.isPromise(callbackResult)) {
                throw _errors2.default.Error("E0103")
            }
            return this._getWrappedPromise((0, _deferred.fromPromise)(callbackResult).promise())
        }
    }, {
        key: "_getWrappedPromise",
        value: function(promise) {
            var deferred = new _deferred.Deferred;
            promise.then(function(res) {
                deferred.resolve(res)
            }, function(err) {
                var res = {
                    isValid: false
                };
                if (_type2.default.isDefined(err)) {
                    if (_type2.default.isString(err)) {
                        res.message = err
                    } else {
                        if (_type2.default.isObject(err) && _type2.default.isDefined(err.message) && _type2.default.isString(err.message)) {
                            res.message = err.message
                        }
                    }
                }
                deferred.resolve(res)
            });
            return deferred.promise()
        }
    }]);
    return AsyncRuleValidator
}(CustomRuleValidator);
var CompareRuleValidator = function(_BaseRuleValidator6) {
    _inherits(CompareRuleValidator, _BaseRuleValidator6);
    var _super7 = _createSuper(CompareRuleValidator);

    function CompareRuleValidator() {
        var _this8;
        _classCallCheck(this, CompareRuleValidator);
        _this8 = _super7.call(this);
        _this8.NAME = "compare";
        return _this8
    }
    _createClass(CompareRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (!rule.comparisonTarget) {
                throw _errors2.default.Error("E0102")
            }
            if (rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }(0, _extend.extend)(rule, {
                reevaluate: true
            });
            var otherValue = rule.comparisonTarget();
            var type = rule.comparisonType || "==";
            switch (type) {
                case "==":
                    return value == otherValue;
                case "!=":
                    return value != otherValue;
                case "===":
                    return value === otherValue;
                case "!==":
                    return value !== otherValue;
                case ">":
                    return value > otherValue;
                case ">=":
                    return value >= otherValue;
                case "<":
                    return value < otherValue;
                case "<=":
                    return value <= otherValue
            }
        }
    }]);
    return CompareRuleValidator
}(BaseRuleValidator);
var PatternRuleValidator = function(_BaseRuleValidator7) {
    _inherits(PatternRuleValidator, _BaseRuleValidator7);
    var _super8 = _createSuper(PatternRuleValidator);

    function PatternRuleValidator() {
        var _this9;
        _classCallCheck(this, PatternRuleValidator);
        _this9 = _super8.call(this);
        _this9.NAME = "pattern";
        return _this9
    }
    _createClass(PatternRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (false !== rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            var pattern = rule.pattern;
            if (_type2.default.isString(pattern)) {
                pattern = new RegExp(pattern)
            }
            return pattern.test(value)
        }
    }]);
    return PatternRuleValidator
}(BaseRuleValidator);
var EmailRuleValidator = function(_BaseRuleValidator8) {
    _inherits(EmailRuleValidator, _BaseRuleValidator8);
    var _super9 = _createSuper(EmailRuleValidator);

    function EmailRuleValidator() {
        var _this10;
        _classCallCheck(this, EmailRuleValidator);
        _this10 = _super9.call(this);
        _this10.NAME = "email";
        return _this10
    }
    _createClass(EmailRuleValidator, [{
        key: "_validate",
        value: function(value, rule) {
            if (false !== rule.ignoreEmptyValue && this._isValueEmpty(value)) {
                return true
            }
            return rulesValidators.pattern.validate(value, (0, _extend.extend)({}, rule, {
                pattern: /^[\d\w._-]+@([\d\w._-]+\.)+[\w]+$/i
            }))
        }
    }]);
    return EmailRuleValidator
}(BaseRuleValidator);
var rulesValidators = {
    required: new RequiredRuleValidator,
    numeric: new NumericRuleValidator,
    range: new RangeRuleValidator,
    stringLength: new StringLengthRuleValidator,
    custom: new CustomRuleValidator,
    async: new AsyncRuleValidator,
    compare: new CompareRuleValidator,
    pattern: new PatternRuleValidator,
    email: new EmailRuleValidator
};
var GroupConfig = _class2.default.inherit({
    ctor: function(group) {
        this.group = group;
        this.validators = [];
        this._pendingValidators = [];
        this._onValidatorStatusChanged = this._onValidatorStatusChanged.bind(this);
        this._resetValidationInfo();
        this._eventsStrategy = new _events_strategy.EventsStrategy(this)
    },
    validate: function() {
        var _this11 = this;
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
        (0, _iterator.each)(this.validators, function(_, validator) {
            var validatorResult = validator.validate();
            result.isValid = result.isValid && validatorResult.isValid;
            if (validatorResult.brokenRules) {
                result.brokenRules = result.brokenRules.concat(validatorResult.brokenRules)
            }
            result.validators.push(validator);
            if (validatorResult.status === STATUS.pending) {
                _this11._addPendingValidator(validator)
            }
            _this11._subscribeToChangeEvents(validator)
        });
        if (this._pendingValidators.length) {
            result.status = STATUS.pending
        } else {
            result.status = result.isValid ? STATUS.valid : STATUS.invalid;
            this._unsubscribeFromAllChangeEvents();
            this._raiseValidatedEvent(result)
        }
        this._updateValidationInfo(result);
        return (0, _extend.extend)({}, this._validationInfo.result)
    },
    _subscribeToChangeEvents: function(validator) {
        validator.on("validating", this._onValidatorStatusChanged);
        validator.on("validated", this._onValidatorStatusChanged)
    },
    _unsubscribeFromChangeEvents: function(validator) {
        validator.off("validating", this._onValidatorStatusChanged);
        validator.off("validated", this._onValidatorStatusChanged)
    },
    _unsubscribeFromAllChangeEvents: function() {
        var _this12 = this;
        (0, _iterator.each)(this.validators, function(_, validator) {
            _this12._unsubscribeFromChangeEvents(validator)
        })
    },
    _updateValidationInfo: function(result) {
        this._validationInfo.result = result;
        if (result.status !== STATUS.pending) {
            return
        }
        if (!this._validationInfo.deferred) {
            this._validationInfo.deferred = new _deferred.Deferred;
            this._validationInfo.result.complete = this._validationInfo.deferred.promise()
        }
    },
    _addPendingValidator: function(validator) {
        var foundValidator = (0, _common.grep)(this._pendingValidators, function(val) {
            return val === validator
        })[0];
        if (!foundValidator) {
            this._pendingValidators.push(validator)
        }
    },
    _removePendingValidator: function(validator) {
        var index = (0, _array.inArray)(validator, this._pendingValidators);
        if (index >= 0) {
            this._pendingValidators.splice(index, 1)
        }
    },
    _orderBrokenRules: function(brokenRules) {
        var orderedRules = [];
        (0, _iterator.each)(this.validators, function(_, validator) {
            var foundRules = (0, _common.grep)(brokenRules, function(rule) {
                return rule.validator === validator
            });
            if (foundRules.length) {
                orderedRules = orderedRules.concat(foundRules)
            }
        });
        return orderedRules
    },
    _updateBrokenRules: function(result) {
        if (!this._validationInfo.result) {
            return
        }
        var brokenRules = this._validationInfo.result.brokenRules;
        var rules = (0, _common.grep)(brokenRules, function(rule) {
            return rule.validator !== result.validator
        });
        if (result.brokenRules) {
            brokenRules = rules.concat(result.brokenRules)
        }
        this._validationInfo.result.brokenRules = this._orderBrokenRules(brokenRules)
    },
    _onValidatorStatusChanged: function(result) {
        if (result.status === STATUS.pending) {
            this._addPendingValidator(result.validator);
            return
        }
        this._resolveIfComplete(result)
    },
    _resolveIfComplete: function(result) {
        this._removePendingValidator(result.validator);
        this._updateBrokenRules(result);
        if (!this._pendingValidators.length) {
            this._unsubscribeFromAllChangeEvents();
            if (!this._validationInfo.result) {
                return
            }
            this._validationInfo.result.status = 0 === this._validationInfo.result.brokenRules.length ? STATUS.valid : STATUS.invalid;
            this._validationInfo.result.isValid = this._validationInfo.result.status === STATUS.valid;
            var res = (0, _extend.extend)({}, this._validationInfo.result, {
                complete: null
            });
            var deferred = this._validationInfo.deferred;
            this._resetValidationInfo();
            this._raiseValidatedEvent(res);
            deferred && setTimeout(function() {
                deferred.resolve(res)
            })
        }
    },
    _raiseValidatedEvent: function(result) {
        this._eventsStrategy.fireEvent("validated", [result])
    },
    _resetValidationInfo: function() {
        this._validationInfo = {
            result: null,
            deferred: null
        }
    },
    _synchronizeValidationInfo: function() {
        if (this._validationInfo.result) {
            this._validationInfo.result.validators = this.validators
        }
    },
    removeRegisteredValidator: function(validator) {
        var index = (0, _array.inArray)(validator, this.validators);
        if (index > -1) {
            this.validators.splice(index, 1);
            this._synchronizeValidationInfo();
            this._resolveIfComplete({
                validator: validator
            })
        }
    },
    registerValidator: function(validator) {
        if ((0, _array.inArray)(validator, this.validators) < 0) {
            this.validators.push(validator);
            this._synchronizeValidationInfo()
        }
    },
    reset: function() {
        (0, _iterator.each)(this.validators, function(_, validator) {
            validator.reset()
        });
        this._pendingValidators = [];
        this._resetValidationInfo()
    },
    on: function(eventName, eventHandler) {
        this._eventsStrategy.on(eventName, eventHandler);
        return this
    },
    off: function(eventName, eventHandler) {
        this._eventsStrategy.off(eventName, eventHandler);
        return this
    }
});
var ValidationEngine = {
    groups: [],
    getGroupConfig: function(group) {
        var result = (0, _common.grep)(this.groups, function(config) {
            return config.group === group
        });
        if (result.length) {
            return result[0]
        }
    },
    findGroup: function($element, model) {
        var $dxGroup = $element.parents(".dx-validationgroup").first();
        if ($dxGroup.length) {
            return $dxGroup.dxValidationGroup("instance")
        }
        return model
    },
    initGroups: function() {
        this.groups = [];
        this.addGroup()
    },
    addGroup: function(group) {
        var config = this.getGroupConfig(group);
        if (!config) {
            config = new GroupConfig(group);
            this.groups.push(config)
        }
        return config
    },
    removeGroup: function(group) {
        var config = this.getGroupConfig(group);
        var index = (0, _array.inArray)(config, this.groups);
        if (index > -1) {
            this.groups.splice(index, 1)
        }
        return config
    },
    _setDefaultMessage: function(info) {
        var rule = info.rule,
            validator = info.validator,
            name = info.name;
        if (!_type2.default.isDefined(rule.message)) {
            if (validator.defaultFormattedMessage && _type2.default.isDefined(name)) {
                rule.message = validator.defaultFormattedMessage(name)
            } else {
                rule.message = validator.defaultMessage()
            }
        }
    },
    _addBrokenRule: function(info) {
        var result = info.result,
            rule = info.rule;
        if (!result.brokenRule) {
            result.brokenRule = rule
        }
        if (!result.brokenRules) {
            result.brokenRules = []
        }
        result.brokenRules.push(rule)
    },
    validate: function(value, rules, name) {
        var _this13 = this;
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
        (0, _iterator.each)(rules || [], function(_, rule) {
            var ruleValidator = rulesValidators[rule.type];
            var ruleValidationResult;
            if (ruleValidator) {
                if (_type2.default.isDefined(rule.isValid) && rule.value === value && !rule.reevaluate) {
                    if (!rule.isValid) {
                        result.isValid = false;
                        _this13._addBrokenRule({
                            result: result,
                            rule: rule
                        });
                        return false
                    }
                    return true
                }
                rule.value = value;
                if ("async" === rule.type) {
                    asyncRuleItems.push({
                        rule: rule,
                        ruleValidator: ruleValidator
                    });
                    return true
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
                    })
                }
                if (!rule.isValid) {
                    return false
                }
            } else {
                throw _errors2.default.Error("E0100")
            }
        });
        if (result.isValid && !result.brokenRules && asyncRuleItems.length) {
            result = this._validateAsyncRules({
                value: value,
                items: asyncRuleItems,
                result: result,
                name: name
            })
        }
        result.status = result.pendingRules ? STATUS.pending : result.isValid ? STATUS.valid : STATUS.invalid;
        return result
    },
    _validateAsyncRules: function(_ref) {
        var _this14 = this;
        var result = _ref.result,
            value = _ref.value,
            items = _ref.items,
            name = _ref.name;
        var asyncResults = [];
        (0, _iterator.each)(items, function(_, item) {
            var validateResult = item.ruleValidator.validate(value, item.rule);
            if (!_type2.default.isPromise(validateResult)) {
                _this14._updateRuleConfig({
                    rule: item.rule,
                    ruleResult: _this14._getPatchedRuleResult(validateResult),
                    validator: item.ruleValidator,
                    name: name
                })
            } else {
                if (!result.pendingRules) {
                    result.pendingRules = []
                }
                result.pendingRules.push(item.rule);
                var asyncResult = validateResult.then(function(res) {
                    var ruleResult = _this14._getPatchedRuleResult(res);
                    _this14._updateRuleConfig({
                        rule: item.rule,
                        ruleResult: ruleResult,
                        validator: item.ruleValidator,
                        name: name
                    });
                    return ruleResult
                });
                asyncResults.push(asyncResult)
            }
        });
        if (asyncResults.length) {
            result.complete = _promise2.default.all(asyncResults).then(function(values) {
                return _this14._getAsyncRulesResult({
                    result: result,
                    values: values
                })
            })
        }
        return result
    },
    _updateRuleConfig: function(_ref2) {
        var rule = _ref2.rule,
            ruleResult = _ref2.ruleResult,
            validator = _ref2.validator,
            name = _ref2.name;
        rule.isValid = ruleResult.isValid;
        if (!ruleResult.isValid) {
            if (_type2.default.isDefined(ruleResult.message) && _type2.default.isString(ruleResult.message) && ruleResult.message.length) {
                rule.message = ruleResult.message
            } else {
                this._setDefaultMessage({
                    rule: rule,
                    validator: validator,
                    name: name
                })
            }
        }
    },
    _getPatchedRuleResult: function(ruleResult) {
        var result;
        var isValid = true;
        if (_type2.default.isObject(ruleResult)) {
            result = (0, _extend.extend)({}, ruleResult);
            if (!_type2.default.isDefined(result.isValid)) {
                result.isValid = isValid
            }
        } else {
            result = {
                isValid: _type2.default.isBoolean(ruleResult) ? ruleResult : isValid
            }
        }
        return result
    },
    _getAsyncRulesResult: function(_ref3) {
        var _this15 = this;
        var values = _ref3.values,
            result = _ref3.result;
        (0, _iterator.each)(values, function(index, val) {
            if (false === val.isValid) {
                result.isValid = val.isValid;
                var rule = result.pendingRules[index];
                _this15._addBrokenRule({
                    result: result,
                    rule: rule
                })
            }
        });
        result.pendingRules = null;
        result.complete = null;
        result.status = result.isValid ? STATUS.valid : STATUS.invalid;
        return result
    },
    registerValidatorInGroup: function(group, validator) {
        var groupConfig = ValidationEngine.addGroup(group);
        groupConfig.registerValidator.call(groupConfig, validator)
    },
    _shouldRemoveGroup: function(group, validatorsInGroup) {
        var isDefaultGroup = void 0 === group;
        var isValidationGroupInstance = group && "dxValidationGroup" === group.NAME;
        return !isDefaultGroup && !isValidationGroupInstance && !validatorsInGroup.length
    },
    removeRegisteredValidator: function(group, validator) {
        var config = ValidationEngine.getGroupConfig(group);
        if (config) {
            config.removeRegisteredValidator.call(config, validator);
            var validatorsInGroup = config.validators;
            if (this._shouldRemoveGroup(group, validatorsInGroup)) {
                this.removeGroup(group)
            }
        }
    },
    initValidationOptions: function(options) {
        var _this16 = this;
        var initedOptions = {};
        if (options) {
            var syncOptions = ["isValid", "validationStatus", "validationError", "validationErrors"];
            syncOptions.forEach(function(prop) {
                if (prop in options) {
                    (0, _extend.extend)(initedOptions, _this16.synchronizeValidationOptions({
                        name: prop,
                        value: options[prop]
                    }, options))
                }
            })
        }
        return initedOptions
    },
    synchronizeValidationOptions: function(_ref4, options) {
        var name = _ref4.name,
            value = _ref4.value;
        switch (name) {
            case "validationStatus":
                var isValid = value === STATUS.valid || value === STATUS.pending;
                return options.isValid !== isValid ? {
                    isValid: isValid
                } : {};
            case "isValid":
                var validationStatus = options.validationStatus;
                var newStatus = validationStatus;
                if (value && validationStatus === STATUS.invalid) {
                    newStatus = STATUS.valid
                } else {
                    if (!value && validationStatus !== STATUS.invalid) {
                        newStatus = STATUS.invalid
                    }
                }
                return newStatus !== validationStatus ? {
                    validationStatus: newStatus
                } : {};
            case "validationErrors":
                var validationError = !value || !value.length ? null : value[0];
                return options.validationError !== validationError ? {
                    validationError: validationError
                } : {};
            case "validationError":
                var validationErrors = options.validationErrors;
                if (!value && validationErrors) {
                    return {
                        validationErrors: null
                    }
                } else {
                    if (value && !validationErrors) {
                        return {
                            validationErrors: [value]
                        }
                    } else {
                        if (value && validationErrors && value !== validationErrors[0]) {
                            validationErrors[0] = value;
                            return {
                                validationErrors: validationErrors.slice()
                            }
                        }
                    }
                }
        }
        return {}
    },
    validateGroup: function(group) {
        var groupConfig = ValidationEngine.getGroupConfig(group);
        if (!groupConfig) {
            throw _errors2.default.Error("E0110")
        }
        return groupConfig.validate()
    },
    resetGroup: function(group) {
        var groupConfig = ValidationEngine.getGroupConfig(group);
        if (!groupConfig) {
            throw _errors2.default.Error("E0110")
        }
        return groupConfig.reset()
    }
};
ValidationEngine.initGroups();
module.exports = ValidationEngine;
module.exports.default = module.exports;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/number.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _dependency_injector = __webpack_require__(19);
var _dependency_injector2 = _interopRequireDefault(_dependency_injector);
var _array = __webpack_require__(14);
var _common = __webpack_require__(8);
var _iterator = __webpack_require__(4);
var _type = __webpack_require__(1);
var _number = __webpack_require__(77);
var _number2 = _interopRequireDefault(_number);
var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _utils = __webpack_require__(49);
var _currency = __webpack_require__(78);
var _currency2 = _interopRequireDefault(_currency);
var _number3 = __webpack_require__(79);
var _number4 = _interopRequireDefault(_number3);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) {
        return
    }
    if ("string" === typeof o) {
        return _arrayLikeToArray(o, minLen)
    }
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) {
        n = o.constructor.name
    }
    if ("Map" === n || "Set" === n) {
        return Array.from(o)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return _arrayLikeToArray(o, minLen)
    }
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) {
        len = arr.length
    }
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]
    }
    return arr2
}

function _iterableToArrayLimit(arr, i) {
    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(arr))) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
        for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) {
                break
            }
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && null != _i.return) {
                _i.return()
            }
        } finally {
            if (_d) {
                throw _e
            }
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) {
        return arr
    }
}
var hasIntl = "undefined" !== typeof Intl;
var MAX_LARGE_NUMBER_POWER = 4;
var DECIMAL_BASE = 10;
var NUMERIC_FORMATS = ["currency", "fixedpoint", "exponential", "percent", "decimal"];
var LargeNumberFormatPostfixes = {
    1: "K",
    2: "M",
    3: "B",
    4: "T"
};
var LargeNumberFormatPowers = {
    largenumber: "auto",
    thousands: 1,
    millions: 2,
    billions: 3,
    trillions: 4
};
var numberLocalization = (0, _dependency_injector2.default)({
    engine: function() {
        return "base"
    },
    numericFormats: NUMERIC_FORMATS,
    defaultLargeNumberFormatPostfixes: LargeNumberFormatPostfixes,
    _parseNumberFormatString: function(formatType) {
        var formatObject = {};
        if (!formatType || "string" !== typeof formatType) {
            return
        }
        var formatList = formatType.toLowerCase().split(" ");
        (0, _iterator.each)(formatList, function(index, value) {
            if ((0, _array.inArray)(value, NUMERIC_FORMATS) > -1) {
                formatObject.formatType = value
            } else {
                if (value in LargeNumberFormatPowers) {
                    formatObject.power = LargeNumberFormatPowers[value]
                }
            }
        });
        if (formatObject.power && !formatObject.formatType) {
            formatObject.formatType = "fixedpoint"
        }
        if (formatObject.formatType) {
            return formatObject
        }
    },
    _calculateNumberPower: function(value, base, minPower, maxPower) {
        var number = Math.abs(value);
        var power = 0;
        if (number > 1) {
            while (number && number >= base && (void 0 === maxPower || power < maxPower)) {
                power++;
                number /= base
            }
        } else {
            if (number > 0 && number < 1) {
                while (number < 1 && (void 0 === minPower || power > minPower)) {
                    power--;
                    number *= base
                }
            }
        }
        return power
    },
    _getNumberByPower: function(number, power, base) {
        var result = number;
        while (power > 0) {
            result /= base;
            power--
        }
        while (power < 0) {
            result *= base;
            power++
        }
        return result
    },
    _formatNumber: function(value, formatObject, formatConfig) {
        if ("auto" === formatObject.power) {
            formatObject.power = this._calculateNumberPower(value, 1e3, 0, MAX_LARGE_NUMBER_POWER)
        }
        if (formatObject.power) {
            value = this._getNumberByPower(value, formatObject.power, 1e3)
        }
        var powerPostfix = this.defaultLargeNumberFormatPostfixes[formatObject.power] || "";
        var result = this._formatNumberCore(value, formatObject.formatType, formatConfig);
        result = result.replace(/(\d|.$)(\D*)$/, "$1" + powerPostfix + "$2");
        return result
    },
    _formatNumberExponential: function(value, formatConfig) {
        var power = this._calculateNumberPower(value, DECIMAL_BASE);
        var number = this._getNumberByPower(value, power, DECIMAL_BASE);
        if (void 0 === formatConfig.precision) {
            formatConfig.precision = 1
        }
        if (number.toFixed(formatConfig.precision || 0) >= DECIMAL_BASE) {
            power++;
            number /= DECIMAL_BASE
        }
        var powString = (power >= 0 ? "+" : "") + power.toString();
        return this._formatNumberCore(number, "fixedpoint", formatConfig) + "E" + powString
    },
    _addZeroes: function(value, precision) {
        var multiplier = Math.pow(10, precision);
        var sign = value < 0 ? "-" : "";
        value = (Math.abs(value) * multiplier >>> 0) / multiplier;
        var result = value.toString();
        while (result.length < precision) {
            result = "0" + result
        }
        return sign + result
    },
    _addGroupSeparators: function(value) {
        var parts = value.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, (0, _config2.default)().thousandsSeparator) + (parts[1] ? (0, _config2.default)().decimalSeparator + parts[1] : "")
    },
    _formatNumberCore: function(value, format, formatConfig) {
        if ("exponential" === format) {
            return this._formatNumberExponential(value, formatConfig)
        }
        if ("decimal" !== format && null !== formatConfig.precision) {
            formatConfig.precision = formatConfig.precision || 0
        }
        if ("percent" === format) {
            value = 100 * value
        }
        if (void 0 !== formatConfig.precision) {
            if ("decimal" === format) {
                value = this._addZeroes(value, formatConfig.precision)
            } else {
                value = null === formatConfig.precision ? value.toPrecision() : (0, _utils.toFixed)(value, formatConfig.precision)
            }
        }
        if ("decimal" !== format) {
            value = this._addGroupSeparators(value)
        } else {
            value = value.toString().replace(".", (0, _config2.default)().decimalSeparator)
        }
        if ("percent" === format) {
            value += "%"
        }
        return value
    },
    _normalizeFormat: function(format) {
        if (!format) {
            return {}
        }
        if ("function" === typeof format) {
            return format
        }
        if (!(0, _type.isPlainObject)(format)) {
            format = {
                type: format
            }
        }
        return format
    },
    _getSeparators: function() {
        return {
            decimalSeparator: this.getDecimalSeparator(),
            thousandsSeparator: this.getThousandsSeparator()
        }
    },
    getThousandsSeparator: function() {
        return this.format(1e4, "fixedPoint")[2]
    },
    getDecimalSeparator: function() {
        return this.format(1.2, {
            type: "fixedPoint",
            precision: 1
        })[1]
    },
    convertDigits: function(value, toStandard) {
        var digits = this.format(90, "decimal");
        if ("string" !== typeof value || "0" === digits[1]) {
            return value
        }
        var fromFirstDigit = toStandard ? digits[1] : "0";
        var toFirstDigit = toStandard ? "0" : digits[1];
        var fromLastDigit = toStandard ? digits[0] : "9";
        var regExp = new RegExp("[" + fromFirstDigit + "-" + fromLastDigit + "]", "g");
        return value.replace(regExp, function(char) {
            return String.fromCharCode(char.charCodeAt(0) + (toFirstDigit.charCodeAt(0) - fromFirstDigit.charCodeAt(0)))
        })
    },
    getSign: function(text, format) {
        if ("-" === text.replace(/[^0-9-]/g, "").charAt(0)) {
            return -1
        }
        if (!format) {
            return 1
        }
        var separators = this._getSeparators();
        var regExp = new RegExp("[0-9" + (0, _common.escapeRegExp)(separators.decimalSeparator + separators.thousandsSeparator) + "]+", "g");
        var negativeEtalon = this.format(-1, format).replace(regExp, "1");
        var cleanedText = text.replace(regExp, "1");
        return cleanedText === negativeEtalon ? -1 : 1
    },
    format: function(value, _format) {
        if ("number" !== typeof value) {
            return value
        }
        if ("number" === typeof _format) {
            return value
        }
        _format = _format && _format.formatter || _format;
        if ("function" === typeof _format) {
            return _format(value)
        }
        _format = this._normalizeFormat(_format);
        if (!_format.type) {
            _format.type = "decimal"
        }
        var numberConfig = this._parseNumberFormatString(_format.type);
        if (!numberConfig) {
            var formatterConfig = this._getSeparators();
            formatterConfig.unlimitedIntegerDigits = _format.unlimitedIntegerDigits;
            return this.convertDigits(_number2.default.getFormatter(_format.type, formatterConfig)(value))
        }
        return this._formatNumber(value, numberConfig, _format)
    },
    parse: function(text, format) {
        if (!text) {
            return
        }
        if (format && format.parser) {
            return format.parser(text)
        }
        text = this.convertDigits(text, true);
        if (format && "string" !== typeof format) {
            _errors2.default.log("W0011")
        }
        var decimalSeparator = this.getDecimalSeparator();
        var regExp = new RegExp("[^0-9" + (0, _common.escapeRegExp)(decimalSeparator) + "]", "g");
        var cleanedText = text.replace(regExp, "").replace(decimalSeparator, ".").replace(/\.$/g, "");
        if ("." === cleanedText || "" === cleanedText) {
            return null
        }
        if (this._calcSignificantDigits(cleanedText) > 15) {
            return NaN
        }
        var parsed = +cleanedText;
        return parsed * this.getSign(text, format)
    },
    _calcSignificantDigits: function(text) {
        var _text$split = text.split("."),
            _text$split2 = _slicedToArray(_text$split, 2),
            integer = _text$split2[0],
            fractional = _text$split2[1];
        var calcDigitsAfterLeadingZeros = function(digits) {
            var index = -1;
            for (var i = 0; i < digits.length; i++) {
                if ("0" !== digits[i]) {
                    index = i;
                    break
                }
            }
            return index > -1 ? digits.length - index : 0
        };
        var result = 0;
        if (integer) {
            result += calcDigitsAfterLeadingZeros(integer.split(""))
        }
        if (fractional) {
            result += calcDigitsAfterLeadingZeros(fractional.split("").reverse())
        }
        return result
    }
});
numberLocalization.inject(_currency2.default);
if (hasIntl) {
    numberLocalization.inject(_number4.default)
}
module.exports = numberLocalization;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/ldml/number.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var fitIntoRange = __webpack_require__(48).fitIntoRange;
var toFixed = __webpack_require__(49).toFixed;
var DEFAULT_CONFIG = {
    thousandsSeparator: ",",
    decimalSeparator: "."
};
var ESCAPING_CHAR = "'";
var MAXIMUM_NUMBER_LENGTH = 15;

function getGroupSizes(formatString) {
    return formatString.split(",").slice(1).map(function(str) {
        return str.split("").filter(function(char) {
            return "#" === char || "0" === char
        }).length
    })
}

function getSignParts(format) {
    var signParts = format.split(";");
    if (1 === signParts.length) {
        signParts.push("-" + signParts[0])
    }
    return signParts
}

function reverseString(str) {
    return str.toString().split("").reverse().join("")
}

function isPercentFormat(format) {
    return format.indexOf("%") !== -1 && !format.match(/'[^']*%[^']*'/g)
}

function removeStubs(str) {
    return str.replace(/'.+'/g, "")
}

function getNonRequiredDigitCount(floatFormat) {
    if (!floatFormat) {
        return 0
    }
    var format = removeStubs(floatFormat);
    return format.length - format.replace(/[#]/g, "").length
}

function getRequiredDigitCount(floatFormat) {
    if (!floatFormat) {
        return 0
    }
    var format = removeStubs(floatFormat);
    return format.length - format.replace(/[0]/g, "").length
}

function normalizeValueString(valuePart, minDigitCount, maxDigitCount) {
    if (!valuePart) {
        return ""
    }
    if (valuePart.length > maxDigitCount) {
        valuePart = valuePart.substr(0, maxDigitCount)
    }
    while (valuePart.length > minDigitCount && "0" === valuePart.slice(-1)) {
        valuePart = valuePart.substr(0, valuePart.length - 1)
    }
    while (valuePart.length < minDigitCount) {
        valuePart += "0"
    }
    return valuePart
}

function applyGroups(valueString, groupSizes, thousandsSeparator) {
    if (!groupSizes.length) {
        return valueString
    }
    var groups = [];
    var index = 0;
    while (valueString) {
        var groupSize = groupSizes[index];
        if (!groupSize) {
            break
        }
        groups.push(valueString.slice(0, groupSize));
        valueString = valueString.slice(groupSize);
        if (index < groupSizes.length - 1) {
            index++
        }
    }
    return groups.join(thousandsSeparator)
}

function formatNumberPart(format, valueString) {
    return format.split(ESCAPING_CHAR).map(function(formatPart, escapeIndex) {
        var isEscape = escapeIndex % 2;
        if (!formatPart && isEscape) {
            return ESCAPING_CHAR
        }
        return isEscape ? formatPart : formatPart.replace(/[,#0]+/, valueString)
    }).join("")
}

function getFloatPointIndex(format) {
    var isEscape = false;
    for (var index = 0; index < format.length; index++) {
        if ("'" === format[index]) {
            isEscape = !isEscape
        }
        if ("." === format[index] && !isEscape) {
            return index
        }
    }
    return format.length
}

function getFormatter(format, config) {
    config = config || DEFAULT_CONFIG;
    return function(value) {
        if ("number" !== typeof value || isNaN(value)) {
            return ""
        }
        var signFormatParts = getSignParts(format);
        var isPositiveZero = 1 / value === 1 / 0;
        var isPositive = value > 0 || isPositiveZero;
        var numberFormat = signFormatParts[isPositive ? 0 : 1];
        if (isPercentFormat(numberFormat)) {
            value = 100 * value
        }
        if (!isPositive) {
            value = -value
        }
        var floatPointIndex = getFloatPointIndex(numberFormat);
        var floatFormatParts = [numberFormat.substr(0, floatPointIndex), numberFormat.substr(floatPointIndex + 1)];
        var minFloatPrecision = getRequiredDigitCount(floatFormatParts[1]);
        var maxFloatPrecision = minFloatPrecision + getNonRequiredDigitCount(floatFormatParts[1]);
        var minIntegerPrecision = getRequiredDigitCount(floatFormatParts[0]);
        var maxIntegerPrecision = getNonRequiredDigitCount(floatFormatParts[0]) || config.unlimitedIntegerDigits ? void 0 : minIntegerPrecision;
        var integerLength = Math.floor(value).toString().length;
        var floatPrecision = fitIntoRange(maxFloatPrecision, 0, MAXIMUM_NUMBER_LENGTH - integerLength);
        var groupSizes = getGroupSizes(floatFormatParts[0]).reverse();
        var valueParts = toFixed(value, floatPrecision < 0 ? 0 : floatPrecision).split(".");
        var valueIntegerPart = normalizeValueString(reverseString(valueParts[0]), minIntegerPrecision, maxIntegerPrecision);
        var valueFloatPart = normalizeValueString(valueParts[1], minFloatPrecision, maxFloatPrecision);
        valueIntegerPart = applyGroups(valueIntegerPart, groupSizes, config.thousandsSeparator);
        var integerString = reverseString(formatNumberPart(reverseString(floatFormatParts[0]), valueIntegerPart));
        var floatString = maxFloatPrecision ? formatNumberPart(floatFormatParts[1], valueFloatPart) : "";
        var result = integerString + (floatString.match(/\d/) ? config.decimalSeparator : "") + floatString;
        return result
    }
}

function parseValue(text, isPercent, isNegative) {
    var value = (isPercent ? .01 : 1) * parseFloat(text) || 0;
    return isNegative ? -value : value
}

function prepareValueText(valueText, formatter, isPercent, isIntegerPart) {
    var nextValueText = valueText;
    var char;
    var text;
    var nextText;
    do {
        if (nextText) {
            char = text.length === nextText.length ? "0" : "1";
            valueText = isIntegerPart ? char + valueText : valueText + char
        }
        text = nextText || formatter(parseValue(nextValueText, isPercent));
        nextValueText = isIntegerPart ? "1" + nextValueText : nextValueText + "1";
        nextText = formatter(parseValue(nextValueText, isPercent))
    } while (text !== nextText && (isIntegerPart ? text.length === nextText.length : text.length <= nextText.length));
    if (isIntegerPart && nextText.length > text.length) {
        var hasGroups = formatter(12345).indexOf("12345") === -1;
        do {
            valueText = "1" + valueText
        } while (hasGroups && parseValue(valueText, isPercent) < 1e5)
    }
    return valueText
}

function getFormatByValueText(valueText, formatter, isPercent, isNegative) {
    var format = formatter(parseValue(valueText, isPercent, isNegative));
    var valueTextParts = valueText.split(".");
    var valueTextWithModifiedFloat = valueTextParts[0] + ".3" + valueTextParts[1].slice(1);
    var valueWithModifiedFloat = parseValue(valueTextWithModifiedFloat, isPercent, isNegative);
    var decimalSeparatorIndex = formatter(valueWithModifiedFloat).indexOf("3") - 1;
    format = format.replace(/(\d)\D(\d)/g, "$1,$2");
    if (decimalSeparatorIndex >= 0) {
        format = format.slice(0, decimalSeparatorIndex) + "." + format.slice(decimalSeparatorIndex + 1)
    }
    format = format.replace(/1+/, "1").replace(/1/g, "#");
    if (!isPercent) {
        format = format.replace("%", "'%'")
    }
    return format
}

function getFormat(formatter) {
    var valueText = ".";
    var isPercent = formatter(1).indexOf("100") >= 0;
    valueText = prepareValueText(valueText, formatter, isPercent, true);
    valueText = prepareValueText(valueText, formatter, isPercent, false);
    var positiveFormat = getFormatByValueText(valueText, formatter, isPercent, false);
    var negativeFormat = getFormatByValueText(valueText, formatter, isPercent, true);
    return negativeFormat === "-" + positiveFormat ? positiveFormat : positiveFormat + ";" + negativeFormat
}
exports.getFormatter = getFormatter;
exports.getFormat = getFormat;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/currency.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _extend = __webpack_require__(2);
module.exports = {
    _formatNumberCore: function(value, format, formatConfig) {
        if ("currency" === format) {
            formatConfig.precision = formatConfig.precision || 0;
            var result = this.format(value, (0, _extend.extend)({}, formatConfig, {
                type: "fixedpoint"
            }));
            var currencyPart = this.getCurrencySymbol().symbol.replace("$", "$$$$");
            result = result.replace(/^(\D*)(\d.*)/, "$1" + currencyPart + "$2");
            return result
        }
        return this.callBase.apply(this, arguments)
    },
    getCurrencySymbol: function() {
        return {
            symbol: "$"
        }
    },
    getOpenXmlCurrencyFormat: function() {
        return "$#,##0{0}_);\\($#,##0{0}\\)"
    }
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/intl/number.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _core = __webpack_require__(50);
var _open_xml_currency_format = __webpack_require__(82);
var _open_xml_currency_format2 = _interopRequireDefault(_open_xml_currency_format);
var _accounting_formats = __webpack_require__(83);
var _accounting_formats2 = _interopRequireDefault(_accounting_formats);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var detectCurrencySymbolRegex = /([^\s0]+)?(\s*)0*[.,]*0*(\s*)([^\s0]+)?/;
var formattersCache = {};
var getFormatter = function(format) {
    var key = (0, _core.locale)() + "/" + JSON.stringify(format);
    if (!formattersCache[key]) {
        formattersCache[key] = new Intl.NumberFormat((0, _core.locale)(), format).format
    }
    return formattersCache[key]
};
var getCurrencyFormatter = function(currency) {
    return new Intl.NumberFormat((0, _core.locale)(), {
        style: "currency",
        currency: currency
    })
};
module.exports = {
    engine: function() {
        return "intl"
    },
    _formatNumberCore: function(value, format, formatConfig) {
        if ("exponential" === format) {
            return this.callBase.apply(this, arguments)
        }
        return getFormatter(this._normalizeFormatConfig(format, formatConfig))(value)
    },
    _normalizeFormatConfig: function(format, formatConfig, value) {
        var config;
        if ("decimal" === format) {
            config = {
                minimumIntegerDigits: formatConfig.precision || void 0,
                useGrouping: false,
                maximumFractionDigits: String(value).length,
                round: value < 0 ? "ceil" : "floor"
            }
        } else {
            config = this._getPrecisionConfig(formatConfig.precision)
        }
        if ("percent" === format) {
            config.style = "percent"
        } else {
            if ("currency" === format) {
                config.style = "currency";
                config.currency = formatConfig.currency || (0, _config2.default)().defaultCurrency
            }
        }
        return config
    },
    _getPrecisionConfig: function(precision) {
        var config;
        if (null === precision) {
            config = {
                minimumFractionDigits: 0,
                maximumFractionDigits: 20
            }
        } else {
            config = {
                minimumFractionDigits: precision || 0,
                maximumFractionDigits: precision || 0
            }
        }
        return config
    },
    format: function(value, _format) {
        if ("number" !== typeof value) {
            return value
        }
        _format = this._normalizeFormat(_format);
        if ("default" === _format.currency) {
            _format.currency = (0, _config2.default)().defaultCurrency
        }
        if (!_format || "function" !== typeof _format && !_format.type && !_format.formatter) {
            return getFormatter(_format)(value)
        }
        return this.callBase.apply(this, arguments)
    },
    _getCurrencySymbolInfo: function(currency) {
        var formatter = getCurrencyFormatter(currency);
        return this._extractCurrencySymbolInfo(formatter.format(0))
    },
    _extractCurrencySymbolInfo: function(currencyValueString) {
        var match = detectCurrencySymbolRegex.exec(currencyValueString) || [];
        var position = match[1] ? "before" : "after";
        var symbol = match[1] || match[4] || "";
        var delimiter = match[2] || match[3] || "";
        return {
            position: position,
            symbol: symbol,
            delimiter: delimiter
        }
    },
    getCurrencySymbol: function(currency) {
        if (!currency) {
            currency = (0, _config2.default)().defaultCurrency
        }
        var symbolInfo = this._getCurrencySymbolInfo(currency);
        return {
            symbol: symbolInfo.symbol
        }
    },
    getOpenXmlCurrencyFormat: function(currency) {
        var targetCurrency = currency || (0, _config2.default)().defaultCurrency;
        var currencySymbol = this._getCurrencySymbolInfo(targetCurrency).symbol;
        var closestAccountingFormat = (0, _core.getValueByClosestLocale)(function(locale) {
            return _accounting_formats2.default[locale]
        });
        return (0, _open_xml_currency_format2.default)(currencySymbol, closestAccountingFormat)
    }
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/cldr-data/parent_locales.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = {
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


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/parentLocale.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var PARENT_LOCALE_SEPARATOR = "-";
module.exports = function(parentLocales, locale) {
    var parentLocale = parentLocales[locale];
    if (parentLocale) {
        return "root" !== parentLocale && parentLocale
    }
    return locale.substr(0, locale.lastIndexOf(PARENT_LOCALE_SEPARATOR))
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/open_xml_currency_format.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = function(currencySymbol, accountingFormat) {
    if (!accountingFormat) {
        return
    }
    var encodedCurrencySymbol = currencySymbol;
    if ("string" === typeof currencySymbol) {
        encodedCurrencySymbol = "";
        for (var i = 0; i < currencySymbol.length; i++) {
            if ("$" !== currencySymbol[i]) {
                encodedCurrencySymbol += "\\"
            }
            encodedCurrencySymbol += currencySymbol[i]
        }
    }
    var encodeSymbols = {
        ".00": "{0}",
        "'": "\\'",
        "\\(": "\\(",
        "\\)": "\\)",
        " ": "\\ ",
        '"': "&quot;",
        "\\\xa4": encodedCurrencySymbol
    };
    var result = accountingFormat.split(";");
    for (var _i = 0; _i < result.length; _i++) {
        for (var symbol in encodeSymbols) {
            if (Object.prototype.hasOwnProperty.call(encodeSymbols, symbol)) {
                result[_i] = result[_i].replace(new RegExp(symbol, "g"), encodeSymbols[symbol])
            }
        }
    }
    return 2 === result.length ? result[0] + "_);" + result[1] : result[0]
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/cldr-data/accounting_formats.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = {
    af: "\xa4#,##0.00;(\xa4#,##0.00)",
    "af-NA": "\xa4#,##0.00;(\xa4#,##0.00)",
    agq: "#,##0.00\xa4",
    ak: "\xa4#,##0.00",
    am: "\xa4#,##0.00;(\xa4#,##0.00)",
    ar: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-AE": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-BH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-DJ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-DZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-EG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-EH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-ER": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-IL": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-IQ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-JO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-KM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-KW": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-LB": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-LY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-MA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-MR": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-OM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-PS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-QA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-SA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-SD": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-SO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-SS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-SY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-TD": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-TN": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ar-YE": "\xa4#,##0.00;(\xa4#,##0.00)",
    as: "\xa4\xa0#,##,##0.00",
    asa: "#,##0.00\xa0\xa4",
    ast: "#,##0.00\xa0\xa4",
    az: "#,##0.00\xa0\xa4",
    "az-Cyrl": "#,##0.00\xa0\xa4",
    "az-Latn": "#,##0.00\xa0\xa4",
    bas: "#,##0.00\xa0\xa4",
    be: "#,##0.00\xa0\xa4",
    bem: "\xa4#,##0.00;(\xa4#,##0.00)",
    bez: "#,##0.00\xa4",
    bg: "0.00\xa0\xa4;(0.00\xa0\xa4)",
    bm: "\xa4#,##0.00;(\xa4#,##0.00)",
    bn: "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
    "bn-IN": "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
    bo: "\xa4\xa0#,##0.00",
    "bo-IN": "\xa4\xa0#,##0.00",
    br: "#,##0.00\xa0\xa4",
    brx: "\xa4\xa0#,##,##0.00",
    bs: "#,##0.00\xa0\xa4",
    "bs-Cyrl": "#,##0.00\xa0\xa4",
    "bs-Latn": "#,##0.00\xa0\xa4",
    ca: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "ca-AD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "ca-ES-VALENCIA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "ca-FR": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "ca-IT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    ccp: "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
    "ccp-IN": "#,##,##0.00\xa4;(#,##,##0.00\xa4)",
    ce: "#,##0.00\xa0\xa4",
    ceb: "\xa4#,##0.00;(\xa4#,##0.00)",
    cgg: "\xa4#,##0.00",
    chr: "\xa4#,##0.00;(\xa4#,##0.00)",
    ckb: "\xa4\xa0#,##0.00",
    "ckb-IR": "\xa4\xa0#,##0.00",
    cs: "#,##0.00\xa0\xa4",
    cu: "\xa4\xa0#,##0.00",
    cy: "\xa4#,##0.00;(\xa4#,##0.00)",
    da: "#,##0.00\xa0\xa4",
    "da-GL": "#,##0.00\xa0\xa4",
    dav: "\xa4#,##0.00;(\xa4#,##0.00)",
    de: "#,##0.00\xa0\xa4",
    "de-AT": "#,##0.00\xa0\xa4",
    "de-BE": "#,##0.00\xa0\xa4",
    "de-CH": "#,##0.00\xa0\xa4",
    "de-IT": "#,##0.00\xa0\xa4",
    "de-LI": "#,##0.00\xa0\xa4",
    "de-LU": "#,##0.00\xa0\xa4",
    dje: "#,##0.00\xa4",
    dsb: "#,##0.00\xa0\xa4",
    dua: "#,##0.00\xa0\xa4",
    dyo: "#,##0.00\xa0\xa4",
    dz: "\xa4#,##,##0.00",
    ebu: "\xa4#,##0.00;(\xa4#,##0.00)",
    ee: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ee-TG": "\xa4#,##0.00;(\xa4#,##0.00)",
    el: "#,##0.00\xa0\xa4",
    "el-CY": "#,##0.00\xa0\xa4",
    en: "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-001": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-150": "#,##0.00\xa0\xa4",
    "en-AE": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-AG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-AI": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-AS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-AT": "\xa4\xa0#,##0.00",
    "en-AU": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BB": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BE": "#,##0.00\xa0\xa4",
    "en-BI": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BW": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-BZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CC": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CH": "\xa4\xa0#,##0.00;\xa4-#,##0.00",
    "en-CK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CX": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-CY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-DE": "#,##0.00\xa0\xa4",
    "en-DG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-DK": "#,##0.00\xa0\xa4",
    "en-DM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-ER": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-FI": "#,##0.00\xa0\xa4",
    "en-FJ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-FK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-FM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GB": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GD": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GI": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GU": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-GY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-IE": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-IL": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-IM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-IN": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-IO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-JE": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-JM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-KI": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-KN": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-KY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-LC": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-LR": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-LS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MP": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MT": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MU": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MW": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-MY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NF": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NL": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "en-NR": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NU": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-NZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PN": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PR": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-PW": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-RW": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SB": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SC": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SD": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SE": "#,##0.00\xa0\xa4",
    "en-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SH": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "en-SL": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SX": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-SZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TC": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TT": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TV": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-TZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-UG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-UM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-US-POSIX": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-VC": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-VG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-VI": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-VU": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-WS": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-ZA": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-ZM": "\xa4#,##0.00;(\xa4#,##0.00)",
    "en-ZW": "\xa4#,##0.00;(\xa4#,##0.00)",
    eo: "\xa4\xa0#,##0.00",
    es: "#,##0.00\xa0\xa4",
    "es-419": "\xa4#,##0.00",
    "es-AR": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "es-BO": "\xa4#,##0.00",
    "es-BR": "\xa4#,##0.00",
    "es-BZ": "\xa4#,##0.00",
    "es-CL": "\xa4#,##0.00",
    "es-CO": "\xa4#,##0.00",
    "es-CR": "\xa4#,##0.00",
    "es-CU": "\xa4#,##0.00",
    "es-DO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "es-EA": "#,##0.00\xa0\xa4",
    "es-EC": "\xa4#,##0.00",
    "es-GQ": "#,##0.00\xa0\xa4",
    "es-GT": "\xa4#,##0.00",
    "es-HN": "\xa4#,##0.00",
    "es-IC": "#,##0.00\xa0\xa4",
    "es-MX": "\xa4#,##0.00",
    "es-NI": "\xa4#,##0.00",
    "es-PA": "\xa4#,##0.00",
    "es-PE": "\xa4#,##0.00",
    "es-PH": "#,##0.00\xa0\xa4",
    "es-PR": "\xa4#,##0.00",
    "es-PY": "\xa4#,##0.00",
    "es-SV": "\xa4#,##0.00",
    "es-US": "\xa4#,##0.00",
    "es-UY": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "es-VE": "\xa4#,##0.00",
    et: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    eu: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    ewo: "#,##0.00\xa0\xa4",
    fa: "\u200e\xa4\xa0#,##0.00;\u200e(\xa4\xa0#,##0.00)",
    "fa-AF": "\xa4\xa0#,##0.00;\u200e(\xa4\xa0#,##0.00)",
    ff: "#,##0.00\xa0\xa4",
    "ff-Latn": "#,##0.00\xa0\xa4",
    "ff-Latn-BF": "#,##0.00\xa0\xa4",
    "ff-Latn-CM": "#,##0.00\xa0\xa4",
    "ff-Latn-GH": "#,##0.00\xa0\xa4",
    "ff-Latn-GM": "#,##0.00\xa0\xa4",
    "ff-Latn-GN": "#,##0.00\xa0\xa4",
    "ff-Latn-GW": "#,##0.00\xa0\xa4",
    "ff-Latn-LR": "#,##0.00\xa0\xa4",
    "ff-Latn-MR": "#,##0.00\xa0\xa4",
    "ff-Latn-NE": "#,##0.00\xa0\xa4",
    "ff-Latn-NG": "#,##0.00\xa0\xa4",
    "ff-Latn-SL": "#,##0.00\xa0\xa4",
    fi: "#,##0.00\xa0\xa4",
    fil: "\xa4#,##0.00;(\xa4#,##0.00)",
    fo: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fo-DK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    fr: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-BE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-BF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-BI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-BJ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-BL": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CH": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CI": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-CM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-DJ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-DZ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-GA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-GF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-GN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-GP": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-GQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-HT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-KM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-LU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-ML": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MR": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-MU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-NC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-NE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-PF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-PM": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-RE": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-RW": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-SC": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-SN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-SY": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-TD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-TG": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-TN": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-VU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-WF": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "fr-YT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    fur: "\xa4\xa0#,##0.00",
    fy: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    ga: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ga-GB": "\xa4#,##0.00;(\xa4#,##0.00)",
    gd: "\xa4#,##0.00;(\xa4#,##0.00)",
    gl: "#,##0.00\xa0\xa4",
    gsw: "#,##0.00\xa0\xa4",
    "gsw-FR": "#,##0.00\xa0\xa4",
    "gsw-LI": "#,##0.00\xa0\xa4",
    gu: "\xa4#,##,##0.00;(\xa4#,##,##0.00)",
    guz: "\xa4#,##0.00;(\xa4#,##0.00)",
    gv: "\xa4#,##0.00",
    ha: "\xa4\xa0#,##0.00",
    "ha-GH": "\xa4\xa0#,##0.00",
    "ha-NE": "\xa4\xa0#,##0.00",
    haw: "\xa4#,##0.00;(\xa4#,##0.00)",
    he: "#,##0.00\xa0\xa4",
    hi: "\xa4#,##,##0.00",
    hr: "#,##0.00\xa0\xa4",
    "hr-BA": "#,##0.00\xa0\xa4",
    hsb: "#,##0.00\xa0\xa4",
    hu: "#,##0.00\xa0\xa4",
    hy: "#,##0.00\xa0\xa4",
    ia: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    id: "\xa4#,##0.00",
    ig: "\xa4#,##0.00;(\xa4#,##0.00)",
    ii: "\xa4\xa0#,##0.00",
    is: "#,##0.00\xa0\xa4",
    it: "#,##0.00\xa0\xa4",
    "it-CH": "#,##0.00\xa0\xa4",
    "it-SM": "#,##0.00\xa0\xa4",
    "it-VA": "#,##0.00\xa0\xa4",
    ja: "\xa4#,##0.00;(\xa4#,##0.00)",
    jgo: "\xa4\xa0#,##0.00",
    jmc: "\xa4#,##0.00",
    jv: "\xa4\xa0#,##0.00",
    ka: "#,##0.00\xa0\xa4",
    kab: "#,##0.00\xa4",
    kam: "\xa4#,##0.00;(\xa4#,##0.00)",
    kde: "\xa4#,##0.00;(\xa4#,##0.00)",
    kea: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    khq: "#,##0.00\xa4",
    ki: "\xa4#,##0.00;(\xa4#,##0.00)",
    kk: "#,##0.00\xa0\xa4",
    kkj: "\xa4\xa0#,##0.00",
    kl: "\xa4#,##0.00;\xa4-#,##0.00",
    kln: "\xa4#,##0.00;(\xa4#,##0.00)",
    km: "#,##0.00\xa4;(#,##0.00\xa4)",
    kn: "\xa4#,##0.00;(\xa4#,##0.00)",
    ko: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ko-KP": "\xa4#,##0.00;(\xa4#,##0.00)",
    kok: "\xa4#,##0.00;(\xa4#,##0.00)",
    ks: "\xa4\xa0#,##,##0.00",
    ksb: "#,##0.00\xa4",
    ksf: "#,##0.00\xa0\xa4",
    ksh: "#,##0.00\xa0\xa4",
    ku: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    kw: "\xa4#,##0.00",
    ky: "#,##0.00\xa0\xa4",
    lag: "\xa4\xa0#,##0.00",
    lb: "#,##0.00\xa0\xa4",
    lg: "#,##0.00\xa4",
    lkt: "\xa4\xa0#,##0.00",
    ln: "#,##0.00\xa0\xa4",
    "ln-AO": "#,##0.00\xa0\xa4",
    "ln-CF": "#,##0.00\xa0\xa4",
    "ln-CG": "#,##0.00\xa0\xa4",
    lo: "\xa4#,##0.00;\xa4-#,##0.00",
    lrc: "\xa4\xa0#,##0.00",
    "lrc-IQ": "\xa4\xa0#,##0.00",
    lt: "#,##0.00\xa0\xa4",
    lu: "#,##0.00\xa4",
    luo: "#,##0.00\xa4",
    luy: "\xa4#,##0.00;\xa4-\xa0#,##0.00",
    lv: "#,##0.00\xa0\xa4",
    mas: "\xa4#,##0.00;(\xa4#,##0.00)",
    "mas-TZ": "\xa4#,##0.00;(\xa4#,##0.00)",
    mer: "\xa4#,##0.00;(\xa4#,##0.00)",
    mfe: "\xa4\xa0#,##0.00",
    mg: "\xa4#,##0.00",
    mgh: "\xa4\xa0#,##0.00",
    mgo: "\xa4\xa0#,##0.00",
    mi: "\xa4\xa0#,##0.00",
    mk: "#,##0.00\xa0\xa4",
    ml: "\xa4#,##0.00;(\xa4#,##0.00)",
    mn: "\xa4\xa0#,##0.00",
    mr: "\xa4#,##0.00;(\xa4#,##0.00)",
    ms: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ms-BN": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ms-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
    mt: "\xa4#,##0.00",
    mua: "\xa4#,##0.00;(\xa4#,##0.00)",
    my: "\xa4\xa0#,##0.00",
    mzn: "\xa4\xa0#,##0.00",
    naq: "\xa4#,##0.00",
    nb: "\xa4\xa0#,##0.00",
    "nb-SJ": "\xa4\xa0#,##0.00",
    nd: "\xa4#,##0.00;(\xa4#,##0.00)",
    nds: "\xa4\xa0#,##0.00",
    "nds-NL": "\xa4\xa0#,##0.00",
    ne: "\xa4\xa0#,##0.00",
    "ne-IN": "\xa4\xa0#,##0.00",
    nl: "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-AW": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-BE": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-BQ": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-CW": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-SR": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    "nl-SX": "\xa4\xa0#,##0.00;(\xa4\xa0#,##0.00)",
    nmg: "#,##0.00\xa0\xa4",
    nn: "#,##0.00\xa0\xa4",
    nnh: "\xa4\xa0#,##0.00",
    nus: "\xa4#,##0.00;(\xa4#,##0.00)",
    nyn: "\xa4#,##0.00",
    om: "\xa4#,##0.00",
    "om-KE": "\xa4#,##0.00",
    or: "\xa4#,##0.00;(\xa4#,##0.00)",
    os: "\xa4\xa0#,##0.00",
    "os-RU": "\xa4\xa0#,##0.00",
    pa: "\xa4\xa0#,##0.00",
    "pa-Arab": "\xa4\xa0#,##0.00",
    "pa-Guru": "\xa4\xa0#,##0.00",
    pl: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    prg: "\xa4\xa0#,##0.00",
    ps: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ps-PK": "\xa4#,##0.00;(\xa4#,##0.00)",
    pt: "\xa4\xa0#,##0.00",
    "pt-AO": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-CH": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-CV": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-GQ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-GW": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-LU": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-MO": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-MZ": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-PT": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-ST": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "pt-TL": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    qu: "\xa4\xa0#,##0.00",
    "qu-BO": "\xa4\xa0#,##0.00",
    "qu-EC": "\xa4\xa0#,##0.00",
    rm: "#,##0.00\xa0\xa4",
    rn: "#,##0.00\xa4",
    ro: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "ro-MD": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    rof: "\xa4#,##0.00",
    root: "\xa4\xa0#,##0.00",
    ru: "#,##0.00\xa0\xa4",
    "ru-BY": "#,##0.00\xa0\xa4",
    "ru-KG": "#,##0.00\xa0\xa4",
    "ru-KZ": "#,##0.00\xa0\xa4",
    "ru-MD": "#,##0.00\xa0\xa4",
    "ru-UA": "#,##0.00\xa0\xa4",
    rw: "\xa4\xa0#,##0.00",
    rwk: "#,##0.00\xa4",
    sah: "#,##0.00\xa0\xa4",
    saq: "\xa4#,##0.00;(\xa4#,##0.00)",
    sbp: "#,##0.00\xa4",
    sd: "\xa4\xa0#,##0.00",
    se: "#,##0.00\xa0\xa4",
    "se-FI": "#,##0.00\xa0\xa4",
    "se-SE": "#,##0.00\xa0\xa4",
    seh: "#,##0.00\xa4",
    ses: "#,##0.00\xa4",
    sg: "\xa4#,##0.00;\xa4-#,##0.00",
    shi: "#,##0.00\xa4",
    "shi-Latn": "#,##0.00\xa4",
    "shi-Tfng": "#,##0.00\xa4",
    si: "\xa4#,##0.00;(\xa4#,##0.00)",
    sk: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    sl: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    smn: "#,##0.00\xa0\xa4",
    sn: "\xa4#,##0.00;(\xa4#,##0.00)",
    so: "\xa4#,##0.00;(\xa4#,##0.00)",
    "so-DJ": "\xa4#,##0.00;(\xa4#,##0.00)",
    "so-ET": "\xa4#,##0.00;(\xa4#,##0.00)",
    "so-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
    sq: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sq-MK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sq-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    sr: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Cyrl": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Cyrl-BA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Cyrl-ME": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Cyrl-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Latn": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Latn-BA": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Latn-ME": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    "sr-Latn-XK": "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    sv: "#,##0.00\xa0\xa4",
    "sv-AX": "#,##0.00\xa0\xa4",
    "sv-FI": "#,##0.00\xa0\xa4",
    sw: "\xa4\xa0#,##0.00",
    "sw-CD": "\xa4\xa0#,##0.00",
    "sw-KE": "\xa4\xa0#,##0.00",
    "sw-UG": "\xa4\xa0#,##0.00",
    ta: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ta-LK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ta-MY": "\xa4#,##0.00;(\xa4#,##0.00)",
    "ta-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
    te: "\xa4#,##0.00;(\xa4#,##0.00)",
    teo: "\xa4#,##0.00;(\xa4#,##0.00)",
    "teo-KE": "\xa4#,##0.00;(\xa4#,##0.00)",
    tg: "#,##0.00\xa0\xa4",
    th: "\xa4#,##0.00;(\xa4#,##0.00)",
    ti: "\xa4#,##0.00",
    "ti-ER": "\xa4#,##0.00",
    tk: "#,##0.00\xa0\xa4",
    to: "\xa4\xa0#,##0.00",
    tr: "\xa4#,##0.00;(\xa4#,##0.00)",
    "tr-CY": "\xa4#,##0.00;(\xa4#,##0.00)",
    tt: "#,##0.00\xa0\xa4",
    twq: "#,##0.00\xa4",
    tzm: "#,##0.00\xa0\xa4",
    ug: "\xa4#,##0.00;(\xa4#,##0.00)",
    uk: "#,##0.00\xa0\xa4",
    ur: "\xa4#,##0.00;(\xa4#,##0.00)",
    "ur-IN": "\xa4#,##0.00;(\xa4#,##0.00)",
    uz: "#,##0.00\xa0\xa4",
    "uz-Arab": "\xa4\xa0#,##0.00",
    "uz-Cyrl": "#,##0.00\xa0\xa4",
    "uz-Latn": "#,##0.00\xa0\xa4",
    vai: "\xa4#,##0.00;(\xa4#,##0.00)",
    "vai-Latn": "\xa4#,##0.00;(\xa4#,##0.00)",
    "vai-Vaii": "\xa4#,##0.00;(\xa4#,##0.00)",
    vi: "#,##0.00\xa0\xa4",
    vo: "\xa4\xa0#,##0.00",
    vun: "\xa4#,##0.00",
    wae: "\xa4\xa0#,##0.00",
    wo: "\xa4\xa0#,##0.00",
    xh: "\xa4#,##0.00",
    xog: "#,##0.00\xa0\xa4",
    yav: "#,##0.00\xa0\xa4;(#,##0.00\xa0\xa4)",
    yi: "\xa4\xa0#,##0.00",
    yo: "\xa4#,##0.00;(\xa4#,##0.00)",
    "yo-BJ": "\xa4#,##0.00;(\xa4#,##0.00)",
    yue: "\xa4#,##0.00;(\xa4#,##0.00)",
    "yue-Hans": "\xa4#,##0.00;(\xa4#,##0.00)",
    "yue-Hant": "\xa4#,##0.00;(\xa4#,##0.00)",
    zgh: "#,##0.00\xa4",
    zh: "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hans": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hans-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hans-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hans-SG": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hant": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hant-HK": "\xa4#,##0.00;(\xa4#,##0.00)",
    "zh-Hant-MO": "\xa4#,##0.00;(\xa4#,##0.00)",
    zu: "\xa4#,##0.00;(\xa4#,##0.00)"
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/message.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _dependency_injector = __webpack_require__(19);
var _dependency_injector2 = _interopRequireDefault(_dependency_injector);
var _extend = __webpack_require__(2);
var _iterator = __webpack_require__(4);
var _string = __webpack_require__(42);
var _inflector = __webpack_require__(32);
var _core = __webpack_require__(50);
var _core2 = _interopRequireDefault(_core);
var _default_messages = __webpack_require__(85);
var _default_messages2 = _interopRequireDefault(_default_messages);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var baseDictionary = (0, _extend.extend)(true, {}, _default_messages2.default);
var getDataByLocale = function(localeData, locale) {
    return localeData[locale] || {}
};
var newMessages = {};
var messageLocalization = (0, _dependency_injector2.default)({
    engine: function() {
        return "base"
    },
    _dictionary: baseDictionary,
    load: function(messages) {
        (0, _extend.extend)(true, this._dictionary, messages)
    },
    _localizablePrefix: "@",
    setup: function(localizablePrefix) {
        this._localizablePrefix = localizablePrefix
    },
    localizeString: function(text) {
        var that = this;
        var regex = new RegExp("(^|[^a-zA-Z_0-9" + that._localizablePrefix + "-]+)(" + that._localizablePrefix + "{1,2})([a-zA-Z_0-9-]+)", "g");
        var escapeString = that._localizablePrefix + that._localizablePrefix;
        return text.replace(regex, function(str, prefix, escape, localizationKey) {
            var defaultResult = that._localizablePrefix + localizationKey;
            var result;
            if (escape !== escapeString) {
                result = that.format(localizationKey)
            }
            if (!result) {
                newMessages[localizationKey] = (0, _inflector.humanize)(localizationKey)
            }
            return prefix + (result || defaultResult)
        })
    },
    localizeNode: function(node) {
        var that = this;
        (0, _renderer2.default)(node).each(function(index, nodeItem) {
            if (!nodeItem.nodeType) {
                return
            }
            if (3 === nodeItem.nodeType) {
                nodeItem.nodeValue = that.localizeString(nodeItem.nodeValue)
            } else {
                if (!(0, _renderer2.default)(nodeItem).is("iframe")) {
                    (0, _iterator.each)(nodeItem.attributes || [], function(index, attr) {
                        if ("string" === typeof attr.value) {
                            var localizedValue = that.localizeString(attr.value);
                            if (attr.value !== localizedValue) {
                                attr.value = localizedValue
                            }
                        }
                    });
                    (0, _renderer2.default)(nodeItem).contents().each(function(index, node) {
                        that.localizeNode(node)
                    })
                }
            }
        })
    },
    getMessagesByLocales: function() {
        return this._dictionary
    },
    getDictionary: function(onlyNew) {
        if (onlyNew) {
            return newMessages
        }
        return (0, _extend.extend)({}, newMessages, this.getMessagesByLocales()[_core2.default.locale()])
    },
    getFormatter: function(key) {
        return this._getFormatterBase(key) || this._getFormatterBase(key, "en")
    },
    _getFormatterBase: function(key, locale) {
        var _this = this;
        var message = _core2.default.getValueByClosestLocale(function(locale) {
            return getDataByLocale(_this._dictionary, locale)[key]
        });
        if (message) {
            return function() {
                var args = 1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0].slice(0) : Array.prototype.slice.call(arguments, 0);
                args.unshift(message);
                return _string.format.apply(this, args)
            }
        }
    },
    format: function(key) {
        var formatter = this.getFormatter(key);
        var values = Array.prototype.slice.call(arguments, 1);
        return formatter && formatter.apply(this, values) || ""
    }
});
module.exports = messageLocalization;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (localization/default_messages.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

module.exports = {
    en: {
        Yes: "Yes",
        No: "No",
        Cancel: "Cancel",
        Clear: "Clear",
        Done: "Done",
        Loading: "Loading...",
        Select: "Select...",
        Search: "Search",
        Back: "Back",
        OK: "OK",
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
        "dxPivotGrid-sortColumnBySummary": 'Sort "{0}" by This Column',
        "dxPivotGrid-sortRowBySummary": 'Sort "{0}" by This Row',
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


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (ui/widget/ui.widget.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _action = __webpack_require__(36);
var _action2 = _interopRequireDefault(_action);
var _dom_component = __webpack_require__(87);
var _dom_component2 = _interopRequireDefault(_dom_component);
var _short = __webpack_require__(38);
var _common = __webpack_require__(8);
var _iterator = __webpack_require__(4);
var _extend2 = __webpack_require__(2);
var _selectors = __webpack_require__(54);
var _array = __webpack_require__(14);
var _utils = __webpack_require__(13);
var _type = __webpack_require__(1);
__webpack_require__(100);
__webpack_require__(107);
__webpack_require__(108);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        obj[key] = value
    }
    return obj
}

function setAttribute(name, value, target) {
    name = "role" === name || "id" === name ? name : "aria-".concat(name);
    value = (0, _type.isDefined)(value) ? value.toString() : null;
    target.attr(name, value)
}
var Widget = _dom_component2.default.inherit({
    _feedbackHideTimeout: 400,
    _feedbackShowTimeout: 30,
    _supportedKeys: function() {
        return {}
    },
    _getDefaultOptions: function() {
        return (0, _extend2.extend)(this.callBase(), {
            hoveredElement: null,
            isActive: false,
            disabled: false,
            visible: true,
            hint: void 0,
            activeStateEnabled: false,
            onContentReady: null,
            hoverStateEnabled: false,
            focusStateEnabled: false,
            tabIndex: 0,
            accessKey: null,
            onFocusIn: null,
            onFocusOut: null,
            onKeyboardHandled: null,
            ignoreParentReadOnly: false
        })
    },
    _init: function() {
        this.callBase();
        this._initContentReadyAction()
    },
    _innerWidgetOptionChanged: function(innerWidget, args) {
        var options = Widget.getOptionsFromContainer(args);
        innerWidget && innerWidget.option(options);
        this._options.cache(args.name, options)
    },
    _bindInnerWidgetOptions: function(innerWidget, optionsContainer) {
        var _this = this;
        var syncOptions = function() {
            return _this._options.silent(optionsContainer, (0, _extend2.extend)({}, innerWidget.option()))
        };
        syncOptions();
        innerWidget.on("optionChanged", syncOptions)
    },
    _getAriaTarget: function() {
        return this._focusTarget()
    },
    _initContentReadyAction: function() {
        this._contentReadyAction = this._createActionByOption("onContentReady", {
            excludeValidators: ["disabled", "readOnly"]
        })
    },
    _initMarkup: function() {
        var _this$option = this.option(),
            disabled = _this$option.disabled,
            visible = _this$option.visible;
        this.$element().addClass("dx-widget");
        this._toggleDisabledState(disabled);
        this._toggleVisibility(visible);
        this._renderHint();
        this._isFocusable() && this._renderFocusTarget();
        this.callBase()
    },
    _render: function() {
        this.callBase();
        this._renderContent();
        this._renderFocusState();
        this._attachFeedbackEvents();
        this._attachHoverEvents();
        this._toggleIndependentState()
    },
    _renderHint: function() {
        var _this$option2 = this.option(),
            hint = _this$option2.hint;
        this.$element().attr("title", hint || null)
    },
    _renderContent: function() {
        var _this2 = this;
        (0, _common.deferRender)(function() {
            return !_this2._disposed ? _this2._renderContentImpl() : void 0
        }).done(function() {
            return !_this2._disposed ? _this2._fireContentReadyAction() : void 0
        })
    },
    _renderContentImpl: _common.noop,
    _fireContentReadyAction: (0, _common.deferRenderer)(function() {
        return this._contentReadyAction()
    }),
    _dispose: function() {
        this._contentReadyAction = null;
        this._detachKeyboardEvents();
        this.callBase()
    },
    _resetActiveState: function() {
        this._toggleActiveState(this._eventBindingTarget(), false)
    },
    _clean: function() {
        this._cleanFocusState();
        this._resetActiveState();
        this.callBase();
        this.$element().empty()
    },
    _toggleVisibility: function(visible) {
        this.$element().toggleClass("dx-state-invisible", !visible);
        this.setAria("hidden", !visible || void 0)
    },
    _renderFocusState: function() {
        this._attachKeyboardEvents();
        if (this._isFocusable()) {
            this._renderFocusTarget();
            this._attachFocusEvents();
            this._renderAccessKey()
        }
    },
    _renderAccessKey: function() {
        var _this3 = this;
        var $el = this._focusTarget();
        var _this$option3 = this.option(),
            accessKey = _this$option3.accessKey;
        var namespace = "UIFeedback";
        $el.attr("accesskey", accessKey);
        _short.dxClick.off($el, {
            namespace: namespace
        });
        accessKey && _short.dxClick.on($el, function(e) {
            if ((0, _utils.isFakeClickEvent)(e)) {
                e.stopImmediatePropagation();
                _this3.focus()
            }
        }, {
            namespace: namespace
        })
    },
    _isFocusable: function() {
        var _this$option4 = this.option(),
            focusStateEnabled = _this$option4.focusStateEnabled,
            disabled = _this$option4.disabled;
        return focusStateEnabled && !disabled
    },
    _eventBindingTarget: function() {
        return this.$element()
    },
    _focusTarget: function() {
        return this._getActiveElement()
    },
    _getActiveElement: function() {
        var activeElement = this._eventBindingTarget();
        if (this._activeStateUnit) {
            return activeElement.find(this._activeStateUnit).not(".dx-state-disabled")
        }
        return activeElement
    },
    _renderFocusTarget: function() {
        var _this$option5 = this.option(),
            tabIndex = _this$option5.tabIndex;
        this._focusTarget().attr("tabIndex", tabIndex)
    },
    _keyboardEventBindingTarget: function() {
        return this._eventBindingTarget()
    },
    _refreshFocusEvent: function() {
        this._detachFocusEvents();
        this._attachFocusEvents()
    },
    _focusEventTarget: function() {
        return this._focusTarget()
    },
    _focusInHandler: function(event) {
        var _this4 = this;
        if (!event.isDefaultPrevented()) {
            this._createActionByOption("onFocusIn", {
                beforeExecute: function() {
                    return _this4._updateFocusState(event, true)
                },
                excludeValidators: ["readOnly"]
            })({
                event: event
            })
        }
    },
    _focusOutHandler: function(event) {
        var _this5 = this;
        if (!event.isDefaultPrevented()) {
            this._createActionByOption("onFocusOut", {
                beforeExecute: function() {
                    return _this5._updateFocusState(event, false)
                },
                excludeValidators: ["readOnly", "disabled"]
            })({
                event: event
            })
        }
    },
    _updateFocusState: function(_ref, isFocused) {
        var target = _ref.target;
        if ((0, _array.inArray)(target, this._focusTarget()) !== -1) {
            this._toggleFocusClass(isFocused, (0, _renderer2.default)(target))
        }
    },
    _toggleFocusClass: function(isFocused, $element) {
        var $focusTarget = $element && $element.length ? $element : this._focusTarget();
        $focusTarget.toggleClass("dx-state-focused", isFocused)
    },
    _hasFocusClass: function(element) {
        var $focusTarget = (0, _renderer2.default)(element || this._focusTarget());
        return $focusTarget.hasClass("dx-state-focused")
    },
    _isFocused: function() {
        return this._hasFocusClass()
    },
    _getKeyboardListeners: function() {
        return []
    },
    _attachKeyboardEvents: function() {
        var _this6 = this;
        this._detachKeyboardEvents();
        var _this$option6 = this.option(),
            focusStateEnabled = _this$option6.focusStateEnabled,
            onKeyboardHandled = _this$option6.onKeyboardHandled;
        var hasChildListeners = this._getKeyboardListeners().length;
        var hasKeyboardEventHandler = !!onKeyboardHandled;
        var shouldAttach = focusStateEnabled || hasChildListeners || hasKeyboardEventHandler;
        if (shouldAttach) {
            this._keyboardListenerId = _short.keyboard.on(this._keyboardEventBindingTarget(), this._focusTarget(), function(opts) {
                return _this6._keyboardHandler(opts)
            })
        }
    },
    _keyboardHandler: function(options, onlyChildProcessing) {
        if (!onlyChildProcessing) {
            var originalEvent = options.originalEvent,
                keyName = options.keyName,
                which = options.which;
            var keys = this._supportedKeys(originalEvent);
            var func = keys[keyName] || keys[which];
            if (void 0 !== func) {
                var handler = func.bind(this);
                var result = handler(originalEvent, options);
                if (!result) {
                    return false
                }
            }
        }
        var keyboardListeners = this._getKeyboardListeners();
        var _this$option7 = this.option(),
            onKeyboardHandled = _this$option7.onKeyboardHandled;
        keyboardListeners.forEach(function(listener) {
            return listener && listener._keyboardHandler(options)
        });
        onKeyboardHandled && onKeyboardHandled(options);
        return true
    },
    _refreshFocusState: function() {
        this._cleanFocusState();
        this._renderFocusState()
    },
    _cleanFocusState: function() {
        var $element = this._focusTarget();
        $element.removeAttr("tabIndex");
        this._toggleFocusClass(false);
        this._detachFocusEvents();
        this._detachKeyboardEvents()
    },
    _detachKeyboardEvents: function() {
        _short.keyboard.off(this._keyboardListenerId);
        this._keyboardListenerId = null
    },
    _attachHoverEvents: function() {
        var _this7 = this;
        var _this$option8 = this.option(),
            hoverStateEnabled = _this$option8.hoverStateEnabled;
        var selector = this._activeStateUnit;
        var namespace = "UIFeedback";
        var $el = this._eventBindingTarget();
        _short.hover.off($el, {
            selector: selector,
            namespace: namespace
        });
        if (hoverStateEnabled) {
            _short.hover.on($el, new _action2.default(function(_ref2) {
                var event = _ref2.event,
                    element = _ref2.element;
                _this7._hoverStartHandler(event);
                _this7.option("hoveredElement", (0, _renderer2.default)(element))
            }, {
                excludeValidators: ["readOnly"]
            }), function(event) {
                _this7.option("hoveredElement", null);
                _this7._hoverEndHandler(event)
            }, {
                selector: selector,
                namespace: namespace
            })
        }
    },
    _attachFeedbackEvents: function() {
        var _this8 = this;
        var _this$option9 = this.option(),
            activeStateEnabled = _this$option9.activeStateEnabled;
        var selector = this._activeStateUnit;
        var namespace = "UIFeedback";
        var $el = this._eventBindingTarget();
        _short.active.off($el, {
            namespace: namespace,
            selector: selector
        });
        if (activeStateEnabled) {
            _short.active.on($el, new _action2.default(function(_ref3) {
                var event = _ref3.event,
                    element = _ref3.element;
                return _this8._toggleActiveState((0, _renderer2.default)(element), true, event)
            }), new _action2.default(function(_ref4) {
                var event = _ref4.event,
                    element = _ref4.element;
                return _this8._toggleActiveState((0, _renderer2.default)(element), false, event)
            }, {
                excludeValidators: ["disabled", "readOnly"]
            }), {
                showTimeout: this._feedbackShowTimeout,
                hideTimeout: this._feedbackHideTimeout,
                selector: selector,
                namespace: namespace
            })
        }
    },
    _detachFocusEvents: function() {
        var $el = this._focusEventTarget();
        _short.focus.off($el, {
            namespace: "".concat(this.NAME, "Focus")
        })
    },
    _attachFocusEvents: function() {
        var _this9 = this;
        var $el = this._focusEventTarget();
        _short.focus.on($el, function(e) {
            return _this9._focusInHandler(e)
        }, function(e) {
            return _this9._focusOutHandler(e)
        }, {
            namespace: "".concat(this.NAME, "Focus"),
            isFocusable: function(el) {
                return (0, _renderer2.default)(el).is(_selectors.focusable)
            }
        })
    },
    _hoverStartHandler: _common.noop,
    _hoverEndHandler: _common.noop,
    _toggleActiveState: function($element, value) {
        this.option("isActive", value);
        $element.toggleClass("dx-state-active", value)
    },
    _updatedHover: function() {
        var hoveredElement = this._options.silent("hoveredElement");
        this._hover(hoveredElement, hoveredElement)
    },
    _findHoverTarget: function($el) {
        return $el && $el.closest(this._activeStateUnit || this._eventBindingTarget())
    },
    _hover: function($el, $previous) {
        var _this$option10 = this.option(),
            hoverStateEnabled = _this$option10.hoverStateEnabled,
            disabled = _this$option10.disabled,
            isActive = _this$option10.isActive;
        $previous = this._findHoverTarget($previous);
        $previous && $previous.toggleClass("dx-state-hover", false);
        if ($el && hoverStateEnabled && !disabled && !isActive) {
            var newHoveredElement = this._findHoverTarget($el);
            newHoveredElement && newHoveredElement.toggleClass("dx-state-hover", true)
        }
    },
    _toggleDisabledState: function(value) {
        this.$element().toggleClass("dx-state-disabled", Boolean(value));
        this.setAria("disabled", value || void 0)
    },
    _toggleIndependentState: function() {
        this.$element().toggleClass("dx-state-independent", this.option("ignoreParentReadOnly"))
    },
    _setWidgetOption: function(widgetName, args) {
        var _this10 = this;
        if (!this[widgetName]) {
            return
        }
        if ((0, _type.isPlainObject)(args[0])) {
            (0, _iterator.each)(args[0], function(option, value) {
                return _this10._setWidgetOption(widgetName, [option, value])
            });
            return
        }
        var optionName = args[0];
        var value = args[1];
        if (1 === args.length) {
            value = this.option(optionName)
        }
        var widgetOptionMap = this["".concat(widgetName, "OptionMap")];
        this[widgetName].option(widgetOptionMap ? widgetOptionMap(optionName) : optionName, value)
    },
    _optionChanged: function(args) {
        var name = args.name,
            value = args.value,
            previousValue = args.previousValue;
        switch (name) {
            case "disabled":
                this._toggleDisabledState(value);
                this._updatedHover();
                this._refreshFocusState();
                break;
            case "hint":
                this._renderHint();
                break;
            case "ignoreParentReadOnly":
                this._toggleIndependentState();
                break;
            case "activeStateEnabled":
                this._attachFeedbackEvents();
                break;
            case "hoverStateEnabled":
                this._attachHoverEvents();
                this._updatedHover();
                break;
            case "tabIndex":
            case "focusStateEnabled":
                this._refreshFocusState();
                break;
            case "onFocusIn":
            case "onFocusOut":
                break;
            case "accessKey":
                this._renderAccessKey();
                break;
            case "hoveredElement":
                this._hover(value, previousValue);
                break;
            case "isActive":
                this._updatedHover();
                break;
            case "visible":
                this._toggleVisibility(value);
                if (this._isVisibilityChangeSupported()) {
                    this._checkVisibilityChanged(value ? "shown" : "hiding")
                }
                break;
            case "onKeyboardHandled":
                this._attachKeyboardEvents();
                break;
            case "onContentReady":
                this._initContentReadyAction();
                break;
            default:
                this.callBase(args)
        }
    },
    _isVisible: function() {
        var _this$option11 = this.option(),
            visible = _this$option11.visible;
        return this.callBase() && visible
    },
    beginUpdate: function() {
        this._ready(false);
        this.callBase()
    },
    endUpdate: function() {
        this.callBase();
        if (this._initialized) {
            this._ready(true)
        }
    },
    _ready: function(value) {
        if (0 === arguments.length) {
            return this._isReady
        }
        this._isReady = value
    },
    setAria: function() {
        if (!(0, _type.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0])) {
            setAttribute(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], (arguments.length <= 2 ? void 0 : arguments[2]) || this._getAriaTarget())
        } else {
            var target = (arguments.length <= 1 ? void 0 : arguments[1]) || this._getAriaTarget();
            (0, _iterator.each)(arguments.length <= 0 ? void 0 : arguments[0], function(name, value) {
                return setAttribute(name, value, target)
            })
        }
    },
    isReady: function() {
        return this._ready()
    },
    repaint: function() {
        this._refresh()
    },
    focus: function() {
        _short.focus.trigger(this._focusTarget())
    },
    registerKeyHandler: function(key, handler) {
        var currentKeys = this._supportedKeys();
        this._supportedKeys = function() {
            return (0, _extend2.extend)(currentKeys, _defineProperty({}, key, handler))
        }
    }
});
Widget.getOptionsFromContainer = function(_ref5) {
    var name = _ref5.name,
        fullName = _ref5.fullName,
        value = _ref5.value;
    var options = {};
    if (name === fullName) {
        options = value
    } else {
        var option = fullName.split(".").pop();
        options[option] = value
    }
    return options
};
module.exports = Widget;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/dom_component.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _resize_callbacks = __webpack_require__(45);
var _resize_callbacks2 = _interopRequireDefault(_resize_callbacks);
var _component = __webpack_require__(88);
var _component2 = _interopRequireDefault(_component);
var _template_manager = __webpack_require__(93);
var _template_manager2 = _interopRequireDefault(_template_manager);
var _public_component = __webpack_require__(35);
var _element_data = __webpack_require__(20);
var _iterator = __webpack_require__(4);
var _extend = __webpack_require__(2);
var _dom = __webpack_require__(16);
var _common = __webpack_require__(8);
var _array = __webpack_require__(14);
var _type = __webpack_require__(1);
var _window = __webpack_require__(7);
var _short = __webpack_require__(38);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var abstract = _component2.default.abstract;
var DOMComponent = _component2.default.inherit({
    _getDefaultOptions: function() {
        return (0, _extend.extend)(this.callBase(), {
            width: void 0,
            height: void 0,
            rtlEnabled: (0, _config2.default)().rtlEnabled,
            elementAttr: {},
            disabled: false,
            integrationOptions: {}
        }, this._useTemplates() ? _template_manager2.default.createDefaultOptions() : {})
    },
    ctor: function(element, options) {
        this._createElement(element);
        (0, _public_component.attachInstanceToElement)(this._$element, this, this._dispose);
        this.callBase(options)
    },
    _createElement: function(element) {
        this._$element = (0, _renderer2.default)(element)
    },
    _getSynchronizableOptionsForCreateComponent: function() {
        return ["rtlEnabled", "disabled", "templatesRenderAsynchronously"]
    },
    _visibilityChanged: abstract,
    _dimensionChanged: abstract,
    _init: function() {
        this.callBase();
        this._attachWindowResizeCallback();
        this._initTemplateManager()
    },
    _setOptionsByDevice: function(instanceCustomRules) {
        this.callBase([].concat(this.constructor._classCustomRules || [], instanceCustomRules || []))
    },
    _isInitialOptionValue: function(name) {
        var isCustomOption = this.constructor._classCustomRules && Object.prototype.hasOwnProperty.call(this._convertRulesToOptions(this.constructor._classCustomRules), name);
        return !isCustomOption && this.callBase(name)
    },
    _attachWindowResizeCallback: function() {
        if (this._isDimensionChangeSupported()) {
            var windowResizeCallBack = this._windowResizeCallBack = this._dimensionChanged.bind(this);
            _resize_callbacks2.default.add(windowResizeCallBack)
        }
    },
    _isDimensionChangeSupported: function() {
        return this._dimensionChanged !== abstract
    },
    _renderComponent: function() {
        this._initMarkup();
        (0, _window.hasWindow)() && this._render()
    },
    _initMarkup: function() {
        var _ref = this.option() || {},
            rtlEnabled = _ref.rtlEnabled;
        this._renderElementAttributes();
        this._toggleRTLDirection(rtlEnabled);
        this._renderVisibilityChange();
        this._renderDimensions()
    },
    _render: function() {
        this._attachVisibilityChangeHandlers()
    },
    _renderElementAttributes: function() {
        var _ref2 = this.option() || {},
            elementAttr = _ref2.elementAttr;
        var attributes = (0, _extend.extend)({}, elementAttr);
        var classNames = attributes.class;
        delete attributes.class;
        this.$element().attr(attributes).addClass(classNames)
    },
    _renderVisibilityChange: function() {
        if (this._isDimensionChangeSupported()) {
            this._attachDimensionChangeHandlers()
        }
        if (this._isVisibilityChangeSupported()) {
            var $element = this.$element();
            $element.addClass("dx-visibility-change-handler")
        }
    },
    _renderDimensions: function() {
        var $element = this.$element();
        var element = $element.get(0);
        var width = this._getOptionValue("width", element);
        var height = this._getOptionValue("height", element);
        if (this._isCssUpdateRequired(element, height, width)) {
            $element.css({
                width: null === width ? "" : width,
                height: null === height ? "" : height
            })
        }
    },
    _isCssUpdateRequired: function(element, height, width) {
        return !!((0, _type.isDefined)(width) || (0, _type.isDefined)(height) || element.style.width || element.style.height)
    },
    _attachDimensionChangeHandlers: function() {
        var _this = this;
        var $el = this.$element();
        var namespace = "".concat(this.NAME, "VisibilityChange");
        _short.resize.off($el, {
            namespace: namespace
        });
        _short.resize.on($el, function() {
            return _this._dimensionChanged()
        }, {
            namespace: namespace
        })
    },
    _attachVisibilityChangeHandlers: function() {
        var _this2 = this;
        if (this._isVisibilityChangeSupported()) {
            var $el = this.$element();
            var namespace = "".concat(this.NAME, "VisibilityChange");
            this._isHidden = !this._isVisible();
            _short.visibility.off($el, {
                namespace: namespace
            });
            _short.visibility.on($el, function() {
                return _this2._checkVisibilityChanged("shown")
            }, function() {
                return _this2._checkVisibilityChanged("hiding")
            }, {
                namespace: namespace
            })
        }
    },
    _isVisible: function() {
        var $element = this.$element();
        return $element.is(":visible")
    },
    _checkVisibilityChanged: function(action) {
        var isVisible = this._isVisible();
        if (isVisible) {
            if ("hiding" === action && !this._isHidden) {
                this._visibilityChanged(false);
                this._isHidden = true
            } else {
                if ("shown" === action && this._isHidden) {
                    this._isHidden = false;
                    this._visibilityChanged(true)
                }
            }
        }
    },
    _isVisibilityChangeSupported: function() {
        return this._visibilityChanged !== abstract && (0, _window.hasWindow)()
    },
    _clean: _common.noop,
    _modelByElement: function() {
        var _this$option = this.option(),
            modelByElement = _this$option.modelByElement;
        var $element = this.$element();
        return modelByElement ? modelByElement($element) : void 0
    },
    _invalidate: function() {
        if (this._isUpdateAllowed()) {
            throw _errors2.default.Error("E0007")
        }
        this._requireRefresh = true
    },
    _refresh: function() {
        this._clean();
        this._renderComponent()
    },
    _dispose: function() {
        this._templateManager && this._templateManager.dispose();
        this.callBase();
        this._clean();
        this._detachWindowResizeCallback()
    },
    _detachWindowResizeCallback: function() {
        if (this._isDimensionChangeSupported()) {
            _resize_callbacks2.default.remove(this._windowResizeCallBack)
        }
    },
    _toggleRTLDirection: function(rtl) {
        var $element = this.$element();
        $element.toggleClass("dx-rtl", rtl)
    },
    _createComponent: function(element, component) {
        var _this3 = this;
        var config = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var synchronizableOptions = (0, _common.grep)(this._getSynchronizableOptionsForCreateComponent(), function(value) {
            return !(value in config)
        });
        var _this$option2 = this.option(),
            integrationOptions = _this$option2.integrationOptions;
        var _this$option3 = this.option(),
            nestedComponentOptions = _this$option3.nestedComponentOptions;
        nestedComponentOptions = nestedComponentOptions || _common.noop;
        var nestedComponentConfig = (0, _extend.extend)({
            integrationOptions: integrationOptions
        }, nestedComponentOptions(this));
        synchronizableOptions.forEach(function(optionName) {
            return nestedComponentConfig[optionName] = _this3.option(optionName)
        });
        this._extendConfig(config, nestedComponentConfig);
        var instance = void 0;
        if ((0, _type.isString)(component)) {
            var $element = (0, _renderer2.default)(element)[component](config);
            instance = $element[component]("instance")
        } else {
            if (element) {
                instance = component.getInstance(element);
                if (instance) {
                    instance.option(config)
                } else {
                    instance = new component(element, config)
                }
            }
        }
        if (instance) {
            var optionChangedHandler = function(_ref3) {
                var name = _ref3.name,
                    value = _ref3.value;
                if ((0, _array.inArray)(name, synchronizableOptions) >= 0) {
                    instance.option(name, value)
                }
            };
            this.on("optionChanged", optionChangedHandler);
            instance.on("disposing", function() {
                return _this3.off("optionChanged", optionChangedHandler)
            })
        }
        return instance
    },
    _extendConfig: function(config, extendConfig) {
        (0, _iterator.each)(extendConfig, function(key, value) {
            !Object.prototype.hasOwnProperty.call(config, key) && (config[key] = value)
        })
    },
    _defaultActionConfig: function() {
        var $element = this.$element();
        var context = this._modelByElement($element);
        return (0, _extend.extend)(this.callBase(), {
            context: context
        })
    },
    _defaultActionArgs: function() {
        var $element = this.$element();
        var model = this._modelByElement($element);
        var element = this.element();
        return (0, _extend.extend)(this.callBase(), {
            element: element,
            model: model
        })
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "width":
            case "height":
                this._renderDimensions();
                break;
            case "rtlEnabled":
                this._invalidate();
                break;
            case "elementAttr":
                this._renderElementAttributes();
                break;
            case "disabled":
            case "integrationOptions":
                break;
            default:
                this.callBase(args)
        }
    },
    _removeAttributes: function(element) {
        var attrs = element.attributes;
        for (var i = attrs.length - 1; i >= 0; i--) {
            var attr = attrs[i];
            if (attr) {
                var name = attr.name;
                if (!name.indexOf("aria-") || name.indexOf("dx-") !== -1 || "role" === name || "style" === name || "tabindex" === name) {
                    element.removeAttribute(name)
                }
            }
        }
    },
    _removeClasses: function(element) {
        element.className = element.className.split(" ").filter(function(cssClass) {
            return 0 !== cssClass.lastIndexOf("dx-", 0)
        }).join(" ")
    },
    _updateDOMComponent: function(renderRequired) {
        if (renderRequired) {
            this._renderComponent()
        } else {
            if (this._requireRefresh) {
                this._requireRefresh = false;
                this._refresh()
            }
        }
    },
    endUpdate: function() {
        var renderRequired = this._isInitializingRequired();
        this.callBase();
        this._isUpdateAllowed() && this._updateDOMComponent(renderRequired)
    },
    $element: function() {
        return this._$element
    },
    element: function() {
        var $element = this.$element();
        return (0, _dom.getPublicElement)($element)
    },
    dispose: function() {
        var element = this.$element().get(0);
        (0, _element_data.cleanDataRecursive)(element, true);
        element.textContent = "";
        this._removeAttributes(element);
        this._removeClasses(element)
    },
    resetOption: function(optionName) {
        this.callBase(optionName);
        if ("width" === optionName || "height" === optionName) {
            var initialOption = this.initialOption(optionName);
            !(0, _type.isDefined)(initialOption) && this.$element().css(optionName, "")
        }
    },
    _getAnonymousTemplateName: function() {
        return
    },
    _initTemplateManager: function() {
        if (this._templateManager || !this._useTemplates()) {
            return
        }
        var _this$option4 = this.option(),
            _this$option4$integra = _this$option4.integrationOptions,
            integrationOptions = void 0 === _this$option4$integra ? {} : _this$option4$integra;
        var createTemplate = integrationOptions.createTemplate;
        this._templateManager = new _template_manager2.default(createTemplate, this._getAnonymousTemplateName());
        this._initTemplates()
    },
    _initTemplates: function() {
        var _this4 = this;
        var _this$_templateManage = this._templateManager.extractTemplates(this.$element()),
            templates = _this$_templateManage.templates,
            anonymousTemplateMeta = _this$_templateManage.anonymousTemplateMeta;
        var anonymousTemplate = this.option("integrationOptions.templates.".concat(anonymousTemplateMeta.name));
        templates.forEach(function(_ref4) {
            var name = _ref4.name,
                template = _ref4.template;
            _this4._options.silent("integrationOptions.templates.".concat(name), template)
        });
        if (anonymousTemplateMeta.name && !anonymousTemplate) {
            this._options.silent("integrationOptions.templates.".concat(anonymousTemplateMeta.name), anonymousTemplateMeta.template)
        }
    },
    _getTemplateByOption: function(optionName) {
        return this._getTemplate(this.option(optionName))
    },
    _getTemplate: function(templateSource) {
        var templates = this.option("integrationOptions.templates");
        var isAsyncTemplate = this.option("templatesRenderAsynchronously");
        var skipTemplates = this.option("integrationOptions.skipTemplates");
        return this._templateManager.getTemplate(templateSource, templates, {
            isAsyncTemplate: isAsyncTemplate,
            skipTemplates: skipTemplates
        }, this)
    },
    _saveTemplate: function(name, template) {
        this._setOptionWithoutOptionChange("integrationOptions.templates." + name, this._templateManager._createTemplate(template))
    },
    _useTemplates: function() {
        return true
    }
});
DOMComponent.getInstance = function(element) {
    return (0, _public_component.getInstanceByElement)((0, _renderer2.default)(element), this)
};
DOMComponent.defaultOptions = function(rule) {
    this._classCustomRules = this._classCustomRules || [];
    this._classCustomRules.push(rule)
};
module.exports = DOMComponent;
module.exports.default = module.exports;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/component.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _config = __webpack_require__(17);
var _config2 = _interopRequireDefault(_config);
var _extend = __webpack_require__(2);
var _index = __webpack_require__(89);
var _utils = __webpack_require__(37);
var _class = __webpack_require__(11);
var _class2 = _interopRequireDefault(_class);
var _action = __webpack_require__(36);
var _action2 = _interopRequireDefault(_action);
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);
var _callbacks = __webpack_require__(12);
var _callbacks2 = _interopRequireDefault(_callbacks);
var _events_strategy = __webpack_require__(34);
var _public_component = __webpack_require__(35);
var _public_component2 = _interopRequireDefault(_public_component);
var _postponed_operations = __webpack_require__(92);
var _type = __webpack_require__(1);
var _common = __webpack_require__(8);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var getEventName = function(actionName) {
    return actionName.charAt(2).toLowerCase() + actionName.substr(3)
};
var Component = _class2.default.inherit({
    _setDeprecatedOptions: function() {
        this._deprecatedOptions = {}
    },
    _getDeprecatedOptions: function() {
        return this._deprecatedOptions
    },
    _getDefaultOptions: function() {
        return {
            onInitialized: null,
            onOptionChanged: null,
            onDisposing: null,
            defaultOptionsRules: null
        }
    },
    _defaultOptionsRules: function() {
        return []
    },
    _setOptionsByDevice: function(rules) {
        this._options.applyRules(rules)
    },
    _convertRulesToOptions: function(rules) {
        return (0, _utils.convertRulesToOptions)(rules)
    },
    _isInitialOptionValue: function(name) {
        return this._options.isInitial(name)
    },
    _setOptionsByReference: function() {
        this._optionsByReference = {}
    },
    _getOptionsByReference: function() {
        return this._optionsByReference
    },
    ctor: function() {
        var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var _optionChangedCallbacks = options._optionChangedCallbacks,
            _disposingCallbacks = options._disposingCallbacks;
        this.NAME = _public_component2.default.name(this.constructor);
        this._eventsStrategy = _events_strategy.EventsStrategy.create(this, options.eventsStrategy);
        this._updateLockCount = 0;
        this._optionChangedCallbacks = _optionChangedCallbacks || (0, _callbacks2.default)();
        this._disposingCallbacks = _disposingCallbacks || (0, _callbacks2.default)();
        this.postponedOperations = new _postponed_operations.PostponedOperations;
        this._createOptions(options)
    },
    _createOptions: function(options) {
        var _this = this;
        this.beginUpdate();
        try {
            this._setOptionsByReference();
            this._setDeprecatedOptions();
            this._options = new _index.Options(this._getDefaultOptions(), this._getDefaultOptions(), this._getOptionsByReference(), this._getDeprecatedOptions());
            this._options.onChanging(function(name, previousValue, value) {
                return _this._initialized && _this._optionChanging(name, previousValue, value)
            });
            this._options.onDeprecated(function(option, info) {
                return _this._logDeprecatedOptionWarning(option, info)
            });
            this._options.onChanged(function(name, value, previousValue) {
                return _this._notifyOptionChanged(name, value, previousValue)
            });
            this._options.onStartChange(function() {
                return _this.beginUpdate()
            });
            this._options.onEndChange(function() {
                return _this.endUpdate()
            });
            this._options.addRules(this._defaultOptionsRules());
            if (options && options.onInitializing) {
                options.onInitializing.apply(this, [options])
            }
            this._setOptionsByDevice(options.defaultOptionsRules);
            this._initOptions(options)
        } finally {
            this.endUpdate()
        }
    },
    _initOptions: function(options) {
        this.option(options)
    },
    _init: function() {
        var _this2 = this;
        this._createOptionChangedAction();
        this.on("disposing", function(args) {
            _this2._disposingCallbacks.fireWith(_this2, [args])
        })
    },
    _logDeprecatedOptionWarning: function(option, info) {
        var message = info.message || "Use the '".concat(info.alias, "' option instead");
        _errors2.default.log("W0001", this.NAME, option, info.since, message)
    },
    _logDeprecatedComponentWarning: function(since, alias) {
        _errors2.default.log("W0000", this.NAME, since, "Use the '".concat(alias, "' widget instead"))
    },
    _createOptionChangedAction: function() {
        this._optionChangedAction = this._createActionByOption("onOptionChanged", {
            excludeValidators: ["disabled", "readOnly"]
        })
    },
    _createDisposingAction: function() {
        this._disposingAction = this._createActionByOption("onDisposing", {
            excludeValidators: ["disabled", "readOnly"]
        })
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "onDisposing":
            case "onInitialized":
                break;
            case "onOptionChanged":
                this._createOptionChangedAction();
                break;
            case "defaultOptionsRules":
        }
    },
    _dispose: function() {
        this._optionChangedCallbacks.empty();
        this._createDisposingAction();
        this._disposingAction();
        this._eventsStrategy.dispose();
        this._options.dispose();
        this._disposed = true
    },
    _lockUpdate: function() {
        this._updateLockCount++
    },
    _unlockUpdate: function() {
        this._updateLockCount = Math.max(this._updateLockCount - 1, 0)
    },
    _isUpdateAllowed: function() {
        return 0 === this._updateLockCount
    },
    _isInitializingRequired: function() {
        return !this._initializing && !this._initialized
    },
    _commitUpdate: function() {
        this.postponedOperations.callPostponedOperations();
        this._isInitializingRequired() && this._initializeComponent()
    },
    _initializeComponent: function() {
        this._initializing = true;
        try {
            this._init()
        } finally {
            this._initializing = false;
            this._lockUpdate();
            this._createActionByOption("onInitialized", {
                excludeValidators: ["disabled", "readOnly"]
            })();
            this._unlockUpdate();
            this._initialized = true
        }
    },
    instance: function() {
        return this
    },
    beginUpdate: function() {
        this._lockUpdate()
    },
    endUpdate: function() {
        this._unlockUpdate();
        this._isUpdateAllowed() && this._commitUpdate()
    },
    _optionChanging: _common.noop,
    _notifyOptionChanged: function(option, value, previousValue) {
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
                this._optionChangedCallbacks.fireWith(this, [(0, _extend.extend)(this._defaultActionArgs(), args)]);
                this._optionChangedAction((0, _extend.extend)({}, args));
                if (!this._disposed && this._cancelOptionChange !== args.name) {
                    this._optionChanged(args)
                }
            }
        }
    },
    initialOption: function(name) {
        return this._options.initial(name)
    },
    _defaultActionConfig: function() {
        return {
            context: this,
            component: this
        }
    },
    _defaultActionArgs: function() {
        return {
            component: this
        }
    },
    _createAction: function(actionSource, config) {
        var _this3 = this;
        var action;
        return function(e) {
            if (!(0, _type.isDefined)(e)) {
                e = {}
            }
            if (!(0, _type.isPlainObject)(e)) {
                e = {
                    actionValue: e
                }
            }
            action = action || new _action2.default(actionSource, (0, _extend.extend)(config, _this3._defaultActionConfig()));
            return action.execute.call(action, (0, _extend.extend)(e, _this3._defaultActionArgs()))
        }
    },
    _createActionByOption: function(optionName, config) {
        var _this4 = this;
        var action;
        var eventName;
        var actionFunc;
        var result = function() {
            if (!eventName) {
                config = config || {};
                if ("string" !== typeof optionName) {
                    throw _errors2.default.Error("E0008")
                }
                if (0 === optionName.indexOf("on")) {
                    eventName = getEventName(optionName)
                }
                actionFunc = _this4.option(optionName)
            }
            if (!action && !actionFunc && !config.beforeExecute && !config.afterExecute && !_this4._eventsStrategy.hasEvent(eventName)) {
                return
            }
            if (!action) {
                var beforeExecute = config.beforeExecute;
                config.beforeExecute = function() {
                    for (var _len2 = arguments.length, props = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        props[_key2] = arguments[_key2]
                    }
                    beforeExecute && beforeExecute.apply(_this4, props);
                    _this4._eventsStrategy.fireEvent(eventName, props[0].args)
                };
                action = _this4._createAction(actionFunc, config)
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
            }
            if ((0, _config2.default)().wrapActionsBeforeExecute) {
                var beforeActionExecute = _this4.option("beforeActionExecute") || _common.noop;
                var wrappedAction = beforeActionExecute(_this4, action, config) || action;
                return wrappedAction.apply(_this4, args)
            }
            return action.apply(_this4, args)
        };
        if ((0, _config2.default)().wrapActionsBeforeExecute) {
            return result
        }
        var onActionCreated = this.option("onActionCreated") || _common.noop;
        return onActionCreated(this, result, config) || result
    },
    on: function(eventName, eventHandler) {
        this._eventsStrategy.on(eventName, eventHandler);
        return this
    },
    off: function(eventName, eventHandler) {
        this._eventsStrategy.off(eventName, eventHandler);
        return this
    },
    hasActionSubscription: function(actionName) {
        return !!this._options.silent(actionName) || this._eventsStrategy.hasEvent(getEventName(actionName))
    },
    isOptionDeprecated: function(name) {
        return this._options.isDeprecated(name)
    },
    _setOptionWithoutOptionChange: function(name, value) {
        this._cancelOptionChange = name;
        this.option(name, value);
        this._cancelOptionChange = false
    },
    _getOptionValue: function(name, context) {
        var value = this.option(name);
        if ((0, _type.isFunction)(value)) {
            return value.bind(context)()
        }
        return value
    },
    option: function() {
        var _this$_options;
        return (_this$_options = this._options).option.apply(_this$_options, arguments)
    },
    resetOption: function(name) {
        this.beginUpdate();
        this._options.reset(name);
        this.endUpdate()
    }
});
module.exports = Component;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/options/index.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Options = void 0;
var _type = __webpack_require__(1);
var _common = __webpack_require__(8);
var _option_manager = __webpack_require__(90);
var _object = __webpack_require__(30);
var _utils = __webpack_require__(37);
var _extend = __webpack_require__(2);

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var Options = exports.Options = function() {
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
        this._optionManager.onRelevantNamesPrepared(function(options, name, value, silent) {
            return _this._setRelevantNames(options, name, value, silent)
        });
        this._cachedOptions = {};
        this._rules = []
    }
    _createClass(Options, [{
        key: "_initDeprecatedNames",
        value: function() {
            for (var optionName in this._deprecated) {
                this._deprecatedNames.push(optionName)
            }
        }
    }, {
        key: "_getByRules",
        value: function(rules) {
            rules = Array.isArray(rules) ? this._rules.concat(rules) : this._rules;
            return (0, _utils.convertRulesToOptions)(rules)
        }
    }, {
        key: "_notifyDeprecated",
        value: function(option) {
            var info = this._deprecated[option];
            if (info) {
                this._deprecatedCallback(option, info)
            }
        }
    }, {
        key: "_setRelevantNames",
        value: function(options, name, value, silent) {
            if (name) {
                var normalizedName = this._normalizeName(name, silent);
                if (normalizedName && normalizedName !== name) {
                    this._setField(options, normalizedName, value);
                    this._clearField(options, name)
                }
            }
        }
    }, {
        key: "_setField",
        value: function(options, fullName, value) {
            var fieldName = "";
            var fieldObject = null;
            do {
                fieldName = fieldName ? ".".concat(fieldName) : "";
                fieldName = (0, _utils.getFieldName)(fullName) + fieldName;
                fullName = (0, _utils.getParentName)(fullName);
                fieldObject = fullName ? this._optionManager.get(options, fullName, false) : options
            } while (!fieldObject);
            fieldObject[fieldName] = value
        }
    }, {
        key: "_clearField",
        value: function(options, name) {
            delete options[name];
            var previousFieldName = (0, _utils.getParentName)(name);
            var fieldObject = previousFieldName ? this._optionManager.get(options, previousFieldName, false) : options;
            if (fieldObject) {
                delete fieldObject[(0, _utils.getFieldName)(name)]
            }
        }
    }, {
        key: "_normalizeName",
        value: function(name, silent) {
            if (this._deprecatedNames.length && name) {
                for (var i = 0; i < this._deprecatedNames.length; i++) {
                    if (this._deprecatedNames[i] === name) {
                        var deprecate = this._deprecated[name];
                        if (deprecate) {
                            !silent && this._notifyDeprecated(name);
                            return deprecate.alias || name
                        }
                    }
                }
            }
            return name
        }
    }, {
        key: "addRules",
        value: function(rules) {
            this._rules = rules.concat(this._rules)
        }
    }, {
        key: "applyRules",
        value: function(rules) {
            var options = this._getByRules(rules);
            this.silent(options)
        }
    }, {
        key: "dispose",
        value: function() {
            this._deprecatedCallback = _common.noop;
            this._startChangeCallback = _common.noop;
            this._endChangeCallback = _common.noop;
            this._optionManager.dispose()
        }
    }, {
        key: "onChanging",
        value: function(callBack) {
            this._optionManager.onChanging(callBack)
        }
    }, {
        key: "onChanged",
        value: function(callBack) {
            this._optionManager.onChanged(callBack)
        }
    }, {
        key: "onDeprecated",
        value: function(callBack) {
            this._deprecatedCallback = callBack
        }
    }, {
        key: "onStartChange",
        value: function(callBack) {
            this._startChangeCallback = callBack
        }
    }, {
        key: "onEndChange",
        value: function(callBack) {
            this._endChangeCallback = callBack
        }
    }, {
        key: "isInitial",
        value: function(name) {
            var value = this.silent(name);
            var initialValue = this.initial(name);
            var areFunctions = (0, _type.isFunction)(value) && (0, _type.isFunction)(initialValue);
            return areFunctions ? value.toString() === initialValue.toString() : (0, _common.equalByValue)(value, initialValue)
        }
    }, {
        key: "initial",
        value: function(name) {
            return (0, _utils.getNestedOptionValue)(this._initial, name)
        }
    }, {
        key: "option",
        value: function(options, value) {
            var isGetter = arguments.length < 2 && "object" !== (0, _type.type)(options);
            if (isGetter) {
                return this._optionManager.get(void 0, this._normalizeName(options))
            } else {
                this._startChangeCallback();
                try {
                    this._optionManager.set(options, value)
                } finally {
                    this._endChangeCallback()
                }
            }
        }
    }, {
        key: "silent",
        value: function(options, value) {
            var isGetter = arguments.length < 2 && "object" !== (0, _type.type)(options);
            if (isGetter) {
                return this._optionManager.get(void 0, options, void 0, true)
            } else {
                this._optionManager.set(options, value, void 0, true)
            }
        }
    }, {
        key: "reset",
        value: function(name) {
            var _this2 = this;
            if (name) {
                var fullPath = name.replace(/\[([^\]])\]/g, ".$1").split(".");
                var value = fullPath.reduce(function(value, field) {
                    return value ? value[field] : _this2.initial(field)
                }, null);
                var defaultValue = (0, _type.isObject)(value) ? (0, _object.clone)(value) : value;
                this._optionManager.set(name, defaultValue, false)
            }
        }
    }, {
        key: "getAliasesByName",
        value: function(name) {
            var _this3 = this;
            return Object.keys(this._deprecated).filter(function(aliasName) {
                return name === _this3._deprecated[aliasName].alias
            })
        }
    }, {
        key: "isDeprecated",
        value: function(name) {
            return Object.prototype.hasOwnProperty.call(this._deprecated, name)
        }
    }, {
        key: "cache",
        value: function(name, options) {
            var isGetter = arguments.length < 2;
            if (isGetter) {
                return this._cachedOptions[name]
            } else {
                this._cachedOptions[name] = (0, _extend.extend)(this._cachedOptions[name], options)
            }
        }
    }, {
        key: "_initial",
        set: function(value) {
            this._initialOptions = value
        },
        get: function() {
            if (!this._initialOptions) {
                var rulesOptions = this._getByRules(this.silent("defaultOptionsRules"));
                this._initialOptions = this._default;
                this._optionManager._setByReference(this._initialOptions, rulesOptions)
            }
            return this._initialOptions
        }
    }]);
    return Options
}();


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/options/option_manager.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionManager = void 0;
var _data = __webpack_require__(26);
var _common = __webpack_require__(8);
var _comparator = __webpack_require__(91);
var _extend = __webpack_require__(2);
var _type = __webpack_require__(1);
var _utils = __webpack_require__(37);

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var cachedGetters = {};
var cachedSetters = {};
var OptionManager = exports.OptionManager = function() {
    function OptionManager(options, optionsByReference) {
        _classCallCheck(this, OptionManager);
        this._options = options;
        this._optionsByReference = optionsByReference;
        this._changingCallback;
        this._changedCallback;
        this._namePreparedCallbacks
    }
    _createClass(OptionManager, [{
        key: "_setByReference",
        value: function(options, rulesOptions) {
            (0, _extend.extend)(true, options, rulesOptions);
            for (var fieldName in this._optionsByReference) {
                if (Object.prototype.hasOwnProperty.call(rulesOptions, fieldName)) {
                    options[fieldName] = rulesOptions[fieldName]
                }
            }
        }
    }, {
        key: "_setPreparedValue",
        value: function(name, value, merge, silent) {
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
                !silent && this._changedCallback(name, value, previousValue)
            }
        }
    }, {
        key: "_prepareRelevantNames",
        value: function(options, name, value, silent) {
            if ((0, _type.isPlainObject)(value)) {
                for (var valueName in value) {
                    this._prepareRelevantNames(options, "".concat(name, ".").concat(valueName), value[valueName])
                }
            }
            this._namePreparedCallbacks(options, name, value, silent)
        }
    }, {
        key: "get",
        value: function() {
            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._options;
            var name = arguments.length > 1 ? arguments[1] : void 0;
            var unwrapObservables = arguments.length > 2 ? arguments[2] : void 0;
            cachedGetters[name] = cachedGetters[name] || (0, _data.compileGetter)(name);
            return cachedGetters[name](options, {
                functionsAsIs: true,
                unwrapObservables: unwrapObservables
            })
        }
    }, {
        key: "set",
        value: function(options, value, merge, silent) {
            options = (0, _utils.normalizeOptions)(options, value);
            for (var name in options) {
                this._prepareRelevantNames(options, name, options[name], silent)
            }
            for (var _name in options) {
                this._setPreparedValue(_name, options[_name], merge, silent)
            }
        }
    }, {
        key: "onRelevantNamesPrepared",
        value: function(callBack) {
            this._namePreparedCallbacks = callBack
        }
    }, {
        key: "onChanging",
        value: function(callBack) {
            this._changingCallback = callBack
        }
    }, {
        key: "onChanged",
        value: function(callBack) {
            this._changedCallback = callBack
        }
    }, {
        key: "dispose",
        value: function() {
            this._changingCallback = _common.noop;
            this._changedCallback = _common.noop
        }
    }]);
    return OptionManager
}();


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/comparator.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _dom_adapter = __webpack_require__(5);
var _dom_adapter2 = _interopRequireDefault(_dom_adapter);
var _data = __webpack_require__(26);
var _type = __webpack_require__(1);
var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}
var hasNegation = function(oldValue, newValue) {
    return 1 / oldValue === 1 / newValue
};
var equals = function(oldValue, newValue) {
    oldValue = (0, _data.toComparable)(oldValue, true);
    newValue = (0, _data.toComparable)(newValue, true);
    if (oldValue && newValue && _type2.default.isRenderer(oldValue) && _type2.default.isRenderer(newValue)) {
        return newValue.is(oldValue)
    }
    var oldValueIsNaN = oldValue !== oldValue;
    var newValueIsNaN = newValue !== newValue;
    if (oldValueIsNaN && newValueIsNaN) {
        return true
    }
    if (0 === oldValue && 0 === newValue) {
        return hasNegation(oldValue, newValue)
    }
    if (null === oldValue || "object" !== _typeof(oldValue) || _dom_adapter2.default.isElementNode(oldValue)) {
        return oldValue === newValue
    }
    return false
};
exports.equals = equals;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/postponed_operations.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostponedOperations = void 0;
var _deferred = __webpack_require__(23);
var _type = __webpack_require__(1);

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) {
        return
    }
    if ("string" === typeof o) {
        return _arrayLikeToArray(o, minLen)
    }
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) {
        n = o.constructor.name
    }
    if ("Map" === n || "Set" === n) {
        return Array.from(o)
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return _arrayLikeToArray(o, minLen)
    }
}

function _iterableToArray(iter) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(iter)) {
        return Array.from(iter)
    }
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        return _arrayLikeToArray(arr)
    }
}

function _arrayLikeToArray(arr, len) {
    if (null == len || len > arr.length) {
        len = arr.length
    }
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]
    }
    return arr2
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var PostponedOperations = exports.PostponedOperations = function() {
    function PostponedOperations() {
        _classCallCheck(this, PostponedOperations);
        this._postponedOperations = {}
    }
    _createClass(PostponedOperations, [{
        key: "add",
        value: function(key, fn, postponedPromise) {
            if (key in this._postponedOperations) {
                postponedPromise && this._postponedOperations[key].promises.push(postponedPromise)
            } else {
                var completePromise = new _deferred.Deferred;
                this._postponedOperations[key] = {
                    fn: fn,
                    completePromise: completePromise,
                    promises: postponedPromise ? [postponedPromise] : []
                }
            }
            return this._postponedOperations[key].completePromise.promise()
        }
    }, {
        key: "callPostponedOperations",
        value: function() {
            for (var key in this._postponedOperations) {
                var operation = this._postponedOperations[key];
                if ((0, _type.isDefined)(operation)) {
                    if (operation.promises && operation.promises.length) {
                        _deferred.when.apply(void 0, _toConsumableArray(operation.promises)).done(operation.fn).then(operation.completePromise.resolve)
                    } else {
                        operation.fn().done(operation.completePromise.resolve)
                    }
                }
            }
            this._postponedOperations = {}
        }
    }]);
    return PostponedOperations
}();


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/template_manager.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _type = __webpack_require__(1);
var _common = __webpack_require__(8);
var _extend = __webpack_require__(2);
var _errors = __webpack_require__(6);
var _dom = __webpack_require__(16);
var _function_template = __webpack_require__(51);
var _empty_template = __webpack_require__(52);
var _inflector = __webpack_require__(32);
var _template_manager = __webpack_require__(94);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}
var TEXT_NODE = 3;
var ANONYMOUS_TEMPLATE_NAME = "template";
var TEMPLATE_SELECTOR = '[data-options*="dxTemplate"]';
var TEMPLATE_WRAPPER_CLASS = "dx-template-wrapper";
var DEPRECATED_WIDGET_NAMES = {
    button: true,
    tabs: true,
    dropDownMenu: true
};
var DX_POLYMORPH_WIDGET_TEMPLATE = new _function_template.FunctionTemplate(function(_ref) {
    var model = _ref.model,
        parent = _ref.parent;
    var widgetName = model.widget;
    if (!widgetName) {
        return (0, _renderer2.default)()
    }
    var widgetElement = (0, _renderer2.default)("<div>");
    var widgetOptions = model.options || {};
    if (DEPRECATED_WIDGET_NAMES[widgetName]) {
        var deprecatedName = widgetName;
        widgetName = (0, _inflector.camelize)("dx-" + widgetName);
        (0, _errors.log)("W0001", 'dxToolbar - "widget" item field', deprecatedName, "16.1", "Use: " + widgetName + "instead")
    }
    if (parent) {
        parent._createComponent(widgetElement, widgetName, widgetOptions)
    } else {
        widgetElement[widgetName](widgetOptions)
    }
    return widgetElement
});
var TemplateManager = function() {
    function TemplateManager(createElement, anonymousTemplateName) {
        _classCallCheck(this, TemplateManager);
        this._tempTemplates = [];
        this._defaultTemplates = {};
        this._anonymousTemplateName = anonymousTemplateName || ANONYMOUS_TEMPLATE_NAME;
        this._createElement = createElement || _template_manager.defaultCreateElement;
        this._createTemplateIfNeeded = this._createTemplateIfNeeded.bind(this)
    }
    _createClass(TemplateManager, [{
        key: "addDefaultTemplates",
        value: function(templates) {
            this._defaultTemplates = (0, _extend.extend)({}, this._defaultTemplates, templates)
        }
    }, {
        key: "dispose",
        value: function() {
            this._tempTemplates.forEach(function(tempTemplate) {
                tempTemplate.template.dispose && tempTemplate.template.dispose()
            });
            this._tempTemplates = []
        }
    }, {
        key: "extractTemplates",
        value: function($el) {
            var templates = this._extractTemplates($el);
            var anonymousTemplateMeta = this._extractAnonymousTemplate($el);
            return {
                templates: templates,
                anonymousTemplateMeta: anonymousTemplateMeta
            }
        }
    }, {
        key: "_extractTemplates",
        value: function($el) {
            var templateElements = $el.contents().filter(TEMPLATE_SELECTOR);
            var templatesMap = {};
            templateElements.each(function(_, template) {
                var templateOptions = (0, _dom.getElementOptions)(template).dxTemplate;
                if (!templateOptions) {
                    return
                }
                if (!templateOptions.name) {
                    throw (0, _errors.Error)("E0023")
                }(0, _renderer2.default)(template).addClass(TEMPLATE_WRAPPER_CLASS).detach();
                templatesMap[templateOptions.name] = templatesMap[templateOptions.name] || [];
                templatesMap[templateOptions.name].push(template)
            });
            var templates = [];
            for (var templateName in templatesMap) {
                var deviceTemplate = (0, _template_manager.findTemplateByDevice)(templatesMap[templateName]);
                if (deviceTemplate) {
                    templates.push({
                        name: templateName,
                        template: this._createTemplate(deviceTemplate)
                    })
                }
            }
            return templates
        }
    }, {
        key: "_extractAnonymousTemplate",
        value: function($el) {
            var $anonymousTemplate = $el.contents().detach();
            var $notJunkTemplateContent = $anonymousTemplate.filter(function(_, element) {
                var isTextNode = element.nodeType === TEXT_NODE;
                var isEmptyText = (0, _renderer2.default)(element).text().trim().length < 1;
                return !(isTextNode && isEmptyText)
            });
            return $notJunkTemplateContent.length > 0 ? {
                template: this._createTemplate($anonymousTemplate),
                name: this._anonymousTemplateName
            } : {}
        }
    }, {
        key: "_createTemplateIfNeeded",
        value: function(templateSource) {
            var cachedTemplate = this._tempTemplates.filter(function(tempTemplate) {
                return tempTemplate.source === (0, _template_manager.templateKey)(templateSource)
            })[0];
            if (cachedTemplate) {
                return cachedTemplate.template
            }
            var template = this._createTemplate(templateSource);
            this._tempTemplates.push({
                template: template,
                source: (0, _template_manager.templateKey)(templateSource)
            });
            return template
        }
    }, {
        key: "_createTemplate",
        value: function(templateSource) {
            return this._createElement((0, _template_manager.validateTemplateSource)(templateSource))
        }
    }, {
        key: "getTemplate",
        value: function(templateSource, templates, _ref2, context) {
            var _this = this;
            var isAsyncTemplate = _ref2.isAsyncTemplate,
                skipTemplates = _ref2.skipTemplates;
            if (!(0, _type.isFunction)(templateSource)) {
                return (0, _template_manager.acquireTemplate)(templateSource, this._createTemplateIfNeeded, templates, isAsyncTemplate, skipTemplates, this._defaultTemplates)
            }
            return new _function_template.FunctionTemplate(function(options) {
                var templateSourceResult = templateSource.apply(context, (0, _template_manager.getNormalizedTemplateArgs)(options));
                if (!(0, _type.isDefined)(templateSourceResult)) {
                    return new _empty_template.EmptyTemplate
                }
                var dispose = false;
                var template = (0, _template_manager.acquireTemplate)(templateSourceResult, function(templateSource) {
                    if (templateSource.nodeType || (0, _type.isRenderer)(templateSource) && !(0, _renderer2.default)(templateSource).is("script")) {
                        return new _function_template.FunctionTemplate(function() {
                            return templateSource
                        })
                    }
                    dispose = true;
                    return _this._createTemplate(templateSource)
                }, templates, isAsyncTemplate, skipTemplates, _this._defaultTemplates);
                var result = template.render(options);
                dispose && template.dispose && template.dispose();
                return result
            })
        }
    }, {
        key: "anonymousTemplateName",
        get: function() {
            return this._anonymousTemplateName
        }
    }], [{
        key: "createDefaultOptions",
        value: function() {
            return {
                integrationOptions: {
                    watchMethod: function(fn, callback) {
                        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!options.skipImmediate) {
                            callback(fn())
                        }
                        return _common.noop
                    },
                    templates: {
                        "dx-polymorph-widget": DX_POLYMORPH_WIDGET_TEMPLATE
                    }
                }
            }
        }
    }]);
    return TemplateManager
}();
exports.default = TemplateManager;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/template_manager.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.acquireTemplate = exports.acquireIntegrationTemplate = exports.defaultCreateElement = exports.templateKey = exports.validateTemplateSource = exports.getNormalizedTemplateArgs = exports.addOneRenderedCall = exports.findTemplateByDevice = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _type = __webpack_require__(1);
var _common = __webpack_require__(8);
var _extend = __webpack_require__(2);
var _child_default_template = __webpack_require__(95);
var _template_base = __webpack_require__(25);
var _empty_template = __webpack_require__(52);
var _dom = __webpack_require__(16);
var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _template = __webpack_require__(96);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var findTemplateByDevice = exports.findTemplateByDevice = function(templates) {
    var suitableTemplate = (0, _common.findBestMatches)(_devices2.default.current(), templates, function(template) {
        return (0, _dom.getElementOptions)(template).dxTemplate
    })[0];
    templates.forEach(function(template) {
        if (template !== suitableTemplate) {
            (0, _renderer2.default)(template).remove()
        }
    });
    return suitableTemplate
};
var addOneRenderedCall = exports.addOneRenderedCall = function(template) {
    var _render = template.render.bind(template);
    return (0, _extend.extend)({}, template, {
        render: function(options) {
            var templateResult = _render(options);
            options && options.onRendered && options.onRendered();
            return templateResult
        }
    })
};
var getNormalizedTemplateArgs = exports.getNormalizedTemplateArgs = function(options) {
    var args = [];
    if ("model" in options) {
        args.push(options.model)
    }
    if ("index" in options) {
        args.push(options.index)
    }
    args.push(options.container);
    return args
};
var validateTemplateSource = exports.validateTemplateSource = function(templateSource) {
    return "string" === typeof templateSource ? (0, _dom.normalizeTemplateElement)(templateSource) : templateSource
};
var templateKey = exports.templateKey = function(templateSource) {
    return (0, _type.isRenderer)(templateSource) && templateSource[0] || templateSource
};
var defaultCreateElement = exports.defaultCreateElement = function(element) {
    return new _template.Template(element)
};
var acquireIntegrationTemplate = exports.acquireIntegrationTemplate = function(templateSource, templates, isAsyncTemplate, skipTemplates) {
    var integrationTemplate = null;
    if (!skipTemplates || skipTemplates.indexOf(templateSource) === -1) {
        integrationTemplate = templates[templateSource];
        if (integrationTemplate && !(integrationTemplate instanceof _template_base.TemplateBase) && !isAsyncTemplate) {
            integrationTemplate = addOneRenderedCall(integrationTemplate)
        }
    }
    return integrationTemplate
};
var acquireTemplate = exports.acquireTemplate = function(templateSource, createTemplate, templates, isAsyncTemplate, skipTemplates, defaultTemplates) {
    if (null == templateSource) {
        return new _empty_template.EmptyTemplate
    }
    if (templateSource instanceof _child_default_template.ChildDefaultTemplate) {
        return defaultTemplates[templateSource.name]
    }
    if (templateSource instanceof _template_base.TemplateBase) {
        return templateSource
    }
    if ((0, _type.isFunction)(templateSource.render) && !(0, _type.isRenderer)(templateSource)) {
        return addOneRenderedCall(templateSource)
    }
    if (templateSource.nodeType || (0, _type.isRenderer)(templateSource)) {
        return createTemplate((0, _renderer2.default)(templateSource))
    }
    return acquireIntegrationTemplate(templateSource, templates, isAsyncTemplate, skipTemplates) || defaultTemplates[templateSource] || createTemplate(templateSource)
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/child_default_template.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChildDefaultTemplate = void 0;
var _template_base = __webpack_require__(25);

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}
var ChildDefaultTemplate = exports.ChildDefaultTemplate = function(_TemplateBase) {
    _inherits(ChildDefaultTemplate, _TemplateBase);
    var _super = _createSuper(ChildDefaultTemplate);

    function ChildDefaultTemplate(name) {
        var _this;
        _classCallCheck(this, ChildDefaultTemplate);
        _this = _super.call(this);
        _this.name = name;
        return _this
    }
    return ChildDefaultTemplate
}(_template_base.TemplateBase);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/template.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Template = void 0;
var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _template_base = __webpack_require__(25);
var _dom = __webpack_require__(16);
var _template_engine_registry = __webpack_require__(53);
__webpack_require__(97);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}

function _typeof(obj) {
    "@babel/helpers - typeof";
    if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) {
        _typeof = function(obj) {
            return typeof obj
        }
    } else {
        _typeof = function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) {
            descriptor.writable = true
        }
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
        _defineProperties(Constructor, staticProps)
    }
    return Constructor
}

function _inherits(subClass, superClass) {
    if ("function" !== typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) {
        _setPrototypeOf(subClass, superClass)
    }
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function() {
        var result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget)
        } else {
            result = Super.apply(this, arguments)
        }
        return _possibleConstructorReturn(this, result)
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && ("object" === _typeof(call) || "function" === typeof call)) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (void 0 === self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _isNativeReflectConstruct() {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
        return false
    }
    if (Reflect.construct.sham) {
        return false
    }
    if ("function" === typeof Proxy) {
        return true
    }
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true
    } catch (e) {
        return false
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}(0, _template_engine_registry.registerTemplateEngine)("default", {
    compile: function(element) {
        return (0, _dom.normalizeTemplateElement)(element)
    },
    render: function(template, model, index) {
        return template.clone()
    }
});
(0, _template_engine_registry.setTemplateEngine)("default");
var Template = exports.Template = function(_TemplateBase) {
    _inherits(Template, _TemplateBase);
    var _super = _createSuper(Template);

    function Template(element) {
        var _this;
        _classCallCheck(this, Template);
        _this = _super.call(this);
        _this._element = element;
        return _this
    }
    _createClass(Template, [{
        key: "_renderCore",
        value: function(options) {
            var transclude = options.transclude;
            if (!transclude && !this._compiledTemplate) {
                this._compiledTemplate = (0, _template_engine_registry.getCurrentTemplateEngine)().compile(this._element)
            }
            return (0, _renderer2.default)("<div>").append(transclude ? this._element : (0, _template_engine_registry.getCurrentTemplateEngine)().render(this._compiledTemplate, options.model, options.index)).contents()
        }
    }, {
        key: "source",
        value: function() {
            return (0, _renderer2.default)(this._element).clone()
        }
    }]);
    return Template
}(_template_base.TemplateBase);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/templates/template_engines.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _dom = __webpack_require__(16);
var _template_engine_registry = __webpack_require__(53);
(0, _template_engine_registry.registerTemplateEngine)("jquery-tmpl", {
    compile: function(element) {
        return (0, _dom.extractTemplateMarkup)(element)
    },
    render: function(template, data) {
        return jQuery.tmpl(template, data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("jsrender", {
    compile: function(element) {
        return (jQuery ? jQuery : jsrender).templates((0, _dom.extractTemplateMarkup)(element))
    },
    render: function(template, data) {
        return template.render(data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("mustache", {
    compile: function(element) {
        return (0, _dom.extractTemplateMarkup)(element)
    },
    render: function(template, data) {
        return Mustache.render(template, data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("hogan", {
    compile: function(element) {
        return Hogan.compile((0, _dom.extractTemplateMarkup)(element))
    },
    render: function(template, data) {
        return template.render(data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("underscore", {
    compile: function(element) {
        return _.template((0, _dom.extractTemplateMarkup)(element))
    },
    render: function(template, data) {
        return template(data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("handlebars", {
    compile: function(element) {
        return Handlebars.compile((0, _dom.extractTemplateMarkup)(element))
    },
    render: function(template, data) {
        return template(data)
    }
});
(0, _template_engine_registry.registerTemplateEngine)("doT", {
    compile: function(element) {
        return doT.template((0, _dom.extractTemplateMarkup)(element))
    },
    render: function(template, data) {
        return template(data)
    }
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/keyboard_processor.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _events_engine = __webpack_require__(10);
var _events_engine2 = _interopRequireDefault(_events_engine);
var _class = __webpack_require__(11);
var _class2 = _interopRequireDefault(_class);
var _array = __webpack_require__(14);
var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var COMPOSITION_START_EVENT = "compositionstart";
var COMPOSITION_END_EVENT = "compositionend";
var KEYDOWN_EVENT = "keydown";
var NAMESPACE = "KeyboardProcessor";
var KeyboardProcessor = _class2.default.inherit({
    _keydown: (0, _utils.addNamespace)(KEYDOWN_EVENT, NAMESPACE),
    _compositionStart: (0, _utils.addNamespace)(COMPOSITION_START_EVENT, NAMESPACE),
    _compositionEnd: (0, _utils.addNamespace)(COMPOSITION_END_EVENT, NAMESPACE),
    ctor: function(options) {
        var _this = this;
        options = options || {};
        if (options.element) {
            this._element = (0, _renderer2.default)(options.element)
        }
        if (options.focusTarget) {
            this._focusTarget = options.focusTarget
        }
        this._handler = options.handler;
        if (this._element) {
            this._processFunction = function(e) {
                var isNotFocusTarget = _this._focusTarget && _this._focusTarget !== e.target && (0, _array.inArray)(e.target, _this._focusTarget) < 0;
                var shouldSkipProcessing = _this._isComposingJustFinished && 229 === e.which || _this._isComposing || isNotFocusTarget;
                _this._isComposingJustFinished = false;
                if (!shouldSkipProcessing) {
                    _this.process(e)
                }
            };
            this._toggleProcessingWithContext = this.toggleProcessing.bind(this);
            _events_engine2.default.on(this._element, this._keydown, this._processFunction);
            _events_engine2.default.on(this._element, this._compositionStart, this._toggleProcessingWithContext);
            _events_engine2.default.on(this._element, this._compositionEnd, this._toggleProcessingWithContext)
        }
    },
    dispose: function() {
        if (this._element) {
            _events_engine2.default.off(this._element, this._keydown, this._processFunction);
            _events_engine2.default.off(this._element, this._compositionStart, this._toggleProcessingWithContext);
            _events_engine2.default.off(this._element, this._compositionEnd, this._toggleProcessingWithContext)
        }
        this._element = void 0;
        this._handler = void 0
    },
    process: function(e) {
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
        })
    },
    toggleProcessing: function(_ref) {
        var type = _ref.type;
        this._isComposing = type === COMPOSITION_START_EVENT;
        this._isComposingJustFinished = !this._isComposing
    }
});
module.exports = KeyboardProcessor;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/utils/add_namespace.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _errors = __webpack_require__(6);
var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var addNamespace = function addNamespace(eventNames, namespace) {
    if (!namespace) {
        throw _errors2.default.Error("E0017")
    }
    if (Array.isArray(eventNames)) {
        return eventNames.map(function(eventName) {
            return addNamespace(eventName, namespace)
        }).join(" ")
    }
    if (eventNames.indexOf(" ") !== -1) {
        return addNamespace(eventNames.split(/\s+/g), namespace)
    }
    return "".concat(eventNames, ".").concat(namespace)
};
exports.default = addNamespace;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/click.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var $ = __webpack_require__(3);
var eventsEngine = __webpack_require__(10);
var devices = __webpack_require__(15);
var domAdapter = __webpack_require__(5);
var domUtils = __webpack_require__(16);
var animationFrame = __webpack_require__(101);
var eventUtils = __webpack_require__(13);
var pointerEvents = __webpack_require__(27);
var Emitter = __webpack_require__(59);
var registerEmitter = __webpack_require__(60);
var compareVersions = __webpack_require__(106).compare;
var CLICK_EVENT_NAME = "dxclick";
var TOUCH_BOUNDARY = 10;
var abs = Math.abs;
var isInput = function(element) {
    return $(element).is("input, textarea, select, button ,:focus, :focus *")
};
var misc = {
    requestAnimationFrame: animationFrame.requestAnimationFrame,
    cancelAnimationFrame: animationFrame.cancelAnimationFrame
};
var ClickEmitter = Emitter.inherit({
    ctor: function(element) {
        this.callBase(element);
        this._makeElementClickable($(element))
    },
    _makeElementClickable: function($element) {
        if (!$element.attr("onclick")) {
            $element.attr("onclick", "void(0)")
        }
    },
    start: function(e) {
        this._blurPrevented = e.isDefaultPrevented();
        this._startTarget = e.target;
        this._startEventData = eventUtils.eventData(e)
    },
    end: function(e) {
        if (this._eventOutOfElement(e, this.getElement().get(0)) || e.type === pointerEvents.cancel) {
            this._cancel(e);
            return
        }
        if (!isInput(e.target) && !this._blurPrevented) {
            domUtils.resetActiveElement()
        }
        this._accept(e);
        this._clickAnimationFrame = misc.requestAnimationFrame(function() {
            this._fireClickEvent(e)
        }.bind(this))
    },
    _eventOutOfElement: function(e, element) {
        var target = e.target;
        var targetChanged = !domUtils.contains(element, target) && element !== target;
        var gestureDelta = eventUtils.eventDelta(eventUtils.eventData(e), this._startEventData);
        var boundsExceeded = abs(gestureDelta.x) > TOUCH_BOUNDARY || abs(gestureDelta.y) > TOUCH_BOUNDARY;
        return targetChanged || boundsExceeded
    },
    _fireClickEvent: function(e) {
        this._fireEvent(CLICK_EVENT_NAME, e, {
            target: domUtils.closestCommonParent(this._startTarget, e.target)
        })
    },
    dispose: function() {
        misc.cancelAnimationFrame(this._clickAnimationFrame)
    }
});
! function() {
    var NATIVE_CLICK_CLASS = "dx-native-click";
    var realDevice = devices.real();
    var useNativeClick = realDevice.generic || realDevice.ios && compareVersions(realDevice.version, [9, 3]) >= 0 || realDevice.android && compareVersions(realDevice.version, [5]) >= 0;
    var isNativeClickEvent = function(target) {
        return useNativeClick || $(target).closest("." + NATIVE_CLICK_CLASS).length
    };
    var prevented = null;
    var lastFiredEvent = null;
    var clickHandler = function(e) {
        var originalEvent = e.originalEvent;
        var eventAlreadyFired = lastFiredEvent === originalEvent || originalEvent && originalEvent.DXCLICK_FIRED;
        var leftButton = !e.which || 1 === e.which;
        if (leftButton && !prevented && isNativeClickEvent(e.target) && !eventAlreadyFired) {
            if (originalEvent) {
                originalEvent.DXCLICK_FIRED = true
            }
            lastFiredEvent = originalEvent;
            eventUtils.fireEvent({
                type: CLICK_EVENT_NAME,
                originalEvent: e
            })
        }
    };
    ClickEmitter = ClickEmitter.inherit({
        _makeElementClickable: function($element) {
            if (!isNativeClickEvent($element)) {
                this.callBase($element)
            }
            eventsEngine.on($element, "click", clickHandler)
        },
        configure: function(data) {
            this.callBase(data);
            if (data.useNative) {
                this.getElement().addClass(NATIVE_CLICK_CLASS)
            }
        },
        start: function(e) {
            prevented = null;
            if (!isNativeClickEvent(e.target)) {
                this.callBase(e)
            }
        },
        end: function(e) {
            if (!isNativeClickEvent(e.target)) {
                this.callBase(e)
            }
        },
        cancel: function() {
            prevented = true
        },
        dispose: function() {
            this.callBase();
            eventsEngine.off(this.getElement(), "click", clickHandler)
        }
    })
}();
! function() {
    var desktopDevice = devices.real().generic;
    if (!desktopDevice) {
        var startTarget = null;
        var blurPrevented = false;
        var pointerDownHandler = function(e) {
            startTarget = e.target;
            blurPrevented = e.isDefaultPrevented()
        };
        var clickHandler = function(e) {
            var $target = $(e.target);
            if (!blurPrevented && startTarget && !$target.is(startTarget) && !$(startTarget).is("label") && isInput($target)) {
                domUtils.resetActiveElement()
            }
            startTarget = null;
            blurPrevented = false
        };
        var NATIVE_CLICK_FIXER_NAMESPACE = "NATIVE_CLICK_FIXER";
        var document = domAdapter.getDocument();
        eventsEngine.subscribeGlobal(document, eventUtils.addNamespace(pointerEvents.down, NATIVE_CLICK_FIXER_NAMESPACE), pointerDownHandler);
        eventsEngine.subscribeGlobal(document, eventUtils.addNamespace("click", NATIVE_CLICK_FIXER_NAMESPACE), clickHandler)
    }
}();
registerEmitter({
    emitter: ClickEmitter,
    bubble: true,
    events: [CLICK_EVENT_NAME]
});
exports.name = CLICK_EVENT_NAME;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (animation/frame.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var windowUtils = __webpack_require__(7);
var window = windowUtils.hasWindow() ? windowUtils.getWindow() : {};
var callOnce = __webpack_require__(21);
var FRAME_ANIMATION_STEP_TIME = 1e3 / 60;
var request = function(callback) {
    return setTimeout(callback, FRAME_ANIMATION_STEP_TIME)
};
var cancel = function(requestID) {
    clearTimeout(requestID)
};
var setAnimationFrameMethods = callOnce(function() {
    var nativeRequest = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    var nativeCancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
    if (nativeRequest && nativeCancel) {
        request = nativeRequest;
        cancel = nativeCancel
    }
    if (nativeRequest && !nativeCancel) {
        var canceledRequests = {};
        request = function(callback) {
            var requestId = nativeRequest.call(window, function() {
                try {
                    if (requestId in canceledRequests) {
                        return
                    }
                    callback.apply(this, arguments)
                } finally {
                    delete canceledRequests[requestId]
                }
            });
            return requestId
        };
        cancel = function(requestId) {
            canceledRequests[requestId] = true
        }
    }
});
exports.requestAnimationFrame = function() {
    setAnimationFrameMethods();
    return request.apply(window, arguments)
};
exports.cancelAnimationFrame = function() {
    setAnimationFrameMethods();
    cancel.apply(window, arguments)
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/support.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _array = __webpack_require__(14);
var _dom_adapter = __webpack_require__(5);
var _common = __webpack_require__(8);
var _call_once = __webpack_require__(21);
var _call_once2 = _interopRequireDefault(_call_once);
var _window = __webpack_require__(7);
var _window2 = _interopRequireDefault(_window);
var _devices = __webpack_require__(15);
var _devices2 = _interopRequireDefault(_devices);
var _style = __webpack_require__(44);
var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var _windowUtils$getNavig = _window2.default.getNavigator(),
    maxTouchPoints = _windowUtils$getNavig.maxTouchPoints,
    msMaxTouchPoints = _windowUtils$getNavig.msMaxTouchPoints,
    pointerEnabled = _windowUtils$getNavig.pointerEnabled;
var hasProperty = _window2.default.hasProperty.bind(_window2.default);
var transitionEndEventNames = {
    webkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    msTransition: "MsTransitionEnd",
    transition: "transitionend"
};
var supportProp = function(prop) {
    return !!_style2.default.styleProp(prop)
};
var isNativeScrollingSupported = function() {
    var _devices$real = _devices2.default.real(),
        platform = _devices$real.platform,
        version = _devices$real.version,
        isMac = _devices$real.mac;
    var isObsoleteAndroid = version && version[0] < 4 && "android" === platform;
    var isNativeScrollDevice = !isObsoleteAndroid && (0, _array.inArray)(platform, ["ios", "android"]) > -1 || isMac;
    return isNativeScrollDevice
};
var inputType = function(type) {
    if ("text" === type) {
        return true
    }
    var input = (0, _dom_adapter.createElement)("input");
    try {
        input.setAttribute("type", type);
        input.value = "wrongValue";
        return !input.value
    } catch (e) {
        return false
    }
};
var detectTouchEvents = function(hasWindowProperty, maxTouchPoints) {
    return (hasWindowProperty("ontouchstart") || !!maxTouchPoints) && !hasWindowProperty("callPhantom")
};
var detectPointerEvent = function(hasWindowProperty, pointerEnabled) {
    var isPointerEnabled = (0, _common.ensureDefined)(pointerEnabled, true);
    var canUsePointerEvent = (0, _common.ensureDefined)(pointerEnabled, false);
    return hasWindowProperty("PointerEvent") && isPointerEnabled || canUsePointerEvent
};
var touchEvents = detectTouchEvents(hasProperty, maxTouchPoints);
var pointerEvents = detectPointerEvent(hasProperty, pointerEnabled);
var touchPointersPresent = !!maxTouchPoints || !!msMaxTouchPoints;
exports.touchEvents = touchEvents;
exports.pointerEvents = pointerEvents;
exports.touch = touchEvents || pointerEvents && touchPointersPresent;
exports.transition = (0, _call_once2.default)(function() {
    return supportProp("transition")
});
exports.transitionEndEventName = (0, _call_once2.default)(function() {
    return transitionEndEventNames[_style2.default.styleProp("transition")]
});
exports.animation = (0, _call_once2.default)(function() {
    return supportProp("animation")
});
exports.nativeScrolling = isNativeScrollingSupported();
exports.styleProp = _style2.default.styleProp;
exports.stylePropPrefix = _style2.default.stylePropPrefix;
exports.supportProp = supportProp;
exports.inputType = inputType;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/mspointer.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var BaseStrategy = __webpack_require__(28);
var Observer = __webpack_require__(57);
var extend = __webpack_require__(2).extend;
var eventMap = {
    dxpointerdown: "pointerdown",
    dxpointermove: "pointermove",
    dxpointerup: "pointerup",
    dxpointercancel: "pointercancel",
    dxpointerover: "pointerover",
    dxpointerout: "pointerout",
    dxpointerenter: "pointerenter",
    dxpointerleave: "pointerleave"
};
var observer;
var activated = false;
var activateStrategy = function() {
    if (activated) {
        return
    }
    observer = new Observer(eventMap, function(a, b) {
        return a.pointerId === b.pointerId
    }, function(e) {
        if (e.isPrimary) {
            observer.reset()
        }
    });
    activated = true
};
var MsPointerStrategy = BaseStrategy.inherit({
    ctor: function() {
        this.callBase.apply(this, arguments);
        activateStrategy()
    },
    _fireEvent: function(args) {
        return this.callBase(extend({
            pointers: observer.pointers(),
            pointerId: args.originalEvent.pointerId
        }, args))
    }
});
MsPointerStrategy.map = eventMap;
MsPointerStrategy.resetObserver = function() {
    observer.reset()
};
module.exports = MsPointerStrategy;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/pointer/mouse_and_touch.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var extend = __webpack_require__(2).extend;
var BaseStrategy = __webpack_require__(28);
var MouseStrategy = __webpack_require__(58);
var TouchStrategy = __webpack_require__(56);
var eventUtils = __webpack_require__(13);
var eventMap = {
    dxpointerdown: "touchstart mousedown",
    dxpointermove: "touchmove mousemove",
    dxpointerup: "touchend mouseup",
    dxpointercancel: "touchcancel",
    dxpointerover: "mouseover",
    dxpointerout: "mouseout",
    dxpointerenter: "mouseenter",
    dxpointerleave: "mouseleave"
};
var activated = false;
var activateStrategy = function() {
    if (activated) {
        return
    }
    MouseStrategy.activate();
    activated = true
};
var MouseAndTouchStrategy = BaseStrategy.inherit({
    EVENT_LOCK_TIMEOUT: 100,
    ctor: function() {
        this.callBase.apply(this, arguments);
        activateStrategy()
    },
    _handler: function(e) {
        var isMouseEvent = eventUtils.isMouseEvent(e);
        if (!isMouseEvent) {
            this._skipNextEvents = true
        }
        if (isMouseEvent && this._mouseLocked) {
            return
        }
        if (isMouseEvent && this._skipNextEvents) {
            this._skipNextEvents = false;
            this._mouseLocked = true;
            clearTimeout(this._unlockMouseTimer);
            var that = this;
            this._unlockMouseTimer = setTimeout(function() {
                that._mouseLocked = false
            }, this.EVENT_LOCK_TIMEOUT);
            return
        }
        return this.callBase(e)
    },
    _fireEvent: function(args) {
        var isMouseEvent = eventUtils.isMouseEvent(args.originalEvent);
        var normalizer = isMouseEvent ? MouseStrategy.normalize : TouchStrategy.normalize;
        return this.callBase(extend(normalizer(args.originalEvent), args))
    },
    dispose: function() {
        this.callBase();
        this._skipNextEvents = false;
        this._mouseLocked = false;
        clearTimeout(this._unlockMouseTimer)
    }
});
MouseAndTouchStrategy.map = eventMap;
MouseAndTouchStrategy.resetObserver = MouseStrategy.resetObserver;
module.exports = MouseAndTouchStrategy;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/wheel.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);
var _events_engine = __webpack_require__(10);
var _events_engine2 = _interopRequireDefault(_events_engine);
var _event_registrator = __webpack_require__(24);
var _event_registrator2 = _interopRequireDefault(_event_registrator);
var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var EVENT_NAME = "dxmousewheel";
var EVENT_NAMESPACE = "dxWheel";
var NATIVE_EVENT_NAME = "wheel";
var PIXEL_MODE = 0;
var DELTA_MUTLIPLIER = 30;
var wheel = {
    setup: function(element) {
        var $element = (0, _renderer2.default)(element);
        _events_engine2.default.on($element, (0, _utils.addNamespace)(NATIVE_EVENT_NAME, EVENT_NAMESPACE), wheel._wheelHandler.bind(wheel))
    },
    teardown: function(element) {
        _events_engine2.default.off(element, ".".concat(EVENT_NAMESPACE))
    },
    _wheelHandler: function(e) {
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
            pointerType: "mouse"
        });
        e.stopPropagation()
    },
    _normalizeDelta: function(delta) {
        var deltaMode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PIXEL_MODE;
        if (deltaMode === PIXEL_MODE) {
            return -delta
        } else {
            return -DELTA_MUTLIPLIER * delta
        }
    }
};
(0, _event_registrator2.default)(EVENT_NAME, wheel);
exports.name = EVENT_NAME;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/version.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

exports.compare = function(x, y, maxLevel) {
    function normalizeArg(value) {
        if ("string" === typeof value) {
            return value.split(".")
        }
        if ("number" === typeof value) {
            return [value]
        }
        return value
    }
    x = normalizeArg(x);
    y = normalizeArg(y);
    var length = Math.max(x.length, y.length);
    if (isFinite(maxLevel)) {
        length = Math.min(length, maxLevel)
    }
    for (var i = 0; i < length; i++) {
        var xItem = parseInt(x[i] || 0, 10);
        var yItem = parseInt(y[i] || 0, 10);
        if (xItem < yItem) {
            return -1
        }
        if (xItem > yItem) {
            return 1
        }
    }
    return 0
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/core/emitter.feedback.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var Class = __webpack_require__(11);
var commonUtils = __webpack_require__(8);
var contains = __webpack_require__(16).contains;
var devices = __webpack_require__(15);
var eventUtils = __webpack_require__(13);
var pointerEvents = __webpack_require__(27);
var Emitter = __webpack_require__(59);
var registerEmitter = __webpack_require__(60);
var ACTIVE_EVENT_NAME = "dxactive";
var INACTIVE_EVENT_NAME = "dxinactive";
var ACTIVE_TIMEOUT = 30;
var INACTIVE_TIMEOUT = 400;
var FeedbackEvent = Class.inherit({
    ctor: function(timeout, fire) {
        this._timeout = timeout;
        this._fire = fire
    },
    start: function() {
        var that = this;
        this._schedule(function() {
            that.force()
        })
    },
    _schedule: function(fn) {
        this.stop();
        this._timer = setTimeout(fn, this._timeout)
    },
    stop: function() {
        clearTimeout(this._timer)
    },
    force: function() {
        if (this._fired) {
            return
        }
        this.stop();
        this._fire();
        this._fired = true
    },
    fired: function() {
        return this._fired
    }
});
var activeFeedback;
var FeedbackEmitter = Emitter.inherit({
    ctor: function() {
        this.callBase.apply(this, arguments);
        this._active = new FeedbackEvent(0, commonUtils.noop);
        this._inactive = new FeedbackEvent(0, commonUtils.noop)
    },
    configure: function(data, eventName) {
        switch (eventName) {
            case ACTIVE_EVENT_NAME:
                data.activeTimeout = data.timeout;
                break;
            case INACTIVE_EVENT_NAME:
                data.inactiveTimeout = data.timeout
        }
        this.callBase(data)
    },
    start: function(e) {
        if (activeFeedback) {
            var activeChildExists = contains(this.getElement().get(0), activeFeedback.getElement().get(0));
            var childJustActivated = !activeFeedback._active.fired();
            if (activeChildExists && childJustActivated) {
                this._cancel();
                return
            }
            activeFeedback._inactive.force()
        }
        activeFeedback = this;
        this._initEvents(e);
        this._active.start()
    },
    _initEvents: function(e) {
        var that = this;
        var eventTarget = this._getEmitterTarget(e);
        var mouseEvent = eventUtils.isMouseEvent(e);
        var isSimulator = devices.isSimulator();
        var deferFeedback = isSimulator || !mouseEvent;
        var activeTimeout = commonUtils.ensureDefined(this.activeTimeout, ACTIVE_TIMEOUT);
        var inactiveTimeout = commonUtils.ensureDefined(this.inactiveTimeout, INACTIVE_TIMEOUT);
        this._active = new FeedbackEvent(deferFeedback ? activeTimeout : 0, function() {
            that._fireEvent(ACTIVE_EVENT_NAME, e, {
                target: eventTarget
            })
        });
        this._inactive = new FeedbackEvent(deferFeedback ? inactiveTimeout : 0, function() {
            that._fireEvent(INACTIVE_EVENT_NAME, e, {
                target: eventTarget
            });
            activeFeedback = null
        })
    },
    cancel: function(e) {
        this.end(e)
    },
    end: function(e) {
        var skipTimers = e.type !== pointerEvents.up;
        if (skipTimers) {
            this._active.stop()
        } else {
            this._active.force()
        }
        this._inactive.start();
        if (skipTimers) {
            this._inactive.force()
        }
    },
    dispose: function() {
        this._active.stop();
        this._inactive.stop();
        this.callBase()
    },
    lockInactive: function() {
        this._active.force();
        this._inactive.stop();
        activeFeedback = null;
        this._cancel();
        return this._inactive.force.bind(this._inactive)
    }
});
FeedbackEmitter.lock = function(deferred) {
    var lockInactive = activeFeedback ? activeFeedback.lockInactive() : commonUtils.noop;
    deferred.done(lockInactive)
};
registerEmitter({
    emitter: FeedbackEmitter,
    events: [ACTIVE_EVENT_NAME, INACTIVE_EVENT_NAME]
});
exports.lock = FeedbackEmitter.lock;
exports.active = ACTIVE_EVENT_NAME;
exports.inactive = INACTIVE_EVENT_NAME;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (events/hover.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var eventsEngine = __webpack_require__(10);
var dataUtils = __webpack_require__(20);
var Class = __webpack_require__(11);
var devices = __webpack_require__(15);
var registerEvent = __webpack_require__(24);
var eventUtils = __webpack_require__(13);
var pointerEvents = __webpack_require__(27);
var HOVERSTART_NAMESPACE = "dxHoverStart";
var HOVERSTART = "dxhoverstart";
var POINTERENTER_NAMESPACED_EVENT_NAME = eventUtils.addNamespace(pointerEvents.enter, HOVERSTART_NAMESPACE);
var HOVEREND_NAMESPACE = "dxHoverEnd";
var HOVEREND = "dxhoverend";
var POINTERLEAVE_NAMESPACED_EVENT_NAME = eventUtils.addNamespace(pointerEvents.leave, HOVEREND_NAMESPACE);
var Hover = Class.inherit({
    noBubble: true,
    ctor: function() {
        this._handlerArrayKeyPath = this._eventNamespace + "_HandlerStore"
    },
    setup: function(element) {
        dataUtils.data(element, this._handlerArrayKeyPath, {})
    },
    add: function(element, handleObj) {
        var that = this;
        var handler = function(e) {
            that._handler(e)
        };
        eventsEngine.on(element, this._originalEventName, handleObj.selector, handler);
        dataUtils.data(element, this._handlerArrayKeyPath)[handleObj.guid] = handler
    },
    _handler: function(e) {
        if (eventUtils.isTouchEvent(e) || devices.isSimulator()) {
            return
        }
        eventUtils.fireEvent({
            type: this._eventName,
            originalEvent: e,
            delegateTarget: e.delegateTarget
        })
    },
    remove: function(element, handleObj) {
        var handler = dataUtils.data(element, this._handlerArrayKeyPath)[handleObj.guid];
        eventsEngine.off(element, this._originalEventName, handleObj.selector, handler)
    },
    teardown: function(element) {
        dataUtils.removeData(element, this._handlerArrayKeyPath)
    }
});
var HoverStart = Hover.inherit({
    ctor: function() {
        this._eventNamespace = HOVERSTART_NAMESPACE;
        this._eventName = HOVERSTART;
        this._originalEventName = POINTERENTER_NAMESPACED_EVENT_NAME;
        this.callBase()
    },
    _handler: function(e) {
        var pointers = e.pointers || [];
        if (!pointers.length) {
            this.callBase(e)
        }
    }
});
var HoverEnd = Hover.inherit({
    ctor: function() {
        this._eventNamespace = HOVEREND_NAMESPACE;
        this._eventName = HOVEREND;
        this._originalEventName = POINTERLEAVE_NAMESPACED_EVENT_NAME;
        this.callBase()
    }
});
registerEvent(HOVERSTART, new HoverStart);
registerEvent(HOVEREND, new HoverEnd);
exports.start = HOVERSTART;
exports.end = HOVEREND;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * DevExtreme (core/utils/icon.js)
 * Version: 20.1.6 (build 20232-1332)
 * Build date: Wed Aug 19 2020
 *
 * Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

var _renderer = __webpack_require__(3);
var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    }
}
var ICON_CLASS = "dx-icon";
var SVG_ICON_CLASS = "dx-svg-icon";
var getImageSourceType = function(source) {
    if (!source || "string" !== typeof source) {
        return false
    }
    if (/^\s*<svg[^>]*>(.|\r\n|\r|\n)*?<\/svg>\s*$/i.test(source)) {
        return "svg"
    }
    if (/data:.*base64|\.|[^<\s]\//.test(source)) {
        return "image"
    }
    if (/^[\w-_]+$/.test(source)) {
        return "dxIcon"
    }
    if (/^\s?([\w-_]\s?)+$/.test(source)) {
        return "fontIcon"
    }
    return false
};
var getImageContainer = function(source) {
    switch (getImageSourceType(source)) {
        case "image":
            return (0, _renderer2.default)("<img>").attr("src", source).addClass(ICON_CLASS);
        case "fontIcon":
            return (0, _renderer2.default)("<i>").addClass("".concat(ICON_CLASS, " ").concat(source));
        case "dxIcon":
            return (0, _renderer2.default)("<i>").addClass("".concat(ICON_CLASS, " ").concat(ICON_CLASS, "-").concat(source));
        case "svg":
            return (0, _renderer2.default)("<i>").addClass("".concat(ICON_CLASS, " ").concat(SVG_ICON_CLASS)).append(source);
        default:
            return null
    }
};
exports.getImageSourceType = getImageSourceType;
exports.getImageContainer = getImageContainer;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DxButtonComponent", function() { return /* binding */ devextreme_angular_ui_button_DxButtonComponent; });
__webpack_require__.d(__webpack_exports__, "DxButtonModule", function() { return /* binding */ DxButtonModule; });

// CONCATENATED MODULE: ./devextreme-angular/node_modules/tslib/tslib.es6.js
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
var common_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__(0);

// CONCATENATED MODULE: ./devextreme-angular/node_modules/@angular/platform-browser/fesm5/platform-browser.js
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

// EXTERNAL MODULE: ./devextreme-angular/node_modules/devextreme/ui/button.js
var ui_button = __webpack_require__(61);
var button_default = /*#__PURE__*/__webpack_require__.n(ui_button);

// EXTERNAL MODULE: external "./devextreme-angular-core.js"
var external_devextreme_angular_core_js_ = __webpack_require__(9);

// CONCATENATED MODULE: ./devextreme-angular/npm/dist/fesm2015/devextreme-angular-ui-button.js






/*!
 * devextreme-angular
 * Version: 20.1.3
 * Build date: Tue Sep 01 2020
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