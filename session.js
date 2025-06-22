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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBHY3I1WWViZ1ZNVkEzd3RaTlExYjI0U0FjbDBKR3krM1dHcTZwb3Mxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVAycDY0TmVMUUpzL2hCWEM2WWFCMkxUMDRQT3FPbHEzOTU4ajFGcGdIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR25MUWlhUXRTOEVmMGtHSHVZa1hadS9JV25KZDl6MlJuN0RDOUM1ZzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaek1SSWYwQ3U4QVRrRkttdTJkL2ZxRTNxTGpadGM3SFg1TGZXNi8zM0hZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGbE4yWDh3c3p1czl6aEZOUkhwek4xTW1PQkw2eHF5eTFUUGhjMkE1RWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk3bW5URkxJTVA2N1ozYWNDdytQc09xYVhDdTFEREVsR3A1dEVROUljQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhsNGZtbC9va0FZTGl4VXQ2bk9VcG1rVC9peGpjY21FN25Sdy9MeGQzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnhXY3FsVzlHWkhCcHNLSEVxaGRMVExKb1MyL1U0MVByNzJ0TisrckgzUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZmQ1NLRDFIdE9EYnliZU9rSGgxMGp0WEg0Z0tzMTJWcW8zUjd0OGhoeFZuK0k1TWk4a2V4SHQ2NTRvVC9FZ29Lam9ONzZha3p0cTNqRlVENkppeUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJERGV1MGZCelFTOXZTQlUrOXFxdnorU3dOSEdKYnZqTkVyQVg1amtzeXZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5ci1vd08yQlRGRzJ3U2QxZlc5VVJBIiwicGhvbmVJZCI6Ijg0ZjE1NTMzLTdmZjYtNDk3Mi1iZjMxLWEwYTE5ODEyZWQ5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdzU1QTVqYzRzRCtoTnBFWjdnK0c0SndkOFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2dPWHQ4SmRhMlJ2RU1mTG9nbzBVSDRDSFM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBSM1paWTNDIiwibWUiOnsiaWQiOiI5NDcxNTg1MDAwODoyOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NzM0Mjc0ODk1MDc0ODoyOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svQXNmd0hFSXVONE1JR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imw2czdMOUZUREVMVFJ2TXhreGRZTG9oU3dxdXQ5MVA0UGlpOWhRRkJtVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InBPMkQzSW1CVGhYWHhjZjVjQlFuZU12MW5lYzI1czRscHZhekVIWU1OdUlsM2hJaFU3aTR3WjJFc25NMGVrVDhVQjM3NkVzdTlNcW5vZzZhdG5NZ0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5K0FEbzFBSnFZN2xoOUxVM0cxTHkzVE1Uc1NUTHhvbXR3TG02YWFTMDZoczhoOG9wS1lzM1ZJbG5helRMcms0a1BJdElTVXJyei9abjZJaGtRQnFEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE1ODUwMDA4OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlplck95L1JVd3hDMDBiek1aTVhXQzZJVXNLcnJmZFQrRDRvdllVQlFabEQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDU5OTMyMSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBM24ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0715850008",
  PASSWORD: 
    process.env.PASSWORD || "Lazybot123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
