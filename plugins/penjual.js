let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'CEK PENJUAL', description: "V1", rowId:".pj1"},
       {title: 'CEK PENJUAL', description: "EMAIL EDU", rowId:".pj2"},
    ]
    
    const sections = [{title: "Silahkan dipilih", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "YakkoXCode•Store",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['penjual'] 
handler.tags = ['store']
handler.command = /^penjual$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
