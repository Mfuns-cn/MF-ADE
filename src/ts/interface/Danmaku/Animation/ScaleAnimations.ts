import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { OriginAnimations } from "./OriginAnimations";

/**
 * 缩放动画
 */
export class ScaleAnimations extends OriginAnimations{
    scale:{x1:number,y1:number,z1:number,x2:number,y2:number,z2:number} 
    = {x1:1,y1:1,z1:1,x2:1.5,y2:1.5,z2:1.5}
    setParams(param: { [idx: string]: any; }): boolean {
        if (!super.setParams(param)) return false;
        this.scale = param?.scale ||　this.scale
        return true
    }
    getMatrixForOrigin(progress: number): false | number[] {
        let x = this.getProgressValue(this.scale.x1, this.scale.x2, progress);
        let y = this.getProgressValue(this.scale.y1, this.scale.y2, progress)
        let z = this.getProgressValue(this.scale.z1, this.scale.z2, progress)
        return [
            x,0,0,0,
            0,y,0,0,
            0,0,z,0,
            0,0,0,1
        ]

    }
    getCubicStyle(progress: number): false | DanmakuStyle {
       return false
    }

}