<script setup lang="ts">
import { useRoute, useState } from "nuxt/app";
import type { Member } from "../../../interfaces";
import { computed } from "vue";
const route = useRoute();
const memberList = useState<Map<number, Member>>("memberList");
const member = computed((): Member => {
  const id = Number(route.params.id);
  return memberList.value.get(id) as Member;
});
const localNote = computed((): string => {
  return member.value.note || "--";
});
</script>

<template>
  <h1>会員管理</h1>
  <nav>
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>
        <NuxtLink :to="{ name: 'member-memberList' }">会員リスト</NuxtLink>
      </li>
      <li>会員詳細情報</li>
    </ul>
  </nav>
  <section>
    <h2>会員詳細情報</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
