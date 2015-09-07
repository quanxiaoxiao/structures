function Dictionary() {
	this.dataStore = new Array();
}

Dictionary.prototype.add = function(key, value) {
	this.dataStore[key] = value;
};

Dictionary.prototype.remove = function(key) {
		delete this.dataStore[key];
};

Dictionary.prototype.find = function(key) {
	return this.dataStore[key];
};

Dictionary.prototype.count = function() {
	return Object.keys(this.dataStore).length;
};

Dictionary.prototype.clear = function() {
	var keys = Object.keys(this.dataStore);
	for (var i = 0, ii = keys.length; i < ii; i++) {
		delete this.dataStore[keys[i]];	
	}
};
