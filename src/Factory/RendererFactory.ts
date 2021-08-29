/**
 * 简单渲染器工厂
 */

import { I18n } from "../i18n";
import { BaseRenderer } from "../core/Renderer/BaseRenderer";
import { RendererInterface } from "../core/Renderer/RendererInterface";
import { CSS3Renderer } from "../core/Renderer/CSS3Renderer/CSS3Renderer";

export class RendererFactory{
    public static rendererList = {
        base:BaseRenderer,
        css3:CSS3Renderer
    }
    public static getRenderInstance(type:string):RendererInterface{
        if (this.rendererList[type]) {
            return new this.rendererList[type]()
        }else{
            throw ReferenceError(I18n.t("Renderer type is null"))
        }
    }
}