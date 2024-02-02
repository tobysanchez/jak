module.exports = {
  config: {
    name: "تنضيف",
    version: "1.0",
    author: "YourName",
    role: 2,
    shortDescription: {
      en: "Clears the group database",
      vi: "Xóa cơ sở dữ liệu nhóm"
    },
    longDescription: {
      en: "This command clears the database of all groups.",
      vi: "Lệnh này xóa cơ sở dữ liệu của tất cả các nhóm."
    },
    category: "Admin"
  },

  async onStart({ threadsData, api, message }) {
    try {
      // Retrieve all threads
      const allThreads = await threadsData.getAll();

      // Perform the necessary actions to clear the group database
      for (const thread of allThreads) {
        try {
          await threadsData.remove(thread.threadID);
        } catch (error) {
          console.error(`Failed to remove thread ${thread.threadID}: ${error}`);
        }
      }

      console.log("تم مسح قاعدة بيانات المجموعة بنجاح.");
      api.sendMessage("تم مسح قاعدة بيانات المجموعة بنجاح.", message.threadID);
    } catch (error) {
      console.error("حدث خطأ أثناء مسح قاعدة بيانات المجموعة:", error);
      api.sendMessage("حدث خطأ أثناء مسح قاعدة بيانات المجموعة. الرجاء معاودة المحاولة في وقت لاحق.", message.threadID);
    }
  }
};
