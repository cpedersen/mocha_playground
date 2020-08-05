# Summary
This is a playground area to experiment with using Mocha for integration testing. It was covered as part of the Note Integration Testing section in Thinkful's program.

## How To
* mkdir mocha_playground && cd $_
* npm init -y
* set up test files with appropriate requires
* npm install mocha -D
* edit package.json, adding "test": "mocha"
* npm test
* npm install chai -D
* add chai require in test file: const chai = require('chai');
* set up expect in test file: const expect = chai.expect;