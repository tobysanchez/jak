const axios = require("axios");

module.exports = {
	config: {
		name: "تحويل",
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Chuyển ảnh thành hình vẽ anime",
			en: "تحويل صورة إلى أنمي 😐"
		},
		longDescription: {
			vi: "Chuyển đổi ảnh thành hình vẽ anime",
			en: "حول صورتك إلى أنمي 😐❤️"
		},
		category: "الخدمات",
		guide: {
			vi: "   {pn} [<url ảnh> | reply 1 ảnh] <type>"
				+ "\n     type: number (0, 1, 2, 3,... n+1) dùng để chọn kiểu vẽ anime, mặc định là 1",
			en: "   تحويل رابط أو رد على صورة"
				+ "\n     النمط : ضع رقم تحويل 1 . 2 .3 ... يغير النمط 🌟"
		}
	},

	langs: {
		vi: {
			invalidUrl: "⚠️ Url hình ảnh không hợp lệ, vui lòng phản hồi 1 hình ảnh hoặc nhập url hình ảnh",
			error: "❌ Có lỗi xảy ra:\n%1"
		},
		en: {
			invalidUrl: "⚠️الرابط خاطأ رد على صورتك أحسن ✅",
			error: "❌ حدث خطأ:\n%1"
		}
	},

	onStart: async function ({ message, event, args, getLang }) {
		let imageUrlInPut;
		let type;
		if (["photo", "sticker"].includes(event.messageReply?.attachments[0]?.type)) {
			imageUrlInPut = event.messageReply.attachments[0].url;
			type = isNaN(args[0]) ? 1 : Number(args[0]);
		}
		else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
			imageUrlInPut = args[0];
			type = isNaN(args[1]) ? 1 : Number(args[1]);
		}
		else {
			return message.reply(getLang("invalidUrl"));
		}
		let res;
		try {
			res = await axios.get("https://goatbotserver.onrender.com/taoanhdep/art", {
				params: {
					image: imageUrlInPut,
					type
				}
			});
			const getImage = await global.utils.getStreamFromURL(res.data.data.effect_img, "imageArt.png");
			message.reply({
				attachment: getImage
			});
		}
		catch (error) {
			const err = error.response.data.message;
			message.reply(getLang("error", err));
		}
	}
};