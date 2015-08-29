function isPalindrome(word) {
	var s = [];
	for (var i = 0, ii = word.length; i < ii; i++) {
		s.push(word[i]);	
	}
	var rword = '';
	while(s.length) {
		rword += s.pop();	
	}

	return word === rword;
}
