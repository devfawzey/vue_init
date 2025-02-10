<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Header from "@/components/App/Header.vue";
import Footer from "@/components/App/Footer.vue";
</script>

<template>
  <Header />
  <RouterView style="padding-top: var(--spacing-header-height)"/>
  <Footer />
</template>
