<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core"
import {useUserStore} from "@/stores/useUser.ts";
import Button from "@/components/Base/Button.vue";
import type {IUser} from "@/types/api";

const userStore = useUserStore()

function onUserLogInClick() {
  const user: IUser = {name: "ahmed", id: "wre", email: "ahmed.booley@gmail.com"};
  return userStore.setUser(user)
}

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual("sm")

</script>

<template>
  <main id="home-page">
    <h1>Home View</h1>
    hello world string
    <Button variant="outline" label="hello world">
    </Button>
  </main>
</template>
