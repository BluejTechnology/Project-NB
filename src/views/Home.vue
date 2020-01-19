<template>
	<div class="web">
		<mheader>
			<!-- 208-184 -->
			<img src="../assets/images/angle.png" alt="" class="icon_angle">
		</mheader>
		<div class="hcontent">
			<div class="window">
				<img src="../assets/images/window.png" alt="">
				<div class="avator_wrapper">
					<img :src="avatorUrl" alt="">
				</div>
				<left-tree></left-tree>
				<right-tree></right-tree>
			</div>
			<div class="upload_wrapper">
				<div class="upload_btn">
					<!-- 474-92 -->
					<label>
						<img src="../assets/images/upload_btn_12.png" alt="">
						<input type="file" @change="uploadAvator">
					</label>
				</div>
				<span>上传本人照片，获得新年桃花指数！</span>
			</div>
		</div>
		
		<div class="logo">
			<img src="../assets/images/logo.png" alt="欢遇logo">
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import mheader from "@/components/head.vue";
	import leftTree from "@/components/base/left_tree.vue";
	import rightTree from "@/components/base/right_tree.vue";
	import avatorUrl from '@/assets/images/default_avator.jpg';
	export default {
		name: 'home',
		components: {
			mheader,
			leftTree,
			rightTree

		},
		data(){
			return {
				avatorUrl:avatorUrl
			}
		},
		methods:{
			uploadAvator(e){
				this.uploadimage(e.target.files[0]);
			},
			// 上传image
			uploadimage(f) {
				let reads = new FileReader();
				var that = this;
				reads.readAsDataURL(f);
				reads.onload = function () {
					that.avatorUrl= this.result;
					setTimeout(()=>{
						that.$router.push({name:"download"})
					},3000)
				};
			}
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
		background-repeat: no-repeat;
		background-image: url(../assets/common_bg.jpg);
		background-position: center;
		background-size:cover ;
	}
	.hcontent{
		position: relative;
		.window{
			position: relative;
			top: v(-138);
			left: 0;
			width: 100%;
			>img{
				display: block;
				width: v(602);
				height: 100%;
				margin: 0 auto;
			}
		}
	}
	.avator_wrapper{
		position: absolute;
		top: v(132);
		left: v(207);
		width: v(338);
		height: v(338);
		background-color: #fff;
		>img{
			display: block;
			width: v(338);
			height: v(338);
			margin: 0 auto;
		}
	}
	.icon_angle{
		position: absolute;
		bottom: 0;
		left: v(25);
		width: v(208);
		height: v(184);
		z-index: 1;
	}
	.left_tree{
		position: absolute;
		left: 0;
		bottom: v(120);
	}
	.right_tree{
		position: absolute;
		right: 0;
		bottom: v(42);
	}
	.upload_wrapper{
		text-align: center;
		color: #fff;
		>span{
			font-size: v(28);
		}
	}
	.upload_btn{
		width: v(474);
		height: v(92);
		margin:  0 auto;
		img{
			display: block;
			width: 100%;
		}
		input{
			opacity: 0;
			display: none;
		}
	}
	.logo{
		position: absolute;
		width: 100%;
		left: 0;
		bottom: v(10);
		text-align: center;
		>img{
			width: v(121);
			height: v(49);
		}
		
	}
	.upload_wrapper{
		position: absolute;
		bottom:v(75);
		left: 0;
		width: 100%;
	}
</style>
