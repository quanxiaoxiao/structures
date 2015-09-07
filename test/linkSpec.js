describe('link', function() {
	var link;
	beforeEach(function() {
		link = new Link();	
	});

	it('insert', function() {
		link.insert('rice', 'head');	
		link.insert('quan', 'rice');
		expect(link.find('rice').next.elem).toBe('quan');

		link.insert('bread', 'rice');
		expect(link.find('rice').next.elem).toBe('bread');

		link.insert('milk', 'quan');
		expect(link.find('quan').next.elem).toBe('milk');
	});

	it('findLast remove', function() {
		link.insert('rice', 'head');	
		link.insert('quan', 'rice');
		link.insert('bread', 'quan');
		expect(link.findLast().elem).toBe('bread');

		link.remove('quan');
		expect(link.find('rice').next.elem).toBe('bread');
	});
});
