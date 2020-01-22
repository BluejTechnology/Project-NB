<template>
  <div class="web" v-cloak>
    <!-- <wb-share></wb-share> -->
    <mheader :getTitleUrl="titleUrl" :titleType="'home'">
      <!-- 208-184 -->
      <img src="//yoo.qpic.cn/yoo_img/0/74f0881a5d2db3af7f8e67402055575b/0" alt class="icon_angle" />
    </mheader>
    <div class="hcontent">
      <div class="window">
        <img src="//yoo.qpic.cn/yoo_img/0/836bdf02c0dfa8f74be0cbf6c1b255ac/0" alt />
        <div class="avator_wrapper">
          <div
            class="avator"
            :style="{
                            'background-image': 'url(' + avatorUrl + ')'
                        }"
          ></div>
          <img
            src="//yoo.qpic.cn/yoo_img/0/229fe65cbb9ab8ad09c839683f888528/0"
            alt
            class="scan_icon ani_scan"
          />
          <img
            src="//yoo.qpic.cn/yoo_img/0/cc6f786affa29086fa4e094444a8933a/0"
            alt
            class="scan_border"
          />
        </div>
        <left-tree class="slideleft"></left-tree>
        <div class="l_cloud slideleft">
          <img src="//yoo.qpic.cn/yoo_img/0/447648d7e7104b22bb3f156ebf619e5e/0" alt />
        </div>
        <div class="r_cloud slideright">
          <img src="//yoo.qpic.cn/yoo_img/0/eb3f88ad958a247537fffb03ed8d73b3/0" alt />
        </div>
        <right-tree class="slideright"></right-tree>
      </div>
      <div class="upload_wrapper" v-show="!isupload">
        <div class="upload_btn">
          <!-- 474-92 -->
          <label>
            <img src="//yoo.qpic.cn/yoo_img/0/6c7662dcc98b5d3d0610cd8cf2fe3ade/0" alt />
            <input type="file" accept="image/*" ref="uploadpic" />
          </label>
        </div>
        <span>{{ upload_title }}</span>
      </div>
      <div class="loading_txt" v-show="isupload">智能解析中……</div>
    </div>
    <img
      src="//yoo.qpic.cn/yoo_img/0/26c9503bb89adff164445ec6e7fc1fdd/0"
      alt="cloud"
      class="bgCloud"
    />
    <div class="hlogo">
      <logo></logo>
    </div>
    <transition name="fade"><pop :msg="'您上传的图片无法识别,请重新上传'" v-if="showPop" :isPop="isPop" @closePop="closePop"></pop></transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import wbShare from "@/components/share/weibo_share.vue";
import mheader from "@/components/head.vue";
import leftTree from "@/components/base/left_tree.vue";
import rightTree from "@/components/base/right_tree.vue";
// import avatorUrl from "@/assets/images/default_avator.jpg";
import logo from "@/components/base/logo.vue";
import pop from "@/components/base/pop.vue";
import axios from "axios";
import tool from "@/libs/utils.js";
import gameData from "@/data/gameData.json";
import tmpArr from "@/data/animation.json";
import { mapState } from "vuex";

