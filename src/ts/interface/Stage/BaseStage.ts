import { RendererInterface } from "../Renderer/RendererInterface";
import { Color } from "../Style/Unit/Color";
import { PositionInterface } from "../Style/PositionInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { StageInterface } from "./StageInterface";
import { PxSize } from "../Style/Unit/PxSize";

export abstract class BaseStage implements StageInterface {

    i:number = 0
    protected renderer: RendererInterface;
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
        return this.renderer
    }

    refresh():boolean{
        if(!this.renderer) return false;
        // console.log
        this.renderer.refresh(this.i++)
        return true
    }

}