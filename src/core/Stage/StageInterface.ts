import { Color } from "../Style/Unit/Color";
import { PositionInterface } from "../Style/PositionInterface";
import { RendererInterface } from "../Renderer/RendererInterface";
import { SizeInterface } from "../Style/SizeInterface";
import { TimeLineInterface } from "../../TimeLine/TimeLineInterface";

export interface StageInterface {
  /**
   * 获取舞台位置
   * @param containersSize 容器的尺寸
   * @param stageSize 舞台的尺寸
   */
  stagePosition(
    containersSize: SizeInterface,
    stageSize: SizeInterface
  ): PositionInterface;
  /**
   * 获取舞台背景
   * @param containersSize 容器尺寸
   */
  stageBackgroundColor(containersSize: SizeInterface): Color;
  /**
   * 获取舞台的尺寸
   * @param containersSize 容器的尺寸
   */
  stageSize(containersSize: SizeInterface): SizeInterface;

  /**
   * 接收渲染器对象
   * @param render 渲染器对象
   */
  stageRenderer(render: RendererInterface): boolean;

  /**
   * 设置时间轴对象
   */
  timeLine(timeLine: TimeLineInterface): boolean;

  /**
   * 获取时间轴对象
   */
  getTimeLine(): TimeLineInterface;
  /**
   * 获取渲染器对象
   */
  getRenderer(): RendererInterface | null;

  /**
   * 刷新舞台
   */
  refresh(time: number): boolean;

  /**
   * 期望的渲染器类型
   */
  rendererType(): string;

  /**
   * 期望的弹幕时间轴类型
   */
  timeLineType(): string;
  /**
   * 期望的附属组件类型
   */
  attachedType(): string;
  /**
   * 重置
   */
  reset(): boolean;
}
