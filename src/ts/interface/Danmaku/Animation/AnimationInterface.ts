import { DanmakuStyle } from "../../Style/DanmakuStyle";

export interface AnimationInterface{
    /**
     * 获取变换矩阵 false 表示完成或无
     * @param time 动画开始的时间
     */
    getMatrix(time:number):Array<number>|false
    /**
     * 获取样式信息 false 表示完成或无
     * @param time 
     */
    getStyle(time:number):DanmakuStyle|false
}