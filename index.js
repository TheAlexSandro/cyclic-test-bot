const { Bot, webhookCallback } = require('grammy');
const token = `6031748891:AAHbDmOP5nK08odbRoDkxb_0OvRKKQ4DHMw`

const bot = new Bot(token);

bot.on(`message`, async ctx => {
    return await ctx.reply(`<b>Started!</b>`, { parse_mode: 'HTML' })
})

bot.start()
module.exports = { bot }