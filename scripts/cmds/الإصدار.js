module.exports = {
    config: {
        name: "إصدار",
        version: "1.1",
        author: "لوفي",
        countDown: 5,
        role: 2,
        shortDescription: "أكتب الإصدار دون رمز 🙂",
        longDescription: "تجاهل هذا الأمر",
        category: "ردود",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ها بوت") return message.reply("أنا موجود ✓");

  if (event.body && event.body.toLowerCase() == "الإصدار") return message.reply("المطور:Løü Fï ✅\n نسخة البوت تجرييبة ❤️\nإصدار 3.0.0✅\nمميزات الإصدار الجديد:\n-تشغيل و إيقاف البوت في المجموعة بسلاسة\n-تقدر تخليه يعمل بدون رمز أكتب البوت تشغيل أو بوت إيقاف ❤️\nتحديث البوت في يوم : 21/02/2023❤️");
}
};