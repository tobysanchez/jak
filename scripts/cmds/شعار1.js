const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
	config: {
		name: "شعار",
    aliases: ["gfxs"],
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "صنع شعار خاص بك",
		longDescription: "صنع شعار خاص بك",
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
			const img = `https://samirthakuri.restfulapi.repl.co/gfx?apikey=notsopreety&text=${encodeURIComponent(text)}`;		
      
                 const form = {
				body: `هذا هو شعار GFX الخاص بك ...`
			};
				form.attachment = []
				form.attachment[0] = await global.utils.getStreamFromURL(img);
			message.reply(form);
			  }
}};