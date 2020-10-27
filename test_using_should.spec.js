const chai = require('chai');
const allFunctions = require('../vowelTest/letter_functions');
const three_params = allFunctions.three_params;
chai.should();


describe('test_more_than_3_letters', ()=>{

    it("O teste deve passar se a função tiver mais de 3 parâmetros", ()=>{
        three_params.should.have.lengthOf(3)
    } );
});