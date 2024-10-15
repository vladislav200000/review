<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-v-for-template-key-on-child -->
`<!-- eslint-disable vue/valid-template-root -->

<template>
  <div class="mx-auto phone px-4 sm:px-8 md:px-16 lg:px-32">
    <!-- Заголовок -->
    <div class="wrp w-full justify-center flex px-2 pt-8 md:pt-16" id="wrapper">
      <div class="">
        <section class="py-2 text-center container element show justify-center">
          <div class="row py-lg-5">
            <div class="justify-center col-lg-6 col-md-8 mx-auto">
              <span
                class="fw-light text-2xl sm:text-3xl pt-1 pl-1 sm:pl-3 pb-2 sm:pb-3 bg-teal-400 font-bold"
                >Спи</span
              >
              <span class="font-bold text-2xl sm:text-3xl">сок</span>
              <span class="font-bold text-2xl sm:text-3xl"> организа</span>
              <span
                class="font-bold pt-0.5 pr-2 sm:pr-3 pl-0 pb-1 bg-orange-400 text-2xl sm:text-3xl"
                >ций</span
              >

              <p class="pt-2 font-size text-lg sm:text-xl">Фильтр организаций</p>
              <div class="flex justify-center items-center">
                <div class="relative pb-6">
                  <div
                    class="h-1 w-24 sm:w-48 bg-teal-500 transition-all duration-300 ease-out transform hover:scale-x-0 hover:opacity-0"
                  ></div>
                  <div
                    class="absolute top-0 h-0.5 bg-teal-500 w-0 transform origin-left transition-all duration-300 ease-out hover:w-12 sm:hover:w-24"
                  ></div>
                  <div
                    class="absolute top-0 h-0.5 bg-teal-500 w-0 transform origin-right transition-all duration-300 ease-out hover:w-12 sm:hover:w-24 right-0"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Фильтры и поиск -->
    <div class="flex flex-col md:flex-row justify-center pb-6 mx-auto md:mx-60">
      <div class="flex flex-col md:flex-row justify-between items-center pb-8">
        <div
          class="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-between w-full px-4 md:px-12"
        >
          <input
            type="text"
            placeholder="Поиск по названию..."
            class="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
          />
          <input
            type="text"
            placeholder="Поиск по городу..."
            class="w-full md:w-auto px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button
            class="w-full md:w-auto px-8 py-2 border bg-gray-100 border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Выбрать теги
          </button>
          <button
            class="w-full md:w-auto px-8 py-2 border bg-gray-100 border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-400"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>

    <!-- Сортировка -->
    <div class="flex justify-end pb-6 mx-auto md:mx-56 px-4">
      <div class="flex items-center">
        <div class="pt-2 pr-2">Сортировка:</div>
        <select
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
        >
          <option value="desc">Рейтинг: Хорошие</option>
          <option value="asc">Рейтинг: Плохие</option>
          <option value="news">Время: Новые</option>
          <option value="olds">Время: Старые</option>
          <option value="views">По популярности</option>
        </select>
      </div>
    </div>

    <!-- Карточка организации -->
    <form
      class="h-auto flex-col pb-6 mx-auto mb-10 md:mb-20 bg-gray-100 border-gray-300 border rounded-xl p-3 justify-between"
    >
      <div
        class="shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg flex flex-col md:flex-row items-center justify-items-start p-4 md:pt-10 md:mx-40 ml-1 bg-gray-100 mb-10"
      >
        <div class="pb-4 md:pb-6 pl-2 md:pl-6">
          <a href="/card {{ `${id}` }}">
            <h2 class="text-lg md:text-xl font-bold">Организация</h2>
          </a>
          <div class="flex items-center space-x-1 text-red-500">
            <p>Оценка:</p>
          </div>
          <p class="text-gray-700">Город</p>
          <p class="text-sm text-gray-500">Адрес</p>
        </div>
        <div class="mt-4 md:ml-4">
          <RouterLink :to="`/card/${id}`">
            <img
              class="w-24 h-24 md:w-28 md:h-28 rounded object-cover"
              src="../assets/images/black.icon.jpeg.jpg"
              alt="Логотип"
            />
          </RouterLink>
        </div>
      </div>
      <div
        class="shadow-xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-4 hover:border-teal-500 rounded-lg flex flex-col md:flex-row items-center justify-items-start p-4 md:pt-10 md:mx-40 ml-1 bg-gray-100 mb-10"
      >
        <div class="pb-4 md:pb-6 pl-2 md:pl-6">
          <RouterLink :to="`/card/${id}`">
            <h2 class="text-lg md:text-xl font-bold">Юрист для людей</h2>
          </RouterLink>
          <div class="flex items-center space-x-1 text-red-500">
            <p>Оценка</p>
          </div>
          <p class="text-gray-700">Город</p>
          <p class="text-sm text-gray-500">Адрес</p>
        </div>
        <div class="mt-4 md:ml-4">
          <RouterLink :to="`/card/${id}`">
            <img
              class="w-24 h-24 md:w-28 md:h-28 rounded object-cover"
              src="../assets/images/black.icon.jpeg.jpg"
              alt="Логотип"
            />
          </RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
// import CommentForm from './CommentForm.vue'
import axios from 'axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
// import CardForm from './CardForm.vue'
// import CommitsForForms from './CommitsForForms.vue'

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
