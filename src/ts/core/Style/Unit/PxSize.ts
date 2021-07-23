import { UnitInterface } from "./UnitInterface";

export class PxSize implements UnitInterface{
    public length:number
    constructor(length:number){
        this.length = length;
    }
    public string(): string {
        return this.length +"px";
    }

}