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
					<div class="avator" :style="{'background-image':'url('+avatorUrl+')'}">
						
					</div>
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
						<input type="file" ref="uploadpic">
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
	import mheader from "@/components/head.vue";
	import leftTree from "@/components/base/left_tree.vue";
	import rightTree from "@/components/base/right_tree.vue";
	import avatorUrl from '@/assets/images/default_avator.jpg';
	import logo from '@/components/base/logo.vue';
	import axios from "axios";
	export default {
		name: 'home',
		components: {
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
		created(){
			
		},
		mounted(){
			// 侦听input
			this.$refs["uploadpic"].onchange = (e) => {
				this.isupload = true;
				let file = e.target.files[0];
				this.avatorUrl = this.getObjectURL(file) ;
				let reader = new FileReader();
				reader.onload = async () => {
					// this.avatorUrl = reader.result;
					try{
						let filecontent = reader.result;
						let res1 = await this.first_step(file.name)
						let res2 = await this.second_step(res1.Sign,filecontent)
						let res3 = await this.third_step(res1.CDNUrl)
						window.console.log(res1,res2,res3)
						setTimeout(() => {
							this.$router.push({name:'result'})
						}, 3000);
					}catch(e){
						window.console.log('报错拉！',e.message)
					}
				};
				reader.readAsArrayBuffer(file);
			};
		},
		methods: {
			getObjectURL(file){
			    var url = null;
				if(window.createObjectURL!=undefined){
				      url = window.createObjectURL(file);
				    }else if(window.URL!=undefined){
				      url = window.URL.createObjectURL(file) ;
				    }else if(window.webkitURL!=undefined){
				      url = window.webkitURL.createObjectURL(file) ;
				    }
			    return url;
			  },
			async first_step(fileName){
				return axios
						.post("/fcgi/gwlogout/GetTencentCloudInfo", {
							BizID: "QZ",
							File: fileName
						}).then(res=>{
							if (res.status !== 200 || !res.data) {
								Promise.reject("请求第一步报错");
							}
							return res.data
						})
			},
			async second_step(url,filecontent){
				return axios.put(url, filecontent).then(res => {
					if (res.status !== 200 ) {
						Promise.reject("请求第二步报错");
					}
					return res.data
				})
			},
			async third_step(picUrl){
				return axios.post("/fcgi/gwlogout/ImgVerify", {
						BIZID: "QZ",
						ImgURL: picUrl
					}).then(res => {
						if (res.status !== 200 || !res.data) {
							Promise.reject("请求第三步报错");
						}
						return res.data
				})
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
		>.avator{
			width: 100%;
			height: 100%;
			background-size:contain ;
			background-position: center;
			background-repeat: no-repeat;
			background-color: #730065;
			>img{
				width: 100%;
			}
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
