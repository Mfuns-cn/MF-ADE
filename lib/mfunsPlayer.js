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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/player/mfunsPlayer/js/DOMoperation.js":
/*!***************************************************!*\
  !*** ./src/player/mfunsPlayer/js/DOMoperation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _createBarrageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBarrageList.js */ "./src/player/mfunsPlayer/js/createBarrageList.js");
/* harmony import */ var _util_formateTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/formateTime.js */ "./src/player/mfunsPlayer/js/util/formateTime.js");
/* harmony import */ var _util_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/debounce.js */ "./src/player/mfunsPlayer/js/util/debounce.js");
/* harmony import */ var _util_thro_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/thro.js */ "./src/player/mfunsPlayer/js/util/thro.js");
/* harmony import */ var _danmakuEditor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danmakuEditor.js */ "./src/player/mfunsPlayer/js/danmakuEditor.js");





function operate(canvasStage, advanceDanmakuStage, tem, BarrageData, callback) {
  let trueLengthRate = (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
  var playTimer;
  var editTimer;
  var editor;
  var advancePreview;
  var durationOffset = 0;
  var isAdd;
  var isMinus;
  var bufferleft = 0;
  var buffer = 0;
  var barleft = 0;
  var voiceOffset = 0;
  var firstScrollHeight = 0;
  var danmakuColor = '#fff';
  var danmakuType = 'normal';
  var isShowList = false;
  var isInput = false;
  var listCreated = false;
  var isEdit = false;
  var isControl = true;
  var isFireFox = navigator.userAgent.indexOf('Firefox') > -1;

  if (isFireFox) {
    tem.troggle.style.display = 'none';
  }

  function loadBuff() {
    for (let i = 0; i < tem.video.buffered.length; i++) {
      buffer = tem.video.buffered.end(i) + tem.video.duration * 0.025;

      if (buffer >= tem.video.duration) {
        buffer = tem.video.duration * 1.025;
      }

      bufferleft = tem.scroll.clientWidth * (buffer / tem.video.duration) * trueLengthRate;
      buff(bufferleft);
    }
  } //播放视频时加载弹幕


  tem.video.addEventListener('timeupdate', function () {
    advanceDanmakuStage.skip(parseInt(tem.video.currentTime * 1000));

    if (advancePreview) {
      advancePreview.skip(parseInt(tem.video.currentTime * 1000));
    }

    let ct = parseInt(tem.video.currentTime);
    tem.currentTime.innerText = (0,_util_formateTime_js__WEBPACK_IMPORTED_MODULE_1__.formateTime)(ct) + ' /';

    if (isFullScreen()) {
      trueLengthRate = (tem.scroll.clientWidth - tem.bar.clientWidth * 1.1) / tem.scroll.clientWidth;
    } else {
      trueLengthRate = (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
    }

    barleft = tem.scroll.clientWidth * (tem.video.currentTime / tem.video.duration) * trueLengthRate;
    load(barleft);
    tem.wait_loading.style.display = 'none'; //加载缓冲条

    loadBuff();
  }); // tem.video.addEventListener('progress', function() {
  // })

  tem.video.addEventListener('play', function () {
    canvasStage.isPaused = false;
    tem.player.className = "icon_play";
    tem.play_box.className = "button_play";
    tem.wait_loading.style.display = 'none';
    playTimer = setTimeout(() => {
      if (!tem.video.paused) {
        tem.play_box.style.display = 'none';
      }
    }, 1000);
    canvasStage.render();
    advanceDanmakuStage.start();
    advanceDanmakuStage.skip(parseInt(tem.video.currentTime * 1000));

    if (advancePreview) {
      advancePreview.start();
      advancePreview.skip(parseInt(tem.video.currentTime * 1000));
    }
  }); //暂停视频时停止加载弹幕

  tem.video.addEventListener('pause', function () {
    canvasStage.isPaused = true;
    advanceDanmakuStage.pause();

    if (advancePreview) {
      advancePreview.pause();
    }

    tem.play_box.style.display = 'flex';
    tem.player.className = "icon_pause";
    tem.play_box.className = "button_pause";
  }); //弹幕设置

  tem.danmaku_style.addEventListener('mouseenter', function () {
    tem.danmakuEditor.style.display = "block";
    tem.danmakuEditor.style.bottom = tem.control.clientHeight + 10 + 'px';
    isEdit = true;
    editTimer = null;

    if (isFullScreen()) {
      tem.danmakuEditor.style.left = '25%';
    } else {
      tem.danmakuEditor.style.left = '16%';
    }
  });
  tem.danmaku_style.addEventListener('mouseleave', function () {
    isEdit = false;
    editTimer = setTimeout(() => {
      if (!isEdit) tem.danmakuEditor.style.display = "none";
    }, 300);
  });
  tem.danmakuEditor.addEventListener('mouseenter', function () {
    isEdit = true;
    isControl = true;
    tem.danmakuEditor.style.display = "block";
  });
  tem.danmakuEditor.addEventListener('mouseleave', function () {
    isEdit = false;
    isControl = false;
    setTimeout(() => {
      if (!isEdit) tem.danmakuEditor.style.display = "none";
    }, 300);
  }); //选择弹幕类型

  tem.danmaku_type.addEventListener('click', function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;

    switch (target.id) {
      case "top":
        danmakuType = "top";
        tem.danmaku_type.children[0].className = "focus";
        break;

      case "normal":
        danmakuType = "normal";
        tem.danmaku_type.children[1].className = "focus";
        break;

      case "bottom":
        danmakuType = "bottom";
        tem.danmaku_type.children[2].className = "focus";
        break;
    }

    for (let i = 0; i < tem.danmaku_type.children.length; i++) {
      if (target.id === tem.danmaku_type.children[i].id) {
        tem.danmaku_type.children[i].className = "focus";
      } else {
        tem.danmaku_type.children[i].className = "";
      }
    }
  }, false); //选择弹幕颜色

  const colorArr = ['#FE0302', '#FFFF00', '#00CD00', '#00FF00', '#4e6ef2', '#89D5FF', '#7b7ff7', '#757575', '#ffffff', '#fb7299'];

  for (let i = 0; i < colorArr.length; i++) {
    let item = document.createElement("i");
    item.setAttribute('id', `color${i}`);
    item.style.background = colorArr[i];
    tem.danmaku_color.appendChild(item);
  }

  tem.danmaku_color.addEventListener('click', function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    const colorIndex = Number(target.id[5]);

    if (typeof colorIndex === 'number' && tem.danmaku_color.children[colorIndex].className == "focus") {
      tem.danmaku_color.children[colorIndex].className = "";
      danmakuColor = '#fff';
      return;
    } else if (typeof colorIndex === 'number' && colorIndex >= 0) {
      danmakuColor = colorArr[colorIndex];
    }

    for (let i = 0; i < tem.danmaku_color.children.length; i++) {
      if (target.id === tem.danmaku_color.children[i].id) {
        tem.danmaku_color.children[i].className = "focus";
      } else {
        tem.danmaku_color.children[i].className = "";
      }
    }
  }, false); //解决文本框输入空格时与空格键监听的冲突

  tem.text.onfocus = function () {
    isInput = true;
  };

  tem.text.onblur = function () {
    isInput = false;
  }; //发送弹幕


  tem.emit.addEventListener('click', function () {
    let value = tem.text.value; //文本内容

    let time = tem.video.currentTime;
    let color = danmakuColor;
    let type = danmakuType;
    let userToken = '17950ae873b722-0cb0708dca5e81-d7e1739-144000-17950ae873cddc';
    let obj = {
      value,
      time,
      color,
      type,
      userToken
    };

    if (value) {
      callback.checkLogin();
      canvasStage.add(obj);
      canvasStage.getNormal();
      canvasStage.getTop();
      canvasStage.getBottom();
      canvasStage.init(); // tem.text.value = ''//清空输入框，减少弹幕刷屏
    }
  }); //拖动进度条恢复弹幕

  tem.video.addEventListener('seeking', function () {
    tem.canvas.style.opacity = 0;
    tem.wait_loading.style.display = 'flex';
    advanceDanmakuStage.skip(0);
  });
  tem.video.addEventListener('seeked', function () {
    if (!canvasStage.isclear) {
      tem.canvas.style.opacity = 1;
    }

    tem.wait_loading.style.display = 'none';
    advanceDanmakuStage.skip(tem.video.currentTime * 1000);
    canvasStage.reset();
  });
  tem.video.addEventListener('waiting', function () {
    tem.wait_loading.style.display = 'flex';
  }); //展开/收起弹幕列表

  let page = 0;
  let closeList = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(300, function () {
    tem.danmakuList.style.display = isShowList ? 'block' : 'none';
  });

  tem.closeList.onclick = function () {
    isShowList = false;
    tem.danmakuList.style.animation = 'retract 0.3s';
    closeList();
  };

  tem.list_btn.onclick = function () {
    isShowList = !isShowList;

    if (!listCreated) {
      tem.danmakuListContent.style.height = tem.content.clientHeight * 0.78 - 60 + 'px';
      tem.danmakuList.children[0].children[0].innerHTML = `弹幕内容 (${BarrageData.length})`;
      (0,_createBarrageList_js__WEBPACK_IMPORTED_MODULE_0__.createBarrageList)(BarrageData, tem.danmakuListContent, page);
      listCreated = true;
    }

    tem.danmakuList.style.animation = isShowList ? 'expand 0.3s' : 'retract 0.3s';

    if (isShowList) {
      tem.danmakuList.style.display = 'block';
    } else {
      closeList();
    }
  };

  let isScroll = false;

  function handleScroll() {
    let topVal = tem.danmakuListContent.scrollTop;
    let viewH = tem.danmakuListContent.clientHeight;
    let contentH = tem.danmakuListContent.scrollHeight;

    if (topVal / (contentH - viewH) >= 0.95) {
      page++;
      (0,_createBarrageList_js__WEBPACK_IMPORTED_MODULE_0__.createBarrageList)(BarrageData, tem.danmakuListContent, page);
    }

    if (!isScroll) {
      isScroll = true;
    }
  }

  let throScroll = (0,_util_thro_js__WEBPACK_IMPORTED_MODULE_3__.thro)(handleScroll, 200);

  let getScroll = function () {
    throScroll();
  };

  tem.danmakuListContent.addEventListener('scroll', getScroll); //进入全屏

  function fullsc(content) {
    if (content.requestFullscreen) {
      return content.requestFullscreen();
    } else if (content.mozRequestFullScreen) {
      return content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) {
      return content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) {
      return content.msRequestFullscreen();
    }
  } // 判断页面是否进入全屏


  function isFullScreen() {
    return document.fullscreen || document.mozFullScreen || document.webkitFullscreenElement || document.msFullScreenElement;
  }

  function resetLoad() {
    if (isFullScreen()) {
      trueLengthRate = (tem.scroll.clientWidth - tem.bar.clientWidth * 1.1) / tem.scroll.clientWidth;
    } else {
      trueLengthRate = (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
    }

    barleft = tem.scroll.clientWidth * tem.video.currentTime / tem.video.duration * trueLengthRate;
    load(barleft);
  }

  function resizeCallback() {
    tem.canvas.width = tem.content.clientWidth;
    tem.canvas.height = tem.content.clientHeight;
    tem.advance.style.width = tem.content.clientWidth + 'px';
    tem.advance.style.height = tem.content.clientHeight + 'px';
    tem.advancePre.style.width = tem.content.clientWidth + 'px';
    tem.advancePre.style.height = tem.content.clientHeight + 'px';
    tem.ade_mask.style.height = tem.video.clientHeight + 'px';
    canvasStage.reset();
    canvasStage.init();
    resetLoad();
    loadBuff();
    advanceDanmakuStage.resize();

    if (advancePreview) {
      advancePreview.resize();
    }

    if (editor) {
      editor.resize();
    }

    if (isFullScreen()) {
      tem.content.style.alignItems = 'center';
    } else {
      tem.content.style.alignItems = '';
    }

    if (BarrageData.length < 40) {
      tem.danmakuList.style.height = '50%';
      tem.danmakuListContent.style.height = tem.content.clientHeight * 0.5 - 60 + 'px';
    } else {
      tem.danmakuListContent.style.height = tem.content.clientHeight * 0.78 - 60 + 'px';
    }

    tem.control_mask.style.width = tem.content.clientWidth + 'px';
    tem.control_mask.style.height = tem.content.clientHeight - tem.control.clientHeight + 'px';
  }

  let debounceFunc = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(1000, hideControl);

  function hideControl() {
    if (isFullScreen() && !isControl) {
      tem.control.style.opacity = 0;
      tem.load.style.opacity = 0;
      tem.text.blur();
    }
  }

  tem.control.addEventListener('mouseleave', function () {
    isControl = false;
  });
  tem.control.addEventListener('mouseenter', function () {
    isControl = true;
  });
  tem.load.addEventListener('mouseenter', function () {
    isControl = true;
  });
  tem.control_mask.addEventListener('mousemove', function () {
    tem.control.style.opacity = 1;
    tem.load.style.opacity = 1;
    debounceFunc();
  });
  tem.full.addEventListener('click', function () {
    if (isFullScreen()) {
      exit();
    } else {
      setTimeout(() => {
        tem.content.style.display = 'flex';
        canvasStage.reset();
        canvasStage.init();
        tem.danmakuList.style.width = '20%';
        tem.control.style.background = 'rgba(0, 0, 0, 0.5)';
        tem.text.style.background = 'rgba(85, 85, 85, 0.5)';
        tem.text.style.flex = 10;
        tem.barrage.style.width = '40%';
        tem.ade_code.style.height = '90%';
        tem.ade_footer.style.height = '5%';
        tem.control_right.style.width = '15%';
        tem.fs_icon.className = 'exitfs';
        resetLoad();
        loadBuff();

        if (editor) {
          editor.resize();
        }
      }, 200);
      fullsc(tem.content);
      window.addEventListener('resize', resizeCallback);
    }
  }); //退出全屏

  function exitFullscreen() {
    var exitMethod = document.exitFullscreen || //W3C
    document.mozCancelFullScreen || //Chrome等
    document.webkitExitFullscreen || //FireFox
    document.msFullscreen; //IE11

    if (exitMethod) {
      exitMethod.call(document);
    }
  }

  document.addEventListener('fullscreenchange', exitHandler); //退出全屏后执行

  document.addEventListener('webkitfullscreenchange', exitHandler);
  document.addEventListener('mozfullscreenchange', exitHandler);

  function exitHandler() {
    setTimeout(() => {
      if (!isFullScreen()) {
        exit();
      }
    }, 100);
  }

  function exit() {
    exitFullscreen();
    window.removeEventListener('resize', resizeCallback);
    canvasStage.reset();
    canvasStage.init();
    resetLoad();
    loadBuff();
    tem.content.style.alignItems = '';
    tem.fs_icon.className = 'fullsc';
    tem.control.style.opacity = 1;
    tem.load.style.opacity = 1;
    tem.canvas.width = tem.content.clientWidth;
    tem.canvas.height = tem.video.clientHeight;
    tem.advance.style.width = tem.content.clientWidth + 'px';
    tem.advance.style.height = tem.content.clientHeight + 'px';
    tem.advancePre.style.width = tem.content.clientWidth + 'px';
    tem.advancePre.style.height = tem.content.clientHeight + 'px';
    tem.ade_mask.style.height = tem.video.clientHeight + 'px';
    advanceDanmakuStage.resize();

    if (advancePreview) {
      advancePreview.resize();
    }

    tem.control.style.bottom = 0;
    tem.control.style.background = '#333';
    tem.text.style.background = '#555';
    tem.text.style.flex = 6;
    tem.control_right.style.width = '23%';
    tem.barrage.style.width = '50%';
    tem.danmakuList.style.width = '40%';
    tem.danmakuList.style.height = '78%';
    tem.ade_code.style.height = '78%';
    tem.ade_footer.style.height = '13%';
    tem.danmakuListContent.style.height = tem.content.clientHeight * 0.78 - 60 + 'px';
    tem.control_mask.style.width = tem.content.clientWidth + 'px';
    tem.control_mask.style.height = tem.content.clientHeight - tem.control.clientHeight + 'px';

    if (editor) {
      editor.resize();
    }
  } //关闭/开启弹幕


  tem.danmaku.addEventListener('click', function () {
    canvasStage.isclear = !canvasStage.isclear;

    if (canvasStage.isclear) {
      tem.switch_btn.className = 'switch_close';
      tem.danmaku.style.background = '#757575';
      tem.canvas.style.opacity = 0;
      tem.advance.style.opacity = 0;
    } else {
      tem.switch_btn.className = 'switch_open';
      tem.danmaku.style.background = '#00A1D6';
      tem.canvas.style.opacity = 1;
      tem.advance.style.opacity = 1;
      canvasStage.reset();
    }
  }); //音量控制

  function increaseVoice() {
    if (tem.video.volume >= 0.95) {
      tem.video.volume = 1;
    } else {
      tem.video.volume += 0.05;
    }

    tem.voice.innerHTML = '音量：' + parseInt(tem.video.volume * 100) + '%';
  }

  function decreaseVoice() {
    if (tem.video.volume <= 0.05) {
      tem.video.volume = 0;
      tem.voice.innerHTML = '静音';
    } else {
      tem.video.volume -= 0.05;
      tem.voice.innerHTML = '音量：' + parseInt(tem.video.volume * 100) + '%';
    }
  }

  function hideVoice() {
    tem.voice.style.display = 'none';
  }

  function controlVoice(e) {
    e = e || event;
    e.preventDefault();
    tem.voice.style.display = 'block';
    voiceDebounceFunc();

    if (e.wheelDelta > 0 || e.detail < 0) {
      handleIncrease();
    } else {
      handleDecrease();
    }
  }

  let handleIncrease = (0,_util_thro_js__WEBPACK_IMPORTED_MODULE_3__.thro)(increaseVoice, 100);
  let handleDecrease = (0,_util_thro_js__WEBPACK_IMPORTED_MODULE_3__.thro)(decreaseVoice, 100);
  let voiceDebounceFunc = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(1000, hideVoice);
  tem.control_mask.addEventListener('mouseenter', function () {
    // document.body.style.top = -(document.documentElement.scrollTop || document.body.scrollTop) + 'px'
    //    document.body.style.position = 'fixed'
    //    document.body.style.width = '100%'
    tem.control_mask.addEventListener('mousewheel', controlVoice);
    tem.control_mask.addEventListener('DOMMouseScroll', controlVoice);
  });
  tem.control_mask.addEventListener('mouseleave', function () {
    // document.body.style.position = ''
    //    document.documentElement.scrollTop = Math.abs(parseInt(document.body.style.top))
    //    document.body.scrollTop = Math.abs(parseInt(document.body.style.top))
    //    document.body.style.top = ""
    tem.control_mask.removeEventListener('mousewheel', controlVoice);
    tem.control_mask.removeEventListener('DOMMouseScroll', controlVoice);
  }); //播放、暂停视频

  tem.player_box.addEventListener('click', handleClick);
  tem.control_mask.addEventListener('click', handleClick);

  function handleClick() {
    if (playTimer) {
      clearTimeout(playTimer);
    }

    tem.play_box.style.display = 'flex';

    if (tem.video.paused) {
      tem.video.play();
    } else {
      tem.video.pause();
    }
  } //快进快退及其他键盘事件


  function add5() {
    if (isMinus) {
      isMinus = false;
      durationOffset = 0;
    }

    tem.tip.style.display = 'block';
    durationOffset += 5;
    tem.tip.innerHTML = `快进${durationOffset}秒`;
  }

  function minus5() {
    if (isAdd) {
      isAdd = false;
      durationOffset = 0;
    }

    tem.tip.style.display = 'block';
    durationOffset += 5;
    tem.tip.innerHTML = `快退${durationOffset}秒`;
  }

  function hideTip() {
    tem.tip.style.display = 'none';
    durationOffset = 0;
  }

  let debounceOnkeydownFunc = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(2000, hideTip);

  document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    debounceOnkeydownFunc();

    if (e && e.keyCode == 37 && tem.video.currentTime >= 0) {
      // left键
      tem.video.currentTime -= 5;
      tem.load.value = tem.video.currentTime;
      isMinus = true;
      minus5();
    }

    if (e && e.keyCode == 39 && tem.video.currentTime >= 0) {
      // right键
      tem.video.currentTime += 5;
      tem.load.value = tem.video.currentTime;
      isAdd = true;
      add5();
    }

    if (e && e.keyCode == 38 && tem.video.currentTime >= 0) {
      // top键
      tem.voice.style.display = 'block';
      voiceDebounceFunc();
      handleIncrease();
    }

    if (e && e.keyCode == 40 && tem.video.currentTime >= 0) {
      // bottom键
      tem.voice.style.display = 'block';
      voiceDebounceFunc();
      handleDecrease();
    }

    if (e && e.keyCode == 32 && !isInput) {
      // space键
      handleClick();
    }
  }; //画中画


  tem.troggle.addEventListener('click', function () {
    if (!document.pictureInPictureElement) {
      //开启
      tem.video.requestPictureInPicture().catch(error => {
        console.log(error, 'Video failed to enter Picture-in-Picture mode.');
      });
    } else {
      //关闭
      document.exitPictureInPicture().catch(error => {
        console.log(error, 'Video failed to leave Picture-in-Picture mode.');
      });
      tem.play_box.style.display = 'flex';
      tem.player.className = "icon_pause";
      tem.play_box.className = "button_pause";
      tem.video.pause();
    }
  });
  tem.video.addEventListener('leavepictureinpicture', function (e) {
    tem.play_box.style.display = 'flex';
    tem.play_btn.className = "button_pause";
    tem.player.className = "icon_pause";
  }); //拖动进度条

  function load(val) {
    tem.mask.style.width = val + 'px';
    tem.bar.style.left = val + 'px';
    let ct = parseInt(tem.video.currentTime);
    tem.currentTime.innerText = (0,_util_formateTime_js__WEBPACK_IMPORTED_MODULE_1__.formateTime)(ct) + ' /';
  }

  function buff(val) {
    tem.buffer.style.width = val + 'px';
  }

  tem.load.onmousedown = function (event) {
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    barleft = leftVal - tem.content.offsetLeft;
    load(barleft);
    const rate = (barleft / (tem.load.offsetWidth - tem.bar.offsetWidth)).toFixed(8);
    tem.video.currentTime = rate * tem.video.duration;
  };

  tem.bar.onmousedown = function (event) {
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    var that = this;

    document.onmousemove = function (event) {
      var event = event || window.event;
      barleft = event.clientX - leftVal; // 越界判断

      if (barleft < 0) {
        barleft = 0;
      } else if (barleft > tem.load.offsetWidth - tem.bar.offsetWidth) {
        barleft = tem.load.offsetWidth - tem.bar.offsetWidth;
      }

      tem.mask.style.width = barleft + 'px';
      that.style.left = barleft + "px";
      const rate = (barleft / (tem.load.offsetWidth - tem.bar.offsetWidth)).toFixed(8);
      tem.video.currentTime = rate * tem.video.duration; // 防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug

      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    };
  };

  document.onmouseup = function () {
    document.onmousemove = null; //弹起鼠标不做任何操作
  };

  tem.advancedDanmaku_btn.onclick = () => {
    isShowList = false;
    isInput = true;
    (0,_danmakuEditor_js__WEBPACK_IMPORTED_MODULE_4__.openEditor)();

    if (!editor) {
      editor = ace.edit("danmaku_code");
      let theme = "twilight";
      let language = "json";
      editor.setTheme("ace/theme/" + theme);
      editor.session.setMode("ace/mode/" + language);
      editor.setFontSize(14);
      editor.setOption("wrap", "free");

      ace.require("ace/ext/language_tools");

      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      editor.setValue("[\n{}\n]");
      editor.gotoLine(2);
      (0,_danmakuEditor_js__WEBPACK_IMPORTED_MODULE_4__.createPreview)().then(tem => {
        advancePreview = new MFADE({
          containers: tem.advancePre,
          danmaku: send => {
            send([editor.getValue()]);
          }
        });
      });
    }

    tem.editor_preview.onclick = () => {
      (0,_danmakuEditor_js__WEBPACK_IMPORTED_MODULE_4__.closeEditor)();
      advancePreview.reset();
      advancePreview.start();
      tem.video.play();
    };

    tem.editor_clear.onclick = () => {
      editor.setValue("");
    };
  };

  tem.ade_close.onclick = () => {
    isInput = false;
    (0,_danmakuEditor_js__WEBPACK_IMPORTED_MODULE_4__.closeEditor)();
  };

  let previewCreated = false;
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/MSE.js":
/*!******************************************!*\
  !*** ./src/player/mfunsPlayer/js/MSE.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFlv": () => (/* binding */ addFlv),
