<template>
  <div id="app">
	<bgm />
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
<script>
	import axios from "axios";
	import bgm from '@/components/bgm.vue';
	export default {
		data(){ 
			return {
				
			}
		},
		created(){
			// window.console.log(this.$route)
			// window.console.log(this.$route.query)
			let qrInfo = this.$route.query;

			// 上报上一个分享二维码被打开了
			window.console.log(axios)
			// axios(url,qrInfo)

			let { type } = qrInfo;
			// 存入游戏类型,用于后续取文案区间 1对应 1-50,以此类推
			this.$store.commit("setType",type);
		},
		components:{
			bgm
		}
	}
</script>