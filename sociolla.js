"use strict";

const BOT_TOKEN = "8330326217:AAHOTN6T5BINeFXoEsAMxBe9xrDSQiFuTEY";
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on("my_chat_member", (msg) => {
  const newStatus = msg.new_chat_member?.status;
  const oldStatus = msg.old_chat_member?.status;
  const chat = msg.chat;

  if (
    (newStatus === "member" && oldStatus === "kicked") ||
    oldStatus === "left"
  ) {
    console.log(`Bot added to group: ${chat.title || chat.username}`);
    console.log(`Group chat ID: ${chat.id}`);
  }
});
