import { DanmakuItemInterface } from "../../../core/Danmaku/DanmakuItemInterface";
import { DanmakuDelay } from "./DanmakuDelay";
import { DanmakuThen } from "./DanmakuThen";
import { JsonPostprocessInterface } from "./JsonPostprocessInterface";
/**
 * 后渲染管道
 */
export class PostprocessPipe implements JsonPostprocessInterface {
  protected list: JsonPostprocessInterface[] = [
    new DanmakuThen(), // then 语法处理
    new DanmakuDelay(), // delay 语法处理
  ];
  public process(
    danmaku: DanmakuItemInterface,
    params: any
  ): DanmakuItemInterface | false {
    let dan = danmaku;
    this.list.forEach((value) => {
      let dan2 = value.process(danmaku, params);
      // 如果中途有任何一个环节出错，就退出
      if (dan2 === false) {
        return false;
      }
      dan = dan2;
    });
    return dan;
  }
}
