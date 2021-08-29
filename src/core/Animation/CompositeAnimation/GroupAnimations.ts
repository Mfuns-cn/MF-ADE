import { deepMerge } from "../../../util/deepMerge";
import { AnimationFactory } from "../../../Factory/AnimationFactory";
import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "../Base/AnimationInterface";
import { CubicAnimations } from "../Base/CubicAnimations";
import { Matrix } from "../Base/Matrix";

/**
 * 动画组，用于多个动画并行播放
 */
export class GroupAnimations extends CubicAnimations {
  public animations: AnimationInterface[] = [];
  /**
   * 每个动画结束的累计矩阵
   */
  public cumulativeMatrix: number[][] = [];
  public duration: number = 0;
  public setParams(param: { [idx: string]: any }): boolean {
    super.setParams(param);

    this.animations = AnimationFactory.getAnimationsList(
      param?.animations || []
    );
    // 计算出最大的动画时长
    this.animations.forEach((val, key) => {
      let dur = val.getDuration();
      // 计算最后一帧
      this.cumulativeMatrix[key] = val.getMatrix(dur) || Matrix.getNullMatrix();
      if (dur > this.duration) {
        // 这里覆盖了父类的属性
        // 实际上，只有父类的时长不够，才会被更新
        this.duration = val.getDuration();
      }
    });

    return true;
  }
  public getCubicStyle(_progress: number, time: number): false | DanmakuStyle {
    /**
     * 合并样式，由于样式的特殊性，如果存在冲突的样式，后面的会覆盖前面的
     */
    let style: DanmakuStyle = { boxStyle: {}, fontStyle: {} };
    let noneStyle = true;
    for (const animation of this.animations) {
      let style2 = animation.getStyle(time);
      if (style2) {
        noneStyle = false;
        style = deepMerge(style, style2);
      }
    }
    // for(let i = 0;i<this.animations.length;i++){
    //     let style2 = this.animations[i].getStyle(time)
    //     if(style2){
    //         noneStyle = false;
    //         style = dseepMerge(style,style2);
    //     }

    // }
    if (noneStyle) {
      return false;
    }
    return style;
  }
  public getMatrixForCubic(_progress: number, time: number): false | number[] {
    // 建立一个空白矩阵
    let arr: number[] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    // 倒着计算所有的矩阵
    for (let i = this.animations.length - 1; i >= 0; i--) {
      let matrix = this.animations[i].getMatrix(time);
      // console.log(matrix);

      if (matrix) {
        arr = Matrix.mult(arr, matrix);
      } else {
        arr = Matrix.mult(arr, this.cumulativeMatrix[i]);
      }
    }

    return arr;
  }
}
