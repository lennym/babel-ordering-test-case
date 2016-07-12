console.log('This should log first');

const stub = require('sinon').stub();
stub();

module.exports = stub;