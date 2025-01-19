const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ensure process.env.MONGO_URI is set in your environment variables
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB URI is missing!');
    }

    // Connecting to MongoDB with mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`); // Logging the successful connection
  } catch (error) {
    // Improved error handling with a descriptive message
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure code
  }
};

module.exports = connectDB;
