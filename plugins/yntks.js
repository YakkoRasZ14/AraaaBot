let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*Ya Kack Ada Yang Bisa Saya Bantu? Ketik .menu Untuk Melihat Fitur BOT*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /BOT|bot|Bot|Araaa/i
handler.command = new RegExp

module.exports = handler
