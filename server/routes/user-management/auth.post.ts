import type { AuthUser, ReturnJSONAuth } from "../../../interfaces";

export default defineEventHandler(async (event): Promise<ReturnJSONAuth> => {
  let resultVal = 0;
  let tokenVal = "";
  let loginUser: AuthUser | null = null;

  try {
    const body = await readBody(event);
    resultVal = 1;
    if (body.loginId === "bow" && body.password === "wow") {
      // アクセストークンを生成
      tokenVal = "abcdefghijklmn";
      loginUser = {
        id: 1234,
        name: "山本五郎",
        loginId: body.loginId,
        password: "",
      };
    }
  } catch (e) {
    console.log(e);
  }

  return {
    result: resultVal,
    token: tokenVal,
    user: loginUser,
  };
});
