module.exports = {
	config: {
		name: "سؤال", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
i = args.join(' ') 
const axios = require('axios');

const apiUrl = `https://sim.ainz-project.repl.co/others/gpt?prompt=${i}`;

axios.get(apiUrl)
 .then(response => {
 message.send(response.data.result);
 })
 .catch(error => {
 message.send('حدث خطأ في الطلب:', error);
 });

}
};