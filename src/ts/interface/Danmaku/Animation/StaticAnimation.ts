import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "./AnimationInterface";

/**
 * 静止动画 仅仅悬停在某一个位置一定时间
 */
export default class StaticAnimation implements AnimationInterface {

    time: number;
    x: number;
    y: number;
    z: number;

    setParams(param: { [idx: string]: any; }): boolean {
        let def = 0;
        this.time = param.time || def
        this.x = param.x || def
        this.y = param.y || def
        this.z = param.z || def
        return true
    }
    getMatrix(time: number): false | number[] {
        if (time > this.time) return false;

        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.x, this.y, this.z, 1

        ]
    }
    getStyle(): false | DanmakuStyle {
        return false
    }

}