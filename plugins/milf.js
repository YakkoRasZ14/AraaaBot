let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('http://zekais-api.herokuapp.com/milf?apikey=tzjHtUpG')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '© Araaa•BOT•BOT', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['milf']
handler.tags = ['newfitur']
handler.command = /^(milf)$/i

handler.limit = true
handler.group = true

module.exports = handler
