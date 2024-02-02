const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "ضرب",
        aliases: ["تدمير"],
        version: "1.0",
        author: "zach",
        countDown: 5,
        role: 0,
        shortDescription: "ضرب 🌝 للذكور فقط",
        longDescription: "",
        category: "تسلية",
        guide: ""
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("تاغ بليز 🌝");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "ودع بيضك 😂", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "إنكسرت بيوضك 🙂💔", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "abcd.png"
    let img = await jimp.read("https://imgur.com/qzvtLVd.png")

    img.resize(1080, 1320).composite(avone.resize(170, 170), 200, 320).composite(avtwo.resize(170, 170), 610, 70);

    await img.writeAsync(pth)
    return pth
}