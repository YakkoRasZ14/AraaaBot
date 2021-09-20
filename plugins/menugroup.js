const fs = require('fs')
const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
  conn.menutest = conn.menutest ? conn.menutest : {}
  let id = m.chat
  let { limit, exp, money, lastclaim, registered, regTime, role, age, level, name, pc, warning } = global.DATABASE.data.users[m.sender]
  let menutest = JSON.parse(fs.readFileSync(`./src/menutest.json`))
  let json = menutest[Math.floor(Math.random() * menutest.length)]
  let caption = `
┏━━°❀❬ *GROUP MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}ban (Agar B0T Tidak Aktif Di Group)*
┣➥ *${usedPrefix}unban*
┣➥ *${usedPrefix}on <opsi>*
┣➥ *${usedPrefix}off <opsi>*
┣➥ *${usedPrefix}getsider*
┣➥ *${usedPrefix}infogroup*
┣➥ *${usedPrefix}group <buka/tutup>*
┣➥ *${usedPrefix}linkgroup*
┣➥ *${usedPrefix}here*
┣➥ *${usedPrefix}online*
┣➥ *${usedPrefix}simulate <event> @mention*
┣➥ *${usedPrefix}tagall*
┣➥ *${usedPrefix}totalpesan*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *YakkoXCode*
┣➥ *Nurotomo*
┣➥ *Vean Gay*
┣➥ *Hardianto Pedofilia*
┣➥ *Senku*
┣➥ *Suho*
┣➥ *RidwanXyZ*
┣➥ *Hafzz*
┣➥ *Penyedia RestApi*
┣➥ *Dll*
┗━━━━━━━━━━━━━━━━
    `.trim()
  conn.menutest[id] = [
    await conn.send2ButtonImg(m.chat, caption, await (await fetch(json.img)).buffer(), '© Araaa•BOT', 'DONASI', '.donasi', 'OWNER', '.onwer', { quoted: m })
  ]
}
handler.command = /^menugroup/i

module.exports = handler








