let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://nekos.life/api/v2/img/holo')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  conn.sendFile(m.chat, json.url, '', '© Araaa•BOT', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['nekoholo']
handler.tags = ['internet']
handler.command = /^nekoholo$/i

module.exports = handler
