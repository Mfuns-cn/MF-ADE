export function thro(callback, delay) {
 	let timer
 	return function(param) {
 		if (!timer) {
 			timer = setTimeout(function() {
				if(param){
					callback(...param)
					timer = null
					return
				}
 				callback()
 				timer = null
 			}, delay)
 		}
 	}

 }
