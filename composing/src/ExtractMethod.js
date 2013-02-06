function CodeBreakerEM() {

	this.check = function(guessCode, code) {
		var perfectMatches = "";
		var partialMatches = "";
		for(var index in guessCode) {
			if(guessCode[index] === code[index]) {
				perfectMatches += "*";
			}
			if(code.indexOf(guessCode[index]) != -1) {
				partialMatches += '-';
			}
		}
		partialMatches = partialMatches.substring(0, (partialMatches.length - perfectMatches.length));
		return partialMatches + perfectMatches;
	};

	


}