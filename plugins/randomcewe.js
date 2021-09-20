let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/randomcewek?apikey=404Api', '', 'Jangan Di Pake Buat Hode Kack', m)
}
handler.help = ['randomcewe']
handler.tags = ['newfitur']
handler.command = /^(randomcewe)$/i

handler.limit = true
handler.group = false

module.exports = handler
