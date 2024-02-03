import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './styles/index.scss'
import './permission'
import App from './App.vue'
import router from './router'
import { errorHandler } from './error'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const store = createPinia()
app.use(router)
app.use(store)
app.use(ElementPlus)
errorHandler(app)

app.mount("#app")
