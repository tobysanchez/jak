module.exports = {
	config: {
		name: "معرف",
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Xem threadID",
			en: "رؤية آيدي المجموعة"
		},
		longDescription: {
			vi: "Xem id nhóm chat của bạn",
			en: "رؤية آيدي المجموعة ✅🌟"
		},
		category: "معلومات",
		guide: {
			en: "آيدي"
		}
	},

	onStart: async function ({ message, event }) {
		message.reply(event.threadID.toString());
	}
};