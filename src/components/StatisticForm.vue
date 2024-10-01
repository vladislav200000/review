<!-- eslint-disable vue/valid-template-root -->

<template>
  <div id="description-cards" class="mx-auto p-6 pt-40">
    <div class="justify-center mb-2">
      <div class="justify-center min-h-12 bg-white-100">
        <p class="text-black font-bold w-full text-center text-3xl">
          <span class="pt-2 pl-3 pb-2 bg-teal-400">Об</span>щее впечатление о компании
        </p>
      </div>
      <h2 class="text-center text-xl font-size">
        Оценка составлена на опросе сотрудников по критериям:
      </h2>
    </div>
  </div>
  <div
    class="p-5 bg-white-100 flex sm:flex-row flex-col items-center justify-evenly flex-wrap sm:flex-nowrap pb-40"
  >
    <div class="bg-white p-6 rounded-lg flex items-center justify-center flex-col m-2">
      <div class="text-5xl"></div>
      <h3 class="text-2xl">4.5</h3>
      <p class="text-gray-500">Условия труда</p>
    </div>
    <!-- !!! -->
    <div class="hidden md:flex md:items-center">
      <div class="h-24 border-l border-gray-300 mx-8"></div>
    </div>
    <div class="bg-white p-6 rounded-lg flex items-center justify-center flex-col m-2">
      <div class="text-2xl"></div>
      <h3 class="text-2xl mt">5</h3>
      <p class="text-gray-500">Коллектив</p>
    </div>
    <!-- !!! -->
    <div class="hidden md:flex md:items-center">
      <div class="h-24 border-l border-gray-300"></div>
    </div>
    <div class="bg-white rounded-lg flex items-center justify-center flex-col m-2">
      <div class="text-2xl"></div>
      <h3 class="text-2xl">12</h3>
      <p class="text-gray-500 mt-2">Руководство</p>
    </div>
  </div>
</template>
