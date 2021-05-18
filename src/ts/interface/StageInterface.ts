import { ColorInterface } from "./ColorInterface";
import { PositionInterface } from "./PositionInterface";
import { SizeInterface } from "./SizeInterface";

export interface StageInterface{
    /**
     * 设置舞台的尺寸
     * @param containersSize 容器的尺寸
     */
    stageSize(containersSize:SizeInterface):SizeInterface;
    /**
     * 设置舞台位置
     * @param containersSize 容器的尺寸
     */
    stagePosition(containersSize:SizeInterface):PositionInterface;

    /**
     * 设置舞台背景
     * @param containersSize 容器尺寸
     */
    stageBackgroundColor(containersSize:SizeInterface):ColorInterface;
}

