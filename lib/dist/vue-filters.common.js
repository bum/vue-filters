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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4c86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/filters/util/array.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
var array_convertArray = function convertArray(value) {
  if (isArray(value)) {
    return value;
  } else if (isPlainObject(value)) {
    // convert plain object to array.
    var keys = Object.keys(value);
    var i = keys.length;
    var res = new Array(i);
    var key;

    while (i--) {
      key = keys[i];
      res[i] = {
        $key: key,
        $value: value[key]
      };
    }

    return res;
  } else {
    return value || [];
  }
};
var convertRangeToArray = function convertRangeToArray(range) {
  return _toConsumableArray(Array(range + 1).keys()).slice(1);
};
// CONCATENATED MODULE: ./src/filters/util/check.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isDef = function isDef(v) {
  return v !== undefined && v !== null;
};
var isUndef = function isUndef(v) {
  return v === undefined || v === null;
}; // not(null || undefined || NaN || emptyString("") || 0 || false)

var isTruthy = function isTruthy(v) {
  return !!v;
}; // truthy && not zero

var isNotEmpty = function isNotEmpty(v) {
  return v || v === 0;
};
var isEmpty = function isEmpty(v) {
  return !v && v !== 0;
};
var isBlank = function isBlank(v) {
  return isEmpty(v) || v.trim() === '';
};
var isNotBlank = function isNotBlank(v) {
  return isNotEmpty(v) && v.trim() !== '';
};
var isNumber = function isNumber(v) {
  return typeof v === 'number';
};
var isString = function isString(v) {
  return typeof v === 'string';
};
var isArray = function isArray(obj) {
  return Array.isArray(obj);
};
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Get the raw type string of a value, e.g., [object Object].
 */

var _toString = Object.prototype.toString;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

var isPlainObject = function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
};
// CONCATENATED MODULE: ./src/filters/util/getPath.js
// obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
var getPath = function getPath(obj, is) {
  return multiIndex(obj, is.split('.'));
}; // obj,['1','2','3'] -> ((obj['1'])['2'])['3']

var multiIndex = function multiIndex(obj, is) {
  return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj;
};
// CONCATENATED MODULE: ./src/filters/util/toNumber.js

var toNumber_toNumber = function toNumber(value) {
  if (isString(value)) {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
};
// CONCATENATED MODULE: ./src/filters/util/install.js
var makeFilter = function makeFilter(func) {
  var install = function install(Vue) {
    if (install.installed) {
      return;
    } else install.installed = true;

    Vue.filter(func.name, func);
  };

  return {
    install: install
  };
};
// CONCATENATED MODULE: ./src/filters/util/index.js
/* concated harmony reexport toArray */__webpack_require__.d(__webpack_exports__, "o", function() { return toArray; });
/* concated harmony reexport convertArray */__webpack_require__.d(__webpack_exports__, "a", function() { return array_convertArray; });
/* concated harmony reexport convertRangeToArray */__webpack_require__.d(__webpack_exports__, "b", function() { return convertRangeToArray; });
/* concated harmony reexport isDef */__webpack_require__.d(__webpack_exports__, "f", function() { return isDef; });
/* concated harmony reexport isUndef */__webpack_require__.d(__webpack_exports__, "n", function() { return isUndef; });
/* unused concated harmony import isTruthy */
/* concated harmony reexport isNotEmpty */__webpack_require__.d(__webpack_exports__, "i", function() { return isNotEmpty; });
/* concated harmony reexport isEmpty */__webpack_require__.d(__webpack_exports__, "g", function() { return isEmpty; });
/* concated harmony reexport isBlank */__webpack_require__.d(__webpack_exports__, "e", function() { return isBlank; });
/* concated harmony reexport isNotBlank */__webpack_require__.d(__webpack_exports__, "h", function() { return isNotBlank; });
/* concated harmony reexport isNumber */__webpack_require__.d(__webpack_exports__, "j", function() { return isNumber; });
/* concated harmony reexport isString */__webpack_require__.d(__webpack_exports__, "m", function() { return isString; });
/* concated harmony reexport isArray */__webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* concated harmony reexport isObject */__webpack_require__.d(__webpack_exports__, "k", function() { return isObject; });
/* concated harmony reexport isPlainObject */__webpack_require__.d(__webpack_exports__, "l", function() { return isPlainObject; });
/* concated harmony reexport getPath */__webpack_require__.d(__webpack_exports__, "c", function() { return getPath; });
/* concated harmony reexport toNumber */__webpack_require__.d(__webpack_exports__, "p", function() { return toNumber_toNumber; });
/* unused concated harmony import makeFilter */






/***/ }),

