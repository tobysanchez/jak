module.exports = {
	config: {
		name: "زغرفة", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
	 const x = args.join(""); 
const replaceChars = {
 "a": "𝒜",
 "b": "𝐵",
 "c": "𝒞",
 "d": "𝒟",
 "e": "𝐸",
 "f": "𝐹",
 "g": "𝒢",
 "h": "𝐻",
 "i": "𝐼",
 "j": "𝒥",
 "k": "𝒦",
 "l": "𝐿",
 "m": "𝑀",
 "n": "𝒩",
 "o": "𝒪",
 "p": "𝒫",
 "q": "𝒬",
 "r": "𝑅",
 "s": "𝒮",
 "t": "𝒯",
 "u": "𝒰",
 "v": "𝒱",
 "w": "𝒲",
 "x": "𝒳",
 "y": "𝒴",
 "z": "𝒵",
 "A": "𝒜",
 "B": "𝐵",
 "C": "𝒞",
 "D": "𝒟",
 "E": "𝐸",
 "F": "𝐹",
 "G": "𝒢",
 "H": "𝐻",
 "I": "𝐼",
 "J": "𝒥",
 "K": "𝒦",
 "L": "𝐿",
 "M": "𝑀",
 "N": "𝒩",
 "O": "𝒪",
 "P": "𝒫",
 "Q": "𝒬",
 "R": "𝑅",
 "S": "𝒮",
 "T": "𝒯",
 "U": "𝒰",
 "V": "𝒱",
 "W": "𝒲",
 "X": "𝒳",
 "Y": "𝒴",
 "Z": "𝒵"
};

let result = "";
for (let i = 0; i < x.length; i++) {
 const char = x[i].toLowerCase(); 
 if (replaceChars[char]) { 
 result += replaceChars[char];
 } else {
 result += x[i];
 }
}
message.send(result);
	 
	}
};