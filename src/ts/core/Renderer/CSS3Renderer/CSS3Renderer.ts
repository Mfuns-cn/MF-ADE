import { UnitTools } from "src/ts/util/UnitTools";
import { DanmakuItemInterface } from "../../Danmaku/DanmakuItemInterface";
import { CanvasStyle } from "../../Style/CanvasStyle";
import { SizeInterface } from "../../Style/SizeInterface";
import { PxSize } from "../../Style/Unit/PxSize";
import { RendererInterface } from "../RendererInterface";
import { DanmakuObj, DanmakuTool } from "./CssDanmakuObj";


export class CSS3Renderer implements RendererInterface {

    public canvasSize: SizeInterface = {
        width: new PxSize(1920),
        height: new PxSize(1080)
    }
    public canvas?: HTMLElement
    public danmakuList: DanmakuObj[] = []
    public setCanvasContainer(canvas: HTMLElement): boolean {
        this.canvas = canvas
        return true;
    }
    public updateCanvasStyle(style: CanvasStyle): boolean {
        if (this.canvas) {
            this.canvas.style.width = this.canvasSize.width.string();
            this.canvas.style.height =this.canvasSize.height.string();
            this.canvas.style.left = UnitTools.lengthSrting((style.size.width.length - this.canvasSize.width.length) / 2)
            this.canvas.style.top = UnitTools.lengthSrting((style.size.height.length - this.canvasSize.height.length) / 2)
            this.canvas.style.backgroundColor = style.color.string()
            let r: number;// 缩放大小
            if (style.size.width.length / style.size.height.length >= this.canvasSize.width.length / this.canvasSize.height.length) {
                // 横向
                r = style.size.height.length / this.canvasSize.height.length
            } else {
                // 纵向
                r = style.size.width.length / this.canvasSize.width.length
            }
            this.canvas.style.transform = `scale(${r},${r})`

            return true
        } else {
            return false
        }
    }
    public addDanmaku(danmaku: DanmakuItemInterface): boolean {
        if(!this.canvas) { return false }
        let danmakuobj = DanmakuTool.recursionDanmaku([danmaku])
        let eles = DanmakuTool.recursionDiv(danmakuobj)
        eles.forEach((ele) => {
            this.canvas?.appendChild(ele)
        })
        this.danmakuList.push(...danmakuobj);
        // console.log(this.danmakuList);

        return true;
    }



    public refresh(time): boolean {
        if (!this.canvas) {
            return false;
        }

        DanmakuTool.recursionStyle(this.danmakuList,this.canvas,time)
        return true;
    }
    public reset(): boolean {
        // 清空画布

        if(this.canvas){
            this.canvas.innerHTML = "";
        }
        // 清空数组
        this.danmakuList = []
        return true

    }
}
