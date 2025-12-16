<script setup lang="ts">
const onThrowsErrorClick = (): void => {
  throw createError("疑似エラー発生。");
};
</script>

<template>
  <section>
    <button v-on:click="onThrowsErrorClick">エラーを発生</button>
  </section>
</template>
