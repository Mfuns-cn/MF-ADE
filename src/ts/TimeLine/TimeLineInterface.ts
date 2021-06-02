import { DanmakuItemInterface } from "../interface/Danmaku/DanmakuItemInterface";

export interface TimeLineInterface{
    getDanmakuList(time:number):{danmaku:DanmakuItemInterface,time:number}
}