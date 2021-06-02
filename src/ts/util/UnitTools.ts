import { i18n } from "../i18n";
import { Color } from "../interface/Style/Unit/Color";

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
     * 拼接 Matrix3d() 字符串
     * @param arr 16位数字
     */
    static Matrix3dString(arr:Array<number>):string{
        if(arr.length != 16){
            throw SyntaxError(i18n.t("matrix3d param less than 16"));
        }
        return "Matrix3d(" + arr.join(",") + ")";
    }
    // static UnitFactory(type:string,obj):string{

    // }
}