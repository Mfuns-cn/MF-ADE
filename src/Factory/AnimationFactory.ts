import { AnimationInterface } from "../core/Animation/Base/AnimationInterface";
import { GroupAnimations } from "../core/Animation/CompositeAnimation/GroupAnimations";
import { ListAnimations } from "../core/Animation/CompositeAnimation/ListAnimations";
import { OpacityAnimations } from "../core/Animation/styleAnimations/OpacityAnimations";
import { RepeatAnimations } from "../core/Animation/CompositeAnimation/RepeatAnimations";
import { ScaleAnimations } from "../core/Animation/TransformsAnimations/ScaleAnimations";
import { TranslateAnimation } from "../core/Animation/TransformsAnimations/TranslateAnimation";
import { RotationXAnimation } from "../core/Animation/TransformsAnimations/RotationXAnimation";
import { RotationYAnimation } from "../core/Animation/TransformsAnimations/RotationYAnimation";
import { RotationZAnimation } from "../core/Animation/TransformsAnimations/RotationZAnimation";
import { StaticAnimation } from "../core/Animation/TransformsAnimations/StaticAnimation";

export class AnimationFactory {
    public static animationList = {
        "static":StaticAnimation,// 静态定位
        "translate":TranslateAnimation,// 平移
        "rotateX":RotationXAnimation,// x轴旋转
        "rotateY":RotationYAnimation,// y轴旋转
        "rotateZ":RotationZAnimation,// z轴旋转
        "scale":ScaleAnimations,// 缩放
        "list":ListAnimations,// 动画列表
        "group":GroupAnimations,// 动画组
        "repeat":RepeatAnimations,// 重复动画
        "opacity":OpacityAnimations
    }

    public static getAnimations(type:string,params):AnimationInterface | false{
        if(this.animationList[type]){
            // console.log(params);
            let ani = new this.animationList[type]()
            // console.log(ani);

            ani.setParams(params)
            return ani;
        }
        return false;
    }
    public static getAnimationsList(list:{key: { [idx: string]: any; }}[]):AnimationInterface[]{
        let animationList:AnimationInterface[] = []

        list?.forEach((val)=>{
            let ani =  this.getAnimations(val["type"],val)
            if(ani){
                animationList.push(ani);
            }
        })
        return animationList
    }
}