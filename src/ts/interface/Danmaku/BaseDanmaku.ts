import { BoxStyleInterface } from "../Style/BoxStyleInterface";
import { DanmakuStyle } from "../Style/DanmakuStyle";
import { FontInterface, Fontstyle } from "../Style/FontInterface";
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

    defPxSize = new PxSize(0);
    defColor = Color.getColor("black")
    fontStyle: FontInterface = {
        fontStyle: Fontstyle.inherit,
        fontWeight: 400,
        fontFamily: "sans-serif",
        fontSize: new PxSize(16),
        color: this.defColor,
        textShadow: new Shadow(this.defPxSize, this.defPxSize, this.defPxSize, this.defColor),
    }

    boxStyle: BoxStyleInterface = {
        //边框
        borderTop: new Border(0, "solid", Color.getColor("black")),
        borderBottom: new Border(0, "solid", Color.getColor("black")),
        borderLeft: new Border(0, "solid", Color.getColor("black")),
        borderRight: new Border(0, "solid", Color.getColor("black")),
        //阴影
        boxShadow: new Shadow(this.defPxSize, this.defPxSize, this.defPxSize, this.defColor),
        //背景
        backgroundColor: this.defColor,
    }
    /**
     * 设置参数
     * 正确的格式为
     * {
     *   fontStyle:{},
     *   boxStyle:{}
     * }
     * @param param 
     * @returns 
     */
    setParams(param: { [idx: string]: any; }): boolean {
        //设置文字样式
        if (param.fontStyle) {
            let fontStyle = param.fontStyle
            fontStyle.style ? this.fontStyle.fontStyle = fontStyle.fontStyle : null;
            fontStyle.fontWeight ? this.fontStyle.fontWeight = fontStyle.fontWeight : null;
            fontStyle.fontFamily ? this.fontStyle.fontFamily = fontStyle.fontFamily : null;
            fontStyle.fontSize ? this.fontStyle.fontSize = new PxSize(fontStyle.fontSize) : null;
            //颜色为文字
            fontStyle.color ?this.fontStyle.color = this.getColor(fontStyle.color):0;
            fontStyle.textShadow ? this.fontStyle.textShadow =
                new Shadow(new PxSize(fontStyle.textShadow.h),
                    new PxSize(fontStyle.textShadow.v),
                    new PxSize(fontStyle.textShadow.blur),
                    this.getColor(fontStyle.textShadow.blur),
                    fontStyle.textShadow.inset) : 0;

        }
        //设置盒子样式
        if(param.boxStyle){
            let boxStyle = param.boxStyle
        }
        return true
    }
    /**
     * 根据颜色名称或者rgb值得到颜色对象
     * @param color 
     * @returns 
     */
    getColor(color?:any):Color{
        try {
            if(color &&　(typeof color) == "string"){
                return Color.getColor(color);
            }else {
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
    content: string
    getType(): string {
        return "base"
    }

    getContent(): string {
        return this.content
    }
    getChild(): DanmakuItemInterface[] {
        return []
    }
    getAnimation(): AnimationInterface {
        return new StaticAnimation()
    }
    getStyle(): DanmakuStyle {
        return {
            fontStyle: this.fontStyle,
            boxStyle: this.boxStyle
        }
    }
}