/* harmony export */   "initMSE": () => (/* binding */ initMSE)
/* harmony export */ });
function addFlv() {
  return new Promise((resolve, reject) => {
    var secScript = document.createElement("script");
    secScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js");
    document.body.appendChild(secScript);

    function checkFlv() {
      setTimeout(() => {
        if (window.flvjs) {
          resolve();
        } else {
          checkFlv(); // reject()
        }
      }, 10);
    }

    checkFlv();
  });
}
function initMSE(video, url) {
  if (flvjs.isSupported()) {
    var flvPlayer = flvjs.createPlayer({
      type: "flv",
      url
    });
    flvPlayer.attachMediaElement(video);
    flvPlayer.load(); //加载
  }

  function flv_start() {
    player.play();
  }

  function flv_pause() {
    player.pause();
  }

  function flv_destroy() {
    player.pause();
    player.unload();
    player.detachMediaElement();
    player.destroy();
    player = null;
  }

  function flv_seekto() {
    player.currentTime = parseFloat(document.getElementsByName("seekpoint")[0].value);
  }
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/canvasRender.js":
/*!***************************************************!*\
  !*** ./src/player/mfunsPlayer/js/canvasRender.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvasRender": () => (/* binding */ canvasRender)
/* harmony export */ });
class canvasRender {
  constructor(obj, ctx) {
    this.value = obj.value;
    this.time = obj.time;
    this.token = obj.userToken;
    this.obj = obj;
    this.ctx = ctx;
    this.normalend = false;
    this.normalisInited = false;
    this.topend = false;
    this.topisInited = false;
    this.bottomend = false;
    this.bottomisInited = false;
    this.type = this.obj.type || this.ctx.type;
    this.color = this.obj.color || this.ctx.color;
    this.fontSize = this.obj.fontSize || this.ctx.fontSize;
    this.isclear = false;
    this.isChosen = false; //计算弹幕自身宽度，计算当前视频时间是否继续绘制弹幕

    let span = document.createElement('span');
    span.innerText = this.value;
    span.style.fontSize = this.fontSize + 'px';
    span.style.position = 'absolute';
    document.body.appendChild(span); //创建一个新的段落元素 <span>，然后添加到 <body> 的最尾部
    //记录弹幕宽度和高度

    this.width = span.offsetWidth;
    this.height = span.clientHeight;
    document.body.removeChild(span);
  } //初始化弹幕


  init(index) {
    this.opacity = this.obj.opacity || this.ctx.opacity;
    this.color = this.obj.color || this.ctx.color;
    this.fontSize = this.obj.fontSize || this.ctx.fontSize;
    this.speed = this.obj.speed || this.ctx.speed; //弹幕出现的位置

    this.x = this.ctx.canvas.width;

    function isFullScreen() {
      return !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.webkitFullScreen || document.msFullScreen);
    }

    let orbital = parseInt(this.ctx.canvas.clientHeight / (this.fontSize + 7));

    if (this.ctx.BarrageData.length < 100) {
      orbital = orbital / 2;
    } // this.y = orbital * parseInt(20 * Math.random() + 1)


    this.y = (this.fontSize + 8) * (index % orbital);

    if (this.y < this.fontSize + 8) {
      this.y = this.fontSize + 8;
    }

    if (this.y > this.ctx.canvas.height - this.fontSize - 8) {
      this.y = this.ctx.canvas.height - this.fontSize - 8;
    }

