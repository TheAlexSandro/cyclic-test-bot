import { Bot, webhookCallback } from 'grammy';
const token = `6031748891:AAHbDmOP5nK08odbRoDkxb_0OvRKKQ4DHMw`

const bot = new Bot(token);

bot.on(`message`, async ctx => {
    return await ctx.reply(`<b>Started!</b>\nThis bot was deployed on vercel.com`, { parse_mode: 'HTML' })
})

bot.start()
export default webhookCallback(bot, 'http');