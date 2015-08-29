describe('stack', function() {
	it('num convert', function() {
		expect(mulBase(64, 2)).toBe('1000000');	
	});

	it('palindrome', function() {
		expect(isPalindrome('abba')).toBeTruthy();	
		expect(isPalindrome('word')).toBeFalsy();
	});

	it('recursive', function() {
		expect(recursive(5)).toBe(120);	
	});
});
