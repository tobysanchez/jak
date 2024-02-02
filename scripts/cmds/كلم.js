module.exports = {
  config: {
    name: "كلم",
    aliases: ["anonymous"],
    version: "1.0",
    author: "artherMO",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "كلم المستخدم بالايدي"
    },
    longDescription: {
      en: "Send anonymous message using thread or user ID"
    },
    category: "box chat",
    guide:{
      en: "{p}anon id text"
    }
  },
  onStart: async function ({ api, event, args }) {
    if (args.length < 2) {
      return api.sendMessage(
        "Syntax error, use: anon ID_BOX [message]",
        event.threadID,
        event.messageID
      );
    }

    const idBox = args[0];
    const message = args.slice(1).join(" ");

    api.sendMessage({
      body: message,
      mentions: [{
        tag: "@anon",
        id: event.senderID
      }]
    }, idBox, () => {
      api.sendMessage(
        `الرسالة المرسلة "${message}" الى ${idBox} مجهول`,
        event.threadID
      );
    });
  }
};