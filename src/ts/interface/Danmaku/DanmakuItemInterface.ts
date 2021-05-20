import { canvasStyle } from "../Style/CanvasStyle";
import { AnimationInterface } from "./Animation/AnimationInterface";

/**
 * 单个弹幕接口
 */
export interface DanmakuItemInterface{
    getContent():string
    getChild():DanmakuItemInterface[]
    getAnimation():AnimationInterface
    getStyle():canvasStyle
}