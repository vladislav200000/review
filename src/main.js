import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import './index.css'
import { store } from './store'
// import CommitForm from './views/CommitForm.vue'
axios.defaults.baseURL = 'http://127.0.0.1:8000'
if (localStorage.getItem('token')) {
  ;(async function () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    const response = await axios.get('http://127.0.0.1:8000/api/user')
    store.commit('login', {
      email: response.data.email,
      login: response.data.login,
      token: localStorage.getItem('token')
    })
  })()
}

createApp(App).use(router).use(store).mount('#app')
