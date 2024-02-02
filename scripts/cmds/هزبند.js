module.exports = {
  config: {
    name: "هزبند",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends a random cosplay image."
    },
    longDescription: {
      vi: "",
      en: "Sends a random cosplay image."
    },
    category: "fun",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const links = [      "https://i.imgur.com/rzEdDnJ.jpg",      "https://i.imgur.com/o79KFAX.jpg",      "https://i.imgur.com/Q41cf5H.jpg",      "https://i.imgur.com/fJnc4iZ.jpg",      "https://i.imgur.com/NyPaQ7t.jpg",      "https://i.imgur.com/7T2L2my.jpg",      "https://i.imgur.com/4QK9Qy2.jpg",      "https://i.imgur.com/SI8d4TU.jpg",      "https://i.imgur.com/o25oZ16.jpg",      "https://i.imgur.com/U4BrgSK.jpg",      "https://i.imgur.com/i8cMBW2.jpg",      "https://i.imgur.com/cmb6ubS.jpg",      "https://i.imgur.com/Dqpui42.jpg",      "https://i.imgur.com/Y90BLzr.jpg",      "https://i.imgur.com/VjuUbba.jpg",      "https://i.imgur.com/QT7uKiy.jpg",      "https://i.imgur.com/CVQdxAX.jpg",      "https://i.imgur.com/QKQYUsx.jpg",      "https://i.imgur.com/IB29l19.jpg",      "https://i.imgur.com/k5dNPhc.jpg",      "https://i.imgur.com/haa1XJ7.jpg",      "https://i.imgur.com/AVeISTj.jpg",      "https://i.imgur.com/KDkkxVP.jpg",      "https://i.imgur.com/hLVgS6l.jpg",      "https://i.imgur.com/hXNJatS.jpg",      "https://i.imgur.com/UzXsSSp.jpg",      "https://i.imgur.com/we2iAQ7.jpg",      "https://i.imgur.com/JuqU7AS.jpg",      "https://i.imgur.com/vn3vNsi.jpg",      "https://i.imgur.com/aV4WVsq.jpg"    ];
    const link = links[Math.floor(Math.random() * links.length)];

    message.reply({
      body: '「 ❤️ 」', 
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
