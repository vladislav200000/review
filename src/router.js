import { createMemoryHistory, createRouter } from 'vue-router'

import App from './components/AppForm.vue'
import LogRegForm from './components/LogRegForm.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/reg',
    name: 'reg',
    component: LogRegForm
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
