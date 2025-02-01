import Wrapper from "@/components/Base/Wrapper.vue";
import type {App} from "vue"
import Button from "@/components/Base/Button.vue";

export default function (app:App): void {
    app.component("Wrapper", Wrapper).component("Button", Button)
}