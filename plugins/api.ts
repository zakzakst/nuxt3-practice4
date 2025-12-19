export type User = {
  id: number;
  name: string;
};

export default defineNuxtPlugin(() => {
  const api = {
    async getUser(id: number): Promise<User> {
      return await $fetch(`http://localhost:6000/api/users/${id}`);
    },
  };

  return {
    provide: { api },
  };
});
