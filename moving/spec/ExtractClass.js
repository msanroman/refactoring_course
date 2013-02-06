describe("Persona", function() {

  var persona;

  beforeEach(function() {
    persona = new Persona();
  });

  it(" has dni", function() {
    expect(function(){persona.setDNI('29172168a');}).not.toThrow();
    expect(function(){persona.setDNI('29172168b');}).toThrow();
    expect(persona.getDNI()).toEqual('29172168a');
  });

 
});