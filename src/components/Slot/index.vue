<template>
  <DefaultSlot #content="{isWrapper}">
    isWrapper::{{isWrapper}}
  </DefaultSlot>
  <SetupSlot>
    <template #default="{label}">
      label::{{label}}
    </template>
  </SetupSlot>
</template>
<script setup lang="ts">
import DefaultSlot from "@/components/Slot/DefaultSlot.vue";
import SetupSlot from "@/components/Slot/SetupSlot.vue";
</script>