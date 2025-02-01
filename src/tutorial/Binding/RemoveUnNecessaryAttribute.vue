<script setup lang="ts">
const title = "title"
</script>
<template>
  <button v-bind:[title]="null"/>
  <button v-bind:[title]="undefined"/>
</template>