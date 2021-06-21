import { BaseDanmaku } from "src/ts/interface/Danmaku/BaseDanmaku";
import { DanmakuItemInterface } from "src/ts/interface/Danmaku/DanmakuItemInterface";

export class DanmakuFactory{
    static list = {
        "text":BaseDanmaku
    }
    static getDanmakuInstance(type:string):DanmakuItemInterface{
        if(!this.list[type]){
            type = "text"
        }
        return new this.list[type]()
    }
}