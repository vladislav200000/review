import { createMemoryHistory, createRouter } from 'vue-router'

import App from './views/AppForm.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('./views/AuthenticateForm.vue')
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
