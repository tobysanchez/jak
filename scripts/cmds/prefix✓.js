const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "رمز",
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: "مالك دخل خاص ᎡᎯᏰᎯᎻ ᏚᎯᎷᎯب✅",
		longDescription: "تعديل رمز البوت من طرف الأدمن في المجموعة",
		category: "البوت",
		guide: {
			vi: "   {pn} <new prefix>: thay đổi prefix mới trong box chat của bạn"
				+ "\n   Ví dụ:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: thay đổi prefix mới trong hệ thống bot (chỉ admin bot)"
				+ "\n   Ví dụ:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: thay đổi prefix trong box chat của bạn về mặc định",
			en: "   رمز [ضع رمزا]: "
				+ "\n   مثال:"
				+ "\n    رمز #"
				+ "\n\n   رمز / عام: تغيير رمز البوت الأصلي"
				+ "\n   مثال:"
				+ "\n    رمز # عام"
				+ "\n\n   رمز أصلي : اجعل الرمز مثل الرمز الأصلي"
		}
	},

	langs: {
		vi: {
			reset: "Đã reset prefix của bạn về mặc định: %1",
			onlyAdmin: "Chỉ admin mới có thể thay đổi prefix hệ thống bot",
			confirmGlobal: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix của toàn bộ hệ thống bot",
			confirmThisThread: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix trong nhóm chat của bạn",
			successGlobal: "Đã thay đổi prefix hệ thống bot thành: %1",
			successThisThread: "Đã thay đổi prefix trong nhóm chat của bạn thành: %1",
			myPrefix: "🌐 Prefix của hệ thống: %1\n🛸 Prefix của nhóm bạn: %2"
		},
		en: {
			reset: "تم جعل الرمز أصلي وهو: %1",
			onlyAdmin: "فقط Løü Fï يمكنه 😐",
			confirmGlobal: "سويي رياكشن إذا متأكد 😃🌟",
			confirmThisThread: "ضع رياكشن إذا كنت متأكد 😐🌟",
			successGlobal: "تم تغيير الرمز العام إلى: %1",
			successThisThread: "تم تغيير الرمز في مجموعتكم إلى: %1",
			myPrefix: "🌐 بادئة أصلية: %1\n🛸 بادئة مجموعتكم: %2"
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'أصلي') {
			const threadData = await threadsData.get(event.threadID);
			delete threadData.data.prefix;
			await threadsData.set(event.threadID, threadData.data, "data");
			return message.reply("تم الأمر بنجاح ♻️");
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "عام")
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		else
			formSet.setGlobal = false;

		return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "الرمز")
			return () => {
				return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
			};
	}
};