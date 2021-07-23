import "../css/base.css";
import { Controller } from './Controller/Controller';
import { I18n } from "./i18n"
import { InitConfigInterface } from "./core/InitConfigInterface";
import { TestStage } from "./core/Stage/TestStage";
export  class MFADE {


    public controller:Controller;
    constructor(config: InitConfigInterface) {
        // 类型检查
        if (!config.containers) {
            throw ReferenceError(I18n.t("Containers is null"))
        }
        this.controller = new Controller(config.containers)
        this.controller.addGetDanmakuFunction("advance",config.danmaku)
        this.controller.registStage(new TestStage(), 1)
        this.controller.mount()
        // 监听大小变化
        window.addEventListener("resize", () => {
            this.controller.resize()
        })

    }

    public pause(){
        this.controller.pause()
    }
    public start(){
        this.controller.start()
    }
    public skip(time:number){
        this.controller.skip(time)
    }
    public time(){
        return this.controller.getTime()
    }
	   public resize(){
		this.controller.resize()
	}
    public reset(){
        this.controller.resetDanmaku(1)
        this.controller.reset()
    }

}

// 添加进全局
if (typeof globalThis !== "undefined") {
    globalThis.MFADE = MFADE;
}else{
    window["MFADE"] = MFADE;
}
