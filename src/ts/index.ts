import "../css/base.css";
import { Controller } from './Controller/Controller';
import { i18n } from "./i18n"
import { InitConfigInterface } from "./core/InitConfigInterface";
import { TestStage } from "./core/Stage/TestStage";
export  class MFADE {

    controller:Controller; 
    constructor(config: InitConfigInterface) {
        //类型检查
        if (!config.containers) {
            throw ReferenceError(i18n.t("Containers is null"))
        }
        this.controller = new Controller(config.containers)
        this.controller.addGetDanmakuFunction("advance",config.danmaku)
        this.controller.registStage(new TestStage(), 1)
        this.controller.mount()
        //监听大小变化
        // window.addEventListener("resize", () => {
        //     this.controller.resize()
        // })
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
	resize(){
		this.controller.resize()
	}
    reset(){
        this.controller.resetDanmaku(1)
        this.controller.reset()
    }

}

//添加进全局
if (typeof globalThis !== "undefined") {
    globalThis.MFADE = MFADE;
}else{
    window["MFADE"] = MFADE;
}
