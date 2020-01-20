<template>
	<div>
		<div class="share_weibo" @click="showMask">
			<i class="icon_share"></i>
		</div>
		<transition name="fade">
			<div class="mask" v-if="isShowMask" @click="hideMask">
				<div class="botwrapper">
					<div class="mtitle">
						分享
					</div>
					<div class="logowrapper">
						<img src="../../assets/images/wblogo.png" alt="" @click="sharewb">
					</div>
					<div @click="hideMask" class="btn_hide">取消</div>
				</div>
			</div>
		
		</transition>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				isShowMask: false,

				baseUrl: "https://service.weibo.com/share/share.php",
				url:location.href,
				title: '从欢遇APP的10000名优质异性嘉宾中,为你找到桃花运势相近的TA们！',
				pic: "https://www.29663.com/uploadfile/2019/1219/20191219111236627.jpg",
				appkey: '',
				count: ''
			}
		},
		methods: {
			showMask() {
				this.isShowMask = true;
			},
			hideMask() {
				this.isShowMask = false;
			},
			sharewb() {
				const {
					baseUrl,
					url,
					title,
					pic,
					appkey,
					count
				} = this;
				let shareUrl = `${baseUrl}?url=${url}&title=${title}&pic=${pic}&count=${count}&appkey=${appkey}`;
				location.href = shareUrl;
			}
		}
	}
</script>

<style lang="scss">
	.share_weibo {
		position: absolute;
		top: 0;
		right: v(20);
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
		background-image: url(../../assets/images/icon_share.png);
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

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to
		{
		opacity: 0;
	}
</style>
