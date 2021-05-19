import {canvasRender} from "./canvasRender.js"
import {PriorityQueue} from "./util/priorityQueue.js"
export class canvasStage {
			constructor(tem, options = {}) {
				if (!tem) return
				let playTimer
				let play_btn = tem.play_btn
				let player = tem.player
				const that = this
				this.canvas = tem.canvas
				this.video = tem.video
				this.chosenBarrage = []
				this.canvas.addEventListener('click',function(e){
					let p = that.getp(e)
					if(playTimer){
						clearTimeout(playTimer)
					}
					play_box.style.display = 'flex'
					
					if (that.video.paused) {
						that.video.play()
						 player.className = "icon_play"
						 play_btn.className = "button_play"
						playTimer = setTimeout(()=>{
							play_box.style.display = 'none' 
						 },2000)
					} else {
						 that.video.pause()
						 player.className = "icon_pause"
						 play_btn.className = "button_pause"
					}
					// video.paused = !video.paused
					that.chosenBarrage = that.renderBarrage(p);
					 if(that.chosenBarrage.length){
						 console.log(that.chosenBarrage)
					 }
				    },false)
			
				let defaultoptions = { //默认弹幕样式	
					speed: 2,
					color: 'white',
					fontSize: 20,
					type: 'normal',
					BarrageData: []
				}
				Object.assign(this, defaultoptions, options) //对象合并 将属性全部挂载在实例this上

				//canavas设置
				this.context = this.canvas.getContext('2d')
				this.canvas.width = 800
				this.canvas.height = 440
				
				//是否暂停
				this.isPaused = true //默认暂停播放,不渲染弹幕
				//设置渲染器
			   this.renders = this.BarrageData.map(obj => new canvasRender(obj, this)) 
			   console.log(this.BarrageData);
				//取出顶部弹幕				
				this.gettop()

				//递归渲染弹幕				
				this.render()
			}
           //获取鼠标点击位置
             getp(ev){
           	　　var x, y;
           	    
           	　　if (ev.layerX || ev.layerX === 0) {
           		　　x = ev.layerX ;
           		　　y = ev.layerY ;
           	　　} else if (ev.offsetX || ev.offsetX === 0) { // Opera
           		　　x = ev.offsetX ;
           		　　y = ev.offsetY ;
           	　　}
           	　　return {x: x, y: y};
               }
			gettop() {
				this.topbarrage = new PriorityQueue()
				this.renders.forEach(barrage => {
					if (barrage.type == 'top') {
						this.topbarrage.push(barrage, barrage.time)
					}
				})
			}
			//渲染顶部弹幕
			top() {
				let videoTime = this.video.currentTime

				let top = this.topbarrage.items[0]
				let k = 0
				for (let i = 0; i < this.topbarrage.items.length; i++) {
					this.topbarrage.items[i].element.height = 21

					if (this.topbarrage.items[i].priority - top.priority <= 4) {
						this.topbarrage.items[i].element.height += 21 * k
						k += 1
						if (this.topbarrage.items[i].element.height > 830) {
							this.topbarrage.items[i].element.height = 21
						}
					} else {
						top = this.topbarrage.items[i]
						k = 1
					}
				}
				this.topbarrage.items.forEach(barrage => {
					if (!barrage.element.topend && videoTime >= barrage.element.time) {
						if (!barrage.element.topisInited) { //初始化弹幕样式
							barrage.element.init()
							barrage.element.topisInited = true
						}
						barrage.element.selfrender()
						if (videoTime - barrage.element.time > 4) {
							barrage.element.topend = true
						}
					}
				})
			}
			renderBarrage(p) {
				//将弹幕数组中的弹幕逐一取出，判断弹幕的时间和视频的时间是否一致，符合就执行渲染
				let videoTime = this.video.currentTime
                let current = []
				let index
				this.renders.forEach((barrage,index) => {
					if (!barrage.normalend && barrage.time <= videoTime) {
						//先初始化弹幕样式，再进行绘制


						if (barrage.type == 'top') { //不渲染顶部弹幕
							barrage.normalisInited = true
							barrage.normalend = true
						}
						if (!barrage.normalisInited) { //初始化弹幕样式					
							barrage.init()
							barrage.normalisInited = true

						}

						barrage.x -= barrage.speed
						index = barrage.selfrender(p,index)
						 if(index){
							  current.push(index) 
						 }
						
						 
						//普通弹幕
						if (barrage.x <= barrage.width * -1) {
							barrage.normalend = true //渲染结束
						}
						
					}
				})
				return current
			}
			clear() {
				if (this.isclear) {
					this.context.clearRect(0, 0, canvas.width, canvas.height)
					requestAnimationFrame(this.clear.bind(this))
				}
			}
			render() {
				//第一次先进行清空操作，执行渲染弹幕，如果没有暂停视频则继续渲染
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				//渲染弹幕
				this.renderBarrage()
				this.top()
				if (this.isPaused === false) {
					//递归渲染
					requestAnimationFrame(this.render.bind(this))
				}
			}
			// 添加弹幕
			add(obj) {
				this.renders.push(new canvasRender(obj, this))
			}
			// 重置弹幕
			reset() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				let videoTime = this.video.currentTime
				this.renders.forEach(barrage => {
					barrage.normalend = false
					barrage.topend = false
					if (videoTime <= barrage.time) {
						barrage.normalisInited = false
						barrage.topisInited = false
					} else {
						barrage.normalend = true
						barrage.topend = true
					}
				})
			}
		}