const fs = require("fs-extra");
const { config } = global.GoatBot;
const { client } = global;

module.exports = {
	config: {
		name: "المطورفقط",
		aliases: ["أونلي", "ادفقط", "انا"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "bật/tắt chỉ admin sử dụng bot",
			en: "تفعيل وضع المطور فقط يستخدم البوت ✓"
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
			en: "تفعيل أو ايقاف وضع مطور البوت فقط يستخدم بوته"
		},
		category: "المطور",
		guide: {
			en: "انا ايقاف / تشغيل"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ admin mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ admin mới có thể sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			turnedOn: "تم تشغيل وضع المطور فقط يستعمل البوت 🌟",
			turnedOff: "تم ايقاف الوضع الذي يسمح للمطور فقط باستعمالي ❌",
			syntaxError: "أكتب أدمن تشغيل أو أدمن ايقاف"
		}
	},

	onStart: function ({ args, message, getLang  }) {
		if (args[0] == "تشغيل") {
			config.adminOnly.enable = true;
			message.reply(getLang("turnedOn"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else if (args[0] == "ايقاف") {
			config.adminOnly.enable = false;
			message.reply(getLang("turnedOff"));
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else
			return message.reply(getLang("syntaxError"));
	}
};