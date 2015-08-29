function recursive(num) {
	var s = [];
	while(num > 1) {
		s.push(num--);	
	}
	var result = 1;
	while(s.length) {
		result *= s.pop();	
	}
	return result;
}
