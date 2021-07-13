import {canvasRender} from "./canvasRender.js"
import {PriorityQueue} from "./util/priorityQueue.js"

export class canvasStage {
			constructor(tem,advanceDanmakuStage, options = {}) {
				if (!tem) return
				let playTimer
				let play_btn = tem.play_btn
				let player = tem.player
				let videoInited 
				const that = this
				this.canvas = tem.canvas
				this.video = tem.video
				this.chosenBarrage = []
				tem.control_mask.addEventListener('click',function(e){
					let p = that.getp(e)
					
					that.renderTop(p)
					that.renderNormal(p);
					that.renderBottom(p);
				    },false)
			    
				let defaultoptions = { //默认弹幕样式	
					speed: 3,
					color: '#fff',
					fontSize: 24,
					type: 'normal',
					BarrageData: []
				}
				Object.assign(this, defaultoptions, options) //对象合并 将属性全部挂载在实例this上

				//canavas设置
				this.context = this.canvas.getContext('2d')
				
				//是否暂停
				this.isPaused = true //默认暂停播放,不渲染弹幕
				
				//分析弹幕样式数据
				this.BarrageData.forEach(el =>{
						let option = el.style.split(",")
						let time = option[0]
						let color = '#' + Number(option[3]).toString(16)
						let type
						switch(Number(option[1])){
							case 1:
							case 2:
							case 3:
							type = 'normal'
							break
							case 4:
							type = 'bottom'
							break
							case 5:
							type = 'top'
							break
						}
						el.time = parseFloat(time)
						el.color = color
						el.type = type
						
				})
				this.BarrageData = this.BarrageData.sort((a,b)=>{
				   return a.time-b.time
				})
				
				//设置渲染器
			   this.renders = this.BarrageData.map(obj => new canvasRender(obj, this)) 
				
				this.video.addEventListener('canplay',function(){
					if(videoInited){
						return
					}
					const videoRate = this.clientHeight / this.clientWidth
					if(videoRate >= 3/4){
						
						this.style.width = "75%"
					}else{
						
					}
					tem.wait_loading.style.display = 'none'
					tem.control_mask.style.height = tem.video.clientHeight + 'px'
					const offsetHeight = tem.control.clientHeight + tem.video.clientHeight
					tem.content.style.height = offsetHeight + 'px'
					tem.load.style.bottom = offsetHeight - 2 + 'px'
					tem.canvas.height = tem.video.clientHeight  - tem.mask.clientHeight
					tem.advance.style.height = tem.video.clientHeight  - tem.mask.clientHeight + 'px'
					tem.ade_mask.style.height = tem.video.clientHeight  - tem.mask.clientHeight + 'px'
					advanceDanmakuStage.resize()
					//取出顶部弹幕				
				   that.getTop()
				   //取出底部弹幕
				   that.getBottom()
                  //取出滚动弹幕
				   that.getNormal()
				  //弹幕初始化
				   that.init()
				   //递归渲染弹幕		
				   that.render()
				   videoInited = true
				   })
				
			}
           //获取鼠标点击位置
             getp(ev){
           	　　let x, y
           	    
           	　　if (ev.layerX || ev.layerX === 0) {
           		　　x = ev.layerX 
           		　　y = ev.layerY 
           	　　} else if (ev.offsetX || ev.offsetX === 0) { // Opera
           		　　x = ev.offsetX 
           		　　y = ev.offsetY 
           	　　}
           	　　return {x: x, y: y};
               }
			   
			isFullScreen() {
			return !!(
					document.fullscreen ||
					document.mozFullScreen ||
					document.webkitIsFullScreen ||
					document.webkitFullScreen ||
					document.msFullScreen
				)
			}   
			getTop() {
				this.topbarrage = new PriorityQueue()
				this.renders.forEach(barrage => {
					if (barrage.type == 'top') {
						this.topbarrage.push(barrage, barrage.time)
					}
				})
			}
			getBottom(){
				this.bottombarrage = new PriorityQueue()
				this.renders.forEach(barrage => {
					if (barrage.type == 'bottom') {
						this.bottombarrage.push(barrage, barrage.time)
					}
				})
			}
			getNormal() {
				this.normalbarrage = []
				this.renders.forEach(barrage => {
					if (barrage.type == 'normal') {
						this.normalbarrage.push(barrage)
					}
				})
				this.normalbarrage.sort((a,b)=>{
				   return a.time - b.time
				})
			}
			
