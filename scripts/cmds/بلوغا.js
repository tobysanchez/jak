module.exports = {
 config: {
 name: "قطة",
 version: "1.0",
 author: "Samir",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "قطة") {
 return message.reply({
 body: "ان قطتك تموء 🐱",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/5ZMQzkl.jpg")
 });
 }
 }
     }