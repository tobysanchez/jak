const axios = require('axios');

module.exports = {
  config: {
    name: "اسئلة",
    aliases: ['mcq', 'mcqs'],
    version: "1.0",
    author: "Samir Thakuri",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "تلعب لعبة مسابقة"
    },
    longDescription: {
      en: "العب لعبة مسابقة مع Chat Bot"
    },
    category: "game",
    guide: {
      en: "{pn}"
    }
  },

  onReply: async function ({ args, event, api, Reply, commandName, usersData }) {
    const { dataGame, answer, nameUser } = Reply;
    if (event.senderID !== Reply.author) return;

    switch (Reply.type) {
      case "reply": {
        const userReply = event.body.toLowerCase();

        if (userReply === answer.toLowerCase()) {
          api.unsendMessage(Reply.messageID).catch(console.error);
          const rewardCoins = 720;
          const rewardExp = 20; 
          const senderID = event.senderID;
          const userData = await usersData.get(senderID);
          await usersData.set(senderID, {
            money: userData.money + rewardCoins,
            exp: userData.exp + rewardExp,
            data: userData.data
          });
          const msg = {
            body: `✅ ${nameUser}, لقد أجبت بشكل صحيح وتلقيت ${rewardCoins} عملات🪙 معدنية و ${rewardExp} إكسب كمكافأة ..`
          };
          return api.sendMessage(msg, event.threadID, event.messageID);
        } else {
          api.unsendMessage(Reply.messageID);
          const msg = `${nameUser}, الجواب خاطئ !!\nالإجابة الصحيحة هي: ${answer}`;
          return api.sendMessage(msg, event.threadID);
        }
      }
    }
  },

  onStart: async function ({ api, event, usersData, commandName }) {
    const { threadID, messageID } = event;
    const timeout = 60;

    try {
      const response = await axios.get('https://samirthakuri.restfulapi.repl.co/quiz?apikey=notsopreety');
      const quizData = response.data;
      const samir = response.data;
      const { question, answer } = quizData;
      const { A, B, C, D } = samir;
      const namePlayerReact = await usersData.getName(event.senderID);

      const msg = {
        body: `${question} \n\n[A] ${A} \n[B] ${B}\n[C] ${C}\n[D] ${D}\n\nالرد بالإجابة`,
      };

      api.sendMessage(msg, threadID, async (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          type: "reply",
          commandName,
          author: event.senderID,
          messageID: info.messageID,
          dataGame: quizData,
          answer,
          nameUser: namePlayerReact
        });

        setTimeout(function () {
          api.unsendMessage(info.messageID);
        }, timeout * 1000);
      });
    } catch (error) {
      console.error("حدث خطأ:", error);
    }
  }
};