export function PriorityQueue() {
			//内部封装队列元素类	
			function QueueElement(element, priority) {
				this.element = element
				this.priority = priority
			}

			this.items = []

			//插入元素
			PriorityQueue.prototype.push = function(element, priority) {
				let queueElement = new QueueElement(element, priority) //保存传入的元素

				if (this.items.length == 0) {
					this.items.push(queueElement)
				} else {
					let added = false
					for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].priority > queueElement.priority) {
							this.items.splice(i, 0, queueElement)
							added = true
							break
						}
					}

					if (!added) {
						this.items.push(queueElement)
					}
				}
			}
			
		}