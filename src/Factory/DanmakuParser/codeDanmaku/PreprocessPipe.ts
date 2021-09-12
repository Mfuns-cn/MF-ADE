import { DanmakuDefaultAttr } from "./DanmakuDefaultAttr";
import { DanamkuExtends } from "./DanmakuExtends";
import { DanmakuPosition } from "./DanmakuPosititon";
import { DanmakuValidate } from "./DanmakuValidate";
import { JsonPreprocessInterface } from "./JsonPreprocessInterface";

/**
 * 弹幕预渲染管道
 */
export class PreprocessPipe implements JsonPreprocessInterface {
  protected list: JsonPreprocessInterface[] = [
    new DanmakuValidate(), // 弹幕格式验证
    new DanamkuExtends(), // 弹幕继承模块
    new DanmakuPosition(), // 弹幕xyz属性语法糖
    new DanmakuDefaultAttr(), // 弹幕默认属性设置
  ];
  public process(json: any, index: number) {
    // 初始化当前的弹幕
    let danmaku: any = json;
    this.list.forEach((value) => {
      let tmpDanmaku = value.process(danmaku, index);
      // 如果中途有任何一个环节出错，就退出
      if (tmpDanmaku === false) {
        return false;
      }
      danmaku = tmpDanmaku;
    });
    return danmaku;
  }
}
