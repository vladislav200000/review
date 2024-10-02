import { createApp } from 'vue'

// import LogRegForm from './components/LogRegForm.vue'
import './index.css'
import router from './router'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

export const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(store).use(router).mount('#app')
