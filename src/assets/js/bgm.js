export function autoPlayMusic(media) {

	// function musicInBrowserHandler() {
	// 	musicPlay(media,true);
	// }

	function musicInWeixinHandler() {
		musicPlay(media,true);
		document.addEventListener("WeixinJSBridgeReady", function () {
			musicPlay(media,true);
		}, false);
		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
	}
	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
export function musicPlay(media,isPlay) {
	if (isPlay && media.paused) {
		media.play();
		console.log("播放")
	}
	if (!isPlay && !media.paused) {
		media.pause();
		console.log("暂停")
	}
}

	
