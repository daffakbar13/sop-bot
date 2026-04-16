'use strict';

const fs = require('fs');
const path = require('path');

// Load and flatten all duas into one array
// ✅ Use 'utf8-sig' to handle BOM
const content = fs
	.readFileSync(path.join(__dirname, '../data/husn_en.json'), 'utf8')
	.toString()
	.replace(/^\uFEFF/, '');
const data = JSON.parse(content);
const allDuas = [];

for (const section of data.English) {
	for (const item of section.TEXT) {
		allDuas.push({
			id: item.ID,
			title: section.TITLE,
			arabic: item.ARABIC_TEXT,
			transliteration: item.LANGUAGE_ARABIC_TRANSLATED_TEXT,
			translation: item.TRANSLATED_TEXT,
			audio: item.AUDIO,
		});
	}
}

module.exports = function sendDua(bot, chatId) {
	const dua = allDuas[Math.floor(Math.random() * allDuas.length)];
	const { title, arabic, transliteration = '', translation = '' } = dua;

	const message = `🤲 *Dua ${title}*\n\n${arabic}\n\n_${transliteration}_\n\n${translation}`;

	bot.sendMessage(chatId, message.trim(), { parse_mode: 'Markdown' });

	// Optionally send audio if available
	if (dua.audio) {
		bot.sendAudio(chatId, dua.audio).catch(() => {});
	}
};
