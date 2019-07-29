import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: auth.getUser()
  },
  mutations: {
    // 修改状态中的user
    setUser (state, data) {
      state.user = data
      auth.setUser(state.user)
    }
  },
  actions: {

  }
})
