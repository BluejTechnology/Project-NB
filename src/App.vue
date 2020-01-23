<template>
  <div id="app">
    <bgm />
    <!-- <transition >	 -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<style lang="scss">
</style>
<script>
import bgm from "@/components/bgm.vue";
export default {
  data() {
    return {};
  },
  created() {
    let qrInfo = this.$route.query;
    let { type } = qrInfo;
    this.$store.commit("setGameData", type || "1");
    if (this.$route.name != "home" && this.$route.name !== "app") {
      this.$router.replace({ name: "home",query:qrInfo});
    }
  },
  components: {
    bgm
  }
};
</script>
