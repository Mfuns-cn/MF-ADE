

import { DanmakuItemInterface } from "../Danmaku/DanmakuItemInterface";
import { CanvasStyle } from "../Style/CanvasStyle";
import { RendererInterface } from "./RendererInterface";

export class BaseRenderer implements RendererInterface {
    public reset(): boolean {
        throw new Error("Method not implemented.");
    }
    public addDanmaku(_danmaku: DanmakuItemInterface): boolean {
        return false;
    }
    public refresh(): boolean {
        return false
    }
    protected canvas?: HTMLElement
    public setCanvasContainer(canvas: HTMLElement): boolean {
        this.canvas = canvas
        return true
    }
    public updateCanvasStyle(style: CanvasStyle): boolean {
        if (this.canvas) {
            this.canvas.style.width = style.size.width.string();
            this.canvas.style.height = style.size.height.string();
            this.canvas.style.left = style.position.x.string()
            this.canvas.style.top = style.position.y.string()
            this.canvas.style.backgroundColor = style.color.string()
            return true
        } else {
            return false
        }
    }
}