    if (this.type == 'top' || this.type == 'bottom') {
      this.x = (this.ctx.canvas.width - this.width) / 2;
      this.speed = 0;
      this.y = this.height;
    }
  }

  selfrender(p, index, type) {
    if (p) {
      this.renderPath();
      this.isChosen = this.ctx.context.isPointInPath(p.x, p.y); // this.ctx.context.clearRect(this.x, this.y-this.fontSize, this.width, this.fontSize);

      if (this.isChosen) {
        if (type == "normal") {
          console.log(this.ctx.normalbarrage[index]);
          return index;
        }

        if (type == "top") {
          console.log(this.ctx.topbarrage.items[index].element);
          return index;
        }

        if (type == "bottom") {
          console.log(this.ctx.bottombarrage.items[index].element);
          return index;
        }
      }
    } else {
      if (this.token) {
        this.renderBorder();
      }

      this.renderFont();
    }
  }

  renderPath() {
    this.ctx.context.beginPath();
    this.ctx.context.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.ctx.context.rect(this.x, this.y - this.fontSize * 0.8, this.width, this.fontSize);
    this.ctx.context.stroke();
  }

  renderBorder(color) {
    this.ctx.context.strokeStyle = '#ffff00';
    this.ctx.context.strokeRect(this.x, this.y - this.fontSize * 0.8, this.width, this.fontSize);
  }

  renderFont() {
    this.ctx.context.font = this.fontSize + 'px 微软雅黑';
    this.ctx.context.fillStyle = this.color;
    this.ctx.context.strokeStyle = '#000';
    this.ctx.context.strokeText(this.value, this.x, this.y);
    this.ctx.context.fillText(this.value, this.x, this.y); // this.ctx.context.shadowColor = 'rgba(0, 0, 0, 0.2)'
    // this.ctx.context.shadowOffsetX = 2
    // this.ctx.context.shadowOffsetY = 2
    // this.ctx.context.shadowBlur = 2
  }

}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/canvasStage.js":
/*!**************************************************!*\
  !*** ./src/player/mfunsPlayer/js/canvasStage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvasStage": () => (/* binding */ canvasStage)
/* harmony export */ });
/* harmony import */ var _canvasRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasRender.js */ "./src/player/mfunsPlayer/js/canvasRender.js");
/* harmony import */ var _util_priorityQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/priorityQueue.js */ "./src/player/mfunsPlayer/js/util/priorityQueue.js");


class canvasStage {
  constructor(tem, advanceDanmakuStage, options = {}) {
    if (!tem) return;
    let playTimer;
    let play_btn = tem.play_btn;
    let player = tem.player;
    let videoInited;
    const that = this;
    this.canvas = tem.canvas;
    this.video = tem.video;
    this.chosenBarrage = [];
    tem.control_mask.addEventListener('click', function (e) {
      let p = that.getp(e);
      that.renderTop(p);
      that.renderNormal(p);
      that.renderBottom(p);
    }, false);
    let defaultoptions = {
      //默认弹幕样式	
      speed: 3,
      color: '#fff',
      fontSize: 24,
      type: 'normal',
      BarrageData: []
    };
    Object.assign(this, defaultoptions, options); //对象合并 将属性全部挂载在实例this上
    //canavas设置

    this.context = this.canvas.getContext('2d'); //是否暂停

    this.isPaused = true; //默认暂停播放,不渲染弹幕
    //分析弹幕样式数据

    this.BarrageData.forEach(el => {
      let type;

      switch (el[1]) {
        case 0:
          type = 'normal';
          break;

        case 1:
          type = 'top';
          break;

        case 2:
          type = 'bottom';
          break;
      }

      el.time = el[0];
      el.color = '#' + el[2].toString(16);
      el.type = type;
      el.value = el[4];
    });
    this.BarrageData = this.BarrageData.sort((a, b) => {
      return a.time - b.time;
    }); //设置渲染器

    this.renders = this.BarrageData.map(obj => new _canvasRender_js__WEBPACK_IMPORTED_MODULE_0__.canvasRender(obj, this));
    this.video.addEventListener('canplay', function () {
      if (videoInited) {
        return;
      }

      const videoRate = this.clientHeight / this.clientWidth;

      if (videoRate >= 3 / 4) {
        this.style.width = "75%";
      } else {}

      tem.wait_loading.style.display = 'none';
      tem.control_mask.style.height = tem.video.clientHeight + 'px';
      const offsetHeight = tem.control.clientHeight + tem.video.clientHeight;
      tem.content.style.height = offsetHeight + 'px';
      tem.load.style.bottom = offsetHeight - 2 + 'px';
      tem.canvas.height = tem.video.clientHeight - tem.mask.clientHeight;
      tem.advance.style.height = tem.video.clientHeight - tem.mask.clientHeight + 'px';
      tem.ade_mask.style.height = tem.video.clientHeight - tem.mask.clientHeight + 'px';
      advanceDanmakuStage.resize(); //取出顶部弹幕				

      that.getTop(); //取出底部弹幕

      that.getBottom(); //取出滚动弹幕

      that.getNormal(); //弹幕初始化

      that.init(); //递归渲染弹幕		

      that.render();
      videoInited = true;
    });
  } //获取鼠标点击位置


  getp(ev) {
    let x, y;

    if (ev.layerX || ev.layerX === 0) {
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX === 0) {
      // Opera
      x = ev.offsetX;
      y = ev.offsetY;
    }

    return {
      x: x,
      y: y
    };
  }

  isFullScreen() {
    return !!(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.webkitFullScreen || document.msFullScreen);
  }

  getTop() {
    this.topbarrage = new _util_priorityQueue_js__WEBPACK_IMPORTED_MODULE_1__.PriorityQueue();
    this.renders.forEach(barrage => {
      if (barrage.type == 'top') {
        this.topbarrage.push(barrage, barrage.time);
      }
    });
  }

  getBottom() {
    this.bottombarrage = new _util_priorityQueue_js__WEBPACK_IMPORTED_MODULE_1__.PriorityQueue();
    this.renders.forEach(barrage => {
      if (barrage.type == 'bottom') {
        this.bottombarrage.push(barrage, barrage.time);
      }
    });
  }

  getNormal() {
    this.normalbarrage = [];
    this.renders.forEach(barrage => {
      if (barrage.type == 'normal') {
        this.normalbarrage.push(barrage);
      }
    });
    this.normalbarrage.sort((a, b) => {
      return a.time - b.time;
    });
  }

  init() {
    let top = this.normalbarrage[0];
    let k = 1;
    let orbital = parseInt(this.canvas.height / 33);

    for (let i = 0; i < this.normalbarrage.length; i++) {
      this.normalbarrage[i].rank = 1;

      if (this.normalbarrage[i].time - top.time <= 2.5) {
        this.normalbarrage[i].rank += k;
        k++;

        if (k > orbital) {
          k = 1;
        }
      } else {
        top = this.normalbarrage[i];
        this.normalbarrage[i].rank = 1;
        k = 1;
      }
    }
  } //渲染顶部弹幕


  renderTop(p) {
    let videoTime = this.video.currentTime;
    let top = this.topbarrage.items[0];
    let k = 0;

    for (let i = 0; i < this.topbarrage.items.length; i++) {
      this.topbarrage.items[i].element.height = 26;

      if (this.topbarrage.items[i].priority - top.priority <= 4) {
        this.topbarrage.items[i].element.height += 26 * k;
        k += 1;

        if (this.topbarrage.items[i].element.height > this.canvas.height) {
          this.topbarrage.items[i].element.height = 26;
        }
      } else {
        top = this.topbarrage.items[i];
        k = 1;
      }
    }

    this.topbarrage.items.forEach((barrage, index) => {
      if (!barrage.element.topend && videoTime >= barrage.element.time && videoTime <= barrage.element.time + 4) {
        if (!barrage.element.topisInited) {
          //初始化弹幕样式
          barrage.element.init();
          barrage.element.topisInited = true;
        }

        barrage.element.selfrender(p, index, "top");

        if (videoTime - barrage.element.time > 4) {
          barrage.element.topend = true;
        }
      }
    });
  } //渲染底部弹幕


  renderBottom(p) {
    let videoTime = this.video.currentTime;
    let bottom = this.bottombarrage.items[0];
    let k = 0;

    for (let i = 0; i < this.bottombarrage.items.length; i++) {
      this.bottombarrage.items[i].element.height = this.canvas.height - 6;

      if (this.bottombarrage.items[i].priority - bottom.priority <= 4) {
        this.bottombarrage.items[i].element.height -= 26 * k;
        k += 1;

        if (this.bottombarrage.items[i].element.height < 26) {
          this.bottombarrage.items[i].element.height = 26;
        }
      } else {
        bottom = this.bottombarrage.items[i];
        k = 1;
      }
    }

    this.bottombarrage.items.forEach((barrage, index) => {
      if (!barrage.element.bottomend && videoTime >= barrage.element.time && videoTime <= barrage.element.time + 4) {
        if (!barrage.element.bottomisInited) {
          //初始化弹幕样式
          barrage.element.init();
          barrage.element.bottomisInited = true;
        }

        barrage.element.selfrender(p, index, "bottom");

        if (videoTime - barrage.element.time > 4) {
          barrage.element.bottomend = true;
        }
      }
    });
  } //渲染滚动弹幕


  renderNormal(p) {
    //将弹幕数组中的弹幕逐一取出，判断弹幕的时间和视频的时间是否一致，符合就执行渲染
    let videoTime = this.video.currentTime; // this.init()

    this.normalbarrage.forEach((barrage, index) => {
      if (!barrage.normalend && barrage.time <= videoTime) {
        //初始化弹幕样式	
        if (!barrage.normalisInited) {
          barrage.init(barrage.rank);
          barrage.normalisInited = true;
        } //绘制


        let speedRank = this.isFullScreen() ? 500 : 350;
        barrage.speed = (barrage.width + this.canvas.clientWidth) / speedRank;
        barrage.x -= barrage.speed;
        barrage.selfrender(p, index, "normal"); //越界判断

        if (barrage.x <= barrage.width * -1) {
          barrage.normalend = true; //渲染结束
        }
      }
    });
  }

  render() {
    //第一次先进行清空操作，执行渲染弹幕，如果没有暂停视频则继续渲染
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //渲染弹幕

    this.renderNormal(); //滚动

    this.renderTop(); //顶部

    this.renderBottom(); //底部

    if (!this.isPaused) {
      // setTimeout(()=>{
      // 	this.render()
      //   },1000/60)
      requestAnimationFrame(this.render.bind(this));
    }
  } // 添加弹幕


  add(obj) {
    const newBarrage = new _canvasRender_js__WEBPACK_IMPORTED_MODULE_0__.canvasRender(obj, this);
    this.renders.push(newBarrage);
  } // 重置弹幕


  reset() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let videoTime = this.video.currentTime;
    this.renders.forEach(barrage => {
      barrage.normalend = false;
      barrage.topend = false;
      barrage.bottomend = false;

      if (videoTime <= barrage.time) {
        barrage.normalisInited = false;
        barrage.topisInited = false;
        barrage.bottomisInited = false;
      } else {
        barrage.normalend = true;
        barrage.topend = true;
        barrage.bottomend = true;
      }
    });
  }

}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/control.js":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/js/control.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./src/player/mfunsPlayer/js/request.js");
/* harmony import */ var _createControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createControl.js */ "./src/player/mfunsPlayer/js/createControl.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.js */ "./src/player/mfunsPlayer/js/video.js");
/* harmony import */ var _getDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDOM.js */ "./src/player/mfunsPlayer/js/getDOM.js");
/* harmony import */ var _canvasStage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvasStage.js */ "./src/player/mfunsPlayer/js/canvasStage.js");
/* harmony import */ var _DOMoperation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMoperation.js */ "./src/player/mfunsPlayer/js/DOMoperation.js");
/* harmony import */ var _MSE_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MSE.js */ "./src/player/mfunsPlayer/js/MSE.js");







function init(el, url, callback) {
  //初始化播放器控件及样式
  (0,_createControl_js__WEBPACK_IMPORTED_MODULE_1__.createControl)(el);
  let tem = (0,_getDOM_js__WEBPACK_IMPORTED_MODULE_3__.default)();
  let BarrageData = [];
  let stageList = []; //获取视频链接

  if (url.videoType === "flv") {
    let video = document.createElement("video");
    video.setAttribute("class", "mfuns_video");
    tem.video = video;
    (0,_video_js__WEBPACK_IMPORTED_MODULE_2__.getVideoTime)(tem);
    el.appendChild(video);
    (0,_MSE_js__WEBPACK_IMPORTED_MODULE_6__.initMSE)(tem.video, url.video);
  } else {
    //初始化video
    let video = document.createElement("video");
    video.setAttribute("class", "mfuns_video");
    tem.video = video;
    (0,_video_js__WEBPACK_IMPORTED_MODULE_2__.initVideo)(url.video, tem);
    (0,_video_js__WEBPACK_IMPORTED_MODULE_2__.getVideoTime)(tem);
    el.appendChild(video);
  } //获取弹幕数据


  (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.getDanmakuData)(url.danmaku, "GET").then(function (res) {
    //创建弹幕池
    BarrageData = res.data;
    createCanvas();
  }).catch(function (err) {
    console.error(err);
  });

  function createCanvas() {
    //创建视频弹幕列表
    //初始化canvas
    let canvas = document.createElement("canvas");
    canvas.setAttribute("class", "mfuns_canvas");
    tem.canvas = canvas;
    tem.canvas.width = el.clientWidth;
    el.appendChild(canvas); //初始化高级弹幕容器

    let advance = document.createElement("div");
    advance.setAttribute("class", "advanceDanmaku_box");
    tem.advance = advance;
    tem.advance.style.width = el.clientWidth + 'px';
    el.appendChild(advance); //新建舞台

    let advanceDanmakuStage = new MFADE({
      containers: tem.advance,
      danmaku: send => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url.advanceDanmaku);

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            send([xhr.responseText]);
          } else {// console.log('error')
          }
        };

        xhr.send(); // /*
        // 获取弹幕,调用回调函数，将弹幕数组传进去
        // */
        // send(["json....","json...."])
      }
    });
    console.log(advanceDanmakuStage);
    let canvasDanmakuStage = new _canvasStage_js__WEBPACK_IMPORTED_MODULE_4__.canvasStage(tem, advanceDanmakuStage, {
      BarrageData
    });
    stageList.push(canvasDanmakuStage);
    stageList.push(advanceDanmakuStage); //使用(注册)舞台

    (0,_DOMoperation_js__WEBPACK_IMPORTED_MODULE_5__.operate)(canvasDanmakuStage, advanceDanmakuStage, tem, BarrageData, callback);
  }
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/createBarrageList.js":
/*!********************************************************!*\
  !*** ./src/player/mfunsPlayer/js/createBarrageList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBarrageList": () => (/* binding */ createBarrageList)
