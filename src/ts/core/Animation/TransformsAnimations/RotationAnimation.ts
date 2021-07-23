import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { OriginAnimations } from "../Base/OriginAnimations";

/**
 * 旋转父类
 */
export abstract class RotationAnimation extends OriginAnimations {

    public angle:{start:number,end:number} = {start:0,end:360}
    public setParams(param: { [idx: string]: any; }): boolean {
        if (!super.setParams(param)) { return false; }
        this.angle = Object.assign(this.angle,param?.angle)
        return true
    }
    public getCubicStyle(_progress: number): false | DanmakuStyle {
        return false;
    }
    /**
     * 角度转弧度
     */
    protected A2R(a: number) {
        return a * (Math.PI / 180)
    }
}