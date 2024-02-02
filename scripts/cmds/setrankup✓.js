const { drive, getStreamFromURL, getExtFromUrl, getTime } = global.utils;
const checkUrlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

module.exports = {
	config: {
		name: "صعودالمستوى",
		version: "1.1",
		author: "NTKhang",
		countDown: 0,
		role: 1,
		shortDescription: {
			vi: "Cấu hình rankup",
			en: "تعديل النص الذي يقوله البوت عندما يرتفع المستوى"
		},
		longDescription: {
			vi: "Cấu hình rankup",
			en: "تعديل إشعار المستوى"
		},
		category: "المجموعة",
		guide: {
			vi: "   {pn} text <message>: Cấu hình tin nhắn khi thành viên thăng hạng trong box chat của bạn"
				+ "\n   Với các tham số sau:"
				+ "\n    + {userName}: Tên thành viên"
				+ "\n    + {userNameTag}: Tag tên thành viên"
				+ "\n    + {oldRank}: Rank cũ của thành viên"
				+ "\n    + {currentRank}: Rank hiện tại của thành viên"
				+ "\n   {pn} file <link>: Cấu hình file đính kèm khi thành viên thăng hạng trong box chat của bạn"
				+ "\n   {pn} reset: Đặt lại cấu hình mặc định",
			en: "   إشعارالمستوى نص «نص»"
				+ "\n   أكتب:"
				+ "\n    + {userName}: يقول إسمه"
				+ "\n    + {userNameTag}: تاغ"
				+ "\n    + {oldRank}: رانكه القديم"
				+ "\n    + {currentRank}: رانكه الحالي"
				+ "\n   إشعارالمستوى <رابط>: حط رابط صورة أو فيديوا يرسله مع الرسالة"
				+ "\n   إشعارالمستوى أصلي: يصير كنضام البوت"
		}
	},

	langs: {
		vi: {
			changedMessage: "Đã thay đổi tin nhắn rankup thành: %1",
			missingAttachment: "Bạn phải đính kèm ảnh để cấu hình ảnh rankup",
			changedAttachment: "Đã thêm %1 tệp đính kèm vào rankup thành công"
		},
		en: {
			changedMessage: "تم تعديل رسالة الإشعار : %1",
			missingAttachment: "ضع رابط صورة ليكون بصورة ✅",
			changedAttachment: "إضافة %1 مع إشعار الرانك 🖤👑"
		}
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		const { body, threadID, senderID } = event;
		switch (args[0]) {
			case "نص": {
				const newContent = body.slice(body.indexOf("text") + 5);
				await threadsData.set(threadID, newContent, "data.rankup.message");
				return message.reply(getLang("changedMessage", newContent));
			}
			case "صورة":
			case "رابط":
			case "mp3":
			case "video": {
				const attachments = [...event.attachments, ...(event.messageReply?.attachments || [])].filter(item => ["photo", 'png', "animated_image", "video", "audio"].includes(item.type));
				if (!attachments.length && !(args[1] || '').match(checkUrlRegex))
					return message.reply(getLang("missingAttachment", attachments.length));
				const { data } = await threadsData.get(threadID);
				if (!data.rankup)
					data.rankup = {};
				if (!data.rankup.attachments)
					data.rankup.attachments = [];

				for (const attachment of attachments) {
					const { url } = attachment;
					const ext = getExtFromUrl(url);
					const fileName = `${getTime()}.${ext}`;
					const infoFile = await drive.uploadFile(`setrankup_${threadID}_${senderID}_${fileName}`, await getStreamFromURL(url));
					data.rankup.attachments.push(infoFile.id);
				}
				await threadsData.set(threadID, {
					data
				});
				return message.reply(getLang("changedAttachment"));
			}
		}
	}
};

