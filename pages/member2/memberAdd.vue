<script setup lang="ts">
import { useRouter, useHead, useFetch } from "nuxt/app";
import type { Member } from "../../interfaces";
import { reactive, ref } from "vue";
const router = useRouter();
const member: Member = reactive({
  id: 0,
  name: "",
  email: "",
  points: 0,
  note: "",
});
const pending = ref(false);
const onAdd = async (): Promise<void> => {
  pending.value = true;
  const asyncData = await useFetch<any>("/api/addMemberInfo", {
    method: "POST",
    body: member,
  });
  if (asyncData.data.value?.result === 1) {
    router.push({ name: "member2-memberList" });
  }
};
definePageMeta({
  layout: "member",
});
const PAGE_TITLE = "会員情報追加";
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
    <p v-if="pending">データ送信中...</p>
    <template v-else>
      <p>情報を入力し、登録ボタンをクリックしてください。</p>
      <form v-on:submit.prevent="onAdd">
        <dl>
          <dt>
            <label for="addId">ID</label>
          </dt>
          <dd>
            <input
              type="number"
              id="addId"
              v-model.number="member.id"
              required
            />
          </dd>
          <dt>
            <label for="addName">名前</label>
          </dt>
          <dd>
            <input type="text" id="addName" v-model="member.name" required />
          </dd>
          <dt>
            <label for="addEmail">メールアドレス</label>
          </dt>
          <dd>
            <input type="email" id="addEmail" v-model="member.email" required />
          </dd>
          <dt>
            <label for="addPoints">保有ポイント</label>
          </dt>
          <dd>
            <input
              type="number"
              id="addPoints"
              v-model.number="member.points"
              required
            />
          </dd>
          <dt>
            <label for="addNote">備考</label>
          </dt>
          <dd>
            <textarea id="addNote" v-model="member.note" />
          </dd>
        </dl>
        <button type="submit">登録</button>
      </form>
    </template>
  </section>
</template>
