import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  // plugins: [createPersistedState()],
  state: {
    count: 10,
    msg: '张三张三'
  },
  mutations: {
    incCount(state) {
      state.count += 10
    },
    setMsg(state, msg) {
      state.msg = msg
    }
  },
  actions: {
    incCount(context) {
      setTimeout(() => {
        context.commit('incCount')
      }, 2000)
    }
  },
  getters: {
    num(state) {
      return state.count * state.count
    }
  },
  modules: {
  }
})
