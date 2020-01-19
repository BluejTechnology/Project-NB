<template>
	<div class="bannerWrap" @click="gotoUpload">
		测一测你的新年桃花运
	</div>
</template>

<script>
	export default {
		methods:{
			gotoUpload(){
				console.log("gotoUpload")
			}
		}
	}
</script>

<style>
	.bannerWrap{
		width: 100%;
		border: 1px solid #000;
		height: 44vw;
	}
</style>
