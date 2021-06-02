import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "./AnimationInterface";

export class LinearAnimation implements AnimationInterface{

    duration: number
    setDuration(duration: number): boolean {
        this.duration = duration
        return true
    }
    getMatrix(time: number): number[]|false {
        if(time > 1000) return false
        // console.log(time);
        
        return [
            1,time*0.01,0,0,
            0,1,0,time*0.1,
            0,0,1,0,
            time*0.5,10,0,1
        ]
    }
    getStyle(time: number): false | DanmakuStyle {
        return false;
    }
 

}