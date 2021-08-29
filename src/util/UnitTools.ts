import { I18n } from "../i18n";

export class UnitTools{
    /**
     * 拼接带单位的长度字符串
     * @param num 长度
     * @returns 
     */
    public static lengthSrting(num:number):string{
        return `${num}px`;
    }
    /**
     * 拼接 Matrix3d() 字符串
     * @param arr 16位数字
     */
    public static Matrix3dString(arr:number[]):string{
        if(arr.length !== 16){
            throw SyntaxError(I18n.t("matrix3d param less than 16"));
        }
        return "Matrix3d(" + arr.join(",") + ")";
    }
    // static UnitFactory(type:string,obj):string{

    // }
}