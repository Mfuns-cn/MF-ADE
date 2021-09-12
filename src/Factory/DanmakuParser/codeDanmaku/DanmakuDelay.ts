import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";
import { JsonPostprocessInterface } from "./JsonPostprocessInterface";

export class DanmakuDelay implements JsonPostprocessInterface {
  public process(
    danmaku: DanmakuItemInterface,
    params: any
  ): false | DanmakuItemInterface {
    if (params?.delay) {
      let delay = parseInt(params.delay, 10);
      let start = danmaku.startTime() + delay;
      danmaku.setParams({
        start,
      });
    }
    return danmaku;
  }
}
