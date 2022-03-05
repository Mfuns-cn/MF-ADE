import { AdvancedLine } from "../TimeLine/AdvancedLine";
import { TimeLineInterface } from "../TimeLine/TimeLineInterface";

export class TimeLineFactory{
    public static list = {
        "default":AdvancedLine,
        "advanced":AdvancedLine
    }
    public static getTimeLine(type:string):TimeLineInterface{
        if(!this.list[type]){
           type = "default"
        }
        return new this.list[type]()
    }
}