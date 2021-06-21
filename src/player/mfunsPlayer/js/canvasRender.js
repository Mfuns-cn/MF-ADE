export class canvasRender {
 	constructor(obj, ctx) {
 		this.value = obj.value
 		this.time = obj.time
		this.token = obj.userToken
 		this.obj = obj
 		this.ctx = ctx
 		this.normalend = false
 		this.normalisInited = false
 		this.topend = false
 		this.topisInited = false
 		this.bottomend = false
 		this.bottomisInited = false
 		this.type = this.obj.type || this.ctx.type
 		this.color = this.obj.color || this.ctx.color
 		this.fontSize = this.obj.fontSize || this.ctx.fontSize
 		this.isclear = false
 		this.isChosen = false
 		//计算弹幕自身宽度，计算当前视频时间是否继续绘制弹幕
 		let span = document.createElement('span')
 		span.innerText = this.value
 		span.style.fontSize = this.fontSize + 'px'
 		span.style.position = 'absolute'
 		document.body.appendChild(span) //创建一个新的段落元素 <span>，然后添加到 <body> 的最尾部
 		//记录弹幕宽度和高度
 		this.width = span.offsetWidth
 		this.height = span.clientHeight
 		document.body.removeChild(span)
 	}
 	//初始化弹幕
 	init(index) {
 		this.opacity = this.obj.opacity || this.ctx.opacity
 		this.color = this.obj.color || this.ctx.color
 		this.fontSize = this.obj.fontSize || this.ctx.fontSize
 		this.speed = this.obj.speed || this.ctx.speed



 		//弹幕出现的位置
 		this.x = this.ctx.canvas.width

 		function isFullScreen() {
 			return !!(
 				document.fullscreen ||
 				document.mozFullScreen ||
 				document.webkitIsFullScreen ||
 				document.webkitFullScreen ||
 				document.msFullScreen
 			);
 		}
 		let orbital = parseInt(this.ctx.canvas.clientHeight/(this.fontSize + 7))
 		if (this.ctx.BarrageData.length < 100) {
 			orbital = orbital / 2
 		}
		
 		// this.y = orbital * parseInt(20 * Math.random() + 1)
         this.y = (this.fontSize + 7)*(index % orbital)
 		if (this.y < this.fontSize + 7) {
 			this.y = this.fontSize + 7
 		}
 		if (this.y > this.ctx.canvas.height - this.fontSize - 7) {
 			this.y = this.ctx.canvas.height - this.fontSize - 7
 		}
 		if (this.type == 'top' || this.type == 'bottom') {
 			this.x = (this.ctx.canvas.width - this.width) / 2
 			this.speed = 0
 			this.y = this.height
 		}
        
 	}

 	selfrender(p, index, type) {
 		if (p) {
 			this.renderPath()
 			this.isChosen = this.ctx.context.isPointInPath(p.x, p.y)
 			// this.ctx.context.clearRect(this.x, this.y-this.fontSize, this.width, this.fontSize);
 			if (this.isChosen) {
 				if (type == "normal") {
 					console.log(this.ctx.normalbarrage[index])
 					return index
 				}
 				if (type == "top") {
 					console.log(this.ctx.topbarrage.items[index].element)
 					return index
 				}
 				if (type == "bottom") {
 					console.log(this.ctx.bottombarrage.items[index].element)
 					return index
 				}
 			}
 		} else {
			if(this.token){
				this.renderBorder()
			}
 			this.renderFont()
 		}


 	}
 	renderPath() {
 		this.ctx.context.beginPath()
 		this.ctx.context.strokeStyle = 'rgba(255, 255, 255, 0)'
 		this.ctx.context.rect(this.x, this.y - this.fontSize * 0.8, this.width, this.fontSize);
 		this.ctx.context.stroke()
 	}
 	renderBorder(color) {
 		this.ctx.context.strokeStyle = '#ffff00'
 		this.ctx.context.strokeRect(this.x, this.y - this.fontSize * 0.8, this.width, this.fontSize);

 	}
 	renderFont() {
 		this.ctx.context.font = this.fontSize + 'px 微软雅黑'
 		this.ctx.context.fillStyle = this.color
		this.ctx.context.strokeStyle = '#000';
		this.ctx.context.strokeText(this.value, this.x, this.y)
		
 		this.ctx.context.fillText(this.value, this.x, this.y)
 		// this.ctx.context.shadowColor = 'rgba(0, 0, 0, 0.2)'
 		// this.ctx.context.shadowOffsetX = 2
 		// this.ctx.context.shadowOffsetY = 2
 		// this.ctx.context.shadowBlur = 2
 	}

 }
