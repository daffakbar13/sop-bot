'use strict';

const axios = require('axios');

const surahMeta = {};

async function loadSurahMeta() {
	if (Object.keys(surahMeta).length) {
		return;
	}
	const res = await axios.get('https://api.alquran.cloud/v1/surah');
	res.data.data.forEach((s) => {
		surahMeta[s.number] = s.numberOfAyahs;
	});
}

loadSurahMeta();

module.exports = {
	surahMeta,
	loadSurahMeta,
};
