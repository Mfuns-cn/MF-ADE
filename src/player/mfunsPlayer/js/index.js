import { init } from "./control.js";
import { addAcejs } from "./danmakuEditor.js";
import "../css/index.css";
// import './ace/ace.js'
// import './util/flv.js'
class mfunsPlayer {
  constructor(el, url, callback) {
    addAcejs();
    el.style.background = "#000";
    el.style.minWidth = "400px";
    el.style.position = "relative";
    el.style.display = "flex";
    el.style.justifyContent = "center";
    el.style.overflow = "hidden";
    init(el, url, callback);
  }
}

if (globalThis) {
  globalThis.mfunsPlayer = mfunsPlayer;
  console.log(
    `${"\n"} %c mfunsPlayer v1.0.0 %c https://github.com/Mfuns-cn ${"\n"}${"\n"}`,
    "color: #fff; background: #7b7ff7; padding:5px 0;",
    "background: #f5f5f5; padding:5px 0;"
  );
}
