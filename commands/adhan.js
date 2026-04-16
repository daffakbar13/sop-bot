'use strict';

const axios = require('axios');

module.exports = async function sendAdhan(bot, chatId) {
	try {
		const res = await axios.get('https://api.aladhan.com/v1/timings', {
			params: { latitude: -6.2, longitude: 106.8, method: 2 },
		});
		const t = res.data.data.timings;

		const text = `
🕌 *Today's Prayer Times (Jakarta)*

- Fajr: ${t.Fajr}
- Dhuhr: ${t.Dhuhr}
- Asr: ${t.Asr}
- Maghrib: ${t.Maghrib}
- Isha: ${t.Isha}
`;
		bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
	} catch {
		bot.sendMessage(chatId, '❌ Failed to fetch the prayer times.');
	}
};
