const similarity = require('similarity')
const threshold = 0.73
let handler = m => m
handler.before = async function (m) {
    let yakko = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*baka/i.test(m.quoted.contentText)) return !0
    this.kabupaten = this.kabupaten ? this.kabupaten : {}
    if (!(yakko in this.kabupaten)) return m.reply('Soal itu telah berakhir')
    if (/^puyeng$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.kabupaten[yakko][1].jawaban))}`.trim(), '© Araaa•BOT', 'TEBAK KABUPATEN', '.tebakkabupaten').then(() => {
            delete this.kabupaten[yakko]
            throw 0
        })
    }
    // if (m.quoted.yakko == this.kabupaten[yakko][0].yakko) {
    let json = JSON.parse(JSON.stringify(this.kabupaten[yakko][1]))
    if (['.baka, 'BANTUAN', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.kabupaten[yakko][2]
        await this.sendButton(m.chat, `*Benar!* +${this.kabupaten[yakko][2]} XP`, '© Araaa•BOT', 'TEBAK KABUPATEN', '.tebakkabupaten')
        clearTimeout(this.kabupaten[yakko][3])
        delete this.kabupaten[yakko]
    } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
