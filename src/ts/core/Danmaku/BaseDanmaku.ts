import { DanmakuStyle } from "../Style/DanmakuStyle";
import { AnimationInterface } from "../Animation/Base/AnimationInterface";
import { DanmakuItemInterface } from "./DanmakuItemInterface";
import { StaticAnimation } from "../Animation/TransformsAnimations/StaticAnimation";

/**
 * 基础弹幕类型
 */
export class BaseDanmaku implements DanmakuItemInterface {


    style:DanmakuStyle = {}
    start:number = 0;
    animation?:AnimationInterface
    content:string = ""
    child:DanmakuItemInterface[] = []
    /**
     * 设置参数
     * @param param 
     * @returns 
     */
    setParams(param: { [idx: string]: any; }): boolean {
        //设置文字样式
        try{
            //设置开始时间
            param?.start &&　(this.start = param?.start)
            param?.animation && (this.animation =  param?.animation ||  new StaticAnimation())
            param?.child && (this.child = param.child)
            param?.style && (this.style = param?.style)
            param?.content && (this.content = param?.content)

            
        }catch(e){
            console.warn(e);
            return false;
        }
       
        return true
    }
    getType(): string {
        return "base"
    }
    getContent(): string {
        return this.content
    }
    getChild(): DanmakuItemInterface[] {
        return this.child
    }
    getAnimation(): AnimationInterface {
        if(!this.animation){
            this.animation = new StaticAnimation()
        }
        return this.animation
    }
    getStyle(): DanmakuStyle {
        return this.style
    }
    startTime(): number {
        return this.start
    }
}

