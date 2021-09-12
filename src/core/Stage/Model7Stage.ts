import { BaseStage } from "./BaseStage";

/**
 * model7 弹幕舞台
 */
export class Model7Stage extends BaseStage {
  public rendererType(): string {
    return "css3";
  }
  public attachedType(): string {
    return "model7";
  }
  public timeLineType(): string {
    return "advance";
  }
}
