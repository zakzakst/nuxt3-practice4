<script setup lang="ts">
import { useCookie, navigateTo } from "nuxt/app";
import type { AuthUser } from "@/interfaces";

const loginUserCookie = useCookie<AuthUser | null>("loginUser");
loginUserCookie.value = null;
const loginTokenCookie = useCookie<string | null>("loginToken");
loginTokenCookie.value = null;
await navigateTo("/");
</script>
