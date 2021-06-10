import { i18n } from "src/ts/i18n";
import { DanmakuItemInterface } from "src/ts/interface/Danmaku/DanmakuItemInterface";
import { AnimationFactory } from "../AnimationFactory";
import { DanmakuFactory } from "./DanmakuFactory";
import { DanmakuParserInterface } from "./DanmakuParserInterface";

export class JsonDanmakuParser implements DanmakuParserInterface {

    parser(content: string): DanmakuItemInterface[] {
        try {
            let json: any[] = JSON.parse(content)
            
            return this.getDanmaku(json);
        } catch (e) {
            console.warn(i18n.t("Danmaku parser fail"))
            console.warn(e);
            return []
        }

    }

    getDanmaku(obj?: any[]):DanmakuItemInterface[] {
        let list:DanmakuItemInterface[] = []

        obj?.forEach((dan) => {
            
            let danmaku = DanmakuFactory.getDanmakuInstance(dan.type)
            if(!dan?.animations){
                dan.animations = [{type:"static"}]
            } 
            danmaku.setParams({
                start: dan?.start,
                content:dan?.content,
                style:dan?.style,
                animation: AnimationFactory.getAnimations("list",{animations:dan?.animations}),//将列表组成一个list
                child:this.getDanmaku(dan.childs)
            })

            list.push(danmaku);
        })
        return list;

    }
}