import tools from "../libs/iphonePicture";
import updateshare from '@/mixin/shareData.js';
const SUM = 18;
const axiosConfig={timeout:10000};
export default {
  name: "home",
  mixins:[updateshare],
  components: {
    // wbShare,
    mheader,
    leftTree,
    rightTree,
    logo,
    pop
  },
  data() {
    return {
      avatorUrl: "//yoo.qpic.cn/yoo_img/0/e5d43b13019d854effc1106c88f7a977/0",
      isupload: false,
      isPop: false,
      showPop: false
    };
  },
  created() {},
  computed: {
    ...mapState({
      upload_title: state => state.gameData.scene_title.upload_title,
      titleUrl: state => state.gameData.scene_title.home_title_url,
      type: state => state.type
    })
  },
  mounted() {
    var UAParser = require("ua-parser-js"),
      parser = new UAParser(),
      browser_name = parser.getBrowser().name;
    if (
      browser_name.toLowerCase() == "webkit" &&
      parser.getUA().includes("Weibo")
    ) {
      browser_name = "Weibo";
    }
    let m_uid = this.$route.query.uuid,
      type = this.$route.query.type,
      res = this.$route.query.res;
      setTimeout(()=>{
        window.MtaH5.clickStat("index_view", {
              parameter: JSON.stringify({
                uuid: m_uid,
                from: browser_name,
                type: type,
                res: res
              })
            });
        window.MtaH5.clickStat("taohuayun", {
          indexview: "true"
        });
      },100)
    
    // 侦听input
    this.$refs["uploadpic"].addEventListener("change", this.fileChange);
    // 初始化分享数据

    this._initShare();
    setTimeout(() => {
      tool.preload(tmpArr);
    }, 50000);
  },
  methods: {
    closePop(){
        this.showPop=false
    },
    async fileChange(e) {
      this.isupload = true;
      window.MtaH5.clickStat("taohuayun", {
        uploadbtn: "true"
      });
      let file = e.target.files[0];
      //   this.avatorUrl = this.getObjectURL(file);
      window.console.log(999999)
      e.target.value = "";
      window.user_avator = await tools.repairPhoto(file, 1, 200); //获取到用户的头像
      this.avatorUrl = window.user_avator;
      //   window.user_avator_data = this.avatorUrl;
      let reader = new FileReader();
      reader.onload = async ee => {
        try {
          //   let blob;
          //   if (typeof ee.target.result === "object") {
          //     blob = new Blob([ee.target.result]);
          //   } else {
          //     blob = ee.target.result;
          //   }
          //   window.user_avator_data = blob;
          let filecontent = reader.result;
          let res1 = await this.first_step(file.name);
          let res2 = await this.second_step(res1.Sign, filecontent);
          let res3 = await this.third_step(res1.CDNUrl);
          window.console.log(res1, res2, res3);
          let m_uid = this.$utils.getCookie("UUID");
          window.MtaH5.clickStat("upload_btn", {
            uuid: m_uid
          });
          this.$store.commit("setAvatorCdn", res1.CDNUrl);
          if (!res3.gender) {
            if(res3.result==2){
              window.console.log("unsafe 不安全图片");
              this.showPop = true;
              this.isPop = true;
              // 非人脸重置数据
              Object.assign(this.$data, this.$options.data());
            }
            if(res3.result==3){
              window.console.log("no face 不含人脸")
              this._toResPage('noface')
            }
            return;
          }
          this._toResPage(res3.gender)
        } catch (e) {
          window.console.log("报错拉！", e.message);
          this._toResPage();
          
        }
      };
      reader.readAsArrayBuffer(file);
    },
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    async first_step(fileName) {
      return axios
        .post("/fcgi/gwlogout/GetTencentCloudInfo", {
          BizID: "QZ",
          File: fileName
        },axiosConfig)
        .then(res => {
          if (res.status !== 200 || !res.data) {
            Promise.reject("请求第一步报错");
          }
          window.console.log("第一步数据", res.data);
          return res.data;
        })
        .catch((e)=>{
              window.console.log("no face 不含人脸")
              Promise.reject("超时啦");
        });
    },
    async second_step(url, filecontent) {
      return axios.put(url, filecontent,axiosConfig).then(res => {
        if (res.status !== 200) {
          Promise.reject("请求第二步报错");
        }
        return res.data;
      })
      .catch((e)=>{
              window.console.log("no face 不含人脸")
              Promise.reject("超时啦");
        });
    },
    async third_step(picUrl) {
      return axios
        .post("/fcgi/gwlogout/ImgVerify", {
          BIZID: "QZ",
          ImgURL: picUrl
        },axiosConfig)
        .then(res => {
          if (res.status !== 200 || !res.data) {
            Promise.reject("请求第三步报错");
          }
          return res.data;
        })
        .catch((e)=>{
              window.console.log("no face 不含人脸")
              Promise.reject("超时啦");
        });
    },
    c_rand(sum) {
      let temp_arr = [];
      let n = 0;
      while (temp_arr.length < sum) {
        n = parseInt(Math.random() * 100);
        if (!temp_arr.includes(n)) {
          temp_arr.push(n);
        }
      }
      return temp_arr;
    },
    async preloadAvator() {
      return new Promise((resolve)=>{
          //分别产生预加载数组
          let female_arr = this.c_rand(SUM).map(ele => {
            return gameData.avatarData.femalePicUrl[ele];
          });
          let male_arr = this.c_rand(SUM).map(ele => {
            return gameData.avatarData.malePicUrl[ele];
          });
          tool.preload(male_arr);
          tool.preload(female_arr);

          window.femalePicUrl = female_arr;
          window.malePicUrl = male_arr;
          resolve();
      })
      
    },
    async _initShare() {
      //初始化分享链接
      await this.updateDesc();
    },
    async _toResPage(res='noface'){
      await this.preloadAvator();
      this.$router.push({
        name: "result"
      });
      this.$store.commit("setResult", res);
    }
  }
};
</script>
<style lang="scss">
@import "~@/assets/css/reset.css";
@import "~@/assets/scss/util";
/* 动画开始前 和 结束时刻 */
.fade-enter,.fade-leave-to{
    opacity: 0;
}
/* 元素进场时 和  元素离场时 */
.fade-enter-active,.fade-leave-active{
    transition: all .5s;
}
#app {
  height: 100%;
  overflow: hidden;
}

