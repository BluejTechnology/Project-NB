<template>
	<div class="share_wrap" v-show="isShow">
		<div class="share_mvp" @click="sharemvp">
			<i class="icon_share"></i>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
		mounted(){
				// this.isInApp();
		},
		methods: {
			sharemvp(){
				//拉起欢遇客户端分享
				this.mvpshare();
			},
			showMask() {
				this.isShow = true;
			},
			hideMask() {
				this.isShow = false;
			},
			isInApp(){
				//是否在手Q false则不是
				let isMobileQQ = window.mqq.device.isMobileQQ();
				//是否在微信 false则不是
				let isWechat = !(typeof top.window.WeixinJSBridge === 'undefined' ||
				!top.window.WeixinJSBridge.invoke);
	  			if(!isMobileQQ && !isWechat){
					  this.isShow=true;

				}
			},
			mvpshare() {
				// let share_url = window.share_url;
				// let share_url = 
				// 'https://qzi.html5.qq.com/fission_activitie/#/home?type=3&uuid=73801e5f-c04c-4d02-8853-6331d2dcea06';
				// let search = share_url.slice(share_url.lastIndexOf("?")+1);
				// let temp_arr = search.split("&");
				// let str='';
				// temp_arr.forEach((item)=>{
				// 	let t_arr = item.split("=");
				// 	str+=`${t_arr[0]}=${encodeURIComponent(t_arr[1])}&`;
				// })
				// str=str.slice(0,-1);
				// alert("shareurl");
				// alert("https://qzi.html5.qq.com/fission_activitie/#/home?"+"aaa=bbb&cc=dd");
				mvpApp.bridge.callHandler(
				{
					module: "QZCommon",
					method: "share",
					query: {
					url: "https://qzi.html5.qq.com/fission_activitie/#/home?"+"aaa=bbb&cc=dd",
					title: window.title,
					summary: window.desc,
					panelTitle: "发送到",
					channel: "4",
					imgUrl: window.image_url
					}
				},
				data => {
					MtaH5.clickStat("global_share", {
					uuid: window.m_getCookie("UUID")
					});
					console.log(data);
				},
				err => {
					console.log("err", err);
				}
				);
    }
		}
	}
</script>

<style lang="scss">
	@import "~@/assets/scss/util";
	.share_wrap{
		position:fixed;
		right: v(40);
		top: v(142);
		z-index:30;

		width: v(75);
		height: v(75);
	}
	.share_mvp {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.icon_share {
		display: block;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url(//yoo.qpic.cn/yoo_img/0/35ecf0ac3fe4f92a18b24d2095b79ed3/0);
		background-position: center;
	}
</style>
