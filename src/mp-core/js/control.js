import {getDanmakuData,getVideoSrc} from "./api.js"
import {createBarrageList} from "./createBarrageList.js"
import {initVideo,getVideoTime} from "./video.js"
import Template from "./getDOM.js"
import {canvasStage} from "./canvasStage.js"
import {operate} from "./DOMoperation.js"
export function init(el,url){
	let tem = Template()
	let stageList = []
	//获取视频链接
	getVideoSrc(url.video,"GET").then(function(res){
		//初始化video
		let video = document.createElement("video");
		video.setAttribute("class", "video")
		tem.video = video
		initVideo(res.data.src,tem)
		getVideoTime(tem)
		el.appendChild(video)
	}).catch(function(err){
		console.error(err)
	})
	
	//获取弹幕数据
	getDanmakuData(url.danmaku,"GET").then(function(res){
		//创建弹幕池
		let BarrageData = res.data
		//创建视频弹幕列表
		createBarrageList(BarrageData,tem.danmakuList)
		
		//初始化canvas
		let canvas = document.createElement("canvas");
		canvas.setAttribute("class", "canvas")
		tem.canvas = canvas
		el.appendChild(canvas)
		
		
		//新建舞台
		let canvasDanmakuStage = new canvasStage(tem, {BarrageData})
		stageList.push(canvasDanmakuStage)
		
		//使用(注册)舞台
		operate(canvasDanmakuStage,tem)		
	}).catch(function(err){
		console.error(err)
	})
	}
	
	