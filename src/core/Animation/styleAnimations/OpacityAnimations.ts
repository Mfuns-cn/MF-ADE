import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { CubicAnimations } from "../Base/CubicAnimations";

/**
 * 透明度动画
 *
 * @export
 * @class OpacityAnimations
 * @extends {CubicAnimations}
 */
export class OpacityAnimations extends CubicAnimations {
  public opacity: [number, number] = [0, 1];
  public setParams(param?: { [idx: string]: any }): boolean {
    super.setParams(param);
    this.opacity = param?.opacity || this.opacity;
    // console.log(param);
    return true;
  }
  public getCubicStyle(progress: number, _time: number): false | DanmakuStyle {
    return {
      opacity: this.getProgressValue(
        this.opacity[0],
        this.opacity[1],
        progress
      ),
    };
  }
  public getMatrixForCubic(_progress: number, _time: number): false | number[] {
    return false;
  }
}
