module.exports = {
    config: {
        name: "salam",
		      version: "1.0",
	       	author: "LшьFп",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "",
    },
	onStart: async function (){},
	onChat: async function ({ event , message}) {

let saved = ["وعليكم", "وعليكم السلام", "عليكم السلام والرحمه",]

if (event.body && event.body.toLowerCase() == "سلام عليكم") return message.reply(saved[Math.floor(Math.random()*saved.length)]);
    if (event.body && event.body.toLowerCase() == "السلام عليكم") return message.reply(saved[Math.floor(Math.random()*saved.length)]);
    if (event.body && event.body.toLowerCase() == "ما اسمك") return message.reply(saved[Math.floor(Math.random()*saved.length)]);
}
};