/***/ "4ec1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/filters/util/index.js + 5 modules
var util = __webpack_require__("4c86");

// CONCATENATED MODULE: ./src/filters/array/filterBy.js

/**
 * Filter filter for arrays
 *
 * @param {Array} arr
 * @param {String|Number} search
 * @param {Array} keys
 */

var filterBy_filterBy = function filterBy(arr, search) {
  arr = Object(util["a" /* convertArray */])(arr);
  if (search == null) return arr;
  if (typeof search === 'function') return arr.filter(search); // cast to lowercase string

  search = ('' + search).toLowerCase(); // const n = 2
  // extract and flatten keys
  // const keys = Array.prototype.concat.apply([], toArray(arguments, n))

  var res = [];
  var item, key, val, j;

  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;

    if (j) {
      while (j--) {
        key = keys[j];

        if (key === '$key' && contains(item.$key, search) || contains(Object(util["c" /* getPath */])(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) res.push(item);
  }

  return res;
};

function contains(val, search) {
  if (Object(util["l" /* isPlainObject */])(val)) {
    var keys = Object.keys(val);
    var i = keys.length;

    while (i--) {
      if (contains(val[keys[i]], search)) return true;
    }
  } else if (Object(util["d" /* isArray */])(val)) {
    var _i = val.length;

    while (_i--) {
      if (contains(val[_i], search)) return true;
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}
// CONCATENATED MODULE: ./src/filters/array/findBy.js

/**
 * Get first matching element from a filtered array
 *
 * @param {Array} arr
 * @param {String|Number} search
 */

var findBy_findBy = function findBy(arr, search) {
  var array = filterBy_filterBy(arr, search);
  array.splice(1);
  return array;
};
// CONCATENATED MODULE: ./src/filters/array/limitBy.js

/**
 * Limit filter for arrays
 *
 * @param {Number|Array} arr (If Number, decimal expected)
 * @param {Number} n
 * @param {Number|String} offset (Decimal expected)
 */

var limitBy_limitBy = function limitBy(arr, n, offset) {
  if (!Object(util["d" /* isArray */])()) arr = Object(util["b" /* convertRangeToArray */])(arr);
  var off = Object(util["n" /* isUndef */])(offset) ? 0 : Object(util["m" /* isString */])(offset) ? parseInt(offset, 10) : offset;
  n = Object(util["p" /* toNumber */])(n);
  return Object(util["j" /* isNumber */])(n) ? arr.slice(off, off + n) : arr;
};
// CONCATENATED MODULE: ./src/filters/array/orderBy.js

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var _comparator = null;
  var sortKeys;
  arr = Object(util["a" /* convertArray */])(arr); // determine order (last argument)

  var args = Object(util["o" /* toArray */])(arguments, 1);
  var order = args[args.length - 1];

  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  } // determine sortKeys & comparator


  var firstArg = args[0];

  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    _comparator = function comparator(a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);

    _comparator = function comparator(a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || _comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];

    if (sortKey) {
      if (sortKey !== '$key') {
        if (Object(util["k" /* isObject */])(a) && '$value' in a) a = a.$value;
        if (Object(util["k" /* isObject */])(b) && '$value' in b) b = b.$value;
      }

      a = Object(util["k" /* isObject */])(a) ? Object(util["c" /* getPath */])(a, sortKey) : a;
      b = Object(util["k" /* isObject */])(b) ? Object(util["c" /* getPath */])(b, sortKey) : b;
    }

    return a === b ? 0 : a > b ? order : -order;
  } // sort on a copy to avoid mutating original array


  return arr.slice().sort(_comparator);
}
// CONCATENATED MODULE: ./src/filters/array/index.js
/* concated harmony reexport filterBy */__webpack_require__.d(__webpack_exports__, "filterBy", function() { return filterBy_filterBy; });
/* concated harmony reexport findBy */__webpack_require__.d(__webpack_exports__, "findBy", function() { return findBy_findBy; });
/* concated harmony reexport limitBy */__webpack_require__.d(__webpack_exports__, "limitBy", function() { return limitBy_limitBy; });
/* concated harmony reexport orderBy */__webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });





