import { AnimationFactory } from "src/ts/Factory/AnimationFactory";
import { BoxStyleInterface } from "../Style/BoxStyleInterface";
import { DanmakuStyle } from "../Style/DanmakuStyle";
import { FontInterface } from "../Style/FontInterface";
import { Border } from "../Style/Unit/Border";
import { Color } from "../Style/Unit/Color";
import { PxSize } from "../Style/Unit/PxSize";
import { Shadow } from "../Style/Unit/Shadow";
import { AnimationInterface } from "./Animation/AnimationInterface";
import StaticAnimation from "./Animation/StaticAnimation";
import { DanmakuItemInterface } from "./DanmakuItemInterface";

/**
 * 基础弹幕类型
 */
export class BaseDanmaku implements DanmakuItemInterface {


    fontStyle: FontInterface = {}

    boxStyle: BoxStyleInterface = {}
    start:number = 0;
    animation?:AnimationInterface
    content:string = ""
    child:DanmakuItemInterface[] = []
    /**
     * 设置参数
     * 正确的格式为
     * {
     *   start:number
     *   fontStyle:{},
     *   boxStyle:{}
     * }
     * @param param 
     * @returns 
     */
    setParams(param: { [idx: string]: any; }): boolean {
        //设置文字样式
        try{
            param?.content && (this.content = param?.content)
            if (param?.fontStyle) {
                let fontStyle = param?.fontStyle
                fontStyle.style && (this.fontStyle.fontStyle = fontStyle.fontStyle);
                fontStyle.fontWeight && (this.fontStyle.fontWeight = fontStyle.fontWeight);
                fontStyle.fontFamily && (this.fontStyle.fontFamily = fontStyle.fontFamily);
                fontStyle.fontSize && (this.fontStyle.fontSize = new PxSize(fontStyle.fontSize));
                //颜色为文字
                fontStyle.color && (this.fontStyle.color = this.getColor(fontStyle.color));
                fontStyle.textShadow && (this.fontStyle.textShadow =
                    new Shadow(new PxSize(fontStyle.textShadow.h),
                        new PxSize(fontStyle.textShadow.v),
                        new PxSize(fontStyle.textShadow.blur),
                        this.getColor(fontStyle.textShadow.blur),
                        fontStyle.textShadow.inset));
    
            }
            //设置盒子样式
            if (param?.boxStyle) {
                let boxStyle = param?.boxStyle;
                boxStyle.borderTop && (this.boxStyle.borderTop = new Border(boxStyle.borderTop.width, boxStyle.borderTop.style, this.getColor(boxStyle.borderTop.color)))
                boxStyle.borderBottom && (this.boxStyle.borderBottom = new Border(boxStyle.borderBottom.width, boxStyle.borderBottom.style, this.getColor(boxStyle.borderBottom.color)))
                boxStyle.borderLeft && (this.boxStyle.borderLeft = new Border(boxStyle.borderLeft.width, boxStyle.borderLeft.style, this.getColor(boxStyle.borderLeft.color)))
                boxStyle.borderRight && (this.boxStyle.borderRight = new Border(boxStyle.borderRight.width, boxStyle.borderRight.style, this.getColor(boxStyle.borderRight.color)))
                boxStyle.boxShadow && (this.boxStyle.boxShadow = new Shadow(new PxSize(boxStyle.boxShadow.h),
                    new PxSize(boxStyle.boxShadow.v),
                    new PxSize(boxStyle.boxShadow.blur),
                    this.getColor(boxStyle.boxShadow.color),
                    boxStyle.boxShadow.inset))
                boxStyle?.backgroundColor && (this.boxStyle.backgroundColor = this.getColor(boxStyle?.backgroundColor ))
            }
            //设置开始时间
            param?.start &&　(this.start = param?.start)

            
            
            
            param?.animation && (this.animation =  param?.animation ||  new StaticAnimation())
            console.log(this.animation);
            param?.child && (this.child = param.child)
        }catch(e){
            console.warn(e);
            return false;
        }
       
        return true
    }
    /**
     * 根据颜色名称或者rgb值得到颜色对象
     * @param color 
     * @returns 
     */
    getColor(color?: any): Color {
        try {
            //如果是颜色名称
            if (color && (typeof color) == "string") {
                return Color.getColor(color);
            } else {
                return new Color(color.r,
                    color.g,
                    color.b,
                    color.a)
            }
        } catch (error) {
            console.warn(error);
            return Color.getColor("black");
        }
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
        return {
            fontStyle: this.fontStyle,
            boxStyle: this.boxStyle
        }
    }
    startTime(): number {
        return this.start
    }
}

