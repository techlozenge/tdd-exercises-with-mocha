var cherokeeHare = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

// let startingPopulation = 100; // beginning population
// let birthRate = 1.25;         // percentage of growth
// let numberOfWeeks = 4;        // duration
// Week 1: 125.00
// Week 2: 156.25
// Week 3: 195.31
// Week 4: 244.14

describe('cherokeeHare', function() {

    context('Given a startingPopulation of 100, birthRate of 1.25, and numberOfWeeks of 4', function() {
        it('Returns an array showing weekly growth', function() {
            var startingPopulation = 100; // beginning population
            var birthRate = 1.25;         // percentage of growth
            var numberOfWeeks = 4;        // duration
            var res = cherokeeHare(startingPopulation, birthRate, numberOfWeeks);
            expect(res).to.deep.equal( ['125.00', '156.25', '195.31', '244.14'] );
        });
    });

    context('TEST INCORRECT RESULT: Given a startingPopulation, birthRate, and numberOfWeeks', function() {
        it('Returns an array showing weekly growth', function() {
            var startingPopulation = 100; // beginning population
            var birthRate = 1.25;         // percentage of growth
            var numberOfWeeks = 4;        // duration
            var res = cherokeeHare(startingPopulation, birthRate, numberOfWeeks);
            expect(res).to.deep.equal( ['125.00', '156.25', '195.31', '300.25'] );
        });
    });

    context('Given a startingPopulation of 175, birthRate of 1.25, and numberOfWeeks of 6', function() {
        it('Returns an array showing weekly growth', function() {
            var startingPopulation = 175; // beginning population
            var birthRate = 1.25;         // percentage of growth
            var numberOfWeeks = 6;        // duration
            var res = cherokeeHare(startingPopulation, birthRate, numberOfWeeks);
            expect(res).to.deep.equal( ['218.75', '273.44', '341.80', '427.25', '534.06', '667.57'] );
        });
    });

}); // ends describe cherokeeHare
