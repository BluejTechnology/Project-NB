<template>
	<div class="result_box">
		<div class="result">
			<div class="main">
				<mheader class="header">
				</mheader>
				<div class="content">
					<div class="cardBox">
						<img src="../assets/images/resultCard.png" alt="">
					</div>
					<div class="vatar_box">
						<img src="../assets/images/result_vatar.png" alt="">
						<div class="user_vatar_box">
							<img :src="user_vatar" alt="">
						</div>
						<div class="des" v-html="des">
						</div>
					</div>
					<div class="tip_box">
						<p>本测试仅供娱乐</p>
					</div>
					<div class="btn_box">
						<img @click="showImage" src="../assets/images/result_btn1.png">
						<img @click="toDownload" src="../assets/images/result_btn2.png">
					</div>
				</div>
				<leftTree class="left_tree"></leftTree>
				<rightTree class="right_tree"></rightTree>
				<img class="bgCloud" src="../assets/images/bgCloud.png" alt="">
				<div class="logo">
					<img src="../assets/images/logo.png" alt="欢遇logo">
				</div>
			</div>
		</div>
		<!-- 下面是海报结构	 -->
		<div class="result posterCanvas" ref='posterCanvas'>
			<div class="main">
				<mheader class="header"></mheader>
				<div class="content">
					<div class="cardBox">
						<img src="../assets/images/resultCard.png" alt="">
					</div>
					<div class="vatar_box">
						<img src="../assets/images/result_vatar.png" alt="">
						<div class="user_vatar_box"> 
							<img :src="user_vatar" alt="">
						</div> 
						<div class="des" v-html="des">
						</div>
					</div>
					<div class="qr_box">
						<canvas ref="qrCanvas"></canvas>
					</div>
					<div class="tip">
						长按设别二维码<br>
						测测你的桃花运
					</div>
				</div>
				<leftTree class="left_tree"></leftTree>
				<rightTree class="right_tree"></rightTree>
				<img class="bgCloud" src="../assets/images/bgCloud.png" alt="">
				<div class="logo">
					<img src="../assets/images/logo.png" alt="欢遇logo">
					<p>视频相亲&nbsp;欢乐相遇</p>
				</div>
			</div>
		</div>
		<!-- 下面是展示海报用 -->
		<div class="poster" v-if="showPoster" @click.self="showPoster=false">
			<img :src="outPoster" alt="">
			<p @click.self="showPoster=false">长按保存图片分享</p>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import mheader from "@/components/head.vue";
	import leftTree from "@/components/base/left_tree.vue";
	import rightTree from "@/components/base/right_tree.vue";
	import QRCode from "qrcode"; // 引入qrcode
	import html2canvas from 'html2canvas';
	export default {
		components: {
			mheader,
			leftTree,
			rightTree
		},
		data(){
			return {
				user_vatar:this.$store.state.vatarCDN,
				des:null,
				showPoster:false,
				outPoster:''
			}
		}, 
		created(){
			// 获取本次游戏结果的描述:
			this.des = '如果<i>美貌有罪</i><br>你会被关到一百岁<br>如果追你要排队<br>我宁愿今晚不睡!'
		},
		mounted(){
			let type = this.$store.state.type;
			let result = this.$store.state.result;
			let uuid = document.cookie.slice(5);
			window.console.log(type,result,uuid)
			// 渲染二维码
			QRCode.toCanvas(
				this.$refs.qrCanvas,
				`http://www.baidu.com?type=${type}&uuid=${uuid}&result=${result}`,
				{ width: 115, height: 115 },
				(error)=>{
					if (error) window.console.error(error);
					window.console.log("qr success!");
					// 二维码生成后生成海报
					html2canvas(this.$refs.posterCanvas,{
						backgroundColor: null
					}).then((canvas) => {
						let dataURL = canvas.toDataURL("image/png");
						window.console.log(6666);
						this.outPoster = dataURL;
					});
				}
			);
			
		},
		methods:{
			toDownload(){
				this.$router.push({name:"download"})
			},
			showImage() {
				window.console.log("海报!出现吧!")
				this.showPoster = true;
				window.console.log(this.showPoster)
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
	.result_box{
		height:100%;
		position:relative;
		// 两个相似dom共用样式,海报在下面有修改
		.result{
			display: flex;
			height: 100%;
			width:100%;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			background-repeat: no-repeat;
			background-image: url(../assets/images/bg.png);
			background-position: center;
			background-size:cover;
			position: absolute;
			top:0;
			left:0;
			z-index:9;
			.main{
				.header{
					z-index: 3;
				}
				.content{
					position: relative;
					margin-top: v(-200);
					z-index: 2;
					.cardBox{
						width: v(507);
						margin: 0 auto;
						>img{
							width: 100%;
						}
					}
					.vatar_box{
						width:v(260);
						position:absolute;
						top: v(30);
						left: 50%;
						transform: translateX(-50%);
						.des{
							margin-top: v(-20);
							text-align: center;
							font-size: v(30);
							color: #ffffff;
							line-height: v(63);
							i{
								color: #f87bd1;
								font-style:normal;
							}
						}
						>img{
							width: 100%;
							transform: translateX( v(-1) );
						}
						.user_vatar_box{
							width: v(152);
							height: v(152);
							position:absolute;
							top: v(43);
							overflow: hidden;
							border-radius: 50%;
							left:50%;
							background-color:skyblue;
							transform: translateX(-50%);
							img{
								width: 100%;
							}
						}
					}
					.tip_box{
						position: absolute;
						width:100%;
						top: v(610);
						text-align: center;
						font-size: v(24);
						color: #71416e;
					}
					
					.btn_box{
						width: v(500);
						margin: v(10) auto 0 auto;
						img{
							width : 100%;
						}
					}
				}
				.left_tree{
					position: absolute;
					left: 0;
					bottom: v(509);
					z-index:3;
				}
				.right_tree{
					position: absolute;
					right: 0;
					bottom: v(438);
					z-index:3;
				}
				.bgCloud{
					width: 100%;
					position: absolute;
					bottom: 0;
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
			}
		}
		.posterCanvas{
			height:v(1200);
			z-index:3;
			.tip{
				color:white;
				margin-top: v(13);
				text-align: center;
				font-size: v(19);
				line-height: v(38);
			}
			.qr_box{
				text-align: center;
				margin: v(18) auto 0 auto;
				width: v(115);
				height: v(115);
				canvas{
					width: 100% !important;
					height: 100% !important;
				}
			}
			.main{
				.logo{
					position:absolute;
					left : v(24);
					bottom: v(48);
					color: #ffff;
					width: v(166) !important;
					font-size: 0;
					img{
						width: 100%;
						height: auto !important;
					}
					p{
						width:190%;
						font-size:v(16);
						letter-spacing: v(2);
						position:absolute;
						left: 50%;
						bottom: v(-30);
						transform:translate(-50%) scale(0.75);
					}
				}
			}
		}
		.poster{
			position:fixed;
			width:100vw;
			height:100vh;
			z-index:99;
			background-color:rgba(0,0,0,0.6);
			display:flex;
			justify-content:center;
			align-items: center;
			flex-wrap: wrap;
			flex-direction: column;
			img{
				border-radius: 8px;
				width:85%;
				box-shadow: 0 0 15px white;
			}
			p{
				position:absolute;
				bottom: v(40);
				text-align: center;
				color: white;
				width: 100%;
				margin-top: v(50);
			}
		}
	}
	
	
</style>
