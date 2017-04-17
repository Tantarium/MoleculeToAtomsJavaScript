
describe("Takes in a molecule as a string and returns a map of the number of  each type of atom.", function() {

    it("H2O should return two hydrogens and one oxygen", function() {
        var formula = 'H2O';
        expect({H: 2, O: 1}).toEqual((parseMolecule(formula)));
    });

    it("Mg(OH)2 should return one magnesium, two oxygens, and two hydrogens", function() {
        var formula = 'Mg(OH)2';
        expect({Mg: 1, O: 2, H: 2}).toEqual((parseMolecule(formula)));
    });

    it("K4[ON(SO3)2]2 should return {K: 4, O: 14, N: 2, S: 4}", function() {
        var formula = 'K4[ON(SO3)2]2';
        expect({K: 4, O: 14, N: 2, S: 4}).toEqual((parseMolecule(formula)));
    });

    it("B2H6 should return {B: 2, H: 6}", function() {
        var formula = 'B2H6';
        expect({B: 2, H: 6}).toEqual((parseMolecule(formula)));
    });

    it("C6H12O6 should return {C:6, H: 12, O: 6}", function() {
        var formula = 'C6H12O6';
        expect({C:6, H: 12, O: 6}).toEqual((parseMolecule(formula)));
    });

    it("Mo(CO)6 should return {Mo: 1, C: 6, O: 6}", function() {
        var formula = 'Mo(CO)6';
        expect({Mo: 1, C: 6, O: 6}).toEqual((parseMolecule(formula)));
    });

    it("Fe(C5H5)2 should return {Fe: 1, C: 10, H: 10}", function() {
        var formula = 'Fe(C5H5)2';
        expect({Fe: 1, C: 10, H: 10}).toEqual((parseMolecule(formula)));
    });

    it("{[Co(NH3)4(OH)2]3Co}(SO4)3 should return {Co: 4, N:12, H: 42, O: 18, S: 3}", function() {
        var formula = '{[Co(NH3)4(OH)2]3Co}(SO4)3';
        expect({Co: 4, N:12, H: 42, O: 18, S: 3}).toEqual((parseMolecule(formula)));
    });

    it("(C5H5)Fe(CO)2CH3 should return {C: 8, H: 8, Fe: 1, O: 2}", function() {
        var formula = '(C5H5)Fe(CO)2CH3';
        expect({C: 8, H: 8, Fe: 1, O: 2}).toEqual((parseMolecule(formula)));
    });

    it("Pd[P(C6H5)3]4 should return {Pd: 1, P: 4, C: 72, H: 60}", function() {
        var formula = 'Pd[P(C6H5)3]4';
        expect({Pd: 1, P: 4, C: 72, H: 60}).toEqual((parseMolecule(formula)));
    });

    it("As2{Be4C5[BCo3(CO2)3]2}4Cu5 should return {As: 2, Be: 16, C: 44, B: 8, Co: 24, O: 48, Cu: 5}", function() {
        var formula = 'As2{Be4C5[BCo3(CO2)3]2}4Cu5';
        expect({As: 2, Be: 16, C: 44, B: 8, Co: 24, O: 48, Cu: 5}).toEqual((parseMolecule(formula)));
    });

});