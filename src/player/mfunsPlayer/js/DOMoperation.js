import { createBarrageList } from "./createBarrageList.js";
import { formateTime } from "./util/formateTime.js";
import { debounce } from "./util/debounce.js";
import { thro } from "./util/thro.js";
import { openEditor, closeEditor } from "./danmakuEditor.js";
export function operate(
  canvasStage,
  advanceDanmakuStage,
  tem,
  BarrageData,
  callback
) {
  let trueLengthRate =
    (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
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
  var danmakuColor = "#ffffff";
  var danmakuType = "normal";
  var videoCanPlay = false;
  var isShowList = false;
  var isInput = false;
  var listCreated = false;
  var isEdit = false;
  var isControl = true;
  var isFireFox = navigator.userAgent.indexOf("Firefox") > -1;
  //自适应及兼容
  if (isFireFox) {
    tem.troggle.style.display = "none";
  }
  if (tem.content.clientWidth < 550) {
    tem.control.style.display = "none";
  }
  // 进度条加载
  function loadBuff() {
    for (let i = 0; i < tem.video.buffered.length; i++) {
      buffer = tem.video.buffered.end(i) + tem.video.duration * 0.025;
      if (buffer >= tem.video.duration) {
        buffer = tem.video.duration * 1.025;
      }

      bufferleft =
        tem.scroll.clientWidth * (buffer / tem.video.duration) * trueLengthRate;
      buff(bufferleft);
    }
  }
  tem.video.addEventListener("loadstart", function (e) {
    tem.tip.style.display = "block";
    console.log("开始加载视频");
    tem.tip.innerHTML = "开始加载视频....";
  });

  tem.video.addEventListener("loadedmetadata", function (e) {
    console.log("视频的元数据已加载");
    tem.tip.innerHTML = "正在获取视频信息....";
  });

  //loadeddata：视频下载监听。当当前帧的数据已加载，但没有足够的数据来播放指定音频/视频的下一帧时触发
  tem.video.addEventListener("loadeddata", function (e) {
    console.log("提示当前帧的数据是可用的");
  });

  //播放视频时加载弹幕
  tem.video.addEventListener("timeupdate", function () {
    advanceDanmakuStage.listenerEvent("DANMAKU_STAGE_RESET", () => {});
    tem.control_mask.style.backgroundImage = "none";

    if (advancePreview) {
      advancePreview.skip(parseInt(tem.video.currentTime * 1000));
    }

    let ct = parseInt(tem.video.currentTime);
    tem.currentTime.innerText = formateTime(ct) + " /";
    if (isFullScreen()) {
      trueLengthRate =
        (tem.scroll.clientWidth - tem.bar.clientWidth * 1.1) /
        tem.scroll.clientWidth;
    } else {
      trueLengthRate =
        (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
    }
    barleft =
      tem.scroll.clientWidth *
      (tem.video.currentTime / tem.video.duration) *
      trueLengthRate;
    load(barleft);
    tem.wait_loading.style.display = "none";
    //加载缓冲条
    loadBuff();
  });

  tem.video.addEventListener("play", function () {
    videoCanPlay = true;
    canvasStage.isPaused = false;
    tem.player.className = "icon_play";
    tem.play_box.className = "button_play";
    tem.wait_loading.style.display = "none";
    playTimer = setTimeout(() => {
      if (!tem.video.paused) {
        tem.play_box.style.display = "none";
      }
    }, 1000);
    canvasStage.render();

    advanceDanmakuStage.start();
    advanceDanmakuStage.skip(parseInt(tem.video.currentTime * 1000));
    if (advancePreview) {
      advancePreview.start();
      advancePreview.skip(parseInt(tem.video.currentTime * 1000));
    }
  });

  //暂停视频时停止加载弹幕
  tem.video.addEventListener("pause", function () {
    canvasStage.isPaused = true;
    advanceDanmakuStage.pause();
    if (advancePreview) {
      advancePreview.pause();
    }

    tem.play_box.style.display = "flex";
    tem.player.className = "icon_pause";
    tem.play_box.className = "button_pause";
  });

  //弹幕设置
  tem.danmaku_style.addEventListener("mouseenter", function () {
    tem.danmakuEditor.style.display = "block";
    tem.danmakuEditor.style.bottom = tem.control.clientHeight + 10 + "px";
    isEdit = true;
    editTimer = null;
    if (isFullScreen()) {
      tem.danmakuEditor.style.left = "25%";
    } else {
      tem.danmakuEditor.style.left = "16%";
    }
  });
  tem.danmaku_style.addEventListener("mouseleave", function () {
    isEdit = false;
    editTimer = setTimeout(() => {
      if (!isEdit) tem.danmakuEditor.style.display = "none";
    }, 300);
  });
  tem.danmakuEditor.addEventListener("mouseenter", function () {
    isEdit = true;
    isControl = true;
    tem.danmakuEditor.style.display = "block";
  });
  tem.danmakuEditor.addEventListener("mouseleave", function () {
    isEdit = false;
    isControl = false;
    setTimeout(() => {
      if (!isEdit) tem.danmakuEditor.style.display = "none";
    }, 300);
  });
  //选择弹幕类型
  tem.danmaku_type.addEventListener(
    "click",
    function (event) {
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
    },
    false
  );

  //选择弹幕颜色
  const colorArr = [
    "#FE0302",
    "#FFFF00",
    "#00CD00",
    "#00FF00",
    "#4e6ef2",
    "#89D5FF",
    "#7b7ff7",
    "#757575",
    "#ffffff",
    "#fb7299",
  ];
  for (let i = 0; i < colorArr.length; i++) {
    let item = document.createElement("i");
    item.setAttribute("id", `color${i}`);
    item.style.background = colorArr[i];
    tem.danmaku_color.appendChild(item);
  }
  tem.danmaku_color.addEventListener(
    "click",
    function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      const colorIndex = Number(target.id[5]);
      if (
        typeof colorIndex === "number" &&
        tem.danmaku_color.children[colorIndex].className == "focus"
      ) {
        tem.danmaku_color.children[colorIndex].className = "";
        danmakuColor = "#fff";
        return;
      } else if (typeof colorIndex === "number" && colorIndex >= 0) {
        danmakuColor = colorArr[colorIndex];
      }

      for (let i = 0; i < tem.danmaku_color.children.length; i++) {
        if (target.id === tem.danmaku_color.children[i].id) {
          tem.danmaku_color.children[i].className = "focus";
        } else {
          tem.danmaku_color.children[i].className = "";
        }
      }
    },
    false
  );
  //解决文本框输入空格时与空格键监听的冲突
  tem.text.onfocus = function () {
    isInput = true;
  };
  tem.text.onblur = function () {
    isInput = false;
  };
  //发送弹幕
  function tip(msg) {
    tem.tip.style.display = "block";
    tem.tip.innerHTML = msg;
    setTimeout(() => {
      tem.tip.style.display = "none";
    }, 1500);
  }
  tem.emit.addEventListener("click", function () {
    let value = tem.text.value; //文本内容
    let time = tem.video.currentTime;
    let color = danmakuColor;
    let type = danmakuType;
    let danmakuObj = {
      time,
      type,
      color,
      value,
      toEmit: true,
    };
    if (value.trim()) {
      if (callback.checkLogin) callback.checkLogin();
      else
        console.warn(
          "出于安全考虑，请尽快向播放器实例对象提供检测用户登录的回调函数"
        );

      canvasStage.add(danmakuObj);
      canvasStage.getNormal();
      canvasStage.getTop();
      canvasStage.getBottom();
      canvasStage.init();

      let type;
      switch (danmakuType) {
        case "normal":
          type = 0;
          break;
        case "top":
          type = 1;
          break;
        case "bottom":
          type = 2;
          break;
      }

      color = parseInt(danmakuColor.slice(1), 16);
      //扁平化处理
      danmakuObj = [time, type, color, "0", value];
      const emit = callback.emitDanmaku;
      if (emit) {
        emit(danmakuObj, type)
          .then((res) => {
            tip("弹幕发送成功！");
          })
          .catch((err) => {
            tip("弹幕发送失败！" + err.message);
          });
      } else console.error("未提供发送弹幕的回调函数，弹幕发送失败");
      tem.text.value = ""; //清空输入框，减少弹幕刷屏
    }
  });

  //拖动进度条恢复弹幕
  tem.video.addEventListener("seeking", function () {
    tem.canvas.style.opacity = 0;
    tem.advance.style.opacity = 0;
    tem.wait_loading.style.display = "flex";
    advanceDanmakuStage.listenerEvent("DANMAKU_STAGE_RESET", () => {});
    advanceDanmakuStage.pause();
  });
  tem.video.addEventListener("seeked", function () {
    if (!canvasStage.isclear) {
      tem.canvas.style.opacity = 1;
      tem.advance.style.opacity = 1;
    }
    advanceDanmakuStage.start();
    tem.wait_loading.style.display = "none";
    advanceDanmakuStage.skip(tem.video.currentTime * 1000);
    canvasStage.reset();
  });
  tem.video.addEventListener("waiting", function () {
    tem.wait_loading.style.display = "flex";
    advanceDanmakuStage.pause();
    advanceDanmakuStage.listenerEvent("DANMAKU_STAGE_RESET", () => {});
  });

  //展开/收起弹幕列表
  let page = 0;

  let closeList = debounce(300, function () {
    tem.danmakuList.style.display = isShowList ? "block" : "none";
  });
  tem.closeList.onclick = function () {
    isShowList = false;
    tem.danmakuList.style.animation = "retract 0.3s";

    closeList();
  };
  tem.list_btn.onclick = function () {
    isShowList = !isShowList;
    if (!listCreated) {
      tem.danmakuListContent.style.height =
        tem.content.clientHeight * 0.78 - 60 + "px";
      tem.danmakuList.children[0].children[0].innerHTML = `弹幕内容 (${BarrageData.length})`;
      createBarrageList(BarrageData, tem.danmakuListContent, page);
      listCreated = true;
    }

    tem.danmakuList.style.animation = isShowList
      ? "expand 0.3s"
      : "retract 0.3s";
    if (isShowList) {
      tem.danmakuList.style.display = "block";
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
      createBarrageList(BarrageData, tem.danmakuListContent, page);
    }
    if (!isScroll) {
      isScroll = true;
    }
  }
  let throScroll = thro(handleScroll, 200);
  let getScroll = function () {
    throScroll();
  };
  tem.danmakuListContent.addEventListener("scroll", getScroll);

  //进入全屏
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
  }

  // 判断页面是否进入全屏
  function isFullScreen() {
    return (
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitFullscreenElement ||
      document.msFullScreenElement
    );
  }

  function resetLoad() {
    if (isFullScreen()) {
      trueLengthRate =
        (tem.scroll.clientWidth - tem.bar.clientWidth * 1.1) /
        tem.scroll.clientWidth;
    } else {
      trueLengthRate =
        (tem.scroll.clientWidth - tem.bar.clientWidth) / tem.scroll.clientWidth;
    }
    barleft =
      ((tem.scroll.clientWidth * tem.video.currentTime) / tem.video.duration) *
      trueLengthRate;
    load(barleft);
  }
  function resizeCallback() {
    tem.canvas.width = tem.content.clientWidth;
    tem.canvas.height = tem.content.clientHeight;
    tem.barrage.style.display = "block";
    tem.advance.style.width = tem.content.clientWidth + "px";
    tem.advance.style.height = tem.content.clientHeight + "px";
    tem.advancePre.style.width = tem.content.clientWidth + "px";
    tem.advancePre.style.height = tem.content.clientHeight + "px";
    tem.ade_mask.style.height = tem.video.clientHeight + "px";
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
      tem.content.style.alignItems = "center";
    } else {
      tem.content.style.alignItems = "";
    }
    if (BarrageData.length < 40) {
      tem.danmakuList.style.height = "50%";
      tem.danmakuListContent.style.height =
        tem.content.clientHeight * 0.5 - 60 + "px";
    } else {
      tem.danmakuListContent.style.height =
        tem.content.clientHeight * 0.78 - 60 + "px";
    }
    tem.control_mask.style.width = tem.content.clientWidth + "px";
    tem.control_mask.style.height =
      tem.content.clientHeight - tem.control.clientHeight + "px";
  }
  let debounceFunc = debounce(1000, hideControl);
  function hideControl() {
    if (isFullScreen() && !isControl) {
      tem.control.style.opacity = 0;
      tem.load.style.opacity = 0;
      tem.text.blur();
    }
  }
  tem.control.addEventListener("mouseleave", function () {
    isControl = false;
  });

  tem.control.addEventListener("mouseenter", function () {
    isControl = true;
  });
  tem.load.addEventListener("mouseenter", function () {
    isControl = true;
  });
  tem.control_mask.addEventListener("mousemove", function () {
    tem.control.style.opacity = 1;
    tem.load.style.opacity = 1;
    debounceFunc();
  });
  tem.full.addEventListener("click", function () {
    if (isFullScreen()) {
      exit();
    } else {
      setTimeout(() => {
        tem.content.style.display = "flex";
        canvasStage.reset();
        canvasStage.init();

        tem.danmakuList.style.width = "20%";
        tem.control.style.background = "rgba(0, 0, 0, 0.5)";
        tem.text.style.background = "rgba(85, 85, 85, 0.5)";
        tem.text.style.flex = 10;
        tem.barrage.style.width = "40%";
        tem.ade_code.style.height = "90%";
        tem.ade_footer.style.height = "5%";
        tem.control_right.style.width = "15%";
        tem.fs_icon.className = "exitfs";
        resetLoad();
        loadBuff();
        if (editor) {
          editor.resize();
        }
      }, 200);
      fullsc(tem.content);
      window.addEventListener("resize", resizeCallback);
    }
  });
  //退出全屏
  function exitFullscreen() {
    var exitMethod =
      document.exitFullscreen || //W3C
      document.mozCancelFullScreen || //Chrome等
      document.webkitExitFullscreen || //FireFox
      document.msFullscreen; //IE11
    if (exitMethod) {
      exitMethod.call(document);
    }
  }
  document.addEventListener("fullscreenchange", exitHandler); //退出全屏后执行
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  function exitHandler() {
    setTimeout(() => {
      if (!isFullScreen()) {
        exit();
      }
    }, 100);
  }

  function exit() {
    exitFullscreen();
    window.removeEventListener("resize", resizeCallback);
    canvasStage.reset();
    canvasStage.init();

    resetLoad();
    loadBuff();
    tem.content.style.alignItems = "";
    tem.fs_icon.className = "fullsc";
    tem.control.style.opacity = 1;
    tem.load.style.opacity = 1;
    tem.canvas.width = tem.content.clientWidth;
    tem.canvas.height = tem.video.clientHeight;
    tem.advance.style.width = tem.content.clientWidth + "px";
    tem.advance.style.height = tem.content.clientHeight + "px";
    tem.advancePre.style.width = tem.content.clientWidth + "px";
    tem.advancePre.style.height = tem.content.clientHeight + "px";
    tem.ade_mask.style.height = tem.video.clientHeight + "px";
    advanceDanmakuStage.resize();
    if (advancePreview) {
      advancePreview.resize();
    }

    tem.control.style.bottom = 0;
    tem.control.style.background = "#333";
    tem.text.style.background = "#555";
    tem.text.style.flex = 6;
    tem.control_right.style.width = "23%";
    tem.barrage.style.width = "50%";
    tem.danmakuList.style.width = "40%";
    tem.danmakuList.style.height = "78%";
    tem.ade_code.style.height = "78%";
    tem.ade_footer.style.height = "13%";
    tem.danmakuListContent.style.height =
      tem.content.clientHeight * 0.78 - 60 + "px";
    tem.control_mask.style.width = tem.content.clientWidth + "px";
    tem.control_mask.style.height =
      tem.content.clientHeight - tem.control.clientHeight + "px";

    if (editor) {
      editor.resize();
    }
  }

  //关闭/开启弹幕
  tem.danmaku.addEventListener("click", function () {
    canvasStage.isclear = !canvasStage.isclear;
    if (canvasStage.isclear) {
      tem.switch_btn.className = "switch_close";
      tem.danmaku.style.background = "#757575";
      tem.canvas.style.opacity = 0;
      tem.advance.style.opacity = 0;
    } else {
      tem.switch_btn.className = "switch_open";
      tem.danmaku.style.background = "#00A1D6";
      tem.canvas.style.opacity = 1;
      tem.advance.style.opacity = 1;
      canvasStage.reset();
    }
  });
  //音量控制
  function increaseVoice() {
    if (tem.video.volume >= 0.95) {
      tem.video.volume = 1;
    } else {
      tem.video.volume += 0.05;
    }
    tem.voice.innerHTML = "音量：" + parseInt(tem.video.volume * 100) + "%";
  }
  function decreaseVoice() {
    if (tem.video.volume <= 0.05) {
      tem.video.volume = 0;
      tem.voice.innerHTML = "静音";
    } else {
      tem.video.volume -= 0.05;
      tem.voice.innerHTML = "音量：" + parseInt(tem.video.volume * 100) + "%";
    }
  }
  function hideVoice() {
    tem.voice.style.display = "none";
  }
  function controlVoice(e) {
    e = e || event;
    e.preventDefault();
    tem.voice.style.display = "block";
    voiceDebounceFunc();
    if (e.wheelDelta > 0 || e.detail < 0) {
      handleIncrease();
    } else {
      handleDecrease();
    }
  }

  let handleIncrease = thro(increaseVoice, 100);
  let handleDecrease = thro(decreaseVoice, 100);
  let voiceDebounceFunc = debounce(1000, hideVoice);

  tem.control_mask.addEventListener("mouseenter", function () {
    tem.control_mask.addEventListener("mousewheel", controlVoice);
    tem.control_mask.addEventListener("DOMMouseScroll", controlVoice);
  });
  tem.control_mask.addEventListener("mouseleave", function () {
    tem.control_mask.removeEventListener("mousewheel", controlVoice);
    tem.control_mask.removeEventListener("DOMMouseScroll", controlVoice);
  });

  //播放、暂停视频
  tem.player_box.addEventListener("click", handleClick);
  tem.control_mask.addEventListener("click", handleClick);

  function handleClick() {
    if (playTimer) {
      clearTimeout(playTimer);
    }
    tem.play_box.style.display = "flex";
    if (tem.video.paused) {
      tem.video.play();
    } else {
      tem.video.pause();
    }
  }

  //快进快退及其他键盘事件

  function add5() {
    if (isMinus) {
      isMinus = false;
      durationOffset = 0;
    }
    tem.tip.style.display = "block";
    durationOffset += 5;
    tem.tip.innerHTML = `快进${durationOffset}秒`;
  }

  function minus5() {
    if (isAdd) {
      isAdd = false;
      durationOffset = 0;
    }
    tem.tip.style.display = "block";
    durationOffset += 5;
    tem.tip.innerHTML = `快退${durationOffset}秒`;
  }
  function hideTip() {
    tem.tip.style.display = "none";
    durationOffset = 0;
  }
  let debounceOnkeydownFunc = debounce(2000, hideTip);

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
      tem.voice.style.display = "block";
      voiceDebounceFunc();
      handleIncrease();
    }
    if (e && e.keyCode == 40 && tem.video.currentTime >= 0) {
      // bottom键
      tem.voice.style.display = "block";
      voiceDebounceFunc();
      handleDecrease();
    }
    if (e && e.keyCode == 32 && !isInput) {
      // space键
      handleClick();
    }
  };

  //画中画
  tem.troggle.addEventListener("click", function () {
    if (!document.pictureInPictureElement) {
      //开启
      tem.video.requestPictureInPicture().catch((error) => {
        console.log(error, "Video failed to enter Picture-in-Picture mode.");
      });
    } else {
      //关闭

      document.exitPictureInPicture().catch((error) => {
        console.log(error, "Video failed to leave Picture-in-Picture mode.");
      });
      tem.play_box.style.display = "flex";
      tem.player.className = "icon_pause";
      tem.play_box.className = "button_pause";
      tem.video.pause();
    }
  });
  tem.video.addEventListener("leavepictureinpicture", function (e) {
    tem.play_box.style.display = "flex";
    tem.play_btn.className = "button_pause";
    tem.player.className = "icon_pause";
  });

  function load(val) {
    tem.mask.style.width = val + "px";
    tem.bar.style.left = val + "px";
    let ct = parseInt(tem.video.currentTime);
    tem.currentTime.innerText = formateTime(ct) + " /";
  }
  function buff(val) {
    tem.buffer.style.width = val + "px";
  }
  //拖动进度条
  tem.load.onmousedown = function (event) {
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    barleft = leftVal - tem.content.offsetLeft;
    load(barleft);
    const rate = (
      barleft /
      (tem.load.offsetWidth - tem.bar.offsetWidth)
    ).toFixed(8);
    tem.video.currentTime = rate * tem.video.duration;
  };
  tem.bar.onmousedown = function (event) {
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    var that = this;
    document.onmousemove = function (event) {
      var event = event || window.event;
      barleft = event.clientX - leftVal;
      // 越界判断
      if (barleft < 0) {
        barleft = 0;
      } else if (barleft > tem.load.offsetWidth - tem.bar.offsetWidth) {
        barleft = tem.load.offsetWidth - tem.bar.offsetWidth;
      }
      tem.mask.style.width = barleft + "px";
      that.style.left = barleft + "px";
      const rate = (
        barleft /
        (tem.load.offsetWidth - tem.bar.offsetWidth)
      ).toFixed(8);
      tem.video.currentTime = rate * tem.video.duration;
      // 防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.selection.empty();
    };
  };
  document.onmouseup = function () {
    document.onmousemove = null; //弹起鼠标不做任何操作
  };

  //初始化高级弹幕编辑器
  tem.advancedDanmaku_btn.onclick = () => {
    isShowList = false;
    isInput = true;
    openEditor();

    if (!editor) {
      editor = ace.edit("danmaku_code");
      ace.require("ace/ext/language_tools");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/json");

      editor.setFontSize(14);

      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      });
      editor.setValue("[\n{}\n]");
      editor.gotoLine(2);
      tem.advancePre.style.width = tem.content.clientWidth + "px";
      tem.advancePre.style.height = tem.video.clientHeight + "px";

      advancePreview = new MFADE({
        containers: tem.advancePre,
        danmaku: (send) => {
          send([editor.getValue()]);
        },
      });
    }
  };
  //预览高级弹幕
  tem.editor_preview.onclick = () => {
    closeEditor();
    advancePreview.reset();
    advancePreview.start();
    tem.video.play();
  };
  //清除高级弹幕代码
  tem.editor_clear.onclick = () => {
    editor.setValue("");
  };
  //发送高级弹幕
  tem.editor_emit.onclick = () => {
    const emit = callback.emitDanmaku;
    if (emit) {
      emit(editor.getValue(), 30)
        .then((res) => {
          closeEditor(tem);
          tip("弹幕发送成功！");
          advancePreview.reset();
          advancePreview.start();
          tem.video.play();
        })
        .catch((err) => {
          closeEditor();
          tip("弹幕发送失败！" + err.message);
        });
    } else console.error("未提供发送弹幕的回调函数，弹幕发送失败");
  };
  tem.ade_close.onclick = () => {
    isInput = false;
    closeEditor();
  };

  let previewCreated = false;
}
