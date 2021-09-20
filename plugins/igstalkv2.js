const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} yakkoxcode`

  let res = await fetch(global.API('hardianto', '/api/igstalk', { username: args[0] }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', 
`*Username:* ${json.data.username}\n
*Nama:* ${json.data.fullname}\n
*Verified:* ${json.data.is_verified ? 'Ya' : 'Tidak'}\n
*Video Count:* ${json.data.video_count_reel}\n
*Followers:* ${json.data.followers}\n
*Following:* ${json.data.follow}\n
*Bussines:* ${json.data.is_bussines ? 'Ya' : 'Tidak'}\n
*Professional:* ${json.data.is_professional ? 'Ya' : 'Tidak'}\n
*Category:* ${json.data.category}\n
*Bio:* ${json.data.bio}\n\n
http://instagram.com/yakkoxcode`, m, 0, { thumbnail: await (await fetch(json.data.thumbnail)).buffer() })
}
handler.help = ['igstalkv2 <username>']
handler.tags = ['tools']
handler.command = /^(igstalkv2)$/i
handler.limit = true
module.exports = handler
