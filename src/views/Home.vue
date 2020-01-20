<template>
	<div class="web">
		<!-- <bgm></bgm> -->
		<!-- <wb-share></wb-share> -->
		<mheader>
			<!-- 208-184 -->
			<img src="../assets/images/angle.png" alt="" class="icon_angle">
		</mheader>
		<div class="hcontent">
			<div class="window">
				<img src="../assets/images/window.png" alt="">
				<div class="avator_wrapper">
					<img :src="avatorUrl" alt="">
					<img src="../assets/images/scan_icon.png" alt="" class="scan_icon ani_scan">
					<img src="../assets/images/scan_border.png" alt="" class="scan_border">
					
				</div>
				<left-tree></left-tree>
				<div class="l_cloud">
					<img src="../assets/images/left_cloud_02.png" alt="">
				</div>
				<div class="r_cloud">
					<img src="../assets/images/cloud01.png" alt="">
				</div>
				<right-tree></right-tree>
			</div>
			<div class="upload_wrapper" v-if="!isupload">
				<div class="upload_btn">
					<!-- 474-92 -->
					<label>
						<img src="../assets/images/upload_btn_12.png" alt="">
						<input type="file" @change="uploadAvator">
					</label>
				</div>
				<span>上传本人照片，获得新年桃花指数！</span>
			</div>
			<div class="loading_txt" v-if="isupload">
				智能解析中……
			</div>
		</div>
		<img src="../assets/images/bgCloud.png" alt="cloud" class="bgCloud">
		<div class="hlogo">
			<logo></logo>
		</div>
		
	</div>
</template>

<script>
	// @ is an alias to /src
	// import wbShare from "@/components/share/weibo_share.vue";
	// import bgm from '@/components/bgm.vue';
	import mheader from "@/components/head.vue";
	import leftTree from "@/components/base/left_tree.vue";
	import rightTree from "@/components/base/right_tree.vue";
	import avatorUrl from '@/assets/images/default_avator.jpg';
	import logo from '@/components/base/logo.vue';
	export default {
		name: 'home',
		components: {
			// bgm,
			// wbShare,
			mheader,
			leftTree,
			rightTree,
			logo
		},
		data() {
			return {
				avatorUrl: avatorUrl,
				isupload: false
			}
		},
		methods: {
			uploadAvator(e) {
				this.uploadimage(e.target.files[0]);
			},
			// 上传image
			uploadimage(f) {
				let reads = new FileReader();
				var that = this;
				reads.readAsDataURL(f);
				reads.onload = function () {
					that.avatorUrl= this.result;
					that.isupload = true;
					setTimeout(()=>{
						that.$router.push({name:"result"})
					},3000)
				};
			}
		}
	}
</script>
<style lang="scss">
	@import '~@/assets/css/reset.css';
	@import '~@/assets/scss/util';
	#app {
		height: 100%;
		overflow: hidden;
	}

	.web {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		background-repeat: no-repeat;
		background-image: url(../assets/images/bg.png);
		background-position: center;
		background-size: 100% 100%;
	}

	.hcontent {
		position: relative;

		.window {
			position: relative;
			top: v(-138);
			left: 0;
			width: 100%;

			>img {
				display: block;
				width: v(602);
				margin: 0 auto;
			}
		}
	}

	.avator_wrapper {
		position: absolute;
		top: v(132);
		left: v(207);
		width: v(338);
		height: v(338);
		background-color: #fff;
		overflow: hidden;

		>img {
			display: block;
			width: v(338);
			height: v(338);
			margin: 0 auto;
		}

		>.scan_border {
			position: absolute;
			top: 0;
			left:0;
			width: v(338);
			height: v(338);
		}
		.scan_icon{
			position: absolute;
			top: 120%;
			left:0;
			width: 100%;
			height: auto;
			// transform: translate3d(0,100%,0);
		}
	}

	.icon_angle {
		position: absolute;
		bottom: 0;
		left: v(25);
		width: v(208);
		height: v(184);
		z-index: 1;
	}

	.left_tree {
		position: absolute;
		left: 0;
		bottom: v(120);
	}
	.l_cloud{
		position: absolute;
		left: 0;
		bottom: v(60);
		width: v(90);
		height: v(67);
		>img{
			display: block;
			width: 100%;
		}
	}
	.r_cloud{
		position: absolute;
		right: v(-60);
		top: v(158);
		width: v(159);
		height: v(44);
		>img{
			display: block;
			width: 100%;
		}
	}
	.right_tree {
		position: absolute;
		right: 0;
		bottom: v(42);
	}

	.upload_wrapper {
		position: absolute;
		bottom: v(75);
		left: 0;
		width: 100%;
		text-align: center;
		color: #fff;
		z-index: 1;

		>span {
			font-size: v(28);
		}
	}

	.upload_btn {
		width: v(474);
		height: v(92);
		margin: 0 auto;

		img {
			display: block;
			width: 100%;
		}

		input {
			opacity: 0;
			display: none;
		}
	}

	.loading_txt {
		position: absolute;
		bottom: 10vw;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: v(25);
		color: #fff;
	}
	.bgCloud{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.hlogo {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: v(10);
		>.logo{
			margin: 0 auto;
		}
	}
	.ani_scan{
		animation: ani_scan 2.5s infinite;
	}
	@-webkit-keyframes ani_scan{
		from{
			top: 120%;
			opacity: 1;
		}
		to{
			top: -50%;
			opacity: 0.2;
		}
	}
	@keyframes ani_scan{
		from{
			top: 120%;
			opacity: 1;
		}
		to{
			top: -50%;
			opacity: 0.2;
		}
	}
	
</style>
