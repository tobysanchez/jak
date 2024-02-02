module.exports = {
  config: {
    name: "اوبتايم",
    aliases: ["up", "upt"],
    version: "1.0",
    author: "Shinpei",
    role: 0,
    shortDescription: {
      en: "يعرض وقت تشغيل الروبوت."
    },
    longDescription: {
      en: "يعرض مقدار الوقت الذي قضاه الروبوت قيد التشغيل."
    },
    category: "System",
    guide: {
      en: "استخدم {p} وقت التشغيل لعرض وقت تشغيل الروبوت."
    }
  },
  onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours} ساعات ${minutes} دقائق ${seconds} ثواني`;
    api.sendMessage(`مرحبا تم تشغيل البوت لمده ${uptimeString}.`, event.threadID);
  }
};