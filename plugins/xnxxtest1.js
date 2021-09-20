let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/xnxx-search?q=pubg+gameplay&apikey=404Api', '', 'caption', m)
}
handler.help = ['xnxx1]
handler.tags = ['NSFW']
handler.command = /^(xnxx1)$/i

handler.premium = true
handler.limit = true
handler.group = false


module.exports = handler
