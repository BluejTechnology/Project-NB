<template>
  <div class="result_box" v-cloak>
    <div class="result">
      <div class="main">
        <mheader class="header" :getTitleUrl="titleUrl" :titleType="'result'"></mheader>
        <div class="content">
          <div class="cardBox">
            <img src="../assets/images/resultCard.png" alt />
          </div>
          <div class="vatar_box">
            <div class="vatar_wrapper" >
              <img src="//yoo.qpic.cn/yoo_img/0/65de1118e8876dcce293afe37f1c15b6/0" alt="" />
            </div>
            <div
              class="user_vatar_box"
              :style="{
                                'background-image': 'url(' + user_vatar + ')'
                            }"
            >
              <!-- <img :src="user_vatar" alt=""> -->
            </div>
            <div class="grade">{{ gradeData }}{{curType==3?"分":""}}</div>
            <div class="des" v-html="desData"></div>
          </div>
          <div class="tip_box">
            <p>本测试仅供娱乐</p>
          </div>
          <div class="btn_box">
            <div class="btn_wrap" @click="showImage">
                <img src="//yoo.qpic.cn/yoo_img/0/bdb018899124e106fe4f7ad9a95df0a4/0" alt="">
                <p>保存图片发朋友圈</p>
            </div>
            <div class="btn_wrap" @click="toDownload">
                <img src="//yoo.qpic.cn/yoo_img/0/bdb018899124e106fe4f7ad9a95df0a4/0" alt="">
                <p>{{$store.state.gameData.scene_title.to_down_btn}}</p>
            </div>
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
        <mheader class="header" :getTitleUrl="titleUrl" :titleType="'result'"></mheader>
        <div class="content">
          <div class="cardBox">
            <img src="../assets/images/resultCard.png" alt />
          </div>
          <div class="vatar_box">
            <div class="vatar_wrapper" >
              <img src="//yoo.qpic.cn/yoo_img/0/65de1118e8876dcce293afe37f1c15b6/0" alt="" />
            </div>
            <!-- <div
                            class="user_vatar_box"
                            :style="{
                                'background-image': 'url(' + user_vatar + ')'
                            }"
            >-->
            <div class="user_vatar_box">
              <img crossorigin="Anonymous" :src="user_vatar" alt />
            </div>
            <div class="grade">{{ gradeData }}{{curType==3?"分":""}}</div>
            <div class="des" v-html="desData"></div>
          </div>
          <div class="qr_box">
            <canvas ref="qrCanvas"></canvas>
          </div>
          <div class="tip">
            长按识别二维码
            <br />{{$store.state.gameData.scene_title.poster_title}}
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
import tools from "../libs/iphonePicture";
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
      outPoster: undefined,
      timerSwitch:true,
      availHeight:0
    };
  },
  async created() {
    console.log("result")
    this.user_vatar = window.user_avator;
    this.availHeight = window.screen.availHeight;
    let m_uid = this.$utils.getCookie("UUID");
  },
  mounted() {
    let type = this.$store.state.type;
    let result = this.$store.state.result.resID;
    let uuid = this.$utils.getCookie("UUID");
    window.console.log(type, result, uuid);
    // 渲染二维码
    QRCode.toCanvas(
      this.$refs.qrCanvas,
      `https://qzi.html5.qq.com/fission_activitie/#/?type=${type}&uuid=${uuid}&result=${result}`,
      {
        width: 200,
        height: 200
      },
      error => {
        if (error) window.console.error(error);
        window.console.log("qr success!");
      }
    );
    let m_uid = this.$utils.getCookie("UUID"),
      m_url = this.$store.state.avatorCdn;
    window.MtaH5.clickStat("result_view", {
      parameter: JSON.stringify({
		  type,
        uuid: m_uid,
        result_id: result,
        url: m_url
      })
    });
  },
  methods: {
    blobToBase64(blobUrl, callback) {
      //获取图片的Blob值
      // this.$axios({
      //     url: blobUrl,
      //     responseType: "blob"
      // }).then(res => {
      let a = new FileReader();
      a.onload = function(e) {
        // console.log("base64:", e.target.result);
        // let base64 = e.target.result.replace(
        //     "data:application/octet-stream;base64",
        //     "data:image/jpeg;base64"
        // );
        callback(e.target.result);
      };
      a.readAsDataURL(blobUrl);
      // });
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
      this.showPoster = true;// 显示海报dom结构
      this.buildPoster();
    },
    async buildPoster(){
      if(this.outPoster){
        console.log("走缓存吧少年")
        return
      }else{
        let m_uid = this.$utils.getCookie("UUID");
        window.MtaH5.clickStat("result_share_btn", {
          parameter: JSON.stringify({
            uuid: m_uid,
            time: new Date().getTime()
          })
        });
        let res = await html2canvas(this.$refs.posterCanvas, {
          useCORS: true
        })
        let dataURL = res.toDataURL("image/jpeg", 0.5);
        this.outPoster = dataURL;
      }
    }
  },
  computed: {
    ...mapState({
      gradeData: state => state.result.grade,
      desData: state => state.result.res_des,
      titleUrl: state => state.gameData.scene_title.res_title_url,
      curType:state =>state.type
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
          padding-top: v(654);
          margin: 0 auto;

          > img {
            position: absolute;
            top: v(0);
            width: v(507);
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
            font-size: v(32);
            text-align: center;
            top: v(220);
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            color: #ffffff;
            font-weight: bold;
          }

          .des {
            margin-top: v(-20);
            text-align: justify;
            font-size: v(30);
            color: #ffffff;
            line-height: v(63);
            width: v(290);
            position:absolute;
            left:50%;
            transform: translate(-50%);
            i {
              color: #f87bd1;
              font-style: normal;
            }
          }
          .vatar_wrapper{
            width: v(260);
            height: v(320);
          }
          img {
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
          .btn_wrap{
            position:relative;
            text-align: center;
            img {
              width: 100%;
            }
            p{
              position:absolute;
              top:v(27);
              width: 100%;
              color: #ae037c;
              font-size: v(35);
              text-shadow: 0 v(5) v(4) #fbbd4c;
              text-align: center;
            }
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
    background-color: rgba(0, 0, 0, 0.6);

    img {
      width: 85%;
      z-index: 9;
    }

    p {
      z-index: 9;
      position: absolute;
      bottom: v(100);
      text-align: center;
      color: white;
      width: 100%;
    }
  }
}
@media screen and (max-height:605px){
  .result_box .result{
    .main{
      width:88%;
      margin: 0 auto;
      .header{
        .htitle{
          width: 95%;
        }
      }
      .content{
        .cardBox{
          padding-top:v(580);
          img{
            top:v(-68);
          }
        }
        .vatar_box{
          top:v(-10);
        }
        .tip_box{
          top:v(540);
        }
      }
    }
  }
  .btn_wrap{
    font-size:0 !important;
    img {
      width: 80% !important;
    }
    p{
      top: v(16) !important;
    }

  }
}
@media screen and (max-height:645px){
  .result_box .poster p{
    bottom: v(60);
  }
  .result_box .poster img {
    width: 78%;
  }
}
</style>
