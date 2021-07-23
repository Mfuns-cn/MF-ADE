import { DanmakuItemInterface } from "../Danmaku/DanmakuItemInterface";
import { CanvasStyle } from "../Style/CanvasStyle";

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
    updateCanvasStyle(style:CanvasStyle):boolean;

    /**
     * 渲染弹幕
     */
    addDanmaku(danmaku:DanmakuItemInterface):boolean

    /**
     * 刷新渲染器，会根据刷新率调用
     */
    refresh(time:number):boolean

    /**
     * 重置渲染器
     */
    reset():boolean
}