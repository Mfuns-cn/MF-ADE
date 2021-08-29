import { deepMerge } from "../../../util/deepMerge";
import { JsonPreprocessInterface } from "./JsonPreprocessInterface";
/**
 * 弹幕继承
 */
export class DanamkuExtends implements JsonPreprocessInterface {
  /**
   * id列表
   */
  protected idList: any[] = [];
  public process(json: any, _index: number) {
    let danmaku = json;
    // 继承弹幕
    if (danmaku?.extends) {
      // 如果id和extend相等，直接返回
      if (danmaku?.id === danmaku?.extends) {
        return json;
      }
      // 获取父级弹幕
      let parent = this.copy(this.idList[json.extends]);

      // 合并
      danmaku = deepMerge(parent, json);
    }

    // 标记弹幕id
    if (json?.id) {
      // 如果项目存在id则加入到列表
      this.idList[danmaku.id] = this.copy(danmaku);
    }
    return danmaku;
  }
  protected copy(json: any) {
    return JSON.parse(JSON.stringify(json));
  }
}
