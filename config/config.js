const mongoose = require('mongoose')
require('colors')

//conectDb 
const connectDB = async()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI) ;
       console.log(`MongoDb Connected `.bgYellow.black);
    } catch (error) {
        console.log(`ERROR: ${error.message}`.bgRed)
        process.exit(1)
        
    }
};
module.exports = connectDB;
