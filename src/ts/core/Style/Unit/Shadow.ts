import { Color } from "./Color";
import { PxSize } from "./PxSize";
import { UnitInterface } from "./UnitInterface";

export class Shadow implements UnitInterface {
    constructor(
        h: PxSize,
        v: PxSize,
        blur: PxSize,
        color: Color,
        inset?: boolean
    ) {
        this.h = h;
        this.v = v;
        this.blur = blur
        this.color = color
        this.inset = inset

    }
    public string(): string {
        let str = this.h.string() + " " +
                this.v.string() + " " +
                this.blur.string() + " " +
                this.color.string() + " ";
        if(this.inset){
            str += " inset"
        }
        return str;
    }
    // 水平阴影
    public h: PxSize
    // 垂直阴影
    public v: PxSize
    // 深度
    public blur: PxSize
    // 颜色
    public color: Color
    // 内阴影
    public inset?: boolean
}