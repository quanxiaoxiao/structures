function Queue() {
	this.dataStore = [];
}

Queue.prototype.enqueue = function(elem) {
	if (elem.code !== undefined) {
		var priority = elem.code >> 0;	
		if (priority < 0) {
			priority = 0;	
		}
		if (priority >= this.dataStore.length) {
			priority = this.dataStore.length - 1;	
		}
		this.dataStore.splice(priority, 0, elem);
	} else {
		this.dataStore.push(elem);
	} 
};

Queue.prototype.dequeue = function () {
	return this.dataStore.shift();
};

Queue.prototype.front = function () {
	return this.dataStore[0];
};

Queue.prototype.back = function () {
	return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.isEmpty = function () {
	if (this.dataStore.length === 0) {
		return true;	
	} else {
		return false;	
	}
};
