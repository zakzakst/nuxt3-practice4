<script setup lang="ts">
import TheLoggedInSection from "../components/TheLoggedInSection.vue";
</script>

<template>
  <nav>
    <ul>
      <!-- <li>
        <NuxtLink :to="{ name: 'errorHandlerBasic' }">エラー表示実験</NuxtLink>
      </li> -->
      <li>
        <NuxtLink :to="{ name: 'login' }">ログイン</NuxtLink>
      </li>
    </ul>
  </nav>
  <TheLoggedInSection />
</template>
