<!-- eslint-disable vue/valid-template-root -->
<template>
  <div
    class="fixed bg-white hidden sm:flex w-full justify-items-center pr-40 background-opacity will-change-transform will-change-opacity transition-opacity duration-300 z-50"
  >
    <div class="bg-white min-w-10 px-12 py-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
      <a href="/mainpage">
        <img
          src="../assets/images/souz.jpg "
          alt="Логотип"
          class="w-full h-full flex font-normal object-cover"
        />
      </a>
    </div>

    <header
      class="bg-white-600 text-gray-400 sticky top-200 z-200 items-center w-full flex-col justify-center"
    >
      <div class="pt-3 mx-auto items-center">
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
    <Menu as="div" class="relative flex justify-items-end text-left sm">
      <div class="flex-col justify-center pt-10">
        <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {{ store.state.email ? store.state.email : 'Не авторизован' }}

          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none justify-center"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="/profile"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Профиль</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="/comments"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Мои отзывы</a
              >
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <a
                href="/mainpage"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Главная страница</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="/urist"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Организации</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                @click="logout"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Выйти</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="/review"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                ]"
                >Опрос</a
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
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
      <Menu as="div" class="relative flex justify-items-end text-left sm">
        <div class="sm:pl-48">
          <MenuButton
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Пользователь
            <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none justify-center"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="/profile"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Профиль</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="/comments"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Мои отзывы</a
                >
              </MenuItem>

              <MenuItem v-slot="{ active }">
                <a
                  href="/mainpage"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Главная страница</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="/usrist"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Организации</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="/review"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  ]"
                  >Опрос</a
                >
              </MenuItem>
              <MenuItem>
                <a @click.capture="logout" class="{{styles}}">Выйти</a>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
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
import { store } from '@/store'
console.log(store.state.email)
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
// import { computed, ref } from 'vue'

// let styles = computed(() => {
//   return active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'
// })

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
