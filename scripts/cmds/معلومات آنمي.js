const axios = require('axios');
const moment = require('moment-timezone');

const Timezone = 'Asia/Kathmandu'; // change here
const API_URL = `https://anisched--marok85067.repl.co/?timezone=${Timezone}`;

module.exports = {
  config: {
    name: 'إصدار_آنمي',
    aliases: ['ريلوز', 'newepisode'],
    version: '7.0',
    author: 'JV Barcenas',
    role: 0,
    category: 'utility',
    shortDescription: {
      en: 'يشارك أحدث إصدارات الأنمي.'
    },
    longDescription: {
      en: 'يشارك أحدث إصدارات الآنمي التي تم جلبها من واجهة برمجة التطبيقات.'
    },
    guide: {
      en: '{pn}'
    }
  },

  onStart: async function ({ api, event }) {
    try {
      const response = await axios.get(API_URL);

      if (response.status !== 200 || !response.data || !Array.isArray(response.data)) {
        throw new Error('استجابة غير صالحة أو مفقودة من واجهة برمجة التطبيقات');
      }

      const releases = response.data;
      const currentTime = moment().tz(Timezone);

      let upcomingAnime = [];
      let updatedAnime = [];

      for (const release of releases) {
        if (!release.animeTitle || !release.episode || !release.time || !release.status) {
          throw new Error('بيانات غير صالحة أو مفقودة في الاستجابة من واجهة برمجة التطبيقات');
        }

        const releaseDateTime = moment(release.time, 'h:mma', Timezone);
        const releaseTime = moment(releaseDateTime).tz(Timezone);

        if (release.status === 'upcoming') {
          upcomingAnime.push(release);
        } else if (release.status === 'already updated') {
          updatedAnime.push(release);
        }
      }

      let message = 'الوقت الحالي: ' + currentTime.format('h:mma') + '\n\n';

      if (upcomingAnime.length > 0) {
        message += '≡⊆ 𝐀𝐍𝐈𝐌𝐄 𝐔𝐏𝐂𝐎𝐌𝐈𝐍𝐆 𝐓𝐇𝐈𝐒 𝐅𝐄𝐖 𝐇𝐎𝐔𝐑𝐒 ⊇≡\n\n';
        upcomingAnime.sort((a, b) => moment(a.time, 'h:mma').diff(moment(b.time, 'h:mma')));
        for (const anime of upcomingAnime) {
          message += `آنمي: ${anime.animeTitle}\nحلقة: ${anime.episode}\nالحلقة: ${anime.time}\n\n`;
        }
      }
      
      if (updatedAnime.length > 0) {
        message += '≡⊆ 𝐀𝐍𝐈𝐌𝐄 𝐀𝐋𝐑𝐄𝐀𝐃𝐘 𝐔𝐏𝐃𝐀𝐓𝐄𝐃 ⊇≡\n\n';
        updatedAnime.sort((a, b) => moment(a.time, 'h:mma').diff(moment(b.time, 'h:mma')));
        for (const anime of updatedAnime) {
          message += `آنمي: ${anime.animeTitle}\nحلقة: ${anime.episode}\nحلقة: ${anime.time}\n\n`;
        }
      }

      if (message === 'الوقت الحالي: ' + currentTime.format('h:mma') + '\n\n') {
        message += 'لا توجد إصدارات أنيمي لهذا اليوم';
      }

      const messageID = await api.sendMessage(message.trim(), event.threadID);
      console.log(`إصدارات أنيمي المرسلة مع معرف الرسالة ${messageID}`);
    } catch (error) {
      console.error(`فشل في إرسال إصدارات animé: ${error.message}`);
      api.sendMessage(
        'عذرًا ، حدث خطأ ما أثناء محاولة مشاركة أحدث إصدارات الآنمي. الرجاء معاودة المحاولة في وقت لاحق',
        event.threadID
      );
    }
  }
};
