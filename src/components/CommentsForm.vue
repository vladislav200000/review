<template>
  <div class="flex flex-col items-center justify-center pt-20 pb-20">
    <div class="text-3xl font-bold pb-2">Коментарии</div>
    <div class="flex space-x-4 border-b-2 border-gray-200">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(index)"
        class="relative pb-2 text-gray-600"
      >
        {{ tab }}
        <div
          v-if="activeTab === index"
          class="absolute left-0 bottom-0 w-full h-1 bg-green-500 transition-all duration-300 ease-in-out"
        ></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['ВСЕ', 'НА МОДЕРАЦИИ', 'ОПУБЛИКОВАН', 'ОТКЛОНЕН'],
      activeTab: 0
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
}

button div {
  transition-property: width, left;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
