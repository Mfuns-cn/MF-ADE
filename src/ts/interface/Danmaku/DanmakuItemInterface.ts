/**
 * 单个弹幕接口
 */
export interface DanmakuItemInterface{
    getContent():string;
    getType():number;
    getColor():number;
}