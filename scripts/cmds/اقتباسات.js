module.exports = {
  config: {
    name: "اقتباسات",
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
    const links = [ "https://i.imgur.com/FmQQ9GV.jpg",
    "https://i.imgur.com/NjCQ8nx.jpg",
  "https://i.imgur.com/rukQB5i.jpg",
  "https://i.imgur.com/J5n2Xs8.jpg",
  "https://i.imgur.com/tNCynEs.jpg",
  "https://i.imgur.com/2mO34NQ.jpg",
  "https://i.imgur.com/fpBHeLj.jpg",
  "https://i.imgur.com/iQU8ckG.jpg",
"https://i.ibb.co/mbn8ms1/xva213.jpg",
"https://i.ibb.co/G3GT5Z1/xva213.jpg",
"https://i.ibb.co/ssmfDnj/xva213.jpg",
"https://i.ibb.co/RSDZkFq/xva213.jpg",
"https://i.ibb.co/TvdTjqc/xva213.jpg",
"https://i.ibb.co/BNbXbZK/xva213.jpg",
"https://i.ibb.co/BftvdcW/xva213.jpg",
"https://i.ibb.co/NTP7vrf/xva213.jpg",
"https://i.ibb.co/hV7dSSw/xva213.jpg",
"https://i.ibb.co/hs3bgZb/xva213.jpg",
"https://i.ibb.co/kM5rW35/xva213.jpg",
"https://i.ibb.co/ZhY29kh/xva213.jpg",
"https://i.ibb.co/2ZzL3WJ/xva213.jpg",
"https://i.ibb.co/9tc2Dhd/xva213.jpg",
"https://i.ibb.co/Ld12Sgq/xva213.jpg",
"https://i.ibb.co/QPwFL5N/xva213.jpg",
"https://i.ibb.co/Db8CHQk/xva213.jpg",
"https://i.ibb.co/qsPGb3y/xva213.jpg",
"https://i.ibb.co/DMTW0NP/xva213.jpg",
"https://i.ibb.co/kXKr0wq/xva213.jpg",
"https://i.ibb.co/cFBwhL5/xva213.jpg",
"https://i.ibb.co/0K8j5yy/xva213.jpg",
"https://i.ibb.co/Jv0jHKs/xva213.jpg",
"https://i.ibb.co/G7yqjyw/xva213.jpg",
"https://i.ibb.co/gZ1FXSF/xva213.jpg",
"https://i.ibb.co/8zD8f5C/xva213.jpg",
"https://i.ibb.co/SmwtTxw/xva213.jpg",
"https://i.ibb.co/1z2NBFg/xva213.jpg",
"https://i.ibb.co/s56CXRJ/xva213.jpg",
"https://i.ibb.co/42419n7/xva213.jpg",
"https://i.ibb.co/Jv5Y9GL/xva213.jpg",
"https://i.ibb.co/TbndDV6/xva213.jpg",
"https://i.ibb.co/FDZmBpW/xva213.jpg",
"https://i.ibb.co/VVZHnp2/xva213.jpg",
"https://i.ibb.co/MBWFcNW/xva213.jpg",
"https://i.ibb.co/Fh1WkSS/xva213.jpg",
"https://i.ibb.co/X5DkW36/xva213.jpg",
"https://i.ibb.co/FsJPGFT/xva213.jpg", ];
    const link = links[Math.floor(Math.random() * links.length)];

    message.reply({
      body: '「 ❤️ 」', 
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
