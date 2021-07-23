import { DanmakuEventType } from "./DanmakuEventType";

/**
 * 弹幕事件工具
 */
export class DanmakuEvent {
  // 事件前缀，防止冲突
  public static prefix = "_danmakuevent_";

  /**
   * 包装事件名称字符串
   * @param eventname 事件名称
   * @returns
   */
  protected static buildPrefix(eventname: DanmakuEventType): string {
    return this.prefix + eventname;
  }
  public static register<T>(eventname: DanmakuEventType, callback: (data: T) => void) {
    window.addEventListener(this.buildPrefix(eventname), (data: any) => {
      callback(data.detail);
    });
  }

  /**
   * 触发弹幕事件
   * @param eventname
   * @param data
   */
  public static dispatch<T>(eventname: DanmakuEventType, data: T) {
    // 包装事件
    let event = new CustomEvent(this.buildPrefix(eventname), {
      detail: data,
    });
    // 触发事件
    window.dispatchEvent(event);
  }
}
