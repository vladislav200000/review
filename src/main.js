import { createApp } from 'vue'
import App from './components/AppForm.vue'
// import LogRegForm from './components/LogRegForm.vue'
import './index.css'
import { router } from './router'
import { createStore } from 'vuex'

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

createApp(App).use(router).use(store).mount('#app')
