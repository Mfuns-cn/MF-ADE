import { UnitTools } from "src/ts/util/UnitTools";
import { AnimationInterface } from "../../Danmaku/Animation/AnimationInterface";
import { DanmakuItemInterface } from "../../Danmaku/DanmakuItemInterface";
import { DanmakuStyle } from "../../Style/DanmakuStyle";

export interface DanmakuObj {
    element: HTMLElement,
    style: DanmakuStyle
    animation: AnimationInterface
    child: DanmakuObj[]
    start:number
}

export class DanmakuTool {
    /**
   * 递归构建弹幕对象
   * @param danmaku 
   * @returns 
   */
    static recursionDanmaku(danmaku: DanmakuItemInterface[]): DanmakuObj[] {
        let danmakuobj: DanmakuObj[] = []
        danmaku.forEach((danmaku) => {
            let div = this.createDiv(danmaku.getContent())
            this.setStyle(div,danmaku.getStyle());
            let obj: DanmakuObj = {
                element: div,
                animation: danmaku.getAnimation(),
                style: danmaku.getStyle(),
                child: [],
                start:danmaku.startTime()
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
     * 创建一个空div
     * @param content 
     * @returns 
     */
    static createDiv(content: string): HTMLElement {
        let div = document.createElement("div");
        div.style.position = "absolute"
        div.style.top = "0px"
        div.style.left = "0px"
        div.innerText = content
        return div
    }
    
    /**
     * 递归构建element
     * @param danmakuobj 
     * @returns 
     */
     static recursionDiv(danmakuobj:DanmakuObj[]):HTMLElement[]{
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
    /**
     * 将样式设置到元素中
     */
    static setStyle(element:HTMLElement,style:DanmakuStyle){
        for (let key in style) {
            for (const key1 in style[key]) {
               if(typeof style[key][key1] == "object"){
                   
                    element.style[key1] = style[key][key1]?.string()
               }else{
                    element.style[key1] = style[key][key1]
               }
            }
            
        }
    }
    /**
     * 递归设置弹幕动画
     * @param danmaku 
     */
    static recursionStyle(danmaku:DanmakuObj[],canvas:HTMLElement,abstime:number){ 
       
        danmaku.forEach((dan,key)=>{
            //更新弹幕样式
            let time = abstime - dan.start;
            
        
            
            let sty;
            let max;
            if(sty = dan.animation.getStyle(time)){
                this.setStyle(dan.element,sty)
            }
            if(max = dan.animation.getMatrix(time)){
                dan.element.style.transform = UnitTools.Matrix3dString(max);
            }
            //如果都不存在，则表示动画已经完成，销毁元素
            if(!(sty || max)){
                console.log(111);
                
                
                if(dan.element.parentElement){
                    //从父元素删除节点
                    dan.element.parentElement.removeChild(dan.element)
                }else{
                    //否则从canvas里面删除
                    canvas.removeChild(dan.element);
                }
                //并且清空节点
                delete danmaku[key];
            }
            //递归
            this.recursionStyle(dan.child,canvas,time);
        })
    }
}