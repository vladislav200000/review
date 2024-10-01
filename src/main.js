import { createApp } from 'vue'
import App from './AppForm.vue'
// eslint-disable-next-line no-unused-vars
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
