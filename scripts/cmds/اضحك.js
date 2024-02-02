module.exports = {
  config: {
    name: "قائمة",
    version: "1.0",
    author: "Samir B. Thakuri",
    countDown: 5,
    role: 1,
    shortDescription: {
      vi: "Hiển thị danh sách các nhóm",
      en: "عرض قائمة المواضيع",
    },
    longDescription: {
      vi: "Module này được sử dụng để hiển thị danh sách tất cả các nhóm đang có trên hệ thống.",
      en: "تُستخدم هذه الوحدة لعرض قائمة بجميع المواضيع الموجودة حاليًا على النظام.",
    },
    category: "box chat",
    guide: {
      en: "   {pn}",
    },
  },

  onStart: async function ({ message, api, event, args, threadsData }) {
  try {
    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    let messageToSend = "قائمة المواضيع:\n";
    for (let i = 0; i < threadList.length; i++) {
      const thread = threadList[i];
      messageToSend += `[${i + 1}] ${thread.name} => ${thread.threadID}\n`;
    }
    api.sendMessage(messageToSend, event.threadID);
  } catch (error) {
    console.error("خطأ في استرداد بيانات الموضوع:", error);
  }
},

};
