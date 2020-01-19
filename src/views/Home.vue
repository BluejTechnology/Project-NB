<template>
	<div class="web">
		<mheader></mheader>
	</div>
</template>

<script>
	// @ is an alias to /src
	import mheader from "@/components/head.vue";
	export default {
		name: 'home',
		components: {
			mheader


		},
		methods:{
			
		}
	}
</script>
<style lang="scss">
	@import '~@/assets/css/reset.css';
	#app{
		height: 100%;
		overflow: hidden;
	}
	.web{
		display: flex;
		height: 100%;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		background-image: url(../assets/common_bg.jpg);
		background-size:100% 100% ;
	}
	.emptybox{
		height: v(141);
	}
	.header{
		
	}
</style>
