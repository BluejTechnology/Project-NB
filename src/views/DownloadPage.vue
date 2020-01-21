<template>
  <div class="downLoadPage" v-cloak>
    <div class="main">
      <div class="title">
        <p v-html="down_title1">
          从欢遇APP的10000名优质异性嘉宾中
          <br />为你找到桃花运势相近的TA们！
        </p>
      </div>
      <div class="content">
        <animation></animation>
        <div class="angle angle_left">
          <img src="//yoo.qpic.cn/yoo_img/0/4a76508b31bc74db0ed05cc2165ead87/0" alt />
        </div>
        <div class="angle angle_right">
          <img src="//yoo.qpic.cn/yoo_img/0/4a76508b31bc74db0ed05cc2165ead87/0" alt />
        </div>
        <div class="vatar_box">
          <div
            class="user_vatar"
            :style="{
                            'background-image': 'url(' + user_avator + ')'
                        }"
          ></div>
          <div class="random_vatar">
            <div v-for="(item, index) in otherVatar" class="randomVatar" :key="index">
              <img :src="item" alt />
            </div>
          </div>
        </div>
        <p class="des" v-html="down_title2">下载欢遇APP，红娘帮你撮合和TA们的桃花缘！</p>
        <div class="download_btn_box">
          <a @click="download_mta" :href="btn_url">
            <img src="../assets/images/downloadBtn.png" alt />
          </a>
        </div>
      </div>
    </div>
    <div class="cloud_l">
      <img src="../assets/images/cloud02.png" alt />
    </div>
    <div class="cloud_r">
      <img src="../assets/images/cloud01.png" alt />
    </div>
    <img class="bgCloud" src="../assets/images/bgCloud.png" alt />
    <img class="logoImg" src="../assets/images/logo.png" alt />
  </div>
</template>

<script>
// @ is an alias to /src
import animation from "@/views/animation.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      otherVatar: [], // 其他随机头像
      user_avator: "",
      btn_url: ""
    };
  },
  created() {
    let m_uid = this.$utils.getCookie("UUID");
    window.MtaH5.clickStat("matching_view", {
      uuid: m_uid
    });
    this.getOtherVatar();
    this.btn_url = this.getBtnUrl();
    window.console.log("全局头像数据", window.user_avator_data);
    let a = new FileReader();
    a.onload = e => {
      console.log("base64:", e.target.result);
      // let base64 = e.target.result.replace(
      //     "data:application/octet-stream;base64",
      //     "data:image/jpeg;base64"
      // );
      this.user_avator = e.target.result;
    };
    a.readAsDataURL(window.user_avator_data);
  },
  components: {
    animation
  },
  computed: {
    ...mapState({
      down_title1: state => state.gameData.scene_title.down_title1,
      down_title2: state => state.gameData.scene_title.down_title2,
      useSex: state => state.useSex
    })
  },
  methods: {
    //判断访问终端
    getBtnUrl() {
      var u = navigator.userAgent,
        isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      //三元运算
      let andUrl =
        "http://a.app.qq.com/o/simple.jsp?pkgname=com.demeter.eggplant&ckey=CK1448971972105";
      let iosUrl = "https://wj.qq.com/s2/5276144/2329/";
      return isAndroid ? andUrl : iosUrl;
    },
    getOtherVatar() {
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
      window.femalePicUrl = window.femalePicUrl || [];
      window.malePicUrl = window.malePicUrl || [];
      this.otherVatar =
        this.useSex == 1 ? window.femalePicUrl : window.malePicUrl;
    },
    download_mta() {
      var _event,
        UAParser = require("ua-parser-js"),
        parser = new UAParser(),
        is_ios = 1;
      if (parser.getOS().name == "iOS") {
        is_ios = 1;
      } else {
        is_ios = 0;
      }
      let m_uid = this.$utils.getCookie("UUID");
      window.MtaH5.clickStat("matching_download_btn", {
        parameter: JSON.stringify({
          uuid: m_uid,
          is_ios: is_ios
        })
      });
      window.MtaH5.clickStat("taohuayun", {
        matchingdownloadbtn: "true"
      });
    }
  }
};
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
  z-index: 4;
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
      letter-spacing: 1px;
      padding: v(40) 0 v(11) 0;

      p {
        font-size: v(24);
        line-height: v(46);
      }
    }

    .content {
      height: v(903);
      margin: 0 auto;
      background-image: url("//yoo.qpic.cn/yoo_img/0/0aaf65a4dada537ad528fd0eb86a74f5/0");
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
        // bottom: v(219);
        bottom: v(193);
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
          z-index: 3;
          transform: translateX(-50%);
          overflow: hidden;
          border-radius: 50%;
          background-color: #660e61;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .random_vatar {
          div {
            border-radius: 50%;
            overflow: hidden;
            background: pink;
            position: absolute;
            opacity: 0;
            animation: fly 1s 0.5s;
            animation-timing-function: cubic-bezier(0.25, 0.1, 0.64, 1.38);
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
              opacity: 1;
            }

            &:nth-child(3) {
              top: v(137);
              right: v(214);
              width: v(60);
              height: v(60);
              opacity: 1;
            }

            &:nth-child(4) {
              top: v(146);
              left: 50%;
              transform: translateX(-50%);
              width: v(93);
              height: v(93);
              opacity: 1;
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
              opacity: 1;
            }

            &:nth-child(8) {
              top: v(236);
              right: v(175);
              width: v(93);
              height: v(93);
              opacity: 1;
            }

            &:nth-child(9) {
              top: v(372);
              left: v(175);
              width: v(93);
              height: v(93);
              opacity: 1;
            }

            &:nth-child(10) {
              top: v(372);
              right: v(175);
              width: v(93);
              height: v(93);
              opacity: 1;
            }

            &:nth-child(11) {
              top: v(328);
              left: v(78);
              width: v(60);
              height: v(60);
              opacity: 1;
            }

            &:nth-child(12) {
              top: v(328);
              right: v(78);
              width: v(60);
              height: v(60);
              opacity: 1;
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
              opacity: 1;
            }

            &:nth-child(16) {
              top: v(518);
              right: v(214);
              width: v(60);
              height: v(60);
              opacity: 1;
            }

            &:nth-child(17) {
              top: v(459);
              left: 50%;
              transform: translateX(-50%);
              width: v(93);
              height: v(93);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
