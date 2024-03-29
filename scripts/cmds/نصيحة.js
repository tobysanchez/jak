module.exports = {
  config: {
    name: "نصيحه",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends a random phrase."
    },
    longDescription: {
      vi: "",
      en: "Sends a random phrase."
    },
    category: "fun",
    guide: {
      en: "{prefix}phrase"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const phrases = ["لا تتخذ قراراً وأنت غاضب.","حين تقول والدتك: «ستندم على فعل ذلك».. ستندم عليه غالباً","- لا تجادل شرطياً أبداً!!","فى الخلافات، تذكر ما إن تفقد أخلاقك فى التحدث والنقاش، فقد فقدت حقوقك.","انشر علمك، وعلم الناس من حولك فهذه الطريقة الوحيدة للخلود.","اختر زوجتك بعناية، لأنها مسؤولة عن %90 من سعادتك أو تعاستك.","تعلم كيف تستمع، فالفرص الخفية تحتاج لأذن قوية..!","توقف عن المماطلة في تحقيق أهدافك، لأنها عادة سيئة تجعلك تميل إ","توقف عن المماطلة في تحقيق أهدافك، لأنها عادة سيئة تجعلك تميل إلى الاسترخاء والمرح بدلًا من العمل الجاد.","تعلم كيف تستمع، فالفرص الخفية تحتاج لأذن قوية..!","حول هوايتك المفضلة إلى مهنة، لتحصل على المتعة أثناء جني المال.","اول تجاوز علاقاتك السابقة، وتعلم كيف تعالج كسور قلبك، من دون الكثير من الألم.","تعلم السيطرة على عواطفك، وفكر بطريقة أكثر عقلانية، حتى في المواقف الصعبة.","ابدأ الشعور بالمسؤولية تجاه تصرفاتك، والأشخاص المحيطين بك، لتصبح أكثر نضجًا.","اقض أوقاتاً أقل على وسائل التواصل الاجتماعي، وتواصل أكثر مع العالم الحقيقي.","تعلم أحد فنون الدفاع عن النفس لأنك قد تحتاجها يومًا في هذا العالم الخطر.","تذكر دائمًا المناسبات المهمة، لتؤكد للمقربين أنك تهتم بأمرهم.","حاول أن تصبح اجتماعيًا أكثر وتعلم العمل مع الجماعة.","حاول أن تصبح خلاقًا أكثر، لأن كل شيء في الحياة يحتاج لمسات من الإبداع.","حاول التعبير عن نفسك بشكل فني أكثر، لأن النشاطات الإبداعية تساعد على التخفيف من التوتر، وتبقي العقل متوقدًا.","ابدأ مواجهة مخاوفك، لأنها قد توقعك في العديد من المآزق.","ابدأ كتابة رواية أو كتاب، أو مجلة، وقد تفاجأ بكمية القصص المهمة التي يمكنك أن ترويها.","حاول العثور على المزيد من الناس المهمين الذين قد يمنحونك الإلهام.","حاول أن تصبح أكثر تنظيمًا، لأن الفوضى تؤثر على إنتاجيتك.","تعلم كيف تصبح أكثر أناقة في ارتداء ملابسك، لأن ذلك يجعلك أكثر ثقة بنفسك.","اقض المزيد من الوقت مع الأشخاص الذين تهتم لأمرهم، لأن اللحظات السعيدة لا تعود.","تعلم لغة جديدة، لتحسين مهاراتك في التواصل","تطوع في المنظمات الخيرية، لتكون عنصرًا فعالًا في المجتمع.","تعلم مهارات مفيدة، أو مارس هوايات ممتعة","تعلم التخلي عن الضغينة، فالغفران وسيلة أكثر صحية للتعامل مع القضايا.","تبنَّ حيوانًا أليفًا، لأنه يساعدك على تعلم تحمل المسؤولية.","نظم وقتك بشكل أفضل، لتنجز مهامًا أكثر.","نظم وقتك بشكل أفضل، لتنجز مهامًا","راجع طبيبك مرات أكثر، لتجنب المفاجآت الصحية","حاول إجراء بعض التغييرات في نمط حياتك، وأعد برمجة نفسك.","توقف عن التأخر عن مواعيدك، وتعلم الالتزام، لأنه دلالة كبيرة على أنك أهل للثقة.","تعلم كيف تكون أكثر استقلالية، واعتمادًا على الذات.","توقف عن المماطلة في تحقيق أهدافك، لأنها عادة سيئة تجعلك تميل إلى الاسترخاء والمرح بدلًا من العمل الجاد.","حاول إيجاد وسيلة لتحسين تركيزك ومهاراتك العقلية، كالتأمل، لأنه يساعد على السيطرة على حالاتك المزاجية.","حاول إيجاد وسيلة لتحسين تركيزك ومهاراتك العقلية، كالتأمل، لأنه يساعد على السيطرة على حالاتك المزاجية.","تغلب على الخجل وابدأ التعرف على أشخاص جدد، لأنهم قد يكونون مفيدين من الناحية الاجتماعية والمهنية.","حاول ممارسة العديد من الأنشطة التي تجنبك الجلوس طيلة الوقت في المنزل.","عزز ثقتك بنفسك أكثر واغتنم الفرص.","حاول أن تتحكم بشعورك بالقلق، لأنه أكثر سبب مدمر للعلاقات.","تعلم أن تكون أكثر سعادة بكل تفاصيل حياتك، ولا تسمح للمشاكل بسحبك للقاع","حاول العثور على المزيد من الناس المهمين الذين قد يمنحونك الإلهام.","تعلم كيف تكون أكثر استقلالية، واعتمادًا على الذات."
       ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];

    message.reply({
      body: phrase, 
    });
  }
};
