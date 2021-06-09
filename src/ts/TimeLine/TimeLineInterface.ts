import { DanmakuItemInterface } from "../interface/Danmaku/DanmakuItemInterface";
import { TimeLineDanmaku } from "./TimeLineDanmaku";

export interface TimeLineInterface {
    /**
     * 获取弹幕列表
     * @param time 当前播放时间
     */
    getDanmakuList(time: number): { skip: boolean; DanmakuList: TimeLineDanmaku[] }

    /**
    * 添加一个弹幕
    * @param danmaku 
    * @param start
    * @param end
    */
    addDanmaku(danmaku: DanmakuItemInterface, start?: number, end?: number): void
}