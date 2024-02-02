const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
	config: {
		name: "مجهول",
    aliases: ['anon'],
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "",
		longDescription: "",
		category: "avt & banners",
		guide: {
      en: "{pn} الاسم",
    }
	},

	onStart: async function ({ message, args }) {
		const text = args.join(" ");
		if (!text) {
			return message.reply(`ادخل محتوى النص`);
		} else {
			const img = `https://api.zahwazein.xyz/ephoto/anonymous?text=${encodeURIComponent(text)}&apikey=zenzkey_92d341a7630e`;		
      
                 const form = {
				body: `نحن مجهولون 😈😈`
			};
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);
			message.reply(form);
			  }
}};