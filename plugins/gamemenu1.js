let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'TEBAK KABUPATEN', description: "PLAY", rowId:".tebakkabupaten"},
        {title: 'ASAH OTAK', description: "PLAY", rowId:".asahotak"},
       {title: 'CAK LONTONG', description: "PLAY", rowId:".caklontong"},
       {title: 'FAMILY 100', description: "PLAY", rowId:".family100"},
       {title: 'SIAPAKAH AKU', description: "PLAY", rowId:".siapakahaku"},
       {title: 'SUSUN KATA', description: "PLAY", rowId:".susunkata"},
       {title: 'TEBAK GAMBAR', description: "PLAY", rowId:".tebakgambar"},
       {title: 'TEBAK KIMIA', description: "PLAY", rowId:".tebakkimia"},
       {title: 'TEBAK LAGU', description: "PLAY", rowId:".tebaklagu"},
       {title: 'TEBAK LIRIK', description: "PLAY", rowId:".tebaklirik"},
       {title: 'TICTACTOE', description: "ROOM 1", rowId:".tictactoe 1"},
       {title: 'TICTACTOE', description: "ROOM 2", rowId:".tictactoe 2"},
       {title: 'TICTACTOE', description: "ROOM 3", rowId:".tictactoe 3"},
       {title: 'MATH', description: "MODE NOOB", rowId:".math noob"},
       {title: 'MATH', description: "MODE EASY", rowId:".math easy"},
       {title: 'MATH', description: "MODE MEDIUM", rowId:".math medium"},
       {title: 'MATH', description: "MODE HARD", rowId:".math hard"},
       {title: 'MATH', description: "MODE EXTREME", rowId:".math extreme"},
       {title: 'MATH', description: "MODE IMPOSSIBLE", rowId:".math impossible"},
       {title: 'MATH', description: "MODE IMPOSSIBLE 2", rowId:".math impossible2"},
       {title: 'DADU', description: "PLAY", rowId:".dadu"},
       {title: 'DICE', description: "PLAY", rowId:".dice"},
{title: 'SLOT', description: "PLAY", rowId:".slot MASUKAN QUERY!!"},
    ]
    
    const sections = [{title: "Jangan Lupa Donasi Ya Kack", rows: rows}]
    const button = {
        buttonText: 'GAME MENU',
        description: "Nih Kak Game Nya Silahkan Di Pilih",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['gamemenu'] 
handler.tags = ['game']
handler.command = /^gamemenu$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
