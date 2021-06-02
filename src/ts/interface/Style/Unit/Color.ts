import { UnitInterface } from "./UnitInterface"

/**
 * 颜色接口
 */

export class Color implements UnitInterface {
    r: number
    g: number
    b: number
    a: number
    constructor(r:number, g:number, b:number, a:number) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
    string(): string {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
    }

}