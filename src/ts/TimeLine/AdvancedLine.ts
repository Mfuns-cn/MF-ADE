import { DanmakuItemInterface } from "../interface/Danmaku/DanmakuItemInterface";
import { TimeLineDanmaku } from "./TimeLineDanmaku";
import { TimeLineInterface } from "./TimeLineInterface";

export class AdvancedLine implements TimeLineInterface {

    /**
     * 上次获取时间(10ms)
     */
    lastTime: number = 0
    /**
     * 时间轴,二维数组，一维是弹幕的开始10毫秒数，二维是此毫秒数下的弹幕集合
     * 注意：为了节省性能，最小单位时间是10ms，
     *       仅仅是数组下标是10ms，其余的都是按照ms计算的
     */
    danmakuList: TimeLineDanmaku[][] = [];

    /**
     * 总时长（单位10ms）
     */
    tolalTime: number;

    constructor(tolalTime: number) {
        this.tolalTime = this.timeToIndex(tolalTime)
    }


    /**
     * 添加一个弹幕
     * @param danmaku 
     * @param start
     * @param end
     */
    addDanmaku(danmaku: DanmakuItemInterface, start: number, end: number) {
        let index = this.timeToIndex(start);
        if(!this.danmakuList[index]){
            this.danmakuList[index] = []
        }
        this.danmakuList[index].push({
            danmaku: danmaku,
            start: start,
            end:end
        })
    }
    /**
     * 时间转换
     * @param time 
     * @returns 
     */
    protected timeToIndex(time: number): number {
        return Math.floor(time / 10)
    }
    getDanmakuList(time: number):{skip:boolean;DanmakuList:TimeLineDanmaku[]}  {
        time = this.timeToIndex(time);
        //如果请求的时间超过了时间轴。。。
        if (time < 0 || time > this.tolalTime) {
            return {skip:false,DanmakuList:[]};
        }

        let arr: TimeLineDanmaku[] = [];
        let skip = false;
        if (this.lastTime <= time && time - this.lastTime < 5) {
            //正常播放情况,遍历期间的所有内容
            // console.log(this.lastTime);
            
            for (let a = this.lastTime; a < time; a++) {
                
                if (this.danmakuList[a]) {
                    // console.log(time);
                    
                    arr.push(...this.danmakuList[a])
                }
            }

        } else {
            //否则说明播放发生了跳转，则遍历找到合适的内容
            //查找范围：在当前时间之前开始的，并且结束于当前时间之后的，
            //先找到之前开始的
            // console.log(time);
            for (let timeIndex = 0; timeIndex < time; timeIndex++) {
                if (!this.danmakuList[timeIndex]) {
                    continue;//当前时间不存在
                }
                //接着再查找当前时间之后结束的
                for (let l = 0; l < this.danmakuList.length; l++) {
                    if (this.danmakuList[timeIndex][l]
                        &&
                        this.timeToIndex(this.danmakuList[timeIndex][l].end)
                        > time) {
                        arr.push(this.danmakuList[timeIndex][l])
                    }
                }
            }
            skip = true;

        }
        this.lastTime = time
        return {skip:skip,DanmakuList:arr};
    }

}

