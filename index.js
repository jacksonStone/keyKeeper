const fs = require('fs');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
let keys = {};

if(!devMode) {
	keys = process.env;
} else {
	let env = {};
	try {
		env = JSON.parse(
		fs.readFileSync(
			path.join(
				path.dirname(require.main.filename), '.env')
			)
		);
	} catch(e){

	}
	keys = env;
}

function verify(req) {
	const requestKey = req.headers['jasapi'];
	return requestKey === keys.mykey;
}


exports.keys = keys;
exports.devMode = devMode;
exports.verify = verify;