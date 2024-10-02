<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <button @click="createUser">Create User</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get('http://localhost:8000/api/users')
        this.users = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async createUser() {
      try {
        const newUser = {
          name: 'New User',
          email: 'newuser@example.com'
        }
        await axios.post('http://localhost:8000/api/users', newUser)
        this.getUsers()
      } catch (error) {
        console.error('Error creating user:', error)
      }
    }
  }
}
</script>
