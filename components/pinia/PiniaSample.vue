<script setup lang="ts">
const counter = useCounterStore();
const _counter = useCounter();
</script>

<template>
  <div>
    <p>数の表示</p>
    <p>count: {{ counter.count }}</p>
    <p>_counter: {{ _counter.count }}</p>
  </div>
</template>
