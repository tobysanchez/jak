const canvas = require("canvas");
const axios = require("axios");

module.exports = {
  config: {
    name: "عرض", 
    aliases: ['ancient'], 
    version: "2.0",
    author: "Razihelx", 
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "تحويل نص إلى أحرف الصورة"
    }, 
    longDescription: {
      en: "جعل النص إلى صورة الحروف"
    }, 
    category: "utility", 
    guide: {
      en: "{pn} <text>"
    }
   }, 

    onStart: async function ({ api,event, message, args}) {
      const prompt = args.join(' ');
    if (!prompt) {
      return message.reply(`رجاء ادخال محتى النص`);
    }
      const response = await axios.get(`https://api.reikomods.repl.co/textpro/ancient?text=${prompt}`);

      let ImageUrl = response.data.result;

      const getImg = await global.utils.getStreamFromURL(ImageUrl, "image.png");

      api.sendMessage({
        attachment: getImg
      }, event.threadID, event.messageID);
}, 
};