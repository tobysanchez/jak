module.exports = {
	config: {
		name: "بروفايل",
aliases: ["الحصول على صورة بروفايل"],

		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 0,
		shortDescription: "الحصول على صورة بروفايلك او بروفايل صديقك",
		longDescription: "الحصول على صورة بروفايلك او بروفايل صديقك",
		category: "image",
		guide: {
			en: "   {pn} @تاغ"
		}
	},

	langs: {
		vi: {
			noTag: "Bạn phải tag người bạn muốn tát"
		},
		en: {
			noTag: "يجب الرد على رسالة الشخص الذي تريد الحصول على صورة ملفه الشخصي"
		}
	},

	onStart: async function ({ event, message, usersData, args, getLang }) {
    let avt;
		const uid1 = event.senderID;
		const uid2 = Object.keys(event.mentions)[0];
		if(event.type == "message_reply"){
      avt = await usersData.getAvatarUrl(event.messageReply.senderID)
    } else{
      if (!uid2){avt =  await usersData.getAvatarUrl(uid1)
              } else{avt = await usersData.getAvatarUrl(uid2)}}


		message.reply({
			body:"",
			attachment: await global.utils.getStreamFromURL(avt)
	})
  }
};