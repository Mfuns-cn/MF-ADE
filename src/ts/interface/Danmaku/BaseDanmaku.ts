import { DanmakuStyle } from "../Style/DanmakuStyle";
import { AnimationInterface } from "./Animation/AnimationInterface";
import { LinearAnimation } from "./Animation/LinearAnimation";
import { DanmakuItemInterface } from "./DanmakuItemInterface";

export class BaseDanmaku implements DanmakuItemInterface {
    content: string
    constructor(str: string) {
        this.content = str
    }

    getContent(): string {
        return this.content
    }
    getChild(): DanmakuItemInterface[] {
        if (Math.random() > 0.1) {
            return [new BaseDanmaku(Math.random() + '')]
        }
        return []

    }
    getAnimation(): AnimationInterface {
        return new LinearAnimation()
    }
    getStyle(): DanmakuStyle {
        return {
            position: {
                x: 0,
                y: 0
            },
            color: {
                r: 0, g: 0, b: 0, a: 1
            },
            background: {
                r: 0, g: 0, b: 0, a: .1
            },
            size: {
                width: 100,
                height: 30
            }
        }
    }
}
