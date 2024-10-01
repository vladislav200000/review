<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronDown } from '@mdi/js'
</script>

<template>
  <body class="bg-white-100">
    <div class="flex items-center justify-center">
      <form
        class="bg-image w- max-w-lgs rounded px-8 pt-5 pb-10 mb-4 flex flex-col items-center justify-evenly"
      >
        <div
          class="flex justify-center items-center w- mt-30 max-w-lgs rounded px-8 pt-5 pb-8 mb-4 flex-col mx-auto"
        >
          <h2 class="text-center text-white text-3xl font-bold h-50 w-50 mb-10">
            Отзывы сотрудников
          </h2>
          <h2 class="text-center text-white text-5xl font-bold h-50 w-50">Юрист для людей</h2>
          <div
            class="button mt-10 py-4 px-5 rounded-full bg-teal-400 hover:bg-orange-500 text-white"
          >
            Добавить отзыв
          </div>
        </div>
        <body class="bg-gray-800 flex flex-col items-center justify-center h-screen"></body>
        <button
          id="@click:scrollButton  justify-center items-center flex-col"
          class="focus:outline-none"
        >
          <a href="#text"
            ><div class="arrow">
              <svg-icon
                type="mdi"
                :path="mdiChevronDown"
                class="text-white w-10 h-10"
              ></svg-icon></div
          ></a>
        </button>
      </form>
    </div>
  </body>

  <!-- mdiChevronDown  -->
</template>
<style>
.bg-image {
  background-image: url(../assets/images/1.jpeg);
  background-size: cover;
  background-position: center;
  background-color: rgba(83, 78, 71, 0.5);
  background-blend-mode: multiply;
  height: 50vh;
  width: 100vw;
}
.button {
  transition: 0.5s;
}
.arrow {
  width: 30px;
  height: 30px;
  animation: bounce 1.5s infinite;

  scroll-behavior: smooth;
}
.scrollButton {
  scroll-behavior: smooth;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
