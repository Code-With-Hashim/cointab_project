const mongoose = require('mongoose')

const connect = mongoose.connect(process.env.MONGO_DB_CONN_URL) // making a connection of database

module.exports = { connect } // send the connection