
/**
 * 控制器 ，统一管理整个弹幕系统
 */
export class Controller{

    canvas:Element;
    canvasStyle:CSSStyleDeclaration;

    constructor(canvas:Element){
        this.canvas = canvas
        // console.log(this.canvas);
        //获取实时的style对象，当大小发生变化时，会更新自身
        this.canvasStyle = window.getComputedStyle(canvas);
        // console.log(this.canvasStyle);
        
        //获取宽高

    }
}