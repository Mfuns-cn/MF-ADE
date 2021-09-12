import { RotationAnimation } from "./RotationAnimation";

/**
 * X轴旋转
 */
export class RotationXAnimation extends RotationAnimation {
  public getMatrixForOrigin(progress: number): false | number[] {
    let angle = this.getProgressValue(
      this.angle.start,
      this.angle.end,
      progress
    );
    let sin = Math.sin(this.A2R(angle));
    let cos = Math.cos(this.A2R(angle));

    return [1, 0, 0, 0, 0, cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1];
  }
}
