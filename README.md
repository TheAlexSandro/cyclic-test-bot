# Cyclic Test Bot
Ini adalah contoh bot yang dideploy dengan menggunakan [cyclic.sh](https://cyclic.sh)

## Explanation
[cyclic.sh](https://cyclic.sh) adalah sebuah tempat deployment seperti Heroku dan lain-lain. Untuk biayanya adalah gratis <b>selamanya</b>, tetapi jika kamu menginginkan yang lebih powerfull, kamu dapat menggunakan yang versi berbayarnya, lihat versi selengkapnya <a href='https://www.cyclic.sh/pricing'>disini</a>. Untuk mendeploy bot kamu ke cyclic, caranya sama seperti ketika ingin mendeploy bot ke Heroku yaitu dengan menggunakan repo dari gitub.

## Requirements
- NodeJS V12+
- VS Code atau aplikasi coding lainnya

## Deployment
Berikut cara untuk mendeploy bot ke <a href='https://cyclic.sh'>cyclic.sh</a>:
- Buka command promt (powershell) di Windows, MacOS atau Linux kamu
- Ketikkan <code>mkdir my-bot</code>
- Pergi ke folder yang dibuat tadi (my-bot)
- Buka powershell dan install grammy, express dan dotenv dengan cara <code>npm install grammy express dotenv</code>
- Salin file .env.example ke .env dengan cara <code>cp .env.example .env</code>
- Pergi ke file .env yang sudah disalin, lalu ganti isi BOT_TOKEN dengan token bot yang sudah kamu buat di [@BotFather](https://t.me/BotFather)
- Buat file baru dengan nama index.js, lalu salin dan tempel kode dibawah ke file index.js:
```js
const { Bot, webhookCallback } = require("grammy");
const express = require("express");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.on('message', async ctx => {
  await ctx.reply(`This bot was deployed on cyclic.sh`)
  awatit ctx.reply(`Example code: https://github.com/TheAlexSandro/cyclic-test-bot`)
  return;
})

if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  bot.start();
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
```
- Pergi ke akun github kalian lalu buat repo baru, repo boleh private atau publik, jangan tambahkan apapun, polosan saja.
- Buka powershell lalu ketikkan perintah yang ada di repo yang telah dibuat tadi.
- Pergi ke [cyclic.sh](https://cyclic.sh) dan sign up (jika belum punya akun)
- Untuk sign up sendiri, itu mudah karena hanya perlu menyambungkan akun github yang kalian punya.
- Tekan bagian "link your own"
- Dan tekan "search your repositories"
- Lalu tekan "connect cyclic", bagian advanced biarkan saja seperti itu dan tunggu hingga selesai.
- Jika sudah, maka dibawah akan ada peringatan bertuliskan <b>Environment Variables</b>, lalu tekan tulisan <b>environment variables console</b>.
- Dibagian <code>NODE_ENV</code> isikan production
- Dibagian <code>BOT_TOKEN</code> isikan token bot kalian
- Lalu tekan save
- Dan voila, bot berhasil dideploy ke [cyclic.sh](https://cyclic.sh)

## Set Webhook
Untuk set webhook, pergi ke powershell dan ketikkan perintah:
<pre>curl "https://api.telegram.org/botBOT_TOKEN/setWebhook?url=https://[app-name].cyclic.app"</pre>
Untuk mendapatkan tautan dari aplikasi kalian, maka kalian cukup pergi overview dari app kalian dan lihat pada nama aplikasinya, dibawah akan ada tautan untuk set webhook.
Bot berhasil berjalan dengan baik!

## Closing
Baiklah, itu saja tempat deploy beserta caranya yang bisa saya berikan kali ini, jika kalian masih bingung dengan cara diatas, kalian dapat browsing atau mencari video tutorialnya di YouTube.

Jika perkataan saya ada yang kurang berkenan, saya mohon maaf dan jika ada yang ingin ditanyakan maka simpan saja dan tanyakan pada Google atau ChatGPT.

<b>Terimakasih dan good bye! :)</b>
