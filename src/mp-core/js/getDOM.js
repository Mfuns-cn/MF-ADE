const Template = function(video, canvas) {
 	let $ = document.querySelector.bind(document)
	let DOM = {
 		canvas : $('.canvas'),
 		video : $('.video'),
 		emit : $('#emit'),
 		full : $('#full'),
 		content : $('.content'),
 		emitTop : $('#top'),
 		close : $('#close'),
		text: $('#text'),
		color : $('#color'),
		speed : $('#speed'),
		range : $('#range'),
 		player : $('#swich_player'),
 		control : $('#control'),
 		load : $('#load'),
 		troggle : $('#troggle'),
 		play_btn : $('#play_button'),
 		play_box : $('#play_box'),
 		minus : $('#minus'),
 		add : $('#add'),
 		currentTime : $('#currentTime'),
 		total : $('#total'),
 		danmakuList : $('#danmakuList'),
 	}
 	return DOM
    
 }

 export default Template
