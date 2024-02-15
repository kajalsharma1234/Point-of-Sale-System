const mongoose = require('mongoose');
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const ItemModel = require("./models/ItemModel");
const items = require("./utils/data");
require('colors');


//config

dotenv.config()
connectDB()

const importData = async()=>{
    try {
       await ItemModel.deleteMany()
       const itemsData= await ItemModel.insertMany(items) 
       console.log("All Items Added".bgGreen)
       process.exit(1)
    } catch (error) {
        console.log("error")
        process.exit(1)
        
    }
};
importData();