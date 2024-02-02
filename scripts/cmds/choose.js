module.exports = {
	config: {
		name: "إختار",
		version: "1.0",
		author: "Løü Fï",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "البوت يختار شي"
		},
		longDescription: {
			vi: "",
			en: "يساعدك في الإختيار"
		},
		category: "ألعاب",
		guide: {
			vi: "",
			en: "إختار لوفي | كوغوا"
		}
	},
  
 langs: {
		vi: {
			hello: ""
		},
		en: {
			many: "على الأقل خيارين"
		}
	},
  
 onStart: async function ({ message, args, getLang })  { 
     const options = args.join(" ").split("|"); 
     if (options.length < 2) return message.reply(getLang("many")); 
  
     const index = options[Math.floor(Math.random()*options.length)]; 
     message.reply(`⇒ ${options[index]?.trim() || "┐(￣ヘ￣)┌"}`); 
   }
    }