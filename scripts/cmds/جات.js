const axios = require('axios');

module.exports = {
  config: {
    name: "gpt2",
    aliases: [],
    version: "1.0",
    author: "Bhuban",//u can change
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: ""
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "AI"
  },
  onStart: async function ({ message, event, args, commandName, usersData }) {
    const apikey = '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';
    const bot = 'chiyoko';
    const creator = 'Bhuban';
    const act = '😈';
//modify this to yours
    const userData = await usersData.get(event.senderID);
    const name = userData.name;
    const id = event.senderID;
    const prompt = encodeURIComponent(args.join(" "));

    if (args[0] === "reset") {
      try {
        await axios.get(`https://api-test.yourboss12.repl.co/api/others/gpt/reset?id=${id}`);
        message.reply("Conversation reset successfully");
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      try {
        const response = await axios.get(`https://api-test.yourboss12.repl.co/api/others/gpt/jb?prompt=${prompt}&id=${id}&apikey=${apikey}&name=${encodeURIComponent(name)}&char=${bot}&namee=${encodeURIComponent(creator)}&act=${act}`);

        message.reply({
          body: `${response.data.content}`
        }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID
          });
        });
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  },
  onReply: async function ({ message, event, Reply, args }) {

    let { author, commandName, messageID } = Reply;

    if (event.senderID != author) {
      return;
    }

    const apikey = 'sk-xxxxx';
    const id = author;
    const prompt = encodeURIComponent(args.join(" "));

    try {
      const response = await axios.get(`https://api-test.yourboss12.repl.co/api/others/gpt/jb?prompt=${prompt}&id=${id}&apikey=${apikey}&act=😈`);

      message.reply({
        body: `${response.data.content}`
      }, (err, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName,
          messageID: info.messageID,
          author: event.senderID
        });
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};