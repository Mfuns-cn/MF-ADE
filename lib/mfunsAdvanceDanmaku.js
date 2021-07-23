/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".danmaku-containers{\n    position: relative;\n}\n.danmaku-containers  *{\n    box-sizing: border-box;\n    transform-style: preserve-3d;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 100px;\n    image-rendering: pixelated; /* 小图片放大后像素不虚化 */\n}\n.danmaku-containers .stage{\n    position: absolute;\n    overflow: hidden;\n    perspective:1000px;\n    transform-style: preserve-3d;\n}\n.danmaku-containers-debug *{\n    outline: 1px solid red;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,gBAAgB;IAChB,0BAA0B,EAAE,gBAAgB;AAChD;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,sBAAsB;AAC1B","sourcesContent":[".danmaku-containers{\n    position: relative;\n}\n.danmaku-containers  *{\n    box-sizing: border-box;\n    transform-style: preserve-3d;\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 100px;\n    image-rendering: pixelated; /* 小图片放大后像素不虚化 */\n}\n.danmaku-containers .stage{\n    position: absolute;\n    overflow: hidden;\n    perspective:1000px;\n    transform-style: preserve-3d;\n}\n.danmaku-containers-debug *{\n    outline: 1px solid red;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ts/Context/Context.ts":
/*!***********************************!*\
  !*** ./src/ts/Context/Context.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/**
 * 全局上下文
 */
var Context = /** @class */ (function () {
    function Context() {
    }
    /**
     * 当前语言
     */
    Context.language = "zh-cn";
    Context.debug = false;
    return Context;
}());



/***/ }),

/***/ "./src/ts/Controller/Controller.ts":
/*!*****************************************!*\
  !*** ./src/ts/Controller/Controller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context/Context */ "./src/ts/Context/Context.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var src_ts_Factory_RendererFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ts/Factory/RendererFactory */ "./src/ts/Factory/RendererFactory.ts");
/* harmony import */ var _core_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Style/Unit/PxSize */ "./src/ts/core/Style/Unit/PxSize.ts");
/* harmony import */ var _Factory_TimeLineFactort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory/TimeLineFactort */ "./src/ts/Factory/TimeLineFactort.ts");
/* harmony import */ var _Factory_DanmakuParser_JsonDanmakuParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory/DanmakuParser/JsonDanmakuParser */ "./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts");






/**
 * 控制器 ，统一管理整个弹幕系统
 * 在这里，每种弹幕类型都会得到一个舞台对象，进行渲染
 */
var Controller = /** @class */ (function () {
    function Controller(containers) {
        /**
         * 舞台列表
         */
        this.stageList = [];
        /**
         * 暂停状态
         */
        this.pauseStatus = true;
        /**
         * 时间戳
         */
        this.timeStamp = 0;
        /**
         * 播放的时间
         */
        this.time = 0;
        /**
         * 跳转状态
         */
        this.skipStatus = false;
        this.danmakuFunction = {};
        this.containers = containers;
        // 获取实时的style对象，当大小发生变化时，会更新自身
        this.canvasStyle = window.getComputedStyle(containers);
        // 初始化容器
        this.initContainer();
        var that = this;
        (function animloop() {
            if (!that.pauseStatus) {
                that.refresh();
            }
            requestAnimationFrame(animloop);
        })();
    }
    /**
     * 获得容器尺寸
     */
    Controller.prototype.getContainersSize = function () {
        return {
            width: new _core_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__.PxSize(parseInt(this.canvasStyle.width, 10)),
            height: new _core_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__.PxSize(parseInt(this.canvasStyle.height, 10)),
        };
    };
    /**
     * 将一个舞台添加到容器内
     * @param stage 舞台
     * @param index 排列顺序
     * @returns 成功与失败的状态
     */
    Controller.prototype.registStage = function (stage, index) {
        // 检查列表中是否存在
        if (this.stageList[index]) {
            return false;
        }
        this.stageList[index] = stage;
        return true;
    };
    /**
     * 将舞台挂载到容器中
     */
    Controller.prototype.mount = function () {
        var _this = this;
        console.info(_i18n__WEBPACK_IMPORTED_MODULE_1__.I18n.t("Start mount stage"));
        // 遍历每一个舞台
        this.stageList.forEach(function (stage, key) {
            // 获取一个div
            var div = _this.getDIV();
            // 给舞台初始化渲染器
            var render = src_ts_Factory_RendererFactory__WEBPACK_IMPORTED_MODULE_2__.RendererFactory.getRenderInstance(stage.rendererType());
            // 将div挂载到渲染器
            render.setCanvasContainer(div);
            // 设置舞台渲染器
            stage.stageRenderer(render);
            // 设置舞台时间轴
            var lineType = stage.timeLineType();
            var timeline = _Factory_TimeLineFactort__WEBPACK_IMPORTED_MODULE_4__.TimeLineFactory.getTimeLine(lineType);
            stage.timeLine(timeline);
            // 检察是否存在弹幕获取器
            if (_this.danmakuFunction[lineType]) {
                // 如果存在，就获取弹幕
                _this.resetDanmaku(key);
            }
            else {
                console.warn(_i18n__WEBPACK_IMPORTED_MODULE_1__.I18n.t("danmaku get function is null :" + lineType));
            }
            // 更新渲染器内画布样式
            render.updateCanvasStyle(_this.getCanvasStylByStage(stage));
        });
    };
    /**
     * 初始化弹幕容器
     */
    Controller.prototype.initContainer = function () {
        if (_Context_Context__WEBPACK_IMPORTED_MODULE_0__.Context.debug) {
            // debug模式
            this.containers.classList.add("danmaku-containers-debug");
        }
        this.containers.classList.add("danmaku-containers");
    };
    /**
     * 重置尺寸
     */
    Controller.prototype.resize = function () {
        var _this = this;
        // 重置舞台的尺寸
        this.stageList.forEach(function (stage) {
            var render = stage.getRenderer();
            if (render) {
                render.updateCanvasStyle(_this.getCanvasStylByStage(stage));
            }
        });
    };
    /**
     * 创建div容器
     */
    Controller.prototype.getDIV = function () {
        var div = document.createElement("div");
        div.classList.add("stage");
        this.containers.appendChild(div);
        return div;
    };
    /**
     * 根据舞台对象创建一个canvasStyle
     * @param stage 舞台对象
     * @returns
     */
    Controller.prototype.getCanvasStylByStage = function (stage) {
        var size = stage.stageSize(this.getContainersSize());
        var color = stage.stageBackgroundColor(this.getContainersSize());
        var pos = stage.stagePosition(this.getContainersSize(), size);
        return { position: pos, color: color, size: size };
    };
    Controller.prototype.refresh = function () {
        var _this = this;
        this.time = Date.now() - this.timeStamp;
        // 通知每个舞台刷新
        this.stageList.forEach(function (stage) {
            // console.log(1)
            stage.refresh(_this.time);
        });
    };
    /**
     * 暂停
     */
    Controller.prototype.pause = function () {
        if (!this.pauseStatus) {
            this.pauseStatus = true;
        }
    };
    /**
     * 播放
     */
    Controller.prototype.start = function () {
        if (this.pauseStatus) {
            // 同步时间
            this.timeStamp = Date.now() - this.time;
            this.pauseStatus = false;
        }
    };
    /**
     * 跳转
     */
    Controller.prototype.skip = function (time) {
        if (this.pauseStatus) {
            // 如果是暂停状态
            this.time = time;
        }
        else {
            // 否则使用这个方法
            this.timeStamp = Date.now() - time;
        }
    };
    /**
     * 重置整个系统
     */
    Controller.prototype.reset = function () {
        // 清空所有舞台
        this.stageList.forEach(function (stage) {
            stage.reset();
        });
        this.pauseStatus = true;
        this.timeStamp = 0;
        this.time = 0;
        this.skipStatus = false;
    };
    Controller.prototype.getTime = function () {
        return this.time;
    };
    Controller.prototype.addGetDanmakuFunction = function (type, fun) {
        this.danmakuFunction[type] = fun;
    };
    Controller.prototype.resetDanmaku = function (type) {
        if (this.stageList[type]) {
            var stage_1 = this.stageList[type];
            stage_1.getTimeLine().reset();
            var lineType = stage_1.timeLineType();
            var fun = this.danmakuFunction[lineType];
            if (!!fun) {
                fun(function (res) {
                    var parser = new _Factory_DanmakuParser_JsonDanmakuParser__WEBPACK_IMPORTED_MODULE_5__.JsonDanmakuParser();
                    var timeline = stage_1.getTimeLine();
                    res.forEach(function (danmakuStr) {
                        parser.parser(danmakuStr).forEach(function (danmaku) {
                            timeline.addDanmaku(danmaku);
                        });
                    });
                });
            }
        }
    };
    return Controller;
}());



