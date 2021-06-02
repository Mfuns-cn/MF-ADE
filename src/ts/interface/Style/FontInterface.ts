import { Color } from "./Unit/Color";
import { Shadow } from "./Unit/Shadow";
import { PxSize } from "./Unit/PxSize";

export interface FontInterface{
    /**
     * 字体样式
     */
    fontStyle?:Fontstyle
    /**
     * 字体粗细
     */
    fontWeight?:number
    /**
     * 字体类型
     */
    fontFamily?:string
    /**
     * 字体大小
     */
    fontSize?:PxSize
    /**
     * 字体颜色
     */
    color?:Color
    /**
     * 字体阴影
     */
    textShadow?:Shadow
}
export enum Fontstyle {
    /**
     * 正常
     */
    normal="normal",
    /**
     * 斜体
     */
    italic="italic",
    /**
     * 随父容器
     */
    inherit="inherit"
}