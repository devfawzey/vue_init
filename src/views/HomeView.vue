<script setup lang="ts">
import Button from "@/components/Base/Button.vue";
function getLabelFromButton(label:string){
  console.log('hello from parent'+label)
  return label
}
</script>

<template>
  <main>
    <div class="text-2xl font-custom">
      <p v-text="'Home View Page'" style="color:var(--color-body)"/>
      <h1 is="vue:Wrapper">
        MY HOME VIEW
      </h1>
    </div>
  </main>
</template>
