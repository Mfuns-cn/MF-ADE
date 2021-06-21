import {init} from "./control.js"

export default class mfunsDanmaku{
	constructor(el,url) {
	   init(el,url) 
	   el.style.position = 'relative'
	   el.style.justifyContent = 'center'
	   el.style.alignItems = 'center'
	   el.style.overflow = 'hidden'
	}
}

