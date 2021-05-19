/**
 * 简单渲染器工厂
 */

import { i18n } from "src/ts/i18n";
import { BaseRenderer } from "./BaseRenderer";
import { RendererInterface } from "./RendererInterface";

export class RendererFactory{
    static rendererList = {
        base:BaseRenderer
    }
    static getRenderInstance(type:string):RendererInterface{
        if (this.rendererList[type]) {
            return new this.rendererList[type]()
        }else{
            throw ReferenceError(i18n.t("Renderer type is null"))
        }
    }
}