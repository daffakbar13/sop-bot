'use strict';

const axios = require('axios');
const { surahMeta } = require('../data/quranData');

module.exports = async function sendQuran(bot, chatId, input) {
	try {
		let surahNum;
		let ayahNum;

		if (input && input.match(/^(\d+):(\d+)$/)) {
			[surahNum, ayahNum] = input.split(':').map(Number);

			const maxAyah = surahMeta[surahNum];
			if (!maxAyah) {
				return bot.sendMessage(chatId, `❌ Surah ${surahNum} does not exist.`);
			}
			if (ayahNum < 1 || ayahNum > maxAyah) {
				return bot.sendMessage(chatId, `❌ Ayah ${ayahNum} is not valid for Surah ${surahNum}.`);
			}
		} else {
			// pick random valid surah/ayah
			const surahKeys = Object.keys(surahMeta);
			surahNum = Number(surahKeys[Math.floor(Math.random() * surahKeys.length)]);
			ayahNum = Math.floor(Math.random() * surahMeta[surahNum]) + 1;
		}

		const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surahNum}:${ayahNum}/ar.alafasy`);
		const d = res.data.data;

		const message = `
📖 *Surah ${d.surah.englishName}* (${d.surah.englishNameTranslation})
_${d.surah.name}_

🔢 *Verse:* ${d.surah.number}:${d.numberInSurah}
📚 *Juz:* ${d.juz} • Page: ${d.page}
📖 Ruku: ${d.ruku} • Manzil: ${d.manzil} • Hizb: ${d.hizbQuarter}
🕌 Revelation: ${d.surah.revelationType} • Total Ayahs: ${d.surah.numberOfAyahs}
${d.sajda ? '🧎 *This verse includes a Sajda!*' : ''}

🕋 *Arabic:*  
${d.text}

🎧 [Listen to Recitation](${d.audio})
`;

		bot.sendMessage(chatId, message, {
			parse_mode: 'Markdown',
			disable_web_page_preview: false,
		});
	} catch (err) {
		console.error('Quran fetch error:', err.message);
		bot.sendMessage(chatId, '❌ Failed to fetch the Quran verse.');
	}
};
