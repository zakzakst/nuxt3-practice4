<script setup lang="ts">
import { useState } from "nuxt/app";
import type { Member } from "../interfaces";
import { computed } from "vue";
interface Props {
  id: number;
}
const props = defineProps<Props>();
const memberList = useState<Map<number, Member>>("memberList");
const member = memberList.value.get(props.id) as Member;
const localNote = computed((): string => {
  return member.note || "--";
});
const pointUp = (): void => {
  member.points++;
};
</script>

<template>
  <section>
    <h4>{{ member.name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button v-on:click="pointUp">ポイント加算</button>
  </section>
</template>
