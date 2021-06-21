import { UnitInterface } from "./UnitInterface";

export class PxSize implements UnitInterface{
    length:number
    constructor(length:number){
        this.length = length;
    }
    string(): string {
        return this.length +"px";
    }

}