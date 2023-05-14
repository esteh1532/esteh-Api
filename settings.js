const fs = require('fs')

global.creator = 'teh plastik' 
global.apikey = ["esteh"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
