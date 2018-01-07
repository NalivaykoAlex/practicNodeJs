const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  country: String
})

userSchema.statics.findUserByname = (name, cb) => {           //  вызывается у класса 
  return User.findOne({ name: new RegExp('alex', 'i')}, cb)
}

userSchema.methods.findUsersByCountry = function(cb) {        // вызывается у экземпляра класса
  return this.model('User')
    .where('country', this.country)
    .where('_id').ne(this._id)                        // ne - не равно
    .exec(cb)
  // return this.model('User').find({country:this.country}, cb)
}

const User = mongoose.model('User', userSchema)

module.exports = User