/***/ }),

/***/ "8975":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7b2");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4ec1");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4c86");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import all vue component to comps




var transforms = _objectSpread({}, _string__WEBPACK_IMPORTED_MODULE_0__, {}, _array__WEBPACK_IMPORTED_MODULE_1__); // Declare install function executed by Vue.use()


function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) {
    return;
  } else {
    install.installed = true;
  }

  var names = !options.filters ? Object.keys(transforms) : Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* isArray */ "d"])(options.filters) ? options.filters : Object(_util__WEBPACK_IMPORTED_MODULE_2__[/* isString */ "m"])(options.filters) ? options.filters.trim().split(' ') : Object.keys(transforms);
  names.forEach(function (name) {
    return transforms[name] && Vue.filter(name, transforms[name]);
  });
} // Auto-install when vue is found (eg. in browser via <script> tag)


var GlobalVue = typeof window !== 'undefined' ? window.Vue : typeof global !== 'undefined' ? global.Vue : null;
if (GlobalVue) GlobalVue.use({
  install: install
}); // auto generated plugin for each of components
// const genFilters = {}
// Object.keys(transforms).forEach(name => {
// 	const install = (Vue) => {
// 		if (install.installed) {return} else install.installed = true
// 		Vue.filter(name, transforms[name])
// 	}
// 	install.installed = false
//
// 	genFilters[name + 'Filter'] = install
// })

var filter = function filter() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (Vue) {
    return funcs.forEach(function (func) {
      return Vue.filter(func.name, func);
    });
  };
}; // manual generated install (eg. filter(uppercase) => install for uppercase filter
// const filter = (func) => (Vue) => Vue.filter(func.name, func)
// const filter = function (func) {
// 	return { install: (Vue) => Vue.filter(func.name, func) }
// }
// To allow use as module(npm / webpack / etc.) export component


/* harmony default export */ __webpack_exports__["a"] = (_objectSpread({
  install: install
}, transforms, {
  // ...genFilters,
  filter: filter // filters,

})); // export * from './string'
// export * from './array'
//
// export const uppercaseFilter = makeFilter(string.capitalize)
// export const CurrencyFilter = makeFilter(string.currency)
// export const LowercaseFilter = makeFilter(string.lowercase)
// export const PlaceholderFilter = makeFilter(string.placeholder)
// export const PluralizeFilter = makeFilter(string.pluralize)
// export const TrimFilter = makeFilter(string.trim)
// export const TruncateFilter = makeFilter(string.truncate)
//
// export const UppercaseFilter = makeFilter(string.uppercase)
// export const FilterByilter = makeFilter(array.filterBy)
// export const FindByFilter = makeFilter(array.findBy)
// export const LimitByFilter = makeFilter(array.limitBy)
// export const OrderByFilter = makeFilter(array.orderBy())
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d7b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/filters/util/index.js + 5 modules
var util = __webpack_require__("4c86");

// CONCATENATED MODULE: ./src/filters/string/capitalize.js

/**
 * Capitalize a string.
 */

