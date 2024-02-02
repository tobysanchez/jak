function checkShortCut(nickname, uid, userName) {
	/\{userName\}/gi.test(nickname) ? nickname = nickname.replace(/\{userName\}/gi, userName) : null;
	/\{userID\}/gi.test(uid) ? nickname = nickname.replace(/\{userID\}/gi, uid) : null;
	return nickname;
}

module.exports = {
	config: {
		name: "تسميةالجدد",
		version: "1.1",
		author: "NTKhang",
		cooldowns: 5,
		role: 1,
		shortDescription: {
			vi: "Tự đổi biệt danh thành viên mới",
			en: "تغيير أسماء الأعضاء الجدود تلقائيا"
		},
		longDescription: {
			vi: "Tự đổi biệt danh cho thành viên mới vào nhóm chat",
			en: "تدخل عضو جديد يغير له كنيته 🌝"
		},
		category: "المجموعة",
		guide: {
			vi: '   {pn} set <nickname>: dùng để cài đặt cấu hình để tự đổi biệt danh, với các shortcut có sẵn:'
				+ '\n   + {userName}: tên thành viên vào nhóm'
				+ '\n   + {userID}: id thành viên'
				+ '\n   Ví dụ:'
				+ '\n    {pn} set {userName} 🚀'
				+ '\n\n   {pn} [on | off]: dùng để bật/tắt tính năng này'
				+ '\n\n   {pn} [view | info]: hiển thị cấu hình hiện tại',
			en: '   تسميةالجدد وضع <الكنية>: لتغيير الكنية أوتوماتيك, إذا بدك يغير إلى:'
				+ '\n   + {userName}: أكتبها ليضع إسم العضو'
				+ '\n   + {userID}: ليضع آيديه'
				+ '\n   مثلا:'
				+ '\n    تسميةالجدد أضف {userName} 🚀'
				+ '\n\n   تسميةالجدد [on | off]: تشغيل الوضع أو إيقافه'
				+ '\n\n   تسمية [معلومات | تفاصيل]: بعض التفاصيل'
		}
	},

	langs: {
		vi: {
			missingConfig: "Vui lòng nhập cấu hình cần thiết",
			configSuccess: "Cấu hình đã được cài đặt thành công",
			currentConfig: "Cấu hình autoSetName hiện tại trong nhóm chat của bạn là:\n%1",
			notSetConfig: "Hiện tại nhóm bạn chưa cài đặt cấu hình autoSetName",
			syntaxError: "Sai cú pháp, chỉ có thể dùng \"{pn} on\" hoặc \"{pn} off\"",
			turnOnSuccess: "Tính năng autoSetName đã được bật",
			turnOffSuccess: "Tính năng autoSetName đã được tắt",
			error: "Đã có lỗi xảy ra khi sử dụng chức năng autoSetName, thử tắt tính năng liên kết mời trong nhóm và thử lại sau"
		},
		en: {
			missingConfig: "أدخل بشكل صحيح المطلوب 😐",
			configSuccess: "تم وضع الأمر بنجاح",
			currentConfig: "التسمية التلقائية في المجموعة هي إلى:\n%1",
			notSetConfig: "المجموعة لم تضع مزايا الأمر",
			syntaxError: "خطأ, فقط \"تسميةالجدد on\" أو \"تسميةالجدد off\" تكتب في الأمر ❌",
			turnOnSuccess: "تم تشغييل وضع تسمية الجدد✅",
			turnOffSuccess: "تم ايقاف وضع تسميةالجدد ❌",
			error: "طفي رابط الدعوة إلى المجموعة أو لن يشتغل الأمر ❌✅"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang }) {
		switch (args[0]) {
			case "وضع":
			case "اضف":
			case "config": {
				if (args.length < 2)
					return message.reply(getLang("missingConfig"));
				const configAutoSetName = args.slice(1).join(" ");
				await threadsData.set(event.threadID, configAutoSetName, "data.autoSetName");
				return message.reply(getLang("configSuccess"));
			}
			case "رؤية":
			case "معلومات": {
				const configAutoSetName = await threadsData.get(event.threadID, "data.autoSetName");
				return message.reply(configAutoSetName ? getLang("currentConfig", configAutoSetName) : getLang("notSetConfig"));
			}
			default: {
				const enableOrDisable = args[0];
				if (enableOrDisable !== "on" && enableOrDisable !== "off")
					return message.reply(getLang("syntaxError"));
				await threadsData.set(event.threadID, enableOrDisable === "on", "settings.enableAutoSetName");
				return message.reply(enableOrDisable == "on" ? getLang("turnOnSuccess") : getLang("turnOffSuccess"));
			}
		}
	},

	onEvent: async ({ message, event, api, threadsData, getLang }) => {
		if (event.logMessageType !== "log:subscribe")
			return;
		if (!await threadsData.get(event.threadID, "settings.enableAutoSetName"))
			return;
		const configAutoSetName = await threadsData.get(event.threadID, "data.autoSetName");

		return async function () {
			const addedParticipants = [...event.logMessageData.addedParticipants];
			try {
				const { userFbId: uid, fullName: userName } = addedParticipants.splice(-1)[0];
				await api.changeNickname(checkShortCut(configAutoSetName, uid, userName), event.threadID, uid);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}

			for (const user of addedParticipants) {
				const { userFbId: uid, fullName: userName } = user;
				try {
					await api.changeNickname(checkShortCut(configAutoSetName, uid, userName), event.threadID, uid);
				}
				catch (e) {

				}
			}
		};
	}
};