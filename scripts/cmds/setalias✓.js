module.exports = {
	config: {
		name: "تسميةأمر",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Thêm tên gọi khác cho lệnh",
			en: "تغيير أسماء أوامر البوت في مجموعتك 😐"
		},
		longDescription: {
			vi: "Thêm tên gọi khác cho 1 lệnh bất kỳ trong nhóm của bạn",
			en: "إضافة أسماء للأوامر خاصة بمجموعتك 🌟"
		},
		category: "المجموعة",
		guide: {
			vi: "  Lệnh dùng để thêm/xóa tên gọi khác cho 1 lệnh nào đó để tiện sử dụng trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh>: dùng để thêm tên gọi khác cho lệnh trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh> -g: dùng để thêm tên gọi khác cho lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} add ctrk customrankcard"
				+ "\n\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh>: dùng để xóa tên gọi khác của lệnh trong nhóm chat của bạn"
				+ "\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh> -g: dùng để xóa tên gọi khác của lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} rm ctrk customrankcard"
				+ "\n\n   {pn} list: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn"
				+ "\n   {pn} list -g: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn",
			en: "  هذا الأمر لإضافة أسماء للأوامر في مجموعتك"
				+ "\n   تسميةأمر أضف <إسم أمر الذي تريد وضعه> <الأمر الذي تريد وضع الإسم له>: أضف إسم لأمر"
				+ "\n   تسميةأمر أضف <إسم> <الأمر> عام: إضافة للأمر في نظام البوت"
				+ "\nمثلا:\n    تسميةأمر أضف ضيف أضف"
				+ "\n\n   تسميةأمر [حذف | rm] <الإسم اللي ضفته من قبل> <الأمر الذي ضفت الاسم له من قبل>: حذف إسم أضفته"
				+ "\n   تسميةأمر [حذف | rm] <إسم> <أمر> عام: حذف إسم ضفته لأمر في نظام البوت"
				+ "\nمثلا:\n    تسميةأمر حذف بانكاي  طرد"
				+ "\n\n   تسميةأمر قائمة: رؤية قائمة أسماء الأوامر التي ضفتها في مجموعتك 😐"
				+ "\n   تسميةأمر قائمة أصلي: رؤية الأوامر في النظام 😐❤️"
		}
	},

	langs: {
		vi: {
			commandNotExist: "❌ Lệnh \"%1\" không tồn tại",
			aliasExist: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong hệ thống",
			addAliasSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionAdd: "❌ Bạn không có quyền thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			aliasIsCommand: "❌ Tên gọi \"%1\" trùng với tên lệnh khác trong hệ thống bot",
			aliasExistInGroup: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong nhóm này",
			addAliasToGroupSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong nhóm chat của bạn",
			aliasNotExist: "❌ Tên gọi \"%1\" không tồn tại trong lệnh \"%2\"",
			removeAliasSuccess: "✅ Đã xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionDelete: "❌ Bạn không có quyền xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noAliasInGroup: "❌ Lệnh \"%1\" không có tên gọi khác nào trong nhóm của bạn",
			removeAliasInGroupSuccess: "✅ Đã xóa tên gọi \"%1\" khỏi lệnh \"%2\" trong nhóm chat của bạn",
			aliasList: "📜 Danh sách tên gọi khác của các lệnh trong hệ thống:\n%1",
			noAliasInSystem: "⚠️ Hiện tại không có tên gọi nào trong hệ thống",
			notExistAliasInGroup: "⚠️ Nhóm bạn chưa cài đặt tên gọi khác cho lệnh nào cả",
			aliasListInGroup: "📜 Danh sách tên gọi khác của các lệnh trong nhóm chat của bạn:\n%1"
		},
		en: {
			commandNotExist: "❌ أمر \"%1\" غير معثور عليه",
			aliasExist: "❌ الإسم \"%1\" موجود لأمر \"%2\" في نظام البوت",
			addAliasSuccess: "✅ إضافة إسم \"%1\" لأمر \"%2\" في نظام ❤️",
			noPermissionAdd: "❌ ما عدك صلاحية إضافة إسم \"%1\" لأمر \"%2\" في نظام البوت",
			aliasIsCommand: "❌ إسم \"%1\" نفسه مع أمر آخر موجود 😐",
			aliasExistInGroup: "❌موجود في المجموعة هذا الإسم",
			addAliasToGroupSuccess: "✅ إضافة \"%1\" لأمر \"%2\" في مجموعتك",
			aliasNotExist: "❌ إسم \"%1\" غير موجود لأمر \"%2\"",
			removeAliasSuccess: "✅ حذف إسم \"%1\" لأمر \"%2\" في المجموعة",
			noPermissionDelete: "❌ حبي الزبدة ما تقدر تشيل الأسماء العامة في النظام 🗿❤️",
			noAliasInGroup: "❌ أمر \"%1\" ما عنده أسماء غير في مجموعتك",
			removeAliasInGroupSuccess: "✅ حذف إسم \"%1\" لأمر \"%2\"في مجموعتك 😐",
			aliasList: "📜 قائمة أسماء أوامر في النظام:\n%1",
			noAliasInSystem: "⚠️ لا توجد أسماء في النظام 😐",
			notExistAliasInGroup: "⚠️ لم تضع المجموعة أي أسماء لأوامر ✅",
			aliasListInGroup: "📜 أسماء لأوامر وضعها أدمن المجموعة ✅:\n%1"
		}
	},

	onLoad: async function ({ globalData }) {
		if (!await globalData.get('setalias'))
			await globalData.create('setalias', {
				key: 'setalias',
				data: []
			});
	},

	onStart: async function ({ message, event, args, threadsData, globalData, role, getLang }) {
		const aliasesData = await threadsData.get(event.threadID, "data.aliases", {});

		switch (args[0]) {
			case "أضف": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));
				const alias = args[1].toLowerCase();

				if (args[3] == 'عام') {
					if (role > 2) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesExist = globalAliasesData.find(item => item.aliases.includes(alias));
						if (globalAliasesExist)
							return message.reply(getLang("aliasExist", alias, globalAliasesExist.commandName));
						if (global.GoatBot.aliases.has(alias))
							return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (globalAliasesThisCommand)
							globalAliasesThisCommand.aliases.push(alias);
						else
							globalAliasesData.push({
								commandName,
								aliases: [alias]
							});
						await globalData.set('setalias', 'data', globalAliasesData);
						global.GoatBot.aliases.set(alias, commandName);
						return message.reply(getLang("addAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionAdd", alias, commandName));
					}
				}

				if (global.GoatBot.commands.get(alias))
					return message.reply(getLang("aliasIsCommand", alias));
				if (global.GoatBot.aliases.has(alias))
					return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
				for (const cmdName in aliasesData)
					if (aliasesData[cmdName].includes(alias))
						return message.reply(getLang("aliasExistInGroup", alias, cmdName));

				const oldAlias = aliasesData[commandName] || [];
				oldAlias.push(alias);
				aliasesData[commandName] = oldAlias;
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("addAliasToGroupSuccess", alias, commandName));
			}
			case "حذف":
			case "rm": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				const alias = args[1].toLowerCase();

				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));

				if (args[3] == '-g') {
					if (role > 1) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (!globalAliasesThisCommand || !globalAliasesThisCommand.aliases.includes(alias))
							return message.reply(getLang("aliasNotExist", alias, commandName));
						globalAliasesThisCommand.aliases.splice(globalAliasesThisCommand.aliases.indexOf(alias), 1);
						await globalData.set('setalias', 'data', globalAliasesData);
						global.GoatBot.aliases.delete(alias);
						return message.reply(getLang("removeAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionDelete", alias, commandName));
					}
				}

				const oldAlias = aliasesData[commandName];
				if (!oldAlias)
					return message.reply(getLang("noAliasInGroup", commandName));
				const index = oldAlias.indexOf(alias);
				if (index === -1)
					return message.reply(getLang("aliasNotExist", alias, commandName));
				oldAlias.splice(index, 1);
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("removeAliasInGroupSuccess", alias, commandName));
			}
			case "قائمة": {
				if (args[1] == 'عام') {
					const globalAliasesData = await globalData.get('setalias', 'data', []);
					const globalAliases = globalAliasesData.map(aliasData => ({
						commandName: aliasData.commandName,
						aliases: aliasData.aliases.join(', ')
					}));
					return message.reply(
						globalAliases.length ?
							getLang("aliasList", globalAliases.map(alias => `• ${alias.commandName}: ${alias.aliases}`).join('\n')) :
							getLang("noAliasInSystem")
					);
				}

				if (!Object.keys(aliasesData).length)
					return message.reply(getLang("notExistAliasInGroup"));
				const list = Object.keys(aliasesData).map(commandName => `\n• ${commandName}: ${aliasesData[commandName].join(", ")} `);
				return message.reply(getLang("aliasListInGroup", list.join("\n")));
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};