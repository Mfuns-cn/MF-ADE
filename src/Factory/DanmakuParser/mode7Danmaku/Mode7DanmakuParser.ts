import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";
import { DanmakuEvent } from "../../../Event/DanmakuEvent";
import { DanmakuEventType } from "../../../Event/DanmakuEventType";
import { AnimationFactory } from "../../../Factory/AnimationFactory";
import { I18n } from "../../../i18n";
import { DanmakuFactory } from "../DanmakuFactory";
import { DanmakuParserInterface } from "../DanmakuParserInterface";

export class Mode7DanmakuParser implements DanmakuParserInterface {
  /**
   * m7 弹幕解析器
   * 弹幕格式示例
   * [
   *  {
   *    content:string,//弹幕内容
   *    start:number//开始时间
   *    size:number,//文字大小
   *    color:"#ffffffff"//文字颜色
   *    weight:400,//文本粗细
   *    shadow:true,//阴影
   *    stroke:number,//描边
   *    strokeColor:"#fffffff",//描边颜色
   *    font:string,//字体
   *    zIndex:1,//层级,
   *    linear:bool,//线性动画
   *    animations:[//动画属性
   *      {
   *        duration:number//动画时间
   *        x:number,//x
   *        y:number,//y
   *        opacity:number//透明度
   *        rx:number,//旋转
   *        ry:number,
   *        rz:number,
   *        scale:number//缩放
   *      },
   *      ....
   *    ]
   *  }
   * ]
   * @param content
   */

  public parser(content: string): DanmakuItemInterface[] {
    try {
      let json: any[] = JSON.parse(content);
      return this.getDanmaku(json);
    } catch (e) {
      // 触发弹幕格式无效事件
      DanmakuEvent.dispatch(
        DanmakuEventType.DANMAKU_JSON_INVALID,
        I18n.t("Danmaku parser fail")
      );
      console.warn(I18n.t("Danmaku parser fail"));
      console.warn(e);
      return [];
    }
  }

  protected getDanmaku(list: any[]): DanmakuItemInterface[] {
    let danmakulist: DanmakuItemInterface[] = [];
    list.forEach((danmaku) => {
      let danmakuObj = DanmakuFactory.getDanmakuInstance("text");
      let cubic = danmaku.linear ? [0, 0, 1, 1] : [0.42, 0, 1, 1];
      danmakuObj.setParams({
        content: danmaku.content,
        start: danmaku.start || 0,
        style: this.getStyle(danmaku),
        animation: AnimationFactory.getAnimations("list", {
          cubic,
          animations: this.getAnimations(danmaku.animations || []),
        }), // 将列表组成一个list,
      });
      danmakulist.push(danmakuObj);
    });
    return danmakulist;
  }
  protected getStyle(danmaku: any) {
    return {
      fontSize: `${danmaku.size || 40}px`,
      color: danmaku.color || "#000",
      fontWeight: danmaku.weight || 400,
      textShadow: danmaku.shadow ? "5px 5px 5px rgba(0,0,0,0.4)" : "",
      "-webkit-text-stroke": `${danmaku.stroke || 0}px ${
        danmaku.strokeColor || "#000"
      }`,
      fontFamily: danmaku.font || "黑体",
      zIndex: danmaku.zIndex || 1,
    };
  }
  /**
   * 封装动画
   *  {
   *     duration:number//动画时间
   *     x:number,//x
   *     y:number,//y
   *     opacity:number//透明度
   *     rx:number,//旋转
   *     ry:number,
   *     rz:number,
   *     scale:number//缩放
   *   }
   * @param animations
   */
  protected getAnimations(animations: any[]) {
    let animationsList: any[] = [];
    let lastAnimation;

    if (!Array.isArray(animations) || animations === []) {
      return animationsList;
    }
    animations.forEach((animation) => {
      let {
        x: x2 = 0,
        y: y2 = 0,
        opacity: o2 = 1,
        rx: rx2 = 0,
        ry: ry2 = 0,
        rz: rz2 = 0,
        scale: s2 = 1,
      } = animation;
      if (s2 === 0) {
        s2 = 1;
      }
      let danmakuObj: { type: string; animations: any[] } = {
        type: "group",
        animations: [],
      };
      if (!lastAnimation) {
        // 第一次，添加初始位置

        // xy 移动
        danmakuObj.animations.push({
          type: "static",
          duration: 0,
          x: x2,
          y: y2,
        });
        // 旋转
        danmakuObj.animations.push({
          type: "rotateX",
          duration: 0,
          angle: {
            end: rx2,
          },
        });
        danmakuObj.animations.push({
          type: "rotateY",
          duration: 0,
          angle: {
            end: ry2,
          },
        });
        danmakuObj.animations.push({
          type: "rotateZ",
          duration: 0,
          angle: {
            end: rz2,
          },
        });
        // 缩放
        danmakuObj.animations.push({
          type: "scale",
          duration: 0,
          scale: {
            x2: s2,
            y2: s2,
            z2: s2,
          },
        });
      } else {
        let {
          x: x1 = 0,
          y: y1 = 0,
          duration = 1000,
          opacity: o1 = 1,
          rx: rx1 = 0,
          ry: ry1 = 0,
          rz: rz1 = 0,
        } = lastAnimation;

        // 移动
        danmakuObj.animations.push({
          type: "translate",
          duration,
          path: {
            x2: x2 - x1,
            y2: y2 - y1,
          },
        });
        // 透明度
        danmakuObj.animations.push({
          type: "opacity",
          duration,
          opacity: [o1, o2],
        });
        // 旋转
        danmakuObj.animations.push({
          type: "rotateX",
          duration,
          angle: {
            end: rx2 - rx1,
          },
        });
        danmakuObj.animations.push({
          type: "rotateY",
          duration,
          angle: {
            end: ry2 - ry1,
          },
        });
        danmakuObj.animations.push({
          type: "rotateZ",
          duration,
          angle: {
            end: rz2 - rz1,
          },
        });
        // 缩放
        danmakuObj.animations.push({
          type: "scale",
          duration,
          scale: {
            x2: s2,
            y2: s2,
            z2: s2,
          },
        });
        console.log(s2);
      }

      animationsList.push(danmakuObj);
      lastAnimation = animation;
    });
    let { duration = 1000 } = lastAnimation;
    animationsList.push({
      type: "static",
      duration,
    });
    // console.log(animationsList);
    return animationsList;
  }
}
