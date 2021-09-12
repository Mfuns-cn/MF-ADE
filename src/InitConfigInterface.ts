/**
 * 初始化配置接口
 */

export interface InitConfigInterface {
  /**
   * 渲染的容器
   */
  containers?: HTMLElement;
  codeDanmaku?: () => string;
  model7Danmaku?: () => string;
}
