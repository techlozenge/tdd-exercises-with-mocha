var hangmanLite = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;

describe('hangmanLite', function() {

    context('When sent the word "engine" and the letter "e"', function() {
        it('Returns zero or the number of times the letter occurs in the word', function() {
            let word = "engine";
            var res = hangmanLite(word, 'e');
            expect(res).to.equal(2);
        });
    });

    context('When sent the word "mississippi" and the letter "s"', function() {
        it('Returns zero or the number of times the letter occurs in the word', function() {
            let word = "mississippi";
            var res = hangmanLite(word, 's');
            expect(res).to.equal(4);
        });
    });

    context('When sent the word "dipshit" and the letter "i"', function() {
        it('Returns zero or the number of times the letter occurs in the word', function() {
            let word = "dipshit";
            var res = hangmanLite(word, 'i');
            expect(res).to.equal(2);
        });
    });

    context('ERROR CONTEXT When sent the word "hogwash" and the letter "i"', function() {
        it('Should return zero but comparing to 2', function() {
            let word = "hogwash";
            var res = hangmanLite(word, 'i');
            expect(res).to.equal(2);
        });
    });

}); // ends describe highestMountain
