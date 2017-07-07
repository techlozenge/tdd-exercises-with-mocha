var addlExercises = require('../addl_exercises');
var chai = require('chai');
var expect = chai.expect;

describe('addlExercises', function() {

    context('When sent two numbers', function() {
         it('Sum adds them together and returns the result no decimal and rounded', function() {
            var res = addlExercises.sum(2, 2);
            expect(res).to.equal('4');
        });
    });

    context('When sent 1 number and a non-numeric character', function() {
         it('Sum returns -1 for failure', function() {
            var res = addlExercises.sum(2, 'x');
            expect(res).to.equal(-1);
        });
    });

    context('When sent three numbers', function() {
         it('Avg returns the average of three numbers no decimal and rounded', function() {
            var res = addlExercises.avg(17, 28, 14);
            expect(res).to.equal('20');
        });
    });

    context('When sent two numbers and a non-numeric character', function() {
         it('Avg returns -1 for failure', function() {
            var res = addlExercises.avg(17, 'x', 14);
            expect(res).to.equal(-1);
        });
    });

    context('When sent two numbers, a and b', function() {
         it('greaterThan returns true if a is greater than b', function() {
            var res = addlExercises.greaterThan(31, 29);
            expect(res).to.equal(true);
        });
    });

    context('When sent two numbers, a and b', function() {
         it('greaterThan returns false if a is NOT greater than b', function() {
            var res = addlExercises.greaterThan(29, 31);
            expect(res).to.equal(false);
        });
    });

    context('When sent 1 number and a non-numeric character', function() {
         it('greaterThan returns -1 for failure', function() {
            var res = addlExercises.greaterThan(29, 'x');
            expect(res).to.equal(-1);
        });
    });

}); // ends describe highestMountain
