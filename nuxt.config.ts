import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "latest",
  runtimeConfig: {
    // サーバー専用（ブラウザには出ない）
    // secretKey: process.env.SECRET_KEY,
    public: {
      // クライアントでも使える
      weatherAppId: process.env.WEATHER_APP_ID,
    },
  },
  alias: {
    "@": "/<rootDir>",
    // "@/components/*": "./components/*",
  },
  modules: ["@nuxt/test-utils/module", "@pinia/nuxt"],
});
