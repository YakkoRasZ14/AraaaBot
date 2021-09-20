let handler = function (m) {
  // this.sendContact(m.chat, '6283803284713', 'YakkoXCode', m)
  conn.sendContact(m.chat, '6283803284713', 'YakkoXCode', m)
  m.reply('Nih Kak Reseller V1')
}

handler.command = /^pj1$/i

module.exports = handler
