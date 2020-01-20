<template>
	<div class="bgm_wrapper" @click="switchPlay">
		<i class="btn_music" :class="{'sound-on':isPlay,'sound-off':!isPlay}"></i>
		<video src="../assets/test_bgm.mp3" preload loop ref="sound0"></video>
	</div>
</template>

<script>
	import {autoPlayMusic,musicPlay} from '@/assets/js/bgm.js';
	export default {
		data(){
			return {
				isPlay:true,
				sound0:""
			}
		},
		mounted(){
			this.sound0 = this.$refs.sound0;
			this.isPlay=this.$refs.sound0.paused;
			
			autoPlayMusic(this.$refs.sound0);
		},
		methods:{
			switchPlay(){
				this.isPlay=!this.isPlay;
				this.isPlay?musicPlay(this.sound0,false):musicPlay(this.sound0,false)
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/assets/scss/util';
	.bgm_wrapper{
		position: absolute;
		top: v(150);
		right: v(20);
		width: v(40);
		height: v(40);
		background-color: #fff;
		z-index: 3;
		>video{
			display: none;
		}
	}
	.btn_music{
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
