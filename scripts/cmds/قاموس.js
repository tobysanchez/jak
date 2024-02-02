const axios = require('axios');

module.exports = {
  config: {
    name: 'قاموس',
    aliases: ['dic', 'what is'],
    version: '1.0',
    author: 'JV',
    role: 0,
    category: 'utility',
    shortDescription: {
      en: 'Explain the word by dictionary.'
    },
    longDescription: {
      en: 'Explain the word by dictionary.'
    },
    guide: {
      en: '{pn}'
    }
  },
  onStart: async function ({ api, event, args }) {
    try {
      const word = args.join(' ').toLowerCase();
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

      const wordResponse = await axios.get(url);

      if (wordResponse.status !== 200 || !wordResponse.data || !wordResponse.data[0]) {
        throw new Error('استجابة غير صالحة أو مفقودة من WordApi');
      }

      const definition = wordResponse.data[0].meanings[0].definitions[0].definition;

      const message = `هذا هو تعريف ${word}: \n\n${definition}`;

      const resultMessageID = await api.sendMessage(message, event.threadID);

      if (!resultMessageID) {
        throw new Error('فشل في إرسال رسالة النتيجة');
      }

      console.log(`رسالة النتيجة المرسلة بالمعرف ${resultMessageID}`);
    } catch (error) {
      console.error(`فشل البحث عن كلمة: ${error.message}`);
      api.sendMessage('عذرًا ، حدث خطأ ما أثناء محاولة البحث عن الكلمة. الرجاء معاودة المحاولة في وقت لاحق.', event.threadID);
    }
  }
};
          