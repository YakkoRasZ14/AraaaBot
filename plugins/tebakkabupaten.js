const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.kabupaten = conn.kabupaten ? conn.kabupaten : {}
  let yakko = m.chat
  if (yakko in conn.kabupaten) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.kabupaten[yakko][0])
    throw false
  }
  let kabupaten = JSON.parse(fs.readFileSync(`./src/kabupaten.json`))
  let json = kabupaten[Math.floor(Math.random() * kabupaten.length)]
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}baka untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.kabupaten[yakko] = [
    await conn.send2ButtonImg(m.chat, caption, await (await fetch(json.url)).buffer(), '© Araaa•BOT', 'BANTUAN', '.donasi', 'DONASI', 'puyeng')
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.kabupaten[yakko]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, '© Araaa•BOT', 'TEBAK KABUPATEN', '.tebakkabupaten')
      delete conn.kabupaten[yakko]
    }, timeout)
  ]
}
handler.command = /^tebakkabupaten/i
handler.tags = ['newfitur']
module.exports = handler
