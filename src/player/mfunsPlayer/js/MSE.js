export function addHls() {
  return new Promise((resolve, reject) => {
    var secScript = document.createElement("script");
    secScript.setAttribute(
      "src",
      "https://cdn.bootcdn.net/ajax/libs/hls.js/1.0.8-0.canary.7775/hls.js"
    );
    document.body.appendChild(secScript);

    function checkHLs() {
      setTimeout(() => {
        if (window.Hls) {
          resolve();
        } else {
          checkHLs();
          // reject()
        }
      }, 10);
    }
    checkHls();
  });
}
export function addFlv() {
  return new Promise((resolve, reject) => {
    var secScript = document.createElement("script");
    secScript.setAttribute(
      "src",
      "https://cdn.bootcdn.net/ajax/libs/flv.js/1.6.0/flv.min.js"
    );
    document.body.appendChild(secScript);

    function checkFlv() {
      setTimeout(() => {
        if (window.flvjs) {
          resolve();
        } else {
          checkFlv();
          // reject()
        }
      }, 10);
    }
    checkFlv();
  });
}

export function initFlv(video, url) {
  if (flvjs.isSupported()) {
    var flvPlayer = flvjs.createPlayer({
      type: "flv",
      url,
    });
    flvPlayer.attachMediaElement(video);
    flvPlayer.load(); //加载
  }

  // function flv_start() {
  // 	player.play();
  // }

  // function flv_pause() {
  // 	player.pause();
  // }

  // function flv_destroy() {
  // 	player.pause();
  // 	player.unload();
  // 	player.detachMediaElement();
  // 	player.destroy();
  // 	player = null;
  // }

  // function flv_seekto() {
  // 	player.currentTime = parseFloat(document.getElementsByName('seekpoint')[0].value);
  // }
}

export function initHls(video, url) {
  if (window.Hls) {
    if (window.Hls.isSupported()) {
      const hls = new window.Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      console.log(hls);
    } else {
      console.log("Error: Hls is not supported.");
    }
  } else {
    console.log("Error: Can't find Hls.");
  }
}
