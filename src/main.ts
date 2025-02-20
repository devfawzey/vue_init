// import './assets/main.css'
import "@/assets/tailwind.css";

import {type App, createApp} from 'vue'
import {createPinia} from 'pinia'

import TApp from './App.vue'
import router from './router'
import Wrapper from "@/components/Base/Wrapper.vue";
import Button from "@/components/Base/Button.vue";

const initPlugins = {
    install(app: App, options?: Record<string, any>) {
        // register globalComponent
        app.component("BaseWrapper", Wrapper).component("BaseButton", Button);
        //  using Localization
        app.config.globalProperties.$translate = (key: string) => key
    }
}

const app = createApp(TApp)

app.use(createPinia())
app.use(router)
app.use(initPlugins)

app.mount('#app')