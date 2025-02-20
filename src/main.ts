// import './assets/main.css'
import "@/assets/tailwind.css";

import {type App, createApp} from 'vue'
import {createPinia} from 'pinia'

import TApp from './App.vue'
import router from './router'
import Wrapper from "@/components/Base/Wrapper.vue";
import Button from "@/components/Base/Button.vue";

export const myPlugin = {
    install(app: App, options?: Record<string, any>) {
        app.component("BaseWrapper", Wrapper).component("BaseButton", Button)
    }
}

const app = createApp(TApp)

app.use(createPinia())
app.use(router)
app.use(myPlugin)

app.mount('#app')