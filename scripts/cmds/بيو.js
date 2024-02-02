const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "بيو",
    aliases: ["changebio"],
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 2,
    shortDescription: "خاص بآدمن البوت",
    longDescription: "خاص بآدمن البوت",
    category: "owner",
    guide: "{p}bio keywords"
  },

  onStart: async function ({ api, event, global, args, permssion, utils, client, Users }) {
    const permission = ["100093222913818"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("ليس لديك الإذن الكافي لاستخدام هذا الأمر. فقط بادمن البوت يستطيع فعل ذلك.", event.threadID, event.messageID);
    return;
  }
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("حدث خطأ" + e, event.threadID); return api.sendMessage("تم تغيير السيرة الذاتية للبوت إلى :\n"+args.join(" "), event.threadID, event.messgaeID)})
  }
  };
