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
        <p>Город: ...</p>
        <p>Рейтинг: ...</p>
      </div>
    </div>
  </div>

  <!-- Адрес -->
  <div class="flex-col sm:mx-4 md:mx-20 lg:mx-60 font-bold pb-10 text-gray-700">
    <p>Адрес организации: ...</p>
  </div>

  <!-- Данные -->
  <div class="flex-col sm:mx-4 md:mx-20 lg:mx-60 font-bold text-gray-700">
    <p>Реквизиты: ...</p>
    <p>Главный офис: ...</p>
    <p>Представитель компании на сайте: ...</p>
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
        class="w-full h-full rounded-xl hover:border-teal-600 hover:scale-105 shadow-xl"
        src="/images/JPEG_example_down.jpg"
        alt="Фотография"
      />
      <img
        class="w-full h-full rounded-xl hover:scale-105 shadow-xl"
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
</template>
<script setup>
import CommentForm from './CommentForm.vue'
</script>
