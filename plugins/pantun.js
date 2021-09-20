let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.sendButton(m.chat, `“${pickRandom(global.pantun)}”`, '', 'pantun', `${usedPrefix + command}`)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
"Kemarin aku habis dilempar batu\nternyata yang nglembar batu itu ikan hiu\nSebenarnya aku ingin katakan sesuatu\nyaitu I love you",
"Waktu daftar hari terakhir,\nWaktu terasa banyak terbuang.\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang.",
"Api kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you.",
"Ayam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu.",
"Jalanan lagi lancar,\nitu adalah sebuah berkah.\nAku bukan nyari pacar,\ntapi nyari yang mau diajak nikah.",
"Minum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.",
"Bagaimana memanjat pohon randu?\nTangan di atas kaki ke hulu.\nBagaimana hati tak rindu?\nPacarnya lembut suka melucu.",
"Paling banyak burung gelatik,\ndi atas terbang melayang\nMemang banyak wanita cantik,\ncuma engkau yang aku sayang.",
"Seribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.",
"Ayahku seorang petani\nPunya sawah punya ladang\nMari belajar hari ini\nAgar masa depan lebih gemilang",
"Pergi memancing saat fajar\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian",
"Cepat bergegas untuk bertemu\nBertemu sambil membawa gulali\nKaya harta miskin ilmu\nTentulah merugi sama sekali",
"Ada anak kecil bermain batu\nBatu dilempar masuk ke sumur\nBelajar itu tak kenal waktu\nJuga tidak memandang umur",
"Hari minggu pergi ke pasar\nBeli sayur dan juga beras\nTiap hari harus belajar\nPasti akan menjadi cerdas",
"Tanam kacang di pagi hari\nTumbuh enam layu sebatang\nKeburukan orang jangan dicari\nBila kalian sedang puasa",
"Bu Siti jualan bubur\nBubur dicampur buah kelapa\nSelesai sahur langsung tidur\nBangun-bangun sudah berbuka",
"Beli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat",
"Akhir bulan mendapat gaji\nGaji untuk membeli ketupat\nRajin-rajinlah sholat dan mengaji\nJanganlah lupa puasa dan zakat",
"Pergi ke pasar membeli sapu\nTidak sengaja menginjak duri\nJangan lupa sholat lima waktu\nDi sela kegiatan sehari-hari",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
