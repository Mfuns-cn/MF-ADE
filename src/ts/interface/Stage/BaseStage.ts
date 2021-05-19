import { RendererInterface } from "../Renderer/RendererInterface";
import { ColorInterface } from "../Style/ColorInterface";
import { PositionInterface } from "../Style/PositionInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { StageInterface } from "./StageInterface";

export class BaseStage implements StageInterface {

    protected randerer:RendererInterface;
    stageSize(containersSize: SizeInterface): SizeInterface {
        return {
            width: containersSize.width * 0.8,
            height: containersSize.height * 0.3
        }
    }
    stagePosition(containersSize: SizeInterface, stageSize: SizeInterface): PositionInterface {
        return {
            x: (containersSize.width - stageSize.width) / 2,
            y: containersSize.height - stageSize.height
        }
    }
    stageBackgroundColor(): ColorInterface {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: .1
        }
    }
    stageRenderer(render: RendererInterface): boolean {
        this.randerer = render
        return true;
    }

}