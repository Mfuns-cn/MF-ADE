import {getDanmakuData} from "./request.js"
import {createBarrageList} from "./createBarrageList.js"
import {createControl} from "./createControl.js"
import {initVideo,getVideoTime} from "./video.js"
import Template from "./getDOM.js"
import {canvasStage} from "./canvasStage.js"
import {operate} from "./DOMoperation.js"
import {initMSE} from "./MSE.js"
export function init(el,url){
	//初始化播放器控件及样式
	createControl(el)
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.href = './mfunsPlayer/css/index.css';
	link.rel = 'stylesheet';
	link.type = 'text/css';
	head.appendChild(link);
	
	let tem = Template()
	let BarrageData = []
	let stageList = []
	
	//获取视频链接
	
	
	if(url.videoType === "flv"){
		let video = document.createElement("video");
		video.setAttribute("class", "video")
		video.setAttribute("id", "videoElement")
		tem.video = video
		getVideoTime(tem)
		el.appendChild(video)
		initMSE(tem.video,url.video)
		
	}else{
		//初始化video
		let video = document.createElement("video");
		video.setAttribute("class", "video")
		tem.video = video
		initVideo(url.video,tem)
		getVideoTime(tem)
		el.appendChild(video)
	  
	}
	
	
	//获取弹幕数据
	if(url.danmaku.length){
		for(let i = 0;i < url.danmaku.length; i++){
	    getDanmakuData(url.danmaku[i],"GET").then(function(res){
		//创建弹幕池
		 BarrageData.push(res.data)
		 if(i === url.danmaku.length -1){
			 createCanvas()
		 }
	   }).catch(function(err){
		console.error(err)
	   })
	}
	
	}
	
	
	
	function createCanvas(){
		BarrageData = BarrageData.flat(Infinity)
	//创建视频弹幕列表
	
	//初始化canvas
	let canvas = document.createElement("canvas");
	canvas.setAttribute("class", "canvas")
	tem.canvas = canvas
	tem.canvas.width = el.clientWidth
	el.appendChild(canvas)
	
	
	//新建舞台
	let canvasDanmakuStage = new canvasStage(tem, {BarrageData})
	stageList.push(canvasDanmakuStage)
	
	//使用(注册)舞台
	operate(canvasDanmakuStage,tem,BarrageData)		
	}
	
	}
	
	