/* harmony export */ });
/* harmony import */ var _util_formateTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/formateTime.js */ "./src/player/mfunsPlayer/js/util/formateTime.js");

function createBarrageList(data, el, page) {
  var list = '';
  var pageData;

  if (data.length - page * 40 > 40) {
    pageData = data.slice(page * 40, (page + 1) * 40);
  } else if (data.length - page * 40 < 40 && data.length - page * 40 > 0) {
    pageData = data.slice(page * 40, data.length);
  } else {
    return;
  }

  for (let i = 0; i < pageData.length; i++) {
    var item = document.createElement("div");
    var contentText = document.createElement("div");
    var time = document.createElement("div");
    item.setAttribute("class", "item");
    contentText.setAttribute("class", "contentText");
    time.setAttribute("class", "time");
    contentText.innerText = pageData[i].value;
    time.innerText = (0,_util_formateTime_js__WEBPACK_IMPORTED_MODULE_0__.formateTime)(parseInt(pageData[i].time));
    item.innerHTML += `${contentText.outerHTML}
		${time.outerHTML}`;
    list += item.outerHTML;
  }

  el.innerHTML += list;
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/createControl.js":
/*!****************************************************!*\
  !*** ./src/player/mfunsPlayer/js/createControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createControl": () => (/* binding */ createControl)
/* harmony export */ });
function createControl(el) {
  el.innerHTML = `
	<div id="danmakuList" class="list">
			<div id="headOfList">
			    <div class="label">弹幕内容</div>
			    <div class="label">时间</div>
				
			</div>
			<div id="danmakuList_content"></div>
			<div id="programList_content"></div>
			<div id="footOfList">
			  <div id="closeList" class="close"></div>
			  <div id="danmakuList_btn" class="foot_item"></div>
			  <div id="advancedDanmaku_btn" class="foot_item">高级弹幕<div class="goto"></div></div>
			</div>
	</div>   
	
	<div class="advanceDanmakuEditor_mask">
	<div class="advanceDanmakuEditor" >
	  <div class="exit_edit">x</div>
	  <div class="editor_title">mfuns高级弹幕编辑器</div>
	  <div class="danmaku_code" id="danmaku_code"></div>
	  <div class="danmuku_link"><a href="https://meogirl.ml/2021/06/11/danmaku/Mfuns%E5%BC%B9%E5%B9%95%E6%89%8B%E5%86%8C/"
	   target="_blank">mfuns高级弹幕手册</a></div>
	  <div class="editor_footer">
	     <div class="editor_btn" id="editor_clear">清除</div>
		 <div class="editor_btn" id="editor_preview">预览</div>
		 <div class="editor_btn" id="editor_emit">发送</div>
	  </div>
	</div>
	</div>
	<div id="control_mask">
		<div id="tip" class="tip"></div>
		<div id="voice"></div>
		<div id="wait_loading">
		 <div></div>
		 <p>正在缓冲...</p>
		</div>
		
		<div id="play_box" class="button_pause">
			
		</div>
		<div class="advanceDanmaku_pre_box"></div>
	  </div>
		
		<div id="danmakuEditor">
			<div id="danmaku_type">
				<div id="top">顶部</div>
				<div id="normal" class="focus">滚动</div>
				<div id="bottom">底部</div>
			</div>
			<div id="danmaku_color"></div>
		</div>
		
		
		
		<div id="control">
			<div class="loader-box" id="load">
			 <div class="scroll" id="scroll">
			    <div class="bar" id="bar"></div>
				<div class="buffer" id="buffer"></div>
			    <div class="mask" id="mask"></div>
				
			  </div>
			</div>	
			<div id="wrap">
				<div id="player"><div class="icon_pause" id="swich_player"></div></div>
				
				<span id="currentTime"></span>
				<span id="total"></span>
				
				
				<div id="barrage">
					<div class="input_box">
						<input type="text" placeholder="喵御宅Mfuns,发射(。゜ω゜)ノ!" id="text" />
						<div id="danmaku_style">A</div>
						<div id="emit">发送</div>
					</div>
					
				
				</div>
				<div class="control_right">
					<div id="danmaku">
						<div id="switch" class="switch_open">弹</div>
					</div>
					<div id="list_danmaku" class="right_icon">
						<i></i>
					</div>
				    <div id="troggle">
						<i></i>
					</div>
				    <div id="full" class="right_icon">
						<i class="fullsc" id="fs_icon"></i>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	
	`;
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/danmakuEditor.js":
/*!****************************************************!*\
  !*** ./src/player/mfunsPlayer/js/danmakuEditor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openEditor": () => (/* binding */ openEditor),
/* harmony export */   "closeEditor": () => (/* binding */ closeEditor),
/* harmony export */   "createPreview": () => (/* binding */ createPreview),
/* harmony export */   "previewCallback": () => (/* binding */ previewCallback),
/* harmony export */   "clearCallback": () => (/* binding */ clearCallback),
/* harmony export */   "emitCallback": () => (/* binding */ emitCallback)
/* harmony export */ });
/* harmony import */ var _getDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOM.js */ "./src/player/mfunsPlayer/js/getDOM.js");

let tem;
function openEditor() {
  tem = (0,_getDOM_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  tem.danmakuList.style.animation = 'retract 0.3s';
  tem.danmakuList.style.display = 'none';
  tem.video.pause();
  tem.ade_mask.style.display = 'block';
  tem.ade.style.animation = 'down 0.35s';
}
function closeEditor() {
  tem.video.play();
  tem.ade.style.animation = 'up 0.35s';
  setTimeout(() => {
    tem.ade_mask.style.display = 'none';
  }, 350);
}
function createPreview() {
  return new Promise((resolve, reject) => {
    tem.advancePre.style.width = tem.content.clientWidth + 'px';
    tem.advancePre.style.height = tem.video.clientHeight + 'px';

    if (tem.advancePre) {
      resolve(tem);
    } else {
      reject();
    }
  });
}
function previewCallback(code) {
  let advanceDanmakuPreview;

  if (!advanceDanmakuPreview) {
    advanceDanmakuPreview = new MfunsDanMaku({
      containers: tem.advancePre,
      danmaku: send => {
        send([code]);
      }
    });
  }

  return advanceDanmakuPreview;
}
function clearCallback() {}
function emitCallback() {}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/getDOM.js":
/*!*********************************************!*\
  !*** ./src/player/mfunsPlayer/js/getDOM.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Template = function (newDom) {
  let $ = document.querySelector.bind(document);
  let DOM = {
    canvas: $('.mfuns_canvas'),
    video: $('.mfuns_video'),
    emit: $('#emit'),
    full: $('#full'),
    barrage: $('#barrage'),
    content: $('.content'),
    control_mask: $('#control_mask'),
    control_right: $('.control_right'),
    emitTop: $('#top'),
    danmaku: $('#danmaku'),
    fs_icon: $('#fs_icon'),
    text: $('#text'),
    color: $('#color'),
    scroll: $('#scroll'),
    bar: $('#bar'),
    buffer: $('#buffer'),
    mask: $('#mask'),
    speed: $('#speed'),
    switch_btn: $('#switch'),
    range: $('#range'),
    player: $('#swich_player'),
    player_box: $('#player'),
    control: $('#control'),
    wait_loading: $('#wait_loading'),
    load: $('#load'),
    list_btn: $('#list_danmaku'),
    troggle: $('#troggle'),
    play_btn: $('#play_button'),
    play_box: $('#play_box'),
    tip: $('#tip'),
    currentTime: $('#currentTime'),
    total: $('#total'),
    danmakuList: $('#danmakuList'),
    danmakuListContent: $('#danmakuList_content'),
    headOfList: $('#headOfList'),
    footOfList: $('#footOfList'),
    closeList: $('#closeList'),
    advancedDanmaku_btn: $('#advancedDanmaku_btn'),
    advancePre: $('.advanceDanmaku_pre_box'),
    ade_mask: $('.advanceDanmakuEditor_mask'),
    ade: $('.advanceDanmakuEditor'),
    ade_footer: $('.editor_footer'),
    ade_close: $('.exit_edit'),
    ade_code: $('#danmaku_code'),
    editor_clear: $('#editor_clear'),
    editor_preview: $('#editor_preview'),
    editor_emit: $('#editor_emit'),
    danmakuEditor: $('#danmakuEditor'),
    danmaku_style: $('#danmaku_style'),
    danmaku_type: $('#danmaku_type'),
    danmaku_color: $('#danmaku_color'),
    voice: $('#voice'),
    wrap: $('#wrap')
  };
  return DOM;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);

/***/ }),

/***/ "./src/player/mfunsPlayer/js/request.js":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/js/request.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDanmakuData": () => (/* binding */ getDanmakuData),
/* harmony export */   "postDanmaku": () => (/* binding */ postDanmaku)
/* harmony export */ });
function getDanmakuData(url, method) {
  return new Promise((resolve, reject) => {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const res = JSON.parse(xmlhttp.responseText);
        resolve(res);
      } else if (xmlhttp.status == 500) {
        reject('server ERROR');
      }
    };

    xmlhttp.open(method, url, false);
    xmlhttp.send();
  });
}
function postDanmaku() {
  return new Promise((resolve, reject) => {});
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/util/debounce.js":
/*!****************************************************!*\
  !*** ./src/player/mfunsPlayer/js/util/debounce.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(delay, callback) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback();
    }, delay);
  };
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/util/formateTime.js":
/*!*******************************************************!*\
  !*** ./src/player/mfunsPlayer/js/util/formateTime.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formateTime": () => (/* binding */ formateTime)
/* harmony export */ });
function formateTime(s) {
  var t;

  if (s > -1) {
    var hour = Math.floor(s / 3600);
    var min = Math.floor(s / 60) % 60;
    var sec = s % 60;

    if (hour < 0 || hour == 0) {
      t = '';
    } else if (0 < hour < 10) {
      t = '0' + hour + ":";
    } else {
      t = hour + ":";
    }

    if (min < 10) {
      t += "0";
    }

    t += min + ":";

    if (sec < 10) {
      t += "0";
    }

    t += sec;
  }

  return t;
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/util/priorityQueue.js":
/*!*********************************************************!*\
  !*** ./src/player/mfunsPlayer/js/util/priorityQueue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityQueue": () => (/* binding */ PriorityQueue)
/* harmony export */ });
function PriorityQueue() {
  //内部封装队列元素类	
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.items = []; //插入元素

  PriorityQueue.prototype.push = function (element, priority) {
    let queueElement = new QueueElement(element, priority); //保存传入的元素

    if (this.items.length == 0) {
      this.items.push(queueElement);
    } else {
      let added = false;

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement);
      }
    }
  };
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/util/thro.js":
/*!************************************************!*\
  !*** ./src/player/mfunsPlayer/js/util/thro.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "thro": () => (/* binding */ thro)
/* harmony export */ });
function thro(callback, delay) {
  let timer;
  return function (param) {
    if (!timer) {
      timer = setTimeout(function () {
        if (param) {
          callback(...param);
          timer = null;
          return;
        }

        callback();
        timer = null;
      }, delay);
    }
  };
}

/***/ }),

/***/ "./src/player/mfunsPlayer/js/video.js":
/*!********************************************!*\
  !*** ./src/player/mfunsPlayer/js/video.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initVideo": () => (/* binding */ initVideo),
/* harmony export */   "getVideoTime": () => (/* binding */ getVideoTime)
/* harmony export */ });
/* harmony import */ var _util_formateTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/formateTime.js */ "./src/player/mfunsPlayer/js/util/formateTime.js");

function initVideo(src, tem) {
  // tem.video.src = src + '#t=1.1'
  tem.video.src = src;
}
function getVideoTime(tem) {
  tem.load.max = parseInt(tem.video.duration);
  tem.currentTime.innerText = '00:00 ' + '/';
  tem.total.innerText = (0,_util_formateTime_js__WEBPACK_IMPORTED_MODULE_0__.formateTime)(load.max) || '0:00';

  if (isNaN(load.max)) {
    setTimeout(function () {
      getVideoTime(tem);
    }, 100);
  } else {
    return;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/player/mfunsPlayer/css/index.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/player/mfunsPlayer/css/index.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_list_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/list.svg */ "./src/player/mfunsPlayer/icon/list.svg");
/* harmony import */ var _icon_fullscreen_fill_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/fullscreen-fill.svg */ "./src/player/mfunsPlayer/icon/fullscreen-fill.svg");
/* harmony import */ var _icon_Fullscreen_Exit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/Fullscreen-Exit.svg */ "./src/player/mfunsPlayer/icon/Fullscreen-Exit.svg");
/* harmony import */ var _icon_play_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/play.png */ "./src/player/mfunsPlayer/icon/play.png");
/* harmony import */ var _icon_pause_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/pause.png */ "./src/player/mfunsPlayer/icon/pause.png");
/* harmony import */ var _icon_loading_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/loading.gif */ "./src/player/mfunsPlayer/icon/loading.gif");
/* harmony import */ var _icon_back_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon/back.svg */ "./src/player/mfunsPlayer/icon/back.svg");
/* harmony import */ var _icon_right_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icon/right.svg */ "./src/player/mfunsPlayer/icon/right.svg");
/* harmony import */ var _icon_control_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon/control.png */ "./src/player/mfunsPlayer/icon/control.png");
// Imports












