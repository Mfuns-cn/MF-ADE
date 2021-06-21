import { Border } from "./Unit/Border";
import { Color } from "./Unit/Color";
import { Shadow } from "./Unit/Shadow";

export interface BoxStyleInterface{
    //边框
    borderTop?:Border
    borderBottom?:Border
    borderLeft?:Border
    borderRight?:Border
    //阴影
    boxShadow?:Shadow
    //背景
    backgroundColor?:Color

}