import { AdvancedLine } from "../TimeLine/AdvancedLine";
import { TimeLineInterface } from "../TimeLine/TimeLineInterface";

export class TimeLineFactory{
    static list = {
        "defult":AdvancedLine,
        "advance":AdvancedLine
    }
    static getTimeLine(type:string):TimeLineInterface{
        if(!this.list[type]){
           type = "default"
        }
        return new this.list[type]()
    }
}