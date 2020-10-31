const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: String
  },
  password: String,
  phone: Number,
  address: [{
    location: String,
    pincode: Number,
    city: String,
    state: String,
  }],
  userImage: String
})

const User = mongoose.model('User', userSchema);
module.exports = User;