import { LinearAnimation } from "../Danmaku/Animation/LinearAnimation";
import { BaseDanmaku } from "../Danmaku/BaseDanmaku";
import { RendererInterface } from "../Renderer/RendererInterface";
import { ColorInterface } from "../Style/ColorInterface";
import { PositionInterface } from "../Style/PositionInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { StageInterface } from "./StageInterface";

export abstract class BaseStage implements StageInterface {

    protected renderer: RendererInterface;
    stageSize(containersSize: SizeInterface): SizeInterface {
        return {
            width: containersSize.width,
            height: containersSize.height
        }
    }
    stagePosition(): PositionInterface {
        return {
            x:0,
            y:0
        }
    }
    stageBackgroundColor(): ColorInterface {
        return { r: 0, g: 0, b: 0, a: 0 }
    }
    stageRenderer(render: RendererInterface): boolean {
        this.renderer = render
        return true;
    }
    getRenderer(): RendererInterface {
        return this.renderer
    }
    test(){
       this.getRenderer().addDanmaku(new BaseDanmaku("111"))
    }


}