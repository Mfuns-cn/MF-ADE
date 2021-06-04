import { TimeLineDanmaku } from "./TimeLineDanmaku";

export interface TimeLineInterface{
    /**
     * 获取弹幕列表
     * @param time 当前播放时间
     */
    getDanmakuList(time:number):{skip:boolean;DanmakuList:TimeLineDanmaku[]}
}