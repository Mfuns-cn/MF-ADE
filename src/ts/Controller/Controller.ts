
import { SizeInterface } from "../interface/Style/SizeInterface";
import { StageInterface } from "../interface/Stage/StageInterface";
import { Context } from "../Context/Context";
import { i18n } from "../i18n";
import { canvasStyle } from "../interface/Style/CanvasStyle";
import { RendererFactory } from "../interface/Renderer/RendererFactory";

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
    constructor(containers: HTMLElement) {
        this.containers = containers
        //获取实时的style对象，当大小发生变化时，会更新自身
        this.canvasStyle = window.getComputedStyle(containers);
        //初始化容器
        this.initContainer()
    }

    /**
     * 获得容器尺寸
     */
    public getContainersSize(): SizeInterface {
        return {
            width: parseInt(this.canvasStyle.width),
            height: parseInt(this.canvasStyle.height)
        }
    }
    /**
     * 将一个舞台添加到容器内
     * @param stage 舞台
     * @param index 排列顺序
     * @returns 成功与失败的状态
     */
    public registStage(stage: StageInterface, index: number): boolean {
        //检查列表中是否存在
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
        console.log(i18n.t("Start mount stage"));
        //遍历每一个舞台
        this.stageList.forEach((stage) => {
            //获取一个div
            let div = this.getDIV()
            //给舞台初始化渲染器
            let render = RendererFactory.getRenderInstance("base");
            //将div挂载到渲染器
            render.setCanvasContainer(div)
            //设置舞台渲染器
            stage.stageRenderer(render);
            //更新渲染器内画布样式
            render.updateCanvasStyle(this.getCanvasStylByStage(stage))
        })
    }

    /**
     * 初始化弹幕容器
     */
    protected initContainer() {
        if (Context.debug) {
            //debug模式
            this.containers.classList.add("danmaku-containers-debug")
        }
        this.containers.classList.add("danmaku-containers")
    }
    /**
     * 创建div容器 
     */
    protected getDIV(): HTMLElement {
        let div = document.createElement("div");
        div.classList.add("stage")
        this.containers.appendChild(div);
        return div;
    }

    /**
     * 根据舞台对象创建一个canvasStyle
     * @param stage 舞台对象
     * @returns 
     */
    protected getCanvasStylByStage(stage: StageInterface): canvasStyle {
        let size = stage.stageSize(this.getContainersSize())
        let color = stage.stageBackgroundColor(this.getContainersSize())
        let pos = stage.stagePosition(this.getContainersSize(), size)
        return { position: pos, color: color, size: size }
    }

}