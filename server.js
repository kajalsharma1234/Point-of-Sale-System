const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');
const dotenv = require('dotenv');

require('colors');
const connectDB = require("./config/config")

dotenv.config()
connectDB();

// reast object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


//routes
app.use('/api/items', require("./routes/itemRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/bills', require("./routes/billRoutes"));
const PORT =  process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`);
})