<script setup lang="ts">
const input = defineModel("input")
</script>

<template>
  <div>
    <input v-model="input" />
  </div>
</template>
