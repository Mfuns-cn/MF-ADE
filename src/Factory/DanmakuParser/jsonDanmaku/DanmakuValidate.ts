import { DanmakuEvent } from "../../../Event/DanmakuEvent";
import { DanmakuEventType } from "../../../Event/DanmakuEventType";
import { I18n } from "../../../i18n";
import { JsonPreprocessInterface } from "./JsonPreprocessInterface";

/**
 * 判断弹幕类型是否正确
 */
export class DanmakuValidate implements JsonPreprocessInterface {
  public process(json: any, index: number) {
    // 判断弹幕是否是object
    if (typeof json !== "object") {
      console.warn(
        `${I18n.t("Unknown danmaku format")} :  ${json}  index: + ${index}`
      );
      // 触发弹幕类型错误事件
      DanmakuEvent.dispatch(DanmakuEventType.DANMAKU_FORMAT_ERROR, {
        content: json,
        index,
      });
      return false;
    }
    return json;
  }
}
