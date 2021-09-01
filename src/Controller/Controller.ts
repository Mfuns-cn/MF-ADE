import { SizeInterface } from "../core/Style/SizeInterface";
import { StageInterface } from "../core/Stage/StageInterface";
import { Context } from "../Context/Context";
import { I18n } from "../i18n";
import { CanvasStyle } from "../core/Style/CanvasStyle";
import { PxSize } from "../core/Style/Unit/PxSize";
import { TimeLineFactory } from "../Factory/TimeLineFactort";
import { JsonDanmakuParser } from "../Factory/DanmakuParser/jsonDanmaku/JsonDanmakuParser";
import { DanmakuEvent } from "../Event/DanmakuEvent";
import { DanmakuEventType } from "../Event/DanmakuEventType";
import { RendererFactory } from "../Factory/RendererFactory";

/**
 * 控制器 ，统一管理整个弹幕系统
 * 在这里，每种弹幕类型都会得到一个舞台对象，进行渲染
 */
export class Controller {
  /**
   * 画布对象
   */
  protected containers: HTMLElement;
  /**
   * 实时的Css样式表
   */
  protected canvasStyle: CSSStyleDeclaration;
  /**
   * 舞台列表
   */
  protected stageList: StageInterface[] = [];
  /**
   * 暂停状态
   */
  protected pauseStatus: boolean = true;
  /**
   * 时间戳
   */
  protected timeStamp: number = 0;
  /**
   * 播放的时间
   */
  protected time: number = 0;
  /**
   * 跳转状态
   */
  public skipStatus: boolean = false;

  protected danmakuFunction: {
    [type: string]: (send: (str: string[]) => void) => void;
  } = {};
  constructor(containers: HTMLElement) {
    this.containers = containers;
    // 获取实时的style对象，当大小发生变化时，会更新自身
    this.canvasStyle = window.getComputedStyle(containers);
    // 初始化容器
    this.initContainer();
    let that = this;
    (function animloop() {
      if (!that.pauseStatus) {
        that.refresh();
      }
      requestAnimationFrame(animloop);
    })();
  }
  /**
   * 获得容器尺寸
   */
  public getContainersSize(): SizeInterface {
    return {
      width: new PxSize(parseInt(this.canvasStyle.width, 10)),
      height: new PxSize(parseInt(this.canvasStyle.height, 10)),
    };
  }
  /**
   * 将一个舞台添加到容器内
   * @param stage 舞台
   * @param index 排列顺序
   * @returns 成功与失败的状态
   */
  public registStage(stage: StageInterface, index: number): boolean {
    // 检查列表中是否存在
    if (this.stageList[index]) {
      return false;
    }
    this.stageList[index] = stage;
    return true;
  }
  /**
   * 将舞台挂载到容器中
   */
  public mount() {
    // console.info(I18n.t("Start mount stage"));
    // 遍历每一个舞台
    this.stageList.forEach((stage, key) => {
      // 获取一个div
      let div = this.getDIV();
      // 给舞台初始化渲染器
      let render = RendererFactory.getRenderInstance(stage.rendererType());
      // 将div挂载到渲染器
      render.setCanvasContainer(div);
      // 设置舞台渲染器
      stage.stageRenderer(render);
      // 设置舞台时间轴
      let lineType = stage.timeLineType();
      let timeline = TimeLineFactory.getTimeLine(lineType);
      stage.timeLine(timeline);
      // 检察是否存在弹幕获取器
      if (this.danmakuFunction[lineType]) {
        // 如果存在，就获取弹幕
        this.resetDanmaku(key);
      } else {
        console.warn(I18n.t("danmaku get function is null :" + lineType));
      }

      // 更新渲染器内画布样式
      render.updateCanvasStyle(this.getCanvasStylByStage(stage));
    });
  }

  /**
   * 初始化弹幕容器
   */
  protected initContainer() {
    if (Context.debug) {
      // debug模式
      this.containers.classList.add("danmaku-containers-debug");
    }
    this.containers.classList.add("danmaku-containers");
  }

