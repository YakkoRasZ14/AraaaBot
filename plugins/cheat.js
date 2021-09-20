let fetch = require('node-fetch')

let timeout = 120000
let poin = 35000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/YakkoRasz1/database/master/games/cheat.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkata[id] = [
        await conn.send2Button(m.chat, caption, '© YakkoXCode', 'BANTUAN', '.teka', 'NYERAH', 'nyerah'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkata[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© YakkoXCode', 'TEBAK KATA', '.tebakkata')
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^cheat/i
handler.owner = true
module.exports = handler