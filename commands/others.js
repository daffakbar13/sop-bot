"use strict";

module.exports = function sendOtherMessage(bot, chatId) {
  bot.sendMessage(chatId, `<i>On Development, please wait for update</i>`, {
    parse_mode: "HTML",
  });
};
