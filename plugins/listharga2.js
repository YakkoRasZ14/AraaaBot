let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'STORE', description: "V1", rowId:".storev2"},
        {title: 'STORE', description: "EMAIL EDU", rowId:".storev3"},
        
    ]
    
    const sections = [{title: "Silahkan dipilih", rows: rows}]
    const button = {
        buttonText: 'press this',
        description: "YakkoXCode•Shop",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['store'] 
handler.tags = ['store']
handler.command = /^store$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
