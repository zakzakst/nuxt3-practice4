<script setup lang="ts">
import { useCookie } from "nuxt/app";
import type { AuthUser } from "../interfaces";
const loginUser = useCookie<AuthUser | null>("loginUser");
</script>

<template>
  <section v-if="loginUser">
    <p>{{ loginUser.name }}さんがログイン中</p>
    <p><NuxtLink :to="{ name: 'logout' }">ログアウト</NuxtLink></p>
  </section>
</template>
