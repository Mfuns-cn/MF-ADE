export function defineReactive(data,key,val){
	let dep = []
	Object.defineProperty(data,key,{
		get:function(){
			dep.push(window.target)
		   return val
		},
		set:function(newV){
			for(let i = 0; i<dep.length; i++){
				dep[i](newV,val)
			}
			val = newV
		}
	})
}