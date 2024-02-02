module.exports = {
	config: {
		name: "سب",
		version: "1.0",
		author: "Ayman",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Nhận quà hàng ngày",
			en: "الحصول على جوائز يوميه"
		},
		longDescription: {
			vi: "Nhận quà hàng ngày",
			en: "Receive daily gift"
		},
		category: "game",
		guide: {
			vi: "   {pn}: Nhận quà hàng ngày"
				+ "\n   {pn} info: Xem thông tin quà hàng ngày",
			en: "   {pn}"
				+ "\n   {pn} info: View daily gift information"
		},
		envConfig: {
			rewardFirstDay: {
				coin: 100,
				exp: 20,
			}
		}
	},

	langs: {
		vi: {
			monday: "Thứ 2",
			tuesday: "Thứ 3",
			wednesday: "Thứ 4",
			thursday: "Thứ 5",
			friday: "Thứ 6",
			saturday: "Thứ 7",
			sunday: "Chủ nhật",
			alreadyReceived: "Bạn đã nhận quà rồi",
			received: "Bạn đã nhận được %1 coin và %2 exp"
		},
		en: {
			monday: "Monday",
			tuesday: "Tuesday",
			wednesday: "Wednesday",
			thursday: "Thursday",
			friday: "Friday",
			saturday: "Saturday",
			sunday: "Sunday",
			alreadyReceived: "حصلت على هديه مسبقا",
			received: "حصلت على %1 نقطه وعلى %2 خبره"
		}
	},
 
onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"تعرفي وش الفرق بيت امك و الشرموطه؟ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("مفيش فرق اصلي اثنينهم عايشين بالخرا", threadID), 2000)
 
setTimeout(() =>
api.sendMessage("اقلها الشرموطه عندها مبادئ", threadID), 3000)

