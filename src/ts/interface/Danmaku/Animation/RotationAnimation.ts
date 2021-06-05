import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { OriginAnimations } from "./OriginAnimations";

/**
 * 旋转父类
 */
export abstract class RotationAnimation extends OriginAnimations {

    angle:{start:number,end:number} = {start:0,end:360}
    setParams(param: { [idx: string]: any; }): boolean {
        if (!super.setParams(param)) return false;
        this.angle = param.angle || this.angle
        return true
    }
    getCubicStyle(progress: number): false | DanmakuStyle {
        return false;
    }
    /**
     * 角度转弧度
     */
    protected A2R(a: number) {
        return a * (Math.PI / 180)
    }
}