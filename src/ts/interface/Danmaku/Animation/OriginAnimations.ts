import { CubicAnimations } from "./CubicAnimations";
import { Matrix } from "./Matrix";

/**
 * 可改变动画中心点的动画
 */
export abstract class OriginAnimations extends CubicAnimations {
    origin:number[] = [0,0,0]
    setParams(param: { [idx: string]: any; }): boolean {
        if (!super.setParams(param)) return false;
        this.origin =  param.origin && this.origin
        return true
    }
    getMatrixForCubic(progress: number): number[] | false{
        let arr = this.getMatrixForOrigin(progress)
        if(!arr) return false
        arr = Matrix.mult([
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -this.origin[0], -this.origin[1], -this.origin[2], 1

        ],arr)
        return Matrix.mult(arr,[
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.origin[0], this.origin[1], this.origin[2], 1

        ])
    }
    /**
     * 获取用于计算原坐标点的矩阵
     * @param progress 
     */
    abstract getMatrixForOrigin(progress: number): number[] | false
}