const chai = require('chai');
const assert = chai.assert;
const allFunctions = require('../vowelTest/letter_functions');
const must_be_string = allFunctions.must_be_string;


describe ("must_be_string ", ()=>{

    it("Deve ser uma String", ()=>{
        assert.typeOf(must_be_string, 'string');
    })
});