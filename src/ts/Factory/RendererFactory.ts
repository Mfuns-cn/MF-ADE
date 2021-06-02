/**
 * 简单渲染器工厂
 */

import { i18n } from "src/ts/i18n";
import { BaseRenderer } from "src/ts/interface/Renderer/BaseRenderer";
import { RendererInterface } from "src/ts/interface/Renderer/RendererInterface";
import { CSS3Renderer } from "../interface/Renderer/CSS3Renderer/CSS3Renderer";

export class RendererFactory{
    static rendererList = {
        base:BaseRenderer,
        css3:CSS3Renderer
    }
    static getRenderInstance(type:string):RendererInterface{
        if (this.rendererList[type]) {
            return new this.rendererList[type]()
        }else{
            throw ReferenceError(i18n.t("Renderer type is null"))
        }
    }
}