import { ColorInterface } from "./ColorInterface";
import { PositionInterface } from "./PositionInterface";
import { SizeInterface } from "./SizeInterface";
/**
 * 画布样式集合
 */
export interface canvasStyle{
    size:SizeInterface,
    color:ColorInterface,
    position:PositionInterface
}