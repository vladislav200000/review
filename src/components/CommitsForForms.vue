<template>
  <div class="flex-col mx-56">
    <div class="flex flex-col justify-between">
      <h3 class="text-lg font-semibold mb-4">Оставить отзыв:</h3>
      <div class="p-4 bg-gray-100 shadow-md rounded-md mb-4">
        <p class="text-sm font-bold">Ваш отзыв:</p>
        <textarea
          v-model="comment"
          class="mt-1 block w-full p-2 border rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-300"
          placeholder="Введите комментарий"
        ></textarea>

        <p class="mt-2"><strong>Оценка:</strong></p>
        <select
          v-model="rating"
          class="px-4 border border-gray-300 rounded-md text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
        >
          <option value="5">Отлично</option>
          <option value="4">Хорошо</option>
          <option value="3">Средне</option>
          <option value="2">Плохо</option>
          <option value="1">Ужасно</option>
        </select>

        <button
          @click="submitComment"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Отправить отзыв
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      comment: '',
      rating: 5
    }
  },
  methods: {
    async submitComment() {
      try {
        await axios.post('/api/comments', {
          content: this.comment,
          rating: this.rating
        })
        this.comment = ''
        this.rating = 5
        alert('Комментарий успешно отправлен')
      } catch (error) {
        console.error('Ошибка при отправке комментария:', error)
        alert('Произошла ошибка при отправке комментария')
      }
    }
  }
}
</script>
