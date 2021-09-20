let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://h4ck3rs404-api.herokuapp.com/api/memeindo?apikey=404Api')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.result) throw 'Eror!'
  conn.sendFile(m.chat, json.result, '', '© Araaa•BOT', m, 0, { thumbnail: await (await fetch(json.result)).buffer() })
}
handler.help = ['rmemeindo']
handler.tags = ['newfitur','premium']
handler.command = /^rmemeindo$/i
handler.premium = true

module.exports = handler
