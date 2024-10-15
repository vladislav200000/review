<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <body class="bg-gray-100">
    <div class="container mx-auto py-8 pb-20">
      <h1 class="text-2xl font-bold mb-6 text-center pt-20">Регистрация компании</h1>
      <form
        class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        @submit.prevent="createOrg"
      >
        <div class="mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
              >Фамилия Имя Отчество</label
            >
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="nameOrg"
              name="nameOrg"
              placeholder=""
              v-model="data.name"
            />
          </div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
            >Название организации</label
          >

          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder=""
            v-model="data.nameOrg"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >ИНН организации</label
          >
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="nameOrg"
            name="nameOrg"
            placeholder=""
            v-model="data.inn"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
            >Электронная почта</label
          >
          <input
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder=""
            v-model="data.email"
          />
        </div>
        <button
          class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          type="submit"
          href="/card{{ `${id}` }}"
        >
          Зарегистрировать
        </button>
      </form>
    </div>
  </body>
</template>
<script setup>
import axios from 'axios'
import { Route } from 'router'
import { reactive } from 'vue'
// import { RouterLink } from 'vue-router'

async function fetchData() {
  const response = await axios.get(`/api/company/${Route.params.id}`)
  data.id = response.data.card.id
  data.logo = response.data.card.logo
  data.name = response.data.card.name
  data.city = response.data.card.city
  data.rating = response.data.card.rating
  data.address = response.data.card.address
  data.details = response.data.card.details
  data.main_office = response.data.card.main_office
  data.representative = response.data.card.representative
  data.image = response.data.card.image
  data.photos = response.data.photos
  data.comments = response.data.comments
}

fetchData()

const data = reactive({
  name: '',
  name_org: '',
  inn: '',
  email: ''
})

async function createOrg() {
  const newOrg = {
    name: data.name,
    name_org: data.nameOrg,
    inn: data.inn,
    email: data.email
  }

  try {
    const resp = await axios.post('http://localhost:8000/api/register-org', newOrg, {
      withCredentials: true
    })
    console.log(resp.data)
  } catch (error) {
    console.error('Error creating user:', error)
  }
}
</script>
