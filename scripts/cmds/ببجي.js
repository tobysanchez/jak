const fs = require('fs');

module.exports = {
	config: {
		name: "ببجي",
		version: "1.0",
		author: "AceGun",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "يرسل صورة لعنصر من PUBG."
		},
		longDescription: {
			vi: "",
			en: "يرسل صورة لعنصر من PUBG."
		},
		category: "fun",
		guide: {
			en: "{pn} <اسم العنصر>"
		},
		envConfig: {}
	},

	onStart: async function ({ message, args }) {
		if (!args[0]) {
			message.reply("يرجى الرد باسم عنصر من PUBG.");
			return;
		}

		const itemName = args[0].toLowerCase();
		const json = JSON.parse(fs.readFileSync('pubg.json'));
		const item = json.find(entry => entry.name.toLowerCase() === itemName);

		if (!item) {
			message.reply("تعذر العثور على العنصر من ببجي");
			return;
		}

		message.reply({
			body: 'Here is your PUBG item:', attachment: await global.utils.getStreamFromURL(item.image)
		});
	}
};