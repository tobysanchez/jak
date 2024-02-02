module.exports = {
	config: {
		name: "فك",
    aliases: ["إعادة"],
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "bật/tắt chỉ admin box sử dụng bot",
			en: "تشغيل وضع الأدمن فقط يقدر يستعمل البوت"
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ quản trị của viên nhóm mới có thể sử dụng bot",
			en: "تشغيل وضع أدمن المجموعة فقط"
		},
		category: "المطور",
		guide: {
			en: "   فك التقييد أو إعادة القيد"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			turnedOn: "تم تشغيل وضع الأدمن فقط يستعمل البوت في هذه المجموعة ✅",
			turnedOff: "تم إيقاف الوضع ❌",
			syntaxError: "فك التقييد أو إعادة القيد ✅"
		}
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		if (args[0] == "القيد") {
			await threadsData.set(event.threadID, true, "data.onlyAdminBox");
			message.reply(getLang("turnedOn"));
		}
		else if (args[0] == "التقييد") {
			await threadsData.set(event.threadID, false, "data.onlyAdminBox");
			message.reply(getLang("turnedOff"));
		}
		else
			return message.reply(getLang("syntaxError"));
	}
};