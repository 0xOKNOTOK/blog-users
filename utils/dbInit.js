const mongoose = require('mongoose')
const {
  MONGO_URI
} = require('./config')

const newDatabaseConnection = async () => {
  const connect = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(`Connection to database established at
    ${connect.connection.host}`)
}

module.exports = newDatabaseConnection;