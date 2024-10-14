import { createRouter, createWebHistory } from 'vue-router'
import AppForm from './components/AppForm.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ReviewForm from './components/ReviewForm.vue'
import Organizations from './views/Organizations.vue'
import MainLayout from './layouts/MainLayout.vue'
import Comments from './views/Comments.vue'
import Card from './views/Card.vue'
import Logout from './views/Logout.vue'
import RegCompany from './views/RegCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/login',
      name: 'home',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: MainLayout,

      children: [
        {
          path: '/urist',

          name: 'urist',
          component: AppForm
        },
        {
          path: '/',
          name: 'mainpage',
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
          component: Profile,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/comments',
          name: 'comments',
          component: Comments,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/profile/comments',
          component: Comments
        },
        {
          path: '/card/:id',
          name: 'card',
          component: Card
        },
        {
          path: '/register-org',
          name: 'register-org',
          component: RegCompany
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
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
