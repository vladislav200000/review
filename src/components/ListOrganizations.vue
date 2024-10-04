`<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="mx-32">
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

    <div class="justify-center items-center pb-6 mx-20 sm:mx-1 lg:mx-1">
      <div class="flex flex-col lg:flex-row lg:space-x-6 p-6 space-y-6 lg:space-y-0">
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
            class="px-8 py-2 border border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Выбрать теги
          </button>
          <button
            class="px-8 py-2 border border-gray-300 rounded-md shadow-sm text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-400"
          >
            Сбросить
          </button>
        </div>
      </div>
      <div class="flex justify-end pb-6">
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
    </div>
  </div>

  <div class="bg-gray-200 p-6 rounded-lg shadow-md mx-32 h-60 border-gray-600 border mb-36">
    <h1 class="text-xl font-semibold text-gray-800"></h1>
    <p class="text-gray-600"></p>
  </div>
</template>
`
