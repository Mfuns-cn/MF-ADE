import { DanmakuItemInterface } from "../interface/Danmaku/DanmakuItemInterface";
import { TimeLineInterface } from "./TimeLineInterface";

export class TestLine implements TimeLineInterface {

    lastTime: number
    danmakuList: { danmaku: DanmakuItemInterface; }[] = [];
    getDanmakuList(time: number): { danmaku: DanmakuItemInterface; time: number; } {
        if (this.lastTime < time && time - this.lastTime < 100) {
            //正常播放情况,遍历期间的所有弹幕
            for (let a = this.lastTime; a <= time; a++) {
                
            }

        }
        throw new Error("Method not implemented.");
    }

}