// This is basically include, save the module to a const, then we can access its API.
const mongoose = require('mongoose');

//Tell Mongoose to connect to our MongoDB, and to DB "users_test"
mongoose.connect('mongodb://localhost/users_test');


mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
