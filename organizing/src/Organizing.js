function Probe() {

	this.fixed = false;

	this.doMaintenance = function() {
		this.doComplicatedThings();
		this.moreMagic();
		this.fix()
	};

	this.doComplicatedThings = function() {};
	this.moreMagic = function() {};
	this.needsMaintenance = function() {
		return !this.isFixed();
	};
	this.setFixed = function(fixedState) {
		this.fixed = fixedState;
	};
	this.isFixed = function() {
		return this.fixed;
	};
	this.fix = function() {
		this.setFixed(true);
	};
	this.break = function() {
		this.setFixed(false);
	};
};


function Letter(letter) {
	this.letter = letter;

	this.toCaps = function() {
		return this.letter.toUpperCase();
	};

	this.toLower = function() {
		return this.letter.toLowerCase();
	};


};

Letter.pool = [];

Letter.obtain = function(letter) {
	theLetter = this.pool[letter];
	if(!theLetter) {
		aLetter = new Letter(letter);
		this.pool[letter]=aLetter;
	}
	return new Letter(letter);
};

function Alphabet() {

	this.giveMeAn = function(letter) {
		return Letter.obtain(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};