const fs = require("fs");

module.exports = {
  config: {
    name: "شذوذ",
    version: "1.0",
    author: "ADAyman",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "نسبة شذوذك"
    },
    longDescription: {
      en: "نسبة شذوذك"
    },
    category: "العاب",
    guide: {
      en: "معرفة نسبة الشذوذ"
    }
  },

  onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
    const randomPercentage = Math.floor(Math.random() * 100);
    const replyMessage = `نسبة الشذوذ عندك هي ${randomPercentage}% 🏳️‍🌈`;
    const videoFiles = fs.readdirSync("./video"); // تحديد مسار المجلد الذي يحتوي على ملفات الفيديو
    const randomVideoIndex = Math.floor(Math.random() * videoFiles.length);
    const randomVideo = videoFiles[randomVideoIndex];

    if (randomVideo) {
      try {
        const videoPath = `./video/${randomVideo}`; // تحديد مسار الفيديو المختار
        const attachment = fs.createReadStream(videoPath);
        if (attachment) {
          api.sendMessage({
            body: replyMessage,
            attachment: attachment
          }, event.threadID, event.messageID);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    }

    api.sendMessage({ body: replyMessage }, event.threadID, event.messageID);
  }
};