  /**
   * 重置尺寸
   */
  public resize() {
    // 重置舞台的尺寸
    this.stageList.forEach((stage) => {
      let render = stage.getRenderer();
      if (render) {
        render.updateCanvasStyle(this.getCanvasStylByStage(stage));
      }
    });
  }

  /**
   * 创建div容器
   */
  protected getDIV(): HTMLElement {
    let div = document.createElement("div");
    div.classList.add("stage");
    this.containers.appendChild(div);
    return div;
  }

  /**
   * 根据舞台对象创建一个canvasStyle
   * @param stage 舞台对象
   * @returns
   */
  protected getCanvasStylByStage(stage: StageInterface): CanvasStyle {
    let size = stage.stageSize(this.getContainersSize());
    let color = stage.stageBackgroundColor(this.getContainersSize());
    let pos = stage.stagePosition(this.getContainersSize(), size);
    return { position: pos, color: color, size: size };
  }

  public refresh() {
    this.time = Date.now() - this.timeStamp;
    // 通知每个舞台刷新
    this.stageList.forEach((stage) => {
      // console.log(1)
      stage.refresh(this.time);
    });
  }

  /**
   * 暂停
   */
  public pause() {
    if (!this.pauseStatus) {
      this.pauseStatus = true;
    }
  }

  /**
   * 播放
   */
  public start() {
    if (this.pauseStatus) {
      // 同步时间
      this.timeStamp = Date.now() - this.time;
      this.pauseStatus = false;
    }
  }

  /**
   * 跳转
   */
  public skip(time: number) {
    if (this.pauseStatus) {
      // 如果是暂停状态
      this.time = time;
    } else {
      // 否则使用这个方法
      this.timeStamp = Date.now() - time;
    }
  }

  /**
   * 重置整个系统
   */
  public reset() {
    // 清空所有舞台
    this.stageList.forEach((stage) => {
      stage.reset();
    });
    // 触发弹幕舞台重置事件
    DanmakuEvent.dispatch(DanmakuEventType.DANMAKU_STAGE_RESET, {});

    this.pauseStatus = true;
    this.timeStamp = 0;
    this.time = 0;
    this.skipStatus = false;
  }

  /**
   * 获取弹幕当前时间
   * @returns number
   */
  public getTime(): number {
    return this.time;
  }

  /**
   * 添加弹幕获取器
   * @param type
   * @param fun
   */
  public addGetDanmakuFunction(
    type: string,
    fun: (send: (str: string[]) => void) => void
  ) {
    this.danmakuFunction[type] = fun;
  }

  /**
   * 重置弹幕接口
   */
  public resetDanmaku(type: number) {
    // 判断舞台列表是否存在
    if (!this.stageList[type]) {
      return;
    }

    // 弹幕开始加载事件
    DanmakuEvent.dispatch(DanmakuEventType.DANMAKU_LOAD_START, {});
    // 获取当前舞台
    let stage = this.stageList[type];
    // 获取弹幕时间轴
    let timeline = stage.getTimeLine();
    // 重置时间轴
    timeline.reset();
    // 根据时间轴类型找到对应的弹幕获取器
    let danmakuGetter = this.danmakuFunction[stage.timeLineType()];
    // 判断弹幕获取器是否存在
    if (!danmakuGetter) {
      return;
    }
    danmakuGetter((res: string[]) => {
      // 解析弹幕文本
      res.forEach((danmakuStr: string) => {
        let parser = new JsonDanmakuParser();
        // 遍历添加进时间轴
        parser.parser(danmakuStr).forEach((danmaku) => {
          timeline.addDanmaku(danmaku);
        });
        // 弹幕加载完成事件
        DanmakuEvent.dispatch(DanmakuEventType.DANMAKU_LOAD_DONE, {});
      });
    });
  }
}
