// eslint-disable-next-line vue/multi-word-component-names
<template>
  <footer class="bg-gray-950 text-gray-200 p-8 md:p-24" id="footer">
    <div class="flex flex-col md:flex-row px-4 md:justify-between mx-4 md:mx-32">
      <div class="mb-4 md:mb-0 flex flex-col items-center md:items-start">
        <img src="../assets/images/souz.jpg" class="w-full max-w-xs h-auto" alt="Логотип Союз" />
        <p class="text-sm pt-3 text-wrap text-center md:text-left hover:text-balance">
          Правда сотрудников о работодателе на Российском сайте "СОЮЗ"
        </p>
      </div>

      <nav class="flex flex-col text-pretty text-center md:text-left mt-4 md:mt-0">
        <RouterLink to="" class="hover:underline text-sm pt-2">Справка</RouterLink>
        <RouterLink to="" class="hover:underline text-sm pt-2">Связаться с нами</RouterLink>
        <RouterLink to="" class="hover:underline text-sm pt-2"
          >© 2024 soyuz.nezavisimyhotsenshiko</RouterLink
        >
        <RouterLink to="" class="hover:underline text-sm pt-2">О проекте</RouterLink>
      </nav>

      <nav class="flex flex-col text-pretty text-center md:text-left mt-4 md:mt-0">
        <RouterLink to="" class="hover:underline text-sm">Поиск компаний</RouterLink>
        <RouterLink to="/register-org" class="hover:underline text-sm pt-2"
          >Добавить компанию</RouterLink
        >
      </nav>

      <nav
        class="flex flex-col text-pretty text-center md:text-left text-sm font-bold mt-4 md:mt-0"
      >
        <RouterLink to="" class="hover:underline">Топ 10 лучших компаний</RouterLink>
        <RouterLink to="" class="hover:underline pt-2">Топ 10 худших компаний</RouterLink>
      </nav>
    </div>
  </footer>
</template>
