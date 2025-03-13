const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
			name: "owner",
					aliases: ["info"],
							author: "Rexy",
									role: 0,
											shortDescription: " ",
													longDescription: "",
															category: "admin",
																	guide: "{pn}"
																		},
	onStart: async function ({ api, event }) {
			try {
						const ownerInfo = {
										name: '𝗦𝗔𝗕𝗕𝗜𝗥 𝗔𝗛𝗠𝗘𝗗 ',
														class: '𝘾𝙡𝙖𝙨𝙨  𝟭𝟭',
																		group: '𝑺𝑪𝑰𝑬𝑵𝑪𝑬',
																						gender: '𝑴𝑨𝑳𝑬',
																										Birthday: '𝟮𝟭-𝟬𝟲-𝟮𝟬𝟬𝟲',
																														religion: '𝑰𝑺𝑳𝑨𝑴',
																																		hobby: '𝑭𝒍𝒊𝒓𝒕𝒊𝒏𝒈 😁',
																																						Fb: 'https://www.facebook.com/share/168jVrRn33/',
																																										Relationship: '𝙨𝙞𝙣𝙜𝙡𝙚  ',
																																														Height: '5"9'
																																																	};
			const bold = 'https://i.imgur.com/DpMSasE.mp4';
						const tmpFolderPath = path.join(__dirname, 'tmp');
			if (!fs.existsSync(tmpFolderPath)) {
							fs.mkdirSync(tmpFolderPath);
										}
			const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
