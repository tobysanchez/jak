const axios = require('axios');
const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "تصميم",
		author: "NTKhang",
		version: "1.5",
		cooldowns: 5,
		role: 0,
		shortDescription: {
			vi: "tạo avatar anime",
			en: "صنع آفاتار"
		},
		longDescription: {
			vi: "tạo avatar anime với chữ ký",
			en: "إصنع آفاتار أي شخصية مع توقيع جميل ✅"
		},
		category: "صور",
		guide: {
			vi: "   {p}{n} <mã số nhân vật hoặc tên nhân vật> | <chữ nền> | <chữ ký> | <tên màu tiếng anh hoặc mã màu nền (hex color)>"
				+ "\n   {p}{n} help: xem cách dùng lệnh",
			en: "   تصميم <إسم الشخصية باللاتنية> | <نص الخلفية> | <التوقيع> | <إسم اللون باللاتنية أو كوده>"
				+ "\n   أوامر تصميم: لتتعلم"
		}
	},

	langs: {
		vi: {
			initImage: "Đang khởi tạo hình ảnh, vui lòng chờ đợi...",
			invalidCharacter: "Hiện tại chỉ có %1 nhân vật trên hệ thống, vui lòng nhập id nhân vật nhỏ hơn",
			notFoundCharacter: "Không tìm thấy nhân vật mang tên %1 trong danh sách nhân vật",
			errorGetCharacter: "Đã xảy ra lỗi lấy dữ liệu nhân vật:\n%1: %2",
			success: "✅ Avatar của bạn\nNhân vật: %1\nMã số: %2\nChữ nền: %3\nChữ ký: %4\nMàu: %5",
			defaultColor: "mặc định",
			error: "Đã xảy ra lỗi\n%1: %2"
		},
		en: {
			initImage: "أنا أحاول أصمم لك أصبر 😐❤️",
			invalidCharacter: "حاليا %1 شخصية في النظام, ممكن ما إخترته غير موجود جرب غيره",
			notFoundCharacter: "مافي شخصية بإسم  %1 موجودة عندي",
			errorGetCharacter: "حدث خطأ حاول بعدين 😐💔:\n%1: %2",
			success: "✅ تصميم\nشخصية: %1\nآيدي: %2\nنص الخلفية: %3\nالتوقيع: %4\nاللون: %5",
			defaultColor: "عشوائي",
			error: "حدث خطأ\n%1: %2"
		}
	},

	onStart: async function ({ args, message, getLang }) {
		const content = args.join(" ").split("|").map(item => item = item.trim());
		let idNhanVat, tenNhanvat;
		const chu_Nen = content[1];
		const chu_Ky = content[2];
		const colorBg = content[3];
		if (!args[0])
			return message.SyntaxError();
		message.reply(getLang("initImage"));
		try {
			const dataChracter = (await axios.get("https://goatbotserver.onrender.com/taoanhdep/listavataranime?apikey=ntkhang")).data.data;
			if (!isNaN(content[0])) {
				idNhanVat = parseInt(content[0]);
				const totalCharacter = dataChracter.length - 1;
				if (idNhanVat > totalCharacter)
					return message.reply(getLang("invalidCharacter", totalCharacter));
				tenNhanvat = dataChracter[idNhanVat].name;
			}
			else {
				const findChracter = dataChracter.find(item => item.name.toLowerCase() == content[0].toLowerCase());
				if (findChracter) {
					idNhanVat = findChracter.stt;
					tenNhanvat = content[0];
				}
				else
					return message.reply(getLang("notFoundCharacter", content[0]));
			}
		}
		catch (error) {
			const err = error.response.data;
			return message.reply(getLang("errorGetCharacter", err.error, err.message));
		}

		const endpoint = `https://goatbotserver.onrender.com/taoanhdep/avataranime`;
		const params = {
			id: idNhanVat,
			chu_Nen,
			chu_Ky,
			apikey: "ntkhangGoatBot"
		};
		if (colorBg)
			params.colorBg = colorBg;

		try {
			const avatarImage = await getStreamFromURL(endpoint, "avatar.png", { params });
			message.reply({
				body: getLang("success", tenNhanvat, idNhanVat, chu_Nen, chu_Ky, colorBg || getLang("defaultColor")),
				attachment: avatarImage
			});
		}
		catch (error) {
			error.response.data.on("data", function (e) {
				const err = JSON.parse(e);
				message.reply(getLang("error", err.error, err.message));
			});
		}
	}
};