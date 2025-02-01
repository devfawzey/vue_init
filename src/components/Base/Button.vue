<script setup lang="ts">
const label = "hello from button"
defineProps<{getLabelFromButton:(label:string)=>string,consoleLabel?:void}>()
</script>
<template>
  <div @click="getLabelFromButton(label)">
    <h1>div</h1>
    <slot/>
    <slot name="icon"/>
  </div>
</template>