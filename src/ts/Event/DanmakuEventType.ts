/**
 * 弹幕事件类型枚举
 */
export enum DanmakuEventType {
  /**
   * 弹幕字符串无效
   */
  DANMAKU_JSON_INVALID = "DANMAKU_JSON_INVALID",
  /**
   * 单条弹幕格式错误
   */
  DANMAKU_FORMAT_ERROR = "DANMAKU_FORMAT_ERROR",

  /**
   * 弹幕开始加载
   */
  DANMAKU_LOAD_START = "DANMAKU_LOAD_START",

  DANMAKU_LOAD_DONE = "DANMAKU_LOAD_DONE"
}
