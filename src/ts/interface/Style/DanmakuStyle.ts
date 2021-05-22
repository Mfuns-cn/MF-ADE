import { ColorInterface } from "./ColorInterface";
import { PositionInterface } from "./PositionInterface";
import { SizeInterface } from "./SizeInterface";
/**
 * 弹幕基础样式集合
 */
export interface DanmakuStyle{
    /**
     * 弹幕尺寸
     */
    size?:SizeInterface,
    /**
     * 弹幕颜色
     */
    color?:ColorInterface,
    /**
     * 弹幕背景
     */
    background?:ColorInterface,
    /**
     * 弹幕位置（相对于父弹幕元素）
     */
    position?:PositionInterface

    border:BorderInterface



}