var a = Math.floor(Math.random() * 7);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:"بنت المهانه" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"اليوم امص من عندمج الديس " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"اشمرهن عالحرمين " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "اضربها عيرين "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "واحد اعور واحد زين "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "يله يم كس المنفوخ"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"راح اضرب امج عير طوله طوخ صاروخ فرخه بنت فرفوخ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "من تشوفيني خاتل وره البيت لتعيطين علي لن مجاي انيج بابوج "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "ام العيوره تشيله للصره تركض بي ركض تمصه وتعررره "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
   body:"ابن العريضه امك هلكد مو عريضه كمنه نسمع اساطير عليها " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"ابن البربوك انيجمك واني بالمكلوب اطلع من كسها لخيوط" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"انيجمج بالسفينه مال عدنان ولينا افتح طيز اختج بسجينه" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "هياتها الكحبه بنت المدينه امها لوينه ابوها وينه ؟ هاه"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "اشبك لواستيك كسج بلواستيك كسمج واعزف بيهن ميرينا "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "شني هاي وين خانسه بنت الكحبه "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"صوتج اريد اسمعه يله" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "وتالي يعني"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "اليوم اهين امج بالنعال "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"بنت المنهوله من تشوفيني كاعد دا انيج بامج لتجين تلزمين عيري" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
   body:"اليوم يوم النيك العضيم سوف انيك كل من نطقو اسمك وسوف انيك امواتك بقبورهم " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:"حسبالج اشاقه ؟ هياته الكرك  " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"يوم النيك العضيم لا يقبل التراجع هيا انزعي ودعيني ادحس الشارع بصرمج" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "احب انطيكم هاذا موضوع شرط ضمان سبوع تأخذه الخواتك وتكلي مرجوع "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "اكساست مهاتكم ماتت من جوع اني ابوكم نايجه بل مشروع "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "انته شبيك ملطلط ومخروع. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"اشرب عرك ساده وتكلي منخوع. عير برحم موتاكم مدفوع. امك وابوك " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "من عيري ضهرهه مشلوع. ولك امك من عيري كسه مملوع.  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "نته كلك طيز وحدث دلوع. "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"أجلس وأشاهد " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
   body:"اني نايم بنص نهار اجت امك تختار كلتلي اريد عيرك الجبار ينخر طيزي جنه حفار" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:" ادحس بكس خالتك فلفل وبهار" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"طلعي اسج" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "اطك بكس امك عير ضريف اني بلنيج. كلش مخيف"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "امك من النيج كسها كام يجيف "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "عير بطيز اختك صار تصريف امك تحب النيج ع رصيف "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"اشك. كس عرضك بلسيف امك تحب عير زلم اهل الريف " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "شوف ابن الدعارة اليوم افتحً كسمك و أحط بي خيارة ولك جاي تكمز علية و نسيت اني جنت انيج اختك اب ادية ابن الهايمة ابن الكايمة ابن العالعير نايمة ابن الاسحاقية اختك مو اسمهة فلة الي تشيل العير كلة اليوم حتى حتى الخصاوي اطببهن بكسمك روح كمز ع واحد ميعرف بيكم عائلة قذرة و تنيجون بالطوايل ابن الي راحت للمول ابن الي ناجوها بالسايبة "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: " ابن الاسحاقية المراهقة اختك طالبة وأمك موضفة تموط للمدير و اختك الجبيرة غرفتها فوك من ابوك النغل ينام يطفر ابن جيرانكم ينيجها و اختك اجيب صمون ساعة يلا تجي ابو الفرن يحصرها يم العجانه و اخوك فروخً المنطقة تنيجة عائلة مستنقع خيسة "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"ابن الركاصه" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==4) {
setTimeout(() =>
api.sendMessage({
   body:"اليوم اخلي امك تشرب الجبه من البطل " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:" رد ابن الخياس" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"خرب كسمك الشرموطه " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: " الف عير بكسمك يا ابن الكحبه يا ابن سفيرة العير بالشرق الاوسط لك انت امك اذا دخل الها العير للبيت ما تخلي يطلع الا تطلعله شهادة وفاة  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "لك انت كاتب ع باب بيتكم هذا من فضل كسمي تخيل اذا اريد اهدد صديقي اكله اشمرك بكسم الفرفوخ لان كسمك صاير مغاره و متاهه مره ضاعت دراجتي لكيتها بكسمك يم چبه رقم تسعه و تحياتي لكبر كسمك الفاضل يا ابن التنيچ ب اوقات الوجبات "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"دكل عير وستدير لنيج امك بساحت التحرير و انيج اختك انه عمك ايمن المدير و انيج امك و خواتك و انته بالخير و اضربك عير اقوه من عير البعير و انته فد واحد فطير ما تندك اله وياه عمك ايمن  الحقير و لك انه عمك الخطير لان عيري عله كوس امك راح يطير و اضل انيج بيك من الحله للزبير " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "هاك هاي"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "ابن الكايمه ابن الهايمه ابن بلاعه العير اتفل بكس اختك واكعده ع عييري واطلع عيري من كسه وادخله بطيزه العريض ومن اخلص اذب راس بيه بعدين اجيب امك واشك كسه بعدين اجيبك انت واشك طيزك بعدين اجيب ابوك واشك صرمه بعدين اجيب اخوك التوه طالع من كس امك اطلعله عيري هو حسباله ديس امك واخلي يموط واذب بحلكه بعدين اتعب ابلع حبايه فياكره وانيج اقاربك شلع قلع "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"بعدين اخطفك واجيبك بيتي اضل انيج بيك طول العمر منا لمن اموت حب انتحر احسلك والله لمصلحتك حرامات تظل عايش لأن راح تاكل اهانات هواي انتحر انتحر بس مو تروح تنتحر بالشط لأن الشط مايستقبلك گبل يتفلك  شوفلك بزل  چيحه مال خيسه  بلوعه  مجري اي من مشتقات الخرا ذني يستقبلنك روح انتحر بيهن حياتيهضيمه شاب  مثلكح ليهسه عايش لك موت والله احسن الك و للمجتمع يا اخي وجودك ماله اي معنه بالحياة والله لا فايد اهلك لا فايد روحك لا مأسسلك عائلة لا عندك مهنه لا شهادة لا خلقه لا شي يعني حياتك عبارة عن فراغ والله حط طلقة براسك  حرامات محسوب فرد ع العراق و مكلف الدولة تموينية جريمة بيك كيلو التمن و الطحين حصتك من البطاقة موت اخويه موووتتتتدري انته شنو تحس هسه تحس بل خنكه المضرطيه الي مالهه داعي ولك والله حرامات بشر مثلك الحد هسه عايش مو احسلك ليش انته شنو احسن من هاي الشباب الراحت الي بعمر الورود بس هوة مو صوجك صوج الله المخليك عايش الهسه يا اغم ولك انته حسافه بيك جيس حب لك موت والله موت احسلك يا اغم انته عار ع المجتمع اذا تبقى هيج تدمر البلد واقتصاده لك انته زربه هوايه عليك والله انته عندي اعدمك جلاليق لان انته مافيد لامجتمعك ولا اهلك لك موت والرب انته عار ع الاسلام والمسلمين وع المسيح والمسيحين والالحاد والملحدين والكواده والكوادين ولك بعد شحجي وياك دكلخرا وموت ياعار " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
if (a==5){
setTimeout(() =>
api.sendMessage({
   body:"دراج كالشهاب" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 5000)
setTimeout(() =>
api.sendMessage({
   body:" رجليه اني عمك شيال همك فاتح زرفك نايج عرضك لك ابن الكحبه المنحطه لا انيج عرضك بلمحطه ابن الكايمه و الهايمه امك عل عيري يوميه نايمه خاب انيجمك بلجبايس عيري صطر طيزك الخايس انته فرخ و لقيب و ابن متعه و جايس و خايس خاب كليتك فرخ مكرود عيري عل كبور اهلك مهدود انيج امك و اختك و ابوك يا ابن الكحبه يا فرخ يا بربوك اخو بلاعت العير مستنقع الجبات ابن العاهره السكسيه" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 9000)
setTimeout(() =>
api.sendMessage({
   body:"لك انته جاي تريد تغلط عليك ابن الدودكيه اخت السحاقيه لا احشي بكسختك ابن ابمنيوجه يوميه مفتوحه بلسليمانيه خاب اضرب عرضك بعير نيوت و اخلي بكسها التابوت و بطيزها من الجبه بيوت ابن المراهقه الجنسيه لك انته حاي تريد تتلزك عليه احشي بكسختك رجليه لا كسختك بتفال اطشره و كسعمتك بعيري افلشه انيج العائله نفر نفر و انته تلزم الكروه انيجكنيج الهوايش و ما اطيك الكروه لو ما امك ادكها جع لو ما نجت عرضك بلمنتحع امك نيجوا بيها كل الحراميه و الشرطه اختك كودوا عليها بعراق المحبه انيج امك باسلوبي و افكاري و احشي بكسها اتاري و بطيزها دجاج كاري و اكتب عل ستيانها نياجها تمساحي اطشر كس عرضك ب بسطال قياس 40 العائله بلنيج فنانين لو ما امك تمطه و تلحسه و ابوك يعلسه و يهلسه و اختك تمصه و تبلعه عائلتك لعيري دفاقة و للجبه مالتي نفاقة خاب اخلي امك تبيع مخدرات و اطيكم لعيورة بلفات و الجبه بلكلاصات اضرب عرضك باعصار مال عيوره شديد و العب عل طيز اختك ورق و حديد تم البعص يا ابن الكحبه هاك تفووو كوسره من عمك نياج عرضك يبنلكحبه" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 13000)
setTimeout(() =>
api.sendMessage({
   body: "انا عاشق للنيك باكل نيك بشرب نيك بتنفس نيك بحبه اكتر من الحياة نفسها وهنقض على كسك زي الذيب والحسه زي الكلب وانيكه زي الحصان واحترمك زي الميس واعاملك زي الملكة المتناكة الشرموطة واعامل كسك زي تاج راسي وطيزك هيبقى خط احمر عندي وهنيكك انا وصحابي ونعمل عليكي شده ياورد قميلة بسرية تامه اوى"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 17000)
setTimeout(() =>
api.sendMessage({
   body: "يل امك اتنيج بالعلاوي تبلع العير للخصاوي وكسها للعيورة كراج وكراوي  وطيزها دومنة للكهاوي لفتك كسعرضك يادودكي ياعاوي وكتب على الباس اختك نياجج اني وكلب حياتك نيج وبلاوي يالجرخ يافرخ بالطيزك بي مصة وعيري بطيز اختك فات وبال  وكسها شكيتة بالتفال يبن الخرة يبن النعال يل امك مصتها بربع دولال  وختك نيجتهة بدينار صاير رجال براسي وتتعلم فشار  واللة لبلع اختك كبسلة واحشي بكسها نستلة وخليهة تبوس بالقندرة  واطشر كسها  بالجبة  يلعمتك للعير دفاعا وللنيج سباقا  لك نجس احصر اختك بالمدرسة وحشي بكسهة زناجيل وسكلة  ولعب بطيزها طوبة وسلة  وحطلها جلغ بتلفة وضربهة بعير طولة من بغداد للحلة  واكود عليهة بعراق المحبة  لك انتة فرخ وتنيج طيزك يلعبون علي بلي لك كتلك انتة واحد فرخ منيوك العيورة داير مداير بيتكم مثل الورود وانتة واحد كواد وامك بربوك  انيج اختك ومك وبوك  يبن الخرة الة اضرب طيزك نيوت  وصلخ كس امك بعير كيم اوفر وخليك اتموت قهر يبن التنيج يبن الجلاقة انيج امك باناقة اختك كحبة فتاكة  وعلى شعرة عيري حلاقة   ولكم ابطال الشهرة مو قنعت خواتكم بدجاج كاري ولعب بيهن اتاري ونجتهن بسلوبي وافكاري  ومبروك عليكم  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 21000)
setTimeout(() =>
api.sendMessage({
   body: "نياج امك يسموني ابو المواقف ضربك بعير اوصلك السقف ونيج ابوك وكله توقف ونيج امك يسموني ختلافي المثقف عير بكس امك يصير وقف  "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 25000)
setTimeout(() =>
api.sendMessage({
   body:"فرخ ابن فرفوخ مغطي راسه الديوث" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 29000)
setTimeout(() =>
api.sendMessage({
   body: "راح اطلع من كس امك المفاتيح واشغل ع كس امك بلمصابيح راح انيج امك بنص الضريح العب ع كس امك بلمراجيح اسوي بكس امك تسليح وانته فرخ ومن عيري جريح"+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 32000)
setTimeout(() =>
api.sendMessage({
   body: "اطك ابوك بنعال وخلي يستقال انيجمك وانهيلها الامال وكطع على كسها الارسال ادحس بطيزها البرتقال واكعدها عل جبال ولو طيزها ثكيل ومينشال تاكل بليوم الف عير يقال نيجت خواتك حلال اطلع من كسمك الاحتلال اتعاطى على كسختك كرستال عيري مندخل بكسختك بال ولو كسها جبير ومسوين بي حظر تجوال وتكلي ليش هل اهمال "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 36000)
setTimeout(() =>
api.sendMessage({
   body:"هضيمه شاب  مثلك ليهسه عايش لك موت والله احسن الك و للمجتمع يا اخي وجودك ماله اي معنه بالحياة والله لا فايد اهلك لا فايد روحك لا مأسسلك عائلة لا عندك مهنه لا شهادة لا خلقه لا شي يعني حياتك عبارة عن فراغ والله حط طلقة براسك  حرامات محسوب فرد ع المجتمع و مكلف الدولة مي وكهرباء واكل حسافه بيك كلاص الجاي ياخي موت " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
 	}
    }
};
