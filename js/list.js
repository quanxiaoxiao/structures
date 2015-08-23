function List () {
	this._listSize = 0;
	this.dataStore = [];
	this._pos = 0;
}

List.prototype.append = function(elem) {
	this.dataStore[this._listSize ++] = elem;
};

List.prototype.clear = function() {
	delete this.dataStore;
	this.dataStore = [];
	this._pos = this._listSize = 0;
};

List.prototype.remove = function(elem) {
	var index = this.find(elem);
	if (index > -1) {
		this.dataStore.splice(index, 1);	
		-- this._listSize;
		return true;
	}
	return false;
};

List.prototype.size = function() {
	return this._listSize;
};

List.prototype.insert = function(elem, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, elem);	
		++ this._listSize;
		return true;
	}
	return false;
};

List.prototype.find = function(elem) {
	var dataStore = this.dataStore;
	for (var i = 0, len = dataStore.length; i < len; i ++) {
		if (dataStore[i] === elem) {
			return i;	
		}	
	}
	return -1;
};

List.prototype.toString = function() {
	return this.dataStore;
};

List.prototype.contains = function(elem) {
	var elemPos = this.find(elem);
	if (elemPos > -1) {
		return true;	
	}
	return false;
};

List.prototype.front = function() {
	this._pos = 0;
};

List.prototype.end = function() {
	var len = this.size();
	if (len !== 0) {
		this._pos = len - 1;
	}
};

List.prototype.prev = function() {
	if (this._pos !== 0) {
		-- this._pos;
	}
};

List.prototype.next = function() {
	if (this._pos < (this.size() - 1)) {
		++ this._pos;	
	}
};

List.prototype.currentPos = function() {
	return this._pos;
};

List.prototype.getElement = function() {
	return this.dataStore[this._pos];
};
