const axios = require("axios");

module.exports = {
 config: {
  name: "استخراج_كلمات",
  version: "1.1",
  author: "MILAN",
  countDown: 10,
  role: 0,
  shortDescription: {
    vi: "Lệnh `ocr` cho phép bạn trích xuất văn bản từ hình ảnh.",
    en: "The `ocr` command allows you to extract text from images."
  },
  longDescription: {
    vi: "Lệnh `ocr` cho phép bạn trích xuất văn bản từ hình ảnh. Chỉ cần trả lời một hình ảnh hoặc dán liên kết hình ảnh và lệnh sẽ sử dụng nhận dạng ký tự quang học (OCR) để nhận dạng và trích xuất văn bản từ hình ảnh. Văn bản trích xuất sẽ được gửi lại dưới dạng trả lời tin nhắn của bạn.",
    en: "يسمح لك الأمر `ocr` باستخراج النص من الصور. ما عليك سوى الرد على صورة أو لصق رابط الصورة ، وسيستخدم الأمر التعرف الضوئي على الأحرف (OCR) للتعرف على النص واستخراجه من الصورة. سيتم إرسال النص المستخرج كرد على رسالتك"
  },
  category: "tools",
  guide: {
    vi: "{pn} trả lời một hình ảnh",
    en: "{pn} reply to an image"
  }
 },

 onStart: async function({ event, api }) {
  try {
    const axios = require('axios');
    const link = event.messageReply.attachments[0].url || args.join(" ");
    if(!link) return api.sendMessage('الرجاء الرد على الصورة التي تريد استخراج النص منها', event.threadID, event.messageID);
    const res = await axios.get(`https://milanbhandari.imageapi.repl.co/imgur?link=${encodeURIComponent(link)}`); 
    const imageUrl = res.data.image;
    const response = await axios.get(`https://milanbhandari.imageapi.repl.co/ocr?url=${res.data.image}`);
    api.sendMessage(`${response.data.text}`, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage("حدث خطأ أثناء إجراء OCR.", event.threadID);
  }
 }
};