var capitalizeRE = /\b(\w)/g;
var capitalize_capitalize = function capitalize(val) {
  return Object(util["h" /* isNotBlank */])(val) ? val.toString().toLowerCase().replace(capitalizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  }) : '';
};
// CONCATENATED MODULE: ./src/filters/string/currency.js
/**
 * 12345 => $12,345.00
 *
 * @param {String} currency
 * @param {Number} decimals Decimal places
 */

var digitsRE = /(\d{3})(?=\d)/g;
function currency_currency(val, currency, decimals) {
  if (Object(util["g" /* isEmpty */])(val)) return '';
  val = parseFloat(val);
  if (!isFinite(val)) return '';
  currency = currency != null ? currency : '$';
  decimals = decimals != null ? decimals : 2;
  var stringified = Math.abs(val).toFixed(decimals);

  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;

  var i = _int.length % 3;
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';

  var _float = decimals ? stringified.slice(-1 - decimals) : '';

  var sign = val < 0 ? '-' : '';
  return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}
// CONCATENATED MODULE: ./src/filters/string/lowercase.js

/**
 * Converts a string to lowercase
 *
 * ('AbC') => 'abc'
 */

var lowercase_lowercase = function lowercase(val) {
  return Object(util["i" /* isNotEmpty */])(val) ? val.toString().toLowerCase() : '';
};
// CONCATENATED MODULE: ./src/filters/string/placeholder.js

/**
 *  If the value is missing outputs the {placeholder}
 *
 * (null, {placeholder}) => {placeholder}
 * ('foo', {placeholder}) => 'foo'
 */

var placeholder_placeholder = function placeholder(val, _placeholder) {
  return Object(util["e" /* isBlank */])(val) ? _placeholder : val;
};
// CONCATENATED MODULE: ./src/filters/string/pluralize.js

/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

var pluralize = function pluralize(val) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return !args || args.length === 0 ? '' : args.length === 1 ? args[0] + (val === 1 ? '' : 's') : args[val % 10 - 1] || args[args.length - 1];
};
// CONCATENATED MODULE: ./src/filters/string/trim.js

var trim_trim = function trim(str) {
  return Object(util["f" /* isDef */])(str) ? str.trim() : '';
};
// CONCATENATED MODULE: ./src/filters/string/truncate.js

/**
 *  Truncate at the given length, make sure result is within that length
 *
 * ('1234567890', 9) => '123456...'
 */

var truncate_truncate = function truncate(val, length) {
  return Object(util["n" /* isUndef */])(val) || !Object(util["m" /* isString */])(val) || !Object(util["j" /* isNumber */])(length) || length <= 3 || val.length <= length ? val : val.substring(0, length - 3) + '...';
};
// CONCATENATED MODULE: ./src/filters/string/uppercase.js

/**
 * Converts a string to UPPERCASE
 *
 * ('abc') => 'ABC'
 */

var uppercase_uppercase = function uppercase(val) {
  return Object(util["i" /* isNotEmpty */])(val) ? val.toString().toUpperCase() : '';
};
// CONCATENATED MODULE: ./src/filters/string/index.js
/* concated harmony reexport capitalize */__webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize_capitalize; });
/* concated harmony reexport currency */__webpack_require__.d(__webpack_exports__, "currency", function() { return currency_currency; });
/* concated harmony reexport lowercase */__webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase_lowercase; });
/* concated harmony reexport placeholder */__webpack_require__.d(__webpack_exports__, "placeholder", function() { return placeholder_placeholder; });
/* concated harmony reexport pluralize */__webpack_require__.d(__webpack_exports__, "pluralize", function() { return pluralize; });
/* concated harmony reexport trim */__webpack_require__.d(__webpack_exports__, "trim", function() { return trim_trim; });
/* concated harmony reexport truncate */__webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate_truncate; });
/* concated harmony reexport uppercase */__webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase_uppercase; });









/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/filters/index.js
var filters = __webpack_require__("8975");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (filters["a" /* default */]);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-filters.common.js.map