<template>
  <!-- Форма для отзыва -->
  <form @submit.prevent="submitComment">
    <div class="sm:mx-4 md:mx-20 lg:mx-56 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 class="text-xl sm:text-2xl mb-4 flex justify-center">Оставить отзыв об организации</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="col-span-2">
          <label for="name" class="block text-sm font-medium text-gray-700">Имя *</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            class="mt-1 block w-full p-2 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Ваше имя"
          />
        </div>

        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700">Сотрудничество</label>
          <div class="mt-2 flex items-center space-x-6">
            <label class="inline-flex items-center">
              <input
                v-model="form.status"
                type="radio"
                value="Действующий сотрудник"
                class="form-radio"
              />
              <span class="ml-2">Действующий Сотрудник</span>
            </label>
            <label class="inline-flex items-center">
              <input
                v-model="form.status"
                type="radio"
                value="Бывший сотрудник"
                class="form-radio"
              />
              <span class="ml-2">Бывший Сотрудник</span>
            </label>
          </div>
        </div>

        <div class="col-span-2">
          <label for="comment" class="block text-sm font-medium text-gray-700">Комментарий *</label>
          <textarea
            v-model="form.comment"
            id="comment"
            rows="3"
            class="mt-1 block w-full p-2 border rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Ваши впечатления об организации"
          ></textarea>
        </div>

        <!-- Достоинства -->
        <div class="col-span-1">
          <label for="advantages" class="block text-sm font-medium">Достоинства</label>
          <input
            v-model="form.advantages"
            type="text"
            id="advantages"
            class="mt-1 block w-full p-2 border rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
            placeholder="Достоинства компании"
          />
        </div>

        <!-- Недостатки -->
        <div class="col-span-1">
          <label for="disadvantages" class="block text-sm font-medium text-gray-700"
            >Недостатки</label
          >
          <input
            v-model="form.disadvantages"
            type="text"
            id="disadvantages"
            class="mt-1 block w-full p-2 border rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-300"
            placeholder="Недостатки компании"
          />
        </div>

        <!-- Оценка -->
        <div class="col-span-2 flex flex-col">
          <label class="block text-sm font-medium text-gray-700">Ваша оценка</label>
          <div class="mt-1 flex items-center">
            <div v-for="i in 5" :key="i" @click="setRating(i)" class="cur">
              <svg
                :class="rating >= i ? 'text-yellow-400' : 'text-gray-400'"
                class="w-6 h-6 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 active:scale-95"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.429 8.2 1.191-5.934 5.784 1.401 8.169L12 18.896l-7.335 3.864 1.401-8.169-5.934-5.784 8.2-1.191z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Кнопка отправки -->
      <button
        type="submit"
        class="w-full bg-teal-500 text-white p-2 rounded-md shadow-md hover:bg-teal-400"
      >
        Отправить
      </button>

      <!-- Уведомление об успехе -->
      <div v-if="message" class="mt-4 bg-green-100 text-green-700 p-4 rounded-lg">
        {{ message }}
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        status: '1',
        comment: '',
        advantages: '',
        disadvantages: ''
      },
      rating: 1,
      message: ''
    }
  },
  methods: {
    setRating(n) {
      this.rating = n
    },
    async submitComment() {
      try {
        const response = await axios.post('/api/comments', {
          ...this.form,
          rating: this.rating
        })

        this.message = response.data.message
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    resetForm() {
      this.form = {
        name: '',
        status: '',
        comment: '',
        advantages: '',
        disadvantages: ''
      }
      this.rating = 0
    }
  }
}
</script>
