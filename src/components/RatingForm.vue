<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div id="description-cards" class="mx-auto p-6 pt-40 pr-20 pl-20">
      <div class="justify-center mb-2" id="rating">
        <div class="justify-center min-h-12 bg-white-100">
          <p class="text-black font-bold w-full text-center text-3xl">
            <span class="pt-2 pl-3 pb-2 bg-teal-400">Рей</span>т<span
              class="pt-4 pr-3 pl-0 bg-orange-400"
              >инг</span
            >
          </p>
        </div>
        <h2 class="text-center text-xl font-size">
          Рейтинг компании "Юрист для людей составлен на основе 52 отзывов"
        </h2>
      </div>
    </div>

    <div
      class="p-5 bg-white-100 flex sm:flex-row flex-col items-center justify-evenly flex-wrap sm:flex-nowrap pb-40 pr-20 pl-20"
    >
      <div class="bg-white p-6 rounded-lg flex items-center justify-center flex-col m-2">
        <div class="text-5xl">
          <img src="../assets/images/award.gif" width="50px" height="50px" />
        </div>
        <h3 class="text-2xl">4.5</h3>
        <p class="text-gray-500">Общая оценка</p>
      </div>
      <!-- !!! -->
      <div class="hidden md:flex md:items-center">
        <div class="h-24 border-l border-gray-300 mx-8"></div>
      </div>
      <div class="bg-white p-6 rounded-lg flex items-center justify-center flex-col m-2">
        <div class="text-2xl"></div>
        <img src="../assets/images/111.gif" width="50px" height="50px" />
        <h3 class="text-2xl mt">5</h3>
        <p class="text-gray-500">Положительных отзывов</p>
      </div>
      <!-- !!! -->
      <div class="hidden md:flex md:items-center">
        <div class="h-24 border-l border-gray-300"></div>
      </div>
      <div class="bg-white rounded-lg flex items-center justify-center flex-col m-2">
        <div class="text-2xl"></div>
        <img src="../assets/images/sad.gif" width="50px" height="50px" />
        <h3 class="text-2xl">12</h3>
        <p class="text-gray-500 mt-2">Негативных отзывов</p>
      </div>
    </div>
  </section>
  <div class="bg-teal-400 h-20 text-white py-2 overflow-hidden">
    <div class="marquee-content px-10 pt-5 text-base w-screen max-w-screen">
      <span class="mx-4 text-3xl text-bold marquee">
        • Юрист для людей • Отзывы о компании • Юрист для людей • Отзывы о компании • Юрист для
        людей •
      </span>
      <span class="mx-4 text-3xl text-bold marquee">
        • Юрист для людей • Отзывы о компании • Юрист для людей • Отзывы о компании • Юрист для
        людей •
      </span>
      <span class="mx-4 text-3xl text-bold marquee">
        • Юрист для людей • Отзывы о компании • Юрист для людей • Отзывы о компании • Юрист для
        людей •
      </span>
      <span class="mx-4 text-3xl text-bold marquee">
        • Юрист для людей • Отзывы о компании • Юрист для людей • Отзывы о компании • Юрист для
        людей •
      </span>
      <span class="mx-4 text-3xl text-bold marquee">
        • Юрист для людей • Отзывы о компании • Юрист для людей • Отзывы о компании • Юрист для
        людей •
      </span>
    </div>
  </div>

  <!-- <marquee behavior="alternate" direction="right">
    <div style="background-color: red; width 150px; height: 150px;"></div>
  </marquee> -->
</template>

<style>
@keyframes marquee {
  0% {
    transform: translate3d(-25%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}
</style>
