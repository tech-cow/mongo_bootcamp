const assert = require('assert');
const User = require('../src/user');

describe('Creating records', function() {
  it('Saves a user', function() {
    // Creating a new user
    const joe = new User({ name: 'Joe'});
    joe.save();

  });
});
