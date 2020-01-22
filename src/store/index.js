import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let gameData = {
    "resultData": {
        "type1": {
            "title": "测一测你的择偶倾向",
            "scene_title": {
                "home_title_url": '//yoo.qpic.cn/yoo_img/0/45a4917fc7d0503f9d17e8d65cf61c5a/0',
                "res_title_url": '/type1_title.png',
                "upload_title": "上传本人照片，测出你对另一半的标准！",
                "to_down_btn": "看看适合的TA",
                "down_title1": "从欢遇APP的上万名优质嘉宾中，<br>找到接近你标准的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，<br>来找到真实优质的TA！",
                "poster_title": "扫码测我的择偶倾向"
            },
            "boy": [{
                "grade": "颜值正义",
                "res_des": "看脸不等于肤浅，你比大多数人坦诚。",
                "resID": "1"
            },
            {
                "grade": "气质第一",
                "res_des": "在你眼中，气质比颜值还重要，双方都要有品味。",
                "resID": "2"
            },
            {
                "grade": "孝顺纯良",
                "res_des": "父母是立身之本，你希望另一半能跟自己一样孝顺。",
                "resID": "3"
            },
            {
                "grade": "善解人意",
                "res_des": "在外辛苦打拼，你希望她能看到自己的努力。",
                "resID": "4"
            },
            {
                "grade": "同甘共苦",
                "res_des": "你希望她能一起吃苦，但你决不舍得。",
                "resID": "5"
            },
            {
                "grade": "一起拼搏",
                "res_des": "勇敢的你，希望另一半可以和你一起对抗世界。",
                "resID": "6"
            },
            {
                "grade": "活泼可爱",
                "res_des": "沉稳如你，也希望生活多一些欢乐与惊喜。",
                "resID": "7"
            },
            {
                "grade": "感情专一",
                "res_des": "浮躁的社会，希望对方值得你的全心全意。",
                "resID": "8"
            },
            {
                "grade": "女的活的",
                "res_des": "你的优秀足以包容另一半的一切。",
                "resID": "9"
            },
            {
                "grade": "温婉知性",
                "res_des": "作为一个成功的男人，总渴望身后有一个温柔的女人。",
                "resID": "10"
            },
            {
                "grade": "勤俭持家",
                "res_des": "对日常有规划的你，希望遇到一个相同的她",
                "resID": "11"
            }
            ],
            "girl": [{
                "grade": "宁缺毋滥",
                "res_des": "你最讨厌剩女称呼，为自己负责难道有错？",
                "resID": "12"
            }, {
                "grade": "勇于担当",
                "res_des": "你希望他能勇敢挡在前方，而你会在背后默默使劲。",
                "resID": "13"
            }, {
                "grade": "独立自主",
                "res_des": "你希望他能尊重你的才能和决心，给你自主的空间。",
                "resID": "14"
            }, {
                "grade": "乐观向上",
                "res_des": "生活如此不易，你的他需要跟你一样笑对明天。",
                "resID": "15"
            }, {
                "grade": "品行端正",
                "res_des": "你很清楚自己的底线，正直坦诚一定是最重要的。",
                "resID": "16"
            }, {
                "grade": "成熟稳重",
                "res_des": "你内心的天真与活泼，值得另一半的守护。",
                "resID": "17"
            }, {
                "grade": "真诚以待",
                "res_des": "希望另一半在你的温柔中卸下铠甲。",
                "resID": "18"
            }, {
                "grade": "温柔体贴",
                "res_des": "作为坚强的女生，你也希望每一份柔软都有回音。",
                "resID": "19"
            }, {
                "grade": "坦诚以待",
                "res_des": "天真烂漫的你，也希望在爱情里面少一些算计与猜疑。",
                "resID": "20"
            }, {
                "grade": "踏实稳重",
                "res_des": "比起万众瞩目，你更愿平凡幸福。",
                "resID": "21"
            }, {
                "grade": "幽默风趣",
                "res_des": "漂亮的皮囊千篇一律，有趣的灵魂才配得上你。",
                "resID": "22"
            }, {
                "grade": "感情专一",
                "res_des": "同是至情至性之人，爱上了就是一生。",
                "resID": "23"
            }, {
                "grade": "真诚务实",
                "res_des": "不恋荣华富贵的虚无，重视尘世相守的幸福。",
                "resID": "24"
            }, {
                "grade": "单身挺好",
                "res_des": "作为新时代的女性，爱美食爱美酒，更爱自由。",
                "resID": "25"
            }],
            "other": [{
                "grade": "雾里看花",
                "res_des": "看来你很神秘，猜不出任何倾向。再试试？",
                "resID": "26"
            }]
        },
        "type2": {
            "title": "测一测你的脱单时刻",
            "scene_title": {
                "home_title_url": '//yoo.qpic.cn/yoo_img/0/8ef8729bdc6af0f90157c9543ca0eacc/0',
                "res_title_url": '/type2_title.png',
                "upload_title": "上传本人照片，看看新年会在什么情况下脱单？",
                "to_down_btn": "看看同一天脱单的TA",
                "down_title1": "从欢遇APP的上万名优质异性嘉宾中，<br>找到跟你同天脱单的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，<br>来找到真实优质的TA！",
                "poster_title": "扫码测我的脱单时刻"
            },
            "boy": [{
                "grade": "7月11日",
                "res_des": "搬完砖在餐厅狼吞虎咽，长发飘飘的她在对面坐下了。",
                "resID": "1"
            },
            {
                "grade": "10月4日",
                "res_des": "和兄弟就着啤酒吹牛逼，隔壁桌的她噗嗤一声笑了出来。",
                "resID": "2"
            },
            {
                "grade": "4月25日",
                "res_des": "公交车上，你瞟到人家手机屏保美美的自拍，盯着看了一路。",
                "resID": "3"
            },
            {
                "grade": "10月6日",
                "res_des": "一个没带现金来超市的人，加了微信你帮忙付了账。",
                "resID": "4"
            },
            {
                "grade": "5月2日",
                "res_des": "那次KTV里，你听到了她像原唱一样的声音。",
                "resID": "5"
            },
            {
                "grade": "3月29日",
                "res_des": "网吧门口，谁也没注意看路，撞了个满怀。",
                "resID": "6"
            },
            {
                "grade": "5月24日",
                "res_des": "看到路边的女孩在学电单车，你耐心教了她一下午",
                "resID": "7"
            },
            {
                "grade": "5月19日",
                "res_des": "原本准备一个人过520，打王者的时候，对面妹妹说：哥哥带带我",
                "resID": "8"
            },
            {
                "grade": "3月9日",
                "res_des": "在车站等车，迷糊的她把身份证落在了你的脚下。",
                "resID": "9"
            },
            {
                "grade": "3月14日",
                "res_des": "朋友婚礼，站在舞台边的她接住了捧花，你接住了她。",
                "resID": "10"
            }
            ],
            "girl": [{
                "grade": "5月24日",
                "res_des": "下水道卡住了高跟鞋，他路过帮你取出来，说真好看",
                "resID": "11"
            }, {
                "grade": "2月14日",
                "res_des": "情人节一个人看电影看哭了，旁边一双大手递来了纸巾",
                "resID": "12"
            }, {
                "grade": "3月12日",
                "res_des": "一群人出去玩，借口让他帮拍照，加了他的微信",
                "resID": "13"
            }, {
                "grade": "12月1日",
                "res_des": "和姐妹逛街的这天下午，他捧着热奶茶来问路。",
                "resID": "14"
            }, {
                "grade": "3月1日",
                "res_des": "一大帮朋友出去聚餐，大家笑得开心时，你看了他，他也看着你。",
                "resID": "15"
            }, {
                "grade": "8月25日",
                "res_des": "拗不过闺蜜，跟她介绍的男生相亲，竟然感觉还不错。",
                "resID": "16"
            }, {
                "grade": "1月30日",
                "res_des": "店里的小哥说我是今天的幸运顾客，拆开红包只有一张写着微信号的纸条",
                "resID": "17"
            }, {
                "grade": "2月14日",
                "res_des": "“买个花给你女朋友吧”，刚想解释我不是，他就买下送给我了。",
                "resID": "18"
            }, {
                "grade": "2月3日",
                "res_des": "吃力地搬着箱子下楼梯，他冲我笑了一下“我来吧”",
                "resID": "19"
            }, {
                "grade": "2月15日",
                "res_des": "本命年的都不信命，他们随意地在平安符堆里翻着，拿起了同一款，相视一笑。",
                "resID": "20"
            }, {
                "grade": "3月3日",
                "res_des": "我说我想吃蛋挞，他骑着单车送到了我家楼下。",
                "resID": "21"
            }, {
                "grade": "8月1日",
                "res_des": "拗不过闺蜜，跟她介绍的男生相亲，竟然感觉还不错。",
                "resID": "22"
            }, {
                "grade": "11月10日",
                "res_des": " 一直以为自己只是“哥们”，直到他向哥们介绍：“这是你们嫂子，虽然还没追到。”",
                "resID": "23"
            }],
            "other": [{
                "grade": "12月32日",
                "res_des": "没有这一天？系统也没识别到你人啊。再试试吧。",
                "resID": "24"
            }]
        },
        "type3": {
            "title": "测一测新年桃花运势",
            "scene_title": {
                "home_title_url": '//yoo.qpic.cn/yoo_img/0/cdb7744f326970f670701c176b4b4062/0',
                "res_title_url": '/type3_title.png',
                "upload_title": "上传本人照片，看看新年桃花运势如何？",
                "to_down_btn": "看看同运势的TA",
                "down_title1": "从欢遇APP的上万名优质异性嘉宾中，<br>找到跟你同运势的TA们！",
                "down_title2": "下载欢遇APP，视频相亲更靠谱，<br>来找到真实优质的TA！",
                "poster_title": "扫码测我的桃花运势"
            },
            "boy": [{
                "grade": 99,
                "res_des": "超过了90%的人！你的追求者就快排满两条街！",
                "resID": "1"
            },
            {
                "grade": 888,
                "res_des": "超过了98.88%的人！不用看日月，你是万千美女心中的星辰",
                "resID": "2"
            },
            {
                "grade": 199,
                "res_des": "超过了96%的人！全村最靓仔，靠脸就脱单了！",
                "resID": "3"
            },
            {
                "grade": 666,
                "res_des": "超过了x%的人！确认过眼神，这种帅不脱单不可能！",
                "resID": "4"
            },
            {
                "grade": 199,
                "res_des": "超过了91%的人！能让美女狂奔的，除了大雨，还有你",
                "resID": "5"
            },
            {
                "grade": 99,
                "res_des": "超过了90%的人！你的命定之人，2020一定会来到身边~",
                "resID": "6"
            },
            {
                "grade": 666,
                "res_des": "超过了96.66%的人！如果追你要排队，我大半夜都不睡",
                "resID": "7"
            },
            {
                "grade": 19,
                "res_des": "超过了90%的人！美女狙击手，都想跟你走！",
                "resID": "8"
            },
            {
                "grade": 199,
                "res_des": "超过了91%的人！自带主角光环的男人，2020爱神必然眷顾",
                "resID": "9"
            },
            {
                "grade": 199,
                "res_des": "超过了91%的人！这是心动的感觉，你就是行走的桃花树！",
                "resID": "10"
            },
            {
                "grade": 0,
                "res_des": "你不需要桃花了，因为其他男人的桃花都被你“帅枯了”！",
                "resID": "11"
            }
            ],
            "girl": [{
                "grade": 99,
                "res_des": "超过了90%的人！你的命定之人，2020一定会来到你身边",
                "resID": "12"
            },
            {
                "grade": 199,
                "res_des": "超过了91%的人！永远温柔的你，值得世间所有美妙桃花",
                "resID": "13"
            },
            {
                "grade": 666,
                "res_des": "超过了96.66%的人！漂亮又可爱，单纯又无害，桃花朵朵来！",
                "resID": "14"
            },
            {
                "grade": 99,
                "res_des": "超过了90%的人！帅哥狙击手，全村帅哥都想跟你走！",
                "resID": "15"
            },
            {
                "grade": 199,
                "res_des": "超过了91%的人！仙子仙子，桃花仙气请问可以分我一点吗？",
                "resID": "16"
            },
            {
                "grade": 99,
                "res_des": "超过了90%的人！你迷路的男朋友已经准备好了！",
                "resID": "17"
            },
            {
                "grade": 888,
                "res_des": "超过了98.8%的人！生活终于给这个人间小甜饼加桃花啦！",
                "resID": "18"
            },
            {
                "grade": 99,
                "res_des": "超过了90%的人！期待甜甜恋爱的你，2020如愿以偿~",
                "resID": "19"
            },
            {
                "grade": 99,
                "res_des": "超过了90%的人！美到刚刚好，喜欢的人也会刚好喜欢你",
                "resID": "20"
            },
            {
                "grade": 666,
                "res_des": "超过了96.66%的人！月老说：心里的花，我想要带你回家～",
                "resID": "21"
            },
            {
                "grade": 0,
                "res_des": "你都这么美了，肯定有对象了，还要什么桃花",
                "resID": "22"
            },
            {
                "grade": 0,
                "res_des": "像你们这样不食人间烟火的仙女是不需要谈恋爱的",
                "resID": "23"
            },
            {
                "grade": 666,
                "res_des": "超过了96.66%的人！你的桃花运太多，小心挑花了眼！",
                "resID": "24"
            }
            ],
            "other": [{
                "grade": "???",
                "res_des": "说好的本人呢，你确定不是在逗我？再试试吧！",
                "resID": "25"
            }]
        }
    }

};
export default new Vuex.Store({
    state: {
        type: null,  // 游戏类型
        result: null, // 游戏结果
        gameData: null,
        avatorCdn: null, //存入用户头像CDN
        userSex:null
    },
    mutations: {
        setAvatorCdn(state, url) {
            state.avatorCdn = url;
        },
        setGameData(state, type) {
            // 存入游戏类型
            state.type = type;
            // 存入当前游戏类型的相关数据
            state.gameData = gameData.resultData[`type${type}`];
            let htmlTitle = ["测一测你的择偶倾向", "测一测你的脱单时刻", "测一测你的桃花运势"];
            document.title = htmlTitle[type - 1];
        },
        setResult(state, sex) {
            // gender: 1 为男 2 为女
            // window.console.log(state.gameData)
            // window.console.log(sex);
            state.userSex = sex;
            if(sex == "noface"){
                state.result = state.gameData.other[0]
            }
            if (sex == 1) {
                let boys = state.gameData.boy;
                let result = boys[Math.floor(Math.random() * boys.length)];
                state.result = result
                // window.console.log(result)
            } else if(sex == 2) {
                let girls = state.gameData.girl;
                let result = girls[Math.floor(Math.random() * girls.length)];
                state.result = result;
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
