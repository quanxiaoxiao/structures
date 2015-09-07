describe('tree', function() {

	var tree;

	beforeEach(function() {
		tree = new BST();	
	});

	it('insert getMin getMax', function() {
		tree.insert(23);
		expect(tree.root.data).toBe(23);

		tree.insert(46);
		expect(tree.root.right.data).toBe(46);

		tree.insert(3);
		expect(tree.root.left.data).toBe(3);

		tree.insert(99);
		expect(tree.root.right.right.data).toBe(99);

		tree.insert(22);
		expect(tree.root.left.right.data).toBe(22);

		tree.insert(11);
		expect(tree.root.left.right.left.data).toBe(11);

		tree.insert(30);
		expect(tree.root.right.left.data).toBe(30);

		tree.insert(2);
		expect(tree.root.left.left.data).toBe(2);

		tree.insert(5);
		expect(tree.root.left.right.left.left.data).toBe(5);
		//tree.inOrder(tree.root);
		//tree.preOrder(tree.root);
		//tree.postOrder(tree.root);
	});

	it('getMin', function() {
		tree.insert(23);
		tree.insert(46);
		tree.insert(3);
		tree.insert(99);
		tree.insert(22);
		tree.insert(11);
		tree.insert(30);
		tree.insert(2);
		tree.insert(5);
		expect(tree.getMin()).toBe(2);
	});

	it('getMax', function() {
		tree.insert(23);
		tree.insert(46);
		tree.insert(3);
		tree.insert(99);
		tree.insert(22);
		tree.insert(11);
		tree.insert(30);
		tree.insert(2);
		tree.insert(5);
		expect(tree.getMax()).toBe(99);
	});

	it('find', function() {
		tree.insert(23);
		tree.insert(46);
		tree.insert(3);
		tree.insert(99);
		tree.insert(22);
		tree.insert(11);
		tree.insert(30);
		tree.insert(2);
		tree.insert(5);
		expect(tree.find(22).data).toBe(22);
		expect(tree.find(77)).toBeNull();
	});

	it('count', function() {
		tree.insert(23);
		tree.insert(46);
		tree.insert(3);
		tree.insert(99);
		tree.insert(22);
		tree.insert(11);
		tree.insert(11);
		tree.insert(30);
		tree.insert(2);
		tree.insert(5);
		expect(tree.find(22).data).toBe(22);
		expect(tree.find(77)).toBeNull();
		expect(tree.find(11).count).toBe(2);
	});

});
