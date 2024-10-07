<template>
  <div class="flex flex-col lg:flex-row lg:space-x-6 p-6 space-y-6 lg:space-y-0 mx-40 pt-20 pb-40">
    <div class="bg-white shadow-xl rounded-lg p-6 w-full lg:w-1/2">
      <h2 class="text-lg font-semibold border-b border-gray-200 pb-2 mb-4">Общая информация</h2>
      <form @submit.prevent="saveGeneralInfo">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
          <input
            v-model="generalInfo.name"
            id="name"
            type="text"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Введите ваше имя"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Электронная почта</label
          >
          <input
            v-model="generalInfo.email"
            id="email"
            type="email"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Введите вашу почту"
          />
        </div>
        <div class="mb-4">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="generalInfo.newsletter"
              class="form-checkbox h-4 w-4 text-indigo-600"
            />
            <span class="ml-2">Рассылка информации по электронной почте</span>
          </label>
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
        >
          Сохранить изменения
        </button>
      </form>
    </div>

    <div class="bg-white shadow-xl rounded-lg p-6 w-full lg:w-1/2">
      <h2 class="text-lg font-semibold border-b border-gray-200 pb-2 mb-4">Управление паролем</h2>
      <form @submit.prevent="changePassword">
        <div class="mb-4">
          <label for="current_password" class="block text-sm font-medium text-gray-700"
            >Старый пароль</label
          >
          <input
            v-model="passwordForm.current_password"
            id="current_password"
            type="password"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Введите старый пароль"
          />
        </div>
        <div class="mb-4">
          <label for="new_password" class="block text-sm font-medium text-gray-700"
            >Новый пароль</label
          >
          <input
            v-model="passwordForm.new_password"
            id="new_password"
            type="password"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Введите новый пароль"
          />
        </div>
        <div class="mb-4">
          <label for="confirm_password" class="block text-sm font-medium text-gray-700"
            >Повторите пароль</label
          >
          <input
            v-model="passwordForm.confirm_password"
            id="confirm_password"
            type="password"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Повторите пароль"
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600"
        >
          Изменить пароль
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      generalInfo: {
        name: '',
        email: '',
        newsletter: false
      },
      passwordForm: {
        current_password: '',
        new_password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    saveGeneralInfo() {
      console.log('Сохранить общую информацию', this.generalInfo)
    },
    changePassword() {
      if (this.passwordForm.new_password !== this.passwordForm.confirm_password) {
        alert('Пароли не совпадают')
        return
      }
      console.log('Изменение пароля', this.passwordForm)
    }
  }
}
</script>
