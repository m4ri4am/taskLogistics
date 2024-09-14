import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/theme.scss'

import App from './App.vue'
import router from './router'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)
app.use(mdiVue, {
  icons: mdijs
})
app.use(ElementPlus)

app.use(createPinia())
app.use(router)
app.mount('#app')
