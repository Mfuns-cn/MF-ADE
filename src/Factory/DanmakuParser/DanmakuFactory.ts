import { BaseDanmaku } from "../../core/Danmaku/BaseDanmaku";
import { DanmakuItemInterface } from "../../core/Danmaku/DanmakuItemInterface";

/**
 * 弹幕解析器工厂
 */
export class DanmakuFactory{
    public static list = {
        "text":BaseDanmaku
    }
    public static getDanmakuInstance(type:string):DanmakuItemInterface{
        if(!this.list[type]){
            type = "text"
        }
        return new this.list[type]()
    }
}