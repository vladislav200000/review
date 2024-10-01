import { createApp } from 'vue'
import App from './AppForm.vue'
// eslint-disable-next-line no-unused-vars
import './index.css'
import { router } from './router'

createApp(App).use(router).mount('#app')
