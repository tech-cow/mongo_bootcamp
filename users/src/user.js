const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// DB的规章制定
const UserSchema = new Schema({
  name: String;
});

// 创建Model/Class, Pass in DB的规章制度
const User = mongoose.model('user', UserSchema)

// 当Test File Require 本文件，这个export可以让他们Access刚创建的User Model
module.exports = User;
