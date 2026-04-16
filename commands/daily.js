'use strict';

module.exports = function sendDailyReminder(bot, chatId) {
	const reminders = require('../data/daily_reminders.json');
	const rem = reminders[Math.floor(Math.random() * reminders.length)];
	bot.sendMessage(chatId, `📖 *${rem.title}*\n\n${rem.content}`, { parse_mode: 'Markdown' });
};
