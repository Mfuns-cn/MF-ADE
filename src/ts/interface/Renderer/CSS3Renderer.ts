import { UnitTools } from "src/ts/util/UnitTools";
import { AnimationInterface } from "../Danmaku/Animation/AnimationInterface";
import { DanmakuItemInterface } from "../Danmaku/DanmakuItemInterface";
import { canvasStyle } from "../Style/CanvasStyle";
import { RendererInterface } from "./RendererInterface";


export class CSS3Renderer implements RendererInterface {
    canvas?: HTMLElement
    danmakuList: DanmakuObj[] = []
    setCanvasContainer(canvas: HTMLElement): boolean {
        this.canvas = canvas
        return true;
    }
    updateCanvasStyle(style: canvasStyle): boolean {
        if (this.canvas) {
            this.canvas.style.width = UnitTools.lengthSrting(style.size.width);
            this.canvas.style.height = UnitTools.lengthSrting(style.size.height);
            this.canvas.style.left = UnitTools.lengthSrting(style.position.x)
            this.canvas.style.top = UnitTools.lengthSrting(style.position.y)
            this.canvas.style.backgroundColor = UnitTools.colorString(style.color)
            return true
        } else {
            return false
        }
    }
    addDanmaku(danmaku: DanmakuItemInterface): boolean {
        let danmakuobj = this.recursionDanmaku([danmaku])
        let eles = this.recursionDiv(danmakuobj);
        eles.forEach((ele)=>{
            this.canvas?.appendChild(ele)
        })
        return true;
    }

    /**
     * 递归构建弹幕对象
     * @param danmaku 
     * @returns 
     */
    recursionDanmaku(danmaku: DanmakuItemInterface[]): DanmakuObj[] {
        let danmakuobj: DanmakuObj[] = []
        danmaku.forEach((danmaku) => {
            let div = this.createDiv(danmaku.getContent())
            let obj: DanmakuObj = {
                element: div,
                animation: danmaku.getAnimation(),
                child: []
            }
            let child = danmaku.getChild()
            let childObj;
            if (child) {
                childObj = this.recursionDanmaku(child)
            }

            obj.child = childObj;
            danmakuobj.push(obj);
        })
        return danmakuobj
    }

    /**
     * 递归构建element
     * @param danmakuobj 
     * @returns 
     */
    recursionDiv(danmakuobj:DanmakuObj[]):HTMLElement[]{
        let array:Array<HTMLElement> = []
        danmakuobj.forEach((item)=>{
            let element = item.element;
            if (item.child){
                let eles = this.recursionDiv(item.child)
                eles.forEach((ele)=>{
                    element.appendChild(ele);
                })
            }
            array.push(element);
        })
        return array
    }
    refresh(): boolean {
        throw new Error("Method not implemented.");
    }
    createDiv(content: string): HTMLElement {
        let div = document.createElement("div");
        div.style.position = "absolute"
        div.style.top = "0px"
        div.style.left = "0px"
        div.innerText = content
        return div
    }
}
interface DanmakuObj {
    element: HTMLElement,
    animation: AnimationInterface
    child: DanmakuObj[]
}