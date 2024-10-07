<template>
  <div class="w-full h-screen flex justify-center items-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Ваш Email </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Пароль </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />
        <p class="text-red-500 text-xs italic">Пожалуйста, введите пароль.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Войти
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/mainpage"
        >
          Забыли пароль?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import router from '@/router'
import { store } from '@/store'
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async login() {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/login',
          {
            email: this.email,
            password: this.password
          },
          {
            withCredentials: true
          }
        )
        localStorage.setItem('token', response.data.token)
        store.commit('login', {
          email: response.data.user.email,
          login: response.data.user.login,
          token: response.data.token
        })

        router.push({ path: '/mainpage' })
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message || 'Login failed')
        }
        console.log(error)
      }
    }
  }
}
</script>
