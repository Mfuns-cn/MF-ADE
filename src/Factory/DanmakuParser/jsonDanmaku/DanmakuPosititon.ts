import { JsonPreprocessInterface } from "./JsonPreprocessInterface";

export class DanmakuPosition implements JsonPreprocessInterface {
  public process(json: any, _index: number) {
    // 当弹幕不存在动画时
    if (!json?.animations || json?.animations === []) {
      // 检测弹幕是否存在xyz和duration
      let x = json?.x || 0;
      let y = json?.y || 0;
      let z = json?.z || 0;
      let duration = json.duration || 1000;
      json.animations = [
        {
          type: "static",
          duration,
          x,
          y,
          z,
        },
      ];
    }

    return json;
  }
}
