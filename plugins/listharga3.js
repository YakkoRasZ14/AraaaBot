let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `
\`\`\`🔰[YakkoXCode•Shop]🔰

💠「 EMAIL EDU 」💠

Email : @fk.unair.ac.id
----------------------------------
7K / Email
----------------------------------
😈READY AKUN GITHUB STUDENT😈
10/ 1 AKUN GITHUB

PAYMENT :
DANA/Qriss
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YakkoXCode•STORE V2*', 'status@broadcast')
}
handler.help = ['storev3']
handler.command = /^(storev3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
