const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/***
建立|测试 Mongoose和DB：
1. 告诉Mocha，等待Mongoose和MongoDB的关系建立
2. Mongoose初始化，链接MongoDb
3. 测试链接
***/
before(function(){
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', function() {
      console.log('DB connected!')
    })
    .on('error', function(error) {
      console.warn('Warning', error);
    });
});

/***
测试前清理DB
1. 清理目前DB数据
2. done()在这里提示mocha : 可以跑下一次test了!
  - 不然的话，async性质的Node会直接忽略callback，然后先run test
***/
beforeEach(function(done) {
  mongoose.connection.collections.users.drop(function() {
    done();
  });
});