/***/ }),

/***/ "./src/ts/Event/DanmakuEvent.ts":
/*!**************************************!*\
  !*** ./src/ts/Event/DanmakuEvent.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuEvent": () => (/* binding */ DanmakuEvent)
/* harmony export */ });
/**
 * 弹幕事件工具
 */
var DanmakuEvent = /** @class */ (function () {
    function DanmakuEvent() {
    }
    /**
     * 包装事件名称字符串
     * @param eventname 事件名称
     * @returns
     */
    DanmakuEvent.buildPrefix = function (eventname) {
        return this.prefix + eventname;
    };
    DanmakuEvent.register = function (eventname, callback) {
        window.addEventListener(this.buildPrefix(eventname), function (data) {
            callback(data.detail);
        });
    };
    /**
     * 触发弹幕事件
     * @param eventname
     * @param data
     */
    DanmakuEvent.dispatch = function (eventname, data) {
        // 包装事件
        var event = new CustomEvent(this.buildPrefix(eventname), {
            detail: data,
        });
        // 触发事件
        window.dispatchEvent(event);
    };
    // 事件前缀，防止冲突
    DanmakuEvent.prefix = "_danmakuevent_";
    return DanmakuEvent;
}());



/***/ }),

/***/ "./src/ts/Event/DanmakuEventType.ts":
/*!******************************************!*\
  !*** ./src/ts/Event/DanmakuEventType.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuEventType": () => (/* binding */ DanmakuEventType)
/* harmony export */ });
/**
 * 弹幕事件类型枚举
 */
var DanmakuEventType;
(function (DanmakuEventType) {
    /**
     * 弹幕字符串无效
     */
    DanmakuEventType["DANMAKU_JSON_INVALID"] = "DANMAKU_JSON_INVALID";
    /**
     * 单条弹幕格式错误
     */
    DanmakuEventType["DANMAKU_FORMAT_ERROR"] = "DANMAKU_FORMAT_ERROR";
    /**
     * 弹幕开始加载
     */
    DanmakuEventType["DANMAKU_LOAD_START"] = "DANMAKU_LOAD_START";
    DanmakuEventType["DANMAKU_LOAD_DONE"] = "DANMAKU_LOAD_DONE";
})(DanmakuEventType || (DanmakuEventType = {}));


/***/ }),

/***/ "./src/ts/Factory/AnimationFactory.ts":
/*!********************************************!*\
  !*** ./src/ts/Factory/AnimationFactory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFactory": () => (/* binding */ AnimationFactory)
/* harmony export */ });
/* harmony import */ var _core_Animation_CompositeAnimation_GroupAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Animation/CompositeAnimation/GroupAnimations */ "./src/ts/core/Animation/CompositeAnimation/GroupAnimations.ts");
/* harmony import */ var _core_Animation_CompositeAnimation_ListAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Animation/CompositeAnimation/ListAnimations */ "./src/ts/core/Animation/CompositeAnimation/ListAnimations.ts");
/* harmony import */ var _core_Animation_styleAnimations_OpacityAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Animation/styleAnimations/OpacityAnimations */ "./src/ts/core/Animation/styleAnimations/OpacityAnimations.ts");
/* harmony import */ var _core_Animation_CompositeAnimation_RepeatAnimations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Animation/CompositeAnimation/RepeatAnimations */ "./src/ts/core/Animation/CompositeAnimation/RepeatAnimations.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_ScaleAnimations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/ScaleAnimations */ "./src/ts/core/Animation/TransformsAnimations/ScaleAnimations.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_TranslateAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/TranslateAnimation */ "./src/ts/core/Animation/TransformsAnimations/TranslateAnimation.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_RotationXAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/RotationXAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationXAnimation.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_RotationYAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/RotationYAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationYAnimation.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_RotationZAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/RotationZAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationZAnimation.ts");
/* harmony import */ var _core_Animation_TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Animation/TransformsAnimations/StaticAnimation */ "./src/ts/core/Animation/TransformsAnimations/StaticAnimation.ts");










var AnimationFactory = /** @class */ (function () {
    function AnimationFactory() {
    }
    AnimationFactory.getAnimations = function (type, params) {
        if (this.animationList[type]) {
            // console.log(params);
            var ani = new this.animationList[type]();
            // console.log(ani);
            ani.setParams(params);
            return ani;
        }
        return false;
    };
    AnimationFactory.getAnimationsList = function (list) {
        var _this = this;
        var animationList = [];
        list === null || list === void 0 ? void 0 : list.forEach(function (val) {
            var ani = _this.getAnimations(val["type"], val);
            if (ani) {
                animationList.push(ani);
            }
        });
        return animationList;
    };
    AnimationFactory.animationList = {
        "static": _core_Animation_TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_9__.StaticAnimation,
        "translate": _core_Animation_TransformsAnimations_TranslateAnimation__WEBPACK_IMPORTED_MODULE_5__.TranslateAnimation,
        "rotateX": _core_Animation_TransformsAnimations_RotationXAnimation__WEBPACK_IMPORTED_MODULE_6__.RotationXAnimation,
        "rotateY": _core_Animation_TransformsAnimations_RotationYAnimation__WEBPACK_IMPORTED_MODULE_7__.RotationYAnimation,
        "rotateZ": _core_Animation_TransformsAnimations_RotationZAnimation__WEBPACK_IMPORTED_MODULE_8__.RotationZAnimation,
        "scale": _core_Animation_TransformsAnimations_ScaleAnimations__WEBPACK_IMPORTED_MODULE_4__.ScaleAnimations,
        "list": _core_Animation_CompositeAnimation_ListAnimations__WEBPACK_IMPORTED_MODULE_1__.ListAnimations,
        "group": _core_Animation_CompositeAnimation_GroupAnimations__WEBPACK_IMPORTED_MODULE_0__.GroupAnimations,
        "repeat": _core_Animation_CompositeAnimation_RepeatAnimations__WEBPACK_IMPORTED_MODULE_3__.RepeatAnimations,
        "opacity": _core_Animation_styleAnimations_OpacityAnimations__WEBPACK_IMPORTED_MODULE_2__.OpacityAnimations
    };
    return AnimationFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/DanmakuParser/DanmakuFactory.ts":
/*!********************************************************!*\
  !*** ./src/ts/Factory/DanmakuParser/DanmakuFactory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuFactory": () => (/* binding */ DanmakuFactory)
/* harmony export */ });
/* harmony import */ var src_ts_core_Danmaku_BaseDanmaku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/core/Danmaku/BaseDanmaku */ "./src/ts/core/Danmaku/BaseDanmaku.ts");

/**
 * 弹幕解析器工厂
 */
var DanmakuFactory = /** @class */ (function () {
    function DanmakuFactory() {
    }
    DanmakuFactory.getDanmakuInstance = function (type) {
        if (!this.list[type]) {
            type = "text";
        }
        return new this.list[type]();
    };
    DanmakuFactory.list = {
        "text": src_ts_core_Danmaku_BaseDanmaku__WEBPACK_IMPORTED_MODULE_0__.BaseDanmaku
    };
    return DanmakuFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts":
/*!***********************************************************!*\
  !*** ./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonDanmakuParser": () => (/* binding */ JsonDanmakuParser)
/* harmony export */ });
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _DanmakuFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DanmakuFactory */ "./src/ts/Factory/DanmakuParser/DanmakuFactory.ts");
/* harmony import */ var src_ts_Event_DanmakuEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/ts/Event/DanmakuEvent */ "./src/ts/Event/DanmakuEvent.ts");
/* harmony import */ var src_ts_Event_DanmakuEventType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/ts/Event/DanmakuEventType */ "./src/ts/Event/DanmakuEventType.ts");





