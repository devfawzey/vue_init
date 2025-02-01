# Vue

## ComponentCommunication
- PropWithEmit
  - Child
    ```vue
    <script setup lang="ts">
    import { defineProps, computed } from "vue";
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