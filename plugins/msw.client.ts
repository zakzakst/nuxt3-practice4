export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("../mocks/browser.ts");
    await worker.start();
  }
});
