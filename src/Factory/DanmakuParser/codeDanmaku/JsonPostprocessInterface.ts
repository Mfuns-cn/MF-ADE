import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";

/**
 * Json弹幕 后处理接口
 */
export interface JsonPostprocessInterface {
  /**
   * 处理弹幕
   * @param danmaku 弹幕对象
   * @param params json参数
   */
  process(
    danmaku: DanmakuItemInterface,
    params: any
  ): DanmakuItemInterface | false;
}
