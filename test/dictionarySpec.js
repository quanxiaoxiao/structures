describe('dictionary', function() {
	var dictionary;
	beforeEach(function() {
		dictionary = new Dictionary();	
	});

	it('count clear', function() {
		expect(dictionary.count()).toBe(0);
		dictionary.add('quan', 1111);
		dictionary.add('rice', 2222);
		expect(dictionary.count()).toBe(2);

		dictionary.clear();
		expect(dictionary.count()).toBe(0);
	});
});
