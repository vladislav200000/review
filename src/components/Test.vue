<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names

<template>
  <div>
    {{ todos?.title ? todos.title : 'Loading...' }}
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const todos = reactive({})

async function getTodoData() {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  // @ts-ignore
  todos.title = data.data.title
}

getTodoData()
</script>
