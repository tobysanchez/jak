const axios = require('axios');
const fs = require('fs');
const path = require('path'); 

module.exports = {
  config: {
    name: "bard",
    aliases: ["googlebard"],
    version: "1.0",
    author: "Fixed API again by Kido Lentiko",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "An artificial intelligence google bard"
    },
    longDescription: {
      en: "An artificial intelligence google bard"
    },
    category: "ai",
    guide: {
      en: "{p}bard <prompt>"
    }
  },
  onStart: async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const query = event.body.slice(5).trim();
    let d = ""; 

    if (event.type == "message_reply") {
      d = event.messageReply.attachments[0]?.url;
    } 

    console.log(d); 

    let queryFromImage = "";
    if (d) {
      const rest = await axios.get(`https://chardsbot-api.joshuag06.repl.co/imgur?link=${encodeURIComponent(d)}`);
      const imgs = rest.data.uploaded.image; 

      const resttext = await axios.get(`https://image-to-text.joshuag06.repl.co/img2text?imageurl=${encodeURIComponent(imgs)}`);
      queryFromImage = resttext.data.text;
    } 

    const combinedQuery = query || queryFromImage; 

    if (!combinedQuery) {
      api.sendMessage("Enter a prompt first", threadID, messageID);
      return;
    } 

    try {
      const response = await axios.get(`https://chards-test-api.joshuag06.repl.co/bard?text=${encodeURIComponent(combinedQuery)}`);
      const { content, images } = response.data.newResponse; 

      if (content && content.length > 0) {
        if (!fs.existsSync("cache")) {
          fs.mkdirSync("cache");
        } 

        const attachments = [];
        for (let i = 0; i < images.length; i++) {
          const imagePath = `cache/test${i + 1}.png`; 

          try {
            const imageResponse = await axios.get(images[i].url, { responseType: "arraybuffer" });
            fs.writeFileSync(imagePath, imageResponse.data);
            attachments.push(fs.createReadStream(imagePath));
          } catch (error) {
            console.error("حدث خطأ أثناء عملية تنزيل الصورة وحفظها. نعتذر عن الإزعاج.", error);
          }
        } 

        api.sendMessage({ attachment: attachments, body: content }, threadID, messageID);
      } else {
        api.sendMessage(content, threadID, messageID);
      }
    } catch (error) {
      console.error("حدث خطأ أثناء محاولة جلب البيانات من Bard API. نأسف للإزعاج وسنعمل على حل المشكلة في أقرب وقت ممكن.", error);
      api.sendMessage("نأسف لإبلاغك بفشل محاولة جلب البيانات من واجهة برمجة التطبيقات. نأسف للإزعاج وسنعالج المشكلة على الفور.", threadID, messageID);
    }
  }
    }