<template>
	<div class="header">
		<img v-if="titleType=='result'" :src="require('../assets/images'+getTitleUrl)" crossOrigin='anonymous' alt="htitle" class="htitle">
		<img v-else :src="getTitleUrl" crossOrigin='anonymous' alt="htitle" class="htitle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:['getTitleUrl','titleType'],
	data(){
		return {
		} 
	},
	created(){
		window.console.log("当前props",this.getTitleUrl,this.titleType) 
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
