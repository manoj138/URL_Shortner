const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        // In serverless, we don't exit the process. Let the function fail gracefully.
    }
};

module.exports = { connectMongoDB };
