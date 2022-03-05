import { BaseStage } from "./BaseStage";

/**
 * mode7 弹幕舞台
 */
export class Mode7Stage extends BaseStage {
  public rendererType(): string {
    return "css3";
  }
  public attachedType(): string {
    return "mode7";
  }
  public timeLineType(): string {
    return "advanced";
  }
}
