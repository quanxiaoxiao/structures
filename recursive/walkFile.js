var fs = require('fs');
function walk(dir, done) {
	var result = [];
	fs.readdir(dir, function(err, list) {
		if (err) {
			return done(err);	
		}	
		var i = 0;
		(function next() {
			var file = list[i++];
			if (!file) {
				return done(result);	
			}
			file = dir + '/' + file;
			fs.stat(file, function(err, stat) {
				if (stat.isDirectory()) {
					walk(file, function(arr) {
						result = result.concat(arr);	
						next();
					});	
				} else {
					result.push(file);	
					next();
				}	
			});	
		})();
	});
}

walk('/home/quan/code', function(result) {
	console.log(result.length);
});
