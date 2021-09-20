let handler = async (m, { conn }) => {
    conn.kabupaten = conn.kabupaten ? conn.kabupaten : {}
    let yakko = m.chat
    if (!(yakko in conn.kabupaten)) throw false
    let json = conn.kabupaten[yakko][1]
    let ans = json.title.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.kabupaten[yakko][0])
}
handler.command = /^baka$/i
handler.limit = true
module.exports = handler
