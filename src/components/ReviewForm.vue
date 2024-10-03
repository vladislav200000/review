<template>
  <div>
    {{ data ? data : 'Данных нету' }}
  </div>
  <div class="flex flex-col items-center justify-center pt-20 pb-20" @submit.prevent="review">
    <div class="bg-white rounded-lg shadow-md p-6 w-5/6">
      <div class="flex items-center mb-4">
        <h2 class="text-lg font-semibold">
          Ответьте на 7 вопросов и оставте отзыв о работадателе компании «Юрист для людей»
        </h2>
        <span class="text-gray-500 ml-2">{{ currentQuestionIndex + 1 }}/7</span>
      </div>

      <p class="text-lg mb-6">
        {{ questions[currentQuestionIndex].text }}
      </p>

      <div v-if="currentQuestionIndex === 0">
        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="1"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">1</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="2"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">2</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="3"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">3</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="4"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">4</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="5"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">5</span>
        </label>
      </div>

      <div v-if="currentQuestionIndex === 1">
        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="1"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">1</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="2"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">2</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="3"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">3</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="4"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">4</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="5"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">5</span>
        </label>
      </div>

      <div v-if="currentQuestionIndex === 2">
        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="1"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">1</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="2"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">2</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="3"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">3</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="4"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">4</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="5"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">5</span>
        </label>
      </div>

      <div v-if="currentQuestionIndex === 3">
        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="1"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">1</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="2"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">2</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="3"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">3</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="4"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">4</span>
        </label>

        <label class="flex items-center mb-4 cursor-pointer">
          <input
            type="radio"
            name="answer"
            value="5"
            v-model="answers[currentQuestionIndex]"
            class="form-radio h-4 w-4 text-teal-500 mr-3"
          />
          <span class="text-gray-700 text-base">5</span>
        </label>
      </div>

      <div v-if="currentQuestionIndex === 4">
        <textarea
          placeholder="Опишите положительные стороны работодателя, например: белая зарплата, дмс, перспективы развития"
          @change="
            (e) => {
              answers[currentQuestionIndex] = e.target.value
            }
          "
          class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
      </div>

      <div v-if="currentQuestionIndex === 5">
        <textarea
          placeholder="Введите ваш ответ..."
          @change="
            (e) => {
              answers[currentQuestionIndex] = e.target.value
            }
          "
          class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
      </div>

      <div v-if="currentQuestionIndex === 6">
        <textarea
          placeholder="Ваше имя"
          @change="
            (e) => {
              answers[currentQuestionIndex] = e.target.value
            }
          "
          class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <div class="text-xs pb-2 font-bold">Ваша должность</div>
        <textarea
          placeholder=""
          @change="
            (e) => {
              answers[currentQuestionIndex] = e.target.value
            }
          "
          class="pt-1 w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
        <textarea
          placeholder="Ваш город"
          @change="
            (e) => {
              answers[currentQuestionIndex] = e.target.value
            }
          "
          class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
      </div>

      <div class="flex justify-between mt-8">
        <button
          class="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-gray-600 disabled:opacity-50"
          @click="prevQuestion"
          :disabled="currentQuestionIndex === 0"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Назад
        </button>

        <button
          class="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg disabled:opacity-50"
          @click="nextQuestion"
          :disabled="!answers[currentQuestionIndex]"
        >
          {{ currentQuestionIndex === questions.length - 1 ? 'Завершить' : 'Далее' }}

          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
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
      data: null,
      currentQuestionIndex: 0,
      questions: [
        { text: 'Оцените условия труда по 5-бальной шкале' },
        { text: 'Оцените коллектив по 5-бальной шкале' },
        { text: 'Оцените руководство компании по 5-бальной шкале' },
        { text: 'Оцените общее впечатление 5-бальной шкале' },
        { text: 'Положительные стороны работодателя' },
        { text: 'Негативные моменты' },
        { text: '' }
      ],
      answers: Array(7).fill(null)
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++
      } else {
        alert('Спасибо за прохождение опроса!')
        this.review()
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
      }
    },
    async review() {
      try {
        const response = await axios.post('/api/review', {
          answers: this.answers
        })
        console.log(response)
        this.data = response.data
        alert('Спасибо за прохождение опроса!')
      } catch (error) {
        console.error('Ошибка при отправке данных:', error)
        alert('Ошибка при отправке данных. Пожалуйста, попробуйте позже.')
      }
    }
  }
}
</script>

<style scoped></style>
