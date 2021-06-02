import { DanmakuStyle } from "../Style/DanmakuStyle";
import { Color } from "../Style/Unit/Color";
import { PxSize } from "../Style/Unit/PxSize";
import { Shadow } from "../Style/Unit/Shadow";
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
        if (Math.random() < 0.3) {
            return [new BaseDanmaku(Math.random() + '')]
        }
        return []

    }
    getAnimation(): AnimationInterface {
        return new LinearAnimation()
    }
    getStyle(): DanmakuStyle {
        return {
            fontStyle: {
                fontSize: new PxSize(100),
            },
            boxStyle: {
                boxShadow: new Shadow(new PxSize(10), new PxSize(10), new PxSize(10), new Color(0, 0, 0, .3)),
                backgroundColor: new Color(0,255,255,1)
            }
        }
    }
}

