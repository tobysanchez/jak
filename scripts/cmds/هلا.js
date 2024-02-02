module.exports = {
	config: {
		name: "مرحبا", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
 const axios = require("axios");

axios.get("https://easygoingjuvenilevolume.ax012.repl.co/هلا")
  .then((response) => {
    message.send(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
}
};