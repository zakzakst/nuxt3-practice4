<script setup lang="ts">
import { useRoute, useState, useHead, useLazyFetch } from "nuxt/app";
import type { Member } from "../../../interfaces";
import { computed } from "vue";
const route = useRoute();
const asyncData = useLazyFetch<Member>("/api/getOneMemberInfo", {
  query: { id: route.params.id },
});
const member = asyncData.data;
const pending = asyncData.pending;
const localNote = computed((): string => {
  return member?.value?.note || "--";
});
definePageMeta({
  layout: "member",
});
const PAGE_TITLE = "会員情報詳細";
useHead({
  title: PAGE_TITLE,
});
</script>

<template>
  <nav>
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>
        <NuxtLink :to="{ name: 'member-memberList' }">会員リスト</NuxtLink>
      </li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p v-if="pending">データ取得中...</p>
    <dl v-else>
      <dt>ID</dt>
      <dd>{{ member?.id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member?.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member?.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
