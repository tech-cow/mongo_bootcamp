const assert = require('assert');
const User = require('../src/user');

describe('Creating records', function() {
  /***
  Create Users
  1. 运用Promises确认Save的status，如果Save了，then excuting内置的方程
  2. isNew是一个flag，用来测试新的instance是在Node Stack上(True),还是在Mongo里(False)
  ***/
  it('Saves a user', function(done) {
    const joe = new User({ name: 'Joe'});
    joe.save()
      .then(function(){
        assert(!joe.isNEW);
        done();
      });
  });






});
