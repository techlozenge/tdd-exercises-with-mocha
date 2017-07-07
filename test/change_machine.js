var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

//  change_machine.js:18 index: 0 == 7 $20 bill(s).
//  change_machine.js:18 index: 1 == 0 $10 bill(s).
//  change_machine.js:18 index: 2 == 1 $5 bill(s).
//  change_machine.js:18 index: 3 == 2 $1 bill(s).
//  [7, 0, 1, 2]
describe('changeMachine', function() {

    context('Correct Mode: When sent an amount of $147', function() {
        it('Returns correct count of change in an array of bills e.g. number of 20s, 10s, 5s, and 1s', function() {
            var amt = 147;
            var res = changeMachine(amt);
            expect(res).to.deep.equal( [7, 0, 1, 2] );
        });
    });

    context('Incorrect Mode: When sent an amount of $147', function() {
        it('Returns correct count of change in an array of bills e.g. number of 20s, 10s, 5s, and 1s', function() {
            var amt = 147;
            var res = changeMachine(amt);
            // this is incorrect to test failure
            expect(res).to.deep.equal( [7, 7, 0, 1] );
        });
    });

    context('Correct Mode: When sent an amount of $50', function() {
        it('Returns correct count of change in an array of bills e.g. number of 20s, 10s, 5s, and 1s', function() {
            var amt = 50;
            var res = changeMachine(amt);
            expect(res).to.deep.equal( [2, 1, 0, 0] );
        });
    });

}); // ends describe changeMachine
