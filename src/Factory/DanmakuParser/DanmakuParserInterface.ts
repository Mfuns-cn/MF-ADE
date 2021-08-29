import { DanmakuItemInterface } from "../../core/Danmaku/DanmakuItemInterface";

/**
 * 弹幕解析器，通常传入字符串
 */
export interface DanmakuParserInterface{
    /**
     * 解析
     * @param content 弹幕内容
     */
    parser(content:string):DanmakuItemInterface[]
}