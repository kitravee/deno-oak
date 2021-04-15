import { Application, Context } from "https://deno.land/x/oak@v7.0.0/mod.ts";

const app = new Application();
const PORT = 8000;

app.use((ctx: Context) => {
  ctx.response.body = "HoOOo Oke";
});

//?https://deno.land/manual/examples/module_metadata#concepts

if (import.meta.main) {
  await app.listen({ port: PORT });
}
