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
    string(): string {
        let str = this.h.string() + " " + 
                this.v.string() + " " +
                this.blur.string() + " " +
                this.color.string() + " "; 
        if(this.inset){
            str += " inset"
        }
        return str;
    }
    //水平阴影
    h: PxSize
    //垂直阴影
    v: PxSize
    //深度
    blur: PxSize
    //颜色
    color: Color
    //内阴影
    inset?: boolean
}