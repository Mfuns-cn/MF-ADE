import { ColorInterface } from "../Style/ColorInterface";
import { PositionInterface } from "../Style/PositionInterface";
import { RendererInterface } from "../Renderer/RendererInterface";
import { SizeInterface } from "../Style/SizeInterface";

export interface StageInterface{
    /**
     * 设置舞台的尺寸
     * @param containersSize 容器的尺寸
     */
    stageSize(containersSize:SizeInterface):SizeInterface;
    /**
     * 设置舞台位置
     * @param containersSize 容器的尺寸
     * @param stageSize 舞台的尺寸
     */
    stagePosition(containersSize:SizeInterface,stageSize:SizeInterface):PositionInterface;

    /**
     * 设置舞台背景
     * @param containersSize 容器尺寸
     */
    stageBackgroundColor(containersSize:SizeInterface):ColorInterface;

    /**
     * 接收渲染器对象
     * @param render 渲染器对象
     */
    stageRenderer(render:RendererInterface):boolean;
}

