<script setup lang="ts">
import { useState, useHead } from "nuxt/app";
import type { Member } from "../../interfaces";
const memberList = useState<Map<number, Member>>("memberList");
definePageMeta({
  layout: "member",
});
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
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p>
      新規登録は<NuxtLink :to="{ name: 'member-memberAdd' }">こちら</NuxtLink
      >から
      <!-- 新規登録は<NuxtLink :to="{ name: 'member-memberList-memberAdd' }"
        >こちら</NuxtLink
      >から -->
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in memberList" :key="id">
          <NuxtLink :to="{ name: 'member-memberDetail-id', params: { id } }"
            >IDが{{ id }}の{{ member.name }}さん</NuxtLink
          >
          <!-- <NuxtLink
            :to="{ name: 'member-memberList-memberDetail-id', params: { id } }"
            >IDが{{ id }}の{{ member.name }}さん</NuxtLink
          > -->
        </li>
      </ul>
    </section>
    <!-- <NuxtPage /> -->
  </section>
</template>
