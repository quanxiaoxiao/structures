describe('list', function() {

	var list;
	beforeEach(function() {
		list = new List();	
	});

	it('append elem', function() {
		list.append('quan');
		expect(list.size()).toBe(1);
		expect(list._listSize).toBe(1);
	});

	it('clear elem', function() {
		list.append('quan');
		expect(list.size()).toBe(1);
		list.clear();	
		expect(list.size()).toBe(0);
	});

	it('find elem', function() {
		list.append('quan');
		expect(list.size()).toBe(1);
		var index = list.find('rice');
		expect(index).toBe(-1);
		index = list.find('quan');
		expect(index).toBe(0);
	});

	it('insert elem', function() {
		var elem1 = 'quan';
		var elem2 = 'rice';
		var elem3 = 'token';
		list.append(elem1);
		list.append(elem2);
		expect(list.size()).toBe(2);
		list.insert(elem3, elem1);
		expect(list.size()).toBe(3);
		expect(list.dataStore[1]).toBe(elem3);
	});

	it('contains elem', function() {
		expect(list.contains('quan')).toBeFalsy();
		list.append('quan');	
		expect(list.contains('quan')).toBeTruthy()
	});

	it('elem pos', function() {
		list.append('quan');	
		list.append('rice');	
		list.append('token');	
		list.append('big');	
		list.append('small');	

		expect(list.size()).toBe(5);
		expect(list.getElement()).toBe('quan');

		list.next();
		list.next();
		expect(list.currentPos()).toBe(2);
		expect(list.getElement()).toBe('token');

		list.prev();
		expect(list.currentPos()).toBe(1);
		expect(list.getElement()).toBe('rice');

		list.end();
		expect(list.currentPos()).toBe(4);
		expect(list.getElement()).toBe('small');

		list.next();
		expect(list.currentPos()).toBe(4);

		list.front();
		expect(list.currentPos()).toBe(0);
		
		list.prev();
		expect(list.currentPos()).toBe(0);
	});

});
