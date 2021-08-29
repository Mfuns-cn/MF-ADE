import { UnitInterface } from "./UnitInterface"

/**
 * 颜色接口
 */

export class Color implements UnitInterface {
    public r: number
    public g: number
    public b: number
    public a: number
    constructor(r:number, g:number, b:number, a:number) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
    public string(): string {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
    }
    /**
     * 常见颜色表
     */
    protected static color:{[key:string]:[number,number,number,number]} = {
        "black":[0,0,0,1],
        "white":[255,255,255,1],
        "red":[255,0,0,1],
        "green":[0,255,0,1],
        "blue":[0,0,255,1],
        "pink":[255,105,108,1],
        "yellow":[255,255,0,1],
        "grey":[130,130,130,1]
    }
    /**
     * 获取预设颜色
     * @param color 颜色名称
     * @returns 
     */
    public static getColor(color:string):Color{
        if(this.color[color]){
            return new this(...this.color[color])
        }else{
            return new this(...this.color["black"])
        }

    }
}