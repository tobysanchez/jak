const { drive, getStreamFromURL, getExtFromUrl, getTime } = global.utils;

module.exports = {
	config: {
		name: "وداع",
		aliases: ["توديع"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Chỉnh sửa nội dung tin nhắn tạm biệt",
			en: "تعديل نص الوداع 😌"
		},
		longDescription: {
			vi: "Chỉnh sửa nội dung/bật/tắt tin nhắn tạm biệt thành viên rời khỏi nhóm chat của bạn",
			en: "تشغيل نص الوداع أو تعديله أو إيقافه 🌟❤️"
		},
		category: "المجموعة",
		guide: {
			vi: {
				body: "   {pn} on: Bật tin nhắn tạm biệt"
					+ "\n   {pn} off: Tắt tin nhắn tạm biệt"
					+ "\n   {pn} text [<nội dung> | reset]: chỉnh sửa nội dung văn bản hoặc reset về mặc định, những shortcut có sẵn:"
					+ "\n  + {userName}: tên của thành viên rời khỏi nhóm"
					+ "\n  + {userNameTag}: tên của thành viên rời khỏi nhóm (tag)"
					+ "\n  + {boxName}:  tên của nhóm chat"
					+ "\n  + {type}: tự rời/bị qtv xóa khỏi nhóm"
					+ "\n  + {session}:  buổi trong ngày"
					+ "\n\n   Ví dụ:"
					+ "\n    {pn} text {userName} đã {type} khỏi nhóm, see you again 🤧"
					+ "\n"
					+ "\n   Reply (phản hồi) hoặc gửi kèm một tin nhắn có file với nội dung {pn} file: để thêm tệp đính kèm vào tin nhắn rời khỏi nhóm (ảnh, video, audio)"
					+ "\n\nVí dụ:"
					+ "\n   {pn} file reset: xóa gửi file",
				attachment: {
					[`${__dirname}/assets/guide/setleave_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
				}
			},
			en: {
				body: "   توديع on: شغل نص الوداع"
					+ "\n   توديع off: طفيه"
					+ "\n   توديع نص [<النص> | أصلي]: رجعه أصلي كنظام البوت أو حط جديد:"
					+ "\n  + {userName}: أكتبه كنص يقول إسم من غادر أو إنسحل 😌🌟"
					+ "\n  + {userNameTag}: تاغ من غادر او تم طرده 🙃"
					+ "\n  + {boxName}: إسم المجموعة"
					+ "\n  + {type}: تم طرده/غادر"
					+ "\n  + {session}: الوقت"
					+ "\n\n   مثلا:"
					+ "\n    توديع نص {userName} الفاشل {type} المجموعة, باي بيتش 😑"
					+ "\n"
					+ "\n   رد على صوت أو صورة أو فيديوا ب /توديع مجلد وسيضعه لاكن إستبدل / برمز البوت في مجموعتك"
					+ "\n\nمثلا رد:"
					+ "\n   توديع مجلد .: على صورة و سيضعها او حتى رسالة صوتية او مقطع لاكن لا تضع شي طويل كي لا يطول 😌❤️",
				attachment: {
					[`${__dirname}/assets/guide/setleave_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
				}
			}
		}
	},

	langs: {
		vi: {
			turnedOn: "Bật tin nhắn tạm biệt thành công",
			turnedOff: "Tắt tin nhắn tạm biệt thành công",
			missingContent: "Vui lùng nhập nội dung tin nhắn",
			edited: "Đã chỉnh sửa nội dung tin nhắn tạm biệt của nhóm bạn thành:\n%1",
			reseted: "Đã reset nội dung tin nhắn tạm biệt",
			noFile: "Không có tệp đính kèm tin nhắn tạm biệt nào để xóa",
			resetedFile: "Đã reset tệp đính kèm thành công",
			missingFile: "Hãy phản hồi tin nhắn này kèm file ảnh/video/audio",
			addedFile: "Đã thêm %1 tệp đính kèm vào tin nhắn tạm biệt của nhóm bạn"
		},
		en: {
			turnedOn: "تم تشغيل نص التوديع 🌝✅",
			turnedOff: "إيقاف نص التوديع 😑💔",
			missingContent: "أدخل محتوى النص 🥰❤️",
			edited: "توديع الفشلة صار بقول:\n%1",
			reseted: "تم ✅✅",
			noFile: "لا يوجد مجلد مع نص التوديع 🙃❤️❌",
			resetedFile: "تم ✅❤️",
			missingFile: "رد على صورة/فيديوا/رسالة صوتية كما علمتك 🌝",
			addedFile: "%1 هو مرفق نص التوديع في المجموعة ✅❤️🥰"
		}
	},

	onStart: async function ({ args, threadsData, message, event, commandName, getLang }) {
		const { threadID, senderID, body } = event;
		const { data, settings } = await threadsData.get(threadID);

		switch (args[0]) {
			case "نص": {
				if (!args[1])
					return message.reply(getLang("missingContent"));
				else if (args[1] == "reset")
					delete data.leaveMessage;
				else
					data.leaveMessage = body.slice(body.indexOf(args[0]) + args[0].length).trim();
				await threadsData.set(threadID, {
					data
				});
				message.reply(data.leaveMessage ? getLang("edited", data.leaveMessage) : getLang("reseted"));
				break;
			}
			case "مجلد": {
				if (args[1] == "أصلي") {
					const { leaveAttachment } = data;
					if (!leaveAttachment)
						return message.reply(getLang("noFile"));
					try {
						await Promise.all(data.leaveAttachment.map(fileId => drive.deleteFile(fileId)));
						delete data.leaveAttachment;
					}
					catch (e) { }

					await threadsData.set(threadID, {
						data
					});
					message.reply(getLang("resetedFile"));
				}
				else if (event.attachments.length == 0 && (!event.messageReply || event.messageReply.attachments.length == 0))
					return message.reply(getLang("missingFile"), (err, info) => {
						global.GoatBot.onReply.set(info.messageID, {
							messageID: info.messageID,
							author: senderID,
							commandName
						});
					});
				else {
					saveChanges(message, event, threadID, senderID, threadsData, getLang);
				}
				break;
			}
			case "on":
			case "off": {
				settings.sendLeaveMessage = args[0] == "on";
				await threadsData.set(threadID, { settings });
				message.reply(getLang(args[0] == "on" ? "turnedOn" : "turnedOff"));
				break;
			}
			default:
				message.SyntaxError();
				break;
		}
	},

	onReply: async function ({ event, Reply, message, threadsData, getLang }) {
		const { threadID, senderID } = event;
		if (senderID != Reply.author)
			return;

		if (event.attachments.length == 0 && (!event.messageReply || event.messageReply.attachments.length == 0))
			return message.reply(getLang("missingFile"));
		saveChanges(message, event, threadID, senderID, threadsData, getLang);
	}
};

async function saveChanges(message, event, threadID, senderID, threadsData, getLang) {
	const { data } = await threadsData.get(threadID);
	const attachments = [...event.attachments, ...(event.messageReply?.attachments || [])].filter(item => ["photo", 'png', "animated_image", "video", "audio"].includes(item.type));
	if (!data.leaveAttachment)
		data.leaveAttachment = [];

	for (const attachment of attachments) {
		const { url } = attachment;
		const ext = getExtFromUrl(url);
		const fileName = `${getTime()}.${ext}`;
		const infoFile = await drive.uploadFile(`setleave_${threadID}_${senderID}_${fileName}`, await getStreamFromURL(url));
		data.leaveAttachment.push(infoFile.id);
	}
	await threadsData.set(threadID, {
		data
	});
	message.reply(getLang("addedFile", attachments.length));
}
