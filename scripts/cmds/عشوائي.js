const axios = require('axios');
const request = require('request');
const fs = require('fs');

module.exports = {
  config: {
    name: 'هنتاي',
    aliases: ['animepic'],
    version: '1.0',
    author: 'Shinpei',
    countDown: 5,
    role: 0,
    shortDescription: {
      en: 'الحصول على صورة انمي عشوائية'
    },
    longDescription: {
      en: 'الحصول على صورة انمي عشوائية'
    },
    category: 'Anime',
    guide: {
      en: '{p}imganime'
    }
  },
  onStart: async function ({ api, event }) {
    try {
      const response = await axios.get('https://anime.ocvat2810.repl.co/');
      const ext = response.data.data.substring(response.data.data.lastIndexOf('.') + 1);
      const callback = () => {
        api.sendMessage({
          attachment: fs.createReadStream(`${__dirname}/tmp/anime.${ext}`)
        }, event.threadID, () => fs.unlinkSync(`${__dirname}/tmp/anime.${ext}`));
      };
      request(response.data.data).pipe(fs.createWriteStream(`${__dirname}/tmp/anime.${ext}`)).on('close', callback);
    } catch (error) {
      console.error(error);
      api.sendMessage('آسف ، حدث خطأ ما أثناء إحضار صورة الأنمي.', event.threadID);
    }
  }
};