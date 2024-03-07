const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION)
    console.log(`MongoDB Connected: ${conn.connection.host}`)

  } catch (error) {
    console.log("Error connecting to DB : ", error)
    process.exit(1)
  }
}

module.exports = connectDB