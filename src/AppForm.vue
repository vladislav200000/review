<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root
<template>
  <HeadForm />
  <ImageForm />
  <OverviewForm />
  <RatingForm />
  <StatisticForm />
  <ReviewForm />
  <Test />
  <!-- <ReviewCard v-for="(review, index) in reviews" :key="index" :review="review" /> -->
  <FooterForm />
</template>

<script setup>
import Test from './components/Test.vue'
import HeadForm from './components/HeadForm.vue'
import ImageForm from './components/ImageForm.vue'
import OverviewForm from './components/OverviewForm.vue'
import RatingForm from './components/RatingForm.vue'
import StatisticForm from './components/StatisticForm.vue'
import ReviewForm from './components/ReviewForm.vue'
// import ReviewCard from './components/ReviewCard.vue'
import FooterForm from './components/FooterForm.vue'
</script>
