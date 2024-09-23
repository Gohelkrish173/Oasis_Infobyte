const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema= mongoose.Schema({
  UserName : String ,
  Password : String ,
  Email : String
});

schema.pre('save',async function (next){
  const user = this;

  if(user.isModified('Password')){
    user.Password = await bcrypt.hash(user.Password,10);
  }

  next();
});

module.exports = mongoose.model('Resistor',schema,"Registration_Details");