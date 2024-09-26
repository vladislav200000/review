<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h3 class="text-lg font-bold mb-2">{{ review.name }}</h3>
    <p class="text-gray-700 mb-2">{{ review.text }}</p>
    <p class="text-yellow-500">
      <span v-for="star in review.rating" :key="star">*</span>
      <span v-for="star in 5 - review.rating" :key="star" class="text-gray-300">★</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    review: Object
  }
}
</script>
