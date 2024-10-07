<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-v-for-template-key-on-child -->
`<!-- eslint-disable vue/valid-template-root -->
<template>
  <class class="mx-32 phone">
    <div class="wrp w-full justify-center flex px-2 pt-16" id="wrapper">
      <div class="">
        <section class="py-2 text-center container element show justify-center">
          <div class="row py-lg-5">
            <div class="justify-center col-lg-6 col-md-8 mx-auto">
              <span class="fw-light text-3xl pt-1 pl-3 pb-3 bg-teal-400 font-bold">Спи</span
              ><span class="font-bold text-3xl">сок</span>
              <span class="font-bold text-3xl"> организа</span>
              <span class="font-bold pt-0.5 pr-3 pl-0 pb-1 bg-orange-400 text-3xl">ций </span>

              <p class="pt-2 font-size text-xl">Фильтр организаций</p>
              <div class="flex justify-center items-center">
                <div class="relative pb-6">
                  <div
                    class="h-1 w-48 bg-teal-500 transition-all duration-300 ease-out transform hover:scale-x-0 hover:opacity-0"
                  ></div>
                  <div
                    class="absolute top-0 h-0.5 bg-teal-500 w-0 transform origin-left transition-all duration-300 ease-out hover:w-24"
                  ></div>
                  <div
                    class="absolute top-0 h-0.5 bg-teal-500 w-0 transform origin-right transition-all duration-300 ease-out hover:w-24 right-0"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <link />

    <div class="justify-center flex pb-6 mx-60">
      <div class="flex flex-col justify-between items-center pb-8">
        <div class="space-x-4 flex justify-between px-12">
          <input
            type="text"
            placeholder="Поиск по названию..."
            class="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
          />
          <input
            type="text"
            placeholder="Поиск по городу..."
            class="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-300"
          />
          <button
            class="px-8 py-2 border bg-gray-100 border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Выбрать теги
          </button>
          <button
            class="px-8 py-2 border bg-gray-100 border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-400"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-end pb-6 mx-56">
      <div class="flex justify-center align-items-center">
        <div class="pt-2 pr-2">Сортировка:</div>

        <select
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300 pl-2"
        >
          <option value="desc">Рейтинг: Хорошие</option>
          <option value="asc">Рейтинг: Плохие</option>
          <option value="news">Время: Новые</option>
          <option value="olds">Время: Старые</option>
          <option value="views">По популярности</option>
        </select>
      </div>
    </div>
  </class>

  <!-- !!! -->
  <form
    class="h-56 flex-col pb-6 mx-60 mb-20 justify-center bg-gray-100 border-gray-300 border rounded-xl p-3"
  >
    <div
      class="flex border-gray-300 items-center justify-items-start pt-10 mx-40 ml-1 bg-gray-100 shadow-md rounded-lg mb-20"
    >
      <div class="pb-6 pl-6">
        <a href="/card">
          <h2 class="text-xl font-bold">Юрист для дюдей</h2>
        </a>
        <div class="flex items-center space-x-1 text-red-500">
          <p>Оценка</p>
        </div>

        <p class="text-gray-700">Город</p>

        <p class="text-sm text-gray-500">Адрес</p>
      </div>

      <div class="ml-4">
        <a href="/card">
          <img
            class="w-24 h-24 rounded object-cover"
            src="../assets/images/black.icon.jpeg.jpg"
            alt="Логотип"
          />
        </a>
      </div>
    </div>
  </form>
</template>
