import { UnitTools } from "src/ts/util/UnitTools";
import { DanmakuItemInterface } from "../../Danmaku/DanmakuItemInterface";
import { canvasStyle } from "../../Style/CanvasStyle";
import { SizeInterface } from "../../Style/SizeInterface";
import { PxSize } from "../../Style/Unit/PxSize";
import { RendererInterface } from "../RendererInterface";
import { DanmakuObj, DanmakuTool } from "./CssDanmakuObj";


export class CSS3Renderer implements RendererInterface {
    canvasSize: SizeInterface = {
        width: new PxSize(1600),
        height: new PxSize(900)
    }
    canvas?: HTMLElement
    danmakuList: DanmakuObj[] = []
    setCanvasContainer(canvas: HTMLElement): boolean {
        this.canvas = canvas
        return true;
    }
    updateCanvasStyle(style: canvasStyle): boolean {
        if (this.canvas) {
            this.canvas.style.width = this.canvasSize.width.string();
            this.canvas.style.height =this.canvasSize.height.string();
            this.canvas.style.left = UnitTools.lengthSrting((style.size.width.length - this.canvasSize.width.length) / 2)
            this.canvas.style.top = UnitTools.lengthSrting((style.size.height.length - this.canvasSize.height.length) / 2)
            this.canvas.style.backgroundColor = style.color.string()
            let r: number;//缩放大小
            if (style.size.width.length / style.size.height.length >= this.canvasSize.width.length / this.canvasSize.height.length) {
                //横向
                r = style.size.height.length / this.canvasSize.height.length
            } else {
                //纵向
                r = style.size.width.length / this.canvasSize.width.length
            }
            this.canvas.style.transform = "scale(" + r + "," + r + ")"
            return true
        } else {
            return false
        }
    }
    addDanmaku(danmaku: DanmakuItemInterface): boolean {
        if(!this.canvas) return false
        let danmakuobj = DanmakuTool.recursionDanmaku([danmaku]) 
        let eles = DanmakuTool.recursionDiv(danmakuobj)
        eles.forEach((ele) => {
            this.canvas?.appendChild(ele)
        })
        this.danmakuList.push(...danmakuobj);
        DanmakuTool.recursionStyle(this.danmakuList,this.canvas,0)
        // console.log(this.danmakuList);
        
        return true;
    }



    refresh(time): boolean {
        if (!this.canvas) {
            return false;
        }
        DanmakuTool.recursionStyle(this.danmakuList,this.canvas,time)
        return true;
    }

}
