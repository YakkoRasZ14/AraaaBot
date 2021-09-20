let fetch = require("node-fetch")
let axios = require("axios")
let handler = async (m, { conn, text }) => {
  let chat = global.db.data.chats[m.chat]
      if (!text) return m.reply("_Masukkan Kata Kunci!_")
      await m.reply(global.wait)
     try {
      let res = await axios.get(`https://api.vhtear.com/xxxsearch?query=${text}&apikey=Xfarbotkey`)
      let json = res.data
      //let ress = json.result
      let hsl = `*XXX SEARCH*\n\n`
      for (let i = 0; i < json.result.length; i++) {
           hsl += `*Title:* ${json.result[i].title}\n`
           hsl += `*Views:* ${json.result[i].durasi}\n`
           hsl += `*Duration:* ${json.result[i].url}\n`
         }
           hsl += '*© Araaa•BOT*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
    }
   }
handler.help = ['xxxsearch <milf>']
handler.command = /^(xxxsearch|searchxxx|xxx)$/
handler.tags = ['newfitur','premium']
handler.premium = true
module.exports = handler
