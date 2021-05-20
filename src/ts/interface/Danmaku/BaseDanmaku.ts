import { canvasStyle } from "../Style/CanvasStyle";
import { AnimationInterface } from "./Animation/AnimationInterface";
import { LinearAnimation } from "./Animation/LinearAnimation";
import { DanmakuItemInterface } from "./DanmakuItemInterface";

export class BaseDanmaku implements DanmakuItemInterface{
    content:string
    constructor(str:string){
        this.content = str
    }
    getContent(): string {
        return this.content
    }
    getChild(): DanmakuItemInterface[] {
        if(Math.random()>0.1){
            return [new BaseDanmaku(Math.random() + '')]
        }
        return []
        
    }
    getAnimation(): AnimationInterface {
       return new LinearAnimation()
    }
    getStyle(): canvasStyle {
        throw new Error("Method not implemented.");
    }

}