import { RotationAnimation } from "./RotationAnimation";
/**
 * y轴旋转
 */
export class RotationYAnimation extends RotationAnimation {
    getMatrixForOrigin(progress: number): false | number[] {
        let angle = this.getProgressValue(this.angle.start,this.angle.end,progress)
        let sin = Math.sin(this.A2R(angle));
        let cos = Math.cos(this.A2R(angle))
        return [
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1
        ]
    }
}