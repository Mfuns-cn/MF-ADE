import { Color } from "./Unit/Color";
import { PositionInterface } from "./PositionInterface";
import { SizeInterface } from "./SizeInterface";
/**
 * 画布样式集合
 */
export interface CanvasStyle{
    size:SizeInterface,
    color:Color,
    position:PositionInterface
}