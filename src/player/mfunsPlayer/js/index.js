import {init} from "./control.js"
import {addFlv} from "./MSE.js"
import '../css/index.css'

 class mfunsPlayer{
	constructor(el,url) {
		addFlv().then(function(){
           init(el,url) 
		   el.style.background = "#000"
	       el.style.position = 'relative'
		   el.style.display = 'flex'
		   el.style.minWidth = "500px"
		   el.style.justifyContent = 'center'
		   el.style.overflow = 'hidden'
		}).catch(function(err){
          console.error(err)
		})
		   
	}
}

if (globalThis) {
	globalThis.mfunsPlayer = mfunsPlayer
	console.log(`${'\n'} %c mfunsPlayer v1.0.0 %c https://github.com/Mfuns-cn ${'\n'}${'\n'}`, 
	'color: #fff; background: #7b7ff7; padding:5px 0;', 'background: #f5f5f5; padding:5px 0;');
 }

 