var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_list_svg__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_fullscreen_fill_svg__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_Fullscreen_Exit_svg__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_play_png__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_pause_png__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_loading_gif__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_back_svg__WEBPACK_IMPORTED_MODULE_9__.default);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_right_svg__WEBPACK_IMPORTED_MODULE_10__.default);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_icon_control_png__WEBPACK_IMPORTED_MODULE_11__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#control {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tz-index: 9999;\r\n\twidth: 100%;\r\n\theight:45px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n    \r\n}\r\n\r\n#control_mask {\r\n\twidth: 100%;\r\n\tbackground: rgba(255, 255, 255, 0);\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n}\r\n\r\n\r\n#wrap {\r\n\twidth: 100%;\r\n\theight: 93%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n#currentTime,\r\n#total {\r\n\tfont-size: 13px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n#control span {\r\n\tcolor: #fff;\r\n}\r\n\r\n.control_right {\r\n\twidth: 23%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 2px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n#barrage {\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tdisplay: flex;\r\n\tmargin: auto;\r\n\tpadding: 2px;\r\n\theight: 75%;\r\n\r\n}\r\n\r\n#danmakuEditor {\r\n\twidth: 180px;\r\n\theight: 150px;\r\n\tbackground: #333;\r\n\tposition: absolute;\r\n\tz-index: 99999;\r\n\tborder-radius: 4px;\r\n\tdisplay: none;\r\n}\r\n\r\n#danmaku_type {\r\n\toverflow: hidden;\r\n\twidth: 150px;\r\n\theight: 20px;\r\n\tmargin: 20px auto;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_type div{\r\n\twidth: 50px;\r\n\theight: 20px;\r\n\tline-height: 20px;\r\n\ttext-align: center;\r\n\tfont-size: 13px;\r\n\tborder-right: 1px solid #fff;\r\n\tcolor: #fff;\r\n\toverflow: hidden;\r\n}\r\n\r\n#danmaku_type .focus {\r\n\tcolor: #000;\r\n\tbackground: #f6f6f6;\r\n}\r\n\r\n#danmaku_type :last-child {\r\n\tborder: none;\r\n}\r\n\r\n#danmaku_color {\r\n\twidth: 85%;\r\n\theight: 80px;\r\n\tmargin: 20px auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_color i {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin-right: 8px;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n\tborder: 2px solid #333;\r\n}\r\n\r\n#danmaku_color :nth-child(5n) {\r\n\tmargin-right: 0;\r\n}\r\n\r\n#danmaku_color .focus {\r\n\tborder: 2px solid #f5f5f5;\r\n}\r\n\r\n.input_box {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.input_box input {\r\n\tflex: 6;\r\n\theight: 100%;\r\n\toutline: none;\r\n\tborder: #fff;\r\n\tborder-right: none;\r\n\tbackground-color: #555;\r\n\tborder-radius: 3px 0 0 3px;\r\n\tpadding-left: 40px;\r\n\tcolor: #fff;\r\n}\r\n\r\n#barrage input::-webkit-input-placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n.input_box #danmaku_style {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 10px;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\twidth: 15px;\r\n\theight: 16px;\r\n\tline-height: 16px;\r\n\tmargin-top: -8px;\r\n\tborder-bottom: 1px solid #fff;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_style:hover {\r\n\tcolor: #7b7ff7;\r\n\tborder-color: #7b7ff7;\r\n}\r\n\r\n#emit {\r\n\tflex: 1;\r\n\twidth: 60px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 100%;\r\n\tfont-size: 10px;\r\n\tcolor: #fff;\r\n\tbackground: #7b7ff7;\r\n\tborder-radius: 0 3px 3px 0;\r\n\tcursor: pointer;\r\n}\r\n\r\n.right_icon {\r\n\twidth: 32px;\r\n\theight: 25px;\r\n\tfont-size: 12px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#list_danmaku i {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n#danmaku {\r\n\twidth: 32px;\r\n\theight: 21px;\r\n\tbackground: #7b7ff7;\r\n\tborder-radius: 10px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#switch {\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\ttext-align: center;\r\n\tline-height: 18px;\r\n\tbackground: #fff;\r\n\tfont-size: 12px;\r\n\tborder-radius: 50%;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.switch_open {\r\n\tcolor: #7b7ff7;\r\n\tmargin-left: 12px;\r\n\tanimation: open 0.3s;\r\n}\r\n\r\n.switch_close {\r\n\tcolor: #757575;\r\n\tmargin-left: 2px;\r\n\tanimation: close 0.3s;\r\n}\r\n\r\n#full i {\r\n\twidth: 90%;\r\n\theight: 100%;\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.fullsc {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.exitfs {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#troggle {\r\n\tbox-sizing: border-box;\r\n\twidth: 23px;\r\n\theight: 18px;\r\n\tborder-radius: 3px;\r\n\tborder: 2px solid #fff;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n}\r\n\r\n#troggle i {\r\n\tposition: absolute;\r\n\twidth: 70%;\r\n\theight: 70%;\r\n\tborder-radius: 2px;\r\n\tright: -5px;\r\n\tbottom: -5px;\r\n\tbackground: #fff;\r\n\t/* border-bottom-right-radius: 2px; */\r\n}\r\n\r\n#player {\r\n\twidth: 30px;\r\n\theight: 20px;\r\n\tmargin-left: 3px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#play_box {\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\tright: 10px;\r\n\twidth: 60px;\r\n\theight: 50px;\r\n\tcursor: pointer;\r\n\tz-index: 10000;\r\n}\r\n\r\n\r\n\r\n\r\n.button_play {\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.button_pause {\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.icon_pause {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-top: 8px solid transparent;\r\n\tborder-left: 12px solid white;\r\n\tborder-bottom: 8px solid transparent;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.icon_play {\r\n\twidth: 4px;\r\n\theight: 14px;\r\n\tborder-right: 3px solid #fff;\r\n\tborder-left: 3px solid #fff;\r\n}\r\n\r\n\r\n.tip {\r\n\twidth: 100px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n\tposition: absolute;\r\n\tborder-radius: 4px;\r\n\tleft: 5px;\r\n\tbottom: 10px;\r\n\tdisplay: none;\r\n\tz-index: 999;\r\n}\r\n\r\n#wait_loading {\r\n\twidth: 80px;\r\n\theight: 70px;\r\n\tborder-radius: 4px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tfont-size: 15px;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tmargin: auto;\r\n\tdisplay: none;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 999;\r\n\tcursor: default;\r\n}\r\n\r\n#wait_loading div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n#voice {\r\n\twidth: 120px;\r\n\theight: 60px;\r\n\tborder-radius: 4px;\r\n\tline-height: 60px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tfont-size: 18px;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tmargin: auto;\r\n\tdisplay: none;\r\n\tz-index: 999;\r\n\tcursor: default;\r\n}\r\n\r\n#danmakuList {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\twidth: 40%;\r\n\theight: 78%;\r\n\tborder-radius:0 0 0 5px;\r\n\toverflow: hidden;\r\n\tpadding: 0;\r\n\tbackground: #333;\r\n\tcolor: #ffffff;\r\n\tz-index: 9997;\r\n\tanimation: expand 0.3s;\r\n\tdisplay: none;\r\n\tborder-left:1px solid #555 ;\r\n\tborder-bottom:1px solid #555 ;\r\n}\r\n\r\n#danmakuList div {\r\n\tfont-size: 13px;\r\n}\r\n#danmakuList_content{\r\n\twidth: 100%;\r\n\t/* height: 200px; */\r\n\toverflow-y: scroll;\r\n}\r\n#programList_content{\r\n\twidth: 100%;\r\n\toverflow-y: scroll;\r\n}\r\n\t\r\n#headOfList {\r\n\twidth: 100%;\r\n\tbackground: #111;\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n}\r\n\r\n#headOfList :first-child {\r\n\twidth: 70%;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n#headOfList :last-child {\r\n\twidth: 20%;\r\n\tmargin-left: 3%;\r\n}\r\n\r\n#headOfList .label {\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n}\r\n#footOfList {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #111;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\tcursor: pointer;\r\n}\r\n.close{\r\n\tflex:1;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n.foot_item{\r\n\tflex:3;\r\n\tbackground-color: #666;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.foot_item .goto{\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n\tbackground-size: 100% 100%;\r\n}\r\n#danmakuList .item {\r\n\theight: 25px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#danmakuList .contentText {\r\n\twidth: 70%;\r\n\theight: 25px;\r\n\tpadding-left: 10px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n}\r\n\r\n#danmakuList .time {\r\n\twidth: 20%;\r\n\theight: 25px;\r\n\tmargin-left: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.loader-box {\r\n\tmargin-top: -4px;\r\n\tz-index: 999999;\r\n\twidth: 100%;\r\n\theight: 8px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n.loader-box .scroll {\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #b8b8b8;\r\n\tposition: relative;\r\n}\r\n\r\n.loader-box .bar {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n\tbackground-size: 100% 100%;\r\n\tposition: absolute;\r\n\ttop: -4px;\r\n\tleft: 0;\r\n\tcursor: pointer;\r\n\tz-index: 8;\r\n}\r\n.loader-box .buffer{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #fff;\r\n\twidth: 0;\r\n\theight: 2px;\r\n}\r\n.loader-box .mask {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #369;\r\n\twidth: 0;\r\n\theight: 2px;\r\n}\r\n\r\n\r\n\r\n.mfuns_video {\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n}\r\n\r\n.mfuns_canvas {\r\n\tposition: absolute;\r\n\tz-index: 99;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.advanceDanmaku_box{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999;\r\n}\r\n.advanceDanmaku_pre_box{\r\n\tz-index: 1000;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\t\r\n.advanceDanmakuEditor_mask{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 9998;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.8);\r\n\tdisplay: none;\r\n\t\r\n}\r\n.advanceDanmakuEditor{\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\tmargin: 3% auto;\r\n\tbackground: #333;\r\n\tborder-radius: 2px;\r\n\tposition: relative;\r\n\tpadding: 2%;\r\n\tborder:1px solid #555;\r\n\tanimation: down 0.35s;\r\n}\r\n.danmuku_link{\r\n\theight: 30px;\r\n\tmargin:2% 0 0 3%;\r\n}\r\n.danmuku_link a{\r\n\tcolor: #7B7FF7;\r\n}\r\n.exit_edit{\r\n\tposition: absolute;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tline-height: 25px;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\tcolor: #fff;\r\n}\r\n.exit_edit:hover{\r\n\tcolor: red;\r\n}\r\n.editor_title{\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tpadding-left: 3%;\r\n\tfont-weight: 600;\r\n\tcolor: #fff;\r\n}\r\n.danmaku_code{\r\n\twidth: 94%;\r\n\theight: 78%;\r\n\tborder: 1px solid #000;\r\n\tmargin: 0 auto;\r\n}\r\n.editor_footer{\r\n\twidth: 150px;\r\n\theight: 13%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\tbottom: 2%;\r\n\tright:5%;\r\n}\r\n.editor_btn{\r\n\twidth: 27%;\r\n\theight: 60%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n#editor_clear{\r\n  background: #EB2626;\t\r\n}\r\n#editor_preview{\r\n  background: #74D064;\r\n}\r\n#editor_emit{\r\n background: #7B7FF7;\r\n}\r\n@keyframes close {\r\n\tfrom {\r\n\t\tmargin-left: 12px;\r\n\t}\r\n\r\n\tto {\r\n\t\tmargin-left: 2px;\r\n\t}\r\n}\r\n\r\n@keyframes open {\r\n\tfrom {\r\n\t\tmargin-left: 2px;\r\n\t}\r\n\r\n\tto {\r\n\t\tmargin-left: 12px;\r\n\t}\r\n}\r\n\r\n@keyframes expand{\r\n\tfrom {\r\n\t\tright: -40%;\r\n\t}\r\n\r\n\tto {\r\n\t\tright: 0;\r\n\t}\r\n}\r\n@keyframes retract{\r\n\tfrom {\r\n\t\tright: 0;\r\n\t}\r\n\r\n\tto {\r\n\t\tright: -40%;\r\n\t}\r\n}\r\n\r\n@keyframes down{\r\n\tfrom{\r\n\t\tmargin-top: -5%;\r\n\t\topacity: 0;\r\n\t}\r\n\tto{\r\n\t\tmargin-top: 3%;\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes up{\r\n\tfrom{\r\n\t\tmargin-top: 3%;\r\n\t\topacity: 1;\r\n\t}\r\n\tto{\r\n\t\tmargin-top: -5%;\r\n\t\topacity: 0;\r\n\t}\r\n}", "",{"version":3,"sources":["webpack://./src/player/mfunsPlayer/css/index.css"],"names":[],"mappings":"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AAkB;CAClB,MAAM;CACN,OAAO;CACP,YAAY;AACb;AACA;CACC,aAAa;CACb,kBAAkB;CAClB,MAAM;CACN,OAAO;AACR;;AAEA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,aAAa;CACb,WAAW;CACX,YAAY;CACZ,2BAA2B;CAC3B,aAAa;;AAEd;AACA;CACC,UAAU;CACV,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,WAAW;CACX,qBAAqB;CACrB,qBAAqB;AACtB;AACA;CACC,YAAY;CACZ,gBAAgB;AACjB;AACA;CACC,cAAc;AACf;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,MAAM;CACN,QAAQ;CACR,eAAe;CACf,eAAe;CACf,WAAW;AACZ;AACA;CACC,UAAU;AACX;AACA;CACC,WAAW;CACX,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,gBAAgB;CAChB,WAAW;AACZ;AACA;CACC,UAAU;CACV,WAAW;CACX,sBAAsB;CACtB,cAAc;AACf;AACA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,kBAAkB;CAClB,UAAU;CACV,QAAQ;AACT;AACA;CACC,UAAU;CACV,WAAW;CACX,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,WAAW;CACX,kBAAkB;CAClB,eAAe;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;CACC,mBAAmB;AACpB;AACA;CACC;EACC,iBAAiB;CAClB;;CAEA;EACC,gBAAgB;CACjB;AACD;;AAEA;CACC;EACC,gBAAgB;CACjB;;CAEA;EACC,iBAAiB;CAClB;AACD;;AAEA;CACC;EACC,WAAW;CACZ;;CAEA;EACC,QAAQ;CACT;AACD;AACA;CACC;EACC,QAAQ;CACT;;CAEA;EACC,WAAW;CACZ;AACD;;AAEA;CACC;EACC,eAAe;EACf,UAAU;CACX;CACA;EACC,cAAc;EACd,UAAU;CACX;AACD;;AAEA;CACC;EACC,cAAc;EACd,UAAU;CACX;CACA;EACC,eAAe;EACf,UAAU;CACX;AACD","sourcesContent":["#control {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tz-index: 9999;\r\n\twidth: 100%;\r\n\theight:45px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n    \r\n}\r\n\r\n#control_mask {\r\n\twidth: 100%;\r\n\tbackground: rgba(255, 255, 255, 0);\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n}\r\n\r\n\r\n#wrap {\r\n\twidth: 100%;\r\n\theight: 93%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n#currentTime,\r\n#total {\r\n\tfont-size: 13px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n#control span {\r\n\tcolor: #fff;\r\n}\r\n\r\n.control_right {\r\n\twidth: 23%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 2px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n#barrage {\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tdisplay: flex;\r\n\tmargin: auto;\r\n\tpadding: 2px;\r\n\theight: 75%;\r\n\r\n}\r\n\r\n#danmakuEditor {\r\n\twidth: 180px;\r\n\theight: 150px;\r\n\tbackground: #333;\r\n\tposition: absolute;\r\n\tz-index: 99999;\r\n\tborder-radius: 4px;\r\n\tdisplay: none;\r\n}\r\n\r\n#danmaku_type {\r\n\toverflow: hidden;\r\n\twidth: 150px;\r\n\theight: 20px;\r\n\tmargin: 20px auto;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_type div{\r\n\twidth: 50px;\r\n\theight: 20px;\r\n\tline-height: 20px;\r\n\ttext-align: center;\r\n\tfont-size: 13px;\r\n\tborder-right: 1px solid #fff;\r\n\tcolor: #fff;\r\n\toverflow: hidden;\r\n}\r\n\r\n#danmaku_type .focus {\r\n\tcolor: #000;\r\n\tbackground: #f6f6f6;\r\n}\r\n\r\n#danmaku_type :last-child {\r\n\tborder: none;\r\n}\r\n\r\n#danmaku_color {\r\n\twidth: 85%;\r\n\theight: 80px;\r\n\tmargin: 20px auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_color i {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin-right: 8px;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n\tborder: 2px solid #333;\r\n}\r\n\r\n#danmaku_color :nth-child(5n) {\r\n\tmargin-right: 0;\r\n}\r\n\r\n#danmaku_color .focus {\r\n\tborder: 2px solid #f5f5f5;\r\n}\r\n\r\n.input_box {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.input_box input {\r\n\tflex: 6;\r\n\theight: 100%;\r\n\toutline: none;\r\n\tborder: #fff;\r\n\tborder-right: none;\r\n\tbackground-color: #555;\r\n\tborder-radius: 3px 0 0 3px;\r\n\tpadding-left: 40px;\r\n\tcolor: #fff;\r\n}\r\n\r\n#barrage input::-webkit-input-placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n.input_box #danmaku_style {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 10px;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\twidth: 15px;\r\n\theight: 16px;\r\n\tline-height: 16px;\r\n\tmargin-top: -8px;\r\n\tborder-bottom: 1px solid #fff;\r\n\tcursor: pointer;\r\n}\r\n\r\n#danmaku_style:hover {\r\n\tcolor: #7b7ff7;\r\n\tborder-color: #7b7ff7;\r\n}\r\n\r\n#emit {\r\n\tflex: 1;\r\n\twidth: 60px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\theight: 100%;\r\n\tfont-size: 10px;\r\n\tcolor: #fff;\r\n\tbackground: #7b7ff7;\r\n\tborder-radius: 0 3px 3px 0;\r\n\tcursor: pointer;\r\n}\r\n\r\n.right_icon {\r\n\twidth: 32px;\r\n\theight: 25px;\r\n\tfont-size: 12px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#list_danmaku i {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tbackground: url(../icon/list.svg);\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n#danmaku {\r\n\twidth: 32px;\r\n\theight: 21px;\r\n\tbackground: #7b7ff7;\r\n\tborder-radius: 10px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#switch {\r\n\twidth: 18px;\r\n\theight: 18px;\r\n\ttext-align: center;\r\n\tline-height: 18px;\r\n\tbackground: #fff;\r\n\tfont-size: 12px;\r\n\tborder-radius: 50%;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.switch_open {\r\n\tcolor: #7b7ff7;\r\n\tmargin-left: 12px;\r\n\tanimation: open 0.3s;\r\n}\r\n\r\n.switch_close {\r\n\tcolor: #757575;\r\n\tmargin-left: 2px;\r\n\tanimation: close 0.3s;\r\n}\r\n\r\n#full i {\r\n\twidth: 90%;\r\n\theight: 100%;\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.fullsc {\r\n\tbackground-image: url(../icon/fullscreen-fill.svg);\r\n}\r\n\r\n.exitfs {\r\n\tbackground-image: url(../icon/Fullscreen-Exit.svg);\r\n}\r\n\r\n#troggle {\r\n\tbox-sizing: border-box;\r\n\twidth: 23px;\r\n\theight: 18px;\r\n\tborder-radius: 3px;\r\n\tborder: 2px solid #fff;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n}\r\n\r\n#troggle i {\r\n\tposition: absolute;\r\n\twidth: 70%;\r\n\theight: 70%;\r\n\tborder-radius: 2px;\r\n\tright: -5px;\r\n\tbottom: -5px;\r\n\tbackground: #fff;\r\n\t/* border-bottom-right-radius: 2px; */\r\n}\r\n\r\n#player {\r\n\twidth: 30px;\r\n\theight: 20px;\r\n\tmargin-left: 3px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n#play_box {\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\tright: 10px;\r\n\twidth: 60px;\r\n\theight: 50px;\r\n\tcursor: pointer;\r\n\tz-index: 10000;\r\n}\r\n\r\n\r\n\r\n\r\n.button_play {\r\n\tbackground: url(../icon/play.png);\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.button_pause {\r\n\tbackground: url(../icon/pause.png);\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n.icon_pause {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-top: 8px solid transparent;\r\n\tborder-left: 12px solid white;\r\n\tborder-bottom: 8px solid transparent;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.icon_play {\r\n\twidth: 4px;\r\n\theight: 14px;\r\n\tborder-right: 3px solid #fff;\r\n\tborder-left: 3px solid #fff;\r\n}\r\n\r\n\r\n.tip {\r\n\twidth: 100px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tfont-size: 15px;\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n\tposition: absolute;\r\n\tborder-radius: 4px;\r\n\tleft: 5px;\r\n\tbottom: 10px;\r\n\tdisplay: none;\r\n\tz-index: 999;\r\n}\r\n\r\n#wait_loading {\r\n\twidth: 80px;\r\n\theight: 70px;\r\n\tborder-radius: 4px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tfont-size: 15px;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tmargin: auto;\r\n\tdisplay: none;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 999;\r\n\tcursor: default;\r\n}\r\n\r\n#wait_loading div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground: url(../icon/loading.gif);\r\n\tbackground-size: 100% 100%;\r\n}\r\n\r\n#voice {\r\n\twidth: 120px;\r\n\theight: 60px;\r\n\tborder-radius: 4px;\r\n\tline-height: 60px;\r\n\ttext-align: center;\r\n\tfont-weight: 600;\r\n\tfont-size: 18px;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tmargin: auto;\r\n\tdisplay: none;\r\n\tz-index: 999;\r\n\tcursor: default;\r\n}\r\n\r\n#danmakuList {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\twidth: 40%;\r\n\theight: 78%;\r\n\tborder-radius:0 0 0 5px;\r\n\toverflow: hidden;\r\n\tpadding: 0;\r\n\tbackground: #333;\r\n\tcolor: #ffffff;\r\n\tz-index: 9997;\r\n\tanimation: expand 0.3s;\r\n\tdisplay: none;\r\n\tborder-left:1px solid #555 ;\r\n\tborder-bottom:1px solid #555 ;\r\n}\r\n\r\n#danmakuList div {\r\n\tfont-size: 13px;\r\n}\r\n#danmakuList_content{\r\n\twidth: 100%;\r\n\t/* height: 200px; */\r\n\toverflow-y: scroll;\r\n}\r\n#programList_content{\r\n\twidth: 100%;\r\n\toverflow-y: scroll;\r\n}\r\n\t\r\n#headOfList {\r\n\twidth: 100%;\r\n\tbackground: #111;\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n}\r\n\r\n#headOfList :first-child {\r\n\twidth: 70%;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n#headOfList :last-child {\r\n\twidth: 20%;\r\n\tmargin-left: 3%;\r\n}\r\n\r\n#headOfList .label {\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n}\r\n#footOfList {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #111;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tdisplay: flex;\r\n\tcursor: pointer;\r\n}\r\n.close{\r\n\tflex:1;\r\n\tbackground: url(../icon/back.svg);\r\n\tbackground-size: 100% 100%;\r\n}\r\n.foot_item{\r\n\tflex:3;\r\n\tbackground-color: #666;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.foot_item .goto{\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tbackground: url(../icon/right.svg);\r\n\tbackground-size: 100% 100%;\r\n}\r\n#danmakuList .item {\r\n\theight: 25px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#danmakuList .contentText {\r\n\twidth: 70%;\r\n\theight: 25px;\r\n\tpadding-left: 10px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n}\r\n\r\n#danmakuList .time {\r\n\twidth: 20%;\r\n\theight: 25px;\r\n\tmargin-left: 10%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.loader-box {\r\n\tmargin-top: -4px;\r\n\tz-index: 999999;\r\n\twidth: 100%;\r\n\theight: 8px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n.loader-box .scroll {\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: #b8b8b8;\r\n\tposition: relative;\r\n}\r\n\r\n.loader-box .bar {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground: url(../icon/control.png);\r\n\tbackground-size: 100% 100%;\r\n\tposition: absolute;\r\n\ttop: -4px;\r\n\tleft: 0;\r\n\tcursor: pointer;\r\n\tz-index: 8;\r\n}\r\n.loader-box .buffer{\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #fff;\r\n\twidth: 0;\r\n\theight: 2px;\r\n}\r\n.loader-box .mask {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #369;\r\n\twidth: 0;\r\n\theight: 2px;\r\n}\r\n\r\n\r\n\r\n.mfuns_video {\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n}\r\n\r\n.mfuns_canvas {\r\n\tposition: absolute;\r\n\tz-index: 99;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.advanceDanmaku_box{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999;\r\n}\r\n.advanceDanmaku_pre_box{\r\n\tz-index: 1000;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\t\r\n.advanceDanmakuEditor_mask{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 9998;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0,0,0,0.8);\r\n\tdisplay: none;\r\n\t\r\n}\r\n.advanceDanmakuEditor{\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\tmargin: 3% auto;\r\n\tbackground: #333;\r\n\tborder-radius: 2px;\r\n\tposition: relative;\r\n\tpadding: 2%;\r\n\tborder:1px solid #555;\r\n\tanimation: down 0.35s;\r\n}\r\n.danmuku_link{\r\n\theight: 30px;\r\n\tmargin:2% 0 0 3%;\r\n}\r\n.danmuku_link a{\r\n\tcolor: #7B7FF7;\r\n}\r\n.exit_edit{\r\n\tposition: absolute;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tline-height: 25px;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n\tcolor: #fff;\r\n}\r\n.exit_edit:hover{\r\n\tcolor: red;\r\n}\r\n.editor_title{\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tpadding-left: 3%;\r\n\tfont-weight: 600;\r\n\tcolor: #fff;\r\n}\r\n.danmaku_code{\r\n\twidth: 94%;\r\n\theight: 78%;\r\n\tborder: 1px solid #000;\r\n\tmargin: 0 auto;\r\n}\r\n.editor_footer{\r\n\twidth: 150px;\r\n\theight: 13%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\tbottom: 2%;\r\n\tright:5%;\r\n}\r\n.editor_btn{\r\n\twidth: 27%;\r\n\theight: 60%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n#editor_clear{\r\n  background: #EB2626;\t\r\n}\r\n#editor_preview{\r\n  background: #74D064;\r\n}\r\n#editor_emit{\r\n background: #7B7FF7;\r\n}\r\n@keyframes close {\r\n\tfrom {\r\n\t\tmargin-left: 12px;\r\n\t}\r\n\r\n\tto {\r\n\t\tmargin-left: 2px;\r\n\t}\r\n}\r\n\r\n@keyframes open {\r\n\tfrom {\r\n\t\tmargin-left: 2px;\r\n\t}\r\n\r\n\tto {\r\n\t\tmargin-left: 12px;\r\n\t}\r\n}\r\n\r\n@keyframes expand{\r\n\tfrom {\r\n\t\tright: -40%;\r\n\t}\r\n\r\n\tto {\r\n\t\tright: 0;\r\n\t}\r\n}\r\n@keyframes retract{\r\n\tfrom {\r\n\t\tright: 0;\r\n\t}\r\n\r\n\tto {\r\n\t\tright: -40%;\r\n\t}\r\n}\r\n\r\n@keyframes down{\r\n\tfrom{\r\n\t\tmargin-top: -5%;\r\n\t\topacity: 0;\r\n\t}\r\n\tto{\r\n\t\tmargin-top: 3%;\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes up{\r\n\tfrom{\r\n\t\tmargin-top: 3%;\r\n\t\topacity: 1;\r\n\t}\r\n\tto{\r\n\t\tmargin-top: -5%;\r\n\t\topacity: 0;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/player/mfunsPlayer/css/index.css":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/css/index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/player/mfunsPlayer/css/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/player/mfunsPlayer/icon/Fullscreen-Exit.svg":
/*!*********************************************************!*\
  !*** ./src/player/mfunsPlayer/icon/Fullscreen-Exit.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNjQ5MzE5NTk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyNDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjI0IDM1Mkg2NHY2NGgyMjRWMTkySDIyNHYxNjB6TTY0IDczNmgxNjB2MTYwaDY0di0yMjRINjR2NjR6TTgwMCAzNTJWMTkyaC02NHYyMjRoMjI0di02NGgtMTYwek03MzYgODk2aDY0di0xNjBoMTYwdi02NGgtMjI0djIyNHoiIHAtaWQ9IjMyNTAiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/back.svg":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/icon/back.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIzNTA5ODA5NTk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzc3LjIxNiA0NzkuMjMySDE2Ny45MzZjLTkuNTU2OTkyIDAtMTcuNDA4IDMuMDcyLTIzLjU1MiA5LjIxNnMtOS4yMTYgMTMuOTk1MDA4LTkuMjE2IDIzLjU1MiAzLjA3MiAxNy40MDggOS4yMTYgMjMuNTUyIDEzLjk5NTAwOCA5LjIxNiAyMy41NTIgOS4yMTZoNjA5LjI4TDUzNy42IDc4My4zNmMtNi4xNDQgNi44MjcwMDgtOS4yMTYgMTQuNjc2OTkyLTkuMjE2IDIzLjU1MnMzLjI0MzAwOCAxNi41NTUwMDggOS43MjggMjMuMDRjNi40ODQ5OTIgNi40ODQ5OTIgMTQuMTY0OTkyIDkuNzI4IDIzLjA0IDkuNzI4czE2LjcyNDk5Mi0zLjA3MiAyMy41NTItOS4yMTZsMjk0LjkxMi0yOTQuOTEyYzYuMTQ0LTYuODI3MDA4IDkuMjE2LTE0LjY3Njk5MiA5LjIxNi0yMy41NTJzLTMuMDcyLTE2LjcyNDk5Mi05LjIxNi0yMy41NTJMNTg0LjcwNCAxOTMuNTM2Yy02LjgyNzAwOC02LjE0NC0xNC42NzY5OTItOS4yMTYtMjMuNTUyLTkuMjE2cy0xNi41NTUwMDggMy4yNDMwMDgtMjMuMDQgOS43MjhjLTYuNDg0OTkyIDYuNDg0OTkyLTkuNzI4IDE0LjE2NDk5Mi05LjcyOCAyMy4wNHMzLjA3MiAxNi43MjQ5OTIgOS4yMTYgMjMuNTUybDIzOS42MTYgMjM4LjU5MnoiIHAtaWQ9IjM0NTIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/control.png":
/*!*************************************************!*\
  !*** ./src/player/mfunsPlayer/icon/control.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/fullscreen-fill.svg":
/*!*********************************************************!*\
  !*** ./src/player/mfunsPlayer/icon/fullscreen-fill.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNjQ5MjEwMDY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwNzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjgyLjY2NjY2NyAxMjhoMjU2djI1NmgtODUuMzMzMzM0VjIxMy4zMzMzMzNoLTE3MC42NjY2NjZWMTI4ek04NS4zMzMzMzMgMTI4aDI1NnY4NS4zMzMzMzNIMTcwLjY2NjY2N3YxNzAuNjY2NjY3SDg1LjMzMzMzM1YxMjh6IG03NjggNjgyLjY2NjY2N3YtMTcwLjY2NjY2N2g4NS4zMzMzMzR2MjU2aC0yNTZ2LTg1LjMzMzMzM2gxNzAuNjY2NjY2ek0xNzAuNjY2NjY3IDgxMC42NjY2NjdoMTcwLjY2NjY2NnY4NS4zMzMzMzNIODUuMzMzMzMzdi0yNTZoODUuMzMzMzM0djE3MC42NjY2Njd6IiBwLWlkPSIzMDc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/list.svg":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/icon/list.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIzNDAyNDEwNjkzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5MTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTM0Ljk3NiA4NTMuMzEySDg5LjZjLTI2LjU2IDAtNDYuOTEyLTIwLjkyOC00Ni45MTItNDguMjU2IDAtMjcuMzkyIDIwLjM1Mi00OC4zMiA0Ni45MTItNDguMzJoNDUuMzc2YzI2LjYyNCAwIDQ2LjkxMiAyMC45MjggNDYuOTEyIDQ4LjMyIDAgMjcuMzI4LTIwLjI4OCA0OC4yNTYtNDYuOTEyIDQ4LjI1NnpNMTM0Ljk3NiA1NjAuMzJIODkuNkM2My4wNCA1NjAuMzIgNDIuNjg4IDUzOS4zOTIgNDIuNjg4IDUxMnMyMC4zNTItNDguMzIgNDYuOTEyLTQ4LjMyaDQ1LjM3NmMyNi42MjQgMCA0Ni45MTIgMjAuOTI4IDQ2LjkxMiA0OC4zMnMtMjAuMjg4IDQ4LjMyLTQ2LjkxMiA0OC4zMnpNMTM0Ljk3NiAyNjcuMjY0SDg5LjZjLTI2LjU2IDAtNDYuOTEyLTIwLjkyOC00Ni45MTItNDguMzIgMC0yNy4zMjggMjAuMzUyLTQ4LjI1NiA0Ni45MTItNDguMjU2aDQ1LjM3NmMyNi42MjQgMCA0Ni45MTIgMjAuOTI4IDQ2LjkxMiA0OC4yNTYgMCAyNy4zOTItMjAuMjg4IDQ4LjMyLTQ2LjkxMiA0OC4zMnpNMzExLjc0NCA4NTMuMzEyYy0yNi41NiAwLTQ2LjkxMi0yMC45MjgtNDYuOTEyLTQ4LjI1NiAwLTI3LjM5MiAyMC4zNTItNDguMzIgNDYuOTEyLTQ4LjMyaDYyMi43MmMyNi41NiAwIDQ2Ljg0OCAyMC45MjggNDYuODQ4IDQ4LjMyIDAgMjcuMzI4LTIwLjI4OCA0OC4yNTYtNDYuOTEyIDQ4LjI1NkgzMTEuNzQ0YzEuNiAwIDEuNiAwIDAgMHpNMzExLjc0NCA1NjAuMzJjLTI2LjU2IDAtNDYuOTEyLTIwLjkyOC00Ni45MTItNDguMzJzMjAuMzUyLTQ4LjMyIDQ2LjkxMi00OC4zMmg2MjIuNzJjMjYuNTYgMCA0Ni44NDggMjAuOTI4IDQ2Ljg0OCA0OC4zMnMtMjAuMjg4IDQ4LjMyLTQ2LjkxMiA0OC4zMkgzMTEuNzQ0YzEuNiAwIDEuNiAwIDAgMHpNMzExLjc0NCAyNjcuMjY0Yy0yNi41NiAwLTQ2LjkxMi0yMC45MjgtNDYuOTEyLTQ4LjMyIDAtMjcuMzI4IDIwLjM1Mi00OC4yNTYgNDYuOTEyLTQ4LjI1Nmg2MjIuNzJjMjYuNTYgMCA0Ni44NDggMjAuOTI4IDQ2Ljg0OCA0OC4yNTYgMCAyNy4zOTItMjAuMjg4IDQ4LjMyLTQ2LjkxMiA0OC4zMkgzMTEuNzQ0YzEuNiAwIDEuNiAwIDAgMHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjM5MjAiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/loading.gif":
/*!*************************************************!*\
  !*** ./src/player/mfunsPlayer/icon/loading.gif ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/gif;base64,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");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/pause.png":
/*!***********************************************!*\
  !*** ./src/player/mfunsPlayer/icon/pause.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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XJxCSQAAAAAAsLaqqip9+9vfNn75y1+qv79/yrYjTsJPRskGIOT8E0LOMFq7du3hH/7whzfffPPN06kGAAAAAADxZf/+/frqV79qvPbaa1Py/ISc8YdiIKxyc3OrX3755dbjx49vJuAEAAAAACA+bd++Xa+++qr5zDPPmEuWLKEgiLh47OQMnBNyiFMgfL7yla+c/Lu/+7tlGRkZiVQDAAAAAABI76zE/r3vfc/47ne/K0nyeDxTti0W6/AcDLifFu/nGSEnQnbbbbcdevbZZ1eXlpamUw0AAAAAAHAlx44d0xNPPGEcO3ZsyoJOQk7rIuRESH72s5813nvvvXOTklg0HQAAAAAAXNvAwIB+/OMf68tf/rLR1tY26c9PyGld8Rhy+uN8/8Oh/9577z35/e9/f3V+fj7pJgAAAAAAGJeamhp96UtfMn75y1/K5/NNyTZYLPD8WsD9/y8ezykWHsK4/frXv3Y+//zz6wk4AQAAAADARCxZskQ///nPzaefftqcNWsWBUHICDkRtL179x632+3De/fuLaYaAAAAAAAgVB/+8Ie1b98+884776QYCEm8DNc+F3B/IYd9/H7yk580fehDH5pDJQAAAAAAQCR897vf1Ze//GXD6XRO+nNbbOh6bsB9V7ycP3Ry4ppWrlz5VmNj4zABJwAAAAAAiKTHHntMv//9781NmzZRDIwbISeu6lvf+lbdsWPH1syZMyeZagAAAAAAgEi79dZb9Zvf/Mb8/Oc/TzEwLlYerr484H4VhzpoZn5+fsPvfve77PXr12dTDgAAAAAAMBWee+45fe5znzOam5unbBssMIw9bhoc6eTEu9x+++0nT506VUzACQAAAAAAptL73/9+hq8jaIScGPP44483vPTSSzcXFhYmUQ0AAAAAADDVli9frueff9586KGHKAauycrD1Uc4vMHJyMjo+fGPf6y77747i2oAAAAAAIBo9O1vf1v/9E//ZPT390/J88fo0PXXA+5vt/L5QSdnnJs1a5bjtddeSyHgBAAAAAAA0ezv//7v9V//9V9mQUEBxcCfIeSMYxs2bOg4cuRI9po1a6ZRDQAAAAAAEO3e97736X//93/NBQsWUAy8i9WGq58PuD+fw3t1e/fudTz99NO5eXl5FAMAAAAAAMSU2tpaPfLII8bhw4en5PljdOh64Chej9XOCTo549Bn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");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/play.png":
/*!**********************************************!*\
  !*** ./src/player/mfunsPlayer/icon/play.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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ifpRJFHTrLy8fPd3v/vdyHXXXddQW1vrJSIAAAAAALhHLBbTjh07dO+995r77rtP+/btS3sfSKKSRM00kqh/MdNp3yIUaREtLy/ffdttt5mrr756XHl5OfOdAgAAAADgcu+9957uu+8+c//992v37t2KxzPzK/M8TKo+4rSfZRRmBknUvyCJmiaVlZXv/fCHP7SuueaahtLSUg8RAQAAAAAgu7S3t+uBBx7Q3Xffbdra2tL++SRRkW4kUaUipz3stCT1UiNWVFTU9u///u+xL33pS5NKSkqIMwAAAAAAWW7nzp269957zS9/+Uvt37+fOVNT7wan/SWjL71IopJETYvvf//7b33rW99qGjNmjI9oAAAAAACQW7Zv36577rnH/OpXv1JnZ2faP58kKlKNJKrU47RFhCK5xy9jTOe111677Qc/+MGcsWPHFhASAAAAAABy26ZNm3THHXeYRx99VEePHs1YP/IgqTrLaZsZdelBEpUkakqcffbZL/3yl7+cM3v27BJjGGYAAAAAAOSLeDyu1atX64c//KH505/+lJE+kERFsuVzdutZp13KMDh9Ho+nVZLKysq6fve731Vdeuml9UQFAAAAAID81dvbq0ceeUS33nqr2bp1q+LxeNr7kMPJ1JjTBp02wohLLeb/RNLccssth3ft2nUGCVQAAAAAAFBcXKxrr71WK1eutG+66SaFQiGCgqyVj5Won3fa/2LzJ8XAxz72sXX33XffmZMnT2ZKBAAAAAAAcEJr167VzTffbFavXq1oNJqRPuRgZWq7045jhKUWlagYtVAo1Pzggw/uX7Vq1cdIoAIAAAAAgKEsWrRIjz/+uP3Tn/7UrqurIyDIKlYerWuFpEJJayRdLR6qdTqOfupTn1q/YsWKWQsXLqywLIuIAAAAAACAU/L5fDrrrLO0bNkyHTx40LS0tKR1rlTjyKGQhpzFJ+liSc8zylKDSlSMSElJSfNjjz3W+dBDDy2qqqryEREAAAAAADBS06dP129+8xv7V7/6lV1fz6NV4H75VI151GkL2OyjMnDFFVdsuueee+bV1NT4CQcAAAAAAEiGLVu26MYbbzQrVqxgrtTTN8tpmxlZyUUlKk4pGAy+99vf/vbAI488spAEKgAAAAAASKbp06fr4Ycftm+//Xa7vLycgMCV8qES9RGnvZrNPXwej+eQJM2ZM2fH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zbqLDpKow8SXC5AZPT092r59u1atWqU//OEPZv369aP+mWPi50+7d+/WK6+8orKyMnPmmWfq4x//uP1Xf/VXamxspCIPrnXw4EG9/fbbWrlypVm1apWam5sHq01Hqru7W93d3dq+fbtWrlxp6urqtGjRIl1++eX2kiVL1NDQoGAwSNCBFOnu7tbWrVv13HPPmVWrVmnHjh3DvQmScuFwWDt27NCqVatUWFho/H6/PXfuXI4JSdDb26u3335br7zyivbt25d1/X///fe1fv16TZs2TQ0NDZwzJdnAwIA6Ozu1c+dOrV+/Xps2bTLvvPOOWltb9f777w9O1zOS69dEdWppaamqq6vNhAkTNHv2bM2aNcuePn26xo4dOzhtBwB3IPfkbiRRh4k770D62LatI0eOaM+ePVqxYoXuv/9+8+abbyZ9zrCuri49//zzevnll81///d/68tf/rJ96aWXauzYsSoqKuILDBmXmPvs3Xff1dNPP20effRRvfPOO0n9jGg0qra2NrW1ten5558355xzjq655hp7yZIlqqmpGXw4BdWpQHKEw2EdOHBAL774olasWKHW1taMVaAO1cedO3dqxYoVCgaDJhQK2U1NTZwPn+bIHv8AACAASURBVKZ9+/bppZdeMlu3bs3Kn2sODAyotbVVr732mpk1a5ZdXV2tUCjE+VISvocPHz6snTt3asOGDVq3bp3ZsGGDWltb1d3dPerzX9u2B+dM7e7uVltbm9577z29/fbbamxsNPPmzdPZZ59tz549W7W1tYPf98yBDGT+WjiPWPnY4f+VrSt/LDPEt79lWbr++utVV1fHHg2kQXt7ux5++GHdfvvt5te//rVpbW1N6cVGLBZTe3u7Vq9ebTZv3mwikYjq6+tVUlLCxkDG9PX1aevWrXrggQd05513msceeyzllUt9fX3avn27Xn75ZbN9+3ZjWZZqamoUDAa5SAaSIBwOq7OzUy+//LJ+//vfm82bN4+6ojzVYrGYenp6dPToUZWUlKiuro6KtdPQ3d2tdevW6X/+53/M9u3bFQ6Hs3I9EpWQlZWVmjhxokpLS7nJdprfu3v37tXatWv11FNPmWeeecasW7dOra2t6unpSfpTuvv7+wfnWG1tbVV7e7vp7+8ffBgVU/oAmbdx40Y9+eST+XLifVvicJgtHSaJ6jhVEvW6665TfX09ezSQQpFIRNu2bdOdd95pfvKTn5jm5uaknzwOJRqNaseOHVq7dq3p6ekxkyZNUmlpKZU3SCvbttXT06PXXntNd955p3nggQfMjh070la1lKgE37p1q958801j27YaGhpUXFzMhRWQhATGpk2b9Lvf/c688sor6uzsdHV/E4nUSCRi6urqNGbMGBUWFnJTZRRxbG9v19NPP21efPHFUU9L5JZ1icViKioqMo2Njaqrq+MhnaOIYeK7dufOnVq9erWeeOIJ88ILL2jbtm3q6OhI6fmvbdsaGBjQ4cOHtX//fu3du9ccOXLEWJalkpISBQIBxWIxzn+BDNmwYUM+JVFvdVqSqNmGJCqQWT09PXr11Vf1gx/8wDz44IM6cuRIxvrS19enN954Qzt27DD19fWqqqoa/IkTkGp79+7VM888o9tvv92sWLEiY/MkWpaljo4Obdy40XR0dJja2lqVl5fL5/OxkYBR2rVrl5588knzzDPPaN++fa7/yZ4xRgMDAzp69KiCwaCZOHGiysvL+bnvCA0MDOitt97S73//e9PS0jL4NPVsFY/HZVmW6urqmE9+FBI3S7ds2aJVq1bpqaeeMq+//rr27duX9KmrhuLxeDQwMKBDhw5p79696urqMl6vV2VlZSopKSGJCmTI66+/rqeffpokqksl48h4sySjHE6ixmIxffOb3+Tn/ECK9PT06LnnntOPfvQjs2rVqhFNmp/KC4StW7dq+/btprq6Wg0NDSRSkVKxWExtbW169NFH9bOf/cy88cYbGU2wxONxxeNxHTlyRNu2bdPBgwdNbW2tampqSKQCI5R4uvmrr76qRx55xLS0tGTFz7lt2x6sWotEIho7dqzGjx+v4uJiNuoIdHV16c9//rNWrlxpDhw44IrznGSMi9LSUjN9+nRVVVWRcBvm97xt2+ru7lZzc7Oee+45Pfvss2bz5s0prz4dajtGo1F1dHTo/fffV0dHh/F6vaqoqFBxcTHbFciAtWvX6g9/+EO+JFH/TVJc0kC2dJjbyMPg9/v5AgFSpLu7WytWrND3v/99k+wH5iTDyy+/rI6ODiPJvvTSS5knFSmze/duPfLII/rpT39qdu3a5boEwJNPPqnu7m5z44032osXL+ZJ3cAIRKNR7d27V6+++qrZtm2b6x4kdSrhcFjvvfeeXnnlFTN79my7tLRUBQUFbNhh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b5xxxhlZT09P4cbW09MTZ5xxRtbb2+tEM/YbbldXzJs3L0488cQoYv/cAw44IE488cSYPn26kw0AAE0o2bMFuiJneUlJ1Abp7wZ790Zw+umnx1FHHVW4sR111FFx+umne5AODb2P7LvvvnHKKadkhxxySKHGNnPmzDj++OPjhBNOcKIBAKBJRX4gcxFIojYaKD1RYa/MmzcvXvva1xbqC4kkSeK1r31tYXtc0nq9vb2xaNGiePnLX16oce2zzz5x0kknZXPnznWSAQCARlTqW27IDAKTYtasWfHmN785mz9/fmHGNH/+/Hjzm9+czZo1ywmmYQsXLoyzzjor22+//QoxnlqtFkcccUSceeaZoa0FAAA0L8syQehgkqgN0hMV9t5xxx0XS5YsKcx4lixZEscdd5wTy4TMmjUrfud3fide97rXFaIy+8ADD4zzzjsvW7x4sdY3AACwF0qWRM3qW25IogKTZvbs2XH++ednixYtyv1YFi1aFOeff342e/ZsJ5YJqVQqccghh8TrX//63Fdm9/T0xLHHHhtnnHFGqMgGAACKTBJ1AoteYO+voxNOOCGWLl2a6wcxVavVWLp0aZxwwgleG5iw0QdMvfrVr443vOENuR7HggUL4i1veUt2+OGHO7EAALCXhoaGSjXc+pYbkqgNkiiB1thnn33i/PPPz1796lfndgyvfvWr4/zzz8/22WcfJ5SmHXroofHGN74xO/7443N5/HPmzIkzzzwzzjjjjJg5c6YTCgAAe0nuqbO1Ioma1LfCStM0RkZGzBZokWOPPTY+8IEPZIcddljujv2www6LD3zgA9mxxx7rRLJXent747TTTou3ve1t2YIFC3J37CeddFK8/e1vz4444gi9UAEAoAU8j6ezqURtQK1Wk0SFFuru7o6zzz473vOe92QzZszIzXHPmDEj3vOe92Rnn312dHd3O5HstXnz5sX5558fF1xwQfT09OTimCuVSixatCiWLl2anXzyyU4iAAC0SJ7b3pVBK5KouXuaVlODLNcT0qDt5syZE0uWLInLLrssF8mjnp6euOyyy2LJkiUxZ84cJ5CWfECqVqtxyCGHxNKlS7OLL744arVa535g6OqKrq6uWLRoUfzJn/xJdvbZZ8f06dOdSAAAoBmV+pYbKlEnsHgEWmvhwoVx6aWXZhdffHFHJ1J7enri4osvjksvvTRbuHChE0dLTZ8+PY4//vhYunRpdtZZZ3X0sS5YsCDe+ta3xgUXXBDz5s1z8gAAoIVUonb4+RGCxkiiQnuuq8MPPzz+5//8n1m1Wk2+8Y1vxJYtWzrqGGfOnBkXX3xx/I//8T88gZy2mT59epx88snxp3/6p1m1Wk1uueWWGBgY6IhjG21uf/DBB8c73vGOeMc73pEtWLBAH1QAAGixoaGhMg03d4k2SVQTGabc0UcfHX/xF3+RHXzwwfHZz3426ZRE6syZM+PDH/5wtnTp0vit3/otJ4q2z7fTTjst5syZk82bNy/5+te/Htu3b++IYzviiCPigx/8YHb++efH/PnznSwAAGgDhQqdTRK1QXqiQvtUKpVYvHhxvOtd74oDDjgg+8IXvpA88MADU3pMxx13XLz3ve/NLrjggjjooIOcJCblA9OsWbPixBNPjA9+8IPZ/Pnzk3/7t3+LJ554YsqOacaMGfGa17wm/tt/+2/Z6173uth///19sAMAgDYpWe4pd09wl0RtkNv5of0WLFgQS5cujUMOOST7yle+ktx8882Tfnv/zJkz45xzzolLLrkkO/PMM2PmzJlODJOqp6cnjjzyyHjve9+bHXroofH1r389+dnPfjbpVamHHHJI/N7v/V4sWbIke8UrXhG9vb1ODgAAUFp5SqI2WvrSlrS9JCpMwkVer8R7wxveEIceemj2ute9Lr785S8n999/fwwODrb1b0+bNi1OOOGEuPTSS7MzzjgjjjjiiI5+UjrF1tPTEwcffHBceOGFcfTRR2c333xzct1118Xjjz/e1vYySZLE3Llz47TTToslS5Zkp556aixevNgJAQCASdDOStQOrHIdztv5UYnagDRNBQEmUa1WiyOOOCIOPvjgePWrX53dfvvtcc011yS/+MUvWl6N19vbG8cff3z80R/9Ufaa17wmFi1aFL29vRKodIS5c+fGySefHIcffnj2+te/Pm699dbkP/7jP+Lxxx9v+YOnDjjggDj11FPjD/7gD7KTTjopFi5cGDNmzHASAABgkoyMjAhCB2tFErVVzdHa/XsyExnyo1arRa1Wi5e//OVx2GGHxWtf+9ps2bJl8dOf/jRZtmxZPP/8800nVHt7e2P//feP008/PU477bTs9NNPj9/6rd+KWbNmCTwdZ9q0aXHggQfGPvvsE8ccc0x27rnnxui1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ICpRW2DFihVlawoMAAAAwATcd9990d/fLxA51c4k6rX1rfA2b94cd999t9kEAAAAwG4tW7asTO0gh+vbYH3LPZWoLfL9738/0dMCAAAAgJd64YUX4tZbbxWIHGtnEvXr9a2jteppY8uWLVOSDQAAAMBveOyxx+Kpp54q05BX17fCUInaIuvWrYuHHnpIIAAAAAD4NT/84Q8jTVOByLF2JlHvrW+lMDg4GLfddpsZBQAAAMCL0jSN7373u2VrA/nF+lYYKlFbJMuyuOmmm5KBgQHBAAAAACAiIlatWhUPPvigQORcO5OoaX0bfRpX4T344IPx5JNPmlUAAAAARETE3XffHRs3bizbsK+tb4WhErWFtmzZEnfeeadAAAAAABARET/84Q8TUci/yUiiPlTfSuE73/lOMjIyYmYBAAAAlFx/f3/cfPPNuTvurK6Zf1rfflXfCkMlaovdfvvtsX79eoEAAAAAKLk777wznn32WYEogMlIon6qvnWkvcis71ZfX1/85Cc/MbMAAAAASu6mm25KhoaGyjTk7fWtcFSittjIyEh85zvf0esCAAAAoMQ2bdoU3/3ud6OFtXtMoeok/I2byhTQLMvilltuiaeffjoOOuggMwwAAACghO66665YuXJl2Yb95aIOTCVqG6xfvz5+9KMfCQQAAABASd1www3uVC6QyTyZaX1f7chAJElLY3HOOefEDTfckFWrVbMMAAAAoESeeeaZeNWrXpWsXbs2l8e/F88P+u36vnAluCpR2+TOO++MJ598UiAAAAAASubOO++MZ599ViAKZDKTqMvqWyls3rw5brzxRjMMAAAAoGS++tWvJsPDw2UaclbfVkYBq1AjVKK2b+ZkWXzta19LtmzZIhgAAAAAJfHoo4/GD37wA4EomMlMon6svpXGAw88EPfee69ZBgAAAFAS3/72t2Pz5s25PPasrol/+lR9KyyVqG2Upml885vfTJrvxQsAAABAXmzevDn+9V//NRGJ4pmKkzo8hX97/IAkSUuPa99994177703O+SQQ8w2AAAAgAL7/ve/H7/3e7+XDA4O5vL4s+YrAZfW99cU9dyqRG2zvr6+uP766wUCAAAAoMDSNI0vfvGLuU2gMrapqAZ9tr4/oCMD0uJK1IiIY489NpYtW5bNnTvXjAMAAAAooPvvvz9OP/30XD9kfC8qUXvr+4Gi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");

/***/ }),