			init(){
				let top = this.normalbarrage[0]
				let k = 1
				let orbital = parseInt(this.canvas.height / 33) 
				for (let i = 0; i < this.normalbarrage.length; i++) {
					this.normalbarrage[i].rank = 1
				    
					if (this.normalbarrage[i].time - top.time <= 2.5) {
						this.normalbarrage[i].rank += k
						k++
						if (k > orbital ) {
							  k = 1
						} 
						
					} else {
						top = this.normalbarrage[i]
						this.normalbarrage[i].rank = 1
						k = 1
					}
				}
			}
			
			//渲染顶部弹幕
			renderTop(p) {
				let videoTime = this.video.currentTime
                
				let top = this.topbarrage.items[0]
				let k = 0
				for (let i = 0; i < this.topbarrage.items.length; i++) {
					this.topbarrage.items[i].element.height = 26

					if (this.topbarrage.items[i].priority - top.priority <= 4) {
						this.topbarrage.items[i].element.height += 26 * k
						k += 1
						if (this.topbarrage.items[i].element.height > this.canvas.height) {
							this.topbarrage.items[i].element.height = 26
						}
					} else {
						top = this.topbarrage.items[i]
						k = 1
					}
				}
				this.topbarrage.items.forEach((barrage,index) => {
					if (!barrage.element.topend && videoTime >= barrage.element.time && videoTime <= barrage.element.time + 4) {
						if (!barrage.element.topisInited) { //初始化弹幕样式
							barrage.element.init()
							barrage.element.topisInited = true
						}
						barrage.element.selfrender(p,index,"top")
						if (videoTime - barrage.element.time > 4) {
							barrage.element.topend = true
						}
					}
				})
			}
			
			//渲染底部弹幕
			renderBottom(p){
				let videoTime = this.video.currentTime
					let bottom = this.bottombarrage.items[0]
					let k = 0
					for (let i = 0; i < this.bottombarrage.items.length; i++) {
						this.bottombarrage.items[i].element.height = this.canvas.height - 6
				
						if (this.bottombarrage.items[i].priority - bottom.priority <= 4) {
							this.bottombarrage.items[i].element.height -= 26 * k
							k += 1
							if (this.bottombarrage.items[i].element.height < 26) {
								this.bottombarrage.items[i].element.height = 26
							}
						} else {
							bottom = this.bottombarrage.items[i]
							k = 1
						}
					}
					this.bottombarrage.items.forEach((barrage,index) => {
						if (!barrage.element.bottomend && videoTime >= barrage.element.time && videoTime <= barrage.element.time + 4) {
							
							if (!barrage.element.bottomisInited) { //初始化弹幕样式
								barrage.element.init()
								barrage.element.bottomisInited = true
							}
							barrage.element.selfrender(p,index,"bottom")
							if (videoTime - barrage.element.time > 4) {
								barrage.element.bottomend = true
							}
						}
					})
				}
			//渲染滚动弹幕
			renderNormal(p) {
				//将弹幕数组中的弹幕逐一取出，判断弹幕的时间和视频的时间是否一致，符合就执行渲染
				
				let videoTime = this.video.currentTime
				// this.init()
				this.normalbarrage.forEach((barrage,index) => {
					if (!barrage.normalend && barrage.time <= videoTime) {
                     //初始化弹幕样式	
						if (!barrage.normalisInited) {
							barrage.init(barrage.rank)
							barrage.normalisInited = true
                           }
						   
                        //绘制
					    let speedRank = this.isFullScreen()?500:350
					    barrage.speed = (barrage.width + this.canvas.clientWidth)/speedRank
						barrage.x -= barrage.speed
						barrage.selfrender(p,index,"normal")
						 
						//越界判断
						if (barrage.x <= barrage.width * -1) {
							barrage.normalend = true //渲染结束
						}
					}
				})
			}
			
			render() {
				//第一次先进行清空操作，执行渲染弹幕，如果没有暂停视频则继续渲染
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				//渲染弹幕
				this.renderNormal()//滚动
				this.renderTop()//顶部
				this.renderBottom()//底部
				if (!this.isPaused) {
					// setTimeout(()=>{
					// 	this.render()
					//   },1000/60)
						requestAnimationFrame(this.render.bind(this))
					}
				}
			
			// 添加弹幕
			add(obj) {
				const newBarrage =new canvasRender(obj, this)
				this.renders.push(newBarrage)	
			}
			// 重置弹幕
			reset() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				let videoTime = this.video.currentTime
				this.renders.forEach(barrage => {
					barrage.normalend = false
					barrage.topend = false
					barrage.bottomend = false
					if (videoTime <= barrage.time) {
						barrage.normalisInited = false
						barrage.topisInited = false
						barrage.bottomisInited = false
					} else {
						barrage.normalend = true
						barrage.topend = true
						barrage.bottomend = true
					}
				})
			}
		}