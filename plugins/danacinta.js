let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nomor Telepon yang akan dispam call', m)

	axios.get(`https://h4ck3rs404-api.herokuapp.com/api/spamcall?number=${text}&apikey=404Api`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['spamcallv1'].map(v => v + ' 82284419023')
handler.tags = ['premium','newfitur']
handler.command = /^(spamcallv1)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
