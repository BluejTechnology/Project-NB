<template>
	<div class="header">
		<img src="../assets/images/title.png" alt="htitle" class="htitle">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.header{
		position: relative;
		
	}
	.htitle{
		display: block;
		width: v(698);
		margin: 0 auto;
	}
</style>
