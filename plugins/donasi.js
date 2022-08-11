let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-1007-2756]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
