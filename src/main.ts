import '@/assets/main.css'
import { createApp } from 'vue'
import routerPlugin from './router'
import App from './App.vue'
import Alert from './components/Alert.vue'

createApp(App).component('Alert', Alert).use(routerPlugin).mount('#app')
