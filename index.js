const { UpdateType, TelegramBot } = require('https://deno.land/x/telegram_bot_api/mod.ts');

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

bot.on(UpdateType.Message, async ({ ctx }) => {
  var chatID = ctx.chat.id;

  await bot.sendMessage(`This bot was deployed on deno.com/deploy`)
  return await bot.sendMessage(chatID, `<code>${JSON.stringify(ctx, null, 2)}</code>`, { parse_mode: 'HTML' })
});

bot.run({
  polling: true,
});
