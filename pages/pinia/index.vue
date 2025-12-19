<script setup lang="ts">
// import PiniaSample from "@components/pinia/PiniaSample.vue";
import PiniaSample from "../../components/pinia/PiniaSample.vue";

const counter = useCounterStore();
</script>

<template>
  <div>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
  </div>
  <PiniaSample />
</template>
