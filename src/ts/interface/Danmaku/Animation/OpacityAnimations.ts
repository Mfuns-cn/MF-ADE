import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { CubicAnimations } from "./CubicAnimations";

export class OpacityAnimations extends CubicAnimations{
    opacity:[number,number] = [0,1]
    setParams(param?: { [idx: string]: any; }):boolean{
        super.setParams(param);
        this.opacity = param?.opacity || this.opacity
        return true
    }
    getCubicStyle(progress: number, _time: number): false | DanmakuStyle {
        // console.log(this.getProgressValue(this.opacity[0],this.opacity[1],progress));
        
        return {
            opacity:this.getProgressValue(this.opacity[0],this.opacity[1],progress)
        }
    }
    getMatrixForCubic(_progress: number, _time: number): false | number[] {
        return false
    }

}