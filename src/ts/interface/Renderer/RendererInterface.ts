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

}