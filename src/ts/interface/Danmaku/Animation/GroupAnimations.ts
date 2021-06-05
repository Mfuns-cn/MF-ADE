import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "./AnimationInterface";
import { CubicAnimations } from "./CubicAnimations";


/**
 * 动画组，用于多个动画并行播放
 */
export class GroupAnimations extends CubicAnimations {


    animations: AnimationInterface[] = []
    setParams(param: { [idx: string]: any; }): boolean {
        super.setParams(param);
        this.animations = param.animations || []
        return true;
    }
    getCubicStyle(progress: number,time:number): false | DanmakuStyle {
        //倒着计算所有的矩阵
        for(let i = this.animations.length - 1;i < 0;i++){
            
        }
    }
    getMatrixForCubic(progress: number): false | number[] {
        throw new Error("Method not implemented.");
    }

}