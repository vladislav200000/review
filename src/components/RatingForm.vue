<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div id="description-cards" class="container mx-auto p-6">
      <div class="text-center mb-8">
        <h2 class="text-center text-xl font-bold">Рейтинг компании "Юрист для людей"</h2>
      </div>
    </div>

    <div
      class="m-5 p-5 bg-gray-100 flex sm:flex-row flex-col items-center justify-evenly flex-wrap sm:flex-nowrap"
    >
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col m-2">
        <div class="text-5xl mb-4">🏆</div>
        <h3 class="text-4xl font-bold">4.5</h3>
        <p class="text-gray-500 mt-2">Общая оценка</p>
      </div>
      <!-- !!! -->
      <div class="hidden md:flex md:items-center">
        <div class="h-24 border-l border-gray-300 mx-8"></div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col m-2">
        <div class="text-5xl mb-4">👍</div>
        <h3 class="text-4xl font-bold">40</h3>
        <p class="text-gray-500 mt-2">Положительных отзывов</p>
      </div>
      <!-- !!! -->
      <div class="hidden md:flex md:items-center">
        <div class="h-24 border-l border-gray-300 mx-8"></div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col m-2">
        <div class="text-5xl mb-4">😕</div>
        <h3 class="text-4xl font-bold">12</h3>
        <p class="text-gray-500 mt-2">Негативных отзывов</p>
      </div>
    </div>
  </section>
  <marquee>Юрист для людей * Юрист для людей * Юрист для людей</marquee>
</template>
