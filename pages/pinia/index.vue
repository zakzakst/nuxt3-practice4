<script setup lang="ts">
// import PiniaSample from "@components/pinia/PiniaSample.vue";
// import { useCounter } from "@/composables/useCounter";
import PiniaSample from "../../components/pinia/PiniaSample.vue";

const counter = useCounterStore();
const _counter = useCounter();
</script>

<template>
  <div>
    <p>pinia</p>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
  </div>
  <div>
    <p>composables</p>
    <p>{{ _counter.count }}</p>
    <button @click="_counter.increment">+</button>
    <button @click="_counter.decrement">-</button>
  </div>
  <PiniaSample />
</template>
