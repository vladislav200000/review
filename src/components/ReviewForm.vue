<template>
  <main class="p-6">
    <div class="bg-blue-600 p-6 text-white text-center">
      <h1 class="text-3xl font-bold">Отзывы клиентов</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"></div>
    </div>
  </main>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Оставить отзыв</h2>
    <form @submit.prevent="submitReview">
      <div class="mb-4">
        <label class="block text-gray-700">Имя:</label>
        <input
          v-model="name"
          class="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Ваше имя"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Отзыв:</label>
        <textarea
          v-model="text"
          class="w-full p-2 border border-gray-300 rounded"
          placeholder="Ваш отзыв"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Оценка:</label>
        <select v-model="rating" class="w-full p-2 border border-gray-300 rounded">
          <option disabled value="">Выберите оценку</option>
          <option value="1">1 звезда</option>
          <option value="2">2 звезды</option>
          <option value="3">3 звезды</option>
          <option value="4">4 звезды</option>
          <option value="5">5 звезд</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Добавить отзыв
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      text: '',
      rating: ''
    }
  },
  methods: {
    submitReview() {
      const newReview = {
        name: this.name,
        text: this.text,
        rating: this.rating
      }
      this.$emit('add-review', newReview)
      this.name = ''
      this.text = ''
      this.rating = ''
    }
  }
}
</script>
