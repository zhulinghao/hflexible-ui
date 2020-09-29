import { createApp } from 'vue'
import App from './App.vue'
import zlhnb from '../package/index'
import '../package/theme-chalk/index.less'

const app = createApp(App)

app.use(zlhnb).mount('#app')
