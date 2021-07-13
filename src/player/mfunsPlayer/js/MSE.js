export function addFlv() {
	return new Promise((resolve, reject) => {
		var secScript = document.createElement("script");
		secScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js");
		document.body.appendChild(secScript)
		
		function checkFlv() {
			setTimeout(()=>{
				if (window.flvjs) {
				resolve()
			} else {
                checkFlv()
				// reject()
			}
			},10)
		}
        checkFlv()


	})
}

export function initMSE(video, url) {

	if (flvjs.isSupported()) {
		var flvPlayer = flvjs.createPlayer({
			type: 'flv',
			url,
		});
		flvPlayer.attachMediaElement(video);
		flvPlayer.load(); //加载
	}

	function flv_start() {
		player.play();
	}

	function flv_pause() {
		player.pause();
	}

	function flv_destroy() {
		player.pause();
		player.unload();
		player.detachMediaElement();
		player.destroy();
		player = null;
	}

	function flv_seekto() {
		player.currentTime = parseFloat(document.getElementsByName('seekpoint')[0].value);
	}
}
