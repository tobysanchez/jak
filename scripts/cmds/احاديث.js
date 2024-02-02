const axios = require("axios");

module.exports = {
  config: {
    name: "أحاديث",
    version: "1.0",
    author: "rulex-al/loufi",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "أحاديث إسلامية",
    },
    longDescription: {
      en: "احاديث بمختلف اللغات en ar bn.",
    },
    category: "إسلاميات",
    guide: {
      en: " ",
    },
  },

  onStart: async function ({ api, event, args, message }) {
    
    const apiUrl = `https://api.simsimipro.xyz/v1/hadith/bukhari`;
    const response = await axios.get(apiUrl);
    const arabicHadith = response.data.arabicHadith;
      api.sendMessage("الحديث:\n" + arabicHadith, event.threadID, event.messageID);
      
    }
    }