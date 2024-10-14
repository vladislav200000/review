import { createStore } from 'vuex'

export const store = createStore({
  state: {
    authenticated: false,
    email: '',
    login: '',
    token: ''
  },

  mutations: {
    login(state, payload) {
      state.authenticated = true
      state.email = payload.email
      state.login = payload.login
      state.token = payload.token
    },
    logout(state) {
      localStorage.removeItem('token')
      // this.$router.push('/login')
      state.authenticated = false
      state.email = ''
      state.login = ''
      state.token = ''
    },

    SET_AUTH(state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('token', token)
      commit('SET_AUTH', true)
    },
    logout({ commit }) {
      localStorage.removeItem('token')
      commit('SET_AUTH', false)
    },
    checkAuth({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('SET_AUTH', true)
      } else {
        commit('SET_AUTH', false)
      }
    }
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated
  }
})
