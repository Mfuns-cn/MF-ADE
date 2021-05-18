import "../css/base.css";
import { Controller } from './Controller/Controller';
import { i18n } from "./i18n"
import { InitConfigInterface } from "./interface/InitConfigInterface";
class MfunsDanMaku {
    main(config:InitConfigInterface) {
        //类型检查
        if (!config.containers) {
            throw ReferenceError(i18n.t("Containers is null"))
        }
        new Controller(config.containers).mount()
    }
}
//添加进全局
if (globalThis) {
    globalThis.MfunsDanMaku = MfunsDanMaku;
}
export default MfunsDanMaku;