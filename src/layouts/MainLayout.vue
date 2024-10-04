<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <HeadForm></HeadForm>
    <RouterView></RouterView>
    <FooterForm></FooterForm>
  </div>
</template>
<script setup>
import HeadForm from '@/components/HeadForm.vue'
import FooterForm from '@/components/FooterForm.vue'
import { RouterView } from 'vue-router'
</script>
