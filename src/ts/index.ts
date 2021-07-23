import "../css/base.css";
import { Controller } from "./Controller/Controller";
import { I18n } from "./i18n";
import { InitConfigInterface } from "./core/InitConfigInterface";
import { TestStage } from "./core/Stage/TestStage";
import { DanmakuEvent } from "./Event/DanmakuEvent";
import { DanmakuEventType } from "./Event/DanmakuEventType";
export class MFADE {
  public controller: Controller;
  constructor(config: InitConfigInterface) {
    // 类型检查
    if (!config.containers) {
      throw ReferenceError(I18n.t("Containers is null"));
    }
    this.controller = new Controller(config.containers);
    this.controller.addGetDanmakuFunction("advance", config.danmaku);
    this.controller.registStage(new TestStage(), 1);
    this.controller.mount();
    // 监听大小变化
    window.addEventListener("resize", () => {
      this.controller.resize();
    });
  }

  /**
   * 暂停
   */
  public pause() {
    this.controller.pause();
  }
  /**
   * 开始
   */
  public start() {
    this.controller.start();
  }
  /**
   * 跳转
   */
  public skip(time: number) {
    this.controller.skip(time);
  }
  /**
   * 当前时间
   * @returns number
   */
  public time() {
    return this.controller.getTime();
  }
  /**
   * 重置弹幕尺寸
   */
  public resize() {
    this.controller.resize();
  }
  /**
   * 重置弹幕
   */
  public reset() {
    this.controller.resetDanmaku(1);
    this.controller.reset();
  }
  /**
   * 添加事件监听
   * @param event 
   * @param callback 
   */
  public listenerEvent(event: DanmakuEventType, callback: (data:any) => void) {
    DanmakuEvent.listener(event, callback);
  }
}

// 添加进全局
if (typeof globalThis !== "undefined") {
  globalThis.MFADE = MFADE;
} else {
  window["MFADE"] = MFADE;
}
