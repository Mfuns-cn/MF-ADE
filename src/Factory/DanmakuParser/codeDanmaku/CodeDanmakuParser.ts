import { I18n } from "../../../i18n";
import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";
import { AnimationFactory } from "../../AnimationFactory";
import { DanmakuFactory } from "../DanmakuFactory";
import { DanmakuParserInterface } from "../DanmakuParserInterface";
import { DanmakuEvent } from "../../../Event/DanmakuEvent";
import { DanmakuEventType } from "../../../Event/DanmakuEventType";
import { PreprocessPipe } from "./PreprocessPipe";
import { PostprocessPipe } from "./PostprocessPipe";

/**
 * JSON 格式弹幕解析器
 */
export class CodeDanmakuParser implements DanmakuParserInterface {
  /**
   * 弹幕tag列表
   */
  protected tagList: any[] = [];

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
    let preprocessPipe = new PreprocessPipe();
    let postprocessPipe = new PostprocessPipe();
    /**
     * 遍历弹幕列表
     */
    obj?.forEach((json, index) => {
      // 经过前置管道处理
      let dan = preprocessPipe.process(json, index);
      if (dan) {
        // 封装 弹幕对象
        let danmaku = DanmakuFactory.getDanmakuInstance(dan.type);
        danmaku.setParams({
          start: dan?.start,
          content: dan?.content,
          style: dan?.style,
          animation: AnimationFactory.getAnimations("list", {
            animations: dan?.animations,
          }), // 将列表组成一个list
          child: this.getDanmaku(dan.childs),
        });
        // 后置管道处理
        // console.log(danmaku, dan);

        let danmaku2 = postprocessPipe.process(danmaku, json);
        if (danmaku2) {
          list.push(danmaku);
        }
      }
    });
    return list;
  }
}
