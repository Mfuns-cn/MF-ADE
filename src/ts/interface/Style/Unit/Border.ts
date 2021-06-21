import { Color } from "./Color";
import { UnitInterface } from "./UnitInterface";

/**
 * 边框
 */
export class Border implements UnitInterface{
    constructor(width:number,style:string,color:Color){
        this.width = width
        this.color = color
        this.style = style
    }
    width:number
    style:string
    color:Color
    string(): string {
        return "" + this.width + "px " + this.style + " " + this.color.string 
    }
}