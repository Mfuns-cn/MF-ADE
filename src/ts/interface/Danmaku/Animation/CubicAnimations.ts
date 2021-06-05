import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "./AnimationInterface";
import { Cubic } from "./Cubic";

/**
 * 贝塞尔动画类
 */
export abstract class CubicAnimations implements AnimationInterface {
    /**
     * 贝塞尔函数
     */
    cubicFunc: Cubic;
    /**
     * 贝塞尔参数
     */
    cubic: [number, number, number, number] = [0,0,1,1]
    /**
     * 动画总时间
     */
    time: number = 3000
    currentTime:number = 0
    getMatrix(time: number): false | number[] {
        if (this.isEnd(time)) return false
        // console.log(time);
        
        return this.getMatrixForCubic(this.getProgress(time),time)
    }
    getStyle(time: number): false | DanmakuStyle {
        if (this.isEnd(time)) return false
        return this.getCubicStyle(this.getProgress(time),time)
    }
    setParams(param: { [idx: string]: any; }): boolean {
        this.cubic = param.cubic ? param.cubic : this.cubic
        this.time = param.time ? param.time : this.time
        return true
    }
    /**
     * 根据动画时间获取动画进度
     * @param time 动画时间
     * @returns 
     */
    getProgress(time: number):number {
        //计算当前动画进度
        let progress: number = time/this.time 
        // console.log(progress);
        
        //计算出实际动画进度
        return this.getCubic().solve(progress)
    }
    /**
     * 根据进度返回区间内的值
     * @param start 
     * @param end 
     * @param progress 
     */
    getProgressValue(start:number,end:number,progress:number):number{
        return start +　(end-start)*progress
    }
    /**
     * 判断动画是否结束
     */
    protected isEnd(time: number) {
        return time > this.time
    }
    /**
     * 获取贝塞尔函数
     * @returns 
     */
    getCubic(): Cubic {
        if (!this.cubicFunc) {
            this.cubicFunc = new Cubic(...this.cubic)
        }
        return this.cubicFunc;
    }
    /**
     * 计算贝塞尔样式
     * 注意：此处返回false仅表示未设置动画，请不要在此函数实现中判断动画结束
     * @param progress 动画进度，0-1 有可能会超过此范围
     */
    abstract getCubicStyle(progress: number,time:number): DanmakuStyle | false
    /**
     * 计算贝塞尔的矩阵
     * 注意：此处返回false仅表示未设置动画，请不要在此函数实现中判断动画结束
     * @param progress 动画进度，0-1 有可能会超过此范围
     * @
     */
    abstract getMatrixForCubic(progress: number,time:number): number[] | false

}