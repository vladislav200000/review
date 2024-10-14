<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="p sm:mx-4 md:mx-20 lg:mx-60 flex-col justify-between pt-10">
    <div class="ml-4 w-full sm:w-auto h-auto flex flex-col sm:flex-row font-normal">
      <img
        class="w-24 h-24 sm:w-44 sm:h-44 object-cover border-teal-500 shadow-xl"
        src="/images/black.icon.jpeg.jpg"
        alt="Логотип"
      />

      <div class="pl-5">
        <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">Отзывы:</p>
        <p>
          Город
          {{ data.city }}
        </p>

        <div class="flex flex-col">
          Рейтинг:
          <div class="text-red-500">{{ data.rating }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Адрес -->
  <div class="flex-col sm:mx-4 md:mx-20 lg:mx-60 font-bold pb-10 text-gray-700">
    <p>Адрес организации: {{ data.address }}</p>
  </div>

  <!-- Данные -->
  <div class="flex-col sm:mx-4 md:mx-20 lg:mx-60 font-bold text-gray-700">
    <p>Реквизиты: {{ data.details }}</p>
    <p>Главный офис: {{ data.main_office }}</p>
    <p>Представитель компании на сайте: {{ data.representative }}</p>
  </div>

  <!-- Фотографии -->
  <div
    class="flex flex-col text-2xl sm:text-3xl md:text-4xl text-gray-600 sm:mx-4 md:mx-20 lg:mx-60 pb-6 pt-6"
  >
    Фотографии
  </div>

  <div class="flex sm:mx-4 md:mx-20 lg:mx-60 pb-6 pr-0 sm:pr-28">
    <div class="h-44 w-60 sm:h-56 sm:w-80 flex space-x-2 border-teal-600">
      <img
        class="w-full h-full h shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg"
        src="/images/JPEG_example_down.jpg"
        alt="Фотография"
      />
      <img
        class="w-full h-full h shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg"
        src="/images/black.icon.jpeg.jpg"
        alt="Фотография"
      />
    </div>
  </div>

  <!-- Отзывы -->
  <div
    class="flex justify-start text-2xl sm:text-3xl md:text-4xl text-gray-600 sm:mx-4 md:mx-20 lg:mx-60 pb-6"
  >
    Отзывы
  </div>

  <div>
    <CommentForm />
  </div>
  <div>
    <CommitsForForms />
  </div>
</template>
<script setup>
import CommentForm from './CommentForm.vue'
import axios from 'axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import CommitsForForms from './CommitsForForms.vue'
const route = useRoute()
console.log(route.params)
const data = reactive({
  id: '',
  logo: '',
  name: '',
  city: '',
  rating: '',
  address: '',
  details: '',
  main_office: '',
  representative: '',
  image: ''
})
async function fetchData() {
  const response = await axios.get(`/api/company/${route.params.id}`)
  console.log(response.data.card)
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
</script>
