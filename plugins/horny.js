let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/mstrb?APIKEY=HIRO', '', 'Jangan Comly Bang :v', m)
}
handler.help = ['horny']
handler.tags = ['newfitur']
handler.command = /^(horny)$/i

handler.limit = true
handler.group = true

module.exports = handler
