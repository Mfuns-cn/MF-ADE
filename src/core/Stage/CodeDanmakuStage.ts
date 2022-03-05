import { BaseStage } from "./BaseStage";

/**
 * 代码弹幕舞台
 */
export class CodeDanmakuStage extends BaseStage {
  public timeLineType(): string {
    return "advanced";
  }
  public rendererType(): string {
    return "css3";
  }
  public attachedType(): string {
    return "code";
  }
}
