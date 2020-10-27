const chai = require('chai');
const allFunctions = require('../vowelTest/letter_functions');
const isVowel = letterFunctions.isVowel;
const isConsonant = allFunctions.isConsonant;
const expect = chai.expect;

describe('isVowel()', () => {
    it('Deveria tornar true para a letra a', ()=>{
        expect(isVowel('a')).to.equal(true);
    });

    it('Deveria tornar false para a letra b', ()=>{
        expect(isVowel('b')).to.equal(false);
    });

    it('Deveria tornar true para a letra e', ()=>{
        expect(isVowel('e')).to.equal(true);
    });
    it('Deveria tornar false para a letra z', ()=>{
        expect(isVowel('z')).to.equal(false);
    });
});


describe('isConsonant()', ()=>{
    it('Deveria retornar true para a letra r', () =>{ 
        expect(isConsonant('r')).to.equal(true);
});

    it('Deveria retornar false para a letra e', ()=>{
        expect(isConsonant('e')).to.equal(false);
    })
});