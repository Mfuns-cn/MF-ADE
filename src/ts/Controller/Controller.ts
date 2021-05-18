import { SizeInterface } from "../interface/SizeInterface";

/**
 * 控制器 ，统一管理整个弹幕系统
 */
export class Controller {
    /**
     * 画布对象
     */
    protected canvas: Element;
    /**
     * 实时的Css样式表
     */
    protected canvasStyle: CSSStyleDeclaration;


    constructor(canvas: Element) {
        this.canvas = canvas
        // console.log(this.canvas);
        //获取实时的style对象，当大小发生变化时，会更新自身
        this.canvasStyle = window.getComputedStyle(canvas);
    }

    /**
     * 刷新画布尺寸
     */
    public getCanvasSize(): SizeInterface {
        return {
            width: parseInt(this.canvasStyle.width),
            height: parseInt(this.canvasStyle.height)
        }
    }
}