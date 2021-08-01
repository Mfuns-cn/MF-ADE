import { getDanmakuData } from "./request.js";
import { createControl } from "./createControl.js";
import { getVideoTime } from "./video.js";
import { addHls, addFlv, initFlv, initHls } from "./MSE.js";
import Template from "./getDOM.js";
import { canvasStage } from "./canvasStage.js";
import { operate } from "./DOMoperation.js";
export function init(el, url, callback) {
  //初始化播放器控件及样式

  createControl(el);

  let tem = Template();
  let BarrageData = [];
  let stageList = [];
  tem.content = el;
  //获取视频链接

  let video = document.createElement("video");
  video.setAttribute("class", "mfuns_video");
  tem.control_mask.style.backgroundImage = `url(${url.posterImg})`;
  tem.video = video;
  getVideoTime(tem);
  el.appendChild(video);
  if (url.videoType === "flv") {
    addFlv().then((res) => {
      initFlv(tem.video, url.video);
    });
  } else if (url.videoType === "m3u8" || url.videoType === "hls") {
    addHls().then((res) => {
      initHls(tem.video, url.video);
    });
  } else {
    tem.video.src = url.video;
  }

  //获取弹幕数据
  getDanmakuData(url.danmaku, "GET")
    .then(function (res) {
      //创建弹幕池
      BarrageData = res.data;
      createCanvas();
    })
    .catch(function (err) {
      console.error(err);
    });

  function createCanvas() {
    //创建视频弹幕列表

    //初始化canvas
    let canvas = document.createElement("canvas");
    canvas.setAttribute("class", "mfuns_canvas");
    tem.canvas = canvas;
    tem.canvas.width = el.clientWidth;
    el.appendChild(canvas);
    //初始化高级弹幕容器
    let advance = document.createElement("div");
    advance.setAttribute("class", "advanceDanmaku_box");
    tem.advance = advance;
    tem.advance.style.width = el.clientWidth + "px";

    el.appendChild(advance);

    //新建舞台

    let advanceDanmakuStage = new MFADE({
      containers: tem.advance,
      danmaku: (send) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url.advanceDanmaku);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            let { data } = JSON.parse(xhr.responseText);
            send(data);
          } else {
            // console.log('error')
          }
        };
        xhr.send();
        // /*
        // 获取弹幕,调用回调函数，将弹幕数组传进去
        // */
        // send(["json....","json...."])
      },
    });

    let canvasDanmakuStage = new canvasStage(tem, advanceDanmakuStage, {
      BarrageData,
    });
    stageList.push(canvasDanmakuStage);
    stageList.push(advanceDanmakuStage);

    //使用(注册)舞台
    operate(
      canvasDanmakuStage,
      advanceDanmakuStage,
      tem,
      BarrageData,
      callback
    );
  }
}
