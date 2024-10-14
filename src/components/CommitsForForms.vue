<template>
  <div
    class="flex-wrap mx-4 sm:mx-2 md:mx-10 lg:mx-20 xl:mx-40 sm:ml-2 sm:mt-2 sm:w-auto sm:h-auto"
  >
    <h3 class="text-sm font-bold mb-2">Отзывы компании:</h3>
    <div v-if="comments.length">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="p-2 bg-gray-100 shadow-md rounded-md mb-2"
      >
        <p class="text-xs font-bold">
          {{ comment.name }} Оценка ({{ comment.rating }}/5) {{ comment.status }}
        </p>
        <p class="text-xs">Комментарий:{{ comment.comment }}></p>
        <p class="text-xs">Достоинства: {{ comment.advantages }}</p>
        <p class="text-xs">Недостатки: {{ comment.disadvantages }}</p>
      </div>
    </div>
    <div v-else>
      <p>Отзывов пока нет.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['companyId'],
  data() {
    return {
      comments: [],
      newComment: '',
      newRating: 5
    }
  },
  mounted() {
    this.fetchComments()
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(`/api/comments`)
        this.comments = response.data
      } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error)
      }
    },
    async submitComment() {
      try {
        await axios.post('/api/comments', {
          content: this.newComment,
          rating: this.newRating,
          company_id: this.companyId
        })
        this.newComment = ''
        this.newRating = 5
        alert('Комментарий успешно отправлен')

        this.fetchComments()
      } catch (error) {
        console.error('Ошибка при отправке комментария:', error)
        alert('Произошла ошибка при отправке комментария')
      }
    }
  }
}
</script>
