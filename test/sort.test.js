const divide = require('../index');
const chai = require('chai');
const expect = chai.expect;
//const expect = require('chai').expect;

describe('Sort function', () => {
      it('should sort integers in ascending order', () => {
        //define inputs
        const nums = [10, 1, 5, 9, 6, 2];
        const expectedAnswer = [1, 2, 5, 6, 9, 10];

        const fn = () => {
            sort(nums);
        }

        expect(nums).to.deep.equal(expectedAnswer);
      });

      it('should start with num 1', () => {
        //define inputs
        const nums = [10, 1, 5, 9, 6, 2];
        const expectedSort = [1, 2, 5, 6, 9, 10];
        const expectedAnswer = expectedSort[0];
        let testAnswer;

        const fn = () => {
            sort(nums);
            //testAnswer = nums[0];
        }

        expect(testAnswer).to.equal(expectedAnswer);
      });


});

