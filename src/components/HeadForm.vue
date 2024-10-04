<!-- eslint-disable vue/valid-template-root -->
<template>
  <div
    class="fixed bg-white hidden sm:flex w-full justify-items-center pr-40 background-opacity will-change-transform will-change-opacity transition-opacity duration-300 z-50"
  >
    <div class="bg-white min-w-10 px-12 py-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
      <img
        src="../assets/images/souz.jpg "
        alt="Логотип"
        class="w-full h-full flex font-normal object-cover"
      />
    </div>
    <header class="bg-white-600 text-gray-400 sticky top-200 z-200 items-center w-full">
      <div class="pt-3 mx-auto items-center justify-stretch">
        <nav>
          <ul class="flex space-x-6 justify-around items-center pt-12" justify-center>
            <li>
              <RouterLink class="hover:text-gray-700 items-center pt-3" :to="{ hash: '#footer' }"
                >Описание</RouterLink
              >
            </li>

            <li>
              <a
                @click.prevent="scrollToSection('reviews')"
                class="hover:text-gray-700 items-center pt-3"
                >Отзывы</a
              >
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('rating')"
                class="hover:text-gray-700 items-center pt-3"
                >Рейтинг</a
              >
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('statistics')"
                class="hover:text-gray-700 items-center pt-3"
                >Статистика</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>

  <div class="h-24 hidden sm:flex"></div>

  <div class="w-full flex flex-col bg-white fixed sm:hidden e z-30">
    <button @click="toggleMenu" class="sm:hidden block text-gray-300 focus:outline-none">
      <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <nav
      :class="{ hidden: !isMenuOpen }"
      class="sm:flex sm:items-center sm:justify-center space-x-6 justify-around pt-8 absolute bg-white w-full top-8"
    >
      <ul class="flex flex-col sm:flex-row sm:space-x-6 items-center">
        <li>
          <a
            @click.prevent="scrollToSection('description')"
            class="hover:text-gray-700 items-center pt-3"
            >Описание</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('reviews')"
            class="hover:text-gray-700 items-center pt-3"
            >Отзывы</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('rating')"
            class="hover:text-gray-700 items-center pt-3"
            >Рейтинг</a
          >
        </li>
        <li>
          <a
            @click.prevent="scrollToSection('statistics')"
            class="hover:text-gray-700 items-center pt-3"
            >Статистика</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div class="h-8 block sm:hidden"></div>
</template>
<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
