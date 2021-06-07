import { GroupAnimations } from "../interface/Danmaku/Animation/GroupAnimations";
import { ListAnimations } from "../interface/Danmaku/Animation/ListAnimations";
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
        "group":GroupAnimations//动画组
    }

    static getAnimations(type:string,params){
        if(this.animationList[type]){
            let ani = new this.animationList[type]()
            ani.setParams(params)
        }
    }
}