let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
\`\`\`┌〔 Undang Bot ke Grup 〕
├ 7 Hari / Rp 10,000 | DANA/GOPAY
├ 30 Hari / Rp 20,000 | DANA/GOPAY
└────────────────────────
├ 7 Hari / Rp 15,000 | TSEL/XL
├ 30 Hari / Rp 35,000 | TSEL/XL
└────────────────────────
--------------------------------------
┌〔 Sewa Bot + Nama Sendiri 〕
├ 7 Hari / Rp 15,000 | DANA/GOPAY
├ 30 Hari / Rp 35,000 | DANA/GOPAY
└────────────────────────
├ 7 Hari / Rp 20,000 | TSEL/XL
├ 30 Hari / Rp 30,000 | TSEL/XL
└────────────────────────
MINAT? http://wa.me/6283803284713
💳PAYMENT : DANA💳\`\`\`
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SEWA BOT*', 'status@broadcast')
}
handler.help = ['sewabot']
handler.command = /^(sewabot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
