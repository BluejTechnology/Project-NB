<template>
    <div class="result_box" v-cloak>
        <div class="result">
            <div class="main">
                <mheader
                    class="header"
                    :getTitleUrl="titleUrl"
                    :titleType="'result'"
                ></mheader>
                <div class="content">
                    <div class="cardBox">
                        <img src="../assets/images/resultCard.png" alt />
                    </div>
                    <div class="vatar_box">
                        <img
                            src="//yoo.qpic.cn/yoo_img/0/65de1118e8876dcce293afe37f1c15b6/0"
                            alt
                        />
                        <div
                            class="user_vatar_box"
                        >
                            <img crossorigin="Anonymous" :src="user_vatar" alt /> 
                        </div>
                        <div class="grade">{{ gradeData }}</div>
                        <div class="des" v-html="desData"></div>
                    </div>
                    <div class="tip_box">
                        <p>本测试仅供娱乐</p>
                    </div>
                    <div class="btn_box">
                        <img
                            @click="showImage"
                            src="//yoo.qpic.cn/yoo_img/0/c9ffec292d13f0c0e8896ccd8985a141/0"
                        />
                        <img
                            @click="toDownload"
                            src="//yoo.qpic.cn/yoo_img/0/a9e261b9e1346515362efdf8d8f6018b/0"
                        />
                    </div>
                </div>
                <div class="cloud_l">
                    <img src="../assets/images/cloud02.png" alt />
                </div>
                <div class="cloud_r">
                    <img src="../assets/images/cloud01.png" alt />
                </div>
                <leftTree class="left_tree"></leftTree>
                <rightTree class="right_tree"></rightTree>
                <img class="bgCloud" src="../assets/images/bgCloud.png" alt />
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="欢遇logo" />
                </div>
            </div>
        </div>
        <!-- 下面是海报结构	 -->
        <div class="result posterCanvas" ref="posterCanvas">
            <div class="main">
                <mheader
                    class="header"
                    :getTitleUrl="titleUrl"
                    :titleType="'result'"
                ></mheader>
                <div class="content">
                    <div class="cardBox">
                        <img src="../assets/images/resultCard.png" alt />
                    </div>
                    <div class="vatar_box">
                        <img
                            src="//yoo.qpic.cn/yoo_img/0/65de1118e8876dcce293afe37f1c15b6/0"
                            alt
                        />
                        <div
                            class="user_vatar_box"
                        >
                            <img crossorigin="Anonymous" :src="user_vatar" alt /> 
                        </div>
                        <div class="grade">{{ gradeData }}</div>
                        <div class="des" v-html="desData"></div>
                    </div>
                    <div class="qr_box">
                        <canvas ref="qrCanvas"></canvas>
                    </div>
                    <div class="tip">
                        长按设别二维码
                        <br />测测你的桃花运
                    </div>
                </div>
                <leftTree class="left_tree"></leftTree>
                <rightTree class="right_tree"></rightTree>
                <img class="bgCloud" src="../assets/images/bgCloud.png" alt />
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="欢遇logo" />
                    <p>视频相亲&nbsp;欢乐相遇</p>
                </div>
            </div>
        </div>
        <!-- 下面是展示海报用 -->
        <div class="poster" v-if="showPoster" @click.self="showPoster = false">
            <img :src="outPoster" alt />
            <p @click.self="showPoster = false">长按保存图片分享</p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import mheader from "@/components/head.vue";
import leftTree from "@/components/base/left_tree.vue";
import rightTree from "@/components/base/right_tree.vue";
import QRCode from "qrcode"; // 引入qrcode
import html2canvas from "html2canvas";
import { mapState } from "vuex";
export default {
    components: {
        mheader,
        leftTree,
        rightTree
    },
    data() {
        return {
            user_vatar: "",
            showPoster: false,
            outPoster: ""
        };
    },
    async created() {
        // window.console.log(window.user_avator_data)
        // 传入头像临时地址,读取blob并转化为base64,回调内将结果写入user_vatar
        let res1 = await this.blobToBase64();
        let res2 = await this.outPutQr();
        this.outPutPoster()
        window.console.log(res1,res2)

        let m_uid = this.$utils.getCookie("UUID");
        window.MtaH5.clickStat("result_view", {
        uuid: m_uid
        });
    },
    mounted() {
        // window.console.log(type, result, uuid);
        let m_uid = this.$utils.getCookie("UUID"),
        m_url = this.$store.state.avatorCdn,
        result = this.$store.state.result.resID;
        window.MtaH5.clickStat("result_analyse", {
        parameter: JSON.stringify({
            uuid: m_uid,
            result_id: result,
            url: m_url
        })
        });
    },
    methods: {
        blobToBase64() {
        return new Promise((res,rej)=>{
            let blobUrl = window.user_avator_data;
            let a = new FileReader();
            a.onload = (e)=>{
            this.user_vatar = e.target.result;
            res('vatar ok')
            };
            a.readAsDataURL(blobUrl);
        })
        },
        outPutQr(){
        // 渲染二维码
        return new Promise((res,rej)=>{
            let type = this.$store.state.type;
            let result = this.$store.state.result.resID;
            let uuid = this.$utils.getCookie("UUID");
            QRCode.toCanvas(
            this.$refs.qrCanvas,
            `https://qzi.html5.qq.com/fission_activitie/#/?type=${type}&uuid=${uuid}&result=${result}`,
            {
                width: 200,
                height: 200
            },
            error => {
                if (error) window.console.error(error);
                // window.console.log("qr success!");
                res("qr success!")
            }
            );
        })
        },
        async outPutPoster(){
        html2canvas(this.$refs.posterCanvas, {
            useCORS: true
        }).then(canvas => {
            // console.time("toCanvas");
            let start = Date.now();
            window.console.log("buildPoster")
            let dataURL = canvas.toDataURL("image/jpeg", 0.5);
            window.console.log("endBuildPosBter")
            // alert(Date.now() - start);
            this.outPoster = dataURL;
        });
        },
        toDownload() {
        let m_uid = this.$utils.getCookie("UUID");
        window.MtaH5.clickStat("result_matching_btn", {
            parameter: JSON.stringify({
            uuid: m_uid,
            time: new Date().getTime()
            })
        });
        this.$router.push({
            name: "download"
        });
        },
        showImage() {
        window.console.log("海报!出现吧!");
        this.showPoster = true;
        window.console.log(this.showPoster);
        let m_uid = this.$utils.getCookie("UUID");
        window.MtaH5.clickStat("result_share_btn", {
            parameter: JSON.stringify({
            uuid: m_uid,
            time: new Date().getTime()
            })
        });
        // html2canvas(this.$refs.posterCanvas, {
        //   useCORS: true
        // }).then(canvas => {
        //   // console.time("toCanvas");
        //   let start = Date.now();
        //   let dataURL = canvas.toDataURL("image/jpeg", 0.5);
        //   // alert(Date.now() - start);
        //   this.outPoster = dataURL;
        // });
        }
    },
    computed: {
        ...mapState({
            gradeData: state => state.result.grade,
            desData: state => state.result.res_des,
            titleUrl: state => state.gameData.scene_title.res_title_url
        })
    }
};
</script>
<style lang="scss">
@import "~@/assets/css/reset.css";
@import "~@/assets/scss/util";