.web {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-image: url(//yoo.qpic.cn/yoo_img/0/b191ce978e6901d0afb7b654b0e8db82/0);
  background-position: center;
  background-size: 100% 100%;
}

.hcontent {
  position: relative;

  .window {
    position: relative;
    top: v(-138);
    left: 0;
    width: 100%;

    > img {
      display: block;
      width: v(602);
      margin: 0 auto;
    }
  }
}

.avator_wrapper {
  position: absolute;
  top: v(132);
  left: v(207);
  width: v(338);
  height: v(338);
  background-color: #fff;
  overflow: hidden;

  > img {
    display: block;
    width: v(338);
    height: v(338);
    margin: 0 auto;
  }

  > .avator {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #730065;

    > img {
      width: 100%;
    }
  }

  > .scan_border {
    position: absolute;
    top: 0;
    left: 0;
    width: v(338);
    height: v(338);
  }

  .scan_icon {
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    height: auto;
    // transform: translate3d(0,100%,0);
  }
}

.icon_angle {
  position: absolute;
  bottom: 0;
  left: v(25);
  width: v(208);
  height: v(184);
  z-index: 1;
}

.left_tree {
  position: absolute;
  left: 0;
  bottom: v(120);
}

.l_cloud {
  position: absolute;
  left: 0;
  bottom: v(60);
  width: v(90);
  height: v(67);
  transform: translate3d(-100%, 0, 0);

  > img {
    display: block;
    width: 100%;
  }
}

.r_cloud {
  position: absolute;
  right: v(-60);
  top: v(158);
  width: v(159);
  height: v(44);
  transform: translate3d(100%, 0, 0);

  > img {
    display: block;
    width: 100%;
  }
}

.right_tree {
  position: absolute;
  right: 0;
  bottom: v(42);
}

.upload_wrapper {
  position: absolute;
  bottom: v(75);
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  z-index: 1;

  > span {
    font-size: v(28);
  }
}

.upload_btn {
  width: v(474);
  height: v(92);
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
  }

  input {
    opacity: 0;
    display: none;
  }
}

.loading_txt {
  position: absolute;
  bottom: 10vw;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: v(25);
  color: #fff;
}

.bgCloud {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.hlogo {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: v(10);

  > .logo {
    margin: 0 auto;
  }
}

.ani_scan {
  animation: ani_scan 2.5s infinite;
}

@-webkit-keyframes ani_scan {
  from {
    top: -120%;
    opacity: 1;
  }

  to {
    top: 120%;
    opacity: 0.2;
  }
}

@keyframes ani_scan {
  from {
    top: -120%;
    opacity: 1;
  }

  to {
    top: 120%;
    opacity: 0.2;
  }
}

.slideleft {
  animation: sildeLeft 1.3s both;
}

@keyframes sildeLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideright {
  animation: sildeRight 1.3s both;
}

@keyframes sildeRight {
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.delay1 {
  animation-delay: 0.8s;
}

.delay2 {
  animation-delay: 0.8s;
}

.delay3 {
  animation-delay: 1.3s;
}

.delay4 {
  animation-delay: 1.4s;
}
//iphoneX、iphoneXs

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .header{
    margin-top: -40px;
  }
  .downLoadPage .main{
    margin-top: -40px;
  }
}



 

//iphone Xs Max
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio:3) {
  .header{
    margin-top: -40px;
  }
  .downLoadPage .main{
    margin-top: -40px;
  }
}

 

//iphone XR
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio:2) {
  .header{
    margin-top: -40px;
  }
  .downLoadPage .main{
    margin-top: -40px;
  }
}
</style>
