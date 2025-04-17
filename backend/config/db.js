const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect(
            "mongodb+srv://MJdb:tQxWPxPUjIQUimYl@mjcluster.dpw9yvq.mongodb.net/?retryWrites=true&w=majority&appName=MJCluster"
        );
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
