import {formateTime} from "./util/formateTime.js"
export function createBarrageList(data,el){
	for(let i = 0;i<data.length;i++){
		var item = document.createElement("div");
		var contentText = document.createElement("div");
		var time = document.createElement("div");
		item.setAttribute("class", "item")
		contentText.setAttribute("class", "contentText")
		time.setAttribute("class", "time")
		contentText.innerText = data[i].value
		time.innerText = formateTime(parseInt(data[i].time))
		item.appendChild(contentText)
		item.appendChild(time)
		el.appendChild(item)
	}
   }