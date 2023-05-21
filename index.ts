import { Bot } from 'grammy';
const token = `6031748891:AAHbDmOP5nK08odbRoDkxb_0OvRKKQ4DHMw`

const bot = new Bot(token);

bot.on(`message`, async ctx => {
  await ctx.reply(`This bot was deployed on deno.com/deply`)
  return await ctx.reply(`<code>${JSON.stringify(ctx, null, 2)}</code>`, { parse_mode: 'HTML' })
})

export default bot