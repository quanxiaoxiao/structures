describe('queue', function() {

	function Patien(name, code) {
		this.name = name;	
		this.code = code;
	}

	var queue;
	beforeEach(function() {
		queue = new Queue();	
	});
	
	it('front back dequeue', function() {
		var p1 = new Patien('quan');
		var p2 = new Patien('rice');

		queue.enqueue(p1);
		queue.enqueue(p2);
		
		expect(queue.front()).toBe(p1);
		expect(queue.back()).toBe(p2);
		expect(queue.dequeue()).toBe(p1);;
		expect(queue.dequeue()).toBe(p2);;
		expect(queue.isEmpty()).toBeTruthy();
	});

	it('priority', function() {
		var p1 = new Patien('quan', 2);
		var p2 = new Patien('rice', 0);
		var p3 = new Patien('token', 1);

		queue.enqueue(p1);
		queue.enqueue(p2);
		queue.enqueue(p3);

		expect(queue.dequeue()).toBe(p2);
		expect(queue.dequeue()).toBe(p3);
		expect(queue.dequeue()).toBe(p1);
		expect(queue.isEmpty()).toBeTruthy();
	});

});
