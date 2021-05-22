import { DanmakuStyle } from "../Style/DanmakuStyle";
import { AnimationInterface } from "./Animation/AnimationInterface";

/**
 * 单个弹幕接口
 */
export interface DanmakuItemInterface{
    getContent():string
    getChild():DanmakuItemInterface[]
    getAnimation():AnimationInterface
    getStyle():DanmakuStyle
}