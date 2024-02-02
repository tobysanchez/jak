const axios = require('axios');

module.exports = {
  config: {
    name: 'صور_جوجل',
    aliases: ['imgsearch'],
    version: '1.1',
    author: 'razihelX',
    role: 0,
    category: 'utility',
    shortDescription: {
      en: 'يبحث عن صور في جوجل .'
    },
    longDescription: {
      en: 'بحث في جوجل عن صور معينة ويعرض قائمة بنتائج الصور.'
    },
    guide: {
      en: '{pn}<query>'
    }
  },
  onStart: async function ({ api, event, args, message }) {
    
    const query = args.join(' ');
    if (!query) return message.reply(`يرجى كتابة محتوى البحث`);

    const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        q: query,
        searchType: 'image',
        key: 'AIzaSyDNtLIGWG8W0augJcEm_lfBZndZ3YmVIuI',
        cx: 'c5b8108dd2da64b29'
      }
    });

    const imageURLs = response.data.items.map(item => item.link);

    const streams = await Promise.all(imageURLs.map(url => global.utils.getStreamFromURL(url)));

  // api.sendMessage(`Results for "${query}":`, event.threadID);

    api.sendMessage({
      body: `نتائج البحث لـ: ${query}`, 
      attachment: streams
    }, event.threadID, event.messageID);
  }
};