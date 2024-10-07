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
      state.authenticated = false
      state.email = ''
      state.login = ''
      state.token = ''
    }
  }
})
