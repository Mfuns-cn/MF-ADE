import { DanmakuItemInterface } from "src/ts/core/Danmaku/DanmakuItemInterface";

/**
 * 弹幕解析器，通常传入字符串
 */
export interface DanmakuParserInterface{
    parser(content:string):DanmakuItemInterface[]
}