<template>
    <div id="animation_wrap" ref="animation_wrap">
        <img
            v-for="(item, index) in imgArr"
            :src="item"
            :alt="index"
            :key="index"
            :style="{ opacity: index == curIndex ? 1 : 0 }"
        />
    </div>
</template>

<script>
import tickFactory from "../libs/requestAnimationFrame";
import imgArr from "../data/animation.json";
export default {
    data() {
        return {
            timeStep: 5,
            time: 0,
            curIndex: 0,
            imgArr: imgArr
        };
    },
    created() {},
    mounted() {
        const tick = tickFactory(5, this.animation);
        tick();
    },
    methods: {
        animation() {
            this.curIndex < 49 ? this.curIndex++ : (this.curIndex = 0);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/util";
#animation_wrap {
    width: v(720);
    height: v(684);
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    z-index: 2;
    img {
        opacity: 0;
        width: v(720);
        height: v(684);
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>