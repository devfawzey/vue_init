<script setup>
import { ref } from 'vue'
import Child from "./Child.vue"
const input = ref('parent-ref')

</script>

<template>
  <Child :input="input" @update:input="input=$event"/>
</template>
