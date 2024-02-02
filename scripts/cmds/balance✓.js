module.exports = {
	config: {
		name: "فلوسي",
		aliases: ["فلوس"],
		version: "1.1",
		author: "Ayman",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "xem số tiền của bạn",
			en: "الكشف عن نقودك"
		},
		longDescription: {
			vi: "xem số tiền hiện có của bạn hoặc người được tag",
			en: "view your money or the money of the tagged person"
		},
		category: "economy",
		guide: {
			vi: "   {pn}: xem số tiền của bạn"
				+ "\n   {pn} <@tag>: xem số tiền của người được tag"
			,
			en: "   {pn}: view your money"
				+ "\n   {pn} <@tag>: view the money of the tagged person"
		}
	},

	langs: {
		vi: {
			money: "Bạn đang có %1$",
			moneyOf: "%1 đang có %2$",
			transferSuccess: "تم تحويل %1 من نقودك إلى %2 بنجاح.",
			transferInvalidAmount: "المبلغ الذي تحاول تحويله غير صالح.",
			transferInsufficientFunds: "ليس لديك ما يكفي من الأموال للتحويل.",
			transferInvalidUser: "المستخدم المعنى غير موجود أو غير صالح."
		},
		en: {
			money: "فلوسك %1$",
			moneyOf: "%1 has %2$",
			transferSuccess: "تم تحويل %1 من نقودك إلى %2 بنجاح.",
			transferInvalidAmount: "المبلغ الذي تحاول تحويله غير صالح.",
			transferInsufficientFunds: "ليس لديك ما يكفي من الأموال للتحويل.",
			transferInvalidUser: "المستخدم المعنى غير موجود أو غير صالح."
		}
	},

	onStart: async function ({ args, message, usersData, event, getLang }) {
		const senderID = event.senderID;
		const senderData = await usersData.get(senderID);
		const senderBalance = senderData.money;

		if (Object.keys(event.mentions).length > 0) {
			const recipientID = Object.keys(event.mentions)[0];
			const recipientData = await usersData.get(recipientID);
			const recipientName = event.mentions[recipientID].replace("@", "");
			const amount = parseInt(args[0]);

			if (isNaN(amount) || amount <= 0) {
				return message.reply(getLang("transferInvalidAmount"));
			}

			if (senderBalance < amount) {
				return message.reply(getLang("transferInsufficientFunds"));
			}

			senderData.money -= amount;
			recipientData.money += amount;

			await usersData.set(senderID, senderData);
			await usersData.set(recipientID, recipientData);

			return message.reply(getLang("transferSuccess", amount, recipientName));
		}

		return message.reply(getLang("money", senderBalance));
	}
};
