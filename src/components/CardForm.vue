<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="p mx-60 flex-col justify-between pt-10">
    <div class="ml-4 w-44 h-50 flex font-normal">
      <img class="w-100 h-100" src="/images/black.icon.jpeg.jpg" alt="Логотип" />

      <div class="pl-5">
        <p class="text-4xl font-bold text-gray-700">Отзывы:</p>
        <p class="">Город: ...</p>
        <p class="">Рейтинг: ...</p>
      </div>
    </div>
  </div>
  <!-- Адрес -->
  <div class="flex-col mx-60 font-bold pb-20 text-gray-700">
    <p>Адрес организации: ...</p>
  </div>
  <!-- Данные -->
  <div class="flex-col mx-60 font-bold text-gray-700">
    <p>Реквизиты: ...</p>
    <p>Главный офис: ...</p>
    <p>Представитель компании на сайте: ...</p>
  </div>
  <!-- Фотографии -->
  <div class="flex flex-col text-4xl text-gray-600 mx-60 pb-6 pt-6">Фотографии</div>
  <div class="flex mx-60 pb-6 pr-28">
    <div class="h-56 w-80 flex px-1 border-teal-600">
      <img
        class="rounded-xl hover:border-teal-600 hover:scale-105"
        src="/images/JPEG_example_down.jpg"
        alt="Логотип"
      />
      <img
        src="/images/black.icon.jpeg.jpg"
        class="pl-2 rounded-xl hover:scale-105"
        alt="Логотип"
      />
    </div>
  </div>
  <!-- Отзовик -->
  <div class="flex justify-start text-4xl text-gray-600 mx-60 pb-6">Отзывы</div>
  <div class="mx-60 p-6 bg-gray-100 rounded-lg shadow-md phone">
    <h2 class="text-2xl mb-4 flex justify-center">Оставить отзыв об организации</h2>

    <div class="grid grid-cols-2 gap-4 phone">
      <div class="col-span-2">
        <label for="name" class="block text-sm font-medium text-gray-700">Имя *</label>
        <input
          type="text"
          v-model="review.name"
          id="name"
          class="mt-1 block w-full p-2 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
          placeholder="Ваше имя"
        />
      </div>

      <div class="col-span-2 phone">
        <label class="block text-sm font-medium text-gray-700">Сотрудничество</label>
        <div class="mt-2 flex items-center space-x-6">
          <label class="inline-flex items-center">
            <input
              type="radio"
              v-model="review.status"
              value="Действующий сотрудник"
              class="form-radio"
            />
            <span class="ml-2">Действующий Сотрудник</span>
          </label>
          <label class="inline-flex items-center">
            <input
              type="radio"
              v-model="review.status"
              value="Бывший сотрудник"
              class="form-radio"
            />
            <span class="ml-2">Бывший Сотрудник</span>
          </label>
        </div>
      </div>

      <div class="col-span-2 phone">
        <label for="comment" class="block text-sm font-medium text-gray-700">Комментарий *</label>
        <textarea
          v-model="review.comment"
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
          type="text"
          v-model="review.advantages"
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
          type="text"
          v-model="review.disadvantages"
          id="disadvantages"
          class="mt-1 block w-full p-2 border rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-300"
          placeholder="Недостатки компании"
        />
      </div>

      <div class="col-span-2 flex flex-col">
        <label class="block text-sm font-medium text-gray-700">Ваша оценка</label>
        <div class="mt-1 flex items-center">
          <div v-for="n in 5">
            <svg
              @click="setRating(n)"
              :class="rating >= n ? 'text-yellow-400' : 'text-gray-400'"
              class="w-6 h-6 cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              :key="n"
            >
              <path
                d="M12 .587l3.668 7.429 8.2 1.191-5.934 5.784 1.401 8.169L12 18.896l-7.335 3.864 1.401-8.169-5.934-5.784 8.2-1.191z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-2 mx-80">
      <button
        @click="submitReview"
        class="mt-4 w-full bg-teal-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-300 focus:ring focus:ring-blue-300"
      >
        Оставить отзыв
      </button>
    </div>
  </div>

  <div class="flex flex-col justify-between">
    <h3 class="text-lg font-semibold mb-4">Отзывы организации:</h3>
    <div class="">
      <div class="align-items-center">
        <div class="pt-7 text-gray-700 pr-1">Сортировка:</div>
        <div class="h-8 mt-6 mb-12 pr-48">
          <select
            class="px-4 border border-gray-300 rounded-md text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300 pl-1"
          >
            <option value="desc">Рейтинг: Хорошие</option>
            <option value="asc">Рейтинг: Плохие</option>
            <option value="news">Время: Новые</option>
            <option value="olds">Время: Старые</option>
            <option value="views">По популярности</option>
          </select>
        </div>
      </div>
    </div>
    <div v-for="review in reviews" :key="review.id" class="p-4 bg-white shadow-md rounded-md mb-4">
      <p class="text-sm font-bold">{{ review.name }} ({{ review.status }})</p>
      <p class="mt-2">{{ review.comment }}</p>
      <p class="mt-2"><strong>Достоинства:</strong> {{ review.advantages }}</p>
      <p class="mt-2"><strong>Недостатки:</strong> {{ review.disadvantages }}</p>
      <p class="mt-2">
        <strong>Оценка:</strong>
        <span v-for="n in review.rating" :key="n" class="text-yellow-400">★</span>
        <span v-for="n in 5 - review.rating" :key="n" class="text-gray-400">★</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: {
        name: '',
        status: 'Действующий сотрудник',
        comment: '',
        advantages: '',
        disadvantages: '',
        rating: 0
      },
      reviews: [],
      rating: 0
    }
  },
  methods: {
    setRating(rating) {
      this.rating = rating
      this.review.rating = rating
    },
    submitReview() {
      if (this.review.name && this.review.comment && this.review.rating) {
        this.reviews.push({ ...this.review, id: Date.now() })
        // Очистка формы
        this.review = {
          name: '',
          status: 'Действующий сотрудник',
          comment: '',
          advantages: '',
          disadvantages: '',
          rating: 0
        }
        this.rating = 0
      } else {
        alert('Пожалуйста, заполните обязательные поля и выставьте оценку.')
      }
    }
  }
}
</script>
