module.exports = {
	config: {
		name: "حراسة",
		version: "1.0",
		author: "LUFI",
		countDown: 1,
		role: 1,
		shortDescription: "وضع منع تغيير الأدمن",
		longDescription: "",
		category: "إعدادات",
		guide: "{pn} {{[on | off]}}",
		envConfig: {
			deltaNext: 5
		}
	},
	onStart: async function ({ message, event, threadsData, args }) {
		let antiout = await threadsData.get(event.threadID, "settings.acadmin");
		if (antiout === undefined) {
			await threadsData.set(event.threadID, true, "settings.acadmin");
		}
		console.log(await threadsData.get(event.threadID, "settings.acadmin"));
		if (!["on", "off"].includes(args[0])) {
			return message.reply("on أو off");
		}
		await threadsData.set(event.threadID, args[0] === "on", "settings.acadmin");
		return message.reply(`هو حاليا ${args[0] === "on" ? "مفعل" : "مطفي"}`);
	}
};
