
import { UnitTools } from "src/ts/util/UnitTools";
import { DanmakuItemInterface } from "../Danmaku/DanmakuItemInterface";
import { canvasStyle } from "../Style/CanvasStyle";
import { RendererInterface } from "./RendererInterface";

export class BaseRenderer implements RendererInterface{
    addDanmaku(danmaku: DanmakuItemInterface): boolean {
        throw new Error("Method not implemented.");
    }
    refresh(): boolean {
        throw new Error("Method not implemented.");
    }
    protected canvas?:HTMLElement
    setCanvasContainer(canvas: HTMLElement): boolean {
        this.canvas = canvas
        return true
    }
    updateCanvasStyle(style: canvasStyle): boolean {
        if(this.canvas){
            this.canvas.style.width = UnitTools.lengthSrting(style.size.width);
            this.canvas.style.height = UnitTools.lengthSrting(style.size.height);
            this.canvas.style.left = UnitTools.lengthSrting(style.position.x)
            this.canvas.style.top = UnitTools.lengthSrting(style.position.y)
            this.canvas.style.backgroundColor = UnitTools.colorString(style.color)
            return true
        }else{
            return false
        }  
    }
}