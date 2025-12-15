<script setup lang="ts">
import { useState, useHead } from "nuxt/app";
import type { Member } from "./interfaces";
useState<Map<number, Member>>("memberList", (): Map<number, Member> => {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(33456, {
    id: 33456,
    name: "田中太郎",
    email: "bow@example.com",
    points: 35,
    note: "初回入会特典あり。",
  });
  memberListInit.set(47783, {
    id: 47783,
    name: "鈴木次郎",
    email: "mue@example.com",
    points: 53,
  });
  return memberListInit;
});
const SITE_TITLE = "ヘッダ変更サンプル";
useHead({
  // title: SITE_TITLE,
  titleTemplate: (titleChunk?: string): string => {
    return titleChunk ? `${titleChunk} | ${SITE_TITLE}` : SITE_TITLE;
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
