const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Login");


const userSchema = new  mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
});

userSchema.plugin(plm);

 module.exports = mongoose.model("user",userSchema);