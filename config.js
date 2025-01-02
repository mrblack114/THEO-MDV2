const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_35_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1NzZnJFUWNaVHZ4MmZWZzV6cG1iZWdwb3gvOXpPOTVlUis1R2hqdU1nUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVk2UEpjUmNUVDZNaVpkVjdLcmh4Z1wiLFxuICBcInBob25lSWRcIjogXCI0YzhiNDI5OC0wZTc4LTQwMWMtOGQ3MS0wMzcxZTVhYmIxM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgOTksXG4gICAgICAxNDcsXG4gICAgICA1LFxuICAgICAgMTk5LFxuICAgICAgMjUwLFxuICAgICAgODQsXG4gICAgICAzMSxcbiAgICAgIDE5OCxcbiAgICAgIDE0MSxcbiAgICAgIDE3MyxcbiAgICAgIDMwLFxuICAgICAgOCxcbiAgICAgIDE1NyxcbiAgICAgIDE5MSxcbiAgICAgIDE4NCxcbiAgICAgIDM1LFxuICAgICAgMTExLFxuICAgICAgNDgsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDEzNyxcbiAgICAgIDE0NyxcbiAgICAgIDIxNCxcbiAgICAgIDEzMyxcbiAgICAgIDIxNyxcbiAgICAgIDk3LFxuICAgICAgMTcyLFxuICAgICAgNTMsXG4gICAgICAxODYsXG4gICAgICAxODcsXG4gICAgICA3MixcbiAgICAgIDUsXG4gICAgICAxMzMsXG4gICAgICAyNTQsXG4gICAgICAxNTYsXG4gICAgICAxMCxcbiAgICAgIDEzNSxcbiAgICAgIDE2LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhKUTJOTVIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM2ODgyMzY3OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTAyNzU3NjI0MjIwNzozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM1I3ZU1DRU9TNDI3c0dHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImcydWduSnRkcGFQYTB1M3JFWWpGRzkzc3c4QWdNYXBxb0xva3FRT3ZtRms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFR6cHBGeEJsOURoSGtlR1JXN1p6c2RLRWdpK0p1WTRoRWFyUGlsV0NiZHE0VFRNdzRZNDh2OVFJNTVuMHUyZzZtUDd2eEh6WEhITy9xcExTYmM2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2ozeUZ5ZGU0RUZYV01pOHI3STY3MmNFaWRMS1dmWW55VjlsVGRYWkhPS2JiNkR4eVdoZ0I2aXhzZUpJeFRGaVNVdnM3NkppM2NmMy8xWUlGZSsxanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjg4MjM2NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTg0MjkyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURvU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG9TLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXptSExRdGdMbi9zclkxT0pwMVdSNkZSOGV0QW1HblIzRFNLdklqNXZOOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDYyODUyOTMsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
