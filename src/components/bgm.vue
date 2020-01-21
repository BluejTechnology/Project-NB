<template>
    <div class="bgm_wrapper" @click="switchPlay">
        <i
            class="btn_music"
            :class="{
                'sound-on': isPlay,
                'sound-off': !isPlay,
                active: isPlay
            }"
        ></i>
        <!-- <audio
            src="//yoo.gtimg.com/huoguo/publisher/v/cb9b5be89299f0b1802ad0246557eed2.mp3"
            preload
            autoplay
            loop
            ref="sound0"
        ></audio> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlay: true,
            sound0: ""
        };
    },
    mounted() {
        this.sound0 = this.$refs.sound0 = this.createAudio();
        this.isPlay = this.$refs.sound0.paused;
        this.autoPlayMusic(this.$refs.sound0);
    },
    methods: {
        autoPlayMusic(media) {
            // function musicInBrowserHandler() {
            // 	musicPlay(media,true);
            // }
            var that = this;
            function musicInWeixinHandler() {
                that.musicPlay(media, true);
                document.addEventListener(
                    "WeixinJSBridgeReady",
                    function() {
                        that.musicPlay(media, true);
                    },
                    false
                );
                document.removeEventListener(
                    "DOMContentLoaded",
                    musicInWeixinHandler
                );
            }
            document.addEventListener("DOMContentLoaded", musicInWeixinHandler);
        },
        musicPlay(media, isPlay) {
            if (isPlay && media.paused) {
                media.play().catch(() => {
                    this.isPlay = false;
                    // window.console.log("不能自动播放");
                    // // 修复微信/qq环境下,播放图标不同步问题
                    // var ua = navigator.userAgent.toLowerCase();
                    // if(window.mqq.device.isMobileQQ()|| ua.match(/MicroMessenger/i)=="micromessenger"){
                    // 	this.isPlay = true;
                    // }
                });
            }
            if (!isPlay && !media.paused) {
                media.pause();
            }
        },
        switchPlay() {
            this.isPlay
                ? this.musicPlay(this.sound0, false)
                : this.musicPlay(this.sound0, true);

            this.toggleIsPlay();
        },
        toggleIsPlay() {
            this.isPlay = !this.isPlay;
        },
        createAudio() {
            let au = document.createElement("audio");
            au.src =
                "//yoo.gtimg.com/huoguo/publisher/v/cb9b5be89299f0b1802ad0246557eed2.mp3";
            au.preload = "preload";
            au.autoplay = "autoplay";
            au.loop = "loop";
            return au;
        }
    }
};
</script>

<style lang="scss">
@import "~@/assets/scss/util";
.bgm_wrapper {
    position: absolute;
    top: v(142);
    left: v(40);
    width: v(68);
    height: v(68);
    z-index: 3;
    & .active {
        animation-play-state: running;
    }

    > video {
        display: none;
    }
}

.btn_music {
    display: block;
    width: 100%;
    height: 100%;
    animation: rotate 2s linear infinite;
    animation-play-state: paused;
    background-size: contain;
    background-repeat: no-repeat;
}
.sound-on {
    background-image: url(//yoo.qpic.cn/yoo_img/0/19c1ebc05d44e8fa5841b711795a9eb2/0);
}
.sound-off {
    background-image: url(//yoo.qpic.cn/yoo_img/0/62456866ee493280e495381468410c5a/0);
}
@-webkit-keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(720deg);
    }
}
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(720deg);
    }
}
</style>
