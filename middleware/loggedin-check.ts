import type { AuthUser } from "../interfaces";
import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const loginTokenCookie = useCookie<string | null>("loginToken");
  const loginUserCookie = useCookie<AuthUser | null>("loginUser");
  if (!loginTokenCookie.value || !loginUserCookie.value) {
    return navigateTo("/login");
  } else {
    return;
  }
});
