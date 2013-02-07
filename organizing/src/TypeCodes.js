function HumanMetabolism() {

	this.complexions = [];

	this.getDailyCalories = function() {
		return this.getComplexion().getDailyCalories();
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = this.complexions[aComplexion];
		if (!this.complexion) {
			this.complexion = Complexions.create(aComplexion);
			this.complexions[aComplexion] = this.complexion;
		}
	};
	this.getComplexion = function() {
		return this.complexion;
	}
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};

FattyComplexion = function(){

	this.getDailyCalories = function() {
		return 1000;
	}
}

SkinnyComplexion = function(){

	this.getDailyCalories = function() {
		return 3000;
	}
}

AthleticComplexion = function(){

	this.getDailyCalories = function() {
		return 2000;
	}
}

MorbidComplexion = function(){

	this.getDailyCalories = function() {
		return 500;
	}
}

Complexions = {
	complexions: [FattyComplexion, SkinnyComplexion, AthleticComplexion, MorbidComplexion],
	create: function(aComplexion) {
		return new this.complexions[aComplexion]();
	}
};