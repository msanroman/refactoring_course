function CodeBreakerEM() {

	var PERFECT_MATCH_SYMBOL = "*";
	var PARTIAL_MATCH_SYMBOL = '-';


	this.check = function(guessCode, code) {
		var perfectMatches = this.checkForPerfectMatches(guessCode, code);
		var partialMatches = this.checkForPartialMatches(guessCode, code);
		partialMatches = removeMixedMatches(partialMatches, perfectMatches);
		return partialMatches + perfectMatches;
	};

	this.removeMixedMatches = function(partialMatches, perfectMatches) {
		var numberOfPartialMatches = partialMatches.length;
		var numberOfPerfectMatches = perfectMatches.length;
		var numberOfMixedMatches = numberOfPartialMatches - numberOfPerfectMatches;
		return partialMatches.substring(0, numberOfMixedMatches);
	};

	this.checkForPerfectMatches = function(guessCode, code) {
		var perfectMatches = "";
		for(var index in guessCode) {
			var codeLetter = code[index];
			var guessCodeLetter = guessCode[index];
			if(isPerfectMatch(guessCodeLetter, codeLetter)) {
				perfectMatches += PERFECT_MATCH_SYMBOL;
			}
		}
		return perfectMatches;
	}

	this.isPerfectMatch = function(guessCodeLetter, codeLetter) {
		return (guessCodeLetter === codeLetter);
	}

	this.checkForPartialMatches = function(guessCode, code) {
		var partialMatches = "";
		for(var index in guessCode) {
			var guessCodeLetter = guessCode[index];
			if(isPartialMatch(code, guessCodeLetter)) {
				partialMatches += PARTIAL_MATCH_SYMBOL;
			}
		}
		return partialMatches;
	}

	this.isPartialMatch = function(code, guessCodeLetter) {
		return (code.indexOf(guessCode[index]) != -1);
	}
}