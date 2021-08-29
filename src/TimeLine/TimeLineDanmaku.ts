import { DanmakuItemInterface } from "../core/Danmaku/DanmakuItemInterface";

export interface TimeLineDanmaku{
    /**
     * 弹幕本体
     */
    danmaku:DanmakuItemInterface;
    /**
     * 开始时间
     */
    start:number,
    /**
     * 结束时间
     */
    end:number,
}