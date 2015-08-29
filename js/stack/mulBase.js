function mulBase(num, base) {
	var s = [];
	do {
		s.push(num % base);	
		num = Math.floor(num / base);
	} while(num > 0)

	var result = '';
	while(s.length) {
		result += s.pop();	
	}
	return result;
}

