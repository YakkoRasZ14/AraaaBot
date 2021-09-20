let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Tsel [081266701766]
├ XL [081949400586]
└────

┌〔 Donasi • Emoney 〕
├ GOPAY, Dana [081266701766]
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
