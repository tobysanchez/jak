const axios = require('axios');

module.exports = {
  config: {
    name: "جوجل",
    aliases: ["search", "g"],
    version: "2.0",
    author: "Shinpei",
    role: 0,
    shortDescription: {
      en: "البحث في جوجل عن مواضيع"
    },
    longDescription: {
      en: "يبحث هذا الأمر في Google عن استعلام معين ويعرض أفضل 5 نتائج."
    },
    category: "utility",
    guide: {
      en: "لإستخدام هذا الامر أكتب: جوجل <الموضوع> سوف يضهر لك افضل 5 نتائج"
    }
  },
  onStart: async function ({ api, event, args }) {
    const query = args.join(' ');
    if (!query) {
      api.sendMessage("يرجى كتابة موضوع البحث.", event.threadID);
      return;
    }
    
    const cx = "7514b16a62add47ae";
    const apiKey = "AIzaSyAqBaaYWktE14aDwDE8prVIbCH88zni12E";
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;
    try {
      const response = await axios.get(url);
      const searchResults = response.data.items.slice(0, 5);
      let message = `تم إيجاد 5 نتائج لـ '${query}':\n`;
      searchResults.forEach((result, index) => {
        message += `${index + 1}. ${result.title}\n${result.link}\n`;
      });
      api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("حدث خطأ أثناء البحث في Google.", event.threadID);
    }
  }
};