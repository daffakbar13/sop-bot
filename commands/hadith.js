'use strict';

const axios = require('axios');

const sources = ['bukhari', 'muslim', 'abudawud', 'ibnmajah', 'tirmidhi'];

module.exports = async function sendHadith(bot, chatId) {
	try {
		const randomSource = sources[Math.floor(Math.random() * sources.length)];
		const res = await axios.get(`https://random-hadith-generator.vercel.app/${randomSource}`);
		const h = res.data.data;

		const message = `📜 *${h.book}*  
📘 _${h.bookName.trim()}_  
📂 _${h.chapterName.trim()}_

🧾 *${h.header.trim()}*

"${h.hadith_english.trim()}"

🔖 _Reference: ${h.refno}_`;

		await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
	} catch (err) {
		console.error('Hadith API error:', err.message);
		bot.sendMessage(chatId, '❌ Failed to fetch a hadith. Please try again later.');
	}
};
