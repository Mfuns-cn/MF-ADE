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

      let parent = this.idList[json.extends];
      if (parent) {
        // 合并
        danmaku = deepMerge(this.copy(parent), json);
      }
    }

    // 标记弹幕id
    if (json?.id) {
      this.save(json.id, danmaku);
    }
    // 存储_LAST_变量
    this.save("_LAST_", danmaku);
    return danmaku;
  }
  protected copy(json: any) {
    return JSON.parse(JSON.stringify(json));
  }
  protected save(name: string, danmaku: any) {
    // 如果项目存在id则加入到列表
    let copy = this.copy(danmaku);
    // 去掉id属性
    delete copy.id;
    this.idList[name] = copy;
  }
}
