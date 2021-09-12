import "../css/base.css";
import { Controller } from "./Controller/Controller";
import { I18n } from "./i18n";
import { InitConfigInterface } from "./InitConfigInterface";
import { DanmakuEvent } from "./Event/DanmakuEvent";
import { DanmakuEventType } from "./Event/DanmakuEventType";
import { CodeDanmakuStage } from "./core/Stage/CodeDanmakuStage";
import { Model7Stage } from "./core/Stage/Model7Stage";
export class MFADE {
  public controller: Controller;
  constructor(config: InitConfigInterface) {
    // 类型检查
    if (!config.containers) {
      throw ReferenceError(I18n.t("Containers is null"));
    }
    this.controller = new Controller(config.containers);
    // json代码弹幕
    if (config.codeDanmaku) {
      this.controller.addGetDanmakuFunction("code", config.codeDanmaku);
      this.controller.registStage(new CodeDanmakuStage(), 1);
    }

    // model7 弹幕
    if (config.model7Danmaku) {
      this.controller.addGetDanmakuFunction("model7", config.model7Danmaku);
      this.controller.registStage(new Model7Stage(), 2);
    }
    // 挂载
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
  public listenerEvent(event: DanmakuEventType, callback: (data: any) => void) {
    DanmakuEvent.listener(event, callback);
  }
}

// 添加进全局
if (typeof globalThis !== "undefined") {
  globalThis.MFADE = MFADE;
} else {
  window["MFADE"] = MFADE;
}
