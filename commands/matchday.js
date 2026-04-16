"use strict";

module.exports = function sendMatchday(bot, chatId) {
  const msg = `
🇲🇨Futsal Matchday🇲🇨

Let's have fun and earn something money can't buy which is Futsal Playdate

⏰ Friday, 11 July 2025
🏟 Bywi Futsal, Meruya, London.
https://g.co/kgs/g8FdCJy
🔊 Special Guest Star @sopyanhere

Prepare Your Kits!
  `;
  const photoUrl = "./sopyan-cr.jpg";
  bot.sendPhoto(chatId, photoUrl, { caption: msg, parse_mode: "Markdown" });
};
