import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:6000/api/users/:id", ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      name: "Mock User",
    });
  }),
];
