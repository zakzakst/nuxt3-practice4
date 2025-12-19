<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { formSchema } from "../../schemas/form";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema),
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" />
    <p class="text-red-500">{{ emailError }}</p>

    <input type="password" v-model="password" />
    <p class="text-red-500">{{ passwordError }}</p>

    <button>送信</button>
  </form>
</template>
