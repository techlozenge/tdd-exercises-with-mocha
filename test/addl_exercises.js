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

    context('When sent an array of numbers [8, 3, 5, 1, 9, 10]', function() {
         it('secondHighest returns the 2nd highest value in the array, 9', function() {
            var res = addlExercises.secondHighest( [8, 3, 5, 1, 9, 10] );
            expect(res).to.equal(9);
        });
    });

    context('When sent an array of numbers [8, 8, 8, 8, 8, 8]', function() {
         it('secondHighest returns the 2nd highest value in the array, 8', function() {
            var res = addlExercises.secondHighest( [8, 8, 8, 8, 8, 8] );
            expect(res).to.equal(8);
        });
    });

    context('When sent an empty array []', function() {
         it('secondHighest returns -1 for failure', function() {
            var res = addlExercises.secondHighest([]);
            expect(res).to.equal(-1);
        });
    });

    context('When sent a string of values that contains a vowel', function() {
         it('containsVowel returns true if the string contains a vowel', function() {
            var str = "Ds ths strng cntan ny vwls?";
            var res = addlExercises.containsVowel(str);
            expect(res).to.equal(true);
        });
    });

    context('When sent a string of values that does NOT contain a vowel', function() {
         it('containsVowel returns false', function() {
            var str = "Ds ths strng cntn ny vwls?";
            var res = addlExercises.containsVowel(str);
            expect(res).to.equal(false);
        });
    });

    context('When sent an empty string', function() {
         it('containsVowel returns -1', function() {
            var str = "";
            var res = addlExercises.containsVowel(str);
            expect(res).to.equal(-1);
        });
    });

    // Come now good day
    // [ 'Come', 'now', 'good', 'day' ]
    // omeCay ownay oodgay ayday
    context('When sent a string of values', function() {
         it('pigLatin returns the string in pig latin format', function() {
            var str = "Come now good day";
            var res = addlExercises.pigLatin(str);
            expect(res).to.equal("omeCay ownay oodgay ayday");
        });
    });

    context('When sent an empty string', function() {
         it('pigLatin returns -1', function() {
            var str = "";
            var res = addlExercises.pigLatin(str);
            expect(res).to.equal(-1);
        });
    });

    context('When sent a string of values', function() {
         it('longestWord returns the longest word in the string', function() {
            var str = "now is the time for all good men to come to the aid of their country";
            var res = addlExercises.longestWord(str);
            expect(res).to.equal("country");
        });
    });

    context('When sent an empty string', function() {
         it('longestWord returns -1', function() {
            var str = "";
            var res = addlExercises.longestWord(str);
            expect(res).to.equal(-1);
        });
    });

}); // ends describe highestMountain
