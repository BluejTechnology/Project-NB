<template>
	<div class="downLoadPage">
		<div class="main">
			<div class="title">
				<p>从欢遇APP的10000名优质异性嘉宾中</p>
				<p>为你找到桃花运势相近的TA们！</p>
			</div>
			<div class="content">
				<div class="angle angle_left">
					<img src="../assets/images/angle.png" alt="">
				</div>
				<div class="angle angle_right">
					<img src="../assets/images/angle.png" alt="">
				</div>
				<div class="vatar_box">	
					<div class="user_vatar">
						<img src="" alt="">
					</div>
					<div class="random_vatar">
						<div v-for="(item,index) in otherVatar" class="randomVatar" :key="index">
							<img :src="item" alt="">
						</div>
					</div>
				</div>
				<p class="des">下载欢遇APP，红娘帮你撮合和TA们的桃花缘！</p>
				<div class="download_btn_box">
					<a href="https://cftweb.3g.qq.com/qqappstore/index"><img src="../assets/images/downloadBtn.png" alt=""></a>
				</div>
			</div>
		</div>
		<div class="cloud_l">
			<img src="../assets/images/cloud02.png" alt="">
		</div>
		<div class="cloud_r">
			<img src="../assets/images/cloud01.png" alt="">
		</div>
		<img class="bgCloud" src="../assets/images/bgCloud.png" alt="">
		<img class="logoImg" src="../assets/images/logo.png" alt="">
	</div>
</template>

<script>
	// @ is an alias to /src
	export default {
		data(){
			return {
				otherVatar:[],// 其他随机头像
			}
		},
		created(){
			this.getOtherVatar()
		},
		components: {

		},
		methods:{
			getOtherVatar(){
				// let mockData = [
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// 	{url:require('../assets/images/test/test01.jpg')},
				// 	{url:require('../assets/images/test/test02.jpg')},
				// 	{url:require('../assets/images/test/test03.jpg')},
				// ];
				// 请求随机头像
				// this.otherVatar = mockData;
				this.otherVatar = window.femalePicUrl.concat(window.malePicUrl);
			}
		}
	}
</script>
<style lang="scss">
@import "~@/assets/css/reset.css";
@import "~@/assets/scss/util";
.downLoadPage {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-image: url(../assets/images/bg.png);
    background-size: 100% 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    .cloud_l {
        position: absolute;
        top: v(920);
        left: v(-80);
        width: v(170);
        z-index: 2;
        img {
            width: 100%;
        }
    }
    .cloud_r {
        position: absolute;
        top: v(550);
        right: v(-60);
        width: v(160);
        z-index: 2;
        img {
            width: 100%;
        }
    }
    .bgCloud {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .logoImg {
        width: v(165);
        position: absolute;
        bottom: v(27);
        left: 50%;
        z-index: 2;
        transform: translateX(-50%);
    }
    .main {
        height: v(1079);
        // border: 1px solid skyblue;
        color: white;
        position: relative;
        z-index: 2;
        .title {
            text-align: center;
            font-size: 12px;
            letter-spacing: 1px;
            line-height: 12px;
            padding: v(40) 0 v(11) 0;
            p {
                &:first-child {
                    margin-bottom: v(22);
                }
            }
        }
        .content {
            height: v(903);
            margin: 0 auto;
            background-image: url("../assets/images/content_bg.png");
            background-size: 100%;
            background-repeat: no-repeat;
            position: relative;
            .angle {
                position: absolute;
                width: v(126);
                top: v(-30);
                img {
                    width: 100%;
                }
            }
            .angle_left {
                left: v(45);
                transform: rotate(-30deg);
            }
            .angle_right {
                right: v(45);
                transform: rotate(30deg) scaleX(-1);
            }
            .des {
                position: absolute;
                bottom: v(219);
                font-size: v(25);
                text-align: center;
                width: 100%;
            }
            .download_btn_box {
                position: absolute;
                bottom: v(85);
                left: 50%;
                transform: translateX(-50%);
                width: v(484);
                height: v(110);
                img {
                    width: 100%;
                }
            }
            .vatar_box {
                position: relative;
                .user_vatar {
                    width: v(175);
                    height: v(175);
                    position: absolute;
                    top: v(262);
                    left: 50%;
                    transform: translateX(-50%);
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: #660e61;
                    img {
                        width: 100%;
                    }
                }
                .random_vatar {
                    div {
                        border-radius: 50%;
                        overflow: hidden;
                        background: pink;
                        position: absolute;
                        img {
                            width: 100%;
                        }
                        &:nth-child(1) {
                            top: v(68);
                            left: 50%;
                            transform: translateX(-50%);
                            width: v(50);
                            height: v(50);
                            opacity: 0.5;
                        }
                        &:nth-child(2) {
                            top: v(137);
                            left: v(214);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(3) {
                            top: v(137);
                            right: v(214);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(4) {
                            top: v(146);
                            left: 50%;
                            transform: translateX(-50%);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(5) {
                            top: v(227);
                            left: v(108);
                            width: v(48);
                            height: v(48);
                            opacity: 0.5;
                        }
                        &:nth-child(6) {
                            top: v(227);
                            right: v(108);
                            width: v(50);
                            height: v(50);
                            opacity: 0.5;
                        }
                        &:nth-child(7) {
                            top: v(236);
                            left: v(175);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(8) {
                            top: v(236);
                            right: v(175);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(9) {
                            top: v(372);
                            left: v(175);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(10) {
                            top: v(372);
                            right: v(175);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(11) {
                            top: v(328);
                            left: v(78);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(12) {
                            top: v(328);
                            right: v(78);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(13) {
                            top: v(453);
                            left: v(108);
                            width: v(48);
                            height: v(48);
                            opacity: 0.5;
                        }
                        &:nth-child(14) {
                            top: v(453);
                            right: v(108);
                            width: v(50);
                            height: v(50);
                            opacity: 0.5;
                        }
                        &:nth-child(15) {
                            top: v(518);
                            left: v(214);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(16) {
                            top: v(518);
                            right: v(214);
                            width: v(60);
                            height: v(60);
                        }
                        &:nth-child(17) {
                            top: v(459);
                            left: 50%;
                            transform: translateX(-50%);
                            width: v(93);
                            height: v(93);
                        }
                        &:nth-child(18) {
                            top: v(579);
                            left: 50%;
                            transform: translateX(-50%);
                            width: v(50);
                            height: v(50);
                            opacity: 0.5;
                        }
                    }
                }
            }
        }
    }
}
</style>
