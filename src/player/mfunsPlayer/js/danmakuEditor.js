import Template from "./getDOM.js"
let tem
export function openEditor() {
	tem = Template()
	tem.danmakuList.style.animation = 'retract 0.3s'
	tem.danmakuList.style.display = 'none'
	tem.video.pause()
	tem.ade_mask.style.display = 'block'
	tem.ade.style.animation = 'down 0.35s'
}

export function closeEditor() {
	tem.video.play()
	tem.ade.style.animation = 'up 0.35s'
	setTimeout(() => {
		tem.ade_mask.style.display = 'none'

	}, 350)


}
export function createPreview() {
	return new Promise((resolve, reject) => {
	
	tem.advancePre.style.width = tem.content.clientWidth + 'px'
	tem.advancePre.style.height = tem.video.clientHeight + 'px'

	
	if(tem.advancePre){
		resolve(tem)
	}else{
		reject()
	}
	})
	
}


export function previewCallback(code) {
	let advanceDanmakuPreview 
	if(!advanceDanmakuPreview ){
		advanceDanmakuPreview = new MfunsDanMaku({
		containers: tem.advancePre,
		danmaku: send => {
			send([code])
		}
	})
	}
	return advanceDanmakuPreview 
}

export function clearCallback() {

}

export function emitCallback() {

}
