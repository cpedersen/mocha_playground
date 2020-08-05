const divide = require('../index');
const chai = require('chai');
const expect = chai.expect;
//const expect = require('chai').expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        // define inputs
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;
      
        // invoke the function
        const actualAnswer = divide(a, b);
      
        // assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
      });

      it('should throw an error when divided by zero', () => {
        // define inputs
        const a = 8, b = 0;
      
        // set up the function call
        const fn = () => {
          divide(a, b)
        };
      
        // assert that exception is thrown
        expect(fn).to.throw();
      });

      it('should divide negative integers correctly', () => {
        // define inputs
        const a = -8;
        const b = -4;
        const expectedAnswer = 2;
      
        // invoke the function
        const actualAnswer = divide(a, b);
      
        // assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
      });

      it('should divide floating point numbers correctly', () => {
        // define inputs
        const a = 8.0;
        const b = 4.0;
        const expectedAnswer = 2;
      
        // invoke the function
        const actualAnswer = divide(a, b);
      
        // assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
      });
});

