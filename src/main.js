import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';

loadFonts()
axios.defaults.baseURL = 'http://localhost:8000/api';
const app = createApp(App).use(router).use(vuetify)
app.config.globalProperties.$axios = axios;  
app.mount('#app')
