// import './assets/main.css'
import "@/assets/tailwind.css";

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import RegisterGlobalComponents from "@/plugins/RegisterGlobalComponents.ts";

const app = createApp(App)

app.use(createPinia())
app.use(router)

RegisterGlobalComponents(app);

app.mount('#app')