/***/ "./src/player/mfunsPlayer/icon/right.svg":
/*!***********************************************!*\
  !*** ./src/player/mfunsPlayer/icon/right.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIzNTA5MDA4NjA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzAwLjk5MiA4OTZxMTUuMDA4IDAgMjcuMDA4LTEwLjAxNkw3NTIgNTQ0Ljk5MnExNi0xMi45OTIgMTYtMzQuMDE2dC0xNi0zNC4wMTZMMzI5Ljk4NCAxMzcuOTUycS0xNC4wMTYtMTEuMDA4LTMyLTguOTkydC0yOS41MDQgMTYtOS41MDQgMzIgMTYgMjguOTkybDM4MCAzMDQuOTkyTDI3Mi45NiA4MTcuOTUycS0xNC4wMTYgMTEuMDA4LTE2IDI4Ljk5MnQ4Ljk5MiAzMnExNC4wMTYgMTYuOTkyIDM1LjAwOCAxNi45OTJ6IiBwLWlkPSIzMjg1IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+");

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
/*!********************************************!*\
  !*** ./src/player/mfunsPlayer/js/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.js */ "./src/player/mfunsPlayer/js/control.js");
/* harmony import */ var _MSE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSE.js */ "./src/player/mfunsPlayer/js/MSE.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/player/mfunsPlayer/css/index.css");




class mfunsPlayer {
  constructor(el, url, callback) {
    (0,_MSE_js__WEBPACK_IMPORTED_MODULE_1__.addFlv)().then(function () {
      (0,_control_js__WEBPACK_IMPORTED_MODULE_0__.init)(el, url, callback);
      el.style.background = "#000";
      el.style.position = 'relative';
      el.style.display = 'flex';
      el.style.minWidth = "500px";
      el.style.justifyContent = 'center';
      el.style.overflow = 'hidden';
    }).catch(function (err) {
      console.error(err);
    });
  }

}

if (globalThis) {
  globalThis.mfunsPlayer = mfunsPlayer;
  console.log(`${'\n'} %c mfunsPlayer v1.0.0 %c https://github.com/Mfuns-cn ${'\n'}${'\n'}`, 'color: #fff; background: #7b7ff7; padding:5px 0;', 'background: #f5f5f5; padding:5px 0;');
}
})();

/******/ })()
;
//# sourceMappingURL=mfunsPlayer.js.map