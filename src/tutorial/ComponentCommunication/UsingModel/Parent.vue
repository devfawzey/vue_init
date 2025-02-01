<script setup>
import { ref } from 'vue'
import Child from "./Child.vue"
const input = ref('parent-ref')

</script>

<template>
  <Child v-model:input="input"/>
</template>
