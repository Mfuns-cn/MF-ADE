import { RendererInterface } from "../Renderer/RendererInterface";
import { Color } from "../Style/Unit/Color";
import { PositionInterface } from "../Style/PositionInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { StageInterface } from "./StageInterface";
import { PxSize } from "../Style/Unit/PxSize";
import { TimeLineInterface } from "src/ts/TimeLine/TimeLineInterface";
import { I18n } from "src/ts/i18n";
import { TimeLineDanmaku } from "src/ts/TimeLine/TimeLineDanmaku";

export abstract class BaseStage implements StageInterface {
  protected renderer?: RendererInterface;
  protected timeLineObj?: TimeLineInterface;
  public stageSize(containersSize: SizeInterface): SizeInterface {
    return {
      width: containersSize.width,
      height: containersSize.height,
    };
  }
  public stagePosition(): PositionInterface {
    return {
      x: new PxSize(0),
      y: new PxSize(0),
    };
  }
  public stageBackgroundColor(): Color {
    return new Color(0, 0, 0, 0);
  }
  public stageRenderer(render: RendererInterface): boolean {
    this.renderer = render;
    return true;
  }
  public getRenderer(): RendererInterface {
    if (this.renderer) {
      return this.renderer;
    } else {
      throw ReferenceError(I18n.t("renderer is null"));
    }
  }
  public timeLine(timeLine: TimeLineInterface): boolean {
    this.timeLineObj = timeLine;
    return true;
  }
  public refresh(time: number): boolean {
    if (!this.renderer) {
      return false;
    }
    // console.log(time);

    let list: { skip: boolean; DanmakuList: TimeLineDanmaku[] };
    list = this.timeLineObj?.getDanmakuList(time) || {
      skip: false,
      DanmakuList: [],
    };
    if (list) {
      if (list.skip) {
        this.renderer?.reset();
      }

      list.DanmakuList.forEach((val) => {
        this.renderer?.addDanmaku(val.danmaku);
      });
    }
    this.renderer.refresh(time);
    return true;
  }
  public rendererType(): string {
    return "css3";
  }
  public timeLineType(): string {
    return "advance";
  }

  public reset(): boolean {
    this?.renderer?.reset();
    return true;
  }
  public getTimeLine(): TimeLineInterface {
    if (!this.timeLineObj) {
      throw ReferenceError(I18n.t("Time line is null"));
    }
    return this.timeLineObj;
  }
}
