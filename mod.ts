import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { webhookCallback } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
// Kamu mungkin perlu mengubah ini agar dapat melakukan import pada object bot-mu.
import bot from "./index.js";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
  if (req.method === "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) === bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});
