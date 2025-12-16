<script setup lang="ts">
import TheLoggedInSection from "../components/TheLoggedInSection.vue";
// import type { AuthUser } from "../interfaces";
// import { navigateTo, useCookie } from "nuxt/app";

// const loginTokenCookie = useCookie<string | null>("loginToken");
// const loginUserCookie = useCookie<AuthUser | null>("loginUser");
// if (!loginTokenCookie.value || !loginUserCookie.value) {
//   await navigateTo("/login");
// } else {
//   console.log(loginTokenCookie.value, loginUserCookie.value, "test");
// }

definePageMeta({
  // middleware: (to, from) => {
  //   const loginTokenCookie = useCookie<string | null>("loginToken");
  //   const loginUserCookie = useCookie<AuthUser | null>("loginUser");
  //   if (!loginTokenCookie.value || !loginUserCookie.value) {
  //     return navigateTo("/login");
  //   } else {
  //     return;
  //   }
  // },
  middleware: [
    // "logging",
    "loggedin-check",
  ],
});
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
