<template>
	<div class="bgm_wrapper" @click="switchPlay">
		<i class="btn_music" :class="{'sound-on':isPlay,'sound-off':!isPlay,'active':isPlay}"></i>
		<video src="../assets/test_bgm.mp3" preload loop ref="sound0"></video>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isPlay: true,
				sound0: ""
			}
		},
		mounted() {
			this.sound0 = this.$refs.sound0;
			this.isPlay = this.$refs.sound0.paused;
			this.autoPlayMusic(this.$refs.sound0);
		},
		methods: {
			autoPlayMusic(media){
				// function musicInBrowserHandler() {
				// 	musicPlay(media,true);
				// }
				var that = this;
				function musicInWeixinHandler() {
					that.musicPlay(media,true);
					document.addEventListener("WeixinJSBridgeReady", function () {
						that.musicPlay(media,true);
					}, false);
					document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
				}
				document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
			},
			musicPlay(media, isPlay) {
				if (isPlay && media.paused) {
					media.play()
						.catch(() => {
							this.isPlay = false;
							window.console.log("不能自动播放");
						})
				}
				if (!isPlay && !media.paused) {
					media.pause();
				}
			},
			switchPlay() {
				this.isPlay ?
					this.musicPlay(this.sound0, false) :
					this.musicPlay(this.sound0, true)

				this.toggleIsPlay();
			},
			toggleIsPlay() {
				this.isPlay = !this.isPlay;
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/assets/scss/util';
<<<<<<< HEAD
	.bgm_wrapper{
=======
	.bgm_wrapper {
>>>>>>> ea394dcf4d0ddb0d3aec879d3fe70b01c38a0978
		position: absolute;
		top: v(142);
		left: v(40);
		width: v(68);
		height: v(68);
		z-index: 3;
		& .active {
			animation-play-state: running;
		}

		>video {
			display: none;
		}
	}

	.btn_music {
		display: block;
		width: 100%;
		height: 100%;
		animation: rotate 2s linear infinite;
		animation-play-state: paused;
		background-size: contain;
	}
	.sound-on{
		background-image: url(../assets/images/sound_on.png);
	}
	.sound-off{
		background-image: url(../assets/images/sound_off.png);
	}
	@-webkit-keyframes rotate{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(720deg);
		}
	}
	@keyframes rotate{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(720deg);
		}
	}
</style>
