function Node (elem) {
	this.elem = elem;
	this.next = null;
	this.previous = null;
}

function Link() {
	this.head = new Node('head');
}

Link.prototype.find = function(elem) {
	var currNode = this.head;
	while(currNode.elem !== elem) {
		currNode = currNode.next;	
	}
	return currNode;
};

Link.prototype.insert = function(newElem, item) {
	var newNode = new Node(newElem);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
};

Link.prototype.findLast = function() {
	var currNode = this.head;
	while(currNode.next) {
		currNode = currNode.next;	
	}
	return currNode;
};

Link.prototype.remove = function(item) {
	var currNode = this.find(item);
	if (currNode.next) {
		currNode.previous.next = currNode.next;	
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
		currNode = null;
	}
};

