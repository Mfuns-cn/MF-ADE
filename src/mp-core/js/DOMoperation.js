import Template from "./getDOM.js"
import {createBarrageList} from "./createBarrageList.js"
import {formateTime} from './util/formateTime.js'
import {debounce} from './util/debounce.js'
export function operate(canvasBarrage,tem) {
	
	let playInterval
	let playTimer
	//播放视频时加载弹幕
	function play() {
		playInterval = setInterval(() => {
			let ct = parseInt(tem.video.currentTime)
			tem.currentTime.innerText = formateTime(ct) + '/'
			tem.load.value++
		}, 1000);
	}
	tem.video.addEventListener('play', function() {
		canvasBarrage.isPaused = false
		canvasBarrage.render()
		play()
	})
	//暂停视频时停止加载弹幕
	tem.video.addEventListener('pause', function() {
		canvasBarrage.isPaused = true
		clearInterval(playInterval)
	})
	//发送普通滚动弹幕
	tem.emit.addEventListener('click', function() {
		let value = tem.text.value //文本内容
		let time = tem.video.currentTime
		let color = tem.color.value
		let fontSize = tem.range.value
		let speed = tem.speed.value
		let obj = {
			value,
			time,
			color,
			speed,
			fontSize
		}
		canvasBarrage.add(obj)
		createBarrageList([obj], tem.danmakuList)
		// $('#text').value = ''//清空输入框，减少弹幕刷屏
	})
	//发送顶部弹幕
	tem.emitTop.addEventListener('click', function() {
		let value = tem.text.value //文本内容
		let time = tem.video.currentTime
		let color = tem.color.value
		let type = 'top'
		let obj = {
			value,
			time,
			color,
			type
		}
		canvasBarrage.add(obj)
		canvasBarrage.gettop()
		createBarrageList([obj], tem.danmakuList)
		// $('#text').value = ''//清空输入框，减少弹幕刷屏
	})
	//拖动进度条恢复弹幕
	tem.video.addEventListener('seeked', function() {
		canvasBarrage.reset()
	})
	//进入全屏
	function fullsc(content) {
		if (content.requestFullscreen) {
			return content.requestFullscreen();
		} else if (content.mozRequestFullScreen) {
			return content.mozRequestFullScreen();
		} else if (content.webkitRequestFullscreen) {
			return content.webkitRequestFullscreen();
		} else if (content.msRequestFullscreen) {
			return content.msRequestFullscreen();
		}
	}

	//判断页面是否进入全屏
	function isFullScreen() {
		return (
			document.fullscreenElement  ||
			document.mozFullScreenElement ||
			document.webkitFullscreenElement ||
			document.msFullScreenElement
		);
	}
	tem.full.addEventListener('click', function() {
		if (isFullScreen()) {
			exitFullScreen()
		} else {
			let debounceFunc = debounce(500, getInputValue)

			function getInputValue() {
				if (isFullScreen()) {
					tem.control.style.display = 'none'
				}
			}

			document.addEventListener('mousemove', function() {
				tem.control.style.display = 'block'
				debounceFunc()
			})

			
		}
		setTimeout(function() {
			if (isFullScreen()) {
				canvasBarrage.reset()
				tem.canvas.width = tem.video.clientWidth
				tem.canvas.height = tem.video.clientHeight
				tem.control.style.background = 'rgba(0, 0, 0, 0.5)'
				tem.load.style.width = '78%'
			}
		}, 100)
		fullsc(tem.content)


	})
	//退出全屏
	function exitFullscreen() {
		// 判断各种浏览器，找到正确的方法
		var exitMethod = document.exitFullscreen || //W3C
			document.mozCancelFullScreen || //Chrome等
			document.webkitExitFullscreen || //FireFox
			document.msFullscreen; //IE11
		if (exitMethod) {
			exitMethod.call(document);
		}
		
	}
	document.addEventListener('fullscreenchange', exitHandler); //退出全屏后执行
	function exitHandler() {
		tem.control.style.display = 'block'
		setTimeout(()=>{
			if (!isFullScreen()) {
			exitFullScreen()
		   }
		},100)
		
		
	}

	function exitFullScreen() {
		canvasBarrage.reset()
		exitFullscreen()
		tem.canvas.width = 800
		tem.canvas.height = 440
		tem.control.style.bottom = 0
		tem.control.style.background = '#333'
		tem.load.style.width = '58%'

	}
	function handleClick(){
		if (playTimer) {
			clearTimeout(playTimer)
		}
		tem.play_box.style.display = 'flex'
		if (tem.video.paused) {
			tem.video.play()
			tem.player.className = "icon_play"
			tem.play_btn.className = "button_play"
			playTimer = setTimeout(() => {
				tem.play_box.style.display = 'none'
			}, 2000)
		} else {
			tem.video.pause()
			tem.player.className = "icon_pause"
			tem.play_btn.className = "button_pause"
		}
	}
	//关闭/开启弹幕
	tem.close.addEventListener('click', function() {
		canvasBarrage.isclear = !canvasBarrage.isclear
		if (canvasBarrage.isclear) {
			tem.close.innerHTML = '弹幕(关)'
		} else {
			tem.close.innerHTML = '弹幕(开)'
		}
		canvasBarrage.clear()
	})
	//播放、暂停视频
	tem.player.addEventListener('click', handleClick)
	tem.play_box.addEventListener('click', handleClick)
	//快进快退及其他键盘事件
	function add5() {
		tem.add.style.display = 'block'
		setTimeout(() => {
			tem.add.style.display = 'none'
		}, 2000)
	}

	function minus5() {
		tem.minus.style.display = 'block'
		setTimeout(() => {
			tem.minus.style.display = 'none'
		}, 2000)
	}
	document.onkeydown = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];

		if (e && e.keyCode == 37 && !tem.video.paused && tem.video.currentTime >= 0) { // left键
			tem.video.currentTime -= 5
			tem.load.value = tem.video.currentTime
			minus5()
		}
		if (e && e.keyCode == 39 && !tem.video.paused && tem.video.currentTime >= 0) { // right键
			tem.video.currentTime += 5
			tem.load.value = tem.video.currentTime
			add5()
		}

		if (e && e.keyCode == 32) { // space键
			handleClick()
		}
	};


	//画中画
	tem.troggle.addEventListener('click', function() {
		if (!document.pictureInPictureElement) { //开启
			tem.video.requestPictureInPicture().catch(error => {
				console.log(error, 'Video failed to enter Picture-in-Picture mode.');
			});
		} else { //关闭

			document.exitPictureInPicture().catch(error => {
				console.log(error, 'Video failed to leave Picture-in-Picture mode.');
			});
			tem.play_box.style.display = 'flex'
			tem.player.className = "icon_pause"
			tem.play_btn.className = "button_pause"
			tem.video.pause()
		}

	})
	tem.video.addEventListener('leavepictureinpicture', function(e) {
		tem.play_box.style.display = 'flex'
		tem.play_btn.className = "button_pause"
		tem.player.className = "icon_pause"
	});
	//拖动进度条
	tem.load.addEventListener('mouseup', function() {
		tem.video.currentTime = tem.load.value
		tem.currentTime.innerText = formateTime(tem.load.value) + '/'
	})
	// tem.load.addEventListener('mousedown',function(){
	// 	tem.currentTime.innerText = formatTime(tem.load.value) + '/'
	// })
}
