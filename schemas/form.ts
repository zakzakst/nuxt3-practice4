import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("メールアドレスが不正です"),
  password: z.string().min(8, "8文字以上入力してください"),
});

export type LoginForm = z.infer<typeof formSchema>;
