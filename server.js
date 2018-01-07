const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers/routes')

const app = express()
routes(app)

const port = 8000
const startServer = () => {
  app.listen(port)
  console.log(`Server in running port ${port}`)
  // console.log(process.env.PRIVATE_KEY)
}

const connectDb = () => {
  mongoose.Promise = require('bluebird')
  mongoose.connect('mongodb://localhost/testmongoose')
  return mongoose.connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)
// const mongoose = require('mongoose')
// mongoose.Promise = require('bluebird')
// const User = require('./models/user')

// mongoose.connect('mongodb://localhost/testmongoose')

// const db = mongoose.connection

// db.on('error', err => {
//   console.log('error connection', err)
// })

// db.once('open', () => {
//   console.log('Mongodb is running')
//   // User.findById('5a4fa9834e09b01a068faf6e',(err, user) => {   // поиск по id
//   //   console.log('result', err, user)
//   // })
//   // const user = new User({ name:'Ivan', country:'Russia'})
//   // user.save()
//   User.findUserByname('alex', (err, user) => {                  // добавление static метод
//     // console.log(err, user)
//     user.findUsersByCountry((err,users) => {              // экземпляр 
//       console.log(err, users)
//     })
//     // User.find({country:user.country}, (err, user) => {
//     //   console.log(err, user)
//     // })
//   })
//   // User.findOne({ name: new RegExp('alex', 'i')}, (err, user) => {    // поиск по регулярке
//   //   console.log(err, user)
//   // })
//   // const user = new User({name:'Alex'})
//   // user.save((err, createdUser) => {
//   //   console.log(err, createdUser)
//   // })
//   // console.log('user',user)
// })