const fs = require('fs');

module.exports = {
	config: {
		name: "قفل",
		version: "1.1",
		author: "لوفي",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: ""
		},
		longDescription: {
			vi: "",
			en: "تشغيل وضع منع المغادرة 🤠"
		},
		category: "إعدادات",
		guide: {
			en: ""
		}
	},

	onStart: async function ({ api, message, event, args }) {
		const threaduid = event.threadID;
		const command = args[0];

		if (command === 'تشغيل') {
	
			let data = fs.readFileSync('./JSONSSETTLOUFI/out.json');
			let threadStatus = JSON.parse(data);

		
			threadStatus[threaduid] = {
				threadLeaveStatus: 'on'
			};

		
			fs.writeFileSync('./JSONSSETTLOUFI/out.json', JSON.stringify(threadStatus));

		
			api.sendMessage("تم تشغيل وضع منع الخروج بنجاح ✅", threaduid);
		} else if (command === 'ايقاف') {
		
			let data = fs.readFileSync('./JSONSSETTLOUFI/out.json');
			let threadStatus = JSON.parse(data);

	
			threadStatus[threaduid] = {
				threadLeaveStatus: 'off'
			};

			
			fs.writeFileSync('./JSONSSETTLOUFI/out.json', JSON.stringify(threadStatus));


			api.sendMessage("تم ايقاف وضع منع الخروج ✅", threaduid);
		} else {
		
			api.sendMessage('الرجاء اختيار اجراء تشغيل, ايقاف', threaduid);
		}
	}
};