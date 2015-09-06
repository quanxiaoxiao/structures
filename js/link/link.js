function Node (elem, name) {
	this.elem = elem;
	this.next = null;
}

function Link() {
	this.head = new Node('head');
}

Link.prototype.find = function(item) {
	var currNode = this.head;
	while(currNode.elem !== item) {
		currNode = currNode.next;	
	}
	return currNode;
}

Link.prototype.insert = function(newElem, item) {
	var newNode = new Node(newElem);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
};

Link.prototype.findPrevious = function(item) {
	var currNode = this.head;
	while(currNode.next && currNode.next.elem !== item) {
		currNode = currNode.next;	
	}
	return currNode;
};

Link.prototype.remove = function(item) {
	var prevNode = this.findPrevious(item);
	if (prevNode.next) {
		prevNode.next = prevNode.next.next;	
	}
};
