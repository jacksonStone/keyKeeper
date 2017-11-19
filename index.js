const fs = require('fs');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const keys = {};

if(!devMode) {
	keys = process.env;
} else {
	let env = JSON.parse(
		fs.readFileSync(
			path.join(
				path.dirname(require.main.filename), '.env')
			)
		);
	keys = env;
}

exports.keys = keys;
exports.devMode = devMode;