import { RendererInterface } from "../Renderer/RendererInterface";
import { Color } from "../Style/Unit/Color";
import { PositionInterface } from "../Style/PositionInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { StageInterface } from "./StageInterface";
import { PxSize } from "../Style/Unit/PxSize";
import { TimeLineInterface } from "src/ts/TimeLine/TimeLineInterface";
import { i18n } from "src/ts/i18n";
import { TimeLineDanmaku } from "src/ts/TimeLine/TimeLineDanmaku";

export abstract class BaseStage implements StageInterface {
   

    protected renderer?: RendererInterface;
    protected timeLineObj?: TimeLineInterface
    stageSize(containersSize: SizeInterface): SizeInterface {
        return {
            width: containersSize.width,
            height: containersSize.height
        }
    }
    stagePosition(): PositionInterface {
        return {
            x:new PxSize(0),
            y:new PxSize(0)
        }
    }
    stageBackgroundColor(): Color {
        return  new Color(0,0,0,0);
    }
    stageRenderer(render: RendererInterface): boolean {
        this.renderer = render
        return true;
    }
    getRenderer(): RendererInterface {
        if(this.renderer){
            return this.renderer
        }else{
            throw ReferenceError(i18n.t("renderer is null"))
        }
        
    }
    timeLine(timeLine: TimeLineInterface): boolean {
        this.timeLineObj = timeLine;
        return true;
    }
    refresh(time):boolean{
        if(!this.renderer) return false;
        let list:{ skip: boolean; DanmakuList: TimeLineDanmaku[]; }
        if(list = this.timeLineObj?.getDanmakuList(time) || {skip:false,DanmakuList:[]}){
            if(list.skip){
                // console.log(list.skip);

                
                this.renderer?.reset()
            }
            
            list.DanmakuList.forEach((val)=>{ 
                this.renderer?.addDanmaku(val.danmaku)
            })
        }
        this.renderer.refresh(time)
        return true
    }
    rendererType(): string {
        return "css3"
    }
    timeLineType(): string {
        return "advance"
    }

    reset(): boolean {
        this?.renderer?.reset()
        return true
    
    }
}