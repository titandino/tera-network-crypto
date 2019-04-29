const fs = require('fs')

for(let file of [
	`${__dirname}/build/Release/tera_crypto_native.node`,
	`${__dirname}/bin/${process.arch}/tera-crypto-native_${process.versions.modules}.node`
])
	if(fs.existsSync(file)) {
		module.exports = require(file)
		return
	}

throw Error(`tera-crypto-native: No build found (arch=${process.arch}, modulesVer=${process.versions.modules})`)
