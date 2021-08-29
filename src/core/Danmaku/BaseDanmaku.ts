import { DanmakuStyle } from "../Style/DanmakuStyle";
import { AnimationInterface } from "../Animation/Base/AnimationInterface";
import { DanmakuItemInterface } from "./DanmakuItemInterface";
import { StaticAnimation } from "../Animation/TransformsAnimations/StaticAnimation";

/**
 * 基础弹幕类型
 */
export class BaseDanmaku implements DanmakuItemInterface {
  public style: DanmakuStyle = {};
  public start: number = 0;
  public animation?: AnimationInterface;
  public content: string = "";
  public child: DanmakuItemInterface[] = [];
  /**
   * 设置参数
   * @param param
   * @returns
   */
  public setParams(param: { [idx: string]: any }): boolean {
    // 设置文字样式
    try {
      // 设置开始时间
      if (param?.start) {
        this.start = param?.start;
      }
      if (param?.animation) {
        this.animation = param?.animation || new StaticAnimation();}
      if (param?.child) { this.child = param.child; }
      if (param?.style) { this.style = param?.style; }
      if (param?.content) { this.content = param?.content;}
    } catch (e) {
      console.warn(e);
      return false;
    }

    return true;
  }
  public getType(): string {
    return "base";
  }
  public getContent(): string {
    return this.content;
  }
  public getChild(): DanmakuItemInterface[] {
    return this.child;
  }
  public getAnimation(): AnimationInterface {
    if (!this.animation) {
      this.animation = new StaticAnimation();
    }
    return this.animation;
  }
  public getStyle(): DanmakuStyle {
    return this.style;
  }
  public startTime(): number {
    return this.start;
  }
}
