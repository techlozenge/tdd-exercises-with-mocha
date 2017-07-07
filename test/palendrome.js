var palendrome = require('../palendrome');
var chai = require('chai');
var expect = chai.expect;

describe('palendrome', function() {

    context('When sent a word', function() {
        it('Returns true if the word is a palendrome', function() {
            let word = "madamimadam";
            var res = palendrome(word);
            expect(res).to.equal(true);
        });
    });

    context('When sent a word', function() {
        it('Returns true if the word is a palendrome', function() {
            let word = "racecar";
            var res = palendrome(word);
            expect(res).to.equal(true);
        });
    });

    context('When sent a word', function() {
        it('Returns true if the word is a palendrome', function() {
            let word = "engine";
            var res = palendrome(word);
            expect(res).to.equal(true);
        });
    });

}); // ends describe highestMountain