/**
 * JSON 格式弹幕解析器
 */
var JsonDanmakuParser = /** @class */ (function () {
    function JsonDanmakuParser() {
    }
    JsonDanmakuParser.prototype.parser = function (content) {
        try {
            var json = JSON.parse(content);
            return this.getDanmaku(json);
        }
        catch (e) {
            // 触发弹幕格式无效事件
            src_ts_Event_DanmakuEvent__WEBPACK_IMPORTED_MODULE_3__.DanmakuEvent.dispatch(src_ts_Event_DanmakuEventType__WEBPACK_IMPORTED_MODULE_4__.DanmakuEventType.DANMAKU_JSON_INVALID, src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.t("Danmaku parser fail"));
            console.warn(src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.t("Danmaku parser fail"));
            console.warn(e);
            return [];
        }
    };
    /**
     * 获取弹幕
     * @param obj
     * @returns
     */
    JsonDanmakuParser.prototype.getDanmaku = function (obj) {
        var _this = this;
        var list = [];
        /**
         * 遍历弹幕列表
         */
        obj === null || obj === void 0 ? void 0 : obj.forEach(function (dan, index) {
            /**
             * 检测弹幕类型是否正确
             */
            if (typeof dan !== "object") {
                console.warn(src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.t("Unknown danmaku format") + " :  " + dan + "  index: + " + index);
                // 触发弹幕类型错误事件
                src_ts_Event_DanmakuEvent__WEBPACK_IMPORTED_MODULE_3__.DanmakuEvent.dispatch(src_ts_Event_DanmakuEventType__WEBPACK_IMPORTED_MODULE_4__.DanmakuEventType.DANMAKU_FORMAT_ERROR, {
                    content: dan,
                    index: index
                });
            }
            else {
                var danmaku = _DanmakuFactory__WEBPACK_IMPORTED_MODULE_2__.DanmakuFactory.getDanmakuInstance(dan.type);
                if (!(dan === null || dan === void 0 ? void 0 : dan.animations) || (dan === null || dan === void 0 ? void 0 : dan.animations) === []) {
                    dan.animations = [{ type: "static" }];
                }
                danmaku.setParams({
                    start: dan === null || dan === void 0 ? void 0 : dan.start,
                    content: dan === null || dan === void 0 ? void 0 : dan.content,
                    style: dan === null || dan === void 0 ? void 0 : dan.style,
                    animation: _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__.AnimationFactory.getAnimations("list", {
                        animations: dan === null || dan === void 0 ? void 0 : dan.animations,
                    }),
                    child: _this.getDanmaku(dan.childs),
                });
                list.push(danmaku);
            }
        });
        return list;
    };
    return JsonDanmakuParser;
}());



/***/ }),

/***/ "./src/ts/Factory/RendererFactory.ts":
/*!*******************************************!*\
  !*** ./src/ts/Factory/RendererFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RendererFactory": () => (/* binding */ RendererFactory)
/* harmony export */ });
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var src_ts_core_Renderer_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ts/core/Renderer/BaseRenderer */ "./src/ts/core/Renderer/BaseRenderer.ts");
/* harmony import */ var _core_Renderer_CSS3Renderer_CSS3Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Renderer/CSS3Renderer/CSS3Renderer */ "./src/ts/core/Renderer/CSS3Renderer/CSS3Renderer.ts");
/**
 * 简单渲染器工厂
 */



var RendererFactory = /** @class */ (function () {
    function RendererFactory() {
    }
    RendererFactory.getRenderInstance = function (type) {
        if (this.rendererList[type]) {
            return new this.rendererList[type]();
        }
        else {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.t("Renderer type is null"));
        }
    };
    RendererFactory.rendererList = {
        base: src_ts_core_Renderer_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__.BaseRenderer,
        css3: _core_Renderer_CSS3Renderer_CSS3Renderer__WEBPACK_IMPORTED_MODULE_2__.CSS3Renderer
    };
    return RendererFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/TimeLineFactort.ts":
/*!*******************************************!*\
  !*** ./src/ts/Factory/TimeLineFactort.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeLineFactory": () => (/* binding */ TimeLineFactory)
/* harmony export */ });
/* harmony import */ var _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TimeLine/AdvancedLine */ "./src/ts/TimeLine/AdvancedLine.ts");

var TimeLineFactory = /** @class */ (function () {
    function TimeLineFactory() {
    }
    TimeLineFactory.getTimeLine = function (type) {
        if (!this.list[type]) {
            type = "default";
        }
        return new this.list[type]();
    };
    TimeLineFactory.list = {
        "defult": _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__.AdvancedLine,
        "advance": _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__.AdvancedLine
    };
    return TimeLineFactory;
}());



/***/ }),

/***/ "./src/ts/TimeLine/AdvancedLine.ts":
/*!*****************************************!*\
  !*** ./src/ts/TimeLine/AdvancedLine.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedLine": () => (/* binding */ AdvancedLine)
/* harmony export */ });
var AdvancedLine = /** @class */ (function () {
    function AdvancedLine() {
        /**
         * 上次获取时间(10ms)
         */
        this.lastTime = 0;
        /**
         * 时间轴,二维数组，一维是弹幕的开始10毫秒数，二维是此毫秒数下的弹幕集合
         * 注意：为了节省性能，最小单位时间是10ms，
         *       仅仅是数组下标是10ms，其余的都是按照ms计算的
         */
        this.danmakuList = [];
    }
    /**
     * 添加一个弹幕
     * @param danmaku
     * @param start
     * @param end
     */
    AdvancedLine.prototype.addDanmaku = function (danmaku, start, end) {
        start = start || danmaku.startTime();
        end = end || danmaku.getAnimation().getDuration() + start;
        var index = this.timeToIndex(start);
        if (!this.danmakuList[index]) {
            this.danmakuList[index] = [];
        }
        this.danmakuList[index].push({
            danmaku: danmaku,
            start: start,
            end: end
        });
    };
    /**
     * 时间转换
     * @param time
     * @returns
     */
    AdvancedLine.prototype.timeToIndex = function (time) {
        return Math.floor(time / 10);
    };
    AdvancedLine.prototype.getDanmakuList = function (time) {
        time = this.timeToIndex(time);
        // 如果请求的时间超过了时间轴。。。
        if (time < 0) {
            return { skip: false, DanmakuList: [] };
        }
        var arr = [];
        var skip = false;
        if (this.lastTime <= time && time - this.lastTime < 5) {
            // 正常播放情况,遍历期间的所有内容
            // console.log(this.lastTime);
            for (var a = this.lastTime; a < time; a++) {
                if (this.danmakuList[a]) {
                    // console.log(time);
                    arr.push.apply(arr, this.danmakuList[a]);
                }
            }
        }
        else {
            // 否则说明播放发生了跳转，则遍历找到合适的内容
            // 查找范围：在当前时间之前开始的，并且结束于当前时间之后的，
            // 先找到之前开始的
            // console.log(time);
            for (var timeIndex = 0; timeIndex < time; timeIndex++) {
                if (!this.danmakuList[timeIndex]) {
                    continue; // 当前时间不存在
                }
                // 接着再查找当前时间之后结束的
                for (var l = 0; l < this.danmakuList.length; l++) {
                    if (this.danmakuList[timeIndex][l]
                        &&
                            this.timeToIndex(this.danmakuList[timeIndex][l].end)
                                > time) {
                        arr.push(this.danmakuList[timeIndex][l]);
                    }
                }
            }
            skip = true;
        }
        this.lastTime = time;
        return { skip: skip, DanmakuList: arr };
    };
    AdvancedLine.prototype.reset = function () {
        this.danmakuList = [];
        return true;
    };
    return AdvancedLine;
}());



/***/ }),

/***/ "./src/ts/core/Animation/Base/Cubic.ts":
/*!*********************************************!*\
  !*** ./src/ts/core/Animation/Base/Cubic.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cubic": () => (/* binding */ Cubic)
/* harmony export */ });
/**
 * 贝塞尔相关工具函数
 */
