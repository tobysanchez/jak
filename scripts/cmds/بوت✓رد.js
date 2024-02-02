module.exports = {
    config: {
        name: "رد1",
        version: "1.1",
        author: "XyryllPanget",
        countDown: 5,
        role: 0,
        shortDescription: "تجاهل هذا الأمر",
        longDescription: "تجاهل هذا الأمر",
        category: "ردود",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "وولف") return message.reply("موجود 🗿");

  if (event.body && event.body.toLowerCase() == "سيم") return message.reply("من تطوير لوفي 🌝 لا تسب 😠\n ما يفهم إيموجيز 😂");
  
  if (event.body && event.body.toLowerCase() == "مطور") return message.reply("أكتب الإصدار كي تعرف 😐❤️");
}
};