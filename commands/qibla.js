'use strict';

module.exports = function sendQibla(bot, chatId) {
	bot.sendMessage(chatId, '🧭 Qibla direction: https://qiblafinder.withgoogle.com/');
};
