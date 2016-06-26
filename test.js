'use strict';

require('mocha');
var assert = require('assert');
var askWhen = require('./');

describe('ask-when', function() {
  it('should export a function', function() {
    assert.equal(typeof askWhen, 'function');
  });

  it('should export an object', function() {
    assert(askWhen);
    assert.equal(typeof askWhen, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      askWhen();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
