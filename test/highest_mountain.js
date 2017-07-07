var highestMountain = require('../highest_mountain');
var chai = require('chai');
var expect = chai.expect;

describe('highestMountain', function() {

    context('When sent an array of heights', function() {
        it('Returns correct height of the highest mountain', function() {
            let mountains = [1000, 3000, 2500, 10000, 21000, 2000, 5000, 10500, 4000];
            var res = highestMountain(mountains);
            expect(res).to.equal(21000);
        });
    });

    context('When sent an array of heights', function() {
        it('Returns correct height of the highest mountain', function() {
            let mountains = [1000, 3000, 2500, 10000, 21000, 2000, 5000, 22500, 10500, 4000];
            var res = highestMountain(mountains);
            expect(res).to.equal(22500);
        });
    });

    context('When sent an array of heights', function() {
        it('Returns correct height of the highest mountain', function() {
            let mountains = [1000, 3000, 2500, 10000, 21000, 2000, 5000, 10500, 4000];
            var res = highestMountain(mountains);
            expect(res).to.equal(1000);
        });
    });

}); // ends describe highestMountain
