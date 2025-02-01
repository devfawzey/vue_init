# Vue

## ComponentCommunication

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
  const title = "title"
</script>
<template>
  <button v-bind:[title]="null"/>
  <button v-bind:[title]="undefined"/>
</template>
```

## Watchers
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

# Composables
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
    console.log("somethingwent wrong")
    }
    })
    return { data, error }
    }
    ```