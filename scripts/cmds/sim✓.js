const axios = require('axios');

module.exports = {
	config: {
		name: 'سمسمي',
		aliases: ["سيم", "سمسم"],
		version: '1.1',
		author: 'AceGun_✓',
		countDown: 5,
		role: 0,
		shortDescription: 'سمسم محشش الصراحة',
		longDescription: 'التحدث مع بوت غبي 🌝',
		category: 'الإستمتاع',
		guide: {
			body: '   سيم أحبك'
				+ '\n'
				+ '\n   سيم خرا 🌝❌❌❌❌❌❌❌❌❌❌❌❌❌❌ لا تجرب'
				+ '\n   سيم كيفك'
		}
	},

	onStart: async function ({ args, threadsData, message, event }) {
		if (args[0] == 'on' || args[0] == 'off') {
			await threadsData.set(event.threadID, args[0] == "on", "settings.simsimi");
			return message.reply(`🤫 ${args[0] == "on" ? "تشغيل" : "إيقاف"} سمسم`);
		}
		else if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}🙂`);
			}
			catch (err) {
				return message.reply("سمسم فيه خلل 😅");
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand }) => {
		if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.simsimi")) {
			try {
				const responseMessage = await getMessage(args.join(" "));
				return message.reply(`${responseMessage}\n🐸🚬!`);
			}
			catch (err) {
				return message.reply("سمسم تعبان 😠");
			}
		}
	}
};

async function getMessage(yourMessage) {
	const res = await axios.get(`https://api.simsimi.net/v2`, {
		params: {
			text: yourMessage,
			lc: global.GoatBot.config.language == 'ar' ? 'ar' : 'ar',
			cf: false
		}
	});

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.success;
  }