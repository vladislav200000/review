import { createRouter, createWebHistory } from 'vue-router'
import AppForm from './components/AppForm.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ReviewForm from './components/ReviewForm.vue'
import Organizations from './views/Organizations.vue'
import MainLayout from './layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,

      children: [
        {
          path: '/',

          name: 'mainpage',
          component: AppForm
        },
        {
          path: '/organizations',
          name: 'organizations',
          component: Organizations
        },
        {
          path: '/review',
          name: 'review',
          component: ReviewForm
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
