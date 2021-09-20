let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
await m.reply(global.wait)
try {
let res = await fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]}
conn.sendFile(m.chat, cita, 'asupan.mp4', 'Nih kak asupan nya!!\n*Follow:* https://instagram.com/yakkoxcode', m) 
}

handler.help = ['aloli']
handler.command = /^(aloli)$/i

handler.limit = true
handler.group = false
handler.premium = false
module.exports = handler
