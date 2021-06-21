import {formateTime} from "./util/formateTime.js"
export function createBarrageList(data,el,page){
	var list = ''
	var pageData 
	if(data.length - page * 40 > 40){
	   pageData = data.slice(page*40,(page+1)*40)
	}else if(data.length - page * 40 < 40 && data.length - page * 40 > 0){
		pageData  = data.slice(page * 40,data.length)
	}else{
		return
	}
	
	for(let i = 0;i < pageData.length;i++){
		var item = document.createElement("div");
		var contentText = document.createElement("div");
		var time = document.createElement("div");
		item.setAttribute("class", "item")
		contentText.setAttribute("class", "contentText")
		time.setAttribute("class", "time")
		contentText.innerText = pageData[i].value
		time.innerText = formateTime(parseInt(pageData[i].time))
		item.innerHTML += `${contentText.outerHTML}
		${time.outerHTML}`
		list += item.outerHTML
	
	}
	el.innerHTML += list
   }