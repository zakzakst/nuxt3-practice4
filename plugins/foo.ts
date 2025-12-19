export default defineNuxtPlugin(() => {
  return {
    provide: {
      foo: "Hello Nuxt",
    },
  };
});
