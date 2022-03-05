import { CodeDanmakuParser } from "./codeDanmaku/CodeDanmakuParser";
import { DanmakuParserInterface } from "./DanmakuParserInterface";
import { Mode7DanmakuParser } from "./mode7Danmaku/Mode7DanmakuParser";

/**
 * 弹幕解析器简单工厂
 */
export class DanmakuParserFactory {
  protected static parser = {
    code: CodeDanmakuParser,
    mode7: Mode7DanmakuParser,
  };
  public static getInstance(type: string): DanmakuParserInterface {
    let instance = this.parser[type];
    if (!instance) {
      instance = this.parser["code"];
    }
    return new instance();
  }
}
