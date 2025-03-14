const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		aliases: ["admin"],
		author: "SABU🌚",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ArYanInfo = {
				name: '𝗦 𝗔 𝗕 𝗕 𝗜 𝗥ッ',
				gender: '𝐌𝐚𝐥𝐞',
				age: '𝟭𝟳+',
				Tiktok: '𝗘𝗟𝗜𝗧𝗘𝗫𝗦𝗔𝗕𝗕𝗜𝗥',
				Relationship: '𝐢𝐧 𝐜𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝',
				religion: '𝐈𝐬𝐥𝐚𝐦',
				facebook: 'https://www.facebook.com/profile.php?id=61566551318414'
			};

			const ArY = https:'//i.imgur.com/THX5TCM.mp4';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ArYan, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│𝐍𝐚𝐦𝐞: ${ArYanInfo.name}
│𝐆𝐞𝐧𝐝𝐞𝐫 : ${ArYanInfo.gender}
│𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :${ArYanInfo.Relationship}
│𝐀𝐠𝐞 :${ArYanInfo.age}
│𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧: ${ArYanInfo.religion}
│𝐓𝐢𝐤𝐭𝐨𝐤 : ${ArYanInfo.Tiktok}
│𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${ArYanInfo.facebook}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
