<script setup lang="ts">
import { useState } from "nuxt/app";
import type { Member } from "../../interfaces";
const memberList = useState<Map<number, Member>>("memberList");
</script>

<template>
  <h1>会員管理</h1>
  <nav>
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>会員リスト</li>
    </ul>
  </nav>
  <section>
    <h2>会員リスト</h2>
    <p>
      <!-- 新規登録は<NuxtLink :to="{ name: 'member-memberAdd' }">こちら</NuxtLink
      >から -->
      新規登録は<NuxtLink :to="{ name: 'member-memberList-memberAdd' }"
        >こちら</NuxtLink
      >から
    </p>
    <section>
      <ul>
        <li v-for="[id, member] in memberList" :key="id">
          <!-- <NuxtLink :to="{ name: 'member-memberDetail-id', params: { id } }"
            >IDが{{ id }}の{{ member.name }}さん</NuxtLink
          > -->
          <NuxtLink
            :to="{ name: 'member-memberList-memberDetail-id', params: { id } }"
            >IDが{{ id }}の{{ member.name }}さん</NuxtLink
          >
        </li>
      </ul>
    </section>
    <NuxtPage />
  </section>
</template>
