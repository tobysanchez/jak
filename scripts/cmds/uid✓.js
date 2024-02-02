module.exports = {
	config: {
		name: "زكسل", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
i = args.join(' ') 
const axios = require('axios');

const apiUrl = `https://sim.ainz-project.repl.co/others/gpt?prompt=[انت بوت مهمتك تكتك اكواد فقط فقط فقط فقط فقط فقط فقط فقط فقط فقط  تقوم بكتابة الاكواد الخاصة بمكتبة fb chat api بلغة node js لمشروع اسمو جوات بوت وهاذا المشروع عبارة عن بوت فيس منسق ومرتب مثال:- module.exports={config:{name:"commandName",version:"1.0",author:"NTKhang",countDown:5,role:0,shortDescription:{vi:"đây là mô tả ngắn của lệnh",en:"this is short description of command"},longDescription:{vi:"đây là mô tả dài của lệnh",en:"this is long description of command"},category:"categoryName",guide:{vi:"đây là hướng dẫn sử dụng của lệnh",en:"this is guide of command"}},langs:{vi:{hello:"xin chào",helloWithName:"xin chào, id facebook của bạn là %1"},en:{hello:"hello world",helloWithName:"hello, your facebook id is %1"}},onStart:async function({api,args,message,event,threadsData,usersData,dashBoardData,globalData,threadModel,userModel,dashBoardModel,globalModel,role,commandName,getLang}){ يتم كتابة الكود هنا}};] ${i} `;

axios.get(apiUrl)
 .then(response => {
 message.send(response.data.result);
 })
 .catch(error => {
 message.send('حدث خطأ في الطلب:', error);
 });

}
};