import { I18n } from "src/ts/i18n";
import { DanmakuItemInterface } from "src/ts/core/Danmaku/DanmakuItemInterface";
import { AnimationFactory } from "../AnimationFactory";
import { DanmakuFactory } from "./DanmakuFactory";
import { DanmakuParserInterface } from "./DanmakuParserInterface";
import { DanmakuEvent } from "src/ts/Event/DanmakuEvent";
import { DanmakuEventType } from "src/ts/Event/DanmakuEventType";

/**
 * JSON 格式弹幕解析器
 */
export class JsonDanmakuParser implements DanmakuParserInterface {
  public parser(content: string): DanmakuItemInterface[] {
    try {
      let json: any[] = JSON.parse(content);
      return this.getDanmaku(json);
    } catch (e) {
      // 触发弹幕格式无效事件
      DanmakuEvent.dispatch(
        DanmakuEventType.DANMAKU_JSON_INVALID,
        I18n.t("Danmaku parser fail")
      );
      console.warn(I18n.t("Danmaku parser fail"));
      console.warn(e);
      return [];
    }
  }

  /**
   * 获取弹幕
   * @param obj 
   * @returns 
   */
  public getDanmaku(obj?: any[]): DanmakuItemInterface[] {
    let list: DanmakuItemInterface[] = [];

    /**
     * 遍历弹幕列表
     */
    obj?.forEach((dan,index) => {
      /**
       * 检测弹幕类型是否正确
       */
      if (typeof dan !== "object") {
        console.warn(`${I18n.t("Unknown danmaku format")} :  ${dan}  index: + ${index}`);
        // 触发弹幕类型错误事件
        DanmakuEvent.dispatch(DanmakuEventType.DANMAKU_FORMAT_ERROR,{
          content:dan,
          index
        })
      } else {
        let danmaku = DanmakuFactory.getDanmakuInstance(dan.type);
        if (!dan?.animations || dan?.animations === []) {
          dan.animations = [{ type: "static" }];
        }
        danmaku.setParams({
          start: dan?.start,
          content: dan?.content,
          style: dan?.style,
          animation: AnimationFactory.getAnimations("list", {
            animations: dan?.animations,
          }), // 将列表组成一个list
          child: this.getDanmaku(dan.childs),
        });

        list.push(danmaku);
      }
    });
    return list;
  }
}
