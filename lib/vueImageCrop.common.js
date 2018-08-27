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

/***/ "0b10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_image_crop_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("526d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_image_crop_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_image_crop_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_m_image_crop_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "526d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f35":
/***/ (function(module, exports) {

(function (window) {
  var svgSprite = '<svg><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M874.666667 533.333333l-192 0c-12.8 0-21.333333-8.533333-21.333333-21.333333 0-12.8 8.533333-21.333333 21.333333-21.333333l192 0c12.8 0 21.333333 8.533333 21.333333 21.333333C896 524.8 887.466667 533.333333 874.666667 533.333333zM648.533333 407.466667c-8.533333 8.533333-21.333333 8.533333-29.866667 0-8.533333-8.533333-8.533333-21.333333 0-29.866667l136.533333-136.533333c8.533333-8.533333 21.333333-8.533333 29.866667 0 8.533333 8.533333 8.533333 21.333333 0 29.866667L648.533333 407.466667zM512 896c-12.8 0-21.333333-8.533333-21.333333-21.333333l0-192c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333l0 192C533.333333 887.466667 524.8 896 512 896zM512 362.666667c-12.8 0-21.333333-8.533333-21.333333-21.333333L490.666667 149.333333c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333l0 192C533.333333 354.133333 524.8 362.666667 512 362.666667zM270.933333 782.933333c-8.533333 8.533333-21.333333 8.533333-29.866667 0s-8.533333-21.333333 0-29.866667l136.533333-136.533333c8.533333-8.533333 21.333333-8.533333 29.866667 0 8.533333 8.533333 8.533333 21.333333 0 29.866667L270.933333 782.933333zM375.466667 407.466667l-136.533333-136.533333c-8.533333-8.533333-8.533333-21.333333 0-29.866667s21.333333-8.533333 29.866667 0l136.533333 136.533333c8.533333 8.533333 8.533333 21.333333 0 29.866667C398.933333 413.866667 384 413.866667 375.466667 407.466667zM362.666667 512c0 12.8-8.533333 21.333333-21.333333 21.333333L149.333333 533.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333 0-12.8 8.533333-21.333333 21.333333-21.333333l192 0C354.133333 490.666667 362.666667 499.2 362.666667 512zM648.533333 616.533333l136.533333 136.533333c8.533333 8.533333 8.533333 21.333333 0 29.866667-8.533333 8.533333-21.333333 8.533333-29.866667 0l-136.533333-136.533333c-8.533333-8.533333-8.533333-21.333333 0-29.866667C625.066667 610.133333 640 610.133333 648.533333 616.533333z"  ></path></symbol><symbol id="icon-remove" viewBox="0 0 1024 1024"><path d="M908.644739 217.714534H115.355261c-14.149255 0-25.587771-11.438517-25.587771-25.587772 0-14.128789 11.438517-25.592888 25.587771-25.592888h793.289478c14.150278 0 25.587771 11.465123 25.587771 25.592888 0 14.149255-11.437493 25.587771-25.587771 25.587772zM652.741441 115.357308H371.256512c-14.150278 0-25.592888-11.438517-25.592888-25.592888 0-14.122649 11.44261-25.588795 25.592888-25.588795h281.484929c14.155395 0 25.594935 11.467169 25.594935 25.588795 0 14.155395-11.438517 25.592888-25.594935 25.592888zM396.845307 780.689509V345.665671c0-14.127765 11.437493-25.592888 25.587771-25.592888 14.155395 0 25.592888 11.466146 25.592888 25.592888v435.023838c0 14.154371-11.437493 25.592888-25.592888 25.592888-14.149255 0-25.587771-11.437493-25.587771-25.592888z m179.127703 0V345.665671c0-14.127765 11.441587-25.592888 25.592888-25.592888 14.150278 0 25.587771 11.466146 25.587772 25.592888v435.023838c0 14.154371-11.437493 25.592888-25.587772 25.592888s-25.592888-11.437493-25.592888-25.592888zM217.717603 294.483988c14.151301 0 25.588795 11.467169 25.588795 25.587771v537.386181c0 28.251438 22.930245 51.183729 51.181683 51.183729h435.023838c28.250414 0 51.181683-22.931269 51.181683-51.183729V320.071759c0-14.121626 11.437493-25.587771 25.588795-25.587771 14.154371 0 25.592888 11.467169 25.592888 25.587771v562.980092c0 42.401716-34.369785 76.771501-76.770478 76.771501H268.89417c-42.400692 0-76.770478-34.369785-76.770478-76.771501V320.071759c0.001023-14.120602 11.443633-25.587771 25.593911-25.587771z"  ></path></symbol></svg>';

  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  }();

  var shouldInjectCss = script.getAttribute("data-injectcss");

  var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn();
        };

        document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;
          fn();
        }
      };

      var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }

        init();
      };

      polling();

      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };

  var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };

  var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];

    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body);
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  ready(appendSvg);
})(window);

