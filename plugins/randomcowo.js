let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/randomcowok?apikey=404Api', '', 'Jangan Di Pake Buat Pemuas Nafsu Kack', m)
}
handler.help = ['randomcowo']
handler.tags = ['newfitur']
handler.command = /^(randomcowo)$/i

handler.limit = true
handler.group = false

module.exports = handler
