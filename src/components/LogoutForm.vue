<!-- eslint-disable vue/valid-template-root -->

<template>
  <div>
    <!-- Кнопка для выхода -->
    <button @click="logout" class="bg-red-500 text-white p-2 rounded">Выйти</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    async logout() {
      try {
        const response = await axios.post('/api/logout', {}, { withCredentials: true }) // Используем API route
        console.log(response.data.message)

        localStorage.removeItem('token')
        this.$router.push({ name: 'login' })
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
  }
}
</script>
