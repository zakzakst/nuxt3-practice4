<script setup lang="ts">
import { useRoute, useAsyncData, useFetch } from "nuxt/app";
import type { User } from "../../interfaces";
const route = useRoute();
// const ApiUrl = `https://jsonplaceholder.typicode.com/users/${route.params.id}`;
// const response = await $fetch<User>(ApiUrl);
// const asyncData = useAsyncData(
//   `/user/${route.params.id}`,
//   (): Promise<User> => {
//     const ApiUrl = `https://jsonplaceholder.typicode.com/users/${route.params.id}`;
//     const response = $fetch<User>(ApiUrl);
//     return response;
//   },
//   {
//     // pick: ["name"],
//     transform: (data): string => {
//       return data.name + "（transform利用）";
//     },
//   }
// );
const asyncData = useFetch(
  `https://jsonplaceholder.typicode.com/users/${route.params.id}`,
  {
    key: `/user/${route.params.id}`,
    transform: (data: User): string => {
      return data.name + "（useFetch利用）";
    },
  }
);
const data = asyncData.data;
const pending = asyncData.pending;
</script>

<template>
  <!-- <section>
    <h2>{{ response.name }}の情報</h2>
    <p>{{ JSON.stringify(response) }}</p>
  </section> -->
  <!-- <section>
    <h2>{{ data?.name }}の情報</h2>
    <p>{{ JSON.stringify(data) }}</p>
  </section> -->
  <p v-if="pending">データ取得中...</p>
  <section v-else>
    <h2>{{ data }}の情報</h2>
    <p>{{ JSON.stringify(data) }}</p>
  </section>
</template>
