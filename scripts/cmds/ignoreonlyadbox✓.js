module.exports = {
	config: {
		name: "تجاهل",
		aliases: ["تجاهل", "تجاهل1"],
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		shortDescription: {
			vi: "Bỏ qua lệnh trong adminonly",
			en: "تجاهل أمر عند تقييد البوت و إجعل الكل يقدر يستعمله عند التقييد 😌❤️"
		},
		longDescription: {
			vi: "Bỏ qua lệnh trong adminonly (khi bật adminonly, các lệnh được thêm từ lệnh này người dung vẫn có thể sử dụng)",
			en: "صنعه عمك لوفي 🌝"
		},
		category: "المجموعة",
		guide: {
			vi: "   تجاهل أضف <إسم الأمر>: Thêm lệnh vào danh sách bỏ qua\n   {pn} del <commandName>: Xóa lệnh khỏi danh sách bỏ qua\n   {pn} list: Xem danh sách lệnh bỏ qua",
			en: "   تجاهل أضف <إسم الأمر>: أضف أمر يمكن إستعماله عند تقييد البوت\n   تجاهل إحذف <إسم الأمر>: العكس\n   تجاهل قائمة: رؤية قائمة أوامر يمكن إستعمالها عند تقييد البوت 🌝"
		}
	},

	langs: {
		vi: {
			missingCommandNameToAdd: "⚠️ Vui lòng nhập tên lệnh bạn muốn thêm vào danh sách bỏ qua",
			missingCommandNameToDelete: "⚠️ Vui lòng nhập tên lệnh bạn muốn xóa khỏi danh sách bỏ qua",
			commandNotFound: "❌ Không tìm thấy lệnh \"%1\" trong danh sách lệnh của bot",
			commandAlreadyInList: "❌ Lệnh \"%1\" đã có trong danh sách bỏ qua",
			commandAdded: "✅ Đã thêm lệnh \"%1\" vào danh sách bỏ qua",
			commandNotInList: "❌ Lệnh \"%1\" không có trong danh sách bỏ qua",
			commandDeleted: "✅ Đã xóa lệnh \"%1\" khỏi danh sách bỏ qua",
			ignoreList: "📑 Danh sách lệnh bỏ qua trong nhóm bạn:\n%1"
		},
		en: {
			missingCommandNameToAdd: "⚠️ أدخل إسم أمر تريد للكل إستعماله أثناء تقييد البوت 🌝",
			missingCommandNameToDelete: "⚠️ أدخل إسم أمر تريد تشيله من قائمة أوامر يمكن إستعمالها عند تقييد البوت😌",
			commandNotFound: "❌ هذا الأمر \"%1\" غير موجود في أوامر البوت",
			commandAlreadyInList: "❌ أمر \"%1\" موجود أصلا في القائمة 😌❤️",
			commandAdded: "✅ إضافة \"%1\" للقائمة",
			commandNotInList: "❌ أمر \"%1\" غير موجود في القائمة 😐",
			commandDeleted: "✅ تم حذف \"%1\" من القائمة 😌❤️",
			ignoreList: "📑 القائمة 🌝:\n%1\nيمكنك إستعمال هذه الأوامر أثناء تقييد البوت ولا تنسى أن لوفي عمك ❤️😌"
		}
	},

	onStart: async function ({ args, message, threadsData, getLang, event }) {
		const ignoreList = await threadsData.get(event.threadID, "data.ignoreCommanToOnlyAdminBox", []);
		switch (args[0]) {
			case "أضف": {
				if (!args[1])
					return message.reply(getLang("missingCommandNameToAdd"));
				const commandName = args[1].toLowerCase();
				const command = global.GoatBot.commands.get(commandName);
				if (!command)
					return message.reply(getLang("commandNotFound", commandName));
				if (ignoreList.includes(commandName))
					return message.reply(getLang("commandAlreadyInList", commandName));
				ignoreList.push(commandName);
				await threadsData.set(event.threadID, ignoreList, "data.ignoreCommanToOnlyAdminBox");
				return message.reply(getLang("commandAdded", commandName));
			}
			case "إحذف":
			case "delete":
			case "remove":
			case "rm":
			case "-d": {
				if (!args[1])
					return message.reply(getLang("missingCommandNameToDelete"));
				const commandName = args[1].toLowerCase();
				const command = global.GoatBot.commands.get(commandName);
				if (!command)
					return message.reply(getLang("commandNotFound", commandName));

				if (!ignoreList.includes(commandName))
					return message.reply(getLang("commandNotInList", commandName));
				ignoreList.splice(ignoreList.indexOf(commandName), 1);
				await threadsData.set(event.threadID, ignoreList, "data.ignoreCommanToOnlyAdminBox");
				return message.reply(getLang("commandDeleted", commandName));
			}
			case "قائمة": {
				return message.reply(getLang("ignoreList", ignoreList.join(", ")));
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};