<!-- eslint-disable vue/valid-template-root -->
<script setup>
import { store } from '@/store'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed, ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const logout = () => {
  axios
    .post('/api/logout', {}, { withCredentials: true })
    .then((response) => {
      console.log(response.data.message)
      store.commit('logout')
      router.push('/login')
    })
    .catch((error) => {
      console.error('Error during logout:', error)
    })
}

const isAuthenticated = computed(() => store.state.authenticated)

console.log(store.state)

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div
    class="fixed bg-white hidden sm:flex w-full justify-items-center pr-40 background-opacity will-change-transform will-change-opacity transition-opacity duration-300 z-50"
  >
    <div class="bg-white min-w-10 px-12 py-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto">
      <a href="/">
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
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1 flex flex-col">
            <MenuItem>
              <RouterLink
                to="/register"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Регистрация
              </RouterLink>
            </MenuItem>

            <MenuItem>
              <RouterLink
                to="/login"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Авторизация
              </RouterLink>
            </MenuItem>
            <div v-if="isAuthenticated">
              <MenuItem>
                <RouterLink
                  to="/profile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Профиль
                </RouterLink>
              </MenuItem>

              <MenuItem>
                <RouterLink
                  to="/comments"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Мои отзывы
                </RouterLink>
              </MenuItem>
            </div>
            <MenuItem>
              <RouterLink
                to="/urist"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Организации
              </RouterLink>
            </MenuItem>
            <div v-if="isAuthenticated">
              <MenuItem>
                <div
                  @click="logout"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                >
                  Выйти
                </div>
              </MenuItem>
            </div>
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
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1 flex flex-col">
              <MenuItem>
                <RouterLink
                  to="/register"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Регистрация
                </RouterLink>
              </MenuItem>

              <MenuItem>
                <RouterLink
                  to="/login"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Авторизация
                </RouterLink>
              </MenuItem>
              <div v-if="isAuthenticated">
                <MenuItem>
                  <RouterLink
                    to="/profile"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Профиль
                  </RouterLink>
                </MenuItem>

                <MenuItem>
                  <RouterLink
                    to="/comments"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Мои отзывы
                  </RouterLink>
                </MenuItem>
              </div>
              <MenuItem>
                <RouterLink
                  to="/urist"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Организации
                </RouterLink>
              </MenuItem>
              <div v-if="isAuthenticated">
                <MenuItem>
                  <div
                    @click="logout"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  >
                    Выйти
                  </div>
                </MenuItem>
              </div>
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
