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
import tools from "../libs/utils";
export default {
    data() {
        return {
            curIndex: 0,
            imgArr: [
                "https://yoo.qpic.cn/yoo_img/0/2136271d3843c1ec16e96f54ccb0fdd0/0",
                "https://yoo.qpic.cn/yoo_img/0/cfd74924590118974780aa802851f385/0",
                "https://yoo.qpic.cn/yoo_img/0/9678c28ebd4b652b5b1ea5afcff0708a/0",
                "https://yoo.qpic.cn/yoo_img/0/3ae584ba1448986539a18653bf1409b5/0",
                "https://yoo.qpic.cn/yoo_img/0/4c8c35a2578d2646c6ce121c36d49787/0",
                "https://yoo.qpic.cn/yoo_img/0/34da576ba5eef84eeaf197e202469ad5/0",
                "https://yoo.qpic.cn/yoo_img/0/2c2d53d6ba09c53b0c79b64f916f0544/0",
                "https://yoo.qpic.cn/yoo_img/0/d2c1f1b8c9edd531081975b56fc4f0a6/0",
                "https://yoo.qpic.cn/yoo_img/0/986ba8c15f8dea9576dc84d22834f6c2/0",
                "https://yoo.qpic.cn/yoo_img/0/52c2797cd2b8a700a9b6818253725af3/0",

                "https://yoo.qpic.cn/yoo_img/0/a6fb79fa7a7696fb467534951db2e040/0",
                "https://yoo.qpic.cn/yoo_img/0/1310de32513465f506f8bf86b72ad82f/0",
                "https://yoo.qpic.cn/yoo_img/0/61305a7659305c895e97c058f0e7a993/0",
                "https://yoo.qpic.cn/yoo_img/0/858c9112ec8ad7a2bfe8017358e820b4/0",
                "https://yoo.qpic.cn/yoo_img/0/719c1de00fabe39c487983d61ff453f2/0",
                "https://yoo.qpic.cn/yoo_img/0/ce807f1a3cc3363fd638cfad47167d00/0",
                "https://yoo.qpic.cn/yoo_img/0/932c035d1dad0dc08955b8f4ba2c1108/0",
                "https://yoo.qpic.cn/yoo_img/0/64fe152f337c888c485a8fdcc8524872/0",
                "https://yoo.qpic.cn/yoo_img/0/c1e4c09f8de07663bba0506ee45c1b84/0",
                "https://yoo.qpic.cn/yoo_img/0/0d48514d5a6d5d3aba4ae484cf35e4bc/0",

                "https://yoo.qpic.cn/yoo_img/0/889216989f0a06dbb3ee313709d9f358/0",
                "https://yoo.qpic.cn/yoo_img/0/962a3ce647c73944d60369f33425d5f9/0",
                "https://yoo.qpic.cn/yoo_img/0/89e8306bd6ed7e8af647d312755c00d7/0",
                "https://yoo.qpic.cn/yoo_img/0/c6a7ae47d8b17a43d4a086136de2f101/0",
                "https://yoo.qpic.cn/yoo_img/0/dcfd48937c33f6bb959ac65c748e8bd0/0",
                "https://yoo.qpic.cn/yoo_img/0/81fec68a053a65aebdfc43a0a529717f/0",
                "https://yoo.qpic.cn/yoo_img/0/84c3fc182d29f47b8385a3b73fc5c328/0",
                "https://yoo.qpic.cn/yoo_img/0/c1ffdcfdeba8ec78220f29e98afb7a1c/0",
                "https://yoo.qpic.cn/yoo_img/0/881ed4335b027483e373546a9e877f6c/0",
                "https://yoo.qpic.cn/yoo_img/0/c105ebce99462532dfb2521338c4a8d6/0",

                "https://yoo.qpic.cn/yoo_img/0/d1dd2c974b6266bd60562cbaa04dee8c/0",
                "https://yoo.qpic.cn/yoo_img/0/fa67320da8726ea8c038c476ac50a1c9/0",
                "https://yoo.qpic.cn/yoo_img/0/8f3fc459900a96db13a2041d0f71e035/0",
                "https://yoo.qpic.cn/yoo_img/0/3b7d3f102064f73c95d014ee975b6916/0",
                "https://yoo.qpic.cn/yoo_img/0/8de227b0a08dcccb22aa9a19fa82cb66/0",
                "https://yoo.qpic.cn/yoo_img/0/0171216a845fa3b2eb1070ef9cf1d84b/0",
                "https://yoo.qpic.cn/yoo_img/0/eecb2638bb1634d971537e0f0854fdf4/0",
                "https://yoo.qpic.cn/yoo_img/0/8cab6d54f5fb6feb57937793d86fbe2a/0",
                "https://yoo.qpic.cn/yoo_img/0/0a49b5386e32074d3388acc8139ebd97/0",
                "https://yoo.qpic.cn/yoo_img/0/c88381f73a8c3f2d08c644cb1df7fbfc/0",

                "https://yoo.qpic.cn/yoo_img/0/437abbd729712cf62adace5e7f3fb5c8/0",
                "https://yoo.qpic.cn/yoo_img/0/27a6ac35738d6bc22e01b3bf3c26ab75/0",
                "https://yoo.qpic.cn/yoo_img/0/45b0ed47f6bda2dee96978a046eaefa9/0",
                "https://yoo.qpic.cn/yoo_img/0/781ffefdf408fbfa320c08b767687e9d/0",
                "https://yoo.qpic.cn/yoo_img/0/99145e3f71f0195e54dc845e22ee73a9/0",
                "https://yoo.qpic.cn/yoo_img/0/2c7c7ecb747fcb1dba03bb7102c9e4b4/0",
                "https://yoo.qpic.cn/yoo_img/0/21aa1aa413d510de17bcb82c666239e1/0",
                "https://yoo.qpic.cn/yoo_img/0/ea6f596ddf4306b1fb3fc25b1dd76c35/0",
                "https://yoo.qpic.cn/yoo_img/0/74b4ef27889afacb6b4fea14a6243d5d/0",
                "https://yoo.qpic.cn/yoo_img/0/92bcf7c63cdb06918f942f52a0fa2b1c/0"
            ]
        };
    },
    created() {
        tools.preload(this.imgArr);
    },
    mounted() {
        setInterval(() => {
            this.curIndex < 49 ? this.curIndex++ : (this.curIndex = 0);
        }, 66);
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