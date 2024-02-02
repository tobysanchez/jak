const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
	config: {
		name: "شعار2",
    aliases: ["gfxs2"],
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "تصميم شعار خاص بك",
		longDescription: "تصميم شعار خاص بك",
		category: "gfx",
		guide: {
      en: "{p}{n} name",
    }
	},

	onStart: async function ({ message, args }) {
		const text = args.join(" ");
		if (!text) {
			return message.reply(`ادخل الاسم من فضلك`);
		} else {
			const img = `https://samirthakuri.restfulapi.repl.co/gfx2?apikey=notsopreety&text=${encodeURIComponent(text)}`;		
      
                 const form = {
				body: `هذا هو شعار GFX الخاص بك ...`
			};
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);
			message.reply(form);
			  }
}};