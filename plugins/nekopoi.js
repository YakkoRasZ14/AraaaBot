let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukkan query,Contoh *.nekopoi otome dori*', m)

  await m.reply('*Sabar -_-*')
	axios.get(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=JustMeHafz&query=${text}`).then ((res) => {
	 	let hasil = `*Title :${res.data.result.title}*\n*Title JP :${res.data.result.title_jp}*\n*Season :${res.data.result.season}*\n*Genre :${res.data.result.genre}*\n*Durasi :${res.data.result.duration}*\n*Descrition :${res.data.result.description}*\n*Download :*\n*Resolusi :${res.data.download.resolution}*\n*Download List :*\n*Link Download :${res.data.download_list.download_link}*\n*Media :${res.data.download_list.downloader}*`                     

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['nekopoi <judul>']
handler.tags = ['premium','newfitur']
handler.command = /^nekopoi$/i
handler.premium = true
handler.group = true
handler.limit = true

module.exports = handler
