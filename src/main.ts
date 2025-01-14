import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap Icons (optional)
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
