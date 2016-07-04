console.log("You can't use svn-npm-crutch programmatically!");
// module.exports = function () {
	console.log("You can't use svn-npm-crutch programmatically!");

	try {
		var fs = require('fs');
		var result = fs.accessSync("package2.json", fs.R_OK | fs.W_OK);
		console.log('FOUND',result);
    } catch (e) {
		//error
		console.log('Error: ' + e);
    }
// };
