<script setup lang="ts">
import { useRoute } from "nuxt/app";
import type { User } from "../../interfaces";
const route = useRoute();
const ApiUrl = `https://jsonplaceholder.typicode.com/users/${route.params.id}`;
const response = await $fetch<User>(ApiUrl);
</script>

<template>
  <section>
    <h2>{{ response.name }}の情報</h2>
    <p>{{ JSON.stringify(response) }}</p>
  </section>
</template>
