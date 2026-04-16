'use strict';

const axios = require('axios');
const moment = require('moment-timezone');

module.exports = async function sendHijriDate(bot, chatId) {
	try {
		const today = moment().format('DD-MM-YYYY');
		const res = await axios.get(`https://api.aladhan.com/v1/gToH/${today}`);

		const data = res.data.data;
		const hijri = Array.isArray(data) ? data[0].hijri : data.hijri;

		if (!hijri || !hijri.weekday || !hijri.month) {
			throw new Error('Invalid Hijri payload');
		}

		bot.sendMessage(chatId, `🗓️ *${hijri.weekday.en}*, *${hijri.day} ${hijri.month.en} ${hijri.year}* (Hijri)`, {
			parse_mode: 'Markdown',
		});
	} catch (err) {
		console.error('Hijri date fetch error:', err.message);
		// bot.sendMessage(chatId, '❌ Failed to get Hijri date.');
	}
};
