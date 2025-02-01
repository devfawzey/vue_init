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