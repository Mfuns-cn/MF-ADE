import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";
import { JsonPostprocessInterface } from "./JsonPostprocessInterface";

/**
 * Then 语法处理
 */
export class DanmakuThen implements JsonPostprocessInterface {
  protected idList: number[] = [];
  public process(
    danmaku: DanmakuItemInterface,
    params: any
  ): false | DanmakuItemInterface {
    // 设置开始时间
    if (!params?.start && params?.then) {
      let start = this.idList[params.then] || 0;
      danmaku.setParams({
        start,
      });
    }
    // 计算存在id属性结束时间
    if (params?.id) {
      this.idList[params.id] =
        danmaku.startTime() + danmaku.getAnimation().getDuration();
    }
    // _LAST_ 变量
    this.idList["_LAST_"] =
      danmaku.startTime() + danmaku.getAnimation().getDuration();
    return danmaku;
  }
}
