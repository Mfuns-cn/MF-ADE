/**
 * 矩阵变换相关工具函数
 */
export class Matrix {
    /**
     * 加法
     * @param a 
     * @param b 
     */
    static add(a: number[], b: number[]): number[] {
        let c: number[] = []
        for (let i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i]
        }
        return c
    }
    /**
     * 减法
     * @param a 
     * @param b 
     * @returns 
     */
    static sub(a: number[], b: number[]): number[] {
        let c: number[] = []
        for (let i = 0; i < a.length; i++) {
            c[i] = a[i] - b[i]
        }
        return c
    }
    static mult(a: number[], b: number[]): number[] {
        let a1 = this.tran(a);
        let b1 = this.tran(b);
         // 相乘约束
         if (a1[0].length !== b1.length) {
            throw new Error();
        }
        let m = a1.length;
        let p = a1[0].length;
        let n = b1[0].length;
    
        // 初始化 m*n 全 0 二维数组
        let c = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < p; k++) {
                    c[i][j] += a1[i][k] * b1[k][j];
                }
            }
        }
    
        return [...c[0],...c[1],...c[2],...c[3]];
    }
    /**
     * 将一维16位数组转换成4*4二维数组
     * @param a 
     */
     protected static tran(a: number[]):number[][] {
        let arr: number[][] = []
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let index = i * 4 + j
                if(!arr[i]) arr[i] = [];
                arr[i][j] = a[index];
            }
        }
        return arr;
    }
    /**
     * 获得一个无效果的4x4矩阵
     */
    static getNullMatrix():number[]{
        return [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ]
    }
}