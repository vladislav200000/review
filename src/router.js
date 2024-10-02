import { createRouter, createWebHistory } from 'vue-router'
import AppForm from './components/AppForm.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mainpage',
      name: 'home',
      component: AppForm
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/register',
    //   name: 'register',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/RegisterView.vue')
    // }
  ]
})

export default router
