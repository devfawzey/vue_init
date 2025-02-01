<script setup lang="ts">
import {defineProps, computed} from "vue";

const props = defineProps<{ input: string }>()
const emit = defineEmits<{
  (e: "update:input", value: string): void
}>()
const inputModel = computed({
  get() {
    return props.input
  },
  set(newValue) {
    console.log("is emitting")
    emit("update:input", newValue)
  }
})
</script>

<template>
  <input v-model="inputModel"/>
</template>
