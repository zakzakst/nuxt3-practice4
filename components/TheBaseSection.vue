<script setup lang="ts">
import { useState } from "nuxt/app";
import type { Member } from "../interfaces";
import { computed } from "vue";
import OneMember from "./OneMember.vue";
const memberList = useState<Map<number, Member>>("memberList");
const totalPoints = computed((): number => {
  return [...memberList.value.values()].reduce(
    (acc, member) => acc + member.points,
    0
  );
});
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
    <OneMember v-for="id in memberList.keys()" :key="id" :id="id" />
  </section>
</template>
