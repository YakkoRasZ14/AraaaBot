let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
\`\`\`🔰[YakkoXCode•Shop]🔰

💠「 Jasa Run BOT 」💠

Run BOT : 25K/Tahun
Run BOT + Full Rename : 35K/Tahun
----------------------------------

🌐「 Hosting 」🌐

WHM:
WHM MINI =  30.000 IDR
WHM MEDIUM = 40.000 IDR
WHM EXTRA = 50.000 IDR
WHM SUPER = 60.000 IDR

MWHM:
MWHM MINI = 80.000 IDR
MWHM MEDIUM = 100.000 IDR
MWHM EXTRA = 120.000 IDR
MWHM SUPER = 150.000 IDR

ADMIN:
ADMINHOST = 180.000/BULAN
----------------------------------

💠「 VPS 」💠

VPS Bulanan :
•SGDO Ram 1/1CPU : 35K

VPS Tahunan :
•India Ram 1/1CPU : 40K
•Sydney Ram 1/1CPU : 40K
•Germany Ram 1/1CPU : 40K
----------------------------------

💠「 DOMAIN 」💠

.me : 20K/Tahun
.tech : 35K/Tahun
.tk : 1K/Tahun
.ml : 1K/Tahun
.cf : 1K/Tahun
.gq : 1K/Tahun

----------------------------------
MINAT? PC AJA, RAGU SKIP!🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️
💳PAYMENT : DANA💳\`\`\`
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YakkoXCode•Store V1*', 'status@broadcast')
}
handler.help = ['storev2']
handler.command = /^(storev2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