var Cubic = /** @class */ (function () {
    function Cubic(a, b, c, d) {
        this.px3 = 3 * a;
        this.px2 = 3 * (c - a) - this.px3;
        this.px1 = 1 - this.px3 - this.px2;
        this.py3 = 3 * b;
        this.py2 = 3 * (d - b) - this.py3;
        this.py1 = 1 - this.py3 - this.py2;
        this.epsilon = 1e-7; // 目标精度
    }
    Cubic.prototype.getX = function (t) {
        return ((this.px1 * t + this.px2) * t + this.px3) * t;
    };
    Cubic.prototype.getY = function (t) {
        return ((this.py1 * t + this.py2) * t + this.py3) * t;
    };
    Cubic.prototype.solve = function (x) {
        if (x === 0 || x === 1) { // 对 0 和 1 两个特殊 t 不做计算
            return this.getY(x);
        }
        var t = x;
        for (var i = 0; i < 8; i++) { // 进行 8 次迭代
            var g = this.getX(t) - x;
            if (Math.abs(g) < this.epsilon) { // 检测误差到可以接受的范围
                return this.getY(t);
            }
            var d = (3 * this.px1 * t + 2 * this.px2) * t + this.px3; // 对 x 求导
            if (Math.abs(d) < 1e-6) { // 如果梯度过低，说明牛顿迭代法无法达到更高精度
                break;
            }
            t = t - g / d;
        }
        return this.getY(t); // 对得到的近似 t 求 y
    };
    return Cubic;
}());



/***/ }),

/***/ "./src/ts/core/Animation/Base/CubicAnimations.ts":
/*!*******************************************************!*\
  !*** ./src/ts/core/Animation/Base/CubicAnimations.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubicAnimations": () => (/* binding */ CubicAnimations)
/* harmony export */ });
/* harmony import */ var _Cubic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cubic */ "./src/ts/core/Animation/Base/Cubic.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

/**
 * 贝塞尔动画类
 */
var CubicAnimations = /** @class */ (function () {
    function CubicAnimations() {
        /**
         * 贝塞尔参数
         */
        this.cubic = [0, 0, 1, 1];
        /**
         * 动画总时间
         */
        this.duration = 1000;
    }
    // currentTime:number = 0
    CubicAnimations.prototype.getMatrix = function (time) {
        if (this.isEnd(time)) {
            return false;
        }
        var p = this.getProgress(time);
        var a = this.getMatrixForCubic(p, this.duration * p);
        return a;
    };
    CubicAnimations.prototype.getStyle = function (time) {
        if (this.isEnd(time)) {
            return false;
        }
        var p = this.getProgress(time);
        return this.getCubicStyle(p, this.duration * p);
    };
    CubicAnimations.prototype.setParams = function (param) {
        this.cubic = (param === null || param === void 0 ? void 0 : param.cubic) ? param === null || param === void 0 ? void 0 : param.cubic : this.cubic;
        this.duration = (param === null || param === void 0 ? void 0 : param.duration) ? param === null || param === void 0 ? void 0 : param.duration : this.duration;
        return true;
    };
    CubicAnimations.prototype.getDuration = function () {
        return this.duration;
    };
    /**
     * 根据动画时间获取动画进度
     * @param time 动画时间
     * @returns
     */
    CubicAnimations.prototype.getProgress = function (time) {
        // 计算当前动画进度
        var progress = time / this.duration;
        // 计算出实际动画进度
        var a = this.getCubic().solve(progress);
        return a;
    };
    /**
     * 根据进度返回区间内的值
     * @param start
     * @param end
     * @param progress
     */
    CubicAnimations.prototype.getProgressValue = function (start, end, progress) {
        return start + (end - start) * progress;
    };
    /**
     * 判断动画是否结束
     */
    CubicAnimations.prototype.isEnd = function (time) {
        return time > this.duration;
    };
    /**
     * 获取贝塞尔函数
     * @returns
     */
    CubicAnimations.prototype.getCubic = function () {
        if (!this.cubicFunc) {
            this.cubicFunc = new (_Cubic__WEBPACK_IMPORTED_MODULE_0__.Cubic.bind.apply(_Cubic__WEBPACK_IMPORTED_MODULE_0__.Cubic, __spreadArray([void 0], this.cubic)))();
        }
        return this.cubicFunc;
    };
    return CubicAnimations;
}());



/***/ }),

/***/ "./src/ts/core/Animation/Base/Matrix.ts":
/*!**********************************************!*\
  !*** ./src/ts/core/Animation/Base/Matrix.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * 矩阵变换相关工具函数
 */
var Matrix = /** @class */ (function () {
    function Matrix() {
    }
    /**
     * 加法
     * @param a
     * @param b
     */
    Matrix.add = function (a, b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i];
        }
        return c;
    };
    /**
     * 减法
     * @param a
     * @param b
     * @returns
     */
    Matrix.sub = function (a, b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c[i] = a[i] - b[i];
        }
        return c;
    };
    Matrix.mult = function (a, b) {
        var a1 = this.tran(a);
        var b1 = this.tran(b);
        // 相乘约束
        if (a1[0].length !== b1.length) {
            throw new Error();
        }
        var m = a1.length;
        var p = a1[0].length;
        var n = b1[0].length;
        // 初始化 m*n 全 0 二维数组
        var c = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                for (var k = 0; k < p; k++) {
                    c[i][j] += a1[i][k] * b1[k][j];
                }
            }
        }
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], c[0]), c[1]), c[2]), c[3]);
    };
    /**
     * 将一维16位数组转换成4*4二维数组
     * @param a
     */
    Matrix.tran = function (a) {
        var arr = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var index = i * 4 + j;
                if (!arr[i]) {
                    arr[i] = [];
                }
                arr[i][j] = a[index];
            }
        }
        return arr;
    };
    /**
     * 获得一个无效果的4x4矩阵
     */
    Matrix.getNullMatrix = function () {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    };
    return Matrix;
}());



/***/ }),

/***/ "./src/ts/core/Animation/Base/OriginAnimations.ts":
/*!********************************************************!*\
  !*** ./src/ts/core/Animation/Base/OriginAnimations.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OriginAnimations": () => (/* binding */ OriginAnimations)
/* harmony export */ });
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ "./src/ts/core/Animation/Base/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 可改变动画中心点的动画
 *
 * @export
 * @abstract
 * @class OriginAnimations
 * @extends {CubicAnimations}
 */
var OriginAnimations = /** @class */ (function (_super) {
    __extends(OriginAnimations, _super);
    function OriginAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.origin = [0, 0, 0];
        return _this;
    }
    OriginAnimations.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param)) {
            return false;
        }
        this.origin = (param === null || param === void 0 ? void 0 : param.origin) || this.origin;
        return true;
    };
    OriginAnimations.prototype.getMatrixForCubic = function (progress) {
        var arr = this.getMatrixForOrigin(progress);
        if (!arr) {
            return false;
        }
        arr = _Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.mult([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -this.origin[0], -this.origin[1], -this.origin[2], 1
        ], arr);
        return _Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.mult(arr, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.origin[0], this.origin[1], this.origin[2], 1
        ]);
    };
    return OriginAnimations;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/CompositeAnimation/GroupAnimations.ts":
/*!*********************************************************************!*\
  !*** ./src/ts/core/Animation/CompositeAnimation/GroupAnimations.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupAnimations": () => (/* binding */ GroupAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var src_ts_util_deepMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ts/util/deepMerge */ "./src/ts/util/deepMerge.ts");
/* harmony import */ var _Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
/* harmony import */ var _Base_Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Base/Matrix */ "./src/ts/core/Animation/Base/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * 动画组，用于多个动画并行播放
 */
