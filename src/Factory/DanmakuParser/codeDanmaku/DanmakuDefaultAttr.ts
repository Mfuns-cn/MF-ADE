import { JsonPreprocessInterface } from "./JsonPreprocessInterface";
/**
 * 弹幕默认属性设置
 */
export class DanmakuDefaultAttr implements JsonPreprocessInterface {
  public process(json: any, _index: number) {
    // 添加默认的动画
    if (!json?.animations || json?.animations === []) {
      json.animations = [{ type: "static" }];
    }
    return json;
  }
}
