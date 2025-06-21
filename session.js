//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUgvNE1KcmsyWHlRVEhpZkN6WEwzUWxPaGRUVWo1TGFtN1dRek9DWGVtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmV4ZGR4aUg5RzI3ejFBT0tSWU4wVkQ0a1RGYjQybkdDNTBNdDBwQ2Mybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1ZVbGFvZTBseElRckRPMkZYb2VwUm9rU21oRXpuRXRGSitCdWhPb1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkL2hWWXpVeUFDWHNCMFRyOTE1ZTJHb0dSMWdhSzR6dmZaTDFnT25pSWdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFZEUwQVA3c3BOcUZhOE4zVFNCMnFhcDNvc050K3FUS0FXMUVIU0FUVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh3VkRRMWlwaHRQdC9hUDlxZlR4d2VTSXZRQ0U0VDRBY3FNK0FtYmp6R1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUphSTQ4S0RWZC9WN0pjcXQySGo2QWpmcW1wU3hLeW9LSStGZVJQSzdWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVMyOUxUR2VxTnlnSERHVVIvb0RiT0pJMWtDKytZZlRPY1lFSUpUMUMzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPNFhmTk5vbDRaTFFzaEdMcG5OcXYzcmFUSTlBLy9mbmd5bWpCUU5TblZkdVVwL1U2N3p3OFdnSG8rMC9PTFppWHorWUZhS0lWWWNDcEVoU1hhWGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IlNWZmlacjVQQ3piNmF3dFY2ejY4UVRNNXZ6NUxIS0JHUEpwRU9FSzM3V009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFydVBsRUt3UnFTQ2VzejVzM0VNYkEiLCJwaG9uZUlkIjoiMjRkZWJkZTgtOGJlZC00YzBkLTg3M2MtNjQ3OWU1NDc1N2NhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEyemFuRkVHOWY3WnpKY1ZSZ1ZiQmxrQm8rRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZzJ2RitoVCtEdzBFZkVoN3lZOHkxZmZOYTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlZCNUUyQTYiLCJtZSI6eyJpZCI6Ijk0NzE1ODUwMDA4OjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg3MzQyNzQ4OTUwNzQ4OjI0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzdBc2Z3SEVOLzUyc0lHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibDZzN0w5RlRERUxUUnZNeGt4ZFlMb2hTd3F1dDkxUDRQaWk5aFFGQm1VTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVlpPeStVWjAwMzk5YXJXWVFMWUwxQ3hibjdOZEYycEV2WHd6Qm9jYUdPWVdjU2NDQTdWUEdPcm04YkRRSjhTNkZyQjR4QnEvRE90clVZckFnQXgrQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNKOEZqRGtsVDhlVWJ1UnVKbWxJdHppOGVUVENWUk9CZUJYQmVrbi83MmpndVk1YmtSMTM0eVBBTWZLS1R5Qzl6OE50Zzkrc0J3RTNlT04rbjYvb2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTU4NTAwMDg6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmVyT3kvUlV3eEMwMGJ6TVpNWFdDNklVc0tycmZkVCtENG92WVVCUVpsRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTE0OTI0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdLOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
