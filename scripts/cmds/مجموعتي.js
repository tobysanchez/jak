const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports = {
  config: {
    name: "مجموعتي",
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Đây là mô tả ngắn của lệnh",
      en: "This is a short description of the command"
    },
    longDescription: {
      vi: "Đây là mô tả dài của lệnh",
      en: "This is a long description of the command"
    },
    category: "categoryName",
    guide: {
      vi: "Đây là hướng dẫn sử dụng của lệnh",
      en: "This is a guide for using the command"
    }
  },

  langs: {
    vi: {
      hello: "Xin chào",
      helloWithName: "Xin chào, id Facebook của bạn là %1"
    },
    en: {
      hello: "Hello world",
      helloWithName: "Hello, your Facebook id is %1"
    }
  },

  onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
    const threadID = event.threadID;
    const lang = "vi";
    const threadData = await threadsData.get(threadID);
    const createdDate = getTime(threadData.createdAt, "DD/MM/YYYY HH:mm:ss");
    const valuesMember = Object.values(threadData.members).filter(item => item.inGroup);
    const totalBoy = valuesMember.filter(item => item.gender == "MALE").length;
    const totalGirl = valuesMember.filter(item => item.gender == "FEMALE").length;
    const totalMessage = valuesMember.reduce((i, item) => i += item.count, 0);
    const infoBanned = threadData.banned.status ?
      `\n- تم حظره: ${threadData.banned.status}`
      + `\n- السبب: ${threadData.banned.reason}`
      + `\n- التاريخ: ${threadData.banned.date}` :
      "";

    const threadInfo = await api.getThreadInfo(threadID);
    const msg = {
    };

    api.sendMessage(msg, threadID, async () => {
      if (threadInfo.imageSrc) {
        const pictureURL = threadInfo.imageSrc;
        const imagePath = path.join(__dirname, 'group_picture.jpg');

        await downloadImage(pictureURL, imagePath);

        const attachment = fs.createReadStream(imagePath);

        const finalMsg = {
          body: `معرف المجموعة: ${threadInfo.threadID}\n`
            + `اسم المجموعة: ${threadInfo.name}\n`
            + `وصف المجموعة: ${threadInfo.description}\n`
            + `عدد البنات: ${totalGirl}\n`
            + `عدد الأولاد: ${totalBoy}\n`
            + `عدد الرسائل الإجمالي: ${totalMessage}${infoBanned}`,
          attachment: attachment
        };

        api.sendMessage(finalMsg, threadID);
      } else {
        const finalMsg = {
          body: `معرف المجموعة: ${threadInfo.threadID}\n`
            + `اسم المجموعة: ${threadInfo.name}\n`
            + `وصف المجموعة: ${threadInfo.description}\n`
            + `عدد البنات: ${totalGirl}\n`
            + `عدد الأولاد: ${totalBoy}\n`
            + `عدد الرسائل الإجمالي: ${totalMessage}${infoBanned}`
        };

        api.sendMessage(finalMsg, threadID);
      }
    });

    function getTime(timestamp, format) {
      const date = new Date(timestamp);
      const day = `0${date.getDate()}`.slice(-2);
      const month = `0${date.getMonth() + 1}`.slice(-2);
      const year = date.getFullYear();
      const hours = `0${date.getHours()}`.slice(-2);
      const minutes = `0${date.getMinutes()}`.slice(-2);
      const seconds = `0${date.getSeconds()}`.slice(-2);

      let result = format
        .replace(/DD/g, day)
        .replace(/MM/g, month)
        .replace(/YYYY/g, year)
        .replace(/HH/g, hours)
        .replace(/mm/g, minutes)
        .replace(/ss/g, seconds);

      return result;
    }

    async function downloadImage(url, destPath) {
      const response = await axios({
        url: url,
        method: 'GET',
        responseType: 'stream'
      });

      response.data.pipe(fs.createWriteStream(destPath));

      return new Promise((resolve, reject) => {
        response.data.on('end', () => {
          resolve();
        });

        response.data.on('error', (err) => {
          reject(err);
        });
      });
    }
  },
};
