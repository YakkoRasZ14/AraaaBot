const fs = require('fs')
const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, jid, participants }) => {
  conn.menutest = conn.menutest ? conn.menutest : {}
  let id = m.chat
  let { limit, exp, money, lastclaim, registered, regTime, role, age, level, name, pc, warning } = global.DATABASE.data.users[m.sender]
  let menutest = JSON.parse(fs.readFileSync(`./src/menutest.json`))
  let json = menutest[Math.floor(Math.random() * menutest.length)]
  let caption = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃•  *Nama :* ${name}
┃•  *Umur :* ${age}
┃•  *Role :* ${role}
┃•  *Exp :* ${exp}
┃•  *Limit :* ${limit}
┃•  *Register :* ${registered}
┃•  *Warning :* ${warning}
┃
┣━━°❀❬ *DOWNLOADER MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}fb <url>*
┣➥ *${usedPrefix}ig <url> (Limit)*
┣➥ *${usedPrefix}ighighlight <username> (Limit)*
┣➥ *${usedPrefix}igstalk <username> (Limit)*
┣➥ *${usedPrefix}igstory <username> (Limit)*
┣➥ *${usedPrefix}mediafire <link> (Limit)*
┣➥ *${usedPrefix}tiktok <url> (Limit)*
┣➥ *${usedPrefix}twitter <link> (Limit)*
┣➥ *${usedPrefix}twt <link> (Limit)*
┣➥ *${usedPrefix}twitstalk <@user> (Limit)*
┣➥ *${usedPrefix}stalktwit <@user> (Limit)*
┣➥ *${usedPrefix}ytmp3 <url> (Limit)*
┣➥ *${usedPrefix}yta <url> (Limit)*
┣➥ *${usedPrefix}ytmp4 <url> (Limit)*
┣➥ *${usedPrefix}ytv <url> (Limit)*
┣➥ *${usedPrefix}yt <url> (Limit)*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo*
┣➥ *Vean Gay*
┣➥ *Hardianto Pedofilia*
┣➥ *Senku*
┣➥ *RidwanXyZ*
┣➥ *Hafzz*
┣➥ *Penyedia RestApi*
┣➥ *Dll*
┗━━━━━━━━━━━━━━━━
    `.trim()
  conn.menutest[id] = [
    await conn.send2ButtonLoc(m.chat, caption, await (await fetch(json.img)).buffer(), '© Araaa•BOT', 'Kempo', '.hint', 'Test', '.test', { quoted: m })
  ]
}
handler.command = /^menudownload/i

module.exports = handler










