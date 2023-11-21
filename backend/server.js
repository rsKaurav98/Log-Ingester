
const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("../config/database");


//Config

dotenv.config({path:"../config/config.env"});

//Connecting to Database 
connectDatabase();

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`)
})