var GroupAnimations = /** @class */ (function (_super) {
    __extends(GroupAnimations, _super);
    function GroupAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        /**
         * 每个动画结束的累计矩阵
         */
        _this.cumulativeMatrix = [];
        return _this;
    }
    GroupAnimations.prototype.setParams = function (param) {
        var _this = this;
        _super.prototype.setParams.call(this, param);
        this.animations = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimationsList((param === null || param === void 0 ? void 0 : param.animations) || []);
        // 计算出最大的动画时长
        this.animations.forEach(function (val, key) {
            var dur = val.getDuration();
            // 计算最后一帧
            _this.cumulativeMatrix[key] = val.getMatrix(dur) || _Base_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.getNullMatrix();
            if (dur > _this.duration) {
                // 这里覆盖了父类的属性
                // 实际上，只有父类的时长不够，才会被更新
                _this.duration = val.getDuration();
            }
        });
        return true;
    };
    GroupAnimations.prototype.getCubicStyle = function (_progress, time) {
        /**
         * 合并样式，由于样式的特殊性，如果存在冲突的样式，后面的会覆盖前面的
         */
        var style = { boxStyle: {}, fontStyle: {} };
        var noneStyle = true;
        for (var _i = 0, _a = this.animations; _i < _a.length; _i++) {
            var animation = _a[_i];
            var style2 = animation.getStyle(time);
            if (style2) {
                noneStyle = false;
                style = (0,src_ts_util_deepMerge__WEBPACK_IMPORTED_MODULE_1__.deepMerge)(style, style2);
            }
        }
        // for(let i = 0;i<this.animations.length;i++){
        //     let style2 = this.animations[i].getStyle(time)
        //     if(style2){
        //         noneStyle = false;
        //         style = dseepMerge(style,style2);
        //     }
        // }
        if (noneStyle) {
            return false;
        }
        return style;
    };
    GroupAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        // 建立一个空白矩阵
        var arr = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        // 倒着计算所有的矩阵
        for (var i = this.animations.length - 1; i >= 0; i--) {
            var matrix = this.animations[i].getMatrix(time);
            // console.log(matrix);
            if (matrix) {
                arr = _Base_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.mult(arr, matrix);
            }
            else {
                arr = _Base_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.mult(arr, this.cumulativeMatrix[i]);
            }
        }
        return arr;
    };
    return GroupAnimations;
}(_Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_2__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/CompositeAnimation/ListAnimations.ts":
/*!********************************************************************!*\
  !*** ./src/ts/core/Animation/CompositeAnimation/ListAnimations.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAnimations": () => (/* binding */ ListAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
/* harmony import */ var _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Base/Matrix */ "./src/ts/core/Animation/Base/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * 动画列表组，所有动画按顺序播放
 */
var ListAnimations = /** @class */ (function (_super) {
    __extends(ListAnimations, _super);
    function ListAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        /**
         * 每个动画结束的累计矩阵
         */
        _this.cumulativeMatrix = [];
        _this.cumulativeTime = [];
        return _this;
    }
    ListAnimations.prototype.setParams = function (param) {
        var _this = this;
        _super.prototype.setParams.call(this, param);
        this.animations = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimationsList((param === null || param === void 0 ? void 0 : param.animations) || []);
        var duration = 0;
        this.cumulativeMatrix[0] = _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
        this.cumulativeTime[0] = duration;
        this.animations.forEach(function (val, key) {
            var dur = val.getDuration();
            // 自增1，因为0的结束帧的1的开头
            key++;
            // 计算出每个动画结束后的矩阵叠加,传入持续时间以获得最后一帧动画
            var matrix = val.getMatrix(dur) || _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
            // 叠加
            _this.cumulativeMatrix[key] =
                _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.mult(matrix, _this.cumulativeMatrix[key - 1]);
            duration += dur;
            _this.cumulativeTime[key] = duration;
        });
        if (this.duration < duration) {
            this.duration = duration;
        }
        return true;
    };
    ListAnimations.prototype.getCubicStyle = function (_progress, time) {
        var curAnimation = this.getCurAnimation(time);
        if (curAnimation) {
            return curAnimation.animation.getStyle(time);
        }
        return false;
    };
    ListAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        var curAnimation = this.getCurAnimation(time);
        if (curAnimation) {
            time = time - this.cumulativeTime[curAnimation.key];
            var mat = curAnimation.animation.getMatrix(time) || _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
            return _Base_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.mult(mat, this.cumulativeMatrix[curAnimation.key]);
        }
        return false;
    };
    /**
     * 获取当前的动画元素,如果不存在则返回false
     */
    ListAnimations.prototype.getCurAnimation = function (time) {
        for (var i = this.animations.length - 1; i >= 0; i--) {
            var duration = this.cumulativeTime[i];
            if (time > duration) {
                return { key: i, animation: this.animations[i] };
            }
        }
        return false;
    };
    return ListAnimations;
}(_Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/CompositeAnimation/RepeatAnimations.ts":
/*!**********************************************************************!*\
  !*** ./src/ts/core/Animation/CompositeAnimation/RepeatAnimations.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatAnimations": () => (/* binding */ RepeatAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
/* harmony import */ var _TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TransformsAnimations/StaticAnimation */ "./src/ts/core/Animation/TransformsAnimations/StaticAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RepeatAnimations = /** @class */ (function (_super) {
    __extends(RepeatAnimations, _super);
    function RepeatAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 重复次数
         */
        _this.repeat = 1;
        return _this;
    }
    RepeatAnimations.prototype.getCubicStyle = function (_progress, time) {
        return this.animation.getStyle(this.getCurTime(time));
    };
    RepeatAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        return this.animation.getMatrix(this.getCurTime(time));
    };
    RepeatAnimations.prototype.setParams = function (param) {
        _super.prototype.setParams.call(this, param);
        if (param === null || param === void 0 ? void 0 : param.animation) {
            this.animation = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimations(param === null || param === void 0 ? void 0 : param.animation.type, param === null || param === void 0 ? void 0 : param.animation.params) || new _TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_2__.StaticAnimation();
        }
        else {
            this.animation = new _TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_2__.StaticAnimation();
        }
        console.log(this.animation);
        this.repeat = (param === null || param === void 0 ? void 0 : param.repeat) || this.repeat;
        this.animationTime = this.animation.getDuration();
        // 覆盖父级存活时间 
        // 计算方式 单个弹幕时间 X 弹幕重复次数
        this.duration = this.animationTime * this.repeat;
        console.log(this.duration);
        return true;
    };
    /**
     * 获得当前的弹幕时间
     */
    RepeatAnimations.prototype.getCurTime = function (time) {
        // 取余
        return time % this.animationTime;
    };
    return RepeatAnimations;
}(_Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/RotationAnimation.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/RotationAnimation.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationAnimation": () => (/* binding */ RotationAnimation)
/* harmony export */ });
/* harmony import */ var _Base_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/OriginAnimations */ "./src/ts/core/Animation/Base/OriginAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 旋转父类
 */
var RotationAnimation = /** @class */ (function (_super) {
    __extends(RotationAnimation, _super);
    function RotationAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.angle = { start: 0, end: 360 };
        return _this;
    }
    RotationAnimation.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param)) {
            return false;
        }
        this.angle = Object.assign(this.angle, param === null || param === void 0 ? void 0 : param.angle);
        return true;
    };
    RotationAnimation.prototype.getCubicStyle = function (_progress) {
        return false;
    };
    /**
     * 角度转弧度
     */
    RotationAnimation.prototype.A2R = function (a) {
        return a * (Math.PI / 180);
    };
    return RotationAnimation;
}(_Base_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__.OriginAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/RotationXAnimation.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/RotationXAnimation.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationXAnimation": () => (/* binding */ RotationXAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * X轴旋转
 */
var RotationXAnimation = /** @class */ (function (_super) {
    __extends(RotationXAnimation, _super);
    function RotationXAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationXAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            1, 0, 0, 0,
            0, cos, sin, 0,
            0, -sin, cos, 0,
            0, 0, 0, 1
        ];
    };
    return RotationXAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/RotationYAnimation.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/RotationYAnimation.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationYAnimation": () => (/* binding */ RotationYAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * y轴旋转
 */
var RotationYAnimation = /** @class */ (function (_super) {
    __extends(RotationYAnimation, _super);
    function RotationYAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationYAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1
        ];
    };
    return RotationYAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/RotationZAnimation.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/RotationZAnimation.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationZAnimation": () => (/* binding */ RotationZAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/core/Animation/TransformsAnimations/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * z轴旋转
 */
var RotationZAnimation = /** @class */ (function (_super) {
    __extends(RotationZAnimation, _super);
    function RotationZAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationZAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            cos, sin, 0, 0,
            -sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    };
    return RotationZAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/ScaleAnimations.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/ScaleAnimations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleAnimations": () => (/* binding */ ScaleAnimations)
/* harmony export */ });
/* harmony import */ var _Base_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/OriginAnimations */ "./src/ts/core/Animation/Base/OriginAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 缩放动画
 */
