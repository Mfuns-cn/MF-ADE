import { formateTime } from "./util/formateTime.js";

export function getVideoTime(tem) {
  tem.load.max = parseInt(tem.video.duration);
  tem.currentTime.innerText = "00:00 " + "/";
  tem.total.innerText = formateTime(load.max) || "0:00";
  if (isNaN(load.max)) {
    setTimeout(function () {
      getVideoTime(tem);
    }, 100);
  } else {
    return;
  }
}
