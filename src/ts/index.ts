import "../css/base.css";
import { Controller } from './Controller/Controller';
import { i18n } from "./i18n"
import { InitConfigInterface } from "./interface/InitConfigInterface";
import { BaseStage } from "./interface/Stage/BaseStage";
class MfunsDanMaku {
    main(config:InitConfigInterface) {
        //类型检查
        if (!config.containers) {
            throw ReferenceError(i18n.t("Containers is null"))
        }
         let c =  new Controller(config.containers)
         c.registStage(new BaseStage(),1)
         c.mount()

         //监听大小变化
         window.addEventListener("resize",()=>{
             c.resize()
         })
    }
}
//添加进全局
if (globalThis) {
    globalThis.MfunsDanMaku = MfunsDanMaku;
}
export default MfunsDanMaku;