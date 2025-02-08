<script setup lang="ts">
defineProps<{ label?: string }>()
</script>
<template>
  <button v-text="label" type="button"
          class="border border-white cursor-pointer hover:bg-gray-300 hover:border-gray-300 px-4 py-1.5 rounded-md capitalize ">
  </button>
</template>