function DNI(aDNI) {

    this.CORRECT_DNI_LETTER = 'a';
    this.INVALID_DNI_MESSAGE = 'bad DNI'
    this.DNI = '';

    this.validateDNI=function(aDNI){
        var lastCharacterPosition = aDNI.length -1;
        var lastCharacter = aDNI[lastCharacterPosition];
        var correctDNI = lastCharacter === this.CORRECT_DNI_LETTER;
        if (correctDNI)
            return true
        else throw this.INVALID_DNI_MESSAGE;
    };


    this.toString = function() {
        return this.DNI;
    };

    this.validateDNI(aDNI);
    this.DNI=aDNI;
}

function Persona() {
    this.name='';
    this.weight='';
    this.height='';
    this.work='';
    this.bloodType=''
    this.DNI='';

    this.setDNI = function(aDNI) {
        this.DNI = new DNI(aDNI);
    };

    this.getDNI = function() {
        return this.DNI.toString();
    };

    this.computeLetter = function(DNI) {
        var lastCharacterPosition = DNI.toString().length -1;
        var letter = DNI.toString().charAt(lastCharacterPosition);
        return letter;
    }

    this.gainWeight=function(someKilos){};

    this.looseWeight=function(someKilos){};

    this.changeWork=function(newWork){};

    this.newMeasure=function(aHeight){};

}