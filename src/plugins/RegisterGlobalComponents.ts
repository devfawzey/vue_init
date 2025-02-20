import Wrapper from "@/components/Base/Wrapper.vue";
import type {App} from "vue"
import Button from "@/components/Base/Button.vue";

const registerGlobalComponents = () => ({
    install(app: App, options?: Record<string, any>) {
        app.component("BaseWrapper", Wrapper).component("BaseButton", Button)
    }
})