import "../css/base.css";
import { Controller } from './Controller/Controller';
import { i18n } from "./i18n"
class MfunsDanMaku {
    main() {
        //类型检查
        if (!canvas) {
            throw ReferenceError(i18n.t("canvas is null"))
        }
        new Controller(canvas)
    }
}
//添加进全局
if (globalThis) {
    globalThis.MfunsDanMaku = MfunsDanMaku;
}
export default MfunsDanMaku;