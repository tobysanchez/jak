function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = {
	config: {
		name: "تصفية",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		shortDescription: {
			vi: "lọc thành viên nhóm",
			en: "تصفية الأعضاء 📛✅"
		},
		longDescription: {
			vi: "lọc thành viên nhóm theo số tin nhắn hoặc bị khóa acc",
			en: "تصفية حسب عدد الرسائل أو إنحضار حسابتهم 😐"
		},
		category: "المجموعة",
		guide: {
			vi: "   {pn} [<số tin nhắn> | die]",
			en: "   تصفية [عدد الرسائل|موتى]"
		}
	},

	langs: {
		vi: {
			needAdmin: "⚠️ | Vui lòng thêm bot làm quản trị viên của box để sử dụng lệnh này",
			confirm: "⚠️ | Bạn có chắc chắn muốn xóa thành viên nhóm có số tin nhắn nhỏ hơn %1 không?\nThả cảm xúc bất kì vào tin nhắn này để xác nhận",
			kickByBlock: "✅ | Đã xóa thành công %1 thành viên bị khóa acc",
			kickByMsg: "✅ | Đã xóa thành công %1 thành viên có số tin nhắn nhỏ hơn %2",
			kickError: "❌ | Đã xảy ra lỗi không thể kick %1 thành viên:\n%2",
			noBlock: "✅ | Không có thành viên nào bị khóa acc",
			noMsg: "✅ | Không có thành viên nào có số tin nhắn nhỏ hơn %1"
		},
		en: {
			needAdmin: "⚠️ | إجعل البوت أدمن وحاول مجددا 📛",
			confirm: "⚠️ | هل تريد طرد من عدد رسائلهم أقل من %1 رسالة?\nسوي رياكشن لبدأ طرد الأصنام\nوداعا يا أصنام إذا وضع رياكشن 😐📛",
			kickByBlock: "✅ | تم تصفية %1 حساب محضور",
			kickByMsg: "✅ | تم طرد %1 عضو عدد رسائلهم أقل من %2 رسالة",
			kickError: "❌ | لم أستطع طرد %1 عضو:\n%2",
			noBlock: "✅ | مافي حسابات طايرة أو محضورة 😐📛",
			noMsg: "✅ | المجموعة أسطورية لا يوجد أصنام رسائلهم أقل من %1 رسالة 😐📛"
		}
	},

	onStart: async function ({ api, args, threadsData, message, event, commandName, getLang }) {
		const threadData = await threadsData.get(event.threadID);
		if (!threadData.adminIDs.includes(api.getCurrentUserID()))
			return message.reply(getLang("needAdmin"));

		if (!isNaN(args[0])) {
			message.reply(getLang("confirm", args[0]), (err, info) => {
				global.GoatBot.onReaction.set(info.messageID, {
					author: event.senderID,
					messageID: info.messageID,
					minimum: Number(args[0]),
					commandName
				});
			});
		}
		else if (args[0] == "موتى") {
			const threadData = await api.getThreadInfo(event.threadID);
			const membersBlocked = threadData.userInfo.filter(user => user.type !== "User").map(user => user.id);
			const errors = [];
			const success = [];
			for (const user of membersBlocked) {
				if (user.type !== "User") {
					try {
						await api.removeUserFromGroup(user.id, event.threadID);
						success.push(user.id);
					}
					catch (e) {
						errors.push(user.name);
					}
				}
				await sleep(700);
			}

			let msg = "";
			if (success.length > 0)
				msg += `${getLang("kickByBlock", success.length)}\n`;
			if (errors.length > 0)
				msg += `${getLang("kickError", errors.length, errors.join("\n"))}\n`;
			if (msg == "")
				msg += getLang("noBlock");
			message.reply(msg);
		}
		else
			message.SyntaxError();
	},

	onReaction: async function ({ api, Reaction, event, threadsData, message, getLang }) {
		const { minimum = 1, author } = Reaction;
		if (event.userID != author)
			return;
		const threadData = await threadsData.get(event.threadID);
		const botID = api.getCurrentUserID();
		const membersCountLess = threadData.members.filter(member => member.count < minimum && member.inGroup == true && member.userID != botID);
		const errors = [];
		const success = [];
		for (const member of membersCountLess) {
			try {
				await api.removeUserFromGroup(member.userID, event.threadID);
				success.push(member.userID);
			}
			catch (e) {
				errors.push(member.name);
			}
			await sleep(700);
		}

		let msg = "";
		if (success.length > 0)
			msg += `${getLang("kickByMsg", success.length, minimum)}\n`;
		if (errors.length > 0)
			msg += `${getLang("kickError", errors.length, errors.join("\n"))}\n`;
		if (msg == "")
			msg += getLang("noMsg", minimum);
		message.reply(msg);
	}
};