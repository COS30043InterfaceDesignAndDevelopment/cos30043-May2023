import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap: 
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.config.productionTip = false

const app = createApp(App)

app.config.productionTip = false

app.use(router).mount('#app')
