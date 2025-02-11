# Component
## Communication
- PropWithEmit
    - Child
      ```vue
      <script setup lang="ts">
      const props = defineProps<{ input: string }>();
      const emit = defineEmits<{(e: "update:input", value: string): void}>();
      const inputModel = computed({
        get() {
          return props.input;
        },
        set(newInputValue) {
          emit("update:input", newInputValue);
        },
      });
      </script>
      <template>
        <input v-model="inputModel" />
      </template>
      ```
    - Parent
      ```vue
      <script setup>
         const input = ref('parent-ref')
      </script>
      <template>
          <Child :input="input" @update:input="$event=>(input=event)"/>
      </template>
      ```
- UsingModel
    - Child
   ```vue
  <script setup lang="ts">
    const input = defineModel("input")
  </script>
  <template>
  <input v-model="input" />
  </template>
   ```
    - Parent
  ```vue
   <script setup>
     const input = ref('parent-ref')
   </script>
   <template>
    <Child v-model:input="input"/>
   </template>
  ```
## RemoveUnNecessaryAttribute

```vue

<script setup lang="ts">
  const title = "title";
  const falsyValues = [null, undefined, false, NaN, 0, -0, 0n, "", document.all]
</script>
<template>
  <button v-bind:[title]="null"/>
  <button v-bind="{hasText:null}"/>
  <button v-bind:[title]="undefined"/>
</template>
```
## Slots
```vue
<script setup lang="ts">
  defineSlots<{
    default(props: { label: string }): void,
    content(props: { contentLabel: string }): void
  }>()
    const label = "default label from setup slot"
</script>
<template>
  <div>
    <slot name="default" :label="label"/>
    <slot name="content" :content-label="'content-label'"/>
  </div>
</template>
```

# Watchers
```ts
/**
 * watch       (watch only specefic reactive data)
 *  VS
 *  watchEffect (watches any reactive data)
 */

const isAuthenticated = ref<boolean>(false); //single reactive value
const hasClicked = ref<boolean>();
const user = reactive({ // multiple reactive value within object
    name: undefined,
    additionalInfo: {
        hasPlaceOrder: false
    }
})
// only specefic data
watch(isAuthenticated, (isAuthenticatedValue) => {
})
// additional you can watch multiple refs
watch([isAuthenticated, hasClicked], ([isAuthenticatedValue, hasClickedValue]) => {
})
/**
 * @deep      (option you can watch properties inside reactive object)
 * @immediate (watchCallBack) execute when watch created;
 */
watch(user, (userNewValue) => {
}, {deep: true, immediate: true})
```

# Composable
- useFetch
    ```ts
    import { ref, toValue, watchEffect, type ComputedRef, watch } from "vue"
    export const useFetch = (URL: ComputedRef) => {
    const data = ref(null);
    const error = ref(null)
    watchEffect(async () => {
    const reactiveURL = toValue(URL) // ref computed => value
    try {
    fetch(reactiveURL).then(res => res.json()).then((json) => (data.value = json))
    } catch (err: any) {
    error.value = err;
    }
    })
    return { data, error }
    }
    ```
# More
## Prevents unnecessary reactivity overhead
    ```vue
    <script setup lang="ts">
    import { ref, markRaw, Component } from "vue";
    import MyComponent from "@/components/MyComponent.vue";
    
    const dynamicComponent = ref<Component | null>(null);
    
    const loadComponent = () => {
    dynamicComponent.value = markRaw(MyComponent); // Prevent reactivity
    };
    </script>
    
    <template>
      <button @click="loadComponent">Load Component</button>
      <component v-if="dynamicComponent" :is="dynamicComponent" />
    </template>
    ```

  
# Advanced
## EventBinding
```vue
<template>
  <button v-on="isFetchingBtn ? {click:sendFetchAccess}:{}"/>
  <button v-on:['click']="sendFetchAccess"/>
  <button @[eventHandler]="sendFetchAccess"/>
</template>
```
## Export && Import
```ts
export default function useMouse() {
}
export const useCounter = 0;
export { default as HomeView } from "./index.vue";
import useMouse, {useCounter} from "path_example";
```