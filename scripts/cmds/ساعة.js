module.exports = {
  config: {
    name: "الساعة",
    version: "1.0",
    author: "rulex-al/LøüFï",
    countDown: 5,
    role: 2,
    category: "معلومات"
  },
  onStart: async function ({ event, message }) {
    const moment = require('moment-timezone');

    // Send the current time when someone says "الساعة"
    if (event.body === "الساعه") {
      var now = moment().tz('Africa/Algiers');
      var hours = now.hours();
      var minutes = now.minutes();
      message.reply(`الوقت الان في تونس  ${hours}:${minutes} 😳🤍`);
    }

    // Send a greeting message at specific times
    setInterval(function() {
      var now = moment().tz('Africa/Algiers');
      var hours = now.hours();
      var minutes = now.minutes();
      var content = "";

      if (hours === 8 && minutes === 0) {
        content = "صباح الخير!";
      } else if (hours === 12 && minutes === 0) {
        content = "افطار جيد للجميع!";
      } else if (hours === 18 && minutes === 0) {
        content = "مساء الخير!";
      } else if (hours === 21 && minutes === 0) {
        content = "ليلة سعيدة!";
      } else if (hours === 19 && minutes === 0) {
        content = "إقترب الأذان 😅🤍";
      } else if (hours === 17 && minutes === 25) {
        content = "إنها الساعة 17 25 إقترب الأذان 🙂🤍";
      }

      if (content) {
        message.send(content);
      }
    }, 60000);
  }
};