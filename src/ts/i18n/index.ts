import { Context } from "../Context/Context";
import zhCn from "./zh-cn";
/**
 * i18n 国际化函数
 */
export class I18n {
    private static tranTxt = {
        "zh-cn": zhCn
    }
    /**
     * 当前语言
     */
    private static language: string = Context.language;
    /**
     * 获取翻译，如果不存在，则返回自身
     * @param str 需要国际化的字符串
     * @returns 翻译结果
     */
    public static t(str: string): string {
        // 检查字符串是否存在
        if (this.tranTxt[this.language] && this.tranTxt[this.language][str]) {
            return this.tranTxt[this.language][str];
        }
        return str;
    }
}