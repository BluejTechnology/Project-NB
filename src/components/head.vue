<template>
	<div class="header">
		<img :src="getTitleUrl" crossOrigin='anonymous' alt="htitle" class="htitle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:['getTitleUrl'],
	data(){
		return {
		} 
	},
	created(){
		// window.console.log("当前titleUrl",this.getTitleUrl) 
	},
}
</script>

<style lang="scss">
	@import '~@/assets/scss/util';
	.header{
		position: relative;
		
	}
	.htitle{
		display: block;
		width: v(698);
		margin: 0 auto;
	}
</style>
