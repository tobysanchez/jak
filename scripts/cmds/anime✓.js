const axios = require('axios');
const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "أنمي",
		aliases: ["neko"],
		author: "NTKhang",
		version: "1.2",
		countDown: 5,
		role: 0,
		shortDescription: "تحذيير بعض الصور ليست جيدة ❌",
		longDescription: "صور أنمي عشوائة ✅",
		category: "صور",
		guide: {
			vi: "{pn} <endpoint>"
				+ "\n   Danh sách enpoint: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
			en: "أنمي <شخصيات>"
				+ "\n   قائمة الشخصيات: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch"
		}
	},

	langs: {
		vi: {
			loading: "Đang khởi tạo hình ảnh, vui lòng chờ đợi...",
			error: "Đã có lỗi xảy ra, vui lòng thử lại sau"
		},
		en: {
			loading: "تجهيز الصورة .... أصبر ✅",
			error: "حاول بعد خمس دقائق يا عزيزي 😐❌ خطأ❌"
		}
	},

	onStart: async function ({ args, message, getLang }) {
		message.reply(getLang("loading"));
		let endpoint;
		const listEndpoint = ["neko", "kitsune", "hug", "pat", "waifu", "cry", "kiss", "slap", "smug", "punch"];
		if (listEndpoint.includes(args[0]))
			endpoint = args[0];
		else
			endpoint = listEndpoint[Math.floor(Math.random() * listEndpoint.length)];
		try {
			const { data } = await axios.get(`https://neko-love.xyz/api/v1/${endpoint}`);
			const imageRandom = await getStreamFromURL(data.url);
			return message.reply({
				attachment: imageRandom
			});
		}
		catch (err) {
			return message.reply(getLang("error"));
		}
	}
};