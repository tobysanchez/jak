const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "مسح",
    author: "rulex-al",
    version: "1.0",
    role: 2,
    description: "حذف اوامر",
    usage: "حذف <اسم الملف>",
    category: "المطور"
  },

  onStart: async function ({ args, message }) {
    const commandName = args[0];

    if (!commandName) {
      return message.reply("استعمل الامر و أدخل اسم ملف الامر");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`تم حذف ملف امر ${commandName} .`);
      } else {
        message.reply(`ملف امر ${commandName} غير موجود.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`لا يمكن حذفه بسبب ${commandName}: ${err.message}`);
    }
  }
};