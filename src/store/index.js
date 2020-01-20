import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let gameData = {
    "avatarDate": {
        "femalePicUrl": [
            "xxxxx",
            "xxxxx"
        ],
        "malePicUrl": [
            "xxxxx",
            "xxxxx"
        ]
    },
    "resultData": {
        "type1": {
            "scene_title": {
                "home_title_url": '//yoo.qpic.cn/yoo_img/0/1c5e210094cec4481a9e1d3f25e83410/0',
                "res_title_url": '/type1_title.png',
                "upload_title": "上传本人照片，看看新年有多大的催婚火力等着你？",
                "to_down_btn": "慰问单身战友!",
                "down_title1:": "从欢遇APP的上万名优质单身战友中，找到跟你火力近似的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，来找到真实优质的TA！"
            },
            "girl": [
                {
                    "grade": 199,
                    "res_des": "新年一定<i>暴富</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "1"
                },
                {
                    "grade": 299,
                    "res_des": "新年一定<i>发财</i><br>鼠钱鼠到<i>手软</i>",
                    "resID": "25"
                }
            ],
            "boy": [
                {
                    "grade": 399,
                    "res_des": "文案111<br>11",
                    "resID": "26"
                },
                {
                    "grade": 899,
                    "res_des": "文案222<br>22",
                    "resID": "50"
                }
            ]
        },
        "type2": {
            "scene_title": {
                "home_title_url": '/type2_title.png',
                "res_title_url": '/type2_title.png',
                "upload_title": "上传本人照片，看看新年会在什么情况下脱单？",
                "to_down_btn": "看看同一天脱单的TA",
                "down_title1:": "从欢遇APP的上万名优质异性嘉宾中，找到跟你同天脱单的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，来找到真实优质的TA！"
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
            "scene_title": {
                "home_title_url": '/type3_title.png',
                "res_title_url": '/type3_title.png',
                "upload_title": "上传本人照片，看看新年桃花运势如何？",
                "to_down_btn": "看看同运势的TA",
                "down_title1:": "从欢遇APP的上万名优质异性嘉宾中，找到跟你同运势的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，来找到真实优质的TA！"
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
        type: null,  // 游戏类型
        result: null, // 游戏结果
        gameData: null,
    },
    mutations: {
        setGameData(state, type) {
            // 存入游戏类型
            state.type = type;
            // 存入当前游戏类型的相关数据
            state.gameData = gameData.resultData[`type${type}`];
        },
        setResult(state, sex) {
            // gender: 1 为男 2 为女
            window.console.log(state.gameData)
            window.console.log(sex);
            if (sex == 1) {
                let boys = state.gameData.boy;
                let result = boys[Math.floor(Math.random() * boys.length)];
                state.result = result
                // window.console.log(result)
            } else {
                let girls = state.gameData.girl;
                let result = girls[Math.floor(Math.random() * girls.length)];
                state.result = result;
                // window.console.log(girls, Math.floor(Math.random() * girls.length))
            }
            // state.result
        }
    },
    actions: {
    },
    modules: {
    }
})
