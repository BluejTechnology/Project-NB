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
function musicPlay(media,isPlay) {
	if (isPlay && media.paused) {
		media.play()
		.catch(()=>{
			window.console.log("浏览器不能自动播放")
		})
	}
	if (!isPlay && !media.paused) {
		media.pause();
	}
	
}

	
