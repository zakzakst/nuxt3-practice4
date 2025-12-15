<script setup lang="ts">
import { useRoute, useState, useRuntimeConfig } from "nuxt/app";
import type { City } from "../../interfaces";
import { computed, ref } from "vue";
const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed((): City => {
  const idNo = Number(route.params.id);
  return cityList.value.get(idNo) as City;
});
const weatherDescription = ref("");
const {
  public: { weatherAppId },
} = useRuntimeConfig();

// const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
const weatherInfoUrl = "https://api.openweathermap.org/data/3.0/onecall";
const params: {
  lang: string;
  q: string;
  appid: string;
} = {
  lang: "ja",
  q: selectedCity.value.q,
  appid: weatherAppId as string,
};
const queryParams = new URLSearchParams(params);
const urlFull = `${weatherInfoUrl}?${queryParams}`;
const response = (await $fetch(urlFull)) as any;
const weatherArray = response.weather;
const weather = weatherArray[0];
weatherDescription.value = weather.description;
</script>

<template>
  <section>
    <h2>{{ selectedCity.name }}の天気</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>{{ weatherAppId }}</p>
  <p>リストに<NuxtLink :to="{ name: 'index' }">戻る</NuxtLink></p>
</template>
