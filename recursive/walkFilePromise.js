var fs = require('fs');
var q = require('q');	

function stat(file) {
	var defer = q.defer();
	fs.stat(file, function(err, stats) {
		if (err) {
			return defer.reject(err);	
		}	else {
			return defer.resolve(stats);	
		}
	});
	defer.promise;
}

function readdir(dir) {
	var defer = q.defer();
	fs.readdir(dir, function(err, list) {
		if (err) {
			defer.reject();	
		}	else {
			defer.resolve(list);	
		}
	});
	return defer.promise;
}

function walk(dir) {
	return readdir(dir).then(function(list) {
			return q.all(list.map(function(file) {
				file = dir + '/' + file;
				console.log(file);
				return stat(file).then(function(stats) {
					if (stats.isDirectory()) {
						return walk(file);	
					}	else {
						return file;	
					}
				});	
			}));
		});
}


walk('/home/quan/code').then(function(result) {
	console.log(result.length);
});
