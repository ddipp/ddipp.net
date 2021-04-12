import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
// import router from './router'
import store from './store';

axios.defaults.baseURL = 'http://127.0.0.1:5000/';

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).mount('#app');
