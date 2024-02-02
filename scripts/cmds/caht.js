const axios = require('axios');

module.exports = {
	config: {
		name: "شات", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
let x = args.join(' ') 
 const apiUrl = `https://wra--marok85067.repl.co/?gpt=${x} `;

async function makeAPIRequest() {
  try {
    const response = await axios.get(apiUrl);
    let i = response.data;

    try {
      let url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${i}`;

      message.reply({
        body: "",
        attachment: await global.utils.getStreamFromURL(url)
      });
    } catch (e) {
      console.log(e);
    }
  } catch (error) {
    console.error('Error making API request:', error);
  }
}

makeAPIRequest();

}
};