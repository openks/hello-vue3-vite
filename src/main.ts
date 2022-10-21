import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './views/demos/attrs/Parent.vue'
// import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