/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"4081f291-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/m-image-crop.vue?vue&type=template&id=5b97bae0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-image-crop"},[_c('img',{staticClass:"show-img",attrs:{"src":_vm._f("fileSrc")(_vm.currentValue)}}),(_vm.hasRemove)?_c('svg',{staticClass:"icon icon-remove",attrs:{"aria-hidden":"true"},on:{"click":function($event){$event.stopPropagation();_vm.$emit('remove')}}},[_c('use',{attrs:{"xlink:href":"#icon-remove"}})]):_vm._e(),_vm._t("default"),_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.state==1),expression:"state==1"}],ref:"path",staticClass:"path",attrs:{"accept":"image/*","type":"file"},on:{"change":_vm.imageChange}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.state==2),expression:"state==2"},{name:"touch",rawName:"v-touch:move",value:(_vm.move),expression:"move",arg:"move"},{name:"touch",rawName:"v-touch:end",value:(_vm.end),expression:"end",arg:"end"},{name:"touch",rawName:"v-touch:scale",value:(_vm.scale),expression:"scale",arg:"scale"}],ref:"fileView",staticClass:"file-view"},[_c('img',{ref:"file",staticClass:"file",attrs:{"src":_vm.url,"alt":""}}),_c('div',{ref:"imgView",staticClass:"imgView"},[_c('div',{ref:"imgViewBox",staticClass:"imgViewBox"},[_c('img',{ref:"file2",staticClass:"file",attrs:{"src":_vm.url,"alt":""}})])]),_c('div',{staticClass:"ctrl"},[_c('div',{staticClass:"back",attrs:{"flex":"33","layout":"column","layout-align":"center center"},on:{"click":_vm.back}},[_vm._v("取消")]),_c('div',{staticClass:"rotate",attrs:{"flex":"33","layout":"column","layout-align":"center center"},on:{"click":_vm.rotateChange}},[_vm._v("旋转")]),_c('div',{staticClass:"submit",attrs:{"flex":"33","layout":"column","layout-align":"center center"},on:{"click":_vm.submitFile}},[_vm._v("确认")])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/m-image-crop.vue?vue&type=template&id=5b97bae0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./src/iconfont.js
var iconfont = __webpack_require__("7f35");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/m-image-crop.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * [events]
 * remove: 移除按钮被点击时触发
 * change: 改变选中图片时触发
 * submit: 图片操作完成时触发
 * cancel: 图片操作取消时触发
 */

/* harmony default export */ var m_image_cropvue_type_script_lang_js_ = ({
  name: 'm-image-crop',
  data: function data() {
    return {
      state: 1,
      // 截图状态
      top: null,
      // 初始移动Y
      left: null,
      // 初始移动X
      url: null,
      // 图片地址
      img: new Image(),
      maxSize: 3,
      // 最大缩放比
      initViewWidth: 74 / 100,
      // 初始截取区宽度比例
      borderWidth: 1,
      // 截取区border
      view: {
        width: 0,
        height: 0
      },
      // 屏幕
      fileSize: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      // 图片
      fileInitSize: {
        width: 0,
        height: 0
      },
      // 图片初始大小
      filRealitySize: {
        width: 0,
        height: 0
      },
      // 图片真实大小
      viewBox: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
      // 截取区
      rotate: 0,
      // 旋转角度 0 1 2 3
      point1: null,
      // 触控点1
      point2: null,
      // 触控点2
      indicator: {
        visible: false
      }
    };
  },
  props: {
    // 图片包装对象
    value: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    // 图片宽高比例
    proportion: {
      type: Object,
      default: function _default() {
        // w: 宽；h：高
        return {
          w: 2,
          h: 1
        };
      }
    },
    // 清晰度
    quality: {
      type: Number,
      default: 0.92
    },
    // 是否显示移除按钮
    hasRemove: {
      type: Boolean,
      default: false
    },
    // 是否跳过裁剪直接使用
    skipCrop: {
      type: Boolean,
      default: false
    },
    // 配置对象
    config: {
      type: Object,
      default: function _default() {
        return {
          size: 1200,
          // 图片最大宽度（px）
          isSlice: true,
          // 文件比例一致时是否需要裁剪，与skipCrop不同
          path: null // 显示图片时的路径，path参数将直接与图片id拼接(path + id)

        };
      }
    }
  },
  components: {},
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('touchmove', this.preventDefault, false);
    document.body.removeChild(this.$refs.fileView); // 退出销毁外置截取区域
  },
  mounted: function mounted() {
    // 初始化value格式
    document.body.appendChild(this.$refs.fileView); // 外置截取区域

    this.currentValue.origin = {};
    this.$nextTick(function () {
      this.initViewSize();
    });
  },
  methods: {
    imageChange: function imageChange(evt) {
      var _this = this;

      // 加载文件
      var file = evt.target.files[0];
      this.$emit('change', file);
      if (!file) return;
      var url = URL.createObjectURL(file);
      this.currentValue.origin = file; // 渲染图片

      this.img.src = url;

      this.img.onload = function () {
        _this.filRealitySize = {
          width: _this.img.width,
          height: _this.img.height
        };

        var showView = function showView() {
          _this.indicator.visible = true;

          _this.loadImg();

          setTimeout(function () {
            _this.indicator.visible = false;
            _this.state = 2;

            _this.$nextTick(function () {
              this.file2SizePosition();
            });
          }, 800);
        };

        if (_this.skipCrop) {
          _this.uploadCanvas();
        } else {
          if (_this.config.isSlice && _this.filRealitySize.width / _this.filRealitySize.height == _this.proportion.w / _this.proportion.h) {
            var flag = window.confirm('文件已符合规定尺寸，是否直接使用？');

            if (flag) {
              _this.uploadCanvas();
            } else {
              showView();
            }
          } else {
            showView();
          }
        }
      };
    },
    loadImg: function loadImg() {
      var imgWidth = this.filRealitySize.width;

      if (imgWidth > this.config.size) {
        imgWidth = this.config.size;
      }

      var imgHeight = imgWidth * (this.filRealitySize.height / this.filRealitySize.width); // 解决兼容 ios

      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      switch (this.rotate) {
        case 0:
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight);
          break;

        case 1:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth = imgWidth - imgHeight;
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(imgWidth, 0);
          ctx.rotate(90 * Math.PI / 180);
          ctx.drawImage(this.img, 0, 0, imgHeight, imgWidth);
          break;

        case 2:
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(imgWidth, imgHeight);
          ctx.rotate(180 * Math.PI / 180);
          ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight);
          break;

        case 3:
          imgWidth += imgHeight;
          imgHeight = imgWidth - imgHeight;
          imgWidth = imgWidth - imgHeight;
          canvas.setAttribute('width', imgWidth);
          canvas.setAttribute('height', imgHeight);
          ctx.translate(0, imgHeight);
          ctx.rotate(270 * Math.PI / 180);
          ctx.drawImage(this.img, 0, 0, imgHeight, imgWidth);
          break;
      }

      this.url = canvas.toDataURL(this.currentValue.origin.type, this.quality);

      if (imgWidth / imgHeight >= this.view.width / this.view.height) {
        // 判断图片长宽比
        var _fileSize = {
          width: this.view.width,
          height: imgHeight / imgWidth * this.view.width
        };

        if (_fileSize.height < this.viewBox.height) {
          // 判断是否小于截取区
          _fileSize.height = this.viewBox.height;
          _fileSize.width = imgWidth / imgHeight * _fileSize.height;
        }

        this.fileSize.width = _fileSize.width;
        this.fileSize.height = _fileSize.height;
        this.fileSize.left = 0;
        this.fileSize.top = (this.view.height - this.fileSize.height) / 2;
      } else {
        var _fileSize2 = {
          width: imgWidth / imgHeight * this.view.height,
          height: this.view.height
        };

        if (_fileSize2.width < this.viewBox.width) {
          _fileSize2.width = this.viewBox.width;
          _fileSize2.height = imgHeight / imgWidth * _fileSize2.width;
        }

        this.fileSize.height = _fileSize2.height;
        this.fileSize.width = _fileSize2.width;
        this.fileSize.top = 0;
        this.fileSize.left = (this.view.width - this.fileSize.width) / 2;
      }

      this.fileInitSize = {
        width: this.fileSize.width,
        height: this.fileSize.height
      };
      this.fileSizePosition();
    },
    initViewSize: function initViewSize() {
      this.view.width = document.documentElement.clientWidth;
      this.view.height = document.documentElement.clientHeight; // 屏幕

      this.$refs.fileView.style.width = this.view.width + 'px';
      this.$refs.fileView.style.height = this.view.height + 'px'; // 主工作区

      this.$refs.imgView.style.width = this.view.width + 'px';
      this.$refs.imgView.style.height = this.view.height + 'px'; // 视图区

      if (this.view.width * this.initViewWidth * this.proportion.h / this.proportion.w < this.view.height * this.initViewWidth) {
        // 判断宽高
        this.viewBox = {
          width: Math.floor(this.view.width * this.initViewWidth),
          height: Math.floor(this.view.width * this.initViewWidth * this.proportion.h / this.proportion.w)
        };
      } else {
        this.viewBox = {
          width: Math.floor(this.view.height * this.initViewWidth * this.proportion.w / this.proportion.h),
          height: Math.floor(this.view.height * this.initViewWidth)
        };
      }

      this.viewBox.left = Math.floor((this.view.width - this.viewBox.width) / 2);
      this.viewBox.top = Math.floor((this.view.height - this.viewBox.height) / 2);
      this.$refs.imgViewBox.style.width = this.viewBox.width + 'px';
      this.$refs.imgViewBox.style.height = this.viewBox.height + 'px';
      this.$refs.imgViewBox.style.top = this.viewBox.top + 'px';
      this.$refs.imgViewBox.style.left = this.viewBox.left + 'px';
    },
    fileSizePosition: function fileSizePosition() {
      this.$refs.file.style.top = this.fileSize.top + 'px';
      this.$refs.file.style.left = this.fileSize.left + 'px';
      this.$refs.file.style.width = this.fileSize.width + 'px';
      this.$refs.file.style.height = this.fileSize.height + 'px';
      this.file2SizePosition();
    },
    file2SizePosition: function file2SizePosition() {
      this.$refs.file2.style.top = this.$refs.file.offsetTop - (this.$refs.imgViewBox.offsetTop + this.borderWidth) + 'px';
      this.$refs.file2.style.left = this.$refs.file.offsetLeft - (this.$refs.imgViewBox.offsetLeft + this.borderWidth) + 'px';
      this.$refs.file2.style.width = this.$refs.file.offsetWidth + 'px';
      this.$refs.file2.style.height = this.$refs.file.offsetHeight + 'px';
    },
    setAttr: function setAttr(ele, attrs) {
      // 暂未用到
      if (!attrs && attrs.length < 1) {
        return;
      } // attrs.forEach((item, key)=>{
      //     console.log(item);
      //     console.log(key);
      // });

    },
    checkPosition: function checkPosition() {
      // 缩放移动校验
      var sizeFlag = false;

      if (this.fileSize.top >= this.viewBox.top + this.borderWidth) {
        // top 校验
        this.fileSize.top = this.viewBox.top + this.borderWidth;
      } else if (this.fileSize.top + this.fileSize.height <= this.viewBox.top + this.viewBox.height + this.borderWidth) {
        this.fileSize.top = this.viewBox.top + this.viewBox.height - this.fileSize.height + this.borderWidth;
      }

      if (this.fileSize.left >= this.viewBox.left + this.borderWidth) {
        // left 校验
        this.fileSize.left = this.viewBox.left + this.borderWidth;
      } else if (this.fileSize.left + this.fileSize.width <= this.viewBox.left + this.viewBox.width + this.borderWidth) {
        this.fileSize.left = this.viewBox.left + this.viewBox.width - this.fileSize.width + this.borderWidth;
      } // 缩放大小校验


      if (this.fileSize.width <= this.viewBox.width) {
        // width 校验
        this.fileSize.width = this.viewBox.width;
        this.fileSize.height = this.fileInitSize.height / this.fileInitSize.width * this.fileSize.width;
      }

      if (this.fileSize.height <= this.viewBox.height) {
        this.fileSize.height = this.viewBox.height;
        this.fileSize.width = this.fileInitSize.width / this.fileInitSize.height * this.fileSize.height;
      }

      if (this.fileSize.width > this.fileInitSize.width * this.maxSize) {
        this.fileSize.width = this.fileInitSize.width * this.maxSize;
        this.fileSize.height = this.fileInitSize.height / this.fileInitSize.width * this.fileSize.width;
        sizeFlag = true;
      }

      if (this.fileSize.height > this.fileInitSize.height * this.maxSize) {
        this.fileSize.height = this.fileInitSize.height * this.maxSize;
        this.fileSize.width = this.fileInitSize.width / this.fileInitSize.height * this.fileSize.height;
        sizeFlag = true;
      }

      if (sizeFlag) {
        this.fileSize.left = this.$refs.file.offsetLeft; // 阻止移动

        this.fileSize.top = this.$refs.file.offsetTop;
      }
    },
    move: function move(evt) {
      if (this.top) {
        this.fileSize.top = Math.floor(this.$refs.file.offsetTop + evt.touches[0].clientY - this.top);
        this.fileSize.left = Math.floor(this.$refs.file.offsetLeft + evt.touches[0].clientX - this.left);
        this.checkPosition();
        this.fileSizePosition();
      }

      this.top = evt.touches[0].clientY;
      this.left = evt.touches[0].clientX;
    },
    scale: function scale(evt) {
      if (this.point1) {
        var scale = this.distance(evt.touches);
        var oldSize = {
          width: this.fileSize.width,
          height: this.fileSize.height
        };
        var newSize = {
          width: oldSize.width * scale,
          height: oldSize.height * scale
        };
        this.fileSize.width = newSize.width;
        this.fileSize.height = newSize.height;
        this.fileSize.left = this.$refs.file.offsetLeft - (newSize.width - oldSize.width) / 2;
        this.fileSize.top = this.$refs.file.offsetTop - (newSize.height - oldSize.height) / 2;
        this.checkPosition();
        this.fileSizePosition();
      }

      this.point1 = JSON.stringify(evt.touches[0]).length < 3 ? evt.touches[0] : JSON.parse(JSON.stringify(evt.touches[0]));
      this.point2 = JSON.stringify(evt.touches[1]).length < 3 ? evt.touches[1] : JSON.parse(JSON.stringify(evt.touches[1]));
    },
    distance: function distance(touches) {
      var oldVal = Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
      var newVal = Math.sqrt(Math.pow(this.point1.clientX - this.point2.clientX, 2) + Math.pow(this.point1.clientY - this.point2.clientY, 2));
      var scale = oldVal / newVal;
      return scale;
    },
    imgSizeScale: function imgSizeScale() {
      var sizeScale;

      if (this.viewBox.width / this.$refs.file.offsetWidth * this.filRealitySize.width < this.config.size) {
        sizeScale = Number((this.viewBox.width / this.$refs.file.offsetWidth * this.filRealitySize.width / this.viewBox.width).toFixed(15));
      } else {
        sizeScale = this.config.size / this.viewBox.width;
      }

      return sizeScale;
    },
    setCanvas: function setCanvas() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var sizeScale = this.imgSizeScale(); // 固定大小宽度比值

      canvas.setAttribute('width', this.viewBox.width * sizeScale);
      canvas.setAttribute('height', this.viewBox.height * sizeScale);
      ctx.drawImage(this.$refs.file, (this.$refs.file.offsetLeft - this.viewBox.left - this.borderWidth) * sizeScale, (this.$refs.file.offsetTop - this.viewBox.top - this.borderWidth) * sizeScale, this.$refs.file.offsetWidth * sizeScale, this.$refs.file.offsetHeight * sizeScale); // let base64 = canvas.toDataURL(this.currentValue.origin.type, this.quality);

      var base64 = canvas.toDataURL('image/jpeg', this.quality);
      this.$set(this.currentValue, 'base64', base64); // this.currentValue.content = base64.split(',')[1];

      this.currentValue.id = null;
      this.$emit('submit', this.currentValue);
    },
    uploadCanvas: function uploadCanvas() {
      // 不裁剪，直接使用
      var imgWidth = this.filRealitySize.width;

      if (imgWidth > this.config.size) {
        imgWidth = this.config.size;
      }

      var imgHeight = imgWidth * (this.filRealitySize.height / this.filRealitySize.width);
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.setAttribute('width', imgWidth);
      canvas.setAttribute('height', imgHeight);
      ctx.drawImage(this.img, 0, 0, imgWidth, imgHeight); // let _base64 = canvas.toDataURL(this.currentValue.origin.type, this.quality);

      var base64 = canvas.toDataURL('image/jpeg', this.quality);
      this.$set(this.currentValue, 'base64', base64); // this.currentValue.content = base64.split(',')[1];

      this.currentValue.id = null;
      this.$emit('submit', this.currentValue);
    },
    end: function end() {
      this.top = null;
      this.left = null;
      this.point1 = null;
      this.point2 = null;
    },
    preventDefault: function preventDefault(e) {
      e.preventDefault();
    },
    addEventDefault: function addEventDefault() {
      document.addEventListener('touchmove', this.preventDefault, false);
    },
    removeEventDefault: function removeEventDefault() {
      document.removeEventListener('touchmove', this.preventDefault, false);
    },
    submitFile: function submitFile() {
      this.state = 1;
      this.$refs.path.value = null; // 重置选取文件

      this.setCanvas();
    },
    rotateChange: function rotateChange() {
      this.rotate++;
      this.rotate %= 4;
      this.loadImg();
    },
    back: function back() {
      this.state = 1;
      this.$refs.path.value = null; // 重置选取文件

      this.$emit('cancel');
    }
  },
  watch: {
    state: function state(newVal) {
      if (newVal === 2) {
        this.addEventDefault();
      } else {
        this.removeEventDefault();
      }
    }
  },
  computed: {
    currentValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  filters: {
    fileSrc: function fileSrc(value) {
      if (value) {
        if (value.base64) {
          return value.base64;
        } else if (value.id) {
          return this.config.path + value.id;
        } else {
          return '';
        }
      } else {
        return '';
      }
    }
  },
  directives: {
    touch: {
      bind: function bind(el, binding) {
        /* 传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap move end*/
        var touchType = binding.arg;
        var timeOutEvent = 0;
        var direction = '';
        /* 滑动处理 */

        var startX, startY;
        /* 返回角度 */

        function GetSlideAngle(dx, dy) {
          return Math.atan2(dy, dx) * 180 / Math.PI;
        }
        /* 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动 */


        function GetSlideDirection(startX, startY, endX, endY) {
          var dy = startY - endY;
          var dx = endX - startX;
          var result = 0;
          /* 如果滑动距离太短 */

          if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return 'tap';
          }

          var angle = GetSlideAngle(dx, dy);

          if (angle >= -45 && angle < 45) {
            result = 'swiperight';
          } else if (angle >= 45 && angle < 135) {
            result = 'swipeup';
          } else if (angle >= -135 && angle < -45) {
            result = 'swipedown';
          } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
            result = 'swipeleft';
          }

          return result;
        }

        el.addEventListener('touchstart', function (ev) {
          startX = ev.touches[0].pageX;
          startY = ev.touches[0].pageY;
          /* 判断长按 */

          timeOutEvent = setTimeout(function () {
            timeOutEvent = 0;

            if (touchType === 'press') {
              binding.value(ev);
            }
          }, 500);
        }, false);
        el.addEventListener('touchmove', function (ev) {
          clearTimeout(timeOutEvent);
          timeOutEvent = 0;

          if (ev.touches.length === 1) {
            if (touchType === 'move') {
              binding.value(ev);
            }
          } else if (event.touches.length === 2) {
            if (touchType === 'scale') {
              binding.value(ev);
            }
          }
        });
        el.addEventListener('touchend', function (ev) {
          var endX, endY;
          endX = ev.changedTouches[0].pageX;
          endY = ev.changedTouches[0].pageY;
          direction = GetSlideDirection(startX, startY, endX, endY);
          clearTimeout(timeOutEvent);

          if (touchType === 'end') {
            binding.value(ev);
          }

          switch (direction) {
            case 0:
              break;

            case 'tap':
              if (touchType === 'tap') {
                binding.value(ev);
              }

              break;

            case 'swipeup':
              if (touchType === 'swipeup') {
                binding.value(ev);
              }

              break;

            case 'swipedown':
              if (touchType === 'swipedown') {
                binding.value(ev);
              }

              break;

            case 'swipeleft':
              if (touchType === 'swipeleft') {
                binding.value(ev);
              }

              break;

            case 'swiperight':
              if (touchType === 'swiperight') {
                binding.value(ev);
              }

              break;

            default:
              break;
          }
        }, false);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/m-image-crop.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_m_image_cropvue_type_script_lang_js_ = (m_image_cropvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/m-image-crop.vue?vue&type=style&index=0&lang=less&
var m_image_cropvue_type_style_index_0_lang_less_ = __webpack_require__("0b10");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/m-image-crop.vue






/* normalize component */

var component = normalizeComponent(
  src_m_image_cropvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "m-image-crop.vue"
/* harmony default export */ var m_image_crop = (component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = ({
  version: '0.0.1',
  install: function install(Vue) {
    Vue.component(m_image_crop.name, m_image_crop);
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
//# sourceMappingURL=vueImageCrop.common.js.map