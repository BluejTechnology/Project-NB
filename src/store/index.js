import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let gameData = {
    "avatarData":{
        "femalePicUrl":[
            "xxxxx",
            "xxxxx"
        ],
        "malePicUrl":[
            "xxxxx",
            "xxxxx"
        ]
    },
    "resultData": {
        "type1": {  
            "scene_title":{
                "upload_title":"上传本人头像,获得新年桃花指数!",
                "to_down_btn":"看看谁和我匹配!",
                "down_title1:":"从欢遇APP的10000名优质嘉宾中为你挑选桃花运势相近的人",
                "down_title2":"下载欢遇APP,红娘帮你撮合TA们的桃花缘!"
            },
            "girl": [
                {
                    "grade": 999, 
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>", 
                    "resID": "1"
                },
                {
                    "grade": 999,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "25"
                }
            ],
            "boy": [
                {
                    "grade": 999,
                    "res_des": "文案2",
                    "resID": "26"
                },
                {
                    "grade": 999,
                    "res_des": "文案2",
                    "resID": "50"
                }
            ]
        },
        "type2": {
            "scene_title":{
                "upload_title":"上传本人头像,获得新年桃花指数!",
                "to_down_btn":"看看谁和我匹配!",
                "down_title1:":"从欢遇APP的10000名优质嘉宾中为你挑选桃花运势相近的人",
                "down_title2":"下载欢遇APP,红娘帮你撮合TA们的桃花缘!"
            },
            "girl": [
                {
                    "grade": 999,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "2-1"
                },
                {
                    "grade": 999,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "2-2"
                }
            ],
            "boy": [
                {
                    "grade": 999,
                    "res_des": "文案2",
                    "resID": "2-3"
                }
            ]
        },
        "type3": {
            "scene_title":{
                "upload_title":"上传本人头像,获得新年桃花指数!",
                "to_down_btn":"看看谁和我匹配!",
                "down_title1:":"从欢遇APP的10000名优质嘉宾中为你挑选桃花运势相近的人",
                "down_title2":"下载欢遇APP,红娘帮你撮合TA们的桃花缘!"
            },
            "girl": [
                {
                    "grade": 999,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "3-1"
                },
                {
                    "grade": 999,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "3-2"
                }
            ],
            "boy": [
                {
                    "grade": 999,
                    "res_des": "文案2",
                    "resID": "3-3"
                }
            ]
        }
    }
};
export default new Vuex.Store({
  state: {
    vatarCDN:'https://cn.vuejs.org/images/logo.png',
    type:null,  // 游戏类型
    result:null, // 游戏结果 uuid在生成二维码的时候直接取cookie,不需要存store
    gameData:gameData,
  },
  mutations: {
    setType(state,type){
      state.type = type;
    }
  },
  actions: {
  },
  modules: {
  }
})
