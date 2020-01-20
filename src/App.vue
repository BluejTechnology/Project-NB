<template>
  <div id="app">
	<bgm />
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
<script>
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
			// axios(url,qrInfo)

			let { type } = qrInfo;
			this.$store.commit("setGameData",type||"1");
		},
		components:{
			bgm
		}
	}
</script>