<template>
	<div class="share_wrap" v-show="isShow">
		<div class="share_mvp" @click="showMask">
			<i class="icon_share"></i>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		mounted(){

		},
		methods: {
			sharemvp(){

			},
			showMask() {
				this.isShow = true;
			},
			hideMask() {
				this.isShow = false;
			}
		}
	}
</script>

<style lang="scss">
	@import "~@/assets/scss/util";
	.share_wrap{
		position:fixed;
		right: 3vw;
		top: 10vw;
		z-index:10;

		width: v(50);
		height: v(50);
	}
	.share_mvp {
		width: v(50);
		height: v(50);
		border-radius: 50%;
		background-color: rgba(0, 0, 0, .6);
	}

	.icon_share {
		display: block;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url(//yoo.qpic.cn/yoo_img/0/6d8e76d748f57afcab0cc94f22f3e209/0);
		background-position: 50%;
		transform: scale(0.6);
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, .8);
		z-index: 10;
	}

	.mtitle {
		padding: v(10) 0;
	}

	.botwrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		text-align: center;
	}

	.logowrapper {
		width: 100%;
		padding: v(10);

		>img {
			display: block;
			width: v(80);
			margin: 0 auto;
		}
	}

	.btn_hide {
		width: 100%;
		background-color: #fff;
		text-align: center;
		padding: v(20) 0;
		border-top: 1px solid #ccc;
	}
</style>