var ScaleAnimations = /** @class */ (function (_super) {
    __extends(ScaleAnimations, _super);
    function ScaleAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scale = { x1: 1, y1: 1, z1: 1, x2: 1, y2: 1, z2: 1 };
        return _this;
    }
    ScaleAnimations.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param)) {
            return false;
        }
        this.scale = Object.assign(this.scale, param === null || param === void 0 ? void 0 : param.scale);
        return true;
    };
    ScaleAnimations.prototype.getMatrixForOrigin = function (progress) {
        var x = this.getProgressValue(this.scale.x1, this.scale.x2, progress);
        var y = this.getProgressValue(this.scale.y1, this.scale.y2, progress);
        var z = this.getProgressValue(this.scale.z1, this.scale.z2, progress);
        var m = [
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        ];
        return m;
    };
    ScaleAnimations.prototype.getCubicStyle = function (_progress) {
        return false;
    };
    return ScaleAnimations;
}(_Base_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__.OriginAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/StaticAnimation.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/StaticAnimation.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticAnimation": () => (/* binding */ StaticAnimation)
/* harmony export */ });
/**
 * 静止动画 仅仅悬停在某一个位置一定时间
 */
var StaticAnimation = /** @class */ (function () {
    function StaticAnimation() {
        this.duration = 1000;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    StaticAnimation.prototype.getDuration = function () {
        return this.duration;
    };
    StaticAnimation.prototype.setParams = function (param) {
        var def = 0;
        this.duration = (param === null || param === void 0 ? void 0 : param.duration) || this.duration;
        this.x = (param === null || param === void 0 ? void 0 : param.x) || def;
        this.y = (param === null || param === void 0 ? void 0 : param.y) || def;
        this.z = (param === null || param === void 0 ? void 0 : param.z) || def;
        return true;
    };
    StaticAnimation.prototype.getMatrix = function (time) {
        // console.log(time);
        if (time > this.duration) {
            return false;
        }
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.x, this.y, this.z, 1
        ];
    };
    StaticAnimation.prototype.getStyle = function () {
        return false;
    };
    return StaticAnimation;
}());



/***/ }),

/***/ "./src/ts/core/Animation/TransformsAnimations/TranslateAnimation.ts":
/*!**************************************************************************!*\
  !*** ./src/ts/core/Animation/TransformsAnimations/TranslateAnimation.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateAnimation": () => (/* binding */ TranslateAnimation)
/* harmony export */ });
/* harmony import */ var _Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TranslateAnimation = /** @class */ (function (_super) {
    __extends(TranslateAnimation, _super);
    function TranslateAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = { x1: 0, y1: 0, x2: 0, y2: 0, z1: 0, z2: 0 };
        return _this;
    }
    TranslateAnimation.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param)) {
            return false;
        }
        this.path = Object.assign(this.path, param === null || param === void 0 ? void 0 : param.path);
        return true;
    };
    TranslateAnimation.prototype.getCubicStyle = function () {
        return false;
    };
    TranslateAnimation.prototype.getMatrixForCubic = function (progress) {
        // console.log(this.path);
        // console.log(progress);
        var x = this.getProgressValue(this.path.x1, this.path.x2, progress);
        var y = this.getProgressValue(this.path.y1, this.path.y2, progress);
        var z = this.getProgressValue(this.path.z1, this.path.z2, progress);
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ];
    };
    return TranslateAnimation;
}(_Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Animation/styleAnimations/OpacityAnimations.ts":
/*!********************************************************************!*\
  !*** ./src/ts/core/Animation/styleAnimations/OpacityAnimations.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpacityAnimations": () => (/* binding */ OpacityAnimations)
/* harmony export */ });
/* harmony import */ var _Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/CubicAnimations */ "./src/ts/core/Animation/Base/CubicAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 透明度动画
 *
 * @export
 * @class OpacityAnimations
 * @extends {CubicAnimations}
 */
var OpacityAnimations = /** @class */ (function (_super) {
    __extends(OpacityAnimations, _super);
    function OpacityAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opacity = [0, 1];
        return _this;
    }
    OpacityAnimations.prototype.setParams = function (param) {
        _super.prototype.setParams.call(this, param);
        this.opacity = (param === null || param === void 0 ? void 0 : param.opacity) || this.opacity;
        return true;
    };
    OpacityAnimations.prototype.getCubicStyle = function (progress, _time) {
        return {
            opacity: this.getProgressValue(this.opacity[0], this.opacity[1], progress)
        };
    };
    OpacityAnimations.prototype.getMatrixForCubic = function (_progress, _time) {
        return false;
    };
    return OpacityAnimations;
}(_Base_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__.CubicAnimations));



/***/ }),

/***/ "./src/ts/core/Danmaku/BaseDanmaku.ts":
/*!********************************************!*\
  !*** ./src/ts/core/Danmaku/BaseDanmaku.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDanmaku": () => (/* binding */ BaseDanmaku)
/* harmony export */ });
/* harmony import */ var _Animation_TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animation/TransformsAnimations/StaticAnimation */ "./src/ts/core/Animation/TransformsAnimations/StaticAnimation.ts");

/**
 * 基础弹幕类型
 */
var BaseDanmaku = /** @class */ (function () {
    function BaseDanmaku() {
        this.style = {};
        this.start = 0;
        this.content = "";
        this.child = [];
    }
    /**
     * 设置参数
     * @param param
     * @returns
     */
    BaseDanmaku.prototype.setParams = function (param) {
        // 设置文字样式
        try {
            // 设置开始时间
            if (param === null || param === void 0 ? void 0 : param.start) {
                this.start = param === null || param === void 0 ? void 0 : param.start;
            }
            if (param === null || param === void 0 ? void 0 : param.animation) {
                this.animation = (param === null || param === void 0 ? void 0 : param.animation) || new _Animation_TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__.StaticAnimation();
            }
            if (param === null || param === void 0 ? void 0 : param.child) {
                this.child = param.child;
            }
            if (param === null || param === void 0 ? void 0 : param.style) {
                this.style = param === null || param === void 0 ? void 0 : param.style;
            }
            if (param === null || param === void 0 ? void 0 : param.content) {
                this.content = param === null || param === void 0 ? void 0 : param.content;
            }
        }
        catch (e) {
            console.warn(e);
            return false;
        }
        return true;
    };
    BaseDanmaku.prototype.getType = function () {
        return "base";
    };
    BaseDanmaku.prototype.getContent = function () {
        return this.content;
    };
    BaseDanmaku.prototype.getChild = function () {
        return this.child;
    };
    BaseDanmaku.prototype.getAnimation = function () {
        if (!this.animation) {
            this.animation = new _Animation_TransformsAnimations_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__.StaticAnimation();
        }
        return this.animation;
    };
    BaseDanmaku.prototype.getStyle = function () {
        return this.style;
    };
    BaseDanmaku.prototype.startTime = function () {
        return this.start;
    };
    return BaseDanmaku;
}());



/***/ }),

/***/ "./src/ts/core/Renderer/BaseRenderer.ts":
/*!**********************************************!*\
  !*** ./src/ts/core/Renderer/BaseRenderer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRenderer": () => (/* binding */ BaseRenderer)
/* harmony export */ });
var BaseRenderer = /** @class */ (function () {
    function BaseRenderer() {
    }
    BaseRenderer.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    BaseRenderer.prototype.addDanmaku = function (_danmaku) {
        return false;
    };
    BaseRenderer.prototype.refresh = function () {
        return false;
    };
    BaseRenderer.prototype.setCanvasContainer = function (canvas) {
        this.canvas = canvas;
        return true;
    };
    BaseRenderer.prototype.updateCanvasStyle = function (style) {
        if (this.canvas) {
            this.canvas.style.width = style.size.width.string();
            this.canvas.style.height = style.size.height.string();
            this.canvas.style.left = style.position.x.string();
            this.canvas.style.top = style.position.y.string();
            this.canvas.style.backgroundColor = style.color.string();
            return true;
        }
        else {
            return false;
        }
    };
    return BaseRenderer;
}());



