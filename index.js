"use strict";

const BOT_TOKEN = "7655275858:AAHIh6AIO_mJbdKC_y5kt1YAAk_P6yWztSg";
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Import command modules
const sendQuran = require("./commands/quran");
const sendHadith = require("./commands/hadith");
const sendAdhan = require("./commands/adhan");
const sendDailyReminder = require("./commands/daily");
const sendDua = require("./commands/dua");
const sendTasbih = require("./commands/tasbih");
const sendQibla = require("./commands/qibla");
const sendHijriDate = require("./commands/hijriDate");
const search = require("./commands/search");
const sendMatchday = require("./commands/matchday");
const sendOtherMessage = require("./commands/others");
const logUserQuery = require("./logs");

// Command: /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = `
🕌 *Welcome to Your Islamic Companion Bot!*

Here’s how to get started:

✨ */mashaallah*
Get a beautiful image inspired by *"a righteous soul who inspires others deeply."*

📋 *Main Menu*
Use /menu to explore all features with interactive buttons.

📌 *Quick Commands*:
- 🕋 /adhan — Today's prayer times
- 📖 /quran — Random Quran verse (e.g. /quran 2:255)
- 🤲 /dua — A daily du’a
- 📜 /hadith — Random authentic hadith
- 📘 /daily — Islamic reminder
- 🧮 /tasbih — Digital dhikr guide
- 🧭 /qibla — Qibla direction link
- 📅 /hijri — Today’s Hijri date
- 🧠 /menu — Explore all features via buttons
- 🙏 /help — More guidance and info

May Allah benefit you through this knowledge. 🤍
`;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;

//   const message = `
//     🕌 *Syekh Bot Premium Plans*

//     🔹 *Santri* – Free access to basic features
//     💎 *Syekh* – IDR 20.000/month → Unlock daily adzkar & reminders
//     🌟 *Imam* – IDR 50.000/month → Includes Islamic calendar & prayer alerts
//     🏆 *Ulama* – IDR 100.000/month → All features + priority support

//     ---

//     💳 *Payment via Bank Transfer*
//     Bank: BCA
//     Account Name: Sopyan Waldy
//     Account Number: 1570531219

//     📩 After payment, please send proof via DM to activate your premium access.

//     Choose your path to more barakah ✨
//     `;

//   await logUserQuery(msg, msg.text);

//   bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
// });

// Command: /mashaallah
bot.onText(/\/mashaallah/, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "https://soc-uat-uploads.s3.amazonaws.com/364-sopp.jpg.jpg";

  bot.sendPhoto(chatId, photoUrl, { caption: "Masha Allah!" });
});

// Command: /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./iqro.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    caption: "Take pray if you want to get help.",
  });
});

// Command: /assalamualaikum
bot.onText(/\/assalamualaikum/i, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./gamis.png";

  bot.sendPhoto(chatId, photoUrl, {
    caption: `Wa'alaikum salam brother, kaifa haluk ya @${msg.from.username}?`,
  });
});

// Command: /jamila
bot.onText(/\/hajibareng2istri/i, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./haji.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    caption: `Daftarkan Diri Anda Sekarang Juga!

PT Sopyan Travel memiliki Akreditasi "A" dalam pelaksanaan Haji & Umroh, memberangkatkan lebih dari 10 ribu jamaah setiap tahunnya. Kami berkomitmen untuk terus meningkatkan mutu dan kualitas pelayanan yang kami sediakan.`,
  });
});

bot.onText(/\/lisablackpink/i, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./lisa-blackpink.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `Inilah alasan kenapa kuda di Indonesia cuma bisa nungging.`,
  });
});

bot.onText(/\/skateboard/i, (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./skateboard.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `Ketika impian jadi skater profesional terhalang lahan, sawah pun jadi tempat latihan.`,
  });
});

bot.onText("soparman", (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./soparman.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `Terbang lebih cepat dari peluru, lebih kuat dari lokomotif, dan siap menyelamatkan hari dengan gaya!

Soparman Waldy siap untuk segalanya!`,
  });
});

bot.onText("news", (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./news.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `Pria bernama Sopyan (45 tahun) di Kabupaten Muba, Sumsel, ditangkap polisi setelah diketahui menjadi pemilik salah satu tempat penyulingan minyak ilegal.

https://kumparan.com/urbanid/polisi-tangkap-pemilik-tempat-penyulingan-minyak-ilegal-di-muba-22d8D80tC4b`,
  });
});

