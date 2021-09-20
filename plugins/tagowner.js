let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ada Apa Kack Tag Global Owner Saya? Mau Sewa BOT Kah?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6283803284713/i
handler.command = new RegExp

module.exports = handler
