<template>
  <div class="p sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 flex-col justify-between pt-6 sm:pt-10">
    <div class="ml-0 sm:ml-4 w-full sm:w-auto h-auto flex flex-col sm:flex-row font-normal">
      <img
        class="w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover border-teal-500 shadow-xl rounded-lg"
        src="/images/black.icon.jpeg.jpg"
        alt="Логотип"
      />
      <div class="pl-3 sm:pl-5">
        <p class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
          Отзывы:{{ data.name }}
        </p>
        <p class="text-sm sm:text-base">Город: {{ data.city }}</p>
        <div class="flex flex-col">
          <span class="text-sm sm:text-base">Рейтинг:</span>
          <div class="text-red-500 text-base sm:text-lg">{{ data.rating }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Адрес -->
  <div class="flex-col sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 font-bold pb-4 sm:pb-10 text-gray-700">
    <p class="text-sm sm:text-base">Адрес организации: {{ data.address }}</p>
  </div>

  <!-- Данные -->
  <div class="flex-col sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 font-bold text-gray-700">
    <p class="text-sm sm:text-base">Реквизиты: {{ data.details }}</p>
    <p class="text-sm sm:text-base">Главный офис: {{ data.main_office }}</p>
    <p class="text-sm sm:text-base">Представитель компании на сайте: {{ data.representative }}</p>
  </div>

  <!-- Фотографии -->
  <div
    class="flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 pb-4 sm:pb-6 pt-4 sm:pt-6"
  >
    Фотографии
  </div>

  <div class="flex sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 pb-4 sm:pb-6 pr-0 sm:pr-12">
    <div class="h-36 w-48 sm:h-44 sm:w-60 md:h-56 md:w-80 flex space-x-2 border-teal-600">
      <img
        class="w-full h-full shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg"
        src="/images/JPEG_example_down.jpg"
        alt="Фотография"
      />
      <img
        class="w-full h-full shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg"
        src="/images/black.icon.jpeg.jpg"
        alt="Фотография"
      />
    </div>
  </div>

  <!-- Отзывы -->
  <div
    class="flex justify-start text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40 pb-4 sm:pb-6"
  >
    Отзывы
  </div>

  <!-- Форма отзывов -->
  <div class="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40">
    <CommentForm />
  </div>

  <!-- Комментарии -->
  <div class="sm:mx-4 md:mx-10 lg:mx-20 xl:mx-40">
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
  image: '',
  photos: [],
  comments: []
})

async function fetchData() {
  const response = await axios.get(`/api/company/${route.params.id}`)
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
