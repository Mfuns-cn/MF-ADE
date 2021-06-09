import "../css/base.css";
import { Controller } from './Controller/Controller';
import { i18n } from "./i18n"
import { InitConfigInterface } from "./interface/InitConfigInterface";
import { TestStage } from "./interface/Stage/TestStage";
class MfunsDanMaku {

    controller:Controller; 
    main(config: InitConfigInterface) {
        //类型检查
        if (!config.containers) {
            throw ReferenceError(i18n.t("Containers is null"))
        }
        this.controller = new Controller(config.containers)
        this.controller.addGetDanmakuFunction("advance",config.danmaku)
        this.controller.registStage(new TestStage(), 1)
        this.controller.mount()
        //监听大小变化
        window.addEventListener("resize", () => {
            this.controller.resize()
        })
    }
    pause(){
        this.controller.pause()
    }
    start(){
        this.controller.start()
    }
    skip(time:number){
        this.controller.skip(time)
    }
    time(){
        return this.controller.getTime()
    }
    reset(){
        this.controller.reset()
    }
        
}
//添加进全局
if (globalThis) {
    globalThis.MfunsDanMaku = MfunsDanMaku;
}
export default MfunsDanMaku;