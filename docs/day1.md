<h3 style="text-align:center;font-weight: 300;" align="center">
  <img src="/img/mongodb.png" width="150px">
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/downloads-0k-yellow.svg?style=flat-square">
  <img src="https://img.shields.io/badge/build-passing-yellow.svg?style=flat-square">
</p>

<br>
<br>

#### Day 1: Mongo CRUD: Mongoose Model

<br>

![](/img/mongoCRUD_projectStructure.PNG)

🍉 `test_helper.js`: Set up Mongoose
```js
// This is basically include, save the module to a const, then we can access its API.
const mongoose = require('mongoose');

//Tell Mongoose to connect to our MongoDB, and to DB "users_test"
mongoose.connect('mongodb://localhost/users_test');

//Once and On are both event handler, are here to test if mongo run smoothly
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
```


## License

🌱 MIT 🌱

---

> ![home](http://yuzhoujr.com/emoji/home.svg) [yuzhoujr.com](http://www.yuzhoujr.com) &nbsp;&middot;&nbsp;
> ![github](http://yuzhoujr.com/emoji/github.svg)  [@yuzhoujr](https://github.com/yuzhoujr) &nbsp;&middot;&nbsp;
> ![linkedin](http://yuzhoujr.com/emoji/linkedin.svg)  [@yuzhoujr](https://linkedin.com/in/yuzhoujr)