/***/ }),

/***/ "./src/ts/core/Renderer/CSS3Renderer/CSS3Renderer.ts":
/*!***********************************************************!*\
  !*** ./src/ts/core/Renderer/CSS3Renderer/CSS3Renderer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS3Renderer": () => (/* binding */ CSS3Renderer)
/* harmony export */ });
/* harmony import */ var src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/util/UnitTools */ "./src/ts/util/UnitTools.ts");
/* harmony import */ var _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Style/Unit/PxSize */ "./src/ts/core/Style/Unit/PxSize.ts");
/* harmony import */ var _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CssDanmakuObj */ "./src/ts/core/Renderer/CSS3Renderer/CssDanmakuObj.ts");



var CSS3Renderer = /** @class */ (function () {
    function CSS3Renderer() {
        this.canvasSize = {
            width: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(1920),
            height: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(1080)
        };
        this.danmakuList = [];
    }
    CSS3Renderer.prototype.setCanvasContainer = function (canvas) {
        this.canvas = canvas;
        return true;
    };
    CSS3Renderer.prototype.updateCanvasStyle = function (style) {
        if (this.canvas) {
            this.canvas.style.width = this.canvasSize.width.string();
            this.canvas.style.height = this.canvasSize.height.string();
            this.canvas.style.left = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.lengthSrting((style.size.width.length - this.canvasSize.width.length) / 2);
            this.canvas.style.top = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.lengthSrting((style.size.height.length - this.canvasSize.height.length) / 2);
            this.canvas.style.backgroundColor = style.color.string();
            var r = void 0; // 缩放大小
            if (style.size.width.length / style.size.height.length >= this.canvasSize.width.length / this.canvasSize.height.length) {
                // 横向
                r = style.size.height.length / this.canvasSize.height.length;
            }
            else {
                // 纵向
                r = style.size.width.length / this.canvasSize.width.length;
            }
            this.canvas.style.transform = "scale(" + r + "," + r + ")";
            return true;
        }
        else {
            return false;
        }
    };
    CSS3Renderer.prototype.addDanmaku = function (danmaku) {
        var _a;
        var _this = this;
        if (!this.canvas) {
            return false;
        }
        var danmakuobj = _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionDanmaku([danmaku]);
        var eles = _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionDiv(danmakuobj);
        eles.forEach(function (ele) {
            var _a;
            (_a = _this.canvas) === null || _a === void 0 ? void 0 : _a.appendChild(ele);
        });
        (_a = this.danmakuList).push.apply(_a, danmakuobj);
        // console.log(this.danmakuList);
        return true;
    };
    CSS3Renderer.prototype.refresh = function (time) {
        if (!this.canvas) {
            return false;
        }
        _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionStyle(this.danmakuList, this.canvas, time);
        return true;
    };
    CSS3Renderer.prototype.reset = function () {
        // 清空画布
        if (this.canvas) {
            this.canvas.innerHTML = "";
        }
        // 清空数组
        this.danmakuList = [];
        return true;
    };
    return CSS3Renderer;
}());



/***/ }),

/***/ "./src/ts/core/Renderer/CSS3Renderer/CssDanmakuObj.ts":
/*!************************************************************!*\
  !*** ./src/ts/core/Renderer/CSS3Renderer/CssDanmakuObj.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuTool": () => (/* binding */ DanmakuTool)
/* harmony export */ });
/* harmony import */ var src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/util/UnitTools */ "./src/ts/util/UnitTools.ts");

var DanmakuTool = /** @class */ (function () {
    function DanmakuTool() {
    }
    /**
     * 递归构建弹幕对象
     * @param danmaku
     * @returns
     */
    DanmakuTool.recursionDanmaku = function (danmaku) {
        var _this = this;
        var danmakuobj = [];
        danmaku.forEach(function (danmaku) {
            var div = _this.createDiv(danmaku.getContent());
            _this.setStyle(div, danmaku.getStyle());
            var obj = {
                element: div,
                animation: danmaku.getAnimation(),
                style: danmaku.getStyle(),
                child: [],
                start: danmaku.startTime(),
            };
            var child = danmaku.getChild();
            var childObj;
            if (child) {
                childObj = _this.recursionDanmaku(child);
            }
            obj.child = childObj;
            danmakuobj.push(obj);
        });
        return danmakuobj;
    };
    /**
     * 创建一个空div
     * @param content
     * @returns
     */
    DanmakuTool.createDiv = function (content) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.innerText = content;
        return div;
    };
    /**
     * 递归构建element
     * @param danmakuobj
     * @returns
     */
    DanmakuTool.recursionDiv = function (danmakuobj) {
        var _this = this;
        var array = [];
        danmakuobj.forEach(function (item) {
            var element = item.element;
            if (item.child) {
                var eles = _this.recursionDiv(item.child);
                eles.forEach(function (ele) {
                    element.appendChild(ele);
                });
            }
            array.push(element);
        });
        return array;
    };
    /**
     * 将样式设置到元素中
     */
    DanmakuTool.setStyle = function (element, style) {
        Object.assign(element.style, style);
    };
    /**
     * 递归设置弹幕动画
     * @param danmaku
     */
    DanmakuTool.recursionStyle = function (danmaku, canvas, abstime, parentTime) {
        var _this = this;
        if (parentTime === void 0) { parentTime = 0; }
        danmaku.forEach(function (dan, key) {
            // 更新弹幕样式
            var time = parentTime === 0 ? abstime - dan.start : parentTime - dan.start;
            // console.log(dan.animation);
            var sty;
            var max;
            sty = dan.animation.getStyle(time);
            if (sty) {
                _this.setStyle(dan.element, sty);
            }
            max = dan.animation.getMatrix(time);
            if (max) {
                dan.element.style.transform = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.Matrix3dString(max);
            }
            // 如果都不存在，则表示动画已经完成，销毁元素
            // 如果是子元素的情况，有可能存在弹幕未开始的情况
            if (!(sty || max)) {
                if (dan.element.parentElement) {
                    // 从父元素删除节点
                    dan.element.parentElement.removeChild(dan.element);
                }
                else {
                    // 否则从canvas里面删除
                    canvas.removeChild(dan.element);
                }
                // 并且清空节点
                delete danmaku[key];
            }
            // 递归
            _this.recursionStyle(dan.child, canvas, abstime, time);
        });
    };
    return DanmakuTool;
}());



/***/ }),

/***/ "./src/ts/core/Stage/BaseStage.ts":
/*!****************************************!*\
  !*** ./src/ts/core/Stage/BaseStage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseStage": () => (/* binding */ BaseStage)
/* harmony export */ });
/* harmony import */ var _Style_Unit_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style/Unit/Color */ "./src/ts/core/Style/Unit/Color.ts");
/* harmony import */ var _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Style/Unit/PxSize */ "./src/ts/core/Style/Unit/PxSize.ts");
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");



var BaseStage = /** @class */ (function () {
    function BaseStage() {
    }
    BaseStage.prototype.stageSize = function (containersSize) {
        return {
            width: containersSize.width,
            height: containersSize.height,
        };
    };
    BaseStage.prototype.stagePosition = function () {
        return {
            x: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(0),
            y: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(0),
        };
    };
    BaseStage.prototype.stageBackgroundColor = function () {
        return new _Style_Unit_Color__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0, 0, 0);
    };
    BaseStage.prototype.stageRenderer = function (render) {
        this.renderer = render;
        return true;
    };
    BaseStage.prototype.getRenderer = function () {
        if (this.renderer) {
            return this.renderer;
        }
        else {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__.I18n.t("renderer is null"));
        }
    };
    BaseStage.prototype.timeLine = function (timeLine) {
        this.timeLineObj = timeLine;
        return true;
    };
    BaseStage.prototype.refresh = function (time) {
        var _this = this;
        var _a, _b;
        if (!this.renderer) {
            return false;
        }
        var list;
        list = ((_a = this.timeLineObj) === null || _a === void 0 ? void 0 : _a.getDanmakuList(time)) || {
            skip: false,
            DanmakuList: [],
        };
        if (list) {
            if (list.skip) {
                (_b = this.renderer) === null || _b === void 0 ? void 0 : _b.reset();
            }
            list.DanmakuList.forEach(function (val) {
                var _a;
                (_a = _this.renderer) === null || _a === void 0 ? void 0 : _a.addDanmaku(val.danmaku);
            });
        }
        this.renderer.refresh(time);
        return true;
    };
    BaseStage.prototype.rendererType = function () {
        return "css3";
    };
    BaseStage.prototype.timeLineType = function () {
        return "advance";
    };
    BaseStage.prototype.reset = function () {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.renderer) === null || _a === void 0 ? void 0 : _a.reset();
        return true;
    };
    BaseStage.prototype.getTimeLine = function () {
        if (!this.timeLineObj) {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__.I18n.t("Time line is null"));
        }
        return this.timeLineObj;
    };
    return BaseStage;
}());



