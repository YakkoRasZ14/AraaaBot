let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://freerestapi.herokuapp.com/api/v1/randomp', '', 'Jangan Di Pake Buat Pemuas Nafsu Kack', m)
}
handler.help = ['rporno']
handler.tags = ['newfitur']
handler.command = /^(rporno)$/i

handler.limit = true
handler.group = false

module.exports = handler
