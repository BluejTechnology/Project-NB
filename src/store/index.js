import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vatarCDN:'https://cn.vuejs.org/images/logo.png',
    type:null,  // 游戏类型
    result:null // 游戏结果 uuid在生成二维码的时候直接取cookie,不需要存store
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