bot.onText("/sopian", (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./rambo.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `Kronologi Sopian Ngamuk Bacok Warga hingga Dilumpuhkan Babinsa-Bhabin

https://news.detik.com/berita/d-7776598/kronologi-sopian-ngamuk-bacok-warga-hingga-dilumpuhkan-babinsa-bhabin`,
  });
});

bot.onText("/tarawih", (msg) => {
  const chatId = msg.chat.id;

  const photoUrl = "./tarawih.jpg";

  bot.sendPhoto(chatId, photoUrl, {
    reply_to_message_id: msg.message_id,
    caption: `🌙 Product Tech Tarawih Bareng – Ramadan 1447 H 🌙

Assalamu’alaikum warahmatullahi wabarakatuh 🤍

Dalam rangka menyambut bulan suci Ramadan, teman-teman Product Tech akan menginisiasi Tarawih berjamaah yang insyaAllah akan dilaksanakan di Mushola Lantai 20.

🗓 Waktu: Rabu, 18 Feb 2026 (Setelah sholat Isya)
📍 Tempat: Mushola Lt. 20

Imam Tarawih: Naufal
Kultum dan doa bersama: Syech Abuya Sopyan Ghufron (Ulama besar dari Jawa)

Mari kita jadikan Ramadan tahun ini lebih bermakna, bukan hanya dengan produktivitas kerja, tapi juga dengan memperkuat ibadah dan kebersamaan.

Semoga langkah kecil ini menjadi sebab turunnya keberkahan untuk kita semua 🤲✨

Silakan konfirmasi kehadiran agar bisa kita persiapkan dengan baik.

Wassalamu’alaikum warahmatullahi wabarakatuh.`,
  });
});

// Command shortcuts
// bot.onText(/\/search (.+)/, async (msg, match) => {
//   const query = match[1];
//   await logUserQuery(msg, `/search ${query}`);
//   search(bot, msg.chat.id, query);
// });
bot.onText(/\/quran(?:\s+(\d+:\d+))?/, (msg, match) =>
  sendQuran(bot, msg.chat.id, match[1]),
);
bot.onText(/\/hadith/, (msg) => sendHadith(bot, msg.chat.id));
bot.onText(/\/adhan/, (msg) => sendAdhan(bot, msg.chat.id));
bot.onText(/\/daily/, (msg) => sendDailyReminder(bot, msg.chat.id));
bot.onText(/\/dua/, (msg) => sendDua(bot, msg.chat.id));
bot.onText(/\/tasbih/, (msg) => sendTasbih(bot, msg.chat.id));
bot.onText(/\/qibla/, (msg) => sendQibla(bot, msg.chat.id));
bot.onText(/\/hijri/, (msg) => sendHijriDate(bot, msg.chat.id));
bot.onText(/\/matchday/, (msg) => sendMatchday(bot, msg.chat.id));

bot.onText("kultum", (msg) => {
  const chatId = msg.chat.id;

  const url = "./kultum.mp4";

  bot.sendVideo(chatId, url, {
    reply_to_message_id: msg.message_id,
    caption: `Marhaban ya Ramadhan! Semoga bulan suci ini membawa kedamaian dalam hati kita dan membuka pintu keberkahan yang tiada henti. 
Marilah mengikuti kultum bersama abuya syech Sopyan Al Ciputati`,
  });
});

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "🕌 Welcome! Choose a menu below:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📘 Quran Verse", callback_data: "quran" },
          { text: "📜 Hadith", callback_data: "hadith" },
        ],
        [
          { text: "🕋 Adhan Times", callback_data: "adhan" },
          { text: "📖 Daily Reminder", callback_data: "daily" },
        ],
        [
          { text: "🤲 Dua", callback_data: "dua" },
          { text: "🧮 Tasbih", callback_data: "tasbih" },
        ],
        [
          { text: "🧭 Qibla Direction", callback_data: "qibla" },
          { text: "📅 Hijri Date", callback_data: "date" },
        ],
      ],
    },
  });
});

// bot.onText(/\/.*/, (msg) => sendOtherMessage(bot, msg.chat.id));

// Inline button clicks
bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const action = query.data;

  switch (action) {
    case "adhan":
      await sendAdhan(bot, chatId);
      break;
    case "daily":
      sendDailyReminder(bot, chatId);
      break;
    case "dua":
      sendDua(bot, chatId);
      break;
    case "tasbih":
      sendTasbih(bot, chatId);
      break;
    case "qibla":
      sendQibla(bot, chatId);
      break;
    case "date":
      await sendHijriDate(bot, chatId);
      break;
    case "quran":
      await sendQuran(bot, chatId);
      break;
    case "hadith":
      await sendHadith(bot, chatId);
      break;
  }

  bot.answerCallbackQuery(query.id);
});
