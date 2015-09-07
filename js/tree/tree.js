function TNode(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.count = 1;
}

TNode.prototype.show = function() {
	return this.data;
};

function BST() {
	this.root = null;
}

BST.prototype.insert = function(data) {
	var n = new TNode(data, null, null);
	if (!this.root) {
		this.root = n;	
	} else {
			var current = this.root;	
			var parent;
			while (true) {
				parent = current;	
				if (data < current.data) {
					current = current.left;	
					if (!current) {
						parent.left = n;	
						break;
					}
				} else if(data > current.data){
					current = current.right;	
					if (!current) {
						parent.right = n;	
						break;
					}
				} else {
					this.update(data);	
					break;
				}
			}
	}
};

BST.prototype.inOrder = function(node) {
	if (node) {
		this.inOrder(node.left);	
		console.log('inOrder', node.show());
		this.inOrder(node.right);
	}
};

BST.prototype.preOrder = function(node) {
	if (node) {
		console.log('preOrder', node.show());	
		this.preOrder(node.left);
		this.preOrder(node.right);
	}
};

BST.prototype.postOrder = function(node) {
	if (node) {
		this.postOrder(node.left);	
		this.postOrder(node.right);
		console.log('postOrder', node.show());
	}
};

BST.prototype.getMin = function() {
	var currentNode = this.root;
	while(currentNode.left) {
		currentNode = currentNode.left;	
	}
	return currentNode.data;
};

BST.prototype.getMax = function() {
	var currentNode = this.root;
	while(currentNode.right) {
		currentNode = currentNode.right;	
	}
	return currentNode.data;
};

BST.prototype.find = function(data) {
	var currentNode = this.root;
	while(currentNode) {
		if (currentNode.data === data) {
			return currentNode;	
		} else if (currentNode.data > data) {
			currentNode = currentNode.left;	
		} else {
			currentNode = currentNode.right;	
		}
	}
	return null;
};

BST.prototype.update = function(data) {
	var current = this.find(data);
	current.count++;
	return current;
};

BST.prototype.remove = function(data) {

};
