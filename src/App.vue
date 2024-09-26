<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root
<template>
  <HeadForm @add-head="addHead" />
  <ImageForm @add-image="addImage" />
  <OverviewForm @add-overview="addOverview" />
  <RatingForm @add-rating="addRating" />
  <ReviewForm @add-review="addReview" />
  <ReviewCard v-for="(review, index) in reviews" :key="index" :review="review" />
  <FooterForm @add-footer="addFooter" />
</template>

<script setup>
import HeadForm from './components/HeadForm.vue'
import ImageForm from './components/ImageForm.vue'
import OverviewForm from './components/OverviewForm.vue'
import RatingForm from './components/RatingForm.vue'
import ReviewForm from './components/ReviewForm.vue'
import ReviewCard from './components/ReviewCard.vue'
import FooterForm from './components/FooterForm.vue'

import { reactive } from 'vue'

const reviews = reactive([])

function addReview(newReview) {
  reviews.push(newReview)
}
</script>
