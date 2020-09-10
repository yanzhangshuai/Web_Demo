import { serve } from 'https://deno.land/std@v0.50.0/http/server.ts';

const PORT = 7777;
const s = serve({ port: PORT });
console.log(` Listening on <http://localhost>:${PORT}/`);
for await (const req of s) {
    req.respond({ body: "Hello Semlinker\\n" });
  }
