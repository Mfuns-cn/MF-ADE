import { DanmakuItemInterface } from "../Danmaku/DanmakuItemInterface";
import { canvasStyle } from "../Style/CanvasStyle";

/**
 * 渲染器接口
 */
export interface RendererInterface{
    /**
     * 设置画布容器
     * @param canvas 
     */
    setCanvasContainer(canvas:HTMLElement):boolean;
    /**
     * 更新画布样式
     * @param style 
     */
    updateCanvasStyle(style:canvasStyle):boolean;

    /**
     * 渲染弹幕
     */
    addDanmaku(danmaku:DanmakuItemInterface):boolean

    /**
     * 刷新渲染器，一般一秒钟会调用60次
     */
    refresh():boolean
}