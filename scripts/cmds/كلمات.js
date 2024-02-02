const axios = require("axios");

module.exports = {
  config: {
    name: "كلمات",
    version: "1.0",
    author: "rulex-al/loufi",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get lyrics for a song",
    },
    longDescription: {
      en: "This command allows you to get the lyrics for a song. Usage: !lyrics <song name>",
    },
    category: "music",
    guide: {
      en: "{prefix}lyrics <song name>",
    },
  },

  onStart: async function ({ api, event, args }) {
    const songName = args.join(" ");
    if (!songName) {
      api.sendMessage("Please provide a song name!", event.threadID, event.messageID);
      return;
    }

    const apiUrl = `https://api.foxzihel2.repl.co/lyrics?title=${songName}`;
    try {
      const response = await axios.get(apiUrl);
      const lyrics = response.data.lyrics;
      const img = apiUrl.img;
      if (!lyrics) {
        api.sendMessage("Sorry, lyrics not found!", event.threadID, event.messageID);
        return;
      }
      api.sendMessage(lyrics, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("Sorry, there was an error getting the lyrics!", event.threadID, event.messageID);
    }
  },
};