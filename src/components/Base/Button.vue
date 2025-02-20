<script setup lang="ts">
import type {RouteLocationRaw} from "vue-router";

type Target = '_blank' | '_parent' | '_self' | '_top'
type ButtonVariants = "solid" | "outline" | "subtle"
type ButtonSizes = "sm" | "md" | "lg"

defineProps<{
  label?: string,
  to?: RouteLocationRaw,
  target?: Target,
  variant?: ButtonVariants,
  size?: ButtonSizes,
  square?: boolean,
  block?: boolean,
}>()

</script>
<template>
  <button type="button"
          class="border border-primary cursor-pointer bg-primary text-white hover:bg-blue-500 hover:border-blue-500 rounded-md capitalize leading-none"
          style="padding: var(--btn-py) var(--btn-px)">
    <slot name="leading"/>
    <slot>
      <span v-text="label" v-if="label"/>
    </slot>
    <!--  Icon  -->
    <slot name="trailing">
    </slot>
  </button>
</template>