import { i18n } from "../i18n";
import { ColorInterface } from "../interface/Style/ColorInterface";

export class UnitTools{
    /**
     * 拼接带单位的长度字符串
     * @param num 长度
     * @returns 
     */
    static lengthSrting(num:number):string{
        return num + "px";
    }
    /**
     * 拼接rgba()颜色字符串
     * @param color 颜色
     * @returns 
     */
    static colorString(color:ColorInterface):string{
        return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")"
    }
    /**
     * 拼接 Matrix3d() 字符串
     * @param arr 16位数字
     */
    static Matrix3dString(arr:Array<number>):string{
        if(arr.length != 16){
            throw SyntaxError(i18n.t("matrix3d param less than 16"));
        }
        return "Matrix3d(" + arr.join(",") + ")";
    }
}