const mongoose = require("mongoose");

const URI = process.env.MONGO_LOCAL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`Successfully connected to DB: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error at connecting to DB : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
