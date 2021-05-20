import { AnimationInterface } from "./AnimationInterface";

export class LinearAnimation implements AnimationInterface{
    duration: number
    setDuration(duration: number): boolean {
        this.duration = duration
        return true
    }
    getMatrix(duration: number): number[] {
        return [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            1,1,1,1
        ]
    }
 

}