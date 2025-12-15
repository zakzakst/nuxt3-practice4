<script setup lang="ts">
import { useLazyFetch, useHead } from "nuxt/app";
import type { Member } from "../../interfaces";

definePageMeta({
  layout: "member",
});
const asyncData = useLazyFetch<Member[]>("/api/getMemberList");
const memberList = asyncData.data;
const pending = asyncData.pending;

const PAGE_TITLE = "会員リスト";
useHead({
  title: PAGE_TITLE,
});
</script>

<template>
  <nav>
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <p>
    新規登録は<NuxtLink :to="{ name: 'member2-memberAdd' }">こちら</NuxtLink
    >から
  </p>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <ul>
      <li v-for="{ id, name } in memberList" :key="id">
        <NuxtLink :to="{ name: 'member2-memberDetail-id', params: { id } }"
          >IDが{{ id }}の{{ name }}さん</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>
