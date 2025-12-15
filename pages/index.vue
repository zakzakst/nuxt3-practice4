<script setup lang="ts">
import type { User } from "../interfaces";
const ApiUrl = "https://jsonplaceholder.typicode.com/users";
const response = await $fetch<User[]>(ApiUrl);
</script>

<template>
  <section>
    <h2>ユーザーリスト</h2>
    <ul>
      <li v-for="user in response" :key="user.id">
        <NuxtLink :to="{ name: 'user-id', params: { id: user.id } }">{{
          user.name
        }}</NuxtLink>
        <!-- {{ user.name }} -->
      </li>
    </ul>
  </section>
</template>
