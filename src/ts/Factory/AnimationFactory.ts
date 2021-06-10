import { AnimationInterface } from "../interface/Danmaku/Animation/AnimationInterface";
import { GroupAnimations } from "../interface/Danmaku/Animation/GroupAnimations";
import { ListAnimations } from "../interface/Danmaku/Animation/ListAnimations";
import { RepeatAnimations } from "../interface/Danmaku/Animation/RepeatAnimations";
import { RotationXAnimation } from "../interface/Danmaku/Animation/RotationXAnimation";
import { RotationYAnimation } from "../interface/Danmaku/Animation/RotationYAnimation";
import { RotationZAnimation } from "../interface/Danmaku/Animation/RotationZAnimation";
import { ScaleAnimations } from "../interface/Danmaku/Animation/ScaleAnimations";
import StaticAnimation from "../interface/Danmaku/Animation/StaticAnimation";
import { TranslateAnimation } from "../interface/Danmaku/Animation/TranslateAnimation";

export class AnimationFactory {
    static animationList = {
        "static":StaticAnimation,//静态定位
        "translate":TranslateAnimation,//平移
        "rotateX":RotationXAnimation,// x轴旋转
        "rotateY":RotationYAnimation,//y轴旋转
        "rotateZ":RotationZAnimation,//z轴旋转
        "scale":ScaleAnimations,//缩放
        "list":ListAnimations,//动画列表
        "group":GroupAnimations,//动画组
        "repeat":RepeatAnimations//重复动画
    }

    static getAnimations(type:string,params):AnimationInterface | false{
        if(this.animationList[type]){
            // console.log(params);
            let ani = new this.animationList[type]()
            // console.log(ani);
            
            ani.setParams(params)
            return ani;
        }
        return false;
    }
    static getAnimationsList(list:{key: { [idx: string]: any; }}[]):AnimationInterface[]{
        let animationList:AnimationInterface[] = []
        console.log(list);
        
        list?.forEach((val)=>{
            let ani =  this.getAnimations(val["type"],val)
            if(ani){
                animationList.push(ani);
            }
        })
        return animationList
    }
}