/***/ }),

/***/ "./src/ts/core/Stage/TestStage.ts":
/*!****************************************!*\
  !*** ./src/ts/core/Stage/TestStage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestStage": () => (/* binding */ TestStage)
/* harmony export */ });
/* harmony import */ var _BaseStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseStage */ "./src/ts/core/Stage/BaseStage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TestStage = /** @class */ (function (_super) {
    __extends(TestStage, _super);
    function TestStage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestStage;
}(_BaseStage__WEBPACK_IMPORTED_MODULE_0__.BaseStage));



/***/ }),

/***/ "./src/ts/core/Style/Unit/Color.ts":
/*!*****************************************!*\
  !*** ./src/ts/core/Style/Unit/Color.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * 颜色接口
 */
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.prototype.string = function () {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    };
    /**
     * 获取预设颜色
     * @param color 颜色名称
     * @returns
     */
    Color.getColor = function (color) {
        if (this.color[color]) {
            return new (this.bind.apply(this, __spreadArray([void 0], this.color[color])))();
        }
        else {
            return new (this.bind.apply(this, __spreadArray([void 0], this.color["black"])))();
        }
    };
    /**
     * 常见颜色表
     */
    Color.color = {
        "black": [0, 0, 0, 1],
        "white": [255, 255, 255, 1],
        "red": [255, 0, 0, 1],
        "green": [0, 255, 0, 1],
        "blue": [0, 0, 255, 1],
        "pink": [255, 105, 108, 1],
        "yellow": [255, 255, 0, 1],
        "grey": [130, 130, 130, 1]
    };
    return Color;
}());



/***/ }),

/***/ "./src/ts/core/Style/Unit/PxSize.ts":
/*!******************************************!*\
  !*** ./src/ts/core/Style/Unit/PxSize.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PxSize": () => (/* binding */ PxSize)
/* harmony export */ });
var PxSize = /** @class */ (function () {
    function PxSize(length) {
        this.length = length;
    }
    PxSize.prototype.string = function () {
        return this.length + "px";
    };
    return PxSize;
}());



/***/ }),

/***/ "./src/ts/i18n/index.ts":
/*!******************************!*\
  !*** ./src/ts/i18n/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18n": () => (/* binding */ I18n)
/* harmony export */ });
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context/Context */ "./src/ts/Context/Context.ts");
/* harmony import */ var _zh_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-cn */ "./src/ts/i18n/zh-cn.ts");


/**
 * i18n 国际化函数
 */
var I18n = /** @class */ (function () {
    function I18n() {
    }
    /**
     * 获取翻译，如果不存在，则返回自身
     * @param str 需要国际化的字符串
     * @returns 翻译结果
     */
    I18n.t = function (str) {
        // 检查字符串是否存在
        if (this.tranTxt[this.language] && this.tranTxt[this.language][str]) {
            return this.tranTxt[this.language][str];
        }
        return str;
    };
    I18n.tranTxt = {
        "zh-cn": _zh_cn__WEBPACK_IMPORTED_MODULE_1__.default
    };
    /**
     * 当前语言
     */
    I18n.language = _Context_Context__WEBPACK_IMPORTED_MODULE_0__.Context.language;
    return I18n;
}());



/***/ }),

/***/ "./src/ts/i18n/zh-cn.ts":
/*!******************************!*\
  !*** ./src/ts/i18n/zh-cn.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "Containers is null": "容器为空",
    "Start mount stage": "开始挂载舞台",
    "Renderer type is null": "没有找到合适的渲染器",
    "matrix3d param less than 16": "matrix3d 参数小于16个",
    "Unknown danmaku format": "未知的弹幕格式",
    "Danmaku parser fail": "高级弹幕解析失败，json格式可能存在问题"
});


/***/ }),

/***/ "./src/ts/util/UnitTools.ts":
/*!**********************************!*\
  !*** ./src/ts/util/UnitTools.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitTools": () => (/* binding */ UnitTools)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n */ "./src/ts/i18n/index.ts");

var UnitTools = /** @class */ (function () {
    function UnitTools() {
    }
    /**
     * 拼接带单位的长度字符串
     * @param num 长度
     * @returns
     */
    UnitTools.lengthSrting = function (num) {
        return num + "px";
    };
    /**
     * 拼接 Matrix3d() 字符串
     * @param arr 16位数字
     */
    UnitTools.Matrix3dString = function (arr) {
        if (arr.length !== 16) {
            throw SyntaxError(_i18n__WEBPACK_IMPORTED_MODULE_0__.I18n.t("matrix3d param less than 16"));
        }
        return "Matrix3d(" + arr.join(",") + ")";
    };
    return UnitTools;
}());



/***/ }),

/***/ "./src/ts/util/deepMerge.ts":
/*!**********************************!*\
  !*** ./src/ts/util/deepMerge.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepMerge": () => (/* binding */ deepMerge)
/* harmony export */ });
/**
 * 对象深度合并
 * @param obj1
 * @param obj2
 * @returns
 */
function deepMerge(obj1, obj2) {
    var key;
    // tslint:disable-next-line: forin
    for (key in obj2) {
        obj1[key] =
            obj1[key] &&
                obj1[key].toString() === "[object Object]" &&
                obj2[key] &&
                obj2[key].toString() === "[object Object]"
                ? deepMerge(obj1[key], obj2[key])
                : (obj1[key] = obj2[key]);
    }
    return obj1;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MFADE": () => (/* binding */ MFADE)
/* harmony export */ });
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/base.css */ "./src/css/base.css");
/* harmony import */ var _Controller_Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller/Controller */ "./src/ts/Controller/Controller.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var _core_Stage_TestStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Stage/TestStage */ "./src/ts/core/Stage/TestStage.ts");




var MFADE = /** @class */ (function () {
    function MFADE(config) {
        var _this = this;
        // 类型检查
        if (!config.containers) {
            throw ReferenceError(_i18n__WEBPACK_IMPORTED_MODULE_2__.I18n.t("Containers is null"));
        }
        this.controller = new _Controller_Controller__WEBPACK_IMPORTED_MODULE_1__.Controller(config.containers);
        this.controller.addGetDanmakuFunction("advance", config.danmaku);
        this.controller.registStage(new _core_Stage_TestStage__WEBPACK_IMPORTED_MODULE_3__.TestStage(), 1);
        this.controller.mount();
        // 监听大小变化
        window.addEventListener("resize", function () {
            _this.controller.resize();
        });
    }
    MFADE.prototype.pause = function () {
        this.controller.pause();
    };
    MFADE.prototype.start = function () {
        this.controller.start();
    };
    MFADE.prototype.skip = function (time) {
        this.controller.skip(time);
    };
    MFADE.prototype.time = function () {
        return this.controller.getTime();
    };
    MFADE.prototype.resize = function () {
        this.controller.resize();
    };
    MFADE.prototype.reset = function () {
        this.controller.resetDanmaku(1);
        this.controller.reset();
    };
    return MFADE;
}());

// 添加进全局
if (typeof globalThis !== "undefined") {
    globalThis.MFADE = MFADE;
}
else {
    window["MFADE"] = MFADE;
}

})();

/******/ })()
;
//# sourceMappingURL=mfunsAdvanceDanmaku.js.map