#app {
    height: 100%;
    overflow: hidden;
}

.result_box {
    height: 100%;
    position: relative;

    // 两个相似dom共用样式,海报在下面有修改
    .result {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-image: url(../assets/images/bg.png);
        background-position: center;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;

        .main {
            .header {
                z-index: 3;
            }

            .content {
                position: relative;
                margin-top: v(-200);
                z-index: 2;

                .cardBox {
                    width: v(507);
                    margin: 0 auto;

                    > img {
                        width: 100%;
                    }
                }

                .vatar_box {
                    width: v(260);
                    position: absolute;
                    top: v(30);
                    left: 50%;
                    transform: translateX(-50%);

                    .grade {
                        position: absolute;
                        font-size: v(44);
                        top: v(205);
                        left: 50%;
                        transform: translateX(-50%);
                        color: #ffffff;
                        font-weight: bold;
                    }

                    .des {
                        margin-top: v(-20);
                        text-align: center;
                        font-size: v(30);
                        color: #ffffff;
                        line-height: v(63);

                        i {
                            color: #f87bd1;
                            font-style: normal;
                        }
                    }

                    > img {
                        width: 100%;
                        transform: translateX(v(-1));
                    }

                    .user_vatar_box {
                        width: v(152);
                        height: v(152);
                        position: absolute;
                        top: v(43);
                        overflow: hidden;
                        border-radius: 50%;
                        left: 50%;
                        background-color: skyblue;
                        transform: translateX(-50%);
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;

                        img {
                            width: 100%;
                        }
                    }
                }

                .tip_box {
                    position: absolute;
                    width: 100%;
                    top: v(610);
                    text-align: center;
                    font-size: v(24);
                    color: #71416e;
                }

                .btn_box {
                    width: v(500);
                    margin: v(10) auto 0 auto;

                    img {
                        width: 100%;
                    }
                }
            }

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

            .left_tree {
                position: absolute;
                left: 0;
                bottom: v(450);
                z-index: 6;
            }

            .right_tree {
                position: absolute;
                right: 0;
                bottom: v(438);
                z-index: 6;
            }

            .bgCloud {
                width: 100%;
                position: absolute;
                bottom: 0;
            }

            .logo {
                position: absolute;
                width: 100%;
                left: 0;
                bottom: v(10);
                text-align: center;

                > img {
                    width: v(121);
                    height: v(49);
                }
            }
        }
    }

    .posterCanvas {
        height: v(1200);
        z-index: 3;
        left: 100%;
        .tip {
            color: white;
            margin-top: v(13);
            text-align: center;
            font-size: v(19);
            line-height: v(38);
        }

        .qr_box {
            text-align: center;
            margin: v(18) auto 0 auto;
            width: v(115);
            height: v(115);

            canvas {
                width: 100% !important;
                height: 100% !important;
            }
        }

        .main {
            .logo {
                position: absolute;
                left: v(24);
                bottom: v(48);
                color: #ffff;
                width: v(166) !important;
                font-size: 0;

                img {
                    width: 100%;
                    height: auto !important;
                }

                p {
                    width: 190%;
                    font-size: v(16);
                    letter-spacing: v(2);
                    position: absolute;
                    left: 50%;
                    bottom: v(-30);
                    transform: translate(-50%) scale(0.75);
                }
            }
        }
    }

    .poster {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.32);

        img {
            width: 92%;
            z-index: 9;
        }

        p {
            z-index: 9;
            position: absolute;
            bottom: v(40);
            text-align: center;
            color: white;
            width: 100%;
            margin-top: v(50);
        }
    }
}
</style>
